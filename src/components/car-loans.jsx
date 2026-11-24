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
          .car-loan-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .car-loan-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .car-loan-subtitle {
            font-size: 15px !important;
          }
          .car-loan-rates-box {
            padding: 20px !important;
          }
          .car-loan-rate-val {
            font-size: 24px !important;
          }
          .car-loan-table td {
            padding: 12px 14px !important;
            font-size: 13px !important;
          }
          .car-loan-num {
            width: 36px !important;
            padding: 12px 6px !important;
          }
          .car-loan-label {
            width: 38% !important;
          }
          .car-loan-notice {
            padding: 16px !important;
            font-size: 12.5px !important;
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
        <div className="car-loan-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="car-loan-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Ավտոմեքենայի ձեռքբերման նպատակով վարկ")}
            </h1>
            <p className="car-loan-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142451996686/560x400.png" 
                alt={t("Ավտոմեքենայի ձեռքբերման նպատակով վարկ")} 
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
            onClick={() => setActiveTab('partners')}
            className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'partners'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {t("Գործընկեր ավտոսրահներ")}
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
                {t("21-րդ դարում")}{" "}
                <a href="#" className="text-purple-700 underline font-medium">{t("ավտովարկերի")}</a>{" "}
                {t("շնորհիվ հեշտացել և պարզեցվել է նոր ավտոմեքենա ձեռք բերելու գործընթացը։")}
              </p>
              <p>
                <strong className="text-purple-700">Evocabank</strong>
                {t("-ն առաջարկում է ավտոմեքենայի ձեռքբերման նպատակով տրամադրվող վարկեր՝ փոխշահավետ պայմաններով։ Գնե՛ք Ձեր ցանկալի ավտոմեքենան ինչպես")}{" "}
                <strong className="text-purple-700">{t("առաջնային")}</strong>
                {t(", այնպես էլ")}{" "}
                <strong className="text-purple-700">{t("երկրորդային շուկայից")}</strong>
                {t(":")}
              </p>
              <p>
                {t("Դուք ընտրե՛ք Ձեր նոր մեքենան, իսկ մենք, կարևորելով Ձեր ժամանակը, վարկավորման գործընթացը կիրականացնենք հնարավորինս սեղմ ժամկետում։")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="car-loan-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
                  {t("դ")}
                </span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="car-loan-rate-val text-3xl font-extrabold text-purple-700">{t("50 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="car-loan-rate-val text-3xl font-extrabold text-purple-700">{t("84 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Ժամկետ")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="car-loan-rate-val text-3xl font-extrabold text-purple-700">{t("13%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տոկոսադրույք")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="car-loan-rate-val text-3xl font-extrabold text-purple-700">{t("10%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Կանխավճար")}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Պայմաններ */}
        {activeTab === 'conditions' && (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="car-loan-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Վարկը տրամադրվում է առաջնային կամ երկրորդային շուկաներից անհատական օգտագործման թեթև մարդատար տրանսպորտային միջոց/ավտոմեքենա ձեռք բերելու նպատակով:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <span className="font-semibold text-purple-700">{t("4,000,000 - 50,000,000 ֏")}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("• Հաստատուն տոկոսադրույքի դեպքում՝ 36 - 60 ամիս")}</p>
                      <p>{t("• Լողացող տոկոսադրույքի դեպքում՝ 61 - 84 ամիս")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամանակացույց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("• Անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը վճարվում է հավասարաչափ ամսական պարբերականությամբ)")}</p>
                      <p>{t("• Զապայանաձև (մայր գումարի հավասարաչափ մարումներով վարկ), վճարումները պետք է կատարվեն ամսական կտրվածքով")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի ձևակերպման վայր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("• Ավտոսրահ/համագործակցող կազմակերպություն")}</p>
                      <p>{t("• Բանկ")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան անվանական տոկոսադրույքներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">{t("Առաջնային շուկայից ձեռք բերում")}</p>
                          <p className="text-sm font-medium">{t("Անվանական՝")} <strong className="text-purple-700">{t("13% - 17%")}</strong></p>
                          <p className="text-sm font-medium">{t("Առավելագույն փաստացի՝")} <strong className="text-purple-700">{t("13.86% - 20.88%")}</strong></p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">{t("Երկրորդային շուկայից ձեռք բերում")}</p>
                          <p className="text-sm font-medium">{t("Անվանական՝")} <strong className="text-purple-700">{t("15% - 19%")}</strong></p>
                          <p className="text-sm font-medium">{t("Առավելագույն փաստացի՝")} <strong className="text-purple-700">{t("16.46% - 21.17%")}</strong></p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>{t("• Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ՝ սկսած 5%-ից + փոփոխուն բաղադրիչ:")}</p>
                      <p>{t("• Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք ±2%:")}</p>
                      <p>{t("• Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի կնքման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող փոփոխուն բաղադրիչի արժեքը:")}</p>
                      <p>{t("• Երկրորդային շուկայի պարագայում կիրառելի է միայն մինչև 3 տարվա վաղեմություն ունեցող տրանսպորտային միջոցների ձեռք բերման դեպքում:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%,")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>{t("• Ձեռք բերվող տրանսպորտային միջոցը, որի վաղեմությունը չպետք է գերազանցի 7 տարին:")}</p>
                      <p>{t("• Ռուսական արտադրության ավտոմեքենաների դեպքում վարկավորումն իրականացվում է բացառապես առաջնային շուկայից ձեռք բերելու պայմանով:")}</p>
                      <p>{t("• Գրավի առարկա չեն կարող հանդիսանալ հատուկ նշանակության, մրցույթների մասնակցող կամ վտանգավոր նյութեր տեղափոխող մեքենաները:")}</p>
                      <p>{t("• Տաքսի ծառայության կամ վարձով տրվող ավտոմեքենաները կարող են ձեռք բերվել Բանկի հետ համագործակցող ավտոսրահներից:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Գրավադրվող գույքի գնահատում")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>{t("• Ավտոսրահից ձեռք բերման դեպքում տրանսպորտային միջոցի գնահատում չի իրականացվում, որպես գրավադրման արժեք հիմք է ընդունվում ավտոմեքենա իրացնող ընկերության կողմից Բանկի էլեկտրոնային համակարգում կամ ներկայացված տեղեկանքում նշված արժեքը/առուվաճառքի արժեքը:")}</p>
                      <p>{t("• Երկրորդային շուկայից ձեռք բերման դեպքում գրավադրվող գույքի գնահատումն իրականացվում է Բանկի հետ համագործակցող գնահատող կազմակերպության կամ Բանկի համապատասխան աշխատակցի կողմից:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Կանխավճար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p><strong>{t("Առաջնային շուկա՝")}</strong></p>
                      <p>{t("• Եկամտի վերլուծությամբ՝ նվազագույնը 10%")}</p>
                      <p>{t("• Առանց եկամտի վերլուծության՝ նվազագույնը 30%")}</p>
                      <p className="pt-2"><strong>{t("Երկրորդային շուկա (եկամտի վերլուծությամբ)՝")}</strong></p>
                      <p>{t("• Մինչև 3 (ներառյալ) տարեկան մեքենա՝ նվազագույնը 20%")}</p>
                      <p>{t("• 3-7 (ներառյալ) տարեկան մեքենա՝ նվազագույնը 30%")}</p>
                      <p>{t("• Առանց եկամուտների վերլուծության (երկրորդային շուկա)՝ նվազագույնը 40%")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("16.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Չի սահմանվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("17.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Հաճախորդի կողմից կատարվող լրացուցիչ վճարներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1 text-sm">
                      <p>{t("• Ավտոմեքենայի ձեռքբերման և գրավադրման հետ կապված պետական իրավասու մարմնում գրանցման վճարներ")}</p>
                      <p>{t("• Այլ վճարներ համաձայն Բանկում գործող ՍԱԿԱԳՆԵՐԻ ԵՎ ԴՐՈՒՅՔՆԵՐ-ի")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("18.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2 text-sm">
                      <p>{t("• Տրանսպորտային միջոցի ԿԱՍԿՈ ապահովագրություն - պարտադիր յուրաքանչյուր տարի վարկի սպասարկման ամբողջ ժամկետի ընթացքում, առնվազն վարկի մայր գումարի մնացորդի չափով:")}</p>
                      <p>{t("• ԿԱՍԿՈ ապահովագրությունը հաճախորդի հաշվին կնքելու դեպքում վարկի տարեկան անվանական տոկոսադրույքը նվազում է 1 տոկոսային կետով:")}</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="car-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("19.")}</td>
                    <td className="car-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top text-sm">
                      {t("Առաջնային շուկային պատկանող տրանսպորտային միջոց են համարվում ավտոսրահից անմիջապես ձեռք բերված ավտոմեքենաները:")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
         
            {/* Տեղեկացում */}
            <div className="car-loan-notice p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
              <span className="font-bold text-purple-700">{t("ՏԵՂԵԿԱՑՈՒՄ")}</span>{" "}
              {t("Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:")}
            </div>
          </div>
        )}
      {/* գործընկեր ավտոսրահներ */}
      {activeTab === 'partners' && (
        <div className="partners-wrapper bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <style>{`
            @media (max-width: 640px) {
              .partners-header {
                padding: 18px !important;
              }
              .partners-title {
                font-size: 18px !important;
              }
              .partners-desc {
                font-size: 12.5px !important;
              }
              .partners-table th,
              .partners-table td {
                padding: 10px 12px !important;
                font-size: 12.5px !important;
              }
            }
          `}</style>

          <div className="partners-header p-6 sm:p-8 border-b border-gray-100">
            <h3 className="partners-title text-xl font-bold text-gray-900">
              {t("Գործընկեր ավտոսրահներ")}
            </h3>
            <p className="partners-desc text-gray-600 text-sm mt-1">
              {t("Գնիր մեքենա Evoca ավտովարկով՝ դիմում անմիջապես Բանկի հետ համագործակցող ավտոսրահում, վարկի հաստատում րոպեների ընթացքում, պայմանագրի արագ վավերացում և անվճար ԿԱՍԿՈ:")}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="partners-table w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 sm:p-6 font-semibold">{t("Անվանում")}</th>
                  <th className="p-4 sm:p-6 font-semibold">{t("Մեքենաներ")}</th>
                  <th className="p-4 sm:p-6 font-semibold">{t("Սրահի հասցե")}</th>
                  <th className="p-4 sm:p-6 font-semibold">{t("Կոնտակտային տվյալներ")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԻՆՏԵՐԱՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("AIQAR, VOYAH, DONGFENG")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Ավան, Բաբաջանյան 81")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37498665511</p>
                    <a href="https://www.aiqar.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.aiqar.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՍՈԼԱՐԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, ZEEKR, HONGQI, LiXiang, AUDI, AVATR, TOYOTA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Դավիթ Բեկի 20/7")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37494441515</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՔԱՐՄԱՐԿ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("MAZDA, BYD, XIAOMI, LiXiang")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>{t("Երևան, Վահագն Դավթյան 1/4")}</p>
                    <p>{t("Երևան, Մագնանյան 1, Գարաջ Մոլ")}</p>
                    <p>{t("Երևան, Ներսիսյան 1,")}</p>
                    <p>{t("Աշտարակ, Լինջի փ., 1")}</p>
                  </td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>+37444578009</p>
                    <p>+37443830001</p>
                    <p>+37433578009</p>
                    <p>+37455578009</p>
                    <a href="https://www.carmark.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.carmark.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՅ ՄՈՏՈՐՍ ԷՅԱՄ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, ZEEKR, LiXiang, HONGQI")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Կոտայք, Վերին Պտղնի, Նորավան թղմ., 1-ին փողոց, 31")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37491000380</p>
                    <a href="https://www.imotors.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.imotors.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՄՈՒՐԱՆ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("NISSAN, ZEEKR, GEELY")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Արաբկիր, Կոմիտաս 47")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>+37410231118</p>
                    <a href="https://www.nissan.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline block">www.nissan.am</a>
                    <a href="https://www.geely.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline block">www.geely.am</a>
                    <a href="https://www.zeekr.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline block">www.zeekr.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՎԻ ԸՆԴ ՎԻ ՏՐԱՆՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, LiXiang, HONGQI, GEELY, KIA, HYUNDAI, MAZDA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Արշակունյաց պ. 119")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37411799777</p>
                    <a href="https://www.vvtrans.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.vvtrans.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՍՄԱՐԹ ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, LiXiang, JAGUAR, VOLKSWAGEN, AUDI, HONDA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>{t("Երևան, Թումանյան 16/9")}</p>
                    <p>{t("Կոտայք, Վերին Պտղնի, 1-ին փող., 65/1")}</p>
                  </td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37444080833</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("X ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("XPeng")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Թբիլիսյան 39")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>+37498777720</p>
                    <p>+37412777444</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ի-ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("HONGQI")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Դավիթ Բեկի 138/4")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37491330330</p>
                    <a href="https://www.hongqi.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.hongqi.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՎՏՈ ԳԵԼԼԵՐԻ ՓԲԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("IM Motors")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Դավիթաշեն, 4-րդ թաղ., 46/7")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37460707010</p>
                    <a href="https://auto-gallery.am/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">auto-gallery.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԻՎԻ ՍԵՆԹՐ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Սեբաստիա 6")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37455481111</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՋԵՖԲԱՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Denza, Fangchangbao, Yangwang")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Դավիթ Բեկի 170")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37496949410</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԹԻ ԷՄ ՎԱՅ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("TESLA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Շենգավիթ, Գ. Նժդեհի 37/4")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37441040020</p>
                    <a href="https://www.tsy.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.tsy.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԳՈՒԼԴ-ՖԼՈՒՌ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("MAZDA, BYD, LiXiang, HONDA, ZEEKR, MERCEDES-BENZ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Իսակովի 15/1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37493659066</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՏԵՍԼԱ ԷՆԵՐՋԻ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("TESLA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Կոտայքի մարզ, Պռոշյան գյուղ Գևորգ Չաուշի փող. 1-ին նրբ., 3 հողամաս")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37444455111</p>
                    <a href="https://www.teslaenergy.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.teslaenergy.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԷԿՈ ՄՈՏՈՐՍ ԳՐՈՒՊ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, LiXiang, HONGQI, SKYWELL, MERCEDES-BENZ, DONGFENG, HONDA, TOYOTA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>{t("Երևան, Դավիթ Բեկի 97/26")}</p>
                    <p>{t("Երևան, Մելքումով 88")}</p>
                    <p>{t("Կոտայք, Վերին Պտղնի, 14")}</p>
                    <p>{t("Արմավիր, Փարաքար, Գ. Չաուշ 2")}</p>
                  </td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37496949466</p>
                    <a href="https://www.ecomotors.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.ecomotors.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՍԻԹԻ ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("LiXiang, Aston Martin, BYD, Zeekr, Mercedes, Volkswagen")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Մագնանյան 1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37491129797</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՕՐԻԳԻՆԱԼ ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Geely, KIA, LiXiang, ICAR, TOYOTA, HONGQI")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Աբովյան, Երևանյան փ., 1/100")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37495666266</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԿԱՐԿՈՆԱՎՏՈՍՈՒՄԱՐԿԵՏ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Մագնանյան 1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37491037770</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԴՐԱԳՈՆ ՄՈՏՈՐՍ ԱՐՄ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, MAZDA, TOYOTA, Volkswagen")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Գայի պողոտա 16 (Mega Mall -1 parking)")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+37410303050</p>
                    <a href="https://www.dragonmotors.am" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.dragonmotors.am</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՐՄ ԷՔՍԻՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("AVATR, DEEPAL")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>+37491701135</p>
                    <p>+37494701135</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԷԼՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Թբիլիսյան խճուղի 69")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37477987654</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱԿԱՐՈՒՆ ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, HONGQI")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Թբիլիսյան 23/3")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37491210448</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՖՐՈ-ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, LiXiang, HONGQI, VOYAH")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Էրեբունի 17/1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37495161161</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՎՈՒԼԿԱՆ ԷԼԵՔԹՐԻՔ ՎԵՀԻՔԼ ԲՈՒՄՓՈՒՆ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Արին Բերդի 6")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37498408575</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՔԱՐՍ ԳՐՈՒՊ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, HONGQI, TOYOTA")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Ազատության պողոտա 27շ, Երազ բիզնես կենտրոն")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37433175050</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՄՈԲԻԼՈՒՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, LiXiang, Leapmotor")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Կենտրոն, Բուզանդի 15")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+37441444300</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՎՏՈՋԵՄ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Li Auto, Hongqi, Volkswagen")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Կարապետ Ուլնեցու փ. 70/4")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 77 142005</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՐԵԳ ՇՔԵՂ ԱՎՏՈՄԵՔԵՆԱՆԵՐ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Li Auto, Deepal, Mazda EZ-60")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Նար-Դոս 66")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 98 110001</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՐՄԵՆ-ԱԼԵՔՍԱՆ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BAW")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Դավիթ Բեկի փ. 97/26, Նոր Նորք")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 96 012010</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԲԻ ՎԱՅ ԴԻ ԷՅՋ ԵՄ ԱՈՒՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Toyota, Mazda, Hongqi, Li Auto")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Աբովյան, Երևանյան 1/100")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 95 666266</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Բլու Էներջի")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Roewe M7, Hongqi E-QM5, Li Auto L6, Li Auto L7, Mazda EZ-60, Changan Deepal S05, Changan Deepal S07, BYD Sealion 06")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Թբիլիսյան 21/8")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 77 180011</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԴՐԻՄՔԱՐ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Mazda EZ-60, Hongqi E-QM5, BYD Sealion, Changan Deepal")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Գայի պողոտա 10/6")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 93 855655</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԷՅ ԲԻ ԷՅ ԻՆԹԵՐՆԵՇՆԼ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Toyota, Changan, Aion, BYD, Mazda, Xpeng, Li Auto, Zeekr, Honda, Geely, Galaxy, Hongqi, Dongfeng, Denza, Xiaomi, Maxus, Ruichi, Mercedes-Benz, BMW")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Կիևյան 2")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 33 840840</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԷՅ ԲԻ ՍԻ ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Deepal, Changan, Arcfox")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Արմավիրի մարզ, Թաիրով գյուղ, Մայրաքաղաքային փ. 15")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 33 344001</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԷՆԵՐՋԻ ՔԱՐ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Deepal, Nevo, Li Auto, Geely, Leopard, Zeekr, Changan, Xpeng")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Մագնանյան 1, Garage Mall")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 91 711714</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՄԵԳԱԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Li Auto, Rox, Deepal, Changan")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Նաիրի Զարյան 104/1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 95 604000</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԹՐԵՅԴԻՆԳ ՔԱՐՈՒ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Changan, Deepal, Changan Qiyuan, BYD, Li Auto, Hongqi")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Սեբաստիա 108/1")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 99 483030</p>
                    <p>+374 91 244473</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՅՈՒՆԻՎԵՐՍԱԼ ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Mazda, BYD, Changan, Xiaomi")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Նորաշեն (16-րդ թաղամաս), Մագնանյան 1 («Garage Masters Mall»)")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 41 010777</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՍԻԱՐ ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Changan Deepal, Changan Nevo")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Նոր Նորք, Գայի պ. 1/13; Կոտայք, Պռոշյան, Գևորգ Չաուշի փ. 1-ին նրբ. 3")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 33 221188</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՍԲԱՅ ՄՈՏՈՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Mazda, Suzuki, JMC, JMEV")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Թբիլիսյան 20")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 11 711711</p>
                    <p>+374 41 111700</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ՔԱՐՖՈՐԴԻՒ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, GAC, Changan, Changan Qiyuan, Changan Deepal, Hongqi, Toyota")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վաղարշապատ, Մանուկյան 8")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 60 509977</p>
                    <p>+374 55 779700</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱԲԱՋ ԱՎՏՈ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Hongqi, Changan Deepal, Dongfeng, Li Auto")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Գյուլբենկյան 28")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 33 010203</p>
                    <p>+374 44 048048</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՎՏՈ ԱՎԵՆՅՈՒ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Hongqi, Deepal, Changan, Li Auto, Mazda")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Վարդաշեն 9 փ., 63 տարածք")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">+374 95 992222</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԱՎՏՈ ԲԱՅ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("BYD, Hongqi, Deepal, Changan, Toyota, Mazda")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Կիլիկիա 3, 24 տարածք")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 98 787171</p>
                    <p>+374 60 670000</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("ԹԻ ԸՆԴ ԵՅ ՓԱՐԹՆԵՐՍ ՍՊԸ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Changan Deepal, BYD, Li Auto, Mazda, Toyota, Zeekr, Voyah")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երևան, Խորենացի 101")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    <p>+374 41 500065</p>
                    <p>+374 95 207055</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Պահանջվող փաստաթղթերի ցանկ */}
      {activeTab === 'documents' && (
        <div className="car-docs-wrapper bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <style>{`
            @media (max-width: 640px) {
              .car-docs-header,
              .car-docs-body {
                padding: 18px !important;
              }
              .car-docs-title {
                font-size: 18px !important;
              }
              .car-docs-list {
                font-size: 13px !important;
                gap: 12px !important;
              }
              .car-docs-sublist {
                margin-left: 14px !important;
                font-size: 12.5px !important;
              }
              .car-docs-banner {
                height: 240px !important;
                margin-top: 16px !important;
                margin-bottom: 16px !important;
              }
              .car-docs-banner-title {
                font-size: 18px !important;
                line-height: 1.35 !important;
              }
              .car-docs-related-title {
                font-size: 20px !important;
              }
              .car-docs-related-card {
                padding: 14px !important;
              }
            }
          `}</style>

          <div className="car-docs-header p-6 sm:p-8 border-b border-gray-100">
            <h3 className="car-docs-title text-xl font-bold text-gray-900">
              {t("Պահանջվող փաստաթղթերի ցանկ")}
            </h3>
          </div>
          <div className="car-docs-body p-6 sm:p-8">
            <ol className="car-docs-list list-decimal list-inside space-y-4 text-gray-700">
              <li className="align-top">
                <span className="font-medium">{t("Վարկի տրամադրման դիմում")}</span>
              </li>
              <li className="align-top">
                <span>
                  {t("անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ), կարող է պահանջվել նաև ընտանիքի անդամներին")}
                </span>
              </li>
              <li className="align-top">
                <span>
                  {t("Եթե վարկառուն ամուսնացած է, ապա ամուսնու/կնոջ 2-րդ կետով սահմանված փաստաթղթերը և ամուսնության վկայական")}
                </span>
              </li>
              <li className="align-top">
                <span>{t("տեղեկանք փաստացի բնակության վայրից")}</span>
              </li>
              <li className="align-top">
                <span>
                  {t("տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացուցային օրը")}
                </span>
              </li>
              <li className="align-top">
                <span>{t("Հաճախորդի ինքնազբաղված լինելու դեպքում՝")}</span>
                <ul className="car-docs-sublist list-disc list-inside ml-6 mt-2 space-y-2 text-gray-600">
                  <li>{t("Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից")}</li>
                  <li>{t("Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում")}</li>
                  <li>{t("Գործունեության լիցենզիա (առկայության դեպքում)")}</li>
                  <li>{t("Վերջին 1 տարվա ֆինանսական հաշվետվությունները")}</li>
                </ul>
              </li>
              <li className="align-top">
                <span>{t("այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)")}</span>
              </li>
              <li className="align-top">
                <span>{t("տեղեկատվություն երաշխավորող անձի/անձն վերաբերյալ /առկայության դեպքում/")}</span>
              </li>
              <li className="align-top">
                <span>{t("/ավտոմեքենայի սեփականության իրավունքը հավաստող փաստաթղթեր, տեխ.անձնագիր կամ ժամանակավոր գրանցման վկայական")}</span>
              </li>
              <li className="align-top">
                <span>{t("Առաջնային շուկայից ավտոմեքենա ձեռք բերելու դեպքում")}</span>
                <ul className="car-docs-sublist list-disc list-inside ml-6 mt-2 space-y-2 text-gray-600">
                  <li>{t("Վաճառողի կողմից տրված ավտոմեքենայի գնման համաձայնագիր")}</li>
                  <li>{t("Կանխավճարի վճարման անդորրագիր")}</li>
                  <li>{t("առուվաճառքի պայմանագիր, հաշիվ-ապրանքագիր")}</li>
                </ul>
              </li>
              <li className="align-top">
                <span>{t("Երկրորդային շուկայից ավտոմեքենա ձեռք բերելու դեպքում")}</span>
                <ul className="car-docs-sublist list-disc list-inside ml-6 mt-2 space-y-2 text-gray-600">
                  <li>{t("վաճառողի՝ սույն կետի 2-րդ ենթակետով սահմանված փաստաթղթերը")}</li>
                  <li>{t("Ավտոմեքենայի գնահատման հաշվետվություն")}</li>
                </ul>
              </li>
              <li className="align-top">
                <span className="font-medium">{t("Բանկի պահանջով այլ փաստաթղթեր")}</span>
              </li>
            </ol>
          </div>
        </div>
      )}

      {/* նկարի հատվածը */}
      <div 
        className="car-docs-banner relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
        style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142451996732/1920x527.jpg')` }}
      >
        <div className="absolute inset-0 bg-purple-950/20 backdrop-brightness-95"></div>
        <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
          <h2 className="car-docs-banner-title text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
            <span>{t("Դեպի նոր իրականություն տանող քո ճանապարհն անցի'ր Evocabank-ի հետ:")}</span>
          </h2>
        </div>
      </div>

      {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
      <div className="pt-12 border-t border-gray-100">
        <div className="relative">
          {/* Վերնագիր և նավիգացիայի կոճակներ */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="car-docs-related-title text-2xl font-bold text-gray-900">
              {t("Այլ քարտեր")}
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
                  className="car-docs-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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