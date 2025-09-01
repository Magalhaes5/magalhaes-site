// src/i18n/dictionary.ts
export type Locale = "en" | "fr" | "pt" | "de";

/* ---------- BASE (EN) ---------- */
const base = {
  // NAV
  nav_home: "Home",
  nav_about: "About",
  nav_guides: "Guides",
  nav_solutions: "Digital Solutions",
  nav_contact: "Contact",

  prev: "Previous",
  next: "Next",

  // HOME
  home_title: "Your trusted real estate partner in Luxembourg",
  home_subtitle: "Less is more — simple, transparent, and effective real estate services.",
  cta_certificate: "Request a Search Certificate",
  cta_contact: "Contact Joel",
  home_meet_joel: "Meet Joel Magalhães",
  home_meet_copy:
    "From first steps at Re/Max to cross-border experience at Daniel Frères and independence at AfIL Immo, I combine perseverance with strategy to deliver results in Luxembourg.",
  home_read_bio: "Read full biography",
  home_work_with_me: "Work with me",
  home_listings_title: "Featured listings",
  home_testimonials_title: "What clients say",
  home_buyers_guide: "Buyer's Guide",
  home_sellers_guide: "Seller's Guide",

  // Lead form
  lead_title: "Property Search Certificate",
  lead_intro:
    "Tell me your budget, preferred locations, bedroom count, and if you need a garage or garden. I’ll email you tailored opportunities.",
  form_name: "Full name",
  form_email: "Email",
  form_phone: "Phone",
  form_budget_min: "Budget (min)",
  form_budget_max: "Budget (max)",
  form_bedrooms: "Bedrooms",
  form_bedrooms_choose: "Choose…",
  form_locations: "Preferred locations",
  form_garage: "Garage",
  form_garden: "Garden",
  form_notes: "Notes",
  form_consent: "I agree to be contacted about my request.",
  form_send: "Send request",
  form_sending: "Sending…",

  // About
  about_title: "About Joel",
  about_kicker: "Less is more — trusted, multilingual real estate in Luxembourg.",
  values_transparent: "Transparent",
  values_precise: "Precise",
  values_multilingual: "Multilingual",
  values_techsavvy: "Tech-savvy",
  valdesc_transparent: "Simple process and clear updates.",
  valdesc_precise: "Accurate pricing and positioning.",
  valdesc_multilingual: "EN · FR · PT · DE · LU.",
  valdesc_techsavvy: "Fast sites, smart marketing, Apimo-ready.",
  about_bio_p1:
    "My journey began at Re/Max where I learned the value of guidance and perseverance. At Daniel Frères I expanded into cross-border transactions and strengthened my performance. At AfIL Immo I handled mandates to listings independently.",
  about_remax: "First steps in real estate; mentorship and basics.",
  about_dfi: "Cross-border sales (FR/DE/LU); strong performance.",
  about_afil: "Independent, full-cycle agent — mandates & listings.",
  about_cimmo: "Today I focus on the Luxembourg market with multilingual support.",
  foundations: "Foundations",
  today: "Today",

  // Guides (common)
  guides_choose: "Choose a guide:",
  guides_buy_title: "A Step-by-Step First-Time Buyer’s Guide",
  guides_buy_intro:
    "Buying a home is exciting. This guide explains the process clearly so you can buy with confidence.",
  guides_sell_title: "A Step-by-Step Seller’s Guide",
  guides_sell_intro:
    "Selling can be stressful. This guide keeps it organised and focused on results.",
  guides_cta: "Book a free call",
  guides_not_found: "Choose a guide:",

  // Buyer steps (EN)
  buy_s1_t: "Step 1: Research",
  buy_s1_p:
    "Explore areas, property types, features you like/dislike, and watch asking-price trends to understand the market.",
  buy_s2_t: "Step 2: Decide your budget",
  buy_s2_p:
    "Set a comfortable monthly payment first (include utilities/fees). Don’t rely only on the bank’s maximum.",
  buy_s3_t: "Step 3: Get prequalified",
  buy_s3_p:
    "Speak to a lender early to confirm what you can borrow and strengthen your offer when the time comes.",
  buy_s4_t: "Step 4: Choose an agent",
  buy_s4_p:
    "It costs buyers nothing. I shortlist properties, arrange visits, advise on value and handle negotiations.",
  buy_s5_t: "Step 5: Find the right home",
  buy_s5_p:
    "Visit shortlisted homes. Test switches, doors, water, and feel the neighbourhood—traffic, parking, schools, shops.",
  buy_s6_t: "Step 6: Make an offer",
  buy_s6_p:
    "We craft a fair offer based on market data and context (buyer/seller market), and negotiate when needed.",
  buy_s7_t: "Step 7: Home inspection",
  buy_s7_p:
    "A professional check limits surprises. Findings can lead to repairs, credit, price updates—or walking away.",
  buy_s8_t: "Step 8: Select your loan",
  buy_s8_p:
    "Fixed/variable, 15/30 years, or special programmes. Your lender helps choose the option that fits your profile.",
  buy_s9_t: "Step 9: Appraisal",
  buy_s9_p:
    "The lender orders an appraisal to ensure the price is fair for all parties and to finalise the loan.",
  buy_s10_t: "Step 10: Paperwork & closing",
  buy_s10_p:
    "The notary/lender finalise documents. Once signed, you are the legal owner—congratulations!",

  // Seller steps (EN)
  sell_s1_t: "Step 1: Understand why you’re selling",
  sell_s1_p:
    "Define priority (price vs. speed). Your goal informs the pricing and negotiation strategy.",
  sell_s2_t: "Step 2: Determine selling price",
  sell_s2_p:
    "Price right from day one to maximise interest. I provide comps, market context, and can arrange an appraisal.",
  sell_s3_t: "Step 3: Start preparations",
  sell_s3_p:
    "Declutter, depersonalise, fix small issues, deep clean, and consider light staging for best first impressions.",
  sell_s4_t: "Step 4: Marketing strategy",
  sell_s4_p:
    "Listing, pro photos, portals, social ads, agent network, and SEO. The first 3 weeks are crucial.",
  sell_s5_t: "Step 5: Evaluate offers",
  sell_s5_p:
    "We check buyer preapproval and terms. If needed, counter with price, dates, repairs, or costs.",
  sell_s6_t: "Step 6: Accept an offer",
  sell_s6_p:
    "We confirm deposit, financing, inspection rights, contingencies, target closing, and who pays which fees.",
  sell_s7_t: "Step 7: Get ready to close",
  sell_s7_p:
    "Complete inspections/repairs and legal steps. Coordinate move-out and final walkthrough with the buyer.",
  sell_s8_t: "Step 8: Close",
  sell_s8_p:
    "Sign the final documents with the notary and transfer ownership. Cancel utilities/services and hand over keys.",

  // Contact
  contact_title: "Contact",
  contact_lets_talk: "Let’s talk",
  contact_phone: "Phone",
  contact_email: "Email",
  contact_address: "Address",
  contact_hours: "Hours",
  contact_email_me: "Email me",

  // Thanks
  thanks_title: "Thank you!",
  thanks_message: "I received your request and I’ll reply within 24 hours.",
  thanks_whatsapp: "WhatsApp me now",
  thanks_back_home: "Back to homepage",

  // Solutions (EN)
  sol_title: "Digital Solutions",
  sol_intro_1:
    "I design and build fast, trustworthy websites that convert — for real estate agents, restaurants, and local businesses. Multilingual, SEO-ready, analytics-enabled, Apimo & n8n integrations.",
  sol_what: "What I build",
  sol_re_title: "Real Estate Websites",
  sol_re_l1: "Hero video, bio, lead capture",
  sol_re_l2: "Listings (manual or Apimo-ready)",
  sol_re_l3: "Areas pages, blog, testimonials",
  sol_re_l4: "EN/FR/PT/DE, SEO, GA4",
  sol_rest_title: "Restaurant Sites",
  sol_rest_l1: "Menus & photos",
  sol_rest_l2: "Reservations / booking link",
  sol_rest_l3: "Google Maps & reviews",
  sol_rest_l4: "Speed & mobile first",
  sol_lp_title: "Business Landing Pages",
  sol_lp_l1: "Clear value proposition",
  sol_lp_l2: "Lead form + WhatsApp",
  sol_lp_l3: "Analytics & A/B testing ready",
  sol_lp_l4: "SEO & Open Graph",
  sol_how: "How it works",
  sol_step1_t: "Brief",
  sol_step1_p: "We define goals, audience, pages, and style.",
  sol_step2_t: "Wireframe",
  sol_step2_p: "Layout and content map with key CTAs.",
  sol_step3_t: "Design",
  sol_step3_p: "Modern, approachable look with motion.",
  sol_step4_t: "Build",
  sol_step4_p: "Next.js (React), accessibility, performance, SEO.",
  sol_step5_t: "Integrations",
  sol_step5_p: "GA4, n8n automations, Apimo listings (when ready).",
  sol_step6_t: "Launch & Training",
  sol_step6_p: "Deploy, analytics checks, and a quick walkthrough.",
  sol_cta_quote: "Request a quote",
  sol_cta_whatsapp: "WhatsApp me",
};

