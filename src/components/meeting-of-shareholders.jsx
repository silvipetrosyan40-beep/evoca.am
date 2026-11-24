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
  <Link to="/news/banking" className="hover:text-purple-700 transition-colors">
    Բանկային
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold">Evocabank-ն ամփոփել է 2023թ. տարեկան արդյունքները</span>
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
Evocabank-ն ամփոփել է 2023թ. տարեկան արդյունքները
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Կայացավ Evocabank-ի բաժնետերերի տարեկան ընդհանուր ժողովը։


    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
01.07.2024    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/17198345573851/780x585.png" 
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
    Հունիսի 28-ին կայացավ <strong className="text-purple-700 font-bold">Evocabank</strong>-ի բաժնետերերի տարեկան ընդհանուր ժողովը, որին մասնակցեցին Բանկի բաժնետերերը, Բանկի խորհուրդը և հրավիրված անձինք[cite: 20]:
  </p>

  <p>
    Բանկի Վարչության նախագահ Կարեն Եղիազարյանը նշեց, որ <strong className="text-purple-700 font-bold">Evocabank</strong>-ը 2023-ին հետամուտ է եղել իր ռազմավարական խնդիրների իրագործմանը և տարին ամփոփել է բարձր ֆինանսական ցուցանիշներով[cite: 20]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-4">2023թ.-ի արդյունքներով՝</h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Բանկի <strong className="font-bold text-gray-900">ընդհանուր ակտիվները</strong> կազմել են 446 մլրդ ՀՀ դրամ՝ նախորդ տարվա համեմատ աճելով 28%-ով, ինչը <strong className="font-bold text-gray-900">3 անգամ</strong> բարձր է բանկային համակարգի աճի տեմպից[cite: 20]:
    </li>
    <li>
      <strong className="font-bold text-gray-900">Ընդհանուր պարտավորությունները</strong> կազմել են 376 մլրդ ՀՀ դրամ՝ տարեսկզբի համեմատ աճելով 31%-ով, ինչը <strong className="font-bold text-gray-900">5 անգամ</strong> բարձր է համակարգի աճի տեմպից[cite: 20]:
    </li>
    <li>
      Բանկի <strong className="font-bold text-gray-900">հաճախորդներից ներգրավված միջոցները</strong> կազմել են 302 մլրդ ՀՀ դրամ՝ աճելով 26%-ով, ինչը <strong className="font-bold text-gray-900">7 անգամ</strong> բարձր է համակարգի աճի տեմպից[cite: 20]:
    </li>
    <li>
      <strong className="font-bold text-gray-900">Վարկային պորտֆելը</strong> կազմել է 212 մլրդ ՀՀ դրամ՝ նախորդ տարվա համեմատ աճելով 31%-ով, ինչը <strong className="font-bold text-gray-900">5 անգամ</strong> բարձր է համակարգի աճի տեմպից[cite: 20]:
    </li>
    <li>
      2023թ. ընթացքում 14%-ով աճել է նաև Բանկի <strong className="font-bold text-gray-900">ընդհանուր կապիտալը</strong>՝ կազմելով 69 մլրդ ՀՀ դրամ[cite: 20]:
    </li>
    <li>
      2023թ. արդյունքներով <strong className="text-purple-700 font-bold">Evocabank</strong>-ն ապահովել է 11 մլրդ ՀՀ դրամի <strong className="font-bold text-gray-900">զուտ շահույթ</strong>[cite: 20]:
    </li>
  </ul>

  <p>
    Ընդհանուր ակտիվների և ընդհանուր պարտավորությունների մեծությամբ Բանկը 2 կետով բարելավել է իր մրցակցային դիրքերը համակարգում, իսկ Վարկային պորտֆելի և հաճախորդներից ներգրավված միջոցների մեծությամբ՝ 1 դիրքով[cite: 20]:
  </p>

  <p>
    2023թ. արդյունքներով <strong className="text-purple-700 font-bold">Evocabank</strong>-ը հանդիսացել է ընդհանուր ակտիվների, ընդհանուր պարտավորությունների, վարկային պորտֆելի և զուտ շահույթի մեծությամբ 8-րդ բանկը Հայաստանում, իսկ հաճախորդներից ներգրավված միջոցների և ընդհանուր կապիտալի մեծությամբ՝ 7-րդը[cite: 20]:
  </p>

  <p>
    2023թ. ընթացքում Բանկն արձանագրել է բազմաթիվ հաջողություններ՝ ներդրել է նոր պրոդուկտներ, ձեռք է բերել նոր միջազգային հեղինակավոր գործընկերներ և նոր ռազմավարական համագործակցություններ, այդ թվում[cite: 20]՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Բանկը ներգրավել է ևս 7 մլն ԱՄՆ դոլար շվեյցարական responsAbility-ից՝ ՄՓՄՁ-ների զարգացման համար[cite: 20]:</li>
    <li>Բանկը ներգրավել է 2 մլն ԱՄՆ դոլարին համարժեք դրամ շվեյցարական Symbiotics Investments-ից՝ միկրո, փոքր և միջին բիզնեսների ֆինանսավորմանն աջակցելու համար[cite: 20]:</li>
    <li>Բանկը թողարկել և տեղաբաշխել է 2 մլրդ ՀՀ դրամ և 10 մլն ԱՄՆ դոլար արժեքով պարտատոմսեր[cite: 20]:</li>
    <li>Բանկը ներկայացրել է իր նոր EvocaTOUCH հավելվածը: Այն այժմանման սոցիալական ցանցերի feed-ի՝ ամենակարևոր և հաճախ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջում՝ քարտեր, հաշիվներ, վարկեր, ավանդներ, կարելի է իրականացնել մի շարք բանկային գործընթացներ ընդամենը մեկ ակնթարթում[cite: 20]:</li>
    <li>Բանկը ներկայացրել է իր նոր թվային քարտերի պրոդուկտը՝ Evoca Digital քարտերը կարելի է ձեռք բերել EvocaTOUCH հավելվածում՝ հաճախորդի նախընտրած դիզայնով: Թվային քարտը կարելի է կցել նաև Apple Pay-ին և Google Pay-ին[cite: 20]:</li>
    <li>Բանկը գործարկել է իր նոր թվային պրոդուկտը՝ EvocaINVEST ներդրումային հավելվածը App Store-ում ու Google Play-ում, որի միջոցով հաճախորդները հնարավորություն ունեն գնել և վաճառել բաժնետոմսեր, պարտատոմսեր, ETF-ներ և այլ արժեթղթեր ավելի քան 20 երկրների ֆինանսական շուկաներում՝ առանց Բանկ այցելելու:</li>
    <li>Բանկը կատարել է ևս մեկ կարևոր քայլ թվայնացման ոլորտում՝ ներդնելով նոր e-Sign համակարգ ու անցում կատարելով հիմնական թղթային փաստաթղթաշրջանառությունից էլեկտրոնայինի:</li>
  </ul>

  <p>
    2023-ի ընթացքում <strong className="text-purple-700 font-bold">Evocabank</strong>-ն իրականացրել է հասարակության համար կարևոր նշանակություն ունեցող տասնյակ նախագծեր, այդ թվում՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Բանկը նվիրաբերել է 120 մլն դրամ Fab Lab Armenia-ին: Այն ԱՄՆ-ի Մասաչուսեթսի տեխնոլոգիական ինստիտուտի՝ MIT-ի կողմից ստեղծված «խելացի» արհեստանոց-լաբորատորիա է՝ հագեցած հատուկ սարքավորումներով և նյութերով:</li>
    <li>Evoca-ն Երևան համայնքին փոխանցել է 254 մլն ՀՀ դրամ մենամարտային մարզաձևերի բարձրագույն վարպետության մարզադպրոցի վերանորոգման համար:</li>
  </ul>

  <p>
    Տարվա ընթացքում Բանկն արժանացել է մի շարք հեղինակավոր մրցանակների, որոնցից՝
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Global Finance միջազգային հեղինակավոր ամսագիրը Բանկին շնորհել է միանգամից 4 մրցանակ՝
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Լավագույն սպառողական թվային բանկը Հայաստանում 2023</li>
        <li>Լավագույն սպառողական մբայլ բանկային հավելվածը Հայաստանում 2023</li>
        <li>Լավագույն կորպորատիվ թվային բանկը Հայաստանում 2023</li>
        <li>Լավագույն ՄՓՄՁ բանկը Հայաստանում 2023</li>
      </ul>
    </li>
    <li>
      Global Business &amp; Finance Magazine ամսագիրը Evocabank-ին ճանաչել է 2023թ.-ի <strong className="font-bold text-gray-900">Ամենանորարար թվային բանկը Հայաստանում</strong>:
    </li>
  </ul>

  <p>
    2024 թվականին Բանկը շարունակում է հավատարիմ մնալ իր ռազմավարությանը և ընդհանուր բիզնես մոդելին՝ նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ մատուցելով ֆինանսական ծառայություններ արագ, պարզ և հարմարավետ եղանակով՝ գործելով mobile-first ձևաչափով և դարձնելով մարդկանց կյանքն ավելի հարմարավետ:
  </p>

  <p>
    Բաժնետերերի ժողովի որոշման համաձայն՝ Բանկի <a href="#" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">խորհրդի կազմը</a> մնաց անփոփոխ:
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