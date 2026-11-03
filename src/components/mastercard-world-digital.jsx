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
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/card" },
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

      {/* Վերնագրի հատվածը */}
      <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
              Mastercard World Digital
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: 
              Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:
            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="	https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" 
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
            Mastercard World քարտի սակագներ
          </button>
        </div>

        {/* 1. Քարտի մասին բովանդակություն */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong>Mastercard World Digital</strong> քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով:
                </p>
                <p>
                  Թվային քարտի միջոցով կարողես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո <span className="text-purple-600 font-medium">EvocaTOUCH</span> հավելվածում:
                </p>
                <p>
                  Թվային քարտը կարողես կից նաև Apple Pay-ին և Google Pay-ին:
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
                    <span className="text-xl font-bold text-purple-700">2.5%</span>
                    <span className="text-sm text-gray-600 text-right">Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-xl font-bold text-purple-700">1000 ֏</span>
                    <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Սակագներ բովանդակություն (Ամբողջական Աղյուսակ) */}
        {activeTab === 'tariffs' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-purple-900 mb-6">Mastercard World Digital քարտեր</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի տեսակ</td>
                    <td className="py-3.5 pl-4 text-purple-700 font-semibold">Mastercard World Digital</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի արժույթ</td>
                    <td className="py-3.5 pl-4 text-gray-900">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Mastercard World Digital քարտի սպասարկման վճար</td>
                    <td className="py-3.5 pl-4 text-gray-900 leading-relaxed">
                      Տարեկան 1000 (գործող ակցիայի շրջանակներում մինչև 01.02.2027թ. Mastercard World Digital քարտերը տրամադրվում են առանց սպասարկման վճարի՝ գործողության ողջ ժամանակահատվածի համար)<br/><br/>
                      24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար՝ միանվագ 50,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտային հաշվի չվלאզող մնացորդ</td>
                    <td className="py-3.5 pl-4 text-gray-900">Չի սահմանվում</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք <sup>[1]</sup></td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">PIN ծածկագրի թողարկում, վերաթողարկում</td>
                    <td className="py-3.5 pl-4 text-gray-900">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700 align-top">Կանխիկացում <sup>[2]</sup></td>
                    <td className="py-3.5 pl-4 space-y-3 text-gray-900">
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span>Բանկի սպասարկման կետերում՝ անմիջապես քարտային հաշվից (առանց POS տերմինալի կիրառման)</span>
                        <span className="font-semibold text-right pl-4">Համաձայն ընթացիկ հաշվի կանխիկացման սակագնի</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span>Բանկի բանկոմատներից, Բանկի POS տերմինալների միջոցով</span>
                        <span className="font-semibold text-right pl-4">ՀՀ դրամ՝ 2%<br/>ԱՄՆ դոլար՝ 2%<br/>Եվրո՝ 2%</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span>ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով</span>
                        <span className="font-semibold text-right pl-4">2.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով</span>
                        <span className="font-semibold text-right pl-4">2.5%, min 1,500 ՀՀ դրամ</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700 align-top">Կանխիկացման օրական առավելագույն սահմանաչափեր</td>
                    <td className="py-3.5 pl-4 space-y-2 text-gray-900">
                      <div><strong>Գումարային:</strong> 1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</div>
                      <div><strong>Քանակային:</strong> 10 հատ</div>
                      <div><strong>Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ:</strong> Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) <sup>[2]</sup></td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0.6%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700 align-top">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                    <td className="py-3.5 pl-4 space-y-1 text-gray-900">
                      <div>Նույն արժույթով քարտին՝ <strong>0%</strong></div>
                      <div>Տարբեր արժույթով քարտին՝ <strong>0.3%</strong></div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող և ԱրՔա համակարգի հետ H2H կապով աշխատող բանկերի վճարային քարտերին</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0.5%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի գործողության կասեցում</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">500 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտի վերաթողարկում այլ պատճառներով</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[3]</sup></td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700 align-top">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3.5 pl-4 space-y-1 text-gray-900">
                      <div>Մինչև 5,000 ՀՀ դրամ գործարքներ <sup>[4]</sup>՝ <strong>20 ՀՀ դրամ</strong></div>
                      <div>5,000 ՀՀ դրամը գերազանցող գործարքներ՝ <strong>0</strong></div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[5]</sup></td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">5,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Գերածախսի գծով տույժեր</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">20% տարեկան</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3.5 pr-4 font-medium text-gray-700">Վարկային սահմանաչափի հնարավորություն</td>
                    <td className="py-3.5 pl-4 text-gray-900 font-semibold">Առկա է՝ համաձայն Վարկավորման պայմանների և սակագների</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ներքևի նշումներ (Footnotes) */}
            <div className="mt-6 text-xs sm:text-sm text-gray-500 space-y-2 pt-4 border-t border-gray-100">
              <p>[1] Տոկոսագումարները տրամադրվում են եռամսյակային:</p>
              <p>[2] Digital քարտից կանխիկացումը կամ կանխիկի մուտքագրումը Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) հնարավոր է միայն PIN ծածկագրի առկայության դեպքում:</p>
              <p>[3] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ: Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում:</p>
              <p>[4] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
              <p>[5] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
            </div>
          </div>
        )}

        {/* Այլ քարտեր (Սլայդեր) */}
        <div className="mt-16">
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