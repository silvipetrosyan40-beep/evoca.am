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
  name: 'Քարտեր', 
  subitems: [
    { title: 'Վճարային քարտեր', path: '/hy/about/tariffs/commissions' },
    { title: 'Visa Digital քարտեր', path: '/hy/about/tariffs/cards/digital-cardd' },
    { title: 'Visa Vision քարտեր', path: '/hy/about/tariffs/cards/vision-cardd' },
    { title: 'ArCa Classic քարտեր', path: '/hy/about/tariffs/cards/contactless-cardss' },
    { title: 'Սոցիալական հաշվի (կենսաթոշակային) քարտեր', path: '/hy/about/tariffs/cards/pension-cardsss' },
    { title: 'Mastercard World Digital քարտեր', path: '/hy/about/tariffs/cards/world-digital-carddd' },
    { title: 'Evoca Gift Card', path: '/hy/about/tariffs/cards/tariffs-gift-carddd' },
    { title: 'Mastercard Digital Gift Card', path: '/hy/about/tariffs/cards/terms-and-tariffs' },
    { title: 'UnionPay քարտեր', path: '/hy/about/tariffs/cards/tariffs-unionpay-carddd' },
    { title: 'Evoca Travel Card', path: '/hy/about/tariffs/cards/tariffs-travel-cardd' },
    { title: '4U.am Gift card', path: '/hy/about/tariffs/cards/uam-gift-cards-tariffss' },
    { title: 'Homplex Gift card', path: '/hy/about/tariffs/cards/Homplex-gift-cards' },
    { title: 'Dalma Gift Card', path: '/hy/about/tariffs/cards/dalma-gift-card-tariffs' },
    { title: 'Garage Masters\' Mall Gift Card', path: '/hy/about/tariffs/cards/mall-gift-card-tariffs' },
    { title: 'Rio Gift Card', path: '/hy/about/tariffs/cards/rio-gift-card-tariffs' },
    { title: 'MyLer Gift card', path: '/hy/about/tariffs/cards/MyLer-gift-cards-tariffs' },
    { title: 'Visa Infinite քարտեր', path: '/hy/about/tariffs/cards/tariffs-visa-infinite-cardd' },
    { title: 'Visa Platinum վճարային քարտեր', path: '/hy/about/tariffs/cards/tariffs-visa-platinum-card' },
    { title: 'Wilco Card', path: '/hy/about/tariffs/cards/tariffs-Wilco-card' },
    { title: 'ArCa Union Pay Co-badge քարտեր', path: '/hy/about/tariffs/cards/arca-unionpay-cobadge' }
  ] 
},
     { 
  name: 'Հաշիվներ', 
  subitems: [
    { title: 'Խնայողական հաշիվ', path: '/hy/about/tariffs/accounts/savings' },
    { title: 'Ընթացիկ հաշիվներ', path: '/hy/about/tariffs/accounts/current' },
    { title: 'Անվանատիրոջ հատուկ հաշիվներ', path: '/hy/about/tariffs/accounts/nominee' },
    { title: 'Նոտարի հատուկ հաշիվների բացում և վարում', path: '/hy/about/tariffs/accounts/notary' },
    { title: 'Սնանկության հատուկ հաշիվների բացում և վարում', path: '/hy/about/tariffs/accounts/bankruptcy' },
    { title: 'Էսքրոու հաշիվների բացում և վարում', path: '/hy/about/tariffs/accounts/escrow' },
    { title: 'Կառուցապատողի հատուկ հաշվի բացում և վարում', path: '/hy/about/tariffs/accounts/developer' }
  ] 
},
    { 
  name: 'Փոխանցումներ', 
  subitems: [
    { title: 'Բանկային փոխանցումներ', path: '/hy/about/tariffs/transfers/bank-transfers' },
    { title: 'UBPay արագ դրամական փոխանցումներ', path: '/hy/about/tariffs/transfers/ubpay' },
    { title: 'Բանկի վիրտուալ տերմինալների միջոցով տեղական՝ լոկալ քարտից-քարտ (card-to card) փոխանցումների և Visa Direct, Money Send ծառայությունների սպասարկման միջնորդավճար', path: '/hy/about/tariffs/transfers/card-to-card' },
    { title: 'Անկանխիկ ոսկով փոխանցումներ', path: '/hy/about/tariffs/transfers/gold' }
  ] 
},
   { 
  name: 'Այլ', 
  subitems: [
    { title: 'Դրամարկղային գործառնություններ', path: '/hy/about/tariffs/other/cashier' },
    { title: 'Հաշիվների հեռակառավարում EvocaTOUCH, EvocaONLINE', path: '/hy/about/tariffs/other/remote-banking' },
    { title: 'Պահատուփեր', path: '/hy/about/tariffs/other/lockers' },
    { title: 'Այլ բանկերի թողարկած քարտերի սակագներ, բաց. MIR քարտերի', path: '/hy/about/tariffs/other/other-banks-cards' },
    { title: 'Բրոքերային ծառայություններ', path: '/hy/about/tariffs/other/brokerage' },
    { title: 'Պահառութային ծառայություններ', path: '/hy/about/tariffs/other/custody' },
    { title: 'Ակրեդիտիվներ', path: '/hy/about/tariffs/other/letters-of-credit' },
    { title: 'Փաստաթղթային ինկասո', path: '/hy/about/tariffs/other/collection' },
    { title: 'Բանկային երաշխիքներ', path: '/hy/about/tariffs/other/guarantees' },
    { title: 'Պահատուփերի վարձակալում', path: '/hy/about/tariffs/other/locker-rental' },
    { title: 'Գրությունների, թույլտվությունների և համաձայնությունների տրամադրում', path: '/hy/about/tariffs/other/letters-permissions' },
    { title: 'Այլ ծառայություններ', path: '/hy/about/tariffs/other/other-services' }
  ] 
},
  ];


 const paymentCardsData = [
     { 
        id: 1, 
        title: "Քարտի տեսակ", 
        desc: "Visa Rewards[cite: 39]" 
      },
      { 
        id: 2, 
        title: "Քարտի արժույթ", 
        desc: "ՀՀ դրամ, ԱՄՆ դոլար, եվրո[cite: 39]" 
      },
      { 
        id: 3, 
        title: "Visa Vision քարտի սպասարկման վճար", 
        desc: "• Տարեկան՝ 6500 ՀՀ դրամ[cite: 39]\n• Ամսական՝ 600 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն Բանկի մասնաճյուղերում)[cite: 39]\n• 24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար՝ 45,000 ՀՀ դրամ[cite: 39]" 
      },
      { 
        id: 4, 
        title: "Քարտապանին այլ արժույթով Visa Classic քարտ՝ նվեր ցանկության դեպքում /Լրացուցիչ քարտ/", 
        desc: "Անվճար, առանց տարեկան սպասարկման վճարի[cite: 39]" 
      },
      { 
        id: 5, 
        title: "Նույն հաշվեհամարին կից քարտ Visa Vision քարտի սպասարկման վճար", 
        desc: "Ամսական 300 ՀՀ դրամ։ Օտարերկրյա անձանց համար գործում է միանվագ 225,000 ՀՀ դրամ սակագին[cite: 39]" 
      },
      { 
        id: 6, 
        title: "Visa Classic քարտի տրամադրում Visa Vision քարտապանի ընկերոջը՝ նվեր ցանկության դեպքում", 
        desc: "Անվճար, իսկ օտարերկրյա անձանց համար՝ 75,000 ՀՀ դրամ միանվագ[cite: 39]" 
      },
      { 
        id: 7, 
        title: "Քարտային հաշվի չնվազող մնացորդ", 
        desc: "չի սահմանվում[cite: 39]" 
      },
      { 
        id: 8, 
        title: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք", 
        desc: "ՀՀ դրամ՝ 4%, ԱՄՆ դոլար՝ 1%, Եվրո՝ 0.5%[cite: 39]" 
      },
      { 
        id: 9, 
        title: "Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back", 
        desc: "• Արթա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում՝ 0.25 %, առավելագույնը՝ 5,000 ՀՀ դրամ[cite: 39].\n• Ոչ Արթա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում՝ 0.5 %, առավելագույնը՝ 5,000 ՀՀ դրամ[cite: 39]" 
      },
      { 
        id: 10, 
        title: "Կանխիկացում", 
        desc: "• ՀՀ դրամ՝ Բանկի բանկոմատներից, քարտային հաշվից, Բանկի POS տերմինալների միջոցով՝ Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար, 2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2 %, POS տերմինալների միջոցով՝ 0.2 %[cite: 40]. ԱՄՆ դոլար՝ 0.5 %, Եվրո՝ 0.5%[cite: 40].\n• Արթա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով՝ 1%[cite: 40].\n• Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով՝ 1.5 %, min 1,500 ՀՀ դրամ[cite: 40]" 
      },
      { 
        id: 11, 
        title: "Կանխիկացման օրական առավելագույն սահմանաչափեր", 
        desc: "• Գումարային՝ 1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 40].\n• Քանակային՝ 10 հատ[cite: 40].\n• Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ՝ Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)[cite: 40]" 
      },
      { 
        id: 12, 
        title: "Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով", 
        desc: "0[cite: 40]" 
      },
      { 
        id: 13, 
        title: "Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ", 
        desc: "100,000 ՀՀ դրամ[cite: 40]" 
      },
      { 
        id: 14, 
        title: "Կանխիկի մուտքագրում Բանկի և Արթա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)", 
        desc: "0.6 %[cite: 41]" 
      },
      { 
        id: 15, 
        title: "Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ", 
        desc: "0[cite: 41]" 
      },
      { 
        id: 16, 
        title: "Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար", 
        desc: "0[cite: 41]" 
      },
      { 
        id: 17, 
        title: "Քարտից քարտ փոխանցումներ բանկոմատների միջոցով", 
        desc: "• Բանկի հաճախորդների օգտին՝ 0.3 %[cite: 41]\n• «Արթա» համակարգի անդամ հանդիսացող այլ բանկերի և Արթա համակարգի հետ H2H կապողով աշխատող բանկերի վճարային քարտերին՝ 0.5 %[cite: 41]" 
      },
      { 
        id: 18, 
        title: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում", 
        desc: "• Նույն արժույթով քարտին՝ 0%[cite: 41]\n• Տարբեր արժույթով քարտին՝ 0.3 %[cite: 41]" 
      },
      { 
        id: 19, 
        title: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արթա» համակարգի անդամ հանդիսացող այլ բանկերի և Արթա համակարգի հետ H2H կապողով աշխատող բանկերի վճարային քարտերին", 
        desc: "0.5 %[cite: 41]" 
      },
      { 
        id: 20, 
        title: "Քարտի գործողության կասեցում", 
        desc: "0[cite: 41]" 
      },
      { 
        id: 21, 
        title: "Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)", 
        desc: "500 ՀՀ դրամ[cite: 41]" 
      },
      { 
        id: 22, 
        title: "Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում", 
        desc: "0[cite: 42]" 
      },
      { 
        id: 23, 
        title: "Քարտի վերաթողարկում կորուստի կամ վնասվելու դեպքում", 
        desc: "2,000 ՀՀ դրամ[cite: 42]" 
      },
      { 
        id: 24, 
        title: "Նոր PIN ծածկագրի գեներացում", 
        desc: "1,000 ՀՀ դրամ[cite: 42]" 
      },
      { 
        id: 25, 
        title: "Քարտային հաշվի ամսական քաղվածքի տրամադրում", 
        desc: "0[cite: 42]" 
      },
      { 
        id: 26, 
        title: "Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար", 
        desc: "0[cite: 42]" 
      },
      { 
        id: 27, 
        title: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում", 
        desc: "• Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ[cite: 42]\n• 5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0[cite: 42]" 
      },
      { 
        id: 28, 
        title: "Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար", 
        desc: "0[cite: 42]" 
      },
      { 
        id: 29, 
        title: "Քարտով կատարված գործարքների բողոքարկման հայտ", 
        desc: "5,000 ՀՀ դրամ[cite: 42]" 
      },
      { 
        id: 30, 
        title: "Գերծախսի գծով տույժեր", 
        desc: "20% տարեկան[cite: 42]" 
      },
      { 
        id: 31, 
        title: "Վարկային սահմանաչափի հնարավորություն", 
        desc: "Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների[cite: 42]" 
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
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Վարկեր իրավաբանական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/commissions')} 
    className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
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
            <span className="text-gray-800 font-medium">Միջնորդավճարների սակագները
</span>
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
                Visa Vision քարտեր
              </h2>

              <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                <table className="w-full text-left border-collapse text-sm text-gray-700">
                  <tbody>
                    {paymentCardsData.map((row) => (
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


                        <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-6 text-sm md:text-base">
      <ol className="space-y-4 text-gray-700 leading-relaxed list-none">
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[1]</span>
          <span>Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին[cite: 18]:</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[2]</span>
          <span>Տոկոսագումարները տրամադրվում են եռամսյակային:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[3]</span>
          <span>Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[4]</span>
          <span>Կանխիկացման սակագները գործում են նաև քարտին կից տրամադրված ցանկացած տեսակի այլ քարտի դեպքում:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[5]</span>
          <span>Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0"></span>
          <span className="text-gray-700">Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[6]</span>
          <span>Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:[cite: 18]</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-700 font-bold shrink-0">[7]</span>
          <span>Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:[cite: 18]</span>
        </li>
      </ol>
    </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}