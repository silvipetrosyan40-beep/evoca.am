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
      title: 'Մրցանակներ Evocabank-ին Armenia Digital Awards 2024-ի կողմից',
      date: '01.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304447813906/510x383.png',
      path: 'armenia-digital-awards',
    },
    {
      id: 2,
      title: 'Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից',
      date: '31.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304388351704/510x383.png',
      path: 'opportunities-for-smes',
    },
    {
      id: 3,
      title: 'Evoca-ն՝ Project Management Awards 2024-ի գլխավոր գործընկեր',
      date: '29.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17302076777661/510x383.png',
      path: 'evoca-general-partner',
    },
    {
      id: 4,
      title: 'Հիփոթեքային վարկ՝ ավելի ցածր տոկոսադրույքով',
      date: '24.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17297753797877/510x383.png',
      path: 'loan-special-offer',
    },
    {
      id: 5,
      title: 'Evoca-ն` զբոսաշրջության տարածաշրջանային ֆորումի գլխավոր գործընկեր',
      date: '22.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17296009856437/510x383.png',
      path: 'tourism-regional-forum',
    },
    {
      id: 6,
      title: 'Վճարիր Evoca Mastercard-ով և ստացիր 30% զեղչ Glovo-ում',
      date: '14.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17289080193428/510x383.png',
      path: 'discount-for-cardholders',
    },
    {
      id: 7,
      title: 'Առաջարկ Evoca Visa բոլոր քարտապաններին',
      date: '11.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/1728652233604/510x383.png',
      path: 'buy-am-cashback',
    },
    {
      id: 8,
      title: 'Evocabank-ը՝ DigiTec24-ում',
      date: '07.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17278731436243/510x383.png',
      path: 'mastercard-digital-card',
    },
    {
      id: 9,
      title: 'Evocabank` լավագույն ՓՄՁ բանկը Հայաստանում',
      date: '03.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17279621060614/510x383.png',
      path: 'bank-in-armenia',
    },
    {
      id: 10,
      title: 'Evoca-ն ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից',
      date: '03.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17279603303089/510x383.png',
      path: 'investments-msme-loan',
    },
    {
      id: 11,
      title: 'Ավտովարկ՝ սկսած 9․9%-ից',
      date: '01.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17278577580017/510x383.png',
      path: 'evoca-and-auto-gallery',
    },
    {
      id: 12,
      title: 'Փոփոխություններ Evoca Visa Infinite քարտապանների համար',
      date: '27.09.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17274358864927/510x383.png',
      path: 'visa-infinite-cardholders',
    },
    {
      id: 13,
      title: 'Evoca-ն՝ The Science of Leadership կոնֆերանսի գործընկեր',
      date: '26.09.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17273335340884/510x383.png',
      path: 'leadership-conference',
    },   
    {
      id: 14,
      title: 'Դրամով և դոլարով պարտատոմսեր Evocabank-ի կողմից',
      date: '26.09.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17273569939811/510x383.png',
      path: 'dollars-by-evoca',
    },   
    {
      id: 15,
      title: 'Evocabank-ը կներգրավի $10 մլն OFID-ից',
      date: '24.09.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17271616844358/510x383.png',
      path: 'opec',
    },   
    {
      id: 16,
      title: 'Evoca-ն միացել է TOON EXPO 2024-ին',
      date: '04.09.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17254564165798/510x383.png',
      path: 'meridian-expo-centre',
    },   
    {   
      id: 17,
      title: 'UnionPay քարտեր` Evocabank-ից',
      date: '30.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17246741766038/510x383.png',
      path: 'gold-and-business',
    },
    {   
      id: 18,
      title: 'Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 50% cashback',
      date: '28.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17250200104029/510x383.png',
      path: 'new-offer-cashback',
    }, 
    {   
      id: 19,
      title: 'Ամենամեծ ակցիան Evoca Visa քարտապանների համար',
      date: '26.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/1724744341029/510x383.png',
      path: 'evoca-cardholders',
    }, 
    {   
      id: 20,
      title: 'Evoca-ն Coca-Cola Music Fest-ի գլխավոր ֆինանսական հովանավոր',
      date: '20.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17244237758727/510x383.png',
      path: 'main-financial-sponsor',
    }, 
    {   
      id: 21,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում',  
      date: '19.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17240636797533/510x383.png',
      path: 'finance-review',
    },  
    {   
      id: 22,
      title: 'Evoca-ն՝ Սուրբ Էջմիածնի Մայր Տաճարի մասին ժողովածուի հովանավոր',
      date: '15.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17237286203482/510x383.png',
      path: 'etchmiadzin-book',
    }, 
    {   
      id: 23,
      title: 'Evoca-ն՝ Համաշխարհային հայկական գագաթնաժողովի գլխավոր գործընկեր',
      date: '13.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17236189467572/510x383.png',
      path: 'global-armenian-summit',
    }, 
    {   
      id: 24,
      title: 'Evoca-ն ժամկետից շուտ ավարտել է պարտատոմսերի տեղաբաշխումը',
      date: '13.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/1723534469539/510x383.png',
      path: 'bond-placement',
    }, 
    {   
      id: 25,
      title: 'Եվրոպական համագործակցություն՝ ի շահ ՓՄՁ-ների',
      date: '05.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/1725277850499/510x383.png',
      path: 'financing-the-purpose',
    }, 
    {   
      id: 26,
      title: 'EIB Global-ը և Evocabank-ը ստորագրեցին համագործակցության…',
      date: '01.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17225181707938/510x383.jpg',
      path: 'cooperation-msme',
    },
    {   
      id: 27,
      title: '«Կիևյան» մասնաճյուղն արդեն գործում է նոր հասցեով',
      date: '29.07.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17222414491934/510x383.jpg',
      path: 'opening-new-address',
    }, 
    {   
      id: 28,
      title: 'Նոր առաջարկներ Evoca Visa քարտապաններին',
      date: '26.07.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17219998278406/510x383.jpg',
      path: 'cinema-star-armenia',
    },  
    {   
      id: 29,
      title: 'Evocabank-ը թողարկել է պարտատոմսեր՝ դրամով և դոլարով',
      date: '25.07.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17217242754328/510x383.png',
      path: 'drams-and-dollars',
    },  
    {   
      id: 30,
      title: 'Evocabank-ը մասնակցել է OPEC Fund Development Forum 2024-ին',
      date: '12.07.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17207673553885/510x383.png',
      path: 'development-forum-vienna',
    }, 
    {   
      id: 31,
      title: 'Նոր օվերդրաֆտ՝ EvocaHOME"',
      date: '03.07.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17199852468863/510x383.png',
      path: 'product-evocahome',
    },   
    {   
      id: 32,
      title: 'Evocabank-ն ամփոփել է 2023թ. տարեկան արդյունքները',
      date: '01.07.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17198345573851/510x383.png',
      path: 'meeting-of-shareholders',
    }, 
    {   
      id: 33,
      title: 'Ամռան ամենաթեժ առաջարկը Evoca Mastercard քարտապաններին',
      date: '28.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17198393249017/510x383.png',
      path: 'discount-by-mastercard',
    },  
    {   
      id: 34,
      title: '20 մլն դրամ` աղետից տուժած բնակիչներին',
      date: '24.06.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17192298505328/510x383.png',
      path: 'tavush-regions',
    },    
    {   
      id: 35,
      title: 'Evoca-ն՝ Armenian Auto Show Expo-ի հովանավոր',
      date: '20.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17188908167256/510x383.png',
      path: 'show-expo-sponsorship',
    },  
    {   
      id: 36,
      title: 'Evocabank-ի նոր նվիրաբերությունը “City of Smile” հիմնադրամին',
      date: '18.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17187156211345/510x383.png',
      path: 'smile-charity-fund',
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
              to={`/news/allpage${currentPage + 5}`}
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