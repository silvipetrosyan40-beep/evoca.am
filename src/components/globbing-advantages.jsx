import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function GlobbingNews() {
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
            <span className="text-gray-900 font-medium truncate max-w-xs">Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում</span>
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
              Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Մինչև դեկտեմբերի 31-ը Evoca Visa Business քարտապաններն ունեն հատուկ զեղչեր, արտոնյալ սակագներ, անվճար առաքում և այլ առավելություններ Globbing-ում:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              14.05.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/1778751542792/780x585.png" 
                alt="Evoca & Globbing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

{/* Հիմնական տեքստային բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-center pt-4">
          
          <p className="font-medium text-gray-800">
            <strong className="text-purple-900 font-bold">Evoca Visa Business</strong> քարտապանների համար օնլայն գնումներ կատարելու լավագույն ժամանակն է:
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-900">Evoca - Visa - Globbing համատեղ առաջարկ</h2>
            <p className="text-gray-700">
              Ունե՞ս <strong className="text-purple-900 font-bold">Evoca Visa Business քարտ</strong>, սիրո՞ւմ ես օնլայն գնումներ, հիմա լավագույն ժամանակն է:
            </p>
          </div>

          <p>
            Վճարիր <strong className="text-purple-900 font-bold">Evoca Visa Business քարտով</strong> <strong className="text-gray-900 font-bold">Globbing</strong>-ում քո միջազգային առաքումների համար և ստացիր`
          </p>

          <ul className="space-y-3 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left max-w-2xl mx-auto">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
              <span>արտոնյալ սակագներ միջազգային առաքումների համար,</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
              <span>ծանրոցի անվճար առաքում քո նախընտրած հասցեով,</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
              <span>50% զեղչ «Գնիր իմ փոխարեն» ծառայության համար,</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
              <span>անհատական օգնական՝ լոգիստիկայի, առաքումների և ընթացիկ այլ հարցերի համար:</span>
            </li>
          </ul>

          <p className="text-sm sm:text-base text-gray-500 italic">
            Առաջարկը գործում է մինչև <strong className="text-gray-900 font-bold">դեկտեմբերի 30-ը</strong> և հասանելի է բացառապես <strong className="text-purple-900 font-bold">Evoca Visa Business</strong> քարտապանների համար:
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            Պատվիրիր քո <a href="#card" className="text-purple-700 underline font-bold hover:text-purple-900">Evoca Visa Business քարտը</a> հիմա և օգտվիր առաջարկից:
          </p>

        </div>

             {/* Այլ նորություններ բաժին */}
                <div className="space-y-6 pt-12 border-t border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Նորություն 1 */}
                    <Link 
                      to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" 
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                    >
                      <div>
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img 
                            src="	https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" 
                            alt="Wilco card" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                            Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                          </h3>
                        </div>
                      </div>
                      <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                        23.09.2026
                      </div>
                    </Link>
        
                    {/* Նորություն 2 */}
                    <Link 
                      to="/products/evocabank-participates-in-autoshow-2026" 
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                    >
                      <div>
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img 
                            src="		https://www.evoca.am/images-cache/news/1/17902383376936/428x321.png" 
                            alt="Adidas Armenia" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                            Evoca-ն մասնակցում է Armenian Auto Show 2026-ին
                          </h3>
                        </div>
                      </div>
                      <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                        22.09.2026
                      </div>
                    </Link>
        
                    {/* Նորություն 3 */}
                    <Link 
                      to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" 
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                    >
                      <div>
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img 
                            src="		https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" 
                            alt="Globbing" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                            Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                          </h3>
                        </div>
                      </div>
                      <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                        21.09.2026
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