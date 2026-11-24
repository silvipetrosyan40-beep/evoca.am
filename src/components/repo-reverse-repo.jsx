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
            <span className="text-gray-800 font-medium">Ռեպո/Հակադարձ Ռեպո գործարքներ

</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ռեպո/Հակադարձ Ռեպո գործարքներ

              </h1>
              <p className="text-gray-700 leading-relaxed">
                Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ։ Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում։
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
                    Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):

              </p>
              <p>
                    Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:

              </p>
              <p>
                    Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:

              </p>

             
            </div>

          </div>

         
             
            

             
         

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}