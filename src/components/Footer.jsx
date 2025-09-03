export function Footer() {
    const footerSections = [
        {
            title: "Plan de site",
            links: ["Qui sommes nous", "annuaire_des_hotels", "recherche", "Promotions", "Boutique en ligne"],
        },
        {
            title: "Liens utiles",
            links: ["Qui sommes nous", "annuaire_des_hotels", "recherche", "Promotions", "Boutique en ligne"],
        },
        {
            title: "Hajj - Omra",
            links: ["Qui sommes nous", "annuaire_des_hotels", "recherche", "Promotions", "Boutique en ligne"],
        },
        {
            title: "Informations",
            links: ["Qui sommes nous", "annuaire_des_hotels", "recherche", "Promotions", "Boutique en ligne"],
        },
        {
            title: "Nos agences",
            links: ["Qui sommes nous", "annuaire_des_hotels", "recherche", "Promotions", "Boutique en ligne"],
        },
    ]

    const countries = [
        { name: "GO-MAKKAH France", flag: "fr" },
        { name: "GO-MAKKAH Algerie", flag: "dz" },
        { name: "GO-MAKKAH Maroc", flag: "ma" },
        { name: "GO-MAKKAH Saudi", flag: "sa" },
        { name: "GO-MAKKAH Tunisie", flag: "tn" },
    ]

    return (
        <footer className="bg-sky-700 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Main footer content with five columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {footerSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold">{section.title}</h3>
                            <div className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href="#"
                                        className="block text-white hover:text-blue-200 transition-colors underline text-sm"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Countries section with light background */}
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                        {countries.map((country, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                                <span className="font-medium">{country.name}</span>
                                <span className="text-lg"><img className="w-6" src={`/${country.flag}.JPG`} alt="" /> </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
