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
        desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 31]" 
      },
      { 
        id: 2, 
        title: "Լիզինգառուները", 
        desc: "ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր[cite: 31]" 
      },
      { 
        id: 3, 
        title: "Լիզինգի առարկայի ձեռքբերման հնարավորությունները", 
        desc: "Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից[cite: 31]" 
      },
      { 
        id: 4, 
        title: "Լիզինգի սահմանաչափերը", 
        desc: "5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 31]" 
      },
      { 
        id: 5, 
        title: "Կանխավճար", 
        desc: "նվազագույնը՝ 10%[cite: 31]" 
      },
      { 
        id: 6, 
        title: "Մարման ժամկետը", 
        desc: "6-72 ամիս՝ կախված ձեռքբերվող լիզինգի առարկայից[cite: 31]" 
      },
      { 
        id: 7, 
        title: "Մարման եղանակը", 
        desc: "• Անուիտետային[cite: 31]\n• Հավասարաչափ[cite: 31]\n• Պայմանագրային[cite: 31]" 
      },
      { 
        id: 8, 
        title: "Տարեկան տոկոսադրույքը", 
        desc: "• ՀՀ դրամ՝ սկսած 10.5%-ից[cite: 31]\n• ԱՄՆ դոլար՝ սկսած 8%-ից[cite: 31]\n• Եվրո՝ սկսած 6%-ից[cite: 31]" 
      },
      { 
        id: 9, 
        title: "Լիզինգի մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
        desc: "• ժամկետանց լիզինգի մայր գումարի դեպքում՝ օրական 0.015%-ի չափով[cite: 31]\n• ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով[cite: 31]" 
      },
      { 
        id: 10, 
        title: "Ժամկետից շուտ մարելու տուգանք", 
        desc: "• Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարձավճարից ավելին մարելու դեպքում վճարվում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական Լիզինգի մայր գումարի չափը գերազանցող գումարի 5%-ի չափով[cite: 31].\n• Առանձին դեպքերում Բանկի լիազոր մարմնի որոշմամբ սահմանված տուգանքի չափը կարող է փոփոխվել[cite: 31]." 
      },
      { 
        id: 11, 
        title: "Ապահովվածություն", 
        desc: "• Երաշխավորություններ՝ ըստ պահանջի[cite: 31].\n• Գույքի/իրավունքի գրավ՝ ըստ պահանջի[cite: 31].\n• Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև այլ գրավ[cite: 31]." 
      },
      { 
        id: 12, 
        title: "Գանձվող վճարներ", 
        desc: "• Լիզինգային հայտի ուսումնասիրման միանվագ վճար՝ 20,000 ՀՀ դրամ[cite: 31].\n• Լիզինգի գումարից միանվագ գանձվող միջնորդավճար՝ 0.4-1%, ոչ አվել քան 500,000 ՀՀ դրամ[cite: 31]." 
      },
      { 
        id: 13, 
        title: "Սեփականության իրավունքի փոխանցման վճար՝ յուրաքանչյուր պայմանագրի մասով անկախ դրա գույքերի քանակից", 
        desc: "10,000 ՀՀ դրամ[cite: 31]" 
      },
      { 
        id: 14, 
        title: "Լիզինգի պայմանների վերանայում", 
        desc: "15,000 ՀՀ դրամ[cite: 31]" 
      },
      { 
        id: 15, 
        title: "Ենթավարձակալությամբ տրադրելու համաձայնություն", 
        desc: "50,000 ՀՀ դրամ[cite: 31]" 
      },
      { 
        id: 16, 
        title: "Լիզինգի առարկայի տարեկան ապահովագրություն", 
        desc: "Լիզինգի տրամադրման ժամանակ՝ լիզինգի առարկայի ինքնարժեքի չափով, մնացած տարիների համար՝ լիզինգի մնացորդային արժեքի վրա[cite: 31]" 
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
        Լիզինգ              </h2>
                
                        
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
                    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-12">
      
      {/* Ներածական */}
      <p className="text-gray-700 leading-relaxed font-medium">
        Լիզինգի տրամադրման վերջնական պայմանները, մասնավորապես մարման ժամկետը և տոկոսադրույքը կախված են լիզինգի առարկայի տեսակից, մատակարարից, բիզնեսի առանձնահատկություններից և այլ ռիսկերից:
      </p>

      {/* Վերնագիր */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800">
        ՀՀ Կառավարության Տնտեսության Արդիականացման Միջոցառման շրջանակում տրամադրվող լիզինգի պայմաններ
      </h2>

      {/* Տնտեսվարողների շրջանակը */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-purple-800">
          Տնտեսվարողների շրջանակը
        </h3>
        <p className="text-gray-700 leading-relaxed">
          ՀՀ-ում կամ ԼՂ տարածքում գրանցված և փաստացի գործունեություն իրականացնող մասնավոր առևտրային կազմակերպությունը կամ անհատ ձեռնարկատերը (բացառությամբ լիցենզավորվող գործունեություն իրականացնող (բացառությամբ առողջապահության, տրանսպորտի և կրթության բնագավառի կամ պետական մասնակցությամբ առևտրային կազմակերպությունների), որն ապահովում է ստորև ներկայացված բոլոր չափանիշներին համապատասխանությունը:
        </p>
      </section>

      {/* Նպատակը */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-purple-800">
          Նպատակը
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Նոր (չօգտագործված) սարքերի և սարքավորումների գնում կամ ներմուծում, պայմանով, որ գնորդի և մատակարարի միջև պայմանագիրը կնքվել է 2021 թվականի փետրվարի 1-ից հետո, և տվյալ սարքերը և սարքավորումները պետք է օգտագործվեն ՀՀ-ում արտադրություն կազմակերպելու կամ արտադրությունն ընդլայնելու նպատակով:
        </p>
      </section>

      {/* Սուբսիդավորվող ոլորտները */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-purple-800">
          Սուբսիդավորվող ոլորտները՝
        </h3>
        <ul className="space-y-3 text-gray-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Մշակող արդյունաբերություն</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Հանքագործական արդյունաբերություն և բացահանքերի շահագործում</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Տեղեկատվություն և կապ</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Շինարարություն</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Փոխադրում և պահեստային տնտեսություն</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Մասնագիտական գիտական և տեխնիկական գործունեություն</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Կրթություն</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Առողջապահություն և բնակչության սոցիալական սպասարկում</span>
          </li>
        </ul>
      </section>

      {/* Ժամկետը */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-purple-800">
          Ժամկետը
        </h3>
        
        {/* Աղյուսակ */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-200 text-left text-sm text-gray-700">
            <thead className="bg-purple-50 text-purple-900 font-bold">
              <tr>
                <th className="border border-purple-200 p-3">Տեսակը</th>
                <th className="border border-purple-200 p-3">Տրամադրվող լիզինգի գումարը</th>
                <th className="border border-purple-200 p-3">Սուբսիդավորման ժամանակահատվածը</th>
                <th className="border border-purple-200 p-3">Լիզինգի ժամկետը</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-200 p-3 font-medium" rowSpan="2">
                  Սարք, սարքավորումներ, բաղկացուցիչ մասեր
                </td>
                <td className="border border-purple-200 p-3">
                  մինչև 200 մլն. դրամին համարժեք գումար
                </td>
                <td className="border border-purple-200 p-3">մինչև 42 ամիս</td>
                <td className="border border-purple-200 p-3">մինչև 120 ամիս</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3">
                  ավելի քան 200 մլն. դրամին համարժեք գումար
                </td>
                <td className="border border-purple-200 p-3">մինչև 36 ամիս</td>
                <td className="border border-purple-200 p-3">մինչև 120 ամիս</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed pt-2">
          Ընդ որում, մատակարարման փուլի սուբսիդավորումը կատարվում է մինչև 180 օր ժամկետի համար՝ սկսած լիզինգի պայմանագրի կնքման օրվանից, իսկ 180 օր ժամկետը գերազանցող ժամկետի համար տոկոսների վճարման պարտականությունը կրում է լիզինգառուն:
        </p>
      </section>

      {/* Սուբսիդավորման չափը */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-purple-800">
          Սուբսիդավորման չափը
        </h3>
        <ul className="space-y-3 text-gray-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>ՀՀ դրամով՝ 10%</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Արտարժույթով՝ 8%</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Լիզինգի մայր գումարի մարման արտոնյալ ժամանակահատված՝ մինչև 6 ամիս:</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Առավելագույն գումար՝ 1 մլրդ ՀՀ դրամ կամ համարժեք արտարժույթ:</span>
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed pt-2">
          Եթե Տնտեսվարողը իր կանոնադրական կապիտալում 200 մլն դրամ և ավելի գումարի չափով ներդրում է կատարել 2021 թվականի հունվարի 1-ից մինչև աջակցության հայտը ներկայացնելու պահը, ապա առավելագույն գումարը սահմանվում է կանոնադրական կապիտալում կատարված ներդրման հինգապատիկի չափով, բայց ոչ ավելի, քան 10 մլրդ. դրամ, իսկ արտարժույթով վարկավորման դեպքում՝ 5 մլրդ. դրամին համարժեք ՀՀ դրամ:
        </p>

        <ul className="space-y-3 text-gray-700 leading-relaxed pt-2">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Լիզինգի տրամադրման/սպասարկման միջնորդավճարներ, վաղաժամկետ մարման համար տույժեր և (կամ) տուգանքներ կամ այլ վճարներ չեն կիրառվում:</span>
          </li>
        </ul>
      </section>

      {/* Վերջնական նշում */}
      <p className="text-gray-600 italic text-sm pt-4 border-t border-gray-200">
        Սույն միջոցառումը գործում է մինչև 2024 թվականի դեկտեմբերի 31-ը:
      </p>

    </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}