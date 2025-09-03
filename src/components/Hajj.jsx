import { ContextSection } from "./hajj-sections/context-section";
import { FAQSection } from "./hajj-sections/faq-section";
import { HajjSereniteSection } from "./hajj-sections/hajj-serenite-section";
import { HajjPackagesSection } from "./hajj-sections/package-section";
import { ProcessSection } from "./hajj-sections/process-sections";
import { ServicePackagesSection } from "./hajj-sections/service-package-section";
import { SupportSection } from "./hajj-sections/support-section";
import { WhyChooseSection } from "./hajj-sections/why-choose-section";

function Hajj() {
    return (
        <div>
            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover object-right"
                        src="/reunion.webp"
                        alt="Hajj"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,white_50%,transparent_100%)]"></div>
                </div>
                <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            <span className="text-amber-400">Hajj 2026</span> avec <span className="text-sky-700">GO</span>-<span className="text-red-700">MAKKAH</span>
                        </h1>
                        <p className="mt-4 text-2xl font-bold text-gray-900">
                            Comprendre, choisir et réussir votre pèlerinage ..
                        </p>
                    </div>
                </div>
            </div>
            <ContextSection />
            <ProcessSection />
            <HajjPackagesSection />
            <SupportSection />
            <ServicePackagesSection />
            <WhyChooseSection />
            <HajjSereniteSection />
            <FAQSection />
        </div>
    );
}

export default Hajj;