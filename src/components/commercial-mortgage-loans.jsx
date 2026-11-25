import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function CommercialMortgageLoans() {
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
          .comm-mort-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .comm-mort-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .comm-mort-subtitle {
            font-size: 15px !important;
          }
          .comm-mort-about-grid {
            gap: 24px !important;
          }
          .comm-mort-about-text {
            font-size: 14px !important;
          }
          .comm-mort-rates-box {
            padding: 18px !important;
          }
          .comm-mort-rate-value {
            font-size: 24px !important;
          }
          .comm-mort-table td {
            padding: 12px 14px !important;
            font-size: 13px !important;
          }
          .comm-mort-num {
            width: 34px !important;
            padding: 12px 6px !important;
          }
          .comm-mort-label {
            width: 38% !important;
          }
          .comm-mort-related-section {
            padding-top: 24px !important;
          }
          .comm-mort-related-title {
            font-size: 20px !important;
          }
          .comm-mort-related-card {
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
        <div className="comm-mort-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="comm-mort-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Առևտրային հիփոթեքային վարկեր")}
            </h1>
            <p className="comm-mort-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142450609699/560x400.png" 
                alt={t("Առևտրային հիփոթեքային վարկեր")} 
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
          <div className="comm-mort-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="comm-mort-about-text lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                {t("Առևտրային գործունեություն ծավալելու համար տարածք վարձակալելու փոխարեն այժմ կարող եք ձեռք բերել Ձեր սեփական բիզնես տարածքը:")}
              </p>
              <p>
                <strong className="text-purple-700">Evocabank</strong>-{t("ն առաջարկում է առևտրային նշանակության անշարժ գույքի՝ արտադրական, հասարակական կամ այլ առևտրային տարածքի ձեռքբերման, արդիականացման կամ կառուցապատման նպատակով մատչելի տոկոսադրույքով տրամադրվող")} <Link to="/hy/loans" className="text-purple-700 underline font-medium">{t("հիփոթեքային վարկ")}</Link>:
              </p>
              <p>
                {t("Վարկի տրամադրման գործընթացը պարզեցված է, իրականացվում է շատ արագ՝ վարկավորման անհրաժեշտ փաստաթղթերը Բանկ ներկայացնելու պահից սկսված։ Կախված վարկավորման Ձեր ցանկալի գումարի չափից՝ կարող է պահանջվել նաև լրացուցիչ գույքի գրավ։ Որպես գրավի առարկա կարող եք ներկայացնել ինչպես Երևանում, այնպես էլ ՀՀ մարզերում գտնվող Ձեր անշարժ գույքը։")}
              </p>
              <p>
                {t("Ընտրեք տրամադրվող վարկի արժույթն ու ժամկետը, իսկ գույքի գրավադրման և վարկի տրամադրման ամբողջ գործընթացը մենք կիրականացնենք շատ արագ։")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="comm-mort-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="comm-mort-rate-value text-3xl font-extrabold text-purple-700">{t("120 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="comm-mort-rate-value text-3xl font-extrabold text-purple-700">{t("240 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Ժամկետ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="comm-mort-rate-value text-3xl font-extrabold text-purple-700">{t("7.2%-ից")}</span>
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
              <table className="comm-mort-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկը տրամադրվում է առևտրային նշանակության անշարժ գույքի՝ արտադրական, հասարակական կամ այլ առևտրային տարածքի, շինության (առաջնային և երկրորդային շուկայից) ձեռքբերման, վերանորոգման, արդիականացման կամ կառուցապատման նպատակով։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("18- 65 տարեկան ՀՀ ռեզիդենտ կամ ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ, ԱՄՆ դոլար, Եվրո")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Անշարժ գույք ձեռք բերում")}</span>
                        <span className="font-semibold text-purple-700 text-right">{t("10,000,000 - 120,000,000 ֏ կամ համարժեք արտարժույթ")}</span>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Կառուցապատում")}</span>
                        <span className="font-semibold text-purple-700 text-right">{t("-")}</span>
                      </div>
                      <div className="flex justify-between gap-3 pt-1">
                        <span className="text-gray-600">{t("Վերանորոգում")}</span>
                        <span className="font-semibold text-purple-700 text-right">{t("5,000,000 - 50,000,000 ֏ կամ համարժեք արտարժույթ")}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Անշարժ գույք ձեռք բերում")}</p>
                        <p className="text-gray-600 text-sm">{t("Հաստատուն տոկոսադրույքով՝ 60 - 180 ամիս")}</p>
                      </div>
                      <div className="border-b border-gray-100 pb-2">
                        <p className="font-semibold text-gray-800">{t("Կառուցապատում")}</p>
                        <p className="text-gray-600 text-sm">{t("Լողացող տոկոսադրույքով՝ 60 - 240 ամիս")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t("Վերանորոգում")}</p>
                        <p className="text-gray-600 text-sm">{t("Հաստատուն (60 - 84 ամիս) / Լողացող (60 - 84 ամիս)")}</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան անվանական տոկոսադրույքներ (հաստատուն) [1]")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("ՀՀ դրամ՝")} <strong className="text-purple-700">{t("14% - 17%")}</strong></p>
                      <p>{t("ԱՄՆ դոլար՝")} <strong className="text-purple-700">{t("9.2% - 11%")}</strong></p>
                      <p>{t("Եվրո՝")} <strong className="text-purple-700">{t("7.2% - 10%")}</strong></p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան անվանական տոկոսադրույքներ (լողացող) [2]")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("ՀՀ դրամ՝ Սկսած 13.2%-ից (հաստատուն բաղադրիչ՝ սկսած 4.2%-ից + փոփոխուն բաղադրիչ)")}</p>
                      <p>{t("ԱՄՆ դոլար՝ Սկսած 9.2%-ից (հաստատուն բաղադրիչ՝ սկսած 8.2%-ից + փոփոխուն բաղադրիչ)")}</p>
                      <p>{t("Եվրո՝ Սկսած 7.2%-ից (հաստատուն բաղադրիչ՝ սկսած 7.2%-ից + փոփոխուն բաղադրիչ)")}</p>
                      <p className="text-xs text-gray-400">{t("Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ ±4%")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%,")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող, վերանորոգվող անշարժ գույք, այլ անշարժ գույք: Կառուցապատման դեպքում՝ հողամասը, որտեղ իրականացվում է անշարժ գույքի կառուցում/կառուցվող անշարժ գույք:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկ/գրավ հարաբերակցությունը [3]")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("• Առաջնային շուկայից (կառուցապատողից) ձեռքբերում. ՀՀ դրամ՝ մինչև 90%, Արտարժույթ՝ մինչև 70%")}</p>
                      <p>{t("• Երկրորդային շուկայից ձեռքբերում. ՀՀ դրամ՝ մինչև 85%, Արտարժույթ՝ մինչև 70%")}</p>
                      <p>{t("• Առանց եկամտի վերլուծության ձեռքբերում. մինչև 70%")}</p>
                      <p>{t("• Կառուցապատում և վերանորոգում. մինչև 70%")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անշարժ գույքի ապահովագրություն - պարտադիր յուրաքանչյուր տարի վարկի մնացորդի չափով:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ՝ գումարը փոխանցվում է վաճառողի հաշվեհամարին: Վերանորոգման և կառուցապատման նպատակով տրամադրվում է միանվագ կամ փուլային:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("Անշարժ գույքի ձեռքբերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար, որը սառեցվում է մինչև վարկի տրամադրումը։")}</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="comm-mort-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="comm-mort-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 աշխատանքային օրվա ընթացքում:")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ծանոթագրություններ */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-bold text-purple-700">[1]</span> {t("Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված) նշված տոկոսադրույք + 0.2%:")}
              </p>
              <p>
                <span className="font-bold text-purple-700">[2]</span> {t("Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված) նշված տոկոսադրույք + 0.2%:")}
              </p>
              <p>
                <span className="font-bold text-purple-700">[3]</span> {t("Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:")}
              </p>
              <p>
                <span className="font-bold text-purple-700">[4]</span> {t("Անավարտ շինության դեպքում (կառուցապատողից ձեռքբերման դեպքում) որպես գրավի արժեք հանդիսանում է կառուցապատողի կողմից տրամադրված տեղեկանքում և հետագայում առուվաճառքի պայմանագրում նշված առուվաճառքի գինը:")}
              </p>
              <p>
                <span className="font-bold text-purple-700">[5]</span> {t("Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:")}
              </p>
            </div>
          </div>
        )}


      <style>{`
        @media (max-width: 640px) {
          .comm-mort-doc-header {
            padding: 16px !important;
          }
          .comm-mort-doc-title {
            font-size: 17px !important;
          }
          .comm-mort-doc-table td {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
          .comm-mort-doc-num {
            width: 32px !important;
            padding: 10px 6px !important;
          }
          .comm-mort-hero-banner {
            height: 240px !important;
            margin: 16px 0 !important;
          }
          .comm-mort-hero-title {
            font-size: 18px !important;
            line-height: 1.3 !important;
          }
          .comm-mort-related-section {
            padding-top: 24px !important;
          }
          .comm-mort-related-title {
            font-size: 20px !important;
          }
          .comm-mort-related-card {
            padding: 14px !important;
          }
        }
      `}</style>

      {activeTab === 'documents' && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="comm-mort-doc-header p-6 sm:p-8 border-b border-gray-100">
            <h3 className="comm-mort-doc-title text-xl font-bold text-gray-900">{t("Պահանջվող փաստաթղթերի ցանկ")}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="comm-mort-doc-table w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 w-16 text-center align-top">{t("1.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկի տրամադրման դիմում-հայտ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("2.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("3.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ամուսնության վկայական (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("4.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("5.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("6.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p className="font-semibold text-gray-800">{t("Հաճախորդի ինքնազբաղված լինելու դեպքում՝")}</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 marker:text-purple-700">
                      <li>{t("Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված քաղվածք գրանցամատյանից")}</li>
                      <li>{t("Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում, Գործունեության լիցենզիա (եթե առկա է)")}</li>
                      <li>{t("Վերջին 1 տարվա ֆինանսական հաշվետվությունները")}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("7.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("8.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("9.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վաճառվող կամ վերանորոգվող անշարժ գույքի սեփականության վկայականը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("10.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վաճառվող անշարժ գույքի ձեռք բերման հիմքերը (պահանջի դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("11.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անշարժ գույքի սեփականատերերի անձնագրերը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("12.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("13.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վերանորոգման դեպքում կատարվելիք ծախսերի նախահաշիվ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("14.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p className="font-semibold text-gray-800">{t("Կառուցապատման դեպքում՝")}</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 marker:text-purple-700">
                      <li>{t("Կատարվելիք ծախսերի նախահաշիվ")}</li>
                      <li>{t("Հողամասի սեփականության վկայական")}</li>
                      <li>{t("Կառուցապատման թույլտվություն")}</li>
                      <li>{t("Կառուցվող անշարժ գույքի նախագիծ")}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="comm-mort-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("15.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Բանկի պահանջով այլ փաստաթղթեր")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* նկարի հատվածը */}
      <div 
        className="comm-mort-hero-banner relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
        style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142450609738/1920x527.jpg')` }}
      >
        <div className="absolute inset-0 backdrop-brightness-95"></div>
        <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
          <h2 className="comm-mort-hero-title text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
            <span>{t("Evocabank-ը մշտապես պատրաստ է խթանել Ձեր բիզնեսի զարգացմանը՝ հնարավորություն տալով գրավելու նոր սահմաններ։")}</span>
          </h2>
        </div>
      </div>

      {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
      <div className="comm-mort-related-section pt-12 border-t border-gray-100">
        <div className="relative">
          {/* Վերնագիր և նավիգացիայի կոճակներ */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="comm-mort-related-title text-2xl font-bold text-gray-900">
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
                  className="comm-mort-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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