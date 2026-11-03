import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const historyData = {
    2026: {
      text: "Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-ը:",
      image: "https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png"
    },
    2025: {
      text: "Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր: Ներկայացվեց Evoca Travel Card-ը: Մեկնարկեցին Evoca Partners Club-ը և Evoca Benefits նախագիծը:",
      image: "https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png"
    },
    2024: {
      text: "Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների:",
      image: "https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png"
    },
    2023: {
      text: "Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները: Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, էլեկտրոնային ստորագրության e-Sign համակարգը:",
      image: "https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg"
    },
    2022: {
      text: "Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր: Ներկայացրել է Visa Vision քարտը: Հայփոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով: Գործարկվել է Evoca mobile POS-ը:",
      image: "https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png"
    },
    2021: {
      text: "Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:",
      image: "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png"
    }
  };

  const years = [2026, 2025, 2024, 2023, 2022, 2021];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ԱԲՈՒԹԻ ՀԵԴԵՐ (Լոգո, Մենյու, Երկրորդային մանուշակագույն բար) */}
        <header className="w-full bg-white shadow-sm font-sans">
          {/* Վերին սպիտակ հեդերի հատված */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* ձախ կողմ՝ լոգո և հիմնական մենյու */}
            <div className="flex items-center space-x-12">
              {/* Evoca լոգո */}
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              {/* Հիմնական նավարկություն */}
              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about/evoca')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/reports')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հաշվետվություններ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/announcements')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հայտարարություններ
                </button>
              </nav>
            </div>

            {/* Աջ կողմ՝ EvocaONLINE կոճակ */}
            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          {/* Ներքին մանուշակագույն երկրորդային ենթաբաժինների բար */}
          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about/general')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Evoca-ի մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ընդհանուր</span>
          </div>

          <div className="space-y-10">
            {/* ԸՆԴՀԱՆՈՒՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԲԼՈԿ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                Ընդհանուր տեղեկատվություն
              </h1>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex-1 space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    <strong className="text-purple-900 font-semibold">Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
                  </p>
                  <p>
                    Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
                  </p>
                  <p>
                    Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս նախևառաջ հաշվի ենք առնում դրա՝ հավելվածով օգտագործման հարմարավետությունը:
                  </p>
                  <p>
                    Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
                  </p>
                </div>

                <div className="w-full lg:w-[480px] h-72 sm:h-80 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-neutral-900 shadow-md">
                  <img 
                    src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
                    alt="Evocabank Ընդհանուր տեղեկատվություն" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ՄԵՐ ՏԵՍԱԼԱԿԱՆԸ ԲԼՈԿ */}
            <div className="bg-purple-800 rounded-3xl p-8 sm:p-12 shadow-sm text-white">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
                Մեր տեսլականը
              </h2>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-1 bg-white mt-3 shrink-0"></div>
                <p className="text-base sm:text-xl leading-relaxed text-purple-100">
                  Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
                </p>
              </div>
            </div>

            {/* ՄԵՐ ԱՌԱՔԵԼՈՒԹՅՈՒՆԸ ԲԼՈԿ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Մեր առաքելությունը
              </h2>
              
              <div className="relative rounded-2xl overflow-hidden shadow-sm min-h-[320px] sm:min-h-[400px] flex items-end">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
                    alt="Evocabank գրասենյակ" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Կիսաթափանցիկ սպիտակ քարտ վրան */}
                <div className="relative z-10 m-6 sm:m-8 p-6 sm:p-8 bg-white/95 backdrop-blur-sm rounded-2xl border-l-4 border-purple-800 shadow-lg max-w-2xl">
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
                  </p>
                </div>
              </div>
            </div>

            {/* ԲԱՆԿԻ ՊԱՏՄՈՒԹՅՈՒՆԸ (TIMELINE) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 font-sans">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                Բանկի պատմությունը
              </h2>

              {/* Ժամանակացույց (Timeline) */}
              <div className="relative flex items-center justify-between max-w-4xl mx-auto mb-12 px-4">
                {/* Հորիզոնական գիծ */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-purple-200 z-0"></div>

                {years.map((year) => {
                  const isActive = activeYear === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className="relative z-10 flex flex-col items-center bg-transparent border-none cursor-pointer group"
                    >
                      <span className={`text-base sm:text-lg font-bold mb-2 transition-colors ${isActive ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {year}
                      </span>
                      <div className={`w-4 h-4 rounded-full transition-all ${isActive ? 'bg-purple-700 ring-4 ring-purple-100 scale-110' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                    </button>
                  );
                })}
              </div>

              {/* Բովանդակության բլոկ (Տեքստ և Նկար) */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gray-50/50 rounded-3xl p-6 sm:p-8 border border-purple-50">
                <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {historyData[activeYear].text}
                  </p>
                </div>

                <div className="w-full lg:w-[450px] h-[330px] rounded-2xl overflow-hidden shrink-0 shadow-md bg-white flex items-center justify-center">
                  <img 
                    src={historyData[activeYear].image} 
                    alt={`Evocabank ${activeYear}`} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
                                {/* ԱՐԾԵՔՆԵՐ ԵՎ ԱՌԱՋՆԱՅԻՆՈՒԹՅՈՒՆՆԵՐ ԵՎ ԿՈՐՊՈՐԱՏԻՎ ՍՈՑԻԱԼԱԿԱՆ ՊԱՏԱՍԽԱՆԱՏՎՈՒԹՅՈՒՆ */}
<div className="space-y-12 font-sans max-w-7xl mx-auto my-6">
  
  {/* Արժեքներ և առաջնայնություններ */}
  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
      Արժեքներ և առաջնայնություններ
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Human-first */}
      <div className="bg-gray-50/50 p-6 rounded-2xl border border-purple-50 space-y-3">
        <h3 className="text-lg font-bold text-purple-900">Human-first</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, Evoca-թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար:
        </p>
      </div>

      {/* Նորարարություն */}
      <div className="bg-gray-50/50 p-6 rounded-2xl border border-purple-50 space-y-3">
        <h3 className="text-lg font-bold text-purple-900">Նորարարություն</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ զարգանալու համար:
        </p>
      </div>

      {/* Դրական ազդեցություն */}
      <div className="bg-gray-50/50 p-6 rounded-2xl border border-purple-50 space-y-3">
        <h3 className="text-lg font-bold text-purple-900">Դրական ազդեցություն</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն:
        </p>
      </div>
    </div>
  </div>

  {/* Կորպորատիվ սոցիալական պատասխանատվություն */}
  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
      Կորպորատիվ սոցիալական պատասխանատվություն
    </h2>
    
    <p className="text-gray-700 text-base leading-relaxed mb-8">
      Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-start space-x-3 bg-gray-50/50 p-5 rounded-2xl border border-purple-50">
        <div className="w-3 h-3 bg-purple-700 rounded-full mt-1.5 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,
        </p>
      </div>

      <div className="flex items-start space-x-3 bg-gray-50/50 p-5 rounded-2xl border border-purple-50">
        <div className="w-3 h-3 bg-purple-700 rounded-full mt-1.5 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,
        </p>
      </div>

      <div className="flex items-start space-x-3 bg-gray-50/50 p-5 rounded-2xl border border-purple-50">
        <div className="w-3 h-3 bg-purple-700 rounded-full mt-1.5 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,
        </p>
      </div>

      <div className="flex items-start space-x-3 bg-gray-50/50 p-5 rounded-2xl border border-purple-50">
        <div className="w-3 h-3 bg-purple-700 rounded-full mt-1.5 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:
        </p>
      </div>
    </div>
  </div>
          {/* ԲԱՆԿԻ ԼՈԳՈՏԻՊԸ, ԲՐԵՆԴԲՈՒՔԸ ԵՎ ԿՈՐՊՈՐԱՏԻՎ ԳՈՒՅՆԵՐԸ */}
<div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-7xl mx-auto my-6 font-sans space-y-12">
  
  {/* Բանկի լոգոտիպը */}
  <div>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
      Բանկի լոգոտիպը
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
      Բանկի լոգոն կազմված է evolution` էվոլյուցիա բառի արմատից և նմանեցված է evoke` զարթնեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակշռում եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
    </p>
    <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 flex items-center justify-center">
      <img 
        src="	https://www.evoca.am/file_manager/icons/logo.png" 
        alt="Evocabank Logo" 
        className="max-h-16 object-contain"
      />
    </div>
  </div>

  {/* Բանկի բրենդբուքը */}
  <div>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
      Բանկի բրենդբուքը
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
      Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրեր: Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար:
    </p>
    <a href="#brandbook" className="block relative rounded-2xl overflow-hidden shadow-sm bg-neutral-900 h-40 group cursor-pointer no-underline">
      <img 
        src="https://www.evoca.am/file_manager/other/52.png" 
        alt="Brandbook background" 
        className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-300"
      />
      
    </a>
  </div>

  {/* Բանկի կորպորատիվ գույները */}
  <div>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
      Բանկի կորպորատիվ գույները
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
      Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
    </p>
    
    <div className="space-y-4 bg-gray-50/50 p-6 rounded-2xl border border-purple-50">
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base">
          <strong>Սպիտակը</strong> խորհրդանշում է նորը:
        </p>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="w-5 h-5 rounded-full bg-gray-500 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base">
          <strong>Մոխրագույնը</strong> խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:
        </p>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="w-5 h-5 rounded-full bg-purple-700 shrink-0"></div>
        <p className="text-gray-700 text-sm sm:text-base">
          <strong>Մանուշակագույնը</strong> երիտասարդության, ստեղծարարության և նորարարության գույնն է:
        </p>
      </div>
    </div>
  </div>
                        
</div>    

                    {/* ՅՈՒԹՈՒԲՅԱՆ ՏԵՍԱՆՅՈՒԹ ԵՎ ISO27001:2026 ՄԻՋԱԶԳԱՅԻՆ ՀԱՎԱՍՏԱԳԻՐ */}
<div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-7xl mx-auto my-6 font-sans space-y-10">
  
  {/* Տեսանյութի բլոկ */}
  <div className="space-y-4">
    <div className="relative rounded-2xl overflow-hidden shadow-md bg-neutral-900 aspect-video flex items-center justify-center group">
      {/* Տեսանյութի ֆոնային նկար/պլեյլիստ */}
      <img 
        src="https://img.youtube.com/vi/QTuqGz3USRE/maxresdefault.jpg" 
        alt="Evocabank 2025 Q4 Ամփոփում" 
        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* YouTube Play կոճակ */}
      <a 
        href="https://youtu.be/QTuqGz3USRE" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
      >
        <div className="w-20 h-14 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </a>

      {/* Վերին ձախ անկյան տեղեկատվություն */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs sm:text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        <span>Evocabank: 2025 Q4 Ամփոփում | ARM</span>
      </div>

      {/* Ներքին հղումներ տեսանյութի վրա */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm">
        <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
          <span>🔗</span>
        </div>
        <a 
          href="https://youtu.be/QTuqGz3USRE" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl transition-colors no-underline text-white font-medium"
        >
          <span>Դիտեք այստեղ՝</span>
          <span className="font-bold text-red-500">YouTube</span>
        </a>
      </div>
    </div>
  </div>

  {/* ISO27001:2026 միջազգային հավաստագիր */}
  <div className="space-y-4 pt-4">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
      ISO27001:2026 միջազգային հավաստագիր
    </h2>
    
    <p className="text-purple-900 font-semibold text-base">
      Evocabank-ը ստացել է ISO27001:2026 միջազգային հավաստագիր
    </p>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Հավաստագիրը վկայում է Բանկում ֆինանսական պրոդուկտների և ծառայությունների, տվյալների բազաների, տեղեկատվության մշակման և պահպանման օբյեկտների, հաճախորդների և բանկային հիմնական գործարքների վերաբերյալ ֆինանսական տեղեկատվության անվտանգ կառավարման համակարգի առկայության մասին:
    </p>
  </div>

</div>
</div> 
          </div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}   