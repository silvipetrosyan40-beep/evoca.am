import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function AllNewsPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL-ից ստանում ենք ընթացիկ էջը (եթե չկա, լռելյայն 1-ին էջն է)
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Ամսաթվերի state-եր զտման համար
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Էջերի ցանկը
  const pages = [1, 2, 3,];

  // Կատեգորիաների ցանկ
  const categories = [
    { name: 'Բոլորը', path: '/news' },
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

  // Նկարում պատկերված նորությունների տվյալները
  const newsList = [
    {
      id: 5,
      title: 'Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026',
      date: '02.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17909253326841/510x383.png',
      path: '/prizes/the-most-innovative-digital-bank-2026-by-global-business-and-finance-magazine',
    },
  {   
      id: 17,
      title: 'Evocabank՝ Լավագույն Բանկը Հայաստանում 2026',
      date: '30.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17847187625556/510x383.png',
      path: '/prizes/best-bank-in-armenia-2026-by-international-investor-magazine',
    },
    {   
      id: 24,
      title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
      date: '16.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17815943976247/510x383.png',
      path: '/news/amx-awards',
    },
    {   
      id: 32,
      title: 'Evocabank. Lավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ',
      date: '08.05.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17784860353078/510x383.png',
      path: '/prizes/new-award-best-sme-bank-by-digital-banker-2026',
    },
    {
      id: 10,
      title: 'Evocabank: Excellence in Travel Segment Innovation',
      date: '10.02.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17707059995106/510x383.jpg',
      path: '/news/allpage2/travel-segment-innovation',
    },
       {
      id: 13,
      title: 'EvocaTOUCH: Best AI-Powered Mobile App',
      date: '30.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17701157882933/510x383.jpg',
      path: '/news/allpage2/powered-mobile-app',
    }, 
    {
      id: 16,
      title: 'Մրցանակ Visa-ի կողմից՝ Evocabank: Highest Cashless Achievement',
      date: '22.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17696763497988/510x383.jpg',
      path: '/news/allpage2/cashless-achievement',
    },
    {   
      id: 21,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում 2025',
      date: '27.11.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17631178039892/510x383.png',
      path: '/news/allpage2/finance-magazine',
    },
    {   
      id: 36,
      title: 'Evoca՝ ՓՄՁ վարկավորման ամենանորարար գործընկերը Հայաստանում',
      date: '09.09.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17574945834607/510x383.png',
      path: '/news/allpage2/banking-armenia-2025',
    },
    {
      id: 14,
      title: 'Evocabank՝ «Լավագույն Բանկը Հայաստանում 2025»',
      date: '04.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17516321438473/510x383.png',
      path: '/news/allpage3/investor-magazine',
    }, 
    {   
      id: 29,
      title: 'Նոր մրցանակ BACEE-ի կողմից',
      date: '14.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17446266510076/510x383.png',
      path: '/news/allpage3/award-from-bacee',
    },
    {   
      id: 31,
      title: 'Նոր մրցանակ Evoca-ին` լավագույն ՓՄՁ բանկը Հայաստանում 2025',
      date: '02.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17435920140644/510x383.png',
      path: '/news/allpage3/bank-in-armenia-2025',
    }, 
    {
      id: 12,
      title: '2 նոր մրցանակ Evocabank-ին Global Business & Finance-ի կողմից',
      date: '30.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17382449387143/510x383.png',
      path: '/news/allpage4/finance-magazine',
    },
    {
      id: 13,
      title: 'Նոր մրցանակ Evoca-ին՝ Excellence in New Products Development',
      date: '21.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17374660522736/510x383.jpg',
      path: '/news/allpage4/products-development',
    },
    {   
      id: 17,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում 2024',
      date: '13.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17367544923272/510x383.png',
      path: '/news/allpage4/finance-magazine',
    },
    {   
      id: 31,
      title: 'Մրցանակ Visa-ի կողմից "Highest Cashless Ratio Achievement"',
      date: '25.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/1737466907351/510x383.jpg',
      path: '/news/allpage4/ratio-achievement',
    },
    {
      id: 1,
      title: 'Մրցանակներ Evocabank-ին Armenia Digital Awards 2024-ի կողմից',
      date: '01.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304447813906/510x383.png',
      path: '/news/allpage5/armenia-digital-awards',
    },
    {
      id: 9,
      title: 'Evocabank` լավագույն ՓՄՁ բանկը Հայաստանում',
      date: '03.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17279621060614/510x383.png',
      path: '/news/allpage5/bank-in-armenia',
    },
     {   
      id: 21,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում',  
      date: '19.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17240636797533/510x383.png',
      path: '/news/allpage5/finance-review',
    },
    {   
      id: 19,
      title: '2 նոր մրցանակ Global Business and Finance Magazine-ի կողմից',
      date: '01.02.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17067716894602/510x383.png',
      path: '/news/allpage6/business-and-finance',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 w-full">
        
        {/* 1. Breadcrumbs (Հացի փշրանքներ) */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <span className="text-gray-300">›</span>
          <Link to="/news" className="hover:text-purple-700 transition-colors">
            Նորություններ
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-semibold">Մրցանակներ</span>
        </nav>

        {/* 2. Մեծ Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
          Նորություններ
        </h1>

        {/* 3. Զտման կոճակներ + Ամսաթվերի Ֆիլտր */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          
          {/* Կոճակների ցանկը */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 max-w-4xl">
            {categories.map((cat) => {
              const isAllButton = cat.name === 'Բոլորը';
              const isActive = location.pathname === cat.path || (isAllButton && location.pathname === '/news/all');

              return (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-purple-200'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200/60'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>

          {/* Ամսաթվերի ֆիլտրի բլոկ */}
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200/80 self-start lg:self-center">
            <div className="p-1.5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Սկսած"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-24 sm:w-28 bg-white border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs text-gray-700 outline-none focus:border-purple-500 text-center"
            />

            <span className="text-gray-400 font-medium text-xs">-</span>

            <input
              type="text"
              placeholder="Մինչև"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-24 sm:w-28 bg-white border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs text-gray-700 outline-none focus:border-purple-500 text-center"
            />
          </div>

        </div>
{/* ՆՈՐՈՒԹՅԱՆ ԲԼՈԿ */}
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto my-6 font-sans">
  
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
  <Link to="/news/awards" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-3 h-3 bg-yellow-400 rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Մրցանակներ</span>
</Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026
</h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Global Business & Finance Magazine հեղինակավոր ամսագիրը 4-րդ տարին անընդմեջ Evocabank-ին ճանաչել է որպես Ամենանորարար թվային բանկը Հայաստանում։
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
02.10.2026
  </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/17909253326841/780x585.png" 
      alt="Evocabank և Norakaruyc.am համագործակցություն" 
      className="w-full h-full object-cover"
    />
  </div>

</div>
        {/* 4. Նորությունների Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
          {newsList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex flex-col bg-white rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-purple-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="py-4 flex flex-col flex-grow justify-between space-y-3">
                <h3 className="font-bold text-gray-950 text-sm sm:text-base leading-snug group-hover:text-purple-700 transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <div className="text-xs text-gray-400 font-medium">
                  {item.date}
                </div>
              </div>
            </Link>
          ))}
        </div>

{/* 5. Էջադրում (Pagination)՝ իրական Link հղումներով և կենտրոնացված */}
        <div className="w-full pt-10 pb-4 border-t border-gray-100 mt-12 mx-auto">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-sm font-semibold max-w-4xl mx-auto">
            
          {/* Նախորդ էջի սլաք */}
            <Link
              to={`/hy/awards/tiv-${Math.max(currentPage - 1, 1)}`}
              className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                currentPage === 1 
                  ? 'text-gray-300 pointer-events-none' 
                  : 'text-purple-700 hover:text-purple-900 hover:bg-purple-50/50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </Link>

            {/* Էջերի հղումներ */}
            {pages.map((num) => {
              const isCurrent = currentPage === num;
              return (
                <Link
                  key={num}
                  to={`/hy/awards/tiv-${num}`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer text-base ${
                    isCurrent
                      ? 'bg-purple-700 text-white font-bold shadow-xs scale-105'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {num}
                </Link>
              );
            })}

            {/* Հաջորդ էջի սլաք */}
            <Link
              to={`/hy/awards/tiv-${currentPage + 1}`}
              className="p-2 rounded-full text-purple-700 hover:text-purple-900 hover:bg-purple-50/50 transition-colors cursor-pointer flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}