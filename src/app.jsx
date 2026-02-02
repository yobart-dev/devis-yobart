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
    Download,
    Printer,
    Sparkles,
    Server,
    X,
    BotIcon
} from 'lucide-react';

const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\D/g, ''), 10) || 0;
};

const COMPANY_INFO = {
    name: "Yoann Barthalay",
    email: "yoann@yobart.com",
    phone: "+33 6 33 17 24 72",
    website: "yobart.com",
    address: "716 CHEMIN DES SOLANS, 13400 AUBAGNE",
    tva: "FR91890265994",
    siret: "89026599400016",
    immatriculation: "RCS Marseille 890 265 994",
    ape: "7022Z"
};

const SLIDES_DATA = [
    {
        id: 'intro',
        title: "Refonte Digitale Axalys",
        subtitle: "(ré)inventons votre présence en ligne.",
        icon: <img src="logo-axalys.png" className="w-32 md:w-48 h-auto" alt="Logo Axalys" />,
        content: "Plus qu’un simple site vitrine, nous concevons pour Axalys une plateforme de haute précision dédiée à votre univers et correspondant à votre image de marque. L’enjeu : propulser vos accessoires sur le devant de la scène numérique avec la même rigueur technique qui fait votre force au quotidien."
    },
    {
        id: 'besoin',
        title: "Le Découpage Stratégique",
        subtitle: "Une architecture pensée pour l'utilisateur final.",
        icon: <Layout className="w-16 h-16 text-[#00ade3]" />,
        features: [
            { t: "Homepage Interactive", d: "Un carousel dynamique pilotable pour mettre en avant vos nouveautés." },
            { t: "Ergonomie & Parcours Client", d: "Parcours utilisateur optimisé pour une navigation intuitive et efficace." },
            { t: "Espace Produits & Archive", d: "Navigation fluide avec filtres intelligents par familles de produits." },
            { t: "Fiches Techniques & Vidéos", d: "Intégration de médias et téléchargement direct de documentations PDF." },
            { t: "Brand Experience", d: "Valorisation de votre outil de production, de votre histoire et de votre équipe." },
            { t: "Contact & Lead Gen", d: "Formulaire qualifié pour un traitement commercial immédiat." },
            { t: "Stratégie SEO Sémantique", d: "Optimisation du contenu pour capter le trafic sur vos mots-clés techniques." },
            { t: "Optimisation GEO (AI Ready)", d: "Structure sémantique conçue pour être citée par les moteurs de recherche IA (ChatGPT, Perplexity...)." }

        ]
    },
    {
        id: 'tech',
        title: "La 'Recette' Technique Yobart",
        subtitle: "Moderne, Rapide et Flexible.",
        icon: <Zap className="w-16 h-16 text-[#f7ab00]" />,
        stack: [
            { name: "Next.js (SSG/ISR)", desc: "Le moteur ultra-performant. Rapidité éclair et mise à jour des pages sans redéploiement.", icon: <Rocket size={20} className="text-[#e50554]" /> },
            { name: "Airtable (Headless CMS)", desc: "Votre backoffice agile. Gestion du catalogue en toute autonomie.", icon: <Database size={20} className="text-[#00ade3]" /> },
            { name: "n8n (Workflow Engine)", desc: "Intelligence connectée pour automatiser vos flux de leads et notifications.", icon: <Settings size={20} className="text-[#009e61]" /> },
            { name: "Optimisation Asset (Edge)", desc: "Gestion optimisée des images et vidéos pour un rendu instantané sur tous les écrans.", icon: <Zap size={20} className="text-[#f7ab00]" /> },
            { name: "Sécurité Serverless", desc: "Architecture sans serveur limitant drastiquement les surfaces d'attaque potentielles.", icon: <ShieldCheck size={20} className="text-[#009e61]" /> },
            { name: "Infrastructure Évolutive", desc: "Une base solide prête à intégrer de nouvelles fonctionnalités et outils.", icon: <Server size={20} className="text-[#e50554]" /> }
        ]
    },
    {
        id: 'mockup',
        title: "Voici à quoi peut ressembler votre nouveau site web",
        subtitle: "Ceci est une simple simulation d'inspiration de votre site web.",
        isMockup: true
    },
    {
        id: 'chiffrage',
        title: "Phasage & Budget",
        subtitle: "Un investissement structuré pour une solution pérenne.",
        icon: <ShieldCheck className="w-16 h-16 text-[#009e61]" />,
        pricing: [
            { item: "Architecture, Découpage & Stratégie Technique", price: "400 €" },
            { item: "Création du Design UI / UX sur-mesure", price: "800 €" },
            { item: "Développement & Intégration Next.js", price: "1 000 €" },
            { item: "Mise en place du Back-office (sur outil tiers Airtable, Notion ou autre)", price: "500 €" },
            { item: "Création du Workflow d'automatisation (n8n)", price: "280 €" },
            { item: "Maintenance Applicative (Offerte 1 an)", promo_price: "0 €", price: "550 €" }
        ],
        extras: [
            { icon: <Server size={20} />, label: "Hébergement & Nom de domaine", value: "Géré par Axalys (validation de la configuration)" },
            { icon: <BotIcon size={20} />, label: "Agent IA", value: "Intégration d'un agent IA pour répondre aux questions des visiteurs" }
        ]
    },
    {
        id: 'contact',
        title: "Envie de construire votre nouveau site web avec yobart ?",
        subtitle: "Discutons de votre projet.",
        buttonText: "Télécharger le devis",
        buttonLink: "/Devis_000039_YOBART_Axalys_site_Web.pdf"
    }
];

