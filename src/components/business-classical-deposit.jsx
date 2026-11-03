import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/pagination';
import { Home, Globe, Search, Menu, ChevronDown, MapPin, HelpCircle, Star } from 'lucide-react';

export default function UnallocatedMetalAccountsPage() {
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
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button 
                onClick={() => handleNavigation('/hy/business-classical-deposit')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
               Դասական ավանդ
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
            <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Ավանդներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Դասական ավանդ</span>
          </div>

          {/* Վերնագիր և Նկար (Grid բաժանում) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
               Դասական ավանդ
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Դասական ավանդը կայուն բարձր եկամտաբերությամբ կավելացնի ձեր խնայողությունները: Դասական ժամկետային ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից: Ավանդ ներդնելիս ձեզ տրամադրում ենք անվճար միջազգային քարտ:
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
                alt="Առարկայազուրկ մետաղական հաշիվներ" 
                className="w-full max-w-lg rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
{/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԵՎ ԱՎԱՆԴԻ ՊԱՅՄԱՆՆԵՐ */}
          <div className="space-y-10">

            {/* 1. Անհրաժեշտ տեղեկատվություն */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide border-b border-purple-100 pb-4">
                Անհրաժեշտ տեղեկատվություն
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-4">
                Ընդհանուր տեղեկատվություն
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում՝ անհատ ձեռնարկատեր) և իրավաբանական անձ հաճախորդներից (ռեզիդենտ, ոչ ռեզիդենտ)՝
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        <strong className="text-gray-900">դրամով, դոլարով, եվրոյով և ռուբլով,</strong>
                      </li>
                      <li>
                        <strong className="text-gray-900">կանխիկ և անկանխիկ տարբերակով:</strong>
                      </li>
                    </ul>
                  </li>

                  <li>
                    Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և տոկոսադրույքներով:
                  </li>

                  <li>
                    Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական ակտերով:
                  </li>

                  <li>
                    Մենք, օրենսդրական ակտերի համաձայն, ապահովում ենք ավանդի ներդրման և դրա հետ կապված այլ գործառնությունների գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին» օրենքով սահմանված դեպքերում և ընթացակարգով:
                  </li>
                </ul>

                {/* Ուշադրություն բլոկ */}
                <div className="bg-purple-50/60 p-4 rounded-xl border-l-4 border-purple-700 my-4">
                  <p className="text-sm sm:text-base text-gray-800">
                    <strong className="text-purple-900">Ուշադրություն.</strong> Մեր կողմից պարբերաբար անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր համակարգում ավանդների ներգրավման ընդհանուր պայմաններից և գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում ներգրավված ավանդների նկատմամբ:
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-purple-800 pt-4 mb-4">
                  Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը
                </h3>

                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ՝ օրական կտրվածքով, պարզ եղանակով, ավանդային պայմանագրի ամբողջ ժամկետի համար: Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար՝ 1/366 հարաբերակցությամբ:
                  </li>

                  <li>
                    Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից մինչև այն վերադարձնելու կամ ավանդային հաշվից այլ հիմքերով դուրս գրելու օրվան նախորդող օրն ընկած ժամանակահատվածի օրացույցային օրերի համար:
                  </li>

                  <li>
                    Ավանդների դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ և անկանխիկ եղանակով՝ ավանդատուի ցանկությամբ տոկոսագումարները կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի փոխարժեքը:
                  </li>

                  <li>
                    Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ տարբերակներով՝
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        <strong className="text-gray-900">Տոկոսագումարների պարբերական վճարումով,</strong> որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները ձեզ վճարում ենք երկկողմանի համաձայնեցված ժամանակացույցով, կամ՝
                      </li>
                      <li>
                        <strong className="text-gray-900">Տոկոսագումարների վճարմամբ՝</strong> պայմանագրի ժամկետի վերջում, որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարում ենք պայմանագրի գործողության ավարտին (վերադարձնում ենք ավանդի գումարի հետ միասին):
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* Ուշադրություն (Տոկոսային եկամտաբերություն) */}
                <div className="bg-purple-50/60 p-4 rounded-xl border-l-4 border-purple-700 my-4">
                  <p className="text-sm sm:text-base text-gray-800">
                    <strong className="text-purple-900">Ուշադրություն՝</strong><br />
                    Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՍՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերանդրéիք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02) կարող եք ծանոթանալ www.cba.am կայքում:
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-purple-800 pt-4 mb-4">
                  Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն
                </h3>

                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:
                  </li>
                  <li>
                    Քաղվածքները ձեզ տրամադրում ենք գրավոր՝ փոստային կապի միջոցով, բացառությամբ այն դեպքի, երբ դուք գրավոր, այդ թվում` էլեկտրոնային դիմումի հիման վրա հրաժարվել եք հաշվի քաղվածքները փոստային կապի միջոցով ստանալու իրավունքից` դրանք էլեկտրոնային կամ կապի այլ միջոցներով, կամ մեր տարածքում առձեռն ստանալու պայմանով: Հաշվի քաղվածքների տրամադրման եղանակն ամրագրվում է Ավանդային պայմանագրով:
                  </li>
                  <li>
                    Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ տեղեկատվության (հաշվի վերաբերյալ տեղեկանքներ) տրամադրման դիմաց ձեզանից գանձվում է միջնորդավճար` ըստ մեր սակագների, որոնք ներկայացված են Ընթացիկ հաշիվներ բաժնում:
                  </li>
                </ul>

                <h3 className="text-lg sm:text-xl font-bold text-purple-800 pt-4 mb-4">
                  Այլ պայմաններ
                </h3>

                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել ժամկետային ավանդի գումարը կամ պայմանագրով նախատեսված հանգամանքները երևան գալուց հետո վերադարձնել այլ պայմաններով ներդրված ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է երկարաձգված ցպահանջ ավանդի պայմաններով, եթե այլ բան նախատեսված չէ պայմանագրով:
                  </li>
                  <li>
                    Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված ավանդի տոկոսագումարների չափը, որը դուք ներդրել եք որոշակի ժամկետի ավարտից կամ պայմանագրով նախատեսված հանգամանքները վրա հասնելուց հետո այն հետ ստանալու պայմանով, եթե այլ բան նախատեսված չէ օրենքով:
                  </li>
                  <li>
                    Օրենսդրությամբ սահմանված կարգով դուք իրավունք ունեք ավանդ ներդնել երրորդ անձանց անունով:
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Երաշխավորված ավանդների սահմանաչափերը */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide border-b border-purple-100 pb-4">
                Երաշխավորված ավանդների սահմանաչափերը
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը։ <strong className="text-purple-900">Եթե դուք անվճարունակ բանկում ունեք՝</strong>
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Միայն դրամային ավանդ, ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</li>
                  <li>Միայն արտարժութային ավանդ, ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</li>
                  <li>Դրամային ու արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</li>
                  <li>Դրամային ու արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 mt-4 border border-gray-100">
                  <strong className="text-gray-900">Ծանոթագրություն.</strong> Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում առավելագույն սահմանաչափով:
                </div>
              </div>
            </div>

            {/* 3. Պայմաններ և սակագներ */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide border-b border-purple-100 pb-4">
                Պայմաններ և սակագներ
              </h2>

              {/* Աղյուսակ 1 */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className=" text-white text-xs sm:text-sm">
                      <th className="p-3 rounded-tl-xl">Ներգրավվող գումարների սահմանաչափեր ըստ արժույթի</th>
                      <th className="p-3">91 - 180 օր</th>
                      <th className="p-3">181 - 365 օր</th>
                      <th className="p-3">366 - 545 օր</th>
                      <th className="p-3">546 - 730 օր</th>
                      <th className="p-3 rounded-tr-xl">731 - 1095 օր</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">200,000 - 25,000,000 ՀՀ դրամ</td>
                      <td className="p-3">6 %</td>
                      <td className="p-3">8 %</td>
                      <td className="p-3">9.5 %</td>
                      <td className="p-3">10 %</td>
                      <td className="p-3">10.5 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">500 - 50,000 ԱՄՆ դոլար</td>
                      <td className="p-3">2 %</td>
                      <td className="p-3">3 %</td>
                      <td className="p-3">4 %</td>
                      <td className="p-3">4.5 %</td>
                      <td className="p-3">5 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">500 - 40,000 եվրո</td>
                      <td className="p-3">1 %</td>
                      <td className="p-3">1.5 %</td>
                      <td className="p-3">2 %</td>
                      <td className="p-3">2.5 %</td>
                      <td className="p-3">3 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">30,000 - 3,000,000 ՌԴ ռուբլի</td>
                      <td className="p-3">5 %</td>
                      <td className="p-3">5.5 %</td>
                      <td className="p-3">6 %</td>
                      <td className="p-3">-</td>
                      <td className="p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-gray-700">
                <p>
                  1. Ավանդն ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
                </p>
                <p>
                  2. Տոկոսագումարների պարբերաբար (ամսեկան, եռամսյակային, կիսամյակային, տարեկան) վճարման դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք:
                </p>
                <p>
                  3. Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 200.000 ՀՀ դրամից, 500 ԱՄՆ դոլարից, 500 եվրոյից կամ 30,000 ՌԴ ռուբլուց: Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական գումարը: Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում:
                </p>
                <p>
                  4. Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով՝
                </p>
              </div>

              {/* Աղյուսակ 2 (Ժամկետից շուտ լուծման) */}
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className=" text-white text-xs sm:text-sm">
                      <th className="p-3 rounded-tl-xl">Ավանդի արժույթ</th>
                      <th className="p-3">Մինչև 365 օր</th>
                      <th className="p-3 rounded-tr-xl">366 - 1095 օր</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">ՀՀ դրամ</td>
                      <td className="p-3">0.5 %</td>
                      <td className="p-3">8.5 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">ԱՄՆ դոլար</td>
                      <td className="p-3">0.1 %</td>
                      <td className="p-3">3.5 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">Եվրո</td>
                      <td className="p-3">0.1 %</td>
                      <td className="p-3">1.5 %</td>
                    </tr>
                    <tr className="hover:bg-purple-50/50">
                      <td className="p-3 font-medium">ՌԴ ռուբլի</td>
                      <td className="p-3">0.1 %</td>
                      <td className="p-3">5 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-gray-700">
                5. Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:
              </p>
            </div>

            {/* 4. Լրացուցիչ պայմաններ */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide border-b border-purple-100 pb-4 text-purple-800">
                Լրացուցիչ պայմաններ
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 mb-6">
                <p>
                  1. Ավանդատուի ցանկության դեպքում, Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:
                </p>
                <p>
                  2. Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.
                </p>
              </div>

              {/* Աղյուսակ 3 (Քարտեր) */}
              <div className="mt-8">
                <div className="overflow-x-auto bg-white border border-purple-200 rounded-2xl p-6 shadow-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className=" text-white text-xs sm:text-sm">
                        <th className="p-3 rounded-tl-xl">Ավանդի արժույթ / Քարտի տեսակ</th>
                        <th className="p-3">Mastercard Standart / Visa Classic</th>
                        <th className="p-3">Mastercard Gold / Visa Gold</th>
                        <th className="p-3 rounded-tr-xl">VISA Infinite</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                      <tr className="hover:bg-purple-50/50">
                        <td className="p-3 font-medium">ՀՀ դրամ</td>
                        <td className="p-3">500,000 - 25,000,000</td>
                        <td className="p-3">25,000,001 - 50,000,000</td>
                        <td className="p-3">50,000,001 և ավել</td>
                      </tr>
                      <tr className="hover:bg-purple-50/50">
                        <td className="p-3 font-medium">ԱՄՆ դոլար</td>
                        <td className="p-3">1,000 - 50,000</td>
                        <td className="p-3">50,001 - 100,000</td>
                        <td className="p-3">100,001 և ավել</td>
                      </tr>
                      <tr className="hover:bg-purple-50/50">
                        <td className="p-3 font-medium">Եվրո</td>
                        <td className="p-3">1,000 - 40,000</td>
                        <td className="p-3">40,001 - 100,000</td>
                        <td className="p-3">100,001 և ավել</td>
                      </tr>
                      <tr className="hover:bg-purple-50/50">
                        <td className="p-3 font-medium">ՌԴ ռուբլի</td>
                        <td className="p-3">60,000 - 3,000,000</td>
                        <td className="p-3">3,000,001 - 7,000,000</td>
                        <td className="p-3">7,000,001 և ավել</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (FATCA Accordion) */}
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                <div className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300">
                  <button
                    onClick={() => toggleAccordion('fatca')}
                    className="w-full flex items-center p-5 text-left bg-transparent border-none cursor-pointer group space-x-3"
                  >
                    <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 shrink-0 ${openIndex === 'fatca' ? 'rotate-180' : ''}`} />
                    <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                      Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում
                    </span>
                  </button>

                  {openIndex === 'fatca' && (
                    <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 animate-fadeIn space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-gray-900">
                        Հարգելի Հաճախորդ,
                      </p>
                      <p>
                        «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ ձևաթղթերը՝{' '}
                        <a href="#fatca-legal" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
                          Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման ձև՝ Մոդել 2-ի համաձայն (FATCA)
                        </a>{' '}
                        կամ{' '}
                        <a href="#fatca-individual" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
                          Ֆիզիկական անձ (ներառյալ անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA նպատակների համար
                        </a>
                        :
                      </p>
                    </div>
                  )}
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