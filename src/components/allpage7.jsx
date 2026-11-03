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
      title: 'ԶԵՂՉ Ria դրամական փոխանցումների համար',
      date: '29.09.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16959775884115/510x383.jpg',
      path: 'evoca-ria-discount',
    },
    {
      id: 2,
      title: 'Evocabank-ն ավարտել է իր պարտատոմսերի տեղաբաշխումը',
      date: '25.09.2023',
      image: 'https://www.evoca.am/images-cache/news/1/169590947043/510x383.png',
      path: 'bonds-2023-2',
    },
    {
      id: 3,
      title: 'Evocabank-ը կթողարկի պարտատոմսեր',
      date: '18.09.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16956433417196/510x383.png',
      path: 'bonds-2023',
    },
    {
      id: 4,
      title: 'Հատուկ առաջարկ Evoca Mastercard քարտապանների համար',
      date: '08.09.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1694160779169/510x383.jpg',
      path: 'mastercard-sponsorship',
    },
    {
      id: 5,
      title: 'Evocabank-ը Եվրո 2024 ընտրական փուլի ցուցադրման հովանավոր',
      date: '06.09.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16939999833466/510x383.png',
      path: 'football-sponsorship',
    },
    {
      id: 6,
      title: 'Նվերներ AKG-ում Evoca Visa քարտապանների համար',
      date: '29.08.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16933089541952/510x383.jpg',
      path: 'evoca-visa-akg',
    },
    {
      id: 7,
      title: 'Հատուկ առաջարկ Evoca-ից Coca-Cola Music Fest-ի համար',
      date: '16.08.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16921824168929/510x383.png',
      path: 'fest-new-offer',
    },
    {
      id: 8,
      title: 'Առաջարկ Evoca Visa քարտապաններին Yandex Eats-ում',
      date: '15.08.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16920807934552/510x383.png',
      path: 'visa-yandex-offer',
    },
    {
      id: 9,
      title: '4 նոր մրցանակ Evocabank-ին Global Finance-ի կողմից',
      date: '11.08.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16917616147975/510x383.png',
      path: 'evoca-new-awards',
    },
    {
      id: 10,
      title: 'Evocabank-ը Համահայկական 8-րդ խաղերի հովանավոր',
      date: '04.08.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16911344500528/510x383.png',
      path: 'pan-armenian-games',
    },
    {
      id: 11,
      title: 'Ամենաշահավետ ճամփորդության առաջարկը մեր քարտապանների համար',
      date: '01.08.2023',
      image: 'https://www.evoca.am/images-cache/news/1/1690530464213/510x383.jpg',
      path: 'visa-offer-flights',
    },
    {
      id: 12,
      title: 'Նոր առաջարկ Evoca Visa քարտապանների համար AlfaPharm-ից',
      date: '01.08.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16905291147807/510x383.png',
      path: 'evoca-visa-new-offer',
    },
    {
      id: 13,
      title: 'Evocabank-ը` 19-րդ խոշոր հարկ վճարող',
      date: '26.07.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16903727089801/510x383.png',
      path: 'evoca-top-taxpayer',
    },   
    {
      id: 14,
      title: 'Evocabank-ը դադարեցրել է Unistream-ի սպասարկումը',
      date: '24.07.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16902075440877/510x383.png',
      path: 'evoca-unistream-notice',
    },   
    {
      id: 15,
      title: 'Evoca-ն Coca-Cola Music Fest-ի գլխավոր ֆինանսական հովանավոր',
      date: '19.07.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16896781650438/510x383.png',
      path: 'coca-cola-sponsorship',
    },   
    {
      id: 16,
      title: 'Evocabank-ը ՀՀ-ում PM-ի ամենամեծ կոնֆերանսի հովանավորx',
      date: '06.07.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16886454163652/510x383.png',
      path: 'pm-conference',
    },   
    {   
      id: 17,
      title: 'The Nature of Leadership',
      date: '30.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/1687950130082/510x383.png',
      path: 'nature-of-leadership',
    },
    {   
      id: 18,
      title: 'Նոր առաջարկ Mastercard-ի կողմից',
      date: '28.06.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16879368943253/510x383.png',
      path: 'mastercard-new-offer',
    }, 
    {   
      id: 19,
      title: '254 մլն դրամի նվիրաբերություն Երևան համայնքին',
      date: '23.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16875279466121/510x383.png',
      path: 'evoca-donation',
    }, 
    {   
      id: 20,
      title: 'Ամենանորարար թվային բանկը Հայաստանում',
      date: '22.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16874148147931/510x383.png',
      path: 'digital-bank-2023',
    }, 
    {   
      id: 21,
      title: 'Visa-ի առաջարկները շարունակվում են',  
      date: '21.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16874215137946/510x383.png',
      path: 'visa-new-offers',
    },  
    {   
      id: 22,
      title: 'Newmag Summer Fest 2023',
      date: '20.06.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16872677329759/510x383.png',
      path: 'newmeg-summer-festy',
    }, 
    {   
      id: 23,
      title: 'Evoca Digital քարտեր',
      date: '16.06.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16868326578274/510x383.png',
      path: 'evoca-digital-card',
    }, 
    {   
      id: 24,
      title: 'Evocabank-ը` Project Management կոնֆերանսի գլխավոր հովանավոր',
      date: '13.06.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16866654460216/510x383.png',
      path: 'evoca-pmi',
    }, 
    {   
      id: 25,
      title: 'Evocabank-ը Summer Fest 2023-ի գլխավոր հովանավոր',
      date: '09.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16863190525975/510x383.png',
      path: 'evoca-summer-fest',
    }, 
    {   
      id: 26,
      title: 'Evocabank-ը Leasing Expo 2023-ին',
      date: '05.06.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16860606647295/510x383.png',
      path: 'evoca-leasing-expo',
    },
    {   
      id: 27,
      title: 'Նոր առաջարկ Evoca Mastercard քարտապանների համար',
      date: '29.05.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16855988444484/510x383.jpg',
      path: 'mastercard-benefits',
    }, 
    {   
      id: 28,
      title: 'Էլեկտրոնային ստորագրության e-Sign համակարգ Evocabank-ում',
      date: '26.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16854405293433/510x383.png',
      path: 'e-sign',
    },  
    {   
      id: 29,
      title: 'Evocabank-ը LEASING EXPO 2023-ի հովանավոր',
      date: '24.05.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16849247405092/510x383.png',
      path: 'leasing-expo-2023',
    },  
    {   
      id: 30,
      title: 'Նոր EvocaTOUCH հավելվածն արդեն հասանելի է',
      date: '23.05.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16848286806716/510x383.png',
      path: 'new-app-evocatouch',
    }, 
    {   
      id: 31,
      title: 'Evocabank-ը Yerevan Tech Forum 2K23-ի հովանավոր',
      date: '11.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16844163985455/510x383.png',
      path: 'yerevan-tech-forum',
    },   
    {   
      id: 32,
      title: 'Ներդրումներ կատարելու ժամանակն է',
      date: '10.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16836995024738/510x383.png',
      path: 'evocainvest',
    }, 
    {   
      id: 33,
      title: 'Evocabank-ը` Եվրատեսիլ 2023-ի հովանավոր',
      date: '05.05.2023',
      image: '	https://www.evoca.am/images-cache/news/1/16832954295878/510x383.jpg',
      path: 'eurovision-2023',
    },  
    {   
      id: 34,
      title: '𝗖𝗮𝗿𝗲𝗲𝗿 𝗖𝗶𝘁𝘆 𝗙𝗲𝘀𝘁 𝟮𝗞𝟮𝟯-ը` ստացված իրականություն',
      date: '04.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16926991639079/510x383.jpg',
      path: 'career-city-fest-2023',
    },    
    {   
      id: 35,
      title: 'Նոր անտառ՝ հայկական դրամի 30-ամյակի առթիվ',
      date: '02.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16926858137407/510x383.jpg',
      path: 'new-forest',
    },  
    {   
      id: 36,
      title: 'Evocabank-ը 𝗖𝗮𝗿𝗲𝗲𝗿 𝗖𝗶𝘁𝘆 𝗙𝗲𝘀𝘁-ի հովանավոր',
      date: '27.04.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16826807716886/510x383.png',
      path: 'career-city-fest',
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
              to={`/news/allpage${currentPage + 7}`}
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