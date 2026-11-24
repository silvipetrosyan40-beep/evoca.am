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
            <span className="text-gray-900 font-medium truncate max-w-xs"> Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար
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
Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար
          </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Evoca Visa պրեմիում քարտապա՜ն, այս բացառիկ առաջարկները հատուկ քեզ համար են, բաց չթողնես։

            </p>
            <div className="text-sm font-semibold text-gray-400">
12.09.2025
   </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17576778780897/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Ռեստորան և սրճարան, նորաձևություն, գեղեցկություն և խնամք, հյուրանոց և ժամանց…
  </p>

  <p>
    Առաջարկները շատ-շատ են. իսկ օգտվելու համար հարկավոր է միայն մեկ բան՝ <strong className="text-purple-700 font-bold">Evoca Visa Infinite քարտ</strong>[cite: 16]։ Ունե՞ս, ուրեմն շտապիր ծանոթանալ մեր առաջարկներին։ Իսկ եթե չունես, ձեռք բերելու ժամանակն է։ Շարունակիր կարդալ, ու մենք կասենք, թե ինչպես։
  </p>

  <h3 className="text-xl sm:text-2xl font-bold text-purple-700 pt-2">
    Ռեստորաններ և սրճարաններ
  </h3>

  <p>
    Մինչև դեկտեմբերի 31-ը վճարիր <strong className="text-purple-700 font-bold">Evoca Visa Infinite</strong> քարտով և ստացիր՝[cite: 16]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong className="text-purple-700 font-bold">Square One</strong> – 15% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Cinnabon Armenia</strong> – 15% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Segafredo Armenia</strong> – 15% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Paul</strong> – 10% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">The Lodge</strong> – 10% զեղչ[cite: 16]</li>
  </ul>

  <p>
    <strong className="text-purple-700 font-bold">Hamadam</strong> - 10%՝ զեղչ սեղանը Visa Concierge չատբոտի միջոցով ամրագրելու դեպքում։ 15% զեղչ՝ խմբային և հատուկ միջոցառումների ամրագրման դեպքում (առաջարկը գործում է մինչև դեկտեմբերի 30-ը)[cite: 16]։
  </p>

  <p>
    Առաջարկից օգտվելու համար անհրաժեշտ է ակտիվացնել չատբոտը <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">հետևյալ հղումով</a>, այնուհետև գլխավոր մենյուում սեղմել Concierge կոճակը և առցանց օգնականի միջոցով կատարել սեղանի ամրագրում՝ տրամադրելով հավելյալ տեղեկություն օրվա և ժամի մասին[cite: 16]։
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Dolmana</strong> – 5% զեղչ[cite: 16]
  </p>

  <p>
    Առաջարկից օգտվելու համար հարկավոր է ամրագրել սեղան Visa Concierge չատբոտի միջոցով և վճարել Evoca Visa Infinite քարտով (առաջարկը գործում է մինչև նոյեմբերի 22-ը)[cite: 16]։
  </p>

  <h3 className="text-xl sm:text-2xl font-bold text-purple-700 pt-4">
    Նորաձևություն
  </h3>

  <p>
    Մինչև դեկտեմբերի 31-ը վճարիր <strong className="text-purple-700 font-bold">Evoca Visa Infinite</strong> քարտով և ստացիր՝[cite: 16]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong className="text-purple-700 font-bold">Diana</strong> – 20% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Cole Haan</strong> – 16% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Jack & Jones</strong> – 16% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Levi’s</strong> – 16% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">New Balance</strong> – 16% զեղչ[cite: 16]</li>
    <li><strong className="text-purple-700 font-bold">Puma</strong> – 16% զեղչ[cite: 16]</li>
  </ul>

  <h3 className="text-xl sm:text-2xl font-bold text-purple-700 pt-4">
    Գեղեցկություն և խնամք
  </h3>

  <p>
    Մինչև դեկտեմբերի 31-ը վճարիր <strong className="text-purple-700 font-bold">Evoca Visa Infinite</strong> քարտով և ստացիր՝[cite: 16]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong className="text-purple-700 font-bold">AKG More Than A Pharmacy</strong> - 10% զեղչ, ստանալու համար հարկավոր է տրամադրել WOPAKG պրոմոկոդը[cite: 16, 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">The Body Shop</strong> - 10% զեղչ, ստանալու համար հարկավոր է տրամադրել WOPTBS պրոմոկոդը[cite: 17]
    </li>
  </ul>

  <p>
    <strong className="text-purple-700 font-bold">Sirun Ankyun</strong> - վաուչեր քո հաջորդ գնումների համար[cite: 17]
  </p>
  <p>
    Վաուչերի գումարը կախված է քո կատարած գնումների չափից[cite: 17]՝
  </p>
  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
    <li>50,000 դրամ գնումների դեպքում տրամադրվում է վաուչեր՝ 5,000 դրամի չափով[cite: 17]</li>
    <li>70,000 դրամ գնումների դեպքում տրամադրվում է վաուչեր՝ 7,000 դրամի չափով[cite: 17]</li>
  </ol>

  <h3 className="text-xl sm:text-2xl font-bold text-purple-700 pt-4">
    Հյուրանոց և ժամանց
  </h3>

  <p>
    Մինչև դեկտեմբերի 31-ը վճարիր <strong className="text-purple-700 font-bold">Evoca Visa Infinite</strong> քարտով և ստացիր՝[cite: 17]
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Dilijazz</strong> – արտոնություններ[cite: 17]
  </p>
  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
    <li>Վաղաժամ check-in, մինչև 4 ժամ՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Ուշ check-out, մինչև 4 ժամ՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Անվճար սենյակի դասի բարձրացում հյուրանոցում՝ հասանելիության դեպքում[cite: 17]</li>
  </ol>

  <p>
    <strong className="text-purple-700 font-bold">Apricot</strong> – արտոնություններ[cite: 17]
  </p>
  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
    <li>Վաղաժամ check-in, մինչև 4 ժամ՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Ուշ check-out, մինչև 4 ժամ՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Անվճար սենյակի դասի բարձրացում հյուրանոցում՝ հասանելիության դեպքում[cite: 17]</li>
  </ol>

  <p>
    <strong className="text-purple-700 font-bold">Apaga Resort</strong> – արտոնություններ[cite: 17]
  </p>
  <p>
    Սենյակ ամրագրելու դեպքում՝ նվեր Darman ապրանքանիշի բուսական թեյերի հավաքածու և ձեռագործ շոկոլադ[cite: 17]։
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Concept Hotel by COAF</strong> - 5% զեղչ՝ սենյակ ամրագրելու դեպքում և այլ արտոնություններ[cite: 17]՝
  </p>
  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
    <li>Վաղաժամ check-in՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Ուշ check-out՝ հասանելիության դեպքում[cite: 17]</li>
    <li>Անվճար սենյակի դասի բարձրացում հյուրանոցում՝ հասանելիության դեպքում[cite: 17]</li>
  </ol>

  <p className="text-xs text-gray-500 italic">
    Առաջարկը գործում է մինչև սեպտեմբերի 16-ը[cite: 17]։
  </p>

  <p>
    <strong className="text-purple-700 font-bold">ImToon</strong> - 5% զեղչ[cite: 17]
  </p>
  <p>
    Առաջարկից օգտվելու համար հարկավոր է ամրագրել սեղան Visa Concierge չատբոտի միջոցով և վճարել Evoca Visa Infinite քարտով։ Չատբոտը հնարավոր է ակտիվացնել <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">հետևյալ հղումով</a> (առաջարկը գործում է մինչև նոյեմբերի 22-ը)[cite: 17]։
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Yell Extreme Park</strong> – արտոնություններ[cite: 17]
  </p>
  <p>
    «Zip Line» տոմսը «Special Adventure Pass» տոմսով թարմացնելու հնարավորություն[cite: 17]։
  </p>
  <p>
    «Special Adventure Pass»-ը ներառում է՝[cite: 17]
  </p>
  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
    <li>Թռիչք զիփլայնով</li>
    <li>Ropeway պարկ</li>
    <li>Ֆերաստա</li>
    <li>10 րոպե ձիավարություն արծնայում</li>
  </ol>

  <p className="italic font-medium text-gray-900 pt-2">
    Ուշադրություն. զեղչերը չեն տարածվում հատուկ առաջարկների կամ զեղչերի վրա։
  </p>

  <p>
    Լրացուցիչ տեղեկությունների համար կարող եես այցելել <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">cis.visa.com</a>։
  </p>

  <p>
    Իսկ եթե դեռ չունես <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">Evoca Visa Infinite քարտ</a>, շտապիր ծանոթանալ և պատվիրել այն հենց հիմա։
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