import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Ավելացվել է
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function TravelCard() {
  const navigate = useNavigate(); // <--- Հայտարարում ենք
  const [activeTab, setActiveTab] = useState('about');
  // ... մնացած կոդը

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      {/* Գլխավոր հեդրը */}
      <Header />

      {/* Երկրորդային մանուշակագույն մենյու */}
      <div className="bg-[#6b21a8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-6 sm:space-x-8 text-xs sm:text-sm overflow-x-auto py-3 scrollbar-none">
          <span className="border-b-2 border-white pb-1 font-semibold cursor-pointer whitespace-nowrap">Քարտեր</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap">Evoca Benefits</span>
        </div>
      </div>

      {/* 1. Վերևի մեծ բաց բլոկը (Hero section) */}
      <div className="w-full bg-gradient-to-b from-purple-50/70 to-white py-8 sm:py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Ձախ կողմի վերնագիր և կարճ տեքստ */}
          <div className="max-w-xl space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
              Evoca Travel Card
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Սիրո՞ւմ ես ճամփորդել. ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:
            </p>
          </div>

          {/* Աջ կողմի քարտի նկարը */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" 
                alt="Evoca Travel Card" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Հացի փշրանքներ (Breadcrumbs) և Վերադառնալ կոճակ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2">
          <button className="flex items-center space-x-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all cursor-pointer shadow-sm">
            <span>← Վերադառնալ</span>
          </button>
          <span className="text-gray-300">/</span>
          <span>Անհատներ</span>
          <span className="text-gray-300">/</span>
          <span>Քարտեր</span>
          <span className="text-gray-300">/</span>
          <span className="hidden sm:inline">Քարտեր</span>
          <span className="text-gray-300 hidden sm:inline">/</span>
          <span>Mastercard</span>
          <span className="text-gray-300">/</span>
          <span className="text-purple-700 font-semibold">Evoca Travel Card</span>
        </div>
      </div>

      {/* 3. Հիմնական բովանդակություն՝ Տաբերով */}
      <main className="flex-grow w-full py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Ներդիրների կոճակներ */}
          <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 pb-3 sm:pb-4 mb-6 sm:mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`font-semibold text-base sm:text-lg pb-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'about'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Քարտի մասին
            </button>

            <button
              onClick={() => setActiveTab('tariffs')}
              className={`font-semibold text-base sm:text-lg pb-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tariffs'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Սակագներ և դրույթներ
            </button>
          </div>

          {/* Պայմանական ցուցադրություն ըստ ընտրված տաբի */}
          {activeTab === 'about' ? (
            <div className="space-y-12 sm:space-y-16">
              
              {/* Վերևի հատված՝ Նկարագրություն և կարճ տուփեր */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                {/* Ձախ կողմի մանրամասն տեքստեր */}
                <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Որտե՞ղ ես ուզում լինել վաղը. Փարիզում, Դուբայում, թե՞ քեզ համար նոր, արկածներով լի վայրում:
                  </p>
                  <p>
                    <span className="font-semibold text-purple-800">Evocabank</span>-ը ներկայացնում է <span className="font-semibold text-gray-900">Evoca Travel Card</span> ճամփորդական քարտը, որը կդառնա քո անփոխարինելի ուղեկիցը յուրաքանչյուր ճամփորդության ժամանակ:
                  </p>
                  <p>
                    Ձեռք բերելով Evoca Travel Card՝ դու դառնում ես Evocabank-ի պրեմիում քարտապան և ստանում մի շարք արտոնություններ ոչ միայն Հայաստանում, այլև ամբողջ աշխարհում՝ միջազգային ճամփորդական ապահովագրություն, կոնսիերժ ծառայություն, անվճար մուտք օդանավակայանների բիզնես սպասասրահներ, Fast track, արտարժույթի արտոնյալ կուրս և այլն:
                  </p>
                </div>

                {/* Աջ կողմի առավելությունների տուփերը */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-gray-100 space-y-4">
                  <div className="flex space-x-3 mb-4">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm">֏</span>
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm">$</span>
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm">€</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100 gap-4">
                    <div>
                      <span className="text-[11px] sm:text-xs text-gray-400 block">Մինչև</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-purple-800">1.5%</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 text-right max-w-[200px] sm:max-w-[220px]">
                      Cashback արտասահմանում իրականացված վճարումների համար
                    </p>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100 gap-4">
                    <div>
                      <span className="text-[11px] sm:text-xs text-gray-400 block">Անվճար</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-purple-800">6 մուտք</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 text-right max-w-[200px] sm:max-w-[220px]">
                      Lounge Key սրահներ քեզ և հյուրերիդ համար
                    </p>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100 gap-4">
                    <div>
                      <span className="text-[11px] sm:text-xs text-gray-400 block">Անվճար</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-purple-800">6 անգամ</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 text-right max-w-[200px] sm:max-w-[220px]">
                      Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 gap-4">
                    <span className="text-xl sm:text-2xl font-extrabold text-purple-800 whitespace-nowrap">16.000 ֏</span>
                    <p className="text-xs sm:text-sm text-gray-700 text-right max-w-[200px] sm:max-w-[220px]">
                      Քարտի տարեկան սպասարկում
                    </p>
                  </div>
                </div>

              </div>

              {/* ՔԱՐՏԻ ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐԸ */}
              <div className="pt-8 sm:pt-10 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                  Քարտի առավելությունները
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  
                  {/* 1. Lounge Key */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406727/83x111.png" alt="Lounge Key" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Անվճար մուտք Lounge Key սրահներ</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>
                        Տարեկան 6 անվճար մուտք ավելի քան 1,200 օդանավակայանի Lounge Key սրահներ քեզ և հյուրերիդ համար: Մանրամասներին կարող եք ծանոթանալ <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>:
                      </p>
                      <p className="font-medium text-gray-900">Օգտվելու համար անհրաժեշտ է`</p>
                      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600">
                        <li>Գտնել բիզնես սրահը, մուտք գործելիս նշել, որ օգտվում եք <strong>Lounge Key</strong> սրահների ծառայություններից,</li>
                        <li>Տեղադրել քարտը սարքում կամ հավելվածում և գեներացված QR կոդի միջոցով անցնել նույնականացում,</li>
                        <li>Վայելել բիզնես սրահի առավելությունները,</li>
                        <li>Քարտին անհրաժեշտ է ունենալ դրական մնացորդ,</li>
                        <li>Բիզնես սրահի մուտք այցելությունը տրամադրվում է հաշվետու տարվա համար:</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2. Fast track */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406752/83x111.png" alt="Fast track" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Fast track</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>
                        Հնարավորություն անցնելու անվտանգության, միգրացիոն, մաքսային ստուգման գործընթացները 100-ից ավելի միջազգային օդանավակայանում, այդ թվում` Զվարթնոցում տարեկան 6 անգամ քեզ և հյուրերիդ համար:
                      </p>
                      <p className="font-medium text-gray-900">Օգտվելու համար անհրաժեշտ է`</p>
                      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600">
                        <li>Անհրաժեշտ է Mastercard Travel Pass (MTP) հավելվածի միջոցով (iOS, Android) գեներացնել Fast Track անցաթուղթ` պարզապես ընտրելով օդանավակայանը, ճամփորդողների թիվը և ցանկալի ժամանակահատվածը,</li>
                        <li>Fast Track անցաթուղթը գեներացվում է հավելվածում կամ էլ. փոստի միջոցով, որից հետո անհրաժեշտ է մոտենալ տերմինալի Fast Track գոտի,</li>
                        <li>Մուտք գործելու համար` անհրաժեշտ է ներկայացնել Fast Track անցաթուղթը,</li>
                        <li>Fast Track ծառայության հասանելիությունը տրամադրվում է հաշվետու տարվա համար,</li>
                        <li>Քարտին անհրաժեշտ է ունենալ դրական մնացորդ,</li>
                        <li>Fast Track անցաթուղթը հարկավոր է ակտիվացնել օգտվելուց առնվազն 1 ժամ առաջ:</li>
                      </ul>
                    </div>
                  </div>

                  {/* 3. Միջազգային ապահովագրություն */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/1748007440678/83x111.png" alt="Insurance" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Միջազգային ապահովագրություն</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>30 օր 1 տարվա ընթացքում, բազմաթիվ ուղևորությունների համար:</p>
                      <p>
                        Քարտապանի էլ. հասցեին ուղարկվելու է պրոմո կոդ Նաիրի Ինշուրանս ԱՄՊԸ-ի կայքում կամ հավելվածում` պայմանագիրն անվճար ձևակերպելու համար:
                      </p>
                      <p className="font-medium text-gray-900">Ապահովագրությունը հատուցելու է`</p>
                      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600">
                        <li>Անհետաձգելի (շտապ) բժշկական ծառայության ծախսերը,</li>
                        <li>Դժբախտ պատահարներից ապահովագրություն,</li>
                        <li>Ապահովագրական պատահարի ժամանակ առաջացած բուժտրանսպորտային ծառայությունների ծախսերը,</li>
                        <li>Հայրենադարձության (այդ թվում` մահվան դեպքում) հետ կապված ծախսերը,</li>
                        <li>Ապահովագրական պատահարի մասին Աջակցող ընկերությանը տեղեկացնելիս իրականացված ծախսեր,</li>
                        <li>Իրավաբանական խորհրդատվության ծախսեր:</li>
                      </ul>
                    </div>
                  </div>

                  {/* 4. Կոնսիերժ ծառայություն */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406803/83x111.png" alt="Concierge" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Կոնսիերժ ծառայություն</h3>
                    </div>
                    <div className="lg:col-span-9 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>
                        Անձնական օգնական, որն աշխարհի որ կետում էլ լինեք, օրվա որ ժամին էլ անհրաժեշտ լինի, պատրաստ է 24/7 տեղեկություն տրամադրել մի շարք ծառայությունների մասին և նույնիսկ ամրագրել դրանք: Եվ այդ ամենն` անվճար: Մանրամասներին կարող եք ծանոթանալ <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>:
                      </p>
                    </div>
                  </div>

                  {/* 5. Ինտերնետ ռոումինգ */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406826/83x111.png" alt="Roaming" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Ինտերնետ ռոումինգ</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>1 GB անվճար ինտերնետ, ինչպես նաև 15% զեղչ տրամադրած ծավալը սպառելուց հետո:</p>
                      <p className="font-medium text-gray-900">Անհրաժեշտ է`</p>
                      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600">
                        <li>Ներբեռնել Flexiroam հավելվածը,</li>
                        <li>Ընտրել քարտի, մուտքագրել քարտի 16 նիշանոց համարը և էլ. հասցեն` հաշիվ ստեղծելու համար,</li>
                        <li>Սեղմել «Redeem Starter Plan» և ակտիվացնել էլեկտրոնային SIM քարտը,</li>
                        <li>Հեռախոսի կարգավորումներ բաժնում ակտիվացնել Flexiroam Data Roaming-ը:</li>
                      </ul>
                    </div>
                  </div>

                  {/* 6. Արտարժույթի արտոնյալ կուրս */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406847/83x111.png" alt="Currency" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Արտարժույթի արտոնյալ կուրս</h3>
                    </div>
                    <div className="lg:col-span-9 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>
                        ԱՄՆ Դոլար (USD) և Եվրո (EURO) արժույթների համար արտոնյալ փոխարժեքի տրամադրում: Մինչև 5 մլն ՀՀ դրամին համարժեք գործարքների դեպքում` գործող փոխարժեքից 0.5 դրամ արտոնյալ պայմաններ:
                      </p>
                    </div>
                  </div>

                  {/* 7. Պահատուփեր */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406871/83x111.png" alt="Safe box" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Պահատուփեր</h3>
                    </div>
                    <div className="lg:col-span-9 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>50% զեղչ Evocabank-ում չհրկիզվող պահատուփերի համար:</p>
                    </div>
                  </div>

                  {/* 8. Cashback */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406895/83x111.png" alt="Cashback" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Cashback</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-gray-600">
                        <li>1.5% cashback արտասահմանում հյուրանոց, ավիատոմս, զբոսաշրջային գործակալություններ, ավտովարձույթ իրականացնելու, գնացքի տոմսեր գնելու համար,</li>
                        <li>0.5% cashback արտասահմանում իրականացրած անկանխիկ գործարքների համար,</li>
                        <li>ամսական առավելագույնը 20,000 դրամի չափով,</li>
                        <li>Cashback-ը փոխանցվում է յուրաքանչյուր ամսվա մինչև 20-ը, նախորդ ամսվա ընթացքում կատարված և հաշվառված գործարքների համար:</li>
                      </ul>
                    </div>
                  </div>

                  {/* 9. Հատուկ առաջարկ */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <img src="https://www.evoca.am/images-cache/cards/1/17480074406912/83x111.png" alt="Special offer" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Հատուկ առաջարկ</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      <p>Պարբերաբար թարմացվող զեղչեր, ակցիաներ և այլ արտոնություններ Evocabank-ի և Mastercard-ի կողմից:</p>
                      <p>Առաջարկների կարող եք ծանոթանալ հղումով`</p>
                      <p>
                        <a href="https://benefits.evoca.am" target="_blank" rel="noreferrer" className="text-purple-700 underline font-medium">
                          benefits.evoca.am
                        </a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>

             {/* Ներկառուցված Սլայդեր (Այլ քարտեր) */}
<div className="w-full py-8 sm:py-12">
  <div className="relative">
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
        Այլ քարտեր
      </h2>
      
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
          <div 
            onClick={() => navigate(card.path)}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full"
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
            </div>
          ) : (
            /* Սակագներ և դրույթներ աղյուսակ */
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-gray-800 border-b border-gray-200 text-base sm:text-lg">
                Evoca Master Card Travel
              </div>

              <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտի տրամադրում</span>
                  <span className="font-semibold text-gray-900 sm:text-right">0</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտի տարեկան սպասարկում</span>
                  <span className="font-semibold text-gray-900 sm:text-right">16,000 ՀՀ դրամ</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտի տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
                  <span className="font-semibold text-gray-900 sm:text-right">45,000 ՀՀ դրամ</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Կից քարտի տրամադրում</span>
                  <span className="font-semibold text-gray-900 sm:text-right">0</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Կից քարտի տարեկան սպասարկում (որպես կից քարտ տրամադրվում է Mastercard Gold)</span>
                  <span className="font-semibold text-gray-900 sm:text-right">10,000 ՀՀ դրամ</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտային հաշվի չվնազող մնացորդ</span>
                  <span className="font-semibold text-gray-900 sm:text-right">0</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</span>
                  <span className="font-semibold text-gray-900 sm:text-right">0</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով և POS-ով</span>
                  <div className="text-left sm:text-right font-semibold text-gray-900 space-y-0.5">
                    <div>ՀՀ դրամ՝ 0.5%</div>
                    <div>ԱՄՆ դոլար և եվրո՝ 1%</div>
                    <div>Այլ արտարժույթ՝ 1%</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Քարտով կատարված գործարքների բողոքարկման հայտ</span>
                  <span className="font-semibold text-gray-900 sm:text-right">5,000 ՀՀ դրամ</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 hover:bg-gray-50 gap-1 sm:gap-4">
                  <span className="text-gray-700 font-medium">Գերածախսի գծով տույժեր</span>
                  <span className="font-semibold text-gray-900 sm:text-right">20 % տարեկան</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Ֆուտերը */}
      <Footer />
    </div>
  );
}