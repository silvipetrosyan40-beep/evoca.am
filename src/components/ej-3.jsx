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
  const pages = [1, 2, 3, 4, 5, 6,7,8,];

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
      title: 'Անսահմանափակ Lounge Key մուտք՝ նոր պայմաններով',
      date: '07.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17389374853499/510x383.png',
      path: '/news/allpage4/terms-and-conditions',
    },
    {
      id: 2,
      title: 'Նոր զեղչեր Evoca Mastercard քարտապանների համար',
      date: '07.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17389114240578/510x383.png',
      path: '/news/allpage4/mastercard-cardholders',
    },
    {
      id: 3,
      title: 'ՎՃարիր Evoca Visa քարտով և ստացիր 30% cashback buy.am-ում',
      date: '05.02.2025',
      image: '	https://www.evoca.am/images-cache/news/1/17387624327634/510x383.jpg',
      path: 'card-get-cashback',
    },
    {   
      id: 4,
      title: 'Ընդամենը Evoca Mastercard և 10% զեղչ iSpace խանութներում',
      date: '24.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17350261083272/510x383.png',
      path: '/news/allpage4/stores-get-discounts',
    }, 
    {   
      id: 5,
      title: 'Շաաատ ամանորյա առաջարկներ Evoca Visa քարտապաններին',
      date: '23.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17352073225371/510x383.png',
      path: '/news/allpage4/visa-cardholders',
    }, 
    {   
      id: 6,
      title: 'Ամանորյա առաջարկ Evoca Visa քարտապաններին',
      date: '18.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17345194462142/510x383.png',
      path: '/news/allpage4/cashback-new-offer',
    }, 
    {   
      id: 7,
      title: 'Նվերներ շահելու հնարավորություն Evoca քարտապանների համար',
      date: '11.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17346144644078/510x383.png',
      path: '/news/allpage4/get-chance-to-win-gifts',
    }, 
    {   
      id: 8,
      title: 'Black Friday-ի հատուկ առաջարկ Evoca Mastercard քարտապաններին',
      date: '27.11.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17327830533928/510x383.png',
      path: '/news/allpage4/cards-black-friday',
    }, 
    {   
      id: 9,
      title: 'MoneyTun՝ նոր արագ դրամական փոխանցումների համակարգ Evoca-ում',
      date: '06.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17308934051939/510x383.png',
      path: '/news/allpage4/system-usa-armenia',
    },  
    {   
      id: 11,
      title: 'Evoca-ն միացել է UBPay արագ դրամական փոխանցումների համակարգին',
      date: '01.11.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304683213703/510x383.jpg',
      path: '/news/allpage4/money-transfer-system',
    },
   {
      id: 12,
      title: 'Հիփոթեքային վարկ՝ ավելի ցածր տոկոսադրույքով',
      date: '24.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17297753797877/510x383.png',
      path: '/news/allpage5/loan-special-offer',
    },
    {
      id: 13,
      title: 'Վճարիր Evoca Mastercard-ով և ստացիր 30% զեղչ Glovo-ում',
      date: '14.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17289080193428/510x383.png',
      path: '/news/allpage5/discount-for-cardholders',
    },  
    {
      id: 14,
      title: 'Առաջարկ Evoca Visa բոլոր քարտապաններին',
      date: '11.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/1728652233604/510x383.png',
      path: '/news/allpage5/buy-am-cashback',
    }, 
    {
      id: 15,
      title: 'Ավտովարկ՝ սկսած 9․9%-ից',
      date: '01.10.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17278577580017/510x383.png',
      path: '/news/allpage5/evoca-and-auto-gallery',
    },
    {
      id: 16,
      title: 'Փոփոխություններ Evoca Visa Infinite քարտապանների համար',
      date: '27.09.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17274358864927/510x383.png',
      path: '/news/allpage5/visa-infinite-cardholders',
    }, 
    {   
      id: 17,
      title: 'UnionPay քարտեր` Evocabank-ից',
      date: '30.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17246741766038/510x383.png',
      path: '/news/allpage5/gold-and-business',
    },
    {   
      id: 18,
      title: 'Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 50% cashback',
      date: '28.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17250200104029/510x383.png',
      path: '/news/allpage5/new-offer-cashback',
    }, 
    {   
      id: 19,
      title: 'Ամենամեծ ակցիան Evoca Visa քարտապանների համար',
      date: '26.08.2024',
      image: '	https://www.evoca.am/images-cache/news/1/1724744341029/510x383.png',
      path: '/news/allpage5/evoca-cardholders',
    }, 
    {   
      id: 20,
      title: 'Նոր առաջարկներ Evoca Visa քարտապաններին',
      date: '26.07.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17219998278406/510x383.jpg',
      path: '/news/allpage5/cinema-star-armenia',
    }, 
      {   
      id: 21,
      title: 'Նոր օվերդրաֆտ՝ EvocaHOME"',
      date: '03.07.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17199852468863/510x383.png',
      path: '/news/allpage5/product-evocahome',
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
          <span className="text-gray-900 font-semibold">Պրոդուկտներ</span>
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
    <Link to="/news/products" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-3 h-3 bg-pink-500 rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Պրոդուկտներ</span>
</Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
Evoca-ն մասնակցում է Armenian Auto Show 2026-ին    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Սեպտեմբերի 25-27-ը մասնակցիր լայնամասշտաբ Armenian Auto Show 2026-ին և օգտվիր Evocabank-ի կողմից առաջարկվող ավտովարկի հատուկ պայմաններից։


    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
22.09.2026
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/17902383376936/780x585.png" 
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
              to={`/hy/press/ej-${Math.max(currentPage - 1, 1)}`}
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
                  to={`/hy/press/ej-${num}`}
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
              to={`/hy/press/ej-${currentPage + 3}`}
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