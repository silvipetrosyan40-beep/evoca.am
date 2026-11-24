import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Search, Menu, X, ChevronDown, MapPin, HelpCircle } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOnlineOpen, setIsMobileOnlineOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  const currentLang = i18n.language || 'hy';
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('lang', langCode);
    setIsLangOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans relative z-50">
      {/* Վերին բար (Top Bar) - Միայն համակարգչի/մեծ էկրանի համար */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
          
          {/* Ձախ կողմի հղումներ */}
          <nav className="flex space-x-5 xl:space-x-6 items-center">
            <button 
              onClick={() => handleNavigation('/hy/loans')}
              className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
            >
              {t('header.individual')}
            </button>
            <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.business')}</button>
            <button onClick={() => handleNavigation('/hy/akntartayinvcharumner')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.instantPayments')}</button>
            <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.about')}</button>
            <button onClick={() => handleNavigation('/all-news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.news')}</button>
            <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.blog')}</button>
            <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">{t('header.career')}</button>

            {/* Առցանց հայտեր Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); setIsLangOpen(false); }}
                className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
              >
                <span>{t('header.onlineApps')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOnlineAppsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                    {t('header.smeLending')}
                  </button>
                  <button onClick={() => { handleNavigation('/cards/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                    {t('header.visaInfinite')}
                  </button>
                  <button onClick={() => { handleNavigation('/cards/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                    {t('header.mastercardGold')}
                  </button>
                  <button onClick={() => { handleNavigation('/cards/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                    {t('header.visaGold')}
                  </button>
                </div>
              )}
            </div>

            {/* Հետադարձ կապ Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); setIsLangOpen(false); }}
                className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
              >
                <span>{t('header.contactUs')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>

              {isContactOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                  <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                  <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                  <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                  <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                  <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                    {t('header.orderCallback')}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Աջ կողմի գործիքներ և իկոնկեք */}
          <div className="flex items-center space-x-5 text-gray-700">
            <button onClick={() => handleNavigation('/branches')} aria-label={t('header.branches')} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
              <MapPin className="w-4 h-4" />
            </button>
            
            <button onClick={() => handleNavigation('/help')} aria-label={t('header.help')} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
              <HelpCircle className="w-4 h-4" />
            </button>
            
            {/* Լեզվի բացվող մենյու (Գլոբուս - Desktop) */}
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => { setIsLangOpen(!isLangOpen); setIsOnlineAppsOpen(false); setIsContactOpen(false); }}
                aria-label={t('header.language')}
                className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer flex items-center justify-center"
              >
                <Globe className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-3 w-20 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 py-1.5 z-50 flex flex-col items-center">
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
            
            <button onClick={() => handleNavigation('/search')} aria-label={t('header.search')} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
            
            <button onClick={() => handleNavigation('/menu')} aria-label={t('header.mainMenu')} className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Հիմնական նավիգացիա (Main Navigation - Desktop & Mobile) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Լոգո և հիմնական բաժիններ */}
          <div className="flex items-center space-x-8 xl:space-x-12">
            <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-700">
                evoca
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-600 rounded-full ml-0.5 mb-2.5 sm:mb-3"></span>
            </div>

            {/* Մենյուի կետեր - Desktop */}
            <nav className="hidden lg:flex space-x-5 xl:space-x-7 text-sm">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.loans')}</button>
              <button onClick={() => handleNavigation('/cards')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.cards')}</button>
              <button onClick={() => handleNavigation('/deposits')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.deposits')}</button>
              <button onClick={() => handleNavigation('/accounts')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.accounts')}</button>
              <button onClick={() => handleNavigation('/transfers')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.transfers')}</button>
              <button onClick={() => handleNavigation('/securities')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.securities')}</button>
              <button onClick={() => handleNavigation('/salary')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.evocaSalary')}</button>
              <button onClick={() => handleNavigation('/evocatouch')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">{t('header.evocaTouch')}</button>
            </nav>
          </div>

          {/* Աջ կողմ՝ EvocaONLINE կոճակ (Desktop) և Mobile գործիքներ */}
          <div className="flex items-center space-x-3">
            {/* EvocaONLINE կոճակը երևում է պլանշետի և համակարգչի վրա */}
            <button
              onClick={() => handleNavigation('/evoca-online')}
              className="hidden sm:flex bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2.5 lg:px-6 lg:py-3 rounded-2xl shadow-md transition-all duration-200 items-center justify-center cursor-pointer border-none"
            >
              {t('header.evocaOnline')}
            </button>

            {/* Mobile գործիքներ (Գլոբուս, Որոնում, Hamburger կոճակ) */}
            <div className="flex lg:hidden items-center space-x-3 text-gray-700">
              {/* Լեզվի ընտրություն Mobile-ում */}
              <div className="relative flex items-center">
                <button
                  type="button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-label={t('header.language')}
                  className="p-2 hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center"
                >
                  <Globe className="w-5 h-5" />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 top-full mt-2 w-20 bg-white shadow-xl border border-gray-100 rounded-xl py-1 z-50 flex flex-col items-center">
                    {[
                      { code: 'hy', label: 'ՀԱՅ', border: true },
                      { code: 'en', label: 'ENG', border: true },
                      { code: 'ru', label: 'РУС', border: false },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-14 py-2 text-center text-xs cursor-pointer bg-transparent border-t-0 border-x-0 ${
                          lang.border ? 'border-b border-purple-600' : 'border-b-0'
                        } ${
                          currentLang.startsWith(lang.code)
                            ? 'font-extrabold text-gray-950'
                            : 'font-medium text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('/search')}
                aria-label={t('header.search')}
                className="p-2 hover:text-purple-700 bg-transparent border-none cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={t('header.mainMenu')}
                className="p-2 text-gray-800 hover:text-purple-700 bg-transparent border-none cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Բացվող Mobile Menu (հեռախոսով և պլանշետով բացելիս) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          
          {/* EvocaONLINE կոճակ Mobile-ի համար */}
          <button
            onClick={() => handleNavigation('/evoca-online')}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-2xl shadow-sm transition-colors cursor-pointer border-none text-center"
          >
            {t('header.evocaOnline')}
          </button>

          {/* Հիմնական բաժիններ */}
          <div className="flex flex-col space-y-1 border-b border-gray-100 pb-3">
            <button onClick={() => handleNavigation('/hy/loans')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.loans')}</button>
            <button onClick={() => handleNavigation('/cards')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.cards')}</button>
            <button onClick={() => handleNavigation('/deposits')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.deposits')}</button>
            <button onClick={() => handleNavigation('/accounts')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.accounts')}</button>
            <button onClick={() => handleNavigation('/transfers')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.transfers')}</button>
            <button onClick={() => handleNavigation('/securities')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.securities')}</button>
            <button onClick={() => handleNavigation('/salary')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.evocaSalary')}</button>
            <button onClick={() => handleNavigation('/evocatouch')} className="text-left py-2.5 px-2 text-base font-semibold text-gray-900 hover:text-purple-700 bg-transparent border-none cursor-pointer">{t('header.evocaTouch')}</button>
          </div>

          {/* Առցանց հայտեր Accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => setIsMobileOnlineOpen(!isMobileOnlineOpen)}
              className="w-full flex justify-between items-center py-2 px-2 font-semibold text-purple-700 bg-transparent border-none cursor-pointer"
            >
              <span>{t('header.onlineApps')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileOnlineOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileOnlineOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <button onClick={() => handleNavigation('/online-apps/sme-lending')} className="block w-full text-left py-2 text-sm text-gray-700 bg-transparent border-none">{t('header.smeLending')}</button>
                <button onClick={() => handleNavigation('/cards/visa-infinite')} className="block w-full text-left py-2 text-sm text-gray-700 bg-transparent border-none">{t('header.visaInfinite')}</button>
                <button onClick={() => handleNavigation('/cards/mastercard-gold')} className="block w-full text-left py-2 text-sm text-gray-700 bg-transparent border-none">{t('header.mastercardGold')}</button>
                <button onClick={() => handleNavigation('/cards/visa-gold')} className="block w-full text-left py-2 text-sm text-gray-700 bg-transparent border-none">{t('header.visaGold')}</button>
              </div>
            )}
          </div>

          {/* Հետադարձ կապ Accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => setIsMobileContactOpen(!isMobileContactOpen)}
              className="w-full flex justify-between items-center py-2 px-2 font-semibold text-purple-700 bg-transparent border-none cursor-pointer"
            >
              <span>{t('header.contactUs')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileContactOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileContactOpen && (
              <div className="pl-4 space-y-2 mt-1 text-sm">
                <a href="tel:+37410605555" className="block py-1 font-semibold text-gray-800">+374 10 605555</a>
                <a href="tel:+37498205555" className="block py-1 font-semibold text-gray-800">+374 98 205555</a>
                <a href="tel:+37499605555" className="block py-1 font-semibold text-gray-800">+374 99 605555</a>
                <a href="tel:8444" className="block py-1 font-semibold text-gray-800">8444</a>
                <button onClick={() => handleNavigation('/callback-order')} className="block py-1.5 font-bold text-purple-700 bg-transparent border-none">
                  {t('header.orderCallback')}
                </button>
              </div>
            )}
          </div>

          {/* Երկրորդական հղումներ */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-sm text-gray-600 px-2">
            <button onClick={() => handleNavigation('/hy/loans')} className="text-left py-1.5 font-semibold text-purple-700 bg-transparent border-none">{t('header.individual')}</button>
            <button onClick={() => handleNavigation('/hy/business')} className="text-left py-1.5 bg-transparent border-none">{t('header.business')}</button>
            <button onClick={() => handleNavigation('/hy/akntartayinvcharumner')} className="text-left py-1.5 bg-transparent border-none">{t('header.instantPayments')}</button>
            <button onClick={() => handleNavigation('/hy/about')} className="text-left py-1.5 bg-transparent border-none">{t('header.about')}</button>
            <button onClick={() => handleNavigation('/all-news')} className="text-left py-1.5 bg-transparent border-none">{t('header.news')}</button>
            <button onClick={() => handleNavigation('/hy/blog')} className="text-left py-1.5 bg-transparent border-none">{t('header.blog')}</button>
            <button onClick={() => handleNavigation('/hy/career')} className="text-left py-1.5 bg-transparent border-none">{t('header.career')}</button>
            <button onClick={() => handleNavigation('/branches')} className="text-left py-1.5 bg-transparent border-none">{t('header.branches')}</button>
          </div>
        </div>
      )}
    </header>
  );
}