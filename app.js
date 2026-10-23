// UDRMM (United Delivery Riders of Metro Manila) - Interactive Application Logic

// Multi-language dictionary: English (en) & Filipino / Tagalog (fil)
const translations = {
  en: {
    // Top Bar
    alertText: "🚨 MAY 1, 2027 NATIONAL MOBILIZATION (Labor Day): Metro Manila Riders Caravan & App Freeze.",
    alertLink: "View May 1 Details & Demands →",
    
    // Brand
    brand_subtitle: "United Delivery Riders<br>of Metro Manila",
    footerBrandSub: "United Delivery Riders of Metro Manila",

    // Nav
    navHome: "Home",
    navProtest: "May 1 Protest",
    navDemands: "Our Demands",
    navShop: "Membership & Shop",
    navTransparency: "Transparency",
    navStories: "Rider Stories",
    navFundingPot: "Funding Pot",
    navAbout: "About Us",
    navPetition: "10,000 Petition",
    btnJoinNav: "Join UDRMM or make a donation",
    
    // Hero
    heroBadge: "Official Union of Manila Food & Courier Riders",
    heroTitlePart1: "No delivery is worth a ",
    heroTitleHighlight: "rider's safety.",
    heroSubtitle: "United Delivery Riders of Metro Manila (UDRMM) is an independent, worker-led union fighting against algorithmic pay cuts, wet-season delivery speed penalties, and hazardous working conditions in Metro Manila.",
    heroCtaJoin: "Join UDRMM or make a donation",
    heroCtaProtest: "May 1st action hub",
    statMembers: "Registered Union Members Goal",
    statCities: "Metro Manila cities covered",
    
    // Hero Card
    heroCardTitle: "United we ride, united we win",
    heroCardDesc: "Organizing riders from FoodTiger, Grab, Foodpanda, and independent couriers across all 16 cities.",
    perk1: "Official heavy-duty high-vis gear & safety package included",
    perk2: "Legal aid & emergency suspension support",
    perk3: "Barangay solidarity shelters during typhoons",
    perk4: "Collective bargaining representation with DOLE",
    freePonchoBadge: "INCLUDED WITH DUES",
    heroPonchoTitle: "Official all-weather jacket included",
    heroPonchoDesc: "High-visibility reflective all-weather jacket given to all riders upon registration.",
    membershipFeeDuesLbl: "Already included in annual union dues",
    membershipFeeLabel: "Includes high-vis safety vest & stickers (Annual dues: ₱350/yr)",
    btnClaimPoncho: "Join UDRMM or make a donation",

    // Live Weather & Flood Risk Advisory Widget
    weatherBadge: "PAGASA & PROJECT NOAH ADVISORY",
    pagasaLevelOrange: "Orange Warning (15-30 mm/hr)",
    weatherTitle: "Metro Manila weather & flood risk status",
    weatherDesc: "Active monsoon downpour. Flooding threatening España, Taft, and EDSA corridors. Platforms must suspend automatic delivery time penalties.",

    // Protest Section
    protestBadge: "MAY 1, 2027 • LABOR DAY MOBILIZATION",
    protestTitle: "The May 1st, 2027 Rider Unity March & App freeze",
    protestDesc: "During the rainy season, platform giants cut pay per order while demanding unchanged dry-season delivery speeds. On May 1st, 2027 (Labor Day), thousands of riders across Metro Manila will unite for a peaceful caravan, dialogue, and 1-hour solidarity app freeze.",
    countdownHeading: "Countdown to May 1st mobilization",
    countdownSub: "Saturday, May 1, 2027 • Assembly at 09:00 AM",
    lblDays: "Days",
    lblHours: "Hours",
    lblMins: "Mins",
    lblSecs: "Secs",
    
    scheduleHeading: "May 1st action schedule (Labor Day 2027)",
    sch1Time: "09:00 AM",
    sch1Title: "Twin assembly points",
    sch1Desc: "Riders gather at Welcome Rotonda (Quezon City / Manila border) and EDSA Shrine (Ortigas). Distribution of high-vis armbands.",
    sch2Time: "10:00 AM",
    sch2Title: "Peaceful motorcade caravan",
    sch2Desc: "Orderly single-lane motorcycle caravan towards corporate headquarters in Bonifacio Global City (BGC) and DOLE NCR.",
    sch3Time: "12:00 PM - 01:00 PM",
    sch3Title: "Silent app freeze (1-hour boycott)",
    sch3Desc: "Mass app logoff. No orders picked up across participating districts to demonstrate the real economic impact of riders.",
    sch4Time: "02:00 PM",
    sch4Title: "Charter of demands handover & dialogue",
    sch4Desc: "UDRMM representatives present our 5 Five-Point Collective Demands directly to FoodTiger management and DOLE officials.",

    demandsHeading: "What we are demanding vs Platform policy",
    dem1Title: "Mandatory gov't flood data integration",
    dem1Badge: "PAGASA & NOAH API",
    dem1Current: "Current: Platforms use blind algorithms that force riders into flooded corridors and cut wet-weather pay by 20%.",
    dem1Proposed: "Demand: Mandatory API integration of PAGASA/NOAH flood maps to auto-reroute flooded corridors, trigger +35% to +50% hazard pay, and pause speed timers.",
    dem2Title: "Unrealistic delivery speed timers",
    dem2Badge: "Safety Timers",
    dem2Current: "Current: Fixed 25-min timers regardless of flooded streets, leading to 1-star weather penalties.",
    dem2Proposed: "Demand: Dynamic timer extensions and complete nullification of customer rating penalties during rain alerts.",
    dem3Title: "Arbitrary account suspension",
    dem3Badge: "Due Process",
    dem3Current: "Current: Algorithmic deactivation without human explanation when riders decline flooded trips.",
    dem3Proposed: "Demand: 72-hour formal notice, UDRMM representation, and DOLE Labor Advisory 17 right-to-refuse protection.",
    dem4Title: "Safety gear & medical coverage",
    dem4Badge: "Worker Health",
    dem4Current: "Current: 100% equipment, weather gear, and injury expenses borne entirely by the rider.",
    dem4Proposed: "Demand: Free company-issued all-weather jackets & emergency medical clinic fund in all 16 cities.",

    // The 5 Official Pledges & 10,000 Signatures Public Petition
    petitionDeadlineTag: "Deadline: Before the heavy rains start (by June 2027)",
    pledgesTitle: "★ THE 5 OFFICIAL UDRMM CAMPAIGN PLEDGES & PETITION DEMANDS",
    pl1Desc: "<strong>Mandatory Gov't Flood Integration:</strong> Delivery apps must connect to DOST-PAGASA &amp; Project NOAH APIs to auto-reroute flooded streets and trigger +35% to +50% hazard pay.",
    pl2Desc: "<strong>Abolish Speed Demerits:</strong> Suspend 25-min delivery countdowns and nullify negative customer ratings during official rainfall alerts.",
    pl3Desc: "<strong>DOLE Right-to-Refuse Protection:</strong> Protect riders from account deactivations or AR penalties when declining dangerous submerged routes.",
    pl4Desc: "<strong>Human Due Process:</strong> Guarantee 72-hour formal notice and union legal representation before any account suspension.",
    pl5Desc: "<strong>Free Weather Gear &amp; Shelters:</strong> Provide free high-vis waterproof all-weather jackets and typhoon rest hubs across all 16 cities.",

    petitionTrackerTitle: "Goal: Collect 10,000 petition signatures on the website before the heavy rains start (by June 2027)",
    petitionTrackerSub: "Sign the free public petition to demand mandatory flood app integration, storm hazard pay, and zero weather speed demerits.",
    petitionFreeBadge: "✍️ 100% Free public petition (No payment required)",
    rsvpTitle: "Sign the public petition: protect delivery riders before the heavy rains",
    rsvpSub: "Whether you are a delivery rider, customer, or ally, add your signature to demand safety and fair pay before June 2027. 100% free.",
    btnPledge: "Sign petition (Free)",
    btnPledged: "✓ Petition signed",
    rsvpLabel: "Signatures collected",

    // Shop & Free Poncho
    shopBadge: "UNION MEMBERSHIP & SOLIDARITY SHOP",
    shopTitle: "Wear the Change. Fund the Movement.",
    shopDesc: "Every purchase directly supports UDRMM legal funds, emergency rider medical aid, and community meeting hubs.",
    
    // Hero Poncho Product
    vestagliaTag: "★ EXCLUSIVE UNION MEMBER BENEFIT",
    vestagliaTitle: "Official all-weather jacket",
    vestagliaDesc: "Designed specifically for Manila's torrential monsoon conditions. Made with double-sealed Oxford waterproof nylon, 360° neon safety stripes, storm flaps, and the official UDRMM rider chest insignia. Included for all registered union members with paid annual dues.",
    vf1: "100% storm-proof waterproof fabric",
    vf2: "360° neon & silver reflective safety bands",
    vf3: "Helmet-compatible drawstring hood",
    vf4: "Reinforced mobile phone chest pockets",
    vestagliaPriceLabel: "Included with ₱350/yr union membership",
    btnClaimPoncho: "Join UDRMM or make a donation",
    
    // Accessories Grid
    accessoriesTitle: "Official solidarity accessories",
    accessoriesDesc: "High-durability accessories designed for riders and solidarity allies.",
    
    itemVestTitle: "Official high-vis security jacket / safety vest",
    itemVestDesc: "Industrial-grade neon yellow security safety vest with dual 3M reflective bands. Features the official union emblem on the chest and the rallying slogan 'NO DELIVERY IS WORTH A RIDER'S SAFETY' on the back.",
    itemVestSizeLbl: "Size:",

    itemStickersTitle: "Official weatherproof vinyl sticker pack (Yellow & Red)",
    itemStickersDesc: "Heavy-duty outdoor laminated vinyl stickers in high-vis neon yellow and deep crimson red. Features the official union emblem and bold typography, ideal for helmets, motorcycle windshields, and delivery boxes.",
    itemStickerVariantLbl: "Pack:",

    itemCapTitle: "Official UDRMM embroidered cap",
    itemCapDesc: "Durable cotton twill cap featuring the Philippine sun badge, scooter emblem, and the embroidered slogan: 'NO DELIVERY IS WORTH A RIDER'S SAFETY'. Available in Royal Blue and Crimson Red.",
    itemCapColorLbl: "Color:",
    
    itemPhoneTitle: "Heavy-duty handlebar phone mount",
    itemPhoneDesc: "100% waterproof sealed case with touchscreen sensitivity, vibration absorption, and secure handlebar clamp. Built for intense rain navigation.",
    
    btnAddCart: "Add to bag",
    btnAdded: "✓ Added!",
    
    // Stories Section
    storiesBadge: "VOICES FROM THE ROAD",
    storiesTitle: "Why we organize: real rider stories",
    storiesDesc: "Listen to the lived experiences of delivery workers navigating Manila's streets.",
    story1Text: "\"During the July typhoons, floodwaters on España reached knee-deep. A customer gave me a 1-star rating because soup was 8 minutes late. That rating cut my incentives for a week. That is when I knew we needed a union.\"",
    story1Author: "Kuya Jun",
    story1Role: "FoodTiger Rider, Pasig City (4 Years)",
    story2Text: "\"The official high-vis all-weather jacket from UDRMM literally saved my life last month in heavy mist along C-5. Drivers can finally see us. I truly recommend it to anyone working in this field.\"",
    story2Author: "Ate Maria",
    story2Role: "Grab Courier & Food Delivery Rider, Quezon City (3 Years)",
    story3Text: "\"Foodpanda tells us we are 'independent partners'. But partners don't get their pay slashed without a word. On May 1st, 2027, we are not asking for charity—we are asking for dignity.\"",
    story3Author: "Kuya Roland",
    story3Role: "Foodpanda Rider, Manila (5 Years)",

    // Community Solidarity Pot (Funding Pot) Section
    fundingBadge: "COMMUNITY SOLIDARITY POT",
    fundingTitle: "Support our battles & May 1 mobilization",
    fundingDesc: "You don't need to be a delivery rider to stand with our cause. Anyone—consumers, allies, students, and community supporters—can contribute directly to our union fighting pot. Every peso powers our May 1st strike caravan, emergency typhoon relief, and collective legal defense.",
    potBadge: "MAY 1 MOBILIZATION & TYPHOON FUND",
    potTitle: "Community fighting pot",
    potRaisedLbl: "Total raised so far:",
    potGoalLbl: "Target goal:",
    potSupportersCount: "grassroots contributors",
    potDeadline: "🎯 Deadline: May 1, 2027",
    potImpactTitle: "How your contribution is directly put to work:",
    impactItem1: "<strong>35% May 1 Strike Logistics:</strong> Sound truck, hydration stations &amp; rally marshals across EDSA.",
    impactItem2: "<strong>30% Typhoon &amp; Flood Relief:</strong> Emergency towing subsidies and food packs for stranded riders.",
    impactItem3: "<strong>20% Legal Defense Desk:</strong> Retainer assistance for DOLE complaints against app deactivations.",
    impactItem4: "<strong>15% Young Courier Safety:</strong> Free high-vis decals and emergency repair toolkit kits.",
    potTransparencyLink: "Full accounting published in our <a href=\"#transparency\">Transparency section</a> below.",
    donateCardTitle: "Make a solidarity contribution",
    donateCardSub: "Choose a preset amount or enter any amount you wish to contribute online.",
    freqOneTime: "One-time gift",
    freqMonthly: "Monthly solidarity pledge",
    presetAmountLbl: "Select amount (PHP):",
    preset100Badge: "Rally Kit",
    preset250Badge: "Caravan Fuel",
    preset500Badge: "Popular • Safety",
    preset1000Badge: "Legal Defense",
    preset2500Badge: "Sound Truck",
    customAmountLbl: "Or enter custom amount:",
    potPaymentMethodLbl: "Payment method:",
    donorNameLbl: "Your name:",
    donorContactLbl: "Email or mobile:",
    donorAnonymousLbl: "Keep my name anonymous on the public contributor list",
    donorMessageLbl: "Solidarity message for riders (optional):",
    donationDisclaimer: "🔒 100% transparent. No app fees deducted. All simulated online transactions directly support worker mutual aid.",

    // Transparency & Grassroots Governance
    transparencyBadge: "FINANCIAL TRANSPARENCY & DEMOCRACY",
    transparencyTitle: "How we use our funds & organize together",
    transparencyDesc: "100% worker-led. Every peso from union dues and merchandise proceeds is accounted for, democratically decided, and directed back to rider safety and mutual defense.",
    transCard1Title: "Transparent union fund allocation",
    transCard1Sub: "Where every ₱350 annual union dues and solidarity proceeds go",
    fundItem1Title: "Emergency rider medical & typhoon relief fund",
    fundItem1Desc: "Direct cash assistance for road crash injuries, hospitalization support, emergency towing during floods, and typhoon food packs when apps freeze orders.",
    fundItem2Title: "High-vis safety gear & member packages",
    fundItem2Desc: "Procuring and distributing high-visibility reflective safety vests, all-weather jackets, and waterproof helmet stickers issued to every registered member.",
    fundItem3Title: "Legal defense & anti-deactivation clinic",
    fundItem3Desc: "Filing formal DOLE Single Entry Approach (SEnA) complaints, rapid-response documentation of algorithmic lockouts, and union conciliation representation.",
    fundItem4Title: "Grassroots face-to-face meetings & assemblies",
    fundItem4Desc: "Community hall rentals, sound system logistics, and meeting refreshments for regular local face-to-face rider assemblies across all 16 Metro Manila cities.",
    fundItem5Title: "Campaign materials, education & mobilization",
    fundItem5Desc: "Printed rider rights primers, leaflets at courier hubs, megaphones, banners, and safety marshal logistics for the May 1st Rider Unity Caravan.",
    auditNote: "100% of union dues and shop proceeds are directly reinvested in rider welfare and democratic organizing. Audited books are presented at every general assembly.",
    transCard2Title: "Grassroots democracy & community resources",
    transCard2Sub: "Regular face-to-face assemblies and institutional support",
    meetingTitle: "Regular face-to-face meetings",
    meetingDesc: "UDRMM organizes regular face-to-face meetings to discuss issues, make decisions, and plan collective actions. We practice direct worker democracy: no decisions are made top-down by distant executives. Every campaign strategy, negotiation mandate, and solidarity initiative is debated and voted on directly by riders on the ground.",
    resourcesTitle: "Our shared institutional & community resources",
    resLaborTitle: "National labour group & local labour-rights NGO",
    resLaborDesc: "We receive legal advice from pro-bono labor attorneys, volunteer support for campaign logistics, dedicated meeting spaces for leadership strategy, and limited financial support for emergency printing and solidarity projects.",
    resBarangayTitle: "Barangay community centers & local networks",
    resBarangayDesc: "Local barangay covered courts and community halls provide accessible meeting spaces for neighborhood chapter assemblies, while grassroots community networks serve as an essential information relay for severe weather advisories, rest stop staging, and union mobilizations.",
    resMutualTitle: "Rider-to-rider peer mutual aid",
    resMutualDesc: "Roadside emergency mechanic assistance, flat-tire rescue networks, battery jump-starts, and real-time flood reporting coordinated by riders via Messenger and WhatsApp community broadcast groups.",

    // Public Petition Modal
    modalPetitionTitle: "Sign the public petition: protect delivery riders",
    modalPetitionSub: "Our goal is to collect 10,000 petition signatures on the website before the heavy rains start (by June 2027). Add your voice to demand mandatory flood app integration, storm hazard pay, and an immediate end to rain speed penalties.",
    petitionFreeNote: "Signing is 100% free and open to everyone.",
    petitionNotDuesNote: "This is a public solidarity petition for riders, customers, and allies. It is not union membership registration and requires zero fees.",
    petitionContactLbl: "Email address or mobile phone:",
    petitionRoleLbl: "I am signing as a:",
    petitionCommentLbl: "Message of solidarity (optional):",
    petitionConsentLbl: "I endorse the 5 official UDRMM campaign pledges and authorize adding my signature to the 10,000 goal petition presented to platform companies and DOLE before June 2027.",
    btnSubmitPetition: "✍️ Add my signature for free",
    petitionSuccessTitle: "Maraming salamat! Signature recorded!",
    petitionSuccessSub: "Your name has been added to our public petition. Together we are marching toward our goal of 10,000 signatures before the June 2027 monsoon heavy rains.",

    // About Section
    aboutBadge: "ACADEMIC FRAMEWORK",
    aboutTitle: "Battling Global Giants Locally (B.G.G.L.)",
    aboutDesc1: "<strong>Battling Global Giants Locally (B.G.G.L.)</strong> is our student taskforce crew for university MSM Assignment 2. The name represents our focus on supporting local workers in their struggle against the power of global platform companies, and the acronym <strong>B.G.G.L.</strong> is formed directly from the initials of the four students comprising this taskforce: <strong>B</strong>eatrice, <strong>G</strong>yeong, <strong>G</strong>eorgia, and <strong>L</strong>ouise.",
    aboutDesc2: "<strong>Academic Framework &amp; Fictional Identity:</strong> This website is an academic prototype created exclusively as a university assignment (MSM Assignment 2). <strong>United Delivery Riders of Metro Manila (UDRMM) is a fictional worker-led union</strong> designed as a case study communication campaign to explore how gig couriers could organize against multinational delivery platforms. All actions, memberships, and campaign initiatives presented on this site are part of this fictional educational simulation.",
    teamHeading: "Taskforce 2 Working Group",
    teamSub: "Ordered following the student initials in B.G.G.L. (Beatrice, Gyeong, Georgia, Louise):",
    roleDesign: "Design",
    roleWriting: "Writing",
    roleComm: "Communication",
    roleLeadership: "Leadership",
    
    // Cart Drawer
    cartTitle: "Your solidarity bag",
    cartEmpty: "Your bag is empty. Add accessories to support the union!",
    subtotalLbl: "Subtotal:",
    btnCheckout: "Proceed to order",
    
    // Membership Modal & Supporter Donation
    modalMemberTitle: "Join UDRMM or make a donation",
    tabRiderMember: "Rider membership (₱350/yr)",
    tabSupporterDonation: "Donate as supporter",
    modalMemberSub: "Join the United Delivery Riders of Metro Manila. Annual union dues (₱350 PHP / year) are required to sustain our collective legal defense, helmet stickers, and worker-led campaign.",
    modalSupporterSub: "You don't need to be a delivery rider to stand with our cause. Anyone—consumers, allies, and supporters—can donate online to fund our May 1st strike caravan, typhoon emergency aid, and courier legal defense.",
    modalSupporterBannerTitle: "Community supporter donation",
    modalSupporterBannerDesc: "100% of your contribution powers worker mutual aid, storm relief, and the May 1st mobilization. No platform or delivery rider duties required.",
    unionDuesTitle: "💳 Annual union dues: ₱350 PHP / year (Required)",
    regDuesNote: "Includes official high-vis all-weather jacket & waterproof stickers package upon paid enrollment.",
    modalNameLbl: "Full name:",
    modalPlatformLbl: "Delivery platform(s):",
    modalCityLbl: "City / Barangay in Metro Manila:",
    modalPhoneLbl: "Mobile phone:",
    modalSizeLbl: "Select all-weather jacket / gear size:",
    duesPaymentOptionLbl: "Annual membership fee (₱350 PHP / year):",
    btnSubmitRegistration: "Pay ₱350 dues & complete registration",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Welcome to UDRMM!",
    registeredSub: "Your membership registration and annual dues payment (₱350 PHP) have been confirmed. Here is your official Union Digital ID:",
    regPonchoNote: "Your official high-vis jacket & waterproof stickers package will be prepared for pickup at the UDRMM office or coordinated via your mobile phone.",
    supporterSuccessTitle: "Maraming salamat! Solidarity donation received!",
    supporterSuccessSub: "Your contribution directly powers our May 1st mobilization, typhoon mutual aid, and courier legal defense. Here is your official Supporter Digital Certificate:",
    
    // GDPR & Cookie Banner
    cookieTitle: "Cookie & Data Privacy Notice",
    cookieText: "We value your privacy. As an academic prototype for MSM Assignment 2, this website uses only strictly essential local storage (such as saving your English/Filipino language preference). We do NOT use tracking, profiling, or third-party advertising cookies. All checkout and membership functions are simulated mock-ups.",
    cookieAcceptBtn: "Accept essential only",
    cookieDetailsBtn: "Privacy details & settings",
    privacyModalTitle: "Data privacy & GDPR notice",
    privacyModalSubtitle: "Academic Prototype • MSM Assignment 2 (Taskforce 2)",
    btnCloseModal: "Close window"
  },

  fil: {
    // Top Bar
    alertText: "🚨 PAMBANSANG PAGKILOS SA MAYO 1, 2027 (Araw ng Paggawa): Martsa at App Freeze ng mga Rider.",
    alertLink: "Tingnan ang Detalye at mga Hiling sa Mayo 1 →",
    
    // Brand
    brand_subtitle: "United Delivery Riders<br>of Metro Manila",
    footerBrandSub: "United Delivery Riders of Metro Manila",

    // Nav
    navHome: "Tahanan",
    navProtest: "Mayo 1",
    navDemands: "Mga Hiling",
    navShop: "Tindahan",
    navTransparency: "Katapatan",
    navStories: "Mga Kuwento",
    navFundingPot: "Pondo",
    navAbout: "Tungkol",
    navPetition: "Petisyon",
    btnJoinNav: "Sumapi sa UDRMM o mag-ambag",
    
    // Hero
    heroBadge: "Opisyal na Unyon ng mga Food at Courier Rider sa Maynila",
    heroTitlePart1: "Walang order ang katumbas ng ",
    heroTitleHighlight: "kaligtasan ng rider.",
    heroSubtitle: "Ang United Delivery Riders of Metro Manila (UDRMM) ay isang nagsasarili at pinangungunahan ng manggagawang unyon na lumalaban sa bawas-sahod ng algorithm, parusa sa bilis tuwing tag-ulan, at mapanganib na kalagayan sa kalsada.",
    heroCtaJoin: "Sumapi sa UDRMM o mag-ambag",
    heroCtaProtest: "Sentro ng Pagkilos sa Mayo 1",
    statMembers: "Target na rehistradong kasapi ng unyon",
    statCities: "Mga Lungsod sa Metro Manila",
    
    // Hero Card
    heroCardTitle: "Sama-Samang Babyahe, Sama-Samang Magtatagumpay",
    heroCardDesc: "Pinagbubuklod ang mga rider mula FoodTiger, Grab, Foodpanda, at iba pang courier sa buong Kamaynilaan.",
    perk1: "Kasama ang High-Vis Reflective Safety Vest at Stickers",
    perk2: "Tulong legal at suporta kapag na-suspend ang app account",
    perk3: "Barangay solidarity shelters kapag may bagyo",
    perk4: "Representasyon sa pakikipag-usap sa DOLE at kumpanya",
    freePonchoBadge: "KASAMA SA BUTAW",
    heroPonchoTitle: "Opisyal na Safety Gear Kasama",
    heroPonchoDesc: "Mataas ang visibility na reflective all-weather vest at stickers para sa mga rehistradong rider.",
    membershipFeeDuesLbl: "Kasama na sa taunang butaw sa unyon",
    membershipFeeLabel: "Kasama ang High-Vis Safety Vest at Stickers (Taunang Butaw: ₱350/taon)",
    btnClaimPoncho: "Sumapi sa UDRMM o mag-ambag",

    // Live Weather & Flood Risk Advisory Widget
    weatherBadge: "PAALALA NG PAGASA AT PROJECT NOAH",
    pagasaLevelOrange: "Orange Warning (15-30 mm/oras)",
    weatherTitle: "Lagay ng Panahon at Baha sa Metro Manila",
    weatherDesc: "Malakas na buhos ng habagat. May banta ng baha sa España, Taft, at EDSA. Dapat tanggalin ng mga app platform ang time penalties.",

    // Protest Section
    protestBadge: "MAYO 1, 2027 • ARAW NG PAGGAWA",
    protestTitle: "Martsa ng Pagkakaisa ng mga Rider sa Mayo 1, 2027",
    protestDesc: "Tuwing tag-ulan, binabawasan ng FoodTiger ang bayad sa bawat delivery ngunit pareho pa rin ang bilis na hinihingi tulad ng tag-init. Sa Mayo 1, 2027 (Araw ng Paggawa), magsasama-sama ang mga rider para sa payapang motorcade caravan, diyalogo, at 1-oras na pag-logoff sa app.",
    countdownHeading: "Oras Bago ang Pagkilos sa Mayo 1",
    countdownSub: "Sabado, Mayo 1, 2027 • Tipunan sa ganap na 09:00 AM",
    lblDays: "Araw",
    lblHours: "Oras",
    lblMins: "Minuto",
    lblSecs: "Segundo",
    
    scheduleHeading: "Plano ng Pagkilos sa Mayo 1, 2027",
    sch1Time: "09:00 AM",
    sch1Title: "Dalawang Tipunan",
    sch1Desc: "Pagtitipon sa Welcome Rotonda (QC/Manila) at EDSA Shrine (Ortigas). Pamamahagi ng mga high-visibility armband.",
    sch2Time: "10:00 AM",
    sch2Title: "Payapang Motorcade Caravan",
    sch2Desc: "Maayos na motorcade patungong regional headquarters ng FoodTiger sa Bonifacio Global City (BGC) at DOLE NCR.",
    sch3Time: "12:00 PM - 01:00 PM",
    sch3Title: "Tahimik na Pag-freeze ng App (1-Oras)",
    sch3Desc: "Sabay-sabay na pag-logoff sa mga platform app upang ipakita ang tunay na halaga at lakas ng serbisyo ng mga rider.",
    sch4Time: "02:00 PM",
    sch4Title: "Pagsumite ng Talaan ng mga Hiling at Diyalogo",
    sch4Desc: "Opisyal na iaabot ng mga kinatawan ng UDRMM ang Limang Punto ng Kahilingan sa pamunuan ng kumpanya at opisyal ng gobyerno.",

    demandsHeading: "Aming mga Hiling vs Patakaran ng Kumpanya",
    dem1Title: "Sapilitang Pag-integrate ng Datos ng Baha",
    dem1Badge: "PAGASA & NOAH API",
    dem1Current: "Kasalukuyan: Gumagamit ang mga app ng bulag na algorithm na pumupuwersa sa mga rider na lumusong sa baha at nagbabawas ng 20% sa sahod.",
    dem1Proposed: "Hiling: Sapilitang pagsama ng PAGASA/NOAH flood maps sa app upang kusang umiwas sa baha, magbigay ng +35% hanggang +50% hazard pay, at itigil ang mga timer.",
    dem2Title: "Mapanirang Delivery Timers",
    dem2Badge: "Oras ng Kaligtasan",
    dem2Current: "Kasalukuyan: Mahigpit na 25-minutong timer kahit lubog ang daan, na nagdudulot ng 1-star weather penalties.",
    dem2Proposed: "Hiling: Pagpapahaba sa oras at pagbura sa mga mababang customer rating kapag may babala ng ulan.",
    dem3Title: "Biglaang Pagka-Suspend ng Account",
    dem3Badge: "Makatarungang Paglilitis",
    dem3Current: "Kasalukuyan: Biglaang pag-suspend ng algorithm kapag tumanggi ang rider na dumaan sa baha.",
    dem3Proposed: "Hiling: 72-oras na abiso, representasyon ng unyon, at proteksyon sa ilalim ng DOLE Labor Advisory 17.",
    dem4Title: "Kagamitang Pangkaligtasan at Medikal",
    dem4Badge: "Kalusugan ng Manggagawa",
    dem4Current: "Kasalukuyan: 100% ng gamit, kapote, at gastusin sa aksidente ay sariling sagot ng rider.",
    dem4Proposed: "Hiling: Libreng all-weather jacket mula sa kumpanya at emergency medical assistance fund sa lahat ng 16 na lungsod.",

    // The 5 Official Pledges & 10,000 Signatures Public Petition
    petitionDeadlineTag: "Takdang Araw: Bago magsimula ang malalakas na ulan (pagsapit ng Hunyo 2027)",
    pledgesTitle: "★ ANG 5 OPISYAL NA PANGAKO NG KAMPANYA AT MGA HILING SA PETISYON",
    pl1Desc: "<strong>Sapilitang Pag-integrate ng Datos ng Baha:</strong> Dapat ikonekta ang delivery apps sa DOST-PAGASA at Project NOAH APIs upang kusang umiwas sa baha at magbigay ng +35% hanggang +50% hazard pay.",
    pl2Desc: "<strong>Tanggalin ang Parusa sa Bilis:</strong> Itigil ang 25-minutong countdown at burahin ang negatibong ratings habang may opisyal na rainfall alert.",
    pl3Desc: "<strong>Proteksyon sa DOLE Right-to-Refuse:</strong> Protektahan ang rider sa suspension o AR penalties kapag tumangging dumaan sa delikadong baha.",
    pl4Desc: "<strong>Makatarungang Paglilitis sa Tao:</strong> Garantiyang 72-oras na abiso at tulong legal ng unyon bago ang anumang suspension ng account.",
    pl5Desc: "<strong>Libreng Gamit at Masisilungan:</strong> Libreng matibay at high-vis na all-weather jacket at mga masisilungan tuwing bagyo sa lahat ng 16 lungsod.",

    petitionTrackerTitle: "Layunin: Makakalap ng 10,000 pirma sa petisyon sa website bago magsimula ang tag-ulan (sa Hunyo 2027)",
    petitionTrackerSub: "Pirmahan ang libreng petisyon upang hilingin ang flood map integration, hazard pay, at pagpapatigil sa speed penalties tuwing may bagyo.",
    petitionFreeBadge: "✍️ 100% Libreng pampublikong petisyon (Walang bayad)",
    rsvpTitle: "Pirmahan ang pampublikong petisyon: protektahan ang mga delivery rider bago ang tag-ulan",
    rsvpSub: "Rider ka man, kostumer, o taga-suporta, idagdag ang iyong pirma bago sumapit ang Hunyo 2027. 100% libre.",
    btnPledge: "Pirmahan ang petisyon (Libre)",
    btnPledged: "✓ Napirmahan na ang petisyon",
    rsvpLabel: "Mga nakalap na pirma",

    // Shop & Free Poncho
    shopBadge: "KASAPIAN SA UNYON AT SOLIDARITY SHOP",
    shopTitle: "Isuot ang Pagbabago. Suportahan ang Kilusan.",
    shopDesc: "Bawat kita ay direktang napupunta sa pondong legal ng UDRMM, tulong medikal sa mga naaksidenteng rider, at mga sentrong pangkomunidad.",
    
    // Hero Poncho Product
    vestagliaTag: "★ NATATANGING BENEPISYO NG KASAPING RIDER",
    vestagliaTitle: "Opisyal na all-weather jacket",
    vestagliaDesc: "Espesyal na idinisenyo para sa malalakas na habagat at bagyo sa Maynila. Gawa sa double-sealed waterproof Oxford nylon, may 360° neon at reflective bands, storm flaps, at burdadong sagisag ng UDRMM. Kasama para sa lahat ng rehistradong miyembro na nagbayad ng taunang butaw.",
    vf1: "100% Hindi Bumabasa kahit Matinding Bagyo",
    vf2: "360° Neon at Silver Reflective Safety Bands",
    vf3: "Kasya sa Helmet ang Tali ng Hood",
    vf4: "Protektadong Bulsa para sa Mobile Phone",
    vestagliaPriceLabel: "Kasama sa ₱350/taon na Pagsapi sa Unyon",
    btnClaimPoncho: "Sumapi sa UDRMM o mag-ambag",
    
    // Accessories Grid
    accessoriesTitle: "Mga Opisyal na Gamit ng Unyon",
    accessoriesDesc: "Matitibay na gamit para sa mga rider at tagapagtaguyod ng karapatan sa paggawa.",
    
    itemVestTitle: "Opisyal na High-Vis Security Jacket / Safety Vest",
    itemVestDesc: "Maliwanag na neon yellow security safety vest na may dobleng 3M reflective safety bands. May opisyal na sagisag ng unyon sa dibdib at ang panawagang 'NO DELIVERY IS WORTH A RIDER'S SAFETY' sa likod.",
    itemVestSizeLbl: "Sukat:",

    itemStickersTitle: "Opisyal na Weatherproof Vinyl Sticker Pack (Dilaw at Pula)",
    itemStickersDesc: "Matibay at hindi nababasang outdoor laminated vinyl stickers sa neon yellow at malalim na crimson red. Tampok ang opisyal na sagisag ng unyon at malinaw na disenyo para sa mga helmet, windshield, at delivery box.",
    itemStickerVariantLbl: "Pake:",

    itemCapTitle: "Opisyal na Burdadong Sumbrero ng UDRMM",
    itemCapDesc: "Matibay na cotton twill cap na may sagisag ng araw ng Pilipinas, motorsiklo, at burdadong katagang: 'NO DELIVERY IS WORTH A RIDER'S SAFETY'. May kulay na Royal Blue at Crimson Red.",
    itemCapColorLbl: "Kulay:",
    
    itemPhoneTitle: "Heavy-Duty Handlebar Phone Mount Case",
    itemPhoneDesc: "100% waterproof na lalagyan ng cellphone na kayang pindutin ang touchscreen. Matibay ang kapit sa manibela kahit maalon at mabaha ang daan.",
    
    btnAddCart: "Idagdag sa Bag",
    btnAdded: "✓ Naidagdag Na!",
    
    // Stories Section
    storiesBadge: "TINIG MULA SA KALSADA",
    storiesTitle: "Bakit Kami Nagkakaisa: Kuwento ng mga Rider",
    storiesDesc: "Pakinggan ang totoong pinagdadaanan ng mga delivery worker sa kalsada ng Maynila.",
    story1Text: "\"Noong bagyo ng Hulyo, abot-tuhod ang baha sa España. Na-late ako ng walong minuto sa sopas, binigyan ako ng customer ng 1 star. Nawala ang incentive ko ng isang linggo. Doon ko napagtanto na kailangan namin ng unyon.\"",
    story1Author: "Kuya Jun",
    story1Role: "FoodTiger Rider, Pasig City (4 Taon)",
    story2Text: "\"Yung opisyal na all-weather jacket ng UDRMM ang nagligtas sa akin sa makapal na ambon sa C-5. Nakikita na kami ng mga dambuhalang trak. Talagang inirerekomenda ko ito sa sinumang nagtatrabaho sa larangang ito.\"",
    story2Author: "Ate Maria",
    story2Role: "Grab Courier at Food Delivery Rider, Quezon City (3 Taon)",
    story3Text: "\"Sabi ng Foodpanda 'partner' daw kami. Pero sa totoo lang, walang kapangyarihan ang partner kapag binawasan ang delivery fee nang walang paabiso. Sa Mayo 1, 2027, hindi kami humihingi ng awa—hustisya ang aming sigaw.\"",
    story3Author: "Kuya Roland",
    story3Role: "Foodpanda Rider, Manila (5 Taon)",

    // Pondo ng Pagkakaisa ng Komunidad
    fundingBadge: "PONDO NG PAGKAKAISA NG KOMUNIDAD",
    fundingTitle: "Suportahan ang aming laban at pagkilos sa Mayo 1",
    fundingDesc: "Hindi mo kailangang maging delivery rider upang makiisa sa aming laban. Kahit sino—kostumer, kaalyado, estudyante, at tagasuporta ng komunidad—ay maaaring mag-ambag nang direkta sa pondo ng unyon. Bawat piso ay nagpapatakbo sa ating motorcade caravan sa Mayo 1, tulong sa bagyo, at depensang legal.",
    potBadge: "PONDO PARA SA MAYO 1 AT BAGYO",
    potTitle: "Pondo ng pagkakaisa ng komunidad",
    potRaisedLbl: "Kabuuang nalikom:",
    potGoalLbl: "Target na pondo:",
    potSupportersCount: "mga nag-ambag mula sa komunidad",
    potDeadline: "🎯 Takdang Araw: Mayo 1, 2027",
    potImpactTitle: "Kung paano direktang ginagamit ang inyong ambag:",
    impactItem1: "<strong>35% Logistika sa Mayo 1:</strong> Sound truck, hydration stations at rally marshals sa kahabaan ng EDSA.",
    impactItem2: "<strong>30% Ayuda sa Baha at Bagyo:</strong> Subsidiya sa towing at food packs para sa mga stranded na rider.",
    impactItem3: "<strong>20% Legal Defense Desk:</strong> Tulong sa pormal na reklamo sa DOLE laban sa deactivation ng mga app.",
    impactItem4: "<strong>15% Kaligtasan ng mga Rider:</strong> Libreng high-vis decals at toolkit para sa emergency repair sa kalsada.",
    potTransparencyLink: "Buong ulat sa pananalapi sa aming <a href=\"#transparency\">Seksyon ng Katapatan</a> sa ibaba.",
    donateCardTitle: "Mag-ambag para sa pagkakaisa",
    donateCardSub: "Pumili ng halaga o maglagay ng nais mong i-ambag online.",
    freqOneTime: "Isahang ambag",
    freqMonthly: "Buwanang pangakong ambag",
    presetAmountLbl: "Pumili ng halaga (PHP):",
    preset100Badge: "Rally Kit",
    preset250Badge: "Krudong Caravan",
    preset500Badge: "Mabenta • Kaligtasan",
    preset1000Badge: "Tulong Legal",
    preset2500Badge: "Sound Truck",
    customAmountLbl: "O maglagay ng ibang halaga:",
    potPaymentMethodLbl: "Paraan ng pagbabayad:",
    donorNameLbl: "Iyong pangalan:",
    donorContactLbl: "Email o cellphone:",
    donorAnonymousLbl: "Panatilihing hindi nakikita ang aking pangalan sa pampublikong listahan",
    donorMessageLbl: "Mensahe ng pakikiisa para sa mga rider (opsyonal):",
    donationDisclaimer: "🔒 100% tapat. Walang bawas ng komersyal na app. Ang lahat ng transaksyon ay direktang sumusuporta sa tulungan ng manggagawa.",

    // Transparency & Grassroots Governance
    transparencyBadge: "KATAPATAN SA PONDO AT DEMOKRASYA",
    transparencyTitle: "Paano namin ginagamit ang pondo at sama-samang nag-oorganisa",
    transparencyDesc: "100% pinamumunuan ng mga manggagawa. Bawat sentimo mula sa butaw at benta ay malinaw na naitatala, pinagpapasyahan ng mga miyembro, at ibinabalik sa kaligtasan ng rider.",
    transCard1Title: "Malinaw na alokasyon ng pondo ng unyon",
    transCard1Sub: "Kung saan napupunta ang bawat ₱350 taunang butaw at tulong ng mga taga-suporta",
    fundItem1Title: "Pondo para sa aksidente, ospital at tulong sa bagyo",
    fundItem1Desc: "Direktang tulong-pinansyal sa mga naaksidente sa kalsada, pampaospital, towing sa baha, at relief packs kapag bawal bumiyahe dahil sa bagyo.",
    fundItem2Title: "High-vis safety gear at pakete ng kasapi",
    fundItem2Desc: "Paggawa at pamamahagi ng reflective vest, all-weather jacket, at helmet stickers na ibinibigay sa bawat rehistradong kasapi.",
    fundItem3Title: "Tulong-legal at tanggapan laban sa arbitraryong suspension",
    fundItem3Desc: "Paghahain ng reklamo sa DOLE SEnA, pagtatala ng mga biglaang lock out sa app, at legal na representasyon sa pakikipag-ayos.",
    fundItem4Title: "Harapang pagpupulong at asamblea sa komunidad",
    fundItem4Desc: "Upa sa bulwagan, sound system, at pagkain para sa regular na harapang pagtitipon ng mga rider sa 16 na lungsod ng Metro Manila.",
    fundItem5Title: "Materyales sa kampanya, edukasyon at pagkilos sa Mayo 1",
    fundItem5Desc: "Polyeto sa karapatan ng rider, banner, megaphone, at koordinasyon para sa mapayapang Caravan sa Araw ng Paggawa.",
    auditNote: "100% ng butaw ay ibinabalik sa kapakanan ng rider at demokratikong pag-oorganisa. Iniuulat ang audited financial report sa bawat asamblea.",
    transCard2Title: "Demokrasya mula sa ibaba at mga yamang pangkomunidad",
    transCard2Sub: "Regular na harapang pagpupulong at suporta ng mga kaalyado",
    meetingTitle: "Regular na harapang pagpupulong",
    meetingDesc: "Nag-oorganisa ang UDRMM ng regular na harapang pagpupulong upang talakayin ang mga isyu, magpasya, at magplano ng sama-samang pagkilos. Tunay na demokrasya ang umiiral: walang desisyong nanggagaling lamang sa itaas. Ang bawat hakbang at plano ay pinagbobotohan ng mga mismong rider sa kalsada.",
    resourcesTitle: "Aming mga kasamang yaman at suporta mula sa komunidad",
    resLaborTitle: "Pambansang grupo ng paggawa at lokal na NGO para sa karapatan",
    resLaborDesc: "Tinatanggap namin ang payong legal mula sa mga volunteer na abogado, suporta sa boluntaryo, espasyo para sa pagpupulong, at limitadong tulong-pinansyal para sa emergency printing.",
    resBarangayTitle: "Mga Barangay community center at lokal na network",
    resBarangayDesc: "Ang mga covered court at barangay hall ay nagbibigay ng ligtas na espasyo sa pagpupulong, habang ang komunidad ay tumutulong sa pagpapalaganap ng impormasyon ukol sa baha at mga panawagan.",
    resMutualTitle: "Damayan at tulungan ng kapwa rider",
    resMutualDesc: "Tulong sa sirang motorsiklo sa daan, rescue sa vulcanizing, jump-start ng baterya, at mabilisang ulat sa baha sa pamamagitan ng GCash, Messenger, at WhatsApp broadcast.",

    // Public Petition Modal
    modalPetitionTitle: "Pirmahan ang pampublikong petisyon para sa kaligtasan ng mga rider",
    modalPetitionSub: "Ang aming layunin ay makakalap ng 10,000 pirma sa petisyon sa website bago magsimula ang tag-ulan (sa Hunyo 2027). Makiisa sa panawagang protektahan ang mga rider.",
    petitionFreeNote: "100% libre at bukas sa lahat ang pagpirma.",
    petitionNotDuesNote: "Ito ay pampublikong petisyon para sa mga rider, mamimili, at taga-suporta. Hindi ito rehistro ng kasapian at walang anumang bayad.",
    petitionContactLbl: "Email address o numero ng telepono:",
    petitionRoleLbl: "Pumipirma ako bilang:",
    petitionCommentLbl: "Mensahe ng pakikiisa (opsyonal):",
    petitionConsentLbl: "Ipinapahayag ko ang aking pagsuporta sa 5 opisyal na hiling ng UDRMM at pinapahintulutan ang pagsama ng aking pirma sa 10,000 petisyon bago ang Hunyo 2027.",
    btnSubmitPetition: "✍️ Idagdag ang aking pirma nang libre",
    petitionSuccessTitle: "Maraming salamat! Naitala ang iyong pirma!",
    petitionSuccessSub: "Naidagdag na ang iyong pangalan sa aming pampublikong petisyon patungo sa target na 10,000 bago sumapit ang tag-ulan sa Hunyo 2027.",

    // About Section
    aboutBadge: "AKADEMIKONG BALANGKAS",
    aboutTitle: "Battling Global Giants Locally (B.G.G.L.)",
    aboutDesc1: "Ang <strong>Battling Global Giants Locally (B.G.G.L.)</strong> ay ang aming student taskforce crew para sa university MSM Assignment 2. Kinakatawan ng pangalan ang pagsuporta sa mga lokal na manggagawa laban sa kapangyarihan ng mga pandaigdigang platform, at ang acronym na <strong>B.G.G.L.</strong> ay nagmula sa mga inisyal ng apat na mag-aaral: nina <strong>B</strong>eatrice, <strong>G</strong>yeong, <strong>G</strong>eorgia, at <strong>L</strong>ouise.",
    aboutDesc2: "<strong>Akademikong Balangkas at Kathang-Isip na Pagkakakilanlan:</strong> Ang website na ito ay isang akademikong prototype na eksklusibong binuo bilang university assignment (MSM Assignment 2). Ang <strong>United Delivery Riders of Metro Manila (UDRMM) ay isang kathang-isip (fictional) na unyon ng manggagawa</strong> na nilikha bilang case study at senaryo ng kampanyang pangkomunikasyon upang siyasatin kung paano makakapag-organisa ang mga courier laban sa mga multinasyunal na app platform. Ang lahat ng aksyon, pagsapi, at inisyatiba rito ay bahagi ng simulasyong pang-edukasyon.",
    teamHeading: "Taskforce 2 Working Group",
    teamSub: "Nakaayos ayon sa mga inisyal ng mag-aaral sa B.G.G.L. (Beatrice, Gyeong, Georgia, Louise):",
    roleDesign: "Design",
    roleWriting: "Writing",
    roleComm: "Communication",
    roleLeadership: "Leadership",
    
    // Cart Drawer
    cartTitle: "Iyong Bag ng Pagkakaisa",
    cartEmpty: "Wala pang laman ang iyong bag. Magdagdag ng gamit upang suportahan ang unyon!",
    subtotalLbl: "Kabuuan:",
    btnCheckout: "Magpatuloy sa Pag-order",
    
    // Membership Modal & Supporter Donation
    modalMemberTitle: "Sumapi sa UDRMM o mag-ambag",
    tabRiderMember: "Pagsapi bilang rider (₱350/taon)",
    tabSupporterDonation: "Mag-ambag bilang tagasuporta",
    modalMemberSub: "Sumapi sa United Delivery Riders of Metro Manila. Ang taunang butaw (₱350 PHP / taon) ay kailangan upang pondohan ang tulong-legal, stickers sa helmet, at kampanya ng mga manggagawa.",
    modalSupporterSub: "Hindi mo kailangang maging delivery rider upang makiisa. Kahit sino ay maaaring mag-ambag online para sa May 1 caravan, ayuda sa bagyo, at tulong-legal sa mga courier.",
    modalSupporterBannerTitle: "Ambag ng tagasuporta ng komunidad",
    modalSupporterBannerDesc: "100% ng inyong tulong ay direktang napupunta sa mutual aid ng mga manggagawa, saklolo sa baha, at mobilisasyon sa Mayo 1.",
    unionDuesTitle: "💳 Taunang Butaw sa Unyon: ₱350 PHP / taon (Kailangan)",
    regDuesNote: "Kasama ang opisyal na high-vis all-weather jacket at waterproof stickers package sa bawat bayad na pagsapi.",
    modalNameLbl: "Buong Pangalan:",
    modalPlatformLbl: "Delivery Platform(s):",
    modalCityLbl: "Lungsod / Barangay sa Metro Manila:",
    modalPhoneLbl: "Numero ng Telepono:",
    modalSizeLbl: "Pumili ng Sukat ng All-Weather Jacket / Gear:",
    duesPaymentOptionLbl: "Taunang Butaw sa Pagsapi (₱350 PHP / taon):",
    btnSubmitRegistration: "Magbayad ng ₱350 Butaw at Kumpletuhin ang Rehistro",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Maligayang Pagdating sa UDRMM!",
    registeredSub: "Kumpirmado ang iyong pagsapi at taunang butaw (₱350 PHP). Narito ang iyong Opisyal na Digital ID ng Unyon:",
    regPonchoNote: "Ang iyong opisyal na high-vis jacket at waterproof stickers ay ihahanda para sa pickup sa opisina ng UDRMM o ipapadala sa pamamagitan ng iyong mobile phone.",
    supporterSuccessTitle: "Maraming salamat! Natanggap ang inyong ambag!",
    supporterSuccessSub: "Ang iyong tulong ay direktang sumusuporta sa pagkilos sa Mayo 1, saklolo sa baha, at depensang legal. Narito ang iyong Opisyal na Digital Certificate ng Tagasuporta:",
    
    // GDPR & Cookie Banner
    cookieTitle: "Paunawa sa Cookie at Privacy ng Datos",
    cookieText: "Pinahahalagahan namin ang inyong privacy. Bilang akademikong prototype para sa MSM Assignment 2, gumagamit lamang ang website na ito ng mahahalagang local storage (tulad ng pag-alala sa piniling wika). HINDI kami gumagamit ng tracking, profiling, o advertising cookies. Ang checkout at membership ay pawang mga mock-up lamang.",
    cookieAcceptBtn: "Tanggapin ang Mahahalaga Lamang",
    cookieDetailsBtn: "Mga Detalye ng Privacy",
    privacyModalTitle: "Patakaran sa Privacy at GDPR",
    privacyModalSubtitle: "Akademikong Prototype • MSM Assignment 2 (Taskforce 2)",
    btnCloseModal: "Isara ang Bintana"
  }
};

