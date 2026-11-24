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
      title: 'Հաճախորդների սպասարկում շաբաթ օրերին',
      date: '19.10.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16119831112076/510x383.png',
      path: 'service-on-saturdays',
    },
    {
      id: 2,
      title: 'Վերաբացվեց Բանկի «Կոտայք» մասնաճյուղը',
      date: '18.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119832563891/510x383.png',
      path: 'reopened-kotayq-branch',
    },
    {
      id: 3,
      title: 'Մեքենայի տուգանքների վճարում EvocaTOUCH հավելվածով',
      date: '15.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119842032661/510x383.png',
      path: 'through-evocatouch-app',
    },
    {
      id: 4,
      title: 'Ավելի քան 200 տեսակի վճարում EvocaTOUCH հավելվածով',
      date: '15.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119837581013/510x383.png',
      path: 'through-evocatouch-app',
    },
    {
      id: 5,
      title: 'Ակցիա «Գյումրի» մասնաճյուղում',
      date: '10.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/1611994926027/510x383.png',
      path: 'in-gyumri-branch',
    },
    {
      id: 6,
      title: 'Իվետա Մուկուչյանի մենահամերգը',
      date: '17.09.2018',
      image: '	https://www.evoca.am/images-cache/news/1/1611987211088/510x383.png',
      path: 'iveta-mukuchyan-solo-concert',
    },
    {
      id: 7,
      title: 'Տոնական բացօթյա համերգ',
      date: '11.09.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16184040636341/510x383.png',
      path: 'festive-open-air-concert',
    },
    {
      id: 8,
      title: 'SingleTOUCH և Shopping Card վարկերի հաստատման մեղմ չափանիշներ',
      date: '27.08.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119954366213/510x383.png',
      path: 'shopping-card-loans',
    },
    {
      id: 9,
      title: 'Լավագույն սպառողական թվային բանկ',
      date: '13.08.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16119958005931/510x383.png',
      path: 'trek-yerevan-2019',
    },
    {
      id: 10,
      title: 'Հիփոթեքային վարկերի տոկոսադրույքների ու կանխավճարների իջեցում',
      date: '31.07.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119961222375/510x383.png',
      path: 'payments-on-mortgages',
    },
    {
      id: 11,
      title: 'Վերաբացվեց Բանկի «Գյումրի» մասնաճյուղը',
      date: '03.07.2018',
      image: 	'	https://www.evoca.am/images-cache/news/1/16119976718751/510x383.png',
      path: 'gyumri-branch-re-opened',
    },
    {
      id: 12,
      title: 'Տարեկան ժողով 2018',
      date: '18.06.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119985899372/510x383.png',
      path: 'annual-meeting',
    },
    {
      id: 13,
      title: 'Ավանդային ակցիայի վիճակահանություն',
      date: '18.06.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119978726491/510x383.png',
      path: 'prize-draw-june-2018',
    },   
    {
      id: 14,
      title: 'Shopping Card',
      date: '13.06.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16120072965711/510x383.png',
      path: 'shopping-card-june-2018',
    },   
    {
      id: 15,
      title: 'Մենք Zangi, Viber, WhatsApp և Telegram հավելվածներում ենք',
      date: '07.06.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16120076116338/510x383.png',
      path: 'whatsapp-telegram',
    },   
    {
      id: 16,
      title: 'Dalma Gift Card-երն արդեն Evocabank-ից',
      date: '05.06.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16184030850532/510x383.png',
      path: 'already-from-evocabank',
    },   
    {   
      id: 17,
      title: 'Evocabank-ը երկարաձգում է գարնանային ավանդային ակցիան',
      date: '30.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16120083522195/510x383.png',
      path: 'spring-deposit-campaign',
    },
    {   
      id: 18,
      title: 'Նվիրիր ԵՐԱԶանք՝ ԵՐԱԶ Gift Card',
      date: '16.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16184045989897/510x383.png',
      path: 'through-yeraz-gift-card',
    }, 
    {   
      id: 19,
      title: 'singleTOUCH նոր պայմաններով',
      date: '14.05.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16184051239742/510x383.png',
      path: 'terms-for-singletouch',
    }, 
    {   
      id: 20,
      title: 'Տոնական բացօթյա համերգ',
      date: '10.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16120138355181/510x383.png ',
      path: 'air-concert-festive',
    }, 
    {   
      id: 21,
      title: 'Evocabank-ը ներկայացնում է գարնանային ավանդային ակցիա',  
      date: '09.04.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16184065816086/510x383.png',
      path: 'spring-deposit-campaign',
    },  
    {   
      id: 22,
      title: 'Բանկային վճարումների ընդունում ՄոբիԴրամ տերմինալներով',
      date: '19.03.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16120140867018/510x383.png',
      path: 'mobidram-terminals',
    }, 
    {   
      id: 23,
      title: 'Համագործակցության նոր համաձայնագիր',
      date: '31.01.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16120143492752/510x383.png',
      path: 'cooperation-agreement',
    }, 
    {   
      id: 24,
      title: 'Ամանորյա օրիգինալ ակցիա',
      date: '26.12.2017',
      image: 'https://www.evoca.am/images-cache/news/1/16184063457322/510x383.png',
      path: 'new-year-campaign',
    }, 
    {   
      id: 25,
      title: '«Պարոնյան» մասնաճյուղի բացում',
      date: '18.12.2017',
      image: '	https://www.evoca.am/images-cache/news/1/16120154872134/510x383.png',
      path: 'paronyan-branch-opening',
    }, 
    {   
      id: 26,
      title: 'SingleTouch օնլայն վարկ',
      date: '05.12.2017',
      image: 'https://www.evoca.am/images-cache/news/1/16184053764495/510x383.png',
      path: 'singletouch-online-loans',
    },
    {   
      id: 27,
      title: 'Լավագույն սպառողական թվային բանկ',
      date: '05.12.2017',
      image: 	'	https://www.evoca.am/images-cache/news/1/16184041910255/510x383.png',
      path: 'bank-december-2017',
    }, 
    {   
      id: 28,
      title: 'Հիփոթեքային վարկերի նոր առաջարկ',
      date: '23.11.2017',
      image: 'https://www.evoca.am/images-cache/news/1/16120296581506/510x383.png',
      path: 'new-mortgage-loan-offer',
    },  
    {   
      id: 29,
      title: 'Հեքիաթային տուրը',
      date: '16.11.2017',
      image: 'https://www.evoca.am/images-cache/news/1/161203042466/510x383.png',
      path: 'fabulous-tour',
    },  
    {   
      id: 30,
      title: 'Online վարկեր 5 րոպեում',
      date: '15.11.2017',
      image: '	https://www.evoca.am/images-cache/news/1/16120340919328/510x383.png',
      path: 'loands-in-5-minutes',
    }, 
    {   
      id: 31,
      title: 'Ռուսաստանում Հայաստանի մշակույթի օրեր',
      date: '15.11.2017',
      image: 'https://www.evoca.am/images-cache/news/1/16120315634577/510x383.jpg',
      path: 'armenian-culture-in-russia',
    },   
    {   
      id: 32,
      title: 'Տարվա միջոցառում 2017',
      date: '14.11.2017',
      image: '	https://www.evoca.am/images-cache/news/1/16120354624635/510x383.png',
      path: 'event-of-the-year-2017',
    }, 
    {   
      id: 33,
      title: 'EvocaLAB',
      date: '09.11.2017',
      image: '	https://www.evoca.am/images-cache/news/1/16120694485726/510x383.png',
      path: 'evocalab-november-2017',
    },  
    {   
      id: 34,
      title: 'Վիճակահանության շահողները',
      date: '02.11.2017',
      image: 'https://www.evoca.am/images-cache/news/1/16120697439682/510x383.png',
      path: 'winners-of-the-draw',
    },    
    {   
      id: 35,
      title: 'Վերաբացվեց Բանկի Գարեգին Նժդեհ մասնաճյուղը',
      date: '09.10.2017',
      image: '	https://www.evoca.am/images-cache/news/1/16120720079643/510x383.png',
      path: 'garegin-nzhdeh-branch',
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
              to={`/news/allpage${currentPage + 14}`}
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