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
  const pages = [1, 2, ];

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
      id: 11,
      title: 'Հաճախորդների սպասարկման ժամեր',
      date: '10.12.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183823394046/510x383.png',
      path: '/news/allpage11/customer-service-hours',
    },
 {
      id: 13,
      title: 'Evoca-ն միանում է Զինծառայողների ապահովագրության…',
      date: '22.11.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183848935683/510x383.png',
      path: '/news/allpage11/double-payments',
    }, 
      {   
      id: 17,
      title: 'Բացօթյա բարեգործական համերգ-դրամահավաք',
      date: '02.11.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16929548288114/510x383.jpg',
      path: '/news/allpage11/fund-raising-concerts',
    },
    {   
      id: 18,
      title: 'Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման ժամերում',
      date: '16.10.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183878191416/510x383.png',
      path: '/news/allpage11/evocabank-customer-service-hours',
    }, 
    {   
      id: 19,
      title: '50 մլն դրամ Hayastan All Armenian Fund-ին Evocabank-ի կողմից',
      date: '09.10.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183857705231/510x383.png',
      path: '/news/allpage11/hayastan-all-armenian-fund',
    },
    {   
      id: 25,
      title: 'Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման աշխատանքային…',
      date: '04.09.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16104316577652/510x383.png',
      path: '/news/allpage11/for-customer-services',
    },
    {   
      id: 29,
      title: 'Evocabank-ի «Թումանյան» մասնաճյուղը գործում է նոր՝ Թումանյան 15 հասցեում',
      date: '03.08.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106089552228/510x383.png',
      path: '/news/allpage11/to-15-tumanyan-st',
    },
    {
      id: 1,
      title: 'Evocabank-ն ընդլայնվում է՝ շարունակելով մոտիվացնել ու զարգացնել թիմը',
      date: '03.07.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106234052244/510x383.png',
      path: '/news/allpage12/motivate-and-develop-the-team',
    },
    {
      id: 3,
      title: 'Evocabank-ը նոր մասնաճյուղ է բացել Երևանում',
      date: '15.06.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16206393286192/510x383.jpg',
      path: '/news/allpage12/branch-opening-in-Yerevan',
    },
    {
      id: 6,
      title: 'Անհրաժեշտ է պահպահնել 1.5 մետր սոցիալական հեռավորություն',
      date: '04.06.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106918386913/510x383.png',
      path: '/news/allpage12/metre-social-distance',
    },
    {   
      id: 19,
      title: 'Կանխարգելիչ ախտահանում` Evocabank-ի բոլոր գրասենյակներում',
      date: '14.04.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107742335408/510x383.png',
      path: '/news/allpage12/of-infection-prevention',
    }, 
    {   
      id: 22,
      title: 'ՊԱՐԶԱԲԱՆՈՒՄ',
      date: '01.04.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107766803641/510x383.png',
      path: '/news/allpage12/explanation',
    }, 
    {   
      id: 23,
      title: '«Էրեբունի» մասնաճյուղը ժամանակավորապես չի գործելու',
      date: '25.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16107821445879/510x383.png',
      path: '/news/allpage12/suspended-operations',
    }, 
    {   
      id: 24,
      title: 'Ոչ աշխատանքային օրեր',
      date: '20.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108083510392/510x383.png',
      path: '/news/allpage12/not-working-days',
    }, 
    {   
      id: 30,
      title: 'Evocabank-ը 10։00-12։00 սպասարկելու է միայն 60 տարեկանից բարձր անձան',
      date: '03.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16107824534762/510x383.png',
      path: '/news/allpage12/aged-60-from-10-to-12',
    },
    {
      id: 1,
      title: 'Հաճախորդների սպասարկում շաբաթ օրերին',
      date: '19.10.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16119831112076/510x383.png',
      path: '/news/allpage14/service-on-saturdays',
    },
    {
      id: 2,
      title: 'Վերաբացվեց Բանկի «Կոտայք» մասնաճյուղը',
      date: '18.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119832563891/510x383.png',
      path: '/news/allpage14/reopened-kotayq-branch',
    },
    {
      id: 6,
      title: 'Իվետա Մուկուչյանի մենահամերգը',
      date: '17.09.2018',
      image: '	https://www.evoca.am/images-cache/news/1/1611987211088/510x383.png',
      path: '/news/allpage14/iveta-mukuchyan-solo-concert',
    },
    {
      id: 7,
      title: 'Տոնական բացօթյա համերգ',
      date: '11.09.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16184040636341/510x383.png',
      path: '/news/allpage14/festive-open-air-concert',
    },
    {   
      id: 23,
      title: 'Համագործակցության նոր համաձայնագիր',
      date: '31.01.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16120143492752/510x383.png',
      path: '/news/allpage14/cooperation-agreement',
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
          <span className="text-gray-900 font-semibold">Այլ</span>
        </nav>

        {/* 2. Մեծ Վերնագիր */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
          Նորություններ
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
{/* ՆՈՐՈՒԹՅԱՆ ԲԼՈԿ */}
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto my-6 font-sans">
  
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
    <Link to="/news/other" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-3 h-3 bg-gray-500 rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Այլ</span>
</Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
Evocabank-ը նոր մասնաճյուղ է բացել Երևանում
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Մալաթիա-Սեբաստիա համայնքում՝ Անդրանիկի 134/8 հասցեում, բացվեց Evocabank-ի նոր՝ «Մալաթիա» մասնաճյուղը:
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
15.06.2020
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/16206393286192/780x585.jpg" 
      alt="Evocabank և Norakaruyc.am համագործակցություն" 
      className="w-full h-full object-cover"
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

{/* 5. Էջադրում (Pagination)՝ իրական Link հղումներով և կենտրոնացված */}
        <div className="w-full pt-10 pb-4 border-t border-gray-100 mt-12 mx-auto">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-sm font-semibold max-w-4xl mx-auto">
            
          {/* Նախորդ էջի սլաք */}
            <Link
              to={`/hy/other/tivv-${Math.max(currentPage - 1, 1)}`}
              className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                currentPage === 1 
                  ? 'text-gray-300 pointer-events-none' 
                  : 'text-purple-700 hover:text-purple-900 hover:bg-purple-50/50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </Link>

            {/* Էջերի հղումներ */}
            {pages.map((num) => {
              const isCurrent = currentPage === num;
              return (
                <Link
                  key={num}
                  to={`/hy/other/tivv-${num}`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer text-base ${
                    isCurrent
                      ? 'bg-purple-700 text-white font-bold shadow-xs scale-105'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {num}
                </Link>
              );
            })}

            {/* Հաջորդ էջի սլաք */}
            <Link
              to={`/hy/other/tivv${currentPage + 1}`}
              className="p-2 rounded-full text-purple-700 hover:text-purple-900 hover:bg-purple-50/50 transition-colors cursor-pointer flex items-center justify-center"
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