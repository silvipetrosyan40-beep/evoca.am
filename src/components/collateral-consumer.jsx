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
          .lp-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .lp-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .lp-filters {
            gap: 8px !important;
            margin-bottom: 24px !important;
          }
          .lp-filter-btn {
            padding: 8px 14px !important;
            font-size: 13px !important;
          }
          .lp-card {
            padding: 18px !important;
            gap: 16px !important;
          }
          .lp-card-img {
            height: 170px !important;
          }
          .lp-card-title {
            font-size: 20px !important;
          }
          .lp-card-stats {
            gap: 12px !important;
          }
          .lp-stat-val {
            font-size: 16px !important;
          }
          .lp-detail-btn {
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
        <main className="lp-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
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

          <h1 className="lp-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Վարկեր")}</h1>

          {/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="lp-filters flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => handleNavigation('/hy/loans')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Բոլորը")}
            </button>
            
            <button
              onClick={() => handleNavigation('/loans/collateral-consumer')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-purple-700 text-white"
            >
              {t("Գրավով ապահովված սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/hy/loans/unsecured-consumer-loans')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Անգրավ սպառողական վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/mortgage')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Հիփոթեքային վարկեր")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/auto')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ավտոմեքենաների ձեռքբերման ֆինանսավորում")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/express')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Ապառիկ")}
            </button>

            <button
              onClick={() => handleNavigation('/loans/online')}
              className="lp-filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Օնլայն վարկեր")}
            </button>
          </div>

          <div className="space-y-6">
            {/* NO3 ԳՈՒՅՔԻ ԳՐԱՎՈՎ ԱՊԱՀՈՎՎԱԾ ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="lp-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="lp-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" 
                  alt={t("Գույքի գրավով ապահովված վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="lp-card-title text-2xl font-bold text-gray-900 mb-2">{t("Գույքի գրավով ապահովված վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։")}
                </p>

                <div className="lp-card-stats grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("150 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("անշարժ գույքի գրավադրման դեպքում")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("24-180 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("շարժական գույքի գրավադրման դեպքում")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկի մարման ժամկետը")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/consumer-loans/property-secured-loan')}
                  className="lp-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO5 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
            <div className="lp-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="lp-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" 
                  alt={t("Ոսկու գրավով (լոմբարդային) վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="lp-card-title text-2xl font-bold text-gray-900 mb-2">{t("Ոսկու գրավով (լոմբարդային) վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։")}
                </p>

                <div className="lp-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("50 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("ժամկետ")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("3-60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("15.5%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("150%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Վարկ / գրավ հարաբերակցություն")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/hy/loans/consumer-loans/gold-secured-pawn-loans')}
                  className="lp-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO15 ԱՆՀԱՏԱԿԱՆ ՎԱՐԿ «ՆԵՐԴՐՈՒՄԱՅԻՆ» */}
            <div className="lp-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="lp-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
                  alt={t("Անհատական վարկ «Ներդրումային»")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="lp-card-title text-2xl font-bold text-gray-900 mb-2">{t("Անհատական վարկ «Ներդրումային»")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։")}
                </p>

                <div className="lp-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("350 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Գումար")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("240 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div> 
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("15%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/consumer-loans/individual-investment-loan')}
                  className="lp-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO20 ԴՐԱՄԱԿԱՆ ՄԻՋՈՑՆԵՐԻ ԳՐԱՎՈՎ ԱՊԱՀՈՎՎԱԾ ԱՆՀԱՏԱԿԱՆ ՎԱՐԿ */}
            <div className="lp-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="lp-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg" 
                  alt={t("Դրամական միջոցների գրավով ապահովված անհատական վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="lp-card-title text-2xl font-bold text-gray-900 mb-2">{t("Դրամական միջոցների գրավով ապահովված անհատական վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։")}
                </p>

               <div className="lp-card-stats grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("ավանդի գումարի մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("95%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("պարտատոմսի գումարի մինչև")}</span>
                    <span className="lp-stat-val font-bold text-purple-700 text-lg">{t("80%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/consumer-loans/deposit-secured-credit-line-retail')}
                  className="lp-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
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