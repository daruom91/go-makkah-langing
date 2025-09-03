export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
};

class ApiClient {
  constructor() {
    this.baseURL = import.meta.env.VITE_BASE_URL || "";
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
    this.timeout = 10000;
    this.maxRetries = 3;
  }

  setBaseURL(url) {
    this.baseURL = url.replace(/\/$/, "");
  }

  setDefaultHeaders(headers) {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  setTimeout(timeout) {
    this.timeout = timeout;
  }

  setMaxRetries(retries) {
    this.maxRetries = Math.max(0, retries);
  }

  buildURL(url, params) {
    const fullURL = this.baseURL ? `${this.baseURL}${url}` : url;

    if (!params || Object.keys(params).length === 0) {
      return fullURL;
    }

    const urlObj = new URL(fullURL);
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.append(key, String(value));
    });

    return urlObj.toString();
  }

  createTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeoutMs);
    return controller.signal;
  }

  async fetchWithTimeout(url, options, timeoutMs) {
    const timeoutSignal = this.createTimeoutSignal(timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: timeoutSignal,
      });
      return response;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      throw error;
    }
  }

  async retry(operation, maxRetries) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;

        if (attempt === maxRetries) {
          break;
        }

        // Exponential backoff: wait 2^attempt * 100ms
        const delay = Math.pow(2, attempt) * 100;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  async request(url, config = {}) {
    const {
      method = HttpMethod.GET,
      headers = {},
      body,
      params,
      timeout = this.timeout,
      retries = this.maxRetries,
    } = config;

    const fullURL = this.buildURL(url, params);
    const requestHeaders = { ...this.defaultHeaders, ...headers };

    // Don't send Content-Type for GET/HEAD requests without body
    if ((method === HttpMethod.GET || method === HttpMethod.HEAD) && !body) {
      delete requestHeaders["Content-Type"];
    }

    const requestOptions = {
      method,
      headers: requestHeaders,
    };

    if (body !== undefined && body !== null) {
      requestOptions.body = typeof body === "string" ? body : JSON.stringify(body);
    }

    const operation = async () => {
      const response = await this.fetchWithTimeout(fullURL, requestOptions, timeout);

      const apiResponse = {
        data: null,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };

      if (!response.ok) {
        const error = new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        error.status = response.status;
        error.statusText = response.statusText;
        error.response = response;
        throw error;
      }

      // Handle empty responses
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        apiResponse.data = await response.json();
      } else {
        apiResponse.data = await response.text();
      }

      return apiResponse;
    };

    return this.retry(operation, retries);
  }

  // Convenience methods
  async get(url, config) {
    return this.request(url, { ...config, method: HttpMethod.GET });
  }

  async post(url, body, config) {
    return this.request(url, { ...config, method: HttpMethod.POST, body });
  }

  async put(url, body, config) {
    return this.request(url, { ...config, method: HttpMethod.PUT, body });
  }

  async patch(url, body, config) {
    return this.request(url, { ...config, method: HttpMethod.PATCH, body });
  }

  async delete(url, config) {
    return this.request(url, { ...config, method: HttpMethod.DELETE });
  }
}

// Create and export singleton instance
export const apiClient = new ApiClient();

// Backward compatibility - keep the original function for existing code
export const fetchApi = async (method, url, body) => {
  try {
    const response = await apiClient.request(url, { method, body });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
