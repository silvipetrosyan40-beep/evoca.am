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
            <span className="text-gray-800 font-medium">Երաշխիք
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


              <div className="space-y-3">
              

               <div className="space-y-8 text-gray-700 leading-relaxed">
  {/* Վերնագիր */}
  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
    Երաշխիք
  </h1>

  {/* Նկարագրություն */}
  <div className="space-y-4">
    <p>
      Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ երրորդ կողմի (Beneficiary)` վճարելու երաշխիքով սահմանված գումարը ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի պայմաններին:
    </p>
    <p>
      Բանկային երաշխիքները, որպես կանոն, կարգավորվում են{' '}
      <a href="#icc" className="text-purple-700 underline font-medium hover:text-purple-900">
        Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758 կանոններով
      </a>
      , եթե երաշխիքում այլ բան նախատեսված չէ:
    </p>
  </div>

  {/* Հիմնական տեսակները */}
  <div className="space-y-6">
    <h3 className="text-lg sm:text-xl font-bold text-purple-800">
      Բանկային երաշխիքների հիմնական տեսակները
    </h3>

    <div className="space-y-6">
      {/* 1. Կանխավճարային երաշխիք */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Կանխավճարային երաշխիք
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Advance Payment Guarantee)</p>
          <p>
            Տրվում է այն դեպքերում, երբ գնորդը (Buyer) մատակարարին (Seller) տրամադրում է կանխավճար մինչև ապրանքի մատակարարումը կամ ծառայության մատուցումը:
          </p>
          <p>
            Երաշխիքըապահովում է կանխավճարի վերադարձը բենեֆիցիարին, եթե դիմողը չի կատարում հիմնական պայմանագրով նախատեսված իր պարտավորությունները:
          </p>
        </div>
      </div>

      {/* 2. Պարտավորությունների կատարման երաշխիք */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Պարտավորությունների կատարման երաշխիք
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Performance Guarantee / Performance Bond)</p>
          <p>
            Տրվում է պայմանագրով նախատեսված պարտավորությունների պատշաճ կատարումն ապահովելու նպատակով:
          </p>
          <p>
            Բանկը պարտավորվում է վճարել բենեֆիցիարին երաշխիքով սահմանված գումարը՝ պայմանագրային պարտավորությունների չկատարման կամ ոչ պատշաճ կատարման դեպքում:
          </p>
        </div>
      </div>

      {/* 3. Մրցույթային երաշխիք */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Մրցույթային երաշխիք
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Tender / Bid Guarantee)</p>
          <p>
            Տրվում է մրցույթներին կամ տենդերներին մասնակցելու, ինչպես նաև պայմանագրի, որակավորման, կանխավճարի ապահովման նպատակներով:
          </p>
        </div>
      </div>

      {/* 4. Վճարման երաշխիք */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Վճարման երաշխիք
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Payment Guarantee)</p>
          <p>
            Կիրառվում է բաց հաշվով վճարման (open account) առևտրային գործարքներում:
          </p>
          <p>
            Երաշխիքը ապահովում է բենեֆիցիարի վճարումը այն դեպքում, երբ դիմողը չի կատարում պայմանագրով սահմանված վճարային պարտավորությունները:
          </p>
        </div>
      </div>

      {/* 5. Մաքսային երաշխիք */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Մաքսային երաշխիք
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Customs Guarantee)</p>
          <p>
            Տրվում է մաքսային մարմինների օգտին և ապահովում է մաքսային տուրքերի, հարկերի և այլ վճարների կատարումը՝ մաքսային օրենսդրությամբ նախատեսված դեպքերում:
          </p>
          <p>
            Մաքսային երաշխիքները կարող են կարգավորվել ինչպես ազգային օրենսդրությամբ, այնպես էլ համապատասխան միջազգային կանոններով:
          </p>
        </div>
      </div>

      {/* 6. Պահուստային ակրեդիտիվ */}
      <div className="space-y-2">
        <h4 className="font-bold text-purple-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block"></span>
          Պահուստային ակրեդիտիվ
        </h4>
        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 text-sm sm:text-base space-y-2 text-gray-600 shadow-xs">
          <p className="italic font-medium text-gray-500">(Standby Letter of Credit - SBLC)</p>
          <p>
            Պահուստային ակրեդիտիվը անկախ վճարային գործիք է, որը իր տնտեսական էությամբ համարժեք է բանկային երաշխիքին:
          </p>
          <p>
            Այն սովորաբար կարգավորվում է{' '}
            <a href="#isp98" className="text-purple-700 underline font-medium hover:text-purple-900">ICC ISP98</a>
            {' '}կամ{' '}
            <a href="#ucp600" className="text-purple-700 underline font-medium hover:text-purple-900">UCP 600</a>
            {' '}կանոններով և կիրառվում է այն դեպքում, երբ բանկային երաշխիքի թողարկումը իրավական կամ գործառնական տեսանկյունից սահմանափակ է:
          </p>
          <p>
            SBLC-ի հիման վրա վճարումը կատարվում է միայն բենեֆիցիարի կողմից պայմաններին համապատասխան պահանջ ներկայացնելու դեպքում:
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Առավելությունները */}
  <div className="space-y-4 pt-4">
    <h3 className="text-lg sm:text-xl font-bold text-purple-800">
      Բանկային երաշխիքների առավելությունները
    </h3>
    <ul className="space-y-3">
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2 shrink-0"></span>
        <span>Նվազեցնում են առևտրային և ֆինանսական ռիսկերը,</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2 shrink-0"></span>
        <span>ապահովում են գործարքների վստահելի իրականացումը,</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2 shrink-0"></span>
        <span>հնարավորություն են տալիս կիրառել հետաձգված վճարման պայմաններ,</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2 shrink-0"></span>
        <span>նպաստում են գործընկերների միջև երկարաժամկետ և վստահելի համագործակցությանը,</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2 shrink-0"></span>
        <span>հանդիսանում են վարկային միջոցներին համեմատ ավելի ճկուն և ծախսաարդյունավետ գործիք:</span>
      </li>
    </ul>
  </div>

  {/* Պայմանների հղում */}
  <div className="pt-2">
    <a href="#guarantee-terms" className="text-purple-700 underline font-bold hover:text-purple-900 transition-colors">
      Բանկային երաշխիքի պայմաններ
    </a>
  </div>

  {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոններ) */}
  <div className="space-y-4 pt-6">
    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight uppercase">
      ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
    </h3>

    <div className="space-y-3">
      {/* 1. Միջազգային Բանկային Երաշխիքներ */}
<div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
  <button
    onClick={() => toggleAccordion('intl-guarantees')}
    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
  >
    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
      Միջազգային Բանկային Երաշխիքներ
    </span>
    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'intl-guarantees' ? 'rotate-180' : ''}`} />
  </button>
  {openIndex === 'intl-guarantees' && (
    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {/* Տող 1 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
            <td className="py-3 px-4 font-medium text-gray-800 w-1/3">Արժույթ</td>
            <td className="py-3 px-4 text-gray-600">ԱՄՆ դոլար, Եվրո, ՌԴ ռուբլի կամ Բանկի համար ընունելի այլ արտարժույթ</td>
          </tr>
          {/* Տող 2 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">2.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Գումարային սահմանաչափ</td>
            <td className="py-3 px-4 text-gray-600">Պայմանագրային</td>
          </tr>
          {/* Տող 3 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">3.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Ժամկետներ</td>
            <td className="py-3 px-4 text-gray-600">Պայմանագրային</td>
          </tr>
          {/* Տող 4 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">4.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Երաշխիքի թողարկում և/կամ հաստատում (տարեկան)</td>
            <td className="py-3 px-4 text-gray-600">Պայմանագրային</td>
          </tr>
          {/* Տող 5 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">5.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Երաշխիքի պայմանների փոփոխություն (այդ թվում՝ երկարաձգում)</td>
            <td className="py-3 px-4 text-gray-600">0.15%, նվազ. 50,000 ՀՀ դրամ</td>
          </tr>
          {/* Տող 6 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">6.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Երաշխիքի ծանուցում</td>
            <td className="py-3 px-4 text-gray-600">0.15%, նվազ. 50,000 ՀՀ դրամ</td>
          </tr>
          {/* Տող 7 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">7.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Բանկի կողմից թողարկված և/կամ հաստատված երաշխիքով վճարում</td>
            <td className="py-3 px-4 text-gray-600">0.5%, նվազ. 50,000 ՀՀ դրամ</td>
          </tr>
          {/* Տող 8 */}
          <tr className="hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">8.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Երաշխիքի հետ կանչում</td>
            <td className="py-3 px-4 text-gray-600">50,000 ՀՀ դրամ</td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>

     {/* 2. Տեղական Բանկային Երաշխիքներ */}
<div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
  <button
    onClick={() => toggleAccordion('local-guarantees')}
    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
  >
    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
      Տեղական Բանկային Երաշխիքներ[cite: 14]
    </span>
    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'local-guarantees' ? 'rotate-180' : ''}`} />
  </button>
  {openIndex === 'local-guarantees' && (
    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {/* Տող 1 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
            <td className="py-3 px-4 font-medium text-gray-800 w-1/3">Արժույթ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">ՀՀ դրամ կամ արտարժույթ[cite: 14]</td>
          </tr>
          {/* Տող 2 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">2.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Գումարային սահմանաչափ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Պայմանագրային[cite: 14]</td>
          </tr>
          {/* Տող 3 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">3.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Ժամկետներ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Մինչև 60 ամիս մարման ժամկետով[cite: 14]</td>
          </tr>
          {/* Տող 4 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Գանձվող վճարներ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 20,000 ՀՀ դրամը,ապա Պրինցիպալից գանձվում է միանվագ վճար 20,000 ՀՀ դրամ գումարի չափով:[cite: 14]
            </td>
          </tr>
          {/* Տող 5 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">5.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Փոփոխություն[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">15 000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 6 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">6.</td>
            <td className="py-3 px-4 font-medium text-gray-800">
              Տարեկան տոկոսադրույք՝ դրամական ապահովվածության դեպքում[cite: 14]
            </td>
            <td className="py-3 px-4 text-gray-600">1-3%[cite: 14]</td>
          </tr>
          {/* Տող 7 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">7.</td>
            <td className="py-3 px-4 font-medium text-gray-800">
              Տարեկան տոկոսադրույք՝ Այլ ապահովվածության դեպքում[cite: 14]
            </td>
            <td className="py-3 px-4 text-gray-600">2-6%[cite: 14]</td>
          </tr>
          {/* Տող 8 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">8.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Չեղյալ համարում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">25 000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 9 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">9.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վճարում պահանջի դիմաց[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 10 */}
          <tr className="hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">10.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վարկ դառնալու դեպքում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Ոչ ավել քան ՀՀ կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ[cite: 14]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>
     {/* 3. Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ */}
<div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
  <button
    onClick={() => toggleAccordion('prime-collateral-guarantees')}
    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
  >
    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
      Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ[cite: 14]
    </span>
    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'prime-collateral-guarantees' ? 'rotate-180' : ''}`} />
  </button>
  {openIndex === 'prime-collateral-guarantees' && (
    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {/* Տող 1 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
            <td className="py-3 px-4 font-medium text-gray-800 w-1/3">Արժույթ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">ՀՀ դրամ կամ արտարժույթ[cite: 14]</td>
          </tr>
          {/* Տող 2 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">2.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Գումարային սահմանաչափ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Պայմանագրային[cite: 14]</td>
          </tr>
          {/* Տող 3 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">3.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Ժամկետներ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Մինչև 60 ամիս մարման ժամկետով[cite: 14]</td>
          </tr>
          {/* Տող 4 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Ապահովվածություն[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Դրամական միջոցների (ավանդային հաշվի կամ ընթացիկ հաշվի մնացորդ) մնացորդ, ինչպես նաև Բանկի կողմից թողարկված պարտատոմսեր, պետական պարտատոմսեր[cite: 14]
            </td>
          </tr>
          {/* Տող 5 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Գանձվող վճարներ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 20,000 ՀՀ դրամը, ապա Պրինցիպալից գանձվում է միանվագ վճար 20,000 ՀՀ դրամ գումարի չափով:[cite: 14]
            </td>
          </tr>
          {/* Տող 6 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">6.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Փոփոխություն[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">15 000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 7 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">7.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Տարեկան տոկոսադրույք[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">1-3%[cite: 14]</td>
          </tr>
          {/* Տող 8 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">8.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Չեղյալ համարում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">25 000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 9 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">9.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վճարում պահանջի դիմաց[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 10 */}
          <tr className="hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">10.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վարկ դառնալու դեպքում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Ոչ ավել քան ՀՀ կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ[cite: 14]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>

     {/* 4. Դրամական հոսքերով ապահովված առանց վարկունակության գնահատման Բանկային երաշխիքներ */}
<div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
  <button
    onClick={() => toggleAccordion('cashflow-guarantees')}
    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
  >
    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
      Դրամական հոսքերով ապահովված առանց վարկունակության գնահատման Բանկային երաշխիքներ[cite: 13]
    </span>
    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'cashflow-guarantees' ? 'rotate-180' : ''}`} />
  </button>
  {openIndex === 'cashflow-guarantees' && (
    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {/* Տող 1 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
            <td className="py-3 px-4 font-medium text-gray-800 w-1/3">Արժույթ[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">ՀՀ դրամ կամ արտարժույթ[cite: 13]</td>
          </tr>
          {/* Տող 2 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Գումարային սահմանաչափ[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">
              Երաշխիքային գումարը չպետք է գերազանցի ԷՎՈԿԱԲԱՆԿ ՓԲԸ-ում նախորդ 12 ամիսների բոլոր արժույթներով հաշիվների զուտ շրջանառության 50%-ը: Ընդ որում՝ հաշիվների շրջանառության նույն ժամանակահատվածի համար իրականացվում է հարկային հաշվետվությունների համադրում և հիմք է հանդիսանում նվազագույնը:[cite: 13]
            </td>
          </tr>
          {/* Տող 3 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">3.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Ժամկետներ[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">Մինչև 24 ամիս ժամկետով[cite: 13]</td>
          </tr>
          {/* Տող 4 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Պահանջներ վարկառուի և երաշխավոր անձանց նկատմամբ[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր[cite: 13]</li>
                <li>Ժամկետանց պարտավորությունների բացակայություն (ներառյալ տրամադրված երաշխավորությունների գծով): Դիմումի պահին դասակարգումների բացակայություն[cite: 13]</li>
                <li>Նախորդ 12 ամիսների ընթացքում վարկային պարտավորությունների գծով դասակարգումների բացակայություն, իսկ մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը, միանվագ՝ 15 օրը[cite: 13]</li>
                <li>Չունի Հարկային ժամկետանց պարտավորություններ և տույժեր[cite: 13]</li>
                <li>Հիմնադրի և/կամ իրական շահառուի անձնական երաշխավորությունը[cite: 13]</li>
              </ul>
            </td>
          </tr>
          {/* Տող 5 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Ապահովվածություն[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">
              ԷՎՈԿԱԲԱՆԿ ՓԲԸ-ում Հաճախորդի հաշիվների շրջանառություն[cite: 13]
            </td>
          </tr>
          {/* Տող 6 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">6.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Տարեկան տոկոսադրույք[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">3-6%[cite: 13]</td>
          </tr>
          {/* Տող 7 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">7.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Չեղյալ համարում[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">25 000 ՀՀ դրամ[cite: 13]</td>
          </tr>
          {/* Տող 8 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">8.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վճարում պահանջի դիմաց[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 13]</td>
          </tr>
          {/* Տող 9 */}
          <tr className="hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">9.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վարկ դառնալու դեպքում[cite: 13]</td>
            <td className="py-3 px-4 text-gray-600">
              ՀՀ Կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ[cite: 13]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>

      {/* 5. Անշարժ գույքով ապահովված Բանկային երաշխիքներ */}
<div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
  <button
    onClick={() => toggleAccordion('realestate-guarantees')}
    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
  >
    <span className="font-semibold text-purple-800 text-base sm:text-lg group-hover:text-purple-900 transition-colors">
      Անշարժ գույքով ապահովված Բանկային երաշխիքներ[cite: 14]
    </span>
    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 ${openIndex === 'realestate-guarantees' ? 'rotate-180' : ''}`} />
  </button>
  {openIndex === 'realestate-guarantees' && (
    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 text-gray-700 leading-relaxed overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          {/* Տող 1 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 w-12 text-center">1.</td>
            <td className="py-3 px-4 font-medium text-gray-800 w-1/3">Արժույթ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">ՀՀ դրամ կամ արտարժույթ[cite: 14]</td>
          </tr>
          {/* Տող 2 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Գումարային սահմանաչափ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              Առավելագույնը անշարժ գույքի գնահատված լիկվիդային արժեքի կրկնապատիկի չափով[cite: 14]
            </td>
          </tr>
          {/* Տող 3 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">3.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Ժամկետներ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Մինչև 60 ամիս ժամկետով[cite: 14]</td>
          </tr>
          {/* Տող 4 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Պահանջներ վարկառուի և երաշխավոր անձանց նկատմամբ[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ՀՀ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր[cite: 14]</li>
                <li>Հաճախորդը ունի 2 և ավելի տարི ունի Պետական մարմինների հետ երաշխիքային համագործակցության փորձ (յուրաքանչյուր տարվա համար առնվազն մեկ պայմանագիր).[cite: 14]</li>
                <li>Դիմումի պահին ժ/գ կամ դասակարգված լինելու բացակայություն[cite: 14]</li>
                <li>Վերջին 12 ամսում գումարային ժամկետանց օրերը չեն գերազանցում 30 օրը, միանվագ՝ 15 օրը:[cite: 14]</li>
                <li>Չունի Հարկային ժամկետանց պարտավորություններ և տույժեր[cite: 14]</li>
                <li>Վերջին 24 ամսում չի գրանցվել հասույթի ավել քան 20% նվազում (հարկային հաշվետվությունների համաձայն).[cite: 14]</li>
                <li>Վերջին 24 ամսում չի ունեցել դասակարգված վարկային պարտավորություններ[cite: 14]</li>
                <li>Հիմնադրի և/կամ իրական շահառուի անձնական երաշխավորությունը:[cite: 14]</li>
              </ul>
            </td>
          </tr>
          {/* Տող 5 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="py-3 px-4 font-medium text-gray-800 align-top">Ապահովվածություն[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">Բանկի համար ընդունելի անշարժ գույք[cite: 14]</td>
          </tr>
          {/* Տող 6 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">6.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Տարեկան տոկոսադրույք[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">3-6%[cite: 14]</td>
          </tr>
          {/* Տող 7 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">7.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Չեղյալ համարում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">25 000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 8 */}
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">8.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վճարում պահանջի դիմաց[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 14]</td>
          </tr>
          {/* Տող 9 */}
          <tr className="hover:bg-gray-50/50">
            <td className="py-3 px-4 font-medium text-gray-500 text-center">9.</td>
            <td className="py-3 px-4 font-medium text-gray-800">Վարկ դառնալու դեպքում[cite: 14]</td>
            <td className="py-3 px-4 text-gray-600">
              ՀՀ կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկի չափով[cite: 14]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>
    </div>
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
    <div 
      onClick={() => {
         navigate('/news/fincomm-2026')
      }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="	https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" 
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
    </div>

    {/* Նորություն 2 */}
    <div 
      onClick={() => {
        // navigate('/news/trf-2026')
      }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="	https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" 
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
    </div>

    {/* Նորություն 3 */}
    <div 
      onClick={() => {
        // navigate('/news/uk-business-forum')
      }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
        <img 
          src="	https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" 
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