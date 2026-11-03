import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
 
  const cards = [
    { id: 1, title: "Անգրավ սպառողական վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg", path: "/loans/unsecured-consumer" },
    { id: 2, title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg", path: "/hy/loans/car-loans/car-loans" },
    { id: 3, title: "Գույքի գրավով ապահովված վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg", path: "/hy/loans/consumer-loans/property-secured-loan" },
    { id: 4, title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER", img: "	https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png", path: "/hy/loans/installment/evocapower-loan" },
    { id: 5, title: "Ոսկու գրավով (լոմբարդային) վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg", path: "/hy/loans/consumer-loans/gold-secured-pawn-loans" },
    { id: 6, title: "Տեղում Ապառիկ", img: "	https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg", path: "/installment/point-of-sale-loans" },
    { id: 7, title: "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg", path: "/unsecured-consumer-loans/salary-overdrafts" },
    { id: 8, title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով", img: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg", path: "/mortgage-loans/residential-mortgage-loans" },
    { id: 9, title: "Action", img: "	https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png", path: "/online-loans/action-loan" },
    { id: 10, title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png", path: "/mortgage-loans/for-displaced-families-of-nagorno-karabakh" },
    { id: 11, title: "Հողամասի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg", path: "/mortgage-loans/land-acquisition-loan" },
    { id: 12, title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով", img: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png", path: "/mortgage-loans/micro-renovation-loan-with-bank-resources" },
    { id: 13, title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ", img: "	https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png", path: "/car-loans/leasing-of-vehicles-for-individuals" },
    { id: 14, title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)", img: "	https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png", path: "/online-loans/online-overdraft" },
    { id: 15, title: "Անհատական վարկ «Ներդրումային»", img: " https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png", path: "/consumer-loans/individual-investment-loan" },
    { id: 16, title: "Ավտոկայանատեղիի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg", path: "/unsecured-consumer-loans/parking-space-purchase-loan" },
    { id: 17, title: "Հեծանիվի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png", path: "/installment/bicycle-purchase-loan" },
    { id: 18, title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ", img: "	https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png", path: "/mortgage-loans/housing-mortgages-for-non-resident-individuals" },
    { id: 19, title: "Վերանորոգման վարկ EvocaHOME", img: " 	https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png", path: "/installment/evocahome" },
    { id: 20, title: "Դրամական միջոցների գրավով ապահովված անհատական վարկ", img: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg", path: "/consumer-loans/deposit-secured-credit-line-retail    " },
    { id: 21, title: "Առևտրային հիփոթեքային վարկեր", img: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg", path: "/mortgage-loans/commercial-mortgage-loans" },
    { id: 22, title: "ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր", img: " https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program" },
    { id: 23, title: "ԱՀԸ-ի ծրագրով կառուցապատման վարկեր", img: "	https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png", path: "/mortgage-loans/construction-loan-national-mortgage-company" },
    { id: 24, title: "ԱՀԸ-ի ծրագրով վերանորոգման վարկեր", img: " https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg", path: "/mortgage-loans/renovation-loans-under-national-mortgage-company" },
    { id: 25, title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»", img: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program" },
    { id: 26, title: "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ", img: "	https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg", path: "/unsecured-consumer-loans/credit-line-with-visa-infinite-card" },
    { id: 27, title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png", path: "/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh" },
    { id: 28, title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին", img: " 	https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png", path: "/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh" },
    { id: 29, title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ", img: " 	https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg", path: "/unsecured-consumer-loans/student-loans" },
    { id: 30, title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր", img: " 	https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png", path: "/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia" },
    { id: 31, title: "Evolution", img: " https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png", path: "/unsecured-consumer-loans/evolution" },
    { id: 32, title: "Հիփոթեքային վարկեր Զինծառայողներին", img: "	https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png", path: "/unsecured-consumer-loans/evolution" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա քարտերի բաժնի համար) */}
      <div className="bg-purple-800 text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/hy/loans" className="text-white hover:text-purple-200 transition-colors">Վարկեր</Link>
          <Link to="/hy/credit-history-and-score" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Վարկային պատմություն և սքոր</Link>
          <Link to="/loans/important-info" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Կարևոր տեղեկատվություն</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Տեղում Ապառիկ
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/loans/1/16131174467978/560x400.png" 
                alt="Arca Union Pay Co-badge Card" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

       {/* Ներդիրների կոճակներ (Tabs) */}
       <div className="flex border-b border-gray-200 space-x-8 overflow-x-auto">
         <button
           onClick={() => setActiveTab('about')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'about'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Վարկի մասին
         </button>
         <button
           onClick={() => setActiveTab('conditions')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'conditions'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Պայմաններ
         </button>
         <button
           onClick={() => setActiveTab('partners')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'partners'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
          Ապառիկ համագործակցության հայտ
         </button>
         <button
           onClick={() => setActiveTab('documents')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'documents'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Գործընկերների ցանկ
         </button>
       </div>
      {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
      
      {activeTab === 'about' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              <a href="#" className="text-purple-700 underline font-medium">Evoca</a>-ի տեղում ապառիկը հնարավորություն է տալիս Բանկի գործընկեր կազմակերպություններում գնումներն ու ծառայություններն ավելի հասանելի դարձնել՝ ձևակերպելով ապառիկ անմիջապես վաճառքի կետում[cite: 18]:
            </p>
            <p>
              Մի քանի րոպեում կիմանաս քեզ հասանելի վարկի առավելագույն գումարը, իսկ հաստատման դեպքում պայմանագրերը կստանաս էլեկտրոնային փոստով[cite: 18]:
            </p>
            <p>
              Բանկի գործընկեր կազմակերպությունների ցանկին կարողես ծանոթանալ <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>[cite: 18]:
            </p>
            <p>
              Եթե դու էլ ես ցանկանում դառնալ մեր գործընկերը, լրացրու <a href="#" className="text-purple-700 underline font-medium">online հայտը</a> և մեր աշխատակիցը կապ կհաստատի քեզ հետ երկու աշխատանքային օրվա ընթացքում[cite: 18]:
            </p>
          </div>
          {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex space-x-3 pb-2">
              <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
            </div>

            <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                <span className="text-3xl font-extrabold text-purple-700">5 մլն. ֏</span>
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-medium text-base">Գումար</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                <span className="text-3xl font-extrabold text-purple-700">60 ամիս</span>
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-medium text-base">Ժամկետ</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">սկսած</p>
                <span className="text-3xl font-extrabold text-purple-700">0%-ից</span>
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-medium text-base">Տոկոսադրույք</span>
              </div>
            </div>
          </div>
        </div>
      )}
           {/* պայմաններ */}
{activeTab === 'conditions' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">Վարկի տրամադրման նպատակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկը տրամադրվում է Բանկի հետ համագործակցող ընկերություններից ծառայությունների ստացումը և/կամ սպառողական ապրանքների ձեռքբերումը ֆինանսավորելու նպատակով[cite: 17]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ովքեր կարող են դիմել</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">18 – 65 տարեկան ՀՀ քաղաքացիություն ունեցող և չունեցող ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման նախատեսվող ողջ ընթացքում չեն բոլորի 65 տարին[cite: 17]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման արժույթ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ դրամ[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման գումար</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <span className="font-semibold text-purple-700">50,000 - 5,000,000 ֏</span>[cite: 17]
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի մարման ժամկետը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">12 - 60 ամիս[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան անվանական տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով[cite: 17]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան փաստացի տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">0 - 23.99%[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույքի տեսակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Հաստատուն[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի ամսական սպասարկման վճար</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով[cite: 17]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի մարման ժամանակացույց</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով[cite: 17]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Տուգանք չի կիրառվում[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 17]</p>
              <p>Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 17]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Պահանջվող փաստաթղթեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1 text-sm">
              <p>• Անձը հաստատող փաստաթուղթ[cite: 17]</p>
              <p>• Սոցիալական քարտ[cite: 17]</p>
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի տրամադրման եղանակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top text-sm">Անկանխիկ[cite: 17]</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}
      {/* Ապառիկ համագործակցության դիմում / հայտ */}
{activeTab === 'partners' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-6 sm:p-8 max-w-3xl mx-auto">
    <div className="border-b border-gray-100 pb-6 mb-8">
      <h3 className="text-xl font-bold text-purple-900">Ապառիկ համագործակցության դիմում / հայտ</h3>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      {/* Ապառիկի հայտի տեսակ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ապառիկի հայտի տեսակ <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Օնլայն ապառիկ</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Ապառիկ տեղում</span>
          </label>
        </div>
      </div>

      {/* Ընկերության անվանում */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության անվանում <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Վաճառակետի / Ֆիրմային անվանում */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Վաճառակետի / Ֆիրմային անվանում <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Ընկերության կոնտակտային անձի Անուն, Ազգանուն */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության կոնտակտային անձի Անուն, Ազգանուն <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Հեռախոսահամար */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Հեռախոսահամար <span className="text-red-500">*</span>
        </label>
        <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
          <div className="flex items-center gap-1 bg-gray-50 px-3 border-r border-gray-200 text-sm text-gray-700">
            <span>🇦🇲</span>
            <span>+374</span>
          </div>
          <input 
            type="tel" 
            className="w-full px-4 py-2.5 focus:outline-none text-gray-800 text-sm"
          />
        </div>
      </div>

      {/* Էլ. փոստ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Էլ. փոստ <span className="text-red-500">*</span>
        </label>
        <input 
          type="email" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Կայքի հասցե */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Կայքի հասցե
        </label>
        <input 
          type="url" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Ընկերության գործունեության ոլորտը */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության գործունեության ոլորտը /վաճառվող ապրանքների կամ մատուցվող ծառայությունների տեսակը/ <span className="text-red-500">*</span>
        </label>
        <textarea 
          rows="3"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm resize-y"
        ></textarea>
      </div>

      {/* Որքա՞ն ժամանակ է ընկերությունը գործում շուկայում */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Որքա՞ն ժամանակ է ընկերությունը գործում շուկայում <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Ընկերությունը հանդիսանո՞ւմ է Evocabank-ի հաճախորդ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ընկերությունը հանդիսանո՞ւմ է Evocabank-ի հաճախորդ <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="is_client" className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Այո</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="is_client" className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Ոչ</span>
          </label>
        </div>
      </div>

      {/* Ընկերության վերջին 1 տարվա շրջանառությունը */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության վերջին 1 տարվա շրջանառությունը հարկային հաշվետվություններով <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Ընկերության վաճառակետերի քանակը */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության վաճառակետերի քանակը <span className="text-red-500">*</span>
        </label>
        <input 
          type="number" 
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
      </div>

      {/* Ընկերության վաճառակետերի հասցեները */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության վաճառակետերի հասցեները <span className="text-red-500">*</span>
        </label>
        <textarea 
          rows="3"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm resize-y"
        ></textarea>
      </div>

      {/* Կազմակերպությունը ունի՞ ապառիկ համագործակցություն այլ բանկերի հետ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Կազմակերպությունը ունի՞ ապառիկ համագործակցություն այլ բանկերի հետ <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="other_banks" className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Այո</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="other_banks" className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
            <span className="text-sm text-gray-700">Ոչ</span>
          </label>
        </div>
      </div>

      {/* Գաղտնիության նախազգուշացում */}
      <p className="text-xs text-gray-500 italic">
        Հարգելի հաճախորդ, Բանկը երաշխավորում է, որ Ձեր կողմից տրամադրված տեղեկությունը համարվում է գաղտնի տեղեկատվություն և օգտագործվում է միայն այս դիմում-հայտի վերաբերյալ որոշում կայացնելու նպատակով:
      </p>

      {/* Ընկերության վաճառակետի լուսանկարներ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ընկերության վաճառակետի լուսանկարներ (առկայության դեպքում)
        </label>
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-purple-400 transition cursor-pointer bg-gray-50/50">
          <div className="flex flex-col items-center justify-center gap-2">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-600">Կցել ֆայլը / ֆայլերը</p>
          </div>
          <input type="file" multiple className="hidden" />
        </div>
      </div>

      {/* Ամսաթիվ */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ամսաթիվ <span className="text-red-500">*</span>
        </label>
        <input 
          type="date" 
          defaultValue="2026-09-22"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 text-sm"
        />
        <span className="text-xs text-gray-400 mt-1 block">Օր ամիս տարի</span>
      </div>

      {/* Ուղարկել կոճակ */}
      <div className="pt-4">
        <button 
          type="submit"
          className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl shadow-md transition duration-200"
        >
          Ուղարկել
        </button>
      </div>
    </form>
  </div>
  
)}

     {/* Գործընկերների ցանկ */}
{activeTab === 'documents' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-6 sm:p-8 max-w-6xl mx-auto">
    <div className="border-b border-gray-100 pb-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900">Գործընկերների ցանկ</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {/* Reebok */}
      <a 
        href="https://reeboksportsclub.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Reebook.png" 
          alt="Reebok Sports Club Armenia" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

      {/* Allegro */}
      <a 
        href="https://www.facebook.com/allegrosportcomplex" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Allegro.png" 
          alt="Allegro Sport Cultural Complex" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

      {/* InSport */}
      <a 
        href="https://insport.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/InSport.png" 
          alt="InSport" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

      {/* Hills Sport Complex */}
      <a 
        href="https://hills.am" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Hills-Sport-Complex.png" 
          alt="Hills Sport Complex" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

      {/* Gold's Gym */}
      <a 
        href="https://goldsgym.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Golds-Gym.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/* Gold's Gym */}
      <a 
        href="http://armnoc.am/arm/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Olimpavan.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/* Gold's Gym */}
      <a 
        href="https://www.mwc.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Multi-Wellness.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
{/* Gold's Gym */}
      <a 
       
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="		https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Energym.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

    {/* Gold's Gym */}
      <a 
       
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Orion-Sports-Club.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
             {/*nortunam*/}
      <a 
        href="https://nortun.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="		https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Nor-Tun.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

                   {/*exterior.am*/}
      <a 
        href="https://exterior.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Exterior-Group.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

        
                   {/*avanta.am*/}
      <a 
        href="https://avanta.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Avanta.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

                     {/*avanta.am*/}
      <a 
        
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Maletti-Medical-Center.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
                          {/*designo.am*/}
      <a 
        href="http://designo.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Designo-Furniture.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>


               {/*designo.am*/}
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Comodo-Redefining-Quality.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

              {/*designo.am*/}
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ecox.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>

            {/*vlv.am*/}
      <a 
        href="https://vlv.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/VLV-Electronics.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
        {/*ideal*/}
      <a 
        href="https://www.idealsystem.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ideal-System-Logo.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
        {/*beko*/}
      <a 
        href="https://beko.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="		https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Beko.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/*vega*/}
      <a 
        href="https://vega.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Vega.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/*shtigen*/}
      <a 
        href="https://shtigen.com/hy/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Shtigen.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/*time*/}
      <a 
        href="https://www.time.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Time-Pandora.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/*pixels*/}
      <a 
        href="https://pixels.am/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Pixel.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
       {/*imobi*/}
      <a 
        href="http://www.imobi.am/cgi-sys/defaultwebpage.cgi" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border border-gray-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:shadow-md hover:border-purple-200 transition duration-200 bg-white"
      >
        <img 
          src="	https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ibolit.png" 
          alt="Gold's Gym" 
          className="max-h-16 object-contain transition duration-200"
        />
      </a>
    </div>
  </div>
)}            {/* նկարի հատվածը */}
        <div 
  className="relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
  style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16131174467988/1920x527.jpg')` }}
>
  <div className="absolute inset-0 bg-purple-950/20 backdrop-brightness-95"></div>
  <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
      <span>Evocabank-ի շնորհիվ ցանկալի ապրանքի ձեռքբերման համար երկար սպասելու և խնայողություն կատարելու կարիք այլևս չկա:
</span>
    </h2>
  </div>
</div>
        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
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

            {/* Swiper սլայդեր */}
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

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}