import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { Home, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle, Star } from 'lucide-react';

export default function UnallocatedMetalAccountsPage() {
  const navigate = useNavigate();
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Կարծիքների տվյալները նկարներից
  const reviews = [
    {
      text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
      author: "Սուսաննա Վանյան",
      role: "Հաճախորդ"
    },
    {
      text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման...",
      author: "Նունե Գևորգյան",
      role: "Հաճախորդ"
    },
    {
      text: (
        <>
          Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ <span className="text-purple-600 font-bold">Evocabank</span>-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի...
        </>
      ),
      author: "Արամ Ազարյան",
      role: "Indigo Branding-ի հիմնադիր"
    },
    {
      text: "Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:",
      author: "Էլեն Վարդանյան",
      role: "Հաճախորդ"
    },
    {
      text: (
        <>
          Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: <span className="text-purple-600 font-bold">Evocabank</span>-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...
        </>
      ),
      author: "Կամո Թովմասյան",
      role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
    }
  ];

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
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button 
                onClick={() => handleNavigation('/hy/business-account-opening-and-services')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
               Հաշիվների բացում և սպասարկում
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-unallocated-metal-accounts')} 
                className="text-white hover:text-purple-200 transition-colors bg-transparent border-none cursor-pointer font-semibold"
              >
                Առարկայազուրկ մետաղական հաշիվներ
              </button>
            </nav>
          </div>
        </div>

        {/* BREADCRUMBS ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
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

          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Բիզնես</button>
            <span>›</span>
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Հաշիվներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
          </div>

          {/* Վերնագիր և Նկար (Grid բաժանում) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Առարկայազուրկ մետաղական հաշիվներ
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16154599304948/780x585.jpg" 
                alt="Առարկայազուրկ մետաղական հաշիվներ" 
                className="w-full max-w-lg rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>

          {/* ՍՈՎՈՐԱԿԱՆ ՏԵՔՍՏԱՅԻՆ ԲԱԺԻՆ */}
          <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-16">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide border-b border-purple-100 pb-4">
              Հիմնական պայմաններ
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի[cite: 16]: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու գնանշումը կատարվում է դրամով)[cite: 16]: Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից[cite: 16]:
                </li>

                <li>
                  Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով՝ ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի)[cite: 16]:
                </li>

                <li>
                  Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի Նորմատիվ ակտերով, որոշումներով, մեր Ներքին իրավական ակտերով[cite: 16]:
                </li>

                <li>
                  Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ[cite: 16]: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ{' '}
                  <a href="#rates" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
                    այստեղ
                  </a>[cite: 16]:
                </li>

                <li>
                  Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝[cite: 16]
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong className="text-gray-900">հաշվի համալրում՝</strong> բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով[cite: 16],
                    </li>
                    <li>
                      <strong className="text-gray-900">հաշվի ելքագրում՝</strong> հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով[cite: 16]:
                    </li>
                  </ul>
                </li>

                <li>
                  Մետաղական հաշիվները կարող են գրավադրվել[cite: 16]:
                </li>

                <li>
                  <strong className="text-gray-900 text-lg block mb-2">Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</strong>[cite: 16]
                  
                  {/* Իրավաբանական անձանց դեպքում */}
                  <div className="mt-4 space-y-3 bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                    <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                      Իրավաբանական անձանց դեպքում՝
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                      <li>Դիմում՝ մեր ձևանմուշի համաձայն[cite: 17]։</li>
                      <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ փոխարինող այլ փաստաթուղթ)[cite: 17]:</li>
                      <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի գրանցող պետական մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ)[cite: 17]:</li>
                      <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում[cite: 17]:</li>
                      <li>Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի ղեկավար/ների, անձնագիր/ները և իրավասու մարմնի կողմից պաշտոնների նշանակման վերաբերյալ որոշումները)[cite: 17]:</li>
                      <li>Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը[cite: 17]:</li>
                      <li>
                        Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ են՝[cite: 17]
                        <ul className="list-disc pl-6 space-y-1 mt-1 text-xs sm:text-sm">
                          <li>եթե իրական շահառուն ֆիզիկական անձ է, ապա անձնագրի կամ նույնականացման քարտի պատճենները[cite: 17]:</li>
                          <li>եթե իրական շահառուն իրավաբանական անձ է, ապա տվյալ իրավաբանական անձի այս տեղեկատվության 2-րդ, 3-րդ և 4-րդ կետերով պահանջվող փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ կետերով պահանջվող փաստաթղթերի) պատճենները[cite: 17]:</li>
                        </ul>
                      </li>
                      <li>Մեր պահանջով այլ փաստաթղթեր[cite: 17]:</li>
                    </ul>
                  </div>

                  {/* Անհատ ձեռնարկատերերի դեպքում */}
                  <div className="mt-6 space-y-3 bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                    <h3 className="font-bold text-purple-800 text-base sm:text-lg">
                      Անհատ ձեռնարկատերերի դեպքում՝
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                      <li>Դիմում՝ մեր ձևանմուշի համաձայն[cite: 17]։</li>
                      <li>Անձնագիր կամ նույնականացման քարտ[cite: 17]:</li>
                      <li>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝ քաղվածք պետական ռեգիստրից)[cite: 17]:</li>
                      <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում[cite: 17]:</li>
                      <li>Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ ձեռնարկատերի դեպքում, ստորագրության և նմուշի քարտում կատարվում է համապատասխան գրառում՝ կնիքի բացակայության վերաբերյալ[cite: 17]:</li>
                      <li>Մեր պահանջով այլ փաստաթղթեր[cite: 17]:</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        {/* ԿԱՐԾԻՔՆԵՐԻ ՍԼԱՅԴԵՐ (TESTIMONIALS SWIPER) */}
          <div className="bg-purple-50/40 py-12 px-4 rounded-3xl relative overflow-hidden my-12">
            
            {/* Ձախ կողմի դեկորատիվ նկարները (ձեռք + զիգզագ) */}
            <div className="hidden lg:flex flex-col items-center absolute left-12 top-1/2 -translate-y-1/2 pointer-events-none z-10 space-y-6">
              <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Hand 1" className="w-16 h-auto" />
              <img src="https://www.evoca.am/img/reviews/z-purple.png" alt="Zigzag Purple" className="w-6 h-auto ml-4" />
            </div>

            {/* Աջ կողմի դեկորատիվ նկարները (ձեռք + զիգզագ) */}
            <div className="hidden lg:flex flex-col items-center absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none z-10 space-y-6">
              <img src="https://www.evoca.am/img/reviews/hand2.png" alt="Hand 2" className="w-16 h-auto" />
              <img src="https://www.evoca.am/img/reviews/z-violet.png" alt="Zigzag Violet" className="w-12 h-auto mr-4" />
            </div>

            <div className="max-w-3xl mx-auto px-4 relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="pb-16 custom-swiper-pagination"
              >
                {reviews.map((review, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* 5 Աստղեր */}
                      <div className="flex space-x-1 text-amber-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>

                      {/* Տեքստը չակերտներով */}
                      <div className="relative max-w-2xl px-8">
                        <span className="text-purple-600 font-serif text-3xl font-bold absolute left-0 top-0">“</span>
                        <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                          {review.text}
                        </p>
                        <span className="text-purple-600 font-serif text-3xl font-bold absolute right-0 bottom-0">”</span>
                      </div>

                      {/* Հեղինակի անունն ու կարգավիճակը */}
                      <div className="pt-2">
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                          {review.author}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </main>
      </div>

      {/* ՖՈՒԹԵՐ (FOOTER) */}
      <Footer />
    </div>
  );
}