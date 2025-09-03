export function SupportSection() {
    const supportServices = [
        {
            text: "Des formations pratiques (en ligne et parfois en présentiel).",
            icon: null,
        },
        {
            text: "Des webinars et réunions d'information pour suivre l'actualité du Hajj.",
            icon: null,
        },
        {
            text: "Un groupe WhatsApp dédié pour rester en contact permanent avec notre équipe.",
            icon: "whatsapp",
        },
        {
            text: "Des réponses personnalisées à toutes vos questions par téléphone, WhatsApp ou email.",
            icon: null,
        },
        {
            text: "Un accompagnement religieux et médical (séminaires avec imams, médecins et experts du Hajj).",
            icon: "medical",
        },
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="">
                <h2 className="text-3xl font-bold text-sky-700 mb-8">
                    L'accompagnement GO Makkah : bien plus qu'une simple inscription
                </h2>

                <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Chez GO Makkah, nous croyons que le Hajj doit se préparer avec autant de rigueur spirituelle que logistique.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        C'est pourquoi nous mettons à votre disposition, gratuitement :
                    </p>

                    <div className="space-y-4 ml-8">
                        {supportServices.map((service, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {service.icon === "whatsapp" && (
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                                        </svg>
                                    </div>
                                )}
                                {service.icon === "medical" && (
                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                )}
                                <p className="text-gray-700 leading-relaxed">{service.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mt-8">
                        Cet accompagnement est inclus pour tous nos inscrits, quelle que soit l'option choisie.
                    </p>
                </div>
            </div>
        </section>
    )
}
