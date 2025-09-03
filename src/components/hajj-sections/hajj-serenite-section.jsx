export function HajjSereniteSection() {
    const benefits = [
        "Augmenter votre chance de réserver la formule de votre choix",
        "Ne pas vivre tout le stress de l'utilisation la plateforme Nusuk, nos techniciens s'occupent de tout à votre place.",
        "Ne rien rater, nous faisons la veille sur Nusuk à votre place (nouveaux vols, nouvelle formule, nouveaux prix, etc.)",
    ]

    const processSteps = [
        "Nous créons un compte NUSUK pour vous, vous n'avez rien à faire",
        "Nous nous occupons de toutes les étapes sur Nusuk en étroite coordination avec vous",
        "Le jour j, laissez nous gérer la réservation finale",
    ]

    const additionalBenefits = [
        "Assistance 24h/24, 7j/7 un conseiller vous répond au téléphone de manière personnalisée",
        "L'inscription à notre série de réunions Zoom privées :",
    ]

    const zoomMeetings = [
        "Semaine 1 : Hajj 2026 mode d'emploi ?",
        "Semaine 2 : Comment choisir votre formule hajj",
        "Semaine 3 : Présentation de Nusuk, comment ça fonctionne ?",
        "Semaine 4 : Présentation de nos formules hajj 2026",
        "Semaine 5 : Questions/Réponses avant réservation finale",
        "Semaine 6 : Préparation à la deuxième phase de réservation sur Nusuk",
    ]

    const premiumBenefits = [
        "Inscription à un stage de 8 séances de formation Hajj en présentiel dans nos locaux animés par des cheikh, accompagnateurs, médecins, imams,...pour une préparation maximale (technique, spirituelle, religieuse, médicale, etc.)",
        "Notre Pack cadeau avec la Valise du hajj et tout ce qu'il vous faut pour un hajj en toute sérénité.",
    ]


    return (
        <section className="p-10 mt-10  bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pour un hajj encore plus en sérénité !</h2>
                    <p className="text-lg text-gray-700">
                        Nous vous recommandons notre option <span className="text-sky-700 font-semibold">Hajj sérénité</span>
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Benefits Section */}
                    <div>
                        <p className="text-gray-700 mb-6">Notre option hajj sérénité : pour ceux qui veulent :</p>
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Comment ça se passe ?</h3>
                        <div className="space-y-4">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Benefits Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Ce n'est pas fini : Avec le pack sérénité, vous avez droit à :
                        </h3>
                        <div className="space-y-4">
                            {additionalBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                </div>
                            ))}

                            {zoomMeetings.map((meeting, index) => (
                                <div key={index} className="ml-9 mt-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
                                            <span className="text-white text-lg font-bold">+</span>
                                        </div>
                                        <p className="text-gray-700">
                                            <span className="font-medium">{meeting.split(" :")[0]} :</span> {meeting.split(" :")[1]}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {premiumBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 mt-6">
                                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
