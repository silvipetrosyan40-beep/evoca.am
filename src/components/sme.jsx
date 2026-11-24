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
      desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 27]" 
    },
    { 
      id: 2, 
      title: "Վարկառուները", 
      desc: "ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձանց[cite: 27]" 
    },
    { 
      id: 3, 
      title: "Վարկի տրամադրման նպատակը", 
      desc: "Բիզնեսի զարգացման, կապիտալ ներդրումների իրականացման, շրջանառու կապիտալում միանվագ ներդրումներ իրականացնելու, կրեդիտորական պարտքերի մարելու և այլ նպատակներով[cite: 27]" 
    },
    { 
      id: 4, 
      title: "Սահմանաչափերը", 
      desc: "5,000,000 - 750,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 27]" 
    },
    { 
      id: 5, 
      title: "Տրամադրման եղանակը", 
      desc: "Անկանխիկ[cite: 27]" 
    },
    { 
      id: 6, 
      title: "Մարման ժամկետը", 
      desc: "Մինչև 84 ամիս (առավելագույն ժամկետով վարկերը տրամադրվում են կապիտալ ներդրումների կատարման նպատակով)[cite: 27]" 
    },
    { 
      id: 7, 
      title: "Վարկի մարման եղանակը", 
      desc: "• «Անուիտետային»[cite: 27]\n• «Զուգանաչափձ»[cite: 27]" 
    },
    { 
      id: 8, 
      title: "Տոկոսադրույքը /տարեկան/", 
      desc: "• ՀՀ դրամ՝ 12.5-15%[cite: 27]\n• ԱՄՆ դոլար՝ 8-9.5%[cite: 27]\n• Եվրո՝ 7-7.5%[cite: 27]\nՏոկոսադրույքների միջակայքում հաստատվող տոկոսները կապված են Բանկի վարկունակության չափանիշներին բավարարման աստիճանից, բանկային հաշիվների դրամական շրջանառության ծավալներից, Բանկի հետ համագործակցության շրջանակից և այլն[cite: 27]." 
    },
    { 
      id: 9, 
      title: "Վարկի ապահովվածության միջոց", 
      desc: "• Անշարժ և շարժական գույքը[cite: 27].\n• Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները[cite: 27].\n• Շրջանառու միջոցները, պատրաստի արտադրանքը[cite: 27].\n• Ոսկու ստանդարտացված ձուլակտորները կամ զարդերը, թանկարժեք մետաղները[cite: 27].\n• Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը[cite: 27].\n• Իրավաբանական կամ ֆիզիկական անձանց երաշխավորություններ[cite: 27]." 
    },
    { 
      id: 10, 
      title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
      desc: "• Ժամկետանց վարկի դեպքում՝ օրական 0.015%-ի չափով[cite: 27]\n• Ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով[cite: 27]" 
    },
    { 
      id: 11, 
      title: "Ժամկետից շուտ մարելու տուգանք", 
      desc: "• Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարվում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով[cite: 27, 28].\n• Առանձին դեպքերում Բանկի լիազոր մարմնի որոշմամբ սահմանված տուգանքի չափը կարող է փոփոխվել[cite: 28].\n• Վարկավորման պայմանագրով վաղաժամկետ մարման տուգանք չկիրառելու դեպքում Բանկի լիազոր մարմնի կողմից կարող է սահմանվել ավելի բարձր տոկոսադրույք՝ մինչև +2%[cite: 28]." 
    },
    { 
      id: 12, 
      title: "Գանձվող վճարներ", 
      desc: "• Վարկային հաշվի սպասարկման վճար – վարկի գումարի 0,5 %-ի չափով, բայց ոչ պակաս, քան 20,000 ՀՀ դրամ, առավելագույնը 100,000 ՀՀ դրամ[cite: 28].\n• Վարկի գումարը կանխիկ ստանալու դեպքում գանձվում է բանկային հաշվից կանխիկացման վճար՝ ըստ գործող սակագների[cite: 28]." 
    },
    { 
      id: 13, 
      title: "Պետական տուրքեր և այլ ծախսեր", 
      desc: "• ՀՀ պետական իրավասու մարմիններում վճարում եք պետտուրք և/կամ ծառայության վճար՝ գրավի պայմանագրի վավերացման և գրանցման համար[cite: 28].\n• Գրավադրվող արժեքների գնահատման ծառայության արժեքը՝ անկախ գնահատող կազմակերպությունների սահմանած սակագների համաձայն[cite: 28]." 
    }
];

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
           Փոքր և միջին բիզնեսի վարկավորում


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

                   <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-12">
      

                    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-12">
      
      {/* ԲԱԺԻՆ 1: Անհրաժեշտ տեղեկատվություն */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800">
          Անհրաժեշտ տեղեկատվություն
        </h2>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-purple-800">
            Վարկ/գրավ ընունելի սահմանաչափերը՝ ըստ գրավի տեսակների
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Անշարժ գույքի և այլ հիմնական միջոցների դեպքում՝</strong> գնահատված շուկայական արժեքի մինչև 70%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Պետական կարճաժամկետ պարտատոմսերի դեպքում՝</strong> անվանական արժեքի մինչև 95%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Այլ արժեթղթերի դեպքում՝</strong> գնահատված արժեքի մինչև 70%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Ոսկու ստանդարտացված ձլակտորների և թանկարժեք մետաղների զարդերի դիմաց՝</strong> գնահատված արժեքի մինչև 95%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Թանկարժեք և կիսաթանկարժեք քարերի դիմաց՝</strong> գնահատված արժեքի մինչև 50%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Դրամական միջոցների (ավանդային և ընթացիկ հաշվի դեպքում)՝</strong> մինչև 90%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Շրջանառու միջոցների դեպքում՝</strong> գնահատված արժեքի մինչև 50%-ի չափով:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span><strong className="text-gray-900">Դրամական հոսքերով ապահովված վարկեր՝</strong> տրամադրում ենք առնվազն 1 տարվա մեր հաճախորդներին՝ մեզ մոտ ունեցած ընթացիկ հաշվով կատարված տարեկան շարժի մինչև 30%-ի չափով (մինչև 180 օր մարման ժամկետով):</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-purple-800">
            Որոշումների կայացման և վարկերի տրամադրման ժամկետները
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Որոշումը կայացնում ենք անհրաժեշտ փաստաթղթերը մեզ ներկայացնելուց հետո 10 (տասը) բանկային օրվա ընթացքում:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վարկի դիմումի վերաբերյալ որոշման արդյունքների մասին ձեզ տեղեկացնում ենք 1 (մեկ) բանկային օրվա ընթացքում՝ բանավոր կամ ձեր ցանկության դեպքում նաև գրավոր:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վարկը տրամադրում ենք գույքի գրավադրման գործընթացն ավարտելուց հետո՝ 5 (հինգ) բանկային օրվա ընթացքում (պահանջվող փաստաթղթերի ամբողջական փաթեթի կազմման պարագայում):</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ԲԱԺԻՆ 2: Վարկի վերաբերյալ որոշման կայացման չափանիշները */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800">
          Վարկի վերաբերյալ որոշման կայացման չափանիշները
        </h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-800">
            Դրական որոշման կայացման չափանիշները՝
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Ձեր վարկունակության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված գնահատման չափանիշների:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Մեզ ներկայացված տվյալների և փաստաթղթերի արժանահավատությունը:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Ձեր պատասխանատվության և պարտաճանաչության դրական գնահատումը՝ ըստ ձեր վարկային պատմության ուսումնասիրության և վերլուծության:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Գրավի իրացվելիության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված չափանիշների և «գրավ/վարկ» հարաբերակցության ընունելի սահմանաչափերի:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի հիմնավոր լինելը:</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-purple-800">
            Մերժման չափանիշները՝
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Ձեր վարկունակության ոչ բավարար մակարդակի գնահատումը՝ ըստ մեր իրավական ակտերով սահմանված հաճախորդ-վարկառուների վարկունակության գնահատման չափանիշների:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Մեզ ներկայացված տվյալների և փաստաթղթերի անարժանահավատությունը:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Ձեր պատասխանատվության և պարտաճանաչության բացասական գնահատումը՝ ըստ ձեր վարկային պատմության ուսումնասիրության և վերլուծության:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի շահութաբերության թերիհիմնավորումը:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Այլ հիմնավոր պատճառներ, որոնք կարող են ազդել տրամադրվող վարկի վերադարձելիության վրա:</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-purple-800">
            Վարկերի մարման, տոկոսների հաշվեգրման և վճարման կարգը
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <div className="space-y-2">
                <span>Վարկերը մարում եք գրաֆիկի համաձայն, հետևյալ երկու եղանակներից մեկով, ըստ ձեր ցանկության՝</span>
                <ul className="space-y-2 pl-4 pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span><strong className="text-gray-900">«Անուիտետային»</strong> (հավասարաչափ ամսական մարում), որը փոփոխական մասերով ներառում է մայր գումարը և կուտակված տոկոսները:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span><strong className="text-gray-900">«Զապանﻻկաձև»</strong> (փոփոխական ամսական մարում), որը ներառում է մայր գումարի մարումը հավասար, իսկ կուտակված տոկոսները՝ փոփոխական չափով:</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վարկերի տոկոսագումարները հաշվում ենք գումարի փաստացի մնացորդի նկատմամբ՝ վարկի տրամադրման օրվանից մինչև ձեր կողմից մեզ հանդեպ ստանձնած պարտավորությունների կատարման նախորդ օրն ընկած ժամանակաշրջանի համար (վարկի մարման օրվա նկատմամբ տոկոսագումար չենք գանձում):</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
              <span>Վճարումները կարող եք իրականացնել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի»-ի):</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ԲԱԺԻՆ 3: Զգուշացում */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800">
          Զգուշացում
        </h2>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով ԲՌՆԱԳԱՆՁՎԵԼ, իսկ ձեր մասին տեղեկատվությունը կգրանցվի Վարկային ռեգիստրում (ինչը հետագայում կարող է խոչընդոտել նոր վարկերի ստացումը):</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
            <span>Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկառուի վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա մենք (գործող օրենսդրության համաձայն) հնարավորություն ունենք կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքի հաշվին (առկայության դեպքում):</span>
          </li>
        </ul>
      </section>

    </div>
         
    </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}