// Application State
let currentLang = 'en';
let cart = [];
let rsvpCount = 0;
let hasPledged = false;
let selectedCapColor = 'Blue';
let selectedVestSize = 'L';
let selectedStickerVariant = 'Dual Pack (Yellow + Red)';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language
  const savedLang = localStorage.getItem('udrmm_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  applyLanguage(currentLang);
  setupLanguageSwitcher();
  setupCountdown();
  setupRSVP();
  setupCartDrawer();
  setupMembershipModal();
  setupProductVariants();
  setupProductViewSwitchers();
  setupMobileMenu();
  setupCookieAndPrivacy();
});

// Switch Language
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('udrmm_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = (lang === 'fil' ? 'tl' : 'en');
  
  const dict = translations[lang];
  if (!dict) return;
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Retain pledged state on RSVP button if already clicked
  if (hasPledged) {
    const rsvpBtn = document.getElementById('btn-rsvp-pledge');
    if (rsvpBtn) {
      rsvpBtn.innerText = dict.btnPledged;
    }
  }

  // Update language toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Re-render cart labels if cart is open
  renderCart();
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });
}

// Countdown to May 1st, 2027 (Labor Day Mobilization)
function setupCountdown() {
  const targetDate = new Date(2027, 4, 1, 9, 0, 0); // May 1, 2027 at 09:00 AM (Month 4 = May)

  function update() {
    const currentTime = new Date().getTime();
    const diff = targetDate.getTime() - currentTime;

    const dEl = document.getElementById('count-days');
    const hEl = document.getElementById('count-hours');
    const mEl = document.getElementById('count-mins');
    const sEl = document.getElementById('count-secs');

    if (diff <= 0) {
      if (dEl) dEl.innerText = '00';
      if (hEl) hEl.innerText = '00';
      if (mEl) mEl.innerText = '00';
      if (sEl) sEl.innerText = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    if (dEl) dEl.innerText = pad(days);
    if (hEl) hEl.innerText = pad(hours);
    if (mEl) mEl.innerText = pad(minutes);
    if (sEl) sEl.innerText = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// Global Pledge Counter API Configuration
// Powered by CountAPI (aggregates real-time hits across all visitors with Cloudflare CDN & CORS)
const PLEDGE_API_KEY = 'udrmm_metro_manila_riders_solidarity_pledge_counter';
const PLEDGE_API_URL = 'https://countapi.mileshilliard.com/api/v1';

// RSVP & Global Pledge Counter (Aggregates real-time solidarity pledges from all visitors worldwide)
function setupRSVP() {
  const rsvpBtn = document.getElementById('btn-rsvp-pledge');
  const countEl = document.getElementById('rsvp-counter-display');
  const badgeBtn = document.getElementById('rsvp-badge-btn');
  let isPledging = false;
  
  // Load cached count from localStorage as initial fallback, defaulting to 0
  const savedCount = localStorage.getItem('udrmm_pledge_count');
  if (savedCount !== null) {
    const parsed = parseInt(savedCount, 10);
    rsvpCount = !isNaN(parsed) && parsed >= 0 ? parsed : 0;
  } else {
    rsvpCount = 0;
  }

  // Load user pledge status for this browser
  hasPledged = localStorage.getItem('udrmm_has_pledged') === 'true';

  function renderCount(triggerAnimation = false) {
    if (countEl) {
      countEl.innerText = rsvpCount.toLocaleString();
      if (triggerAnimation) {
        countEl.classList.remove('count-pulse');
        void countEl.offsetWidth; // Force DOM reflow to re-trigger pulse
        countEl.classList.add('count-pulse');
      }
    }
    const highlightEl = document.getElementById('petition-count-highlight');
    if (highlightEl) {
      highlightEl.innerText = rsvpCount.toLocaleString();
    }
    const progressFill = document.getElementById('petition-progress-fill');
    if (progressFill) {
      const pct = Math.min(100, Math.max(1, (rsvpCount / 10000) * 100));
      progressFill.style.width = pct + '%';
    }
    const percentEl = document.getElementById('petition-progress-percent');
    if (percentEl) {
      const pct = Math.min(100, (rsvpCount / 10000) * 100);
      percentEl.innerText = pct.toFixed(1) + '% achieved';
    }
    if (rsvpBtn && hasPledged) {
      rsvpBtn.classList.remove('btn-red');
      rsvpBtn.classList.add('btn-secondary');
      rsvpBtn.innerText = translations[currentLang].btnPledged;
    }
  }

  // Fetch real-time global total from external counter API
  async function fetchGlobalCount() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const url = `${PLEDGE_API_URL}/get/${PLEDGE_API_KEY}?_t=${Date.now()}`;
      const res = await fetch(url, {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (typeof data.value === 'number') {
          const prev = rsvpCount;
          rsvpCount = data.value;
          localStorage.setItem('udrmm_pledge_count', rsvpCount.toString());
          renderCount(prev !== rsvpCount);
        }
      } else if (res.status === 404) {
        rsvpCount = Math.max(rsvpCount, 0);
        renderCount();
      }
    } catch (err) {
      console.warn('UDRMM: Using cached pledge count:', err.message);
    }
  }

  // Handle solidarity petition signature (increments global counter across all visitors)
  async function handlePledge() {
    if (isPledging) return;
    isPledging = true;

    if (countEl) {
      countEl.classList.remove('count-pulse');
      void countEl.offsetWidth;
      countEl.classList.add('count-pulse');
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const url = `${PLEDGE_API_URL}/hit/${PLEDGE_API_KEY}?_t=${Date.now()}`;
      const res = await fetch(url, {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (typeof data.value === 'number') {
          rsvpCount = data.value;
        } else {
          rsvpCount += 1;
        }
      } else {
        rsvpCount += 1;
      }
    } catch (err) {
      console.warn('UDRMM: API unreachable, incrementing local counter:', err);
      rsvpCount += 1;
    } finally {
      isPledging = false;
    }

    hasPledged = true;
    localStorage.setItem('udrmm_pledge_count', rsvpCount.toString());
    localStorage.setItem('udrmm_has_pledged', 'true');

    renderCount(true);

    const toastMsg = currentLang === 'en'
      ? `Salamat! Petition signature recorded (Total: ${rsvpCount.toLocaleString()} towards 10,000 goal).`
      : `Maraming salamat! Naitala ang iyong pirma sa petisyon (Kabuuan: ${rsvpCount.toLocaleString()} patungo sa 10,000).`;
    showToast(toastMsg);
  }

  renderCount();
  fetchGlobalCount();

  // Real-time polling every 3s so signatures reflect immediately
  setInterval(() => {
    if (!document.hidden) {
      fetchGlobalCount();
    }
  }, 3000);

  // Instant refresh when user returns to tab
  window.addEventListener('focus', fetchGlobalCount);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      fetchGlobalCount();
    }
  });

  // Modal Setup for Petition
  const petitionModal = document.getElementById('petition-modal-overlay');
  const closePetitionBtn = document.getElementById('close-petition-btn');
  const petitionForm = document.getElementById('petition-form');
  const petitionModalBody = document.getElementById('petition-modal-body');

  function openPetitionModal(e) {
    if (e) e.preventDefault();
    if (petitionModal) petitionModal.classList.add('active');
  }

  function closePetitionModal() {
    if (petitionModal) petitionModal.classList.remove('active');
  }

  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', openPetitionModal);
  }

  if (badgeBtn) {
    badgeBtn.addEventListener('click', openPetitionModal);
    badgeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPetitionModal();
      }
    });
  }

  if (closePetitionBtn) {
    closePetitionBtn.addEventListener('click', closePetitionModal);
  }

  if (petitionModal) {
    petitionModal.addEventListener('click', (e) => {
      if (e.target === petitionModal) closePetitionModal();
    });
  }

  if (petitionForm) {
    petitionForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('petition-name')?.value || 'Solidarity Supporter';
      const role = document.getElementById('petition-role')?.value || 'App customer / Consumer';
      const city = document.getElementById('petition-city')?.value || 'Metro Manila';
      const comment = document.getElementById('petition-comment')?.value || '';

      await handlePledge();

      const sigId = 'PET-2027-' + Math.floor(1000 + Math.random() * 9000);
      const pct = Math.min(100, ((rsvpCount / 10000) * 100)).toFixed(1);

      if (petitionModalBody) {
        petitionModalBody.innerHTML = `
          <div class="success-card">
            <div class="success-icon-badge">✍️</div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
              ${translations[currentLang].petitionSuccessTitle}
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.25rem;">
              ${translations[currentLang].petitionSuccessSub}
            </p>

            <div style="background: #FFFFFF; border: 2px solid var(--ph-blue-border); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem; text-align: left;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: var(--ph-blue); font-size: 1rem;">${name}</strong>
                <span style="font-size: 0.76rem; background: var(--ph-blue-light); color: var(--ph-blue); padding: 2px 8px; border-radius: 999px; font-weight: 700;">${sigId}</span>
              </div>
              <div style="font-size: 0.82rem; color: var(--text-body); margin-bottom: 0.35rem;">
                Role: <strong>${role}</strong> • Location: <strong>${city}</strong>
              </div>
              ${comment ? `<div style="font-size: 0.8rem; font-style: italic; color: var(--text-muted); border-left: 2px solid var(--ph-red); padding-left: 8px; margin-top: 6px;">"${comment}"</div>` : ''}
              <div style="margin-top: 0.85rem; padding-top: 0.65rem; border-top: 1px solid var(--border-light); font-size: 0.82rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
                <span>Total signatures: <strong style="color: var(--ph-red); font-size: 0.95rem;">${rsvpCount.toLocaleString()}</strong></span>
                <span style="color: var(--ph-blue); font-weight: 700;">${pct}% of 10,000 goal</span>
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
                Share on Facebook
              </a>
              <button type="button" class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="navigator.clipboard?.writeText(window.location.href); alert('Petition link copied!');">
                📋 Copy petition link
              </button>
            </div>

            <div style="border-top: 1px solid var(--border-light); padding-top: 1rem; font-size: 0.82rem; color: var(--text-muted);">
              Are you a delivery rider wanting to become a full member with high-vis gear?
              <div style="margin-top: 0.5rem;">
                <button type="button" class="btn-primary open-membership-btn" onclick="document.getElementById('petition-modal-overlay').classList.remove('active'); document.getElementById('membership-modal-overlay').classList.add('active');" style="font-size: 0.82rem; padding: 0.5rem 1.15rem;">
                  Join UDRMM (₱350/yr)
                </button>
              </div>
            </div>
          </div>
        `;
      }
    });
  }
}


