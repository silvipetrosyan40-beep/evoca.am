import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function YoungFamilyMortgageLoan() {
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
          .yf-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .yf-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .yf-subtitle {
            font-size: 15px !important;
          }
          .yf-about-grid {
            gap: 24px !important;
          }
          .yf-about-text {
            font-size: 14px !important;
          }
          .yf-rates-box {
            padding: 18px !important;
          }
          .yf-rate-value {
            font-size: 24px !important;
          }
          .yf-table td {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
          .yf-num {
            width: 32px !important;
            padding: 10px 6px !important;
          }
          .yf-label {
            width: 38% !important;
          }
          .yf-notes-box {
            padding: 16px !important;
          }
          .yf-related-section {
            padding-top: 24px !important;
          }
          .yf-related-title {
            font-size: 20px !important;
          }
          .yf-related-card {
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
        <div className="yf-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="yf-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")}
            </h1>
            <p className="yf-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142451699156/560x400.png" 
                alt={t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")} 
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
          <div className="yf-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="yf-about-text lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                {t("«Երիտասարդ ընտանիքին՝ մատչելի բնակարան» ջրագրի շրջանակներում")} <strong className="text-purple-700">Evocabank</strong>-{t("ն առաջարկում է")} <span className="text-purple-700 font-semibold">{t("հիփոթեքային վարկեր")}</span> {t("ամենաշահավետ պայմաններով։ Եթե Ձեր և Ձեր ամուսնու հանրագումարային տարիքը չի գերազանցում 70-ը, և ունեք բավարար եկամուտներ ու դրական վարկային պատմություն, ապա հենց այս ծրագրի օգնությամբ կարող եք ձեռք բերել Ձեր նախընտրած բնակարանն ինչպես Երևանում, այնպես էլ ՀՀ մարզերում:")}
              </p>

              <div>
                <p className="font-semibold text-gray-900 mb-3">{t("Գործում է նաև՝")}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-purple-700">
                  <li>{t("2% սուբսիդավորում, ք. Երևանում բնակելի անշարժ գույքի ձեռքբերման դեպքում,")}</li>
                  <li>{t("4% սուբսիդավորում, ՀՀ մարզերում բնակելի անշարժ գույքի ձեռքբերման դեպքում:")}</li>
                </ul>
              </div>

              <p>
                {t("Երկրորդային շուկայից բնակելի անշարժ գույքի գնման համար անհրաժեշտ է ունենալ կանխավճար սկսած 10%-ից, իսկ առաջնային շուկայից անշարժ գույքի գնման դեպքում անհրաժեշտ է ունենալ կանխավճար 7.5%-ից սկսած։")}
              </p>

              <p>
                {t("Ձեր վարկունակությունը բավարար չէ վարկի ստացման համար, մենք այդ մասին էլ ենք մտածել։ Ձեր վարկային պարտավորությունները Ձեզ հետ միասին կարող է ստանձնել նաև համավարկառուն։ Որպես համավարկառուներ կարող են հանդիսանալ Ձեր ընտանիքի անդամները (ընտանիքի անդամներ են համարվում ամուսինը, վարկառուի և նրա ամուսնու ծնողները, քույրերը և եղբայրները):")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="yf-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">{t("դ")}</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="yf-rate-value text-3xl font-extrabold text-purple-700">{t("27 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="yf-rate-value text-3xl font-extrabold text-purple-700">{t("180 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Վարկի մարման ժամկետը")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-3">
                <div>
                  <span className="yf-rate-value text-3xl font-extrabold text-purple-700">{t("2-ից - 4%")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Սուբսիդավորող տոկոս")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="yf-rate-value text-3xl font-extrabold text-purple-700">{t("6.9-ից - 7.9%")}</span>
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
              <table className="yf-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="font-semibold text-purple-700 block mb-1">{t("Առաջնային շուկա")}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-purple-700 block mb-1">{t("Երկրորդային շուկա")}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկը տրամադրվում է երիտասարդ ընտանիքներին, գոյություն ունեցող բնակելի անշարժ գույք ձեռք բերելու և մշտական բնակվելու նպատակով։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ քաղաքացիները կամ ՀՀ քաղաքացիություն չունեցող այն անձինք, ում ամուսինը հանդիսանում է ՀՀ քաղաքացի։ Ամուսինների գումարային տարիքը չպետք է գերազանցի 70-ը, կամ երիտասարդ միայնակ ծնողը, ում տարիքը չի գերազանցում 35-ը (ներառյալ)։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Համավարկառու")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("Վարկառուի ամուսինը և նրանց երկուսի ընտանիքի անդամներից յուրաքանչյուրը (ընտանիքի անդամներ են համարվում ամուսինը, վարկառուի և նրա ամուսնու ծնողները, քույրերը և եղբայրները)։")}</p>
                      <p className="font-medium text-purple-700">{t("Համավարկառուների տարիքը չպետք է գերազանցի 65 տարեկանը")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վայրը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ ամբողջ տարածքում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("120 - 180 ամիս")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար և վարկ/գրավ հարաբերակցություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border-b sm:border-b-0 sm:border-r border-gray-100 pb-2 sm:pb-0 sm:pr-2 space-y-2">
                          <span className="font-semibold text-purple-700 block mb-1">{t("Առաջնային շուկա")}</span>
                          <p className="text-xs text-gray-600">{t("1. Երևանում և ՀՀ մարզերում՝ մինչև 27,000,000 ՀՀ դրամ, բայց ոչ ավելի, քան ձեռք բերվող բնակելի անշարժ գույքի արժեքի 80%:")}</p>
                          <p className="text-xs text-gray-600">{t("2. Մինչև 27,000,000 ՀՀ դրամ, բայց ոչ ավելի, քան արժեքի 90%, եթե առկա է լրացուցիչ ապահովման միջոց կամ երաշխավորություն:")}</p>
                        </div>
                        <div className="space-y-2">
                          <span className="font-semibold text-purple-700 block mb-1">{t("Երկրորդային շուկա")}</span>
                          <p className="text-xs text-gray-600">{t("1. Երևանում և ՀՀ մարզերում՝ մինչև 22,500,000 ՀՀ դրամ, բայց ոչ ավելի, քան գույքի արժեքի 70%:")}</p>
                          <p className="text-xs text-gray-600">{t("2. Մինչև 22,500,000 ՀՀ դրամ, բայց ոչ ավելի, քան արժեքի 90%, համապատասխան լրացուցիչ պայմանների դեպքում:")}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան անվանական տոկոսադրույքներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("Բանկի կողմից սահմանված տոկոսադրույքը 7.5% (սուբսիդավորվող կամ համապատասխան սուբսիդավորմամբ՝ կախված Երևանից կամ մարզերից լինելուց՝ 2% կամ 4% սուբսիդավորում)։")}</p>
                      <p className="text-xs text-gray-500">{t("Ապահովագրությունների փոխարինման դեպքում կարող են կիրառվել նաև +0.4% կամ +0.6% հավելումներ՝ ըստ պայմանների:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան փաստացի տոկոսադրույքներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Առաջնային շուկա՝ 7.86 - 8.33% | Երկրորդային շուկա՝ 7.45 - 8.3%")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման ձև")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Միանվագ կամ փուլային")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ձևը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ամբողջությամբ վճարվող անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ։ Վճարումները պետք է կատարվեն ամսական կտրվածքով։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի ապահովվածություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող բնակելի անշարժ գույքը կամ անշարժ գույքի գնման իրավունքը")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("16.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ձեռք բերվող բնակելի անշարժ գույքի առավելագույն արժեք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Սահմանափակումներ՝ կախված գույքի շուկայական և ձեռքբերման արժեքներից, ինչպես նաև ՀՀ Վիճակագրական կոմիտեի տվյալներից (առավելագույնը 25-31 միլիոն ՀՀ դրամ՝ կախված շուկայից ու մակերեսից)։")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("17.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-purple-700">
                        <li>{t("Գրավադրված գույքի ապահովագրություն")}</li>
                        <li>{t("Վարկառուի (և համավարկառուների) դժբախտ պատահարից մահվան դեպքի ապահովագրություն՝ եկամուտներին համամասն")}</li>
                        <li>{t("Հիփոթեքային պարտավորության ապահովագրություն (անհրաժեշտության դեպքում)")}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("18.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ՝ գումարը փոխանցվում է վաճառողի հաշվեհամարին։")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("19.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>• {t("Անշարժ գույքի ձեռք բերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար, որը սառեցվում է մինչև վարկի տրամադրումը:")}</p>
                      <p>• {t("Առաջնային շուկայից գույք ձեռք բերելիս որպես կանխավճար հավաստող փաստաթուղթ կարող է ներկայացվել նաև տարաժամկետ վճարման պայմանագիր:")}</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="yf-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("20.")}</td>
                    <td className="yf-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      {t("Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում՝ պահանջվող նախնական փաստաթղթերն ամբողջությամբ ներկայացնելուց հետո։")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Հատուկ նշումներ և պայմաններ */}
            <div className="yf-notes-box mt-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{t("Հատուկ նշումներ և պայմաններ")}</h3>
              
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-md text-xs">
                  {t("[1]")}
                </span>
                <p>{t("Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը։")}</p>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-md text-xs">
                  {t("[2]")}
                </span>
                <p>{t("Ապահովագրության պահանջը դադարում է գործել այն պահից սկսած, երբ վարկի գծով վճարումների արդյունքում Վարկ/Գրավ հարաբերակցությունը հասնում է 70%-ի՝ երկրորդային շուկայից (ոչ անմիջապես կառուցապատողից) գնված բնակարանի դեպքում և 80%-ի՝ առաջնային շուկայից (անմիջապես կառուցապատողից) գնված բնակարանի դեպքում։")}</p>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-md text-xs">
                  {t("[3]")}
                </span>
                <p>{t("Առանձին դեպքերում, եթե Բանկի հետ համագործակցող կառուցապատող ընկերությունը դիմել է համապատասխան մարմին շենքի ավարտական ակտ ստանալու համար, հիփոթեքային վարկը կարող է տրամադրվել նաև անշարժ գույքի գնման իրավունքի ձեռքբերման նպատակով։")}</p>
              </div>
            </div>
          </div>
        )}

     

      <style>{`
        @media (max-width: 640px) {
          .yf-doc-header {
            padding: 16px !important;
          }
          .yf-doc-title {
            font-size: 17px !important;
          }
          .yf-doc-table td {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
          .yf-doc-num {
            width: 32px !important;
            padding: 10px 6px !important;
          }
          .yf-promo-banner {
            height: 240px !important;
            padding: 16px !important;
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
          .yf-promo-title {
            font-size: 17px !important;
            line-height: 1.35 !important;
          }
          .yf-related-section {
            padding-top: 24px !important;
          }
          .yf-related-title {
            font-size: 20px !important;
          }
          .yf-related-card {
            padding: 14px !important;
          }
        }
      `}</style>

      {activeTab === 'documents' && (
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="yf-doc-header p-6 sm:p-8 border-b border-gray-100">
            <h3 className="yf-doc-title text-xl font-bold text-gray-900">{t("Պահանջվող փաստաթղթերի ցանկ")}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="yf-doc-table w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 w-16 text-center align-top">{t("1.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկի տրամադրման դիմում-հայտ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("2.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չեն պահանջվում, եթե անձը ներկայացրել է նույնականացման քարտ)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("3.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկառուի/համավարկառուի ծննդյան վկայական")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("4.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ամուսնության վկայական")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("5.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("6.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("7.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անհատական հաշվի քաղվածք (ամուսինների և համավարկառուների)")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("8.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                    <p className="font-semibold text-gray-800">{t("Հաճախորդի ինքնազբաղված լինելու դեպքում՝")}</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 marker:text-purple-700">
                      <li>{t("Հարկ վճարողի հարկային համարը (ՀՎՀՀ)")}</li>
                      <li>{t("Գրանցման վկայական, կանոնադրություն (առկայության դեպքում)")}</li>
                      <li>{t("Գործունեության տվյալ տեսակով զբաղվելու թույլտվության փաստաթղթերը, եթե օրենսդրության համաձայն տվյալ գործունեության համար անհրաժեշտ է համապատասխան մարմինների կողմից հատուկ թույլտվություն")}</li>
                      <li>{t("Վերջին 1 տարվա ֆինանսական և հարկային հաշվետվությունները՝ հաստատված հարկային մարմինների կողմից")}</li>
                      <li>{t("Վերջին 6 ամիսների եկամուտների և ծախսերի հաշվետվություններ/գրառումներ (առկայության դեպքում) և Բանկի պահանջով այլ փաստաթղթեր")}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("9.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկանք ՀՀ ԱԳԿԿ-ի կողմից վարկառուին և նրա ամուսնուն սեփականության իրավունքով պատկանող անշարժ գույքի վերաբերյալ")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("10.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("11.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վաճառվող անշարժ գույքի սեփականության վկայականը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("12.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վաճառվող անշարժ գույքի ձեռք բերման հիմքերը")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("13.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անշարժ գույքի սեփականատերերի անձնագրերը և ամուսնության վկայական")}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("14.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ (առկայության դեպքում)")}</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="yf-doc-num p-4 sm:p-6 font-semibold text-purple-700 text-center align-top">{t("15.")}</td>
                  <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Նկարի հատվածը */}
      <div 
        className="yf-promo-banner relative w-full max-w-7xl mx-auto h-[350px] sm:h-[450px] bg-cover bg-center flex items-center justify-center px-4 rounded-3xl overflow-hidden shadow-2xl my-6"
        style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142451699219/1920x527.jpg')` }}
      >
        <div className="absolute inset-0 backdrop-brightness-95"></div>
        <div className="relative max-w-4xl text-center text-white space-y-4 px-4 z-10">
          <h2 className="yf-promo-title text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug drop-shadow-lg flex items-center justify-center flex-wrap gap-2">
            <span>{t("Նոր բնակարան ունենալն այլևս երազանք չէ: Կառուցե'ք ամուր տանիք Evocabank-ի օգնությամբ:")}</span>
          </h2>
        </div>
      </div>

      {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
      <div className="yf-related-section pt-12 border-t border-gray-100">
        <div className="relative">
          {/* Վերնագիր և նավիգացիայի կոճակներ */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="yf-related-title text-2xl font-bold text-gray-900">
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
                  className="yf-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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