import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsHeaderSection() {
  const location = useLocation();

  const categories = [
    { name: 'Բիզնես', path: '/blog/businessss' },
    { name: 'Կենսակերպ', path: '/hy/blog/lifestyle-blogs' },
    { name: 'Ներդրումներ', path: '/blog/investment' },
 ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Վերևի հատված՝ Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* 1. Breadcrumbs (Հացի փշրանքներ) */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-semibold">Բլոգ
</span>
        </nav>

        {/* 2. Մեծ Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
         Բլոգ
        </h1>

        {/* 3. Զտման կոճակներ (Բաշխված երկու տողի վրա, որպեսզի բոլորը հստակ երևան) */}
        <div className="w-full flex flex-wrap items-center gap-3 pt-1">
          
          {categories.map((cat) => {
            const isActive = location.pathname === cat.path;
            return (
              <Link
                key={cat.name}
                to={cat.path}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-purple-200'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200/60'
                }`}
              >
                {cat.name}
              </Link>
            );
          })}

          {/* «Բոլորը >» կոճակը */}
          <Link
            to="/blog/blog-archive"
            className={`inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer shadow-xs ${
              location.pathname === '/news' || location.pathname === '/news/all'
                ? 'bg-purple-700 text-white shadow-purple-200'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-900'
            }`}
          >
            <span>Արխիվ</span>
            <span className="text-base leading-none">›</span>
          </Link>

        </div>

       

       <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-purple-100 shadow-sm">
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
    <Link 
      to="/hy/blog/lifestyle-blogs" 
      className="flex items-center space-x-3 group cursor-pointer w-fit"
    >
      <span className="w-4 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
      <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
        Կենսակերպ[cite: 17]
      </span>
    </Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
      Monthly Recap[cite: 17]
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:[cite: 17]
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      05.01.2026[cite: 17]
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png" 
      alt="Monthly Recap" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* 5. Երկրորդ բլոկ՝ EvocaINVEST և 4 փոքր քարտերը */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
  
  {/* Մեծ ձախ քարտը */}
  <Link to="/blog/investment" className="lg:col-span-7 space-y-6 group cursor-pointer block">
    <div className="w-full rounded-3xl overflow-hidden shadow-md bg-gray-100">
      <img 
        src="https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg" 
        alt="EvocaINVEST. Ինչպե՞ս կատարել գործարքներ" 
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <span className="w-4 h-4 bg-purple-900 inline-block rounded-xs"></span>
        <span className="text-purple-900 font-bold text-sm tracking-wide uppercase">
          Ներդրումներ[cite: 17]
        </span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight group-hover:text-purple-700 transition-colors">
        EvocaINVEST. Ինչպե՞ս կատարել գործարքներ[cite: 17]
      </h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:[cite: 17]
      </p>
      <div className="text-gray-400 font-medium text-sm pt-1">
        17.06.2024[cite: 17]
      </div>
    </div>
  </Link>

  {/* Աջի 4 փոքր քարտերը */}
  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
    
    <Link to="/blog/investment" className="flex flex-col space-y-3 bg-white group cursor-pointer">
      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
        <img 
          src="https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg" 
          alt="Ներդրումների կարելիներն ու չի կարելիները" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-purple-900 rounded-xs"></span>
          <span className="text-purple-900 font-bold text-xs uppercase">Ներդրումներ[cite: 17]</span>
        </div>
        <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
          Ներդրումների կարելիներն ու չի կարելիները[cite: 17]
        </h4>
        <div className="text-xs text-gray-400 font-medium">23.04.2024[cite: 17]</div>
      </div>
    </Link>

    <Link to="/blog/investment" className="flex flex-col space-y-3 bg-white group cursor-pointer">
      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
        <img 
          src="https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg" 
          alt="Փոքր քայլերով դեպի մեծ եկամուտներ" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-purple-900 rounded-xs"></span>
          <span className="text-purple-900 font-bold text-xs uppercase">Ներդրումներ[cite: 17]</span>
        </div>
        <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
          Փոքր քայլերով դեպի մեծ եկամուտներ[cite: 17]
        </h4>
        <div className="text-xs text-gray-400 font-medium">11.04.2024[cite: 17]</div>
      </div>
    </Link>

    <Link to="/blog/businessss" className="flex flex-col space-y-3 bg-white group cursor-pointer">
      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
        <img 
          src="https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg" 
          alt="Ինչպե՞ս սկսել բիզնես: Guide from A to Z" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-purple-900 rounded-xs"></span>
          <span className="text-purple-900 font-bold text-xs uppercase">Բիզնես[cite: 17]</span>
        </div>
        <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
          Ինչպե՞ս սկսել բիզնես: Guide from A to Z[cite: 17]
        </h4>
        <div className="text-xs text-gray-400 font-medium">05.01.2024[cite: 17]</div>
      </div>
    </Link>

    <Link to="/hy/blog/lifestyle-blogs" className="flex flex-col space-y-3 bg-white group cursor-pointer">
      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
        <img 
          src="	https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png" 
          alt="Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-purple-900 rounded-xs"></span>
          <span className="text-purple-900 font-bold text-xs uppercase">Կենսակերպ[cite: 17]</span>
        </div>
        <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
          Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան[cite: 17]
        </h4>
        <div className="text-xs text-gray-400 font-medium">09.02.2022[cite: 17]</div>
      </div>
    </Link>

  </div>
</div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-purple-100 shadow-sm">
  {/* Աջ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
    <Link 
      to="/hy/blog/lifestyle-blogs" 
      className="flex items-center space-x-3 group cursor-pointer w-fit"
    >
      <span className="w-4 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
      <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
        Կենսակերպ[cite: 17]
      </span>
    </Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
      Ամանորի քո Evocaգույն երազանքը[cite: 17]
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ: Ինչպե՞ս երազանք պահել Ամանորի գիշերը: Ո՞րն է ամենաթրենդային նվերի տարբերակը: Բոլոր պատասխանները կգտնես բլոգում:[cite: 17]
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      21.12.2023[cite: 17]
    </div>
  </div>

  {/* Ձախ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png" 
      alt="Ամանորի քո Evocaգույն երազանքը" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* 7. Չորրորդ բլոկ՝ 3 հատանի նորությունների շարք */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          
          {/* Քարտ 1 */}
          <Link to="/blog/lifestyle-blogs/the-best-films-of-2021" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg" alt="Կենսակերպ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3  rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Կենսակերպ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
2021-ը դարձել է կինո պրեմիերաների մրցավազք              </h3>
              <div className="text-xs text-gray-400 font-medium">01.02.2021</div>
            </div>
          </Link>

          {/* Քարտ 2 */}
          <Link to="/blog/lifestyle-blogs/most-series-of-2021" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="	https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png" alt="Բանկային" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3  rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Կենսակերպ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
               2021-ի ամենասպասված 21 սերիալները

              </h3>
              <div className="text-xs text-gray-400 font-medium">18.01.2021</div>
            </div>
          </Link>

          {/* Քարտ 3 */}
          <Link to="/blog/lifestyle-blogs/most-professions-future" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png" alt="Բանկային" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3  rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Կենսակերպ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
               Ապագայի ամենապահանջված մասնագիտությունները
              </h3>
              <div className="text-xs text-gray-400 font-medium">22.06.2020</div>
            </div>
          </Link>

        </div>
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 my-8">
  {/* Background Banner Image */}
  <img 
    src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png" 
    alt="Evoca-գույնի հոգեբանական նկարագիրը" 
    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
  />

  {/* Overlay Content Card */}
  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 border border-purple-50">
    
    {/* Category Link */}
    <Link 
      to="/hy/blog/lifestyle-blogs" 
      className="flex items-center space-x-3 group cursor-pointer w-fit"
    >
      <span className="w-4 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
      <span className="text-purple-900 font-bold text-sm tracking-wide uppercase group-hover:text-purple-700 transition-colors">
        Կենսակերպ[cite: 17]
      </span>
    </Link>
    
    {/* Article Title Link */}
    <Link to="/blog/lifestyle-blogs/pantone-ultra-violet" className="block group">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
        Evoca-գույնի հոգեբանական նկարագիրը[cite: 17]
      </h2>
    </Link>

    {/* Description */}
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Գույնը մարքեթինգային գործիք է: Այն ազդում է մարդու հոգեբանության վրա:[cite: 17]
    </p>

  </div>
</div>
      </main>

      {/* Ներքևի հատված՝ Footer */}
      <Footer />

    </div>
  );
}