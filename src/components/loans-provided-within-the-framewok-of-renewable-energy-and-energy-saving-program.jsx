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
               KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Եթե ցանկանում եք իրականացնել Էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16148706367365/560x400.png" 
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
            <span className="text-gray-800 font-medium shrink-0">KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում</span>
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
                Օգտվել <strong className="text-purple-700">Evocabank</strong>-ի վարկերից և լիզինգից բացառիկ պայմաններով՝ <strong>KfW</strong>-ի կողմից տրամադրվող ֆինանսավորվող ծրագրի շրջանակում[cite: 31]:
              </p>
              
              <h3 className="text-xl font-bold text-purple-900 pt-2">Ծրագրի շրջանակում ֆինանսավորվում են՝</h3>
              <ul className="space-y-3 pl-5 list-disc text-gray-600">
                <li>
                  <strong>Վերականգնվող էներգիայի էլեկտրակայանների</strong> կառուցման, վերակառուցման և ընդլայնման նախագծերը՝ տարեկան անվանական տոկոսադրույքը <strong>9.5%</strong> (փաստացի տոկոսադրույքը՝ <strong>մինչև 10%</strong>)[cite: 31].
                </li>
                <li>
                  <strong>Էներգաարդյունավետությանն ու էներգախնայողությանը</strong> ուղղված ներդրումներ/նախագծեր՝ տարեկան անվանական տոկոսադրույքը <strong>10.25%</strong> (փաստացի տոկոսադրույքը՝ <strong>մինչև 10.75%</strong>)[cite: 31].
                </li>
              </ul>

              <p className="text-gray-700">
                Ֆինանսավորումները տրամադրվում են ՀՀ ռեզիդենտ իրավաբանական անձանց և Անհատ ձեռնարկատերերին[cite: 31]:
              </p>

              <p className="text-gray-600 text-sm">
                Կանաչ ներդրումները հնարավորություն են տալիս բիզնեսին կրճատել էներգիայի, ջրի և այլ ռեսուրսների ծախսերը, բարձրացնել բիզնեսի արտադրողականությունն ու արդյունավետությունը, ինչպես նաև մրցունակությունը շուկայում[cite: 31]:
              </p>

              <h3 className="text-xl font-bold text-purple-900 pt-2">Evocabank-ում չկա`</h3>
              <ul className="space-y-2 pl-5 list-disc text-gray-600">
                <li>Հայտի ուսումնասիրման վճար[cite: 31]</li>
                <li>Ֆինանսավորման տրամադրման վճար[cite: 31]</li>
                <li>Տուգանք՝ մայր գումարի վաղաժամկետ մարման դեպքում[cite: 31]</li>
              </ul>
              
              <p className="text-sm text-gray-500 pt-2">
                <strong>Կարևոր.</strong> Մինչև 10 մլն ՀՀ դրամ (ներառյալ) վարկերի տրամադրման համար գրավային ապահովում չի պահանջվում, միայն իրավաբանական անձի (Անհատ ձեռնարկատեր) կամ ֆիզիկական անձի երաշխավոր, եթե բավարարում է Բանկի վարկավորման պայմաններին[cite: 31]:
              </p>
            </div>

            {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex space-x-3 pb-2">
                <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">առանց գրավի մինչև</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">10 մլն. ֏</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Սահմանաչափ (ներառյալ)</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">9.5%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույքը ՎԵԷԿ դեպքում (փաստացի՝ մինչև 10%)</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">10.25%</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույքը ԷԱՆ դեպքում (փաստացի՝ մինչև 10.75%)</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">120 ամիս</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Մարման ժամկետ ՎԵԷԿ դեպքում</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">60 ամիս</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Մարման ժամկետ ԷԱՆ դեպքում</span>
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
                    <td className="p-4 font-semibold text-gray-900 w-1/3 align-top">Վարկատեսակ</td>
                    <td className="p-4 align-top">Առևտրային վարկ, լիզինգ</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">2.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Նպատակային ուղղություն</td>
                    <td className="p-4 align-top space-y-1">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Վերականգնվող էներգիայի հիմի վրա էլեկտրակայանների կառուցում/վերակառուցում/ընդլայնում՝ ՎԵԷԿ,</li>
                        <li>Էներգաարդյունավետ/էներգախնայող ներդրումների իրականացում՝ ԷԱՆ.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">3.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Արժույթ</td>
                    <td className="p-4 align-top">ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">4.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկառու</td>
                    <td className="p-4 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">5.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Նպատակ</td>
                    <td className="p-4 align-top space-y-1">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Հիմնական միջոցների ձեռքբերում/կապիտալ ներդրում,</li>
                        <li>Շրջանառու միջոցների համալրում,</li>
                        <li>Այլ ներդրումներ, որոնք համապատասխանում են ծրագրի պահանջներին.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">6.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Մարման ժամկետը</td>
                    <td className="p-4 align-top space-y-1">
                      <p>• Մինչև 120 ամիս՝ ՎԵԷԿ դեպքում</p>
                      <p>• Մինչև 60 ամիս՝ ԷԱՆ դեպքում</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">7.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի/լիզինգի մայր գումարի արտոնյալ ժամանակահատված (ոչ պարտադիր)</td>
                    <td className="p-4 align-top">Մինչև 6 ամիս</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">8.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Տարեկան անվանական տոկոսադրույքը</td>
                    <td className="p-4 align-top space-y-2">
                      <p>• ՎԵԷԿ դեպքում՝ <strong>9% - 9.5%</strong> (ընդ որում՝ ՎԵԷԿ ՖՎ-150 վարկի/լիզինգի դեպքում՝ 9.5%, մնացած ՎԵԷԿ դեպքերում՝ 9%)</p>
                      <p>• ԷԱՆ դեպքում՝ <strong>10.25% - 10.50%</strong></p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">9.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Տարեկան փաստացի տոկոսադրույք</td>
                    <td className="p-4 align-top space-y-1">
                      <p>• Մինչև 10%՝ ՎԵԷԿ դեպքում</p>
                      <p>• Մինչև 10.75%՝ ԷԱՆ դեպքում</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">10.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի/լիզինգի տրամադրման եղանակ</td>
                    <td className="p-4 align-top space-y-2">
                      <p>• ՎԵԷԿ դեպքում՝ միանվագ կամ փուլային (փուլային տրամադրման դեպքում վերջին փուլի տրամադրման ենթակա գումարը չի կարող գերազանցել վարկի պայմանագրային գումարի 20%-ը՝ համաձայն Ծրագրի պահանջների)</p>
                      <p>• ԷԱՆ դեպքում՝ միանվագ</p>
                      <p className="text-xs text-gray-500">Վարկի յուրաքանչյուր մասնաբաժնի տրամադրումն իրականացվում է անկանխիկ՝ Վարկառուի բանկային հաշվին: Լիզինգի դեպքում՝ մասնաբաժնի տրամադրումը մատակարարի հաշվին:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">11.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի/լիզինգի օգտագործման եղանակ</td>
                    <td className="p-4 align-top">Վարկի դեպքում՝ անկանխիկ/կանխիկ, լիզինգի դեպքում՝ միայն անկանխիկ</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">12.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Մարման եղանակ</td>
                    <td className="p-4 align-top">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Անուիտետային</li>
                        <li>Զսպանակաձև</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">13.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ուրվագծային/ոլորտային սահմանափակումներ</td>
                    <td className="p-4 align-top text-xs text-purple-700 underline">
                      <a href="https://www.ifc.org/en/what-we-do/sector-expertise/sustainability/ifc-exclusion-list-2007" target="_blank" rel="noreferrer">IFC Exclusion List 2007</a>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">14.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Գրավ</td>
                    <td className="p-4 align-top space-y-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Անշարժ և շարժական գույք,</li>
                        <li>Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ,</li>
                        <li>Ոսկու ստանդարտացված ձուլակտորներ կամ զարդեր,</li>
                        <li>Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր.</li>
                      </ul>
                      <p className="text-xs text-gray-500"><strong>Լրացուցիչ պայման՝</strong> Բիզնեսի հիմնադիրների/իրական շահառուների անձնական երաշխավորությունների առկայությունը պարտադիր է:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">15.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկ/գրավ ընդունելի սահմանաչափերը</td>
                    <td className="p-4 align-top space-y-1 text-xs">
                      <p>• Անշարժ գույք և հիմնական միջոցներ՝ մինչև 70%</p>
                      <p>• Պետական պարտատոմսեր՝ մինչև 95%</p>
                      <p>• Այլ արժեթղթեր՝ մինչև 70%</p>
                      <p>• Ոսկի և թանկարժեք մետաղներ՝ մինչև 95%</p>
                      <p>• Դրամական միջոցներ՝ մինչև 90%</p>
                      <p>• Շրջանառու միջոցներ՝ մինչև 50%</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">16.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ապահովում</td>
                    <td className="p-4 align-top space-y-1">
                      <p><strong>Վարկի դեպքում՝</strong> իրավաբանական կամ ֆիզիկական անձի երաշխավորություն մինչև 10 մլն ՀՀ դրամ վարկերի դեպքում, գրավ՝ 10,000,001 և ավել վարկերի դեպքում:</p>
                      <p><strong>Լիզինգի դեպքում՝</strong> լիզինգի առարկայից բացի ապահովություն կարող է լինել իրավաբանական, ֆիզիկական անձի երաշխավորություն կամ այլ գրավ:</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">17.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Երաշխավոր</td>
                    <td className="p-4 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ (ներառյալ անհատ ձեռնարկատեր), ֆիզիկական անձ</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">18.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Երաշխավորի գործունեության նկատմամբ պահանջ</td>
                    <td className="p-4 align-top">Իրավաբանական անձի դեպքում՝ նվազագույնը 6 ամիս գրանցված բիզնես գործունեություն, ֆիզ. անձի դեպքում՝ կայուն եկամտի աղբյուրներ.</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">19.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Երաշխավորի վարկային պատմության նկատմամբ պահանջ</td>
                    <td className="p-4 align-top">Դրական վարկային պատմություն (ուշացումների և հարցումների օրերի սահմանափակումներով).</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">20.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկառուի գործունեության և վարկային պատմության նկատմամբ պահանջ</td>
                    <td className="p-4 align-top space-y-1">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Նվազագույնը 6 ամիս գործունեություն,</li>
                        <li>Ժամկետանց պարտավորությունների բացակայություն,</li>
                        <li>Միայն երաշխավորությամբ տրամադրվող վարկերի դեպքում առանց ակնկալվող գրավի վարկերի քանակը չպետք է գերազանցի 1 հատը, և մնացորդների հանրագումարը չպետք է գերազանցի 10,000,000 ՀՀ դրամը.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">21.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Գանձվող վճարներ</td>
                    <td className="p-4 align-top space-y-1">
                      <p>• Հայտի ուսումնասիրման վճար՝ 0 ՀՀ դրամ</p>
                      <p>• Հաշվի սպասարկման վճար՝ 0 ՀՀ դրամ</p>
                      <p>• Կանխիկացման վճար՝ համաձայն Բանկի գործող սակագների</p>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">22.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ապահովագրություն</td>
                    <td className="p-4 align-top">Վարկերի դեպքում՝ ըստ անհրաժեշտության, լիզինգի դեպքում՝ համաձայն Բանկի դիրքորոշման.</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">23.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Վարկի/լիզինգի գումարը ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
                    <td className="p-4 align-top">Տուգանք չի կիրառվում</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">24.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ժամկետանց պարտավորությունների մարման տույժեր</td>
                    <td className="p-4 align-top">Մայր գումարի համար՝ օրական 0.015%, տոկոսագումարի համար՝ օրական 0.1%.</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">25.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Պետական տուրքեր և այլ ծախսեր</td>
                    <td className="p-4 align-top">ՀՀ պետական մարմիններում վճարվող տուրքեր և գնահատման ծառայության վճարներ՝ համաձայն ընկերությունների սակագների.</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">26.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Այլ դրույթներ</td>
                    <td className="p-4 align-top">Վարկային հայտերը ենթակա են մերժման, եթե չեն բավարարում Ծրագրի պահանջներին.</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-purple-50/30">
                    <td className="p-4 font-bold text-gray-900 text-center align-top">27.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Ֆինանսական վերլուծություն</td>
                    <td className="p-4 align-top">Իրականացվում է նվազագույնը նախորդ 6 ամիսների գործունեության հիման վրա.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 text-center align-top">28.</td>
                    <td className="p-4 font-semibold text-gray-900 align-top">Գումարի օգտագործման փաստաթղթավորում</td>
                    <td className="p-4 align-top">Վարկի/լիզինգի գումարի օգտագործումը պետք է լինի 100% փաստաթղթավորված.</td>
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