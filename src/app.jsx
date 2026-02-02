import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronLeft,
    Rocket,
    Database,
    Zap,
    Layout,
    ShieldCheck,
    Settings,
    CheckCircle,
    Play,
    FileText,
    UserCheck,
    Download
} from 'lucide-react';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Données de la présentation
    const slides = [
        {
            id: 'intro',
            title: "Refonte Digitale Axalys",
            subtitle: "(ré)inventons votre présence en ligne.",
            icon: <img src="public/logo-axalys.png" className="w-64 h-auto" alt="Logo Yobart" />,
            content: "Pour Axalys, nous ne proposons pas un simple site web, mais une véritable plateforme de performance industrielle. L'objectif : aligner votre image numérique sur la précision et l'innovation qui font votre renommée."
        },
        {
            id: 'besoin',
            title: "Le Découpage Stratégique",
            subtitle: "Une architecture pensée pour l'utilisateur final.",
            icon: <Layout className="w-16 h-16 text-[#00ade3]" />,
            features: [
                { t: "Homepage Interactive", d: "Un carousel dynamique pilotable pour mettre en avant vos nouveautés et certifications." },
                { t: "Espace Produits & Archive", d: "Navigation fluide avec filtres intelligents pour trouver la bonne pièce en 2 clics." },
                { t: "Fiches Techniques Individuelles", d: "Détails complets, vidéos de démonstration et téléchargement direct de PDF." },
                { t: "Brand Experience (Qui sommes-nous)", d: "Valorisation de votre outil de production, de votre histoire et de votre équipe." },
                { t: "Contact & Lead Gen", d: "Formulaire qualifié pour transformer chaque visite en opportunité commerciale." }
            ]
        },
        {
            id: 'tech',
            title: "La 'Recette' Technique Yobart",
            subtitle: "Vitesse, Sécurité et Liberté éditoriale.",
            icon: <Zap className="w-16 h-16 text-[#f7ab00]" />,
            stack: [
                { name: "Next.js", desc: "Le moteur ultra-performant. Rapidité éclair et SEO optimisé nativement.", icon: <Rocket size={20} className="text-[#e50554]" /> },
                { name: "Airtable", desc: "Votre backoffice agile. Gérez vos produits aussi simplement qu'un tableur.", icon: <Database size={20} className="text-[#00ade3]" /> },
                { name: "n8n", desc: "L'invisible qui connecte tout. Automatisation de vos flux de leads et notifications.", icon: <Settings size={20} className="text-[#009e61]" /> }
            ]
        },
        {
            id: 'mockup',
            title: "Aperçu de votre Futur Site",
            subtitle: "Immersion dans le design Premium Axalys.",
            isMockup: true
        },
        {
            id: 'chiffrage',
            title: "Chiffrage & Engagement",
            subtitle: "Un investissement clair pour un outil de croissance.",
            icon: <ShieldCheck className="w-16 h-16 text-[#009e61]" />,
            pricing: [
                { item: "Stratégie & Architecture UX (Airtable setup)", price: "600€" },
                { item: "Design UI sur-mesure (Mobile First)", price: "800€" },
                { item: "Développement Next.js & Optimisation SEO", price: "1100€" },
                { item: "Automatisations n8n & Tests", price: "500€" },
                { item: "Option : Assistant Intelligent ✨ (IA)", price: "Sur Devis" },
                { item: "Hébergement & Maintenance (An 1)", price: "Offert" }
            ]
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="min-h-screen bg-[#231838] text-white font-sans selection:bg-[#e50554]/30 overflow-hidden">
            {/* Background Decor - Yobart Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e50554]/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ade3]/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>

            {/* Header */}
            <header className="fixed top-0 w-full flex justify-between items-center z-50 bg-[#231838]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-6">
                    <img src="logo-yobart.png" alt="Yobart" className="h-20 w-auto" />
                    <div className="h-6 w-px bg-white/10"></div>
                    <img src="logo-axalys.png" alt="Axalys" className="h-6 w-auto brightness-0 invert opacity-50" />
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 w-10 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#e50554]' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
            </header>

            {/* Content Area */}
            <main className="relative flex items-top justify-center pt-24 min-h-screen mx-auto">
                <div className="max-w-6xl w-full">
                    {slides[currentSlide].isMockup ? (
                        <div className="animate-in fade-in zoom-in duration-700">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold mb-2">
                                    {slides[currentSlide].title}
                                </h2>
                                <p className="text-slate-400 italic">{slides[currentSlide].subtitle}</p>
                            </div>
                            <img
                                src="/intention-design-hp-axalys.webp"
                                alt="Maquette du site Axalys"
                                className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
                            />
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-16 items-center animate-in slide-in-from-right-8 duration-500">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-6xl font-black leading-tight tracking-tighter">
                                        {slides[currentSlide].title}
                                    </h1>
                                    <p className="text-2xl text-[#00ade3] font-medium italic">
                                        {slides[currentSlide].subtitle}
                                    </p>
                                </div>

                                {slides[currentSlide].features && (
                                    <div className="grid gap-3">
                                        {slides[currentSlide].features.map((f, i) => (
                                            <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#e50554]/30 transition-all hover:translate-x-2">
                                                <CheckCircle className="text-[#009e61] shrink-0 mt-1" size={20} />
                                                <div>
                                                    <p className="font-bold text-white leading-none mb-1">{f.t}</p>
                                                    <p className="text-sm text-slate-400 leading-tight">{f.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {slides[currentSlide].stack && (
                                    <div className="flex flex-col gap-4">
                                        {slides[currentSlide].stack.map((s, i) => (
                                            <div key={i} className="flex items-center gap-5 p-5 bg-white/5 rounded-3xl border border-white/10 group">
                                                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">{s.icon}</div>
                                                <div>
                                                    <p className="font-black text-white uppercase tracking-wider text-sm">{s.name}</p>
                                                    <p className="text-sm text-slate-400">{s.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {slides[currentSlide].pricing && (
                                    <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                        <table className="w-full text-left">
                                            <thead className="bg-white/5">
                                                <tr>
                                                    <th className="p-5 text-[#f7ab00] font-bold text-xs uppercase tracking-widest">Phase du projet</th>
                                                    <th className="p-5 text-right text-[#f7ab00] font-bold text-xs uppercase tracking-widest">Investissement</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {slides[currentSlide].pricing.map((p, i) => (
                                                    <tr key={i} className={`hover:bg-white/5 transition-colors ${p.item.includes('Option') ? 'text-[#00ade3] italic' : ''}`}>
                                                        <td className="p-5 text-sm text-slate-300">{p.item}</td>
                                                        <td className="p-5 text-right font-mono font-bold">{p.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot className="bg-[#e50554]/20">
                                                <tr>
                                                    <td className="p-6 font-black text-xl italic uppercase">Total Projet (HT)</td>
                                                    <td className="p-6 text-right font-mono font-bold text-3xl text-[#e50554]">3 000 €</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                )}

                                {slides[currentSlide].content && (
                                    <div className="relative p-10 bg-white/5 rounded-[40px] border-l-8 border-[#e50554] shadow-2xl">
                                        <p className="text-xl text-slate-200 leading-relaxed font-medium">
                                            "{slides[currentSlide].content}"
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Visual Component on the right */}
                            <div className="hidden md:flex justify-center items-center">
                                <div className="relative group">
                                    <div className="absolute -inset-20 bg-gradient-to-tr from-[#e50554]/20 via-[#00ade3]/20 to-[#f7ab00]/20 blur-[100px] rounded-full animate-pulse"></div>
                                    <div className="relative p-16 bg-white/5 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl transform transition-transform duration-700 group-hover:rotate-12">
                                        {slides[currentSlide].id === 'intro' ? (
                                            slides[currentSlide].icon
                                        ) : (
                                            React.cloneElement(slides[currentSlide].icon, { className: "w-48 h-48 opacity-20" })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Navigation Buttons */}
            <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center bg-gradient-to-t from-[#231838] to-transparent">
                <button
                    onClick={prevSlide}
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 group"
                >
                    <ChevronLeft className="group-active:scale-90 transition-transform" />
                </button>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Axalys Refonte • 2026</p>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-[#e50554]' : 'bg-white/10'}`}></div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="px-12 py-5 bg-[#e50554] hover:brightness-110 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-[#e50554]/30 flex items-center gap-3 group"
                >
                    {currentSlide === slides.length - 1 ? "Revoir" : "Suivant"}
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </footer>
        </div>
    );
};



export default App;