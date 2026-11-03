import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Giftcard() {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms' | 'service'
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  // Ստիպում ենք կոմպոնենտին վերառենդերվել ռեֆերի կցվելուց հետո, որպեսզի Swiper-ը տեսնի կոճակները
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperInitialized(true);
    }
  }, []);

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
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա) */}
      <div className="bg-[#5b21b6] text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/cards" className="text-white hover:text-purple-200 transition-colors">Քարտեր</Link>
          <Link to="/cards/issuance" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</Link>
          <Link to="/cards/social" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</Link>
          <Link to="/cards/benefits" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Evoca Benefits</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100 relative overflow-hidden">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Evoca Gift Card
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:
            </p>
          </div>

          {/* Քարտերի պատկերները */}
          <div className="flex justify-center relative h-72 sm:h-80 items-center">
            <div className="absolute right-10 top-0 w-64 sm:w-72 transform translate-x-4 -translate-y-2 opacity-90 shadow-2xl rounded-xl overflow-hidden">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" 
                alt="Black Gift Card" 
                className="w-full object-contain"
              />
            </div>
            <div className="absolute right-0 bottom-2 w-64 sm:w-72 transform translate-x-2 translate-y-4 shadow-2xl rounded-xl overflow-hidden z-20">
            </div>
          </div>
        </div>

        {/* Ներքին նավիգացիա (Tabs) */}
        <div className="flex border-b border-gray-200 space-x-8 text-lg font-medium overflow-x-auto">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 -mb-px cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'about' 
                ? 'border-b-2 border-[#5b21b6] text-[#5b21b6] font-bold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`pb-3 -mb-px cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'terms' 
                ? 'border-b-2 border-[#5b21b6] text-[#5b21b6] font-bold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Տրամադրման պայմանները
          </button>
          <button 
            onClick={() => setActiveTab('service')}
            className={`pb-3 -mb-px cursor-pointer whitespace-nowrap transition-colors ${
              activeTab === 'service' 
                ? 'border-b-2 border-[#5b21b6] text-[#5b21b6] font-bold' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Սպասարկման պայմանները
          </button>
        </div>

        {/* ԲԱԺԻՆ 1: Քարտի մասին */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed text-base sm:text-lg animate-fadeIn">
            
            <div className="text-center space-y-4">
              <p className="text-xl sm:text-2xl font-medium text-gray-900">
                Նվերը դառնում է հատկապես կարևոր, երբ համապատասխանում է նվեր ստացողի ցանկություններին։ <strong className="text-[#5b21b6]">Evoca Gift Card</strong>-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է: Քարտը հարմար է բոլոր առիթների համար՝
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4 text-[#5b21b6] font-semibold">
                <span className="bg-purple-50 px-4 py-2 rounded-xl">Ամանոր</span>
                <span className="bg-purple-50 px-4 py-2 rounded-xl">Մարտի 8</span>
                <span className="bg-purple-50 px-4 py-2 rounded-xl">Սիրո տոն</span>
                <span className="bg-purple-50 px-4 py-2 rounded-xl">Ծննդյան օր</span>
                <span className="bg-purple-50 px-4 py-2 rounded-xl">Հարսանիք</span>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center space-y-3">
              <p className="font-medium text-gray-900">Դու պարզապես ընտրում ես գումարի չափը, իսկ ստացողը՝ իր նվերը։</p>
              <p className="text-sm text-gray-600">Քարտը տրամադրվում է տեղում՝ դիմելու պահին, կամ առաքման միջոցով պատվիրելուց հետո 1 աշխատանքային օրվա ընթացքում։</p>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Ընտրիր Evoca Gift Card-ի քո սիրելի դիզայնը՝ Violet կամ Black:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4">
                  <img src="https://www.evoca.am/file_manager/Gift%20Card/gift22.png" alt="Violet Gift Card" className="max-h-48 object-contain" />
                  <span className="text-[#5b21b6] font-bold">Violet Gift Card</span>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4">
                  <img src="https://www.evoca.am/file_manager/Gift%20Card/gift11.png" alt="Black Gift Card" className="max-h-48 object-contain" />
                  <span className="text-[#5b21b6] font-bold">Black Gift Card</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-6 border-t border-gray-100">
              <div className="text-center space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Քարտը կարող ես ձեռք բերել հետևյալ փաթեթավորմամբ՝</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://www.evoca.am/file_manager/Gift%20Card/GIFTCARD-WEB2.png" 
                    alt="Evoca Gift Card Box" 
                    className="max-h-64 object-contain rounded-2xl shadow-sm border border-gray-100 p-2 bg-gray-50"
                    onError={(e)=>{e.target.src='https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png'}}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#5b21b6]">Ի՞նչ առավելություններ կտա քարտը:</h3>
                <ul className="space-y-3 list-disc pl-5 text-gray-700">
                  <li>Ընտրության ազատություն</li>
                  <li>Գեղեցիկ դիզայն և փաթեթավորում</li>
                  <li>Ժամանակի խնայողություն</li>
                  <li>Սխալ ընտրության բացառում</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#5b21b6]">Ինչպե՞ս պատվիրել քարտը:</h3>
                <p className="leading-relaxed">
                  <strong className="text-[#5b21b6]">Evoca Gift Card</strong> կարելի է ձեռք բերել <strong className="text-[#5b21b6]">Evocabank</strong>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի մասնաճյուղի)՝ ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:
                </p>
                <p className="leading-relaxed">
                  Նվեր քարտը կարողես պատվիրել նաև օնլայն՝ <strong className="text-[#5b21b6]">Evocabank</strong>-ի պաշտոնական կայքի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:
                </p>
                <p className="leading-relaxed">
                  Մենք այն անվճար կմոտեցնենք <strong className="text-[#5b21b6]">Evocabank</strong>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝ <span className="font-semibold text-gray-900">1,000 ՀՀ դրամ</span>:
                </p>
                <p className="leading-relaxed">
                  Քարտը կարողես լիցքավորել <span className="font-semibold text-gray-900">10,000 ՀՀ դրամից մինչև 1,000,000 ՀՀ դրամ</span>՝ քո նախընտրած գումարի չափով:
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#5b21b6]">Ինչպե՞ս ակտիվացնել քարտը:</h3>
                <p className="leading-relaxed">
                  Evoca Gift Card-ը կարողես ակտիվացնել Evocabank-ի ցանկացած մասնաճյուղում կամ EvocaTOUCH հավելվածի միջոցով:
                </p>
                <p className="leading-relaxed">
                  Քարտի ակտիվացման համար անհրաժեշտ է անձնագիր:
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#5b21b6]">Որտե՞ղ կարելի է օգտագործել քարտը:</h3>
                <p className="leading-relaxed">
                  Evoca Gift Card-ով կարողես վճարել ցանկացած POS և V-POS տերմինալով՝ խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում, օնլայն խանութներում:
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#5b21b6]">Ինչո՞ւ նվիրել Evoca Gift Card, այլ ոչ կանխիկ գումար:</h3>
                <p className="leading-relaxed">
                  Evoca Gift Card-ն ուղղակի իդեալական նվեր է. չէ՞ որ գեղեցիկ փաթեթավորմամբ նվեր քարտն ավելի էսթետիկ է, բրենդային և, իհարկե, ստատուսային, քան ծրարով գումարը: Բացի դրանից, նվեր քարտը հարմար տարբերակ է նույնիսկ եթե լավ ծանոթ չես նվեր ստացողի նախասիրություններին ու ճաշակին:
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ԲԱԺԻՆ 2: Տրամադրման պայմանները */}
        {activeTab === 'terms' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg">Evoca Gift քարտեր</h3>
              </div>
              
              <div className="divide-y divide-gray-100 text-sm sm:text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտի տեսակ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">ArCa Gift card</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտի արժույթ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">ՀՀ դրամ</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Նվեր քարտի համալրման գումար</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Նվազագույնը՝ 10 000 ՀՀ դրամ<br/>Առավելագույնը՝ 1 000 000 ՀՀ դրամ</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտի գործողության ժամկետ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Քարտի թողարկման պահից 6 ամիս</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Evoca Gift քարտով կատարվող գործարքներ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">ՀՀ տարածքում գտնվող առևտրային սպասարկման կետեր <sup>[1]</sup></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Կանխիկացում</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Չի թույլատրվում</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտային հաշվի չվազող մնացորդ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Չի սահմանվում</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">0%</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Անվճար</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտի գործողության կասեցում</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Անվճար</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտի վերաթողարկում</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Չի վերաթողարկվում</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Մնացորդի տեղափոխության միջնորդավճար <sup>[2]</sup></span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">4 900 ՀՀ դրամ</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">PIN ծածկագրի գեներացման հայտ</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">1 000 ՀՀ դրամ</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Անվճար</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Անվճար</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Գերածախսի գծով տույժեր</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">20% տարեկան</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 hover:bg-gray-50">
                  <span className="text-gray-600 font-medium">Ակտիվացված քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար</span>
                  <span className="text-gray-900 font-semibold mt-1 sm:mt-0">Ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ՝ 10%</span>
                </div>
              </div>
            </div>

            {/* Ծանոթագրություններ */}
            <div className="text-xs text-gray-500 space-y-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p>
                <strong className="text-gray-700">[1]</strong> Սահմանափակված են հետևյալ գործարքները՝ կանխիկացում, կանխիկի մուտքագրում վճարային տերմինալներով և անկանխիկ փոխանցմամբ, հաշվից հաշիվ փոխանցումներ, կոմունալ վճարումներ, էլեկտրոնային դրամապանակների համալրում, քեբինգ/գեմբլինգ գործարքներ, ինչպես նաև ֆինանսական ծառայությունների վճարման գործարքներ (այդ թվում՝ վարկի մարում, ավանդի համալրում և այլն):
              </p>
              <p>
                <strong className="text-gray-700">[2]</strong> Մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառությամբ արդեն իսկ Հաճախորդին կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի կամ չկցագրված, սակայն գործողության ժամկետի մեջ գտնվող քարտերի դեպքում, երբ հնարավոր է նույնականացնել Նվեր քարտը գնող հաճախորդին, ով նշված դեպքում իրավասու է ներկայացնել մնացորդի տեղափոխման դիմումը:
              </p>
            </div>
          </div>
        )}

        {/* ԲԱԺԻՆ 3: Սպասարկման պայմանները */}
        {activeTab === 'service' && (
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg bg-white p-8 rounded-3xl border border-gray-200 shadow-sm animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Սպասարկման հիմնական պայմանները</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>Քարտը տրամադրվում է անվճար:</li>
              <li>Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:</li>
              <li>Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:</li>
              <li>Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսվա վերջին օրը ներառյալ:</li>
              <li>Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայացվել Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը:</li>
              <li>Քարտի գործողության ժամկետի ընթացքում նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:</li>
              <li>Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:</li>
              <li>Մնացորդային գումարը կարող է տրամադրվել բացառությամբ մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի՝ Հաճախորդի/Նվեր Քարտը ստացած քարտապանի դիմումի հիման վրա:</li>
              <li>Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:</li>
              <li>Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:</li>
            </ul>
          </div>
        )}

        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Այլ քարտեր</h2>
              <div className="flex space-x-2">
                <button ref={prevRef} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#5b21b6] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm">❮</button>
                <button ref={nextRef} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#5b21b6] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm">❯</button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              observer={true}
              observeParents={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onInit={(swiper) => {
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
                  <Link to={card.path} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block">
                    <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                      <img src={card.img} alt={card.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{card.title}</h3>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </main>

      {/* Ֆութերը */}
      <Footer />
    </div>
  );
}