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
      title: 'Evoca-ն newmag summer fest 2024-ի գլխավոր հովանավոր',
      date: '17.06.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17186350494303/510x383.png',
      path: 'books-and-art',
    },
    {
      id: 2,
      title: 'Նոր առաջարկ Evoca քարտապանին Mastercard-ի կողմից',
      date: '14.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17183620725038/510x383.jpg',
      path: 'glovo-kfc-cashback',
    },
    {
      id: 3,
      title: 'Evocabank-ը ներգրավել է 4 մլն ԱՄՆ դոլար responsAbility-ից',
      date: '13.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17182807965555/510x383.png',
      path: 'million-usd-attraction',
    },
    {
      id: 4,
      title: 'Evocabank-ը` Textile Academy Bootcamp 2024-ի հովանավոր',
      date: '24.05.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17170738639937/510x383.png',
      path: 'lab-armenia-sponsorship',
    },
    {
      id: 5,
      title: 'Հայտնի են «Ոզնի» մրցաշարի հաղթող թիմերը',
      date: '22.05.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17163731003684/510x383.jpg',
      path: 'sponsorship-the-winners',
    },
    {
      id: 6,
      title: 'Evocabank-ը Career City Fest 2K24-ին',
      date: '29.04.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17143968030277/510x383.jpg',
      path: 'career-city-2024',
    },
    {
      id: 7,
      title: 'Evocabank-ի մասնակցությունը Leasing Expo 2024-ին',
      date: '18.04.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17134208978084/510x383.png',
      path: 'expo-2024-special-offer',
    },
    {
      id: 8,
      title: 'Evocabank-ը «Ոզնի» մրցաշարի գլխավոր հովանավոր',
      date: '16.04.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17132534344794/510x383.jpg',
      path: 'vozni-new-donation',
    },
    {
      id: 9,
      title: 'Արագ ու մատչելի ուղևորություններ Evoca Visa-ի և gg-ի հետ',
      date: '02.04.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17120655038002/510x383.png',
      path: 'gg-new-offer',
    },
    {
      id: 10,
      title: 'Women in Business of Armenia կոնֆերանս',
      date: '29.03.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17117130924409/510x383.jpg',
      path: 'is-next-conference',
    },
    {
      id: 11,
      title: 'Evocabank-ը միացել է BACEE-ին',
      date: '21.03.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17111163408005/510x383.png',
      path: 'bacee-new-cooperation',
    },
    {
      id: 12,
      title: 'МИР քարտերի սպասարկման դադարեցում',
      date: '19.03.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17108488972254/510x383.png',
      path: 'service-termination',
    },
    {
      id: 13,
      title: 'Evoca-ն՝ տնտեսագիտական օլիմպիադայի գլխավոր գործընկեր',
      date: '06.03.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17097279853875/510x383.png',
      path: 'economics-olympiad-donation',
    },   
    {
      id: 14,
      title: 'Կանանց տոնին ընդառաջ նոր ակցիա Mastercard-ի հետ',
      date: '04.03.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17095305374369/510x383.png',
      path: 'mastercard-cashback-new-offer',
    },   
    {
      id: 15,
      title: 'LEASING EXPO 2024 «Բոլոր սարքավորումները մեկ հարթակում»',
      date: '28.02.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17091034371146/510x383.jpg',
      path: 'leasing-expo-2024',
    },   
    {
      id: 16,
      title: '10-30% զեղչ Evoca քարտապաններին Գեդեոն Ռիխտերի կողմից',
      date: '19.02.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17083258332896/510x383.png',
      path: 'richter-pharmacy-discounts',
    },   
    {   
      id: 17,
      title: 'Մատչելի ուղևորություններ Evoca քարտապանների համար',
      date: '13.02.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17078264819318/510x383.png',
      path: 'visa-gg-discount',
    },
    {   
      id: 18,
      title: 'Նախագծերի կառավարում․ գաղափարից մինչև արժեքի ստեղծում',
      date: '05.02.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17071236665338/510x383.jpg',
      path: 'new-book-partner',
    }, 
    {   
      id: 19,
      title: '2 նոր մրցանակ Global Business and Finance Magazine-ի կողմից',
      date: '01.02.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17067716894602/510x383.png',
      path: 'business-and-finance',
    }, 
    {   
      id: 20,
      title: 'Նոր միջազգային վարկանիշ Evoca-ին Fitch Ratings-ից',
      date: '18.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17255457525076/510x383.png',
      path: 'fitch-ratings',
    }, 
    {   
      id: 21,
      title: 'Evocabank & Blend համագործակցություն',  
      date: '29.01.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17065349106759/510x383.png',
      path: 'blend-new-cooperation',
    },  
    {   
      id: 22,
      title: 'Evoca Infinite քարտապան, դուք ունեք նոր, բաց թողնված առաջարկ',
      date: '26.01.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17062774608105/510x383.png',
      path: 'unlimited-lounge-key',
    }, 
    {   
      id: 23,
      title: 'Եղիր ամենաթրենդայինը՝ Evoca & Visa նոր առաջարկի շնորհիվ',
      date: '23.01.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17060165864075/510x383.jpg',
      path: 'phubber-new-cooperation',
    }, 
    {   
      id: 24,
      title: '3 մլն նվիրաբերություն Սուրբ Ծննդյան համերգի համար',
      date: '14.12.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17011691026688/510x383.png',
      path: 'christmas-concert-donation',
    }, 
    {   
      id: 25,
      title: 'Նոր առաջարկներ Evoca Visa քարտապանների համար տոներին ընդառաջ',
      date: '08.12.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17020264857515/510x383.jpg',
      path: 'hundred-gifts',
    }, 
    {   
      id: 26,
      title: '5 մլն դրամ նվիրաբերություն Family Care հիմնադրամին',
      date: '08.12.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1702014797777/510x383.png',
      path: 'care-new-donation',
    },
    {   
      id: 27,
      title: 'Գաղափարի շուրջ համախմբումն ամենահզոր միջոցն է նպատակին հասնելու համար',
      date: '24.11.2023',
      image: '	https://www.evoca.am/images-cache/news/1/17008349940521/510x383.jpg',
      path: 'yeghiazaryan-new-interview',
    }, 
    {   
      id: 28,
      title: 'Evocabank-ը ներգրավել է 7 մլն ԱՄՆ դոլար responsAbility-ից',
      date: '24.11.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17008145898933/510x383.png',
      path: 'new-cooperation-msme',
    },  
    {   
      id: 29,
      title: 'Նոր մրցույթ Mastercard քարտապանների համար',
      date: '22.11.2023',
      image: '	https://www.evoca.am/images-cache/news/1/17006582017027/510x383.jpg',
      path: 'mastercatd-new-competition',
    },  
    {   
      id: 30,
      title: '120 մլն դրամ նվիրաբերություն Fab Lab Armenia-ին',
      date: '22.11.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17006549253885/510x383.jpg',
      path: 'fab-lab-donation',
    }, 
    {   
      id: 31,
      title: 'Gold Friday Evocabank-ում',
      date: '17.11.2023',
      image: '	https://www.evoca.am/images-cache/news/1/17002279384998/510x383.png',
      path: 'gold-black-friday',
    },   
    {   
      id: 32,
      title: 'Evoca-ն ներգրավել է 2 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից',
      date: '15.11.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17000469131451/510x383.jpg',
      path: 'symbiotics-msme-loan',
    }, 
    {   
      id: 33,
      title: 'Նոր առաջարկներ Evoca Visa պրեմիում քարտապաններին',
      date: '02.11.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1699363158978/510x383.png',
      path: 'premium-cardholders',
    },  
    {   
      id: 34,
      title: 'Concierge ծառայություն Evoca Visa Infinite քարտապանների համար',
      date: '30.10.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16986493091932/510x383.jpg',
      path: 'evoca-premium-cardholders',
    },    
    {   
      id: 35,
      title: 'SMART ԱՊԱԳԱ․ Evocabank-ը ֆինանսավորել է Farmbot նախագիծը',
      date: '26.10.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16988446521966/510x383.jpg',
      path: 'farmbot-financing',
    },  
    {   
      id: 36,
      title: 'Անվճար Evoca քարտեր Արցախի մեր հայրենակիցներին',
      date: '04.10.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16964027775467/780x585.png',
      path: 'Artsakh-people',
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
                currentPage === 5 ? 'text-gray-300 pointer-events-none' : 'text-purple-700 hover:text-purple-900'
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
              to={`/news/allpage${currentPage + 6}`}
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