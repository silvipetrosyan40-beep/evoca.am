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

  

  // Նկարում պատկերված նորությունների տվյալները
  const newsList = [
    
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
          <span className="text-gray-900 font-semibold"> Բանկային</span>
                    <span className="text-gray-300">›</span>

         <span className="text-gray-900 font-semibold">Evocabank. 20 մլն ԱՄՆ դոլար` շվեյցարական BlueOrchard-ից

</span>

        </nav>

        {/* 3. Զտման կոճակներ + Ամսաթվերի Ֆիլտր */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          
          
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
      Evocabank. 20 մլն ԱՄՆ դոլար` շվեյցարական BlueOrchard-ից
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Evocabank-ը ներգրավել է 20 մլն ԱՄՆ դոլար BlueOrchard Microfinance Fund-ից՝ Հայաստանում ՄՓՄՁ-ների ֆինանսավորման նպատակով։
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
      08.12.2025
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/17649374043883/780x585.png" 
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


           <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Շվեյցարական BlueOrchard Finance Ltd-ի կողմից կառավարվող BlueOrchard Microfinance Fund-ի հետ համագործակցության շրջանակում <strong className="text-purple-700 font-bold">Evocabank</strong>-ը ներգրավել է 20 մլն ԱՄՆ դոլար՝ ուղղված Հայաստանում միկրո, փոքր և միջին ձեռնարկությունների (ՄՓՄՁ) վարկավորման ծավալների ավելացմանը և ֆինանսական հասանելիության բարձրացմանը:
  </p>

  <p>
    Սա <strong className="text-purple-700 font-bold">Evocabank</strong>-ի առաջին համագործակցությունն է BlueOrchard-ի հետ: Այս գործընկերության արդյունքում կընդլայնվի Բանկի միջազգային ֆինանսական գործընկերային ցանցը, կապահովվի արտաքին ֆինանսավորման դիվերսիֆիկացիա, իսկ ՄՓՄՁ հաճախորդների համար կստեղծվեն էլ ավելի մրցունակ վարկային պայմաններ:
  </p>

  <p>
    <strong className="font-bold text-gray-900">Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը նշեց.</strong> «<em>BlueOrchard</em>-ի հետ այս համագործակցությունը կարևոր քայլ է մեր ռազմավարական նպատակների իրականացման համար: Այն կընդլայնի Բանկի ներգրավվածությունը ՄՓՄՁ ոլորտի ֆինանսավորման մեջ՝ թույլ տալով առաջարկել առավել շահավետ և ճկուն ֆինանսական լուծումներ մեր բիզնես հաճախորդներին»:
  </p>

  <p>
    <strong className="font-bold text-gray-900">BlueOrchard-ի Կենտրոնական և Արևելյան Եվրոպայի, Կենտրոնական Ասիայի և Միջին Արևելքի երկրների Ներգրավման ստորաբաժանման ղեկավար Կասպարու Դեյլին հավելեց.</strong> «<em>Evocabank</em>-ի հետ համագործակցությունը և վարկի տրամադրումը արժեքավոր գործընկերային հարաբերությունների սկիզբ են: Այս համագործակցությունը կրկին հաստատում է BlueOrchard-ի պատրաստակամությունը նպաստելու ՄՓՄՁ-ների ընդլայնմանը և երկրում ֆինանսական ռեսուրսների հասանելիության բարելավմանը: Մենք համոզված ենք, որ համատեղ ջանքերով մենք կօգնենք Հայաստանում հզորացնելու ձեռնարկատիրական գործունեությունը և ամրապնդելու կայուն զարգացումը»:
  </p>

  <h3 className="text-xl font-bold text-gray-900 pt-4">BlueOrchard Finance Ltd-ի մասին</h3>

  <p>
    BlueOrchard-ը միջազգային առաջատար ներդրումային կառույց է և Schroders Group-ի անդամ: 2024թ. դեկտեմբերի դրությամբ միկրոֆինանսավորման ոլորտում առաջատար BlueOrchard-ն իր ներդրումներով աջակցել է ավելի քան 300 մլն մարդու զարգացող և սահմանային երկրներում: Հիմնադրվելով ՄԱԿ-ի նախաձեռնությամբ 2001թ.-ին՝ ընկերությունը սոցիալ-տնտեսական ազդեցությամբ ներդրումային լուծումներ է առաջարկում տարբեր տեսակի ակտիվների գծով:
  </p>

  <p className="text-sm text-gray-500 pt-2">
    Կայք՝ <a href="https://www.blueorchard.com" target="_blank" rel="noreferrer" className="text-purple-700 underline">www.blueorchard.com</a>
  </p>

  <h3 className="text-xl font-bold text-gray-900 pt-6">Evocabank-ի մասին</h3>

  <p>
    Հիմնադրվելով 1990թ.՝ <strong className="text-purple-700 font-bold">Evocabank</strong>-ը Հայաստանում գրանցված առաջին առևտրային բանկն է, որը 35 տարվա փորձառություն ունի բանկային համակարգում: Բանկի գլխամասը Երևանում է, իսկ 15 մասնաճյուղերը՝ Երևանում և մարզերում: <strong className="text-purple-700 font-bold">Evocabank</strong>-ը թվային ժամանակակից ֆինանսական ծառայություններ է մատուցում ֆիզիկական անձանց, ՄՓՄՁ-ներին և խոշոր ընկերություններին: Բանկն արժանացել է մի շարք միջազգային մրցանակների, այդ թվում՝ Global Finance հեղինակավոր ամսագրի կողմից «Հայաստանի ՖՄՁ լավագույն բանկ» և «Հայաստանի լավագույն թվային բանկ»:
  </p>
</article>
               

{/* Այլ նորություններ բաժին */}
<div className="mt-16 pt-10 border-t border-gray-200">
  <h3 className="text-xl font-bold text-gray-900 mb-6">Այլ նորություններ</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Նորություն 1 */}
    <Link 
      to="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" 
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow no-underline"
    >
      <div>
        <div className="h-48 overflow-hidden">
          <img 
            src="	https://www.evoca.am/images-cache/news/1/17908437653512/428x321.png" 
            alt="Evocabank FIM" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
            Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից
          </h4>
        </div>
      </div>
      <div className="px-5 pb-5 text-sm text-gray-400 font-medium">
        05.10.2026
      </div>
    </Link>

    {/* Նորություն 2 */}
    <Link 
      to="/news/block-transactions" 
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow no-underline"
    >
      <div>
        <div className="h-48 overflow-hidden bg-purple-900 flex items-center justify-center">
          <img 
            src="https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" 
            alt="Գործարքների արգելափակում" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
            Գործարքների արգելափակում 1 կոճակով
          </h4>
        </div>
      </div>
      <div className="px-5 pb-5 text-sm text-gray-400 font-medium">
        01.06.2026
      </div>
    </Link>

    {/* Նորություն 3 */}
    <Link 
      to="/news/moodys-rating" 
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow no-underline"
    >
      <div>
        <div className="h-48 overflow-hidden">
          <img 
            src="	https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" 
            alt="Moody's rating" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
            Ba3 վարկանիշ Moody’s-ից Evocabank-ին
          </h4>
        </div>
      </div>
      <div className="px-5 pb-5 text-sm text-gray-400 font-medium">
        18.08.2026
      </div>
    </Link>
  </div>
</div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}