import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocapreparun() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <Link 
            to="/all-news" 
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-full w-max transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/all-news" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="hover:text-purple-700 transition-colors">
              Բանկային
            </span>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-[250px] sm:max-w-none">
              ՊԱՐԶԱԲԱՆՈՒՄ

            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-6 space-y-6">
            <Link 
  to="/news/banking" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-700 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Բանկային
  </span>
</Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              ՊԱՐԶԱԲԱՆՈՒՄ
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Hetq.am-ում հրապարակված նյութը պարունակում է իրականությանը չհամապատասխանող տեղեկատվություն։
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
             05.06.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17806626445767/780x585.jpg" 
                alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
{/* Ստորին մանրամասն բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto pt-8 pb-8 space-y-6 border-t border-gray-100 text-gray-700 text-base sm:text-lg leading-relaxed">
          
          <p>
            <a 
              href="https://hetq.am/hy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 underline font-bold hover:text-purple-900"
            >
             Hetq.am
            </a>{' '}
-ում հրապարակված նյութը պարունակում է իրականությանը չհամապատասխանող տեղեկատվություն          </p>

          <p >
Նշված անձը Evocabank-ի հաճախորդ չէ և երբևէ չի հանդիսացել։

          </p>

          <p>
Հետևաբար, տվյալ անձի՝ Evocabank-ի հաճախորդ լինելու վերաբերյալ ցանկացած պնդում կամ ենթադրություն փաստացի չէ և չի համապատասխանում իրականությանը։

          </p>

         

         

          {/* 4. Այլ նորություններ (Other News Grid) */}
                 <div className="pt-16 border-t border-gray-100 space-y-8">
                   <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                     Այլ նորություններ
                   </h2>
         
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     
                     {/* Քարտ 1 */}
                     <Link to="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="	https://www.evoca.am/images-cache/news/1/17908437653512/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                        
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                                 Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից                </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">05.10.2026</span>
                       </div>
                     </Link>
         
                     {/* Քարտ 2 */}
                     <Link to="/news/block-transactions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                         
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                           Գործարքների արգելափակում 1 կոճակով
                         </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">01.06.2026</span>
                       </div>
                     </Link>
         
                     {/* Քարտ 3 */}
                     <Link to="/news/moodys-rating" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="	https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                        
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                         Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                         </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">18.08.2026</span>
                       </div>
                     </Link>
         
                   </div>
                 </div>

        </div>
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />

    </div>
  );
}