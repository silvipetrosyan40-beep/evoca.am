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
              Գույքի գրավով ապահովված վարկ
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/1614256117133/560x400.png" 
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

       {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Անկախ նրանից՝ ցանկանում ես ձևակերպել նոր վարկ, թե վերաֆինանսավորել գործողը, <strong className="text-purple-700">Evocabank</strong>-ն առաջարկում է քո կարիքներին հարմարեցված ճկուն լուծումներ, մարման հարմար պայմաններ և ֆինանսավորման բարձր սահմանաչափ։ Վարկը կարող է տրամադրվել ինչպես վարկունակության գնահատմամբ, այնպես էլ առանց դրա՝ կախված քո նախընտրած տարբերակից[cite: 17]:
              </p>
              <p>
                Եթե արդեն ունես գույքի գրավով ապահովված վարկ այլ բանկում կամ վարկային կազմակերպությունում, կարողես այն տեղափոխել Evocabank և օգտվել ավելի շահավետ ու հարմար պայմաններից[cite: 17]:
              </p>
              
              <ul className="space-y-3 pt-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-700 rounded-full flex-shrink-0"></span>
                  <span>Տարեկան տոկոսադրույքի նվազեցում՝ մինչև 3%-ով[cite: 17]</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-700 rounded-full flex-shrink-0"></span>
                  <span>Վերաֆինանսավորման հետ կապված հիմնական ծախսերը՝ Բանկի կողմից[cite: 17]</span>
                </li>
              </ul>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                  <span className="text-3xl font-extrabold text-purple-700">150 մլն. ֏</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Գումար</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">անշարժ գույքի գրավադրման դեպքում</p>
                  <span className="text-3xl font-extrabold text-purple-700">24-180 ամիս</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Վարկի մարման ժամկետը</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">շարժական գույքի գրավադրման դեպքում</p>
                  <span className="text-3xl font-extrabold text-purple-700">60 ամիս</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Վարկի մարման ժամկետը</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">սկսած</p>
                  <span className="text-3xl font-extrabold text-purple-700">14%-ից</span>
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
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով։[cite: 19]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ովքեր կարող են դիմել</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">18– 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու։[cite: 19]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման գումար</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800 mb-1">Վարկունակության գնահատմամբ</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">3,000,000 – 150,000,000 ֏</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Տրանսպորտային միջոցի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">5,000,000 – 50,000,000 ֏</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Առանց վարկունակության գնահատման</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">3,000,000 – 100,000,000 ֏</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկավորման արժույթ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ դրամ[cite: 19]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման ժամկետ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800 mb-1">Հաստատուն տոկոսադրույքի դեպքում՝</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">24 - 84 ամիս</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Տրանսպորտային միջոցի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">60 ամիս</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span className="font-semibold text-gray-800">Լողացող տոկոսադրույքի դեպքում (անշարժ գույքի դեպքում)</span>
                          <span className="font-semibold text-purple-700">36 - 180 ամիս</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան անվանական տոկոսադրույք</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Վարկունակության գնահատմամբ</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1 border-b border-gray-100">
                          <span>Անշարժ գույքի գրավադրմամբ[cite: 19]</span>
                          <span className="font-semibold text-purple-700">14% - 17%</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Տրանսպորտային միջոցի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">18%</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Առանց վարկունակության գնահատման</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">15% - 18%</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան փաստացի տոկոսադրույք</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Վարկունակության գնահատմամբ</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1 border-b border-gray-100">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">14.99% - 21.32%</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Տրանսպորտային միջոցի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">19.72% - 21.57%</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Առանց վարկունակության գնահատման</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույքի գրավադրմամբ</span>
                          <span className="font-semibold text-purple-700">16.16% - 22.54%</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>• Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ՝ սկսած 5%-ից + փոփոխուն բաղադրիչ[cite: 20]:</p>
                      <p>• Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք ±4%, սակայն ոչ ավել քան 21%[cite: 20]:</p>
                      <p>• Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսվա սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում հրապարակված) տոկոսադրույքը[cite: 20]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկ/գրավ հարաբերակցություն</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Վարկունակության գնահատմամբ</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1 border-b border-gray-100">
                          <span>Անշարժ գույքի գրավադրման դեպքում</span>
                          <span className="font-semibold text-purple-700">գնահատված արժեքի մինչև 80%</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Տրանսպորտային միջոցի գրավադրման դեպքում</span>
                          <span className="font-semibold text-purple-700">գնահատված արժեքի մինչև 60%</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Առանց վարկունակության գնահատման</p>
                        <div className="flex justify-between text-sm text-gray-600 py-1">
                          <span>Անշարժ գույք՝ գնահատված արժեքի</span>
                          <span className="font-semibold text-purple-700">մինչև 60%</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի վերադարձելիության ապահովման միջոցները</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1 text-sm">
                      <p>• Անշարժ գույք (բացառությամբ արտադրական տարածքների)[cite: 21]:</p>
                      <p>• Ռուսական արտադրության՝ մինչև 3 տարվա վաղեմության տրանսպորտային միջոց[cite: 21]:</p>
                      <p>• Ոչ ռուսական արտադրության՝ մինչև 7 տարվա վաղեմության տրանսպորտային միջոց[cite: 21]:</p>
                      <p>• Կարող է պահանջվել ֆիզիկական կամ իրավաբանական անձի երաշխավորություն[cite: 21]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ապահովագրություն</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top text-sm">
                      Միայն տրանսպորտային միջոցի գրավադրման դեպքում՝ գրավ հանդիսացող տրանսպորտային միջոցի ապահովագրություն յուրաքանչյուր տարի՝ առնվազն վարկի մնացորդի չափով[cite: 21]:
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի մարման ժամանակացույց</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1 text-sm">
                      <p>• Անուիտետային (ամենամսյա)[cite: 22]</p>
                      <p>• Զգանաձևաձև (ամենամսյա)[cite: 22]</p>
                      <p>• Ճկուն գրաֆիկ (տոկոսների վճարում՝ առավելագույնը 36 ամիս)[cite: 22]</p>
                      <p>• Վարկային գիծ (սահմանաչափը տրամադրվում է տարեկան հաստատուն տոկոսադրույքով, կարող է սահմանվել 0.5%-1% տոկոսադրույք չօգտագործված մասի համար)[cite: 22]</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p className="font-semibold text-gray-800">Սպառողական կრեդիտավորման մասին ՀՀ օրենքով կարգավորվող վարկերի դեպքում՝</p>
                      <p className="text-purple-700 font-medium">Տուգանք չի կիրառվում[cite: 22]</p>
                      <p className="font-semibold text-gray-800 pt-2">Սպառողական կրեդիտավորման մասին ՀՀ օրենքով չկարգավորվող վարկերի դեպքում՝</p>
                      <p>Այլ բանկերի կամ վարկային կազմակերպությունների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք՝ վաղաժամկետ մարվող մայր գումարի 1%-ի չափով[cite: 22]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1 text-sm">
                      <p>Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 22],</p>
                      <p>Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 22]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">15.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի տրամադրման եղանակը</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top text-sm">Անկանխիկ (վարկի գումարը մուտքագրվում է հաճախորդի բանկային հաշվին)[cite: 22]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">16.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Գանձվող վճարներ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>• Տրամադրման միանվագ գանձվող միջնորդավճար՝ պայմանագրային գումարի 0.3% չափով (15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկերի դեպքում՝ ոչ ավել քան 100,000 ՀՀ դրամ)[cite: 22]:</p>
                      <p>• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների[cite: 22]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">17.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վերաֆինանսավորման դեպքում</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>• Վերաֆինանսավորվող վարկի նվազագույն գումարը՝ սկսած 10,000,000 ՀՀ դրամից[cite: 23]:</p>
                      <p>• Վերաֆինանսավորվող վարկը պետք է սպասարկված լինի առնվազն 12 ամիս[cite: 23]:</p>
                      <p>• Գործող վարկային պայմանագրի տարեկան տոկոսադրույքի նվազեցում՝ մինչև 3%-ով, ոչ պակաս քան 14%[cite: 23]:</p>
                      <p>• Վերաֆինանսավորման հետ կապված ծախսերն իրականացվում է Բանկի հաշվին (15,000,000 ՀՀ դրամը գերազանցող վարկերի դեպքում՝ առաջին 36 ամսում վաղաժամկետ մարման դեպքում պարտավոր է փոխհատուցել Բանկի ծախսերը)[cite: 23]:</p>
                      <p>• Միանվագ միջնորդավճար չի գանձվում[cite: 23]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">18.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Այլ պայմաններ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>• Եթե վարկի գումարը գերազանցում է գրավի արժեքի 30%-ը՝ Վարկառուի կամ երաշխավորի Fico Սքորը պետք է լինի 510 և բարձր, միաժամանակ Հաճախորդը չպետք է ունենա վերջին 1 տարում դասակարգումներ և ուշացումներ 30 օրից ավել[cite: 23]:</p>
                      <p>• Առանց վարկունակության գնահատման հայտերի դեպքում վարկառուն և գրավատունը պետք է լինեն նույն անձը[cite: 23].</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">19.</td>
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>• Որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում՝ անհրաժեշտ փաստաթղթերը ներկայացնելուց հետո[cite: 23]:</p>
                      <p>• Տրամադրվում է դրական որոշման և գրավի ձևակերպման ավարտից հետո առավելագույնը 2 աշխատանքային օրում[cite: 23]:</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OTI ծանոթագրություն */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
              <span className="font-bold text-purple-700">[1] </span> Նշված տոկոսադրույքները կիրառվում են, եթե գրավադրվող տրանսպորտային միջոցի ապահովագրության կնքումը ապահովվում է Բանկի կողմից և Բանկի հաշվին: Ապահովագրությունը վարկառուի կողմից և վարկառուի հաշվին կատարվելու դեպքում կարող է կիրառվել նշված տոկոսադրույքից 1% ցածր տոկոսադրույք:
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
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկի տրամադրման դիմում-հայտ[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Ամուսնության վկայական (առկայության դեպքում)[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p className="font-semibold text-gray-800 mb-1">Հաճախորդի ինքնազբաղված լինելու դեպքում՝</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li>Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված քաղվածք գրանցամատյանից[cite: 21]</li>
                        <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չ է պետական ռեգիստրի վկայականում կամ քաղվածքում[cite: 21]</li>
                        <li>Գործունեության լիցենզիա (առկայության դեպքում)[cite: 21]</li>
                        <li>Վերջին 1 տարվա ֆինանսական հաշվետվությունները[cite: 21]</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Գրավադրվող գույքի փաստաթղթերը[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Գրավադրվող գույքի գնահատման հաշվետվություն[cite: 21]</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Համապատասխան գրավի պայմանագրի կնքման համար անհրաժեշտ փաստաթղթեր[cite: 21]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր[cite: 21]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
            {/* նկարի հատվածը */}
        <div 
  className="relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
  style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142561171379/1920x527.jpg')` }}
>
  <div className="absolute inset-0 bg-purple-950/20 backdrop-brightness-95"></div>
  <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
      <span>Ձևակերպիր վարկ Evocabank-ում՝ խուսափելով ավելորդ թղթաբանությունից։ Սեղմ ժամկետում մենք կօգնենք լուծել քո ֆինանսական խնդիրները։

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