// Product Variants Controller (Cap Colors, Vest Sizes, Sticker Packs)
function setupProductVariants() {
  // Cap Color Variants
  const capDots = document.querySelectorAll('.cap-variant-dot');
  const capLabel = document.getElementById('selected-cap-color-name');
  capDots.forEach(dot => {
    dot.addEventListener('click', () => {
      capDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      selectedCapColor = dot.getAttribute('data-color') || 'Blue';
      if (capLabel) capLabel.textContent = selectedCapColor;
    });
  });

  // Vest Size Variants
  const vestBtns = document.querySelectorAll('.vest-size-btn');
  const vestLabel = document.getElementById('selected-vest-size-name');
  vestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vestBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedVestSize = btn.getAttribute('data-size') || 'L';
      if (vestLabel) vestLabel.textContent = selectedVestSize;
    });
  });

  // Sticker Pack Edition Variants
  const stickerBtns = document.querySelectorAll('.sticker-variant-btn');
  const stickerLabel = document.getElementById('selected-sticker-variant-name');
  const stickerImg = document.getElementById('stickers-main-img');
  const stickerSwitcher = document.querySelector('.product-view-switcher[data-target="stickers-main-img"]');
  stickerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stickerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedStickerVariant = btn.getAttribute('data-variant') || 'Dual Pack (Yellow + Red)';
      if (stickerLabel) stickerLabel.textContent = selectedStickerVariant;
      
      // Auto-preview matching sticker image
      if (stickerImg && stickerSwitcher) {
        if (selectedStickerVariant.includes('Dual Pack')) {
          stickerImg.src = 'assets/product-stickers.jpg?v=4';
          stickerSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', (b.getAttribute('data-img') || '').includes('product-stickers')));
        } else if (selectedStickerVariant.includes('Yellow')) {
          stickerImg.src = 'assets/sticker-yellow-qr.jpg?v=4';
          stickerSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', (b.getAttribute('data-img') || '').includes('sticker-yellow-qr')));
        } else if (selectedStickerVariant.includes('Red')) {
          stickerImg.src = 'assets/sticker-red-qr.jpg?v=4';
          stickerSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', (b.getAttribute('data-img') || '').includes('sticker-red-qr')));
        } else {
          stickerImg.src = 'assets/product-stickers.jpg?v=4';
          stickerSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', (b.getAttribute('data-img') || '').includes('product-stickers')));
        }
      }
    });
  });
}

