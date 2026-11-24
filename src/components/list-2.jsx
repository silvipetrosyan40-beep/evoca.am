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
  const pages = [1, 2, 3, 4, 5, 6,];

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
      id: 1,
      title: 'Կարճ հեռախոսահամար՝ 8444',
      date: '22.10.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17611221350351/510x383.jpg',
      path: '/news/allpage2/of-evocabank-8444',
    },
    {
      id: 2,
      title: 'Evocabank-ը ներգրավել է 30 մլն ԱՄՆ դոլար OPEC-ից',
      date: '21.10.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17610618951769/510x383.png',
      path: '/news/allpage2/mln-to-evocabank',
    },
    {
      id: 3,
      title: 'Evoca is 35 Gala Event` VIP հաճախորդների և գործընկերների համար',
      date: '14.10.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17604369402663/510x383.png',
      path: '/news/allpage2/vip-customers-and-partners',
    },
    {
      id: 4,
      title: 'Getting Things Done կոնֆերանս` Evocabank-ի 35 ամյակի առթիվ',
      date: '10.10.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17600922901514/510x383.png',
      path: '/news/allpage2/things-done-conference',
    },
    {
      id: 5,
      title: 'Evocabank-ը ներգրավել է $5.5 մլն ստորադաս փոխառություն responsAbility-ից',
      date: '25.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17587062793679/510x383.png',
      path: '/news/allpage2/responsAbility-2025',
    },
    {
      id: 6,
      title: 'Evocabank-ի Խորհրդի նոր կազմը',
      date: '26.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png',
      path: '/news/allpage3/board-of-evocabank',
    },
    {
      id: 7,
      title: 'Evocabank-ը՝ 50-րդ BACEE Jubilee համաժողովի պլատինում հովանավոր',
      date: '19.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png',
      path: '/news/allpage3/conference-by-bacee',
    },
    {
      id: 8,
      title: 'Էվոկաբանկ ԲԲԸ',
      date: '01.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17540357468511/510x383.png',
      path: '/news/allpage3/from-CJSC-OJSC',
    },
    {
      id: 9,
      title: 'Evoca x Al Fardan Exchange. արագ ու հարմար փոխանցումներ դեպի ԱՄԷ',
      date: '30.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17543142671349/510x383.png',
      path: '/news/allpage3/al-fardan-exchange',
    },
    {
      id: 10,
      title: '«Evocabank-ը միացել է IFC-ի առևտրի ֆինանսավորման ծրագրին',
      date: '17.06.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17501430419171/510x383.png',
      path: '/news/allpage3/trade-finance-program',
    },
    {
      id: 11,
      title: 'Evocabank-ը և EBRD-ն համագործակցության համաձայնագրեր են ստորագրել ',
      date: '14.05.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17472925002048/510x383.png',
      path: '/news/allpage3/evocabank-and-ebrd-cooperation',
    },
    {
      id: 12,
      title: 'Evocabank-ի «Հանրապետության» մասնաճյուղն արդեն բաց է',
      date: '20.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/1740120458201/510x383.png',
      path: '/news/allpage4/opening-hanrapetutyan',
    },
    {
      id: 13,
      title: 'Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce 2-ին',
      date: '04.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17386587462914/510x383.png',
      path: '/news/allpage4/of-mdcc-in-miami',
    },   
    {
      id: 14,
      title: 'Համագործակցության նոր ֆորմատ Evoca-ի, ՀՊՏՀ-ի և ՀՖՀՀ-ի միջև',
      date: '20.01.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17373763573222/510x383.jpg',
      path: '/news/allpage4/evoca-asue-ufar',
    },   
    {
      id: 15,
      title: 'Evocabank. 2024 թվականի ամփոփում',
      date: '17.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17371104329802/510x383.jpg',
      path: '/news/allpage4/innovation-and-growth',
    },   
    {
      id: 16,
      title: 'Նոր մասնաճյուղ Երևան Մոլում',
      date: '13.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17369249643186/510x383.jpg',
      path: '/news/allpage4/opening-yerevan-mall',
    },   
    {   
      id: 17,
      title: 'Evocabank-ը և Al Fardan Exchange-ը ստորագրել են համագործակցության…',
      date: '12.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17340172368299/510x383.png',
      path: '/news/allpage4/cooperation-agreement',
    },
    {   
      id: 18,
      title: 'Evocabank-ը և IFC-ն համագործակցության պայմանագիր են ստորագրել',
      date: '11.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17339403687437/510x383.jpg',
      path: '/news/allpage4/financial-inclusion',
    }, 
    {   
      id: 19,
      title: 'Navigating Business in a Sanctioned World',
      date: '10.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17338293917613/510x383.png',
      path: '/news/allpage4/sanctioned-world',
    }, 
    {   
      id: 20,
      title: 'Evoca-ն՝ Miami-Dubai Chamber of Commerce-ի պլատինում հովանավոր',
      date: '09.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17337479879173/510x383.jpg',
      path: '/news/allpage4/sponsor-of-mdcc',
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
{/* ՆՈՐՈՒԹՅԱՆ ԲԼՈԿ */}
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto my-6 font-sans">
  
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
    <Link to="/news/banking" className="flex items-center space-x-2 group w-fit no-underline">
      <span className="w-3 h-3 bg-purple-700 rounded-sm inline-block"></span>
      <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Բանկային</span>
    </Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
      Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            IFC-ն Evocabank-ին տրամադրել է 10 մլն դոլարի վարկ` Հայաստանում ՄՓՄՁ-ներին աջակցելու, աշխատատեղեր ստեղծելու և բնապահպանական ծրագրեր ֆինանսավորելու համար։

    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      26.10.2026
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/17930164747919/780x585.png" 
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
              to={`/hy/about/partners/list-${Math.max(currentPage - 1, 1)}`}
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
                  to={`/hy/about/partners/list-${num}`}
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
              to={`/hy/about/partners/list-${currentPage + 2}`}
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