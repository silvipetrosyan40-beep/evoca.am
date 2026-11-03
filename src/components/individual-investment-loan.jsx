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
             Անհատական վարկ «Ներդրումային»
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                    Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17363996058271/560x400.png" 
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
      <h2 className="text-xl sm:text-2xl font-bold text-purple-700">Ոչ թե վարկ, այլ ներդրում</h2>
      <p className="text-gray-700">
        Երբևէ մտածե՞լ ես, որ քո վարկը կարող է աշխատել քեզ համար։
      </p>
      <p className="text-gray-700 font-medium">
        Ինչպե՞ս։ Անհատական ներդրումային վարկի միջոցով ՀՀ-ում և արտերկրում՝
      </p>
      <ul className="space-y-3 pl-2">
        <li className="flex items-start">
          <span className="text-purple-700 mr-2 font-bold">•</span>
          <span>Գնելով անշարժ կամ շարժական գույք</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-700 mr-2 font-bold">•</span>
          <span>Ձեռք բերելով միջազգային թոփ ընկերությունների բաժնեմասեր</span>
        </li>
      </ul>
      <p className="text-gray-700 pt-2">
        Ի դեպ, ներդրումային վարկը հասանելի է նաև <span className="text-purple-700 font-semibold">արտարժույթով</span>։
      </p>
      <p className="text-gray-700 font-medium pt-2">
        Շտապիր ձեռք բերել վարկն այսօր և միժամանակ ստեղծել քո կայուն եկամուտների նոր աղբյուր։
      </p>
    </div>

    {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex space-x-2 pb-2">
        <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">Դ</span>
        <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
        <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
      </div>

      <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">350 մլն Դ</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Գումար</span>
        </div>
      </div>

      <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">240 ամիս</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Մարման ժամկետ</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-extrabold text-purple-700">15%</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Տոկոսադրույք</span>
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
            <td className="p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">Նպատակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>ՀՀ տարածքում կամ ՀՀ տարածքից դուրս գործող իրավաբանական անձանց կանոնադրական կապիտալում մասնակցության կամ բաժնեմասնակցության ձեռքբերման կամ որևէ այլ կերպ ՀՀ օրենսդրությամբ թույլատրելի առևտրային գործունեության մեջ ներդրման նպատակով[cite: 15]։</li>
                <li>ՀՀ տարածքից դուրս՝ եկամուտ ստանալու նպատակով, անշարժ կամ շարժական գույքի ձեռքբերման նպատակով[cite: 15]:</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ովքեր կարող են դիմել</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">18 - 65 տարեկան ՀՀ ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու[cite: 15]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման արժույթ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">ՀՀ դրամ</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">ԱՄՆ դոլար</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Եվրո</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման գումար</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">ՀՀ դրամով</span>
                <span className="font-semibold text-purple-700">16,000,000 - 350,000,000 ֏</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">ԱՄՆ դոլարով</span>
                <span className="font-semibold text-purple-700">40,000 - 700,000 $</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-600">Եվրոյով</span>
                <span className="font-semibold text-purple-700">40,000 - 700,000 €</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի տեսակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <div className="grid grid-cols-2 gap-4">
                <div><span className="font-medium text-gray-800">Վարկային գիծ[cite: 15]</span></div>
                <div><span className="font-medium text-gray-800">Մարման գրաֆիկով վարկ</span></div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման եղանակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• <strong>Վարկային գծի դեպքում՝</strong> Չվերականգնվող վարկային գիծ, Օվվերդրաֆտ[cite: 15]</p>
              <p>• <strong>Մարման գրաֆիկով վարկի դեպքում՝</strong> Անուիտետային, Հավասարաչափ[cite: 15]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի մարման ժամկետը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Հաստատուն տոկոսադրույքի կիրառման դեպքում՝ <strong>12 - 84 ամիս</strong>[cite: 15]</p>
              <p>• Լողացող տոկոսադրույքի կիրառման դեպքում՝ <strong>60 - 240 ամիս</strong>[cite: 15]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույքներ (Հաստատուն)</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">ՀՀ դրամ</p>
                  <p className="text-sm font-medium">Անվանական՝ <strong className="text-purple-700">15.0%</strong></p>
                  <p className="text-sm font-medium">Առավելագույն փաստացի՝ <strong className="text-purple-700">17.3%</strong></p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">ԱՄՆ դոլար</p>
                  <p className="text-sm font-medium">Անվանական՝ <strong className="text-purple-700">10.0%</strong></p>
                  <p className="text-sm font-medium">Առավելագույն փաստացի՝ <strong className="text-purple-700">11.6%</strong></p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Եվրո</p>
                  <p className="text-sm font-medium">Անվանական՝ <strong className="text-purple-700">8.5%</strong></p>
                  <p className="text-sm font-medium">Առավելագույն փաստացի՝ <strong className="text-purple-700">9.9%</strong></p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույքներ (Լողացող)</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-100 pb-2">
                <div>
                  <p className="text-xs text-gray-400 mb-1">ՀՀ դրամ</p>
                  <p className="text-sm font-medium">Անվանական՝ <span className="text-purple-700">սկսված 14.0%-ից</span>[cite: 16]</p>
                  <p className="text-sm font-medium">Փաստացի՝ <strong className="text-purple-700">15.4%</strong>[cite: 16]</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">ԱՄՆ դոլար</p>
                  <p className="text-sm font-medium">Անվանական՝ <span className="text-purple-700">սկսված 9.2%-ից</span>[cite: 16]</p>
                  <p className="text-sm font-medium">Փաստացի՝ <strong className="text-purple-700">10%</strong>[cite: 16]</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Եվրո</p>
                  <p className="text-sm font-medium">Անվանական՝ <span className="text-purple-700">սկսված 7.5%-ից</span>[cite: 16]</p>
                  <p className="text-sm font-medium">Փաստացի՝ <strong className="text-purple-700">8.2%</strong>[cite: 16]</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">• Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ ±4%, սակայն ոչ ավել քան 21%[cite: 16]:</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ տարածքում գործող, ինչպես նաև ոչ ռեզիդենտ այլ բանկերի, վարկային կազմակերպությունների կամ այլ ֆինանսական կառույցների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք՝ վաղաժամկետ մարվող մայր գումարի 3%-ի չափով[cite: 16]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 16],</p>
              <p>• Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 16]:</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի տրամադրման եղանակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Անկանխիկ[cite: 16]</p>
              <p>• Օվերդրաֆտի դեպքում՝ Բանկում գործող վճարային քարտերի միջոցով[cite: 16]:</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի վերադարձելիության ապահովման միջոցները</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ տարածքում գտնվող Բանկի համար ընունելի անշարժ գույք, տրանսպորտային միջոց, դրամական միջոցներ, այդ թվում՝ ավանդ, պարտատոմսեր («Էվոկաբանկ» ՓԲԸ-ի կողմից թողարկված կամ պետական պարտատոմս, որոնց մարման ժամկետները չեն կարող վարկի մարման ժամկետից կարճ լինել)[cite: 16]: Բացի անշարժ գույքի գրավադրումից՝ վարկառուից կարող է պահանջվել նաև առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն[cite: 16]:</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկ/գրավ հարաբերակցություն</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
              <p>• <strong>Անշարժ գույք՝</strong> գնահատված արժեքի մինչև 70% (առանց եկամուտների հիմնավորման դեպքում՝ 50%)[cite: 17]:</p>
              <p>• <strong>Տրանսպորտային միջոց՝</strong> գնահատված արժեքի մինչև 70% (ընդ որում՝ 60 ամսից ավել մարման ժամկետ ունեցող վարկերի դեպքում տրանսպորտային միջոցի գրավով ապահովված մասը վարկ/գրավ ընդհանուր հարաբերակցության մեջ չի կարող գերազանցել 50%-ը)[cite: 17]:</p>
              <p>• <strong>Ավանդներ և պարտատոմսեր՝</strong> Միևնույն արժույթով ներդրված ավանդի կամ պարտատոմսերի անվանական արժեքի մինչև 95% (այլ արժույթով ներդրման դեպքում՝ մինչև 80%)[cite: 17]:</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">15.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Գանձվող վճարներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Վարկի գումարի 0.5%, բայց ոչ պակաս, քան 50,000 ՀՀ դրամը[cite: 17]:</p>
              <p>• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների[cite: 17]:</p>
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">16.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի հաստատման կամ մերժման որոշումների կայացման ժամկետներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>• Վարկի հաստատման կամ մերժման որոշումը կայացվում է առավելագույնը <strong>10 (տասը)</strong> աշխատանքային օրվա ընթացքում՝ պահանջվող փաստաթղթերն ամբողջությամբ ներկայացնելուց հետո[cite: 17]:</p>
              <p>• Վարկը տրամադրվում է դրական որոշման դեպքում՝ գրավի գործընթացն ավարտելուց հետո առավելագույնը <strong>2 (երկու)</strong> աշխատանքային օրում[cite: 17]:</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ծանոթագրություններ */}
    <div className="p-6 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 space-y-1">
      <p><span className="font-bold text-purple-700">[1]</span> Անշարժ և շարժական գույքի նպատակային և գործառնական նշանակության բովանդակությունը որոշվում է այն պետության իրավունքով, որտեղ գտնվում է տվյալ գույքը[cite: 18]:</p>
      <p><span className="font-bold text-purple-700">[2]</span> Վճարային քարտերի միջոցով տրամադրվող վարկային գծի և օվվերդրաֆտի առավելագույն ժամկետը չի կարող գերազանցել 60 ամիսը[cite: 18]:</p>
      <p><span className="font-bold text-purple-700">[3]</span> Փաստացի տոկոսադրույքի մեծությունը/արժեքը կարող է նշվածից տարբերվել՝ կախված մարման գրաֆիկից և տոկոսադրույքի շեղումներից[cite: 18]:</p>
      <p><span className="font-bold text-purple-700">[4]</span> Երևան, Լոռի, Շիրակի և Կոտայքի մարզերում գտնվող անշարժ գույք՝ բնակարան, բնակելի տուն, տարածք (բացառությամբ արտադրական և գյուղատնտեսական նշանակության տարածքների)[cite: 18]:</p>
    </div>
  </div>
)}
       
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