export function HajjPackagesSection() {
    const packages = [
        {
            title: "Notre formule Hajj VIP",
            description:
                "Profitez d'un hébergement 5★ à Abraj Al Beit ou Jabal Omar, avec transferts en TGV pour un confort optimal. Votre séjour inclut aussi un campement à Minâ (Al Kabch), pour vivre pleinement les rites du Hajj dans les meilleures conditions.",
            highlights: ["hébergement 5★ à Abraj Al Beit", "transferts en TGV", "Al Kabch"],
        },
        {
            title: "Notre formule Hajj COFORT",
            description:
                "Séjournez dans des hôtels 5★ à Jabal Omar, profitez de transferts en TGV rapides et confortables, et vivez les rites du Hajj avec un campement à Minâ, dans la zone d'Al Kabch ou Mouayssem, pour une expérience spirituelle inoubliable",
            highlights: ["hôtels 5★ à Jabal Omar", "transferts en TGV", "d'Al Kabch ou Mouayssem"],
        },
        {
            title: "Notre formule Hajj ECONOMIQUE",
            description:
                "Séjour en hôtels 4 ou 5★ situés à seulement 1-2 km du Haram, avec transferts en TGV ou en bus pour plus de confort. Le programme inclut également un campement à Minâ, dans la zone d'Al Mouayssem, afin de vivre pleinement les rites du Hajj.",
            highlights: [
                "hôtels 4 ou 5★ situés à seulement 1-2 km du Haram",
                "transferts en TGV ou en bus pour plus de confort",
                "d'Al Mouayssem",
            ],
        },
    ]

    return (
        <section className="my-10 px-10">
            <div className="">
                <h2 className="text-3xl font-bold text-sky-700 mb-12 ">
                    Tout savoir sur nos formules Hajj Go-Makkah
                </h2>

                <div className="space-y-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="border-l-4 border-yellow-500 pl-6 py-4 bg-white">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-4">{pkg.title}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {pkg.description.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                                    if (part.startsWith("**") && part.endsWith("**")) {
                                        return <strong key={i}>{part.slice(2, -2)}</strong>
                                    }
                                    return part
                                })}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
