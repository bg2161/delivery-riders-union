// UDRMM (United Delivery Riders of Metro Manila) - Interactive Application Logic

// Multi-language dictionary: English (en) & Filipino / Tagalog (fil)
const translations = {
  en: {
    // Top Bar
    alertText: "🚨 MAY 1, 2027 NATIONAL MOBILIZATION (Labor Day): Metro Manila Riders Caravan & App Freeze.",
    alertLink: "View May 1 Details & Demands →",
    
    // Brand
    brand_subtitle: "United Delivery Riders of Metro Manila",

    // Nav
    navHome: "Home",
    navProtest: "May 1 Protest",
    navDemands: "Our Demands",
    navShop: "Membership & Shop",
    navStories: "Rider Stories",
    navAbout: "About Us",
    btnJoinNav: "Join Union (₱150/yr)",
    
    // Hero
    heroBadge: "Official Union of Manila Food & Courier Riders",
    heroTitlePart1: "No delivery is worth a ",
    heroTitleHighlight: "rider's safety.",
    heroSubtitle: "United Delivery Riders of Metro Manila (UDRMM) is an independent, worker-led union fighting against algorithmic pay cuts, wet-season delivery speed penalties, and hazardous working conditions in Metro Manila.",
    heroCtaJoin: "Become a Member (₱150/yr Dues)",
    heroCtaProtest: "May 1st Action Hub",
    statMembers: "Active Riders Enrolled",
    statHazardPay: "Monsoon Hazard Pay Demand",
    statCities: "Metro Manila Cities Covered",
    
    // Hero Card
    heroCardTitle: "United We Ride, United We Win",
    heroCardDesc: "Organizing riders from FoodTiger, Grab, Foodpanda, and independent couriers across all 16 cities.",
    perk1: "Official heavy-duty high-vis gear & safety package included",
    perk2: "Legal aid & emergency suspension support",
    perk3: "Barangay solidarity shelters during typhoons",
    perk4: "Collective bargaining representation with DOLE",
    freePonchoBadge: "INCLUDED WITH DUES",
    heroPonchoTitle: "Official Rain Poncho Included",
    heroPonchoDesc: "High-visibility reflective all-weather poncho given to all riders upon registration.",
    membershipFeeDuesLbl: "Annual Union Dues",
    membershipFeeLabel: "Includes High-Vis Safety Vest & Stickers (Annual Dues: ₱150/yr)",
    btnClaimPoncho: "Register & Join Union (₱150/yr)",

    // Live Weather & Flood Risk Advisory Widget
    weatherBadge: "PAGASA & PROJECT NOAH ADVISORY",
    pagasaLevelOrange: "Orange Warning (15-30 mm/hr)",
    weatherTitle: "Metro Manila Weather & Flood Risk Status",
    weatherDesc: "Active monsoon downpour. Flooding threatening España, Taft, and EDSA corridors. Platforms must suspend automatic delivery time penalties.",
    weatherTipTitle: "Active Rain Protocol in Effect:",
    weatherTipDesc: "Delivery timers paused; +35% monsoon hazard pay demanded. Riders retain statutory right to refuse submerged routes under DOLE Advisory 17.",
    weatherPledgeLink: "View Platform Demand #1 →",

    // Protest Section
    protestBadge: "MAY 1, 2027 • LABOR DAY MOBILIZATION",
    protestTitle: "The May 1st, 2027 Rider Unity March & App Freeze",
    protestDesc: "During the rainy season, platform giants cut pay per order while demanding unchanged dry-season delivery speeds. On May 1st, 2027 (Labor Day), thousands of riders across Metro Manila will unite for a peaceful caravan, dialogue, and 1-hour solidarity app freeze.",
    countdownHeading: "Countdown to May 1st Mobilization",
    countdownSub: "Saturday, May 1, 2027 • Assembly at 08:30 AM",
    lblDays: "Days",
    lblHours: "Hours",
    lblMins: "Mins",
    lblSecs: "Secs",
    
    scheduleHeading: "May 1st Action Schedule (Labor Day 2027)",
    sch1Time: "08:30 AM",
    sch1Title: "Twin Assembly Points",
    sch1Desc: "Riders gather at Welcome Rotonda (Quezon City / Manila border) and EDSA Shrine (Ortigas). Distribution of high-vis armbands.",
    sch2Time: "10:00 AM",
    sch2Title: "Peaceful Motorcade Caravan",
    sch2Desc: "Orderly single-lane motorcycle caravan towards corporate headquarters in Bonifacio Global City (BGC) and DOLE NCR.",
    sch3Time: "12:00 PM - 01:00 PM",
    sch3Title: "Silent App Freeze (1-Hour Boycott)",
    sch3Desc: "Mass app logoff. No orders picked up across participating districts to demonstrate the real economic impact of riders.",
    sch4Time: "02:00 PM",
    sch4Title: "Charter of Demands Handover & Dialogue",
    sch4Desc: "UDRMM representatives present our 5 Five-Point Collective Demands directly to FoodTiger management and DOLE officials.",

    demandsHeading: "What We Are Demanding vs Platform Policy",
    dem1Title: "Mandatory Gov't Flood Data Integration",
    dem1Badge: "PAGASA & NOAH API",
    dem1Current: "Current: Platforms use blind algorithms that force riders into flooded corridors and cut wet-weather pay by 20%.",
    dem1Proposed: "Demand: Mandatory API integration of PAGASA/NOAH flood maps to auto-reroute flooded corridors, trigger +35% to +50% hazard pay, and pause speed timers.",
    dem2Title: "Unrealistic Delivery Speed Timers",
    dem2Badge: "Safety Timers",
    dem2Current: "Current: Fixed 25-min timers regardless of flooded streets, leading to 1-star weather penalties.",
    dem2Proposed: "Demand: Dynamic timer extensions and complete nullification of customer rating penalties during rain alerts.",
    dem3Title: "Arbitrary Account Suspension",
    dem3Badge: "Due Process",
    dem3Current: "Current: Algorithmic deactivation without human explanation when riders decline flooded trips.",
    dem3Proposed: "Demand: 72-hour formal notice, UDRMM representation, and DOLE Labor Advisory 17 right-to-refuse protection.",
    dem4Title: "Safety Gear & Medical Coverage",
    dem4Badge: "Worker Health",
    dem4Current: "Current: 100% equipment, poncho, and injury expenses borne entirely by the rider.",
    dem4Proposed: "Demand: Free company-issued rain ponchos & emergency medical clinic fund in all 16 cities.",

    // The 5 Official Pledges
    pledgesTitle: "★ THE 5 OFFICIAL UDRMM CAMPAIGN PLEDGES • LABOR DAY 2027",
    pl1Desc: "<strong>Mandatory Gov't Flood Integration:</strong> Delivery apps must connect to DOST-PAGASA &amp; Project NOAH APIs to auto-reroute flooded streets and trigger +35% to +50% hazard pay.",
    pl2Desc: "<strong>Abolish Speed Demerits:</strong> Suspend 25-min delivery countdowns and nullify negative customer ratings during official rainfall alerts.",
    pl3Desc: "<strong>DOLE Right-to-Refuse Protection:</strong> Protect riders from account deactivations or AR penalties when declining dangerous submerged routes.",
    pl4Desc: "<strong>Human Due Process:</strong> Guarantee 72-hour formal notice and union legal representation before any account suspension.",
    pl5Desc: "<strong>Free Weather Gear &amp; Shelters:</strong> Provide free high-vis waterproof vestaglia (rain ponchos) and typhoon rest hubs across all 16 cities.",

    rsvpTitle: "Pledge Your Solidarity For May 1st, 2027",
    rsvpSub: "Whether you are a delivery rider or a supportive customer, endorse the 5 pledges and join the movement.",
    btnPledge: "Pledge Solidarity Now",
    btnPledged: "✓ Pledged Solidarity!",
    rsvpLabel: "Supporters & Riders Pledged",

    // Shop & Free Poncho
    shopBadge: "UNION MEMBERSHIP & SOLIDARITY SHOP",
    shopTitle: "Wear The Struggle. Fund The Movement.",
    shopDesc: "Every purchase directly supports UDRMM legal funds, emergency rider medical aid, and community meeting hubs.",
    
    // Hero Poncho Product
    vestagliaTag: "★ EXCLUSIVE UNION MEMBER BENEFIT",
    vestagliaTitle: "Official Heavy-Duty All-Weather Vestaglia (Rain Poncho)",
    vestagliaDesc: "Designed specifically for Manila's torrential monsoon conditions. Made with double-sealed Oxford waterproof nylon, 360° neon safety stripes, storm flaps, and the official UDRMM rider chest insignia. Included for all registered union members with paid annual dues.",
    vf1: "100% Storm-Proof Waterproof Fabric",
    vf2: "360° Neon & Silver Reflective Safety Bands",
    vf3: "Helmet-Compatible Drawstring Hood",
    vf4: "Reinforced Mobile Phone Chest Pockets",
    vestagliaPriceLabel: "Included with ₱150/yr Union Membership",
    btnClaimPoncho: "Register & Join Union (₱150/yr)",
    
    // Accessories Grid
    accessoriesTitle: "Official Solidarity Accessories",
    accessoriesDesc: "High-durability accessories designed for riders and solidarity allies.",
    
    itemVestTitle: "Official High-Vis Security Jacket / Safety Vest",
    itemVestDesc: "Industrial-grade neon yellow security safety vest with dual 3M reflective bands. Features the official union credential badge with scannable QR code on the chest and the rallying slogan 'NO DELIVERY IS WORTH A RIDER'S SAFETY' on the back.",
    itemVestSizeLbl: "Size:",

    itemStickersTitle: "Official Weatherproof Vinyl Sticker Pack (Yellow & Red)",
    itemStickersDesc: "Heavy-duty outdoor laminated vinyl stickers in high-vis neon yellow and deep crimson red. Features the official union emblem and bold typography, ideal for helmets, motorcycle windshields, and delivery boxes.",
    itemStickerVariantLbl: "Pack:",

    itemCapTitle: "Official UDRMM Embroidered Cap",
    itemCapDesc: "Durable cotton twill cap featuring the Philippine sun badge, scooter emblem, and the embroidered slogan: 'NO DELIVERY IS WORTH A RIDER'S SAFETY'. Available in Royal Blue and Crimson Red.",
    itemCapColorLbl: "Color:",
    
    itemPhoneTitle: "Heavy-Duty Handlebar Phone Mount",
    itemPhoneDesc: "100% waterproof sealed case with touchscreen sensitivity, vibration absorption, and secure handlebar clamp. Built for intense rain navigation.",
    
    btnAddCart: "Add to Bag",
    btnAdded: "✓ Added!",
    
    // Stories Section
    storiesBadge: "VOICES FROM THE ROAD",
    storiesTitle: "Why We Organize: Real Rider Stories",
    storiesDesc: "Listen to the lived experiences of delivery workers navigating Manila's streets.",
    story1Text: "\"During the July typhoons, floodwaters on España reached knee-deep. A customer gave me a 1-star rating because soup was 8 minutes late. That rating cut my incentives for a week. That is when I knew we needed a union.\"",
    story1Author: "Kuya Jun",
    story1Role: "FoodTiger Rider, Pasig City (4 Years)",
    story2Text: "\"The official high-vis rain poncho from UDRMM literally saved my life last month in heavy mist along C-5. Drivers can finally see us. More than gear, the union gives us our self-respect back.\"",
    story2Author: "Ate Maria",
    story2Role: "Courier & Food Delivery Rider, Quezon City",
    story3Text: "\"FoodTiger tells us we are 'independent partners'. But partners don't get their pay slashed without a word. On May 1st, 2027, we are not asking for charity—we are asking for dignity.\"",
    story3Author: "Kuya Roland",
    story3Role: "UDRMM Manila Chapter Leader",

    // About Section
    aboutBadge: "ACADEMIC & CIVIC FRAMEWORK",
    aboutTitle: "Battling Global Giants Locally (B.G.G.L.)",
    aboutDesc1: "United Delivery Riders of Metro Manila (UDRMM) is a civic project developed by Taskforce 2 for MSM Assignment 2 under the campaign 'Battling Global Giants Locally'. Our goal is to illustrate how grassroots gig workers can organize against multinational platform exploitation.",
    aboutDesc2: "By blending local cultural solidarity (bayanihan, barangay community networks) with modern digital campaigning and collective bargaining strategies, we prove that no corporate giant is too large to negotiate with organized labor.",
    teamHeading: "Taskforce 2 Working Group",
    teamSub: "Ordered by working group responsibilities (Initials: B.G.G.L.):",
    roleDesign: "Design & Visual Production",
    roleWriting: "Writing & Report Lead",
    roleComm: "Internal & External Comm",
    roleLeadership: "Planning & Leadership",
    campaignTargetsHeading: "🎯 Campaign Targets & Transparent Union Fund Allocation",
    
    // Cart Drawer
    cartTitle: "Your Solidarity Bag",
    cartEmpty: "Your bag is empty. Add accessories to support the union!",
    subtotalLbl: "Subtotal:",
    btnCheckout: "Proceed to Order",
    
    // Membership Modal
    modalMemberTitle: "Join United Delivery Riders of Metro Manila",
    modalMemberSub: "Join the United Delivery Riders of Metro Manila. Annual union dues (₱150 PHP / year) are required to sustain our collective legal defense, helmet stickers, and worker-led campaign.",
    unionDuesTitle: "💳 Annual Union Dues: ₱150 PHP / year (Required)",
    regDuesNote: "Includes official High-Vis Safety Vest & Waterproof Stickers package upon paid enrollment.",
    modalNameLbl: "Full Name:",
    modalPlatformLbl: "Delivery Platform(s):",
    modalCityLbl: "City / Barangay in Metro Manila:",
    modalPhoneLbl: "Mobile Number (GCash / Contact):",
    modalSizeLbl: "Select Safety Vest / Gear Size:",
    duesPaymentOptionLbl: "Annual Membership Fee (₱150 PHP / year):",
    btnSubmitRegistration: "Pay ₱150 Dues & Complete Registration",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Welcome to UDRMM!",
    registeredSub: "Your membership registration and annual dues payment (₱150 PHP) have been confirmed. Here is your official Union Digital ID:",
    regPonchoNote: "Your Official High-Vis Safety Vest & Waterproof Stickers package will be prepared for pickup at your local Barangay Solidarity Station or coordinated via your mobile contact.",
    
    // GDPR & Cookie Banner
    cookieTitle: "Cookie & Data Privacy Notice",
    cookieText: "We value your privacy. As an academic prototype for MSM Assignment 2, this website uses only strictly essential local storage (such as saving your English/Filipino language preference). We do NOT use tracking, profiling, or third-party advertising cookies. All checkout and membership functions are simulated mock-ups.",
    cookieAcceptBtn: "Accept Essential Only",
    cookieDetailsBtn: "Privacy Details & Settings",
    privacyModalTitle: "Data Privacy & GDPR Notice",
    privacyModalSubtitle: "Academic Prototype • MSM Assignment 2 (Taskforce 2)",
    btnCloseModal: "Close Window"
  },

  fil: {
    // Top Bar
    alertText: "🚨 PAMBANSANG PAGKILOS SA MAYO 1, 2027 (Araw ng Paggawa): Martsa at App Freeze ng mga Rider.",
    alertLink: "Tingnan ang Detalye at mga Hiling sa Mayo 1 →",
    
    // Brand
    brand_subtitle: "United Delivery Riders of Metro Manila",

    // Nav
    navHome: "Tahanan",
    navProtest: "Protesta sa Mayo 1",
    navDemands: "Aming Hiling",
    navShop: "Kasapian at Tindahan",
    navStories: "Kuwento ng Rider",
    navAbout: "Tungkol sa Amin",
    btnJoinNav: "Sumapi sa Unyon (₱150/taon)",
    
    // Hero
    heroBadge: "Opisyal na Unyon ng mga Food at Courier Rider sa Maynila",
    heroTitlePart1: "Walang order ang katumbas ng ",
    heroTitleHighlight: "kaligtasan ng rider.",
    heroSubtitle: "Ang United Delivery Riders of Metro Manila (UDRMM) ay isang nagsasarili at pinangungunahan ng manggagawang unyon na lumalaban sa bawas-sahod ng algorithm, parusa sa bilis tuwing tag-ulan, at mapanganib na kalagayan sa kalsada.",
    heroCtaJoin: "Maging Kasapi (₱150/taon Butaw)",
    heroCtaProtest: "Sentro ng Pagkilos sa Mayo 1",
    statMembers: "Aktibong Kasaping Rider",
    statHazardPay: "Hiling na Monsoon Hazard Pay",
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
    membershipFeeDuesLbl: "Taunang Butaw sa Unyon",
    membershipFeeLabel: "Kasama ang High-Vis Safety Vest at Stickers (Taunang Butaw: ₱150/taon)",
    btnClaimPoncho: "Magrehistro at Sumapi (₱150/taon)",

    // Live Weather & Flood Risk Advisory Widget
    weatherBadge: "PAALALA NG PAGASA AT PROJECT NOAH",
    pagasaLevelOrange: "Orange Warning (15-30 mm/oras)",
    weatherTitle: "Lagay ng Panahon at Baha sa Metro Manila",
    weatherDesc: "Malakas na buhos ng habagat. May banta ng baha sa España, Taft, at EDSA. Dapat tanggalin ng mga app platform ang time penalties.",
    weatherTipTitle: "Aktibong Panuntunan sa Ulan:",
    weatherTipDesc: "Itigil ang delivery timers; ipinaglalaban ang +35% hazard pay. May karapatang tumanggi sa baha sa ilalim ng DOLE Advisory 17.",
    weatherPledgeLink: "Tingnan ang Hiling #1 →",

    // Protest Section
    protestBadge: "MAYO 1, 2027 • ARAW NG PAGGAWA",
    protestTitle: "Martsa ng Pagkakaisa ng mga Rider sa Mayo 1, 2027",
    protestDesc: "Tuwing tag-ulan, binabawasan ng FoodTiger ang bayad sa bawat delivery ngunit pareho pa rin ang bilis na hinihingi tulad ng tag-init. Sa Mayo 1, 2027 (Araw ng Paggawa), magsasama-sama ang mga rider para sa payapang motorcade caravan, diyalogo, at 1-oras na pag-logoff sa app.",
    countdownHeading: "Oras Bago ang Pagkilos sa Mayo 1",
    countdownSub: "Sabado, Mayo 1, 2027 • Tipunan sa ganap na 08:30 AM",
    lblDays: "Araw",
    lblHours: "Oras",
    lblMins: "Minuto",
    lblSecs: "Segundo",
    
    scheduleHeading: "Plano ng Pagkilos sa Mayo 1, 2027",
    sch1Time: "08:30 AM",
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
    dem4Proposed: "Hiling: Libreng kapote mula sa kumpanya at emergency medical assistance fund sa lahat ng 16 na lungsod.",

    // The 5 Official Pledges
    pledgesTitle: "★ ANG LIMANG OPISYAL NA PANATA NG UDRMM • ARAW NG PAGGAWA 2027",
    pl1Desc: "<strong>Sapilitang Pag-integrate ng Datos ng Baha:</strong> Dapat ikonekta ang delivery apps sa DOST-PAGASA at Project NOAH APIs upang kusang umiwas sa baha at magbigay ng +35% hanggang +50% hazard pay.",
    pl2Desc: "<strong>Tanggalin ang Parusa sa Bilis:</strong> Itigil ang 25-minutong countdown at burahin ang negatibong ratings habang may opisyal na rainfall alert.",
    pl3Desc: "<strong>Proteksyon sa DOLE Right-to-Refuse:</strong> Protektahan ang rider sa suspension o AR penalties kapag tumangging dumaan sa delikadong baha.",
    pl4Desc: "<strong>Makatarungang Paglilitis sa Tao:</strong> Garantiyang 72-oras na abiso at tulong legal ng unyon bago ang anumang suspension ng account.",
    pl5Desc: "<strong>Libreng Gamit at Masisilungan:</strong> Libreng matibay at high-vis na vestaglia (kapote) at mga masisilungan tuwing bagyo sa lahat ng 16 lungsod.",

    rsvpTitle: "Magpahayag ng Suporta sa Mayo 1, 2027",
    rsvpSub: "Ikaw man ay rider o mamimiling nagmamalasakit, pirmahan ang 5 panata at sumama sa pagkilos.",
    btnPledge: "Pumirma ng Suporta Ngayon",
    btnPledged: "✓ Nakapirma ng Suporta!",
    rsvpLabel: "Mga Rider at Tagasuportang Nakiisa",

    // Shop & Free Poncho
    shopBadge: "KASAPIAN SA UNYON AT SOLIDARITY SHOP",
    shopTitle: "Isuot ang Paninindigan. Suportahan ang Kilusan.",
    shopDesc: "Bawat kita ay direktang napupunta sa pondong legal ng UDRMM, tulong medikal sa mga naaksidenteng rider, at mga sentrong pangkomunidad.",
    
    // Hero Poncho Product
    vestagliaTag: "★ NATATANGING BENEPISYO NG KASAPING RIDER",
    vestagliaTitle: "Opisyal na Heavy-Duty All-Weather Vestaglia (Kapote)",
    vestagliaDesc: "Espesyal na idinisenyo para sa malalakas na habagat at bagyo sa Maynila. Gawa sa double-sealed waterproof Oxford nylon, may 360° neon at reflective bands, storm flaps, at burdadong sagisag ng UDRMM. Kasama para sa lahat ng rehistradong miyembro na nagbayad ng taunang butaw.",
    vf1: "100% Hindi Bumabasa kahit Matinding Bagyo",
    vf2: "360° Neon at Silver Reflective Safety Bands",
    vf3: "Kasya sa Helmet ang Tali ng Hood",
    vf4: "Protektadong Bulsa para sa Mobile Phone",
    vestagliaPriceLabel: "Kasama sa ₱150/taon na Pagsapi sa Unyon",
    btnClaimPoncho: "Magrehistro at Sumapi (₱150/taon)",
    
    // Accessories Grid
    accessoriesTitle: "Mga Opisyal na Gamit ng Unyon",
    accessoriesDesc: "Matitibay na gamit para sa mga rider at tagapagtaguyod ng karapatan sa paggawa.",
    
    itemVestTitle: "Opisyal na High-Vis Security Jacket / Safety Vest",
    itemVestDesc: "Maliwanag na neon yellow security safety vest na may dobleng 3M reflective safety bands. May opisyal na credential patch na may scannable QR code sa dibdib at ang panawagang 'NO DELIVERY IS WORTH A RIDER'S SAFETY' sa likod.",
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
    story2Text: "\"Yung opisyal na kapote ng UDRMM ang nagligtas sa akin sa makapal na ambon sa C-5. Nakikita na kami ng mga dambuhalang trak. Higit sa gamit, ibinalik sa amin ng unyon ang aming dangal bilang tao.\"",
    story2Author: "Ate Maria",
    story2Role: "Courier at Food Rider, Lungsod Quezon",
    story3Text: "\"Sabi ng FoodTiger 'partner' daw kami. Pero sa totoo lang, walang kapangyarihan ang partner kapag binawasan ang delivery fee nang walang paabiso. Sa Mayo 1, 2027, hindi kami humihingi ng awa—hustisya ang aming sigaw.\"",
    story3Author: "Kuya Roland",
    story3Role: "Lider ng UDRMM Manila Chapter",

    // About Section
    aboutBadge: "AKADEMIKONG BALANGKAS AT PROYEKTO",
    aboutTitle: "Battling Global Giants Locally (B.G.G.L.)",
    aboutDesc1: "Ang United Delivery Riders of Metro Manila (UDRMM) ay isang proyektong pangkomunikasyon na binuo ng Taskforce 2 para sa MSM Assignment 2 sa ilalim ng temang 'Battling Global Giants Locally'. Layunin nitong ipakita kung paano makakapag-organisa ang mga gig worker laban sa pang-aabuso ng mga multinasyunal na platform.",
    aboutDesc2: "Sa pamamagitan ng diwa ng bayanihan, tulungan sa barangay, at modernong kampanya sa digital media, pinatutunayan natin na walang kumpanyang higit na makapangyarihan kaysa sa nagkakaisang hanay ng mga manggagawa.",
    teamHeading: "Taskforce 2 Working Group",
    teamSub: "Nakaayos ayon sa tungkulin ng working group (Inisyal: B.G.G.L.):",
    roleDesign: "Disenyo at Visual Materials",
    roleWriting: "Pagsusulat at Ulat Lead",
    roleComm: "Komunikasyon at Ugnayan",
    roleLeadership: "Pamumuno at Pagpaplano",
    campaignTargetsHeading: "🎯 Mga Target ng Kampanya at Malinaw na Alokasyon ng Pondo",
    
    // Cart Drawer
    cartTitle: "Iyong Bag ng Pagkakaisa",
    cartEmpty: "Wala pang laman ang iyong bag. Magdagdag ng gamit upang suportahan ang unyon!",
    subtotalLbl: "Kabuuan:",
    btnCheckout: "Magpatuloy sa Pag-order",
    
    // Membership Modal
    modalMemberTitle: "Sumapi sa United Delivery Riders of Metro Manila",
    modalMemberSub: "Sumapi sa United Delivery Riders of Metro Manila. Ang taunang butaw (₱150 PHP / taon) ay kailangan upang pondohan ang tulong-legal, stickers sa helmet, at kampanya ng mga manggagawa.",
    unionDuesTitle: "💳 Taunang Butaw sa Unyon: ₱150 PHP / taon (Kailangan)",
    regDuesNote: "Kasama ang opisyal na High-Vis Safety Vest at Waterproof Stickers package sa bawat bayad na pagsapi.",
    modalNameLbl: "Buong Pangalan:",
    modalPlatformLbl: "Delivery Platform(s):",
    modalCityLbl: "Lungsod / Barangay sa Metro Manila:",
    modalPhoneLbl: "Numero ng Telepono (GCash / Kontak):",
    modalSizeLbl: "Pumili ng Sukat ng Safety Vest / Gear:",
    duesPaymentOptionLbl: "Taunang Butaw sa Pagsapi (₱150 PHP / taon):",
    btnSubmitRegistration: "Magbayad ng ₱150 Butaw at Kumpletuhin ang Rehistro",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Maligayang Pagdating sa UDRMM!",
    registeredSub: "Kumpirmado ang iyong pagsapi at taunang butaw (₱150 PHP). Narito ang iyong Opisyal na Digital ID ng Unyon:",
    regPonchoNote: "Ang iyong Opisyal na High-Vis Safety Vest at Waterproof Stickers ay ihahanda para sa pickup sa iyong Barangay Solidarity Station o ipapadala sa pamamagitan ng iyong kontak.",
    
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
  const targetDate = new Date(2027, 4, 1, 8, 30, 0); // May 1, 2027 at 08:30 AM (Month 4 = May)

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
          checkPledgeMilestones(prev, rsvpCount);
        }
      } else if (res.status === 404) {
        // Key not yet hit by anyone globally -> count is 0
        rsvpCount = Math.max(rsvpCount, 0);
        renderCount();
      }
    } catch (err) {
      // Offline or network timeout: keep existing cached tally
      console.warn('UDRMM: Using cached pledge count:', err.message);
    }
  }

  // Handle solidarity pledge action (increments global counter across all visitors)
  async function handlePledge() {
    if (isPledging) return;
    isPledging = true;
    const prev = rsvpCount;

    // Immediately trigger tactile animation on button & counter badge
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
    checkPledgeMilestones(prev, rsvpCount);

    const toastMsg = currentLang === 'en'
      ? `Salamat! Global solidarity pledge recorded (Total: ${rsvpCount.toLocaleString()}).`
      : `Maraming salamat! Naitala ang iyong pakikiisa sa buong mundo (Kabuuan: ${rsvpCount.toLocaleString()}).`;
    showToast(toastMsg);
  }

  renderCount();
  fetchGlobalCount().then(() => {
    checkPledgeMilestones(0, rsvpCount);
  });

  // Real-time polling every 3s so pledges on phone/other devices reflect immediately on PC
  setInterval(() => {
    if (!document.hidden) {
      fetchGlobalCount();
    }
  }, 3000);

  // Instant refresh when user returns to tab or focuses the window
  window.addEventListener('focus', fetchGlobalCount);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      fetchGlobalCount();
    }
  });

  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', handlePledge);
  }

  if (badgeBtn) {
    badgeBtn.addEventListener('click', (e) => {
      if (e.shiftKey) {
        const next = rsvpCount < 50 ? 50 : (rsvpCount < 100 ? 100 : (rsvpCount < 200 ? 200 : 50));
        triggerEasterEgg(next);
        return;
      }
      handlePledge();
    });
    badgeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handlePledge();
      }
    });
  }
}