/* ---------- FR ---------- */
const fr = {
  ...base,

  nav_home: "Accueil",
  nav_about: "À propos",
  nav_guides: "Guides",
  nav_solutions: "Solutions digitales",
  nav_contact: "Contact",
  prev: "Précédent",
  next: "Suivant",

  home_title: "Votre partenaire immobilier de confiance au Luxembourg",
  home_subtitle:
    "Less is more — des services immobiliers simples, transparents et efficaces.",
  cta_certificate: "Demander un Certificat de Recherche",
  cta_contact: "Contacter Joel",
  home_meet_joel: "Rencontrez Joel Magalhães",
  home_meet_copy:
    "Des premiers pas chez Re/Max à l’expérience transfrontalière chez Daniel Frères et l’indépendance chez AfIL Immo, j’allie persévérance et stratégie pour des résultats au Luxembourg.",
  home_read_bio: "Voir la biographie complète",
  home_work_with_me: "Travailler avec moi",
  home_listings_title: "Biens en vedette",
  home_testimonials_title: "Avis clients",
  home_buyers_guide: "Guide de l’acheteur",
  home_sellers_guide: "Guide du vendeur",

  lead_title: "Certificat de Recherche",
  lead_intro:
    "Indiquez votre budget, vos localisations préférées, le nombre de chambres et si vous avez besoin d’un garage ou d’un jardin. Je vous enverrai des opportunités ciblées.",
  form_name: "Nom complet",
  form_email: "Email",
  form_phone: "Téléphone",
  form_budget_min: "Budget (min)",
  form_budget_max: "Budget (max)",
  form_bedrooms: "Chambres",
  form_bedrooms_choose: "Choisir…",
  form_locations: "Localisations préférées",
  form_garage: "Garage",
  form_garden: "Jardin",
  form_notes: "Notes",
  form_consent: "J’accepte d’être contacté au sujet de ma demande.",
  form_send: "Envoyer la demande",
  form_sending: "Envoi…",

  about_title: "À propos de Joel",
  about_kicker:
    "Less is more — un service multilingue de confiance au Luxembourg.",
  valdesc_transparent: "Processus simple et informations claires.",
  valdesc_precise: "Évaluation et positionnement précis.",
  valdesc_multilingual: "EN · FR · PT · DE · LU.",
  valdesc_techsavvy: "Sites rapides, marketing intelligent, Apimo prêt.",
  about_bio_p1:
    "Mon parcours a commencé chez Re/Max où j’ai appris la valeur de l’accompagnement et de la persévérance. Chez Daniel Frères, j’ai élargi aux transactions transfrontalières et renforcé mes performances. Chez AfIL Immo, j’ai géré mandats et annonces en autonomie.",
  about_remax: "Premiers pas en immobilier ; mentorat et bases.",
  about_dfi: "Ventes transfrontalières (FR/DE/LU) ; bonnes performances.",
  about_afil: "Agent indépendant, cycle complet — mandats & annonces.",
  about_cimmo:
    "Aujourd’hui, je me concentre sur le marché luxembourgeois avec un support multilingue.",
  foundations: "Fondations",
  today: "Aujourd’hui",

  guides_choose: "Choisissez un guide :",
  guides_buy_title: "Guide de l’acheteur — étape par étape",
  guides_buy_intro:
    "Acheter un bien est un moment fort. Ce guide clarifie chaque étape pour avancer sereinement.",
  guides_sell_title: "Guide du vendeur — étape par étape",
  guides_sell_intro:
    "Vendre peut être stressant. Ce guide garde le cap et l’organisation.",
  guides_cta: "Réserver un appel gratuit",
  guides_not_found: "Choisissez un guide :",

  // Buyer steps (FR)
  buy_s1_t: "Étape 1 : Recherches",
  buy_s1_p:
    "Explorez quartiers, types de biens, critères aimés/détestés et suivez l’évolution des prix pour comprendre le marché.",
  buy_s2_t: "Étape 2 : Budget personnel",
  buy_s2_p:
    "Fixez d’abord une mensualité confortable (charges incluses). Ne vous basez pas uniquement sur le maximum bancaire.",
  buy_s3_t: "Étape 3 : Prêt — préqualification",
  buy_s3_p:
    "Parlez tôt avec un prêteur pour confirmer votre capacité d’emprunt et renforcer votre offre.",
  buy_s4_t: "Étape 4 : Choisir un agent",
  buy_s4_p:
    "C’est gratuit pour l’acheteur. Je sélectionne, organise les visites, conseille sur la valeur et négocie.",
  buy_s5_t: "Étape 5 : Trouver le bon bien",
  buy_s5_p:
    "Visitez, testez interrupteurs/portes/eau et ressentez le quartier — trafic, stationnement, écoles, commerces.",
  buy_s6_t: "Étape 6 : Faire une offre",
  buy_s6_p:
    "Nous proposons un prix juste selon les données et le contexte, puis négocions si nécessaire.",
  buy_s7_t: "Étape 7 : Inspection",
  buy_s7_p:
    "Un contrôle pro limite les surprises : réparation, crédit, ajustement de prix… ou retrait si besoin.",
  buy_s8_t: "Étape 8 : Choisir le prêt",
  buy_s8_p:
    "Fixe/variable, 15/30 ans ou programmes spécifiques : choisissez la formule adaptée avec votre prêteur.",
  buy_s9_t: "Étape 9 : Expertise",
  buy_s9_p:
    "La banque mandate un expert pour vérifier la justesse du prix avant de finaliser le financement.",
  buy_s10_t: "Étape 10 : Dossier & signature",
  buy_s10_p:
    "Notaire et banque finalisent les documents. Une fois signés, vous êtes propriétaire — félicitations !",

  // Seller steps (FR)
  sell_s1_t: "Étape 1 : Pourquoi vendez-vous ?",
  sell_s1_p:
    "Prix vs. délai : votre priorité guide la stratégie de prix et de négociation.",
  sell_s2_t: "Étape 2 : Prix de vente",
  sell_s2_p:
    "Un bon prix dès le départ maximise l’intérêt. Je fournis comparables, contexte et, si besoin, expertise.",
  sell_s3_t: "Étape 3 : Préparations",
  sell_s3_p:
    "Désencombrez, dépersonnalisez, petites réparations, grand nettoyage, home staging léger si utile.",
  sell_s4_t: "Étape 4 : Marketing",
  sell_s4_p:
    "Annonce, photos pro, portails, pubs sociales, réseau d’agents, SEO. Les 3 premières semaines sont clés.",
  sell_s5_t: "Étape 5 : Évaluer les offres",
  sell_s5_p:
    "On vérifie financement et conditions. Contre-proposition : prix, dates, réparations, frais…",
  sell_s6_t: "Étape 6 : Accepter l’offre",
  sell_s6_p:
    "On confirme acompte, financement, droit d’inspection, conditions suspensives, closing et répartition des frais.",
  sell_s7_t: "Étape 7 : Préparer la signature",
  sell_s7_p:
    "Inspections/réparations et démarches légales. Organisation du départ et état des lieux final.",
  sell_s8_t: "Étape 8 : Signature",
  sell_s8_p:
    "Signature finale chez le notaire, transfert de propriété. Résiliez abonnements et remettez les clés.",

  // Solutions (FR overrides)
  sol_title: "Solutions digitales",
  sol_intro_1:
    "Je conçois et réalise des sites rapides et fiables qui convertissent — pour agents immobiliers, restaurants et entreprises locales. Multilingues, prêts pour le SEO, avec analytics, intégrations Apimo et n8n.",
  sol_what: "Ce que je construis",
  sol_re_title: "Sites immobiliers",
  sol_re_l1: "Vidéo hero, bio, capture de leads",
  sol_re_l2: "Annonces (manuel ou compatible Apimo)",
  sol_re_l3: "Pages quartiers, blog, témoignages",
  sol_re_l4: "EN/FR/PT/DE, SEO, GA4",
  sol_rest_title: "Sites de restaurants",
  sol_rest_l1: "Menus & photos",
  sol_rest_l2: "Réservations / lien de réservation",
  sol_rest_l3: "Google Maps & avis",
  sol_rest_l4: "Vitesse & mobile d’abord",
  sol_lp_title: "Landing pages business",
  sol_lp_l1: "Proposition de valeur claire",
  sol_lp_l2: "Formulaire + WhatsApp",
  sol_lp_l3: "Analytics & tests A/B prêts",
  sol_lp_l4: "SEO & Open Graph",
  sol_how: "Comment je travaille",
  sol_step1_t: "Brief",
  sol_step1_p: "On définit objectifs, audience, pages et style.",
  sol_step2_t: "Wireframe",
  sol_step2_p: "Plan d’écran et contenu avec CTA clés.",
  sol_step3_t: "Design",
  sol_step3_p: "Look moderne et accessible, avec motion.",
  sol_step4_t: "Build",
  sol_step4_p: "Next.js (React), accessibilité, performance, SEO.",
  sol_step5_t: "Intégrations",
  sol_step5_p: "GA4, automatisations n8n, annonces Apimo (si prêt).",
  sol_step6_t: "Lancement & formation",
  sol_step6_p: "Mise en ligne, vérifs analytics et mini formation.",
  sol_cta_quote: "Demander un devis",
  sol_cta_whatsapp: "M’écrire sur WhatsApp",
};

