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
        title: "Գրավադրված տրանսպորտային միջոցի տեխնիկական անձնագրում փոփոխություն կատարելու համաձայնության տրամադրում (պետհամարանիշի, շարժիչի հզորության, գույնի)", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 2, 
        title: "Գրավադրված տրանսպորտային միջոցի պետական սահմանի հատման համաձայնության տրամադրում", 
        desc: "• Ստանդարտ՝ 10,000 ՀՀ դրամ[cite: 17]\n• Արագացված՝ 15,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 3, 
        title: "Գրավադրված տրանսպորտային միջոցը վարձակալության հանձնելու թույլտվության տրամադրում", 
        desc: "• Ստանդարտ՝ 15,000 ՀՀ դրամ[cite: 17]\n• Արագացված՝ 20,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 4, 
        title: "Ապահովման միջոց հանդիսացող գույքը օտարելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 5, 
        title: "Ապահովման միջոց հանդիսացող գույքը վաճառելու և հաջորդող գրավով գնելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 6, 
        title: "Ապահովման միջոց հանդիսացող գույքը նվիրատվությամբ օտարելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 7, 
        title: "Ապահովման միջոց հանդիսացող գույքի բաժնեմասը նվիրատվությամբ օտարելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 8, 
        title: "Ապահովման միջոց հանդիսացող անշարժ գույքին նոր հասցե և/կամ հասցեի փոփոխություն կատարելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 9, 
        title: "Ապահովման միջոց հանդիսացող անշարժ գույքի առանձնացման և/կամ միավորման վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 10, 
        title: "Գրավադրված անշարժ գույքի հասցեում ընտանիքի անդամի և/կամ երրորդ անձի հաշվառման կամ հաշվառումից հանելու վերաբերյալ համաձայնություն", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 11, 
        title: "Բանկում գրավի առարկա հանդիսացող գույքը կամ դրա մի մասը վարձակալությամբ կամ անհատույց օգտագործման տրամադրելու համաձայնություն", 
        desc: "• Ստանդարտ՝ 15,000 ՀՀ դրամ[cite: 17]\n• Արագացված՝ 20,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 12, 
        title: "Գրությունում՝ ամբողջությամբ կատարված վարկային պարտավորությունների մասով գրավի իրավունքի դադարեցման վերաբերյալ (եթե հաճախորդը ցանկանում է արագացված կարգով)", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 13, 
        title: "Երաշխավորի փոփոխություն", 
        desc: "15,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 14, 
        title: "Համավարկառուի, գրավատուի փոփոխություն", 
        desc: "40,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 15, 
        title: "Գործող վարկի պայմանների վերանայման հայտի ներկայացման վճար (Ֆիզիկական անձ)", 
        desc: "5,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 16, 
        title: "Գործող վարկի պայմանների վերանայման հայտի ներկայացման վճար (Իրավաբանական անձ)", 
        desc: "10,000 ՀՀ դրամ[cite: 17]" 
      },
      { 
        id: 17, 
        title: "Վարկի վերաբերյալ տեղեկանքի տրամադրում", 
        desc: "2,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 18, 
        title: "Լիզինգի առարկայի տեխանձնագրի, ինչպես նաև սեփականության վկայականի փոփոխության կամ կորստի դեպքում համաձայնության տրամադրման վճար", 
        desc: "10,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 19, 
        title: "Լիզինգի առարկա հանդիսացող տրանսպորտային միջոցի պետական սահմանի հատման վերաբերյալ համաձայնության տրամադրման վճար", 
        desc: "10,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 20, 
        title: "Լիզինգի պայմանների վերանայում", 
        desc: "15,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 21, 
        title: "Լիզինգի սպասարկման ընթացքում երաշխավորությունների փոփոխության դեպքում գանձվող վճար", 
        desc: "15,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 22, 
        title: "Լիզինգի առարկա հանդիսացող տրանսպորտային միջոցը ենթավարձակալությամբ տրամադրելու համաձայնության վճար", 
        desc: "50,000 ՀՀ դրամ[cite: 18]" 
      },
      { 
        id: 23, 
        title: "Բանկի աշխատակցի կողմից որպես լիազորված անձ ՃՈ-ում տրանսպորտային միջոցի հաշվառման և/կամ սեփականության փոխանցման գործընթացի իրականացում", 
        desc: "50,000 ՀՀ դրամ[cite: 18]" 
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
          Գրությունների, թույլտվությունների և համաձայնությունների տրամադրում

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