// Product Multi-View Image Switchers (Dual, Front, Back, Both, Yellow, Red)
function setupProductViewSwitchers() {
  document.querySelectorAll('.product-view-switcher').forEach(switcher => {
    const targetId = switcher.getAttribute('data-target');
    const targetImg = document.getElementById(targetId);
    if (!targetImg) return;

    switcher.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switcher.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.getAttribute('data-img');
        if (newSrc) {
          targetImg.style.opacity = '0.35';
          targetImg.src = newSrc;
          targetImg.onload = () => {
            targetImg.style.opacity = '1';
          };
        }

        // Sync sticker pack variant button when clicking view switcher
        if (targetId === 'stickers-main-img' && newSrc) {
          const stickerLabel = document.getElementById('selected-sticker-variant-name');
          const stickerBtns = document.querySelectorAll('.sticker-variant-btn');
          if (newSrc.includes('sticker-yellow-qr')) {
            selectedStickerVariant = 'Neon Yellow (2x)';
          } else if (newSrc.includes('sticker-red-qr')) {
            selectedStickerVariant = 'Crimson Red (2x)';
          } else {
            selectedStickerVariant = 'Dual Pack (Yellow + Red)';
          }
          if (stickerLabel) stickerLabel.textContent = selectedStickerVariant;
          stickerBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-variant') === selectedStickerVariant));
        }
      });
    });
  });
}

