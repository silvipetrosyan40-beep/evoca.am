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
            <span className="text-gray-800 font-medium">ՄԱՐՏԱ ԷՉԱՐՐԻ
</span>
          </div>

          {/* Անհատական էջի բովանդակություն */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
            {/* Ձախ կողմ՝ Նկար և հիմնական տվյալներ */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-md relative">
                <img 
                  src="https://www.evoca.am/images-cache/team_members/1/17544805530896/400x400.png" 
                  alt="Վարուժան Ավետիքյան" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ՄԱՐՏԱ ԷՉԱՐՐԻ</h1>
                <p className="text-purple-900 font-semibold mt-1">Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ</p>
              </div>
            </div>

            {/* Աջ կողմ՝ Կրթություն և Կարիերա */}
            <div className="w-full md:w-2/3 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              {/* Կրթություն */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կրթություն</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">2003թ.</strong> - ավարտել է ESSEC Փարիզի բիզնես դպրոցը[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2001 - 2005թթ.</strong> - սովորել է Northeastern University և ICADE (E4)-ում՝ Միջազգային բիզնեսի կառավարում երկաստիճան ծրագրի շրջանակներում՝ ստանալով մասնագիտացում Միջազգային բիզնես, ֆինանսներ և շուկայավարում ոլորտում[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2019թ.</strong> - մասնակցել է IE university-ի՝ Հարբերության էքսպոնենցիալ աճ 1-շաբաթյա դասընթացին[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2020թ.</strong> - մասնակցել է ISDI Dibex: Թվային բիզնես ղեկավարների համար ծրագրին[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2023թ.</strong> - ավարտել է Singularity University կրթական ծրագիրը՝ նախատեսված ղեկավարների համար: Ներկայումս նույն համալսարանում հանդիսանում է հյուր-խոսնակ միջազգային գագաթաժողովների համար[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2026թ.</strong> - Fundación Rafael del Pino հիմնադրամի կրթաթոշակառուի կարգավիճակով մասնակցել է MIT-ի «Frontiers of Innovation» ծրագրին (Բոստոն)[cite: 14]:
                  </li>
                </ul>
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  Ունի հավաստագրեր ֆինանսական ոլորտում՝ series 7 և series 63 հավաստագրեր, Հարվարդի համալսարանի Բանակցելու հմտություններ դասընթաց, Բլումբերգի դասընթաց NYC ընկերության գլխամասային գրասենյակում, պորտֆելի կառավարում IEB, Մադրիդ համալսարանում, Հարկեր և իրավաբանական նորություններ Իսպանիայում՝ Deloitte and Garrigues, տարբեր բանկային դասընթացներ Լոնդոնում, Նյու Յորքում և Ժնևում՝ J.P.Morgan-ի գրասենյակներում[cite: 14]:
                </p>
              </div>

              {/* Աջ կողմ՝ Կարիերա և այլ փորձ */}
            <div className="w-full md:w-2/3 space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              {/* Կարիերա */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">Կարիերա</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-gray-900">2005 - 2008թթ.</strong> - աշխատել է UBS Bank S.A.-ում՝ որպես Հարստության կառավարման վերլուծաբան[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2008 - 2012թթ.</strong> - աշխատել է J.P.MORGAN International Bank Ltd. Sucursal en Espana-ում՝ որպես Ասոցացված անհատական բանկիր[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2012 - 2015թթ.</strong> - զբաղեցրել է J.P.MORGAN International Bank Ltd. Sucursal en Espana-ի Փոխնախագահ-անհատական բանկիրի պաշտոնը[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2015 - 2019թթ.</strong> - զբաղեցրել է J.P.MORGAN International Bank Ltd. Sucursal en Espana-ի Գործադիր տնօրեն-անհատական բանկիրի պաշտոնը[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2019 - 2020թթ.</strong> - աշխատել է LOMBARD ODIER GROUP -ում՝ որպես Ավագ փոխնախագահ - անհատական բանկիր[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2020 - 2023թթ.</strong> - աշխատել է N26 BANK GmbH, Sucursal en Espana-ում՝ որպես Իսպանիայի և Պորտուգալիայի հարցերով գլխավոր մենեջեր[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2023 - 2024թթ.</strong> - զբաղեցրել է WESTERN UNION միջազգային բանկի՝ Եվրոպայում թվային բանկինգի ստորաբաժանման ղեկավարի և Western Union միջազգային բանկի գործադիր տնօրենի տեղակալի պաշտոնները[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2024թ.</strong> - հանդիսանում է MUSE MOVEMENT SL-ի հիմնադիր[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2024թ.</strong> - հանդես է գալիս որպես տեխնոլոգիաների ռազմավարագետ և հիմնական զեկուցող նորարարությանը նվիրված միջազգային ֆորումներում, այդ թվում՝ The Future is Now (Մադրիդ), TedxIE (Մադրիդ), Inmerge24 (Բաքու), Digitalización Superintendencia de Bancos (Դոմինիկյան Հանրապետություն) և Հայաստանի Բանկերի Միության (Վիեննա) միջոցառումներում[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - հիմնադրել է KIRI SL-ը և զբաղեցնում է գլխավոր գործադիր տնօրենի (CEO) պաշտոնը: KIRI-ն անչափահասների համար նախատեսված ներդրումային հաշիվ է, որի նպատակն է նպաստել Իսպանիայի երեխաների երկարաժամկետ ֆինանսական կրթությանը: Ծրագիրն իրականացվում է որպես My Investor թվային բանկի ֆինանսական գործակալ[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - KPMG Startup Connect նախաձեռնության արտաքին խորհրդատու և համաձղեկավար՝ ղեկավարելով Իսպանիայի թվային էկոհամակարգում բիզնեսի զարգացման ուղղությունը[cite: 14]:
                  </li>
                  <li>
                    <strong className="text-gray-900">2025թ.</strong> - հանդիսանում է Էվոկաբանկի Խորհրդի անդամ, Աուդիտի կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ[cite: 14]:
                  </li>
                </ul>
              </div>

              {/* ԽՈՐՀՐԴԻ ԱՆԴԱՄԻ ԱՇԽԱՏԱՆՔԻ ՓՈՐՁ */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">ԽՈՐՀՐԴԻ ԱՆԴԱՄԻ ԱՇԽԱՏԱՆՔԻ ՓՈՐՁ</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ունի Խորհրդի անդամի լայն փորձ հանդիսանալով IDEADED (Deep Tech) ընկերության խորհրդի անդամ, Quiero Trabajo հիմնադրամի խորհրդակցական խորհրդի նախագահ, Crescenta-ի խորհրդակցական խորհրդի անդամ, Calafia Iberia-ի հիմնադիր անդամ (հրեշտակ ներդրող և ներդրումային ակումբի մեդիայի և հանրային կապերի գործառնական ղեկավար), Եվրոպական հանձնաժողովի Horizon Europe ծրագրի նորարարության փորձագետի կարգավիճակով ԵՄ Կանանց նորարարների մրցանակի ժյուրիի անդամ (2024-2025թթ.), FEDEPE-ի (Իսպանիայի կին տնօրենների, ղեկավարների, մասնագետների և ձեռնարկատերերի ֆեդերացիա) խորհրդի նախկին անդամ, ինչպես նաև PwC-ի «Women to Watch» ծրագրի 7-րդ թողարկման մասնակից[cite: 14]:
                </p>
              </div>

              {/* ԴԱՍԱՎԱՆԴՄԱՆ ՓՈՐՁ */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-purple-900 uppercase tracking-wide">ԴԱՍԱՎԱՆԴՄԱՆ ՓՈՐՁ</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ունի դասավանդման լայն փորձ որպես Fintech-ի, թվային բանկինգի և ֆինանսների ոլորտում դիսցիպլինայի թեմաներով դասախոս: Դասավանդում է որպես ասոցացված պրոֆեսոր ISDI-ում, IE-ում, ESADE-ում, ICADE-ում և Advantere-ում, ինչպես նաև ունեցել է առանձին համագործակցություններ NYU-ի հետ[cite: 14]:
                </p>
              </div>
            </div>
            </div>
            </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}