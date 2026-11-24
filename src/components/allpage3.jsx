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
      title: 'iPhone և MacBook Air՝ 0% սպասարկման վճարով',
      date: '08.09.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17573391299753/510x383.png',
      path: 'percent-service-fee',
    },
    {
      id: 2,
      title: 'Evoca Visa քարտապաններն ունեն առաջարկ',
      date: '04.09.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17569912369255/510x383.png',
      path: 'cashback-on-buy-am',
    },
    {
      id: 3,
      title: 'Նոր առաջարկ Evoca Mastercard քարտապանների համար',
      date: '01.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17567286835411/510x383.png',
      path: 'americano-and-donut',
    },
    {
      id: 4,
      title: 'Evoca-ն մասնակցում է TOON EXPO 2025-ին',
      date: '27.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/175627574177/510x383.png',
      path: 'in-toon-expo-2025',
    },
    {
      id: 5,
      title: 'Evocabank-ի Խորհրդի նոր կազմը',
      date: '26.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png',
      path: 'board-of-evocabank',
    },
    {
      id: 6,
      title: 'Evocabank-ը՝ 50-րդ BACEE Jubilee համաժողովի պլատինում հովանավոր',
      date: '19.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png',
      path: 'conference-by-bacee',
    },
    {
      id: 7,
      title: 'Back to School. Վճարիր Evoca Mastercard-ով, ստացիր 20% cashback',
      date: '14.08.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17551746889694/510x383.png',
      path: 'at-partner-bookstores ',
    },
    {
      id: 8,
      title: 'Էվոկաբանկ ԲԲԸ',
      date: '01.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17540357468511/510x383.png',
      path: 'from-CJSC-OJSC',
    },
    {
      id: 9,
      title: 'Evoca x Al Fardan Exchange. արագ ու հարմար փոխանցումներ դեպի ԱՄԷ',
      date: '30.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17543142671349/510x383.png',
      path: 'al-fardan-exchange',
    },
    {
      id: 10,
      title: '10% cashback և Skip The Line հնարավորություն',
      date: '28.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17537015540189/510x383.png',
      path: 'visa-cardholders',
    },
    {
      id: 11,
      title: 'Դու ունես հնարավորություն հանդիպելու JLo-ին',
      date: '25.07.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17534487529816/510x383.png',
      path: 'meet-jennifer-lopez',
    },
    {
      id: 12,
      title: 'Վճարիր օնլայն` Apple Pay-ով',
      date: '22.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17531989779123/510x383.png',
      path: 'evocabank-vpos',
    },
    {
      id: 13,
      title: 'Մեկնարկեցին Evoca Partners Club-ն ու Evoca Benefits նախագիծը',
      date: '21.07.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17530865995552/510x383.png',
      path: 'project-have-launched',
    },   
    {
      id: 14,
      title: 'Evocabank՝ «Լավագույն Բանկը Հայաստանում 2025»',
      date: '04.07.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17516321438473/510x383.png',
      path: 'investor-magazine',
    },   
    {
      id: 15,
      title: 'Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես',
      date: '03.07.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17515401570632/510x383.png',
      path: 'function-of-evocatouch',
    },   
    {
      id: 16,
      title: 'Կարեն Եղիազարյանի հարցազրույցը TIME Magazine-ին',
      date: '25.06.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17508538711597/510x383.png',
      path: '/interviews/interview-of-karen-yeghiazaryan-with-time-magazine',
    },   
    {   
      id: 17,
      title: 'Evocabank-ը միացել է IFC-ի առևտրի ֆինանսավորման ծրագրին',
      date: '17.06.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17501430419171/510x383.png',
      path: 'trade-finance-program',
    },
    {   
      id: 18,
      title: 'Նոր ինտերֆեյս՝ ավելի հարմար առցանց վճարումներ',
      date: '16.06.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17500622728518/510x383.png',
      path: 'payments-with-vpos',
    }, 
    {   
      id: 19,
      title: 'Evocabank-ը՝ Newmag Summer Fest 2025-ի գլխավոր հովանավոր',
      date: '13.06.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1749800175046/510x383.png',
      path: 'summer-fest-2025',
    }, 
    {   
      id: 20,
      title: 'Վայելիր հանգիստդ և խնայիր գումար Evoca Visa քարտի միջոցով',
      date: '04.06.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17490227658695/510x383.jpg',
      path: 'com-get-cashback',
    }, 
    {   
      id: 21,
      title: 'Evoca Travel Card-ը վայրէջք կատարեց',  
      date: '20.05.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17479803552747/510x383.png',
      path: 'evoca-travel-card',
    },  
    {   
      id: 22,
      title: '20% զեղչ ԱԿԳ հավելվածում Evoca Visa քարտապանների համար',
      date: '20.05.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17477364797809/510x383.png',
      path: 'akg-discount-evoca-visa',
    }, 
    {   
      id: 23,
      title: 'Evocabank-ը և EBRD-ն համագործակցության համաձայնագրեր են ստորագրել',
      date: '14.05.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17472925002048/510x383.png',
      path: 'evocabank-and-ebrd-cooperation',
    }, 
    {   
      id: 24,
      title: 'Այո՛ւն, Jennifer Lopez-ը գալիս է Հայաստան',
      date: '28.04.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17458487928291/510x383.png',
      path: 'jennifer-lopez-live-in-armenia',
    }, 
    {   
      id: 29,
      title: 'Evocabank-ը Career City Fest 2K25-ին',
      date: '28.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17458431584755/510x383.png',
      path: 'evocabank-career-city-fest-2k25',
    }, 
    {   
      id: 26,
      title: 'Evocabank-ը կմասնակցի Career City Fest 2K25-ին',
      date: '21.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17452406787041/510x383.png',
      path: 'participate-in-career-city-fest-2k25',
    },
    {   
      id: 27,
      title: 'Առցանց դասընթացներ միջազգային հարթակներում՝ մինչև 25% զեղչով',
      date: '18.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/1744964814312/510x383.png',
      path: 'online-courses-discount-evoca-visa',
    }, 
    {   
      id: 28,
      title: 'Շասասասատ զեղչեր ԱՄԷ-ում Evoca Visa քարտապանների համար',
      date: '15.04.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17447167969525/510x383.png',
      path: 'discounts-in-uae-for-evoca-visa',
    },  
    {   
      id: 29,
      title: 'Նոր մրցանակ BACEE-ի կողմից',
      date: '14.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17446266510076/510x383.png',
      path: 'award-from-bacee',
    },  
    {   
      id: 30,
      title: 'Մեծ զեղչեր Evoca Visa պրեմիում քարտապանների համար',
      date: '08.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17441042084127/510x383.png',
      path: 'discounts-for-evoca-visa',
    }, 
    {   
      id: 31,
      title: 'Նոր մրցանակ Evoca-ին` լավագույն ՓՄՁ բանկը Հայաստանում 2025',
      date: '02.04.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17435920140644/510x383.png',
      path: 'bank-in-armenia-2025',
    },   
    {   
      id: 32,
      title: 'Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը',
      date: '01.04.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17545729507567/510x383.png',
      path: 'pay-with-evoca-mastercard',
    }, 
    {   
      id: 33,
      title: 'Վճարիր Evoca Mastercard-ով և վայելիր անվճար Այ Բուրգեր KFC-ից',
      date: '31.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17434047457376/510x383.png',
      path: 'free-burger-from-kfc',
    },  
    {   
      id: 34,
      title: 'Գնի՛ր iPhone Evocabank-ի միջոցով',
      date: '28.03.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17431499399716/510x383.png',
      path: 'buy-iphone-evocabank',
    },    
    {   
      id: 35,
      title: 'Ձեռք բեր քո երազանքների բնակարանը 12%-ով',
      date: '26.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17429755745448/510x383.png',
      path: 'get-your-dream',
    },  
    {   
      id: 36,
      title: 'Ընդամենը Evoca Visa քարտ և 30% cashback buy.am-ում',
      date: '11.03.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17416830305613/510x383.jpg',
      path: 'evoca-visa-card',
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
              to={`/news/allpage${currentPage + 3}`}
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