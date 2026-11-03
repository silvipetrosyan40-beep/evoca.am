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

            {/* EVOCA GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0  flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" 
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

          
           {/* MYLER GIFT CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
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

          {/* 4U.AM GIFT CARD */}
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
                src="	https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
                alt="Rio Gift Card" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rio Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ամեն ինչ մեկ նվեր քարտում
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
             

          </div>
          

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}