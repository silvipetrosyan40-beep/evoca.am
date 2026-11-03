import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Ավելացրեք սա
import { Globe, Search, Menu, ChevronDown, MapPin, HelpCircle } from 'lucide-react';

export default function Header() {
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const navigate = useNavigate(); // <--- Հայտարարեք նավարկության ֆունկցիան

  const handleNavigation = (path) => {
    navigate(path); // <--- Օգտագործեք navigate-ը window.location.href-ի փոխարեն
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans relative z-50">
      {/* Վերին բար (Top Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
          
          {/* Ձախ կողմի հղումներ */}
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
            <button onClick={() => handleNavigation('/all-news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
            <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
            <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

            {/* Առցանց հայտեր Dropdown */}
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

            {/* Հետադարձ կապ Dropdown */}
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

          {/* Աջ կողմի գործիքներ և իշոնկեք */}
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

      {/* Հիմնական նավիգացիա (Main Navigation) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Լոգո և հիմնական բաժիններ */}
          <div className="flex items-center space-x-12">
            <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
              <span className="text-3xl font-extrabold tracking-tight text-gray-700">
                evoca
              </span>
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-full ml-0.5 mb-3"></span>
            </div>

            {/* Մենյուի կետեր */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Վարկեր</button>
              <button onClick={() => handleNavigation('/cards')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Քարտեր</button>
              <button onClick={() => handleNavigation('/deposits')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Ավանդներ</button>
              <button onClick={() => handleNavigation('/accounts')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Հաշիվներ</button>
              <button onClick={() => handleNavigation('/transfers')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Փոխանցումներ</button>
              <button onClick={() => handleNavigation('/securities')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Արժեթղթեր</button>
              <button onClick={() => handleNavigation('/salary')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">EvocaSALARY</button>
              <button onClick={() => handleNavigation('/evocatouch')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">EvocaTOUCH</button>
            </nav>
          </div>

          {/* EvocaONLINE կոճակ */}
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
  );
}