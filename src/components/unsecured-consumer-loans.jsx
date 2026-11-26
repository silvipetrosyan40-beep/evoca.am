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
          .ul-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .ul-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .ul-filters {
            gap: 8px !important;
            margin-bottom: 24px !important;
          }
          .ul-filter-btn {
            padding: 8px 14px !important;
            font-size: 13px !important;
          }
          .ul-card {
            padding: 18px !important;
            gap: 16px !important;
          }
          .ul-card-img {
            height: 170px !important;
          }
          .ul-card-title {
            font-size: 20px !important;
          }
          .ul-card-stats {
            gap: 12px !important;
          }
          .ul-stat-val {
            font-size: 16px !important;
          }
          .ul-detail-btn {
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
        <main className="ul-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
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

          <h1 className="ul-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Վարկեր")}</h1>

          {/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="ul-filters flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => handleNavigation('/hy/loans')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Բոլորը")}
            </button>
            
            <button
              onClick={() => handleNavigation('/loans/collateral-consumer')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Գրավով ապահովված սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/hy/loans/unsecured-consumer-loans')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-purple-700 text-white"
            >
              {t("Անգրավ սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/mortgage')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Հիփոթեքային վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/auto')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ավտոմեքենաների ձեռքբերման ֆինանսավորում")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/express')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ապառիկ")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/online')}
              className="ul-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Օնլայն վարկեր")}
            </button>
          </div>

          <div className="space-y-6">
            {/* NO1 ԱՆԳՐԱՎ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg" 
                  alt={t("Անգրավ սպառողական վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("Անգրավ սպառողական վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ։ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:")}
                </p>

                <div className="ul-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("10 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("19%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/loans/unsecured-consumer')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO7 EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՓԱԹԵԹԻ ՇՐՋԱՆԱԿՈՒՄ ՎԱՐԿ */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg" 
                  alt={t("Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։")}
                </p>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/unsecured-consumer-loans/salary-overdrafts')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO16 ԱՎՏՈԿԱՅԱՆԱՏԵՂԻԻ ՁԵՌՔԲԵՐՄԱՆ ՎԱՐԿ */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" 
                  alt={t("Ավտոկայանատեղիի ձեռքբերման վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("Ավտոկայանատեղիի ձեռքբերման վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:")}
                </p>

                <div className="ul-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("8 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div> 
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("16%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/unsecured-consumer-loans/parking-space-purchase-loan')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO26 VISA INFINITE ՎՃԱՐԱՅԻՆ ՔԱՐՏԵՐՈՎ ՎԱՐԿԱՅԻՆ ՍԱՀՄԱՆԱՉԱՓ */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg" 
                  alt={t("Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:")}
                </p>

                <div className="ul-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("10 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("12-36 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("15%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("Մինչև 45 օր")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Արտոնյալ ժամանակահատված")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/unsecured-consumer-loans/credit-line-with-visa-infinite-card')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO29 «ՈՒՍԱՆՈՂԱԿԱՆ» ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿ */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg" 
                  alt={t("«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։")}
                </p>

                <div className="ul-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("4 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("120 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("9%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("2-ից - 3%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սուբսիդավորվող տոկոս")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/unsecured-consumer-loans/student-loans')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO32 EVOLUTION */}
            <div className="ul-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="ul-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png" 
                  alt={t("Evolution")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="ul-card-title text-2xl font-bold text-gray-900 mb-2">{t("Evolution")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։")}
                </p>

                <div className="ul-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("1 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("18 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="ul-stat-val font-bold text-purple-700 text-lg">{t("18%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/unsecured-consumer-loans/evolution')}
                  className="ul-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
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