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
             Visa Digital
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:


            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png" 
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
            Visa Digital քարտի սակագներ
          </button>
        </div>

        {/* 1. Քարտի մասին բովանդակություն */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong></strong> «Քարտս մոռացել եմ մյուս պայուսակում», «Էլի կորցրել եմ քարտս», «Քարտս մնաց բանկոմատի մեջ»․․․


                </p>
                <p>
            Ծանո՞թ արտահայտություններ են․ Evoca-ում դրանք այլևս ակտուալ չեն, քանի որ դու արդեն կարող ես ունենալ քո Evoca Digital քարտը՝ նոր հնարավորություններով, դիզայնով և ոճով։
                </p>
                <p>
                    Evoca Digital քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով։


                </p>
              </div>

              {/* Սակագներ / Ցուցիչներ */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
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
                    <span className="text-2xl font-bold text-purple-700">2%</span>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում բանկի բանկոմատներից</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">4%</span>
                    <span className="text-sm text-gray-600 text-right">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">1000 ֏</span>
                    <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">0.5%</span>
                    <span className="text-sm text-gray-600 text-right">Քեշբեք</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

       {/* 2. Սակագներ բովանդակություն (Visa Digital Աղյուսակ) */}
{activeTab === 'tariffs' && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
    <h2 className="text-xl font-bold text-purple-900 mb-6">Visa Digital քարտեր</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="border-b border-gray-200 text-purple-900 bg-purple-50/50">
            <th className="py-3.5 px-4 font-semibold">Մատուցվող ծառայություն</th>
            <th className="py-3.5 px-4 font-semibold text-center">Visa Digital քարտեր</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տեսակ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">Visa Digital[cite: 9]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի արժույթ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո[cite: 9]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտի սպասարկման վճար</td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-2">
              <div>Տարեկան՝ <strong>1,000 ՀՀ դրամ</strong>[cite: 9]</div>
              <div className="border-t border-gray-100 pt-1">
                24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար՝ <strong>Միանվագ 50,000 ՀՀ դրամ</strong>[cite: 9]
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի չնվազող մնացորդ</td>
            <td className="py-3.5 px-4 text-center text-gray-900">չի սահմանվում[cite: 9]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">
              Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք <sup>[1]</sup>[cite: 9]
            </td>
            <td className="py-3.5 px-4 text-center text-xs text-gray-900">
              ՀՀ դրամ՝ <strong>4%</strong>, ԱՄՆ դոլար՝ <strong>1%</strong>, Եվրո՝ <strong>0.5%</strong>[cite: 9]
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">
              Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back <sup>[2]</sup>[cite: 9]
            </td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-1">
                <span>Արփա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում[cite: 9]</span>
                <span className="font-semibold text-right">0.25 %, առավելագույնը՝ 5,000 ՀՀ դրամ[cite: 9]</span>
              </div>
              <div className="flex justify-between">
                <span>Ոչ Արփա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում[cite: 9]</span>
                <span className="font-semibold text-right">0.5 %, առավելագույնը՝ 5,000 ՀՀ դրամ[cite: 9]</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">PIN ծածկագրի թողարկում, վերաթողարկում</td>
            <td className="py-3.5 px-4 text-center text-gray-900">2,000 ՀՀ դրամ[cite: 9]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">
              Կանխիկացում <sup>[3]</sup>[cite: 10]
            </td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>• Բանկի սպասարկման կետերում՝ անմիջապես քարտային հաշվից (առանց POS տերմինալի կիրառման)՝ <strong>Համաձայն ընթացիկ հաշվի կանխիկացման սակագնի</strong>[cite: 10]</div>
              <div>• Բանկի բանկոմատներից, Բանկի POS տերմինալների միջոցով՝ ՀՀ դրամ՝ <strong>2%</strong>, ԱՄՆ դոլար՝ <strong>2%</strong>, Եվրո՝ <strong>2%</strong>[cite: 10]</div>
              <div>• Արփա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով՝ <strong>2.5%</strong>[cite: 10]</div>
              <div>• Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով՝ <strong>2.5%, min 1,500 ՀՀ դրամ</strong>[cite: 10]</div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Կանխիկացման օրական առավելագույն սահմանաչափեր[cite: 10]</td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>• Գումարային՝ <strong>1,000,000 ՀՀ դրամ</strong> կամ համարժեք արտարժույթ[cite: 10]</div>
              <div>• Քանակային՝ <strong>10 հատ</strong>[cite: 10]</div>
              <div>• Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ՝ <strong>Նվազագույնը 300,000 ՀՀ դրամ</strong> (կախված է ԱԳՄ-ից)[cite: 10]</div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով[cite: 10]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 10]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ[cite: 10]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">100,000 ՀՀ դրամ[cite: 10]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի և Արփա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.6 %[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում[cite: 11]</td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>Նույն արժույթով քարտին՝ <strong>0%</strong>[cite: 11]</div>
              <div>Տարբեր արժույթով քարտին՝ <strong>0.3%</strong>[cite: 11]</div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Արփա անդամ հանդիսացող և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0.5%[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության կասեցում[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)[cite: 11]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">500 ՀՀ դրամ[cite: 11]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում այլ պատճառներով[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">2,000 ՀՀ դրամ[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[4]</sup>[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700 align-top">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում[cite: 12]</td>
            <td className="py-3.5 px-4 text-xs text-gray-900 space-y-1">
              <div>Մինչև 5,000 ՀՀ դրամ գործարքներ <sup>[5]</sup>՝ <strong>20 ՀՀ դրամ</strong>[cite: 12]</div>
              <div>5,000 ՀՀ դրամը գերազանցող գործարքներ՝ <strong>0</strong>[cite: 12]</div>
            </td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">0[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[6]</sup>[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">5,000 ՀՀ դրամ[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Գերածախսի գծով տույժեր[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">20% տարեկան[cite: 12]</td>
          </tr>
          <tr>
            <td className="py-3.5 px-4 font-medium text-gray-700">Վարկային սահմանաչափի հնարավորություն[cite: 12]</td>
            <td className="py-3.5 px-4 text-center text-gray-900">Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների[cite: 12]</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ներքևի նշումներ (Footnotes) */}
    <div className="mt-6 text-xs sm:text-sm text-gray-500 space-y-2 pt-4 border-t border-gray-100">
      <p>[1] Տոկոսագումարները տրամադրվում են եռամսյակային:[cite: 13]</p>
      <p>[2] Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:[cite: 13]</p>
      <p>[3] Digital քարտից կանխիկացումը կամ կանխիկի մուտքագրումը Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) հնարավոր է միայն PIN ծածկագրի առկայության դեպքում:[cite: 13]</p>
      <p>[4] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:[cite: 13]</p>
      <p>Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ[cite: 13]</p>
      <p>[5] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:[cite: 13]</p>
      <p>[6] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:[cite: 13]</p>
    </div>
  </div>
)}
     {/* Ներածություն */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="text-[#6B21A8]">Evoca Digital</span> քարտ
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Evoca Digital քարտը Visa միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող եք իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո EvocaTOUCH հավելվածում։
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Թվային քարտը կարող եք կցել նաև Apple Pay-ին և Google Pay-ին։
          </p>
        </div>

        {/* Առաջարկի մասին */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Իսկ գիտե՞ս մեր առաջարկի մասին։</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Պատվիրի՛ր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում։
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Ի դեպ, հավելվածում դու կգտնես Evoca Digital քարտի 5 դիզայն։ Կարող եք ընտրել քո սիրելի դիզայնը և փոխել այն երբ ցանկանաս։ Իսկ շուտով քեզ սպասվում են թվային քարտի դիզայնի շատ-շատ նոր տարբերակներ։
          </p>
        </div>

        {/* Ինչպես պատվիրել */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#6B21A8]">Ինչպե՞ս պատվիրել Evoca Digital քարտ․</h3>
          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 1.</span>
              <p>Անհրաժեշտ է մուտք գործել EvocaTouch հավելված և անցնել «Վճարային քարտերի» բաժին</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 2.</span>
              <p>Սեղմել ամենավերևի Աջ անկյունում շրջանակի մեջ գտնվող «+» նշանը</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 3.</span>
              <p>Ընտրել «Թվային քարտի բացման հայտ» հրահանգը</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 4.</span>
              <p>Ընտրել թվային քարտի դիզայնը և հաստատել այն</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 5.</span>
              <p>Ընտրել թվային քարտի արժույթը</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 6.</span>
              <p>Նբեռնել և կարդալ թվային քարտի պայմանները, որից հետո պայմաններին համաձայն լինելու վերաբերյալ կատարել համապատասխան նշում</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-[#6B21A8] shrink-0">Քայլ 7.</span>
              <p>Սեղմել «Պատվիրել իմ թվային քարտը» հրահանգը</p>
            </div>
          </div>
        </div>

        {/* Ինչպես իմանալ տվյալները */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#6B21A8]">Ինչպե՞ս իմանալ պատվիրված թվային քարտի տվյալները․</h3>
          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <span className="font-bold text-[#6B21A8] text-base shrink-0">1.</span>
              <p>Քարտի համարը իմանալու համար սեղմել շրջանակի մեջ գտնվող «i» / «Մանրամասներ» նշանի վրա</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-[#6B21A8] text-base shrink-0">2.</span>
              <p>Սեղմել քարտի համարի աջ մասում գտնվող աչքի նշանի վրա</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-[#6B21A8] text-base shrink-0">3.</span>
              <p>CVV-ն իմանալու համար սեղմել թվային քարտի պատկերի CVV հատվածի աջ մասում գտնվող աչքի նշանի վրա և մուտքագրել հավելվածի գաղտնաբառը</p>
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