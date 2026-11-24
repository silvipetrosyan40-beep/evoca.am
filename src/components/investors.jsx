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
<button onClick={() => handleNavigation('/hy/about/reports/financial')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ֆինանսական հաշվետվություններ</button><button onClick={() => handleNavigation('/hy/about/reports/investors')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ներդրողների համար</button>      <button onClick={() => handleNavigation('/hy/about/reports/semiannual')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Կիսամյակային հաշվետվություն</button>
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
            <span className="text-gray-800 font-medium">Ներդրողների համար</span>
          </div>    
                   

                    <div className="w-full max-w-5xl mx-auto px-4 py-12 text-[#1d2b36] space-y-10 text-sm md:text-base">
  <h1 className="text-2xl md:text-3xl font-bold text-purple-900">Ներդրողների համար</h1>

  {[
    {
      year: "2026",
      items: [
        { label: "Q1 2026", image: "https://www.evoca.am/images-cache/presentations/1/178056974111/310x249.jpg" },
        { label: "Q2 2026", image: "https://www.evoca.am/images-cache/presentations/1/17878389620338/310x249.png" },
        { label: "Q3 2026", image: "	https://www.evoca.am/images-cache/presentations/1/17936881194348/310x249.png" }
      ]
    },
    {
      year: "2025",
      items: [
        { label: "Q1 2025", image: "	https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg" },
        { label: "Q2 2025", image: "	https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg" },
        { label: "Q3 2025", image: "	https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg" },
        { label: "Q4 2025", image: "	https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg" }
      ]
    },
    {
      year: "2024",
      items: [
        { label: "Q1 2024", image: "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png" },
        { label: "Q2 2024", image: "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png" },
        { label: "Q3 2024", image: "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png" },
        { label: "Q4 2024", image: "https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png" }
      ]
    },
    {
      year: "2023",
      items: [
        { label: "Q1 2023", image: "	https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg" },
        { label: "Q2 2023", image: "	https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg" },
        { label: "Q3 2023", image: "	https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg" },
        { label: "Q4 2023", image: "	https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg" }
      ]
    },
    {
      year: "2022",
      items: [
        { label: "Q1 2022", image: "https://www.evoca.am/images-cache/presentations/1/16524487203697/310x249.jpg" },
        { label: "Q2 2022", image: "https://www.evoca.am/images-cache/presentations/1/16524487203697/310x249.jpg" },
        { label: "Q3 2022", image: "https://www.evoca.am/images-cache/presentations/1/16524487203697/310x249.jpg" }
      ]
    },
    {
      year: "2021",
      items: [
        { label: "Q1 2021", image: "https://www.evoca.am/images-cache/presentations/1/16214240534691/310x249.jpg" },
        { label: "Q2 2021", image: "https://www.evoca.am/images-cache/presentations/1/16214240534691/310x249.jpg" },
        { label: "Q3 2021", image: "https://www.evoca.am/images-cache/presentations/1/16214240534691/310x249.jpg" },
        { label: "Q4 2021", image: "https://www.evoca.am/images-cache/presentations/1/16214240534691/310x249.jpg" }
      ]
    },
    {
      year: "2020",
      items: [
        { label: "Q1 2020", image: "	https://www.evoca.am/images-cache/presentations/1/16164091530204/310x249.jpg" },
        { label: "Q2 2020", image: "https://www.evoca.am/images-cache/presentations/1/16164091530255/310x249.png" },
        { label: "Q3 2020", image: "https://www.evoca.am/images-cache/presentations/1/16164091530255/310x249.png" },
        { label: "Q4 2020", image: "https://www.evoca.am/images-cache/presentations/1/16164091530255/310x249.png" }
      ]
    },
    {
      year: "2019",
      items: [
        { label: "Q3 2019", image: "	https://www.evoca.am/images-cache/presentations/1/16164099260851/310x249.png" },
        { label: "Q4 2019", image: "	https://www.evoca.am/images-cache/presentations/1/16164099260851/310x249.png" }
      ]
    }
  ].map((group, index) => (
    <div key={index} className="space-y-4">
      <h3 className="font-bold text-purple-900 text-lg">{group.year}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-purple-50/40 p-6 rounded-2xl border border-purple-100 shadow-sm">
        {group.items.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white border border-purple-100 rounded-xl overflow-hidden shadow-sm hover:border-purple-300 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Ամեն քարտ ունի իր առանձին image դաշտը */}
            <div className="w-full h-36 bg-purple-100/50 flex items-center justify-center overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.label} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4 flex items-center justify-between bg-white border-t border-purple-50">
              <span className="font-semibold text-purple-900 text-sm">
                {item.label}
              </span>
              <div className="p-1.5 bg-purple-50 text-purple-700 rounded-lg group-hover:bg-purple-700 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}   