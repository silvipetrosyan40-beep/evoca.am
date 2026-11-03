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
      title: 'Evocabank-ն ընդլայնվում է՝ շարունակելով մոտիվացնել ու զարգացնել թիմը',
      date: '03.07.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106234052244/510x383.png',
      path: 'motivate-and-develop-the-team',
    },
    {
      id: 2,
      title: 'Ավանդային ակցիայի հաղթողները',
      date: '03.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/1618486936819/510x383.png',
      path: 'deposit-campaign',
    },
    {
      id: 3,
      title: 'Evocabank-ը նոր մասնաճյուղ է բացել Երևանում',
      date: '15.06.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16206393286192/510x383.jpg',
      path: 'branch-opening-in-Yerevan',
    },
    {
      id: 4,
      title: 'V-POS տերմինալ',
      date: '12.06.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16120953971318/510x383.jpg',
      path: 'vpos-terminal',
    },
    {
      id: 5,
      title: 'Լավագույն մոբայլ բանկը Հայաստանում՝ ըստ SME Banking club-ի',
      date: '08.06.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183887371307/510x383.png',
      path: 'bank-in-armenia',
    },
    {
      id: 6,
      title: 'Անհրաժեշտ է պահպահնել 1.5 մետր սոցիալական հեռավորություն',
      date: '04.06.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106918386913/510x383.png',
      path: 'metre-social-distance',
    },
    {
      id: 7,
      title: 'Evocabank-ի կապիտալը կհամալրվի 2 մլրդ. 50 մլն. ՀՀ դրամով',
      date: '29.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106932022056/510x383.png',
      path: 'amd-2-bin-50-min',
    },
    {
      id: 8,
      title: 'Նորույթ Հայաստանում՝ Անքարտ կանխիկացում բանկոմատից',
      date: '25.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183890403386/510x383.png',
      path: 'withdrawal-in-armenia',
    },
    {
      id: 9,
      title: 'Բանկային քարտ առողջ ապրելակերպի սիրահարների համար',
      date: '19.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107175725012/510x383.png',
      path: 'healthy-lifestyle-fans',
    },
    {
      id: 10,
      title: 'Online ուսանողական վարկ',
      date: '19.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16184703769269/510x383.png',
      path: 'online-student-loans',
    },
    {
      id: 11,
      title: 'Բանկերին պետք չէ վերագրել «ֆիլմի բացասական հերոսի» դերը',
      date: '15.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107181805155/510x383.png',
      path: 'regarded-as-movie-villains',
    },
    {
      id: 12,
      title: 'Շահավետ ONLINE գնումների մարաթոն',
      date: '13.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16184028695045/510x383.jpg',
      path: 'online-shopping-marathon',
    },
    {
      id: 13,
      title: 'Լավագույն թվային բանկը Հայաստանում',
      date: '08.05.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107201037898/510x383.png',
      path: 'digital-bank-in-armenia',
    },   
    {
      id: 14,
      title: 'Evocabank-ը միացել է ԵՆԲ-ի վարկային ծրագրին',
      date: '07.05.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107208220542/510x383.png',
      path: 'bank-loan-program',
    },   
    {
      id: 15,
      title: 'Լավ նորություն Visa քարտապանների համար',
      date: '30.04.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107249354288/510x383.png',
      path: 'for-visa-cardholders',
    },   
    {
      id: 16,
      title: 'Оրենսդրական փոփոխություն ավանդի տոկոսների հաշվարկման կարգում',
      date: '30.04.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183887871112/510x383.png',
      path: 'new-deposit-interest-accrual',
    },   
    {   
      id: 17,
      title: 'Անվճար առաքում',
      date: '22.04.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107736885036/510x383.png',
      path: 'free-delivery',
    },
    {   
      id: 18,
      title: 'Evoca-ն երկարաձգել է SingleTOUCH և ապառիկի մարման ժամկետները',
      date: '14.04.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16184703522597/510x383.png',
      path: 'point-of-sale-installment-loans',
    }, 
    {   
      id: 19,
      title: 'Կանխարգելիչ ախտահանում` Evocabank-ի բոլոր գրասենյակներում',
      date: '14.04.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107742335408/510x383.png',
      path: 'of-infection-prevention',
    }, 
    {   
      id: 20,
      title: 'Տեղեկանք` հիփոթեքի գծով եկամտային հարկի փոխհատուցման համար',
      date: '08.04.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16184011238938/510x383.png',
      path: 'mortgage-interest',
    }, 
    {   
      id: 21,
      title: 'Վարկավորում՝ Կառավարության կողմից հաստատված ծրագրերով',  
      date: '01.04.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107793587393/510x383.png',
      path: 'sponsored-programs',
    },  
    {   
      id: 22,
      title: 'ՊԱՐԶԱԲԱՆՈՒՄ',
      date: '01.04.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107766803641/510x383.png',
      path: 'explanation',
    }, 
    {   
      id: 23,
      title: '«Էրեբունի» մասնաճյուղը ժամանակավորապես չի գործելու',
      date: '25.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107821445879/510x383.png',
      path: 'suspended-operations',
    }, 
    {   
      id: 24,
      title: 'Ոչ աշխատանքային օրեր',
      date: '20.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108083510392/510x383.png',
      path: 'not-working-days',
    }, 
    {   
      id: 25,
      title: 'Evocabank-ը 10,000,000 դրամ է փոխանցել կորոնավիրուսի դեմ պայքարելու համար',
      date: '17.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16108085658361/510x383.png',
      path: 'fight-coronavirus',
    }, 
    {   
      id: 26,
      title: 'Վարկերի մարման ժամկետների մասին',
      date: '16.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16108088469328/510x383.png',
      path: 'loan-repayment-schedules',
    },
    {   
      id: 27,
      title: 'Evoca-ն առաջարկում է Էներգաարդյունավետ վարկեր ՓՄՁ-ների համար',
      date: '04.03.2020',
      image: 	'https://www.evoca.am/images-cache/news/1/16108103981411/510x383.png',
      path: 'efficient-loans-for-sme',
    }, 
    {   
      id: 28,
      title: 'Միջոցառում, որը սկսվեց ձմռանը և ավարտվեց գարնանը',
      date: '03.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108109265854/510x383.png',
      path: 'and-ended-in-spring',
    },  
    {   
      id: 29,
      title: 'Evocabank-ը կրկնապատկում է քո ավանդի տոկոսադրույքը',
      date: '03.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183885519209/510x383.png',
      path: 'doubling-your-interest-rate',
    },  
    {   
      id: 30,
      title: 'Evocabank-ը 10։00-12։00 սպասարկելու է միայն 60 տարեկանից բարձր անձան',
      date: '03.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107824534762/510x383.png',
      path: 'aged-60-from-10-to-12',
    }, 
    {   
      id: 31,
      title: 'Ավանդի ավելի լավ պայմաններ Evocabank-ում',
      date: '20.02.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108124660559/510x383.png',
      path: 'deposit-terms',
    },   
    {   
      id: 32,
      title: 'Վճարային քարտեր աշխատակիցների համար',
      date: '18.02.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108128753862/510x383.png',
      path: 'cards-for-employees',
    }, 
    {   
      id: 33,
      title: '«Bad boys for life» ֆիլմի նախադիտում',
      date: '01.02.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16184016745514/510x383.png',
      path: 'show-of-bad-boys-for-life',
    },  
    {   
      id: 34,
      title: '1,000,000 դրամի գնումներ խանութ-սրահներից Evocabank-ի հետ',
      date: '31.01.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108133546036/510x383.png',
      path: 'purchases',
    },    
    {   
      id: 35,
      title: 'Ողջույն, Robin!',
      date: '25.01.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108139410022/510x383.png',
      path: 'hi-robin',
    },  
    {   
      id: 36,
      title: '2019թ. ֆինանսական արդյունքների ամփոփում',
      date: '23.01.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108142158282/510x383.png',
      path: 'outcomes-of-2019',
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
              to={`/news/allpage${currentPage + 12}`}
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