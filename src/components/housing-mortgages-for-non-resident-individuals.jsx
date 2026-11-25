import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function NonResidentMortgageLoan() {
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
          .nonres-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .nonres-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .nonres-subtitle {
            font-size: 15px !important;
          }
          .nonres-about-grid {
            gap: 24px !important;
          }
          .nonres-about-text {
            font-size: 14px !important;
          }
          .nonres-rates-box {
            padding: 18px !important;
          }
          .nonres-rate-value {
            font-size: 24px !important;
          }
          .nonres-related-section {
            padding-top: 24px !important;
          }
          .nonres-related-title {
            font-size: 20px !important;
          }
          .nonres-related-card {
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
        <div className="nonres-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="nonres-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")}
            </h1>
            <p className="nonres-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17262174043676/560x400.png" 
                alt={t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")} 
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
          <div className="nonres-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="nonres-about-text lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-purple-700">Evocabank</strong>-{t("ն առաջարկում է բնակարանի, առանձնատան, բնակելի տան ձեռքբերման նպատակով տրամադրվող")} <span className="font-semibold text-gray-900">{t("հիփոթեքային վարկեր")}</span>:
              </p>
              <p>
                {t("Գրավիչ ու մատչելի պայմաններով այս վարկատեսակի շնորհիվ մեզ հետ կստեղծես ապրելու համար հարմարավետ պայմաններ, կկարողանաս ձեռք բերել քո երազանքների բնակարանը՝ ցածր տոկոսադրույքով և ամենապարզ պայմաններով:")}
              </p>
              <p>
                {t("Ընտրելով")} <strong className="text-purple-700">Evocabank</strong>-{t("ը՝ կխնայես քո գումարն ու ժամանակը: Քո կողմից անշարժ գույքի ընտրությունից և վարկի ձևակերպման համար անհրաժեշտ փաստաթղթերը ներկայացնելուց հետո")} <strong className="text-purple-700">Evocabank</strong>-{t("ը վարկի տրամադրման գործընթացը կկազմակերպի ամենասեղմ ժամկետներում:")}
              </p>
              <p className="text-sm text-gray-600">
                {t("Գործընկեր կառուցապատողների ցանկին կարող եք ծանոթանալ հետևյալ")} <a href="#" className="text-purple-700 underline font-medium">{t("հղումով")}</a>:
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="nonres-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="nonres-rate-value text-3xl font-extrabold text-purple-700">{t("80 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար (Համարժեք արտարժույթ)")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="nonres-rate-value text-3xl font-extrabold text-purple-700">{t("180 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Ժամկետ")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("Ֆիքսված տոկոսադրույքով սկսած")}</p>
                  <span className="nonres-rate-value text-3xl font-extrabold text-purple-700">{t("8.2%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տոկոսադրույք")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("Լողացող տոկոսադրույքով սկսած")}</p>
                  <span className="nonres-rate-value text-3xl font-extrabold text-purple-700">{t("7.7%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>
          </div>
        )}
       
        
      <style>{`
        @media (max-width: 640px) {
          .nonres-cond-table td,
          .nonres-cond-table th {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
          .nonres-cond-num {
            width: 32px !important;
            padding: 10px 6px !important;
          }
          .nonres-cond-label {
            width: 38% !important;
          }
          .nonres-rate-subtable th,
          .nonres-rate-subtable td {
            padding: 6px 8px !important;
            font-size: 11px !important;
          }
          .nonres-doc-header {
            padding: 16px !important;
          }
          .nonres-doc-title {
            font-size: 17px !important;
          }
          .nonres-doc-table td {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
          .nonres-doc-num {
            width: 32px !important;
            padding: 10px 6px !important;
          }
          .nonres-hero-banner {
            height: 240px !important;
            margin: 16px 0 !important;
          }
          .nonres-hero-title {
            font-size: 18px !important;
            line-height: 1.3 !important;
          }
          .nonres-related-section {
            padding-top: 24px !important;
          }
          .nonres-related-title {
            font-size: 20px !important;
          }
          .nonres-related-card {
            padding: 14px !important;
          }
        }
      `}</style>

      {activeTab === 'conditions' && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="nonres-cond-table w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    {t("Վարկը տրամադրվում է բնակելի նշանակության անշարժ գույքի՝ բնակարանի, առանձնատան, բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռք բերման նպատակով:")}
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">
                    {t("18 – 63 տարեկան ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 63 տարին կամ առկա է վերոնշյալ պահանջներին բավարարող ոչ ռեզիդենտ համավարկառու:")}
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ԱՄՆ դոլար, Եվրո, ՀՀ դրամ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար")}</td>
                  <td className="p-4 sm:p-6 align-top font-semibold text-purple-700">
                    {t("2.000.000-80.000.000 ՀՀ դրամ կամ համարժեք արտարժույթ")}
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("60 - 180 ամիս")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">
                    {t("Տարեկան անվանական տոկոսադրույքներ")}<sup>[1]</sup>
                  </td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-4">
                    <div className="overflow-x-auto">
                      <table className="nonres-rate-subtable w-full text-xs text-left border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
                            <th className="p-2 border-r border-gray-200">{t("Արժույթ")}</th>
                            <th className="p-2 border-r border-gray-200">{t("Հաստատուն")}</th>
                            <th className="p-2 border-r border-gray-200">{t("Փաստացի")}</th>
                            <th className="p-2 border-r border-gray-200">{t("Լողացող")}</th>
                            <th className="p-2">{t("Փաստացի")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-2 font-medium border-r border-gray-200">{t("ԱՄՆ դոլար")}</td>
                            <td className="p-2 border-r border-gray-200">{t("9.2% - 11%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("9.8-11.8%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("Սկսած 9.2%-ից (հաստատուն բաղադրիչ՝ սկսած 8.2%-ից + փոփոխուն բաղադրիչ)")}</td>
                            <td className="p-2">{t("5.5-16.3%")}</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-2 font-medium border-r border-gray-200">{t("Եվրո")}</td>
                            <td className="p-2 border-r border-gray-200">{t("8.2% - 10%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("8.7-10.7%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("Սկսած 7.7%-ից (հաստատուն բաղադրիչ՝ սկսած 7.7%-ից + փոփոխուն բաղադրիչ)")}</td>
                            <td className="p-2">{t("4.45-15.2%")}</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-medium border-r border-gray-200">{t("ՀՀ դրամ")}</td>
                            <td className="p-2 border-r border-gray-200">{t("14-15%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("15.2-16.3%")}</td>
                            <td className="p-2 border-r border-gray-200">{t("Սկսած 13.2%-ից (հաստատուն բաղադրիչ՝ սկսած 4.2%-ից + փոփոխուն բաղադրիչ)")}</td>
                            <td className="p-2">{t("9.7-18.4%")}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>• <strong>{t("Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝")}</strong> {t("±4%:")}</p>
                      <p>• {t("Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը:")}</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%,")}</p>
                    <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ձևը")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ. վճարումները պետք է կատարվեն ամսական կտրվածքով:")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոց")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p className="font-semibold text-gray-800">{t("Ձեռքբերվող անշարժ գույք")}</p>
                    <p className="text-sm text-gray-600">{t("Գնման իրավունք՝ կառուցապատողից ձեռքբերման դեպքում:")}</p>
                    <p className="text-sm text-gray-600">{t("Բացի անշարժ գույքի գրավադրումից՝ վարկառուից կարող է պահանջվել նաև ՀՀ ռեզիդենտ հանդիսացող առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն:")}</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">
                    {t("Վարկ/գրավ հարաբերակցությունը")}<sup>[2]</sup>
                  </td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p><strong className="text-purple-700">{t("Գնահատված արժեքի մինչև 70%")}</strong></p>
                    <p className="text-sm text-gray-600">{t("Լրացուցիչ անշարժ գույքի գրավադրման դեպքում, վարկի գումարը չպետք է գերազանցի ձեռք բերվող անշարժ գույքի գնահատված շուկայական արժեքը՝ պահպանելով գրավադրվող բոլոր գույքերի գնահատված շուկայական արժեքների հանրագումարի 70% «Վարկ/գրավ» հարաբերակցությունը:")}</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անշարժ գույքի ապահովագրություն - պարտադիր յուրաքանչյուր տարի վարկի մնացորդի չափով:")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ /գումարը փոխանցվում է վաճառողի հաշվեհամարին/")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկունակության գնահատում")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                    <p>• {t("Հաճախորդը չպետք է ունենա վերջին 1 տարվա ընթացքում վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը։")}</p>
                    <p>• {t("Եկամուտների վերլուծություն չի իրականացվում:")}</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p>• {t("Վարկառուն Բանկում մուծագրում է կանխավճար")}<sup>[3]</sup>{t("՝ որը սառեցվում է մինչև վարկի տրամադրումը:")}</p>
                    <p>• {t("Առաջնային շուկայից անշարժ գույք ձեռք բերելու դեպքում, որպես կանխավճարը հավաստող փաստաթուղթ, Հաճախորդը կարող է Բանկ ներկայացնել կառուցապատողի կողմից տրամադրված նախավճարի անդորրագիր և/կամ նախավճարների պայմանագրեր/համաձայնագրեր:")}</p>
                    <p>• {t("Հաճախորդը պետք է ներկայացնի եկամտի աղբյուրների վերաբերյալ անհրաժեշտ տեղեկատվություն:")}</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="nonres-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("16.")}</td>
                  <td className="nonres-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p>• {t("Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:")}</p>
                    <p>• {t("Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:")}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Ստորին ծանոթագրություններ */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 space-y-1">
            <p><sup>[1]</sup> {t("Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործունեության երկրորդ տարվանից սկսված)՝ նշված տոկոսադրույք + 0.2%:")}</p>
            <p><sup>[2]</sup> {t("Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:")}</p>
            <p><sup>[3]</sup> {t("Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:")}</p>
          </div>
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="nonres-doc-header p-6 sm:p-8 border-b border-gray-100">
            <h3 className="nonres-doc-title text-xl font-bold text-gray-900">{t("Պահանջվող փաստաթղթերի ցանկ")}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="nonres-doc-table w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top"><strong className="text-purple-700">{t("1.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Հիփոթեքային վարկի տրամադրման դիմում-հայտ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("2.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("3.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("4.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք կամ աշխատանքային պայմանագիր, բանկային հաշվի քաղվածք /12 ամիս/ եկամուտները հավաստող այլ փաստաթղթեր, որոնց տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("5.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ամուսնության վկայական (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("6.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Լիազորագիր /անհրաժեշտության դեպքում/")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("7.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Լիազորված անձի անձնագիր")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("8.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ամուսնացած լինելու դեպքում, ամուսնու/կնոջ համաձայնություն")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("9.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("10.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի սեփականության վկայական")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("11.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի ձեռք բերման հիմքեր")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("12.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի սեփականատերերի անձնագրեր, ամուսնության վկայական /առկայության դեպքում/")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("13.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Երաշխավորող անձ /ՀՀ ռեզիդենտ/")}</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="nonres-doc-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top"><strong className="text-purple-700">{t("14.")}</strong></td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Բանկի պահանջով այլ փաստաթղթեր")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* նկարի հատվածը */}
      <div 
        className="nonres-hero-banner relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
        style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16494230496694/1920x527.jpg')` }}
      >
        <div className="absolute inset-0 bg-purple-950/20 backdrop-brightness-95"></div>
        <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
          <h2 className="nonres-hero-title text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
            <span>{t("Evocabank-ը կօգնի ձեռք բերել քեզ երազանքների բնակարանը` առանց որևէ դժվարության:")}</span>
          </h2>
        </div>
      </div>

      {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
      <div className="nonres-related-section pt-12 border-t border-gray-100">
        <div className="relative">
          {/* Վերնագիր և նավիգացիայի կոճակներ */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="nonres-related-title text-2xl font-bold text-gray-900">
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
                  className="nonres-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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