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
      title: 'Հատուկ առաջարկ Evoca Visa քարտապանների համար',
      date: '08.09.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16639150948522/510x383.jpg',
      path: 'visa-offers',
    },
    {
      id: 2,
      title: 'Հատուկ առաջարկ Դիլիջանում Visa պրեմիում քարտապանների համար',
      date: '06.09.2022',
      image: 'https://www.evoca.am/images-cache/news/1/1664263496412/510x383.jpg',
      path: 'visa-dilijan',
    },
    {
      id: 3,
      title: 'Evocabank-ը 10 մլն դրամ է նվիրաբերել «Երաժշտություն հանուն ապագայի»…',
      date: '01.09.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16624675976852/510x383.jpg',
      path: 'talentum',
    },
    {
      id: 4,
      title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
      date: '23.08.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16612608775702/510x383.jpg',
      path: 'global-finance-2022',
    },
    {
      id: 5,
      title: 'Հատուկ առաջարկ Mastercard-ից',
      date: '16.08.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16608963243705/510x383.jpg',
      path: 'mastercard-batumi',
    },
    {
      id: 6,
      title: 'Evoca լիզինգ',
      date: '16.08.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16606520606748/510x383.jpg',
      path: 'leasing',
    },
    {
      id: 7,
      title: 'Մեծ հնարավորություններ ձեր բիզնեսի համար Visa-ի հետ',
      date: '12.08.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16603126347212/510x383.jpg',
      path: 'visa-business-promo',
    },
    {
      id: 8,
      title: 'Հատուկ առաջարկ Evoca-ից և Art Group-ից',
      date: '12.08.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16603095118151/510x383.jpg',
      path: 'artgroup-parking',
    },
    {
      id: 9,
      title: '15% զեղչ Ria դրամական փոխանցումների համար',
      date: '08.08.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16599446337235/510x383.jpg',
      path: 'ria-15',
    },
    {
      id: 10,
      title: 'Լավագույն թվային բանկը Հայաստանում',
      date: '08.08.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16599373700328/510x383.jpg',
      path: 'global-banking-finance-2022',
    },
    {
      id: 11,
      title: 'Apple Pay-ը հասանելի է Evocabank-ի հաճախորդների համար',
      date: '02.08.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16594261127317/510x383.png',
      path: 'apple-pay',
    },
    {
      id: 12,
      title: 'Էներգաարդյունավետ վերանորոգման վարկ',
      date: '01.08.2022',
      image: 'https://www.evoca.am/images-cache/news/1/1659361733834/510x383.jpg',
      path: 'energy-efficiency-loans',
    },
    {
      id: 13,
      title: 'Հաճելի ճամփորդություն Visa քարտերով',
      date: '27.07.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16589302340345/510x383.jpg',
      path: 'visa-travel',
    },   
    {
      id: 14,
      title: 'Evocabank-ը Coca-Cola Music Fest-ի ֆինանսական գործընկեր',
      date: '21.07.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16584156515382/510x383.jpg',
      path: 'coca-cola-event',
    },   
    {
      id: 15,
      title: 'Newmag Summer Fest Երազ այգում',
      date: '20.07.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16582170530236/510x383.png',
      path: 'neww',
    },   
    {
      id: 16,
      title: '20% զեղչ Ria դրամական փոխանցումների համար',
      date: '18.07.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16584991069785/510x383.jpg',
      path: 'riaa-20',
    },   
    {   
      id: 17,
      title: '10% զեղչ Yandex Taxi-ում Evoca Mastercard քարտապանների համար',
      date: '12.07.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16576103373008/510x383.png',
      path: 'yandextaxi-mastercard',
    },
    {   
      id: 18,
      title: 'Evocabank-ը Newmag Summer Fest-ի գլխավոր հովանավոր',
      date: '11.07.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16575374078522/510x383.jpg',
      path: 'newmag-fest',
    }, 
    {   
      id: 19,
      title: 'Զեղչեր Visa պրեմիում քարտապանների համար',
      date: '04.07.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16569426889573/510x383.jpg',
      path: 'visa-22',
    }, 
    {   
      id: 20,
      title: 'Evocabank-ը և FINCA-ն համատեղ քարտեր կթողարկեն',
      date: '29.06.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16564205795872/510x383.png',
      path: 'finca',
    }, 
    {   
      id: 21,
      title: 'Visa-ի հետ արագ է և շահավետ',  
      date: '16.06.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16553768592281/510x383.jpg',
      path: 'visa-online-cashback',
    },  
    {   
      id: 22,
      title: 'Silicon Mountains Tech Summit Armenia 2022',
      date: '14.06.2022',
      image: 'https://www.evoca.am/images-cache/news/1/1655206072929/510x383.jpg',
      path: 'silicon-mountains',
    }, 
    {   
      id: 23,
      title: 'Փոխանցիր գումար հեռախոսահամարով',
      date: '06.06.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16541582338424/510x383.jpg',
      path: 'contact-number-transfer',
    }, 
    {   
      id: 24,
      title: 'Evocabank-ի պարտատոմսերը ցուցակվել են Հայաստանի ֆոնդային բորսայում',
      date: '27.05.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16536583638942/510x383.png',
      path: 'amx-bonds',
    }, 
    {   
      id: 25,
      title: 'Evocabank-ը ներգրավել է 7.5 մլն ԱՄՆ դոլար Symbiotics-ից',
      date: '26.05.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16535697338703/510x383.png',
      path: 'symbiotics',
    }, 
    {   
      id: 26,
      title: 'Evoca-ն հաջողությամբ ավարտել է IFC-ի DigiLab Finance ծրագիրը',
      date: '18.05.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16528587352385/510x383.jpg',
      path: 'DigiLab',
    },
    {   
      id: 27,
      title: 'Evocabank-ը համալրել է կանոնադրական կապիտալը',
      date: '17.05.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16527058751379/510x383.png',
      path: 'capital',
    }, 
    {   
      id: 28,
      title: 'Evocabank-ն ու ՀայՓոստը սկսում են նոր համագործակցություն',
      date: '16.05.2022',
      image: '		https://www.evoca.am/images-cache/news/1/16526888102013/510x383.png',
      path: 'haypost',
    },  
    {   
      id: 29,
      title: 'Evocabank-ը ժամկետից շուտ ավարտել է իր պարտատոմսերի տեղաբաշխումը',
      date: '13.05.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16524458685351/510x383.jpg',
      path: 'partatoms-teghabashkhum',
    },  
    {   
      id: 30,
      title: 'CYBERGEN կիբերանվտանգության կոնֆերանս',
      date: '10.05.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16521720469586/510x383.png',
      path: 'cybergen-conference',
    }, 
    {   
      id: 31,
      title: 'Մինչև 12% զեղչ Qatar Airways-ում',
      date: '05.05.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16517443863347/510x383.png',
      path: 'qatar-mastercard',
    },   
    {   
      id: 32,
      title: '1,500 դրամ cashback Glovo-ում',
      date: '02.05.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16514777696197/510x383.png',
      path: 'visa-glovoo',
    }, 
    {   
      id: 33,
      title: 'Visa Vision Card',
      date: '18.04.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16517315453365/510x383.jpg',
      path: 'visa-vision-cardd',
    },  
    {   
      id: 34,
      title: 'Evocabank-ը կթողարկի պարտատոմսեր',
      date: '23.03.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16480274613347/510x383.jpg',
      path: 'bonds-2022',
    },    
    {   
      id: 35,
      title: 'Նոր համագործակցություն Tinkoff-ի հետ',
      date: '21.03.2022',
      image: '		https://www.evoca.am/images-cache/news/1/16475068662/510x383.jpg',
      path: 'tinkoff',
    },  
    {   
      id: 36,
      title: 'Կատարիր վարկի մարումներ, ստացիր նվերներ',
      date: '01.03.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16461380153403/510x383.jpg',
      path: 'online-payment',
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
                currentPage === 9 ? 'text-gray-300 pointer-events-none' : 'text-purple-700 hover:text-purple-900'
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
              to={`/news/allpage${currentPage + 9}`}
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