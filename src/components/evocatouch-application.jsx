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
              <span className="text-gray-800 font-medium shrink-0">Բիոմետրիկ նույնականացում՝ EvocaTOUCH հավելվածում






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
Բիոմետրիկ նույնականացում՝ EvocaTOUCH հավելվածում
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Արհեստական բանականությամբ բիոմետրիկ նույնականացման համակարգի միջոցով Evocabank-ը հասանելի կլինի ամենուր։



         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
15.07.2020
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16183854252197/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Շարունակելով զարգացնել թվային բենքինգը՝ <strong className="text-purple-800">Evocabank</strong>-ը հերթական նորարարական լուծումն է ներկայացնում[cite: 16]: Այսուհետ օնլայն տարբերակով քարտի կամ վարկի համար դիմելիս, կամ հաշվի բացման հայտ լրացնելիս՝ անհրաժեշտ է անցնել բիոմետրիկ նույնականացման գործընթաց[cite: 16]:
  </p>

  <p>
    Բոլոր այն ֆիզիկական անձինք, որոնք ցանկություն ունեն բացել հաշիվ կամ քարտ, ինչպես նաև ստանալ վարկ, պետք է ներբեռնեն <strong className="text-purple-800">EvocaTOUCH</strong> հավելվածը, ընտրեն «Բացել հաշիվ, Պատվիրել քարտ կամ Ստանալ վարկ», այնուհետև՝ անցնեն անձը հաստատող փաստաթղթերի և դեմքի կենսաչափական տվյալների (բիոմետրիկ) նույնականացում[cite: 16]:
  </p>

  <p>
    <strong className="text-purple-800">Evocabank</strong>-ի կողմից ներդրված կենսաչափական տվյալների ստուգման համակարգն արհեստական բանականությամբ (artificial intelligence) օժտված ծրագրային լուծում է[cite: 16]: Այն կատարում է համեմատություն՝ տալով դիմող անձի նույնականացման դրական կամ բացասական եզրակացություն[cite: 16]: Այս համակարգի ներդրումը կբարձրացնի հաճախորդների սպասարկման որակը և նվազագույնի կհասցնի խարդախության ռիսկերը[cite: 16]:
  </p>

  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 italic text-gray-600 bg-purple-50/40 rounded-r-2xl">
    «Բիոմետրիկ նույնականացման համակարգի ներդրմամբ մենք ավելացնում ենք ֆինանսական ծառայությունների հասանելիությունը, մատչելիությունը և հարմարավետությունը: Այս նորարարության շնորհիվ Բանկի հաճախորդ կարելի է դառնալ և բանկային ծառայություններ ստանալ անկախ օրվա ժամից, գտնվելու վայրից կամ մասնաճյուղային ցանցի առկայությունից»,- նշել է թվային բիզնեսի վարչության պետ <strong className="text-purple-800">Արթուր Կարճիկյանը</strong>[cite: 16]:
  </blockquote>

  <p className="pt-2 border-t border-purple-50 text-sm text-gray-500">
    <strong className="text-purple-800">Evocabank</strong>-ը պարբերաբար ներդնում է նորարար լուծումներ[cite: 16]: Բանկը համարվել է լավագույն մոբայլ բանկը Հայաստանում՝ ըստ SME Banking club-ի, 2-րդ տարին անընդմեջ ճանաչվել է լավագույն թվային բանկը Հայաստանում՝ ըստ Global Banking and Finance Review ամսագրի, իսկ Global Finance հեղինակավոր ամսագիրը Evocabank-ին ճանաչել է լավագույն սպառողական թվային բանկը Հայաստանում արդեն 3-րդ տարին անընդմեջ[cite: 16]:
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