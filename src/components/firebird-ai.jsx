import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function FirebirdAiNews() {
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
            <span className="text-gray-900 font-medium truncate max-w-xs">Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Բանկային
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Evocabank-ի համաֆինանսավորմամբ Հրազդանում գործարկվել է Firebird AI-ի տարածաշրջանի ամենամեծ «ԱԲ գործարանը»:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              11.08.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17864472573391/780x585.png" 
                alt="Firebird AI factory in Hrazdan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Հիմնական տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          
          <p>
            Այս տարվա մարտին <strong className="text-purple-700 font-semibold">Evocabank</strong>-ը 5 այլ ֆինանսական կառույցների հետ միացավ Հայաստանում արհեստական բանականության ենթակառուցվածքային մեգանախագծերից մեկի՝ <em className="text-purple-700 font-medium">Firebird AI-ի «ԱԲ գործարանի» 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը</em>:
          </p>

          <p>
            Այօր՝ ընդամենը մի քանի ամիս անց, արդեն տեսնում ենք ֆինանսավորման արդյունքը. Հրազդանում պաշտոնապես բացվեց ԱԲ գործարանը՝ դառնալով տարածաշրջանի ամենամեծ արհեստական բանականության կենտրոններից մեկը:
          </p>

          <p>
            Firebird AI-ի գործարանը նախատեսված է Հայաստանում արհեստական բանականության և բարձր տեխնոլոգիաների զարգացման նոր հնարավորություններ ստեղծելու համար՝ տրամադրելով մեծ քանակությամբ ռեսուրսներ հետազոտական հաստատություններին, տեխնոլոգիական ընկերություններին և բիզնեսներին: Ծրագրի 2-րդ փուլը գործարկելուց հետո ներդրումների ծավալը կկազմի մոտ 4 մլրդ դոլար:
          </p>

          <p>
            <strong className="text-purple-700 font-semibold">Evocabank</strong>-ը շարունակում է աջակցել Հայաստանի տնտեսության և տեխնոլոգիական ոլորտի զարգացմանն ուղղված խոշոր նախագծերին՝ մասնակցելով այն նախաձեռնություններին, որոնք նոր հնարավորություններ են ստեղծում բիզնեսի, գիտության ու նորարարության համար:
          </p>

        </div>

        {/* Այլ նորություններ բաժին */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Նորություն 1 (Գործարքների արգելափակում) */}
            <Link 
              to="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17908437653512/428x321.png" 
                    alt="Block transactions" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                05.10.2026
              </div>
            </Link>

            {/* Նորություն 2 (Moody's վարկանիշ) */}
            <Link 
              to="/news/block-transactions" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" 
                    alt="Moody's rating" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Գործարքների արգելափակում 1 կոճակով
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                01.06.2026
              </div>
            </Link>

            {/* Նորություն 3 (Green Rock) */}
            <Link 
              to="/news/moodys-rating" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png" 
                    alt="Evocabank and Green Rock" 
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

          </div>
        </div>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}