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
      title: 'Սև Ուրբաթ, վարդագույն գնումներ',
      date: '17.11.2023',
      image: 'https://www.evoca.am/images-cache/blogs/1/17002203918441/510x383.jpg',
      path: '/blog/lifestyle-blogs/black-friday-sales',
    },
{
      id: 2,
      title: 'Նվիրենք ամիսը մշակույթին',
      date: '05.05.2022',
      image: '	https://www.evoca.am/images-cache/blogs/1/16515644843588/510x383.png',
      path: '/blog/lifestyle-blogs/may',
    },
    {
      id: 3,
      title: 'Գումար խնայելն այնքան դժվար չէ, որքան կարծում եք',
      date: '07.03.2022',
      image: '	https://www.evoca.am/images-cache/blogs/1/16466487776012/510x383.png',
      path: '/blog/lifestyle-blogs/march',
    },
 {
      id: 4,
      title: 'Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան',
      date: '09.02.2022',
      image: '	https://www.evoca.am/images-cache/blogs/1/16443271105456/510x383.png',
      path: '/blog/lifestyle-blogs/february',
    },
    {
      id: 5,
      title: '2022-ի ամենասպասված 22 ֆիլմերը',
      date: '25.01.2022',
      image: '	https://www.evoca.am/images-cache/blogs/1/16430963363528/510x383.png',
      path: '/blog/lifestyle-blogs/movie-22',
    },
 {
      id: 6,
      title: 'Տարին սկսենք պլանավորելով',
      date: '01.01.2022',
      image: 'https://www.evoca.am/images-cache/blogs/1/164138504886/510x383.png',
      path: '/blog/lifestyle-blogs/new-year-planning',
    },
{
      id: 7,
      title: '2021-ը դարձել է կինո պրեմիերաների մրցավազք',
      date: '01.02.2021',
      image: '	https://www.evoca.am/images-cache/blogs/1/16329119822114/510x383.jpg',
      path: '/blog/lifestyle-blogs/the-best-films-of-2021',
    },
    {
      id: 8,
      title: '2021-ի ամենասպասված 21 սերիալները',
      date: '18.01.2021',
      image: '	https://www.evoca.am/images-cache/blogs/1/16329974590876/510x383.png',
      path: '/blog/lifestyle-blogs/most-series-of-2021',
    },
{
      id: 9,
      title: 'Ֆինանսական ճգնաժամեր',
      date: '06.07.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16329967423394/510x383.png',
      path: '/blog/business/financial-crises',
    },
{
      id: 10,
      title: 'PIN կոդի և բանկային գաղտնաբառի գաղտնիության կարևորությունը',
      date: '02.07.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16329990024208/510x383.png',
      path: '/blog/lifestyle-blogs/card-pin-privacy',
    },
{
      id: 11,
      title: 'Ինչպե՞ս արագ յուրացնել ինֆորմացիան',
      date: '26.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16330009199522/510x383.png',
      path: '/blog/lifestyle-blogs/how-to-absorb-information-faster',
    },
{
      id: 12,
      title: 'SWOT: Վերլուծիր ինքդ քեզ',
      date: '26.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/1632999785005/510x383.png',
      path: '/blog/lifestyle-blogs/swot-analysis',
    },
{
      id: 13,
      title: 'Վերջին տասնամյակներում կանանց դերը բիզնես աշխարհում մեծանում է',
      date: '22.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/16335980806802/510x383.png',
      path: '/blog/lifestyle-blogs/woman-in-business',
    },
{
      id: 14,
      title: 'Ապագայի ամենապահանջված մասնագիտությունները',
      date: '22.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16335957379/510x383.png',
      path: '/blog/lifestyle-blogs/most-professions-future',
    },
{
      id: 15,
      title: 'Հաջողակ բանակցությունների 10 պատվիրանները',
      date: '18.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/16336139236001/510x383.png',
      path: '/blog/business/successful-negotiations',
    },
{
      id: 16,
      title: 'Աշխատա՞նք ես փնտրում, սկսիր cv-ից',
      date: '18.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16336124216033/510x383.png',
      path: '/blog/lifestyle-blogs/cv',
    },
{
      id: 17,
      title: 'Լոգոների ստեղծման պատմությունը',
      date: '18.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16339578030358/510x383.png',
      path: '/blog/lifestyle-blogs/logos',
    },
{
      id: 18,
      title: 'Արհեստական ինտելեկտ VS մարդկային հմտություններ',
      date: '18.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/1633701982021/510x383.png',
      path: '/blog/lifestyle-blogs/artificial-intelligence',
    },
{
      id: 19,
      title: 'Evoca-գույնի հոգեբանական նկարագիրը',
      date: '18.06.2020',
      image: 'https://www.evoca.am/images-cache/blogs/1/16336923273854/510x383.png',
      path: '/blog/lifestyle-blogs/pantone-ultra-violet',
    },
    {
      id: 20,
      title: '15 համաշխարհային բիզնեսներ, որոնք ծնվել են ավտոտնակներում և…',
      date: '18.06.2020',
      image: '	https://www.evoca.am/images-cache/blogs/1/16336898810327/510x383.png',
      path: '/blog/business/businneess',
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
              to={`/news/bloggg${currentPage + 2}`}
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