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
      <button onClick={() => handleNavigation('/hy/about/reports')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Աուդիտորական եզրակացություն</button>
      <button onClick={() => handleNavigation('/hy/about/reports/financial')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ֆինանսական հաշվետվություններ</button>
      <button onClick={() => handleNavigation('/hy/about/reports/investors')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ներդրողների համար</button>
      <button onClick={() => handleNavigation('/hy/about/reports/semiannual')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Կիսամյակային հաշվետվություն</button>
      <button onClick={() => handleNavigation('/hy/about/reports/annual')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Տարեկան հաշվետվություն</button>
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
            <span className="text-gray-800 font-medium">Ֆինանսական հաշվետվություններ

</span>
          </div>    
                   

                   <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-8 text-sm md:text-base">
  <h1 className="text-2xl md:text-3xl font-bold text-purple-900">Ֆինանսական հաշվետվություններ</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { year: "2026", items: ["1-2026", "2-2026", "3-2026"] },
      { year: "2025", items: ["1-2025", "2-2025", "3-2025", "4-2025"] },
      { year: "2024", items: ["1-2024", "2-2024", "3-2024", "4-2024"] },
      { year: "2023", items: ["1-2023", "2-2023", "3-2023", "4-2023"] },
      { year: "2022", items: ["1-2022", "2-2022", "3-2022", "4-2022"] },
      { year: "2021", items: ["1-2021", "2-2021", "3-2021", "4-2021"] },
      { year: "2020", items: ["1-2020", "2-2020", "3-2020", "4-2020"] },
      { year: "2019", items: ["1-2019", "2-2019", "3-2019", "4-2019"] },
      { year: "2018", items: ["1-2018", "2-2018", "3-2018", "4-2018"] },
      { year: "2017", items: ["1-2017", "2-2017", "3-2017", "4-2017"] },
      { year: "2016", items: ["1-2016", "2-2016", "3-2016", "4-2016", "Տարեկան 2016"] },
      { year: "2015", items: ["1-2015", "2-2015", "3-2015", "4-2015", "Տարեկան 2015"] },
      { year: "2014", items: ["1-2014", "2-2014", "3-2014", "4-2014", "Տարեկան 2014"] },
      { year: "2013", items: ["1-2013", "2-2013", "3-2013", "4-2013", "Տարեկան 2013"] },
      { year: "2012", items: ["1-2012", "2-2012", "3-2012", "4-2012", "Տարեկան 2012"] },
      { year: "2011", items: ["1-2011", "2-2011", "3-2011", "4-2011", "Տարեկան 2011"] },
      { year: "2010", items: ["1-2010", "2-2010", "3-2010", "4-2010", "Տարեկան 2010"] }
    ].map((group, index) => (
      <div key={index} className="space-y-3">
        <h3 className="font-bold text-purple-900 text-base">{group.year}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {group.items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/50 border border-purple-100 rounded-xl shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-xs truncate">
                  {item}
                </span>
              </div>
              <div className="p-1 text-purple-700 hover:text-purple-900 transition-colors shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
          ))}
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