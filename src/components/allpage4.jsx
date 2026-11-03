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
      title: 'Ընդամենը Evoca Visa քարտ և 30% cashback buy.am-ում',
      date: '11.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17416830305613/510x383.jpg',
      path: 'cashback-on-buy-am',
    },
    {
      id: 2,
      title: 'Նվիրիր նվեր քարտ, մասնակցիր խաղարկությանը և շահիր',
      date: '07.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17413527732385/510x383.jpg',
      path: 'card-and-win',
    },
    {
      id: 3,
      title: 'Phubber + Evoca Visa = 0% միջնորդավճար՝ հատուկ քեզ համար',
      date: '06.03.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17412622497205/510x383.png',
      path: 'evoca-visa-cards',
    },
    {
      id: 4,
      title: 'Evocabank-ի «Հանրապետության» մասնաճյուղն արդեն բաց է',
      date: '20.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/1740120458201/510x383.png',
      path: 'opening-hanrapetutyan',
    },
    {
      id: 5,
      title: '15% զեղչ KinoPark-ում` Evoca Visa քարտապանների համար',
      date: '19.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17399680512009/510x383.jpg',
      path: 'evoca-visa-cardholders',
    },
    {
      id: 6,
      title: '15% cashback Myler-ում Evoca Visa քարտապանների համար',
      date: '18.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17398763342238/510x383.png',
      path: 'evoca-visa-cardholders',
    },
    {
      id: 7,
      title: 'Evoca Visa պրեմիում քարտեր. ճամփորդիր առանց սահմանների',
      date: '12.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17393570102872/510x383.png',
      path: 'traveling-with-no-limits',
    },
    {
      id: 8,
      title: 'Անսահմանափակ Lounge Key մուտք՝ նոր պայմաններով',
      date: '07.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17389374853499/510x383.png',
      path: 'terms-and-conditions',
    },
    {
      id: 9,
      title: 'Նոր զեղչեր Evoca Mastercard քարտապանների համար',
      date: '07.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17389114240578/510x383.png',
      path: 'mastercard-cardholders',
    },
    {
      id: 10,
      title: 'ՎՃարիր Evoca Visa քարտով և ստացիր 30% cashback buy.am-ում',
      date: '05.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17387624327634/510x383.jpg',
      path: 'card-get-cashback',
    },
    {
      id: 11,
      title: 'Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce 2-ին',
      date: '04.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17386587462914/510x383.png',
      path: 'of-mdcc-in-miami',
    },
    {
      id: 12,
      title: '2 նոր մրցանակ Evocabank-ին Global Business & Finance-ի կողմից',
      date: '30.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17382449387143/510x383.png',
      path: 'finance-magazine',
    },
    {
      id: 13,
      title: 'Նոր մրցանակ Evoca-ին՝ Excellence in New Products Development',
      date: '21.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17374660522736/510x383.jpg',
      path: 'products-development',
    },   
    {
      id: 14,
      title: 'Համագործակցության նոր ֆորմատ Evoca-ի, ՀՊՏՀ-ի և ՀՖՀՀ-ի միջև',
      date: '20.01.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17373763573222/510x383.jpg',
      path: 'evoca-asue-ufar',
    },   
    {
      id: 15,
      title: 'Evocabank. 2024 թվականի ամփոփում',
      date: '17.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17371104329802/510x383.jpg',
      path: 'innovation-and-growth',
    },   
    {
      id: 16,
      title: 'Նոր մասնաճյուղ Երևան Մոլում',
      date: '13.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17369249643186/510x383.jpg',
      path: 'opening-yerevan-mall',
    },   
    {   
      id: 17,
      title: 'Evocabank՝ լավագույն թվային բանկը Հայաստանում 2024',
      date: '13.01.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17367544923272/510x383.png',
      path: 'finance-magazine',
    },
    {   
      id: 18,
      title: 'Ընդամենը Evoca Mastercard և 10% զեղչ iSpace խանութներում',
      date: '24.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17350261083272/510x383.png',
      path: 'stores-get-discounts',
    }, 
    {   
      id: 19,
      title: 'Շաաատ ամանորյա առաջարկներ Evoca Visa քարտապաններին',
      date: '23.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17352073225371/510x383.png',
      path: 'visa-cardholders',
    }, 
    {   
      id: 20,
      title: 'Ամանորյա առաջարկ Evoca Visa քարտապաններին',
      date: '18.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17345194462142/510x383.png',
      path: 'cashback-new-offer',
    }, 
    {   
      id: 21,
      title: '5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին',  
      date: '13.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17340920050867/510x383.png',
      path: 'for-future-foundation',
    },  
    {   
      id: 22,
      title: 'Evocabank-ը և Al Fardan Exchange-ը ստորագրել են համագործակցության…',
      date: '12.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17340172368299/510x383.png',
      path: 'cooperation-agreement',
    }, 
    {   
      id: 23,
      title: 'Evocabank-ը և IFC-ն համագործակցության պայմանագիր են ստորագրել',
      date: '11.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17339403687437/510x383.jpg',
      path: 'financial-inclusion',
    }, 
    {   
      id: 24,
      title: 'Նվերներ շահելու հնարավորություն Evoca քարտապանների համար',
      date: '11.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17346144644078/510x383.png',
      path: 'get-chance-to-win-gifts',
    }, 
    {   
      id: 29,
      title: 'Navigating Business in a Sanctioned World',
      date: '10.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17338293917613/510x383.png',
      path: 'sanctioned-world',
    }, 
    {   
      id: 26,
      title: 'Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը',
      date: '09.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17337499936685/510x383.jpg',
      path: 'notre-dame-cathedral',
    },
    {   
      id: 27,
      title: 'Evoca-ն՝ Miami-Dubai Chamber of Commerce-ի պլատինում հովանավոր',
      date: '09.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17337479879173/510x383.jpg',
      path: 'sponsor-of-mdcc',
    }, 
    {   
      id: 28,
      title: 'Evocabank-ը ներգրավել է 5 մլն ԱՄՆ դոլար responsAbility-ից',
      date: '03.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17332069569872/510x383.png',
      path: 'from-responsability',
    },  
    {   
      id: 29,
      title: '20 միլիոն դրամ «Հայաստան» hամահայկական հիմնադրամին',
      date: '28.11.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17327982683146/510x383.png',
      path: 'all-armenian-fund',
    },  
    {   
      id: 30,
      title: 'Black Friday-ի հատուկ առաջարկ Evoca Mastercard քարտապաններին',
      date: '27.11.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17327830533928/510x383.png',
      path: 'cards-black-friday',
    }, 
    {   
      id: 31,
      title: 'Մրցանակ Visa-ի կողմից "Highest Cashless Ratio Achievement"',
      date: '25.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/1737466907351/510x383.jpg',
      path: 'ratio-achievement',
    },   
    {   
      id: 32,
      title: 'Evoca-ն ավարտել է պարտատոմսերի տեղաբաշխումը',
      date: '25.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17325417143896/510x383.jpg',
      path: 'bond-placement',
    }, 
    {   
      id: 33,
      title: 'EvocaTOUCH հավելվածով Idram QR վճարումներ',
      date: '12.11.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17283954133829/510x383.png',
      path: 'idram-cooperation-open-qr',
    },  
    {   
      id: 34,
      title: 'Evocabank-ը միացել է ArCa Pay-ին',
      date: '11.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17313236323207/510x383.png',
      path: 'arca-cooperation-arca-pay',
    },    
    {   
      id: 35,
      title: 'MoneyTun՝ նոր արագ դրամական փոխանցումների համակարգ Evoca-ում',
      date: '06.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17308934051939/510x383.png',
      path: 'system-usa-armenia',
    },  
    {   
      id: 36,
      title: 'Evoca-ն միացել է UBPay արագ դրամական փոխանցումների համակարգին',
      date: '01.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304683213703/510x383.jpg',
      path: 'money-transfer-system',
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
                currentPage === 3 ? 'text-gray-300 pointer-events-none' : 'text-purple-700 hover:text-purple-900'
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
              to={`/news/allpage${currentPage + 4}`}
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