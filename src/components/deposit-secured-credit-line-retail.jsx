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
             Դրամական միջոցների գրավով ապահովված անհատական վարկ
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                    Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17828863013304/560x400.png" 
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
       </div>

       {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}

{activeTab === 'about' && (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
      <p>
        Ունե՞ս ավանդ կամ պարտատոմս Evocabank-ում: Գիտե՞ս, որ արդեն կարող ես օգտագործել քո ներդրված միջոցները որպես գրավ և ստանալ անհատական վարկ։
      </p>
      <p>
        Վարկը հնարավորություն է տալիս շարունակել օգտվել քո ավանդից կամ պարտատոմսից ստացվող եկամուտներից և միաժամանակ ստանալ անհրաժեշտ ֆինանսավորում։
      </p>
      <p>
        Գործընթացը հասանելի է Բանկի մասնաճյուղերում, այնպես որ քեզ մնում է միայն ընտրել քեզ հարմար հասցե։
      </p>
    </div>

    {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex space-x-3 pb-2">
        <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
      </div>

      <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">ավանդի գումարի մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">95%</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Սահմանաչափ</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">պարտատոմսի գումարի մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">80%</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Սահմանաչափ</span>
        </div>
      </div>
    </div>
  </div>
)}
       {activeTab === 'conditions' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">Ովքեր կարող են դիմել</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Բանկի ֆիզիկական անձ հաճախորդներ[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ձևակերպման եղանակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Օնլայն[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման սահմանաչափ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-4">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Ավանդ</p>
                <p className="text-gray-600 text-sm">- ՀՀ դրամով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 95%[cite: 17]</p>
                <p className="text-gray-600 text-sm">- Այլ արժույթներով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 80%[cite: 17]</p>
                <p className="text-gray-600 text-sm">- 50 000 ՀՀ դրամից սկսած[cite: 17]</p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-semibold text-gray-800 mb-1">Պետական կամ Բանկի կողմից թողարկված պարտատոմս</p>
                <p className="text-gray-600 text-sm">- ՀՀ դրամով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 80%[cite: 17]</p>
                <p className="text-gray-600 text-sm">- Այլ արժույթներով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 70%[cite: 17]</p>
                <p className="text-gray-600 text-sm">- 50 000 ՀՀ դրամից սկսած[cite: 17]</p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի տեսակ և մարման ձևը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p className="font-medium text-gray-800">Վերականգնվող կամ նվազող սահմանաչափով օվերդրաֆտ[cite: 17]</p>
              <p className="text-gray-600 text-sm">- Վարկառուն պարտավորվում է վճարել կուտակված տոկոսագումարը մինչև քաղվածքում նշված վերջնաժամկետը[cite: 17]</p>
              <p className="font-medium text-gray-800 pt-2">Մարման գրաֆիկով վարկ[cite: 17]</p>
              <p className="text-gray-600 text-sm">- Անուիտետային[cite: 17]</p>
              <p className="text-gray-600 text-sm">- «Միանգամյա»[cite: 17]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման ժամկետ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>- Նվազագույնը 3 օր[cite: 17]</p>
              <p>- Առավելագույնը մինչև Բանկում գործող ժամկետային ավանդի կամ ձեռքբերված պարտատոմսերի մարման վերջնաժամկետը[cite: 17]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման արժույթ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ դրամ[cite: 17]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Անվանական տարեկան տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-4">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Ավանդ</p>
                <p className="text-gray-600 text-sm">- ՀՀ դրամով ներդրված ժամկետային ավանդի դեպքում՝ ներդրված ժամկետային ավանդի տարեկան տոկոսադրույք գումարած 3.25%[cite: 18]:</p>
                <p className="text-gray-600 text-sm">- Այլ արժույթներով ներդրված ժամկետային ավանդների դեպքում՝ ՀՀ դրամի գծով Բանկում սահմանված ժամկետային ավանդի տարեկան առավելագույն տոկոսադրույք գումարած 3.25%[cite: 18]:</p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-semibold text-gray-800 mb-1">Պետական կամ Բանկի կողմից թողարկված պարտատոմս</p>
                <p className="text-gray-600 text-sm">- ՀՀ դրամի գծով ձեռք բերված պարտատոմսերի համար սահմանված արժեկտրոնային տարեկան եկամտաբերություն գումարած 2%[cite: 18]:</p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Փաստացի տարեկան տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <div>
                <p className="font-semibold text-gray-800">Ավանդ</p>
                <p className="text-gray-600 text-sm">Առավելագույնը 15.2%[cite: 18]</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Պետական կամ Բանկի կողմից թողարկված պարտատոմս</p>
                <p className="text-gray-600 text-sm">Առավելագույնը 13.2%[cite: 18]</p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի տրամադրման եղանակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Անկանխիկ, օվերդրաֆտի դեպքում՝ Բանկի վճարային քարտերի միջոցով[cite: 18]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Օվերդրաֆտի պայմաններ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p className="text-sm"><strong className="text-gray-800">Քաղվածքի օր՝</strong> Մինչև յուրաքանչյուր ամսվա 10-ը[cite: 18]</p>
              <p className="text-sm"><strong className="text-gray-800">Վճարման վերջնաժամկետ՝</strong> Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը)[cite: 18]:</p>
              <p className="text-sm"><strong className="text-gray-800">Արտոնյալ ժամանակահատված՝</strong> Չի տրամադրվում[cite: 18]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի վերադարձելիության ապահովման միջոց</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Ավանդ</p>
                <p className="text-gray-600 text-sm">Բանկում ներդրված ժամկետային ավանդի պայմանագիր։ Ընդ որում, գրավադրվող ժամկետային ավանդի պայմանագրի և ակնկալվող վարկի գումարի տարբեր արժույթներ լինելու դեպքում, հաշվարկի համար հիմք է ընդունվում տվյալ օրվա դրությամբ գրավադրվող ժամկետային ավանդի պայմանագրի արժույթի համար ՀՀ ԿԲ-ի կողմից սահմանված փոխարժեքը[cite: 19]:</p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-semibold text-gray-800 mb-1">Պետական կամ Բանկի կողմից թողարկված պարտատոմս</p>
                <p className="text-gray-600 text-sm">Գրավադրվող պարտատոմսերի և ակնկալվող վարկի գումարի տարբեր արժույթներով լինելու դեպքում, հաշվարկի համար հիմք է ընդունվում տվյալ օրվա դրությամբ գրավադրվող պարտատոմսի արժույթի համար ՀՀ ԿԲ-ի կողմից սահմանված փոխարժեքը[cite: 19]:</p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Բանկի կողմից գանձվող միջնորդավճարներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկի գումարի կանխիկացման դեպքում գանձվում է բանկային հաշվից կամ բանկային քարտից կանխիկացման վճար՝ համաձայն Բանկում գործող սակագների[cite: 19]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տույժեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p className="text-sm">Ամսական նվազագույն վճարը վճարման ժամկետին չվճարելու տույժ՝ 0.015% օրական[cite: 19]</p>
              <p className="text-sm">Հաշվեգրված տոկոսները վճարման ժամկետին չվճարելու տույժ՝ 0.1% օրական[cite: 19]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկունակության գնահատում / վարկի հաստատման պայմաններ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկի տրամադրման անհրաժեշտ պայման է հանդիսանում ներկայացման պահին գործող դասակարգված վարկերի, գործող ուշացումների բացակայությունը[cite: 19]</td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">15.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p className="text-sm">• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է 1 (մեկ) օրվա ընթացքում՝ առանձին դեպքերում, կախված վարկի գումարից, որոշումը կարող է կայացվել մինչև 5 (հինգ) աշխատանքային օրվա ընթացքում[cite: 19]:</p>
              <p className="text-sm">• Վարկը տրամադրվում է դրական որոշման դեպքում, առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում[cite: 19]:</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
        )}
            {/* նկարի հատվածը */}
        <div 
  className="relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover  flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
  style={{ backgroundImage: `url('	https://www.evoca.am/images-cache/loans/1/17828863013315/1920x527.jpg')` }}
>
  <div className="absolute inset-0 backdrop-brightness-95"></div>
  <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
      <span>Կատարե՛ք խնայողություններ՝ վստահելով միայն Evocabank-ին:</span>
    </h2>
  </div>
</div>
        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Այլ վարկեր</h2>
              
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