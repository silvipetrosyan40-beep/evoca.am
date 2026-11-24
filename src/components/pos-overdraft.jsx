import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  // Պահում ենք բացված կատեգորիաների անունները (կարող է մի քանիսը կամ մեկը բաց լինել)
  const [openCategories, setOpenCategories] = useState({ 'Սպառողական վարկեր': true });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories = [
    {
    name: 'Վարկեր իրավաբանական անձանց',
    subitems: [
      { title: 'Խոշոր և ՓՄՁ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans' },
      { title: 'Վարկային գիծ', path: '/hy/about/tariffs/corporate-loans/credit-line' },
      { title: 'Փոքր և միջին բիզնեսի վարկավորում', path: '/hy/about/tariffs/corporate-loans/sme' },
      { title: 'Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ', path: '/hy/about/tariffs/corporate-loans/deposit-secured' },
      { title: 'Վարկեր ԳՔՀ - ԷԱ ՓՄՁ-ների համար ծրագիր', path: '/hy/about/tariffs/corporate-loans/gkf-ea-sme' },
      { title: 'Պարզ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans/simple-business' },
      { title: 'Վարկ՝ ուղղված տնտեսության արդիականացման նպատակային ծրագրի շրջանակում արտադրողականության խթանմանը (գործելու է մինչև 31.12.2026թ.)', path: '/hy/about/tariffs/corporate-loans/modernization' },
      { title: 'Evoca GO', path: '/hy/about/tariffs/corporate-loans/evoca-go' },
      { title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/kfw-green' },
      { title: 'Բանկային երաշխիքներ', path: '/hy/about/tariffs/corporate-loans/bank-guarantees' },
      { title: 'Ֆակտորինգային ֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/factoring' },
      { title: 'Աշխատավարձային նախագծի պայմաններ', path: '/hy/about/tariffs/corporate-loans/salary-project' },
      { title: 'KFW բանկի կողմից ֆինանսավորվող «Միկրո, Փոքր և Միջին Ձեռներեցության ֆինանսավորում»', path: '/hy/about/tariffs/corporate-loans/kfw-mmsme' },
      { title: 'Լիզինգ', path: '/hy/about/tariffs/corporate-loans/leasing' },
      { title: 'Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա', path: '/hy/about/tariffs/corporate-loans/pos-business-loan' },
      { title: 'Բիզնես Օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա', path: '/hy/about/tariffs/corporate-loans/pos-overdraft' },
      { title: 'Արագ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans/fast-business-loan' },
      { title: 'Բիզնես վարկերի վերաֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/business-refinancing' }
    ]
  }
    
    
    
    
  ];

  const evocaHomeData = [
{ 
        id: 1, 
        title: "Արժույթ", 
        desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 32]" 
      },
      { 
        id: 2, 
        title: "Վարկառուները", 
        desc: "• ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս[cite: 32].\n• Այն հաճախորդները ովքեր Էվոկաբանկ ՓԲԸ-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր առնվազն 6 ամիս վաղտության[cite: 32]." 
      },
      { 
        id: 3, 
        title: "Սահմանաչափերը", 
        desc: "1,000,000 - 10,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 32]" 
      },
      { 
        id: 4, 
        title: "Սահմանաչափի տեսակ", 
        desc: "Վերականգնվող սահմանաչափ՝ ամսական նվազագույն մարման պահանջով[cite: 32]" 
      },
      { 
        id: 5, 
        title: "Ամսական նվազագույն մարման պահանջ", 
        desc: "Վարկառուն պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 10%-ը (նվազագույնը՝ 5,000 ՀՀ դրամ)+կուտակված % մինչև քաղվածքում նշված վերջնաժամկետը։ Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչև հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը[cite: 32]." 
      },
      { 
        id: 6, 
        title: "Տրամադրման եղանակը", 
        desc: "անկանխիկ[cite: 32]" 
      },
      { 
        id: 7, 
        title: "Մարման ժամկետը", 
        desc: "6-12 ամիս /առանց վաղաժամ մարման տուգանքի/[cite: 32]" 
      },
      { 
        id: 8, 
        title: "Տոկոսադրույքը /տարեկան/", 
        desc: "• ՀՀ դրամ՝ 14.5-16%[cite: 32]\n• ԱՄՆ դոլար՝ 11.5-13%[cite: 32]\n• Եվրո՝ 9-10%[cite: 32]\nՉօգտագործված մասի նկատմամբ տոկոսադրույք՝ 0-0.5%[cite: 32].\nՏոկոսադրույքների միջակայքում հաստատվող տոկոսները կապված են, եթե ապահովվում են կամ ըստ գնահատման, կարող են տարեկան կտրվածքով ապահովել 1 մլն. ՀՀ դրամ կամ ավել ոչ տոկոսային եկամուտներ[cite: 32]." 
      },
      { 
        id: 9, 
        title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
        desc: "• ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով[cite: 32]\n• ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով[cite: 32]" 
      },
      { 
        id: 10, 
        title: "Քաղվածքի օր", 
        desc: "Յուրաքանչյուր ամսվա 1-ը[cite: 32]" 
      },
      { 
        id: 11, 
        title: "Վճարման ժամկետ՝ սկսած քաղվածքի օրվանից", 
        desc: "15 օր (Վերջնաժամկետ է համարվում յուրաքանչյուր ամսվա 16-ը)[cite: 32]" 
      },
      { 
        id: 12, 
        title: "Վարկառուին ներկայացվող պահանջներ", 
        desc: "• Վարկի գումարը չի կարող գերազանցել բանկի POS տերմինալների միջոցով իրականացված միջին ամսական գումարային մուտքերի եռապատիկը[cite: 33].\n• Վարկառուի ընդհանուր ժամկետանց օրերի քանակը վերջին 12 ամսվա ընթացքում չպետք է գերազանցի 30 օրը, ինչպես նաև ընթացքում չպետք է ունենա դասակարգված վարկեր[cite: 33].\n• Այն դեպքում երբ վարկառուն 12-ից 24 ամիսների ընթացքում ունեցել է հսկվող դասով դասակարգման մեկ դեպք, ապա որոշում կայացնող Լիազոր մարմնի կողմից հայտը կարող է դիտարկվել, եթե՝\n  - Վճարումների ուշացումը չի գերազանցել 5 օրը[cite: 33].\n  - և կան հիմնավոր փաստարկներ, որ ուշացումները պայմանավորված են եղել ոչ թե ֆինանսական հանգամանքներով, այլ տեխնիկական և սուբյեկտիվ պատճառներով (քարտային գերծախսա, օվերդրաֆտի օգտագործված սահմանաչափի նվազագույն գումարի ոչ ամբողջական մուտքագրում, երկրից բացակայություն և այլն)[cite: 33].\n• Վարկառուի՝ գրավով չապահովված վարկերը չպետք է լինեն ավվելին, քան հինգը և դրանց գումարային մնացորդը չպետք է գերազանցի 10,000,000 ՀՀ դրամը կամ/և համարժեք արտարժույթը՝ չներառված տվյալ վարկը[cite: 33].\n• Հարցման օրվա դրությամբ վարկավորման դիմում-հայտ ներկայացնող կազմակերպությունը չպետք է ունենա դասակարգված երաշխավորություն, ժամկետանց վարկեր, ինչպես նաև՝ ժամկետանց հարկային պարտավորություններ կամ ԴԱՀԿ արգելանք[cite: 33].\n• Առնվազն 6 ամսվա POS տերմինալի շրջանառություն «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ով[cite: 33].\n• POS տերմինալի տեղափոխությունը այլ բանկ հնարավոր է բացառապես տվյալ վարկատեսակի մասով, բանկի հանդեպ ունեցած ամբողջ պարտավորության մարման դեպքում[cite: 33]." 
      },
      { 
        id: 13, 
        title: "Երաշխավոր անձանց ներկայացվող պահանջներ", 
        desc: "• Ֆիզիկական անձ երաշխավոր՝\n  - ունեն կայուն եկամուտ, որը արտացոլվում է «Նորք» տեղեկատվավերլուծական կենտրոն»-ի համակարգում կամ գույքի սեփականատեր են[cite: 33].\n  - վերջին 12 ամսում չպետք է ունենան դասակարգված վարկեր, իսկ ընդհանուր ժամկետանց օրերի քանակը չպետք է գերազանցի 30 օրը[cite: 33].\n• Իրավաբանական անձ երաշխավորներ՝\n  - Գրանցված գործունեություն է ծավալում առնվազն 12 ամիս և վերջին 12 ամսում չպետք է ունենա դասակարգված վարկեր, իսկ ընդհանուր ժամկետանց օրերի քանակը չպետք է գերազանցի 30 օրը[cite: 33].\n  - վերջին 12 ամսում չպետք է ունենա 0-հաշվետվություն կամ գործունեության դադարեցում[cite: 33].\n  - հարցման օրվա դրությամբ չպետք է ունենա դասակարգված երաշխավորություն, ժամկետանց վարկեր, ինչպես նաև՝ ժամկետանց հարկային պարտավորություններ կամ ԴԱՀԿ արգելանք[cite: 33]." 
      },
      { 
        id: 14, 
        title: "Գանձվող վճարներ", 
        desc: "• Վարկային հաշվի սպասարկման վճար - վարկի գումարի 1%-ի չափով, նվազագույնը 20,000 ՀՀ դրամ[cite: 33].\n• Վարկի գումարը կանխիկ ստանալու դեպքում գանձվում է բանկային հաշվից կանխիկացման վճար՝ ըստ գործող սակագների[cite: 33]." 
      },
      { 
        id: 15, 
        title: "Ժամկետից շուտ մարելու տուգանք", 
        desc: "Չի գանձվում" 
      },
      { 
        id: 16, 
        title: "Վերլուծություն", 
        desc: "Պարզեցված բիզնես վերլուծություն" 
      },
      { 
        id: 17, 
        title: "Այլ պայմաններ", 
        desc: "• Եթե վարկը հաստատվում է որևէ նախապայմանով (գործող այլ վարկային պարտավորությունների մասնակի կամ ամբողջական մարում, հարկային պարտավորությունների մարում և այլն), ապա վարկի տրամադրումը կատարվում է կամ փուլային կամ միանվագ տրամադրման տարբերակով տրամադրման պահին նախապայմանի կատարման ամբողջական վերահսկողությամբ։ Նախապայմանի կատարման և վերահսկման պատասխանատու են հանդիսանում, համապատասխանաբար՝ հայտը կազմող Վարկային մասնագետը և վարկը տրամադրող տարածքային կամ կառուցվածքային ստորաբաժանման ղեկավարը.\n• Եթե հաճախորդը ունի գործող POS տերմինալի շրջանառության հիման վրա բիզնես վարկ, կարող է դիմել 2-րդ վարկին, չխախտելով վարկատեսակով նախատեսված առավելագույն շեմը՝ 10.0 մլն. ՀՀ դրամ.\n• Տվյալ վարկատեսակով գործող հաճախորդների դեպքում նույն վարկատեսակով նոր հայտ քննարկելիս, Լիազոր մարմինը կարող է հաստատել հայտը նախապայմանով՝ գործող պարտավորության մնացորդի մարման (անձնական միջոցներով կամ նոր վարկի հաշվին), եթե հաճախորդը համապատասխանում է վարկավորման չափանիշներին և կատարել է պայմանագրային գումարի 50% և ավել մարում։ Տվյալ դեպքում վարկը չի դիտարկվում վերաֆինանսավորված/վերաձևակերպված." 
      }
    ]

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-purple-700 font-bold bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
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

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap overflow-x-auto">
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Վարկեր ֆիզիկական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/corporate-loans')} 
    className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
  >
    Վարկեր իրավաբանական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/commissions')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Միջնորդավճարների սակագները
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/deposits')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Ավանդների սակագներ
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/archive')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Արխիվ
  </button>
