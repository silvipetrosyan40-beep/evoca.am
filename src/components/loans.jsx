import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function LoansPage() {

  const navigate = useNavigate();
const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="loans-page-wrapper w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <style>{`
        @media (max-width: 640px) {
          .loans-subnav {
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 16px !important;
          }
          .loans-subnav::-webkit-scrollbar {
            display: none;
          }
          .loans-filter-pills {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 6px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .loans-filter-pills::-webkit-scrollbar {
            display: none;
          }
          .loans-filter-pills button {
            white-space: nowrap;
            flex-shrink: 0;
          }
          .loan-card-item {
            padding: 18px !important;
          }
          .loan-card-title {
            font-size: 19px !important;
            line-height: 1.3 !important;
          }
          .loan-card-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="loans-subnav flex space-x-6 sm:space-x-8 h-12 items-center text-xs sm:text-sm font-medium">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">
                {t("Վարկեր")}
              </button>
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">
                {t("Վարկային պատմություն և սքոր")}
              </button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">
                {t("Կարևոր տեղեկատվություն")}
              </button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12 sm:mb-16">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">
              {t("Անհատ")}
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">
              {t("Վարկեր")}
            </button>
            <span>›</span>
            <span className="text-gray-800 font-medium">{t("Վարկեր")}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            {t("Վարկեր")}
          </h1>

          {/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="loans-filter-pills flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-12">
            <button
              onClick={() => handleNavigation('/hy/loans')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Բոլորը")}
            </button>
            
            <button
              onClick={() => handleNavigation('/loans/collateral-consumer')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Գրավով ապահովված սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/hy/loans/unsecured-consumer-loans')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Անգրավ սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/mortgage')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Հիփոթեքային վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/auto')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ավտոմեքենաների ձեռքբերման ֆինանսավորում")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/express')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ապառիկ")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/online')}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Օնլայն վարկեր")}
            </button>
          </div>

          {/* ՔԱՐՏԵՐԻ ԸՆԴՀԱՆՈՒՐ ԲԼՈԿ՝ ՏԱՐԱԾՈՒԹՅԱՄԲ (space-y-6) */}
          <div className="space-y-5 sm:space-y-6">

            {/* NO1 ԱՆԳՐԱՎ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg" 
                  alt={t("Անգրավ սպառողական վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t("Անգրավ սպառողական վարկ")}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {t("Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ։ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("19%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/loans/unsecured-consumer')}
                  className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* NO2 ԱՎՏՈՄԵՔԵՆԱՅԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg" 
                  alt={t("Ավտոմեքենայի ձեռքբերման նպատակով վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t("Ավտոմեքենայի ձեռքբերման նպատակով վարկ")}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {t("Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("50 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("84 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("13%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Կանխավճար")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/hy/loans/car-loans/car-loans')}
                  className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* NO3 ԳՈՒՅՔԻ ԳՐԱՎՈՎ ԱՊԱՀՈՎՎԱԾ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" 
                  alt={t("Գույքի գրավով ապահովված վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t("Գույքի գրավով ապահովված վարկ")}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {t("Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("150 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("անշարժ գույքի գրավադրման դեպքում")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("24-180 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("շարժական գույքի գրավադրման դեպքում")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/consumer-loans/property-secured-loan')}
                  className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* NO4 EvocaPOWER ԱՐԵՎԱՅԻՆ ԿԱՅԱՆՆԵՐԻ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png" 
                  alt={t("Արևային կայանների ձեռք բերման վարկ EvocaPOWER")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {t("Արևային կայանների ձեռք բերման վարկ EvocaPOWER")}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {t("Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("5 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="font-bold text-purple-700 text-base sm:text-lg">{t("0%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/hy/loans/installment/evocapower-loan')}
                  className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

           <style>{`
            @media (max-width: 640px) {
              .loan-card-item {
                padding: 18px !important;
              }
              .loan-card-title {
                font-size: 19px !important;
                line-height: 1.3 !important;
              }
              .loan-card-btn {
                width: 100% !important;
                justify-content: center !important;
              }
            }
          `}</style>

          {/* NO5 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" 
                alt={t("Ոսկու գրավով (լոմբարդային) վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Ոսկու գրավով (լոմբարդային) վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("50 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("ժամկետ")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("3-60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("15.5%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("150%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկ / գրավ հարաբերակցություն")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/hy/loans/consumer-loans/gold-secured-pawn-loans')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO6 ՏԵՂՈՒՄ ԱՊԱՌԻԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg" 
                alt={t("Տեղում Ապառիկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Տեղում Ապառիկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("5 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("ժամկետ")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("0%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/installment/point-of-sale-loans')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO7 ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՓԱԹԵԹԻ ՇՐՋԱՆԱԿՈՒՄ ՏՐԱՄԱԴՐՎՈՂ ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg" 
                alt={t("Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։")}
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/unsecured-consumer-loans/salary-overdrafts')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* NO8 ԲՆԱԿԱՐԱՆԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" 
                alt={t("Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("80 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("ժամկետ")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("13.2%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/residential-mortgage-loans')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO9 ACTION ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png" 
                alt={t("Action")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Action")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("18%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/online-loans/action-loan')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO10 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԼՂ-ԻՑ ԲՌՆԻ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" 
                alt={t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("55 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("13%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/for-displaced-families-of-nagorno-karabakh')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO11 ՀՈՂԱՄԱՍԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" 
                alt={t("Հողամասի ձեռքբերման վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հողամասի ձեռքբերման վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("80 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("14%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/land-acquisition-loan')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO12 ՄԻԿՐՈՎԵՐԱՆՈՐՈԳՄԱՆ ՎԱՐԿ ԲԱՆԿԻ ՌԵՍՈՒՐՍՆԵՐՈՎ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" 
                alt={t("Միկրովերանորոգման վարկ Բանկի ռեսուրսներով")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Միկրովերանորոգման վարկ Բանկի ռեսուրսներով")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("5 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("17%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/micro-renovation-loan-with-bank-resources')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO13 ՖԻԶԻԿԱԿԱՆ ԱՆՁԱՆՑ ՏՐԱՆՍՊՈՐՏԱՅԻՆ ՄԻՋՈՑՆԵՐԻ ԼԻԶԻՆԳ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" 
                alt={t("Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("50 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("Սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("14%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/car-loans/leasing-of-vehicles-for-individuals')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

             <style>{`
            @media (max-width: 640px) {
              .loan-card-item {
                padding: 18px !important;
              }
              .loan-card-title {
                font-size: 19px !important;
                line-height: 1.3 !important;
              }
              .loan-card-btn {
                width: 100% !important;
                justify-content: center !important;
              }
            }
          `}</style>

          {/* NO14 ՎՃԱՐԱՅԻՆ ՔԱՐՏՈՎ ՕՎԵՐԴՐԱՖՏ (ՎԱՐԿԱՅԻՆ ՔԱՐՏ) */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png" 
                alt={t("Վճարային քարտով օվերդրաֆտ (վարկային քարտ)")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Վճարային քարտով օվերդրաֆտ (վարկային քարտ)")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("36 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("16%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/online-loans/online-overdraft')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO15 ԱՆՀԱՏԱԿԱՆ ՎԱՐԿ «ՆԵՐԴՐՈՒՄԱՅԻՆ» */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
                alt={t("Անհատական վարկ «Ներդրումային»")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Անհատական վարկ «Ներդրումային»")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("350 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("15%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/consumer-loans/individual-investment-loan')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO16 ԱՎՏՈԿԱՅԱՆԱՏԵՂԻԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" 
                alt={t("Ավտոկայանատեղիի ձեռքբերման վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Ավտոկայանատեղիի ձեռքբերման վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("8 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("16%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/unsecured-consumer-loans/parking-space-purchase-loan')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO17 ՀԵԾԱՆԻՎԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png" 
                alt={t("Հեծանիվի ձեռքբերման վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հեծանիվի ձեռքբերման վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("300,000 ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("36 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("Սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("16%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("16%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Պետության կողմից սուբսիդավորվող տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/installment/bicycle-purchase-loan')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO18 ՈՉ ՌԵԶԻԴԵՆՏ ՖԻԶ․ ԱՆՁԱՆՑ ՀԱՄԱՐ ԲՆԱԿԱՐԱՆԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" 
                alt={t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("80 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար (Համարժեք արտարժույթ)")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("180 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("Ֆիքսված տոկոսադրույքով սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("8.2%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("Լողացող տոկոսադրույքով սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("7.7%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/housing-mortgages-for-non-resident-individuals')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO19 ՎԵՐԱՆՈՐՈԳՄԱՆ ՎԱՐԿ EVOCAHOME */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png" 
                alt={t("Վերանորոգման վարկ EvocaHOME")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Վերանորոգման վարկ EvocaHOME")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար (Համարժեք արտարժույթ)")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("16%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/installment/evocahome')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO20 ԴՐԱՄԱԿԱՆ ՄԻՋՈՑՆԵՐԻ ԳՐԱՎՈՎ ԱՊԱՀՈՎՎԱԾ ԱՆՀԱՏԱԿԱՆ ՎԱՐԿ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg" 
                alt={t("Դրամական միջոցների գրավով ապահովված անհատական վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Դրամական միջոցների գրավով ապահովված անհատական վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("ավանդի գումարի մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("95%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("պարտատոմսի գումարի մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("80%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/consumer-loans/deposit-secured-credit-line-retail')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO21 ԱՌԵՎՏՐԱՅԻՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" 
                alt={t("Առևտրային հիփոթեքային վարկեր")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Առևտրային հիփոթեքային վարկեր")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("7.2%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/commercial-mortgage-loans')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
            <style>{`
            @media (max-width: 640px) {
              .loan-card-item {
                padding: 18px !important;
              }
              .loan-card-title {
                font-size: 19px !important;
                line-height: 1.3 !important;
              }
              .loan-card-btn {
                width: 100% !important;
                justify-content: center !important;
              }
            }
          `}</style>

          {/* NO22 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ՁԵՌՔ ԲԵՐՄԱՆ ՎԱՐԿԵՐ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" 
                alt={t("ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("45 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("առավելագույնը")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("12%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO23 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ԿԱՌՈՒՑԱՊԱՏՄԱՆ ՎԱՐԿԵՐ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" 
                alt={t("ԱՀԸ-ի ծրագրով կառուցապատման վարկեր")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("ԱՀԸ-ի ծրագրով կառուցապատման վարկեր")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("45 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("առավելագույնը")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("12.5%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/construction-loan-national-mortgage-company')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO24 ԱՀԸ-Ի ԾՐԱԳՐՈՎ ՎԵՐԱՆՈՐՈԳՄԱՆ ՎԱՐԿԵՐ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" 
                alt={t("ԱՀԸ-ի ծրագրով վերանորոգման վարկեր")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("ԱՀԸ-ի ծրագրով վերանորոգման վարկեր")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("15 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("84 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("12.5%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/renovation-loans-under-national-mortgage-company')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO25 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ «ԵՐԻՏԱՍԱՐԴ ԸՆՏԱՆԻՔԻՆ՝ ՄԱՏՉԵԼԻ ԲՆԱԿԱՐԱՆ» */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" 
                alt={t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("27 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("180 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("2-ից - 4%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոս")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("6.9-ից - 7.9%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO26 VISA INFINITE ՎՃԱՐԱՅԻՆ ՔԱՐՏԵՐՈՎ ՏՐԱՄԱԴՐՎՈՂ ՎԱՐԿԱՅԻՆ ՍԱՀՄԱՆԱՉԱՓ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg" 
                alt={t("Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("12-36 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("15%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("Մինչև 45 օր")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Արտոնյալ ժամանակահատված")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/unsecured-consumer-loans/credit-line-with-visa-infinite-card')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO27 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԱՐՑԱԽԻ ՇՐՋԱՆՆԵՐԻՑ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" 
                alt={t("Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("45 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO28 ՎԵՐԱՆՈՐՈԳՄԱՆ ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ ԱՐՑԱԽԻՑ ՏԵՂԱՀԱՆՎԱԾ ԸՆՏԱՆԻՔՆԵՐԻՆ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" 
                alt={t("Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("10 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("60 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("13%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO29 «ՈՒՍԱՆՈՂԱԿԱՆ» ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg" 
                alt={t("«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("4 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("9%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("2-ից - 3%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոս")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/unsecured-consumer-loans/student-loans')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* NO30 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ ՀՀ ՍԱՀՄԱՆԱՄԵՐՁ ԵՎ ԱՌԱՆՁԻՆ ԲՆԱԿԱՎԱՅՐԵՐՈՒՄ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" 
                alt={t("Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("21 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("13%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* NO32 EVOLUTION ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png" 
                alt={t("Evolution")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Evolution")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("1 մլն. ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("18 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("18%-ից")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/unsecured-consumer-loans/evolution')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* NO33 ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿԵՐ ԶԻՆԾԱՌԱՅՈՂՆԵՐԻՆ */}
          <div className="loan-card-item bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" 
                alt={t("Հիփոթեքային վարկեր Զինծառայողներին")} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="loan-card-title text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {t("Հիփոթեքային վարկեր Զինծառայողներին")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {t("Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("25,65 մլն ֏")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("120-240 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("11-ից - 12.75%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                </div>
                <div>
                  <span className="font-bold text-purple-700 text-base sm:text-lg">{t("5%")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոսադրույք")}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/mortgage-loans/mortgages-for-service-members')}
                className="loan-card-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>{t("Մանրամասն")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          </div>
          

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}