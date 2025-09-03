export function ContextSection() {
    return (
        <section className="my-10 px-10 bg-white">
            <div className="">
                <h2 className="text-2xl lg:text-4xl font-bold text-sky-700 mb-8 text-balance">
                    Le contexte du Hajj aujourd'hui
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg flex flex-wrap items-center">
                        <div>
                            Depuis plusieurs années, l'Arabie Saoudite a mis en place un système centralisé de gestion du Hajj appelé{" "}
                            <strong>Nusuk</strong>.
                        </div>
                        <img src="/layer.png" />
                    </p>

                    <div className="text-lg flex flex-wrap items-center">
                        <div>
                            Toutes les inscriptions et tous les packages Hajj passent par ce portail officiel. Les agences saoudiennes
                            agréées y proposent leurs offres, souvent en partenariat avec des agences françaises de confiance comme{" "}
                            <span className="font-bold ">GO-MAKKAH</span><img src="/logo.png" className="inline-block ml-1" />
                        </div>
                    </div>

                    <p className="text-lg">
                        Notre rôle est de vous aider à naviguer dans ce système complexe, à choisir le pack qui correspond le
                        mieux à vos attentes, et à sécuriser votre inscription dans les meilleures
                    </p>
                </div>
            </div>
        </section>
    )
}
