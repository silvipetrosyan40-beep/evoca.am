import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function DisplacedMortgageLoan() {
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
          .displaced-mortgage-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .displaced-mortgage-title {
            font-size: 25px !important;
            line-height: 1.2 !important;
          }
          .displaced-mortgage-subtitle {
            font-size: 15px !important;
          }
          .displaced-mortgage-about-grid {
            gap: 24px !important;
          }
          .displaced-mortgage-about-text {
            font-size: 14px !important;
          }
          .displaced-mortgage-rates-box {
            padding: 18px !important;
          }
          .displaced-mortgage-rate-value {
            font-size: 24px !important;
          }
          .displaced-mortgage-table td {
            padding: 12px 14px !important;
            font-size: 13px !important;
          }
          .displaced-mortgage-num {
            width: 36px !important;
            padding: 12px 6px !important;
          }
          .displaced-mortgage-label {
            width: 38% !important;
          }
          .displaced-mortgage-related-section {
            padding-top: 24px !important;
          }
          .displaced-mortgage-related-title {
            font-size: 20px !important;
          }
          .displaced-mortgage-related-card {
            padding: 14px !important;
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
        <div className="displaced-mortgage-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="displaced-mortgage-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")}
            </h1>
            <p className="displaced-mortgage-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17364209867554/560x400.png" 
                alt={t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")} 
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
        </div>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        {activeTab === 'about' && (
          <div className="displaced-mortgage-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="displaced-mortgage-about-text lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                {t("Հիփոթեքային վարկը տրամադրվում է ՀՀ-ում բնակելի նշանակության անշարժ գույքի՝ բնակարանի, անհատական բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռքբերման կամ բնակելի տան կառուցապատման նպատակով:")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="displaced-mortgage-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
                  {t("֏")}
                </span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="displaced-mortgage-rate-value text-3xl font-extrabold text-purple-700">{t("55 մլն ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="displaced-mortgage-rate-value text-3xl font-extrabold text-purple-700">{t("120 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Մարման ժամկետ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="displaced-mortgage-rate-value text-3xl font-extrabold text-purple-700">13%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'conditions' && (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="displaced-mortgage-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկավորման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("ՀՀ-ում բնակելի նշանակության անշարժ գույքի՝ բնակարանի, անհատական բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռքբերում կամ կառուցապատում:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Հավաստագրում ներառված անձը կամ նրա ընտանիքի անդամը: Վարկառուի տարիքային շեմը հաշվի չի առնվում, եթե գործում առկա է համավարկառու, ում 65 տարեկանը չի բոլորի վարկի սպասարկման ողջ ընթացքում:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ծրագրի շահառուներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Կառավարության 2024 թ. մայիսի 16-ի N 710-Լ որոշմամբ սահմանված անձիք:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումարը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("2,000,000.00 - 55,000,000.00 ՀՀ դրամ")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("120 ամիս")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Պետության կողմից վճարվող կանխավճար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Հավաստագրի արժեքի 20%")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան անվանական տոկոսադրույք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">13%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Աջակցության սահմանաչափեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Աջակցության չափն ընտանիքիյուրաքանչյուր անդամի հաշվով որոշվում է ըստ հավաստագրի իրացման համար շահառու ընտանիքի կողմից ընտրված բնակավայրի: Բնակավայրերի ցանկը հաստատված է Կառավարության 2024 թ. մայիսի 16-ի N 710-Լ որոշմամբ:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկային պայմանագրով ամրագրված վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0,015%,")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0,1%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Ձեռք բերվող անշարժ գույք, անշարժ գույքի գնման իրավունք: Կառուցապատման դեպքում՝ հողամասը, որտեղ իրականացվում է անշարժ գույքի կառուցումը/կառուցվող անշարժ գույքը:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Չի պահանջվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ՝ միանվագ կամ փուլային")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Բանկի կողմից գանձվող միջնորդավճարներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Առանց միջնորդավճարի")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("16.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկունակության գնահատում")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("1. Վարկային հայտի ներկայացման օրվա դրությամբ, վարկառուն, համավարկառուները, գրավատուները չպետք է ունենան ստանդարտ դասից խիստ դասով դասակարգված գործող պարտավորություններ:")}</p>
                      <p>{t("2. Այն դեպքում, երբ վարկի գումարը չի գերազանցում ծրագրով սահմանված պետական աջակցության սահմանաչափերը, վարկունակության գնահատում չի իրականացվում:")}</p>
                      <p>{t("3. Այն դեպքում, երբ վարկի գումարը գերազանցում է ծրագրով սահմանված պետական աջակցության սահմանաչափերը, կատարվում է վարկունակության գնահատում, ընդ որում եկամուտ/ծախս հարաբերակցությունը (OTI) կարող է կազմել առավելագույնը 100%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("17.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("1. Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում՝ որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերն ամբողջությամբ ներկայացնելուց հետո:")}</p>
                      <p>{t("2. Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացն ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("18.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Հատուկ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("1. Շահառու ընտանիքի բոլոր անդամներն ունեն Հայաստանի Հանրապետության քաղաքացիություն:")}</p>
                      <p>{t("2. Ձեռք բերվող կամ կառուցվող բնակարանի կամ անհատական բնակելի տան բնակելի մակերեսը շահառու ընտանիքի յուրաքանչյուր անդամի հաշվով չպետք է պակաս լինի 9 քմ-ից:")}</p>
                      <p>{t("3. Ձեռք բերվող բնակարանի կամ կառուցվող շենքից բնակարան գնելու իրավունքի կամ անհատական բնակելի տան ձեռքբերման գինը չպետք է գերազանցի 55 մլն դրամը:")}</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="displaced-mortgage-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("19.")}</td>
                    <td className="displaced-mortgage-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ դրույթներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Սույն պայմաններով չկարգավորվող դեպքերը կարգավորվում են Կառավարության 2024 թ. մայիսի 16-ի N 710-Լ որոշման դրույթներով և պայմաններով:")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="displaced-mortgage-related-section pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="displaced-mortgage-related-title text-2xl font-bold text-gray-900">
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
                    className="displaced-mortgage-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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