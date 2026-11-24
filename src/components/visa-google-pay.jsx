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
              <span className="text-gray-800 font-medium shrink-0">Evoca-ն Հայաստանում մեկնարկում է Google Pay վճարումներ






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
Evoca-ն Հայաստանում մեկնարկում է Google Pay վճարումներ
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Կցիր Evoca Visa քարտդ Google Pay-ին և կատարիր անհպում վճարումներ:




         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
15.11.2022
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16684929021333/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    <strong className="text-purple-800">Evocabank</strong>-ի քարտապաններն այսօրվանից կարող են օգտվել պարզ և անվտանգ անհարկում վճարումներից <strong className="text-purple-800">Google Pay</strong>-ով, ինչպես նաև՝ թվային քարտերի ավելացումից Android և Wear OS սարքերում[cite: 16]:
  </p>

  <p>
    Քարտապանները կարող են ավելացնել <strong className="text-purple-800">Evocabank</strong>-ի կրդիտային և դեբետային քարտերը <strong className="text-purple-800">Google Wallet</strong>-ում թվային դրամապանակ, որն այսօրվանից հասանելի է նաև Հայաստանում, և վճարումներ կատարել ցանկացած վայրում, որտեղ ընդունվում են անհարկում վճարումներ[cite: 16]: Բացի վճարային քարտերից՝ քարտապանները <strong className="text-purple-800">Google Wallet</strong>-ում կարող են նաև ավելացնել լոյալության քարտեր, ինքնաթիռի նստեցման կտրոններ (boarding passes) և միջոցառումների տոմսեր, և հասանելիություն ունենալ դրանց[cite: 16]:
  </p>

  <p>
    Շնորհիվ անվտանգության մի քանի մակարդակի՝ Google Pay-ի օգտագործումը դարձնում է վճարումներն ավելի ապահով[cite: 16]: Ավելացնելով <strong className="text-purple-800">Evocabank</strong>-ի քարտի կողմից արդեն իսկ տրամադրվող պաշտպանությունը՝ Այն ներառում է բանկային ստանդարտ թողենիզացիա, ինչը նշանակում է՝ Google Wallet-ում ավելացված քարտով վճարելիս՝ գործարքները կատարվում են վիրտուալ քարտի համարի (token-ի) միջոցով[cite: 16]: Այս token-ը, կախված սարքից, տարբերվում է և կապված է դինամիկ անվտանգության կոդի հետ, որը փոխվում է յուրաքանչյուր գործարքի հետ՝ ապահովելով լրացուցիչ պաշտպանություն խարդախություններից[cite: 16]: Բացի այդ, եթե Ձեր հեռախոսը երբևէ կորի կամ գողացվի, կարող եք պարզապես օգտվել «Գտնել իմ սարքը» գործառույթից՝ ցանկացած վայրից Ձեր սարքն անմիջապես բლოկավորելու, նոր գաղտնաբառ ստեղծելու կամ նույնիսկ Ձեր անձնական տվյալներից ամբողջությամբ մաքրելու համար[cite: 16]:
  </p>

  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 italic text-gray-600 bg-purple-50/40 rounded-r-2xl">
    «Google Pay-ն ավելի քան 45 երկրների օգտատերերի համար ապահովում է արագ, հեշտ և անվտանգ վճարումներ իրենց Android հեռախոսով կամ Wear OS սարքով» - ասում է <strong className="text-purple-800">Google Wallet-ի փոխնախագահ և գործադիր տնօրեն Ջենի Չենգը</strong>[cite: 16]: «Օգտատերերը կարող են պարզապես ավելացնել իրենց դեբետային և կրեդիտային քարտերը Google Wallet հավելվածում և վստահ լինել, որ իրենց ֆինանսական տվյալներն ապահով են և չվտանգված, երբ գնումներ են կատարում կամ գնացքի տոմս գնում»[cite: 16]:
  </blockquote>

  <p>
    Ձեր <strong className="text-purple-800">Evocabank</strong>-ի քարտը Google Pay-ին կցելու համար ներբեռնեք <strong className="text-purple-800">Google Wallet</strong> հավելվածը <strong className="text-purple-800">Google Play Store</strong>-ից արդեն այսօր[cite: 16]:
  </p>

  <div className="space-y-4 pt-4 border-t border-purple-50">
    <p className="font-semibold text-purple-900">
      • Ի՞նչ նպատակով կարող եք օգտագործել Google Wallet-ը[cite: 16]
    </p>
    <p>
      Օգտատերերը կարող են ավելացնել և օգտագործել վճարային քարտեր, լոյալության քարտեր և ինքնաթիռի նստեցման կտրոններ (boarding passes), և ժամանակի ընթացքում կավելանան լրացուցիչ հնարավորություններ[cite: 16]:
    </p>
  </div>

  <div className="space-y-4">
    <p className="font-semibold text-purple-900">
      • Ո՞րն է տարբերությունը Google Wallet-ի և Google Pay-ի միջև[cite: 16]
    </p>
    <p>
      Google Pay-ը Google Play-ում, հավելվածներում և համացանցում վճարումներ կատարելու ու անվտանգ գնումներ կատարելու համար է[cite: 16]:
    </p>
    <p>
      Google Wallet-ում Դուք պահում եք Ձեր վարկային կամ դեբետային քարտերը, որպեսզի կարողանաք դրանք օգտագործել Google Pay-ի հետ, ինչպես նաև՝ հավատարմության քարտեր, ինքնաթիռի նստեցման կտրոններ (boarding passes) և այլ պրոդուկտներ[cite: 16]:
    </p>
  </div>

  <div className="space-y-4">
    <p className="font-semibold text-purple-900">
      • Ո՞րն են Google Wallet-ի առավելությունները օգտատերերի համար[cite: 16]
    </p>
    <p>
      Google Wallet-ը հեշտ հասանելի է և պարզ օգտագործման համար, ինչպես նաև ապահովում է անվտանգության բարձր ստանդարտներ[cite: 16]:
    </p>
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