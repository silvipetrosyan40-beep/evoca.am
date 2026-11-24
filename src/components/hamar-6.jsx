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
  const pages = [1, 2, 3, 4, 5, 6,7,];

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
      id: 28,
      title: 'Միջոցառում, որը սկսվեց ձմռանը և ավարտվեց գարնանը',
      date: '03.03.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108109265854/510x383.png',
      path: '/news/allpage12/and-ended-in-spring',
    }, 
   {   
      id: 33,
      title: '«Bad boys for life» ֆիլմի նախադիտում',
      date: '01.02.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16184016745514/510x383.png',
      path: '/news/allpage12/show-of-bad-boys-for-life',
    }, 
    {   
      id: 34,
      title: '1,000,000 դրամի գնումներ խանութ-սրահներից Evocabank-ի հետ',
      date: '31.01.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16108133546036/510x383.png',
      path: '/news/allpage12/purchases',
    },
    {
      id: 1,
      title: 'Evocabank-ի ձմեռային EVOJI-ները',
      date: '28.12.2019',
      image: '	https://www.evoca.am/images-cache/news/1/16184011897471/510x383.png',
      path: '/news/allpage13/evojis-from-evocabank',
    },
       {
      id: 2,
      title: 'Ամանորյա խաղ Evocabank-ից',
      date: '27.12.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184012481551/510x383.png',
      path: '/news/allpage13/game-from-evocabank',
    },
    {
      id: 7,
      title: 'Բոլորին նվեր՝ Smart TV',
      date: '22.10.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108632330306/510x383.png',
      path: '/news/allpage13/gift-to-everyone',
    },
    {
      id: 9,
      title: 'Segafredo Trek Yerevan 2019 հեծանվաերթ',
      date: '30.09.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108658882519/510x383.png',
      path: '/news/allpage13/trek-yerevan-2019',
    },
  {
      id: 11,
      title: 'Ավանդային ակցիայի վիճակահանություն',
      date: '10.08.2019',
      image: 	'https://www.evoca.am/images-cache/news/1/1610872330131/510x383.png',
      path: '/news/allpage13/deposit-prize-draw',
    },
    {
      id: 13,
      title: 'EVOJI` Evocabank-ի emoji-ները',
      date: '23.07.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16108729807958/510x383.png',
      path: '/news/allpage13/evoji-evocabank-emojis',
    },
    {   
      id: 24,
      title: 'Վիճակահանության հաղթողները',
      date: '30.04.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109037073624/510x383.png',
      path: '/news/allpage13/prize-draw-winners',
    }, 
   {   
      id: 27,
      title: 'Մեկնի՛ր Եվրատեսիլ Evocabank-ի հետ',
      date: '16.04.2019',
      image: 	'https://www.evoca.am/images-cache/news/1/16109733256169/510x383.png',
      path: '/news/allpage13/eurovision-with-evocaank',
    },
   {   
      id: 29,
      title: 'Գարունը` Փարիզի Disneyland-ում Mastercard-ի հետ',
      date: '15.02.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16184019258267/510x383.png',
      path: '/news/allpage13/paris-with-mastercard',
    },
  {   
      id: 33,
      title: 'Evocabank-ը՝ Online Shopping Fest 2018-ի Գլխավոր գործընկեր',
      date: '12.11.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16114723750466/510x383.png',
      path: '/news/allpage13/shopping-fest-2018',
    }, 
   {
      id: 5,
      title: 'Ակցիա «Գյումրի» մասնաճյուղում',
      date: '10.10.2018',
      image: 'https://www.evoca.am/images-cache/news/1/1611994926027/510x383.png',
      path: '/news/allpage14/in-gyumri-branch',
    },
   {
      id: 13,
      title: 'Ավանդային ակցիայի վիճակահանություն',
      date: '18.06.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16119978726491/510x383.png',
      path: '/news/allpage14/prize-draw-june-2018',
    },
 {
      id: 15,
      title: 'Մենք Zangi, Viber, WhatsApp և Telegram հավելվածներում ենք',
      date: '07.06.2018',
      image: '	https://www.evoca.am/images-cache/news/1/16120076116338/510x383.png',
      path: '/news/allpage14/whatsapp-telegram',
    },
     {   
      id: 17,
      title: 'Evocabank-ը երկարաձգում է գարնանային ավանդային ակցիան',
      date: '30.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16120083522195/510x383.png',
      path: '/news/allpage14/spring-deposit-campaign',
    },
 {   
      id: 18,
      title: 'Նվիրիր ԵՐԱԶանք՝ ԵՐԱԶ Gift Card',
      date: '16.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16184045989897/510x383.png',
      path: '/news/allpage14/through-yeraz-gift-card',
    },
   {   
      id: 20,
      title: 'Տոնական բացօթյա համերգ',
      date: '10.05.2018',
      image: 'https://www.evoca.am/images-cache/news/1/16120138355181/510x383.png ',
      path: '/news/allpage14/air-concert-festive',
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
          <span className="text-gray-900 font-semibold">Կենսակերպ</span>
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
   <Link to="/news/lifestyle" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-3 h-3 bg-lime-400 rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Կենսակերպ</span>
</Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Հոկտեմբերի 7-ին Երևանում անցկացվեց FinComm Armenia 2026 կոնֆերանսը` նվիրված banks.am-ի 20-ամյակին, որի գլխավոր գործընկերն էր Evocabank-ը։
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
08.10.2026
  </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/17915391966329/780x585.png" 
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
              to={`/hy/lifestyle/hamar-${Math.max(currentPage - 1, 1)}`}
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
                  to={`/hy/lifestyle/hamar-${num}`}
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
              to={`/hy/lifestyle/hamar-${currentPage + 6}`}
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