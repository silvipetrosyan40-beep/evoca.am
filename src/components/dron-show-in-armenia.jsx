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
              <button onClick={() => handleNavigation('/news/innovations')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Նորարարություններ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Evocabank 3.0



</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
             <Link to="/news/innovations" className="flex items-center space-x-2.5 group w-fit no-underline">
  <span className="w-4 h-2.5 bg-[#38d7fe] rounded-[2px] inline-block"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base group-hover:underline">Նորարարություններ</span>
</Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Evocabank 3.0
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Evocabank-ը յուրահատուկ կերպով նշեց իր 3 և Բանկի հիմնադրման 30-ամյակը՝ առաջին անգամ Հայաստանում կազմակերպելով լուսային դրոն շոու:


         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
21.09.2020
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16103863601729/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Սեպտեմբերի 19-ին՝ 21:00, <strong className="text-purple-800">300 դրոն</strong> միաժամանակ լուսավորեցին գիշերային Երևանի երկինքը՝ կազմելով գեղեցիկ երկրաչափական պատկերներ և շնորհավորելով <strong className="text-purple-800">Evocabank</strong>-ի տարեդարձը[cite: 16]:
  </p>

  <p>
    Շոուն տեղի ունեցավ Մայր Հայաստան արձանի հարթակից 200մ բարձրության վրա և տեսանելի էր Երևանի գրեթե ողջ տարածքից[cite: 16]:
  </p>

  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 italic text-gray-600 bg-purple-50/40 rounded-r-2xl">
    «Որոշեցինք Evocabank-ի տարեդարձը նշել յուրահատուկ կերպով՝ կիսվելով մեր տոնը բոլորի հետ և տոնական տրամադրություն փոխանցելով մեր համաքաղաքացիներին։ Գործընկերների և հաճախորդների մասնակցությամբ փակ միջոցառման փոխարեն, ինչպես միշտ, որոշեցինք տարբերվել և կազմակերպել միջոցառում, <strong className="text-purple-800">ինչպիսին Հայաստանում դեռ երբեք տեղի չէր ունեցել՝ դրոնների մեծ լուսային շոու</strong>։ Ուրախ ենք, որ Evocabank-ի շնորհիվ մեր համաքաղաքացիները նույնպես հնարավորություն ստացան վայելելու աշխարհում շատ թրենդային և տեխնոլոգիական բարդ լուծումներ կիրառող <strong className="text-purple-800">drone light show</strong> Երևանի երկնքում։ Հետևելով շոուն դիտելու համար հավաքված, փողոցում զբոսնող և անակնկալ եկած ականատեսների արձագանքին ու էմոցիաներին, սոցիալական ցանցերում տարածված հազարավոր լուսանկարներին ու հոլովակներին՝ կարծում ենք, որ մեզ հաջողվեց մարդկանց տոնական տրամադրություն փոխանցել»,- նշել է Evocabank-ի Վարչության նախագահ <strong className="text-purple-800">Կարեն Եղիազարյանը</strong>[cite: 16]:
  </blockquote>

  <p>
    Ինչ վերաբերում է Սարալանջի տարածքում չոր խոտածածկի բռնկմանը, ինչը որոշ լրատվամիջոցներ կապել են Evocabank-ի միջոցառման հետ, տեղեկացնում ենք, որ իրավառությունն իրականացվել է մասնագիտացված կազմակերպության՝ անվտանգության բոլոր պահանջների պահպանմամբ և համապատասխան մարմինների ներկայությամբ, որոնք էլ անհապաղ արձագանքել են և կարճ ժամանակում մարել բռնկումը: Անկախ բռնկման հանգամանքներից՝ Evocabank-ը կդիմի Երևանի քաղաքապետարան՝ չոր խոտածածկի հատվածում Բանկի միջոցներով ծառատունկ իրականացնելու առաջարկով,-նշել են Բանկից[cite: 16]:
  </p>

  <div className="my-6">
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-purple-100">
      <iframe
        className="w-full h-full absolute inset-0"
        src="https://www.youtube.com/embed/ClcUpYqhAqI"
        title="Evoca 3.0 Drone Light Show in Yerevan"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
    <div className="flex justify-center">
      <img
        src="https://www.evoca.am/images-cache/news/1/16105472719006/428x321.png"
        alt="Drone Light Show in Yerevan - 1"
        className="max-w-xs w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://www.evoca.am/images-cache/news/1/1610547271905/428x321.jpg"
        alt="Drone Light Show in Yerevan - 2"
        className="max-w-xs w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://www.evoca.am/images-cache/news/1/16105472719084/428x321.jpg"
        alt="Drone Light Show in Yerevan - 3"
        className="max-w-xs w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://www.evoca.am/images-cache/news/1/161054727192/428x321.jpg"
        alt="Drone Light Show in Yerevan - 4"
        className="max-w-xs w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
      />
    </div>
  </div>
</article>

                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/allpage3/function-of-evocatouch" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17515401570632/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                        Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">03.07.2025</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/allpage3/payments-with-vpos" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17500622728518/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Նոր ինտերֆեյս՝ ավելի հարմար առցանց վճարումներ
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.06.2025</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/allpage7/e-sign" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/16854405293433/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                        Էլեկտրոնային ստորագրության e-Sign համակարգ Evocabank-ում             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">26.05.2023</span>
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