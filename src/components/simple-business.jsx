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
        title: "Արժույթը", 
        desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 24]" 
      },
      { 
        id: 2, 
        title: "Վարկառуները", 
        desc: "ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն՝\n• Առանց վերլուծության կատարման վարկերի դեպքում՝ 6 ամիս:\n• Պարզեցված վերլուծության կատարմամբ վարկերի դեպքում՝ 12 ամիս[cite: 24]." 
      },
      { 
        id: 3, 
        title: "Սահմանաչափերը", 
        desc: "• Առանց վերլուծության կատարման՝ մինչև 25,000,000 ՀՀ դրամին համարժեք արտարժույթ[cite: 24].\n• Պարզեցված վերլուծության կատարմամբ՝ մինչև 50,000,000 ՀՀ դրամին համարժեք արտարժույթ[cite: 24]." 
      },
      { 
        id: 4, 
        title: "Տրամադրման եղանակը", 
        desc: "Անկանխիկ[cite: 24]" 
      },
      { 
        id: 5, 
        title: "Մարման ժամկետը", 
        desc: "6-60 ամիս (առանց վաղաժամ մարման տուգանքի)[cite: 24]" 
      },
      { 
        id: 6, 
        title: "Տոկոսադրույքը /տարեկան/", 
        desc: "• Առանց վերլուծության կատարման՝ ՀՀ դրամ - 15%, ԱՄՆ դոլար - 10%, Եվրո - 8%[cite: 24].\n• Պարզեցված վերլուծության կատարմամբ՝ ՀՀ դրամ - 14.5%, ԱՄՆ դոլար - 9.5%, Եվրո - 7.5%[cite: 24]." 
      },
      { 
        id: 7, 
        title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
        desc: "• Ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով[cite: 24].\n• Ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով[cite: 24]." 
      },
      { 
        id: 8, 
        title: "Վարկի վերադարձելիության ապահովման միջոցները", 
        desc: "• Երևան, Վանաձոր, Գյումրի, Աբովյան, Ծաղկաձոր և Դիլիջան քաղաքներում գտնվող անշարժ գույք՝ բնակարան, առանձնատուն, տարածք (բացառությամբ արտադրական տարածքների)[cite: 24].\n• Բացի անշարժ գույքի գրավադրումից պահանջվում է նաև՝ առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն[cite: 24]." 
      },
      { 
        id: 9, 
        title: "Վարկ/գրավ հարաբերակցություն", 
        desc: "Առանց վերլուծության կատարման՝\n• Եթե գրավադրվող գույքը գտնվում է Երևան քաղաքում - գույքի գնահատված իրացվելի արժեքի մինչև 60%-ը[cite: 24].\n• Եթե գրավադրվող գույքը գտնվում է Գյումրի, Վանաձոր, Աբովյան, Ծաղկաձոր, Դիլիջան քաղաքներում - գույքի գնահատված իրացվելի արժեքի մինչև 50%-ը[cite: 24].\nՊարզեցված վերլուծության կատարմամբ՝\n• Եթե գրավադրվող գույքը գտնվում է Երևան քաղաքում - գույքի գնահատված իրացվելի արժեքի մինչև 65%-ը[cite: 24].\n• Եթե գրավադրվող գույքը գտնվում է Գյումրի, Վանաձոր, Աբովյան, Ծաղկաձոր, Դիլիջան քաղաքներում - գույքի գնահատված իրացվելի արժեքի մինչև 55%-ը[cite: 24]." 
      },
      { 
        id: 10, 
        title: "Գանձվող վճարներ", 
        desc: "• Վարկային հաշվի սպասարկման վճար – վարկի գումարի 1%-ի չափով, բայց ոչ պակաս, քան 20,000 ՀՀ դրամ, առավելագույնը 150,000 ՀՀ դրամ[cite: 24].\n• Վարկի գումարը կանխիկ ստանալու դեպքում գանձվում է բանկային հաշվից կանխիկացման վճար՝ ըստ գործող սակագների[cite: 24]." 
      },
      { 
        id: 11, 
        title: "Ժամկետից շուտ մարելու տուգանք", 
        desc: "Չի գանձվում[cite: 24]" 
      },
      { 
        id: 12, 
        title: "Սահմանափակումներ", 
        desc: "• Վարկառուն վերջին 12 ամսվա ընթացքում չպետք է ունենա դասակարգված վարկեր, իսկ ժամկետանց օրերի ընդհանուր քանակը չպետք է գերազանցի 30 օրը[cite: 25].\n• Այն դեպքում երբ վարկառուն վերջին 12 ամիսների ընթացքում ունեցել է դասակարգման դեպք, ապա որոշում կայացնող Լիազոր մարմնի կողմից հայտը կարող է դիտարկվել, եթե՝\n  - Վճարումների ուշացումը չի գերազանցել 5 օրը[cite: 25].\n  - կամ ներկայացվել է հիմնավոր փաստարկներ, որ ուշացումները պայմանավորված են եղել ոչ թե ֆինանսական հանգամանքներով, այլ տեխնիկական և սուբյեկտիվ պատճառներով (քարտային գերծախսա, օվերդրաֆտի օգտագործված սահմանաչափի նվազագույն գումարի ոչ ամբողջական մուտքագրում, երկրից բացակայություն և այլն)[cite: 25].\n• Հարցման օրվա դրությամբ վարկառուն չպետք է ունենա դասակարգված երաշխավորություն, ժամկետանց կամ դասակարգված վարկեր, ինչպես նաև՝ ժամկետանց հարկային պարտավորություններ և/կամ ԴԱՀԿ արգելանք[cite: 25].\n• Տվյալ վարկատեսակով օվերդրաֆտ չի տրամադրվում, իսկ վարկային գիծ կարող է տրամադրվել վարկային պայմանագրի գործողության ժամկետի մինչև 40% ժամանակահատվածի համար (օրինակ՝ վարկը տրվել է 60 ամիս ժամկետով, որից 24 ամիսը կարող է օգտագործվել որպես վարկային գիծ, իսկ մնացած 36 ամիսը՝ գրաֆիկական մարումով)։ Վերականգնվող գծերի դեպքում չօգտագործված մասի վրա սահմանվում է նվազագույնը 0.5%-[cite: 25]." 
      },
      { 
        id: 13, 
        title: "Այլ", 
        desc: "Պարզեցված վերլուծության կատարմամբ վարկերի վարկունակության գնահատումն իրականացվում է Բանկի կողմից հաստատված համապատասխան ձևանմուշով սահմանված չափանիշների համաձայն[cite: 25]." 
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
            <span className="text-gray-800 font-medium">Վարկեր ֆիզիկական անձանց</span>
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
         Վարկեր իրավաբանական անձանց
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