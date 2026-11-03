import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsHeaderSection() {
  const location = useLocation();

  const categories = [
    { name: 'Գլխավոր', path: '/news/general' },
    { name: 'Բանկային', path: '/news/banking' },
    { name: 'Հարցազրույցներ', path: '/news/interviews' },
    { name: 'Պրոդուկտներ', path: '/news/products' },
    { name: 'Նորարարություններ', path: '/news/innovations' },
    { name: 'Կենսակերպ', path: '/news/lifestyle' },
    { name: 'Մրցանակներ', path: '/news/awards' },
    { name: 'CSR', path: '/news/csr' },
    { name: 'Այլ', path: '/news/other' },
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
          <span className="text-gray-900 font-semibold">Նորություններ</span>
        </nav>

        {/* 2. Մեծ Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
          Նորություններ
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
            to="/news"
            className={`inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer shadow-xs ${
              location.pathname === '/news' || location.pathname === '/news/all'
                ? 'bg-purple-700 text-white shadow-purple-200'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-900'
            }`}
          >
            <span>Բոլորը</span>
            <span className="text-base leading-none">›</span>
          </Link>

        </div>

        {/* 4. Առաջին նորության բլոկ (Դիլիջան) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
              <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                Կենսակերպ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Դիլիջա՛ն, մենք գալիս ենք
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Սեպտեմբերի 18-ին Evocabank-ը նշում է իր նոր «Դիլիջան» մասնաճյուղի բացումը մեծ բացօթյա համերգով՝ DJ Jokey-ի և Ռեհինկարնացիայի մասնակցությամբ։
            </p>
            <div className="text-gray-400 font-medium text-sm pt-2">
              11.09.2026
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17891134831451/780x585.png" 
                alt="Դիլիջան, մենք գալիս ենք" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* 5. Երկրորդ բլոկ՝ AMX Awards և 4 փոքր քարտերը */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
          
          {/* Մեծ ձախ քարտը */}
          <Link to="/news/amx-awards" className="lg:col-span-7 space-y-6 group cursor-pointer block">
            <div className="w-full rounded-3xl overflow-hidden shadow-md bg-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png" 
                alt="Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-yellow-400 inline-block rounded-sm"></span>
                <span className="text-purple-900 font-bold text-sm tracking-wide uppercase">
                  Մրցանակներ
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight group-hover:text-purple-700 transition-colors">
                Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:
              </p>
              <div className="text-gray-400 font-medium text-sm pt-1">
                16.06.2026
              </div>
            </div>
          </Link>

          {/* Աջի 4 փոքր քարտերը */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <Link to="/news/sme-award" className="flex flex-col space-y-3 bg-white group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                <img src="https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png" alt="Մրցանակներ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-xs"></span>
                  <span className="text-purple-900 font-bold text-xs uppercase">Մրցանակներ</span>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
                  Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ...
                </h4>
                <div className="text-xs text-gray-400 font-medium">08.05.2026</div>
              </div>
            </Link>

            <Link to="/news/crypto-account" className="flex flex-col space-y-3 bg-white group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                <img src="https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png" alt="Պրոդուկտներ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-xs"></span>
                  <span className="text-purple-900 font-bold text-xs uppercase">Պրոդուկտներ</span>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
                  Քո Crypto հաշիվն արդեն EvocaTOUCH-ում
                </h4>
                <div className="text-xs text-gray-400 font-medium">27.02.2026</div>
              </div>
            </Link>

            <Link to="/news/karen-interview" className="flex flex-col space-y-3 bg-white group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                <img src="https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png" alt="Հարցազրույցներ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-xs"></span>
                  <span className="text-purple-900 font-bold text-xs uppercase">Հարցազրույցներ</span>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
                  Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times...
                </h4>
                <div className="text-xs text-gray-400 font-medium">25.02.2026</div>
              </div>
            </Link>

            <Link to="/news/ajapnyak-branch" className="flex flex-col space-y-3 bg-white group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                <img src="https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg" alt="Բանկային" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-xs"></span>
                  <span className="text-purple-900 font-bold text-xs uppercase">Բանկային</span>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base leading-snug">
                  Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է
                </h4>
                <div className="text-xs text-gray-400 font-medium">12.01.2026</div>
              </div>
            </Link>

          </div>
        </div>

        {/* 6. Երրորդ բլոկ՝ «Կարևոր» */}
        <div className="pt-16">
          <div className="w-full bg-purple-50/60 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Կարևոր
            </h2>

            <Link to="/news/block-transactions" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group cursor-pointer block">
              <div className="lg:col-span-6">
                <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png" 
                    alt="Գործարքների արգելափակում 1 կոճակով" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="w-4 h-4 bg-purple-700 inline-block rounded-sm"></span>
                  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                    Բանկային
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight group-hover:text-purple-700 transition-colors">
                  Գործարքների արգելափակում 1 կոճակով
                </h3>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։
                </p>

                <div className="text-gray-400 font-medium text-sm pt-2">
                  01.06.2026
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 7. Չորրորդ բլոկ՝ 3 հատանի նորությունների շարք */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          
          {/* Քարտ 1 */}
          <Link to="/life-style/memorandum-of-cooperation-street-arts-by-evoca" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png" alt="Կենսակերպ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-lime-400 rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Կենսակերպ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                Evocabank-ը նոր գույներ է տալիս մեր քաղաքին
              </h3>
              <div className="text-xs text-gray-400 font-medium">12.06.2026</div>
            </div>
          </Link>

          {/* Քարտ 2 */}
          <Link to="/news/esg-system" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png" alt="Բանկային" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-600 rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Բանկային</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                ESG կառավարման համակարգը Evocabank-ում
              </h3>
              <div className="text-xs text-gray-400 font-medium">31.03.2026</div>
            </div>
          </Link>

          {/* Քարտ 3 */}
          <Link to="/news/amcham-armenia" className="flex flex-col space-y-4 bg-white group cursor-pointer">
            <div className="w-full aspect-[16/11] rounded-3xl overflow-hidden bg-gray-100 shadow-xs">
              <img src="https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png" alt="Բանկային" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-600 rounded-xs"></span>
                <span className="text-purple-900 font-bold text-xs uppercase">Բանկային</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                Evocabank-ը միացել է AmCham Armenia-ին
              </h3>
              <div className="text-xs text-gray-400 font-medium">10.02.2026</div>
            </div>
          </Link>

        </div>

      </main>

      {/* Ներքևի հատված՝ Footer */}
      <Footer />

    </div>
  );
}