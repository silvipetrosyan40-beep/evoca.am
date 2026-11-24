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
  <span className="text-gray-900 font-semibold">Evoca-ն ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից</span>
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
            Evoca-ն ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Շվեյցարական ներդրումային կազմակերպությունից ստացած վարկային միջոցներն ուղղվելու են Հայաստանում միկրո, փոքր և միջին բիզնեսների ֆինանսավորմանը:


    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
03.10.2024
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/17279603303089/780x585.png" 
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
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը Symbiotics S.A. շվեյցարական ներդրումային ընկերության միջոցով ներգրավել է <strong className="font-bold text-gray-900">10.35 մլն ԱՄՆ դոլարին համարժեք դրամ</strong>: Գումարը տրամադրվել է լוקսեմբուրգյան Micro, Small & Medium Enterprises Bonds S.A.-ի՝ Symbiotics Investments-ի կողմից հովանավորվող պարտատոմսերի թողարկման հարթակի կողմից[cite: 18]:
  </p>

  <p>
    Վարկային միջոցներն ուղղվելու են Հայաստանում միկրո, փոքր և միջին բիզնեսների ֆինանսավորմանը: Այս նախաձեռնության նպատակն է շուկայում բարելավել բիզնես միջավայրը՝ խթանելով առողջ մրցակցությունը, որն էլ իր հերթին թիրախային ոլորտում կնպաստի տնտեսական ակտիվությանը[cite: 18]:
  </p>

  <p>
    <strong class="font-bold text-gray-900">Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը</strong> նշեց. «Երեք տարի շարունակ համագործակցելով Symbiotics շվեյցարական ներդրումային ընկերության հետ՝ մենք կարողացել ենք մեծ աջակցություն ցուցաբերել Հայաստանում ՄՓՄՁ հատվածի զարգացմանը: Այս անգամ Evoca-ն Symbiotics-ից ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ, որը կրկին ուղղվելու է Հայաստանում միկրո, փոքր և միջին բիզնեսների ֆինանսավորմանը: Հավատարիմ մնալով Բանկի առաքելությանը՝ մենք մշտապես ստեղծում ենք հնարավորություններ տեղական բիզնեսների համար՝ ընդլայնելու իրենց գործունեությունը, ստեղծելու նոր աշխատատեղեր և եկամտի աղբյուրներ»[cite: 18]:
  </p>

  <p>
    <strong class="font-bold text-gray-900">Symbiotics Investments-ի Կովկասի տարածաշրջանի ղեկավար Ալեքսանդր Ֆանդոն</strong> նշեց. «Վարկային միջոցները տրամադրվել են ՀՀ դրամով, ինչը հազվադեպ առաջարկ է արտասահմանյան ներդրողների շրջանում: Մենք ուրախ ենք, որ այս միջոցները հնարավորություն կտան Evocabank-ին ընդլայնել իր վարկային պորտֆելը տեղական արժույթով»[cite: 18]:
  </p>

  <p className="italic text-gray-600">
    «Кредитные средства предоставлены в армянских драмах, что является редким предложением среди иностранных инвесторов. Мы рады, что эти средства позволят Evocabank расширить его кредитный портфель в местной валюте», — отметил Александр Фандо, руководитель Кавказского региона компании Symbiotics Investments[cite: 18].
  </p>

  <p>
    Symbiotics-ի հետ համագործակցությունը Evoca-ն սկսել է <strong className="font-bold text-gray-900">2022 թվականին</strong>՝ ներգրավելով 7.5 մլն ԱՄՆ դոլարին համարժեք դրամ, իսկ <strong className="font-bold text-gray-900">2023 թվականին</strong> Բանկը ներգրավել է 2 մլն ԱՄՆ դոլարին համարժեք դրամ[cite: 18]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը շարունակաբար համագործակցում է միջազգային կազմակերպությունների հետ՝ ստեղծելով զարգացման բարենպաստ պայմաններ միկրո, փոքր և միջին բիզնեսների համար[cite: 18]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-4">Evocabank-ի մասին</h3>
  <p>
    <em>Լինելով mobile-first բանկ՝</em> Evocabank-ը մատուցում է արագ, պարզ ու նորարար ծառայություններ և առանձնանում տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ: Բանկը 7 տարի անընդմեջ ճանաչվել է <strong className="font-bold text-gray-900">«Լավագույն թվային սպառողական բանկը Հայաստանում»</strong> և 4 տարի անընդմեջ որպես <strong className="font-bold text-gray-900">«Լավագույն ՄՓՄՁ բանկը Հայաստանում»</strong> Global Finance հեղինակավոր ամսագրի կողմից: Բանկը շարունակաբար ներդնում և կիրառում է նորարարություններ՝ առաջարկելով հաճախորդներին նորագույն տեխնոլոգիաների լավագույն լուծումները: Evocabank-ը ՀՀ-ում գրանցված առաջին առևտրային բանկն է՝ 1990թ. և ներկայումս ունի գլխամասային գրասենյակ և 13 մասնաճյուղ[cite: 18]:
  </p>
  <p>
    Վեր կայք՝ <a href="https://www.evoca.am" target="_blank" rel="noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">evoca.am</a>[cite: 18]
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-4">Symbiotics-ի մասին</h3>
  <p>
    Symbiotics-ը ազդեցիկ ներդրումներ կատարելու համար շուկա մուտք գործելու առաջատար հարթակ է, որն ուղղված է զարգացող և սահմանամերձ տնտեսությունների մասնավոր շուկաներին: Կազմակերպությունն առաջարկում է ներդրումների, ակտիվների կառավարման և կապիտալի ստեղծման ու զարգացման ծառայություններ: 2005 թվականից ի վեր Symbiotics Investments-ը նախագծել է և կնքել է 10 միլիարդ ԱՄՆ դոլարի շուրջ 7,900 գործարք 97 երկրների 598 ընկերությունների համար[cite: 18]:
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