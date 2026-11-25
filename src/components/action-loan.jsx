import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next'; // Օգտագործում ենք react-i18next
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ActionLoanPage() {
  const { t } = useTranslation(); // Թարգմանության ֆունկցիան
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
 
  // Քարտերի տվյալները (վերնագրերը թարգմանվում են t() ֆունկցիայի միջոցով սլայդերի ներսում)
  const cards = [
    { id: 1, title: "Անգրավ սպառողական վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg", path: "/loans/unsecured-consumer" },
    { id: 2, title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg", path: "/hy/loans/car-loans/car-loans" },
    { id: 3, title: "Գույքի գրավով ապահովված վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg", path: "/consumer-loans/property-secured-loan" },
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
    { id: 30, title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձն բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր", img: " 	https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png", path: "/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia" },
    { id: 31, title: "Evolution", img: " https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png", path: "/unsecured-consumer-loans/evolution" },
    { id: 32, title: "Հիփոթեքային վարկեր Զինծառայողներին", img: "	https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png", path: "/unsecured-consumer-loans/evolution" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <style>{`
        @media (max-width: 640px) {
          .res-mortgage-main-banner {
            padding: 16px !important;
            gap: 16px !important;
          }
          .res-mortgage-main-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .res-mortgage-main-text {
            font-size: 15px !important;
            line-height: 1.5 !important;
          }
          .res-mortgage-card-img-wrapper {
            height: 190px !important;
          }
          .res-mortgage-tab-buttons {
            gap: 16px !important;
          }
          .res-mortgage-tab-button {
            font-size: 14px !important;
            padding-bottom: 12px !important;
          }
          .res-mortgage-about-grid {
            gap: 24px !important;
            font-size: 15px !important;
          }
          .res-mortgage-rates-box {
            padding: 20px !important;
            gap: 16px !important;
          }
          .res-mortgage-rate-value {
            font-size: 28px !important;
          }
          .res-mortgage-rate-label {
            font-size: 13px !important;
          }
          .res-mortgage-cond-table td {
            padding: 12px 14px !important;
            font-size: 13px !important;
          }
          .res-mortgage-cond-num {
            width: 36px !important;
            padding: 12px 6px !important;
          }
          .res-mortgage-cond-label {
            width: 38% !important;
          }
          .res-mortgage-cond-split-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          .res-mortgage-related-section {
            padding-top: 32px !important;
          }
          .res-mortgage-related-title {
            font-size: 20px !important;
          }
          .res-mortgage-related-card {
            padding: 14px !important;
          }
        }
      `}</style>
      
      {/* Հեդրը (Header) */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա) */}
      <div className="bg-purple-800 text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/hy/loans" className="text-white hover:text-purple-200 transition-colors">{t("Վարկեր")}</Link>
          <Link to="/hy/credit-history-and-score" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">{t("Վարկային պատմություն և սքոր")}</Link>
          <Link to="/loans/important-info" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">{t("Կարևոր տեղեկատվություն")}</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="res-mortgage-main-banner grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="res-mortgage-main-title text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("Action")}
            </h1>
            <p className="res-mortgage-main-text text-gray-600 text-lg sm:text-xl leading-relaxed">
              {t("Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։")}
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="res-mortgage-card-img-wrapper w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16994456305593/560x400.png" 
                alt="Action Loan" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

       {/* Ներդիրների կոճակներ (Tabs) */}
       <div className="res-mortgage-tab-buttons flex border-b border-gray-200 space-x-8 overflow-x-auto">
         <button
           onClick={() => setActiveTab('about')}
           className={`res-mortgage-tab-button pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'about'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           {t("Վարկի մասին")}
         </button>
         <button
           onClick={() => setActiveTab('conditions')}
           className={`res-mortgage-tab-button pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'conditions'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           {t("Պայմաններ")}
         </button>
       </div>

        {/* ԲՈՎԱՆԴԱԿՈւԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ */}
        
       {activeTab === 'about' && (
          <div className="res-mortgage-about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-purple-700">{t("Action")}</strong> {t("վարկատեսակի տրամադրման գործընթացը շատ պարզ է, արագ և հեշտ։ Այն ձևակերպվում է առանց երաշխավորի և գրավի առկայության, ինչպես նաև առանց հավելյալ փաստաթղթեր ներկայացնելու, բանկ այցելելու և հերթում ժամանակ կորցնելու։")} <strong className="text-purple-700">{t("Վարկը")}</strong> {t("հաստատվում է վայրկյանների ընթացքում, որից հետո՝ առավելագույնը 1 աշխատանքային օրվա ընթացքում, գումարը փոխանցվում է քո տրամադրած հաշվեհամարին։")}
              </p>
              <p>
                {t("Վարկի ստացման համար անհրաժեշտ է ձեռքի տակ ունենալ անձը հաստատող փաստաթուղթ, սոցիալական քարտ և սմարթֆոն, որտեղ անհրաժեշտ է ներբեռնել")} <strong className="text-purple-700">{t("EvocaTOUCH")}</strong> {t("հավելվածը։")}
              </p>
              <p>
                <strong className="text-purple-700">{t("Evocabank")}</strong>-ը {t("մշտապես աչքի է ընկնում նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։ Մենք անում ենք ամեն ինչ, որպեսզի հեշտացնենք քո կյանքը՝ խնայելով քեզ համար թերևս ամենանկարևորը՝ ժամանակը։")}
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="res-mortgage-rates-box lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="res-mortgage-rate-label text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="res-mortgage-rate-value text-3xl font-extrabold text-purple-700">{t("10 մլն ֏")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Սահմանաչափ")}</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="res-mortgage-rate-label text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                  <span className="res-mortgage-rate-value text-3xl font-extrabold text-purple-700">{t("60 ամիս")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Մարման ժամկետ")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="res-mortgage-rate-label text-xs text-gray-400 uppercase tracking-wider mb-1">{t("սկսած")}</p>
                  <span className="res-mortgage-rate-value text-3xl font-extrabold text-purple-700">{t("18%-ից")}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                </div>
              </div>
            </div>
          </div>
        )}

       {activeTab === 'conditions' && (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="res-mortgage-cond-table w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">{t("Վարկի տրամադրման նպատակը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկը տրամադրվում է Բանկի «EvocaTOUCH» հեռլապառավարման համակարգով հայտ ներկայացնելու միջոցով, անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Ովքեր կարող են դիմել")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր հանդիսանում են բանկի հաճախորդ:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի արժույթը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("ՀՀ դրամ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p className="font-semibold text-purple-700">{t("310,000 - 10,000,000")}</p>
                      <p className="text-gray-600 text-sm">{t("Վարկի առավելագույն գումարը որոշվում է համաձայն հաճախորդի վարկունակության գնահատականի:")} </p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կարգը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Վարկի տրամադրումն իրականացվում է անկանխիկ եղանակով՝ հաշվեգրելով հաճախորդի բանկային հաշվին:")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Տարեկան տոկոսադրույք")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">
                      <div className="res-mortgage-cond-split-row flex justify-between">
                         <div>
                          <p className="text-xs text-gray-400 mb-1">{t("Անվանական")}</p>
                          <p className="text-sm font-medium text-purple-700">{t("18% - 21.5%")}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">{t("Փաստացի")}</p>
                          <p className="text-sm font-medium text-purple-700">{t("19.58% - 23.79%")}</p>
                        </div>
                        <p className="text-xs text-gray-500 pt-1 max-w-xs">{t("Վարկի տարեկան անվանական տոկոսադրույքը որոշվում է համաձայն հաճախորդի վարկունակության գնահատականի:")}</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման ժամկետը")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("24 - 60 ամիս")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի մարման եղանակ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("«Անուիտետային»")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Գանձվող վճարներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Առկա չէ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
                      <p>{t("Ժամկետանց վարկի համար՝ օրական 0.015%,")}</p>
                      <p>{t("Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկունակության գնահատում / Վարկի հաստատման պայմաններ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">{t("Համաձայն սքորինգի և վարկունակության չափանիշների")}</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="res-mortgage-cond-num p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
                    <td className="res-mortgage-cond-label p-4 sm:p-6 font-semibold text-gray-800 align-top">{t("Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ")}</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
                      <p>• {t("Վարկի տրամադրման կամ մերժման որոշումը կայացվում է վարկկայլների ընթացքում:")}</p>
                      <p>• {t("Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:")}</p>
                      <p>• {t("Վարկային առաջարկ ստանալու պահից սկսած՝ եթե 72 ժամվա ընթացքում վարկառուի կողմից այն չի հաստատվում, ապա առաջարկը համակարգում ավտոմատ կերպով մերժվում է:")}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
          
        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="res-mortgage-related-section pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="res-mortgage-related-title text-2xl font-bold text-gray-900">{t("Այլ վարկեր")}</h2>
              
              <div className="flex space-x-2">
                <button 
                  ref={prevRef} 
                  aria-label={t("Նախորդ")}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❮
                </button>
                <button 
                  ref={nextRef} 
                  aria-label={t("Հաջորդ")}
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
                    className="res-mortgage-related-card bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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