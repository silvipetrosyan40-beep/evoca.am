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
      title: 'Օվերդրաֆտ՝ սպառողական վարկառուներին',
      date: '14.02.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16450206167145/510x383.png',
      path: 'overdraft-consumer',
    },
    {
      id: 2,
      title: 'Audio նորություններ Evoca-ում',
      date: '09.02.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16449296989543/510x383.jpg',
      path: 'audio-news',
    },
    {
      id: 3,
      title: 'Ավանդ Symphonic',
      date: '31.01.2022',
      image: '		https://www.evoca.am/images-cache/news/1/16438962322546/510x383.jpg',
      path: 'symphonic-deposit',
    },
    {
      id: 4,
      title: 'Strong Visa Premium Issuance',
      date: '31.01.2022',
      image: 'https://www.evoca.am/images-cache/news/1/1643624031555/510x383.jpg',
      path: 'visa-award',
    },
    {
      id: 5,
      title: 'Մինչև 12% զեղչ Qatar Airways-ում',
      date: '18.01.2022',
      image: '	https://www.evoca.am/images-cache/news/1/1642501519511/510x383.png',
      path: 'visa-qatar',
    },
    {
      id: 6,
      title: 'Հատուկ առաջարկ Mastercard քարտապանների համար',
      date: '12.01.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16419837810663/510x383.jpg',
      path: 'mastercard-iherb',
    },
    {
      id: 7,
      title: 'Հատուկ զեղչեր Yandex Taxi-ում Mastercard քարտապանների համար',
      date: '12.01.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16419778586068/510x383.png',
      path: 'mastercard-yandex-go',
    },
    {
      id: 8,
      title: '30% զեղչ The Body Shop խանութում',
      date: '03.01.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16412170753555/510x383.png',
      path: 'visa-bodyshop',
    },
    {
      id: 9,
      title: '30% զեղչ ԱԿԳ դեղատների ցանցում',
      date: '03.01.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16412157864654/510x383.png',
      path: 'visa-akg',
    },
    {
      id: 10,
      title: 'Նոր համագործակցություն Фора-Банк-ի հետ',
      date: '29.12.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16407876702073/510x383.jpg',
      path: 'fora-bank',
    },
    {
      id: 11,
      title: 'Օվերդրաֆտ՝ հիփոթեքային վարկառուներին',
      date: '20.12.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16400003620445/510x383.png',
      path: 'hipotek-overdraft',
    },
    {
      id: 12,
      title: 'Ամանորյա ակցիա Visa-ի հետ',
      date: '15.12.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16396373509295/510x383.png',
      path: 'visa-newyear',
    },
    {
      id: 13,
      title: 'Evoca Gift Card',
      date: '13.12.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16393998937857/510x383.jpg',
      path: 'evoca-gift-cardd',
    },   
    {
      id: 14,
      title: 'Neonn Castle electronic music event',
      date: '01.12.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16383597366736/510x383.jpg',
      path: 'neonn-castle',
    },   
    {
      id: 15,
      title: 'Միացիր EvocaLab 8-ին',
      date: '01.12.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16383421382899/510x383.jpg',
      path: 'Evocalab8',
    },   
    {
      id: 16,
      title: 'Black Friday, Evoca Visa քարտ և նվերներ',
      date: '25.11.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16378501000935/510x383.png',
      path: 'visa-dalma',
    },   
    {   
      id: 17,
      title: 'Պատվիրիր Evoca Visa Classic, ստացիր Evoca Visa Gold',
      date: '11.11.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16366388551494/510x383.jpg',
      path: 'visagold',
    },
    {   
      id: 18,
      title: 'The Symphony of Leadership',
      date: '08.11.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16365544294908/510x383.jpg',
      path: 'the-symphony-of-leadership',
    }, 
    {   
      id: 19,
      title: 'Ֆինանսներ Այլ կերպ',
      date: '29.10.2021',
      image: '		https://www.evoca.am/images-cache/news/1/16355172148018/510x383.png',
      path: 'Finances-aylkerp',
    }, 
    {   
      id: 20,
      title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
      date: '27.10.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16353380635409/510x383.png',
      path: 'GlobalFinanceSME',
    }, 
    {   
      id: 21,
      title: 'Նվեր հիփոթեքային վարկառուներին՝ Mastercard Gold',  
      date: '27.10.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16353242474398/510x383.png',
      path: 'mastercard-goldd',
    },  
    {   
      id: 22,
      title: 'Evocabank-ը` Build Armenia 2021 Expo-ի գործընկեր',
      date: '30.09.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16330944390291/510x383.jpg',
      path: 'buildarmenia',
    }, 
    {   
      id: 23,
      title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
      date: '25.08.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16298152041567/510x383.png',
      path: 'global_finance_2021',
    }, 
    {   
      id: 24,
      title: 'Վճարիր Evoca Visa քարտով և ստացիր նվերներ',
      date: '29.07.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16278891904817/510x383.png',
      path: 'visa-yerevanmall',
    }, 
    {   
      id: 25,
      title: 'Վճարի՛ր գույքահարկդ` առանց զրոյական տեղեկանք ներկայացնելու',
      date: '06.07.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16279982374468/510x383.jpg',
      path: 'guyqahark',
    }, 
    {   
      id: 26,
      title: 'Մինչև 30% զեղչ gg-ում Visa քարտապանների համար',
      date: '28.06.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16248782696054/510x383.jpg',
      path: 'visa-gg-new',
    },
    {   
      id: 27,
      title: 'Հատուկ զեղչեր Aliexpress կայքում Visa քարտապանների համար',
      date: '22.06.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16243455132447/510x383.png',
      path: 'visa-aliexpress',
    }, 
    {   
      id: 28,
      title: 'Evoca թվային բուկլետներ QR կոդով',
      date: '08.06.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16231559412787/510x383.jpg',
      path: 'QR-booklet',
    },  
    {   
      id: 29,
      title: 'Նոր համագործակցություն IFC-ի հետ',
      date: '03.06.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16226194646898/510x383.png',
      path: 'IFC-new',
    },  
    {   
      id: 30,
      title: 'Լավագույն թվային բանկը Հայաստանում',
      date: '02.06.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16226327869776/510x383.png',
      path: 'global-finance-banking',
    }, 
    {   
      id: 31,
      title: 'COVID-ի անվճար ՊՇՌ թեստ Evoca Infinite քարտապանների համար',
      date: '31.05.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16224645982874/510x383.jpg',
      path: 'covid-visa',
    },   
    {   
      id: 32,
      title: 'Պատվավոր Մրցանակ Awwwards թիմի կողմից',
      date: '24.05.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16218603847598/510x383.png',
      path: 'new-website-award',
    }, 
    {   
      id: 33,
      title: 'Լավագույն մոբայլ բանկը Հայաստանում՝ ըստ SME Banking Club-ի',
      date: '11.05.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16207980220161/510x383.png',
      path: 'SME-best-mobile-banking',
    },  
    {   
      id: 34,
      title: 'Արագ դրամական փոխանցումներ Visa-ի հետ ավելի շահավետ պայմաններով',
      date: '28.04.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16207217632252/510x383.png',
      path: 'arag-dramakan-poxancumner',
    },    
    {   
      id: 35,
      title: 'Հատուկ զեղչեր Yandex Taxi-ում Mastercard քարտապանների համար',
      date: '26.04.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16201320766289/510x383.png',
      path: 'mastercard-cardholders',
    },  
    {   
      id: 36,
      title: 'Evocabank-ի պարտատոմսերը ցուցակվել են Հայաստանի ֆոնդային բորսայում',
      date: '08.04.2021',
      image: '	https://www.evoca.am/images-cache/news/1/1620735937822/510x383.jpg',
      path: 'partatomser-cucakvel-en',
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
              to={`/news/allpage${currentPage + 10}`}
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