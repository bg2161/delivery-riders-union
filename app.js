// UDRMM (United Delivery Riders of Metro Manila) - Interactive Application Logic

// Multi-language dictionary: English (en) & Filipino / Tagalog (fil)
const translations = {
  en: {
    // Top Bar
    alertText: "🚨 MAY 1, 2027 NATIONAL MOBILIZATION (Labor Day): Metro Manila Riders Caravan & App Freeze.",
    alertLink: "View May 1 Details & Demands →",
    
    // Nav
    navHome: "Home",
    navProtest: "May 1 Protest",
    navDemands: "Our Demands",
    navShop: "Shop & Poncho",
    navStories: "Rider Stories",
    navAbout: "About Us",
    btnJoinNav: "Join Union (Free Poncho)",
    
    // Hero
    heroBadge: "Official Union of Manila Food & Courier Riders",
    heroTitlePart1: "No delivery is worth a ",
    heroTitleHighlight: "rider's safety.",
    heroSubtitle: "United Delivery Riders of Metro Manila (UDRMM) is an independent, worker-led union fighting against algorithmic pay cuts, wet-season delivery speed penalties, and hazardous working conditions in Metro Manila.",
    heroCtaJoin: "Become a Member (Free Rain Poncho)",
    heroCtaProtest: "May 1st Action Hub",
    statMembers: "Active Riders Enrolled",
    statHazardPay: "Monsoon Hazard Pay Demand",
    statCities: "Metro Manila Cities Covered",
    
    // Hero Card
    heroCardTitle: "United We Ride, United We Win",
    heroCardDesc: "Organizing riders from FoodTiger, Grab, Foodpanda, and independent couriers across all 16 cities.",
    perk1: "Free heavy-duty high-vis waterproof rain poncho",
    perk2: "Legal aid & emergency suspension support",
    perk3: "Barangay solidarity shelters during typhoons",
    perk4: "Collective bargaining representation with DOLE",
    freePonchoBadge: "FREE FOR MEMBERS",
    heroPonchoTitle: "Official Rain Poncho Included",
    heroPonchoDesc: "High-visibility reflective all-weather poncho given to all riders upon registration.",

    // Weather section
    weatherBadge: "PAGASA MONSOON ADVISORY",
    weatherTitle: "Metro Manila Weather & Flood Risk Status",
    weatherDesc: "Current conditions require lower speeds and adjusted delivery expectations. Platforms must suspend automatic delivery time penalties.",
    weatherTipTitle: "Active Rain Protocol in Effect:",
    weatherTipDesc: "Flash flood warnings reported along España Blvd, Taft Avenue, and EDSA Ortigas. UDRMM strongly advises all riders to seek shelter and pause non-critical trips during severe flooding.",

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

    demandsHeading: "What We Are Demanding vs Current Platform Policy",
    dem1Title: "Rainy Season Pay Cuts",
    dem1Current: "Current: Base delivery fee cut by 20% in rainy months.",
    dem1Proposed: "Demand: +35% Monsoon Hazard Pay per wet-weather delivery.",
    dem2Title: "Unrealistic Delivery Speeds",
    dem2Current: "Current: Fixed 25-min timers regardless of flooded streets.",
    dem2Proposed: "Demand: Dynamic timer adjustments during PAGASA rain alerts.",
    dem3Title: "Arbitrary Account Suspension",
    dem3Current: "Current: Algorithmic deactivation without human explanation.",
    dem3Proposed: "Demand: 72-hour formal notice & UDRMM union representation.",
    dem4Title: "Safety Gear & Medical Coverage",
    dem4Current: "Current: 100% equipment & injury expenses borne by rider.",
    dem4Proposed: "Demand: Free company-issued rain gear & emergency clinic fund.",

    rsvpTitle: "Pledge Your Solidarity For May 1st, 2027",
    rsvpSub: "Whether you are a delivery rider or a supportive customer, add your voice to the movement.",
    btnPledge: "Pledge Solidarity Now",
    btnPledged: "✓ Pledged Solidarity!",
    rsvpLabel: "Supporters & Riders Pledged",

    // Shop & Free Poncho
    shopBadge: "UNION SOLIDARITY SHOP",
    shopTitle: "Wear The Struggle. Fund The Movement.",
    shopDesc: "Every purchase directly supports UDRMM legal funds, emergency rider medical aid, and community meeting hubs.",
    
    // Hero Poncho Product
    vestagliaTag: "★ EXCLUSIVE UNION MEMBER BENEFIT",
    vestagliaTitle: "Official Heavy-Duty All-Weather Vestaglia (Rain Poncho)",
    vestagliaDesc: "Designed specifically for Manila's torrential monsoon conditions. Made with double-sealed Oxford waterproof nylon, 360° neon safety stripes, storm flaps, and the official UDRMM rider chest insignia. Zero cost for all registered union members.",
    vf1: "100% Storm-Proof Waterproof Fabric",
    vf2: "360° Neon & Silver Reflective Safety Bands",
    vf3: "Helmet-Compatible Drawstring Hood",
    vf4: "Reinforced Mobile Phone Chest Pockets",
    vestagliaPriceLabel: "Included with Union Registration",
    btnClaimPoncho: "Register to Claim Free Poncho",
    
    // Accessories Grid
    accessoriesTitle: "Official Solidarity Accessories",
    accessoriesDesc: "High-durability accessories designed for riders and solidarity allies.",
    
    itemCapTitle: "Official UDRMM Embroidered Cap",
    itemCapDesc: "Durable cotton twill cap featuring the Philippine sun badge, scooter emblem, and the embroidered slogan: 'NO DELIVERY IS WORTH A RIDER'S SAFETY'. Available in Royal Blue and Crimson Red.",
    itemCapColorLbl: "Color:",
    
    itemStickersTitle: "Reflective Waterproof Sticker Pack (3x)",
    itemStickersDesc: "Heavy-duty laminated vinyl stickers. Weatherproof, UV-resistant, and high-visibility reflective. Perfect for delivery bags, helmets, and motorcycles.",
    
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
    teamHeading: "Taskforce 2 Project Working Group",
    roleWriting: "Writing & IT Coordination",
    roleLeadership: "Project Leadership & Strategy",
    roleDesign: "Design & Visual Communication",
    roleComm: "Communication & Economics",
    
    // Cart Drawer
    cartTitle: "Your Solidarity Bag",
    cartEmpty: "Your bag is empty. Add accessories to support the union!",
    subtotalLbl: "Subtotal:",
    btnCheckout: "Proceed to Order",
    
    // Membership Modal
    modalMemberTitle: "Join United Delivery Riders of Metro Manila",
    modalMemberSub: "Complete your free registration to join the union and receive your official heavy-duty rain poncho.",
    modalNameLbl: "Full Name:",
    modalPlatformLbl: "Delivery Platform(s):",
    modalCityLbl: "City / Barangay in Metro Manila:",
    modalPhoneLbl: "Mobile Number (GCash / Contact):",
    modalSizeLbl: "Select Rain Poncho Size:",
    btnSubmitRegistration: "Complete Registration & Claim Poncho",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Welcome to UDRMM!",
    registeredSub: "Your membership registration has been processed. Here is your official Union Digital ID:",
    regPonchoNote: "Your Free All-Weather Rain Poncho will be ready for pickup at your local Barangay UDRMM Union Station or delivered with your welcome package before the May 1st, 2027 protest.",
    
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
    
    // Nav
    navHome: "Tahanan",
    navProtest: "Protesta sa Mayo 1",
    navDemands: "Aming Hiling",
    navShop: "Tindahan at Kapote",
    navStories: "Kuwento ng Rider",
    navAbout: "Tungkol sa Amin",
    btnJoinNav: "Sumapi sa Unyon (Libreng Kapote)",
    
    // Hero
    heroBadge: "Opisyal na Unyon ng mga Food at Courier Rider sa Maynila",
    heroTitlePart1: "Walang order ang katumbas ng ",
    heroTitleHighlight: "kaligtasan ng rider.",
    heroSubtitle: "Ang United Delivery Riders of Metro Manila (UDRMM) ay isang nagsasarili at pinangungunahan ng manggagawang unyon na lumalaban sa bawas-sahod ng algorithm, parusa sa bilis tuwing tag-ulan, at mapanganib na kalagayan sa kalsada.",
    heroCtaJoin: "Maging Kasapi (Libreng All-Weather Poncho)",
    heroCtaProtest: "Sentro ng Pagkilos sa Mayo 1",
    statMembers: "Aktibong Kasaping Rider",
    statHazardPay: "Hiling na Monsoon Hazard Pay",
    statCities: "Mga Lungsod sa Metro Manila",
    
    // Hero Card
    heroCardTitle: "Sama-Samang Babyahe, Sama-Samang Magtatagumpay",
    heroCardDesc: "Pinagbubuklod ang mga rider mula FoodTiger, Grab, Foodpanda, at iba pang courier sa buong Kamaynilaan.",
    perk1: "Libreng matibay at high-vis na kapote (rain vestaglia)",
    perk2: "Tulong legal at suporta kapag na-suspend ang app account",
    perk3: "Barangay solidarity shelters kapag may bagyo",
    perk4: "Representasyon sa pakikipag-usap sa DOLE at kumpanya",
    freePonchoBadge: "LIBRE SA MIYEMBRO",
    heroPonchoTitle: "Kasama ang Opisyal na Kapote",
    heroPonchoDesc: "Maliwanag at matibay na kapoteng panlaban sa ulan at baha, libreng ibinibigay sa bawat sumaping rider.",

    // Weather section
    weatherBadge: "PAGASA PAALALA SA TAG-ULAN",
    weatherTitle: "Lagay ng Panahon at Baha sa Metro Manila",
    weatherDesc: "Dahil sa malakas na ulan, kailangang bagalan ang takbo at i-adjust ang delivery time. Dapat tanggalin ng mga app platform ang time penalties.",
    weatherTipTitle: "Aktibong Panuntunan sa Ulan:",
    weatherTipDesc: "May baha sa España Blvd, Taft Avenue, at EDSA Ortigas. Mahigpit na ipinapayo ng UDRMM na sumilong muna at huwag pilitin ang biyahe sa matinding baha.",

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

    demandsHeading: "Aming mga Hiling vs Kasalukuyang Patakaran ng Kumpanya",
    dem1Title: "Bawas-Sahod Tuwing Tag-Ulan",
    dem1Current: "Kasalukuyan: Binawasan ng 20% ang base fare kahit bumabagyo.",
    dem1Proposed: "Hiling: +35% Monsoon Hazard Pay sa bawat basang biyahe.",
    dem2Title: "Mapanirang Delivery Timers",
    dem2Current: "Kasalukuyan: 25-minutong timer kahit lubog sa baha ang kalsada.",
    dem2Proposed: "Hiling: Dynamic adjustment sa oras kapag may rainfall alert ang PAGASA.",
    dem3Title: "Biglaang Pagka-Suspend ng Account",
    dem3Current: "Kasalukuyan: Kusa kang ibinoblock ng algorithm nang walang paliwanag.",
    dem3Proposed: "Hiling: 72-oras na abiso at karapatang katawanin ng unyon sa paglilitis.",
    dem4Title: "Kagamitang Pangkaligtasan at Medikal",
    dem4Current: "Kasalukuyan: Sariling gastos ng rider kapag naaksidente o nagkasakit.",
    dem4Proposed: "Hiling: Libreng kapote mula sa kumpanya at emergency medical assistance fund.",

    rsvpTitle: "Magpahayag ng Suporta sa Mayo 1, 2027",
    rsvpSub: "Ikaw man ay rider o mamimiling nagmamalasakit, makiisa sa aming panawagan para sa makatarungang pagtrato.",
    btnPledge: "Pumirma ng Suporta Ngayon",
    btnPledged: "✓ Nakapirma ng Suporta!",
    rsvpLabel: "Mga Rider at Tagasuportang Nakiisa",

    // Shop & Free Poncho
    shopBadge: "TINDAHAN NG PAGKAKAISA",
    shopTitle: "Isuot ang Paninindigan. Suportahan ang Kilusan.",
    shopDesc: "Bawat kita ay direktang napupunta sa pondong legal ng UDRMM, tulong medikal sa mga naaksidenteng rider, at mga sentrong pangkomunidad.",
    
    // Hero Poncho Product
    vestagliaTag: "★ NATATANGING BENEPISYO NG KASAPING RIDER",
    vestagliaTitle: "Opisyal na Heavy-Duty All-Weather Vestaglia (Kapote)",
    vestagliaDesc: "Espesyal na idinisenyo para sa malalakas na habagat at bagyo sa Maynila. Gawa sa double-sealed waterproof Oxford nylon, may 360° neon at reflective bands, storm flaps, at burdadong sagisag ng UDRMM. Libre para sa lahat ng rehistradong miyembro ng unyon.",
    vf1: "100% Hindi Bumabasa kahit Matinding Bagyo",
    vf2: "360° Neon at Silver Reflective Safety Bands",
    vf3: "Kasya sa Helmet ang Tali ng Hood",
    vf4: "Protektadong Bulsa para sa Mobile Phone",
    vestagliaPriceLabel: "Kasama sa Pagpaparehistro sa Unyon",
    btnClaimPoncho: "Magparehistro para sa Libreng Kapote",
    
    // Accessories Grid
    accessoriesTitle: "Mga Opisyal na Gamit ng Unyon",
    accessoriesDesc: "Matitibay na gamit para sa mga rider at tagapagtaguyod ng karapatan sa paggawa.",
    
    itemCapTitle: "Opisyal na Burdadong Sumbrero ng UDRMM",
    itemCapDesc: "Matibay na cotton twill cap na may sagisag ng araw ng Pilipinas, motorsiklo, at burdadong katagang: 'NO DELIVERY IS WORTH A RIDER'S SAFETY'. May kulay na Royal Blue at Crimson Red.",
    itemCapColorLbl: "Kulay:",
    
    itemStickersTitle: "Reflective Waterproof Sticker Pack (3 Piraso)",
    itemStickersDesc: "Matitibay na vinyl sticker na hindi nasisira sa ulan at init. Maliwanag kapag tinamaan ng ilaw. Angkop sa helmet, delivery bag, at motor.",
    
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
    teamHeading: "Grupo ng Taskforce 2 Project",
    roleWriting: "Pagsusulat at IT Coordination",
    roleLeadership: "Pamumuno at Estratehiya",
    roleDesign: "Disenyo at Visual Materials",
    roleComm: "Komunikasyon at Ekonomiks",
    
    // Cart Drawer
    cartTitle: "Iyong Bag ng Pagkakaisa",
    cartEmpty: "Wala pang laman ang iyong bag. Magdagdag ng gamit upang suportahan ang unyon!",
    subtotalLbl: "Kabuuan:",
    btnCheckout: "Magpatuloy sa Pag-order",
    
    // Membership Modal
    modalMemberTitle: "Sumapi sa United Delivery Riders of Metro Manila",
    modalMemberSub: "Kumpletuhin ang libreng pagpaparehistro upang maging miyembro at matanggap ang iyong opisyal na heavy-duty rain poncho.",
    modalNameLbl: "Buong Pangalan:",
    modalPlatformLbl: "Delivery Platform(s):",
    modalCityLbl: "Lungsod / Barangay sa Metro Manila:",
    modalPhoneLbl: "Numero ng Telepono (GCash / Kontak):",
    modalSizeLbl: "Sukat ng Rain Poncho:",
    btnSubmitRegistration: "Isumite ang Rehistro at Kunin ang Kapote",
    
    // Modal Confirmation
    registeredTitle: "Mabuhay! Maligayang Pagdating sa UDRMM!",
    registeredSub: "Matagumpay na naitala ang iyong pagsapi. Narito ang iyong Opisyal na Digital ID ng Unyon:",
    regPonchoNote: "Ang iyong Libreng All-Weather Rain Poncho ay handa nang kunin sa iyong lokal na Barangay UDRMM Union Station o ihahatid bago ang protesta sa Mayo 1, 2027.",
    
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
let rsvpCount = 3842;
let hasPledged = false;
let selectedCapColor = 'Blue';

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
  setupCapVariants();
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

// RSVP & Pledge Counter
function setupRSVP() {
  const rsvpBtn = document.getElementById('btn-rsvp-pledge');
  const countEl = document.getElementById('rsvp-counter-display');
  
  if (countEl) {
    countEl.innerText = rsvpCount.toLocaleString();
  }

  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', () => {
      if (!hasPledged) {
        hasPledged = true;
        rsvpCount += 1;
        if (countEl) countEl.innerText = rsvpCount.toLocaleString();
        
        rsvpBtn.classList.remove('btn-red');
        rsvpBtn.classList.add('btn-secondary');
        rsvpBtn.innerText = translations[currentLang].btnPledged;
        
        showToast(currentLang === 'en' ? 'Salamat! Your solidarity pledge is recorded.' : 'Maraming salamat! Naitala ang iyong pakikiisa.');
      }
    });
  }
}

