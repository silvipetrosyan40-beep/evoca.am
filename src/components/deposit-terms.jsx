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
              <button onClick={() => handleNavigation('/news/products')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Պրոդուկտներ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Ավանդի ավելի լավ պայմաններ Evocabank-ում






</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
             <Link to="/news/products" className="flex items-center space-x-2 group w-fit no-underline">
   <span className="w-3 h-3 bg-pink-500 rounded-sm inline-block"></span>
   <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Պրոդուկտներ</span> </Link>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Ավանդի ավելի լավ պայմաններ Evocabank-ում
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Evocabank-ում այսուհետ կարելի է ներդնել ավանդ էլ ավելի հարմար պայմաններով:

              </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
20.02.2020
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16108124660559/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    Ներդնելով <a href="#" className="text-purple-700 underline">ավանդ</a> Evocabank-ում՝ կարելի է ստանալ մինչև 10.75% եկամուտ ՀՀ դրամով ավանդների դեպքում և մինչև 5.75%՝ ԱՄՆ դոլարով ավանդ ներդնելու դեպքում[cite: 17]:
  </p>

  <p>
    Ձեր ավանդը կարող է համալրվել՝ սկսած 200,000 դրամից կամ 500 ԱՄՆ դոլարից: Տվյալ դեպքում տոկոսադրույքը ՀՀ դրամի դեպքում կնվազի 0.5%-ով, իսկ ԱՄՆ դոլարի դեպքում՝ 0.25%-ով՝ նախկին 0.5%-ի փոխարեն[cite: 17]:
  </p>

  <p>
    Ավանդ կարելի է ներդնել ինչպես Evocabank-ի Գլխամասում և մասնաճյուղերում, այնպես էլ օնլայն՝ EvocaTOUCH հավելվածով: Ի դեպ, հավելվածի միջոցով ներդրված ավանդներն ունեն ավելի լավ պայմաններ՝ դասական ավանդի տոկոսադրույք + 0.25%[cite: 17]:
  </p>

  <p>
    <strong className="text-purple-800">Evocabank</strong>-ը բարելավել է նաև ավանդի դադարեցման պայմանները[cite: 17]:
  </p>

  <p>
    Եթե ինչ-ինչ պատճառներով Ձեր գումարը անհրաժեշտ լինի Ձեզ մինչև ավանդային պայմանագրի ժամկետի ավարտը, Բանկը կիրականացնի ավանդի տոկոսագումարների վերահաշվարկ բարձր տոկոսադրույքներով[cite: 17]՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Ավանդը մինչև 365 օր պահելու դեպքում[cite: 17]՝
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li>0.5%՝ ՀՀ դրամով[cite: 17]</li>
        <li>0.1%՝ ԱՄՆ դոլարի կամ այլ արտարժույթի դեպքում[cite: 17]</li>
      </ul>
    </li>
    <li>
      Ավանդը 366 - 1,095 օր պահելու դեպքում[cite: 17]՝
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li>8.75%՝ ՀՀ դրամով[cite: 17]</li>
        <li>4.25%՝ ԱՄՆ դոլարի[cite: 17]</li>
        <li>2.25%՝ եվրոյի[cite: 17]</li>
        <li>5%՝ ռուբլու դեպքում[cite: 17]</li>
      </ul>
    </li>
  </ul>

  <p>
    Ավանդային պայմանագիր կնքելիս և ավանդային պայմանագրի գործողության ընթացքում այլ վճարներ և սպասարկման միջնորդավճարներ չեն գանձվում[cite: 17]:
  </p>

  <p>
    <strong className="text-purple-800">Evocabank</strong>-ը, որպես նորարար և ժամանակակից բանկ, մշտապես բարելավում է իր ծառայությունները՝ մատուցելով միջազգային բարձր չափանիշներին համապատասխան ծառայություններ[cite: 17]:
  </p>

  <p>
    Evocabank-ում ներդրված ավանդները երաշխավորված են <strong className="text-purple-800 font-medium">Ավանդների հատուցումը երաշխավորող հիմնադրամի</strong> կողմից[cite: 17]:
  </p>

  <p className="text-xs text-gray-400 pt-2 border-t border-purple-100">
    * Վճարվող տոկոսագումարները ենթակա են հարկման՝ 10%-ի չափով[cite: 17]:
  </p>
</article>
 
                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/products/evocabank-participates-in-autoshow-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17902383376936/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evoca-ն մասնակցում է Armenian Auto Show 2026-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">22.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
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