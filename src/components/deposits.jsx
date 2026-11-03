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
              <button onClick={() => handleNavigation('/deposits')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0"> Ավանդներ</button>
              <button onClick={() => handleNavigation('/hy/deposits-important-information')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Կարևոր տեղեկատվություն</button>
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
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Ավանդներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ավանդներ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Քարտեր</h1>



          {/* ՔԱՐՏԵՐԻ ԸՆԴՀԱՆՈՒՐ ԲԼՈԿ՝ ՏԱՐԱԾՈՒԹՅԱՄԲ (space-y-6) */}
          <div className="space-y-6">

        {/* ԴԱՍԱԿԱՆ ԱՎԱՆԴ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-900 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg" 
                alt="Դասական ավանդ" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Դասական ավանդ</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Սկսած</span>
                  <span className="font-bold text-purple-700 text-lg">100,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">31-1,825 օր</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">10.5% ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                  <span className="font-bold text-purple-700 text-lg">100,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Համալրման հնարավորություն</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/deposits/classic')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* ՄԱՆԿԱԿԱՆ ԱՎԱՆԴ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-400 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg" 
                alt="Մանկական ավանդ" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Մանկական ավանդ</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունվում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Սկսած</span>
                  <span className="font-bold text-purple-700 text-lg">100,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">18 լրանալը</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">9.5% ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                  <span className="font-bold text-purple-700 text-lg">40,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Համալրման հնարավորություն</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/deposits/children')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <span className="text-lg">›</span>
              </button>
            </div>

          </div>

          {/* ԱՎԱՆԴ EVOCA ONLINE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow mt-6">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-purple-900 flex items-center justify-center">
              <img 
                src="	https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg" 
                alt="Ավանդ Evoca Online" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ավանդ Evoca Online</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ցանկանո՞ւմ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Սկսած</span>
                  <span className="font-bold text-purple-700 text-lg">100,000 ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">&nbsp;</span>
                  <span className="font-bold text-purple-700 text-lg">31-1,825 օր</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">10.75% ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/deposits/evoca-online')}
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