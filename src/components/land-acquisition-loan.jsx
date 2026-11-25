import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function LandAcquisitionLoan() {
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
          .land-loan-banner {
            padding: 20px !important;
            gap: 20px !important;
          }
          .land-loan-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }
          .land-loan-subtitle {
            font-size: 15px !important;
          }
          .land-loan-about-grid {
            gap: 24px !important;
          }
          .land-loan-about-text {
            font-size: 14px !important;
          }
          .land-loan-rates-box {
            padding: 18px !important;
          }
          .land-loan-rate-value {
            font-size: 24px !important;
          }
          .land-loan-table td,
          .land-loan-table th {
            padding: 10px 12px !important;
            font-size: 12px !important;
          }
          .land-loan-num {
            width: 34px !important;
            padding: 10px 6px !important;
          }
          .land-loan-label {
            width: 38% !important;
          }
          .land-loan-split-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          .land-loan-related-section {
            padding-top: 24px !important;
          }
          .land-loan-related-title {
            font-size: 20px !important;
          }
          .land-loan-related-card {
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
        <div className="land-loan-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="land-loan-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Հողամասի ձեռքբերման վարկ")}
            </h1>
            <p className="land-loan-subtitle text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-60 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17421922764361/560x400.jpg" 
                alt={t("Հողամասի ձեռքբերման վարկ")} 
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
          <div className="land-loan-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="land-loan-about-text lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("Քո հողատարածքը, քո հնարավորությունը")}
              </h2>
              <p>
                <strong className="text-purple-700">{t("Evocabank")}</strong>
                {t("-ի հողատարածքի ձեռքբերման վարկի միջոցով դու կարող եք ունենալ բնակելի կամ առևտրային նշանակության հողատարածք՝ ընդամենը 30% կանխավճարով։ Օգտագործիր այն քո սեփական տան կառուցման, սեփական բիզնեսի ստեղծման կամ այլ նպատակների համար։")}
              </p>
              <p>
                {t("Այլ կերպ ասած՝ քո վարկը կարող է օգտագործվել որպես ներդրում և քեզ համար ապահովել նոր եկամուտներ։")}
              </p>
              <h3 className="text-xl font-bold text-gray-900 pt-2">
                {t("Որոշեցի՞ր դիմել։")}
              </h3>
              <h4 className="text-lg font-bold text-gray-900">
                {t("Փոխարենը կստանաս՝")}
              </h4>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>
                  <strong className="text-gray-900">{t("Հարմար պայմաններ")}</strong>
                  {t("՝ քո անձնական կամ բիզնես նպատակներն իրագործելու համար")}
                </li>
                <li>
                  <strong className="text-gray-900">{t("Պարզ և արագ գործընթաց")}</strong>
                  {t("՝ առանց ավելորդ ժամանակի կորստի և բարդ թղթաբանությունների")}
                </li>
                <li>
                  <strong className="text-gray-900">{t("Անվճար մասնագիտական խորհրդատվություն")}</strong>
                  {t("՝ մեր փորձառու թիմի կողմից")}
                </li>
              </ul>
              <p className="pt-2">
                {t("Իսկ եթե դեռ մտածում չես, մի սպասիր․ դիմիր հիմա և ստացիր վարկը քեզ հարմար պայմաններով։")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="land-loan-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="land-loan-rate-value text-3xl font-extrabold text-purple-700">{t("80 մլն. ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Գումար")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="land-loan-rate-value text-3xl font-extrabold text-purple-700">{t("240 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Ժամկետ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="land-loan-rate-value text-3xl font-extrabold text-purple-700">{t("14%-ից")}</span>
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
              <table className="land-loan-table w-full text-left border-collapse">
                <tbody>
                  {/* 1. Վարկի տրամադրման նպատակը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">{t("1.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկը տրամադրվում է բնակելի կամ առևտրային նշանակության հողամասի ձեռք բերման նպատակով։")}</td>
                  </tr>

                  {/* 2. Ովքեր կարող են դիմել */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("2.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("18 – 65 տարեկան ՀՀ ռեզիդենտ կամ ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:")}</td>
                  </tr>

                  {/* 3. Վարկավորման արժույթը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("3.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման արժույթը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div className="border-b border-gray-100 pb-2">
                        <span className="font-semibold text-gray-800 block mb-1">{t("ՀՀ դրամ")}</span>
                        <span className="text-gray-600 text-sm">{t("ՀՀ ռեզիդենտներ ֆիզիկական անձինք")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block mb-1">{t("ԱՄՆ դոլար, Եվրո")}</span>
                        <span className="text-gray-600 text-sm">{t("Ոչ ռեզիդենտներ ֆիզիկական անձինք, ՀՀ ռեզիդենտներ ֆիզիկական անձինք առևտրային նշանակության անշարժ գույքի ձեռքբերման դեպքում")}</span>
                      </div>
                    </td>
                  </tr>

                  {/* 4. Վարկավորման գումար */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("4.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկավորման գումար")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="land-loan-split-row flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Եկամտի վերլուծությամբ")}</span>
                        <span className="font-semibold text-purple-700">{t("2 000 000 - 80 000 000 ՀՀ դրամ")}</span>
                      </div>
                      <div className="land-loan-split-row flex justify-between pt-1">
                        <span className="text-gray-600">{t("Առանց եկամտի վերլուծության")}</span>
                        <span className="font-semibold text-purple-700">{t("2 000 000 - 50 000 000 ՀՀ դրամ")}</span>
                      </div>
                    </td>
                  </tr>

                  {/* 5. Վարկի մարման ժամկետը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("5.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <div className="land-loan-split-row flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Հաստատուն տոկոսադրույքի դեպքում")}</span>
                        <span className="font-semibold text-purple-700">{t("60 - 180 ամիս")}</span>
                      </div>
                      <div className="land-loan-split-row flex justify-between pt-1">
                        <span className="text-gray-600">{t("Լողացող տոկոսադրույքի դեպքում")}</span>
                        <span className="font-semibold text-purple-700">{t("60 - 240 ամիս")}</span>
                      </div>
                    </td>
                  </tr>

                  {/* 6. Տարեկան տոկոսադրույքներ */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("6.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան տոկոսադրույքներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left border border-gray-100 rounded-xl overflow-hidden">
                          <thead className="bg-gray-50 text-gray-600">
                            <tr>
                              <th className="p-2 border-b">{t("Արժույթ")}</th>
                              <th className="p-2 border-b">{t("Հաստատուն")}</th>
                              <th className="p-2 border-b">{t("Փաստացի")}</th>
                              <th className="p-2 border-b">{t("Լողացող")}</th>
                              <th className="p-2 border-b">{t("Փաստացի")}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="p-2 font-medium">{t("ՀՀ դրամ (Եկամտով)")}</td>
                              <td className="p-2">{t("14-15%")}</td>
                              <td className="p-2">{t("15.2-16.3%")}</td>
                              <td className="p-2">{t("Սկսած 13.2%-ից (հաստատուն բաղադրիչ՝ սկսած 4.2%-ից + փոփոխուն բաղադրիչ)")}</td>
                              <td className="p-2">{t("9.7-18.4%")}</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-medium">{t("ՀՀ դրամ (Առանց եկամտի)")}</td>
                              <td className="p-2">{t("15-16%")}</td>
                              <td className="p-2">{t("16.3-17.5%")}</td>
                              <td className="p-2">{t("Սկսած 14.2%-ից (հաստատուն բաղադրիչ՝ սկսած 5.2%-ից + փոփոխուն բաղադրիչ)")}</td>
                              <td className="p-2">{t("10.8-19.6%")}</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-medium">{t("ԱՄՆ դոլար")}</td>
                              <td className="p-2">{t("9.2-11%")}</td>
                              <td className="p-2">{t("9.8-11.8%")}</td>
                              <td className="p-2">{t("Սկսած 9.2%-ից (հաստատուն բաղադրիչ՝ սկսած 8.2%-ից + փոփոխուն բաղադրիչ)")}</td>
                              <td className="p-2">{t("5.5-16.3%")}</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-medium">{t("Եվրո")}</td>
                              <td className="p-2">{t("8.2-10%")}</td>
                              <td className="p-2">{t("8.7-10.7%")}</td>
                              <td className="p-2">{t("Սկսած 7.7%-ից (հաստատուն բաղադրիչ՝ սկսած 7.7%-ից + փոփոխուն բաղադրիչ)")}</td>
                              <td className="p-2">{t("4.45-15.2%")}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-gray-500">
                        • {t("Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝")} <strong className="text-gray-700">±4%</strong>
                      </p>
                      <p className="text-xs text-gray-500">
                        • {t("Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը:")}
                      </p>
                    </td>
                  </tr>

                  {/* 7. Վարկի գումարը շուտ մարելու տուգանք */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("7.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Տուգանք չի կիրառվում")}</td>
                  </tr>

                  {/* 8. Ուշացման տույժեր */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("8.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%")}</p>
                    </td>
                  </tr>

                  {/* 9. Վարկի մարման ձևը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("9.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ձևը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ: Վճարումները պետք է կատարվեն ամսական կտրվածքով:")}</td>
                  </tr>

                  {/* 10. Վարկի վերադարձելիության ապահովման միջոց */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("10.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի վերադարձելիության ապահովման միջոց")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>{t("1. Ձեռք բերվող անշարժ գույք, այլ անշարժ գույք:")}</p>
                      <p>{t("2. Բացի անշարժ գույքի գրավադրումից վարկառուից կարող է պահանջվել նաև առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն:")}</p>
                    </td>
                  </tr>

                  {/* 11. Վարկ/գրավ հարաբերակցությունը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("11.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկ/գրավ հարաբերակցությունը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-3">
                      <div className="land-loan-split-row flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Գնահատված արժեքի մինչև 70%")}</span>
                        <span className="font-semibold text-purple-700">{t("Եկամտի վերլուծությամբ")}</span>
                      </div>
                      <div className="land-loan-split-row flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{t("Գնահատված արժեքի մինչև 50%")}</span>
                        <span className="font-semibold text-purple-700">{t("Առանց եկամտի վերլուծության")}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {t("Լրացուցիչ անշարժ գույքի գրավադրման դեպքում, վարկի գումարը չպետք է գերազանցի ձեռք բերվող անշարժ գույքի գնահատված շուկայական արժեքը՝ պահպանելով գրավադրվող բոլոր գույքերի գնահատված շուկայական արժեքների հանրագումարի 70% «Վարկ/գրավ» հարաբերակցությունը, առանց եկամտի վերլուծության՝ 50% «Վարկ/գրավ» հարաբերակցությունը:")}
                      </p>
                    </td>
                  </tr>

                  {/* 12. Ապահովագրություն */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("12.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ապահովագրություն")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Առանց ապահովագրության պահանջի")}</td>
                  </tr>

                  {/* 13. Վարկի տրամադրման եղանակը */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("13.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման եղանակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Անկանխիկ /գումարը փոխանցվում է վաճառողի հաշվեհամարին/")}</td>
                  </tr>

                  {/* 14. Այլ պայմաններ */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("14.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Այլ պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկառուն Բանկում մուտքագրում է կանխավճար, որը սառեցվում է մինչև վարկի տրամադրումը:")}</td>
                  </tr>

                  {/* 15. Որոշումների կայացման ժամկետներ */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="land-loan-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">{t("15.")}</td>
                    <td className="land-loan-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>• {t("Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:")}</p>
                      <p>• {t("Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:")}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ծանոթագրություններ */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 space-y-2">
              <div className="flex items-start space-x-2">
                <span className="font-bold text-purple-700">[1]</span>
                <span>{t("Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:")}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold text-purple-700">[2]</span>
                <span>{t("Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:")}</span>
              </div>
            </div>
          </div>
        )}

        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="land-loan-related-section pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="land-loan-related-title text-2xl font-bold text-gray-900">
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
                    className="land-loan-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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