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
              <span className="text-gray-800 font-medium shrink-0">Evocabank Online ապառիկ՝ Crossroad.com օնլայն խանութում







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
Evocabank Online ապառիկ՝ Crossroad.com օնլայն խանութում
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Այսուհետ Crossroad.com-ում կատարեք օնլայն գնումներ ապառիկ տարբերակով, 0%-ով*, առանց կանխավճարի և գումարը վճարել մաս-մաս՝ 2 տարում։




         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
07.07.2020
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16100391636205/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Ապառիկը կձևակերպվի օնլայն՝ առանց տնից դուրս գալու կամ Բանկ այցելելու[cite: 16]:
  </p>

  <p>
    Պարզապես Crossroad.com-ում գտիր քո ուզած ապրանքը, լրացրու մի քանի տվյալ, այնուհետև որպես վճարման մեթոդ ընտրիր <strong className="text-purple-800">Evocabank Online ապառիկ տարբերակը</strong>[cite: 16]: Գործընթացն արագ է, հեշտ և ավտոմատացված՝ առանց ավելորդ թղթաբանության[cite: 16]:
  </p>

  <p>
    Crossroad-ն ապրանքների, ծառայությունների, կտրոնների առցանց գերիխանութ է[cite: 16]: Գնորդները կարող են գտնել և գնել բազմատեսակ ապրանքներ և ծառայություններ Crossroad հարթակում[cite: 16]: Վաճառողները կարող են բացել իրենց սեփական ինտերնետային խանութը Crossroad-ի հարթակում[cite: 16]: Առաքումն իրականացվում է կարճ ժամկետներում՝ ապրանքների մեծամասնության համար մի քանի ժամից մինչև պատվերի ձևակերպման հաջորդ օրը[cite: 16]: Կայքից կարելի է գնել ապրանքներ տան և այգու համար, սպորտային սարքավորումներ, գրասենյակային պարագաներ, հագուստ, աքսեսուարներ, խաղեր, գեղեցկության և խնամքի միջոցներ, ինչպես նաև՝ մթերք[cite: 16]: Այստեղ ներկայացված են հայտնի ապրանքանիշեր, ինչպես նաև սիրված <strong className="text-purple-800">IKEA</strong> ապրանքանիշը[cite: 16]:
  </p>

  <p>
    Այսուհետ Crossroad.com-ը կարելի է գտնել նաև <strong className="text-purple-800">EvocaTOUCH հավելվածում</strong>[cite: 16]: Հավելվածից գնումներ կարող են կատարել ինչպես <strong className="text-purple-800">Evocabank</strong>-ի հաճախորդները, այնպես էլ այն օգտատերերը, որոնք Բանկի հաճախորդ չեն[cite: 16]:
  </p>

  <p>
    <strong className="text-purple-800">EvocaTOUCH հավելվածի</strong> միջոցով կատարելով գնումներ IKEA խանութից և օգտագործելով WelcomeEvoca պրոմոկոդը՝ օգտատերերը կստանան հատուկ <strong className="text-purple-800">10% զեղչ</strong> <strong className="text-purple-800">Evocabank</strong>-ի և Crossroad-ի կողմից[cite: 16]: Պրոմոկոդն ուժի մեջ է մինչև Սեպտեմբերի 30-ը[cite: 16]:
  </p>

  <p>
    <strong className="text-purple-800">Evocabank</strong>-ը, որպես նորարար և ժամանակակից բանկ, մշտապես ներկայացնում է նոր, հետաքրքիր պրոդուկտներ՝ դարձնելով իր գործընկերների կյանքն ավելի հետաքրքր և հարմարավետ[cite: 16]:
  </p>

  <p className="pt-4 border-t border-purple-50 text-sm text-gray-500">
    * Ամսական սպասարկման վճար՝ 1%: Ստե տարեկան փաստացի տոկոսադրույք՝ 24%[cite: 16]:
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