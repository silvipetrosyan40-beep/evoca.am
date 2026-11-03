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
      title: 'Հատուկ առաջարկ Mastercard քարտապանների համար',
      date: '01.04.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16202868773674/510x383.jpg',
      path: 'mastercard-cardholders',
    },
    {
      id: 2,
      title: 'Evocabank-ը մի քանի ժամում ավարտել է իր պարտատոմսերի երկրորդ տրանշի…',
      date: '23.03.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16202876544538/510x383.jpg',
      path: 'of-second-tranche',
    },
    {
      id: 3,
      title: 'Evocabank-ն անդամակցել է ՖԻՆԱՐՄ Ֆինանսական շուկայի մասնակիցների ասոցիացիային',
      date: '13.03.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16170289183574/510x383.jpg',
      path: 'members-association',
    },
    {
      id: 4,
      title: 'Evocabank-ը թողարկել է պարտատոմսերի 2-րդ տրանշը',
      date: '16.03.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16167518739189/510x383.jpg',
      path: 'bonds-2nd-tranche',
    },
    {
      id: 5,
      title: 'Նոր համագործակցություն Evocabank-ի և Արմենիան Լիզինգ Քամփնի-ի միջև',
      date: '05.03.2021',
      image: '	https://www.evoca.am/images-cache/news/1/16170289363375/510x383.jpg',
      path: 'armenian-leasing-company',
    },
    {
      id: 6,
      title: 'Evoca-ն մի քանի ժամում ավարտել է պարտատոմսերի տեղաբաշխումը',
      date: '02.03.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16167552537333/510x383.jpg',
      path: 'tranche-of-bonds',
    },
    {
      id: 7,
      title: 'Evocabank-ը կթողարկի պարտատոմսեր',
      date: '17.02.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16161580767388/510x383.png',
      path: 'evocabank-to-issue-bonds',
    },
    {
      id: 8,
      title: 'Արտոնյալ պայմաններով ծառայություններ «Նոր Նորք» մասնաճյուղում',
      date: '02.02.2021',
      image: 'https://www.evoca.am/images-cache/news/1/16178798192635/510x383.png',
      path: 'nor-nork-branch',
    },
    {
      id: 9,
      title: 'Նոր՝ eco-friendly մասնաճյուղ Նոր-Նորք համայնքում',
      date: '26.12.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16098750729028/510x383.jpg',
      path: 'nor-nork-branchh',
    },
    {
      id: 10,
      title: 'Հատուկ զեղչեր gg-ում Visa քարտապանների համար',
      date: '22.12.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16100031876158/510x383.png',
      path: 'gg-visa-cardholders',
    },
    {
      id: 11,
      title: 'Հաճախորդների սպասարկման ժամեր',
      date: '10.12.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183823394046/510x383.png',
      path: 'customer-service-hours',
    },
    {
      id: 12,
      title: 'Քո բիզնեսի լոգոն, բրենդինգն ու կայքը՝ ապառիկով',
      date: '08.12.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183847834993/510x383.png',
      path: 'logo-brand-website',
    },
    {
      id: 13,
      title: 'Evoca-ն միանում է Զինծառայողների ապահովագրության…',
      date: '22.11.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183848935683/510x383.png',
      path: 'double-payments',
    },   
    {
      id: 14,
      title: 'Երաշխավորված ավանդների սահմանաչափերի բարձրացում',
      date: '19.11.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16100042278431/510x383.png',
      path: 'of-guaranteed-deposits',
    },   
    {
      id: 15,
      title: 'Հաշվի բացում և օնլայն ավանդ՝ աշխարհի ցանկացած կետից',
      date: '16.11.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16100180500412/510x383.png',
      path: 'anywhere-in-the-world',
    },   
    {
      id: 16,
      title: 'Քարտից քարտ փոխանցումներ Visa Direct-ի միջոցով',
      date: '05.11.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16100251060754/510x383.png',
      path: 'transfers-with-visa-direct',
    },   
    {   
      id: 17,
      title: 'Բացօթյա բարեգործական համերգ-դրամահավաք',
      date: '02.11.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16929548288114/510x383.jpg',
      path: 'fund-raising-concerts',
    },
    {   
      id: 18,
      title: 'Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման ժամերում',
      date: '16.10.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183878191416/510x383.png',
      path: 'evocabank-customer-service-hours',
    }, 
    {   
      id: 19,
      title: '50 մլն դրամ Hayastan All Armenian Fund-ին Evocabank-ի կողմից',
      date: '09.10.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183857705231/510x383.png',
      path: 'hayastan-all-armenian-fund',
    }, 
    {   
      id: 20,
      title: 'SMS` վարկի մարումների և հաշվի շարժի մասին',
      date: '02.10.2020',
      image: '	https://www.evoca.am/images-cache/news/1/161038217147/510x383.png',
      path: 'and-account-movements',
    }, 
    {   
      id: 21,
      title: 'Evocabank 3.0',  
      date: '21.09.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16103863601729/510x383.png',
      path: 'dron-show-in-armenia',
    },  
    {   
      id: 22,
      title: 'Անհպում կանխիկացում NFC տեխնոլոգիայով',
      date: '20.09.2020',
      image: 'https://www.evoca.am/images-cache/news/1/161838218561/510x383.png',
      path: 'cash-withdrawal-using-nfc',
    }, 
    {   
      id: 23,
      title: 'Վարկ Evoca-ից (ՀՀ էներգախնայողության ծրագիր)',
      date: '11.09.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16183824138452/510x383.png',
      path: 'energy-efficiency-fund',
    }, 
    {   
      id: 24,
      title: 'Երեխա ունեցող ընտանիքների բնակարանային ապահովության պետական աջակցության…',
      date: '07.09.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183858492287/510x383.png',
      path: 'families-with-children',
    }, 
    {   
      id: 25,
      title: 'Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման աշխատանքային…',
      date: '04.09.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16104316577652/510x383.png',
      path: 'for-customer-services',
    }, 
    {   
      id: 26,
      title: 'Evocabank-ը համալրել է կանոնադրական կապիտալը',
      date: '28.08.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16104325455044/510x383.png',
      path: 'replenished-its-capital',
    },
    {   
      id: 27,
      title: 'Evocaգույն ֆոտոսեսիա',
      date: '25.08.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16105991734116/510x383.png',
      path: 'coloured-photo-shoot',
    }, 
    {   
      id: 28,
      title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
      date: '13.08.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16106026970036/510x383.png',
      path: 'digital-bank-of-armenia',
    },  
    {   
      id: 29,
      title: 'Evocabank-ի «Թումանյան» մասնաճյուղը գործում է նոր՝ Թումանյան 15 հասցեում',
      date: '03.08.2020',
      image: 'https://www.evoca.am/images-cache/news/1/16106089552228/510x383.png',
      path: 'to-15-tumanyan-st',
    },  
    {   
      id: 30,
      title: 'Ամա՜ռ, շո՜գ և նոր evoji-ներ Evocabank-ից',
      date: '22.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16106115093889/510x383.png',
      path: 'evojis-from-evocabank',
    }, 
    {   
      id: 31,
      title: 'EvocaBot` հայկական առաջին վճարային բանկային բոտն Evocabank-ից',
      date: '18.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16106122151393/510x383.png',
      path: 'payment-bot-in-banking',
    },   
    {   
      id: 32,
      title: '2020թ․ առաջին կիսամյակի ֆինանսական արդյունքները',
      date: '17.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183879270733/510x383.png',
      path: 'of-the-first-half-of-2020',
    }, 
    {   
      id: 33,
      title: 'SingleTOUCH և ապառիկ վարկերի մարման նոր ժամանակացույց',
      date: '16.07.2020',
      image: 'https://www.evoca.am/images-cache/news/1/1610620440257/510x383.png',
      path: 'of-sale-instalment-loans',
    },  
    {   
      id: 34,
      title: 'Բիոմետրիկ նույնականացում՝ EvocaTOUCH հավելվածում',
      date: '15.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16183854252197/510x383.png',
      path: 'evocatouch-application',
    },    
    {   
      id: 35,
      title: 'Evocabank-ը Հայաստանի 87-րդ խոշոր հարկատուն է',
      date: '07.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16106099043041/510x383.png',
      path: 'taxpayer-in-armenia',
    },  
    {   
      id: 36,
      title: 'Evocabank Online ապառիկ՝ Crossroad.com օնլայն խանութում',
      date: '07.07.2020',
      image: '	https://www.evoca.am/images-cache/news/1/16100391636205/510x383.png',
      path: 'loans-at-crossroad',
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
              to={`/news/allpage${currentPage + 11}`}
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