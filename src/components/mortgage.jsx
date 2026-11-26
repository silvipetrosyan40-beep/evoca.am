import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';

export default function LoansPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <style>{`
        @media (max-width: 640px) {
          .ml-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .ml-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .ml-filters {
            gap: 8px !important;
            margin-bottom: 24px !important;
          }
          .ml-filter-btn {
            padding: 8px 14px !important;
            font-size: 13px !important;
          }
          .ml-card {
            padding: 18px !important;
            gap: 16px !important;
          }
          .ml-card-img {
            height: 170px !important;
          }
          .ml-card-title {
            font-size: 20px !important;
          }
          .ml-card-stats {
            gap: 12px !important;
          }
          .ml-stat-val {
            font-size: 16px !important;
          }
          .ml-detail-btn {
            width: 100% !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>

      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">{t("Վարկեր")}</button>
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Վարկային պատմություն և սքոր")}</button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Կարևոր տեղեկատվություն")}</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="ml-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6 flex-wrap">
            <button onClick={() => handleNavigation('/')} aria-label={t("Գլխավոր")} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Անհատ")}</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Վարկեր")}</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">{t("Վարկեր")}</span>
          </div>

          <h1 className="ml-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Վարկեր")}</h1>

          {/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="ml-filters flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => handleNavigation('/hy/loans')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Բոլորը")}
            </button>
            
            <button
              onClick={() => handleNavigation('/loans/collateral-consumer')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Գրավով ապահովված սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/hy/loans/unsecured-consumer-loans')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Անգրավ սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/mortgage')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-purple-700 text-white"
            >
              {t("Հիփոթեքային վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/auto')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ավտոմեքենաների ձեռքբերման ֆինանսավորում")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/express')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ապառիկ")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/online')}
              className="ml-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Օնլայն վարկեր")}
            </button>
          </div>

          <div className="space-y-6">
            {/* NO8 ԲՆԱԿԱՐԱՆԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ ԲԱՆԿԻ ՌԵՍՈՒՐՍՈՎ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" 
                  alt={t("Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("80 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("ժամկետ")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("13.2%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/residential-mortgage-loans')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO10 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԼՂ-ԻՑ ԲՌՆԻ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" 
                  alt={t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("55 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("120 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("13%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/for-displaced-families-of-nagorno-karabakh')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO11 ՀՈՂԱՄԱՍԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" 
                  alt={t("Հողամասի ձեռքբերման վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հողամասի ձեռքբերման վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("80 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("14%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/land-acquisition-loan')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO12 ՄԻԿՐՈՎԵՐԱՆՈՐՈԳՄԱՆ ՎԱՐԿ ԲԱՆԿԻ ՌԵՍՈՒՐՍՆԵՐՈՎ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" 
                  alt={t("Միկրովերանորոգման վարկ Բանկի ռեսուրսներով")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Միկրովերանորոգման վարկ Բանկի ռեսուրսներով")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("5 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("17%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/micro-renovation-loan-with-bank-resources')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO18 ՈՉ ՌԵԶԻԴԵՆՏ ՖԻԶ․ ԱՆՁԱՆՑ ՀԱՄԱՐ ԲՆԱԿԱՐԱՆԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" 
                  alt={t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("80 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար (Համարժեք արտարժույթ)")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("180 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div> 
                    <span className="text-gray-400 text-xs block mb-1">{t("Ֆիքսված տոկոսադրույքով սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("8.2%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Լողացող տոկոսադրույքով սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("7.7%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/housing-mortgages-for-non-resident-individuals')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO21 ԱՌԵՎՏՐԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" 
                  alt={t("Առևտրային հիփոթեքային վարկեր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Առևտրային հիփոթեքային վարկեր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("120 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("7.2%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/commercial-mortgage-loans')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
       
                                               {/* NO22 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ՁԵՌՔ ԲԵՐՄԱՆ ՎԱՐԿԵՐ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" 
                  alt={t("ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("45 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("առավելագույնը")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("12%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO23 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ԿԱՌՈՒՑԱՊԱՏՄԱՆ ՎԱՐԿԵՐ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" 
                  alt={t("ԱՀԸ-ի ծրագրով կառուցապատման վարկեր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("ԱՀԸ-ի ծրագրով կառուցապատման վարկեր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("45 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("առավելագույնը")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("12.5%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/construction-loan-national-mortgage-company')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO24 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ՎԵՐԱՆՈՐՈԳՄԱՆ ՎԱՐԿԵՐ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" 
                  alt={t("ԱՀԸ-ի ծրագրով վերանորոգման վարկեր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("ԱՀԸ-ի ծրագրով վերանորոգման վարկեր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("15 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("84 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("12.5%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/renovation-loans-under-national-mortgage-company')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
                                                                     {/* NO25 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ «ԵՐԻՏԱՍԱՐԴ ԸՆՏԱՆԻՔԻՆ՝ ՄԱՏՉԵԼԻ ԲՆԱԿԱՐԱՆ» */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" 
                  alt={t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("27 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("180 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("2-ից - 4%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոս")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("6.9-ից - 7.9%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO27 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԱՐՑԱԽԻ ՇՐՋԱՆՆԵՐԻՑ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" 
                  alt={t("Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("45 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("120 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("10%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO28 ՎԵՐԱՆՈՐՈԳՄԱՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԱՐՑԱԽԻՑ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" 
                  alt={t("Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("10 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("13%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
                                                                                  {/* NO30 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ ՀՀ ՍԱՀՄԱՆԱՄԵՐՁ ԵՎ ԱՌԱՆՁԻՆ ԲՆԱԿԱՎԱՅՐԵՐՈՒՄ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" 
                  alt={t("Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("21 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("120 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("13%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO33 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ ԶԻՆԾԱՌԱՅՈՂՆԵՐԻՆ */}
            <div className="ml-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ml-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" 
                  alt={t("Հիփոթեքային վարկեր Զինծառայողներին")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ml-card-title text-2xl font-bold text-gray-900 mb-2">{t("Հիփոթեքային վարկեր Զինծառայողներին")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։")}
                </p>

                <div className="ml-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("25,65 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("120-240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("11-ից - 12.75%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ml-stat-val font-bold text-purple-700 text-lg">{t("5%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/mortgage-loans/mortgages-for-service-members')}
                  className="ml-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}