// ============================================================================
// MILESTONE EASTER EGGS (50, 100, 200 Pledges)
// ============================================================================

let activeEasterEggCleanup = null;

function checkPledgeMilestones(prev, current) {
  if (typeof current !== 'number' || current <= 0) return;
  
  const seen50 = sessionStorage.getItem('udrmm_egg_50') === 'true';
  const seen100 = sessionStorage.getItem('udrmm_egg_100') === 'true';
  const seen200 = sessionStorage.getItem('udrmm_egg_200') === 'true';

  if ((prev < 50 && current >= 50) || (current === 50 && !seen50)) {
    sessionStorage.setItem('udrmm_egg_50', 'true');
    triggerEasterEgg(50);
  } else if ((prev < 100 && current >= 100) || (current === 100 && !seen100)) {
    sessionStorage.setItem('udrmm_egg_100', 'true');
    triggerEasterEgg(100);
  } else if ((prev < 200 && current >= 200) || (current === 200 && !seen200)) {
    sessionStorage.setItem('udrmm_egg_200', 'true');
    triggerEasterEgg(200);
  }
}

function playEasterEggAudio(type) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    if (type === 'caravan') {
      [0, 0.16].forEach(delay => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(680, now + delay);
        osc.frequency.exponentialRampToValueAtTime(740, now + delay + 0.08);
        gain.gain.setValueAtTime(0.18, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.13);
      });
    } else if (type === 'fireworks') {
      [0.1, 0.55, 1.1, 1.7, 2.3].forEach((burstTime, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220 + idx * 30, now + burstTime);
        osc.frequency.exponentialRampToValueAtTime(50, now + burstTime + 0.28);
        gain.gain.setValueAtTime(0.2, now + burstTime);
        gain.gain.exponentialRampToValueAtTime(0.001, now + burstTime + 0.32);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + burstTime);
        osc.stop(now + burstTime + 0.33);
      });
    } else if (type === 'fanfare') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        const t = now + idx * 0.16;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.14, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + (idx === 3 ? 0.6 : 0.22));
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + (idx === 3 ? 0.65 : 0.25));
      });
    }
  } catch (err) {}
}

