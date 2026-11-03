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
      category: 'Մրցանակներ',
      title: 'Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը',
      date: '26.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17930164747919/510x383.png',
      path: 'the-europe-region',
    },
    {
      id: 2,
      category: 'Մրցանակներ',
      title: 'Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17852444643548/510x383.png',
      path: '/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum',
    },
    {
      id: 3,
      category: 'Մրցանակներ',
      title: 'Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png',
      path: '/life-style/evocabank-as-the-financial-partner-of-trf-2026',
    },
    {
      id: 4,
      category: 'Բանկային',
      title: 'Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից',
      date: '05.10.2026',
      image: 'https://www.evoca.am/imagescache/news/1/17908437653512/510x383.png',
      path: '/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank',
    },
    {
      id: 5,
      title: 'Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026',
      date: '02.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17909253326841/510x383.png',
      path: '/prizes/the-most-innovative-digital-bank-2026-by-global-business-and-finance-magazine',
    },
    {
      id: 6,
      title: 'Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր',
      date: '28.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17906855928227/510x383.png',
      path: '/life-style/evocabank-as-a-legacy-partner-of-aua-35th-anniversary-event',
    },
    {
      id: 7,
      title: 'Evocabank-ը ներկայացրեց ArCa-UnionPay համատեղ քարտը',
      date: '27.09.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17901528701371/510x383.png',
      path: '/products/evocabank-introduced-the-arca-unionpay-co-badged-card    ',
    },
    {
      id: 8,
      title: 'Evoca-ն մասնակցում է Armenian Auto Show 2026-ին',
      date: '22.09.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17902383376936/510x383.png',
      path: '/products/evocabank-participates-in-autoshow-2026',
    },
    {
      id: 9,
      title: 'Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից',
      date: '21.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17901523859882/510x383.png',
      path: '/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback',
    },
    {
      id: 10,
      title: 'Դիլիջա՜ն, մենք գալիս ենք',
      date: '11.09.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17891134831451/510x383.png',
      path: '/dilijan-we-are-coming',
    },
    {
      id: 11,
      title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր',
      date: '03.09.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17884237814941/510x383.png',
      path: '/news/evocabank-retro-fest-partner',
    },
    {
      id: 12,
      title: 'Գործարքների արգելափակում 1 կոճակով',
      date: '01.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17852444643548/510x383.png',
      path: '/news/block-transactions',
    },
    {
      id: 13,
      title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
      date: '21.08.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17873217684586/510x383.png',
      path: '/news/back-to-school-cashback',
    },   
    {
      id: 14,
      title: 'Ba3 վարկանիշ Moody’s-ից Evocabank-ին',
      date: '18.08.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png',
      path: '/news/moodys-rating',
    },   
    {
      id: 15,
      title: 'Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»',
      date: '11.08.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17864472573391/510x383.png',
      path: '/news/firebird-ai',
    },   
    {
      id: 16,
      title: 'Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը',
      date: '30.07.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17854167235525/510x383.png',
      path: '/news/green-rock-headquarters',
    },   
    {   
      id: 17,
      title: 'Evocabank՝ Լավագույն Բանկը Հայաստանում 2026',
      date: '30.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17847187625556/510x383.png',
      path: '/prizes/best-bank-in-armenia-2026-by-international-investor-magazine',
    },
    {   
      id: 18,
      title: 'Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին',
      date: '22.07.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17845396816254/510x383.png',
      path: '/interviews/evocabank-ai-interview-banks-am-Karen-Yeghiazaryan',
    }, 
    {   
      id: 19,
      title: 'Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը',
      date: '17.07.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17842875742396/510x383.png',
      path: '/banking/the-executives-have-completed-mit-course',
    }, 
    {   
      id: 20,
      title: 'Evoca-ն՝ EuroBasket Մ16 մրցաշարի պաշտոնական հովանավոր',
      date: '09.07.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17835973514805/510x383.png',
      path: '/evocabank-is-the-official-sponsor-of-the-fiba-eurobasket',
    }, 
    {   
      id: 21,
      title: 'Evocabank-ը՝ PREPA Run 2026-ի գլխավոր հովանավոր',
      date: '25.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17823731739564/510x383.png',
      path: '/evocabank-is-the-main-sponsor-of-the-prepa-run',
    },  
    {   
      id: 22,
      title: 'Evocabank-ը՝ Newmag Summerfest 2026-ի գլխավոր հովանավոր',
      date: '24.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17823755903426/510x383.png',
      path: '/life-style/evocabank-is-the-main-partner-of-the-newmag-summerfast-2026',
    }, 
    {   
      id: 23,
      title: 'Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել',
      date: '22.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/1782137837549/510x383.jpg',
      path: '/main/evoca-norakaruyc-signing',
    }, 
    {   
      id: 24,
      title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
      date: '16.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17815943976247/510x383.png',
      path: '/news/amx-awards',
    }, 
    {   
      id: 25,
      title: 'Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ',
      date: '15.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17815163976713/510x383.png',
      path: '/news/wilco-card',
    }, 
    {   
      id: 26,
      title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
      date: '12.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17812556342544/510x383.png',
      path: '/life-style/memorandum-of-cooperation-street-arts-by-evoca',
    },
    {   
      id: 27,
      title: 'ՊԱՐԶԱԲԱՆՈՒՄ',
      date: '05.06.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17806626445767/510x383.jpg',
      path: '/banking/clarification-about-evocabank-on-hetq-am',
    }, 
    {   
      id: 28,
      title: 'Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% զեղչ',
      date: '03.06.2026',
      image: '		https://www.evoca.am/images-cache/news/1/17804748057663/780x585.png',
      path: '/news/adidas-discount',
    },  
    {   
      id: 29,
      title: 'Վազգեն Գևորկյանն արժանացել է Անանիա Շիրակացու մեդալի',
      date: '29.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17800482277397/510x383.png',
      path: '/banking/vazgen-gevorkyan-awarded-anania-shirakatsi-medal',
    },  
    {   
      id: 30,
      title: 'Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում',
      date: '14.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1778751542792/510x383.png',
      path: '/news/globbing-advantages',
    }, 
    {   
      id: 31,
      title: '«Գյումրի» մասնաճյուղն արդեն գործում է նոր հասցեով',
      date: '12.05.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17785839458922/510x383.png',
      path: '/banking/gyumri-branch-now-operating-at-a-new-address',
    },   
    {   
      id: 32,
      title: 'Evocabank. Lավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ',
      date: '08.05.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17784860353078/510x383.png',
      path: '/prizes/new-award-best-sme-bank-by-digital-banker-2026',
    }, 
    {   
      id: 33,
      title: 'Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի վարկային համաձայնագիր',
      date: '06.05.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17780463751358/510x383.png',
      path: '/banking/evocabank-and-proparco-have-signed-a-credit-agreement',
    },  
    {   
      id: 34,
      title: 'Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 10,000 դրամ',
      date: '30.04.2026',
      image: '	https://www.evoca.am/images-cache/news/1/17791803423671/510x383.png',
      path: '/products/new-offer-pay-with-evoca-mastercard-on-glovo-get-amd-10000',
    },    
    {   
      id: 35,
      title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
      date: '17.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1776423301974/510x383.png',
      path: '/life-style/evocabank-participates-in-career-city-fest-2026',
    },  
    {   
      id: 36,
      title: 'Կարեն Եղիազարյանը` IMF և WBG Spring Meetings 2026-ին',
      date: '13.04.2026',
      image: '	https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png',
      path: '/banking/Karen-Yeghiazaryan-participates-in-the-Spring-Meetings-2026',
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
{/* ՆՈՐՈՒԹՅԱՆ ԲԼՈԿ */}
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto my-6 font-sans">
  
  {/* Ձախ կողմ՝ Տեքստային հատված */}
  <div className="flex-1 space-y-4">
    <Link to="/news/banking" className="flex items-center space-x-2 group w-fit no-underline">
      <span className="w-3 h-3 bg-purple-700 rounded-sm inline-block"></span>
      <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Բանկային</span>
    </Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
      Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            IFC-ն Evocabank-ին տրամադրել է 10 մլն դոլարի վարկ` Հայաստանում ՄՓՄՁ-ներին աջակցելու, աշխատատեղեր ստեղծելու և բնապահպանական ծրագրեր ֆինանսավորելու համար։

    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      26.10.2026
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/17930164747919/780x585.png" 
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
              to={`/news/allpage${Math.max(currentPage - 1, 1)}`}
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
            {pages.map((page) => {
              const isCurrent = currentPage === page;
              return (
                <Link
                  key={page}
                  to={`/news/allpage${page}`}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer text-base ${
                    isCurrent
                      ? 'bg-purple-700 text-white font-bold shadow-xs scale-105'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {/* Հաջորդ էջի սլաք */}
            <Link
              to={`/news/allpage${currentPage + 1}`}
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