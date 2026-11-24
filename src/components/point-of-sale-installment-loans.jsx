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
                                                        <span className="text-gray-900 font-semibold">Evoca-ն երկարաձգել է SingleTOUCH և ապառիկի մարման ժամկետները</span>
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
Evoca-ն երկարաձգել է SingleTOUCH և ապառիկի մարման ժամկետները
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Թեթևացնելով իր վարկառուների ամսական վճարումների չափը՝ Evocabank-ն երկարաձգում է SingleTOUCH և ապառիկ վարկերի մարման վերջնաժամկետը 6 ամսով։
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
14.04.2020
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/16184703522597/780x585.png" 
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

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
  <p className="text-center">
    Բանկը նաև տեղեկացնում է, որ SingleTOUCH և ապառիկ վարկերի ամսական մարումները մինչև հուլիսի 16-ը չկատարելու դեպքում, դա ուշացում չի համարվի, իսկ տույժեր և տուգանքներ չեն կիրառվի[cite: 17]:
  </p>

  <p className="text-center">
    Առաջարկից կարող են օգտվել միայն այն վարկառուները, ովքեր մարտի 16-ի դրությամբ չեն ունեցել ժամկետանց պարտավորություններ[cite: 17]:
  </p>

  <h2 className="text-2xl font-bold text-purple-700 text-center pt-4">
    ՄԱՆՐԱՄԱՍՆԵՐ
  </h2>

  <h3 className="text-xl font-bold text-purple-700 text-center pt-2">
    Ընթացիկ վարկերի մարումների մասին
  </h3>

  <p className="text-center">
    Բոլոր այն SingleTOUCH և ապառիկ վարկառուները, ովքեր պետք է կատարեն իրենց հերթական ամսական մարումները մարտի 16-ից մինչև հուլիսի 16-ն ընկած ժամանակահատվածում, կարող են այդ ընթացքում վճարումներ չկատարել, ինչը ուշացում չի համարվի, իսկ տույժեր և տուգանքներ չեն կիրառվի[cite: 17]:
  </p>

  <p className="text-center">
    Մարումները պարտադիր են դառնում սկսած հուլիսի 16-ից՝ համաձայն նոր ժամանակացույցերի[cite: 17]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 text-center pt-2">
    Նոր ժամանակացույցի մասին
  </h3>

  <p className="text-center">
    SingleTOUCH և ապառիկ վարկառուները մինչև հուլիսի 16-ը կստանան իրենց վարկի մարումների նոր ժամանակացույց[cite: 17]:
  </p>

  <p className="text-center">
    Նոր ժամանակացույցում վարկի մարման վերջնաժամկետը երկարաձգված կլինի 6 ամսով[cite: 17]:
  </p>

  <p className="text-center">
    Նոր ժամանակացույցը կգործի հուլիսի 16-ից հետո[cite: 17]:
  </p>

  <p className="text-center">
    Նոր ժամանակացույցում վարկերի համար հերթական մարման օր է համարվելու հուլիսի նույն ամսաթիվը, որը սահմանված է ներկայումս գործող գրաֆիկով։ Օրինակ՝ մարտի 20-ին մարում ունեցող վարկառուի առաջին մարումը կլինի հուլիսի 20-ին[cite: 17]:
  </p>

  <p className="text-center">
    Նոր ժամանակացույցը կներառի հուլիսի 16-ի դրությամբ չկատարված բոլոր վճարումները[cite: 17]:
  </p>

  <p className="text-center">
    Նոր ժամանակացույցով վարկի մարումների ամսական մեծությունը չի գերազանցի հին գրաֆիկով ամսական մարումների գումարներին[cite: 17]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 text-center pt-2">
    Մարվող վարկերի մասին
  </h3>

  <p className="text-center">
    Այն դեպքերում, երբ վարկի ամբողջական մարման վերջնաժամկետն ընկած է մարտի 16-ից հուլիսի 16-ն ընկած ժամանակահատվածում, տվյալ վարկի մարման վերջնաժամկետը 6 ամսով կերկարաձգվի։ Մինչև հուլիսի 16-ը վարկի ամբողջական մարում չկատարելը ուշացում չի համարվի, իսկ տույժեր և տուգանքներ չեն կիրառվի[cite: 17]:
  </p>

  <p className="text-center">
    Բանկը, ինչևիցե, խորհուրդ է տալիս հնարավորության պարագայում կատարել մարումներ՝ ըստ գործող ժամանակացույցի[cite: 17]:
  </p>

  <p className="text-center">
    Այս առաջարկը համարվում է հանրային օֆերտա։ SingleTOUCH և ապառիկ վարկերից օգտվող այն վարկառուները, ովքեր վճարումներ չեն կատարի իրենց գործող ժամանակացույցի համաձայն, կհամարվեն առաջարկված պայմաններին համաձայնություն տված վարկառուներ։ Այն վարկառուները, ովքեր չեն ցանկանա օգտվել տվյալ հնարավորությունից, կարող են հրաժարվելու մասին դիմում ուղարկել Բանկի vark@evocabank.am էլեկտրոնային հասցեին[cite: 17]:
  </p>

  <p className="text-center">
    Evocabank-ի այլ վարկատեսակներից օգտվող վարկառուները (երաշխավորությամբ տրված վարկեր, մեքենայի և անշարժ գույք գրավով տրված վարկեր, անհատ ձեռնարկատերերին և իրավաբանական անձանց տրված վարկեր), ովքեր ունեն խնդիրներ՝ կապված իրենց վարկերի մարումների հետ, կստանան անհատական մոտեցում և վարկերի ժամկետների վերանայում՝ իրենց առկա և կանխատեսվող եկամուտներին համապատասխան։ Նրանք կարող են դիմել Բանկ՝ ներկայացնելով իրենց եկամուտների նվազումը հիմնավորող փաստեր:
  </p>

  <p className="text-center">
    Դիմում ներկայացնելու համար անհրաժեշտ է vark@evocabank.am էլեկտրոնային հասցեին գրել նամակ՝ կցելով դիմում, անձնագրային տվյալներ և ստեղծված իրավիճակի պատճառով կրած վնասները հիմնավորող փաստաթուղթ։ Վերանայումները կարող են վերաբերել ինչպես ամսական մայր գումարի և տոկոսագումարի հետձգումներին, այնպես էլ վարկի մարման վերջնաժամկետի երկարաձգմանը:
  </p>

  <div className="text-center space-y-4 pt-4">
    <p className="font-bold text-purple-700">
      Ցանկացած հարցի դեպքում մենք՝
    </p>

    <ul className="space-y-2 inline-block text-left">
      <li>• Սիրով սպասում ենք Ձեզ Բանկի գրասենյակներում,</li>
      <li>• Պատասխանում ենք Ձեր հարցերին Բանկի բոլոր հարթակներում՝</li>
    </ul>

    <ul className="space-y-2 inline-block text-left pl-6 block">
      <li>- Կոնտակտային կենտրոն՝ <a href="tel:010605555" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">010 60 55 55</a></li>
      <li>- Viber, WhatsApp, Zangi, Telegram՝ <span className="font-medium text-gray-900">099 60 55 55</span></li>
      <li>- Բանկի Ֆեյսբուքյան և Ինստագրամյան էջեր</li>
      <li>- Evocabank.am կայքում օնլայն չատ</li>
    </ul>
  </div>

  <p className="text-center pt-2">
    Հաշվի առնելով հարցումների մեծ քանակը և կոնտակտային կենտրոնի գերծանրաբեռնվածությունը՝ խնդրում ենք ակնկալել զանգերի և հարցումների սպասելաժամանակի փոքր-ինչ երկարաձգում։ Մենք ամեն ինչ անում ենք Ձեր հարցումներին հնարավորինս արագ պատասխանելու համար:
  </p>

  <p className="font-medium text-purple-700 text-center pt-2">
    Մաղթում ենք բոլորին առողջություն:
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