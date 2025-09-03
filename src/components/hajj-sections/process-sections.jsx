export function ProcessSection() {
    const steps = [
        {
            number: 1,
            title: "Choisir l'agence et le type de pack",
            description: "(VIP, confort ou économique).",
        },
        {
            number: 2,
            title: "Créer un compte Nusuk",
            description:
                "soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité)",
        },
        {
            number: 3,
            title: "Découvrir les offres",
            description: "officielles annoncées par les autorités saoudiennes.",
        },
        {
            number: 4,
            title: "Sélectionner votre pack Hajj",
            description: "(nous vous aidons à comparer, décortiquer et vérifier chaque détail).",
        },
        {
            number: 5,
            title: "Alimenter votre portefeuille client",
            description: "(le paiement est bloqué sur Nusuk jusqu'à validation).",
        },
        {
            number: 6,
            title: "Confirmer l'inscription dès l'ouverture",
            description: "une étape cruciale où la rapidité fait toute la différence.",
        },
    ]

    return (
        <section className="my-10 px-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-sky-700  text-balance">
                Comment ça se passe concrètement ?
            </h2>
            <p className="my-10">La procédure se déroule en plusieurs étapes:</p>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center bg-white  rounded-b-4xl ">
                            {/* Gold line above circle */}
                            <div className="w-full h-1 bg-yellow-600 mb-6"></div>

                            {/* Numbered circle */}
                            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-4xl font-bold">{step.number}</span>
                            </div>

                            {/* Step content */}
                            <div className="space-y-3 px-4 pb-4">
                                <h3 className="text-lg font-semibold text-gray-900 leading-tight">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
