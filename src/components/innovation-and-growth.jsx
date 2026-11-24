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
          <span className="text-gray-900 font-semibold"> 
Բանկային
</span>
                    <span className="text-gray-300">›</span>

         <span className="text-gray-900 font-semibold">Evocabank. 2024 թվականի ամփոփում

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
     Evocabank. 2024 թվականի ամփոփում
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
      src="		https://www.evoca.am/images-cache/news/1/17371104329802/780x585.jpg" 
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
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը 2024-ին արձանագրեց ֆինանսական ցուցանիշների աճ՝ ավելի ամրապնդելով իր դիրքերը և ներկայանալով թվային ու նորարարական լուծումներով:
  </p>

  <p>
    Բանկի ակտիվները 2023 թվականի համեմատ աճեցին <strong className="font-bold text-gray-900">24%-ով</strong>՝ հասնելով <strong className="font-bold text-gray-900">552 մլրդ ՀՀ դրամի</strong>: Վարկային պորտфельն գրանցեց <strong className="font-bold text-gray-900">31% աճ</strong>՝ կազմելով <strong className="font-bold text-gray-900">277 մլրդ դրամ</strong>: Ընդհանուր պարտավորություններն աճեցին <strong className="font-bold text-gray-900">24%-ով</strong>՝ կազմելով <strong className="font-bold text-gray-900">468 մլրդ դրամ</strong>: Հաճախորդներից ներգրավված միջոցներն աճեցին <strong className="font-bold text-gray-900">20%-ով</strong>՝ հասնելով <strong className="font-bold text-gray-900">362 մլրդ դրամի</strong>, իսկ ընդհանուր կապիտալն աճեց <strong className="font-bold text-gray-900">21%-ով</strong>՝ կազմելով <strong className="font-bold text-gray-900">84 մլրդ դրամ</strong>: Բանկի զուտ շահույթը կազմեց <strong className="font-bold text-gray-900">14.6 մլրդ դրամ</strong>՝ նախորդ տարվա համեմատ <strong className="font-bold text-gray-900">32%-ով</strong> ավելի:
  </p>

  <p>
    Տարվա ընթացքում Բանկը ներկայացրեց մի շարք նորարարական նախաձեռնություններ, ներառյալ՝ <strong className="font-bold text-gray-900">Mastercard Digital քարտերը</strong>, <strong className="font-bold text-gray-900">UnionPay Gold</strong> և <strong className="font-bold text-gray-900">UnionPay Business քարտերը</strong>, <strong className="font-bold text-gray-900">Idram Open QR</strong>, <strong className="font-bold text-gray-900">UBPay-ը</strong> և այլն:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ն ամրապնդեց իր միջազգային համագործակցությունները՝ ներգրավելով <strong className="font-bold text-gray-900">10 մլն ԱՄՆ դոլար</strong> IFC-ից, <strong className="font-bold text-gray-900">12 մլն եվրո</strong> EIB Global-ից, <strong className="font-bold text-gray-900">10 մլն ԱՄՆ դոլար</strong> OFID-ից, <strong className="font-bold text-gray-900">10.35 մլն ԱՄՆ դոլարին համարժեք դրամ</strong> Symbiotics Investments-ից, <strong className="font-bold text-gray-900">10 մլն ԱՄՆ դոլար</strong> The Black Sea Trade and Development Bank (BSTDB)-ից, և այլ գործընկերներից: Բանկը նաև կնքեց նոր համագործակցության պայմանագրեր <strong className="font-bold text-gray-900">Al Fardan Exchange</strong>-ի, <strong className="font-bold text-gray-900">BACEE</strong>-ի և այլ միջազգային ընկերությունների հետ:
  </p>

  <p>
    Բանկը նաև համալրեց իր մրցանակների թիվը՝ ստանալով նորերը միջազգային հեղինակավոր ամսագրերի կողմից և ոչ միայն:
  </p>

  <p>
    <strong className="font-bold text-gray-900">Global Finance հեղինակավոր ամսագիրը</strong> 8-րդ տարին անընդմեջ Evocabank-ին ճանաչել է որպես <strong className="font-bold text-gray-900">Լավագույն թվային սպառողական բանկը Հայաստանում</strong>: Իսկ <strong className="font-bold text-gray-900">Global Banking & Finance Review ամսագիրը</strong> Բանկին արդեն 4 տարի համարում է <strong className="font-bold text-gray-900">Հայաստանի լավագույն թվային բանկ</strong>: Evoca-ն 4 տարի անընդմեջ համարվում է <strong className="font-bold text-gray-900">Հայաստանի լավագույն ՄՓՄՁ բանկ</strong> ըստ Global Finance-ի:
  </p>

  <p>
    <strong className="font-bold text-gray-900">Global Business and Finance Magazine-ը</strong> 2 մրցանակ է շնորհել 2024-ին՝ <strong className="font-bold text-gray-900">Հայաստանի ամենաարագ աճող և ամենանորարար թվային բանկ</strong>:
  </p>

  <p>
    2024-ին Բանկը ստացել է նաև <strong className="font-bold text-gray-900">«Լավագույն վեբ դիզայն»</strong> և <strong className="font-bold text-gray-900">«Լավագույն բջջային նորարարական բանկային հավելված»</strong> մրցանակները <strong className="font-bold text-gray-900">Armenia Digital Awards 2024</strong>-ի կողմից:
  </p>

  <p>
    Եվ այս ամենը Բանկի հաջողությունները փաստող մրցանակների միայն մի մասն է:
  </p>

  <p className="pt-2">
    2024 թվականի ամփոփումը մանրամասն կարող եք դիտել այս <a href="#" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">հղումով</a>:
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
            2024 թվականը Evocabank-ի համար նորարարությունների, համագործակցությունների և ֆինանսական աճի տարի էր։

          </h4>
        </div>
      </div>
      <div className="px-5 pb-5 text-sm text-gray-400 font-medium">
       17.01.2025
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
            src="	https://www.evoca.am/images-cache/news/1/17371104329802/780x585.jpg" 
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