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
                                                        <span className="text-gray-900 font-semibold">V-POS տերմինալ</span>
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
V-POS տերմինալ
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Evocabank-ը բոլոր իրավաբանական անձանց և անհատ ձեռնարկատերերին առաջարկում է V-POS տերմինալներ:
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
12.06.2020
    </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="https://www.evoca.am/images-cache/news/1/16120953971318/780x585.jpg" 
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
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ն ապրանքների և ծառայությունների վաճառքով զբաղվող բոլոր ընկերություններին առաջարկում է <strong className="text-purple-700 font-bold">V-POS (virtual point of sale)</strong> վիրտուալ վճարային համակարգը[cite: 15]:
  </p>

  <p>
    Այն հարմարավետ, ապահով և հեշտ լուծում է օնլայն առևտրով զբաղվող բիզնեսների համար[cite: 15]:
  </p>

  <p>
    Օնլայն առևտուրը ժամանակակից աշխարհում առևտրի ամենաարագ զարգացող ճյուղերից է[cite: 15]: Ունենալով ժամանակակից պահանջներին բավարարող կայք կամ հավելված՝ Դուք կարող եք վաճառել ապրանքներ և ծառայություններ և ստանալ դրանց դիմաց վճարումներն օնլայն վճարային համակարգերի միջոցով[cite: 15]: Արանգ և տեղում օնլայն վճարումներ կատարելն այսօր կարևոր նախապայման է բոլոր գնորդների համար[cite: 15]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը[cite: 15]: Այն հնարավորություն կտա Ձեզ խուսափել լրացուցիչ ծրագրային ծախսերից, սերտիֆիկացումից և հետագա ծրագրային ապահովումից[cite: 15]:
  </p>

  <p>
    Ձեր գնորդները կկարողանան գնումներ կատարել Ձեր կայքից ու վճարել դրանց համար իրենց միջազգային <strong className="font-bold text-gray-900">VISA, MasterCard, Maestro</strong> և տեղական <strong className="font-bold text-gray-900">ArCa</strong> վճարային քարտերով[cite: 15]:
  </p>

  <p>
    V-POS-ը հասանելի կլինի ինչպես <strong className="text-purple-700 font-bold">Ձեր կայքում</strong>, այնպես էլ՝ <strong className="text-purple-700 font-bold">մոբայլ հավելվածում</strong>[cite: 15]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը հարմար լուծումներ է առաջարկում ինչպես գործող կայքերի համար, այնպես էլ այն բիզնեսներին, որոնք դեռ չունեն կայք[cite: 15]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝[cite: 15]
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>Օնլայն վաճառքների շնորհիվ կաճեն Ձեր եկամուտները[cite: 15],</li>
    <li><strong className="text-purple-700 font-bold">Evocabank</strong>-ը V-POS-ով կատարված վաճառքներից կգանձի նվազագույն միջնորդավճարներ՝ հատուկ Ձեր բիզնեսի համար[cite: 15],</li>
    <li>Վճարումներն անվտանգ են, գործում են 3D Secure և Secure Code անվտանգության համակարգերը[cite: 15],</li>
    <li>Վճարման գործընթացը պարզ է, Ձեր գնորդները վճարում կկատարեն 1 քայլով[cite: 15],</li>
    <li>Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի մասնագետների կողմից[cite: 15],</li>
    <li>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին[cite: 15]:</li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Ինչպե՞ս տեղադրել Evocabank-ի V-POS տերմինալ՝[cite: 15]
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      V-POS տերմինալ տեղադրելու մասին ավելի մանրամասն տեղեկատվություն ստանալու համար Ձեր կոնտակտային տվյալներն ուղարկեք <a href="mailto:vpos@evocabank.am" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">vpos@evocabank.am</a> էլեկտրոնային հասցեին[cite: 15]:
    </li>
    <li>
      Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը[cite: 15]:
    </li>
    <li>
      Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում ամենակարճ ժամկետներում[cite: 15]:
    </li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Ի՞նչ տեսք ունի Evocabank-ի V-POS տերմինալը՝[cite: 16]
  </h3>

  {/* V-POS Տերմինալի նկար (համաչափ փոքր չափսով) */}
  <div className="my-6 flex justify-center">
    <div className="max-w-md w-full overflow-hidden rounded-2xl border border-purple-100 shadow-sm bg-gray-50 p-2">
      <img 
        src="https://www.evoca.am/file_manager/Evocabank-vpos.jpg" 
        alt="Evocabank V-POS տերմինալի տեսքը" 
        className="w-full h-auto object-contain rounded-xl hover:scale-102 transition-transform duration-300"
      />
    </div>
  </div>

  <p className="font-bold text-purple-700 pt-2 text-center sm:text-left">
    Դեպի նոր իրականություն, դեպի Ձեր բիզնեսի թվային ապագա:[cite: 16]
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