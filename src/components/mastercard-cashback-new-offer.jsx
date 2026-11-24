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
            <span className="text-gray-900 font-medium truncate max-w-xs">Կանանց տոնին ընդառաջ նոր ակցիա Mastercard-ի հետ



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
Կանանց տոնին ընդառաջ նոր ակցիա Mastercard-ի հետ
    </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Վճարիր քո Evoca Mastercard World Digital քարտով և ստացիր 20% cashback։ Ակցիան գործում է 10-ից ավելի խանութ սրահներում, ռեստորաններում և ոչ միայն։
</p>
            <div className="text-sm font-semibold text-gray-400">
04.03.2024
</div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17095305374369/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

         
  <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-bold text-gray-900">
    Ունե՞ս մեր նոր <strong className="text-purple-800 font-bold">Evoca Mastercard World Digital</strong> քարտը:[cite: 14]
  </p>

  <p>
    Եթե ունես, ուրեմն այս հնարավորությունը քոնն է, քանի որ նոր թվային քարտն իր հետ բերել է նոր առաջարկներ:[cite: 14]
  </p>

  <p>
    Այս անգամ, կանանց տոնին ընդառաջ, գործում է <strong className="text-purple-800 font-bold">20% cashback</strong> 10-ից ավելի խանութ սրահներում, ռեստորաններում ևոչ միայն:[cite: 14]
  </p>

  <p>
    Ե՞րբ, ո՞ր խանութներում, ինչպե՞ս… դե արի հերթով պատասխանենք քո հարցերին:[cite: 14]
  </p>

  <p className="pt-2 border-t border-purple-50">
    Մինչ դու կարդում ես այս նորությունը, մենք տալիս ենք ակցիայի մեկնարկը: Դու կարող ես օգտվել ներքևում նշված մեր գործընկերների ծառայություններից, կատարել գնումներ և ստանալ <strong className="text-purple-800 font-bold">20% cashback</strong>:[cite: 14]
  </p>

  <ul className="list-disc pl-6 space-y-1.5 font-medium text-gray-800">
    <li>AVANTA և Իմպլանտ[cite: 14]</li>
    <li>TIME[cite: 14]</li>
    <li>MINISO[cite: 14]</li>
    <li>REEBOK[cite: 14]</li>
    <li>SWAROVSKI[cite: 14]</li>
    <li>PANDORA[cite: 14]</li>
    <li>HERMOSA[cite: 14]</li>
    <li>BROW BAR[cite: 14]</li>
    <li>CRAFTSMENS[cite: 14]</li>
    <li>LUMIERE OPTIC[cite: 14]</li>
    <li>EGOISTE[cite: 14]</li>
    <li>CHARLES CAFE AND RESTAURANT[cite: 14]</li>
    <li>LA PIAZZA[cite: 14]</li>
    <li>MONAMIE[cite: 14]</li>
  </ul>

  <p className="pt-2">
    Իսկ <strong className="text-purple-800 font-bold">cashback</strong>-ը ստանալու համար քեզ մնում է մի պարզ քայլ. վերցնել սմարթֆոնը, ներբեռնել <strong className="text-purple-800 font-bold">EvocaTOUCH</strong> հավելվածը և բացել <strong className="text-purple-800 font-bold">Evoca Mastercard World Digital</strong> քարտը: Քարտը կակտիվանա րոպեների ընթացքում և քո առաջ կբացվի <strong className="text-purple-800 font-bold">Evoca</strong> թվային աշխարհը, որտեղ հնարավորություններն անսահմանափակ են:[cite: 14]
  </p>

  <p>
    Բանանայց, ամենակարևորի մասին. ակցիայի ողջ ընթացքում <strong className="text-purple-800 font-bold">Evoca Mastercard World Digital</strong> քարտը կարող ես ձեռք բերել <strong>անվճար</strong>:[cite: 14]
  </p>

  <p>
    <strong className="text-purple-800 font-bold">Evoca</strong> թվային քարտը ձեռք բերելուց հետո ընդամենը հարկավոր է կատարել առնվազն <strong>10,000 դրամի</strong> գնումներ վերևում նշված մեր գործընկերների ցանկից որևէ խանութ սրահում, ռեստորանում կամ սպասարկման կետում, իսկ ակցիայի ավարտից հետո՝ 10 օրվա ընթացքում, Բանկը կհաշվարկի և կտրամադրի քո ընդհանուր գնումների <strong className="text-purple-800 font-bold">20% cashback</strong>-ը, բայց ոչ ավել, քան <strong>50,000 դրամը</strong>:[cite: 14]
  </p>

  <p className="font-semibold text-gray-900 pt-2">
    Առաջարկը գործում է մինչև <strong className="text-purple-800">04.05.2024</strong>-ը:[cite: 14]
  </p>

  <p className="pt-2 border-t border-purple-50">
    Եթե դեռ չունես մեր նոր <strong className="text-purple-800 font-bold">Evoca Mastercard World Digital</strong> քարտը, շտապիր ձեռք բերել այն և օգտվել մեր պարբերաբար տրամադրվող առաջարկներից: Թվային քարտի մանրամասներին կարող ես ծանոթանալ <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>:[cite: 14]
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