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
            <span className="text-gray-800 font-medium">ՄԱՐԻՆԱ ԲՈՒԿԻ, MBA

</span>
          </div>

          {/* Անհատական էջի բովանդակություն */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
            {/* Ձախ կողմ՝ Նկար և հիմնական տվյալներ */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-md relative">
                <img 
                  src="		https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png" 
                  alt="Վարուժան Ավետիքյան" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ՎՄԱՐԻՆԱ ԲՈՒԿԻ, MBA</h1>
                <p className="text-purple-900 font-semibold mt-1">Խորհրդի անդամ Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ</p>
              </div>
            </div>

            {/* Աջ կողմ՝ Կրթություն և Կարիերա */}
            <div className="w-full md:w-2/3 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              {/* Կրթություն */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կրթություն</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">1993թ.</strong> - ավարտել է Հունաստանի University of Patras-ում՝ ստանալով Մաթեմատիկական գիտությունների բակալավրի աստիճան[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">1998թ.</strong> - Էդինբուրգ, Միացյալ Թագավորությունում ավարտել է Herriot Watt University-ն՝ ստանալով Ակտուարական գիտությունների մագիստրոսի աստիճան[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2001թ.</strong> - Միացյալ Թագավորությունում Ակտուարների Ֆակուլտետի անդամ (Fellow)[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2005թ.</strong> - Նյու Յորք, ԱՄՆ-ում ավարտել է Կոլումբիայի բիզնես դպրոցը՝ Բիզնեսի կառավարման մագիստրոսի (MBA) կոչումով[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022թ.</strong> - մասնակցել է St. Gallen Board Practice Սեմինարին[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - մասնակցել է Օքսֆորդի արհեստական բանականության ծրագրին[cite: 15]:
                  </li>
                </ul>
              </div>

              {/* Կարիերա */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կարիերա</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">1998-2000թթ.</strong> - աշխատել է Էդինբուրգի Standard Life կազմակերպությունում՝ որպես ակտուարական վերլուծաբան[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2000-2004թթ.</strong> - աշխատել է Լոնդոնի Towers Perrin կազմակերպությունում՝ որպես ակտուարական վերլուծաբան[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2005-2021թթ.</strong> - աշխատել է Morgan Stanley-ում, London, որպես Ներդրումային բանկիր Financial Institutions Group (FIG)-ում: Այնուհետև FIG-ի Գլխավոր տնօրեն (2015-2021)[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2022-2025թթ.</strong> - Ավագ խորհրդատու Delphos-ում[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2023թ.</strong> - Խորհրդատու Bain & Company-ում[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2023թ.</strong> - հանդիսանում է Halcyon Equity Partners ընկերության Ներդրումային կոմիտեի ոչ գործադիր, անկախ անդամ[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2024-2025թթ.</strong> - Ծառայել է որպես ոչ գործադիր խորհրդի անդամ Aegean Baltic Bank (ABB)-ում[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - Խորհրդի անկախ անդամ NBG AM MFMC-ում[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - հանդիսանում է «Էվոկաբանկ» ԲԲԸ Խորհրդի անդամ, Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ[cite: 15]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2026թ.</strong> - հանդիսանում է «Էվոկաբանկ» ԲԲԸ Ռիսկերի և համապատասխանության կոմիտեի անդամ[cite: 15]:
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed pt-2">
                  Նա նաև ստարտափների վաղ փուլի ներդրող է՝ ակտիվորեն աջակցելով հիմնադիրներին նրանց զարգացման ճանապարհին[cite: 15]:
                </p>
              </div>
            </div>
            </div>
           
        </main>
      </div>

      <Footer />
    </div>
  );
}