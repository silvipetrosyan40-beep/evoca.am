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
      id: 21,
      title: '5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին',  
      date: '13.12.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17340920050867/510x383.png',
      path: '/news/allpage4/for-future-foundation',
    },
    {   
      id: 26,
      title: 'Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը',
      date: '09.12.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17337499936685/510x383.jpg',
      path: '/news/allpage4/notre-dame-cathedral',
    },
    {   
      id: 29,
      title: '20 միլիոն դրամ «Հայաստան» hամահայկական հիմնադրամին',
      date: '28.11.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17327982683146/510x383.png',
      path: '/news/allpage4/all-armenian-fund',
    },
    {   
      id: 22,
      title: 'Evoca-ն՝ Սուրբ Էջմիածնի Մայր Տաճարի մասին ժողովածուի հովանավոր',
      date: '15.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17237286203482/510x383.png',
      path: '/news/allpage5/etchmiadzin-book',
    }, 
    {   
      id: 23,
      title: 'Evoca-ն՝ Համաշխարհային հայկական գագաթնաժողովի գլխավոր գործընկեր',
      date: '13.08.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17236189467572/510x383.png',
      path: '/news/allpage5/global-armenian-summit',
    }, 
    {   
      id: 34,
      title: '20 մլն դրամ` աղետից տուժած բնակիչներին',
      date: '24.06.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17192298505328/510x383.png',
      path: '/news/allpage5/tavush-regions',
    },
    {   
      id: 36,
      title: 'Evocabank-ի նոր նվիրաբերությունը “City of Smile” հիմնադրամին',
      date: '18.06.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17187156211345/510x383.png',
      path: '/news/allpage5/smile-charity-fund',
    }, 
    {
      id: 8,
      title: 'Evocabank-ը «Ոզնի» մրցաշարի գլխավոր հովանավոր',
      date: '16.04.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17132534344794/510x383.jpg',
      path: '/news/allpage6/vozni-new-donation',
    },
    {
      id: 13,
      title: 'Evoca-ն՝ տնտեսագիտական օլիմպիադայի գլխավոր գործընկեր',
      date: '06.03.2024',
      image: '	https://www.evoca.am/images-cache/news/1/17097279853875/510x383.png',
      path: '/news/allpage6/economics-olympiad-donation',
    },
    {   
      id: 24,
      title: '3 մլն նվիրաբերություն Սուրբ Ծննդյան համերգի համար',
      date: '14.12.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17011691026688/510x383.png',
      path: '/news/allpage6/christmas-concert-donation',
    },
    {   
      id: 26,
      title: '5 մլն դրամ նվիրաբերություն Family Care հիմնադրամին',
      date: '08.12.2023',
      image: '	https://www.evoca.am/images-cache/news/1/1702014797777/510x383.png',
      path: '/news/allpage6/care-new-donation',
    },
    {   
      id: 30,
      title: '120 մլն դրամ նվիրաբերություն Fab Lab Armenia-ին',
      date: '22.11.2023',
      image: 'https://www.evoca.am/images-cache/news/1/17006549253885/510x383.jpg',
      path: '/news/allpage6/fab-lab-donation',
    },
    {   
      id: 19,
      title: '254 մլն դրամի նվիրաբերություն Երևան համայնքին',
      date: '23.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16875279466121/510x383.png',
      path: '/news/allpage7/evoca-donation',
    },
    {   
      id: 35,
      title: 'Նոր անտառ՝ հայկական դրամի 30-ամյակի առթիվ',
      date: '02.05.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16926858137407/510x383.jpg',
      path: '/news/allpage7/new-forest',
    },
    {   
      id: 25,
      title: '10 միլիոն դրամ` «Հայաստան» hամահայկական հիմնադրամին',
      date: '24.11.2022',
      image: 'https://www.evoca.am/images-cache/news/1/16692997134617/510x383.jpg',
      path: '/news/allpage8/all-armenian-fund',
    },
    {
      id: 3,
      title: 'Evocabank-ը 10 մլն դրամ է նվիրաբերել «Երաժշտություն հանուն ապագայի»…',
      date: '01.09.2022',
      image: '	https://www.evoca.am/images-cache/news/1/16624675976852/510x383.jpg',
      path: '/news/allpage9/talentum',
    },
    {   
      id: 25,
      title: 'Evocabank-ը 10,000,000 դրամ է փոխանցել կորոնավիրուսի դեմ պայքարելու համար',
      date: '17.03.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16108085658361/510x383.png',
      path: '/news/allpage12/fight-coronavirus',
    },
    {   
      id: 26,
      title: '5,000 եվրո Փարիզի Աստվածամոր տաճարի վերականգնմանը',
      date: '18.04.2019',
      image: 'https://www.evoca.am/images-cache/news/1/16109041886872/510x383.png',
      path: '/news/allpage13/dame-cathedral-in-paris',
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
          <span className="text-gray-900 font-semibold">CSR</span>
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
 <Link to="/news/csr" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-3 h-3 bg-lime-400 rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">CSR</span>
</Link>
    
    <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 leading-tight">
Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը
</h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Փարիզի Աստվածամոր տաճարը հրդեհից 5 տարի անց՝ դեկտեմբերի 7-ին, վերաբացեց իր դռները։

    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
09.12.2024
  </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/17337499936685/780x585.jpg" 
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



      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}