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
            Rio Gift Card
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                Ամեն ինչ մեկ նվեր քարտում
            </p>
          </div>
          <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
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
    Տրամադրման պայմանները
  </button>
  <button
    onClick={() => setActiveTab('service')}
    className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
      activeTab === 'service'
        ? 'border-purple-600 text-purple-700'
        : 'border-transparent text-gray-500 hover:text-gray-800'
    }`}
  >
    Սպասարկման պայմանները
  </button>

          
        </div>

        {/* 1. Քարտի մասին բովանդակություն */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-purple-600 font-medium">Evocabank-</strong> ը Rio Mall-ի հետ համատեղ թողարկել է <span className="text-purple-600 font-medium">Rio Gift Card-ը։ </span>
                </p>
                <p>
                    Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը։

Նվեր քարտը հնարավորություն է տալիս գնումներ կատարել Rio Mall-ի խանութ սրահներից և ժամանցի բոլոր կետերից: Այն նախատեսված է բացառապես անկանխիկ տարբերակով գնումներ կատարելու համար քարտի ձեռքբերման օրվանից սկսած՝ 6 ամսվա ընթացքում։

Վստահ ենք, արդեն որոշել ես՝ ում նվիրել Rio Gift Card-ը:
                </p>
                <p>
                  Մնում է միայն որոշել քարտի գումարի չափը <span className="text-purple-600 font-medium">10,000-1,000,000 ՀՀ դրամի </span>սահմաններում։     Նվեր քարտը կարելի է ձեռք բերել Rio Mall-ի ինֆոկետից անձնագրով կամ ID քարտով: Քարտը տրամադրվում է հենց տեղում՝ հատուկ նորաոճ փաթեթավորմամբ։
                </p>
              </div>

            </div>
          </div>
        )}{/* 2. Սակագներ բովանդակություն (Ամբողջական Աղյուսակ) */}
        {activeTab === 'tariffs' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-purple-900 mb-6">ArCa Gift card</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 text-purple-900 bg-purple-50/50">
                    <th className="py-3.5 px-4 font-semibold">Մատուցվող ծառայություն</th>
                    <th className="py-3.5 px-4 font-semibold text-center">ArCa Gift card</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի տեսակ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Arca Gift card</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի արժույթ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Նվեր քարտի համալրման գումար</td>
                    <td className="py-3.5 px-4 text-center text-xs text-gray-900 space-y-1">
                      <div>• Նվազագույնը՝ <strong>10,000 ՀՀ դրամ</strong></div>
                      <div>• Առավելագույնը՝ <strong>1,000,000 ՀՀ դրամ</strong></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության ժամկետ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Քարտի թողարկման պահից 6 ամիս</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Rio Gift քարտով կատարվող գործարքներ</td>
                    <td className="py-3.5 px-4 text-center text-xs text-gray-900">
                      «ՌԻՈ» ՓԲԸ կազմակերպության տարածքում տեղադրված POS-տերմինալներով միայն անկանխիկ վճարումներ կատարելու նպատակով: Քարտը համարվում է վավերական Քարտի դիմերեսին նշված ժամկետի սահմաններում:
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Կանխիկացում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Չի թույլատրվում</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Չի սահմանվում</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-gray-900">0%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի գործողության կասեցում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտի վերաթողարկում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">Չի վերաթողարկվում</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Մնացորդի տեղափոխության միջնորդավճար <sup>[1]</sup></td>
                    <td className="py-3.5 px-4 text-center text-gray-900">4,900 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">PIN ծածկագրի գեներացման հայտ</td>
                    <td className="py-3.5 px-4 text-center text-gray-900">1,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Գերածախսի գծով տույժեր</td>
                    <td className="py-3.5 px-4 text-center text-gray-900 font-semibold">20% տարեկան</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-gray-700">Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար</td>
                    <td className="py-3.5 px-4 text-center text-xs text-gray-900">
                      10% ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

       {/* 3. Սպասարկման պայմաններ բովանդակություն */}
        {activeTab === 'service' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-purple-900 mb-6">Սպասարկման պայմաններ</h2>
            
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base list-disc list-inside leading-relaxed">
              <li className="pl-2">Քարտը տրամադրվում է անվճար:</li>
              <li className="pl-2">Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:</li>
              <li className="pl-2">Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:</li>
              <li className="pl-2">Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսվա վերջին օրը ներառյալ:</li>
              <li className="pl-2">Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայացնել Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը:</li>
              <li className="pl-2">Քարտի գործողության ժամկետի ընթացքում նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:</li>
              <li className="pl-2">Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:</li>
              <li className="pl-2">Մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի՝ Հաճախորդի/Նվեր Քարտը ստացած քարտապանի/ դիմումի հիման վրա: Ընդ որում, մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին կցված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի դեպքում: Գործարքի համար Բանկի կողմից գանձվում է համապատասխան միջնորդավճար:</li>
              <li className="pl-2">Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:</li>
              <li className="pl-2">Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:</li>
              <li className="pl-2">Դիմումատուն պարտավոր է նվեր ստացողին պարզաբանել Նվեր քարտի օգտագործման կանոնները և սույն Պայմանները:</li>
              <li className="pl-2">Դիմումատուն տալիս է Բանկից գովազդային և տեղեկատվական հաղորդագրություններ ստանալու համաձայնություն:</li>
              <li className="pl-2">Բանկը և Դիմումատուն կրում են պատասխանատվություն ՀՀ օրենսդրությամբ սահմանված դեպքերում և կարգով:</li>
              <li className="pl-2">Բանկը և Դիմումատուն ժամանակավորապես ազատվում են պարտավորությունների կատարումից՝ ՀՀ օրենսդրությամբ որպես ֆորս-մաժորային ճանաչված իրադարձությունների առաջացման դեպքում և ընթացքում:</li>
              <li className="pl-2">Սույն պայմաններով չկարգավորվող հարցերը կարգավորվում են Բանկի ներքին այլ իրավական ակտերով:</li>
              <li className="pl-2">Դիմում-Պայմանագրի շրջանակներում առաջացած վեճերն ու տարաձայնությունները լուծվում են երկկողմանի համաձայնության սկզբունքով: Համաձայնության չգալու դեպքում, վեճերը լուծվում են ՀՀ օրենսդրությամբ սահմանված կարգով:</li>
            </ul>
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