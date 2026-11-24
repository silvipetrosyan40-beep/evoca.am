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
              <span className="text-gray-800 font-medium shrink-0">Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես



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
Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
EvocaTOUCH-ի նոր ֆունկցիան հնարավորություն է տալիս ստանալ վճարման հաստատման կոդը ոչ միայն SMS-ով, այլև էլ․ փոստով, անգամ եթե չես ակտիվացրել ռոումինգը։

         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
03.07.2025
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17515401570632/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

 

       <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Ճամփորդելիս բոլորս հիմնականում կենտրոնանում ենք լավ ժամանակ անցկացնելու վրա և հաճախ մոռանում, որ մինչև ճամփորդությունը սկսելը պետք է կատարել մի քանի գործողություն՝ այն ավելի հարմար դարձնելու համար:
  </p>

  <p>
    Օրինակ՝ երբ դուրս ես եկել երկրից և ռոումինգ չես ակտիվացրել, կարող են առաջանալ անհարմարություններ՝ կապված օնլայն վճարումների հետ:
  </p>

  <div className="bg-purple-50/60 p-5 rounded-2xl border border-purple-100 space-y-3">
    <p className="font-bold text-purple-900">
      Պատկերացրու հետևյալ իրավիճակը.
    </p>
    <p>
      Դու գտնվում ես Պորտուգալիայում և ուզում ես պատվիրել սնունդ McDonald’s-ից: Ընտրում ենք ուտելիքը, սկսում ես վճարման գործընթացը, ու համակարգը պահանջում է հաստատման կոդ, որը սովորաբար ստանում ես SMS-ով: Բայց քանի որ չես ակտիվացրել ռոումինգը, SMS-ը չի հասնում, և վճարումը չի կատարվում:
    </p>
  </div>

  <p className="font-semibold text-purple-900">
    Ի՞նչ է առաջարկում Evocabank-ը.
  </p>

  <p>
    <strong className="text-purple-800">EvocaTOUCH</strong> հավելվածը հնարավորություն է տալիս ստանալ այդ նույն հաստատման կոդը ոչ միայն SMS-ով, այլև էլ. փոստով: Այսինքն, անգամ եթե չես ակտիվացրել ռոումինգը կամ SIM քարտդ ակտիվ չէ, կարող ես ստանալ կոդը քո էլ. հասցեին և առանց խնդիրների ավարտել վճարումը:
  </p>

  <p>
    Այս ֆունկցիան հեշտացնում է վճարումների ընթացքը՝ անկախ գտնվելու վայրից:
  </p>

  <p className="font-semibold text-purple-900">
    Ինչպե՞ս ակտիվացնել ֆունկցիան EvocaTOUCH հավելվածում.
  </p>

  <div className="flex justify-center pt-2">
    <img
      src="https://www.evoca.am/file_manager/WEB.jpg"
      alt="EvocaTOUCH ֆունկցիայի ակտիվացման քայլեր"
      className="max-w-2xl w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
    />
  </div>

  <p className="pt-2 border-t border-purple-50 font-medium text-purple-900">
    <strong className="text-purple-800">Evocabank</strong>-ի հետ կարող ես ճամփորդել ամենուր և ամենակլարևորը՝ առանց անհարմարությունների:
  </p>
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