function triggerEasterEgg(milestone) {
  if (activeEasterEggCleanup) {
    try { activeEasterEggCleanup(); } catch (e) {}
    activeEasterEggCleanup = null;
  }

  if (milestone === 50) {
    triggerCaravanEasterEgg();
  } else if (milestone === 100) {
    triggerFireworksEasterEgg();
  } else if (milestone === 200) {
    triggerConfettiStormEasterEgg();
  }
}

// 1. Milestone 50 Easter Egg: Metro Manila Riders Solidarity Caravan 🛵
function triggerCaravanEasterEgg() {
  playEasterEggAudio('caravan');

  const container = document.createElement('div');
  container.className = 'easter-egg-container';
  document.body.appendChild(container);

  const banner = document.createElement('div');
  banner.className = 'easter-egg-banner';
  banner.innerHTML = `
    <h4>🛵 50 SOLIDARITY PLEDGES! • RIDERS CARAVAN MOBILIZED! 🇵🇭</h4>
    <p>50 delivery workers & allies rolling united across Metro Manila!</p>
  `;
  banner.onclick = () => { if (activeEasterEggCleanup) activeEasterEggCleanup(); };
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('active'));

  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'caravan-scooter';
    const bottomLane = 10 + Math.random() * 32;
    const duration = 2.8 + Math.random() * 1.6;
    const delay = i * 0.22;
    const scale = 0.85 + Math.random() * 0.35;
    
    el.style.bottom = `${bottomLane}%`;
    el.style.animation = `driveAcross ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s forwards`;
    el.style.transform = `scale(${scale})`;

    el.innerHTML = `
      <svg viewBox="0 0 100 70" width="100%" height="100%">
        <polygon points="75,45 140,30 140,60" fill="rgba(252, 209, 22, 0.25)"/>
        <rect x="5" y="18" width="28" height="24" rx="3" fill="#CE1126" stroke="#FFFFFF" stroke-width="1.5"/>
        <text x="19" y="34" fill="#FFFFFF" font-size="7" font-weight="900" text-anchor="middle" font-family="sans-serif">UDRMM</text>
        <circle cx="48" cy="12" r="8" fill="#111827"/>
        <path d="M42,12 Q48,6 54,12" stroke="#FCD116" stroke-width="2" fill="none"/>
        <path d="M40,20 L56,20 L58,40 L38,40 Z" fill="#FCD116"/>
        <line x1="42" y1="28" x2="56" y2="28" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M25,48 L55,48 L65,35 L75,45 L80,52" stroke="#0038A8" stroke-width="4" stroke-linecap="round" fill="none"/>
        <circle cx="25" cy="52" r="10" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
        <circle cx="25" cy="52" r="4" fill="#E2E8F0"/>
        <circle cx="75" cy="52" r="10" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
        <circle cx="75" cy="52" r="4" fill="#E2E8F0"/>
        <circle cx="78" cy="45" r="3" fill="#FCD116"/>
        <line x1="33" y1="18" x2="33" y2="4" stroke="#CBD5E1" stroke-width="1.5"/>
        <polygon points="33,4 20,8 33,12" fill="#0038A8"/>
      </svg>
    `;
    container.appendChild(el);
  }

  const timeoutId = setTimeout(() => {
    banner.classList.remove('active');
    setTimeout(() => {
      container.remove();
      banner.remove();
    }, 600);
  }, 5600);

  activeEasterEggCleanup = () => {
    clearTimeout(timeoutId);
    container.remove();
    banner.remove();
  };
}

