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
                                                        <span className="text-gray-900 font-semibold">Evocabank-ն անդամակցել է ՖԻՆԱՐՄ Ֆինանսական շուկայի մասնակիցների ասոցիացիային</span>
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
Evocabank-ն անդամակցել է ՖԻՆԱՐՄ Ֆինանսական շուկայի մասնակիցների ասոցիացիային
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Ասոցիացիայի նպատակներից է՝ խթանել ֆինանսական շուկայում ժամանակակից նորարարական լուծումների, նոր գործիքների ու մեխանիզմների ներդրումը:
    </p>

    <div className="text-gray-500 text-sm font-medium pt-2">
13.03.2021
        </div>
  </div>

  {/* Աջ կողմ՝ Նկար */}
  <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
    <img 
      src="	https://www.evoca.am/images-cache/news/1/16170289183574/780x585.jpg" 
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
    <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">ՖԻՆԱՐՄ</a> ասոցիացիայի անդամ են հայաստանյան առաջատար առևտրային բանկեր, ներդրումային ընկերություններ և ինստիտուցիոնալ այլ ներդրողներ[cite: 19]:
  </p>

  <p>
    Վարչության նախագահ Կարեն Եղիազարյանը նշեց, որ ֆինանսական շուկայի մասնակիցների <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">ՖԻՆԱՐՄ</a> ասոցիացիային <strong className="text-purple-700 font-bold">Evocabank</strong>-ի անդամակցությունը նախانաչ կոչված է նպաստելու հայաստանյան ֆինանսական շուկայում թվային և նորարարական լուծումների ներդրմանն ու խթանելու շուկայի զարգացումը[cite: 19]: «Կարծում ենք, որ <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">ՖԻՆԱՐՄ</a> ասոցիացիայի շրջանակներում զգալիորեն կնպաստենք ժամանակակից և արդիական գործիքակազմով ֆինանսական շուկայի ձևավորմանը Հայաստանում, որից էապես կշահեն և՛ ներդրողները, և՛ շուկայի այլ մասնակիցները»[cite: 19]: Կարեն Եղիազարյանը հիշեցրեց, որ օրեր առաջ <strong className="text-purple-700 font-bold">Evocabank</strong>-ը թողարկել և ժամերին ընթացքում տեղաբաշխել է իր պարտատոմսերի առաջին տրանշը, որոնք, առաջին անգամ հայաստանյան ֆինանսական համակարգում, հնարավոր է եղել գնել նաև online եղանակով[cite: 19]: Բանկի պարտատոմսերի երկրորդ տրանշը կթողարկվի մարտի 23-ին, որը նույնպես հնարավոր կլինի buy online տարբերակով Բանկի <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">EvocaTOUCH</a> հավելվածի միջոցով[cite: 19]:
  </p>

  <p>
    <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">ՖԻՆԱՐՄ</a> ասոցիացիայի տնօրեն Կարեն Զաքարյանի խոսքով. «ՖԻՆԱՐՄ-ն այսօր Հայաստանի ամենակայացած և նպատակասլաց բիզնես ասոցիացիաներից մեկն է, որն իր գործունեության ընդամենը երկու տարիների ընթացքում հասցրել է բեկումնային փոփոխություններ նախաձեռնել ֆինանսական շուկայում[cite: 19]: Եվ պատահական չէ, որ <strong className="text-purple-700 font-bold">Evocabank</strong>-ի նման նորարարական և դինամիկ բանկն իր պարտատոմսերի առաջին տրանշին զուգահեռ որոշել է անդամակցել մեզ և համատեղել ջանքերը ֆինանսական շուկան որակապես նոր մակարդակի բարձրացնելու ուղղությամբ[cite: 19]: Ընդ որում, <strong className="text-purple-700 font-bold">Evocabank</strong>-ի մուտքը պարտատոմսերի շուկա նույնպես նորարարական լուծումով էր, ինչպես արդեն սովոր են տեսնել այս բանկի մնացած պրոդուկտների դեպքում»[cite: 19]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը հանդիսանում է նաև <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">Հայաստանի Բանկերի Միության</a> (ՀԲՄ) անդամ[cite: 19]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը Հայաստանի առաջին և միակ mobile-first բանկն է, որը մատուցում է արագ, պարզ ու նորարար ծառայություններ և առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ[cite: 19]:
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evocabank</strong>-ը 4-րդ տարին անընդմեջ ճանաչվում է <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">Լավագույն թվային բանկը Հայաստանում</a> ըստ հեղինակավոր <a href="#" className="text-purple-700 underline font-medium hover:text-purple-950 transition-colors">Global Finance</a> ամսագրի[cite: 19]:
  </p>

  {/* Նկարների ցանց (մասշտաբավորված, ավելի փոքր ֆրեյմով) */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl border border-purple-100 shadow-sm bg-gray-50">
      <img 
        src="https://www.evoca.am/images-cache/news/1/16162276402626/428x321.jpg" 
        alt="Evocabank և ՖԻՆԱՐՄ համագործակցություն" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl border border-purple-100 shadow-sm bg-gray-50">
      <img 
        src="https://www.evoca.am/images-cache/news/1/16162276402643/428x321.jpg" 
        alt="Ստորագրման արարողություն" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="max-w-xl mx-auto overflow-hidden rounded-2xl border border-purple-100 shadow-sm bg-gray-50">
      <img 
        src="https://www.evoca.am/images-cache/news/1/16162276402684/428x321.jpg" 
        alt="Ղեկավարների հանդիպում" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
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