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
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ CSR ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Evoca-ի մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">CSR</span>
          </div>

          {/* CSR Վերին բլոկ (Հսկայական քարտ՝ ձախում տեքստ, աջում մանուշակագույն ֆոնով ձեռքի նկար) */}
          <div className="relative bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden mb-16 flex flex-col lg:flex-row items-stretch">
            
            {/* Ձախ կողմ՝ Վերնագիր և նկարագրություն */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Կորպորատիվ Սոցիալական Պատասխանատվություն
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:
              </p>
            </div>

            {/* Աջ կողմ՝ Մանուշակագույն ֆոնով բլոկ և 3D ձեռքի նկարը */}
            <div className="w-full lg:w-[48%] bg-[#8b3dff] relative flex items-center justify-center p-8 lg:p-12 min-h-[350px]">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png" 
                alt="CSR Evoca" 
                className="w-full h-full object-contain max-h-[400px] drop-shadow-2xl"
              />
            </div>
          </div>

          {/* CSR Ստորին մանրամասն բաժին */}
          <div className="bg-white rounded-[30px] p-8 md:p-14 shadow-sm border border-gray-100 space-y-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <strong className="text-purple-800 font-bold">Evocabank</strong>-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում[cite: 14]: Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում[cite: 14]՝
            </p>

            <ul className="space-y-4 text-gray-700 text-base md:text-lg list-disc pl-6">
              <li>Նորագույն տեխնոլոգիաների զարգացում[cite: 14],</li>
              <li>Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ[cite: 14],</li>
              <li>Հասարակության կարևոր նշանակություն ունեցող նախաձեռնություններ[cite: 14],</li>
              <li>
                Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ[cite: 14]:
              </li>
            </ul>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-4 border-t border-gray-100">
              Մեր բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվությանն ուղղված յուրաքանչյուր փոքրիկ քայլ վկայում է աշխարհն ավելի լուսավոր ու գեղեցիկ դարձնելու կարևորության մասին[cite: 14]:
            </p>
          </div>

         {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/allpage4/for-future-foundation" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17340920050867/780x585.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">13.12.2024</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/allpage5/etchmiadzin-book" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17237286203482/780x585.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                Evoca-ն՝ Սուրբ Էջմիածնի Մայր Տաճարի մասին ժողովածուի հովանավոր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">15.08.2024</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/allpage4/notre-dame-cathedral" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17337499936685/780x585.jpg" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">09.12.2024</span>
              </div>
            </Link>

          </div>
        </div>

            
        </main>
        
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}