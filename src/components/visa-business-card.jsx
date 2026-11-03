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
             Visa Business

            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
               Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։


            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png"
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
          <button
            onClick={() => setActiveTab('tips')}
            className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'tips'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Օգտակար խորհուրդներ
          </button>
          <button
            onClick={() => setActiveTab('warning')}
            className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'warning'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Զգուշացում
          </button>
        </div>
{/* 1. Քարտի մասին բովանդակություն */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներին <strong>Evocabank</strong>-ն առաջարկում է <span className="text-purple-600 font-medium">Visa Business</span> վճարային քարտեր, որոնք հնարավորություն են տալիս առանց Բանկ այցելելու տնօրինել կազմակերպության դրամական միջոցները:
                </p>
                <p>
                  <span className="text-purple-600 font-medium">Visa Business </span>քարտը Visa International միջազգային վճարահաշվարկային համակարգի չիպային քարտ է: Այն հարմարավետ գործիք է Ձեր կազմակերպության ծախսերն արդյունավետ կառավարելու համար: Դուք կարող եք առանց Բանկ այցելելու, բանկոմատի միջոցով <span className="text-purple-600 font-medium">Visa Business </span>քարտից կանխիկացնել ընկերության դրամական միջոցները, կատարել օնլայն փոխանցումներ և վճարումներ Հայաստանի մաքսակետերում և պետական այլ մարմիններում:
                </p>
                <p>
                  <span className="text-purple-600 font-medium">Evoca Visa Business </span>քարտերն օժտված են դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Սրանք միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտեր են, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս՝ քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում:
                </p>
              </div>

              {/* Սակագներ / Ցուցիչներ */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-center space-x-2 mb-6 bg-purple-900 p-2 rounded-xl">
                  {['AMD', 'USD', 'EUR', 'RUB'].map((curr) => {
                    const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };
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
                    <span className="text-2xl font-bold text-purple-700">0.2%</span>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում բանկի կանխիկացման կետերում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">0.8%</span>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="text-right">
                      <span className="block text-xs text-gray-400">min 1,500 ֏</span>
                      <span className="text-xl font-bold text-purple-700">1%</span>
                    </div>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">0.2%</span>
                    <span className="text-sm text-gray-600 text-right">Բանկի տարածքում քարտային հաշվից կանխիկի տրամադրում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">10,000 ֏</span>
                    <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">30,000 ֏</span>
                    <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      {/* 2. Սակագներ բովանդակություն (Ամբողջական Աղյուսակ) */}
{activeTab === 'tariffs' && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
    <h2 className="text-xl font-bold text-purple-900 mb-6">Վճարային քարտեր<sup>[1]</sup></h2>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="border-b border-gray-200 text-purple-900 bg-purple-50/50">
            <th className="py-3.5 px-4 font-semibold">Մատուցվող ծառայություններ</th>
            <th className="py-3.5 px-4 font-semibold text-center">Mastercard Standard / Visa Classic</th>
            <th className="py-3.5 px-4 font-semibold text-center">MasterCard Gold / Visa Gold<sup>[2]</sup></th>
            <th className="py-3.5 px-4 font-semibold text-center">Visa Business</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տրամադրում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի սպասարկում</td>
            <td className="py-3.5 px-4 text-center text-gray-900" colSpan="3">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Տարեկան (Mastercard/Visa Classic):</span> <span className="font-semibold">5,000 ՀՀ դրամ</span></div>
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Տարեկան (Mastercard Gold / Visa Gold):</span> <span className="font-semibold">15,000 ՀՀ դրամ</span></div>
              <div className="flex justify-between"><span>Տարեկան (Visa Business):</span> <span className="font-semibold">10,000 ՀՀ դրամ</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Շտապ թողարկում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">-</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կից քարտի տրամադրում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կից քարտի տարեկան սպասարկում<sup>[4]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900">3,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">7,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի չվերջացող մնացորդ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան % (մինչև 5 մլն ՀՀ դրամ / արտարժույթ)</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">0 %</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">0 %</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">0 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան % (5 մլն. ՀՀ դրամ և ավել)</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">1 %</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">1 %</td>
            <td className="py-3.5 px-4 text-center font-semibold text-gray-900">1 %</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով<sup>[5]</sup> (ՀՀ դրամ)</td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>• Ամսական մինչև 1,000,000 ՀՀ դրամ՝ <strong>Անվճար</strong></div>
              <div>• 1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ <strong>0.2%</strong></div>
              <div>• POS տերմինալով՝ <strong>0.2%</strong></div>
            </td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>• Mastercard Gold՝ ամսական մինչև 2,000,000 ՀՀ դրամ՝ <strong>Անվճար</strong>, գերազանցողի դեպքում՝ <strong>0.2%</strong></div>
              <div>• POS տերմինալով՝ <strong>0.2%</strong></div>
              <div>• Visa Gold՝ <strong>0.2%</strong></div>
            </td>
            <td className="py-3.5 px-4 text-center text-xs text-gray-900">0.2%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով (ԱՄՆ դոլար և եվրո / այլ արտարժույթ)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5% / 0.3%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5% / 0.3%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5% / 0.3%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ ՀՀ բանկերի ATM-ներով և POS-տերմինալներով<sup>[6]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.8%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.8%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.8%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» անդամ չհանդիսացող բանկերի ATM/POS-տերմինալներով<sup>[7]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900">1% min 1,500 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1% min 1,500 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1% min 1,500 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Առևտրի կետերում Բանկի և այլ բանկերի POS-տերմինալներով անկանխիկ գործարքներ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության կասեցում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN/CVV դեպքում)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում ժամկետը ավարտվելիս</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում կորստի, վնասման կամ PIN-ի կորստի դեպքում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">3,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">10,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">5,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">PIN կոդի գեներացման հայտ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup>[8]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ բանկերի ATM-ով (CASH-IN)</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.6%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.6%</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.6%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">SMS հաղորդագրությունների ստացում</td>
            <td className="py-3.5 px-4 text-gray-900" colSpan="3">
              <div className="flex justify-between border-b border-gray-100 pb-1 mb-1"><span>Մինչև 5,000 ՀՀ դրամ գործարքներ<sup>[9]</sup>՝</span> <span className="font-semibold">20 ՀՀ դրամ</span></div>
              <div className="flex justify-between"><span>5,000 ՀՀ դրամը գերազանցող գործարքներ՝</span> <span className="font-semibold">0</span></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գերածախսի գծով տույժեր</td>
            <td className="py-3.5 px-4 text-center text-gray-900 font-semibold" colSpan="3">20% տարեկան</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ Բանկի վճարային քարտերին (Բանկոմատներով)<sup>[10]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900" colSpan="3">0.3%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ «ԱրՔա» համակարգի և H2H կապուղով աշխատող բանկերի քարտերին<sup>[11]</sup></td>
            <td className="py-3.5 px-4 text-center text-gray-900" colSpan="3">0.5%</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline-ով Բանկի ներսում</td>
            <td className="py-3.5 px-4 text-gray-900" colSpan="3">
              <div>Նույն արժույթով քարտին՝ <strong>0%</strong></div>
              <div>Տարբեր արժույթով քարտին՝ <strong>0.3%</strong></div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար</td>
            <td className="py-3.5 px-4 text-center text-gray-900" colSpan="3">2,000 ՀՀ դրամ</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար</td>
            <td className="py-3.5 px-4 text-center text-gray-900" colSpan="3">1,000 ՀՀ դրամ</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ներքևի նշումներ (Footnotes) */}
    <div className="mt-6 text-xs sm:text-sm text-gray-500 space-y-2 pt-4 border-t border-gray-100">
      <p>[1] Mastercard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը՝ իրավաբանական անձանց:</p>
      <p>[2] Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:</p>
      <p>[3] Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:</p>
      <p>[4] Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:</p>
      <p>[5], [6], [7] Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի առկայությամբ քարտերի համար գործում են հատուկ սակագներ:</p>
      <p>[8] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
      <p>[9] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
      <p>[12] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
    </div>
  </div>
)}
        {/* 3. Օգտակար խորհուրդներ բովանդակություն */}
{activeTab === 'tips' && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-8">
    
    {/* Բաժին 1. Քարտային վճարումներ */}
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել.</h2>
      
      <ul className="space-y-3 text-gray-700 text-sm sm:text-base list-disc list-inside leading-relaxed">
        <li>Քարտով կարող ẹք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը:</li>
        <li>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստիացեք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին:</li>
        <li>Քարտով վճարելիս միշտ պահեք քարտը ձեր տեսադաշտում:</li>
        <li>Եթե հրաժարվում ẹք գնումից, ապա պահանջեք չեղյալ համարել (VOID) ձեր վճարումը և պահեք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստաումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել:</li>
      </ul>
    </div>

    <hr className="border-gray-100" />

    {/* Բաժին 2. Խորհուրդներ արտերկիր մեկնողներին */}
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Խորհուրդներ արտերկիր մեկնողներին.</h2>
      <p className="text-sm font-semibold text-gray-600">Նախքան մեկնելը՝</p>
      
      <ul className="space-y-3 text-gray-700 text-sm sm:text-base list-disc list-inside leading-relaxed">
        <li>Ստուգե՛ք ձեր քարտի գործողության ժամկետի ավարտը (expiry date):</li>
        <li>Ստուգե՛ք Ձեր հաշվին առկա դրամական միջոցների մնացորդը:</li>
        <li>Գրի՛ առեք ձեր քարտի 16-նիշանոց համարը և բոլոր այն հեռախոսահամարները, որոնցով կարող ẹք զանգահարել մեզ արտերկրում ձեր քարտի կորստի կամ գողության դեպքում:</li>
        <li>Ճշտե՛ք մեզնից քարտով կատարվող վճարային սահմանաչափերի վերաբերյալ անհրաժեշտ տեղեկատվությունը: Նշված սահմանաչափերը ձեզ չբավարարելու դեպքում կարող ẹք դիմել մեզ՝ դրանք ավելացնելու նպատակով (սահմանաչափերի գերազանցման հետևանքով գործարքի մերժումից խուսափելու համար):</li>
      </ul>

      {/* Նշում */}
      <div className="bg-purple-50/60 rounded-xl p-4 text-xs sm:text-sm text-gray-600 mt-4 space-y-2">
        <p><strong>Նշում.</strong> Պահպանե՛ք քարտով կատարված գործարքների անդորրագրերը և վերադառնալուց հետո համեմատե՛ք դրանք քաղվածքի գործարքների հետ: Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացում ծառայությունը (դուք կարող ẹք հրաժարվել նշված ծառայությունից՝ ձեր դիմումի համաձայն): Օնլայն վճարումներ իրականացնելիս կարող ẹք օգտվել 3D Secure ծառայությունից:</p>
      </div>
    </div>

    <hr className="border-gray-100" />

    {/* Բաժին 3. Արտարժույթով գործառույթներ */}
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Արտարժույթով գործառույթներ կատարելիս անհրաժեշտ է իմանալ.</h2>
      
      <ul className="space-y-3 text-gray-700 text-sm sm:text-base list-disc list-inside leading-relaxed">
        <li>Քարտային գործառույթների իրականացման ժամանակ արտարժույթի փոխարժեքները կարող են տարբերվել, որի համար մենք պատասխանատվություն չենք կրում:</li>
        <li>«Արմենիան Քարդ» վճարահաշվարկային համակարգի անդամ բանկերի սպասարկման կետերում և բանկոմատներում քարտային հաշվի արժույթից տարբերվող արժույթով գործարքներ կատարելիս որպես փոխարժեք կիրառվում է «Արմենիան Քարդ»-ի կողմից գործարքի հաշվանցման օրվա դրությամբ տվյալ արտարժույթի համար սահմանված մեր փոխարժեքը:</li>
        <li>Այլ բանկերի սպասարկման կետերում և բանկոմատներում գործարքներ կատարելիս որպես փոխարժեք կիրառվում է Visa վճարահաշվարկային համակարգի կողմից գործարքի հաշվանցման օրվա դրությամբ տվյալ արտարժույթի համար սահմանված մեր փոխարժեքը:</li>
      </ul>
    </div>

  </div>
)}
        {/* 4. Զգուշացում բովանդակություն */}
{activeTab === 'warning' && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
    <h2 className="text-xl font-bold text-purple-900 mb-6">Զգուշացում</h2>
    
    <ul className="space-y-4 text-gray-700 text-sm sm:text-base list-disc list-inside leading-relaxed">
      <li>
        Ապահովե՛ք ձեր <strong>PIN ծածկագրի</strong> գաղտնությունը (այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց): PIN ծածկագրով կատարված բոլոր գործառույթների պատասխանատվությունը կրում ẹք դուք: Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չարտոնված օգտագործման համար:
      </li>
      <li>
        Քարտի կորստի կամ գողության դեպքում անհապաղ զանգահարե՛ք մեզ <span className="font-semibold text-purple-900">(+374 10) 605555, 7777</span> հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգի <span className="font-semibold text-purple-900">(+374 10) 592222</span> հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը: Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի:
      </li>
      <li>
        Քարտի կորստի կամ գողության մասին մեզ տեղեկացնելու հետաձգումը կարող է հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը:
      </li>
      <li>
        Մենք պատասխանատվություն չենք կրում ձեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում:
      </li>
      <li>
        Դուք պատասխանատվություն ẹք կրում քարտով կատարված բոլոր գործառույթների համար մինչև այն պահը, երբ տեղեկացնում ẹք մեզ կորստի կամ գողություն պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին:
      </li>
    </ul>
  </div>
)}

        {/* Բաններ նկար՝ վրան գրված տեքստով (Տեղադրված է սլայդերի վերևում) */}
        <div className="mt-16 mb-12 relative rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/1613132858305/1920x527.jpg" 
            alt="Evoca Banner" 
            className="w-full h-auto object-cover max-h-[400px] brightness-90"
          />
          {/* Վրան գրված տեքստը */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 bg-gradient-to-r from-black/60 via-black/30 to-transparent text-white">
            
            <p className="text-base sm:text-lg max-w-xl text-gray-200 leading-relaxed">
Գործուղման մեկնելիս Ձեր Visa Business քարտի միջոցները հասանելի կլինեն աշխարհի ցանկացած կետում, ցանկացած ժամի

            </p>
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