// Cap Color Variants
function setupCapVariants() {
  const capDots = document.querySelectorAll('.cap-variant-dot');
  const label = document.getElementById('selected-cap-color-name');
  
  capDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      capDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      selectedCapColor = dot.getAttribute('data-color');
      if (label) label.textContent = selectedCapColor;
    });
  });
}

// Shopping Cart Logic
const productsCatalog = {
  'cap': {
    id: 'cap',
    titleEn: 'Official UDRMM Embroidered Cap',
    titleFil: 'Opisyal na Burdadong Sumbrero ng UDRMM',
    price: 250,
    img: 'assets/product-caps.jpg',
    getVariant: () => selectedCapColor
  },
  'stickers': {
    id: 'stickers',
    titleEn: 'Reflective Waterproof Sticker Pack (3x)',
    titleFil: 'Reflective Waterproof Sticker Pack (3 Piraso)',
    price: 120,
    img: 'assets/product-stickers.jpg',
    getVariant: () => 'Pack of 3'
  },
  'phone-mount': {
    id: 'phone-mount',
    titleEn: 'Heavy-Duty Handlebar Phone Mount',
    titleFil: 'Heavy-Duty Handlebar Phone Mount Case',
    price: 320,
    img: 'assets/product-phone-mount.jpg',
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
          <div class="cart-item-price">₱${item.price * item.quantity}</div>
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
              <div style="font-size: 0.85rem; color: #E2E8F0; margin: 4px 0 10px;">
                Platform: ${platform} • Area: ${city} • Poncho: Size ${size}
              </div>
              <div class="mid-num">ID: ${memberId}</div>
            </div>

            <div class="free-poncho-notice" style="text-align: left; margin: 1.5rem 0;">
              <img src="assets/product-poncho.jpg" alt="Free Rain Poncho">
              <div>
                <strong style="color: var(--ph-blue); font-size: 0.95rem; display: block; margin-bottom: 2px;">
                  🎁 FREE UDRMM Heavy-Duty Rain Poncho Confirmed!
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
        <strong>₱${item.price * item.quantity}</strong>
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

// Mobile Hamburger Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('mobile-open');
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
      }
    });
  }
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
      <rect width="300" height="300" rx="40" fill="#0038A8"/>
      <path d="M150 35 L265 115 L265 225 L150 275 L35 225 L35 115 Z" fill="#CE1126" stroke="#FFFFFF" stroke-width="5"/>
      <circle cx="150" cy="150" r="44" fill="#FCD116"/>
      <circle cx="150" cy="150" r="26" fill="#CE1126"/>
      <circle cx="150" cy="150" r="14" fill="#FCD116"/>
      <text x="150" y="245" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="2">U.D.R.M.M.</text>
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
      <g transform="translate(65, 65) rotate(-8)">
        <rect width="105" height="105" rx="12" fill="#0038A8" stroke="#FFFFFF" stroke-width="3"/>
        <circle cx="52" cy="52" r="30" fill="#FCD116"/>
        <text x="52" y="57" fill="#0038A8" font-size="12" font-weight="900" text-anchor="middle">RIDER</text>
      </g>
      <g transform="translate(195, 55) rotate(6)">
        <rect width="115" height="115" rx="12" fill="#CE1126" stroke="#FFFFFF" stroke-width="3"/>
        <text x="57" y="62" fill="#FFFFFF" font-size="13" font-weight="900" text-anchor="middle">SOLIDARITY</text>
      </g>
      <text x="200" y="270" fill="#CE1126" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">WATERPROOF STICKER PACK (3X)</text>
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
