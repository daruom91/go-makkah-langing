
import { useState } from "react"


export function FAQSection() {
    const [openItems, setOpenItems] = useState([])

    const toggleItem = (index) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    const faqItems = [
        {
            question: "Qui peut demander un e-visa touristique pour l'Arabie Saoudite ?",
            answer:
                "Les citoyens de nombreux pays peuvent demander un e-visa touristique pour l'Arabie Saoudite. Consultez la liste officielle des pays éligibles sur le site gouvernemental saoudien.",
        },
        {
            question: "Combien de temps prend l'obtention du e-visa ?",
            answer:
                "L'obtention du e-visa touristique prend généralement entre 24 heures et 7 jours ouvrables, selon le type de demande et la période.",
        },
        {
            question: "Quelle est la durée de validité du visa touristique ?",
            answer:
                "Le visa touristique saoudien est généralement valide pour une durée d'un an à partir de la date d'émission, permettant des séjours multiples.",
        },
        {
            question: "Puis-je faire plusieurs entrées avec le même visa ?",
            answer:
                "Oui, le visa touristique saoudien permet généralement des entrées multiples pendant sa période de validité.",
        },
        {
            question: "Quelles sont les conditions nécessaires pour faire la demande",
            answer:
                "Vous devez avoir un passeport valide, une photo d'identité récente, et remplir le formulaire de demande en ligne avec les informations requises.",
        },
        {
            question: "Je peux visiter La Mecque ou Médine avec un e-visa touristique ?",
            answer:
                "Non, l'accès à La Mecque et Médine nécessite un visa spécial pour le Hajj ou la Omra. Le visa touristique ne permet pas l'accès à ces villes saintes.",
        },
    ]

    const leftColumnItems = faqItems.slice(0, 3)
    const rightColumnItems = faqItems.slice(3, 6)

    return (
        <section className="p-10 mt-10 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className=" mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tout savoir sur notre service Hajj</h2>
                    <p className="text-gray-600 text-lg">
                        Pour plus d'informations consulter notre <span className="text-yellow-600 font-medium">page d'aide</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {leftColumnItems.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                                >
                                    <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItems.includes(index) ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openItems.includes(index) && (
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {rightColumnItems.map((item, index) => {
                            const actualIndex = index + 3
                            return (
                                <div key={actualIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleItem(actualIndex)}
                                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                                    >
                                        <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItems.includes(actualIndex) ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openItems.includes(actualIndex) && (
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                            <p className="text-gray-700">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
