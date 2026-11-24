import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import { Home } from 'lucide-react';

export default function VaruzhanAvetisyanPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդեր */}
        <header className="w-full bg-white shadow-sm font-sans">
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

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* Հացի փշուրներ և բովանդակություն */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/management')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Ղեկավարություն</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">ՏԱԹԵՒԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP
</span>
          </div>

          {/* Անհատական էջի բովանդակություն */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
            {/* Ձախ կողմ՝ Նկար և հիմնական տվյալներ */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-md relative">
                <img 
                  src="	https://www.evoca.am/images-cache/team_members/1/16602030244095/400x400.png" 
                  alt="Վարուժան Ավետիքյան" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ՏԱԹԵՒԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP
</h1>
                <p className="text-purple-900 font-semibold mt-1">Վարչության նախագահի տեղակալ


</p>
              </div>
            </div>

        {/* Աջ կողմ՝ Կրթություն և Կարիերա */}
            <div className="w-full md:w-2/3 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              {/* Կրթություն */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կրթություն</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">2009թ.</strong> - ավարտել է Հայաստանի պետական տնտեսագիտական համալսարանը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2011թ.</strong> - ավարտել է Հայաստանի Ամերիկյան համալսարանը (Master of Business Administration - MBA որակավորում):
                  </li>
                  <li>
                    <strong className="text-gray-900">2017թ.</strong> - վերապատրաստվել է Դուբայում (Digital Marketing Track դասընթաց):
                  </li>
                  <li>
                    <strong className="text-gray-900">2020թ.</strong> - ստացել է Project Management Professional-ի PMP® միջազգային որակավորում Project Management Institute-ի կողմից:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - ավարտել է Harvard Business School Online-ի Organizational Leadership դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - մասնակցել է Accenture-ի և IFC International-ի DigiLab Finance ծրագրին:
                  </li>
                  <li>
                    <strong className="text-gray-900">2024թ.</strong> - ավարտել է Yale School of Management-ի Digital Transformation Strategy դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2024թ.</strong> - ավարտել է National University of Singapore-ի Change Management for Digital Transformation դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - ավարտել է Լյուքսեմբուրգի կառավարման աջակցությամբ ATTF Luxembourg-ի և House of Training-ի կողմից կազմակերպված Digitalization in Banking - Driving the Digital Transformation of your Bank դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2026թ.</strong> - ավարտել է SDA Bocconi School of Management-ի Leading Transformation in a Disrupted World դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2026թ.</strong> - ավարտել է Harvard Business School Online-ի AI for Leaders դասընթացը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2026թ.</strong> - ավարտել է MIT Sloan School of Management-ի կողմից հատուկ Evocabank-ի ղեկավարության համար կազմակերպված Understanding and Using Generative AI դասընթացը:
                  </li>
                </ul>
              </div>

              {/* Կարիերա */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կարիերա</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">2011թ.</strong> - աշխատել է «Պրոմեթեյ Բանկ» ՓԲԸ-ում՝ որպես Մարկետինգի մասնագետ, այնուհետև՝ Մարկետինգի և հասարակայնության հետ կապերի բաժնի պետ:
                  </li>
                  <li>
                    <strong className="text-gray-900">2017թ.</strong> - աշխատել է Evocabank-ում՝ որպես Մարկետինգի և հասարակայնության հետ կապերի բաժնի պետ:
                  </li>
                  <li>
                    <strong className="text-gray-900">2017թ.</strong> - դասավանդել է Global Bridge բիզնես դպրոցում:
                  </li>
                  <li>
                    <strong className="text-gray-900">2018թ.</strong> - աշխատել է Evocabank-ում՝ որպես Վարչության անդամ:
                  </li>
                  <li>
                    <strong className="text-gray-900">2019թ.</strong> - աշխատում է Evocabank-ում՝ որպես Վարչության նախագահի տեղակալ, Վարչության անդամ՝ ղեկավարելով Մարկետինգի և PR-ի, HR և մշակույթի, CX` հաճախորդների փորձառության կառավարման, և կայուն զարգացման ուղղությունները:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - աշխատում է Project Management Institute Armenia-ում՝ որպես PMI Armenia-ի փոխնախագահ:
                  </li>
                  <li>
                    <strong className="text-gray-900">2023թ.</strong> - հանդիսանում է Fab Lab Armenia կրթական հիմնադրամի Հոգաբարձուների խորհրդի անդամ:
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}