const WebLayout = ({ currentSlide, setCurrentSlide, handleExportPdf }) => {
    const slide = SLIDES_DATA[currentSlide];

    const total = slide.pricing ? slide.pricing.reduce((acc, curr) => {
        const price = curr.promo_price ? parsePrice(curr.promo_price) : parsePrice(curr.price);
        return acc + price;
    }, 0) : 0;

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);

    return (
        <div className="min-h-screen bg-[#231838] text-white font-sans selection:bg-[#e50554]/30 overflow-hidden relative">
            {/* Background Decor */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[#e50554]/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-[#00ade3]/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none"></div>

            {/* Header */}
            <header className="fixed top-0 w-full flex justify-between items-center z-50 bg-[#231838]/80 backdrop-blur-md border-b border-white/5 h-20 px-6">
                <div className="flex items-center gap-6">
                    <img src="/logo-yobart.png" alt="Yobart" className="h-16 w-auto" />
                    <div className="h-6 w-px bg-white/10"></div>
                    <span className="text-white font-bold uppercase tracking-wider text-sm hidden md:block">Refonte site web Axalys</span>
                    <img src="logo-axalys.png" alt="Axalys" className="h-6 w-auto brightness-0 invert opacity-50 md:hidden" />
                </div>
            </header>

            {/* Content Area */}
            <main className="relative flex items-start justify-center min-h-screen mx-auto overflow-x-hidden w-full pt-32 px-6 lg:px-0 pb-48">
                <div className="w-full max-w-6xl h-full">
                    <div key={slide.id} className="h-full relative">
                        {slide.id === 'contact' ? (
                            <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center justify-center h-full text-center">
                                <div className="mb-8 p-8 bg-white/5 rounded-full border border-white/10 shadow-2xl backdrop-blur-sm">
                                    <img src="/logo-yobart.png" alt="Yobart" className="h-24 w-auto" />
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-black mb-6 max-w-3xl leading-tight">
                                    {slide.title}
                                </h1>
                                <div className="flex flex-col gap-6 items-center mb-12">
                                    <a
                                        href={slide.buttonLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-[#e50554] hover:bg-[#e50554]/90 text-white rounded-full font-bold text-lg uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                                    >
                                        <Download size={24} />
                                        {slide.buttonText}
                                    </a>
                                    <p className="text-slate-400 italic">ou</p>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="font-bold text-xl">{COMPANY_INFO.name}</p>
                                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#00ade3] hover:underline text-lg">{COMPANY_INFO.email}</a>
                                        <p className="font-mono text-slate-300">{COMPANY_INFO.phone}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-500 font-mono space-y-1">
                                    <p>{COMPANY_INFO.address}</p>
                                    <p>SIRET : {COMPANY_INFO.siret} • TVA : {COMPANY_INFO.tva}</p>
                                    <p>{COMPANY_INFO.immatriculation} • Code APE : {COMPANY_INFO.ape}</p>
                                </div>
                            </div>
                        ) : slide.isMockup ? (
                            <div className="animate-in fade-in zoom-in duration-700 flex flex-col items-center">
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                                    <p className="text-slate-400 italic">{slide.subtitle}</p>
                                </div>
                                <img
                                    src="simu-site-axalys.webp"
                                    alt="Maquette du site Axalys"
                                    className="w-90 h-auto rounded-xl shadow-2xl border border-white/10"
                                />
                            </div>
                        ) : (
                            <div className={`animate-in slide-in-from-right-8 duration-500 ${slide.id === 'intro' ? 'grid lg:grid-cols-2 gap-8 lg:gap-16 items-center' : 'relative'}`}>
                                <div className={`flex flex-col gap-6 ${slide.id === 'intro' ? 'order-2 lg:order-1' : 'w-full relative z-10'}`}>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-3xl lg:text-6xl font-black leading-tight tracking-tighter text-balance break-words w-full">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg lg:text-2xl text-[#00ade3] font-medium italic">
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    {slide.features && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {slide.features.map((f, i) => (
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

                                    {slide.stack && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {slide.stack.map((s, i) => (
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

                                    {slide.pricing && (
                                        <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                            <table className="w-full text-left">
                                                <thead className="bg-white/5">
                                                    <tr>
                                                        <th className="p-3 text-[#f7ab00] font-bold text-xs uppercase tracking-widest">Phase du projet</th>
                                                        <th className="p-3 text-right text-[#f7ab00] font-bold text-xs uppercase tracking-widest">Investissement</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {slide.pricing.map((p, i) => (
                                                        <tr key={i} className={`hover:bg-white/5 transition-colors ${p.item.includes('Option') ? 'text-[#00ade3] italic' : ''}`}>
                                                            <td className="p-3 text-sm text-slate-300">{p.item}</td>
                                                            <td className="p-3 text-right font-mono font-bold">
                                                                {p.promo_price ? (
                                                                    <div className="flex flex-col items-end">
                                                                        <span className="text-xs text-slate-500 line-through decoration-[#e50554]/50">{p.price}</span>
                                                                        <span className="text-[#009e61]">{p.promo_price}</span>
                                                                    </div>
                                                                ) : (
                                                                    p.price
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot className="bg-[#e50554]/20">
                                                    <tr>
                                                        <td className="p-4 font-black text-xl italic uppercase">Total Projet (HT)</td>
                                                        <td className="p-4 text-right font-mono font-bold text-3xl text-[#e50554]">{total.toLocaleString('fr-FR').replace(/\s/g, ' ')} €</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    )}

                                    {slide.extras && (
                                        <div className="mt-6">
                                            <h3 className="font-bold text-[#f7ab00] uppercase tracking-widest text-xs mb-3 pl-1">Extras & infos</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {slide.extras.map((extra, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                                        <div className="p-3 bg-white/5 rounded-full text-[#f7ab00]">{extra.icon}</div>
                                                        <div>
                                                            <p className="font-bold text-sm text-white mb-1">{extra.label}</p>
                                                            <p className="text-xs text-[#00ade3] font-mono">{extra.value}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {slide.content && (
                                        <div className="relative p-10 bg-white/5 rounded-[40px] border-l-8 border-[#e50554] shadow-2xl">
                                            <p className="text-xl text-slate-200 leading-relaxed font-medium">
                                                "{slide.content}"
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Visual Component / Icon */}
                                <div className={`${slide.id === 'intro' ? 'flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0' : 'fixed inset-0 flex items-start justify-end -z-0 pointer-events-none overflow-hidden'}`}>
                                    {slide.id === 'intro' ? (
                                        <div className="relative group">
                                            <div className="absolute -inset-20 bg-gradient-to-tr from-[#e50554]/20 via-[#00ade3]/20 to-[#f7ab00]/20 blur-[100px] rounded-full animate-pulse"></div>
                                            <div className="relative p-8 lg:p-12 bg-white/5 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl transform transition-transform duration-700 group-hover:rotate-12">
                                                {slide.icon}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="opacity-[0.03] transform translate-x-[20%] -translate-y-[10%] mix-blend-overlay">
                                            {React.cloneElement(slide.icon, {
                                                className: "w-[80vw] h-[80vw] lg:w-[60vw] lg:h-[60vw] max-w-none max-h-none text-white"
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main >

            {/* Navigation Footer */}
            < footer className="fixed bottom-0 w-full p-4 flex flex-col items-center gap-4 bg-gradient-to-t from-[#231838] via-[#231838]/95 to-transparent z-50" >
                {/* Dots */}
                < div className="flex gap-2" >
                    {
                        SLIDES_DATA.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#e50554] scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))
                    }
                </div >

                {/* Buttons */}
                < div className="flex items-center gap-8 w-full justify-center max-w-md" >
                    <button onClick={prevSlide} className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 group active:scale-95">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={handleExportPdf}
                        className="px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-2 bg-[#00ade3] hover:brightness-110 text-white shadow-[0_0_20px_rgba(0,173,227,0.3)]"
                    >
                        <Download size={16} />
                        PDF
                    </button>

                    <button onClick={nextSlide} className="p-4 bg-[#e50554] hover:brightness-110 rounded-full transition-all shadow-[0_0_20px_rgba(229,5,84,0.3)] group active:scale-95">
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div >

                {/* Footer Text */}
                < p className="text-[10px] font-light tracking-[0.2em] text-slate-500" >
                    Février 2026 • Yobart Droits réservés
                </p >
            </footer >
        </div >
    );
};

const PrintLayout = () => {
    return (
        <div className="bg-[#231838] text-white font-sans min-w-[210mm] w-[210mm] overflow-visible">
            {SLIDES_DATA.map((slide, index) => {
                const total = slide.pricing ? slide.pricing.reduce((acc, curr) => {
                    const price = curr.promo_price ? parsePrice(curr.promo_price) : parsePrice(curr.price);
                    return acc + price;
                }, 0) : 0;

                return (
                    <div
                        key={slide.id}
                        className={`print-slide w-[210mm] h-[290mm] flex flex-col relative overflow-hidden box-border ${index < SLIDES_DATA.length - 1 ? 'break-after-page page-break-always' : ''}`}
                        style={{ pageBreakAfter: index < SLIDES_DATA.length - 1 ? 'always' : 'auto', pageBreakInside: 'avoid' }}
                    >
                        {/* A4 Header */}
                        <div className="h-[12mm] flex items-center justify-between px-[12mm] border-b border-white/10 shrink-0">
                            <img src="/logo-yobart.png" alt="Yobart" className="h-10 w-auto" />
                            <div className="text-slate-400 text-[9px] font-medium tracking-wide">
                                Refonte Axalys • Slide {index + 1}/{SLIDES_DATA.length}
                            </div>
                        </div>

                        {/* A4 Body - Fluid + Padding */}
                        <div className="flex-1 flex flex-col p-[10mm] overflow-hidden">
                            {slide.id === 'contact' ? (
                                <div className="flex flex-col items-center justify-center h-full text-center pt-10">
                                    <div className="mb-8 scale-150">
                                        <img src="/logo-yobart.png" alt="Yobart" className="h-16 w-auto" />
                                    </div>
                                    <h1 className="text-3xl font-black mb-6 text-balance max-w-lg leading-tight text-white">
                                        {slide.title}
                                    </h1>
                                    <div className="mb-12 p-8 bg-[#e50554]/5 rounded-3xl border border-[#e50554]/20 w-3/4">
                                        <p className="text-[#f7ab00] font-bold uppercase tracking-widest text-xs mb-4">Contact Direct</p>
                                        <div className="flex flex-col gap-3">
                                            <p className="font-bold text-xl text-white">{COMPANY_INFO.name}</p>
                                            <p className="text-[#00ade3] font-medium">{COMPANY_INFO.email}</p>
                                            <p className="font-mono text-slate-300">{COMPANY_INFO.phone}</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto border-t border-white/10 pt-6 w-full max-w-md">
                                        <p className="text-[10px] text-slate-500 font-mono mb-2 uppercase tracking-wide">Informations Légales</p>
                                        <div className="text-[9px] text-slate-600 space-y-0.5">
                                            <p>{COMPANY_INFO.address}</p>
                                            <p>SIRET : {COMPANY_INFO.siret}</p>
                                            <p>TVA : {COMPANY_INFO.tva}</p>
                                            <p>{COMPANY_INFO.immatriculation} • APE : {COMPANY_INFO.ape}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : slide.isMockup ? (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl text-white font-bold mb-2">{slide.title}</h2>
                                        <p className="text-slate-400 italic text-xs">{slide.subtitle}</p>
                                    </div>
                                    <img
                                        src="/mockup-site.png"
                                        alt="Maquette"
                                        className="max-h-[160mm] w-auto max-w-full rounded shadow-lg border border-white/10 object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col h-full">
                                    {/* Title Section */}
                                    <div className="mb-6 border-l-4 border-[#e50554] pl-4">
                                        <h1 className="text-2xl text-white font-black leading-tight mb-1">
                                            {slide.title}
                                        </h1>
                                        <p className="text-sm text-[#00ade3] font-medium italic">
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="flex-1">
                                        {slide.features && (
                                            <div className="grid grid-cols-1 gap-2">
                                                {slide.features.map((f, i) => (
                                                    <div key={i} className="flex gap-3 items-start p-2 border-b border-white/5 last:border-0">
                                                        <div className="text-[#009e61] mt-0.5"><CheckCircle size={14} /></div>
                                                        <div>
                                                            <p className="font-bold text-white text-xs mb-0.5">{f.t}</p>
                                                            <p className="text-[10px] text-slate-400 leading-tight">{f.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {slide.stack && (
                                            <div className="grid grid-cols-1 gap-2">
                                                {slide.stack.map((s, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
                                                        <div className="p-1.5 bg-white/5 rounded text-white">{React.cloneElement(s.icon, { size: 16 })}</div>
                                                        <div>
                                                            <p className="font-bold text-white text-xs uppercase">{s.name}</p>
                                                            <p className="text-[10px] text-slate-400">{s.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {slide.pricing && (
                                            <div className="rounded-xl border border-white/10 overflow-hidden">
                                                <table className="w-full text-left">
                                                    <thead className="bg-white/5">
                                                        <tr>
                                                            <th className="p-2 text-[#f7ab00] font-bold text-[9px] uppercase">Phase</th>
                                                            <th className="p-2 text-right text-[#f7ab00] font-bold text-[9px] uppercase">Prix</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-white/5">
                                                        {slide.pricing.map((p, i) => (
                                                            <tr key={i}>
                                                                <td className="p-2 text-[10px] text-slate-300">{p.item}</td>
                                                                <td className="p-2 text-right font-mono text-[10px] font-bold">
                                                                    {p.promo_price ? (
                                                                        <div className="flex flex-col items-end">
                                                                            <span className="text-[8px] text-slate-500 line-through decoration-[#e50554]/50">{p.price}</span>
                                                                            <span className="text-[#009e61]">{p.promo_price}</span>
                                                                        </div>
                                                                    ) : (
                                                                        p.price
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot className="bg-[#e50554]/10">
                                                        <tr>
                                                            <td className="p-3 font-black text-xs uppercase italic">Total Projet</td>
                                                            <td className="p-3 text-right font-mono font-bold text-lg text-[#e50554]">{total.toLocaleString('fr-FR').replace(/\s/g, ' ')} €</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        )}

                                        {slide.extras && (
                                            <div className="mt-4 grid grid-cols-2 gap-2">
                                                {slide.extras.map((extra, i) => (
                                                    <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                                                        <div className="p-1 bg-white/5 rounded text-[#f7ab00]">{React.cloneElement(extra.icon, { size: 12 })}</div>
                                                        <div>
                                                            <p className="font-bold text-[9px] text-white leading-tight">{extra.label}</p>
                                                            <p className="text-[8px] text-[#00ade3] font-mono">{extra.value}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {slide.content && (
                                            <div className="p-5 bg-white/5 rounded-2xl border-l-4 border-[#e50554] mt-2">
                                                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                                                    "{slide.content}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* A4 Footer */}
                        <div className="h-[15mm] flex items-center justify-center border-t border-white/10 bg-[#231838] shrink-0 mt-auto">
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
                                Axalys Refonte • 2026
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPdfMode, setIsPdfMode] = useState(false);

    const handleExportPdf = () => {
        setIsPdfMode(true);
    };

    if (isPdfMode) {
        return (
            <div className="min-h-screen bg-[#231838] overflow-auto">
                <PrintLayout />
                {/* Floating Controls for UX */}
                <div className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end gap-3 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="px-6 py-4 bg-[#00ade3] text-white rounded-full shadow-2xl font-black uppercase tracking-wider hover:bg-[#0091be] transition-colors flex items-center justify-center gap-2"
                    >
                        <Printer size={20} />
                        Imprimer
                    </button>
                    <button
                        onClick={() => setIsPdfMode(false)}
                        className="px-6 py-4 bg-[#e50554] text-white rounded-full shadow-2xl font-black uppercase tracking-wider hover:bg-[#c40448] transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
                    >
                        <X size={20} />
                        Fermer l'aperçu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <WebLayout
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            handleExportPdf={handleExportPdf}
        />
    );
};

export default App;