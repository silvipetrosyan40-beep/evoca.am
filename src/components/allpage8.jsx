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
      title: 'Evocabank-ը 𝗖𝗮𝗿𝗲𝗲𝗿 𝗖𝗶𝘁𝘆 𝗙𝗲𝘀𝘁-ի հովանավոր',
      date: '27.04.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16826807716886/510x383.png',
      path: 'career-city-fest',
    },
    {
      id: 2,
      title: 'Վարկային զեղչ',
      date: '12.04.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16812972722843/510x383.jpg',
      path: 'loan-sale',
    },
    {
      id: 3,
      title: 'Մեր գործընկեր Mastercard-ի առաջարկները դեռ շարունակվում են',
      date: '11.04.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16811968082638/510x383.jpg',
      path: 'mastercard-alfapharm',
    },
    {
      id: 4,
      title: 'Հատուկ առաջարկ Glovo x Mastercard-ից Evoca քարտապանների համար',
      date: '10.04.2023',
      image: 'https://www.evoca.am/images-cache/news/1/1681118175476/510x383.jpg',
      path: 'mastercard-glovo',
    },
    {
      id: 5,
      title: 'Evoca-ն MMR 2023: Panels and Battles մաքեթինգային կոնֆերանսի հովանավոր',
      date: '31.03.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16802703148045/510x383.jpg',
      path: 'evoca-mmr',
    },
    {
      id: 6,
      title: 'Evoca-ն ժամկետից շուտ ավարտել է պարտատոմսերի տեղաբաշխումը',
      date: '30.03.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16801705777805/510x383.jpg',
      path: 'bond-march',
    },
    {
      id: 7,
      title: 'Evocabank-ը թողարկել է պարտատոմսեր',
      date: '28.03.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1680009514293/510x383.jpg',
      path: 'evoca-new-bond',
    },
    {
      id: 8,
      title: 'Փոխանցված գումարների ստացում 0% միջնորդավճարով',
      date: '27.03.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16799235069868/510x383.jpg',
      path: 'fast-money-0',
    },
    {
      id: 9,
      title: 'Evocabank-ը կրկին կթողարկի պարտատոմսեր',
      date: '24.03.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16796664377463/510x383.jpg',
      path: 'bond-2023',
    },
    {
      id: 10,
      title: 'Գարնանային առաջարկներ Visa-ի կողմից',
      date: '16.03.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1679406781386/510x383.jpg',
      path: 'visa-spring',
    },
    {
      id: 11,
      title: 'Շատ նվերներ, տաք երկրներ Evoca Visa քարտապանների համար',
      date: '07.03.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16781944965518/510x383.jpg',
      path: 'visa-bali',
    },
    {
      id: 12,
      title: 'Հիանալի առաջարկ Visa քարտապանների համար կանանց տոնին ընդառաջ',
      date: '03.03.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16778525565254/510x383.jpg',
      path: 'visa-the-body-shop',
    },
    {
      id: 13,
      title: 'Նոր առաջարկ Ria Money Transfer-ի կողմից',
      date: '27.02.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16775043426438/510x383.jpg',
      path: 'ria25',
    },   
    {
      id: 14,
      title: 'Driving digital payments and transfers',
      date: '22.02.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16770738124576/510x383.jpg',
      path: 'visa-award-evoca',
    },   
    {
      id: 15,
      title: 'Նոր հնարավորություններ Visa քարտապանների համար',
      date: '22.02.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16772229974366/510x383.jpg',
      path: 'visa-benefit',
    },   
    {
      id: 16,
      title: 'Evocabank` Օրինապահ հարկ վճարող',
      date: '14.02.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16763623070677/510x383.jpg',
      path: 'orinapah',
    },   
    {   
      id: 17,
      title: 'Չինական յուանով և ԱՄԷ դիրհամով միջազգային փոխանցումներ',
      date: '31.01.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16751514125779/510x383.jpg',
      path: 'yuan-dirham',
    },
    {   
      id: 18,
      title: 'Evocabank-ն արժանացել է 2 մրցանակի Mastercard-ի կողմից',
      date: '23.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16740468433995/510x383.png',
      path: 'award-mastercard',
    }, 
    {   
      id: 19,
      title: 'Նոր համագործակցություն ՀՀ Լիզինգատուների Ասոցիացիայի հետ',
      date: '17.01.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16739643337781/510x383.png',
      path: 'lessorsassociation',
    }, 
    {   
      id: 20,
      title: 'Google Pay վճարումներ ՀՀ-ում Evoca Mastercard քարտերի համար',
      date: '27.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16721359436603/510x383.jpg',
      path: 'mastercard-gpay',
    }, 
    {   
      id: 21,
      title: '20% cashback քո գնումներից',  
      date: '13.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16709406084374/510x383.jpg',
      path: 'mastercard-cashback-fab',
    },  
    {   
      id: 22,
      title: 'Evoca-ն Քիմ Քարդաշյանի մասին թարգմանված գրքի հովանավոր',
      date: '09.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16705930561312/510x383.png',
      path: 'newmag-kim',
    }, 
    {   
      id: 23,
      title: 'Ոսկու գրավով վարկեր ավելի ցածր տոկոսադրույքով',
      date: '02.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16698094822872/510x383.jpg',
      path: 'gold-loans-akcia',
    }, 
    {   
      id: 24,
      title: '25% զեղչ Ria դրամական փոխանցումների համար',
      date: '01.12.2022',
      image: 'https://www.evoca.am/images-cache/news/1/1668087474472/510x383.png',
      path: 'riaa-25',
    }, 
    {   
      id: 25,
      title: '10 միլիոն դրամ` «Հայաստան» hամահայկական հիմնադրամին',
      date: '24.11.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16692997134617/510x383.jpg',
      path: 'all-armenian-fund',
    }, 
    {   
      id: 26,
      title: '5,000 դրամ նվեր Evoca-ից',
      date: '15.11.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16685075309806/510x383.png',
      path: 'visa-google-pay-cashback',
    },
    {   
      id: 27,
      title: 'Evoca-ն Հայաստանում մեկնարկում է Google Pay վճարումներ',
      date: '15.11.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16684929021333/510x383.png',
      path: 'visa-google-pay',
    }, 
    {   
      id: 28,
      title: 'Անցիր էլեկտրական մեքենայի Evoca-ի հետ',
      date: '09.11.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16679977844115/510x383.jpg',
      path: 'ev-cars',
    },  
    {   
      id: 29,
      title: 'Evolution - նոր կարիերա, նոր իրականություն',
      date: '03.11.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16674850230414/510x383.png',
      path: 'evolution',
    },  
    {   
      id: 30,
      title: 'Գնիր կինոյի մեկ տոմս, ստացիր երկրորդը նվեր',
      date: '28.10.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16669679279883/510x383.jpg',
      path: 'mastercard-applepay',
    }, 
    {   
      id: 31,
      title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
      date: '28.10.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16669535454762/510x383.jpg',
      path: 'GlobalFinanceSME2022',
    },   
    {   
      id: 32,
      title: 'Evoca Mobile POS՝ mPOS',
      date: '26.10.2022',
      image: '	https://www.evoca.am/images-cache/news/1/1657533997991/510x383.png',
      path: 'mpos',
    }, 
    {   
      id: 33,
      title: 'Evoca, Visa, Apple Pay և նվերներ',
      date: '11.10.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16654973686671/510x383.jpg',
      path: 'visa-apple-pay',
    },  
    {   
      id: 34,
      title: 'Evoca, Visa x FIFA World Cup',
      date: '04.10.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16649730720599/510x383.jpg',
      path: 'visa-fifa',
    },    
    {   
      id: 35,
      title: '15 միլիոն դոլարի նոր վարկ IFC-ից',
      date: '29.09.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16644550079199/510x383.png',
      path: 'ifc-loan',
    },  
    {   
      id: 36,
      title: 'Evocabank-ը` Global Finance մրցանակաբաշխության հաղթող',
      date: '28.09.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16643716594537/510x383.png',
      path: 'dubai-best-digital',
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
                currentPage === 7 ? 'text-gray-300 pointer-events-none' : 'text-purple-700 hover:text-purple-900'
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
              to={`/news/allpage${currentPage + 8}`}
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