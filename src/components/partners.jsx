import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import { Home } from 'lucide-react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Սլայդ 1-ի լոգոներ և նկարների հղումներ
  const slide1Partners = [
    { name: 'Chip Store', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/17104032198171/348x150.png' },
    { name: 'Ֆաբ Լաբ Հայաստան', type: 'logo', image: 'https://www.evoca.am/images-cache/partners/1/17077436606929/348x150.png' },
    { name: 'IMR', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/17107493820339/348x150.png' },
    { name: 'Dignisi', type: 'logo', image: 'https://www.evoca.am/images-cache/partners/1/17072192942611/348x150.png' },
    { name: 'Center Hand Icon', type: 'badge', image: '	https://www.evoca.am/images-cache/partners/1/17072192635138/348x150.png' },
    { name: 'Wizzy', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/17072192435541/348x150.png' },
    { name: 'KamoBlog', type: 'logo', image: 'https://www.evoca.am/images-cache/partners/1/16104577054001/348x150.png' },
    { name: 'Dalma Garden Mall', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png' },
    { name: 'Նոր Տուն', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104583322099/348x150.png' },
  ];

  // Սլայդ 2-ի լոգոներ և նկարների հղումներ
  const slide2Partners = [
    { name: 'Factory', type: 'logo', image: 'https://www.evoca.am/images-cache/partners/1/17689930369925/348x150.png' },
    { name: 'Indigo', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104594273635/348x150.png' },
    { name: 'Futuris Home', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/1610459808737/348x150.png' },
    { name: 'Center Hand Icon', type: 'badge', image: 'https://www.evoca.am/images-cache/partners/1/16104599802947/348x150.png' },
    { name: 'Adelie & the Stone', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104603665095/348x150.png' },
    { name: 'Earlyone', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104604109064/348x150.png' },
    { name: 'Easypay', type: 'logo', image: '	https://www.evoca.am/images-cache/partners/1/16104604382658/348x150.png' },
  ];

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

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Էվոկա ֆինանսական խումբ</button>
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
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Evoca-ի մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Գործընկերներ</span>
          </div>

          {/* Գործընկերների բաժին (Partners Slider Section) */}
          <section className="py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Գործընկերներ</h2>

            {/* Ցանցային աղյուսակ (3x3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-purple-200 bg-white">
              {currentSlide === 1
                ? slide1Partners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-8 border border-purple-100 h-36 md:h-44 hover:shadow-sm transition-all bg-white"
                    >
                      {partner.type === 'badge' ? (
                        <div className="relative flex items-center justify-center">
                          <img src={partner.image} alt={partner.name} className="w-24 h-24 object-contain rounded-full" />
                        </div>
                      ) : (
                        <img src={partner.image} alt={partner.name} className="max-h-16 max-w-[80%] object-contain" />
                      )}
                    </div>
                  ))
                : slide2Partners.map((partner, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center p-8 border border-purple-100 h-36 md:h-44 hover:shadow-sm transition-all bg-white ${
                        partner.name === 'Earlyone' ? 'md:row-span-2 h-full' : ''
                      }`}
                    >
                      {partner.type === 'badge' ? (
                        <div className="relative flex items-center justify-center">
                          <img src={partner.image} alt={partner.name} className="w-24 h-24 object-contain rounded-full" />
                        </div>
                      ) : (
                        <img src={partner.image} alt={partner.name} className="max-h-16 max-w-[80%] object-contain" />
                      )}
                    </div>
                  ))}
            </div>

            {/* Նավիգացիա (Սլայդների կոճակներ) */}
            <div className="flex items-center space-x-6 mt-6">
              <button
                onClick={() => setCurrentSlide(1)}
                className="text-gray-400 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
              >
                <FiArrowLeft size={20} />
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentSlide(1)}
                  className={`w-7 h-7 rounded-full font-medium text-sm flex items-center justify-center transition-all cursor-pointer border-none ${
                    currentSlide === 1
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 bg-transparent'
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentSlide(2)}
                  className={`w-7 h-7 rounded-full font-medium text-sm flex items-center justify-center transition-all cursor-pointer border-none ${
                    currentSlide === 2
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 bg-transparent'
                  }`}
                >
                  2
                </button>
              </div>

              <button
                onClick={() => setCurrentSlide(2)}
                className="text-gray-400 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
              >
                <FiArrowRight size={20} />
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}