import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsDetailFincomm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* 1. Վերադարձի կոճակ և Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          
          {/* «Վերադառնալ» կոճակ */}
          <Link
            to="/news/all"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-5 py-2.5 rounded-full transition-all w-fit cursor-pointer text-sm shadow-xs"
          >
            <span className="text-base">←</span>
            <span>Վերադառնալ</span>
          </Link>

         {/* Breadcrumbs */}
<nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto">
  <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/news/all" className="hover:text-purple-700 transition-colors">
    Նորություններ
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/news/csr" className="hover:text-purple-700 transition-colors">
    CSR
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
Evocabank-ը 10,000,000 դրամ է փոխանցել կորոնավիրուսի դեմ պայքարելու համար
  </span>
</nav>

        </div>

        {/* 2. Վերնագրի և մեծ նկարի բլոկ */}
        <div className="relative">
          
          {/* Ձախ կողմի սոցիալական կոճակներ (Desktop-ի համար) */}
          <div className="hidden lg:flex flex-col space-y-2 absolute -left-14 top-0">
            <a href="#facebook" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">f</span>
            </a>
            <a href="#linkedin" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="#instagram" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">ig</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Վերնագիր և կարճ նկարագրություն */}
            <div className="lg:col-span-6 space-y-6">
             <Link 
  to="/news/csr" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-[#76ff03] inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    CSR
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Evocabank-ը 10,000,000 դրամ է փոխանցել կորոնավիրուսի դեմ պայքարելու համար
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Evocabank-ը 10,000,000 դրամ է փոխանցել՝ կորոնավիրուսային հիվանդության կանխարգելման և հաղթահարմանն ուղղված առողջապահության նախարարության միջոցառումներին աջակցելու…


















              </p>
              <p>
17.03.2020
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/16108085658361/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

  
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2 pb-2">
    <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
      10,000,000 դրամ՝ կորոնավիրուսային հիվանդության կանխարգելման և հաղթահարման նախաձեռնություններին[cite: 18]
    </h2>
    <p className="font-bold text-purple-700">
      Evocabank-ի աջակցությունը առողջապահության նախարարությանը[cite: 18]
    </p>
  </div>

  <p>
    <strong className="text-purple-700">Evocabank</strong>-ը 10,000,000 դրամ է փոխանցել՝ կորոնավիրուսային հիվանդության կանխարգելման և հաղթահարմանն ուղղված առողջապահության նախարարության միջոցառումներին աջակցելու նպատակով[cite: 18]:
  </p>

  <p>
    Ինչպես քիչ առաջ նշել է առողջապահության նախարար Արսեն Թորոսյանը՝ գումարը կուղղվի բժշկական անձնակազմի խրախուսմանման, բժշկական պարագաների և սարքավորումների ձեռքբերման, ինչպես նաև բժշկական կենտրոնների շենքային պայմանների բարելավման վրա[cite: 18]:
  </p>

  <p>
    Բանկը, իր կորպորատիվ սոցիալական պատասխանատվության շրջանակներում, մշտապես աջակցություն է ցուցաբերում հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններին[cite: 18]:
  </p>

  <p className="pt-4 border-t border-purple-50 italic font-medium text-purple-700 text-center">
    Բոլորին մաղթում ենք առողջություն և դրական տրամադրվածություն[cite: 18]:
  </p>
</article>


        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/allpage4/for-future-foundation" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17340920050867/780x585.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">13.12.2024</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/allpage5/etchmiadzin-book" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17237286203482/780x585.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Evoca-ն՝ Սուրբ Էջմիածնի Մայր Տաճարի մասին ժողովածուի հովանավոր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">15.08.2024</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/allpage4/notre-dame-cathedral" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17337499936685/780x585.jpg" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">09.12.2024</span>
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}