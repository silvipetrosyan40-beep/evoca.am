import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);

  const handleNavigation = (path) => {
    navigate(path);
  };

 

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ԱԲՈՒԹԻ ՀԵԴԵՐ (Լոգո, Մենյու, Երկրորդային մանուշակագույն բար) */}
        <header className="w-full bg-white shadow-sm font-sans">
          {/* Վերին սպիտակ հեդերի հատված */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* ձախ կողմ՝ լոգո և հիմնական մենյու */}
            <div className="flex items-center space-x-12">
              {/* Evoca լոգո */}
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              {/* Հիմնական նավարկություն */}
              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
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
                  className="text-purple-700 font-bold bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
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

            {/* Աջ կողմ՝ EvocaONLINE կոճակ */}
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
  <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap overflow-x-auto">
    <button onClick={() => handleNavigation('/hy/about/reports/audit')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Աուդիտորական եզրակացություն</button>
    <button onClick={() => handleNavigation('/hy/about/reports/financial')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ֆինանսական հաշվետվություններ</button>
    <button onClick={() => handleNavigation('/hy/about/reports/investors')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ներդրողների համար</button>
    <button onClick={() => handleNavigation('/hy/about/reports/semiannual')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Կիսամյակային հաշվետվություն</button>
    <button onClick={() => handleNavigation('/hy/about/reports/annual')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Տարեկան հաշվետվություն</button>
  </nav>
</div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Հաշվետվություններ
</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Աուդիտորական եզրակացություն
</span>
          </div>    
                    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-8 text-sm md:text-base">
  <h1 className="text-2xl md:text-3xl font-bold text-purple-900">Աուդիտորական եզրակացություն</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { year: "2025" },
      { year: "2024" },
      { year: "2023" },
      { year: "2022" },
      { year: "2021" },
      { year: "2020" },
      { year: "2019" },
      { year: "2018" },
      { year: "2017" },
      { year: "2016" },
      { year: "2015" },
      { year: "2014" },
      { year: "2013" },
      { year: "2012" },
      { year: "2011" },
      { year: "2010" },
      { year: "2009" },
      { year: "2008" },
      { year: "2007" },
      { year: "2006" }
    ].map((item, index) => (
      <div key={index} className="space-y-2">
        <h3 className="font-bold text-purple-900 text-base">{item.year}</h3>
        <div className="flex items-center justify-between p-4 bg-purple-50/50 border border-purple-100 rounded-xl shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium text-xs md:text-sm">
              {item.year} Աուդիտորական եզրակացություն
            </span>
          </div>
          <div className="p-2 text-purple-700 hover:text-purple-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}   