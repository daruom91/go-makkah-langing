import './style.css'
export function ServicePackagesSection() {
    const packages = [
        {
            id: "assistance",
            title: "Hajj Assistance GO-Makkah",
            ribbon: {
                text: "Pack Gratuit",
                color: "bg-green-600",
            },
            services: [
                "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
                "Nous vous envoyons nos formules Hajj 2026",
                "Vous créez par vous-même votre compte Nusuk",
                "Vous réservez une de nos formules",
                "Vous nous envoyez votre passeport et la formule confirmée",
            ],
            button: {
                text: "Inscrivez-vous vite !",
                color: "bg-sky-700 hover:bg-sky-800",
            },
        },
        {
            id: "serenite",
            title: "Hajj Sérénité GO-Makkah",
            ribbon: {
                text: "",
                color: "bg-yellow-600",
                icon: true,
            },
            price: "250 euro/personne",
            services: [
                "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
                "Nous créons et gérons pour vous votre compte NUSUK",
                "Nous payons votre hajj pour vous si vous le demander. Vos payez votre hajj chez nous",
                "Nous vous envoyons nos formules Hajj 2026",
                "Nous gérons la réservation de votre hajj jusqu'au bout",
                "Et Vous partez au hajj avec nos équipes accompagnateurs très expérimentés",
            ],
            button: {
                text: "Inscrivez-vous vite !",
                color: "bg-yellow-600 hover:bg-yellow-700",
            },
        },
    ]

    return (
        <section className="py-16 px-4 bg-gray-50">
            <h2 className="text-2xl lg:text-4xl font-bold text-sky-700  text-balance mb-10">
                Deux formule adapté à vos besoins
            </h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className={`relative bg-white rounded-lg border-2 border-gray-200 p-6 `}
                            style={{
                                background: pkg.id === "assistance" ? "white" : "rgb(255 254 248)",
                                border: pkg.id === "assistance" ? "1px solid #0069a8" : "1px solid rgb(208 135 0)",
                            }}>
                            <div className=''>
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    {/* Ribbon */}
                                    <div
                                        className={`absolute -top-0 left-6 ${pkg.ribbon.color} bookmark text-white font-semibold text-sm flex items-center gap-2`}
                                    >
                                        {pkg.ribbon.icon && (
                                            <img src="/diamond.PNG" alt="ribbon" className="w-8 h-8" />
                                        )}
                                        {pkg.ribbon.text}
                                    </div>

                                    {/* Title */}
                                    <div className="mt-25 mb-6">
                                        <h3 className="text-2xl font-bold">
                                            <span className={`${pkg.id === "assistance" ? "text-sky-700" : "text-yellow-600"}`}>Hajj {pkg.id === "assistance" ? "Assistance" : "Sérénité"}</span>{" "}
                                            <span className="text-black">GO-Makkah</span>
                                        </h3>
                                        {pkg.price && (
                                            <p className="text-lg mt-2">
                                                <span className="text-black font-semibold">Option : </span>
                                                <span className="text-yellow-600 font-semibold">{pkg.price}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Services List */}
                                    <div className="space-y-4 mb-8">
                                        {pkg.services.map((service, index) => (
                                            <>
                                                <div key={index} className="flex items-start gap-3">
                                                    <p className="text-gray-800 font-medium leading-relaxed">{service}</p>
                                                </div>
                                                {index < pkg.services.length - 1 && (
                                                    <hr className="w-full border-gray-300" />
                                                )}

                                            </>

                                        ))}
                                    </div>

                                </div>
                                <button
                                    className={`w-full ${pkg.button.color} text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-auto`}
                                    style={{ marginTop: 'auto' }}
                                >
                                    {pkg.button.text}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
