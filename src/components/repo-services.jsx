import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';

export default function InvestmentServicesPage() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
              <button onClick={() => handleNavigation('/securities')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ներդրումային ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/bonds')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Պարտատոմսեր</button>
              <button onClick={() => handleNavigation('/hy/repo-services')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">ՀԿԴ ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/repo-reverse-repo')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ռեպո/Հակադարձ Ռեպո գործարքներ</button>
              <button onClick={() => handleNavigation('/hy/evocalnvest')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">EvocaINVEST</button>
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
            <button onClick={() => handleNavigation('/hy/individuals')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/securities')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Արժեթղթեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">ՀԿԴ ծառայություններ
</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ)
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
                alt="Հայաստանի կենտրոնական դեպոզիտարիա" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Main Content Layout with Social Share Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Social Share Icons Sidebar */}
            <div className="lg:col-span-1 flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-3">
              <a href="#facebook" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors font-bold text-sm">
                f
              </a>
              <a href="#linkedin" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors font-bold text-sm">
                in
              </a>
              <a href="#share" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors font-bold text-sm">
                ✉
              </a>
            </div>

            {/* Description and Document Links */}
            <div className="lg:col-span-11 space-y-6 text-gray-700 leading-relaxed">
              <p>
                ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
              </p>
              <p>
                Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
              </p>
              <p>
                Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՀՀԿԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ մասնաճյուղերում:
              </p>

              <div className="pt-4 space-y-4">
                <div>
                  <a href="#tariffs" className="text-purple-700 hover:text-purple-900 underline font-semibold text-base block">
                    Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագները
                  </a>
                </div>
                <div>
                  <a href="#rules" className="text-purple-700 hover:text-purple-900 underline font-semibold text-base block">
                    Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 4. ՎԵՐՋԻՆ ՆՈՐՈՒԹՅՈՒՆՆԵՐԸ */}
          <div className="w-full py-6 space-y-8 border-t border-gray-200">
            {/* Վերնագիր և "Բոլոր նորությունները" կոճակ */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Վերջին նորությունները
              </h2>
              <a 
                href="/all-news" 
                className="inline-flex items-center px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 text-sm font-semibold rounded-full transition-colors group"
              >
                <span>Բոլոր նորությունները</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">›</span>
              </a>
            </div>

            {/* Նորությունների քարտերի ցանց (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Նորություն 1 */}
              <div 
                onClick={() => navigate('/news/fincomm-2026')}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" 
                    alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                    Կենսակերպ
                  </span>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր
                  </h3>
                  <span className="text-xs text-gray-400 mt-auto pt-2">
                    08.10.2026
                  </span>
                </div>
              </div>

              {/* Նորություն 2 */}
              <div 
                onClick={() => {}}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" 
                    alt="Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                    Կենսակերպ
                  </span>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր
                  </h3>
                  <span className="text-xs text-gray-400 mt-auto pt-2">
                    06.10.2026
                  </span>
                </div>
              </div>

              {/* Նորություն 3 */}
              <div 
                onClick={() => {}}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" 
                    alt="Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                    Կենսակերպ
                  </span>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր
                  </h3>
                  <span className="text-xs text-gray-400 mt-auto pt-2">
                    06.10.2026
                  </span>
                </div>
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