// 2. Milestone 100 Easter Egg: Manila Night Sky Fireworks Show 🎆
function triggerFireworksEasterEgg() {
  playEasterEggAudio('fireworks');

  const container = document.createElement('div');
  container.className = 'easter-egg-container';
  container.style.background = 'radial-gradient(ellipse at bottom, rgba(15, 23, 42, 0.45) 0%, rgba(2, 6, 23, 0.7) 100%)';
  container.style.transition = 'opacity 0.6s ease';
  document.body.appendChild(container);

  const canvas = document.createElement('canvas');
  canvas.className = 'easter-egg-canvas';
  container.appendChild(canvas);

  const banner = document.createElement('div');
  banner.className = 'easter-egg-banner';
  banner.innerHTML = `
    <h4>🎆 100 SOLIDARITY PLEDGES! • CENTURY OF UNITY REACHED! 🌟</h4>
    <p>The night sky of Manila blazes in solidarity for rider dignity & fair pay!</p>
  `;
  banner.onclick = () => { if (activeEasterEggCleanup) activeEasterEggCleanup(); };
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('active'));

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const onResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize);

  const particles = [];
  const rockets = [];
  const colors = ['#FCD116', '#0038A8', '#CE1126', '#FFFFFF', '#38BDF8', '#F59E0B'];

  class Rocket {
    constructor() {
      this.x = width * 0.15 + Math.random() * (width * 0.7);
      this.y = height + 10;
      this.targetY = height * 0.15 + Math.random() * (height * 0.35);
      this.speed = 10 + Math.random() * 4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alive = true;
    }
    update() {
      this.y -= this.speed;
      if (this.y <= this.targetY) {
        this.alive = false;
        this.explode();
      }
    }
    explode() {
      const pCount = 75 + Math.floor(Math.random() * 35);
      for (let i = 0; i < pCount; i++) {
        const angle = (Math.PI * 2 / pCount) * i + (Math.random() - 0.5) * 0.2;
        const vel = 2 + Math.random() * 5.5;
        particles.push({
          x: this.x,
          y: this.y,
          vx: Math.cos(angle) * vel,
          vy: Math.sin(angle) * vel,
          alpha: 1,
          decay: 0.014 + Math.random() * 0.014,
          color: Math.random() > 0.3 ? this.color : colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 2.5
        });
      }
    }
    draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, 3, 0, Math.PI * 2);
      c.fillStyle = '#FFFFFF';
      c.fill();
    }
  }

  let rocketTimer = 0;
  let totalSpawned = 0;
  let animId = null;

  function loop() {
    ctx.clearRect(0, 0, width, height);

    if (totalSpawned < 14 && ++rocketTimer % 18 === 0) {
      rockets.push(new Rocket());
      totalSpawned++;
    }

    for (let i = rockets.length - 1; i >= 0; i--) {
      rockets[i].update();
      if (rockets[i].alive) {
        rockets[i].draw(ctx);
      } else {
        rockets.splice(i, 1);
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.07;
      p.vx *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
      } else {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    animId = requestAnimationFrame(loop);
  }

  loop();

  const timeoutId = setTimeout(() => {
    banner.classList.remove('active');
    container.style.opacity = '0';
    setTimeout(() => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      container.remove();
      banner.remove();
    }, 700);
  }, 6500);

  activeEasterEggCleanup = () => {
    clearTimeout(timeoutId);
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', onResize);
    container.remove();
    banner.remove();
  };
}

