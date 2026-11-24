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
     { name: 'Բոլոր', path: '/blog/blog-archive' },
    { name: 'Բիզնես', path: '/blog/businessss' },
    { name: 'Կենսակերպ', path: '/hy/blog/lifestyle-blogs' },
    { name: 'Ներդրումներ', path: '/blog/investment' },
   
  ];

  // Նկարում պատկերված նորությունների տվյալները
  const newsList = [
    {
      id: 1,
      title: 'Monthly Recap',
      date: '05.01.2026',
      image: '	https://www.evoca.am/images-cache/blogs/1/17683779856926/510x383.png',
      path: '/blog/lifestyle-blogs/monthly-recap-creation',
    },
    {
      id: 2,
      title: 'Habit Tracker',
      date: '05.01.2026',
      image: 'https://www.evoca.am/images-cache/blogs/1/17683792444137/510x383.png',
      path: '/blog/lifestyle-blogs/everything-about-habit-tracker',
    },
    {
      id: 3,
      title: 'Եվրոպայի լավագույն 5 Christmas Market-ները',
      date: '16.12.2025',
      image: 'https://www.evoca.am/images-cache/blogs/1/17658933558475/510x383.png',
      path: '/blog/lifestyle-blogs/top-5-christmas-markets-in-europe',
    },
    {
      id: 4,
      title: 'Սև ուրբաթի իրական գույնը',
      date: '24.11.2025',
      image: 'https://www.evoca.am/images-cache/blogs/1/17639790235101/510x383.png',
      path: '/blog/lifestyle-blogs/black-friday-2025-complete-guide-by-evoca',
    },
    {
      id: 5,
      title: 'Wheel of Life Balance',
      date: '01.11.2025',
      image: 'https://www.evoca.am/images-cache/blogs/1/17663897182479/510x383.png',
      path: '/blog/lifestyle-blogs/wheel-of-life-balance',
    },
    {
      id: 6,
      title: 'Evoca Calendar 2025. Երբ արվեստը հանդիպում է AI-ին',
      date: '16.05.2025',
      image: 'https://www.evoca.am/images-cache/blogs/1/17404671397799/510x383.png',
      path: '/blog/lifestyle-blogs/evoca-by-ai',
    },
    {
      id: 7,
      title: '99 խնդի՞ր, 1 լուծում՝ Evoca թվային քարտ',
      date: '28.11.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17327967150177/510x383.png',
      path: '/blog/lifestyle-blogs/with-evoca-digital-card',
    },
    {
      id: 8,
      title: 'Evoca Art',
      date: '23.10.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17296851097593/510x383.png',
      path: '/hy/blog/lifestyle-blogs/new-logos-yerevan-magazine',
    },
    {
      id: 1,
      title: 'Ֆիլմեր ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1',
      date: '28.08.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17248413426642/510x383.png',
      path: '/blog/investment/films-about',
    },
    {
      id: 9,
      title: 'Ուսանողական վա՞րկ, թե՞ ներդրում ապագայի համար',
      date: '22.07.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17216331113919/510x383.png',
      path: '/blog/lifestyle-blogs/facts-terms-of-bank',
    },
    {
      id: 2,
      title: 'EvocaINVEST. ինչպե՞ս կատարել գործարքներ',
      date: '17.06.2024',
      image: '	https://www.evoca.am/images-cache/blogs/1/17186317173483/510x383.jpg',
      path: '/blog/investment/evocainvest-tools',
    },
    {
      id: 3,
      title: 'Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը',
      date: '17.05.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17159356763697/510x383.jpg',
      path: '/blog/investment/stages-of',
    },
    {
      id: 4,
      title: 'Ներդրումների կարելիներն ու չի կարելիները',
      date: '23.04.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17138737784517/510x383.jpg',
      path: '/blog/investment/investment-decisions',
    },
    {
      id: 5,
      title: 'Փոքր քայլերով դեպի մեծ եկամուտներ',
      date: '11.04.2024',
      image: '	https://www.evoca.am/images-cache/blogs/1/17128187874533/510x383.jpg',
      path: '/blog/investment/evoca-create',
    },
    {
      id: 10,
      title: 'Mann Deshi Bank – կանանց համար առաջին բանկը և բանկային դպրոցը',
      date: '07.03.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17038544649688/510x383.png',
      path: '/blog/lifestyle-blogs/women-bank-new-blog',
    },
    {
      id: 10,
      title: 'Բոլորին հայտնի Մոնոպոլիա խաղի օրենքներն իրական կյանքում',
      date: '01.02.2024',
      image: '	https://www.evoca.am/images-cache/blogs/1/1703767719255/510x383.png',
      path: '/blog/lifestyle-blogs/mortgage-loan',
    },
    {
      id: 1,
      title: 'Ամեն ինչ բանկոմատների մասին',
      date: '31.01.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16679076091685/510x383.jpg',
      path: '/blog/business/atm',
    },
    {
      id: 11,
      title: 'Ինչպե՞ս չդառնալ խարդախության զոհ',
      date: '26.01.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/1684499196192/510x383.png',
      path: '/blog/lifestyle-blogs/warning',
    },
    {
      id: 11,
      title: 'Ինչպե՞ս սկսել բիզնես։ Guide from A to Z',
      date: '05.01.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16691870758279/510x383.jpg',
      path: '/blog/business/how-to-start-a-business',
    },
    {
      id: 11,
      title: 'Ամանորի քո Evocaգույն երազանքը',
      date: '21.12.2023',
      image: '	https://www.evoca.am/images-cache/blogs/1/1703162335976/510x383.png',
      path: '/blog/lifestyle-blogs/card-new-year-dreams',
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
          <span className="text-gray-900 font-semibold">Բոլորը</span>
        </nav>

        {/* 2. Մեծ Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
          Բոլորը
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
              to={`/news/bloggg${Math.max(currentPage - 1, 1)}`}
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
            {pages.map((page) => {
              const isCurrent = currentPage === page;
              return (
                <Link
                  key={page}
                  to={`/news/bloggg${page}`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer text-base ${
                    isCurrent
                      ? 'bg-purple-700 text-white font-bold shadow-xs scale-105'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {/* Հաջորդ էջի սլաք */}
            <Link
              to={`/news/bloggg${currentPage + 1}`}
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