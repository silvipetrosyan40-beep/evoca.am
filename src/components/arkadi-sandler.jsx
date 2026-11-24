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
            <span className="text-gray-800 font-medium">ԱՐԿԱԴԻ ՍԱՆԴԼԵՐ
</span>
          </div>

          {/* Անհատական էջի բովանդակություն */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
            {/* Ձախ կողմ՝ Նկար և հիմնական տվյալներ */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-md relative">
                <img 
                  src="https://www.evoca.am/images-cache/team_members/1/17884208691388/400x400.png" 
                  alt="Վարուժան Ավետիքյան" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ԱՐԿԱԴԻ ՍԱՆԴԼԵՐ</h1>
                <p className="text-purple-900 font-semibold mt-1">Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ

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
                    <strong className="text-gray-900">2000թ.</strong> - Ավարտել է Մոսկվայի Հեռահաղորդակցության պետական համալսարանը (MIIT)՝ ստանալով Համակարգչային գիտությունների մագիստրոսի աստիճան:
                  </li>
                  <li>
                    <strong className="text-gray-900">2021թ.</strong> - Լոնդոնի Institute of Directors (IoD)-ում՝ ստանալով Կորպորատիվ կառավարման դիպլոմ:
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed pt-1">
                  Անցել է մասնագիտական վերապատրաստումներ տեղեկատվական տեխնոլոգիաների կառավարման (ITIL Foundations), ֆինանսական կառավարման, պրոդուկտի կառավարման, նախագծերի կառավարման, պրոդուկտի զարգացման, ինչպես նաև վաճառքի և մարքեթինգի կառավարման ոլորտներում:
                </p>
              </div>

              {/* Կարիերա */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կարիերա</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">1998–2000թթ.</strong> - հիմնել է Simpo ծրագրային ապահովման մշակմամբ և տեղեկատվական տեխնոլոգիաների խորհրդատվությամբ զբաղվող ընկերությունը (ձեռք է բերվել «АГЕНТСТВО КОНТАКТ» ընկերության կողմից):
                  </li>
                  <li>
                    <strong className="text-gray-900">2000–2004թթ.</strong> - զբաղեցրել է AGENTSTVO KONTAKT ընկերության տեղեկատվական տեխնոլոգիաների գծով տնօրենի (Chief Information Officer) պաշտոնը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2004–2005թթ.</strong> - հիմնել է KeyStaff Solutions ընկերությունը, որը զբաղվում էր արհեստական բանականության հիման վրա հավաքագրման տեխնոլոգիաների մշակմամբ (ձեռք է բերվել HeadHunter Group ընկերության կողմից):
                  </li>
                  <li>
                    <strong className="text-gray-900">2006–2008թթ.</strong> - զբաղեցրել է HeadHunter Group-ի Կորպորատիվ զարգացման և փոխակերպման ղեկավարի պաշտոնը (դարձել է Mail.Ru Group-ի մաս):
                  </li>
                  <li>
                    <strong className="text-gray-900">2008–2010թթ.</strong> - աշխատել է DST Advisors-ում (DST-ն հետագայում վերանվանվել է Mail.Ru Group)՝ որպես պորտֆելի կառավարիչ և ավագ խորհրդատու:
                  </li>
                  <li>
                    <strong className="text-gray-900">2010–2013թթ.</strong> - հիմնել և ղեկավարել է Essential Commerce Ltd. ընկերությունը՝ զբաղեցնելով գլխավոր գործադիր տնօրենի պաշտոնը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2013–2017թթ.</strong> - զբաղեցրել է Nanosemantics Lab-ի գլխավոր գործադիր տնօրենի և պրոդուկտի կառավարման ղեկավարի պաշտոնը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2017–2021թթ.</strong> - զբաղեցրել է MTS Group-ի արհեստական բանականության գծով տնօրենի (Chief Artificial Intelligence Officer) պաշտոնը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2019թ.</strong> - մասնակցել է «Արհեստական բանականության ազգային ռազմավարություն 2030»-ի զարգացմանը, Դաշնային AI ծրագրին և հանդիսացել է AI Alliance-ի համահիմնադիրներից մեկը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022–2024թթ.</strong> - զբաղեցրել է DOCET TI ընկերության կառավարման գործընկերոջ պաշտոնը:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - հանդիսանում է SKB Kontur ընկերության նորարարությունների հարցերով խորհրդատու:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - հանդիսանում է True Click Technologies ընկերության հիմնադիրը:
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