import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0">  Քարտեր</button>
              <button onClick={() => handleNavigation('/hy/cards-provision-and-service')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Քարտերի տրամադրում և սպասարկում</button>
              <button onClick={() => handleNavigation('/hy/pension-cards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Քարտեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Քարտեր</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Քարտեր</h1>

{/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <button
              onClick={() => handleNavigation('/cards')}
              className="px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer border-none bg-[#6400DC] text-white shadow-sm"
            >
              Բոլորը
            </button>
            
            <button
              onClick={() => handleNavigation('/cards/premium')}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Պրեմիում
            </button>

            <button
              onClick={() => handleNavigation('/cards/gift')}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Նվեր քարտեր
            </button>

            <button
              onClick={() => handleNavigation('/cards/digital')}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Թվային քարտեր
            </button>

            <button
              onClick={() => handleNavigation('/cards/arca')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
            >
              <span className="font-extrabold text-blue-600 tracking-tighter">ar<span className="text-green-500">c</span>a</span>
            </button>

            <button
              onClick={() => handleNavigation('/cards/visa')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
            >
              <span className="font-black italic tracking-wider text-blue-900">VISA</span>
            </button>

            <button
              onClick={() => handleNavigation('/cards/mastercard')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
            >
              <div className="flex -space-x-1.5 items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-red-600 opacity-90"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500 opacity-90"></div>
              </div>
            </button>

            <button
              onClick={() => handleNavigation('/cards/unionpay')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
            >
              <span className="font-extrabold text-xs tracking-tighter text-blue-700 bg-red-500 text-white px-1.5 py-0.5 rounded">UnionPay</span>
            </button>
          </div>

          {/* ՔԱՐՏԵՐԻ ԸՆԴՀԱՆՈՒՐ ԲԼՈԿ՝ ՏԱՐԱԾՈՒԹՅԱՄԲ (space-y-6) */}
          <div className="space-y-6">

            {/* NO1 EVOCA TRAVEL CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" 
                alt="Evoca Travel Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Evoca Travel Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">1.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Cashback արտասահմանում իրականացրած վճարումների համար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Անվճար</span>
                  <span className="font-bold text-purple-700 text-lg">6 մուտք</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Անվճար</span>
                  <span className="font-bold text-purple-700 text-lg">6 անգամ</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">16.000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտի տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/travel-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO2 EVOCA VISA PLATINUM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
                alt="Evoca Visa Platinum" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Evoca Visa Platinum</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Պրեմիում առավելություններ պրեմիում քարտով:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">30.000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Սպասարկման վճար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Անվճար</span>
                  <span className="font-bold text-purple-700 text-lg">6 մուտք</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Օդանավակայանների բիզնես սրահներ</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/visa-platinum-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
           {/* NO3 WILCO VISA INFINITE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-200 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png" 
                alt="Wilco Visa Infinite" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Wilco Visa Infinite</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Բացահայտե՛ք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/wilco-visa-infinite')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO4 EVOCA GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0  flex items-center justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" 
                alt="Evoca Gift Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Evoca Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Գնի՛ր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/gift-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
           
          {/* NO6 VISA VISION */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" 
                alt="Visa Vision" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/visa-vision')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO7 MASTERCARD WORLD DIGITAL */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-950 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" 
                alt="Mastercard World Digital" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mastercard World Digital</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի բանկոմատներից</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">2.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">1,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/mastercard-world-digital')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
             {/* NO8 UNIONPAY BUSINESS PLATINUM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
                alt="UnionPay Business Platinum" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">UnionPay Business Platinum</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">5 տարի</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտի ժամկետ</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">15,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկման վճար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">Ամենուր</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կիրառություն</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/unionpay-platinum')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO9 MYLER GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-blue-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" 
                alt="MyLer Gift Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">MyLer Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Մեկ քարտ, անսահմանափակ արկածներ։
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/myler-gift-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
             {/* NO10 UNIONPAY GOLD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-amber-500 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png" 
                alt="UnionPay Gold" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">UnionPay Gold</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">5 տարի</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտի ժամկետ</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">15000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկման վճար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">Ամենուր</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կիրառություն</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/unionpay-gold')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO11 4U.AM GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-blue-100 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" 
                alt="4U.am Gift card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4U.am Gift card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/4u-gift')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
             {/* NO12 MASTERCARD GOLD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-amber-400 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
                alt="Mastercard Gold" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mastercard Gold</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև 2 մլն ֏</span>
                  <span className="font-bold text-purple-700 text-lg">0%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.8%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">min 1,500 ֏</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">15,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/mastercard-gold')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO13 MASTERCARD STANDARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-800 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png" 
                alt="Mastercard Standard" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mastercard Standard</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև 1 մլն ֏</span>
                  <span className="font-bold text-purple-700 text-lg">0%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.8%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">min 1,500 ֏</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">5000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտի տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/mastercard-standard')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

            {/* NO14 VISA DIGITAL */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png" 
                alt="Visa Digital" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Digital</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Պատվիրիր Evoca Digital քարտդ հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի բանկոմատներից</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">4%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">1000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">0.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քեշբեք</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/visa-digital-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* NO15 VISA CLASSIC */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-200 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" 
                alt="Visa Classic" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Classic</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.8%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">min 1,500 ֏</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">5,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/visa-classic')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
             {/* ARCA CLASSIC */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-950 flex items-center justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" 
                alt="Arca Classic" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Arca Classic</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Արտարժույթ</span>
                  <span className="font-bold text-purple-700 text-lg">0.5%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտով կանխիկի տրամադրում Բանկի ATM-ով</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև 300,000 ֏ անվճար</span>
                  <span className="font-bold text-purple-700 text-lg">0.2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտով կանխիկի տրամադրում Բանկի ATM-ով</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Քարտով կանխիկի տրամադրում «Արքա» համակարգի այլ բանկերի ATM-ով և POS-ով</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">1,500 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/arca-classic')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

         
             {/* VISA BUSINESS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-300 flex items-center justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png" 
                alt="Visa Business" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Business</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.8%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">min 1,500 ֏</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Բանկի տարածքում քարտային հաշվից կանխիկի տրամադրում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/visa-business-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* DALMA GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-emerald-600 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" 
                alt="Dalma Gift Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dalma Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Նվեր ընտրելն այլևս դժվար չէ:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/dalma-gift-card')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

            {/* RIO GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
                alt="Rio Gift Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rio Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ամեն ինչ մեկ նվեր քարտում:
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/rio-gift-card-tariffs')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* VISA GOLD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-neutral-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" 
                alt="Visa Gold" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Gold</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.2%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">0.8%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">min 1,500 ֏</span>
                  <span className="font-bold text-purple-700 text-lg">1%</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">15,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տարեկան սպասարկում</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/cards/visa-gold')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>
             

          </div>
          

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}