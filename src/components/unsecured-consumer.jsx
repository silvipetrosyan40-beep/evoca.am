import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
 
  const cards = [
    { id: 1, title: "Անգրավ սպառողական վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg", path: "/loans/unsecured-consumer" },
    { id: 2, title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg", path: "/hy/loans/car-loans/car-loans" },
    { id: 3, title: "Գույքի գրավով ապահովված վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg", path: "/consumer-loans/property-secured-loan" },
    { id: 4, title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER", img: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png", path: "/hy/loans/installment/evocapower-loan" },
    { id: 5, title: "Ոսկու գրավով (լոմբարդային) վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg", path: "/hy/loans/consumer-loans/gold-secured-pawn-loans" },
    { id: 6, title: "Տեղում Ապառիկ", img: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg", path: "/installment/point-of-sale-loans" },
    { id: 7, title: "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg", path: "/unsecured-consumer-loans/salary-overdrafts" },
    { id: 8, title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով", img: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg", path: "/mortgage-loans/residential-mortgage-loans" },
    { id: 9, title: "Action", img: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png", path: "/online-loans/action-loan" },
    { id: 10, title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png", path: "/mortgage-loans/for-displaced-families-of-nagorno-karabakh" },
    { id: 11, title: "Հողամասի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg", path: "/mortgage-loans/land-acquisition-loan" },
    { id: 12, title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով", img: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png", path: "/mortgage-loans/micro-renovation-loan-with-bank-resources" },
    { id: 13, title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ", img: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png", path: "/car-loans/leasing-of-vehicles-for-individuals" },
    { id: 14, title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)", img: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png", path: "/online-loans/online-overdraft" },
    { id: 15, title: "Անհատական վարկ «Ներդրումային»", img: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png", path: "/consumer-loans/individual-investment-loan" },
    { id: 16, title: "Ավտոկայանատեղիի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg", path: "/unsecured-consumer-loans/parking-space-purchase-loan" },
    { id: 17, title: "Հեծանիվի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png", path: "/installment/bicycle-purchase-loan" },
    { id: 18, title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ", img: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png", path: "/mortgage-loans/housing-mortgages-for-non-resident-individuals" },
    { id: 19, title: "Վերանորոգման վարկ EvocaHOME", img: "https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png", path: "/installment/evocahome" },
    { id: 20, title: "Դրամական միջոցների գրավով ապահովված անհատական վարկ", img: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg", path: "/consumer-loans/deposit-secured-credit-line-retail" },
    { id: 21, title: "Առևտրային հիփոթեքային վարկեր", img: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg", path: "/mortgage-loans/commercial-mortgage-loans" },
    { id: 22, title: "ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր", img: "https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program" },
    { id: 23, title: "ԱՀԸ-ի ծրագրով կառուցապատման վարկեր", img: "https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png", path: "/mortgage-loans/construction-loan-national-mortgage-company" },
    { id: 24, title: "ԱՀԸ-ի ծրագրով վերանորոգման վարկեր", img: "https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg", path: "/mortgage-loans/renovation-loans-under-national-mortgage-company" },
    { id: 25, title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»", img: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program" },
    { id: 26, title: "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ", img: "https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg", path: "/unsecured-consumer-loans/credit-line-with-visa-infinite-card" },
    { id: 27, title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png", path: "/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh" },
    { id: 28, title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png", path: "/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh" },
    { id: 29, title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg", path: "/unsecured-consumer-loans/student-loans" },
    { id: 30, title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր", img: "https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png", path: "/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia" },
    { id: 31, title: "Evolution", img: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png", path: "/unsecured-consumer-loans/evolution" },
    { id: 32, title: "Հիփոթեքային վարկեր Զինծառայողներին", img: "https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png", path: "/unsecured-consumer-loans/evolution" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <style>{`
        @media (max-width: 640px) {
          .loan-detail-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .loan-detail-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .loan-detail-subtitle {
            font-size: 15px !important;
          }
          .loan-detail-rates-box {
            padding: 20px !important;
          }
          .loan-detail-rate-value {
            font-size: 24px !important;
          }
        }
      `}</style>

      {/* Հեդրը (Header) */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա քարտերի բաժնի համար) */}
      <div className="bg-purple-800 text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/hy/loans" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">{t("Վարկեր")}</Link>
          <Link to="/hy/credit-history-and-score" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">{t("Վարկային պատմություն և սքոր")}</Link>
          <Link to="/loans/important-info" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">{t("Կարևոր տեղեկատվություն")}</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="loan-detail-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="loan-detail-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Անգրավ սպառողական վարկ")}
            </h1>
            <p className="loan-detail-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142452390597/560x400.png" 
                alt={t("Անգրավ սպառողական վարկ")} 
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
           {t("Վարկի մասին")}
         </button>
         <button
           onClick={() => setActiveTab('conditions')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'conditions'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           {t("Պայմաններ")}
         </button>
         <button
           onClick={() => setActiveTab('documents')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'documents'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           {t("Պահանջվող փաստաթղթերի ցանկ")}
         </button>
       </div>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-purple-700">Evocabank</strong>
                {t("-ն առաջարկում է մինչև 10,000,000 ՀՀ դրամ անգրավ սպառողական վարկ՝ պարզ, արագ և հարմար։ Վարկը նախատեսված է Ձեր ամենատարբեր ֆինանսական կարիքները հոգալու համար՝ անկախ նրանից՝ ցանկանում եք իրականացնել վաղուց պլանավորված նպատակը, թե լուծել անսպասելի ծախսերը։ Կախված վարկի գումարից, վարկունակությունից և ընտրված պայմաններից՝ վարկը կարող է տրամադրվել առանց երաշխավորի, ինչպես նաև մեկ կամ երկու անձի երաշխավորությամբ։ Այս մոտեցումը հնարավորություն է տալիս ընտրել Ձեզ ամենահարմար տարբերակը։ Մենք անում ենք հնարավոր ամեն բան՝ վարկավորման գործընթացը պարզեցնելու և արագացնելու համար՝ նվազագույն թղթաբանությամբ և վարկի արագ ձևակերպմամբ։")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="loan-detail-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
                  {t("դ")}
                </span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="loan-detail-rate-value text-3xl font-extrabold text-purple-700">{t("10 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="loan-detail-rate-value text-3xl font-extrabold text-purple-700">{t("60 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Ժամկետ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="loan-detail-rate-value text-3xl font-extrabold text-purple-700">{t("19%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>
          </div>
        )}

{activeTab === 'conditions' && (
          <div className="loan-conditions-wrapper bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <style>{`
              @media (max-width: 640px) {
                .loan-conditions-table td {
                  padding: 12px 14px !important;
                  font-size: 13px !important;
                }
                .loan-conditions-num {
                  width: 36px !important;
                  padding: 12px 6px !important;
                }
                .loan-conditions-label {
                  width: 38% !important;
                }
                .loan-conditions-grid {
                  grid-template-columns: 1fr !important;
                  gap: 10px !important;
                }
                .loan-conditions-note {
                  padding: 16px !important;
                  font-size: 12.5px !important;
                }
              }
            `}</style>

            <div className="overflow-x-auto">
              <table className="loan-conditions-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով։")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին: Տվյալ պայմանը վերաբերում է նաև երաշխավոր ֆիզիկական անձանց:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Առանց եկամուտների հիմնավորման")}</span>
                        <span className="font-semibold text-purple-700">{t("1,000,000 - 3,000,000 ֏")}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-1">
                        <span className="text-gray-600">{t("Եկամուտների հիմնավորմամբ")}</span>
                        <span className="font-semibold text-purple-700">{t("1,000,000 - 10,000,000 ֏")}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("36 - 60 ամիս")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան տոկոսադրույքներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <div className="loan-conditions-grid grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">{t("Առանց եկամուտների հիմնավորման")}</p>
                          <p className="text-sm font-medium">{t("Անվանական՝")} <strong className="text-purple-700">{t("21%")}</strong></p>
                          <p className="text-sm font-medium">{t("Փաստացի՝")} <strong className="text-purple-700">{t("23.17%")}</strong></p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամանակացույց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անուիտետային (ամենամսյա պարբերականությամբ)")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%,")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Չի սահմանվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոցները")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Առանց եկամուտների հիմնավորման (1,000,000 ՀՀ դրամ)")}</p>
                        <p className="text-gray-600 text-sm">{t("Նվազագույնը 1 (մեկ) անձի երաշխավորություն")}</p>
                      </div>
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Առանց եկամուտների հիմնավորման (1,000,001 - 3,000,000 ՀՀ դրամ)")}</p>
                        <p className="text-gray-600 text-sm">{t("Նվազագույնը 2 (երկու) անձի երաշխավորություն")}</p>
                      </div>
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Եկամուտների հիմնավորմամբ (1,000,000 - 3,000,000 ՀՀ դրամ)")}</p>
                        <p className="text-gray-600 text-sm">{t("Առանց երաշխավորի պահանջի")}</p>
                      </div>
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Եկամուտների հիմնավորմամբ (3,000,001 - 5,000,000 ՀՀ դրամ)")}</p>
                        <p className="text-gray-600 text-sm">{t("Նվազագույնը 1 (մեկ) անձի երաշխավորություն")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t("Եկամուտների հիմնավորմամբ (5,000,001 - 10,000,000 ՀՀ դրամ)")}</p>
                        <p className="text-gray-600 text-sm">{t("Նվազագույնը 2 (երկու) անձի երաշխավորություն")}</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկունակության գնահատում / վարկի հաստատման պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("• Եկամուտների հիմնավորմամբ հայտերի վերլուծության ժամանակ իրականացվում է պարզեցված վարկունակության գնահատում, սակայն OTI գործակիցը չպետք է գերազանցի 70%-ը:")}</p>
                      <p>{t("• Անկախ վարկի գումարից և բավարար հիմնավորված եկամուտների առկայությունից՝ «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ից ստացված տեղեկատվության համաձայն Հաճախորդի կամ երաշխավորներից որևէ մեկի FICO (սքորը) պետք է լինի 540 և բարձր:")}</p>
                      <p>{t("• Առանց եկամուտների հիմնավորման վարկավորման դեպքում Հաճախորդը վերջին 1 տարվա ընթացքում չպետք է ունենա վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ բանկերից և վարկային կազմակերպություններից վերաֆինանսավորման դեպքում / հատուկ պայման")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Այլ բանկերից և վարկային կազմակերպություններից վարկերի վերաֆինանսավորման դեպքում, եթե ակնկալվող վարկի գումարը գերազանցում է 3,000,000 ՀՀ դրամը, ապա կարող է տրամադրվել մայր գումարի մարման գծով արտոնյալ ժամանակահատված մինչև 6 ամիս ժամկետով:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 3 (երեք) աշխատանքային օրվա ընթացքում՝ որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:")}</p>
                      <p>{t("• Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, վարկավորման և երաշխավորության պայմանագրերը/համաձայնագրերը կնքելուց հետո 2 (երկու) աշխատանքային օրվա ընթացքում:")}</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="loan-conditions-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("16.")}</td>
                    <td className="loan-conditions-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("• Վարկի համար դիմող անձի հետ փոխկապակցված անձը (ընտանիքի անդամը կամ համատեղ տնտեսություն վարող անձը) չպետք է ունենա այս վարկատեսակի գործող վարկ:")}</p>
                      <p>{t("• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների:")}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OTI ծանոթագրություն */}
            <div className="loan-conditions-note p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
              <span className="font-bold text-purple-700">{t("[1] OTI (Obligations to income)")}</span>
              {t(" – Վարկունակության ստուգման գործակից, որով Հաճախորդի վարկային պարտավորությունների ամսական մարումները հարաբերակցվում են միջին ամսական զուտ եկամտին:")}
            </div>
          </div>
        )}

       {activeTab === 'documents' && (
          <div className="loan-docs-wrapper bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <style>{`
              @media (max-width: 640px) {
                .loan-docs-header {
                  padding: 18px !important;
                }
                .loan-docs-title {
                  font-size: 18px !important;
                }
                .loan-docs-table td {
                  padding: 12px 14px !important;
                  font-size: 13px !important;
                }
                .loan-docs-num {
                  width: 36px !important;
                  padding: 12px 6px !important;
                }
                .loan-promo-banner {
                  height: 250px !important;
                  margin-top: 16px !important;
                  margin-bottom: 16px !important;
                }
                .loan-promo-title {
                  font-size: 18px !important;
                  line-height: 1.35 !important;
                }
                .loan-related-title {
                  font-size: 20px !important;
                }
                .loan-related-card {
                  padding: 14px !important;
                }
              }
            `}</style>

            <div className="loan-docs-header p-6 sm:p-8 border-b border-gray-100">
              <h3 className="loan-docs-title text-xl font-bold text-gray-900">
                {t("Պահանջվող փաստաթղթերի ցանկ")}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="loan-docs-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկի տրամադրման դիմում-հայտ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք փաստացի բնակության վայրից")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք եկամուտների վերաբերյալ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ")}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="loan-docs-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Նկարի հատվածը */}
        <div 
          className="loan-promo-banner relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
          style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142452390653/1920x527.jpg')` }}
        >
          <div className="absolute inset-0 bg-purple-950/20 backdrop-brightness-95"></div>
          <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
            <h2 className="loan-promo-title text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
              <span className="inline-block text-pink-400">⚡</span>
              <span>{t("Լավագույն գաղափարներդ կյանքի՛ կոչիր Evocabank-ի հետ ու պատրաստ եղիր նոր իրադարձությունների:")}</span>
            </h2>
          </div>
        </div>

        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="loan-related-title text-2xl font-bold text-gray-900">
                {t("Այլ վարկեր")}
              </h2>
              
              <div className="flex space-x-2">
                <button 
                  ref={prevRef} 
                  aria-label={t("Նախորդ վարկը")}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❮
                </button>
                <button 
                  ref={nextRef} 
                  aria-label={t("Հաջորդ վարկը")}
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
                    className="loan-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
                  >
                    <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                      <img 
                        src={card.img} 
                        alt={t(card.title)} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {t(card.title)}
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