// Shopping Cart Logic
const productsCatalog = {
  'vest': {
    id: 'vest',
    titleEn: 'Official high-vis security jacket / safety vest',
    titleFil: 'Opisyal na High-Vis Security Jacket / Safety Vest',
    price: 320,
    img: 'assets/product-vest.jpg?v=20261012_v8',
    getVariant: () => `Size: ${selectedVestSize}`
  },
  'stickers': {
    id: 'stickers',
    titleEn: 'Official weatherproof vinyl sticker pack (Yellow & Red)',
    titleFil: 'Opisyal na Weatherproof Vinyl Sticker Pack (Dilaw at Pula)',
    price: 120,
    img: 'assets/product-stickers.jpg?v=4',
    getImg: () => {
      if (selectedStickerVariant.includes('Dual Pack')) return 'assets/product-stickers.jpg?v=4';
      if (selectedStickerVariant.includes('Yellow')) return 'assets/sticker-yellow-qr.jpg?v=4';
      if (selectedStickerVariant.includes('Red')) return 'assets/sticker-red-qr.jpg?v=4';
      return 'assets/product-stickers.jpg?v=4';
    },
    getVariant: () => selectedStickerVariant
  },
  'cap': {
    id: 'cap',
    titleEn: 'Official UDRMM embroidered cap',
    titleFil: 'Opisyal na Burdadong Sumbrero ng UDRMM',
    price: 280,
    img: 'assets/product-caps.jpg',
    getVariant: () => selectedCapColor
  },
  'phone-mount': {
    id: 'phone-mount',
    titleEn: 'Heavy-duty handlebar phone mount',
    titleFil: 'Heavy-Duty Handlebar Phone Mount Case',
    price: 380,
    img: 'assets/product-phone-mount-v2.jpg?v=2',
    getVariant: () => 'Universal Handlebar Clamp'
  }
};

