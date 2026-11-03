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
               Խոշոր և ՓՄՁ բիզնես վարկ
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Զարգացրե'ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:
              </p>
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16148637167782/560x400.png" 
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
            <span className="text-gray-800 font-medium shrink-0">Խոշոր և ՓՄՁ բիզնես վարկ</span>
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
    Պայմաններ և սակագներ
  </button>
  <button
    onClick={() => setActiveTab('documents')}
    className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
      activeTab === 'documents'
        ? 'border-purple-600 text-purple-700'
        : 'border-transparent text-gray-500 hover:text-gray-800'
    }`}
  >
    Պահանջվող փաստաթղթեր
  </button>
</div>

     {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Evocabank-ը առաջարկում է <strong className="text-purple-700">Բիզնես վարկեր</strong> Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար՝ բիզնեսի զարգացման, կապիտալ ներդրումների իրականացման, շրջանառու կապիտալի համալրման և այլ նպատակներով:
              </p>
              
              <p>
                <strong className="text-purple-700">Վարկի</strong> համար կարող են դիմել արդյունաբերության, շինարարության, առևտրի, տրանսպորտի և կապի, գյուղատնտեսության և այլ ոլորտներում գործունեություն ծավալող կազմակերպությունները: Վարկերը կարող են տրամադրվել միանվագ կամ փուլային եղանակով, ինչպես նաև, կախված գործունեության ոլորտից, կարող են ունենալ մարման արտոնյալ ժամանակաշրջան:
              </p>

              <p className="text-sm text-gray-500 pt-2">
                Վարկերը/վարկային գծերը կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ՝ «Երևան Մոլ», «Հանրապետության» «Էրեբունի» մասնաճյուղերի):
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                  <span className="text-3xl font-extrabold text-purple-700">4 մլրդ ֏</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">Կամ համարժեք արտարժույթ</span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
                  <span className="text-3xl font-extrabold text-purple-700">180</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">ամիս</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">սկսած</p>
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">8.2%-ից</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-700 font-medium text-base">տոկոսադրույք</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'conditions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Վարկավորման մանրամասն պայմաններ</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 border-collapse border border-purple-100 rounded-2xl overflow-hidden">
                  <tbody>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 w-12 text-center align-top">1.</td>
                      <td className="p-4 font-semibold text-gray-900 w-1/3 align-top">Արժույթ</td>
                      <td className="p-4 align-top">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո[cite: 16]</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">2.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Վարկառու</td>
                      <td className="p-4 align-top">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր*[cite: 16]</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">3.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Նպատակ</td>
                      <td className="p-4 align-top space-y-2">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Հիմնական միջոցների ձեռքբերում/կապիտալ ներդրումների իրականացում[cite: 16],</li>
                          <li>Նախագծերի ֆինանսավորում[cite: 16],</li>
                          <li>Շրջանառու միջոցների համալրում[cite: 16],</li>
                          <li>Ընթացիկ ծախսերի ֆինանսավորում, կրեդիտորական պարտքի մարում[cite: 16],</li>
                          <li>Այլ ֆինանսական կազմակերպություններում և/կամ «Էվոկաբանկ» ՓԲԸ-ում գործող վարկերի վերաֆինանսավորում[cite: 16],</li>
                          <li>Այլ նպատակներ[cite: 16]:</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">4.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Սահմանաչափ</td>
                      <td className="p-4 align-top">10,000,000-4,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 16]</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">5.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Տրամադրման եղանակ</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• Անկանխիկ[cite: 16]</p>
                        <p>• Վարկերը կարող են տրամադրվել միանվագ կամ փուլերով[cite: 16]</p>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">6.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Մարման ժամկետ</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• Մինչև 120 ամիս՝ հաստատուն տոկոսադրույքի դեպքում[cite: 16],</p>
                        <p>• Մինչև 180 ամիս՝ լողացող տոկոսադրույքի դեպքում**:[cite: 16]</p>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">7.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Մարման եղանակը</td>
                      <td className="p-4 align-top space-y-2">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>«Անուիտետային»[cite: 16]</li>
                          <li>«Զսպանակաձև»[cite: 16]</li>
                          <li>Անհատական՝ կախված հաճախորդի գործունեության տեսակի առանձնահատկությունից[cite: 16]:</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">8.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Արտոնյալ ժամանակահատված</td>
                      <td className="p-4 align-top">Սահմանվում է բիզնեսի առանձնահատկություններից ելնելով[cite: 16, 17]</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">9.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Տարեկան անվանական տոկոսադրույք*</td>
                      <td className="p-4 align-top">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border border-purple-200 mt-2">
                            <thead>
                              <tr className="bg-purple-100">
                                <th className="p-2 border-b">Արժույթ</th>
                                <th className="p-2 border-b">Հաստատուն</th>
                                <th className="p-2 border-b">Լողացող</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border-b">ՀՀ դրամ</td>
                                <td className="p-2 border-b">Սկսած՝ 12.25%-ից[cite: 17]</td>
                                <td className="p-2 border-b">Սկսած՝ 11.5%-ից (սկսած՝ 4.78% + փոփոխուն բաղադրիչ)[cite: 17]</td>
                              </tr>
                              <tr>
                                <td className="p-2 border-b">ԱՄՆ դոլար</td>
                                <td className="p-2 border-b">Սկսած՝ 8.5%-ից[cite: 17]</td>
                                <td className="p-2 border-b">Սկսած՝ 8.4%-ից (սկսած՝ 4.69% + փոփոխուն բաղադրիչ)[cite: 17]</td>
                              </tr>
                              <tr>
                                <td className="p-2">Եվրո</td>
                                <td className="p-2">Սկսած՝ 8.2%-ից[cite: 17]</td>
                                <td className="p-2">Սկսած՝ 8.2%-ից (սկսած՝ 5.65% + փոփոխուն բաղադրիչ)[cite: 17]</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">10.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Ժամկետանց տույժեր</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• Մայր գումարի ուշացման դեպքում՝ օրական 0.015%[cite: 17]</p>
                        <p>• Տոկոսագումարի ուշացման դեպքում՝ օրական 0.1%[cite: 17]</p>
                      </td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">11.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Ժամկետից շուտ մարելու տուգանք</td>
                      <td className="p-4 align-top">Մինչև պայմանագրի կեսը ժամանակացույցից ավել մարելիս՝ գերազանցող գումարի 5%-ի չափով[cite: 17]</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">12.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Ապահովում</td>
                      <td className="p-4 align-top">Գրավ և/կամ երաշխավորություն[cite: 17]</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">13.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Երաշխավոր</td>
                      <td className="p-4 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ (ըստ անհրաժեշտության)[cite: 17]</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">14.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Տրամադրման միանվագ վճար</td>
                      <td className="p-4 align-top">0.5%, սակայն առավելագույնը 100,000 ՀՀ դրամ[cite: 17]</td>
                    </tr>
                    <tr className="border-b border-purple-100 bg-purple-50/30">
                      <td className="p-4 font-bold text-gray-900 text-center align-top">15.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Վարկի օգտագործում</td>
                      <td className="p-4 align-top">Համաձայն Բանկային հաշվի սպասարկման պայմանների և սակագների[cite: 17]</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-900 text-center align-top">16.</td>
                      <td className="p-4 font-semibold text-gray-900 align-top">Այլ ծախսեր</td>
                      <td className="p-4 align-top space-y-1">
                        <p>• Պետ. իրավասու մարմիններում գրավի գրանցման վճար[cite: 17]</p>
                        <p>• Նոտարական ծառայությունների վճար[cite: 17]</p>
                        <p>• Գրավադրվող արժեքների գնահատման վճար[cite: 17]</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-gray-500 space-y-1 pt-2 border-t border-gray-100">
                <p>* Անհատ ձեռնարկատեր հանդիսացող ֆիզիկական անձի տարիքը վարկի սպասարկման ամբողջ ընթացքում չպետք է գերազանցի 70 տարեկանը[cite: 17]:</p>
                <p>** 120 ամիսը գերազանցող ժամկետով ֆինանսավորում կարող է տրամադրվել միայն հիմնական միջոցների ձեռքբերման, կառուցապատման կամ նախագծերի ֆինանսավորման նպատակով[cite: 17]:</p>
              </div>
            </div>
            {/* Անհրաժեշտ տեղեկատվություն և գրավի սահմանաչափեր */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Անհրաժեշտ տեղեկատվություն</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Ձեզ հետ փոխհարաբերությունները կարգավորվում են վարկային պայմանագրով՝ ՀՀ օրենսդրական ակտերին համապատասխան[cite: 20]:</li>
                <li>Վարկավորման տոկոսադրույքները, ժամկետները, սահմանաչափերը, պայմանները և սկզբունքները սահմանվում են «Վարկային քաղաքականությամբ» և վարկավորման գործընթացը կարգավորող ներքին այլ իրավական ակտերով[cite: 20]:</li>
                <li>Ծրագրային վարկավորման գործընթացներում ընդգրկվելու դեպքում, վարկային միջոցները տրամադրում ենք տվյալ Ծրագրի վարկավորման պայմաններով (տոկոսադրույքներ, սահմանաչափեր, մարման ժամկետ, գրավ/վարկ հարաբերակցություն և այլն)[cite: 20].</li>
              </ul>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li><strong>Անշարժ գույքի և այլ հիմնական միջոցների դեպքում՝</strong> գնահատված շուկայական արժեքի մինչև 70%-ի չափով[cite: 20]:</li>
                <li><strong>Պետական կարճաժամկետ պարտատոմսերի դեպքում՝</strong> անվանական արժեքի մինչև 95%-ի չափով[cite: 20]:</li>
                <li><strong>Այլ արժեթղթերի դեպքում՝</strong> գնահատված արժեքի մինչև 70%-ի չափով[cite: 20]:</li>
                <li><strong>Ոսկու ստանդարտացված ձուլակտորների և թանկարժեք մետաղների զարդերի դիմաց՝</strong> գնահատված արժեքի մինչև 95%-ի չափով[cite: 20]:</li>
                <li><strong>Թանկարժեք և կիսաթանկարժեք քարերի դիմաց՝</strong> գնահատված արժեքի մինչև 50%-ի չափով[cite: 20]:</li>
                <li><strong>Դրամական միջոցների (ավանդային և ընթացիկ հաշվի) դեպքում՝</strong> մինչև 90%-ի չափով[cite: 20]:</li>
                <li><strong>Շրջանառու միջոցների դեպքում՝</strong> գնահատված արժեքի մինչև 50%-ի չափով[cite: 20]:</li>
                <li><strong>Դրամական հոսքերով ապահովված վարկեր՝</strong> տրամադրում ենք առնվազն 1 տարվա մեր հաճախորդներին՝ մեզ մոտ ունեցած ընթացիկ հաշվով կատարված տարեկան շարժի մինչև 30%-ի չափով (մինչև 180 օր մարման ժամկետով)[cite: 20]:</li>
              </ul>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Որոշումների կայացման և վարկերի տրամադրման ժամկետները</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Որոշումը կայացնում ենք անհրաժեշտ փաստաթղթերը մեզ ներկայացնելուց հետո 10 (տասը) բանկային օրվա ընթացքում[cite: 20].</li>
                <li>Վարկի դիմումի վերաբերյալ որոշման արդյունքների մասին ձեզ տեղեկացնում ենք 1 (մեկ) բանկային օրվա ընթացքում՝ բանավոր կամ ձեր ցանկության դեպքում՝ նաև գրավոր[cite: 20].</li>
                <li>Վարկը տրամադրում ենք գույքի գրավադրման գործընթացն ավարտելուց հետո՝ 5 (հինգ) բանկային օրվա ընթացքում (պահանջվող փաստաթղթերի ամբողջական փաթեթի կազմման պարագայում)[cite: 20].</li>
              </ul>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Վարկի վերաբերյալ որոշման կայացման չափանիշները</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Դրական որոշման կայացման չափանիշները՝</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ձեր վարկունակության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված գնահատման չափանիշների[cite: 21].</li>
                  <li>Մեզ ներկայացված տվյալների և փաստաթղթերի արժանահավատությունը[cite: 21].</li>
                  <li>Ձեր պատասխանատվության և պարտաճանաչության դրական գնահատումը՝ ըստ ձեր վարկային պատմության ուսումնասիրության և վերլուծության[cite: 21].</li>
                  <li>Գրավի իրացվելիության բավարար մակարդակը՝ ըստ մեր իրավական ակտերով սահմանված չափանիշների և «գրավ/վարկ» հարաբերակցության ընունելի սահմանաչափերի[cite: 21].</li>
                  <li>Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի հիմնավոր լինելը[cite: 21].</li>
                </ul>

                <p className="pt-2"><strong>Մերժման չափանիշները՝</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ձեր վարկունակության ոչ բավարար մակարդակի գնահատումը[cite: 21].</li>
                  <li>Մեզ ներկայացված տվյալների և փաստաթղթերի անարժանահավատությունը[cite: 21].</li>
                  <li>Վարկի օգտագործման նպատակների կամ գործարար ծրագրերի շահութաբերության թերհիմնավորումը[cite: 21].</li>
                  <li>Այլ հիմնավոր պատճառներ, որոնք կարող են ազդել տրամադրվող վարկի վերադարձելիության վրա[cite: 21].</li>
                </ul>
              </div>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Վարկերի մարման, տոկոսների հաշվեգրման և վճարման կարգը</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Վարկերը մարում եք գրաֆիկի համաձայն, հետևյալ երկու եղանակներից մեկով՝ ըստ ձեր ցանկության[cite: 21]՝
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><strong>«Անուիտետային»</strong> (հավասարաչափ ամսական մարում), որը փոփոխական մասերով ներառում է մայր գումարը և կուտակված տոկոսները[cite: 21].</li>
                    <li><strong>«Զսպանակաձև»</strong> (փոփոխական ամսական մարում), որը ներառում է մայր գումարի մարումը՝ հավասար, իսկ կուտակված տոկոսները՝ փոփոխական չափով[cite: 21].</li>
                  </ul>
                </li>
                <li>Վարկերի տոկոսագումարները հաշվում ենք գումարի փաստացի մնացորդի նկատմամբ՝ վարկի տրամադրման օրվանից մինչև ձեր կողմից մեր հանդեպ ստանձնած պարտավորությունների կատարման նախորդ օրն ընկած ժամանակաշրջանի համար[cite: 21].</li>
                <li>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրվա համար[cite: 21].</li>
                <li>Վճարումները կարող են իրականացվել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի»-ի)[cite: 21].</li>
              </ul>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Վարկային գծերի տրամադրումը</h4>
              <p className="text-sm text-gray-700">Վարկային գծեր տրամադրում ենք ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձանց բիզնես վարկերի համար սահմանված տոկոսադրույքներով, մինչև 5 տարի մարման ժամկետով, դրամով կամ արտարժույթով[cite: 22]:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mt-2">
                <li><strong>Վարկային գիծ վերականգնվող՝</strong> որի դեպքում կարող եք հաստատված վարկային գծի սահմանաչափում և գործելու ժամանակահատվածում պարբերաբար մարումներ կատարել և մնացորդի սահմաններում միջոցներ ստանալ վարկային գծից[cite: 22]: Ընդ որում՝ վարկային գծի չօգտագործված մասի վրա սահմանվում է 0-4% տարեկան տոկոսադրույք[cite: 22]:</li>
                <li><strong>Ուղղակի վարկային գիծ՝</strong> որի դեպքում վարկային գիծը տրամադրում ենք մաս-մաս, և կատարված մարումներից հետո վարկային գծի սահմանաչափը չի վերականգնվում, ընդ որում՝ չօգտագործված մասի վրա տոկոսների հաշվարկ չենք կատարում[cite: 22]:</li>
              </ul>

              <h4 className="text-lg font-bold text-purple-900 pt-4">Վաղաժամկետ մարման պայմանները</h4>
              <p className="text-sm text-gray-700">Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարկի մայր գումարի չափից ավելին մարելու դեպքում վճարում եք տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական վարկի գումարի չափը գերազանցող գումարի 5%-ի չափով[cite: 22].</p>

              <h4 className="text-lg font-bold text-purple-900 pt-4 text-red-600">Զգուշացում</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով բռնագանձվել,իսկ ձեր մասին տեղեկատվությունը կգրանցվի Վարկային ռեգիստրում (ինչը հետագայում կարող է խոչընդոտել նոր վարկերի ստացումը)[cite: 22]:</li>
                <li>Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկառուի վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա մենք (գործող օրենսդրության համաձայն) հնարավորություն ունենք կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքի հաշվին (առկայության դեպքում)[cite: 22]:</li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'documents' && (
          <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-purple-900 mb-6">Պահանջվող փաստաթղթեր և տեղեկատվություն</h3>
            
            <div className="space-y-4">
              {/* Փաստաթուղթ 1 */}
              <a 
                href="#download" 
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between p-5 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    📄↓
                  </div>
                  <span className="font-semibold text-gray-900 text-base sm:text-lg">
                    Վարկավորման նպատակով հաճախորդներից պահանջվող փաստաթղթերի և տվյալների ցանկ[cite: 23]
                  </span>
                </div>
                <span className="text-purple-700 font-bold text-xl group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </a>

              {/* Փաստաթուղթ 2 */}
              <a 
                href="#download" 
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between p-5 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    📄↓
                  </div>
                  <span className="font-semibold text-gray-900 text-base sm:text-lg">
                    Գնահատող ընկերությունների ցանկ[cite: 23]
                  </span>
                </div>
                <span className="text-purple-700 font-bold text-xl group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </a>

              {/* Փաստաթուղթ 3 */}
              <a 
                href="#download" 
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between p-5 bg-purple-50/40 hover:bg-purple-50 border border-purple-100 rounded-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    📄↓
                  </div>
                  <span className="font-semibold text-gray-900 text-base sm:text-lg">
                    Կարևոր տեղեկատվություն[cite: 23]
                  </span>
                </div>
                <span className="text-purple-700 font-bold text-xl group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </a>
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