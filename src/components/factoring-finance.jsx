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
                onClick={() => handleNavigation('/hy/guarantee')} 
                className="text-white font-semibold hover:text-purple-200 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Երաշխիք
              </button>
              <button 
                onClick={() => handleNavigation('/hy/factoring-finance')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Ֆակտորինգային ֆինասավորում
              </button>
              <button 
                onClick={() => handleNavigation('/hy/letter-of-credit')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Ակրեդիտիվ
              </button>
              <button 
                onClick={() => handleNavigation('/hy/documentary-collection')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                Ինկատ
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
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Առևտրի ֆինանսավորում</button>
            <span>›</span>
            <span className="text-gray-800 font-medium"> 
Ֆակտորինգային ֆինանսավորում

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
              <div className="space-y-3">
              <div className="space-y-6 text-gray-700 leading-relaxed">
  {/* Վերնագիր */}
  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
    Ֆակտորինգային ֆինանսավորում[cite: 15]
  </h2>

  {/* Նկարագրություն */}
  <div className="space-y-4">
    <p>
      Եթե ցանկանում եք լինել շուկայում ավելի մրցունակ, <strong className="text-purple-800">Evocabank</strong>-ը կօգնի Ձեզ՝ առաջարկում ենք ֆակտորինգային ֆինանսավորում:[cite: 15]
    </p>

    <p>
      <strong className="text-purple-800">Evocabank</strong>-ն իրականացնում է ֆակտորինգային ֆինանսավորում նաև «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակում:[cite: 15]
    </p>

    <p>
      Ֆակտորինգ կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (Բացառությամբ «Հանրապետության», «Երևան Մոլ», «Էրեբունի» մասնաճյուղերի):[cite: 15]
    </p>
  </div>
</div>

                    <div className="space-y-6 pt-6">
  {/* Վերնագիր */}
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
    Պայմաններ և սակագներ`
  </h3>

  {/* Աղյուսակ */}
  <div className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-xs overflow-x-auto">
    <table className="w-full text-left border-collapse text-sm sm:text-base">
      <tbody>
        {/* Տող 1 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800 w-1/3">Ֆակտորինգի սահմանաչափ</td>
          <td className="py-3.5 px-4 text-gray-600">
            <ul className="list-disc pl-5">
              <li>5,000,000 – 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</li>
            </ul>
          </td>
        </tr>

        {/* Տող 2 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">2.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Հաճախորդները</td>
          <td className="py-3.5 px-4 text-gray-600">
            ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատեր, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս:
          </td>
        </tr>

        {/* Տող 3 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">3.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Ֆակտորինգային սահմանաչափի գործողության ժամկետ</td>
          <td className="py-3.5 px-4 text-gray-600">Մինչև 24 ամիս</td>
        </tr>

        {/* Տող 4 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center align-top">4.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800 align-top">Ֆինանսավորման ժամկետ</td>
          <td className="py-3.5 px-4 text-gray-600">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Մինչև 120 օր,</li>
              <li>«Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում - մինչև 250 օր,</li>
            </ul>
          </td>
        </tr>

        {/* Տող 5 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">5.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Ֆինանսավորման չափ</td>
          <td className="py-3.5 px-4 text-gray-600">Ներկայացված հաշիվ ապրանքագրի մինչև 90%</td>
        </tr>

        {/* Տող 6 - Ներքին աղյուսակով արժույթներ ու տոկոսադրույքներ */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center align-top">6.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800 align-top">
            Ֆինանսավորման գումարի տարեկան տոկոսադրույք և արժույթ
          </td>
          <td className="p-0">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-4 font-medium text-gray-700 w-1/2">ՀՀ դրամ</td>
                  <td className="py-2.5 px-4 text-gray-600">սկսած 12%-ից</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-4 font-medium text-gray-700">ԱՄՆ դոլար</td>
                  <td className="py-2.5 px-4 text-gray-600">սկսած 8%-ից</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-4 font-medium text-gray-700">Եվրո</td>
                  <td className="py-2.5 px-4 text-gray-600">սկսած 6%-ից</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-700">ՌԴ ռուբլի</td>
                  <td className="py-2.5 px-4 text-gray-600">Սկսած 12%-ից</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Տող 7 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center align-top">7.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800 align-top">
            Ֆինանսավորման գումարի և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր
          </td>
          <td className="py-3.5 px-4 text-gray-600 space-y-3">
            <p>ժամկետանց գումարի համար՝ օրական 0.015%,</p>
            <p>ժամկետանց տոկոսագումարի համար օրական 0.1%:</p>
          </td>
        </tr>

        {/* Տող 8 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">8.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Վաղաժամկետ մարում</td>
          <td className="py-3.5 px-4 text-gray-600">Վաղաժամկետ մարման տույժեր չեն կիրառվում</td>
        </tr>

        {/* Տող 9 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">9.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Սահմանաչափի հաստատման վճար</td>
          <td className="py-3.5 px-4 text-gray-600">Սահմանաչափի 0.20% նվազագույնը 10,000 ՀՀ դրամ առավելագույնը 200,000 ՀՀ դրամ</td>
        </tr>

        {/* Տող 10 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">10.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Գործող սահմանաչափի ավելացում</td>
          <td className="py-3.5 px-4 text-gray-600">ավելացվող մասի 0.20% նվազագույնը 10,000 ՀՀ դրամ</td>
        </tr>

        {/* Տող 11 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">11.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Հ/Ա գանձվող միջնորդավճար</td>
          <td className="py-3.5 px-4 text-gray-600">0.5-3%, min 10,000 դրամ</td>
        </tr>

        {/* Տող 12 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">12.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Սահմանաչափի վերահաստատում</td>
          <td className="py-3.5 px-4 text-gray-600">10,000 ՀՀ դրամ</td>
        </tr>

        {/* Տող 13 */}
        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center">13.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800">Հայտի ուսումնասիրման վճար</td>
          <td className="py-3.5 px-4 text-gray-600">10,000 ՀՀ դրամ</td>
        </tr>

        {/* Տող 14 */}
        <tr className="hover:bg-gray-50/50">
          <td className="py-3.5 px-4 font-medium text-gray-500 text-center align-top">14.</td>
          <td className="py-3.5 px-4 font-medium text-gray-800 align-top">Ապահովվածություն</td>
          <td className="py-3.5 px-4 text-gray-600 space-y-3">
            <p>Հաճախորդի/պարտապանների անձնական երաշխավորություններ՝ ըստ պահանջի,</p>
            <p>Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև լրացուցիչ գրավ</p>
          </td>
        </tr>
      </tbody>
    </table>
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
                      Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026
                    </span>
                  </div>
                  <span className="text-purple-700 font-bold">⬇</span>
                </a>
              </div>
            </div>               
                <div className="w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
  {/* Վերնագիր և "Բոլոր նորությունները" կոճակ */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
      Վերջին նորությունները
    </h2>
    <a 
      href="/all-news" 
      className="inline-flex items-center px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 text-sm font-semibold rounded-full transition-colors group"
    >
      <span>Բոլոր նորությունները</span>
      <span className="ml-1 transition-transform group-hover:translate-x-1">›</span>
    </a>
  </div>

  {/* Նորությունների քարտերի ցանց (Grid) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    
    {/* Նորություն 1 */}
    <a 
      href="/news/fincomm-2026" 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" 
          alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
          Կենսակերպ
        </span>
        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
          Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր
        </h3>
        <span className="text-xs text-gray-400 mt-auto pt-2">
          08.10.2026
        </span>
      </div>
    </a>

    {/* Նորություն 2 */}
    <a 
      href="/news/trf-2026" 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" 
          alt="Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
          Կենսակերպ
        </span>
        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
          Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր
        </h3>
        <span className="text-xs text-gray-400 mt-auto pt-2">
          06.10.2026
        </span>
      </div>
    </a>

    {/* Նորություն 3 */}
    <a 
      href="/news/uk-business-forum" 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" 
          alt="Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
          Կենսակերպ
        </span>
        <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
          Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր
        </h3>
        <span className="text-xs text-gray-400 mt-auto pt-2">
          06.10.2026
        </span>
      </div>
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