window.addToCart = function(productId) {
  const itemDef = productsCatalog[productId];
  if (!itemDef) return;

  const variant = itemDef.getVariant ? itemDef.getVariant() : '';
  const itemImg = itemDef.getImg ? itemDef.getImg() : itemDef.img;
  const cartKey = `${productId}-${variant}`;
  
  const existing = cart.find(item => item.key === cartKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      key: cartKey,
      id: productId,
      titleEn: itemDef.titleEn,
      titleFil: itemDef.titleFil,
      price: itemDef.price,
      img: itemImg,
      variant: variant,
      quantity: 1
    });
  }

  updateCartBadge();
  renderCart();
  openCartDrawer();
  showToast(currentLang === 'en' ? 'Item added to your bag!' : 'Naidagdag ang produkto sa iyong bag!');
};

function updateCartBadge() {
  const badge = document.getElementById('cart-badge-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.innerText = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <p>${translations[currentLang].cartEmpty}</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '₱0';
    return;
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    subtotal += item.price * item.quantity;
    const title = currentLang === 'en' ? item.titleEn : item.titleFil;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${title}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-title">${title}</div>
          <div class="cart-item-variant">${item.variant} • Qty: ${item.quantity}</div>
          <div class="cart-item-price">₱${(item.price * item.quantity).toLocaleString()}</div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">✕</button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.innerText = `₱${subtotal.toLocaleString()}`;
  }
}

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCart();
};

function setupCartDrawer() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('cart-drawer-overlay');
  const checkoutBtn = document.getElementById('btn-checkout');

  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCartDrawer();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast(currentLang === 'en' ? 'Your bag is empty!' : 'Walang laman ang bag mo!');
        return;
      }
      closeCartDrawer();
      showCheckoutModal();
    });
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
}

