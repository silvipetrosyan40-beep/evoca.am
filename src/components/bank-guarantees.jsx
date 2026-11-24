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
        desc: "ՀՀ դրամ կամ արտարժույթ[cite: 32]" 
      },
      { 
        id: 2, 
        title: "Գումարային սահմանաչափ", 
        desc: "• Ֆիզիկական անձանց տրամադրվող երաշխիքների դեպքում՝ մինչև 10,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 32].\n• Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրվող երաշխիքների դեպքում՝ մինչև 500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 32]." 
      },
      { 
        id: 3, 
        title: "Ժամկետներ", 
        desc: "• Ֆիզիկական անձանց տրամադրված երաշխիքների դեպքում՝ մինչև 2 տարի մարման ժամկետով[cite: 32].\n• Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում՝ մինչև 3 տարի մարման ժամկետով[cite: 32]." 
      },
      { 
        id: 4, 
        title: "Տարեկան անվանական տոկոսադրույքներ", 
        desc: "1-4% տարեկան[cite: 32]" 
      },
      { 
        id: 5, 
        title: "Ժամկետանց տոկոսագումարների տույժեր", 
        desc: "օրական 0.3%-ի չափով[cite: 32]" 
      },
      { 
        id: 6, 
        title: "Գանձվող վճարներ", 
        desc: "• Ֆիզիկական անձանց տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 10,000 ՀՀ դրամը, ապա Պրինցիպալից գանձվում է միանվագ վճար 10,000 ՀՀ դրամ գումարի չափով[cite: 32].\n• Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 20,000 ՀՀ դրամը, ապա Պրինցիպալից գանձվում է միանվագ վճար 20,000 ՀՀ դրամ գումարի չափով[cite: 32]." 
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
                     Բանկային երաշխիքներ
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
                    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800">
        Զգուշացում
      </h2>
      <ul className="space-y-4 text-gray-700 leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
          <span>Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով ԲՌՆԱԳԱՆՁՎԵԼ, իսկ ձեր մասին տեղեկատվությունը կգրանցվի Վարկային ռեգիստրում (ինչը հետագայում կարող է խոչընդոտել նոր վարկերի ստացումը):[cite: 17]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold text-xl mt-0.5">•</span>
          <span>Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկառուի վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա մենք (գործող օրենսդրության համաձայն) հնարավորություն ունենք կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքի հաշվին (առկայության դեպքում):[cite: 17]</span>
        </li>
      </ul>
    </div>
                  

        </main>
      </div>

      <Footer />
    </div>
  );
}