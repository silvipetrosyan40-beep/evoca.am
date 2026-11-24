import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ԱԲՈՒԹԻ ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          {/* Վերին սպիտակ հեդերի հատված */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/reports')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հաշվետվություններ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/announcements')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հայտարարություններ
                </button>
              </nav>
            </div>

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          {/* Ներքին մանուշակագույն երկրորդային ենթաբաժինների բար */}
          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Էվոկա ֆինանսական խումբ</span>
          </div>

          {/* Էվոկա ֆինանսական խումբ հիմնական բլոկ */}
          <div className="bg-white rounded-[30px] p-8 md:p-14 shadow-sm border border-gray-100 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Էվոկա ֆինանսական խումբ
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              ՀՀ կենտրոնական բանկի խորհրդի 30.06.2025թ. թիվ 05 ԲԳ Ա որոշմամբ <strong className="text-purple-800 font-bold">Evocabank</strong>-ը («ԷՎՈԿԱԲԱՆԿ» ԲԸ) և <strong className="text-purple-800 font-bold">Wilco</strong>-ն («Վիլկո» ՍՊԸ) միավորվում են՝ դառնալով մեկ ֆինանսական խումբ՝ <strong className="text-purple-800 font-bold">Evoca</strong> անվամբ:
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong className="text-purple-800 font-bold">Evocabank</strong>-ը նշանակվել է <strong className="text-purple-800 font-bold">Evoca</strong> ֆինանսական խմբի պատասխանատու անձ:
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong className="text-purple-800 font-bold">Wilco</strong> կապիտալի կառավարման ընկերության մասին ամբողջական տեղեկատվությունը՝ <a href="#ayout" className="text-purple-700 hover:underline font-semibold">այստեղ</a>:
            </p>

            {/* Սխեմայի / Նկարի բլոկ (նորմալ չափսերով և կենտրոնացված) */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
              <div className="w-full max-w-4xl bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-center">
               <img 
  src="/«ԷՎՈԿԱ» ֆինանսական խումբ Armenian.png" 
  alt="Evoca Financial Group Structure" 
  className="w-full h-auto object-contain max-h-[600px]"
  onError={(e) => {
    e.target.src = "https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png";
  }}
/>
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