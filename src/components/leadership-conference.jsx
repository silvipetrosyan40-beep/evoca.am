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
              <span className="text-gray-800 font-medium shrink-0">Evoca-ն՝ The Science of Leadership կոնֆերանսի գործընկեր


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
Evoca-ն՝ The Science of Leadership կոնֆերանսի գործընկեր
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Հոկտեմբերի 4-ին Սարդարապատում տեղի կունենա The Science of Leadership կոնֆերանսը, որի գործընկերն է Evoca-ն։

         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
26.09.2024


             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17273335340884/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Ոչ թե պարզապես սովորել՝ ինչ է առաջնորդությունը, այլ կիրառել այն[cite: 20]:
  </p>

  <p>
    Եթե մասնակցել ես Cascade People & Business-ի կողմից կազմակերպված կոնֆերանսներից գոնե մեկին, գիտես, որ այնտեղ ոչ միայն սովորում ես, այլ ձեռք ես բերում փորձ այն կիրառելու[cite: 20]:
  </p>

  <p>
    <strong className="text-purple-800">Evoca</strong>-ն եղել է 2021թ.-ին անցկացված <a href="#" className="text-purple-700 underline font-medium">The Symphony of Leadership կոնֆերանսի</a> գլխավոր հովանավորը, ինչպես նաև 2023թ.-ին անցկացված <a href="#" className="text-purple-700 underline font-medium">The Nature of Leadership կոնֆերանսի</a> Keynote Speaker Joni Peddie-ի ելույթի գործընկերը[cite: 20]:
  </p>

  <p>
    12 տարվա ընթացքում կոնֆերանսն իր շուրջ է համախմբել միջազգային հայտնի խոսնակների և ավելի քան 3500 մասնակցի շուրջ 40 երկրից[cite: 20]: Այս տարվա թեման է՝ <strong className="text-purple-800">«The Science of Leadership»</strong>, որը կենտրոնանալու է անընդհատ փոփոխվող աշխարհում մեզ անվերջ հետապնդող մարտահրավերների վրա, որտեղ մարդկային ուղեղը պետք է օգտագործի AI-ն՝ ավելի լավ արդյունքների և ավելի արդյունավետ առաջնորդության համար[cite: 20]:
  </p>

  <p className="font-semibold text-purple-900">
    Այս տարի կոնֆերանսի մասնակիցներին սպասվում է[cite: 20]՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>3 գլխավոր խոսնակի ելույթ[cite: 20]</li>
    <li>2 սեսիա ձեր ընտրությամբ[cite: 20]</li>
    <li>ամբողջ օրվա սնունդ՝ ներառյալ գալա ընթրիք[cite: 20]</li>
    <li>խմիչքներ և կոկտեյլներ[cite: 20]</li>
    <li>նեթվորքինգ և թիմային ծրագրեր[cite: 20]</li>
    <li>էքսպո և տուր թանգարանում[cite: 20]</li>
    <li>անվճար shuttle ավտոբուսներ (քաղաքի կենտրոնից մինչև միջոցառման վայր և հակառակ ուղղությամբ)[cite: 20]</li>
  </ul>

  <h3 className="text-xl font-bold text-purple-900 pt-2">
    3 գլխավոր խոսնակներն են[cite: 20]
  </h3>

  <ol className="list-decimal pl-6 space-y-2 font-medium text-gray-900">
    <li>Nadia Ait[cite: 20]</li>
    <li>Ahmed Adel[cite: 20]</li>
    <li>Igor Khalatian[cite: 20]</li>
  </ol>

  <p>
    Նրանց ելույթից հետո միասին կպարզեք՝ ինչպես կարող է AI-ն փոխել խաղի կանոնները ու այլևս երբեք աշխարհին նույն կերպ չենք նայի[cite: 20]:
  </p>

  <p>
    Այսպիսով, AI դարաշրջանում դու կհասկանաս, թե ինչու է հուզական և ոչ խոսքայինինտելեկտի զարգացումն այդքան կարևոր, կկարողանաս կատարել չորս ընտրություն և գեներացնել նոր գաղափարներ, կծանոթանաս արհեստական ինտելեկտի այնպիսի գործիքների հետ, որոնք հեղափոխում են առաջնորդության վերաբերյալ մեր ընկալումները[cite: 20]:
  </p>

  <p className="font-semibold text-gray-900">
    Սպասում ենք բոլորիդ <strong className="text-purple-800">հոկտեմբերի 4-ին Մարդարապատում՝ The Science of Leadership</strong> կոնֆերանսին՝ միասին կիսվելու ոլորտում լավագույնների գիտելիքներն ու փորձը[cite: 20]:
  </p>

  <p className="pt-2 border-t border-purple-50 text-sm text-gray-500">
    <strong className="text-purple-800">Evocabank</strong>-ը, լինելով նորարար և թվային Բանկ, շարունակաբար ներդրումներ է կատարում կրթության և ժամանակակից տեխնոլոգիաների զարգացման մեջ՝ երիտասարդության համար ստեղծելով մեծ հնարավորություններ[cite: 20]:
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