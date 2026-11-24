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
            <span className="text-gray-900 font-medium truncate max-w-xs">Սև ուրբաթը Evoca-ում</span>
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
Սև ուրբաթը Evoca-ում
          </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Ստացիր 20% cashback՝ կատարելով օնլայն և օֆլայն գնումներ քո Evoca Mastercard-ով, իսկ քարտդ պատվիրիր հիմա՝ 50% զեղչով։


            </p>
            <div className="text-sm font-semibold text-gray-400">
19.11.2025      </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17636522117371/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


 <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Black Friday-ի զեղչերից օգտվելու իսկական ժամանակն է[cite: 15]։
  </p>

  <p>
    <strong className="font-bold text-gray-900">Նոյեմբերի 20-30-ը</strong> կատարիր օնլայն և օֆլայն արտասահմանյան գնումներ քո <strong className="text-purple-700 font-bold">Evoca Mastercard քարտով</strong> և ստացիր <strong className="font-bold text-gray-900">20% cashback</strong>[cite: 15]։
  </p>

  <p className="italic">
    Cashback-ի առավելագույն չափը՝ <strong className="font-bold text-gray-900 not-italic">20,000 դրամ</strong>[cite: 15]։
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    Մի քանի խորհուրդ․ որտե՞ղ օգտվել cashback-ից․
  </h3>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong className="font-bold text-gray-900">Օնլայն գնումներ արտասահմանյան կայքերից ու հավելվածներից</strong>[cite: 15]
    </li>
  </ul>
  <p className="pl-6">
    Օրինակ՝ կարող ես պատվիրել բաճկոն Farfetch-ի կայքից, վճարել քո <strong className="text-purple-700 font-bold">Evoca Mastercard</strong>-ով և ստանալ <strong className="font-bold text-gray-900">20% cashback</strong>, կամ Amazon-ից գնել ականջակալ և կրկին ստանալ <strong className="font-bold text-gray-900">20% cashback</strong>[cite: 15]։
  </p>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong className="font-bold text-gray-900">Հանգիստ, տուրեր, հյուրանոցներ</strong>[cite: 15]
    </li>
  </ul>
  <p className="pl-6">
    Քո հանգիստը ևս կարող ես պլանավորել <strong className="font-bold text-gray-900">20% cashback</strong>-ով․ Կարող ես, օրինակ, ամրագրել հյուրանոցի համար Փարիզում, կամ WizzAir կայքից գնել քո հաջորդ թռիչքի տոմսերը[cite: 15]։
  </p>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong className="font-bold text-gray-900">Կինո, թատրոն, թանգարաններ, միջոցառումներ արտասահմանում</strong>[cite: 15]
    </li>
  </ul>
  <p className="pl-6">
    Հաճելի է, չէ՞ օնլայն գնել Louvre-ի տոմսը կամ Coldplay-ի համերգի տոմսը <strong className="font-bold text-gray-900">20% cashback</strong>-ով[cite: 15]։
  </p>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong className="font-bold text-gray-900">Օնլայն ծառայություններ, բաժանորդագրություններ</strong>[cite: 15]
    </li>
  </ul>
  <p className="pl-6">
    Կարող ես գնել Spotify Premium-ի կամ Netflix-ի բաժանորդագրություն և կրկին ստանալ <strong className="font-bold text-gray-900">20% cashback</strong>[cite: 15]։
  </p>

  <p className="pt-2">
    Իսկ <strong className="font-bold text-gray-900">նոյեմբերի 15-ից դեկտեմբերի 31-ը</strong>, պատվիրելով <strong className="text-purple-700 font-bold">Evoca Mastercard քարտերը</strong>, կստանաս <strong className="font-bold text-gray-900">50% զեղչ</strong>[cite: 15]։
  </p>

  <p className="italic text-gray-600">
    Զեղչը կպահպանվի քարտի գործողության ողջ ընթացքում[cite: 15]․
  </p>

  <ul className="list-disc pl-6 space-y-2 text-purple-700 font-bold">
    <li>
      <a href="#" className="underline hover:text-purple-900 transition-colors">Evoca Travel Card</a>
      <span className="text-gray-700 font-normal">՝ <strong className="font-bold text-gray-900">8,000 դրամ</strong> (16,000-ի փոխարեն)</span>[cite: 15]
    </li>
    <li>
      <a href="#" className="underline hover:text-purple-900 transition-colors">Mastercard Gold</a>
      <span className="text-gray-700 font-normal">՝ <strong className="font-bold text-gray-900">7,500 դրամ</strong> (15,000-ի փոխարեն)</span>[cite: 15]
    </li>
    <li>
      <a href="#" className="underline hover:text-purple-900 transition-colors">Mastercard Standard</a>
      <span className="text-gray-700 font-normal">՝ <strong className="font-bold text-gray-900">2,500 դրամ</strong> (5,000-ի փոխարեն)</span>[cite: 15]
    </li>
  </ul>

  <p className="pt-2">
    Ակցիայի մանրամասները կարող ես տեսնել <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 15]։
  </p>

  <p className="italic font-medium pt-2">
    P.S. Չմոռանաս նաև այս առաջարկի մասին պատմել քո «շոպոհոլիկ» ընկերներին[cite: 15]։
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