// 3. Milestone 200 Easter Egg: Confetti Cannon Blast & Golden Storm 🏆⚡
function triggerConfettiStormEasterEgg() {
  playEasterEggAudio('fanfare');

  const countBadge = document.getElementById('rsvp-badge-btn');
  if (countBadge) {
    countBadge.classList.add('milestone-badge-glow');
  }

  const container = document.createElement('div');
  container.className = 'easter-egg-container';
  document.body.appendChild(container);

  const canvas = document.createElement('canvas');
  canvas.className = 'easter-egg-canvas';
  container.appendChild(canvas);

  const banner = document.createElement('div');
  banner.className = 'easter-egg-banner';
  banner.style.border = '3px solid #FCD116';
  banner.innerHTML = `
    <h4>🏆 200 HEROES OF MANILA! • THE WORKERS' POWER IS UNSTOPPABLE! ⚡🇵🇭</h4>
    <p>Mass mobilization unlocked • Together we ride to victory this May 1st!</p>
  `;
  banner.onclick = () => { if (activeEasterEggCleanup) activeEasterEggCleanup(); };
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('active'));

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const onResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize);

  const pieces = [];
  const palette = ['#FCD116', '#CE1126', '#0038A8', '#FFFFFF', '#F59E0B', '#10B981'];

  function spawnCannonBlast(originX, originY, angleRad, spreadRad, count) {
    for (let i = 0; i < count; i++) {
      const angle = angleRad + (Math.random() - 0.5) * spreadRad;
      const speed = 14 + Math.random() * 22;
      pieces.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        sizeW: 8 + Math.random() * 8,
        sizeH: 12 + Math.random() * 12,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        tilt: Math.random() * Math.PI,
        tiltSpeed: 0.05 + Math.random() * 0.1,
        isStar: Math.random() > 0.75,
        alpha: 1,
        decay: 0.0035 + Math.random() * 0.003
      });
    }
  }

  spawnCannonBlast(0, height * 0.95, -Math.PI / 4, Math.PI / 3.5, 140);
  spawnCannonBlast(width, height * 0.95, -Math.PI * 0.75, Math.PI / 3.5, 140);

  setTimeout(() => {
    spawnCannonBlast(width * 0.5, height, -Math.PI / 2, Math.PI / 2.5, 120);
  }, 700);

  let animId = null;

  function loop() {
    ctx.clearRect(0, 0, width, height);

    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28;
      p.vx *= 0.985;
      p.rotation += p.rotSpeed;
      p.tilt += p.tiltSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > height + 50) {
        pieces.splice(i, 1);
      } else {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const scaleY = Math.sin(p.tilt);

        if (p.isStar) {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          for (let s = 0; s < 5; s++) {
            ctx.lineTo(Math.cos((18 + s * 72) * Math.PI / 180) * p.sizeW,
                       -Math.sin((18 + s * 72) * Math.PI / 180) * p.sizeW * scaleY);
            ctx.lineTo(Math.cos((54 + s * 72) * Math.PI / 180) * (p.sizeW / 2),
                       -Math.sin((54 + s * 72) * Math.PI / 180) * (p.sizeW / 2) * scaleY);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.sizeW / 2, (-p.sizeH / 2) * scaleY, p.sizeW, p.sizeH * scaleY);
        }
        ctx.restore();
      }
    }

    if (pieces.length > 0) {
      animId = requestAnimationFrame(loop);
    }
  }

  loop();

  const timeoutId = setTimeout(() => {
    banner.classList.remove('active');
    setTimeout(() => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      container.remove();
      banner.remove();
      if (countBadge) countBadge.classList.remove('milestone-badge-glow');
    }, 700);
  }, 7000);

  activeEasterEggCleanup = () => {
    clearTimeout(timeoutId);
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', onResize);
    container.remove();
    banner.remove();
    if (countBadge) countBadge.classList.remove('milestone-badge-glow');
  };
}

