import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'Your Trusted Partner in Global Export',
    'hero.subtitle': 'Delivering premium agricultural products worldwide with excellence and reliability',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.whatsapp': 'WhatsApp Us',
    
    // About
    'about.title': 'About BM Export',
    'about.subtitle': 'Excellence in International Trade',
    'about.description': 'BM Export is a leading international export company specializing in premium agricultural products. With years of experience and a commitment to quality, we connect producers with markets worldwide.',
    'about.expertise.title': 'International Expertise',
    'about.expertise.desc': 'Deep understanding of global markets and trade regulations',
    'about.quality.title': 'Quality & Trust',
    'about.quality.desc': 'Rigorous quality control ensuring only the finest products',
    'about.global.title': 'Global Reach',
    'about.global.desc': 'Established partnerships across continents',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Export Solutions',
    'services.agri.title': 'Agricultural Products Export',
    'services.agri.desc': 'Premium quality fruits, vegetables, and grains for international markets',
    'services.logistics.title': 'International Logistics',
    'services.logistics.desc': 'End-to-end supply chain management and shipping solutions',
    'services.packaging.title': 'Packaging & Quality Control',
    'services.packaging.desc': 'Professional packaging meeting international standards',
    'services.documentation.title': 'Export Documentation',
    'services.documentation.desc': 'Complete handling of customs and export paperwork',
    
    // Why Choose Us
    'why.title': 'Why Choose BM Export',
    'why.subtitle': 'Your Success is Our Priority',
    'why.experience.title': 'Years of Experience',
    'why.experience.desc': 'Proven track record in international trade',
    'why.quality.title': 'Quality Standards',
    'why.quality.desc': 'ISO certified quality management systems',
    'why.delivery.title': 'Worldwide Delivery',
    'why.delivery.desc': 'Reliable shipping to any destination',
    'why.pricing.title': 'Competitive Pricing',
    'why.pricing.desc': 'Best value for premium products',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Premium Agricultural Exports',
    'products.viewDetails': 'Click on any product to view details',
    'products.clickDetails': 'Click for details',
    'products.modal.origin': 'Origin',
    'products.modal.packaging': 'Packaging',
    'products.modal.availability': 'Availability',
    'products.modal.inquire': 'Inquire Now',
    'products.modal.close': 'Close',
    
    'products.olives.title': 'Premium Olives',
    'products.olives.desc': 'Hand-picked Mediterranean olives',
    'products.olives.fullDesc': 'Our premium olives are hand-picked from the finest Mediterranean groves. Available in various varieties including Kalamata, green, and black olives. Perfect for both retail and wholesale markets.',
    'products.olives.origin': 'Mediterranean Region (Algeria, Greece, Spain)',
    'products.olives.packaging': 'Bulk containers, jars, or custom packaging',
    'products.olives.availability': 'Year-round availability',
    
    'products.dates.title': 'Deglet Nour Dates',
    'products.dates.desc': 'Finest quality Algerian dates',
    'products.dates.fullDesc': 'Deglet Nour, known as the "Queen of Dates," offers a delicate honey-like flavor and translucent appearance. Sourced directly from Algerian oases with centuries of date-growing tradition.',
    'products.dates.origin': 'Algeria - Biskra & Tolga Oases',
    'products.dates.packaging': 'Premium boxes, bulk cartons, or branded packaging',
    'products.dates.availability': 'Seasonal harvest (October-January), available year-round',
    
    'products.citrus.title': 'Fresh Citrus',
    'products.citrus.desc': 'Sun-ripened oranges and lemons',
    'products.citrus.fullDesc': 'Vibrant, sun-ripened citrus fruits including oranges, lemons, mandarins, and grapefruits. Grown in optimal Mediterranean climate conditions for maximum sweetness and juice content.',
    'products.citrus.origin': 'North Africa & Mediterranean Basin',
    'products.citrus.packaging': 'Standard fruit crates, mesh bags, or premium gift boxes',
    'products.citrus.availability': 'Seasonal (November-April)',
    
    'products.grains.title': 'Quality Grains',
    'products.grains.desc': 'Premium wheat and cereals',
    'products.grains.fullDesc': 'High-quality grains including durum wheat, barley, and specialty cereals. Cultivated using sustainable farming practices and meeting international quality standards.',
    'products.grains.origin': 'North African Highlands',
    'products.grains.packaging': 'Bulk shipping, 25kg/50kg bags, or custom quantities',
    'products.grains.availability': 'Year-round with seasonal peaks',
    
    'products.almonds.title': 'Premium Almonds',
    'products.almonds.desc': 'Crunchy Mediterranean almonds',
    'products.almonds.fullDesc': 'High-quality almonds known for their rich flavor and nutritional value. Available raw, roasted, blanched, or as almond products. Sourced from sustainable orchards.',
    'products.almonds.origin': 'Mediterranean Region (Algeria, Morocco, Spain)',
    'products.almonds.packaging': 'Vacuum-sealed bags, bulk containers, or retail packs',
    'products.almonds.availability': 'Year-round availability',
    
    'products.oliveOil.title': 'Extra Virgin Olive Oil',
    'products.oliveOil.desc': 'Cold-pressed premium oil',
    'products.oliveOil.fullDesc': 'Premium extra virgin olive oil, cold-pressed from hand-picked olives. Rich in antioxidants with a distinctive fruity flavor. Perfect for culinary and cosmetic applications.',
    'products.oliveOil.origin': 'Algeria - Bejaia & Tizi Ouzou Regions',
    'products.oliveOil.packaging': 'Glass bottles, tin containers, or bulk tanks',
    'products.oliveOil.availability': 'New harvest annually (November-February)',
    
    'products.tomatoes.title': 'Fresh Tomatoes',
    'products.tomatoes.desc': 'Vine-ripened export quality',
    'products.tomatoes.fullDesc': 'Premium vine-ripened tomatoes grown in optimal greenhouse and outdoor conditions. Available in various varieties including cherry, roma, and beefsteak tomatoes.',
    'products.tomatoes.origin': 'North Africa & Mediterranean',
    'products.tomatoes.packaging': 'Ventilated crates, cartons, or premium trays',
    'products.tomatoes.availability': 'Year-round with peak season (May-October)',
    
    'products.figs.title': 'Fresh & Dried Figs',
    'products.figs.desc': 'Sweet Mediterranean figs',
    'products.figs.fullDesc': 'Succulent figs available fresh in season or as premium dried products. Known for their natural sweetness and health benefits. Perfect for gourmet markets.',
    'products.figs.origin': 'Algeria & Turkey',
    'products.figs.packaging': 'Fresh: ventilated containers; Dried: vacuum-sealed or boxes',
    'products.figs.availability': 'Fresh (August-October), Dried (year-round)',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': '16, Rue 1er  Nouvembre - CHLEF 02000 -Algerie',
    'contact.info.phone': '+213 658 000 823',
    'contact.info.email': 'bmexpor02@gmail.com',
    'contact.whatsapp': 'Chat on WhatsApp',
    
    // WhatsApp
    'whatsapp.message': 'Hello BM Export, I\'m interested in your export services.',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.tagline': 'Excellence in Global Export',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.products': 'Produits',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'Votre Partenaire de Confiance pour l\'Export Mondial',
    'hero.subtitle': 'Livraison de produits agricoles de qualité dans le monde entier avec excellence et fiabilité',
    'hero.cta.contact': 'Contactez-nous',
    'hero.cta.quote': 'Demander un Devis',
    'hero.cta.whatsapp': 'Écrivez-nous sur WhatsApp',
    
    // About
    'about.title': 'À Propos de BM Export',
    'about.subtitle': 'Excellence dans le Commerce International',
    'about.description': 'BM Export est une entreprise leader dans l\'exportation internationale, spécialisée dans les produits agricoles de qualité supérieure. Avec des années d\'expérience et un engagement envers la qualité, nous connectons les producteurs aux marchés du monde entier.',
    'about.expertise.title': 'Expertise Internationale',
    'about.expertise.desc': 'Compréhension approfondie des marchés mondiaux et des réglementations commerciales',
    'about.quality.title': 'Qualité & Confiance',
    'about.quality.desc': 'Contrôle qualité rigoureux garantissant uniquement les meilleurs produits',
    'about.global.title': 'Portée Mondiale',
    'about.global.desc': 'Partenariats établis sur tous les continents',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions d\'Export Complètes',
    'services.agri.title': 'Export de Produits Agricoles',
    'services.agri.desc': 'Fruits, légumes et céréales de qualité supérieure pour les marchés internationaux',
    'services.logistics.title': 'Logistique Internationale',
    'services.logistics.desc': 'Gestion complète de la chaîne d\'approvisionnement et solutions d\'expédition',
    'services.packaging.title': 'Emballage & Contrôle Qualité',
    'services.packaging.desc': 'Emballage professionnel conforme aux normes internationales',
    'services.documentation.title': 'Documentation d\'Export',
    'services.documentation.desc': 'Gestion complète des formalités douanières et documents d\'exportation',
    
    // Why Choose Us
    'why.title': 'Pourquoi Choisir BM Export',
    'why.subtitle': 'Votre Succès est Notre Priorité',
    'why.experience.title': 'Années d\'Expérience',
    'why.experience.desc': 'Bilan prouvé dans le commerce international',
    'why.quality.title': 'Normes de Qualité',
    'why.quality.desc': 'Systèmes de gestion de la qualité certifiés ISO',
    'why.delivery.title': 'Livraison Mondiale',
    'why.delivery.desc': 'Expédition fiable vers toute destination',
    'why.pricing.title': 'Prix Compétitifs',
    'why.pricing.desc': 'Meilleur rapport qualité-prix pour des produits premium',
    
    // Products
    'products.title': 'Nos Produits',
    'products.subtitle': 'Exports Agricoles Premium',
    'products.viewDetails': 'Cliquez sur un produit pour voir les détails',
    'products.clickDetails': 'Voir les détails',
    'products.modal.origin': 'Origine',
    'products.modal.packaging': 'Emballage',
    'products.modal.availability': 'Disponibilité',
    'products.modal.inquire': 'Demander un Devis',
    'products.modal.close': 'Fermer',
    
    'products.olives.title': 'Olives Premium',
    'products.olives.desc': 'Olives méditerranéennes cueillies à la main',
    'products.olives.fullDesc': 'Nos olives premium sont cueillies à la main dans les meilleurs vergers méditerranéens. Disponibles en différentes variétés dont Kalamata, vertes et noires. Parfaites pour les marchés de détail et de gros.',
    'products.olives.origin': 'Région Méditerranéenne (Algérie, Grèce, Espagne)',
    'products.olives.packaging': 'Conteneurs en vrac, bocaux ou emballage personnalisé',
    'products.olives.availability': 'Disponible toute l\'année',
    
    'products.dates.title': 'Dattes Deglet Nour',
    'products.dates.desc': 'Dattes algériennes de la plus haute qualité',
    'products.dates.fullDesc': 'Deglet Nour, connue comme la "Reine des Dattes", offre une saveur délicate de miel et une apparence translucide. Provenant directement des oasis algériennes avec des siècles de tradition.',
    'products.dates.origin': 'Algérie - Oasis de Biskra & Tolga',
    'products.dates.packaging': 'Boîtes premium, cartons en vrac ou emballage personnalisé',
    'products.dates.availability': 'Récolte saisonnière (Octobre-Janvier), disponible toute l\'année',
    
    'products.citrus.title': 'Agrumes Frais',
    'products.citrus.desc': 'Oranges et citrons mûris au soleil',
    'products.citrus.fullDesc': 'Agrumes vibrants mûris au soleil incluant oranges, citrons, mandarines et pamplemousses. Cultivés dans des conditions climatiques méditerranéennes optimales.',
    'products.citrus.origin': 'Afrique du Nord & Bassin Méditerranéen',
    'products.citrus.packaging': 'Caisses standard, sacs filet ou coffrets cadeaux premium',
    'products.citrus.availability': 'Saisonnier (Novembre-Avril)',
    
    'products.grains.title': 'Céréales de Qualité',
    'products.grains.desc': 'Blé et céréales premium',
    'products.grains.fullDesc': 'Céréales de haute qualité incluant blé dur, orge et céréales spéciales. Cultivées selon des pratiques agricoles durables et répondant aux normes internationales.',
    'products.grains.origin': 'Hauts Plateaux Nord-Africains',
    'products.grains.packaging': 'Expédition en vrac, sacs de 25kg/50kg ou quantités personnalisées',
    'products.grains.availability': 'Toute l\'année avec pics saisonniers',
    
    'products.almonds.title': 'Amandes Premium',
    'products.almonds.desc': 'Amandes méditerranéennes croquantes',
    'products.almonds.fullDesc': 'Amandes de haute qualité connues pour leur saveur riche et leur valeur nutritionnelle. Disponibles crues, grillées, mondées ou en produits dérivés.',
    'products.almonds.origin': 'Région Méditerranéenne (Algérie, Maroc, Espagne)',
    'products.almonds.packaging': 'Sacs sous vide, conteneurs en vrac ou packs de détail',
    'products.almonds.availability': 'Disponible toute l\'année',
    
    'products.oliveOil.title': 'Huile d\'Olive Extra Vierge',
    'products.oliveOil.desc': 'Huile premium pressée à froid',
    'products.oliveOil.fullDesc': 'Huile d\'olive extra vierge premium, pressée à froid à partir d\'olives cueillies à la main. Riche en antioxydants avec une saveur fruitée distinctive.',
    'products.oliveOil.origin': 'Algérie - Régions de Bejaia & Tizi Ouzou',
    'products.oliveOil.packaging': 'Bouteilles en verre, bidons ou citernes en vrac',
    'products.oliveOil.availability': 'Nouvelle récolte annuelle (Novembre-Février)',
    
    'products.tomatoes.title': 'Tomates Fraîches',
    'products.tomatoes.desc': 'Qualité export mûries sur pied',
    'products.tomatoes.fullDesc': 'Tomates premium mûries sur pied cultivées en conditions optimales de serre et plein air. Disponibles en diverses variétés dont cerises, roma et cœur de bœuf.',
    'products.tomatoes.origin': 'Afrique du Nord & Méditerranée',
    'products.tomatoes.packaging': 'Caisses ventilées, cartons ou plateaux premium',
    'products.tomatoes.availability': 'Toute l\'année avec pic de saison (Mai-Octobre)',
    
    'products.figs.title': 'Figues Fraîches & Séchées',
    'products.figs.desc': 'Figues méditerranéennes sucrées',
    'products.figs.fullDesc': 'Figues succulentes disponibles fraîches en saison ou en produits séchés premium. Connues pour leur douceur naturelle et leurs bienfaits pour la santé.',
    'products.figs.origin': 'Algérie & Turquie',
    'products.figs.packaging': 'Fraîches: conteneurs ventilés; Séchées: sous vide ou boîtes',
    'products.figs.availability': 'Fraîches (Août-Octobre), Séchées (toute l\'année)',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prenez Contact',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.message': 'Votre Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': '16, Rue 1er  Nouvembre - CHLEF 02000 -Algerie',
    'contact.info.phone': '+213 658 000 823',
    'contact.info.email': 'bmexpor02@gmail.com',
    'contact.whatsapp': 'Discuter sur WhatsApp',
    
    // WhatsApp
    'whatsapp.message': 'Bonjour BM Export, je suis intéressé par vos services d\'exportation.',
    
    // Footer
    'footer.rights': 'Tous Droits Réservés',
    'footer.tagline': 'Excellence dans l\'Export Mondial',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.products': 'منتجاتنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.slogan': 'شريكك الموثوق في التصدير العالمي',
    'hero.subtitle': 'توصيل المنتجات الزراعية الممتازة إلى جميع أنحاء العالم بتميز وموثوقية',
    'hero.cta.contact': 'اتصل بنا',
    'hero.cta.quote': 'احصل على عرض سعر',
    'hero.cta.whatsapp': 'تواصل عبر واتساب',
    
    // About
    'about.title': 'عن BM Export',
    'about.subtitle': 'التميز في التجارة الدولية',
    'about.description': 'BM Export هي شركة رائدة في التصدير الدولي متخصصة في المنتجات الزراعية الممتازة. مع سنوات من الخبرة والالتزام بالجودة، نربط المنتجين بالأسواق في جميع أنحاء العالم.',
    'about.expertise.title': 'خبرة دولية',
    'about.expertise.desc': 'فهم عميق للأسواق العالمية ولوائح التجارة',
    'about.quality.title': 'الجودة والثقة',
    'about.quality.desc': 'رقابة صارمة على الجودة تضمن أفضل المنتجات فقط',
    'about.global.title': 'انتشار عالمي',
    'about.global.desc': 'شراكات راسخة عبر القارات',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول تصدير شاملة',
    'services.agri.title': 'تصدير المنتجات الزراعية',
    'services.agri.desc': 'فواكه وخضروات وحبوب عالية الجودة للأسواق الدولية',
    'services.logistics.title': 'الخدمات اللوجستية الدولية',
    'services.logistics.desc': 'إدارة سلسلة التوريد الشاملة وحلول الشحن',
    'services.packaging.title': 'التعبئة ومراقبة الجودة',
    'services.packaging.desc': 'تعبئة احترافية تلبي المعايير الدولية',
    'services.documentation.title': 'وثائق التصدير',
    'services.documentation.desc': 'التعامل الكامل مع الجمارك وأوراق التصدير',
    
    // Why Choose Us
    'why.title': 'لماذا تختار BM Export',
    'why.subtitle': 'نجاحك هو أولويتنا',
    'why.experience.title': 'سنوات من الخبرة',
    'why.experience.desc': 'سجل حافل في التجارة الدولية',
    'why.quality.title': 'معايير الجودة',
    'why.quality.desc': 'أنظمة إدارة الجودة معتمدة من ISO',
    'why.delivery.title': 'التوصيل العالمي',
    'why.delivery.desc': 'شحن موثوق إلى أي وجهة',
    'why.pricing.title': 'أسعار تنافسية',
    'why.pricing.desc': 'أفضل قيمة للمنتجات الممتازة',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'صادرات زراعية ممتازة',
    'products.viewDetails': 'انقر على أي منتج لعرض التفاصيل',
    'products.clickDetails': 'انقر للتفاصيل',
    'products.modal.origin': 'المنشأ',
    'products.modal.packaging': 'التعبئة',
    'products.modal.availability': 'التوفر',
    'products.modal.inquire': 'استفسر الآن',
    'products.modal.close': 'إغلاق',
    
    'products.olives.title': 'زيتون ممتاز',
    'products.olives.desc': 'زيتون متوسطي منتقى يدوياً',
    'products.olives.fullDesc': 'زيتوننا الممتاز منتقى يدوياً من أفضل البساتين المتوسطية. متوفر بأنواع مختلفة منها كالاماتا والأخضر والأسود. مثالي لأسواق التجزئة والجملة.',
    'products.olives.origin': 'منطقة البحر المتوسط (تونس، اليونان، إسبانيا)',
    'products.olives.packaging': 'حاويات سائبة، برطمانات أو تعبئة مخصصة',
    'products.olives.availability': 'متوفر على مدار السنة',
    
    'products.dates.title': 'تمر دقلة نور',
    'products.dates.desc': 'تمور تونسية من أعلى جودة',
    'products.dates.fullDesc': 'دقلة نور، المعروفة بـ "ملكة التمور"، تقدم نكهة عسلية رقيقة ومظهراً شفافاً. مصدرها مباشرة من واحات تونس مع قرون من التقاليد.',
    'products.dates.origin': 'تونس - واحات توزر وقبلي',
    'products.dates.packaging': 'علب فاخرة، كراتين سائبة أو تعبئة مخصصة',
    'products.dates.availability': 'موسم الحصاد (أكتوبر-يناير)، متوفر على مدار السنة',
    
    'products.citrus.title': 'حمضيات طازجة',
    'products.citrus.desc': 'برتقال وليمون ناضج تحت الشمس',
    'products.citrus.fullDesc': 'حمضيات نابضة بالحياة ناضجة تحت الشمس تشمل البرتقال والليمون واليوسفي والجريب فروت. تزرع في ظروف مناخية متوسطية مثالية.',
    'products.citrus.origin': 'شمال أفريقيا وحوض البحر المتوسط',
    'products.citrus.packaging': 'صناديق فاكهة قياسية، أكياس شبكية أو علب هدايا فاخرة',
    'products.citrus.availability': 'موسمي (نوفمبر-أبريل)',
    
    'products.grains.title': 'حبوب عالية الجودة',
    'products.grains.desc': 'قمح وحبوب ممتازة',
    'products.grains.fullDesc': 'حبوب عالية الجودة تشمل القمح الصلب والشعير والحبوب المتخصصة. تزرع باستخدام ممارسات زراعية مستدامة وتلبي المعايير الدولية.',
    'products.grains.origin': 'المرتفعات الشمال أفريقية',
    'products.grains.packaging': 'شحن سائب، أكياس 25 كجم/50 كجم أو كميات مخصصة',
    'products.grains.availability': 'على مدار السنة مع ذروات موسمية',
    
    'products.almonds.title': 'لوز ممتاز',
    'products.almonds.desc': 'لوز متوسطي مقرمش',
    'products.almonds.fullDesc': 'لوز عالي الجودة معروف بنكهته الغنية وقيمته الغذائية. متوفر نيء، محمص، مقشر أو كمنتجات لوز.',
    'products.almonds.origin': 'منطقة البحر المتوسط (تونس، المغرب، إسبانيا)',
    'products.almonds.packaging': 'أكياس مفرغة من الهواء، حاويات سائبة أو عبوات تجزئة',
    'products.almonds.availability': 'متوفر على مدار السنة',
    
    'products.oliveOil.title': 'زيت زيتون بكر ممتاز',
    'products.oliveOil.desc': 'زيت فاخر معصور على البارد',
    'products.oliveOil.fullDesc': 'زيت زيتون بكر ممتاز فاخر، معصور على البارد من زيتون منتقى يدوياً. غني بمضادات الأكسدة مع نكهة فاكهية مميزة.',
    'products.oliveOil.origin': 'تونس - مناطق صفاقس وسوسة',
    'products.oliveOil.packaging': 'زجاجات، علب معدنية أو صهاريج سائبة',
    'products.oliveOil.availability': 'حصاد جديد سنوياً (نوفمبر-فبراير)',
    
    'products.tomatoes.title': 'طماطم طازجة',
    'products.tomatoes.desc': 'جودة تصدير ناضجة على الكرمة',
    'products.tomatoes.fullDesc': 'طماطم فاخرة ناضجة على الكرمة مزروعة في ظروف مثالية. متوفرة بأنواع مختلفة منها الكرزية والروما وقلب الثور.',
    'products.tomatoes.origin': 'شمال أفريقيا والبحر المتوسط',
    'products.tomatoes.packaging': 'صناديق مهواة، كراتين أو صواني فاخرة',
    'products.tomatoes.availability': 'على مدار السنة مع موسم الذروة (مايو-أكتوبر)',
    
    'products.figs.title': 'تين طازج ومجفف',
    'products.figs.desc': 'تين متوسطي حلو',
    'products.figs.fullDesc': 'تين عصاري متوفر طازجاً في موسمه أو كمنتجات مجففة فاخرة. معروف بحلاوته الطبيعية وفوائده الصحية.',
    'products.figs.origin': 'تونس وتركيا',
    'products.figs.packaging': 'طازج: حاويات مهواة؛ مجفف: مفرغ من الهواء أو علب',
    'products.figs.availability': 'طازج (أغسطس-أكتوبر)، مجفف (على مدار السنة)',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.address': '16 شارع 1 نوفمبر ، الشلف 02000 - الجزائر',
    'contact.info.phone': '+213 658 000 823',
    'contact.info.email': 'bmexpor02@gmail.com',
    'contact.whatsapp': 'تحدث على واتساب',
    
    // WhatsApp
    'whatsapp.message': 'مرحبًا BM Export، أنا مهتم بخدمات التصدير الخاصة بكم.',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.tagline': 'التميز في التصدير العالمي',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
