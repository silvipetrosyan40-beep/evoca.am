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
        desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 33]" 
      },
      { 
        id: 2, 
        title: "Վարկառու", 
        desc: "ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր[cite: 33]" 
      },
      { 
        id: 3, 
        title: "Ֆինանսավորում", 
        desc: "Վարկ | Տեղափոխվող բիզնես վարկին կից վարկ[cite: 33]" 
      },
      { 
        id: 4, 
        title: "Վարկի նպատակ", 
        desc: "• Այլ ֆինանսական կառույցներում գործող բիզնես ֆինանսավորումների (վարկ, օվերդրաֆտ, վարկային գիծ) տեղափոխում[cite: 33].\n• Հիմնական միջոցների ձեռքբերում\n• Շրջանառու միջոցների համալրում\n• Ընթացիկ ծախսերի ֆինանսավորում\n• Կրեդիտորական պարտքի մարում\n• Այլ ներդրումներ[cite: 33]" 
      },
      { 
        id: 5, 
        title: "Սահմանաչափ", 
        desc: "• Տեղափոխվող մասով՝ 15,000,000 - 500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 33].\n• Կից վարկի մասով՝ 5,000,001-100,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 33]" 
      },
      { 
        id: 6, 
        title: "Ժամկետ", 
        desc: "• Տեղափոխվող մասով՝ 36-120 ամիս[cite: 33].\n• Կից վարկի մասով՝ 12-60 ամիս[cite: 33]" 
      },
      { 
        id: 7, 
        title: "Տարեկան անվանական տոկոսադրույք", 
        desc: "• Տեղափոխվող ֆինանսավորումների դեպքում՝ գործող տոկոսադրույք -2 տոկոսային կետ, բայց ոչ պակաս՝\n  - Առանց հետվճար՝ ՀՀ դրամ՝ սկսված 12%-ից, ԱՄՆ դոլար՝ սկսված 9%-ից, Եվրո՝ սկսված 8%-ից[cite: 33].\n  - Հետվճարից օգտվելու դեպքում՝ ՀՀ դրամ՝ սկսված 12.5%-ից, ԱՄՆ դոլար՝ սկսված 9.5%-ից, Եվրո՝ սկսված 8.5%-ից[cite: 33].\n• Կից վարկի դեպքում՝ ՀՀ դրամ՝ 13%, ԱՄՆ դոլար՝ 9.5%, Եվրո՝ 8.5%[cite: 33]" 
      },
      { 
        id: 8, 
        title: "Մայր գումարի մարման արտոնյալ ժամանակահատված (ոչ պարտադիր)", 
        desc: "Մինչև 6 ամիս (կից վարկի դեպքում՝ —)[cite: 34]" 
      },
      { 
        id: 9, 
        title: "Վարկի օգտագործման եղանակ", 
        desc: "Անկանխիկ (կից վարկի դեպքում՝ անկանխիկ/կանխիկ)[cite: 34]" 
      },
      { 
        id: 10, 
        title: "Հետվճար (Cash back)", 
        desc: "• Վարկի պայմանագրային գումարի մինչև 2%՝ առավելագույնը 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 34].\n• Հետվճարը տրամադրվում է, եթե վերաֆինանսավորվող վարկի ժամկետը նվազագույնը 60 ամիս է[cite: 34].\n(Կից վարկի դեպքում՝ —)[cite: 34]" 
      },
      { 
        id: 11, 
        title: "Վարկի ապահովում", 
        desc: "Հիմնական ապահովում՝\n• Տեղափոխվող ֆինանսավորումների ապահովման միջոց հանդիսացող գրավ/ներ՝ անշարժ, շարժական գույք՝ ներառյալ տրանսպորտային միջոց (եթե տեղափոխման ենթակա վարկի ապահովման միջոց այլ ֆին. կառույցում անշարժ գույք է, վերաֆինանսավորվող վարկի գրավային զամբյուղում անշարժ գույքը պարտադիր է)[cite: 34].\n• Երաշխավոր (ըստ անհրաժեշտության)[cite: 34].\nԼրացուցիչ ապահովում՝\n• Այլ անշարժ գույք, տրանսպորտային միջոց և այլ հիմնական միջոց[cite: 34].\n• Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ[cite: 34].\n• Ոսկու ստանդարտացված ձուլակտորներ կամ զարդեր[cite: 34].\n• Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր[cite: 34].\n• Շրջանառու միջոցները և պատրաստի արտադրանքը[cite: 34]" 
      },
      { 
        id: 12, 
        title: "Երաշխավոր", 
        desc: "ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ[cite: 34]" 
      },
      { 
        id: 13, 
        title: "Տեղափոխման ենթակա ֆինանսավորումներ", 
        desc: "Տեղափոխման ենթակա են ֆինանսական կառույցներում գործող ֆինանսավորումները (կից վարկի դեպքում՝ —)[cite: 34]" 
      },
      { 
        id: 14, 
        title: "Գանձվող վճար", 
        desc: "• Վարկային հայտի ուսումնասիրման վճար - չի սահմանվում[cite: 34].\n• Վարկի տրամադրման միանվագ վճար - չի սահմանվում[cite: 34]" 
      },
      { 
        id: 15, 
        title: "Վարկի կանխիկացում", 
        desc: "• Տեղափոխվող մասով՝ —[cite: 35].\n• Կից վարկի մասով՝ Համաձայն Բանկի գործող պայմանների և սակագների[cite: 35]" 
      },
      { 
        id: 16, 
        title: "Մարում", 
        desc: "• Անուիտետային[cite: 35]\n• Հավասարաչափ[cite: 35]\n• Մայր գումարի արտոնյալ ժամկետի դեպքում՝ մայր գումարը արտոնյալ ժամկետի ավարտից հետո տոկոսները՝ ամսական[cite: 35]" 
      },
      { 
        id: 17, 
        title: "Ժամկետանց պարտավորությունների մարման տույժ", 
        desc: "Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսված ուշացման առաջին օրվանից՝\n• ժամկետանց մայր գումարի համար՝ օրական 0.015%[cite: 35],\n• ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 35]" 
      },
      { 
        id: 18, 
        title: "Մայր գումարի վաղաժամկետ մարման տուգանք", 
        desc: "• Առանց հետվճարի պայմանով վարկերի դեպքում՝ Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարվում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով վարկի ամբողջական ժամկետի համար[cite: 35].\n• Հետվճարի պայմանով վարկերի դեպքում՝ Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարվում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 7%-ի չափով վարկի ամբողջական ժամկետի համար[cite: 35]" 
      },
      { 
        id: 19, 
        title: "Բանկի կողմից փոխհատուցման ենթակա վճարներ", 
        desc: "• ՀՀ Կառավարության առընթեր անշարժ գույքի կադաստրի պետական կոմիտեի կողմից տրամադրվող անշարժ գույքի սահմանափակումների վերաբերյալ միասնական տեղեկանքի համար սահմանված վճար՝ միայն տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի համար։ Լրացուցիչ անգամ միասնական տեղեկանքի համար դիմելու դեպքում յուրաքանչյուր հաջորդ անգամ վճարն իրականացվում է հաճախորդի կողմից[cite: 35].\nԲացառությամբ այն դեպքերի, երբ հաճախորդը ցանկանում է անշարժ գույքի գրավի գրանցումն իրականացնել օրենքով նախատեսված ստանդարտ ժամկետից ավելի շուտ[cite: 35].\n• Տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի նոտարական վավերացման վճար[cite: 35].\n• Գրավի պայմանագրից ծագող Բանկի իրավունքի պետական իրավասու մարմնում գրանցման վճար՝ միայն տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի դեպքում[cite: 35].\n• Տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի գրավի գնահատում[cite: 35]" 
      },
      { 
        id: 20, 
        title: "Ինտերնետ Բանկ/Մոբայլ բանկինգ", 
        desc: "Բանկի հաճախորդ չհանդիսացող հաճախորդներին՝ անվճար ԻԲ/ՄԲ տրամադրում՝ մինչև 3 օգտագործողի հնարավորությամբ 3 տարի ժամկետով[cite: 36]" 
      },
      { 
        id: 21, 
        title: "Visa Business քարտ", 
        desc: "1 քարտ՝ տրամադրում և 3 տարի ժամկետով անվճար սպասարկում։ Քարտի վերաթողարկման դեպքում սպասարկումն իրականացվում է տվյալ պահին Բանկում գործող սակագներով[cite: 36].\nՊարտադիր պայման է անհատ ձեռնարկատիրոջ դեպքում ԱՁ հանդիսացող ֆիզիկական անձի և իրավաբանական անձի դեպքում՝ տնօրենի, 10% և ավել մասնակիցների, իրական շահառուի ՀՀ քաղաքացիությունը[cite: 36]." 
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
      Բիզնես վարկերի վերաֆինանսավորում
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