// Membership Registration Modal & Supporter Donation
function setupMembershipModal() {
  const openButtons = document.querySelectorAll('.open-membership-btn');
  const modalOverlay = document.getElementById('membership-modal-overlay');
  const closeModalBtn = document.getElementById('close-membership-btn');
  const form = document.getElementById('membership-form');

  // Mode tabs
  const tabRider = document.getElementById('modal-tab-rider');
  const tabSupporter = document.getElementById('modal-tab-supporter');
  const descRider = document.getElementById('modal-desc-rider');
  const descSupporter = document.getElementById('modal-desc-supporter');
  const bannerRider = document.getElementById('modal-rider-banner');
  const bannerSupporter = document.getElementById('modal-supporter-banner');
  const supporterAmountSection = document.getElementById('modal-supporter-amount-section');
  const groupPlatform = document.getElementById('group-member-platform');
  const groupSize = document.getElementById('group-member-size');
  const groupSupporterMsg = document.getElementById('group-supporter-msg');
  const groupRiderPay = document.getElementById('group-rider-payment');
  const groupSupporterPay = document.getElementById('group-supporter-payment');
  const btnText = document.getElementById('membership-btn-text');
  const disclaimer = document.getElementById('modal-supporter-disclaimer');
  const customAmountInput = document.getElementById('modal-custom-amount');
  const presetBtns = document.querySelectorAll('.modal-preset-btn');

  let activeMode = 'rider'; // 'rider' | 'supporter'
  let modalSelectedAmount = 500;

  function updateModalSubmitBtn() {
    if (!btnText) return;
    if (activeMode === 'rider') {
      btnText.textContent = currentLang === 'en' 
        ? 'Pay ₱350 dues & complete registration' 
        : 'Magbayad ng ₱350 Butaw at Kumpletuhin ang Rehistro';
    } else {
      btnText.textContent = currentLang === 'en'
        ? `Donate ₱${modalSelectedAmount.toLocaleString()} as Community Supporter`
        : `Mag-ambag ng ₱${modalSelectedAmount.toLocaleString()} bilang Tagasuporta`;
    }
  }

  function setMode(mode) {
    activeMode = mode;
    if (mode === 'rider') {
      if (tabRider) { tabRider.classList.add('active'); tabRider.setAttribute('aria-selected', 'true'); }
      if (tabSupporter) { tabSupporter.classList.remove('active'); tabSupporter.setAttribute('aria-selected', 'false'); }
      if (descRider) descRider.style.display = 'block';
      if (descSupporter) descSupporter.style.display = 'none';
      if (bannerRider) bannerRider.style.display = 'flex';
      if (bannerSupporter) bannerSupporter.style.display = 'none';
      if (supporterAmountSection) supporterAmountSection.style.display = 'none';
      if (groupPlatform) groupPlatform.style.display = 'block';
      if (groupSize) groupSize.style.display = 'block';
      if (groupSupporterMsg) groupSupporterMsg.style.display = 'none';
      if (groupRiderPay) groupRiderPay.style.display = 'block';
      if (groupSupporterPay) groupSupporterPay.style.display = 'none';
      if (disclaimer) disclaimer.style.display = 'none';
    } else {
      if (tabSupporter) { tabSupporter.classList.add('active'); tabSupporter.setAttribute('aria-selected', 'true'); }
      if (tabRider) { tabRider.classList.remove('active'); tabRider.setAttribute('aria-selected', 'false'); }
      if (descRider) descRider.style.display = 'none';
      if (descSupporter) descSupporter.style.display = 'block';
      if (bannerRider) bannerRider.style.display = 'none';
      if (bannerSupporter) bannerSupporter.style.display = 'flex';
      if (supporterAmountSection) supporterAmountSection.style.display = 'block';
      if (groupPlatform) groupPlatform.style.display = 'none';
      if (groupSize) groupSize.style.display = 'none';
      if (groupSupporterMsg) groupSupporterMsg.style.display = 'block';
      if (groupRiderPay) groupRiderPay.style.display = 'none';
      if (groupSupporterPay) groupSupporterPay.style.display = 'block';
      if (disclaimer) disclaimer.style.display = 'block';
    }
    updateModalSubmitBtn();
  }

  if (tabRider) tabRider.addEventListener('click', () => setMode('rider'));
  if (tabSupporter) tabSupporter.addEventListener('click', () => setMode('supporter'));

  // Preset buttons in modal
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      modalSelectedAmount = parseInt(btn.dataset.amount, 10) || 500;
      if (customAmountInput) customAmountInput.value = '';
      updateModalSubmitBtn();
    });
  });

  // Custom amount input in modal
  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      const val = parseInt(customAmountInput.value, 10);
      if (val && val > 0) {
        presetBtns.forEach(b => b.classList.remove('active'));
        modalSelectedAmount = val;
      } else {
        modalSelectedAmount = 500;
      }
      updateModalSubmitBtn();
    });
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) modalOverlay.classList.add('active');
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalBody = document.getElementById('membership-modal-body');
      if (!modalBody) return;

      const name = document.getElementById('member-name')?.value || (currentLang === 'en' ? 'Community Ally' : 'Kasaping Kaalyado');

      if (activeMode === 'rider') {
        const platform = document.getElementById('member-platform')?.value || 'FoodTiger';
        const city = document.getElementById('member-city')?.value || 'Metro Manila';
        const size = document.getElementById('member-size')?.value || 'L';
        const paymentMethod = document.querySelector('input[name="dues_payment_method"]:checked')?.value || 'GCash';
        const memberId = 'UDRMM-MNL-2027-' + Math.floor(1000 + Math.random() * 9000);

        modalBody.innerHTML = `
          <div class="success-card">
            <div class="success-icon-badge">✓</div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
              ${translations[currentLang].registeredTitle}
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.25rem;">
              ${translations[currentLang].registeredSub}
            </p>
            
            <div class="member-id-card">
              <div class="mid-header">
                <span>United Delivery Riders of Metro Manila</span>
                <span>Active Member 2027</span>
              </div>
              <div class="mid-name">${name}</div>
              <div style="font-size: 0.85rem; color: #E2E8F0; margin: 4px 0 6px;">
                 Platform: ${platform} • Area: ${city} • Jacket: Size ${size}
              </div>
              <div style="font-size: 0.8rem; color: #FCD34D; font-weight: 600; margin-bottom: 10px;">
                Status: Paid Member (₱350/yr • ${paymentMethod})
              </div>
              <div class="mid-num">ID: ${memberId}</div>
            </div>

            <div class="free-poncho-notice" style="text-align: left; margin: 1.5rem 0;">
              <img src="assets/product-poncho.jpg" alt="Official Union Gear" style="width: 56px; height: 56px; object-fit: cover; border-radius: 8px;">
              <div>
                <strong style="color: var(--ph-blue); font-size: 0.95rem; display: block; margin-bottom: 2px;">
                  🛡️ Official high-vis jacket & stickers package included!
                </strong>
                <p style="font-size: 0.82rem; color: var(--text-body); font-weight: normal; margin: 0;">
                  ${translations[currentLang].regPonchoNote}
                </p>
              </div>
            </div>

            <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="document.getElementById('membership-modal-overlay').classList.remove('active')">
              ${translations[currentLang].btnCloseModal}
            </button>
          </div>
        `;
      } else {
        // Supporter Donation Mode
        const paymentMethod = document.querySelector('input[name="modal_supporter_pay"]:checked')?.value || 'GCash';
        const donorRef = 'UDRMM-DONOR-' + Math.floor(100000 + Math.random() * 900000);
        const solidarityMsg = document.getElementById('modal-supporter-message')?.value || '';

        // Add to live funding pot
        updateLivePotDisplay(modalSelectedAmount);

        modalBody.innerHTML = `
          <div class="success-card">
            <div class="success-icon-badge" style="background: var(--ph-red); color: #fff;">❤️</div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
              ${translations[currentLang].supporterSuccessTitle}
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.25rem;">
              ${translations[currentLang].supporterSuccessSub}
            </p>

            <div class="member-id-card" style="background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); border: 1.5px solid #FCD34D;">
              <div class="mid-header">
                <span style="color: #FCD34D;">★ UDRMM Community Solidarity Donor</span>
                <span>May 1 Mobilization Fund</span>
              </div>
              <div class="mid-name">${name}</div>
              <div style="font-size: 0.95rem; color: #FFFFFF; font-weight: 800; margin: 6px 0;">
                Solidarity Gift: ₱${modalSelectedAmount.toLocaleString()} PHP (${paymentMethod})
              </div>
              ${solidarityMsg ? `<div style="font-size: 0.82rem; font-style: italic; color: #E2E8F0; margin-bottom: 8px;">"${solidarityMsg}"</div>` : ''}
              <div class="mid-num" style="color: #94A3B8;">Reference: ${donorRef}</div>
            </div>

            <div class="free-poncho-notice" style="text-align: left; margin: 1.5rem 0; border-left: 4px solid var(--ph-red); background: rgba(206, 17, 38, 0.05);">
              <span style="font-size: 1.8rem; line-height: 1;">🍯</span>
              <div>
                <strong style="color: var(--ph-red); font-size: 0.92rem; display: block; margin-bottom: 2px;">
                  ${currentLang === 'en' ? 'Direct grassroots impact' : 'Direktang bunga sa komunidad'}
                </strong>
                <p style="font-size: 0.8rem; color: var(--text-body); margin: 0;">
                  ${currentLang === 'en' 
                    ? `Your ₱${modalSelectedAmount.toLocaleString()} gift has been added to our live Community Fighting Pot. It directly finances sound trucks, emergency flood rescue, and courier legal defense.`
                    : `Ang inyong ₱${modalSelectedAmount.toLocaleString()} na ambag ay naidagdag sa ating live Pondo ng Komunidad. Direktang popondohan nito ang sound truck, saklolo sa baha, at depensang legal.`}
                </p>
              </div>
            </div>

            <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="document.getElementById('membership-modal-overlay').classList.remove('active')">
              ${translations[currentLang].btnCloseModal}
            </button>
          </div>
        `;
      }
    });
  }
}

// Checkout Modal Simulation
function showCheckoutModal() {
  const overlay = document.getElementById('checkout-modal-overlay');
  const itemsSummary = document.getElementById('checkout-items-summary');
  const totalDisplay = document.getElementById('checkout-total-val');
  
  if (!overlay) return;

  let total = 0;
  itemsSummary.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    const title = currentLang === 'en' ? item.titleEn : item.titleFil;
    return `
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.5rem;">
        <span>${title} (${item.variant}) x ${item.quantity}</span>
        <strong>₱${(item.price * item.quantity).toLocaleString()}</strong>
      </div>
    `;
  }).join('');

  if (totalDisplay) totalDisplay.innerText = `₱${total.toLocaleString()}`;
  overlay.classList.add('active');
}