/* ---------- PT ---------- */
const pt = {
  ...base,

  nav_home: "Início",
  nav_about: "Sobre",
  nav_guides: "Guias",
  nav_solutions: "Soluções digitais",
  nav_contact: "Contacto",
  prev: "Anterior",
  next: "Seguinte",

  home_title: "O seu parceiro imobiliário de confiança no Luxemburgo",
  home_subtitle:
    "Less is more — serviços imobiliários simples, transparentes e eficazes.",
  cta_certificate: "Pedir Certificado de Procura",
  cta_contact: "Contactar Joel",
  home_meet_joel: "Conheça o Joel Magalhães",
  home_meet_copy:
    "Dos primeiros passos na Re/Max à experiência transfronteiriça na Daniel Frères e independência na AfIL Immo, junto perseverança e estratégia para resultados no Luxemburgo.",
  home_read_bio: "Ler biografia completa",
  home_work_with_me: "Trabalhar comigo",
  home_listings_title: "Imóveis em destaque",
  home_testimonials_title: "O que dizem os clientes",
  home_buyers_guide: "Guia do comprador",
  home_sellers_guide: "Guia do vendedor",

  lead_title: "Certificado de Procura",
  lead_intro:
    "Indique orçamento, zonas preferidas, número de quartos e se precisa de garagem ou jardim. Enviarei oportunidades à medida por email.",
  form_name: "Nome completo",
  form_email: "Email",
  form_phone: "Telefone",
  form_budget_min: "Orçamento (mín)",
  form_budget_max: "Orçamento (máx)",
  form_bedrooms: "Quartos",
  form_bedrooms_choose: "Escolher…",
  form_locations: "Zonas preferidas",
  form_garage: "Garagem",
  form_garden: "Jardim",
  form_notes: "Notas",
  form_consent: "Concordo em ser contactado sobre o meu pedido.",
  form_send: "Enviar pedido",
  form_sending: "A enviar…",

  about_title: "Sobre o Joel",
  about_kicker:
    "Less is more — serviço multilingue de confiança no Luxemburgo.",
  valdesc_transparent: "Processo simples e comunicação clara.",
  valdesc_precise: "Avaliação e posicionamento precisos.",
  valdesc_multilingual: "EN · FR · PT · DE · LU.",
  valdesc_techsavvy:
    "Sites rápidos, marketing inteligente, pronto para Apimo.",
  about_bio_p1:
    "Comecei na Re/Max. Na Daniel Frères trabalhei operações transfronteiriças; na AfIL Immo tratei de mandatos e anúncios de forma independente.",
  about_remax: "Primeiros passos; mentoria e bases.",
  about_dfi: "Vendas transfronteiriças (FR/DE/LU); bom desempenho.",
  about_afil: "Agente independente — mandatos & anúncios.",
  about_cimmo:
    "Hoje foco-me no mercado luxemburguês com apoio multilingue.",
  foundations: "Fundamentos",
  today: "Hoje",

  guides_choose: "Escolha um guia:",
  guides_buy_title: "Guia do Comprador — passo a passo",
  guides_buy_intro:
    "Comprar casa é entusiasmante. Este guia explica o processo de forma clara para comprar com confiança.",
  guides_sell_title: "Guia do Vendedor — passo a passo",
  guides_sell_intro:
    "Vender pode ser stressante. Este guia mantém tudo organizado e orientado para resultados.",
  guides_cta: "Marcar uma chamada gratuita",
  guides_not_found: "Escolha um guia:",

  // Buyer steps (PT)
  buy_s1_t: "Passo 1: Pesquisa",
  buy_s1_p:
    "Explore zonas, tipos de imóvel e critérios; acompanhe a evolução dos preços para entender o mercado.",
  buy_s2_t: "Passo 2: Definir orçamento",
  buy_s2_p:
    "Defina primeiro uma prestação confortável (incluindo taxas/serviços). Não dependa só do máximo do banco.",
  buy_s3_t: "Passo 3: Pré-qualificação",
  buy_s3_p:
    "Fale cedo com o banco para confirmar o montante e fortalecer a oferta.",
  buy_s4_t: "Passo 4: Escolher agente",
  buy_s4_p:
    "Não tem custo para o comprador. Eu seleciono imóveis, marco visitas, avalio o valor e negoceio.",
  buy_s5_t: "Passo 5: Encontrar a casa certa",
  buy_s5_p:
    "Visite a shortlist. Teste interruptores/portas/água e avalie o bairro — tráfego, estacionamento, escolas, comércio.",
  buy_s6_t: "Passo 6: Fazer oferta",
  buy_s6_p:
    "Propomos um valor justo com base em dados e contexto e negociamos quando necessário.",
  buy_s7_t: "Passo 7: Inspeção",
  buy_s7_p:
    "A inspeção profissional reduz surpresas: reparações, crédito, ajuste de preço ou desistência.",
  buy_s8_t: "Passo 8: Escolher o empréstimo",
  buy_s8_p:
    "Taxa fixa/variável, 15/30 anos ou programas especiais — escolha com o seu banco.",
  buy_s9_t: "Passo 9: Avaliação",
  buy_s9_p:
    "O banco solicita avaliação para confirmar preço justo antes de finalizar o crédito.",
  buy_s10_t: "Passo 10: Documentos & escritura",
  buy_s10_p:
    "Notário e banco finalizam. Assinado, é o proprietário — parabéns!",

  // Seller steps (PT)
  sell_s1_t: "Passo 1: Porque vende?",
  sell_s1_p:
    "Preço vs. rapidez: a prioridade define a estratégia de preço e negociação.",
  sell_s2_t: "Passo 2: Definir preço",
  sell_s2_p:
    "Preço correto desde o início maximiza interesse. Forneço comparáveis, contexto e avaliação se necessário.",
  sell_s3_t: "Passo 3: Preparação",
  sell_s3_p:
    "Destralhar, despersonalizar, pequenas reparações, limpeza profunda e staging leve.",
  sell_s4_t: "Passo 4: Marketing",
  sell_s4_p:
    "Anúncio, fotos pro, portais, social ads, rede de agentes e SEO. As 3 primeiras semanas são chave.",
  sell_s5_t: "Passo 5: Avaliar propostas",
  sell_s5_p:
    "Verificamos pré-aprovação e condições. Contra-propostas com preço, datas, reparações ou custos.",
  sell_s6_t: "Passo 6: Aceitar proposta",
  sell_s6_p:
    "Confirmamos sinal, financiamento, inspeção, contingências, fecho e partilha de custos.",
  sell_s7_t: "Passo 7: Preparar o fecho",
  sell_s7_p:
    "Inspeções/reparações e atos legais. Planear mudança e vistoria final.",
  sell_s8_t: "Passo 8: Escritura",
  sell_s8_p:
    "Assinatura final e transferência de propriedade. Cancelar serviços e entregar chaves.",

  // Solutions (PT overrides)
  sol_title: "Soluções digitais",
  sol_intro_1:
    "Crio e construo sites rápidos e confiáveis que convertem — para imobiliárias, restaurantes e negócios locais. Multilíngues, prontos para SEO, com analytics, integrações Apimo e n8n.",
  sol_what: "O que construo",
  sol_re_title: "Websites imobiliários",
  sol_re_l1: "Vídeo hero, bio, captação de leads",
  sol_re_l2: "Listagens (manuais ou compatíveis com Apimo)",
  sol_re_l3: "Páginas de zonas, blog, testemunhos",
  sol_re_l4: "EN/FR/PT/DE, SEO, GA4",
  sol_rest_title: "Sites de restaurantes",
  sol_rest_l1: "Menus e fotos",
  sol_rest_l2: "Reservas / link de reserva",
  sol_rest_l3: "Google Maps e avaliações",
  sol_rest_l4: "Velocidade e mobile-first",
  sol_lp_title: "Landing pages para negócios",
  sol_lp_l1: "Proposta de valor clara",
  sol_lp_l2: "Formulário + WhatsApp",
  sol_lp_l3: "Analytics e testes A/B prontos",
  sol_lp_l4: "SEO & Open Graph",
  sol_how: "Como funciona",
  sol_step1_t: "Briefing",
  sol_step1_p: "Definimos objetivos, público, páginas e estilo.",
  sol_step2_t: "Wireframe",
  sol_step2_p: "Mapa de layout e conteúdo com CTAs chave.",
  sol_step3_t: "Design",
  sol_step3_p: "Visual moderno e acessível, com motion.",
  sol_step4_t: "Build",
  sol_step4_p: "Next.js (React), acessibilidade, performance, SEO.",
  sol_step5_t: "Integrações",
  sol_step5_p: "GA4, automações n8n, listagens Apimo (quando pronto).",
  sol_step6_t: "Lançamento & formação",
  sol_step6_p: "Publicação, verificação de analytics e mini-formação.",
  sol_cta_quote: "Pedir orçamento",
  sol_cta_whatsapp: "Falar no WhatsApp",
};

