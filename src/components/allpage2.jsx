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
      title: 'Evoca-ն մասնակցում է Leasing Expo 2026-ին',
      date: '09.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17758068998241/510x383.png',
      path: 'in-leasing-expo-2026',
    },
    {
      id: 2,
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '31.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png',
      path: 'coordinator-at-evocabank',
    },
    {
      id: 3,
      title: 'Evocabank-ը միացել է AI մեգանախագծի 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը',
      date: '27.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png',
      path: 'ai-megaproject-financing',
    },
    {
      id: 4,
      title: 'Evoca-ն մասնակցում է TOON EXPO 2026-ին',
      date: '24.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17743534930147/780x585.png',
      path: 'in-toon-expo-2026',
    },
    {
      id: 5,
      title: 'Վճարիր Evoca Mastercard-ով և ստացիր 10% cashback',
      date: '10.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17732233309185/780x585.png',
      path: '10-cashback',
    },
    {
      id: 6,
      title: 'Ներդրումային առաջարկ կանանց համար',
      date: '06.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1773403253997/510x383.png',
      path: 'offer-for-women',
    },
    {
      id: 7,
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/780x585.png',
      path: 'now-in-evocatouch ',
    },
    {
      id: 8,
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times ամսագրին',
      date: '25.02.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17720089281517/510x383.png',
      path: '/interviews/interview-of-karen-yeghiazaryan-with-los-angeles-times-magazine',
    },
    {
      id: 9,
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.02.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17707319421286/510x383.png',
      path: 'amcham-armenia',
    },
    {
      id: 10,
      title: 'Evocabank: Excellence in Travel Segment Innovation',
      date: '10.02.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17707059995106/510x383.jpg',
      path: 'travel-segment-innovation',
    },
    {
      id: 11,
      title: 'Կատարիր գնումներ Evoca Mastercard-ով և շահիր MyLer նվեր քարտ',
      date: '01.02.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17700093062846/510x383.png',
      path: 'win-myler-gift-card',
    },
    {
      id: 12,
      title: 'Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է',
      date: '12.01.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17683825017248/510x383.jpg',
      path: 'ajapnyak-is-now-open',
    },
    {
      id: 13,
      title: 'EvocaTOUCH: Best AI-Powered Mobile App',
      date: '30.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17701157882933/510x383.jpg',
      path: 'powered-mobile-app',
    },   
    {
      id: 14,
      title: 'Վճարիր Evoca Mastercard-ով, ստացիր հավելյալ 10% cashback',
      date: '24.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17665876075785/510x383.png',
      path: 'get-additional-cashback',
    },   
    {
      id: 15,
      title: '50 մլն դրամ Սպանդարյանի ջրանցքի վերակառուցման համար',
      date: '24.12.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17666423680322/510x383.png',
      path: 'of-the-spandaryan-canal',
    },   
    {
      id: 16,
      title: 'Մրցանակ Visa-ի կողմից՝ Evocabank: Highest Cashless Achievement',
      date: '22.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17696763497988/510x383.jpg',
      path: 'cashless-achievement',
    },   
    {   
      id: 17,
      title: 'Evocabank-ը` Project Management Awards 2025-ի գլխավոր գործընկեր',
      date: '18.12.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17664112537702/510x383.png',
      path: 'management-awards-2025',
    },
    {   
      id: 18,
      title: 'Evoca-ն՝ Yerevan Open շախմատային մրցաշարի ֆինանսական հովանավոր',
      date: '18.12.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17690803274151/510x383.png',
      path: 'chess-tournament',
    }, 
    {   
      id: 19,
      title: 'Evoca-ն հուշագիր է ստորագրել CCI France Armenia-ի հետ',
      date: '15.12.2025',
      image: '	https://www.evoca.am/images-cache/news/1/1765801881883/510x383.png',
      path: 'cci-france-armenia',
    }, 
    {   
      id: 20,
      title: 'Evocabank. 20 մլն ԱՄՆ դոլար` շվեյցարական BlueOrchard-ից',
      date: '08.12.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17649374043883/510x383.png',
      path: 'new-partnership',
    }, 
    {   
      id: 21,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում 2025',
      date: '27.11.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17631178039892/510x383.png',
      path: 'finance-magazine',
    },  
    {   
      id: 22,
      title: 'Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 40% զեղչ',
      date: '26.11.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17641620297289/510x383.png',
      path: 'glovo-and-get-discount',
    }, 
    {   
      id: 23,
      title: 'Սև ուրբաթը Evoca-ում',
      date: '19.11.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17636522117371/510x383.png',
      path: 'evoca-mastercard-cards',
    }, 
    {   
      id: 24,
      title: 'Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին',
      date: '11.11.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17628589568036/510x383.png',
      path: '/interviews/Karen-Yeghiazaryan-new-interview-with-banks-am',
    }, 
    {   
      id: 25,
      title: 'Evocabank-ը՝ Robust Armenia 2025 կոնֆերանսի գլխավոր գործընկեր',
      date: '06.11.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17624341580743/510x383.png',
      path: 'armenia-conference-2025',
    }, 
    {   
      id: 26,
      title: 'Evoca x Arca. Խաղարկում ենք 5 iPhone 17 Pro',
      date: '04.11.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17622656011294/510x383.png',
      path: 'iphone-17-pro',
    },
    {   
      id: 27,
      title: 'Evocabank-ը՝ ՆԱԻ-Հայաստան 2025 կոնֆերանսի Արծաթե գործընկեր',
      date: '03.11.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17623251404538/510x383.png',
      path: 'armenia-2025-conference',
    }, 
    {   
      id: 28,
      title: 'Մեծ զեղչեր Չինաստանից, 20% cashback Evoca-ից',
      date: '01.11.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17625016329726/510x383.png',
      path: 'cashback-from-evocabank',
    },  
    {   
      id: 29,
      title: 'Evoca x AZAT MARD',
      date: '27.10.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1761568122726/510x383.jpg',
      path: 'for-evoca-team',
    },  
    {   
      id: 30,
      title: 'Կարճ հեռախոսահամար՝ 8444',
      date: '22.10.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17611221350351/510x383.jpg',
      path: 'of-evocabank-8444',
    }, 
    {   
      id: 31,
      title: 'Evocabank-ը ներգրավել է 30 մլն ԱՄՆ դոլար OPEC-ից',
      date: '21.10.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17610618951769/510x383.png',
      path: 'mln-to-evocabank',
    },   
    {   
      id: 32,
      title: 'Evoca is 35 Gala Event` VIP հաճախորդների և գործընկերների համար',
      date: '14.10.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17604369402663/510x383.png',
      path: 'vip-customers-and-partners',
    }, 
    {   
      id: 33,
      title: 'Getting Things Done կոնֆերանս` Evocabank-ի 35 ամյակի առթիվ',
      date: '10.10.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17600922901514/510x383.png',
      path: 'things-done-conference',
    },  
    {   
      id: 34,
      title: 'Evocabank-ը ներգրավել է $5.5 մլն ստորադաս փոխառություն responsAbility-ից',
      date: '25.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17587062793679/510x383.png',
      path: 'responsAbility-2025',
    },    
    {   
      id: 35,
      title: 'Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար',
      date: '12.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17576778780897/510x383.png',
      path: 'infinite-cardholders',
    },  
    {   
      id: 36,
      title: 'Evoca՝ ՓՄՁ վարկավորման ամենանորարար գործընկերը Հայաստանում',
      date: '09.09.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17574945834607/510x383.png',
      path: 'banking-armenia-2025',
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

        {/* 5. Էջադրում (Pagination)՝ իրական Link հղումներով */}
        <div className="w-full pt-10 pb-4 border-t border-gray-100 mt-12">
          <div className="flex items-center space-x-2 sm:space-x-3 text-sm font-semibold">
            
            {/* Նախորդ էջի սլաք */}
            <Link
              to={`/news/all?page=${Math.max(currentPage - 1, 1)}`}
              className={`p-2 transition-colors ${
                currentPage === 1 ? 'text-gray-300 pointer-events-none' : 'text-purple-700 hover:text-purple-900'
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
                  to={`/news/allpage${page}`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    isCurrent
                      ? 'bg-purple-700 text-white font-bold shadow-xs'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {/* Հաջորդ էջի սլաք */}
            <Link
              to={`/news/allpage${currentPage + 2}`}
              className="p-2 text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
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