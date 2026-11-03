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
      title: 'Evocabank-ի ձմեռային EVOJI-ները',
      date: '28.12.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16184011897471/510x383.png',
      path: 'evojis-from-evocabank',
    },
    {
      id: 2,
      title: 'Ամանորյա խաղ Evocabank-ից',
      date: '27.12.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184012481551/510x383.png',
      path: 'game-from-evocabank',
    },
    {
      id: 3,
      title: 'Evocathon - Fintech Hackathon',
      date: '19.12.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184013480217/780x585.png',
      path: 'evocathon-fintech-hackathon',
    },
    {
      id: 4,
      title: 'Evocabank-ը նվազեցրել է հիփոթեքային վարկերի տոկոսադրույքները',
      date: '05.12.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108176342917/510x383.png',
      path: 'rates-on-mortgage-loans',
    },
    {
      id: 5,
      title: 'Successful Launch of Visa Infinite',
      date: '30.11.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108181972897/510x383.png',
      path: 'launch-of-visa-infinite',
    },
    {
      id: 6,
      title: 'SingleTOUCH օնլայն վարկ՝ արդեն 5,000,000 դրամի չափո',
      date: '23.11.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184014028892/510x383.png',
      path: 'up-to-amd-5.000.000',
    },
    {
      id: 7,
      title: 'Բոլորին նվեր՝ Smart TV',
      date: '22.10.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108632330306/510x383.png',
      path: 'gift-to-everyone',
    },
    {
      id: 8,
      title: '2019թ․ երրորդ եռամսյակի ֆինանսական արդյունքները',
      date: '15.10.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108654865257/510x383.png',
      path: 'the-third-quarter-of-2019',
    },
    {
      id: 9,
      title: 'Segafredo Trek Yerevan 2019 հեծանվաերթ',
      date: '30.09.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108658882519/510x383.png',
      path: 'trek-yerevan-2019',
    },
    {
      id: 10,
      title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
      date: '13.08.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108698957212/510x383.png',
      path: 'bank-of-armenia-2019',
    },
    {
      id: 11,
      title: 'Ավանդային ակցիայի վիճակահանություն',
      date: '10.08.2019',
      image: 	'https://www.evoca.am/images-cache/news/1/1610872330131/510x383.png',
      path: 'deposit-prize-draw',
    },
    {
      id: 12,
      title: 'Առաջին անգամ Հայաստանում` «Online Ապառիկ» Evocabank-ից',
      date: '09.08.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108724627548/510x383.png',
      path: 'shopping-with-evocabank',
    },
    {
      id: 13,
      title: 'EVOJI` Evocabank-ի emoji-ները',
      date: '23.07.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108729807958/510x383.png',
      path: 'evoji-evocabank-emojis',
    },   
    {
      id: 14,
      title: 'Visa Infinite՝ ինֆլուենսերներին',
      date: '17.07.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108732314551/510x383.png',
      path: 'visa-infinite-for-influencers',
    },   
    {
      id: 15,
      title: '2019թ․ առաջին կիսամյակի ֆինանսական արդյունքները',
      date: '16.07.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108733730534/510x383.png',
      path: 'the-first-half-of-2019',
    },   
    {
      id: 16,
      title: 'STP Quality Award 2018-2019',
      date: '12.07.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108755106069/510x383.png',
      path: 'award-2018-2019',
    },   
    {   
      id: 17,
      title: 'Dinebook հավելվածը EvocaTOUCH հավելվածում',
      date: '12.07.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184023327713/510x383.png',
      path: 'dinebook-in-evocatouch',
    },
    {   
      id: 18,
      title: 'Evocabank-ը ներկայացրեց Visa Infinite քարտը',
      date: '26.06.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108758455903/510x383.png',
      path: 'visa-infinite-cardd',
    }, 
    {   
      id: 19,
      title: 'Կարեն Եղիազարյան. Evocabank-ը թվային տրանսֆորմացիայի ակտիվ փուլում է',
      date: '12.06.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108760343289/510x383.png',
      path: 'of-digital-transformation',
    }, 
    {   
      id: 20,
      title: 'Տարվա նոր պրոդուկտի շնորհանդես',
      date: '31.05.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16108190057761/510x383.png',
      path: 'the-year-presentation',
    }, 
    {   
      id: 21,
      title: 'Տարեկան ժողով 2019',  
      date: '31.05.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109032298506/510x383.png',
      path: '2019-annual-meeting',
    },  
    {   
      id: 22,
      title: 'Կարեն Եղիազարյանը` Evocabank-ի Վարչության նախագահ',
      date: '24.05.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16109033604138/510x383.png',
      path: 'board-of-evocabank',
    }, 
    {   
      id: 23,
      title: 'Ավանդ բարձր տոկոսադրույքով և նվերներ',
      date: '01.05.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109035000048/510x383.png',
      path: 'high-interest-rate-plus-gifts',
    }, 
    {   
      id: 24,
      title: 'Վիճակահանության հաղթողները',
      date: '30.04.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109037073624/510x383.png',
      path: 'prize-draw-winners',
    }, 
    {   
      id: 25,
      title: 'Կորպորատիվ սոցիալական պատասխանատվություն',
      date: '23.04.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109039688796/510x383.png',
      path: 'corporate-social-responsibility',
    }, 
    {   
      id: 26,
      title: '5,000 եվրո Փարիզի Աստվածամոր տաճարի վերականգնմանը',
      date: '18.04.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109041886872/510x383.png',
      path: 'dame-cathedral-in-paris',
    },
    {   
      id: 27,
      title: 'Մեկնի՛ր Եվրատեսիլ Evocabank-ի հետ',
      date: '16.04.2019',
      image: 	'https://www.evoca.am/images-cache/news/1/16109733256169/510x383.png',
      path: 'eurovision-with-evocaank',
    }, 
    {   
      id: 28,
      title: 'Հիփոթեք 7.5% կանխավճարով և առանց լրացուցիչ գույքի գրավադրման',
      date: '10.04.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16109738526683/510x383.png',
      path: 'additional-property-pledging',
    },  
    {   
      id: 29,
      title: 'Գարունը` Փարիզի Disneyland-ում Mastercard-ի հետ',
      date: '15.02.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184019258267/510x383.png',
      path: 'paris-with-mastercard',
    },  
    {   
      id: 30,
      title: 'Նոր online վարկ Retail Group Armenia-ի հետ',
      date: '18.12.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16114717910167/510x383.png',
      path: 'retail-group-armenia',
    }, 
    {   
      id: 31,
      title: 'Հատուկ առաջարկ Visa քարտապաններին',
      date: '12.12.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16114719431159/510x383.png',
      path: 'visa-cardholders',
    },   
    {   
      id: 32,
      title: 'ՓՄՁ վարկեր՝ online հայտով',
      date: '15.11.2018',
      image: '		https://www.evoca.am/images-cache/news/1/16114721453873/510x383.png',
      path: 'online-for-sme-loans',
    }, 
    {   
      id: 33,
      title: 'Evocabank-ը՝ Online Shopping Fest 2018-ի Գլխավոր գործընկեր',
      date: '12.11.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16114723750466/510x383.png',
      path: 'shopping-fest-2018',
    },  
    {   
      id: 34,
      title: 'Իմ ֆինանսների ամիս-2018',
      date: '10.11.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16115052068736/510x383.png',
      path: 'financial-month-2018',
    },    
    {   
      id: 35,
      title: 'Հիփոթեք` 10% կանխավճարով և առանց լրացուցիչ գույքի գրավադրման',
      date: '30.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119828047522/510x383.png',
      path: 'without-extra-collateral',
    },  
    {   
      id: 36,
      title: 'Shopping-ի նոր հնարավորություններ բոլորին',
      date: '22.10.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16184067987679/510x383.png',
      path: 'options-for-everyone',
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
              to={`/news/allpage${currentPage + 13}`}
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