/* ---------- DE ---------- */
const de = {
  ...base,

  nav_home: "Start",
  nav_about: "Über mich",
  nav_guides: "Ratgeber",
  nav_solutions: "Digitale Lösungen",
  nav_contact: "Kontakt",
  prev: "Zurück",
  next: "Weiter",

  home_title: "Ihr zuverlässiger Immobilienpartner in Luxemburg",
  home_subtitle:
    "Less is more — einfache, transparente und effiziente Immobiliendienstleistungen.",
  cta_certificate: "Suchzertifikat anfordern",
  cta_contact: "Joel kontaktieren",
  home_meet_joel: "Lernen Sie Joel Magalhães kennen",
  home_meet_copy:
    "Von den ersten Schritten bei Re/Max über Erfahrung bei Daniel Frères bis zur Unabhängigkeit bei AfIL Immo — ich kombiniere Ausdauer und Strategie für Ergebnisse in Luxemburg.",
  home_read_bio: "Biografie lesen",
  home_work_with_me: "Mit mir arbeiten",
  home_listings_title: "Ausgewählte Objekte",
  home_testimonials_title: "Stimmen von Kunden",
  home_buyers_guide: "Käufer-Leitfaden",
  home_sellers_guide: "Verkäufer-Leitfaden",

  lead_title: "Suchzertifikat",
  lead_intro:
    "Teilen Sie Budget, bevorzugte Lagen, Schlafzimmeranzahl und ob Garage/Garten gewünscht sind. Ich sende passende Angebote.",
  form_name: "Vollständiger Name",
  form_email: "E-Mail",
  form_phone: "Telefon",
  form_budget_min: "Budget (min)",
  form_budget_max: "Budget (max)",
  form_bedrooms: "Schlafzimmer",
  form_bedrooms_choose: "Auswählen…",
  form_locations: "Bevorzugte Lagen",
  form_garage: "Garage",
  form_garden: "Garten",
  form_notes: "Notizen",
  form_consent:
    "Ich bin mit der Kontaktaufnahme zu meiner Anfrage einverstanden.",
  form_send: "Anfrage senden",
  form_sending: "Senden…",

  about_title: "Über Joel",
  about_kicker:
    "Less is more — vertrauenswürdiger, mehrsprachiger Service in Luxemburg.",
  valdesc_transparent: "Einfacher Prozess, klare Updates.",
  valdesc_precise: "Präzise Bewertung und Positionierung.",
  valdesc_multilingual: "EN · FR · PT · DE · LU.",
  valdesc_techsavvy:
    "Schnelle Websites, smartes Marketing, Apimo-ready.",
  about_bio_p1:
    "Mein Weg begann bei Re/Max. Bei Daniel Frères folgten grenzüberschreitende Transaktionen; bei AfIL Immo arbeitete ich eigenständig von Mandat bis Exposé.",
  about_remax: "Erste Schritte; Mentoring und Grundlagen.",
  about_dfi: "Grenzüberschreitende Verkäufe (FR/DE/LU); gute Performance.",
  about_afil: "Unabhängiger Full-Cycle-Agent — Mandate & Exposés.",
  about_cimmo:
    "Heute fokussiere ich Luxemburg mit mehrsprachiger Betreuung.",
  foundations: "Grundlagen",
  today: "Heute",

  guides_choose: "Wählen Sie einen Leitfaden:",
  guides_buy_title: "Käufer-Leitfaden — Schritt für Schritt",
  guides_buy_intro:
    "Ein Hauskauf ist aufregend. Dieser Leitfaden erklärt die Schritte klar, damit Sie sicher entscheiden.",
  guides_sell_title: "Verkäufer-Leitfaden — Schritt für Schritt",
  guides_sell_intro:
    "Verkaufen kann stressig sein. Dieser Leitfaden hält alles strukturiert und zielorientiert.",
  guides_cta: "Kostenloses Gespräch buchen",
  guides_not_found: "Wählen Sie einen Leitfaden:",

  // Buyer steps (DE)
  buy_s1_t: "Schritt 1: Recherche",
  buy_s1_p:
    "Erkunden Sie Lagen, Immobilientypen und Wunsch-/Ausschlusskriterien und beobachten Sie die Preisentwicklung, um den Markt zu verstehen.",
  buy_s2_t: "Schritt 2: Budget festlegen",
  buy_s2_p:
    "Definieren Sie zuerst eine komfortable monatliche Rate (inkl. Nebenkosten/Fees). Verlassen Sie sich nicht nur auf das Bank-Maximum.",
  buy_s3_t: "Schritt 3: Vorab-Zusage",
  buy_s3_p:
    "Sprechen Sie früh mit dem Kreditgeber, um Ihre Finanzierbarkeit zu bestätigen und Ihr Angebot zu stärken.",
  buy_s4_t: "Schritt 4: Makler wählen",
  buy_s4_p:
    "Für Käufer kostenlos. Ich kuratiere Objekte, organisiere Besichtigungen, berate zum Wert und führe Verhandlungen.",
  buy_s5_t: "Schritt 5: Das richtige Zuhause finden",
  buy_s5_p:
    "Besichtigen Sie die Shortlist. Testen Sie Schalter, Türen, Wasser; fühlen Sie die Gegend — Verkehr, Parken, Schulen, Einkauf.",
  buy_s6_t: "Schritt 6: Angebot abgeben",
  buy_s6_p:
    "Wir erstellen ein faires Angebot basierend auf Marktdaten und Kontext (Käufer-/Verkäufermarkt) und verhandeln bei Bedarf.",
  buy_s7_t: "Schritt 7: Hausinspektion",
  buy_s7_p:
    "Eine professionelle Prüfung reduziert Überraschungen. Ergebnisse können zu Reparaturen, Gutschriften, Preisänderungen — oder Rücktritt führen.",
  buy_s8_t: "Schritt 8: Darlehen wählen",
  buy_s8_p:
    "Fest/variabel, 15/30 Jahre oder spezielle Programme. Ihr Kreditgeber hilft, die beste Option für Ihr Profil zu wählen.",
  buy_s9_t: "Schritt 9: Bewertung",
  buy_s9_p:
    "Die Bank beauftragt eine Bewertung, um die Preisangemessenheit zu bestätigen und den Kredit abzuschließen.",
  buy_s10_t: "Schritt 10: Unterlagen & Abschluss",
  buy_s10_p:
    "Notar und Kreditgeber finalisieren die Dokumente. Nach Unterschrift sind Sie der rechtliche Eigentümer — Glückwunsch!",

  // Seller steps (DE)
  sell_s1_t: "Schritt 1: Warum verkaufen?",
  sell_s1_p:
    "Preis vs. Geschwindigkeit: Ihre Priorität bestimmt die Strategie für Preisfestlegung und Verhandlungen.",
  sell_s2_t: "Schritt 2: Verkaufspreis bestimmen",
  sell_s2_p:
    "Richtig bepreisen ab Tag 1 maximiert Interesse. Ich liefere Vergleiche, Marktkontext und kann eine Bewertung veranlassen.",
  sell_s3_t: "Schritt 3: Vorbereitungen",
  sell_s3_p:
    "Entrümpeln, depersonalisieren, kleine Mängel beheben, gründlich reinigen und ggf. leichtes Staging für einen starken ersten Eindruck.",
  sell_s4_t: "Schritt 4: Marketingstrategie",
  sell_s4_p:
    "Exposé, Profi-Fotos, Portale, Social Ads, Maklernetzwerk und SEO. Die ersten 3 Wochen sind entscheidend.",
  sell_s5_t: "Schritt 5: Angebote bewerten",
  sell_s5_p:
    "Wir prüfen die Vorab-Finanzierung und Konditionen. Falls nötig: Gegenangebot mit Preis, Terminen, Reparaturen oder Kosten.",
  sell_s6_t: "Schritt 6: Angebot annehmen",
  sell_s6_p:
    "Wir bestätigen Anzahlung, Finanzierung, Inspektionsrechte, Bedingungen, Ziel-Abschluss und Kostenteilung.",
  sell_s7_t: "Schritt 7: Abschluss vorbereiten",
  sell_s7_p:
    "Inspektionen/Reparaturen und rechtliche Schritte abschließen. Auszug koordinieren und finale Begehung mit dem Käufer.",
  sell_s8_t: "Schritt 8: Abschluss",
  sell_s8_p:
    "Finale Dokumente beim Notar unterschreiben und Eigentum übertragen. Verträge kündigen, Schlüssel übergeben.",

  // Solutions (DE overrides)
  sol_title: "Digitale Lösungen",
  sol_intro_1:
    "Ich konzipiere und entwickle schnelle, vertrauenswürdige Websites, die konvertieren — für Makler, Restaurants und lokale Unternehmen. Mehrsprachig, SEO-ready, mit Analytics sowie Apimo- & n8n-Integrationen.",
  sol_what: "Was ich baue",
  sol_re_title: "Immobilien-Websites",
  sol_re_l1: "Hero-Video, Bio, Lead-Erfassung",
  sol_re_l2: "Exposés/Anzeigen (manuell oder Apimo-ready)",
  sol_re_l3: "Stadtteil-Seiten, Blog, Referenzen",
  sol_re_l4: "EN/FR/PT/DE, SEO, GA4",
  sol_rest_title: "Restaurant-Websites",
  sol_rest_l1: "Speisekarten & Fotos",
  sol_rest_l2: "Reservierungen / Buchungslink",
  sol_rest_l3: "Google Maps & Bewertungen",
  sol_rest_l4: "Schnell & Mobile-first",
  sol_lp_title: "Business-Landingpages",
  sol_lp_l1: "Klarer Wertvorschlag",
  sol_lp_l2: "Lead-Formular + WhatsApp",
  sol_lp_l3: "Analytics & A/B-Tests bereit",
  sol_lp_l4: "SEO & Open Graph",
  sol_how: "So läuft’s",
  sol_step1_t: "Briefing",
  sol_step1_p: "Ziele, Zielgruppe, Seiten und Stil festlegen.",
  sol_step2_t: "Wireframe",
  sol_step2_p: "Layout- und Inhaltsplan mit zentralen CTAs.",
  sol_step3_t: "Design",
  sol_step3_p: "Modern, zugänglich – mit sanften Motion-Effekten.",
  sol_step4_t: "Build",
  sol_step4_p: "Next.js (React), Accessibility, Performance, SEO.",
  sol_step5_t: "Integrationen",
  sol_step5_p: "GA4, n8n-Automationen, Apimo-Listings (wenn bereit).",
  sol_step6_t: "Launch & Schulung",
  sol_step6_p: "Livegang, Analytics-Checks und kurze Einweisung.",
  sol_cta_quote: "Angebot anfordern",
  sol_cta_whatsapp: "Per WhatsApp schreiben",
};

export const dictionaries: Record<Locale, Record<string, string>> = {
  en: base,
  fr,
  pt,
  de,
};
