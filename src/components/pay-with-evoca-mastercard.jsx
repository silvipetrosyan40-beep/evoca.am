import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function AdidasNews() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/all-news"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-colors font-medium text-sm w-fit"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>/</span>
            <Link to="/all-news" className="hover:text-gray-900 transition-colors">Նորություններ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Պրոդուկտներ</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը


</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
             <Link 
  to="/news/products" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-fuchsia-500 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Պրոդուկտներ
  </span>
</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը
          </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Կատարիր անկանխիկ վճարումներ Evoca Mastercard-ով և շահիր IM LS6 RWD էլեկտրական մեքենա ու այլ մրցանակներ։



            </p>
            <div className="text-sm font-semibold text-gray-400">
01.04.2025
  </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17545729507567/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <h3 className="text-xl sm:text-2xl font-bold text-purple-700">
    Մասնակցիր Evocabank-ի մեծ խաղարկությանը
  </h3>

  <p>
    Սկսվե՜ե՜ց․ խաղարկում ենք նորագույն <strong className="font-bold text-gray-900">IM LS6 RWD էլեկտրական մեքենա, iPhone 16 Pro Max, AirPods Max և Mastercard Digital Gift Card</strong>։ Ընդամենը վճարիր <strong className="text-purple-700 font-bold">Evoca Mastercard</strong>-ով և հնարավորություն ստացիր շահելու մրցանակներից որևէ մեկը[cite: 19]։
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-2">
    Ինչպե՞ս մասնակցել խաղարկությանը
  </h3>

  <p>
    Անհրաժեշտ է <strong className="font-bold text-gray-900">2025թ. ապրիլի 1-ից հոկտեմբերի 31-ն</strong> ընկած ժամանակահատվածում կատարել <strong className="font-bold text-gray-900">1 մլն դրամ և ավելի</strong> անկանխիկ վճարումներ Evocabank-ի <strong className="text-purple-700 font-bold">Mastercard ցանկացած քարտով</strong>՝[cite: 19]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
    <li>Mastercard Standard,[cite: 19]</li>
    <li>Mastercard Gold,[cite: 19]</li>
    <li>Mastercard Digital,[cite: 19]</li>
    <li>Mastercard Digital Gift Card,[cite: 19]</li>
    <li>Evoca Travel Card:[cite: 19]</li>
  </ul>

  <p className="pt-2">
    Քարտի վերջին <strong className="font-bold text-gray-900">6 թիվը</strong> կդառնա քո մասնակցության կոդը[cite: 19]։
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Մրցանակներ
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Գլխավոր մրցանակ՝ <strong className="font-bold text-gray-900">IM LS6 RWD (2024թ., գույնը՝ սև) էլեկտրական մեքենա</strong>[cite: 19]</li>
    <li><strong className="font-bold text-gray-900">5 հատ iPhone 16 Pro Max</strong>[cite: 19]</li>
    <li><strong className="font-bold text-gray-900">5 հատ AirPods Max</strong>[cite: 19]</li>
    <li><strong className="font-bold text-gray-900">10 հատ 50,000 դրամ</strong> արժողությամբ Mastercard Digital Gift Card[cite: 19]</li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Կարևոր
  </h3>

  <ul className="list-disc pl-6 space-y-3 text-gray-700">
    <li>
      Անկանխիկ վճարումներ են համարվում <strong className="font-bold text-gray-900">անկանխիկ բոլոր գնումները</strong>՝ քարտով գնումներ Հայաստանում, արտասահմանում, կայքերում, սրճարաններում և այլն[cite: 19]։
    </li>
    <li>
      Գնման ժամանակ կարելի է օգտագործել ինչպես ֆիզիկական քարտը, այնպես էլ <strong className="font-bold text-gray-900">Apple Pay-ին և Google Pay-ին</strong> կցված Evoca Mastercard-երը[cite: 19]։
    </li>
    <li>
      <strong className="font-bold text-gray-900">Բացառություն</strong> են որոշ վճարային գործարքները, որոնց ցանկին կարող եք ծանոթանալ <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 19]։
    </li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Ե՞րբ և ինչպե՞ս տեղի կունենա խաղարկությունը
  </h3>

  <p>
    Խաղարկությունը տեղի կունենա <strong className="font-bold text-gray-900">նոյեմբերի 29-ին Evocabank-ի Facebook-յան էջի ուղիղ եթերում</strong>, որտեղ պատահականության սկզբունքով կընտրվեն հաղթողները[cite: 19]։
  </p>

  <p>
    Մասնակցի՛ր ու բաց մի՛ թող հնարավորությունդ՝ շահելու նոր էլեկտրական մեքենա և այլ արժեքավոր նվերներ[cite: 19]։
  </p>

  <p className="pt-2">
    Խաղարկության մանրամասներն՝ <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 19]։
  </p>

  <p>
    Իսկ եթե դեռ չունես <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">Evoca Mastercard քարտ</a>, շտապիր պատվիրել քո նախընտրած քարտը հենց հիմա[cite: 19]։
  </p>
</article>
      {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/back-to-school-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17873217684586/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.08.2026</span>
              </div>
            </Link>

          </div>
        </div>
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}