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
              Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                    Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17764888992078/560x400.png" 
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
           onClick={() => setActiveTab('documents')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'documents'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Պահանջվող փաստաթղթերի ցանկ
         </button>
       </div>

       {activeTab === 'about' && (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
      <p>
        Քո մեքենան ավելի մոտ է, քան թվում է։
      </p>
      <p>
        Եթե մտածում են քո երազանքների ավտոմեքենայի մասին, հիմա ճիշտ պահն է։
        Դու ընտրում ես՝ ինչպիսին լինի քո մեքենան՝ սկսած մոդելից մինչև փոքրիկ դետալներ՝ անգամ ինտերիերի գույնը։
        <strong className="text-purple-700"> Evocabank</strong>-ն առաջարկում է մրցունակ պայմաններ, ցածր տոկոսադրույք և ճկուն մարման տարբերակներ, որպեսզի դու կենտրոնանաս միայն մեկ բանի վրա՝ քո մեքենայի ընտրության։
      </p>
      <p>
        Դու որոշում ես, թե ինչպիսին լինի մեքենդ, մենք հոգում ենք մնացած ամեն ինչ՝ ֆինանսավորումից մինչև ամբողջ գործընթացի կազմակերպում։
        Ընտրիր մեքենան Հայաստանում կամ պատվիրիր այն արտասահմանյան առաջնային շուկայից, իսկ մենք կօգնենք, որ այն դառնա իրականություն՝ հնարավորինս հարմար և հասանելի պայմաններով[cite: 14]։
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
          <span className="text-3xl font-extrabold text-purple-700">50 մլն ֏</span>
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
          <span className="text-gray-700 font-medium text-base">ժամկետ</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">սկսած</p>
          <span className="text-3xl font-extrabold text-purple-700">14%-ից</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Տոկոսադրույքից</span>
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
            <td className="p-4 sm:p-6 text-gray-700 align-top">18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր լիզինգի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին կամ առկա է վերոնշյալ պահանջներին բավարարող համալինգառու[cite: 15]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ֆինանսավորման արժույթ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ դրամ[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ֆինանսավորման գումար</td>
            <td className="p-4 sm:p-6 text-purple-700 font-semibold align-top">4,000,000 - 50,000,000 ֏[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման ժամկետը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">24 - 60 ամիս[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույքի տեսակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Հաստատուն[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման ժամանակացույց</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>• Անուիտետային (լիզինգի գումարի և տոկոսագումարի հանրագումարը վճարվում է հավասարաչափ ամսական պարբերականությամբ)[cite: 15]</p>
              <p>• Զանգվածաձև (մայր գումարի հավասարաչափ մարումներով լիզինգ), վճարումները պետք է կատարվեն ամսական կտրվածքով[cite: 15]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ձևակերպման շուկա</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Լիզինգի առարկա կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային շուկայից[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան անվանական տոկոսադրույքներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Անվանական</p>
                  <p className="text-sm font-semibold text-purple-700">14% - 18%[cite: 15]</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Փաստացի</p>
                  <p className="text-sm font-semibold text-purple-700">15.31%-22.41%[cite: 15]</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Լիզինգի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Տուգանք չի կիրառվում[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Լիզինգի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 15]</p>
              <p>• Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 15]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վերադարձելիության ապահովման միջոց</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորություններ (ըստ պահանջի), առանձին դեպքերում՝ Բանկի համար ընդունելի այլ ապահովում[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Լիզինգի առարկա</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Լիզինգի առարկա չեն կարող հանդիսանալ այն տրանսպորտային միջոցները, որոնք կրում են վտանգ սպառնացող ապրանքներ՝ տոքսիկ նյութեր, քիմիկատներ, ռադիոակտիվ և պայթյունավտանգ նյութեր[cite: 15]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Լիզինգի առարկայի գնահատում</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Գնահատում չի իրականացվում։ Որպես լիզինգի արժեք հիմք է ընդունվում մատակարար ընկերության կողմից ներկայացված հաշիվ-ապրանքագրում նշված արժեքը[cite: 16]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Կանխավճար</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Եկամտի վերլուծությամբ</p>
                  <p className="text-sm font-semibold text-purple-700">Նվազագույնը 10%[cite: 16]</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Առանց եկամուտների վերլուծության</p>
                  <p className="text-sm font-semibold text-purple-700">Նվազագույնը 30%[cite: 16]</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">15.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տրամադրման եղանակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Անկանխիկ[cite: 16]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">16.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Գանձվող պարտադիր վճարներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Լիզինգի գումարից միանվագ գանձվող միջնորդավճար՝ պայմանագրային գումարի 0.6% չափով[cite: 16]</p>
              <p>• Լիզինգի իրավունքի գրանցման հետ կապված վճարներ պետական իրավասու մարմնում[cite: 16]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">17.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ապահովագրություն</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>• Տրանսպորտային միջոցի ԿАСКО ապահովագրություն - պարտադիր յուրաքանչյուր տարի լիզինգի սպասարկման ամբողջ ժամկետի ընթացքում, առնվազն լիզինգի մայր գումարի մնացորդի չափով: Բանկի հաշվին կնքելու դեպքում ապահովագրական վկայագիրը կնքվում է լիզինգի մայր գումարի մնացորդի չափով և սահմանվում է անձնական օգտագործման նպատակը[cite: 16]։</p>
              <p>• ԿАСКО ապահովագրությունը հաճախորդի հաշվին կնքելու դեպքում լիզինգի տարեկան անվանական տոկոսադրույքը նվազում է 1 տոկոսային կետով, ոչ պակաս քան 14%[cite: 16]։</p>
            </td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">18.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• 10,000,000 ՀՀ դրամը չգերազանցող հայտի դիտարկման դեպքում՝ 3 աշխատանքային օրվա ընթացքում[cite: 16]</p>
              <p>• 10,000,000 ՀՀ դրամը գերազանցող հայտի դիտարկման դեպքում՝ 7 աշխատանքային օրվա ընթացքում[cite: 16]</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>            
         </div>
        )}

       {activeTab === 'documents' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
    <div className="p-6 sm:p-8 border-b border-gray-100">
      <h3 className="text-xl font-bold text-gray-900">Պահանջվող փաստաթղթերի ցանկ</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Լիզինգի տրամադրման դիմում</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ), կարող է պահանջվել նաև ընտանիքի անդամներինը։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Եթե հայտատուն ամուսնացած է, ապա ամուսնու/կնոջ 2-րդ կետով սահմանված փաստաթղթերը և ամուսնության վկայական</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացուցային օրը։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p className="font-semibold text-gray-800">Հաճախորդի ինքնազբաղված լինելու դեպքում՝</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված քաղվածք գրանցամատյանից</li>
                <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում</li>
                <li>Գործունեության լիցենզիա (առկայության դեպքում)</li>
                <li>Վերջին 1 տարվա ֆինանսական հաշվետվությունները</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ (առկայության դեպքում)</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վաճառողի կողմից տրված ավտոմեքենայի գնման համաձայնագիր, կանխավճարի վճարման անդորրագիր, առուվաճառքի պայմանագիր, հաշիվ-ապրանքագիր</td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Բանկի պահանջով այլ փաստաթղթեր</td>
          </tr>
        </tbody>
      </table>
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