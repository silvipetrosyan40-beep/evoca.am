import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Home, ChevronRight, ChevronLeft, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle, ArrowLeft } from 'lucide-react';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = i18n.language || 'hy';

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
    setIsLangOpen(false);
  };

  // 14 հատ բիզնես վարկերի քարտեր սլայդերի համար
  const cards = [
    { id: 1, title: t('Արագ բիզնես վարկ/վարկային գիծ'), path: '/business-loans/fast-business-loan', image: 'https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png' },
    { id: 2, title: t('Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ'), path: '/business-loans/loans-for-importing-textile-raw-materials', image: 'https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png' },
    { id: 3, title: t('Բիզնես վարկերի վերաֆինանսավորում'), path: '/business-loans/Business-loan-refinancing', image: 'https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png' },
    { id: 4, title: t('Պարտատոմսերով ապահովված վարկ'), path: '/business-loans/Loan-secured-by-bonds', image: 'https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png' },
    { id: 5, title: t('Խոշոր և ՓՄՁ բիզնես վարկ'), path: '/business-loans/business-loan', image: 'https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg' },
    { id: 6, title: t('Evoca GO'), path: '/business-loans/evoca-go-loan', image: 'https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg' },
    { id: 7, title: t('Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր'), path: '/business-loans/loans-provided-within-the-framework-of-gaf-energy-efficiency-for-sme', image: 'https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg' },
    { id: 8, title: t('Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ'), path: '/business-loans/deposit-secured-credit-line', image: 'https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg' },
    { id: 9, title: t('KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում'), path: '/business-loans/loans-provided-within-the-framewok-of-renewable-energy-and-energy-saving-program', image: 'https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg' },
    { id: 10, title: t('Պարզ բիզնես վարկ'), path: '/business-loans/simple-business-loan', image: 'https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg' },
    { id: 11, title: t('Հաշվի վարկավորում'), path: '/business-loans/account-lending', image: 'https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg' },
    { id: 12, title: t('Վարկային գիծ'), path: '/business-loans/renewable-credit-line', image: 'https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg' },
    { id: 13, title: t('Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)'), path: '/business-loans/loan-under-the-productivity-promotion-program', image: 'https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg' },
    { id: 14, title: t('KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում'), path: '/business-loans/kfw-bank-program-loan', image: 'https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <style>{`
        @media (max-width: 640px) {
          .trl-hero-section {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          .trl-hero-card {
            padding: 20px !important;
            gap: 20px !important;
          }
          .trl-hero-title {
            font-size: 24px !important;
          }
          .trl-hero-desc {
            font-size: 14px !important;
          }
          .trl-hero-img {
            max-height: 200px !important;
          }
          .trl-main {
            padding-top: 20px !important;
            padding-bottom: 36px !important;
          }
          .trl-conditions-box {
            padding: 18px !important;
          }
          .trl-table td {
            padding: 10px 8px !important;
            font-size: 13px !important;
          }
            .trl-main {
            padding-top: 20px !important;
            padding-bottom: 36px !important;
          }
          .trl-conditions-box {
            padding: 18px !important;
          }
          .trl-table td {
            padding: 10px 8px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <div>
        {/* ՀԵԴԵՐ (HEADER) */}
        <header className="w-full bg-white shadow-sm font-sans relative z-50">
          {/* Վերին բար (Top Bar) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
            <div className="flex justify-between items-center min-h-10 py-1 text-xs sm:text-sm border-b border-gray-100 overflow-visible">
              
            {/* Ձախ կողմի հղումներ */}
 <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 overflow-visible">
  <button
    type="button"
    onClick={() => handleNavigation('/hy/loans')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Անհատ")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/hy/business')}
    className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0 whitespace-nowrap"
  >
    {t("Բիզնես")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/hy/akntartayinvcharumner')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Ակնթարթային վճարումներ")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/hy/about')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Մեր մասին")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/all-news')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Նորություններ")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/hy/blog')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Բլոգ")}
  </button>

  <button
    type="button"
    onClick={() => handleNavigation('/hy/career')}
    className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
  >
    {t("Կարիերա")}
  </button>

  {/* Առցանց հայտեր Dropdown */}
  <div className="relative shrink-0 overflow-visible">
    <button
      type="button"
      onClick={() => {
        setIsOnlineAppsOpen(!isOnlineAppsOpen);
        setIsContactOpen(false);
        setIsLangOpen(false);
      }}
      className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
    >
      <span>{t("Առցանց հայտեր")}</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
    </button>

    {isOnlineAppsOpen && (
      <div className="absolute left-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-[9999] overflow-visible">
        <button
          type="button"
          onClick={() => {
            handleNavigation('/online-apps/sme-lending');
            setIsOnlineAppsOpen(false);
          }}
          className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          {t("ՓՄՁ վարկավորում")}
        </button>
        <button
          type="button"
          onClick={() => {
            handleNavigation('/cards/visa-infinite');
            setIsOnlineAppsOpen(false);
          }}
          className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          {t("Visa Infinite")}
        </button>
        <button
          type="button"
          onClick={() => {
            handleNavigation('/cards/mastercard-gold');
            setIsOnlineAppsOpen(false);
          }}
          className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          {t("MasterCard Gold")}
        </button>
        <button
          type="button"
          onClick={() => {
            handleNavigation('/cards/visa-gold');
            setIsOnlineAppsOpen(false);
          }}
          className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          {t("Visa Gold")}
        </button>
      </div>
    )}
  </div>

  {/* Հետադարձ կապ Dropdown */}
  <div className="relative shrink-0 overflow-visible">
    <button
      type="button"
      onClick={() => {
        setIsContactOpen(!isContactOpen);
        setIsOnlineAppsOpen(false);
        setIsLangOpen(false);
      }}
      className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
    >
      <span>{t("Հետադարձ կապ")}</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
    </button>

    {isContactOpen && (
      <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 px-2 z-[9999] space-y-2 text-sm overflow-visible">
        <a
          href="tel:+37410605555"
          className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
        >
          +374 10 605555
        </a>
        <a
          href="tel:+37498205555"
          className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
        >
          +374 98 205555
        </a>
        <a
          href="tel:+37499605555"
          className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
        >
          +374 99 605555
        </a>
        <a
          href="tel:8444"
          className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
        >
          8444
        </a>
        <button
          type="button"
          onClick={() => {
            handleNavigation('/callback-order');
            setIsContactOpen(false);
          }}
          className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer"
        >
          {t("Պատվիրել զանգ")}
        </button>
      </div>
    )}
  </div>
</nav>

              {/* Աջ կողմի գործիքներ և իքոնկեք */}
              <div className="flex items-center space-x-5 text-gray-700 shrink-0 overflow-visible">
                <button
                  type="button"
                  onClick={() => handleNavigation('/branches')}
                  aria-label={t("Մասնաճյուղեր")}
                  className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigation('/help')}
                  aria-label={t("Օգնություն")}
                  className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>

                {/* Լեզվի բացվող մենյու */}
                <div className="relative flex items-center overflow-visible">
                  <button
                    type="button"
                    onClick={() => { setIsLangOpen(!isLangOpen); setIsOnlineAppsOpen(false); setIsContactOpen(false); }}
                    aria-label={t("Լեզու")}
                    className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center"
                  >
                    <Globe className="w-4 h-4" />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 top-full mt-3 w-20 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 py-1.5 z-[9999] flex flex-col items-center rounded-xl">
                      {[
                        { code: 'hy', label: 'ՀԱՅ', border: true },
                        { code: 'en', label: 'ENG', border: true },
                        { code: 'ru', label: 'РУС', border: false },
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-12 py-2.5 text-center text-xs tracking-wide transition-colors cursor-pointer bg-transparent border-t-0 border-x-0 ${
                            lang.border ? 'border-b border-[#6400DC]' : 'border-b-0'
                          } ${
                            currentLang.startsWith(lang.code)
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

                <button
                  type="button"
                  onClick={() => handleNavigation('/search')}
                  aria-label={t("Որոնել")}
                  className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigation('/menu')}
                  aria-label={t("Գլխավոր մենյու")}
                  className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
                >
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
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/business')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Վարկեր")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/leasing-evoca')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("լիզինգ")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/business-account-opening-and-services')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Հաշիվներ")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/business-classical-deposit')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Ավանդներ")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/business-investment-services')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Արժեթղթերի շուկա")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/guarantee')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Առևտրի ֆինանսավորում")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/v-pos-terminal')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Դիջիթալ")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/hy/individual-safe-deposit-boxes')}
                    className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
                  >
                    {t("Այլ")}
                  </button>
                </nav>
              </div>

              <div>
                <button
                  type="button"
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
              <button
                type="button"
                onClick={() => handleNavigation('/hy/business-loans')}
                className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap"
              >
                {t("Բիզնես վարկեր")}
              </button>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="trl-hero-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="trl-hero-card bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
              <h1 className="trl-hero-title text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                {t("Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ")}
              </h1>
              <p className="trl-hero-desc text-gray-600 text-base sm:text-lg leading-relaxed">
                {t("Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ։")}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/17749381045647/560x400.png" 
                alt={t("Արագ բիզնես վարկ")} 
                className="trl-hero-img max-h-80 object-contain drop-shadow-md"
              />
            </div>
          </div>
        </section>

        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/hy/business')} 
            className="flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-sm border border-gray-200 transition-colors w-fit cursor-pointer font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Վերադառնալ")}</span>
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <button
              type="button"
              onClick={() => handleNavigation('/')}
              aria-label={t("Գլխավոր")}
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center shrink-0"
            >
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button
              type="button"
              onClick={() => handleNavigation('/hy/business')}
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0"
            >
              {t("Բիզնես")}
            </button>
            <span>›</span>
            <button
              type="button"
              onClick={() => handleNavigation('/hy/business-loans')}
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0"
            >
              {t("Վարկեր")}
            </button>
            <span>›</span>
            <button
              type="button"
              onClick={() => handleNavigation('/hy/business-loans')}
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0"
            >
              {t("Բիզնես վարկեր")}
            </button>
            <span>›</span>
            <span className="text-gray-800 font-medium shrink-0">
              {t("Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ")}
            </span>
          </div>
        </div>





      
     {/* Հիմնական բովանդակություն */}
        <main className="trl-main flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
          
          {/* Ներդիրների կոճակներ (Tabs) */}
          <div className="flex border-b border-gray-200 space-x-8 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer bg-transparent border-t-0 border-x-0 ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-700'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {t("Վարկի մասին")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('conditions')}
              className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer bg-transparent border-t-0 border-x-0 ${
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  {t("Ցանկանում եք ներմուծել հումք և մեծացնել")} <strong className="text-purple-700">{t("տեքստիլի")}</strong> {t("արտադրության ծավալները, բարձրացնել արդյունավետությունը: Այդ դեպքում այս վարկատեսակը հենց Ձեզ համար է:")}
                </p>
                <p>
                  {t("Օգտվելով այս բիզնես վարկից՝ Դուք կստանաք մրցունակ տոկոսադրույք, երկարաժամկետ մարման հնարավորություն, պարզ պայմաններ և ձևակերպման արագ գործընթաց:")} <strong className="text-purple-700">{t("Դուք նաև կարող եք ստանալ")}</strong> {t("մինչև 8% սուբսիդավորում պետության կողմից:")}
                </p>
                <p>
                  {t("Այս վարկը նախատեսված է ՀՀ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար, որոնք գործունեություն են ծավալում տեքստիլի ոլորտում և զբաղվում են հումքի ներկրմամբ:")}
                </p>
                <p>
                  {t("Բիզնես վարկը կարող եք ձևակերպել նաև արտարժույթով:")}
                </p>
              </div>

              {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
              <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex space-x-3 pb-2">
                  <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">{t("դ")}</span>
                  <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
                  <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
                </div>

                <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                    <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">{t("36 ամիս")}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{t("Ժամկետ")}</span>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t("մինչև")}</p>
                    <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">{t("500 մլն ֏")}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{t("Սահմանաչափ կամ համարժեք արտարժույթ")}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">8%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{t("Տոկոսադրույքի սուբսիդավորման չափ")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'conditions' && (
            <div className="trl-conditions-box space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-purple-900 mb-4">{t("Վարկավորման մանրամասն պայմաններ")}</h3>
              
              <div className="overflow-x-auto">
                <table className="trl-table w-full text-left text-sm text-gray-700 border-collapse border border-purple-100 rounded-2xl overflow-hidden">
                  <tbody>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 w-12 text-center align-top">1.</td>
                      <td className="p-4 font-semibold text-gray-900 w-1/3 align-top">{t("Ֆինանսավորում")}</td>
                      <td className="p-4 align-top">{t("Վարկ")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">2.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Արժույթ")}</td>
                      <td className="p-4 align-top">{t("ՀՀ դրամ, ԱՄՆ դոլար, Եվրո")}</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">3.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Վարկառու*")}</td>
                      <td className="p-4 align-top">{t("ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">4.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Նպատակ**")}</td>
                      <td className="p-4 align-top">{t("Հումքի ներկրում")}</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">5.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Վարկի գումար***")}</td>
                      <td className="p-4 align-top">{t("5,100,000-500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">6.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Բիզնես ուղղություն")}</td>
                      <td className="p-4 align-top">{t("Գործունեություն տեքստիլ ոլորտում")}</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">7.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Մարման ժամկետ")}</td>
                      <td className="p-4 align-top">{t("Մինչև 36 ամիս")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">8.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Սուբսիդավորման ժամկետ")}</td>
                      <td className="p-4 align-top">{t("Մինչև 12 ամիս")}</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">9.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Տոկոսադրույքի սուբսիդավորման չափ")}</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• {t("ՀՀ դրամ՝ 8%,")}</p>
                        <p>• {t("ԱՄՆ դոլար, Եվրո՝ 6%")}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">10.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Ապահովում")}</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>{t("Երաշխավորություն՝ մինչև 10 մլն ՀՀ դրամ (ներառյալ) կամ համարժեք վարկերի դեպքում,")}</li>
                          <li>{t("Գրավ՝ 10,000,000 ՀՀ դրամը գերազանցող կամ համարժեք արտարժույթով վարկերի դեպքում:")}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">11.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Երաշխավոր")}</td>
                      <td className="p-4 align-top">{t("ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">12.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Գրավ")}</td>
                      <td className="p-4 align-top space-y-3">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>{t("Անշարժ և շարժական գույքը,")}</li>
                          <li>{t("Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցները,")}</li>
                          <li>{t("Ոսկու ստանդարտացված ձուլակտորները կամ ջարդոնը,")}</li>
                          <li>{t("Պետական կարճաժամկետ պարտատոմսերը կամ այլ արժեթղթերը:")}</li>
                        </ul>
                        <p className="text-gray-600">
                          {t("Անհրաժեշտության դեպքում՝ այլ գրավների առկայության պարագայում կարող են գրավ ընդունվել նաև շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը, վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն):")}
                        </p>
                        <p className="font-medium text-gray-900">
                          <strong>{t("Լրացուցիչ պայման՝")}</strong> {t("Բանկը կարող է պահանջել նաև այլ ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորություն:")}
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">13.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Վարկային միջոցի օգտագործում")}</td>
                      <td className="p-4 align-top">{t("Անկանխիկ և բանկային փոխանցումներով")}</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">14.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Մարման եղանակը")}</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>{t("«Անուիտետային»")}</li>
                          <li>{t("«Զսպանակաձև»")}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">15.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Ժամկետանց պարտավորությունների մարման տույժեր")}</td>
                      <td className="p-4 align-top space-y-2">
                        <p>{t("Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսած ուշացման առաջին օրվանից՝")}</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>{t("ժամկետանց մայր գումարի համար՝ օրական 0.015%,")}</li>
                          <li>{t("ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:")}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">16.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք")}</td>
                      <td className="p-4 align-top">{t("Չի սահմանվում")}</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-900 text-center align-top">17.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">{t("Գանձվող վճարներ")}</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• {t("Վարկային հայտի ուսումնասիրման վճար՝ չի սահմանվում")}</p>
                        <p>• {t("Վարկի տրամադրման վճար՝ չի սահմանվում")}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
          <div className="pt-12 border-t border-gray-100">
            <div className="relative">
              <div>
                {/* Վերնագիր և նավիգացիայի կոճակներ */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-extrabold text-gray-900">{t("Այլ վարկեր")}</h2>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="swiper-button-prev-custom w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 shadow-sm cursor-pointer transition-colors"
                    >
                      ❮
                    </button>
                    <button
                      type="button"
                      className="swiper-button-next-custom w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 shadow-sm cursor-pointer transition-colors"
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
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
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
                        className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block no-underline"
                      >
                        <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                          <img 
                            src={card.image} 
                            alt={card.title} 
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                          {card.title}
                        </h3>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}