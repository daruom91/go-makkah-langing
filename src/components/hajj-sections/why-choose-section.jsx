export function WhyChooseSection() {
    const advantages = [
        "Une expérience de plus de 10 ans dans l'organisation de voyages spirituels.",
        "Des partenariats solides et fiables avec des agences saoudiennes agréées.",
        "Un taux de réussite exceptionnel pour les inscriptions Hajj.",
        "Accompagnement humain et spirituel avant, pendant et après le Hajj.",
        "La garantie d'un suivi premium et personnalisé.",
    ]

    return (
        <section className="p-10 bg-white">
            <div >
                <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-12">Pourquoi choisir GO Makkah ?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-gray-300 via-gray-500 to-gray-800 rounded-lg p-6 text-white min-h-[200px] flex items-center justify-center"
                        >
                            <p className="text-center text-sm md:text-base leading-relaxed font-medium">{advantage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
