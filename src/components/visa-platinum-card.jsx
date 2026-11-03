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
    { id: 15, title: "Visa Digital", img: " https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", path: "/cards/visa-digital-card" },
    { id: 16, title: "Rio Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", path: "/cards/rio-gift-card-tariffs" },
    { id: 17, title: "Dalma Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", path: "/cards/dalma-gift-card" },
    { id: 18, title: "UnionPay Gold", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", path: "/cards/unionpay-gold" },
    { id: 19, title: "UnionPay Business Platinum", img: "   https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", path: "/cards/unionpay-platinum" },
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
              Evoca Visa Platinum
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Պրեմիում առավելություններ պրեմիում քարտով։
            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
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
                <p className="text-base md:text-lg">
                  Evocabank-ի <strong className="text-[#6400DC] font-semibold">Visa Platinum</strong> քարտը ոչ միայն վճարման գործիք է, այլև հասանելիություն դեպի մի շարք արտոնություններ՝ սկսած ճամփորդական ապահովագրությունից մինչև օդանավակայանների բիզնես սրահների հասանելիություն և 24/7 աջակցություն:
                </p>

                <h3 className="text-2xl font-bold text-gray-900 pt-4">
                  Ինչո՞ւ ընտրել Visa Platinum
                </h3>

                <ul className="space-y-4 text-gray-700 font-medium">
                  <li className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span>Պրեմիում արտոնություններ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span>Հարմարավետ ճամփորդություններ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span>Միջազգային ապահովագրություն</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span>Առավելություններ Հայաստանում և ամբողջ աշխարհում</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span>24/7 Concierge աջակցություն</span>
                  </li>
                </ul>
              </div>

              {/* Սակագներ / Ցուցիչներ (Աջ կողմում) */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
                <div className="flex justify-center space-x-2 mb-6 bg-purple-900 p-2 rounded-xl">
                  {['AMD', 'USD', 'EUR'].map((curr) => {
                    const symbols = { AMD: '֏', USD: '$', EUR: '€' };
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
                    <span className="text-2xl font-bold text-purple-700">30.000 ֏</span>
                    <span className="text-sm text-gray-600 text-right">Սպասարկման վճար</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">6 մուտք</span>
                    <span className="text-sm text-gray-600 text-right">Օդանավակայանների բիզնես սրահներ</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

       {/* 2. Սակագներ բովանդակություն (Ամբողջական Աղյուսակ) */}
{activeTab === 'tariffs' && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
    <h2 className="text-xl font-bold text-purple-900 mb-6">Visa Platinum վճարային քարտեր</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="border-b border-gray-200 text-purple-900 bg-purple-50/50">
            <th className="py-3.5 px-4 font-semibold">Մատուցվող ծառայություն</th>
            <th className="py-3.5 px-4 font-semibold text-center">Սակագին / Պայմաններ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տրամադրում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տարեկան սպասարկում</td>
            <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">30,000 ֏</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">24.02.2022թ. -ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացികളുടെ համար քարտի տարեկան սպասարկում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">90,000 ֏</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կից քարտի տրամադրում (Visa Platinum կամ Visa Classic)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Կից քարտի տարեկան սպասարկում <sup>[1]</sup></td>
            <td className="py-3.5 px-4 text-gray-900">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Visa Platinum:</span> <span className="font-semibold">15,000 ֏</span></div>
              <div className="flex justify-between"><span>Visa Classic:</span> <span className="font-semibold">0</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի չվլազող մնացորդ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">չի հաշվարկվում</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, Բանկի տարածքում քարտային հաշվից և POS տերմինալով</td>
            <td className="py-3.5 px-4 text-gray-900">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>ՀՀ դրամ՝</span> <span className="font-semibold">0.5%</span></div>
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>ԱՄՆ դոլար և եվրո՝</span> <span className="font-semibold">1%</span></div>
              <div className="flex justify-between"><span>Այլ արտարժույթ՝</span> <span className="font-semibold">1%</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1.5% min 1,500 ֏</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության կասեցում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ֏</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում կորստի, վնասելու կամ PIN ծածկագրի կորստի դեպքում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">PIN ծածկագրի գեներացման հայտ Բանկի տարածքում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">PIN ծածկագրի սահմանում Evoca Touch հավելվածով</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի քաղվածքի տրամադրում այլ ժամկետի համար</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի տարածքում գտնվող վճարային տերմինալներով</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.8 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
            <td className="py-3.5 px-4 text-gray-900">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Մինչև 5,000 ՀՀ դրամ գործարքներ՝</span> <span className="font-semibold">20 ՀՀ դրամ</span></div>
              <div className="flex justify-between"><span>5,000 ՀՀ դրամը գերազանցող գործարքներ՝</span> <span className="font-semibold">0</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գերածախսի գծով տույժեր</td>
            <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">20 % տարեկան</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ բանկոմատների միջոցով (Բանկի վճարային քարտին)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.3 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ բանկոմատների միջոցով («ԱրՔա» և H2H բանկերի քարտերին)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
            <td className="py-3.5 px-4 text-gray-900">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Նույն արժույթով քարտին՝</span> <span className="font-semibold">անվճար</span></div>
              <div className="flex justify-between"><span>Տարբեր արժույթով քարտերին՝</span> <span className="font-semibold">0.3%</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումների EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և H2H կապուղով աշխատող բանկերի վճարային քարտերին (1 գործարքի առավելագույն սահմանաչափ)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">700,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTOUCH/EvocaONLINE համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և H2H կապուղով աշխատող բանկերի վճարային քարտերին՝</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">2,500,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">500,000 ֏</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում.</td>
            <td className="py-3.5 px-4 text-gray-900">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Մինչև 5 մլն ՀՀ դրամ՝</span> <span className="font-semibold">2,900 ՀՀ դրամ</span></div>
              <div className="flex justify-between"><span>5 մլն ՀՀ դրամից ավել՝</span> <span className="font-semibold">4,900 ՀՀ դրամ</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[2]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900">5,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար</td>
            <td className="py-3.5 px-4 text-gray-900">Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ներքևի նշումներ (Footnotes) */}
    <div className="mt-6 text-xs sm:text-sm text-gray-500 space-y-2 pt-4 border-t border-gray-100">
      <p>[1] Օտարերկրյա քաղաքացիների համար գործում է նշված սակագни եռապատիկը, իսկ Visa Classic քարտի դեպքում տրամադրման պահին գործող սակագնի եռապատիկը: Լրացուցիչ քարտերը կտրամադրվեն նախապես հինգ տարվա միջնորդավճարը վճարելու պայմանով:</p>
      <p>[2] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
    </div>
  </div>
)}
<div className="mt-12 space-y-6">
  {/* Բաժնի վերնագիր */}
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Քարտի առավելությունները</h2>

  {/* 1. Ճամփորդական ապահովագրություն */}
  <div className="flex flex-col md:flex-row gap-6">
    <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
      <img src="https://www.evoca.am/images-cache/cards/1/17798007931404/83x111.png" alt="Ճամփորդական ապահովագրություն" className="w-10 h-10 object-contain" />
    </div>
    <div className="space-y-3 flex-1">
      <h3 className="text-lg font-bold text-gray-900">Ճամփորդական ապահովագրություն</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Եթե ճամփորդական ծախսերը (ավիատոմս, հյուրանոց և այլն) կատարվել են Visa Platinum քարտով, դու ապահովագրված ես՝
      </p>
      <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside marker:text-purple-600">
        <li>թռիչքի ուշացման դեպքում,</li>
        <li>ուղեբեռի ուշացման կամ կորստի դեպքում,</li>
        <li>բաց թողնված թռիչքների անհարմարություններից,</li>
        <li>գնված ապրանքների գողությունից կամ վնասից՝ մինչև 90 օր:</li>
      </ul>
    </div>
  </div>

  {/* 2. Օդանավակայանների բիզնես սրահներ */}
  <div className="flex flex-col md:flex-row gap-6 pt-8">
    <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
      <img src="https://www.evoca.am/images-cache/cards/1/17798007931409/83x111.png" alt="Օդանավակայանների բիզնես սրահներ" className="w-10 h-10 object-contain" />
    </div>
    <div className="space-y-3 flex-1">
      <h3 className="text-lg font-bold text-gray-900">Օդանավակայանների բիզնես սրահներ</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Քո Visa Platinum քարտով դու ունես՝
      </p>
      <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside marker:text-purple-600">
        <li>Տարեկան 6 անվճար մուտք աշխարհի 1200+ միջազգային օդանավակայանների սպասասրահներ:</li>
      </ul>
      <p className="text-xs sm:text-sm text-gray-500 italic mt-2">
        * Առաջարկից օգտվելու համար անհրաժեշտ է վերջին 35 օրվա ընթացքում կատարել նվազագույնը 400 ԱՄՆ դոլարի կամ համարժեք արտարժույթի անկանխիկ գործարքներ: Առաջարկը գործում է տվյալ օրացուցային տարվա համար:
      </p>
    </div>
  </div>

  {/* 3. Concierge ծառայություն */}
  <div className="flex flex-col md:flex-row gap-6 pt-8">
    <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
      <img src="https://www.evoca.am/images-cache/cards/1/17798007931413/83x111.png" alt="Concierge ծառայություն" className="w-10 h-10 object-contain" />
    </div>
    <div className="space-y-3 flex-1">
      <h3 className="text-lg font-bold text-gray-900">Concierge ծառայություն</h3>
      <p className="text-gray-600 text-sm sm:text-base font-medium">
        24/7 քո անձնական օգնականը՝ աշխարհի ցանկացած կետում:
      </p>
      <p className="text-gray-600 text-sm sm:text-base">
        Visa Platinum քարտով կարող ես օգտվել Telegram և Viber հարթակներում Chat-bot concierge ծառայությունից՝
      </p>
      <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside marker:text-purple-600">
        <li>ավիատոմսերի պատվիրում</li>
        <li>հյուրանոցների ամրագրում</li>
        <li>ռեստորանների ամրագրում</li>
        <li>ամենօրյա գնումների կազմակերպում</li>
        <li>24/7 տեղեկատվական աջակցություն</li>
      </ul>
    </div>
  </div>

  {/* 4. Էսկլյուզիվ առաջարկներ Հայաստանում և արտերկրում */}
  <div className="flex flex-col md:flex-row gap-6 pt-8">
    <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
      <img src="https://www.evoca.am/images-cache/cards/1/17798007931417/83x111.png" alt="Էսկլյուզիվ առաջարկներ" className="w-10 h-10 object-contain" />
    </div>
    <div className="space-y-4 flex-1">
      <h3 className="text-lg font-bold text-gray-900">Էսկլյուզիվ առաջարկներ Հայաստանում և արտերկրում</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Visa Platinum քարտով վճարելու դեպքում կունենաս հատուկ առաջարկներ Հայաստանում և աշխարհի տարբեր երկրներում՝
      </p>
      
      <div className="space-y-3">
        <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside marker:text-purple-600">
          <li>Հայաստանում կարող ես օգտվել Evoca Benefits նախագծից և ստանալ բացառիկ բենեֆիթներ՝ զեղչեր, քեշբեքեր և այլ առավելություններ Evoca Partners Club-ի ավելի քան 100 առաջատար գործընկեր կազմակերպություններից:</li>
        </ul>
        
        {/* Evoca Benefits կոճակ */}
        <div className="pt-1">
          <a 
            href="#evoca-benefits" 
            className="inline-block bg-[#6B21A8] hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-xl transition shadow-sm"
          >
            EVOCA BENEFITS
          </a>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside marker:text-purple-600">
          <li>Ամբողջ աշխարհում կարող ես ստանալ հատուկ զեղչեր և առաջարկներ՝ տարբեր առևտրային կետերից գնումներ կատարելիս և հյուրանոցների համարներ ամրագրելիս:</li>
        </ul>
        
        {/* Visa կոճակներ */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a 
            href="#visa-offers" 
            className="inline-block bg-[#6B21A8] hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl transition shadow-sm"
          >
            VISA OFFERS
          </a>
          <a 
            href="#visa-luxury-hotels" 
            className="inline-block bg-[#6B21A8] hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl transition shadow-sm"
          >
            VISA LUXURY HOTELS
          </a>
        </div>
      </div>

    </div>
  </div>

</div>
    
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