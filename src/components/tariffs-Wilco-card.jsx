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
        title: "Քարտի տրամադրում", 
        desc: "0" 
      },
      { 
        id: 2, 
        title: "Քարտի արժույթ", 
        desc: "AMD, USD, EURO" 
      },
      { 
        id: 3, 
        title: "Քարտի գործողության ժամկետ", 
        desc: "5 տարի" 
      },
      { 
        id: 4, 
        title: "Քարտի սպասարկման միանվագ վճար քարտի գործողության ժամկետի համար", 
        desc: "300 000 AMD" 
      },
      { 
        id: 5, 
        title: "Կից քարտի տրամադրում", 
        desc: "0" 
      },
      { 
        id: 6, 
        title: "Կից քարտի միանվագ վճար քարտի գործողության ժամկետի համար", 
        desc: "200 000 AMD" 
      },
      { 
        id: 7, 
        title: "Հաշվի չնվազող մնացորդ", 
        desc: "0" 
      },
      { 
        id: 8, 
        title: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %", 
        desc: "• Մինչև 5 մլն. ՀՀ դրամ՝ 1.50%\n• 5 մլն. ՀՀ դրամ և ավելի՝ 2%\n• Արտարժույթ՝ 0%" 
      },
      { 
        id: 9, 
        title: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով", 
        desc: "1,2%" 
      },
      { 
        id: 10, 
        title: "Քարտերով կանխիկի տրամադրում «Արթա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով", 
        desc: "1,5%" 
      },
      { 
        id: 11, 
        title: "Քարտերով կանխիկի տրամադրում Բանկի մասնաճյուղերում POS տերմինալով USD կամ EURO", 
        desc: "2% min 2,500 AMD" 
      },
      { 
        id: 12, 
        title: "Քարտերով կանխիկի տրամադրում Բանկի մասնաճյուղերում քարտային հաշվից (AMD, USD, EURO)", 
        desc: "1,2%" 
      },
      { 
        id: 13, 
        title: "Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի ATM-ներով և POS-տերմինալներով", 
        desc: "2% min 2,500 AMD" 
      },
      { 
        id: 14, 
        title: "Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում", 
        desc: "0" 
      },
      { 
        id: 15, 
        title: "Քարտի արգելափակում", 
        desc: "0" 
      },
      { 
        id: 16, 
        title: "Քարտի գործողության ապաարգելափակում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)", 
        desc: "1,000 AMD" 
      },
      { 
        id: 17, 
        title: "Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում", 
        desc: "0" 
      },
      { 
        id: 18, 
        title: "Քարտի վերաթողարկում կորուստի, վնասվելու կամ PIN ծածկագրի կորուստի դեպքում", 
        desc: "30,000 AMD" 
      },
      { 
        id: 19, 
        title: "PIN ծածկագրի գեներացում Արթա անդամ բանկերի բանկոմատների կամ Evoca Touch/Evoca Online միջոցով", 
        desc: "0 AMD" 
      },
      { 
        id: 20, 
        title: "PIN ծածկագրի գեներացման հայտի ներկայացում Բանկի մասնաճյուղերում", 
        desc: "1,000 AMD" 
      },
      { 
        id: 21, 
        title: "Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար", 
        desc: "0" 
      },
      { 
        id: 22, 
        title: "Կանխիկի մուտքագրում «Արթա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)", 
        desc: "1%" 
      },
      { 
        id: 23, 
        title: "Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում հայկական հեռախոսահամարներին", 
        desc: "• մինչև 5,000 AMD գործարքներ՝ 20 AMD\n• ավել 5,000 AMD գործարքներ՝ 0" 
      },
      { 
        id: 24, 
        title: "Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում միջազգային հեռախոսահամարներին", 
        desc: "• մինչև 5,000 AMD գործարքներ՝ 200 AMD\n• ավել 5,000 AMD գործարքներ՝ 0" 
      },
      { 
        id: 25, 
        title: "Գերծախսի գծով տույժեր", 
        desc: "20 % տարեկան" 
      },
      { 
        id: 26, 
        title: "Քարտի առաքում ՀՀ տարածքում", 
        desc: "0 AMD" 
      },
      { 
        id: 27, 
        title: "Վճարային քարտերի միջազգային առաքում", 
        desc: "0 AMD" 
      },
      { 
        id: 28, 
        title: "Քարտից քարտ փոխանցումներ Բանկի ATM-ների միջոցով", 
        desc: "1%" 
      },
      { 
        id: 29, 
        title: "Քարտից քարտ փոխանցումներ «Արթա» համակարգի անդամ և H2H կապով աշխատող բանկերի քարտերին", 
        desc: "1.20%" 
      },
      { 
        id: 30, 
        title: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում", 
        desc: "0.5%" 
      },
      { 
        id: 31, 
        title: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արթա» անդամ և H2H կապող բանկերի քարտերին", 
        desc: "1.20%" 
      },
      { 
        id: 32, 
        title: "Կանխիկի տրամադրման առավելագույն սահմանաչափ", 
        desc: "5,000,000 AMD, 12,000 USD, 10,000 Euro" 
      },
      { 
        id: 33, 
        title: "Կանխիկացման գործարքների օրական առավելագույն քանակ", 
        desc: "20" 
      },
      { 
        id: 34, 
        title: "Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում", 
        desc: "4,900 AMD" 
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
             Wilco Card
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
                   
                       
        </main>
      </div>

      <Footer />
    </div>
  );
}