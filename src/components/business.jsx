import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle } from 'lucide-react';

export default function LoansPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <style>{`
        @media (max-width: 640px) {
          .bl-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .bl-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .bl-card {
            padding: 18px !important;
            gap: 16px !important;
          }
          .bl-card-img {
            height: 170px !important;
          }
          .bl-card-title {
            font-size: 20px !important;
          }
          .bl-card-stats {
            gap: 12px !important;
          }
          .bl-stat-val {
            font-size: 16px !important;
          }
          .bl-detail-btn {
            width: 100% !important;
            padding: 12px 18px !important;
          }
        }
      `}</style>

      <div>
        {/* ՀԵԴԵՐ (HEADER) */}
        <header className="w-full bg-white shadow-sm font-sans relative z-50">
          {/* Վերին բար (Top Bar) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
              
              {/* Ձախ կողմի հղումներ */}
              <nav className="flex space-x-6 items-center overflow-x-auto">
                <button onClick={() => handleNavigation('/hy/loans')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">
                  {t("Անհատ")}
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/business')}
                  className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0 whitespace-nowrap"
                >
                  {t("Բիզնես")}
                </button>
                <button onClick={() => handleNavigation('/hy/akntartayinvcharumner')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Ակնթարթային վճարումներ")}</button>
                <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Մեր մասին")}</button>
                <button onClick={() => handleNavigation('/all-news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Նորություններ")}</button>
                <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Բլոգ")}</button>
                <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Կարիերա")}</button>

                {/* Առցանց հայտեր Dropdown */}
                <div className="relative shrink-0">
                  <button 
                    onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
                  >
                    <span>{t("Առցանց հայտեր")}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOnlineAppsOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                      <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        {t("ՓՄՁ վարկավորում")}
                      </button>
                      <button onClick={() => { handleNavigation('/cards/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        {t("Visa Infinite")}
                      </button>
                      <button onClick={() => { handleNavigation('/cards/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        {t("MasterCard Gold")}
                      </button>
                      <button onClick={() => { handleNavigation('/cards/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        {t("Visa Gold")}
                      </button>
                    </div>
                  )}
                </div>

                {/* Հետադարձ կապ Dropdown */}
                <div className="relative shrink-0">
                  <button 
                    onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
                  >
                    <span>{t("Հետադարձ կապ")}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isContactOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                      <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                      <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                      <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                      <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                      <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                        {t("Պատվիրել զանգ")}
                      </button>
                    </div>
                  )}
                </div>
              </nav>

              {/* Աջ կողմի գործիքներ և իքոնկեք */}
              <div className="flex items-center space-x-5 text-gray-700 shrink-0">
                <button onClick={() => handleNavigation('/branches')} aria-label={t("Մասնաճյուղեր")} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/help')} aria-label={t("Օգնություն")} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <HelpCircle className="w-4 h-4" />
                </button>
               {/* Լեզվի բացվող մենյու */}
<div className="relative flex items-center">
  <button
    type="button"
    onClick={() => {
      setIsLangOpen(!isLangOpen);
      setIsOnlineAppsOpen(false);
      setIsContactOpen(false);
    }}
    aria-label={t("Լեզու")}
    className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center"
  >
    <Globe className="w-4 h-4" />
  </button>

  {isLangOpen && (
    <div className="absolute right-0 top-full mt-3 w-20 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 py-1.5 z-50 flex flex-col items-center rounded-xl">
      {[
        { code: 'hy', label: 'ՀԱՅ', border: true },
        { code: 'en', label: 'ENG', border: true },
        { code: 'ru', label: 'РУС', border: false },
      ].map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => {
            i18n.changeLanguage(lang.code);
            localStorage.setItem('i18nextLng', lang.code);
            setIsLangOpen(false);
          }}
          className={`w-12 py-2.5 text-center text-xs tracking-wide transition-colors cursor-pointer bg-transparent border-t-0 border-x-0 ${
            lang.border ? 'border-b border-[#6400DC]' : 'border-b-0'
          } ${
            (i18n.language || 'hy').startsWith(lang.code)
              ? 'font-extrabold text-gray-950'
              : 'font-medium text-gray-700 hover:text-[#6400DC]'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )}
</div>
                <button onClick={() => handleNavigation('/search')} aria-label={t("Որոնել")} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/menu')} aria-label={t("Գլխավոր մենյու")} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Հիմնական նավիգացիա (Main Navigation) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-12">
                <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
                  <span className="text-3xl font-extrabold tracking-tight text-gray-700">evoca</span>
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-full ml-0.5 mb-3"></span>
                </div>

                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
                  <button onClick={() => handleNavigation('/hy/business')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Վարկեր")}</button>
                  <button onClick={() => handleNavigation('/hy/leasing-evoca')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("լիզինգ")}</button>
                  <button onClick={() => handleNavigation('/hy/business-account-opening-and-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Հաշիվներ")}</button>
                  <button onClick={() => handleNavigation('/hy/business-classical-deposit')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Ավանդներ")}</button>
                  <button onClick={() => handleNavigation('/hy/business-investment-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Արժեթղթերի շուկա")}</button>
                  <button onClick={() => handleNavigation('/hy/guarantee')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Առևտրի ֆինանսավորում")}</button>
                  <button onClick={() => handleNavigation('/hy/v-pos-terminal')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Դիջիթալ")}</button>
                  <button onClick={() => handleNavigation('/hy/individual-safe-deposit-boxes')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Այլ")}</button>
                </nav>
              </div>

              <div>
                <button
                  onClick={() => handleNavigation('/evoca-online')}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-2xl shadow-md transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer border-none whitespace-nowrap"
                >
                  {t("EvocaONLINE")}
                </button>
              </div>
            </div>
          </div> 
        </header>

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/hy/business')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">{t("Վարկեր")}</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="bl-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6 flex-wrap">
            <button onClick={() => handleNavigation('/')} aria-label={t("Գլխավոր")} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/business')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Բիզնես")}</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/business')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Վարկեր")}</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">{t("Բիզնես վարկեր")}</span>
          </div>

          <h1 className="bl-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Բիզնես վարկեր")}</h1>

          {/* ՔԱՐՏԵՐԻ ԸՆԴՀԱՆՈՒՐ ԲԼՈԿ */}
          <div className="space-y-6">

            {/* NO1 Արագ բիզնես վարկ/վարկային գիծ */}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png" 
                  alt={t("Արագ բիզնես վարկ/վարկային գիծ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Արագ բիզնես վարկ/վարկային գիծ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով։")}
                </p>

                <div className="bl-card-stats grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("30 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ կամ համարժեք արտարժույթ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("9.22%-17.89%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/fast-business-loan')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO2 Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ */}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png" 
                  alt={t("Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">  
                  {t("Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ։")}
                </p>

                <div className="bl-card-stats grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("36 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("500 մլն ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ կամ համարժեք արտարժույթ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("13%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("8%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույքի սուբսիդավորման չափ")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/loans-for-importing-textile-raw-materials')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO3 Բիզնես վարկերի վերաֆինանսավորում*/}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png" 
                  alt={t("Բիզնես վարկերի վերաֆինանսավորում")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Բիզնես վարկերի վերաֆինանսավորում")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով։")}
                </p>

                <div className="bl-card-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Վերաֆինանսավորում")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("36-120 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Գումար")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("15մլն-500մլն")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ՀՀ դրամ կամ համարժեք արտարժույթ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("ՀՀ դրամ՝ 12%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("ԱՄՆ դոլար՝ 9%")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տարեկան անվանական տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/Business-loan-refinancing')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>  
        

           {/* NO4 Պարտատոմսերով ապահովված վարկ */}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png" 
                  alt={t("Պարտատոմսերով ապահովված վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Պարտատոմսերով ապահովված վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը։")}
                </p>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/Loan-secured-by-bonds')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO5 Խոշոր և ՓՄՁ բիզնես վարկ*/}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg" 
                  alt={t("Խոշոր և ՓՄՁ բիզնես վարկ")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Խոշոր և ՓՄՁ բիզնես վարկ")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Զարգացրե'ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:")}
                </p>

                <div className="bl-card-stats grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("4 մլրդ ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("կամ համարժեք արտարժույթ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("180")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("ամիս")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("Սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("8.2%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/business-loan')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO6 Evoca GO*/}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg" 
                  alt={t("Evoca GO")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Evoca GO")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:")}
                </p>

                <div className="bl-card-stats grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("500 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("90 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("10.5 % ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("տոկոսադրույք")}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                  <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("30 ամիս")}</span>
                  <span className="text-gray-500 text-xs block mt-0.5">{t("Մայր գումարի արտոնյալ ժամկետ (ոչ պարտադիր)")}</span>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/evoca-go-loan')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* NO7 Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր*/}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg" 
                  alt={t("Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Եթե Դուք ցանկանում եք ձեռք բերել ԷԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ Էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:")}
                </p>

                <div className="bl-card-stats grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("500 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("5 տարի")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("9%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>
          
             <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/loans-provided-within-the-framework-of-gaf-energy-efficiency-for-sme')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

                   {/* NO8 Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg" 
                  alt="Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Մի՛ օգտագործեք կուտակված խնայողությունները․ Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք։
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">ավանդի գումարի մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">95%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">պարտատոմսի գումարի մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">80%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/consumer-loans/deposit-secured-credit-line-retail')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

                  {/* NO9 KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="	https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg" 
                  alt="KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Եթե ցանկանում եք իրականացնել Էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">առանց գրավի մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">10 մլն. ֏</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ (ներառյալ)</span>
                  </div>
                  <div>
                    <span className="font-bold text-purple-700 text-lg">9.5%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տարեկան անվանական տոկոսադրույքը ՎԷԷԿ դեպքում (փաստացի տոկոսադրույք մինչև 10%)</span>
                  </div>
                  <div>
                    <span className="font-bold text-purple-700 text-lg">10.25%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տարեկան անվանական տոկոսադրույքը ԷԱՆ դեպքում (փաստացի տոկոսադրույք մինչև 10․75%)</span>
                  </div>
                   <div>
                    <span className="text-gray-400 text-xs block mb-1">Մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">120 ամիս</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ ՎԷԷԿ դեպքում</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/loans-provided-within-the-framewok-of-renewable-energy-and-energy-saving-program')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>


                   {/* NO10 Պարզ բիզնես վարկ*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="	https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg" 
                  alt="Պարզ բիզնես վարկ" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Պարզ բիզնես վարկ</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">50 մլն. ֏</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ (կամ համարժեք արտարժույթ)</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">60 ամիս</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                    <span className="font-bold text-purple-700 text-lg">7.5%-ից</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/simple-business-loan')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

                   {/* NO11 Հաշվի վարկավորում*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                <img 
                  src="	https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg" 
                  alt="Հաշվի վարկավորում" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Հաշվի վարկավորում</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">առավելագույնը</span>
                    <span className="font-bold text-purple-700 text-lg">500 մլն ֏</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Կամ համարժեք արտարժույթ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">առավելագույնը</span>
                    <span className="font-bold text-purple-700 text-lg">12 ամիս</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                    <span className="font-bold text-purple-700 text-lg">7-ից</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/account-lending')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

                         {/* NO12 Վարկային գիծ*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0  flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg" 
                  alt="Վարկային գիծ" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Վարկային գիծ</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">1.5 մլրդ. ֏</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">5 տարի</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                    <span className="font-bold text-purple-700 text-lg">6%-ից</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/renewable-credit-line')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

                     {/* NO13 Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)*/}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0  flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg" 
                  alt="Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">1 մլրդ ֏</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Կամ համարժեք արտարժույթ սահմանաչափ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">120 ամիս</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                    <span className="font-bold text-purple-700 text-lg">6%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                  </div>
                   <div>
                    <span className="text-gray-400 text-xs block mb-1">Մինչև</span>
                    <span className="font-bold text-purple-700 text-lg">6%</span>
                    <span className="text-gray-500 text-xs block mt-0.5">Սուբսիդավորում</span>
                  </div>
                </div>
                
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/loan-under-the-productivity-promotion-program')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>Մանրամասն</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>


                    {/* NO14 KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում*/}
            <div className="bl-card bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="bl-card-img w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png" 
                  alt={t("KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում")} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">
                <h3 className="bl-card-title text-2xl font-bold text-gray-900 mb-2">{t("KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("Կատարե'ք Ձեր կապիտալ ներդրումները և իրականացրե'ք բիզնես գործունեության նպատակները Evocabank-ի հետ:")}
                </p>

                <div className="bl-card-stats grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("160 մլն. ֏")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Սահմանաչափ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("մինչև")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("60 ամիս")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Մարման ժամկետ")}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">{t("սկսած")}</span>
                    <span className="bl-stat-val font-bold text-purple-700 text-lg">{t("9,5%-ից")}</span>
                    <span className="text-gray-500 text-xs block mt-0.5">{t("Տոկոսադրույք")}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => handleNavigation('/business-loans/kfw-bank-program-loan')}
                  className="bl-detail-btn bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                >
                  <span>{t("Մանրամասն")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* ՖՈՒԹԵՐ (FOOTER) */}
      <Footer />
    </div>
  );
}