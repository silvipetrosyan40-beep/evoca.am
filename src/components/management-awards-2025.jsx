import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Home, ArrowLeft } from 'lucide-react';

export default function EvocaDigitalCardsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդեր */}
        <Header />

        {/* Հիմնական բովանդակություն */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Վերադարձ և Հացի փխուրներ (Breadcrumbs) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-sm border border-gray-200 transition-colors w-fit cursor-pointer font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Վերադառնալ</span>
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
              <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center shrink-0">
                <Home className="w-4 h-4" />
              </button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Նորություններ</button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news/lifestyle')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Կենսակերպ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Evocabank-ը` Project Management Awards 2025-ի գլխավոր գործընկեր




</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
            <Link to="/news/lifestyle" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-4 h-2.5 bg-[#84cc16] rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Կենսակերպ</span>
</Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Evocabank-ը` Project Management Awards 2025-ի գլխավոր գործընկեր
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Դեկտեմբերի 17-ին կայացավ Project Management Awards 2025 միջոցառումը, որի հատուկ հյուրն էր PMI-ի նախագահ Պիեր Լե Մանը։







     </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
18.12.2025
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17664112537702/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
   
            <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Հայաստանում Նախագծերի կառավարման մրցանակաբաշխությունը այս տարի անցկացվեց <strong className="text-purple-800">դեկտեմբերի 17-ին</strong> «Առնո Բաբաջանյան» համերգասրահում[cite: 17]:
  </p>

  <p>
    «Նախագծերի կառավարման համաժողով և մրցանակաբաշխություն 2025»-ը կազմակերպվել էր PMI Հայաստանի կողմից[cite: 17]: Միջոցառման հատուկ հյուրն էր PMI-ի նախագահ և գլխավոր գործադիր տնօրեն <strong className="text-purple-800">Պիեռ Լը Մանը</strong>[cite: 17]:
  </p>

  <p>
    Միջոցառման նպատակն էր միավորել նախագծերի կառավարման ոլորտի մասնագետներին և մրցանակ շնորհել տարվա լավագույն Նախագծի Ղեկավարներից մի քանիսին[cite: 17]:
  </p>

  <p className="font-semibold text-purple-900">
    4 անվանակարգերն էին[cite: 17]՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Տարվա Նախագծի Ղեկավար (Project Manager of the Year)[cite: 17]</li>
    <li>Նախագծի Ղեկավար՝ նորարարություն (Project Manager for Innovation)[cite: 17]</li>
    <li>Նախագծի Ղեկավար՝ սոցիալական ազդեցություն (Project Manager for Social Impact)[cite: 17]</li>
    <li>Նախագծի Ղեկավար՝ կայունություն (Project Manager for Sustainability)[cite: 17]</li>
  </ul>

  <p>
    Մրցանակաբաշխության ժյուրիի անդամներից էր <strong className="text-purple-800">Evocabank</strong>-ի Վարչության նախագահի տեղակալ <strong className="text-purple-800">Տաթևիկ Խաչատրյանը</strong>[cite: 17]:
  </p>

  <p>
    <strong className="text-purple-800">Evocabank</strong>-ի հատուկ մրցանակը շնորհվեց EBRD-ի փոքր բիզնեսի խորհրդատվության ղեկավար <strong className="text-purple-800">Զառա Օհանյանին</strong>[cite: 17]:
  </p>

  <p>
    Հատուկ մրցանակն էր՝ <strong className="text-purple-800">Harvard University-ի “Leading People, Building Teams” կրթական ծրագրի մասնակցություն</strong>[cite: 17]:
  </p>

  <p className="font-semibold text-purple-900">
    <strong className="text-purple-800">Evocabank</strong>-ը հանդիսանում էր Project Management Awards 2025-ի <strong className="text-purple-800">գլխավոր գործընկերը</strong>[cite: 17]:
  </p>

  <p className="pt-2 border-t border-purple-50 text-sm text-gray-500">
    Բանկը մշտապես խթանում է PMI-ի զարգացումը Հայաստանում, հովանավորելով իրենց կողմից կազմակերպված ոլորտի ամենամեծ կոնֆերանսներն ու միջոցառումները[cite: 17]:
  </p>
</article>



                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/life-style/evocabank_as_the_partner_of_fincomm_2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                      Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17913736819959/428x321.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր

                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026
</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17912685600228/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                       Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
            </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026
</span>
              </div>
            </Link>

          </div>
        </div>
                
         
                    
                    
        </main>
      </div>

      {/* Ֆութեր */}
      <Footer />
    </div>
  );
}   