window.completeCheckout = function(e) {
  if (e) e.preventDefault();
  const overlay = document.getElementById('checkout-modal-overlay');
  const body = document.getElementById('checkout-modal-body');
  
  if (body) {
    body.innerHTML = `
      <div class="success-card">
        <div class="success-icon-badge">✓</div>
        <h3 style="font-size: 1.4rem; font-weight: 900; color: var(--ph-blue); margin-bottom: 0.5rem;">
          ${currentLang === 'en' ? 'Solidarity order placed!' : 'Natanggap ang Inyong Order ng Pagkakaisa!'}
        </h3>
        <p style="font-size: 0.92rem; color: var(--text-body); margin-bottom: 1rem;">
          ${currentLang === 'en' 
            ? 'Thank you for funding the union! A courier confirmation has been sent to your mobile phone via SMS.' 
            : 'Salamat sa pagsuporta sa pondo ng unyon! Ipinadala na ang detalye ng order sa iyong cellphone sa pamamagitan ng SMS.'}
        </p>
        <div style="background: var(--bg-card-soft); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-size: 0.85rem; margin-bottom: 1.5rem; text-align: left;">
          <div><strong>Order reference:</strong> #UDRMM-${Math.floor(100000 + Math.random() * 900000)}</div>
          <div><strong>Estimated dispatch:</strong> Within 48 hours via solidarity courier</div>
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="closeCheckoutModal()">
          ${translations[currentLang].btnCloseModal}
        </button>
      </div>
    `;
  }
  
  // Empty cart
  cart = [];
  updateCartBadge();
  renderCart();
};

window.closeCheckoutModal = function() {
  const overlay = document.getElementById('checkout-modal-overlay');
  if (overlay) overlay.classList.remove('active');
};

// Mobile Navigation Drawer Controller
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-nav-overlay');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!toggleBtn || !overlay) return;

  function openMobileMenu() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('modal-open');
  }

  function closeMobileMenu() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (overlay.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMobileMenu);
  }

  // Close when clicking any nav link inside drawer
  overlay.querySelectorAll('.mobile-nav-link, #mobile-nav-brand-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // When clicking the CTA inside drawer, close drawer
  overlay.querySelectorAll('.open-membership-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

// Simple Toast Notification
function showToast(message) {
  let toast = document.getElementById('udrmm-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'udrmm-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '25px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#1E2530';
    toast.style.color = '#FFFFFF';
    toast.style.padding = '10px 22px';
    toast.style.borderRadius = '30px';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '700';
    toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 3200);
}

// GDPR Cookie & Privacy Setup
function setupCookieAndPrivacy() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('btn-cookie-accept');
  const detailsBtn = document.getElementById('btn-cookie-details');
  const privacyOverlay = document.getElementById('privacy-modal-overlay');
  const closePrivacyBtn = document.getElementById('close-privacy-btn');
  const openPrivacyLink = document.getElementById('open-privacy-link');
  const clearDataBtn = document.getElementById('btn-clear-data');

  // Check consent
  const consent = localStorage.getItem('udrmm_cookie_consent');
  if (!consent && banner) {
    setTimeout(() => {
      banner.classList.add('active');
    }, 800);
  }

  if (acceptBtn && banner) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('udrmm_cookie_consent', 'essential');
      banner.classList.remove('active');
      showToast(currentLang === 'en' ? 'Essential preferences saved.' : 'Nai-save ang mahahalagang kagustuhan.');
    });
  }

  function openPrivacyModal(e) {
    if (e) e.preventDefault();
    if (privacyOverlay) privacyOverlay.classList.add('active');
  }

  function closePrivacyModal() {
    if (privacyOverlay) privacyOverlay.classList.remove('active');
  }

  if (detailsBtn) detailsBtn.addEventListener('click', openPrivacyModal);
  if (openPrivacyLink) openPrivacyLink.addEventListener('click', openPrivacyModal);
  if (closePrivacyBtn) closePrivacyBtn.addEventListener('click', closePrivacyModal);

  if (privacyOverlay) {
    privacyOverlay.addEventListener('click', (e) => {
      if (e.target === privacyOverlay) closePrivacyModal();
    });
  }

  if (clearDataBtn) {
    clearDataBtn.addEventListener('click', () => {
      localStorage.removeItem('udrmm_lang');
      localStorage.removeItem('udrmm_cookie_consent');
      localStorage.removeItem('udrmm_pledge_count');
      localStorage.removeItem('udrmm_has_pledged');
      hasPledged = false;
      const rsvpBtn = document.getElementById('btn-rsvp-pledge');
      if (rsvpBtn) {
        rsvpBtn.classList.remove('btn-secondary');
        rsvpBtn.classList.add('btn-red');
        rsvpBtn.innerText = translations[currentLang].btnPledge;
      }
      // Re-sync with actual global counter
      fetch(`${PLEDGE_API_URL}/get/${PLEDGE_API_KEY}`)
        .then(r => r.ok ? r.json() : null)
        .then(d => {
          if (d && typeof d.value === 'number') {
            rsvpCount = d.value;
            const countEl = document.getElementById('rsvp-counter-display');
            if (countEl) countEl.innerText = rsvpCount.toLocaleString();
          }
        })
        .catch(() => {});
      closePrivacyModal();
      if (banner) banner.classList.add('active');
      showToast(currentLang === 'en' ? 'All local data cleared.' : 'Nabura ang lahat ng nakaimbak na datos.');
    });
  }
}


// High-Fidelity Thematic SVG Generator for 100% Visual Resilience
function getThematicFallback(type) {
  const svgs = {
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
      <rect width="300" height="300" rx="30" fill="#F0E5F8"/>
      <text x="150" y="42" fill="#111827" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="800" text-anchor="middle" letter-spacing="4">U . D . R . M . M .</text>
      <circle cx="165" cy="85" r="9" fill="#111827"/>
      <path d="M165 94 L150 135 L135 135 L125 150 L165 150 L175 125 Z" fill="#111827"/>
      <circle cx="115" cy="180" r="16" fill="#111827"/>
      <circle cx="195" cy="180" r="16" fill="#111827"/>
      <rect x="100" y="115" width="28" height="28" fill="none" stroke="#111827" stroke-width="4"/>
      <path d="M110 170 Q150 140 190 170" fill="none" stroke="#111827" stroke-width="8"/>
      <text x="150" y="228" fill="#111827" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="900" text-anchor="middle">United Delivery Riders</text>
      <text x="150" y="248" fill="#111827" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="900" text-anchor="middle">of Metro Manila</text>
      <text x="150" y="275" fill="#4B5563" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="3">MANILA, PHILIPPINES</text>
    </svg>`,
    vest: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#FEF9D9" stroke="#FDE047" stroke-width="2"/>
      <path d="M140 50 L160 50 L200 110 L240 50 L260 50 L290 110 L280 250 L120 250 L110 110 Z" fill="#FACC15" stroke="#1F2937" stroke-width="3"/>
      <rect x="118" y="170" width="164" height="18" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
      <rect x="116" y="205" width="168" height="18" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
      <text x="200" y="280" fill="#854D0E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" text-anchor="middle">OFFICIAL SECURITY VEST</text>
    </svg>`,
    poncho: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#FEE8EA" stroke="#FCA5A5" stroke-width="2"/>
      <path d="M160 70 Q200 45 240 70 L340 150 L290 190 L260 160 L260 260 L140 260 L140 160 L110 190 L60 150 Z" fill="#0038A8"/>
      <rect x="140" y="180" width="120" height="18" fill="#FCD116"/>
      <rect x="140" y="212" width="120" height="12" fill="#E2E8F0"/>
      <circle cx="200" cy="65" r="26" fill="#CE1126"/>
      <text x="200" y="280" fill="#0038A8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">OFFICIAL UDRMM ALL-WEATHER JACKET</text>
    </svg>`,
    cap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#EBF2FF" stroke="#93C5FD" stroke-width="2"/>
      <path d="M130 170 Q130 95 240 95 Q310 95 320 170 Z" fill="#0038A8"/>
      <path d="M100 170 C100 170 140 195 280 185 C330 180 340 170 340 170 C340 170 310 205 200 205 C130 205 100 170 100 170 Z" fill="#002575"/>
      <circle cx="230" cy="135" r="18" fill="#FCD116"/>
      <text x="230" y="140" fill="#0038A8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="900" text-anchor="middle">UDRMM</text>
      <text x="200" y="270" fill="#0038A8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">EMBROIDERED UNION CAP</text>
    </svg>`,
    stickers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#FEF9D9" stroke="#FDE047" stroke-width="2"/>
      <circle cx="130" cy="135" r="65" fill="#DBFE01" stroke="#000000" stroke-width="3"/>
      <circle cx="270" cy="135" r="65" fill="#A10101" stroke="#000000" stroke-width="3"/>
      <text x="200" y="270" fill="#111827" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">WEATHERPROOF VINYL STICKER PACK</text>
    </svg>`,
    'phone-mount': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="150" y="55" width="100" height="170" rx="14" fill="#0F172A" stroke="#334155" stroke-width="4"/>
      <rect x="160" y="70" width="80" height="135" rx="6" fill="#0284C7"/>
      <circle cx="200" cy="135" r="20" fill="#FFFFFF" opacity="0.3"/>
      <rect x="180" y="225" width="40" height="30" rx="4" fill="#475569"/>
      <text x="200" y="275" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">IPX8 WATERPROOF PHONE MOUNT</text>
    </svg>`
  };
  const rawSvg = svgs[type] || svgs.logo;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(rawSvg);
}

// Global Image Fallback & Robust Preload Health Check
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      // Step 1: If URL had an issue or was cached negatively by CDN, try clean relative path
      if (!this.dataset.fallbackStep) {
        this.dataset.fallbackStep = '1';
        const rawSrc = this.getAttribute('src') || '';
        const cleanSrc = rawSrc.split('?')[0].replace(/^\.\//, '');
        if (cleanSrc && cleanSrc !== rawSrc) {
          this.src = cleanSrc;
          return;
        }
      }
      
      // Step 2: If clean path still failed or offline, deploy crisp thematic SVG fallback
      if (this.dataset.fallbackStep === '1' || !this.dataset.fallbackStep) {
        this.dataset.fallbackStep = '2';
        const src = (this.getAttribute('src') || '').toLowerCase();
        const alt = (this.getAttribute('alt') || '').toLowerCase();
        
        if (src.includes('logo') || alt.includes('emblem') || alt.includes('logo')) {
          this.src = getThematicFallback('logo');
        } else if (src.includes('vest') || alt.includes('vest') || alt.includes('security')) {
          this.src = getThematicFallback('vest');
        } else if (src.includes('poncho') || alt.includes('poncho') || alt.includes('vestaglia')) {
          this.src = getThematicFallback('poncho');
        } else if (src.includes('cap') || alt.includes('cap') || alt.includes('sumbrero')) {
          this.src = getThematicFallback('cap');
        } else if (src.includes('sticker') || alt.includes('sticker')) {
          this.src = getThematicFallback('stickers');
        } else if (src.includes('phone') || alt.includes('phone') || alt.includes('mount')) {
          this.src = getThematicFallback('phone-mount');
        } else {
          this.src = getThematicFallback('logo');
        }
      }
    });
  });
});

// Live Funding Pot State & Controller
let potCurrentRaised = 184500;
const potGoalTarget = 250000;
let potCurrentDonors = 1428;

function updateLivePotDisplay(addedAmount) {
  if (typeof addedAmount === 'number' && addedAmount > 0) {
    potCurrentRaised += addedAmount;
    potCurrentDonors += 1;
  }
  const display = document.getElementById('pot-raised-display');
  const donorsDisplay = document.getElementById('pot-donors-count');
  const bar = document.getElementById('pot-progress-bar');
  const pctText = document.getElementById('pot-progress-pct');

  const pct = Math.min(100, Math.round((potCurrentRaised / potGoalTarget) * 100));

  if (display) display.innerHTML = `₱${potCurrentRaised.toLocaleString()} <span class="pot-currency">PHP</span>`;
  if (donorsDisplay) donorsDisplay.textContent = potCurrentDonors.toLocaleString();
  if (bar) bar.style.width = `${pct}%`;
  if (pctText) pctText.textContent = `${pct}%`;
}


