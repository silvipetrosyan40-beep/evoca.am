import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Home, ChevronRight, ChevronLeft, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle, ArrowLeft } from 'lucide-react';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
 
    // 14 հատ բիզնես վարկերի քարտեր սլայդերի համար
  const cards = [
    { id: 1, title: 'Արագ բիզնես վարկ/վարկային գիծ', path: '/business-loans/fast-business-loan', image: '	https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png' },
    { id: 2, title: 'Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ', path: '/business-loans/loans-for-importing-textile-raw-materials', image: 'https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png' },
    { id: 3, title: 'Բիզնես վարկերի վերաֆինանսավորում', path: '/business-loans/Business-loan-refinancing', image: 'https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png' },
    { id: 4, title: 'Պարտատոմսերով ապահովված վարկ', path: '/business-loans/Loan-secured-by-bonds', image: 'https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png' },
    { id: 5, title: 'Խոշոր և ՓՄՁ բիզնես վարկ', path: '/business-loans/business-loan', image: '	https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg' },
    { id: 6, title: 'Evoca GO', path: '/business-loans/evoca-go-loan', image: '	https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg' },
    { id: 7, title: 'Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր', path: '/business-loans/loans-provided-within-the-framework-of-gaf-energy-efficiency-for-sme', image: '	https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg' },
    { id: 8, title: 'Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ', path: '/business-loans/deposit-secured-credit-line', image: '	https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg' },
    { id: 9, title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում', path: '/business-loans/loans-provided-within-the-framewok-of-renewable-energy-and-energy-saving-program', image: 'https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg' },
    { id: 10, title: 'Պարզ բիզնես վարկ', path: '/business-loans/simple-business-loan', image: 'https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg' },
    { id: 11, title: 'Հաշվի վարկավորում', path: '/business-loans/account-lending', image: '	https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg' },
    { id: 12, title: 'Վարկային գիծ', path: '/business-loans/renewable-credit-line', image: 'https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg' },
    { id: 13, title: 'Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)', path: '/business-loans/loan-under-the-productivity-promotion-program', image: '	https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg' },
    { id: 14, title: 'KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում', path: '/business-loans/kfw-bank-program-loan', image: 'https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
{/* ՀԵԴԵՐ (HEADER) */}
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
                     <button onClick={() => handleNavigation('/hy/news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
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
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button onClick={() => handleNavigation('/hy/business-loans')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0">Բիզնես վարկեր</button>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Բիզնես վարկերի վերաֆինանսավորում
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով։
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/loans/1/17822121684757/560x400.png" 
                alt="Արագ բիզնես վարկ" 
                className="max-h-80 object-contain drop-shadow-md"
              />
            </div>
          </div>
        </section>

        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button 
            onClick={() => navigate('/hy/business')} 
            className="flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-sm border border-gray-200 transition-colors w-fit cursor-pointer font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Վերադառնալ</span>
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center shrink-0"><Home className="w-4 h-4" /></button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/business')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Բիզնես</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/business-loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Վարկեր</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/business-loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Բիզնես վարկեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium shrink-0">Բիզնես վարկերի վերաֆինանսավորում
</span>
          </div>
        </div>







      
      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
      
       {/* Ներդիրների կոճակներ (Tabs) */}
       <div className="flex border-b border-gray-200 space-x-8 overflow-x-auto">
         <button
           onClick={() => setActiveTab('about')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'about'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Վարկի մասին
         </button>
         <button
           onClick={() => setActiveTab('conditions')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'conditions'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Պայմաններ
         </button>
       </div>
{/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Ունե՞ք գործող բիզնես վարկ, օվերդրաֆտ կամ վարկային գիծ այլ ֆինանսական կառույցում, կարող եք այն տեղափոխել <strong className="text-purple-700">Evocabank</strong> և միաժամանակ ստանալ հավելյալ միջոցներ՝ Ձեր բիզնեսի ընթացիկ ծախսերի կամ զարգացման նպատակների համար:
              </p>

              <h3 className="text-xl font-bold text-purple-900 pt-2">Առավելություններ՝</h3>
              <ul className="space-y-3 pl-5 list-disc text-gray-600">
                <li>վերաֆինանսավորվող վարկի գումարի <strong className="text-gray-900">մինչև 2%-ի</strong> չափով cashback (cashback-ի առավելագույն չափը՝ մինչև 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ),</li>
                <li>մինչև <strong className="text-gray-900">120 ամիս</strong> մարման ժամկետ,</li>
                <li>մայր գումարի մարման արտոնյալ ժամանակահատված՝ <strong className="text-gray-900">մինչև 6 ամիս</strong>,</li>
                <li>լրացուցիչ ֆինանսավորման հնարավորություն,</li>
                <li>ֆինանսավորում ՀՀ դրամով, ԱՄՆ դոլարով կամ Եվրոյով:</li>
              </ul>

              <h3 className="text-xl font-bold text-purple-900 pt-2">Լրացուցիչ ֆինանսավորումը կարող ես օգտագործել՝</h3>
              <ul className="space-y-3 pl-5 list-disc text-gray-600">
                <li>հիմնական միջոցների ձեռքբերման,</li>
                <li>շրջանառու միջոցների համալրման,</li>
                <li>կրեդիտորական պարտքի մարման,</li>
                <li>ընթացիկ ծախսերի կամ այլ ներդրումների համար:</li>
              </ul>
              
              <p className="text-sm text-gray-500 pt-2">
                Evocabank-ի հետ կարող եք ոչ միայն ավելի հարմար պայմաններով վերաֆինանսավորել Ձեր գործող վարկերը, այլ նաև ստանալ նոր հնարավորություններ՝ Ձեր բիզնեսն ընդլայնելու համար:
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">$</span>
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">€</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Վերաֆինանսավորում</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">36-120 ամիս</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Ժամկետ</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Գումար</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">15մլն-500մլն</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">ՀՀ դրամ կամ համարժեք արտարժույթ</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Սկսած</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">ՀՀ դրամ՝ 12%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույք</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Սկսած</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">ԱՄՆ դոլար՝ 9%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույք</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Սկսած</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">Եվրո՝ 8%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույք</span>
                </div>
              </div>
            </div>
          </div>
        )}
{activeTab === 'conditions' && (
          <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Վարկավորման մանրամասն պայմաններ</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700 border-collapse border border-purple-100 rounded-2xl overflow-hidden">
                <tbody>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 w-12 text-center align-top">1.</td>
                    <td className="p-4 font-semibold text-gray-900 w-1/3 align-top">Արժույթ</td>
                    <td className="p-4 align-top">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո[cite: 9]</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">2.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկառու</td>
                    <td className="p-4 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր[cite: 9]</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">3.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ֆինանսավորում</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-purple-700 mb-1">Վարկ</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Տեղափոխվող բիզնես վարկին կից վարկ</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">4.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի նպատակ</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700">Այլ ֆինանսական կառույցներում գործող բիզնես ֆինանսավորումների (վարկ, օվերդրաֆտ, վարկային գիծ) տեղափոխում[cite: 9]</p>
                        </div>
                        <div>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Հիմնական միջոցների ձեռքբերում[cite: 9],</li>
                            <li>Շրջանառու միջոցների համալրում[cite: 9],</li>
                            <li>Ընթացիկ ծախսերի ֆինանսավորում[cite: 9],</li>
                            <li>Կրեդիտորական պարտքի մարում[cite: 9],</li>
                            <li>Այլ ներդրումներ[cite: 9]:</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">5.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Սահմանաչափ</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>15,000,000 - 500,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 9]</div>
                        <div>5,000,001 - 100,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 9]</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">6.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ժամկետ</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>36-120 ամիս[cite: 9]</div>
                        <div>12-60 ամիս[cite: 9]</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">7.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Տարեկան անվանական տոկոսադրույք</td>
                    <td className="p-4 align-top space-y-3">
                      <div>
                        <p className="font-semibold text-purple-800 mb-1">Տեղափոխվող ֆինանսավորումների դեպքում՝</p>
                        <p className="text-xs text-gray-500 mb-1">Գործող տոկոսադրույք՝ -2 տոկոսային կետ, բայց ոչ պակաս՝</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>ՀՀ դրամ՝ սկսած 12%[cite: 9]</li>
                          <li>ԱՄՆ դոլար՝ սկսած 9%[cite: 9]</li>
                          <li>Եվրո՝ սկսած 8%[cite: 9]</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2 mb-1">Քեշբեքից չօգտվելու դեպքում՝</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>ՀՀ դրամ՝ սկսած 12.5%[cite: 9]</li>
                          <li>ԱՄՆ դոլար՝ սկսած 9.5%[cite: 9]</li>
                          <li>Եվրո՝ սկսած 8.5%[cite: 9]</li>
                        </ul>
                      </div>
                      <div className="border-t border-purple-200 pt-2">
                        <p className="font-semibold text-gray-900 mb-1">Կից վարկի դեպքում՝</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>ՀՀ դրամ՝ 13%[cite: 9]</li>
                          <li>ԱՄՆ դոլար՝ 9.5%[cite: 9]</li>
                          <li>Եվրո՝ 8.5%[cite: 9]</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">8.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Մայր գումարի մարման արտոնյալ ժամանակահատված (ոչ պարտադիր)</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>Մինչև 6 ամիս[cite: 10]</div>
                        <div>------------[cite: 10]</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">9.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի օգտագործման եղանակ</td>
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>Անկանխիկ[cite: 10]</div>
                        <div>Անկանխիկ/կանխիկ[cite: 10]</div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">10.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Քեշբեք (Cash back)</td>
                    <td className="p-4 align-top">
                      <p>Վարկի պայմանագրային գումարի մինչև 2%՝ առավելագույնը 2,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 10]:</p>
                      <p className="mt-1 text-gray-600">Քեշբեքը տրամադրվում է, եթե վերաֆինանսավորվող վարկի ժամկետը նվազագույնը 60 ամիս է[cite: 10]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">11.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի ապահովում</td>
                    <td className="p-4 align-top space-y-2">
                      <p className="font-semibold text-gray-900">Հիմնական ապահովում՝</p>
                      <p className="text-gray-700">Տեղափոխվող ֆինանսավորման ապահովման միջոց հանդիսացող գրավ/ներ՝ անշարժ, շարժական գույք՝ ներառյալ տրանսպորտային միջոց (եթե տեղափոխման ենթակա վարկի ապահովման միջոցն այլ ֆին. կառույցում անշարժ գույք է, վերաֆինանսավորման վարկի գրավային զամբյուղում անշարժ գույքը պարտադիր է)[cite: 10]:</p>
                      <p className="text-gray-700">Երաշխավոր (ըստ անհրաժեշտության)[cite: 10]:</p>
                      <p className="font-semibold text-gray-900 mt-2">Լրացուցիչ ապահովում՝</p>
                      <ul className="list-disc pl-4 space-y-1 text-gray-700">
                        <li>Այլ անշարժ գույք, տրանսպորտային միջոց և այլ հիմնական միջոց,[cite: 10]</li>
                        <li>Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ,[cite: 10]</li>
                        <li>Ոսկու ստանդարտացված ձուլակտորներ կամ ջարդոն,[cite: 10]</li>
                        <li>Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր,[cite: 10]</li>
                        <li>Շրջանառու միջոցներ և պատրաստի արտադրանք:[cite: 10]</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">12.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Երաշխավոր</td>
                    <td className="p-4 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ[cite: 10]</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">13.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Տեղափոխման ենթակա ֆինանսավորումներ</td>
                    <td className="p-4 align-top">Տեղափոխման ենթակա այլ ֆինանսական կառույցներում գործող ֆինանսավորումները[cite: 10]</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">14.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Գանձվող վճար</td>
                    <td className="p-4 align-top space-y-1">
                      <p>• Վարկային հայտի ուսումնասիրման վճար՝ չի սահմանվում[cite: 10]</p>
                      <p>• Վարկի տրամադրման միանվագ վճար՝ չի սահմանվում[cite: 10]</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">15.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի կանխիկացում</td>
                    <td className="p-4 align-top">Համաձայն Բանկի գործող սակագների և պայմանների[cite: 11]</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">16.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Մարում</td>
                    <td className="p-4 align-top space-y-1">
                      <p>• Անուիտետային[cite: 11]</p>
                      <p>• Զսպանակաձև[cite: 11]</p>
                      <p>• Մայր գումարի արտոնյալ ժամկետի դեպքում՝ մայր գումարը արտոնյալ ժամկետի ավարտից հետո, տոկոսները՝ ամսական[cite: 11]</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">17.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ժամկետանց պարտավորությունների մարման տույժեր</td>
                    <td className="p-4 align-top space-y-1">
                      <p>Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսած ուշացման առաջին օրվանից՝[cite: 11]</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>ժամկետանց մայր գումարի համար՝ օրական 0.015%,[cite: 11]</li>
                        <li>ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:[cite: 11]</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">18.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Մայր գումարի վաղաժամկետ մարման տուգանք</td>
                    <td className="p-4 align-top space-y-2">
                      <p><strong>Առանց քեշբեքի պայմանով վարկերի դեպքում՝</strong> Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով՝ վարկի ամբողջական ժամկետի համար[cite: 11]:</p>
                      <p><strong>Քեշբեքի պայմանով վարկերի դեպքում՝</strong> Պայմանագրի ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 7%-ի չափով՝ վարկի ամբողջական ժամկետի համար[cite: 11]:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">19.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Բանկի կողմից փոխհատուցման ենթակա վճարներ</td>
                    <td className="p-4 align-top space-y-2">
                      <ul className="list-disc pl-4 space-y-1 text-gray-700">
                        <li>Կադաստրի կոմիտեի կողմից տրամադրվող անշարժ գույքի սահմանափակումների վերաբերյալ միասնական տեղեկանքի համար սահմանված վճար (միայն տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի համար, բացառությամբ շուտ գրանցման դեպքերի)[cite: 11],</li>
                        <li>Տեղափոխվող վարկի ապահովման միջոց հանդիսացող անշարժ գույքի նոտարական վավերացման վճար[cite: 11],</li>
                        <li>Գրավի պայմանագրից ծագող Բանկի իրավունքի պետական իրավասու մարմնում գրանցման վճար (միայն տեղափոխվող վարկի անշարժ գույքի դեպքում)[cite: 11],</li>
                        <li>Տեղափոխվող վարկի անշարժ գույքի գնահատում[cite: 11].</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">20.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ինտերնետ Բանկ/Մոբայլ բանկինգ</td>
                    <td className="p-4 align-top">Բանկի հաճախորդ չհանդիսացող հաճախորդներին՝ անվճար ԻԲ/ՄԲ տրամադրում՝ մինչև 3 օգտագործողի հնարավորությամբ 3 տարի ժամկետով[cite: 12]:</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 text-center align-top">21.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Visa Business քարտ</td>
                    <td className="p-4 align-top">
                      <p>1 քարտ՝ տրամադրում և 3 տարի ժամկետով անվճար սպասարկում[cite: 12]:</p>
                      <p className="mt-1 text-gray-600">Պարտադիր պայման է ԱՁ հանդիսացող ֆիզ. անձի և իրավաբանական անձի դեպքում տնօրենի, 10% և ավել մասնակիցների, իրական շահառուի ՀՀ քաղաքացիությունը[cite: 12]:</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

            {/* նկարի հատվածը */}
        
        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
           <div>
  {/* Վերնագիր և նավիգացիայի կոճակներ */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-extrabold text-gray-900">Այլ վարկեր</h2>
    <div className="flex space-x-2">
      <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 shadow-sm cursor-pointer transition-colors">
        ❮
      </button>
      <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 shadow-sm cursor-pointer transition-colors">
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
          className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}