</nav>
            </div>
          </div>
        </header>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Սակագներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Վարկեր իրավաբանական անձանց</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ձախ կողմի բացվող-փակվող մենյու */}
            <div className="lg:col-span-4 space-y-3">
              {categories.map((cat, idx) => {
                const isOpen = openCategories[cat.name];
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                    <button 
                      onClick={() => toggleCategory(cat.name)}
                      className={`w-full flex items-center justify-between p-4 text-left font-semibold text-sm transition-colors cursor-pointer border-none ${
                        isOpen ? 'text-purple-900 bg-purple-50/50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isOpen && <span className="w-1 h-5 bg-purple-700 rounded-full inline-block"></span>}
                        {cat.name}
                      </span>
                      <span className={`text-purple-700 transition-transform duration-300 text-xs ${isOpen ? 'transform rotate-180' : ''}`}>
                        ⌄
                      </span>
                    </button>

                    {isOpen && cat.subitems.length > 0 && (
                      <div className="px-4 py-3 space-y-2 bg-purple-50/20 border-t border-purple-100/50">
                        {cat.subitems.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavigation(sub.path)}
                            className="w-full text-left text-xs font-semibold text-purple-900 py-1.5 pl-3 border-l-2 border-purple-700 hover:bg-purple-100/50 transition-colors bg-transparent cursor-pointer block"
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Աջ կողմի աղյուսակ */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">
       Բիզնես Օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա

          </h2>
                
                        
              <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                <table className="w-full text-left border-collapse text-sm text-gray-700">
                  <tbody>
                    {evocaHomeData.map((row) => (
                      <tr key={row.id} className="border-b border-purple-50 hover:bg-purple-50/10 transition-colors">
                        <td className="p-4 font-medium text-gray-500 w-16 text-center align-top border-r border-purple-50">
                          {row.id}.
                        </td>
                        <td className="p-4 font-semibold text-neutral-900 w-1/3 align-top border-r border-purple-50">
                          {row.title}
                        </td>
                        <td className="p-4 text-gray-700 align-top whitespace-pre-line">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
                        
          </div>
                   
        </main>
      </div>

      <Footer />
    </div>
  );
}