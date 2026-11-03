import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function BlockTransactionsNews() {
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
            <span className="text-gray-900 font-medium">Բանկային</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Գործարքների արգելափակում 1 կոճակով</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Բանկային
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Գործարքների արգելափակում 1 կոճակով
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              01.06.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png" 
                alt="Գործարքների արգելափակում 1 կոճակով" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Հիմնական տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          
          <p>
            Այսօր թվային աշխարհում խարդախության փորձերը գնալով ավելի բազմազան են դառնում: Այդ պատճառով <strong className="text-purple-700 font-semibold">EvocaTOUCH</strong> հավելվածում ու <strong className="text-purple-700 font-semibold">EvocaONLINE</strong> համակարգում հասանելի կլինի նոր՝ <em className="text-purple-700">«Գործարքների արգելափակում» գործիքը</em>, որը կօգնի մեր օգտատերերին վերահսկել ու պաշտպանել իրենց հաշիվները:
          </p>

          <p>
            Այն հնարավորություն է տալիս ընդամենը <em className="text-purple-700 font-semibold">մեկ կոճակով</em> ժամանակավորապես արգելափակել առանձին կամ բոլոր օնլայն բանկային ծառայությունները:
          </p>

          <p>
            Եթե կասկածում եք, որ Ձեր տվյալները հայտնվել են երրորդ անձանց մոտ, կարող եք ինքնուրույն, ընդամենը մի քանի վայրկյանում ակտիվացնել արգելափակումը՝ առանց սպասելու կամ զանգահարելու Բանկ:
          </p>

          {/* Արգելափակվող ծառայությունների ցանկ */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              «Գործարքների արգելափակում» գործիքի միջոցով հնարավոր է արգելափակել հետևյալ բանկային ծառայությունները՝
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Փոխանցումներ և Վճարումներ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Կանխիկացման հայտ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Փոխանցում քարտից</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Վարկի բացման հայտ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Վարկային գծի տրամադրման հայտ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Հաշվի բացման հայտ</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-800 font-medium">
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>Քարտի բացման հայտ</span>
              </li>
            </ul>
          </div>

          <p>
            Արգելափակման ընթացքում ընտրված ծառայություններն անհասանելի կլինեն բոլորի համար, այդ թվում՝ Ձեզ:
          </p>

          <p>
            Ծառայությունների ապաարգելափակման համար անհրաժեշտ կլինի այցելել <strong className="text-purple-700">Evoca-ի ցանկացած մասնաճյուղ</strong> և անցնել նույնականացման գործընթաց:
          </p>

          {/* Կարևոր է բլոկ */}
          <div className="bg-purple-50 border border-purple-100 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-purple-800 flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"></span>
              <span>Կարևոր է</span>
            </h3>
            <p className="text-gray-700">
              <em className="text-purple-700 font-semibold">«Գործարքների արգելափակում» գործիքը</em> ստեղծվել է բացառապես Ձեր միջոցների և անձնական տվյալների անվտանգությունն ապահովելու համար: Խորհուրդ ենք տալիս այն չօգտագործել փորձարկման նպատակով, քանի որ արգելափակումից հետո ընտրված ծառայությունները կդառնան անհասանելի մինչև Բանկի մասնաճյուղում դրանց ապաարգելափակումը:
            </p>
          </div>

          <p className="font-semibold text-gray-900 pt-4">
            Ձեր ֆինանսական և անձնական տվյալների անվտանգությունը մեր առաջնահերթություններից է:
          </p>

        </div>

        {/* Այլ նորություններ բաժին */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Նորություն 1 (Moody's վարկանիշ) */}
            <Link 
              to="/news/moodys-rating" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" 
                    alt="Moody's rating" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                18.08.2026
              </div>
            </Link>

            {/* Նորություն 2 (Firebird AI) */}
            <Link 
              to="/news/firebird-ai" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17864472573391/428x321.png" 
                    alt="Firebird AI" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                11.08.2026
              </div>
            </Link>

            {/* Նորություն 3 (Green Rock) */}
            <Link 
              to="/news/green-rock-headquarters" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17854167235525/428x321.png" 
                    alt="Evocabank and Green Rock" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                30.07.2026
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