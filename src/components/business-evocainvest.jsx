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
            <span className="text-gray-800 font-medium">EvocaINVEST</span>
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
    
                  {/* EvocaINVEST Banner / Promo Section */}
            <div className="bg-gray-100/80 rounded-3xl p-6 sm:p-10 lg:p-12 my-8 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Ձախ կողմի տեքստային հատված */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:
                  </p>
                </div>

              {/* Աջ կողմի նկարը (փոքրացված չափսերով) */}
                <div className="flex justify-center lg:justify-end">
                  <img 
                    src="https://www.evoca.am/images-cache/menu/1/17812684765006/780x585.png" 
                    alt="EvocaINVEST Ներդրումներ" 
                    className="w-full max-w-sm h-auto rounded-2xl object-contain shadow-md"
                  />
                </div>

                    
              </div>
              
            </div>
            <div className="text-gray-700 space-y-6 leading-relaxed">
              <p className="font-medium text-gray-900 text-base sm:text-lg">
                Apple, Tesla, Google, Amazon, թե՞ Nike:
              </p>

              <p>
                <strong className="text-purple-800">EvocaINVEST</strong>-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <strong className="text-purple-800">EvocaTOUCH</strong> հավելվածից:
              </p>

              <p>
                Գնի՛ր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարի՛ր պորտֆոլիոդ մեկ հարթակից:
              </p>

              <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3">
                  Քո ներդրումային գործիքները
                </h3>
                <p className="mb-3">
                  <strong className="text-purple-800">EvocaINVEST</strong>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-purple-800">Բաժնետոմսեր՝</strong> ներդրումներ համաշխարհային առաջատար ընկերություններում
                  </li>
                  <li>
                    <strong className="text-purple-800">Պարտատոմսեր և Եվրապարտատոմսեր՝</strong> ավելի կանխատեսելի ներդրումների և կայուն եկամտի հնարավորություն
                  </li>
                  <li>
                    <strong className="text-purple-800">ETF-ներ՝</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով
                  </li>
                </ul>
              </div>

              <p>
                Անկախ նրանից՝ նո՞ր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկետ, թե՞ կարճաժամկետ ներդրումներ, <strong className="text-purple-800">EvocaINVEST</strong>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:
              </p>

              <div className="pt-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-4 uppercase tracking-wide">
                  Բացիր բրոքերային հաշիվ 3 պարզ քայլով
                </h3>

                <div className="space-y-6">
                  {/* Քայլ 1 */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                      1. Ներբեռնիր EvocaTOUCH հավելվածը
                    </h4>
                    <p>
                      Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:
                    </p>
                    <p>
                      Ներբեռնելու համար անցիր (<a href="#app-store" className="text-purple-700 underline font-medium hover:text-purple-900">App Store</a> և <a href="#google-play" className="text-purple-700 underline font-medium hover:text-purple-900">Google Play</a>):
                    </p>
                  </div>

                  {/* Քայլ 2 */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                      2. Բացիր Բրոքերային հաշիվ
                    </h4>
                    <p>
                      Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:
                    </p>
                  </div>

                  {/* Քայլ 3 */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-purple-800 text-base sm:text-lg">
                      3. Սկսիր ներդրումներ կատարել
                    </h4>
                    <p>
                      Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* Քայլերի նկար */}
              <div className="flex justify-center my-6">
                <img 
                  src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
                  alt="EvocaINVEST Քայլեր" 
                  className="w-full max-w-4xl h-auto rounded-2xl object-contain shadow-md"
                />
              </div>

              {/* Ինչու՞ ընտրել EvocaINVEST ներդրումային հարթակը */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
                  Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը
                </h2>

                {/* 1. 24/7 պատվերներ */}
                <div className="space-y-2">
                  <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                    24/7 պատվերներ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:
                  </p>
                </div>

                {/* 2. Մրցակցային սակագներ */}
                <div className="space-y-2">
                  <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                    Մրցակցային սակագներ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:
                  </p>
                </div>

                {/* 3. Լիմիտային և շուկայական պատվերներ */}
                <div className="space-y-2">
                  <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                    Լիմիտային և շուկայական պատվերներ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:
                  </p>
                </div>

                {/* 4. Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ */}
                <div className="space-y-3">
                  <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                    Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Միանալով <strong className="text-purple-800">EvocaINVEST</strong> տելեգրամյան ալիքին՝ դու կգտնես.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ներդրումների մասին պարզ և հասկանալի նյութեր,</li>
                    <li>Շուկայական հետազոտություններ և վերլուծություններ,</li>
                    <li>Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,</li>
                    <li>Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:</li>
                  </ul>
                  <p className="text-gray-700 pt-1">
                    Միացիր մեր տելեգրամյան ալիքին <a href="#telegram" className="text-purple-700 underline font-medium hover:text-purple-900">այս հղումով</a>:
                  </p>
                </div>
              </div>

              {/* Դեռ չե՞ս օգտվում EvocaINVEST-ից */}
              <div className="bg-purple-50/50 border border-purple-100 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800">
                  Դեռ չե՞ս օգտվում EvocaINVEST-ից
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Պատրաստ ես բացահայտել ներդրումների աշխարհը:
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Լրացրու տվյալներդ, և մենք կապ կհաստատենք քեզ հետ:
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Կամ կարող ես անմիջապես կապ հաստատել մեր ներդրումային բաժնի հետ:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-purple-800 font-medium">
                  <a href="mailto:investsecurities@evoca.am" className="flex items-center space-x-2 hover:underline">
                    <span>✉️</span>
                    <span>investsecurities@evoca.am</span>
                  </a>
                  <a href="tel:+37433777453" className="flex items-center space-x-2 hover:underline">
                    <span>📞</span>
                    <span>+37433777453</span>
                  </a>
                </div>
              </div>


                    <div className="space-y-8">
              
              {/* Կարևոր ծանուցում */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800">
                  Կարևոր
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-purple-800">EvocaINVEST</strong>-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները. այս հարթակում և մյուս սոց. հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են: Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա: Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:
                </p>
              </div>

              {/* EvocaINVEST հետադարձ կապ (Ֆորմա) */}
              <div className="border border-purple-200 bg-gray-50/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                  EvocaINVEST հետադարձ կապ
                </h3>

                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-700">Անձնական տվյալներ</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Անուն" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600 text-gray-800 placeholder-gray-400 text-sm"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ազգանուն" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600 text-gray-800 placeholder-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Էլ. Հասցե</label>
                    <input 
                      type="email" 
                      placeholder="Էլ. հասցե" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600 text-gray-800 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Հեռախոսահամար</label>
                    <div className="flex bg-white border border-gray-300 rounded-xl overflow-hidden focus-within:border-purple-600">
                      <div className="flex items-center px-3 bg-gray-50 border-r border-gray-300 text-gray-700 text-sm font-medium">
                        🇦🇲 +374
                      </div>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white focus:outline-none text-gray-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button 
                      type="button" 
                      className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors shadow-sm cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight uppercase">
                  ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
                </h3>

               {/* Ակորդեոն */}
              <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                <button
                  onClick={() => toggleAccordion('useful-materials')}
                  className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                >
                  <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                    EvocaINVEST օգտակար նյութեր
                  </span>
                  <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'useful-materials' ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === 'useful-materials' && (
                  <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed space-y-6">
                    <p>Այստեղ կարող եք գտնել EvocaINVEST-ին վերաբերող տեսանյութերն ու օգտակար նյութերը:</p>

                    {/* Տեսանյութեր (Մեկ սյունով, փոքրացված չափսերով) */}
                    <div className="flex flex-col space-y-6 items-center">
                      
                      {/* Տեսանյութ 1 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/5kUF-3KueZ8" 
                            title="EvocaINVEST Տեսանյութ 1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 2 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/wax5BjEOAGQ" 
                            title="EvocaINVEST Տեսանյութ 2" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 3 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/oxxOZXf2kPA" 
                            title="EvocaINVEST Տեսանյութ 3" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 4 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/XCz2N5eicHs" 
                            title="EvocaINVEST Տեսանյութ 4" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 5 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/8_C9YpvlZAE" 
                            title="EvocaINVEST Տեսանյութ 5" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 6 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/3mPDelJ-KcM" 
                            title="EvocaINVEST Տեսանյութ 6" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      {/* Տեսանյութ 7 */}
                      <div className="w-full max-w-xl border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-purple-300 transition-all">
                        <div className="aspect-video w-full bg-gray-100">
                          <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/OIfnnN40_DA" 
                            title="EvocaINVEST Տեսանյութ 7" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
              </div>

                            <div className="space-y-6 pt-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                Հաճախ տրվող հարցեր[cite: 14]
              </h3>

              <div className="space-y-3">
                {/* 1. Ի՞նչ է բաժնետոմսը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-1')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ է բաժնետոմսը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-1' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-1' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Բաժնետոմսը բաժնային արժեթուղթ է, որը հավաստում է ընկերության կապիտալում մասնակցության և շահութաբաժին ստանալու իրավունքը:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 2. Ի՞նչ է պարտատոմսը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-2')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ է պարտատոմսը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-2' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-2' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Պարտատոմսը պարտքային արժեթուղթ է, որով թողարկողը պարտավորվում է սահմանված ժամկետում վերադարձնել անվանական արժեքը և վճարել տոկոսներ:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 3. Ի՞նչ է ETF-ը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-3')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ է ETF-ը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-3' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-3' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>ETF-ը (Exchange Traded Fund) բորսայում վաճառվող ֆոնդ է, որը միավորում է տարբեր արժեթղթեր մեկ ընդհանուր գործիքի մեջ:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 4. Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-4')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-4' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-4' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Բաժնետոմսերը տալիս են ընկերության սեփականության իրավունք, պարտատոմսերը պարտքային գործիքներ են կանխատեսելի եկամով,իսկ ETF-ները ապահովում են դիվերսիֆիկացիա՝ ներառելով բազմաթիվ ակտիվներ:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 5. Կարող՞եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-5')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-5' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-5' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Այո, հաշիվը կարող եք բացել առցանց՝ EvocaTOUCH հավելվածի միջոցով մի քանի րոպեում:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 6. Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-6')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-6' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-6' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Հասանելիություն է տրամադրվում տեղական և միջազգային ֆոնդային բորսաներում ներդրումներ կատարելու համար:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 7. Կարող՞եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-7')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Կարո՞ղ եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-7' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-7' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Այո, ձեր պորտֆոլիոյում կարող եք համատեղել տարբեր տեսակի ակտիվներ:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 8. Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-8')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-8' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-8' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Արժեթուղթը կարող եք գտնել որոնման դաշտում ըստ անվանման կամ ticker-ի և տեղադրել համապատասխան պատվեր:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 9. Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-9')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-9' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-9' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Լիմիտային պատվերը թույլ է տալիս նշել կոնկրետ գին, իսկ շուկայական պատվերն իրականացվում է տվյալ պահի ընթացիկ շուկայական գնով:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 10. Ի՞նչ է ticker-ը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-10')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ է ticker-ը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-10' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-10' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Ticker-ը արժեթղթի կամ ընկերության եզակի հապավումն է բորսայում (օրինակ՝ AAPL Apple-ի համար):[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 11. Ի՞նչ է դիվիդենտը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-11')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ է դիվիդենտը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-11' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-11' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Դիվիդենտը ընկերության շահույթի մի մասն է, որը վճարվում է բաժնետերերին:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 12. Կարող՞եմ պատվերներ տեղադրել բորսայի աշխատանքային ժամերից դուրս */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-12')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Կարո՞ղ եմ պատվերներ տեղադրել բորսայի աշխատանքային ժամերից դուրս:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-12' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-12' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Այո, կարող եք տեղադրել 24/7 ռեժիմով, և դրանքժ կկատարվեն բորսայի բացման պես:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 13. Ինչու՞ է կարևոր դիվերսիֆիկացիան */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-13')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ինչո՞ւ է կարևոր դիվերսիֆիկացիան:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-13' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-13' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Դիվերսիֆիկացիան նվազեցնում է ռիսկերը՝ բաշխելով ներդրումները տարբեր ակտիվների միջև:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 14. Կարող՞եմ վաճառել արժեթուղթը ցանկացած պահի */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-14')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Կարո՞ղ եմ վաճառել արժեթուղթը ցանկացած պահի:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-14' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-14' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Այո, շուկայի աշխատանքային ժամերին կարող եք ցանկացած պահին իրացնել ձեր ակտիվները:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 15. Ի՞նչ արժույթներով կարող եմ ներդրումներ կատարել */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-15')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ արժույթներով կարող եմ ներդրումներ կատարել:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-15' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-15' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Ներդրումները հնարավոր է իրականացնել հարթակում առաջարկվող հիմնական արժույթներով:[cite: 14]</p>
                    </div>
                  )}
                </div>

                {/* 16. Ի՞նչ ռիսկեր ունի ներդրումը */}
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('faq-16')}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
                      Ի՞նչ ռիսկեր ունի ներդրումը:[cite: 14]
                    </span>
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'faq-16' ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === 'faq-16' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed">
                      <p>Ցանկացած ներդրում կապված է շուկայական տատանումների և գների հնարավոր անկման ռիսկերի հետ:[cite: 14]</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
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