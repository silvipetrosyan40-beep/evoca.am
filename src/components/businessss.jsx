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
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 14, 15];

  // Կատեգորիաների ցանկ
  const categories = [
   { name: 'Բիզնես', path: '/blog/businessss' },
    { name: 'Կենսակերպ', path: '/hy/blog/lifestyle-blogs' },
    { name: 'Ներդրումներ', path: '/blog/investment' },
  ];

  // Նկարում պատկերված նորությունների տվյալները
  const newsList = [
    {
      id: 1,
      title: 'Ամեն ինչ բանկոմատների մասին',
      date: '31.01.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16679076091685/510x383.jpg',
      path: '/blog/business/atm',
    },
    {
      id: 2,
      title: 'Ինչպե՞ս սկսել բիզնես։ Guide from A to Z',
      date: '05.01.2024',
      image: '	https://www.evoca.am/images-cache/blogs/1/16691870758279/510x383.jpg',
      path: '/blog/business/how-to-start-a-business',
    },
    {
      id: 3,
      title: 'Ֆինանսական ճգնաժամեր',
      date: '06.07.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16329967423394/510x383.png',
      path: '/blog/business/financial-crises',
    },
 {
      id: 4,
      title: 'Հաջողակ բանակցությունների 10 պատվիրանները',
      date: '18.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/16336139236001/510x383.png',
      path: '/blog/business/successful-negotiations',
    },
 {
      id: 5,
      title: '15 համաշխարհային բիզնեսներ, որոնք ծնվել են ավտոտնակներում և…',
      date: '18.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16336898810327/510x383.png',
      path: '/blog/business/businneess',
    },
    {
      id: 6,
      title: 'Բիզնես էթիկա',
      date: '16.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/16339589553963/510x383.png',
      path: '/blog/business/business-ethics',
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
          <Link to="/hy/blog" className="hover:text-purple-700 transition-colors">
            Բլոգ
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-semibold">Բիզնես</span>
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
{/* ՆՈՐՈՒԹՅԱՆ ԲԼՈԿ */}
<div className=" rounded-3xl p-6 sm:p-10   flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto my-6 font-sans">
  
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-purple-100 shadow-sm">
  <div className="flex-1 space-y-4">
    <Link 
      to="/blog/businessss" 
      className="flex items-center space-x-3 group cursor-pointer w-fit"
    >
      <span className="w-4 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
      <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
        Բիզնես[cite: 17]
      </span>
    </Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
      Ինչպե՞ս սկսել բիզնես: Guide from A to Z[cite: 17]
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Եթե ուզում եք ունենալ այն, ինչը երբեք չեք ունեցել, սկսեք անել այն, ինչը երբեք չեք արել:[cite: 17]
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      05.01.2024[cite: 17]
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/blogs/1/16691870758279/780x585.jpg" 
      alt="Ինչպե՞ս սկսել բիզնես: Guide from A to Z" 
      className="w-full h-full object-cover"
    />
  </div>
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

                

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}