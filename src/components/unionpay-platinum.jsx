import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MastercardWorldDigital() {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [activeTab, setActiveTab] = useState('about');
  const [activeCurrency, setActiveCurrency] = useState('AMD');

  const cards = [
    { id: 1, title: "Arca Union Pay Co-badge", img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png", path: "/cards/arca-union-pay" },
    { id: 2, title: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", path: "/cards/gift-card" },
    { id: 3, title: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", path: "/cards/visa-infinite" },
    { id: 4, title: "Mastercard World Digital", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", path: "/cards/mastercard-world-digital" },
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/travel-card" },
    { id: 6, title: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", path: "/cards/visa-classic" },
    { id: 7, title: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", path: "/cards/mastercard-standard" },
    { id: 8, title: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", path: "/cards/visa-gold" },
    { id: 9, title: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", path: "/cards/mastercard-gold" },
    { id: 10, title: "MyLer Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", path: "/cards/myler-gift-card" },
    { id: 11, title: "4U.am Gift card", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", path: "/cards/4u-gift" },
    { id: 12, title: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", path: "/cards/arca-classic" },
    { id: 13, title: "Wilco Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png", path: "/cards/wilco-visa-infinite" },
    { id: 14, title: "Evoca Visa Platinum", img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png", path: "/cards/visa-platinum-card" },
    { id: 15, title: "Visa Digital", img: "	https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", path: "/cards/visa-digital-card" },
    { id: 16, title: "Rio Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", path: "/cards/rio-gift-card-tariffs" },
    { id: 17, title: "Dalma Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", path: "/cards/dalma-gift-card" },
    { id: 18, title: "UnionPay Gold", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", path: "/cards/unionpay-gold" },
    { id: 19, title: "UnionPay Business Platinum", img: "	https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", path: "/cards/unionpay-platinum" },
   { id: 20, title: "Visa Business", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png", path: "/cards/visa-business-card" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      {/* 1. Վերին մանուշակագույն ենթամենյու (#6400DC) */}
      <div className="bg-[#6400DC] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-1 overflow-x-auto text-sm">
            <a href="#" className="bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտեր</a>
            <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտերի տրամադրում և սպասարկում</a>
            <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Սոցիալական ապահովության վճարային քարտեր</a>
            <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Evoca Benefits</a>
          </nav>
        </div>
      </div>

      {/* Վերնագրի հատվածը */}
      <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            UnionPay Business Platinum

            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:


            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
              alt="Mastercard World Digital Card" 
              className="w-full drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Հետադարձ կապ և հղումներ (Breadcrumbs) */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full transition-colors shadow-sm border border-gray-200 cursor-pointer"
        >
          ← Վերադառնալ
        </button>

        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span>Քարտեր</span>
          <span>›</span>
          <span>Քարտեր</span>
          <span>›</span>
          <span>Mastercard</span>
          <span>›</span>
          <span className="text-purple-700 font-medium">Mastercard World Digital</span>
        </div>
      </div>

      {/* Հիմնական բովանդակություն և ներդիրներ (Tabs) */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Ներդիրների կոճակներ */}
        <div className="flex border-b border-gray-200 mb-8 space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'about'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab('tariffs')}
            className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'tariffs'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>
{/* 1. Քարտի մասին բովանդակություն */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Բիզնեսների համար կարևոր է ունենալ ժամանակակից լուծումով ֆինանսական գործիք, որի միջոցով Ձեր բոլոր վճարումները կլինեն ակնթարթորեն՝ միաժամանակ ապահովելով դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ:
                </p>
                <p>
                  Այս ամենն իրականացնելու համար Ձեզ միայն պակասում է Evocabank-ի նոր <span className="text-purple-600 font-medium">UnionPay Business Platinum</span> քարտը:
                </p>
                <p>
                  Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներն իրենց <span className="text-purple-600 font-medium">EvocaTOUCH</span> հավելվածով կարող են 24/7 հասանելիությամբ կառավարել կազմակերպության դրամական միջոցները՝ առանց Բանկ այցելելու անհրաժեշտության: Քարտերով հնարավոր է կատարել անհպում վճարումներ աշխարհի ցանկացած կետում:
                </p>
                <p className="italic text-gray-600">
                  Բացահայտիր քո քարտի բենեֆիթները՝ բացառիկ զեղչեր և առաջարկներ աշխարհի տարբեր կետերում: Մանրամասներին ծանոթացիր <a href="#" className="text-purple-600 underline font-medium">այստեղ</a>:
                </p>
              </div>

              {/* Սակագներ / Ցուցիչներ */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-center space-x-2 mb-6 bg-purple-900 p-2 rounded-xl">
                  {['AMD', 'USD', 'EUR'].map((curr) => {
                    const symbols = { AMD: 'Դ', USD: '$', EUR: '€' };
                    return (
                      <button
                        key={curr}
                        onClick={() => setActiveCurrency(curr)}
                        className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all cursor-pointer ${
                          activeCurrency === curr ? 'bg-white text-purple-900 shadow-md' : 'text-white hover:bg-purple-800'
                        }`}
                      >
                        {symbols[curr]}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-2xl font-bold text-purple-700">0.5%</span>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">5 տարի</span>
                    <span className="text-sm text-gray-600 text-right">Քարտի ժամկետ</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">15000 Դ</span>
                    <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկման վճար</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">Ամենուր</span>
                    <span className="text-sm text-gray-600 text-right">Կիրառություն</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
{/* 2. Սակագներ բովանդակություն (Ամբողջական Աղյուսակ) */}
        {activeTab === 'tariffs' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-purple-900 mb-6">Union Pay International վճարային համակարգի թողարկման և սպասարկման սակագներ</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 text-purple-900 bg-purple-50/50">
                    <th className="py-3.5 px-4 font-semibold">Մատուցվող ծառայություններ</th>
                    <th className="py-3.5 px-4 font-semibold text-center">UPI GOLD</th>
                    <th className="py-3.5 px-4 font-semibold text-center">UPI BUSINESS PLATINUM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի արժույթ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ժամկետ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">5 տարի</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">5 տարի</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տրամադրում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տարեկան սպասարկում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">15,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">15,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">
                      24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար<br />
                      UPI Business Platinum քարտի դեպքում` օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերի և իրավաբանական անձանց քարտի տարեկան սպասարկում:
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-900">30,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">30,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կից քարտի տրամադրում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կից քարտի տարեկան սպասարկում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">7,500 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">7,500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Չի կիրառվում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Չի կիրառվում</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0%</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով</td>
                    <td className="py-3.5 px-4 text-gray-900 space-y-1 text-xs">
                      <div>• ՀՀ դրամ` Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ <strong>Անվճար</strong></div>
                      <div>• ՀՀ դրամ` 2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ <strong>0.2%</strong></div>
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-900"><strong>0.5%</strong></td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում Բանկի POS-տերմինալներով և քարտային հաշվից</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1%</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1%</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի ATM-ներով և POS-տերմինալներով</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1.5% min 2,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1.5% min 2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">2,000,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">10 հատ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">10 հատ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900" colSpan="2">Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության կասեցում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">7,500 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">7,500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">PIN ծածկագրի գեներացման հայտ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-In)</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0.70%</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0.70%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 space-y-1">
                      <div className="flex justify-between gap-2 border-b border-gray-100 pb-1 mb-1"><span>Մինչև 5,000 ՀՀ դրամ գործարքներ՝</span> <strong>20 ՀՀ դրամ</strong></div>
                      <div className="flex justify-between gap-2"><span>5,000 ՀՀ դրամը գերազանցող գործարքներ՝</span> <strong>0</strong></div>
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-900 space-y-1">
                      <div className="flex justify-between gap-2 border-b border-gray-100 pb-1 mb-1"><span>Մինչև 5,000 ՀՀ դրամ գործարքներ՝</span> <strong>20 ՀՀ դրամ</strong></div>
                      <div className="flex justify-between gap-2"><span>5,000 ՀՀ դրամը գերազանցող գործարքներ՝</span> <strong>0</strong></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700" colSpan="3"><strong>Քարտից քարտ փոխանցումներ</strong></td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ բանկոմատների միջոցով</td>
                    <td className="py-3.5 px-4 text-gray-900 text-xs space-y-1">
                      <div>• Բանկի հաճախորդների օգտին՝ <strong>0.3%</strong></div>
                      <div>• «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին՝ <strong>0.5%</strong></div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-900 text-xs space-y-1">
                      <div>• Բանկի հաճախորդների օգտին՝ <strong>0.3%</strong></div>
                      <div>• «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին՝ <strong>0.5%</strong></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                    <td className="py-3.5 px-4 text-gray-900 text-xs space-y-1">
                      <div>• Նույն արժույթով քարտին՝ <strong>0%</strong></div>
                      <div>• Տարբեր արժույթով քարտին՝ <strong>0.3%</strong></div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-900 text-xs space-y-1">
                      <div>• Նույն արժույթով քարտին՝ <strong>0%</strong></div>
                      <div>• Տարբեր արժույթով քարտին՝ <strong>0.3%</strong></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող Բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին</td>
                    <td className="py-3.5 px-4 text-center text-gray-900" colSpan="2"><strong>0.5%</strong></td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">ՀՀ այլ բանկերի վճարային քարտերին</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0.50%</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">0.50%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացման սահմանաչափի փոփոխություն մինչև 5 մլն ՀՀ դրամի դեպքում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">2,900 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">2,900 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">4,900 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">4,900 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտով կատարված գործարքների բողոքարկման հայտ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">5,000 ՀՀ դրամ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">5,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Այլ քարտեր (Սլայդեր) */}
        <div className="mt-8">
          <div className="relative">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Այլ քարտեր</h2>
              <div className="flex space-x-2">
                <button 
                  ref={prevRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❮
                </button>
                <button 
                  ref={nextRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❯
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="pb-4"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <Link 
                    to={card.path} 
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
                  >
                    <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {card.title}
                    </h3>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}