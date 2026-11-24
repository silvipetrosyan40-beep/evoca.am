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
            <span className="text-gray-900 font-medium truncate max-w-xs">15% զեղչ KinoPark-ում` Evoca Visa քարտապանների համար


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
15% զեղչ KinoPark-ում` Evoca Visa քարտապանների համար
          </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Վայելիր քո սիրելի ֆիլմը KinoPark-ում 15% զեղչով՝ վճարելով օնլայն՝ քո Evoca Visa քարտով։


            </p>
            <div className="text-sm font-semibold text-gray-400">
19.02.2025
  </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17399680512009/780x585.jpg" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-bold text-purple-700 text-lg sm:text-xl">
    🍿 🎬 <strong className="text-purple-700 font-bold">Evoca Visa քարտով</strong> կինո գնալն էլ ավելի հաճելի է. 15% զեղչ KinoPark-ում[cite: 17]
  </p>

  <p>
    Ուրախ լուր բոլոր կինոյի սիրահարների համար՝ <strong className="font-bold text-gray-900">KinoPark-ում կինոդիտումները հիմա ավելի շահավետ են</strong>։ Yerevan Mall հավելվածի միջոցով վճարիր <strong className="text-purple-700 font-bold">Evoca Visa քարտով</strong> օնլայն քո սիրելի կինոյի համար և ստացիր <strong className="font-bold text-gray-900">15% զեղչ</strong>[cite: 17]։
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-2">
    🎬 Ինչո՞ւ բաց չթողնել այս առաջարկը
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>✅ 15% զեղչ KinoPark-ի բոլոր ֆիլմերի տոմսերի համար[cite: 17]</li>
    <li>✅ Հեշտ ու արագ գնում՝ ընդամենը մի քանի click-ով[cite: 17]</li>
    <li>✅ Հիանալի հնարավորություն վայելելու երեկոները՝ հետաքրքիր ֆիլմեր դիտելով[cite: 17]</li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Ինչպե՞ս օգտվել առաջարկից.
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>📱 Ներբեռնիր Yerevan Mall հավելվածը → <a href="#" className="text-purple-700 font-bold underline hover:text-purple-950 transition-colors">Ներբեռնել այստեղ</a>[cite: 17]</li>
    <li>🎬 Ընտրիր քո սիրելի ֆիլմը և ցուցադրման ժամը[cite: 17]</li>
    <li>💳 Վճարիր Evoca Visa քարտով[cite: 17]</li>
    <li>🎉 Ստացիր 15% զեղչ անմիջապես[cite: 17]</li>
  </ul>

  <p className="pt-2">
    👉 Ակցիան գործում է մինչև <strong className="font-bold text-gray-900">2025 թվականի դեկտեմբերի 17-ը</strong> ներառյալ բոլոր <strong className="text-purple-700 font-bold">Evoca Visa քարտապանների</strong> համար[cite: 17]։
  </p>

  <p className="pt-2">
    📌 Մանրամասներ՝ <a href="https://cis.visa.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold underline hover:text-purple-950 transition-colors">cis.visa.com</a>[cite: 17]
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