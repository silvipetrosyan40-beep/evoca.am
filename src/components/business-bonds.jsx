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
                onClick={() => handleNavigation('/hy/business-investment-services')} 
                className="text-white font-semibold hover:text-purple-200 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Ներդրումային ծառայություններ
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-bonds')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Պարտատոմսեր
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-repo-services')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                ՀԿԴ ծառայություններ
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-repo-reverse')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Ռեպո/Հակադարձ ռեպո գործարքներ
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-evocainvest')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                EvocaINVEST
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
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Արժեթղթերի շուկա</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ներդրումային ծառայություններ</span>
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


          <div className="max-w-4xl mx-auto space-y-8 pl-0 lg:pl-12">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Պարտատոմսեր
            </h1>

            <div className="text-gray-700 space-y-6 leading-relaxed">
              <p>
                Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով:
              </p>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3">
                  Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
                </h3>
                <ul className="list-disc pl-5 space-y-3 mt-4">
                  <li>
                    Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
                  </li>
                  <li>
                    ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
                  </li>
                </ul>
              </div>
            </div>

           

 {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordions) */}
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* 1. Տասնչորսերորդ և տասնհինգերորդ թողարկում */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-14-15')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-14-15' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-14-15' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">3,000,000,000 ՀՀ դրամ</td>
                              <td className="p-3">15,000,000 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">300,000 հատ</td>
                              <td className="p-3">150,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">36 ամիս</td>
                              <td className="p-3">36 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">10%</td>
                              <td className="p-3 font-semibold text-purple-800">5%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 pt-2">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
                      </p>

                      {/* Փաստաթղթերի քարտեր */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <a href="#prospectus" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#conditions-amd" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                    </div>
                  )}
                </div>

               {/* 2. Տասներկուերորդ և տասներեքերորդ */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-12-13')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-12-13' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-12-13' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">3,000,000,000 ՀՀ դրամ</td>
                              <td className="p-3">15,000,000 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">300,000 հատ</td>
                              <td className="p-3">150,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">36 ամիս</td>
                              <td className="p-3">36 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">10.25%</td>
                              <td className="p-3 font-semibold text-purple-800">5.25%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 pt-2">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
                      </p>

                      {/* Փաստաթղթերի քարտեր */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <a href="#prospectus-12-13" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-12-13" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-12-13" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                    </div>
                  )}
                </div>

               {/* 3. Տասներորդ և տասնմեկերորդ */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-10-11')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ՏԱՍՆԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-10-11' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-10-11' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">2,000,000,000 ՀՀ դրամ</td>
                              <td className="p-3">10,000,000 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">200,000 հատ</td>
                              <td className="p-3">100,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">30 ամիս</td>
                              <td className="p-3">30 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">11%</td>
                              <td className="p-3 font-semibold text-purple-800">5%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 pt-2">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:
                      </p>

                      {/* Փաստաթղթերի քարտեր (4 հատ) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                        <a href="#prospectus-10-11" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#prospectus-amendment" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ազդագրի լրացում</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">+</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-10-11" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-10-11" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                    </div>
                  )}
                </div>

                {/* 4. Յոթերորդ, ութերորդ և իններորդ թողարկում */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-7-8-9')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-7-8-9' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-7-8-9' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Եռասյուն Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/4 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="3">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                              <td className="p-3 font-semibold text-gray-900">100 եվրո</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">2,000,000,000 ՀՀ դրամ</td>
                              <td className="p-3">10,000,000 ԱՄՆ դոլար</td>
                              <td className="p-3">7,000,000 եվրո</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">200,000 հատ</td>
                              <td className="p-3">100,000 հատ</td>
                              <td className="p-3">70,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">30 ամիս</td>
                              <td className="p-3">39 ամիս</td>
                              <td className="p-3">39 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">11%</td>
                              <td className="p-3 font-semibold text-purple-800">5.25%</td>
                              <td className="p-3 font-semibold text-purple-800">4%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="3">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 pt-2">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:
                      </p>

                      {/* Փաստաթղթերի քարտեր (4 հատ) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                        <a href="#prospectus-7-9" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-7-9" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-7-9" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>

                        <a href="#conditions-eur-7-9" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ եվրոյով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">€</span>
                          </div>
                        </a>
                      </div>

                    </div>
                  )}
                </div>

               {/* 5. Հինգերորդ և վեցերորդ թողարկում */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-5-6')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-5-6' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-5-6' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">2,000,000,000 ՀՀ դրամ</td>
                              <td className="p-3">10,000,000 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">200,000 հատ</td>
                              <td className="p-3">100,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">30 ամիս</td>
                              <td className="p-3">30 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">11%</td>
                              <td className="p-3 font-semibold text-purple-800">5%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 pt-2">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ-ի թիվ 1/106 Ա որոշմամբ:
                      </p>

                      {/* Փաստաթղթերի քարտեր (3 հատ) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <a href="#prospectus-5-6" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-5-6" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-5-6" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                      <p className="text-sm text-gray-700 pt-2">
                        Պարտատոմսերի թողարկման մանրամասներին կարող եք ծանոթանալ <a href="#here" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
                      </p>

                    </div>
                  )}
                </div>

                {/* 6. Երրորդ և չորրորդ թողարկում */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-3-4')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-3-4' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-3-4' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <div className="space-y-4">
                        <p>
                          Հաշվի առնելով պարտատոմսերի նկատմամբ ներդրողների ցուցաբերած զգալի հետաքրքրությունը՝ Evocabank-ը մարտ ամսվա ընթացքում թողարկել է պարտատոմսերի հաջորդ տրանշը[cite: 14]:
                        </p>
                        <p>
                          Evocabank-ը 2021թ. մարտի 23-ին թողարկել է անվանական, արժեկտրոնային, ոչ փաստաթղթային, առանց հետգնման հնարավորության, ոչ փոխարկելի պարտատոմսերի 2-րդ տրանշը[cite: 14]:
                        </p>
                        <p>
                          Պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում և գնանշվելու են շուկա ստեղծողի (marketmaker) կողմից[cite: 14]:
                        </p>
                        <p>
                          Ինչպես և առաջին տրանշի ընթացքում, Բանկը տեղաբաշխել է 50,000 հատ դրամային և 50,000 հատ դոլարային պարտատոմս: Արժեկտրոններ կվճարվեն եռամսյա պարբերականությամբ: Մեկ դրամային պարտատոմսի անվանական արժեքը կկազմի 10,000 ՀՀ դրամ, իսկ դոլարայինը՝ 100 ԱՄՆ դոլար[cite: 14]:
                        </p>
                        <p>
                          Պարտատոմսերի և՛ առաջին, և՛ երկրորդ տրանշի տեղաբաշխումն ավարտվել է ընդամենը մի քանի ժամում[cite: 14]:
                        </p>
                        <p>
                          Պարտատոմսերի տեղաբաշխմանը մասնակցել ցանկացողները պարտատոմսերի ազդագրի էլեկտրոնային տարբերակին (գրանցված ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ), հիմնական պայմաններին ու այլ մանրամասներին կարող են ծանոթանալ <a href="#here" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 14]:
                        </p>
                      </div>

                      {/* Փաստաթղթերի քարտեր (4 հատ) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                        <a href="#prospectus-3-4" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#prospectus-amendment-3-4" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ազդագրի լրացում</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">+</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-3-4" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-3-4" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider pt-4 mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ[cite: 14]
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ[cite: 14]</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">500,000,000 ՀՀ դրամ[cite: 14]</td>
                              <td className="p-3">5,000,000 ԱՄՆ դոլար[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">50,000 հատ[cite: 14]</td>
                              <td className="p-3">50,000 հատ[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">30 ամիս[cite: 14]</td>
                              <td className="p-3">30 ամիս[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">10%[cite: 14]</td>
                              <td className="p-3 font-semibold text-purple-800">5.5%[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային[cite: 14]</td>
                              <td className="p-3">Եռամսյակային[cite: 14]</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ[cite: 14]</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </div>
                  )}
                </div>
               {/* 7. Առաջին և երկրորդ թողարկում */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('issue-1-2')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors uppercase">
                      ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'issue-1-2' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'issue-1-2' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      <div className="space-y-4">
                        <p>
                          Evocabank-ը 2021թ. մարտի 2-ին առաջին տրանշով թողարկել է 10% և 5.5% եկամտաբերությամբ դրամային և դոլարային անվանական, արժեկտրոնային, ոչ փաստաթղթային, առանց հետգնման հնարավորության, ոչ փոխարկելի պարտատոմսեր՝ 500 մլն ՀՀ դրամ և 5 մլն ԱՄՆ դոլար ընդհանուր ծավալով:
                        </p>
                        <p>
                          Բանկը տեղաբաշխել է 50,000 հատ դրամային և 50,000 հատ դոլարային պարտատոմս:
                        </p>
                        <p>
                          Evocabank-ն առաջին իսկ օր՝ մի քանի ժամում, ավարտել է իր առաջին տրանշի պարտատոմսերի տեղաբաշխումը:
                        </p>
                        <p>
                          Պարտատոմսերի տեղաբաշխմանը մասնակցել ցանկացողները պարտատոմսերի ազդագրի էլեկտրոնային տարբերակին (գրանցված ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ), հիմնական պայմաններին ու այլ մանրամասներին կարող են ծանոթանալ <a href="#here" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
                        </p>
                      </div>

                      {/* Փաստաթղթերի քարտեր (4 հատ) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                        <a href="#prospectus-1-2" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ծրագրային ազդագիր</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs">✔️</span>
                          </div>
                        </a>

                        <a href="#prospectus-amendment-1-2" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Ազդագրի լրացում</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">+</span>
                          </div>
                        </a>

                        <a href="#conditions-amd-1-2" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ՀՀ դրամով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">֏</span>
                          </div>
                        </a>

                        <a href="#conditions-usd-1-2" className="border border-purple-200 bg-white hover:border-purple-400 p-5 rounded-2xl flex flex-col items-center text-center transition-all group shadow-xs">
                          <span className="text-purple-700 font-bold text-xs uppercase tracking-wider mb-2 group-hover:underline">Պայմաններ ԱՄՆ դոլարով</span>
                          <div className="w-12 h-14 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative mt-2 bg-gray-50">
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-8 h-1 bg-gray-300 rounded mb-1.5"></div>
                            <div className="w-5 h-1 bg-gray-300 rounded mr-3 mb-1.5"></div>
                            <span className="absolute bottom-1 right-1 text-purple-700 text-xs font-bold">$</span>
                          </div>
                        </a>
                      </div>

                      <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl uppercase tracking-wider pt-4 mb-4">
                        ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                      </h3>

                      {/* Աղյուսակ */}
                      <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full text-left border-collapse">
                          <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">Դաս</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">Անվանական արժեկտրոնային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Անվանական արժեք</td>
                              <td className="p-3 font-semibold text-gray-900">10,000 ՀՀ դրամ</td>
                              <td className="p-3 font-semibold text-gray-900">100 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Ընդհանուր ծավալ</td>
                              <td className="p-3">500,000,000 ՀՀ դրամ</td>
                              <td className="p-3">5,000,000 ԱՄՆ դոլար</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Թողարկվող պարտատոմսերի քանակ</td>
                              <td className="p-3">50,000 հատ</td>
                              <td className="p-3">50,000 հատ</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Շրջանառության ժամկետ</td>
                              <td className="p-3">30 ամիս</td>
                              <td className="p-3">30 ամիս</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                              <td className="p-3 font-semibold text-purple-800">10%</td>
                              <td className="p-3 font-semibold text-purple-800">5.5%</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Արժեկտրոնների վճարման պարբերականություն</td>
                              <td className="p-3">Եռամսյակային</td>
                              <td className="p-3">Եռամսյակային</td>
                            </tr>
                            <tr className="hover:bg-purple-50/50">
                              <td className="p-3 font-medium text-gray-500 border-r border-gray-200">Տեղաբաշխող</td>
                              <td className="p-3 font-semibold text-gray-900" colSpan="2">«Էվոկաբանկ» ՓԲԸ</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </div>
                  )}
                </div>

               {/* 8. Հաճախ տրվող հարցեր պարտատոմսերի մասին */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                      Հաճախ տրվող հարցեր պարտատոմսերի մասին
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                      
                      {/* Նկարազարդում / Բաններ */}
                      <div className="flex justify-center my-4">
                        <img 
                          src="https://www.evoca.am/file_manager/question-and-answer.png" 
                          alt="Հարց և Պատասխան" 
                          className="max-w-xs sm:max-w-sm h-auto object-contain"
                        />
                      </div>

                      {/* Հարց 1 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Ի՞նչ է պարտատոմսը։
                        </h4>
                        <p>
                          Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմսը թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս:
                        </p>
                      </div>

                      {/* Հարց 2 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը։
                        </h4>
                        <p>
                          Evocabank-ի կողմից թողարկված պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում, և Դուք ցանկացած պահի կարող եք գնել կամ վաճառել դրանք:
                        </p>
                      </div>

                      {/* Հարց 3 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Ինչո՞ւ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդրելու փոխարեն։
                        </h4>
                        <p>
                          Պարտատոմսեր գնշելն էլ ավելի շահավետ է և հարմար: Պարտատոմսերն ունեն մի շարք առավելություններ՝
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Պարտատոմսերից ստացված եկամուտները ազատված են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից:</li>
                          <li>Պարտատոմսերը վաճառելու դեպքում Դուք պահպանում եք մինչև այդ պահը կուտակված տոկոսագումարները:</li>
                        </ul>
                      </div>

                      {/* Հարց 4 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը։
                        </h4>
                        <p>
                          Պարտատոմսերը ևս երաշխավորված են:
                        </p>
                        <p>
                          «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի համաձայն՝ Բանկի կողմից թողարկված անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
                        </p>
                      </div>

                      {/* Հարց 5 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր։
                        </h4>
                        <p>
                          Պարտատոմսեր գնելու համար անհրաժեշտ է՝
                        </p>
                        <p>
                          Մոտենալ Բանկի ցանկացած գրասենյակ, լրացնել պարտատոմսերի ձեռքբերման հայտ-հանձնարարականը, մուտքագրել գումարը հատուկ հաշվին կամ online տարբերակով՝ աշխարհի ցանկացած վայրից, օրվա ցանկացած ժամին:
                        </p>
                      </div>

                      {/* Հարց 6 */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                          ❓ Կարող եմ արդյո՞ք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել։
                        </h4>
                        <p>
                          Այո, կարող եք:
                        </p>
                        <p>
                          Ինչպես և ավանդի դեպքում, պարտատոմսերի դեպքում ևս կարելի է պարտատոմսերի գրավով վերցնել կարճաժամկետ վարկ:
                        </p>
                        <p>
                          Վարկը տրամադրվում է առավելագույնը պարտատոմսի մարման ժամկետով՝ պարտատոմսի արժեկտրոնային տոկոսադրույք +2%:
                        </p>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Փաստաթղթեր */}
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
                Փաստաթղթեր
              </h2>

              <div className="space-y-4">
                <a 
                  href="#usd-prices-file" 
                  className="flex items-center justify-between p-4 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-2xl transition-colors text-gray-800 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-700 text-xl">📄</span>
                    <span className="font-medium text-sm sm:text-base group-hover:text-purple-900 transition-colors">
                      Դոլարային պարտատոմսերի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար
                    </span>
                  </div>
                  <span className="text-purple-700 font-bold">⬇</span>
                </a>

                <a 
                  href="#AMD-prices-file" 
                  className="flex items-center justify-between p-4 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-2xl transition-colors text-gray-800 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-700 text-xl">📄</span>
                    <span className="font-medium text-sm sm:text-base group-hover:text-purple-900 transition-colors">
                      Դրամային պարտատոմսերի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար
                    </span>
                  </div>
                  <span className="text-purple-700 font-bold">⬇</span>
                </a>
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