window.__triggerEasterEgg = function(milestone) {
  triggerEasterEgg(milestone);
};

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
        if (selectedStickerVariant.includes('Yellow')) {
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
      });
    });
  });
}

// Shopping Cart Logic
const productsCatalog = {
  'vest': {
    id: 'vest',
    titleEn: 'Official High-Vis Security Jacket / Safety Vest',
    titleFil: 'Opisyal na High-Vis Security Jacket / Safety Vest',
    price: 320,
    img: 'assets/product-vest.jpg',
    getVariant: () => `Size: ${selectedVestSize}`
  },
  'stickers': {
    id: 'stickers',
    titleEn: 'Official Weatherproof Vinyl Sticker Pack (Yellow & Red)',
    titleFil: 'Opisyal na Weatherproof Vinyl Sticker Pack (Dilaw at Pula)',
    price: 120,
    img: 'assets/product-stickers.jpg?v=4',
    getVariant: () => selectedStickerVariant
  },
  'cap': {
    id: 'cap',
    titleEn: 'Official UDRMM Embroidered Cap',
    titleFil: 'Opisyal na Burdadong Sumbrero ng UDRMM',
    price: 280,
    img: 'assets/product-caps.jpg',
    getVariant: () => selectedCapColor
  },
  'phone-mount': {
    id: 'phone-mount',
    titleEn: 'Heavy-Duty Handlebar Phone Mount',
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
      img: itemDef.img,
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

// Membership Registration Modal & Free Poncho
function setupMembershipModal() {
  const openButtons = document.querySelectorAll('.open-membership-btn');
  const modalOverlay = document.getElementById('membership-modal-overlay');
  const closeModalBtn = document.getElementById('close-membership-btn');
  const form = document.getElementById('membership-form');

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
      const name = document.getElementById('member-name').value || 'Kasaping Rider';
      const platform = document.getElementById('member-platform').value || 'FoodTiger';
      const city = document.getElementById('member-city').value || 'Metro Manila';
      const size = document.getElementById('member-size').value || 'L';
      const paymentMethod = document.querySelector('input[name="dues_payment_method"]:checked')?.value || 'GCash';
      const duesLabel = `Paid Membership: ₱150 PHP / year (${paymentMethod})`;
      
      const memberId = 'UDRMM-MNL-2027-' + Math.floor(1000 + Math.random() * 9000);

      const modalBody = document.getElementById('membership-modal-body');
      if (modalBody) {
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
                Platform: ${platform} • Area: ${city} • Vest: Size ${size}
              </div>
              <div style="font-size: 0.8rem; color: #FCD34D; font-weight: 600; margin-bottom: 10px;">
                Status: Paid Member (₱150/yr • ${paymentMethod})
              </div>
              <div class="mid-num">ID: ${memberId}</div>
            </div>

            <div class="free-poncho-notice" style="text-align: left; margin: 1.5rem 0;">
              <img src="assets/product-vest.jpg" alt="Official Union Gear" style="width: 56px; height: 56px; object-fit: cover;">
              <div>
                <strong style="color: var(--ph-blue); font-size: 0.95rem; display: block; margin-bottom: 2px;">
                  🛡️ Official High-Vis Safety Vest & Stickers Package Included!
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
          ${currentLang === 'en' ? 'Solidarity Order Placed!' : 'Natanggap ang Inyong Order ng Pagkakaisa!'}
        </h3>
        <p style="font-size: 0.92rem; color: var(--text-body); margin-bottom: 1rem;">
          ${currentLang === 'en' 
            ? 'Thank you for funding the union! A courier confirmation has been sent to your mobile phone via SMS.' 
            : 'Salamat sa pagsuporta sa pondo ng unyon! Ipinadala na ang detalye ng order sa iyong cellphone sa pamamagitan ng SMS.'}
        </p>
        <div style="background: var(--bg-card-soft); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-size: 0.85rem; margin-bottom: 1.5rem; text-align: left;">
          <div><strong>Order Reference:</strong> #UDRMM-${Math.floor(100000 + Math.random() * 900000)}</div>
          <div><strong>Estimated Dispatch:</strong> Within 48 Hours via Solidarity Courier</div>
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
      <rect x="145" y="115" width="22" height="26" fill="#FFFFFF" stroke="#1F2937" stroke-width="1.5"/>
      <text x="200" y="280" fill="#854D0E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" text-anchor="middle">OFFICIAL SECURITY VEST WITH QR</text>
    </svg>`,
    poncho: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#FFF5F7"/>
      <rect x="15" y="15" width="370" height="270" rx="16" fill="#FEE8EA" stroke="#FCA5A5" stroke-width="2"/>
      <path d="M160 70 Q200 45 240 70 L340 150 L290 190 L260 160 L260 260 L140 260 L140 160 L110 190 L60 150 Z" fill="#0038A8"/>
      <rect x="140" y="180" width="120" height="18" fill="#FCD116"/>
      <rect x="140" y="212" width="120" height="12" fill="#E2E8F0"/>
      <circle cx="200" cy="65" r="26" fill="#CE1126"/>
      <text x="200" y="280" fill="#0038A8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">OFFICIAL UDRMM RAIN PONCHO</text>
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
