import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/pagination';
import { Home, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle, Star } from 'lucide-react';

export default function InvestmentServicesPage() {
  const navigate = useNavigate();
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ (HEADER) */}
        <header className="w-full bg-white shadow-sm font-sans relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
              
              <nav className="flex space-x-6 items-center">
                <button 
                  onClick={() => handleNavigation('/hy/loans')}
                  className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
                >
                  Անհատ
                </button>
                <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բիզնես</button>
                <button onClick={() => handleNavigation('/hy/instant-payments')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Ակնթարթային վճարումներ</button>
                <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Մեր մասին</button>
                <button onClick={() => handleNavigation('/hy/news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
                <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
                <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

                <div className="relative">
                  <button 
                    onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Առցանց հայտեր</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOnlineAppsOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                      <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        ՓՄՁ վարկավորում
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Infinite
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        MasterCard Gold
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Gold
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button 
                    onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Հետադարձ կապ</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isContactOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                      <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                      <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                      <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                      <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                      <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                        Պատվիրել զանգ
                      </button>
                    </div>
                  )}
                </div>
              </nav>

              <div className="flex items-center space-x-5 text-gray-700">
                <button onClick={() => handleNavigation('/branches')} aria-label="Մասնաճյուղեր" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/help')} aria-label="Օգնություն" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/language')} aria-label="Լեզու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Globe className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/search')} aria-label="Որոնել" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/menu')} aria-label="Գլխավոր մենյու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-12">
                <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
                  <span className="text-3xl font-extrabold tracking-tight text-gray-700">evoca</span>
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-full ml-0.5 mb-3"></span>
                </div>

                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
                  <button onClick={() => handleNavigation('/hy/business')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Վարկեր</button>
                  <button onClick={() => handleNavigation('/hy/leasing-evoca')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">լիզինգ</button>
                  <button onClick={() => handleNavigation('/hy/business-account-opening-and-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Հաշիվներ</button>
                  <button onClick={() => handleNavigation('/hy/business-classical-deposit')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Ավանդներ</button>
                  <button onClick={() => handleNavigation('/hy/business-investment-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Արժեթղթերի շուկա</button>
                  <button onClick={() => handleNavigation('/hy/guarantee')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Առևտրի ֆինանսավորում</button>
                  <button onClick={() => handleNavigation('/hy/v-pos-terminal')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Դիջիթալ</button>
                  <button onClick={() => handleNavigation('/hy/individual-safe-deposit-boxes')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Այլ</button>
                </nav>
              </div>

              <div>
                <button
                  onClick={() => handleNavigation('/evoca-online')}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-2xl shadow-md transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer border-none"
                >
                  EvocaONLINE
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
              onClick={() => handleNavigation('/hy/v-pos-terminal')} 
              className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              V-POS Տերմինալ
            </button>
            <button 
              onClick={() => handleNavigation('/hy/pos-terminal')} 
              className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              POS Տերմինալ
            </button>
            <button 
              onClick={() => handleNavigation('/hy/tariffs')} 
              className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              Սակագներ
            </button>
            <button 
              onClick={() => handleNavigation('/hy/terminal-application')} 
              className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner"
            >
              Տերմինալի տեղադրման հայտ
            </button>
            <button 
              onClick={() => handleNavigation('/hy/evoca-mobile-pos')} 
              className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              Evoca Mobile POS⁺ mPOS
            </button>
          </nav>
        </div>
      </div>

        {/* BREADCRUMBS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6 mt-6 ml-7">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Բիզնես</button>
            <span>›</span>
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer"> Դիջիթալ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Տերմինալի տեղադրման հայտ
</span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16 relative">
          
           {/* Սոցիալական կոճակներ ձախ կողմում՝ SVG-ներով */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gray-100/80 rounded-lg p-2 space-y-3 absolute left-[-60px] top-28 shadow-xs">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>


          <div className="max-w-1xl mx-auto space-y-8 pl-0 lg:pl-12">
             
    
                  {/* ՏԵՐՄԻՆԱԼԻ ՏԵՂԱԴՐՄԱՆ ՀԱՅՏ (FORM) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-100 space-y-8">
          <h2 className="text-2xl font-bold text-purple-900 border-b border-gray-100 pb-4">
            V-POS, POS կամ mPOS տերմինալի տեղադրման հայտ
          </h2>

          <form className="space-y-6 text-gray-700 text-sm">
            {/* Անուն Ազգանուն */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">Անուն Ազգանուն</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Անուն</span>
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Ազգանուն</span>
                </div>
              </div>
            </div>

            {/* Հեռախոսի համար */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">Հեռախոսի համար</label>
              <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-purple-600 transition-colors">
                <div className="bg-gray-50 border-r border-gray-200 px-3 flex items-center space-x-2">
                  <span className="text-base">🇦🇲</span>
                  <span className="text-xs text-gray-600 font-medium">+374</span>
                </div>
                <input 
                  type="tel" 
                  className="w-full p-3 focus:outline-none" 
                />
              </div>
            </div>

            {/* Կազմակերպության անվանում */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Կազմակերպության անվանում <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* ՀՎՀՀ */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                ՀՎՀՀ <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Կազմակերպության ստեղծման ամսաթիվ */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Կազմակերպության ստեղծման ամսաթիվ օր/ամիս/տարի <span className="text-red-500">*</span>
              </label>
              <input 
                type="date" 
                required
                className="w-full sm:w-1/2 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-purple-600 transition-colors" 
              />
              <span className="text-xs text-gray-400 block">dd MMM yyyy</span>
            </div>

            {/* Իրավաբանական հասցե */}
            <div className="space-y-4">
              <label className="block font-semibold text-gray-900">Իրավաբանական հասցե</label>
              <div>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                />
                <span className="text-xs text-gray-400 mt-1 block">Փողոցի անուն, տան համար, բնակարանի համար</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Մարզ</span>
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Քաղաք</span>
                </div>
              </div>
              <div className="sm:w-1/2">
                <input 
                  type="text" 
                  className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                />
                <span className="text-xs text-gray-400 mt-1 block">Փոստային ինդեքս</span>
              </div>
            </div>

            {/* Տնօրենի Անուն Ազգանուն */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">Տնօրենի Անուն Ազգանուն</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Անուն</span>
                </div>
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Ազգանուն</span>
                </div>
              </div>
            </div>

            {/* Տնօրենի անձնագրի համարը */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Տնօրենի անձնագրի համարը <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Անձնագրի տրման ամսաթիվը */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Անձնագրի տրման ամսաթիվը <span className="text-red-500">*</span>
              </label>
              <input 
                type="date" 
                required
                className="w-full sm:w-1/2 border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:border-purple-600 transition-colors" 
              />
              <span className="text-xs text-gray-400 block">dd MMM yyyy</span>
            </div>

            {/* Ում կողմից է տրված */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Ում կողմից է տրված <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն
              </label>
              <input 
                type="email" 
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Կազմակերպության իրավական ձևը */}
            <div className="space-y-3">
              <label className="block font-semibold text-gray-900">
                Կազմակերպության իրավական ձևը <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-6 text-gray-700">
                {['ԱՁ', 'ՍՊԸ', 'ՓԲԸ', 'ԲԲԸ', 'Այլ'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="legalType" value={type} required className="text-purple-700 focus:ring-purple-600" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Պահանջվող տերմինալի ձևը */}
            <div className="space-y-3">
              <label className="block font-semibold text-gray-900">
                Պահանջվող տերմինալի ձևը <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-6 text-gray-700">
                {['POS', 'ՀՌՄ POS', 'V-POS', 'M-POS'].map((terminal) => (
                  <label key={terminal} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="terminalType" value={terminal} required className="text-purple-700 focus:ring-purple-600" />
                    <span>{terminal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Առևտրային և սպասարկման կետի անվանում */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) <span className="text-red-500">*</span>
              </label>
              <textarea 
                rows="3"
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors"
              ></textarea>
            </div>

            {/* Առևտրային և սպասարկման կետի հասցե */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Առևտրային և սպասարկման կետի հասցե
              </label>
              <textarea 
                rows="3"
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors"
              ></textarea>
            </div>

            {/* Ինտերնետային կայքի անվանում (V-POS-ի դեպքում) */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Ինտերնետային կայքի անվանում (V-POS-ի դեպքում)
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Վերջին տարվա,ամսվա միջին շրջանառությունը ՀՀ դրամով */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Վերջին տարվա, ամսվա միջին շրջանառությունը ՀՀ դրամով
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը <span className="text-red-500">*</span>
              </label>
              <textarea 
                rows="3"
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors"
              ></textarea>
            </div>

            {/* Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով: Եթե այո, խնդրում ենք նշել նաև սպասարկող կազմակերպության անվանումը և վերջինիս հետ պայմանագիրը խզելու պատճառները:
              </label>
              <textarea 
                rows="3"
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors"
              ></textarea>
            </div>

            {/* Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">
                Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                required
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors" 
              />
            </div>

            {/* Նշումների համար */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-900">Նշումների համար</label>
              <textarea 
                rows="3"
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-purple-600 transition-colors"
              ></textarea>
            </div>

            {/* Համաձայնության checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <input 
                type="checkbox" 
                required
                id="terms"
                className="mt-1 rounded text-purple-700 focus:ring-purple-600 cursor-pointer" 
              />
              <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                Սույն հայտը լրացնելով՝ հավաստում եմ, որ դրանում ներկայացված տվյալները ստույգ են, լրիվ և արժանահավատ: Տալիս եմ իմ համաձայնությունը, որպեսզի Բանկը ստուգի դրանց իսկությունը:
              </label>
            </div>

            {/* Ուղարկել կոճակ */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit" 
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-none cursor-pointer text-base"
              >
                Ուղարկել
              </button>
            </div>
          </form>
        </div>
       


          </div>
        </main>
      </div>

      {/* ՖՈՒԹԵՐ (FOOTER) */}
      <Footer />
    </div>
  );
}