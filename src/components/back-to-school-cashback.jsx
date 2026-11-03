import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function BackToSchool() {
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
            <span className="text-gray-900 font-medium truncate max-w-xs">Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով</span>
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
              Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Մինչև սեպտեմբերի 15-ը վճարիր Evoca Mastercard-ով ակցիայի մասնակից խանութներում ու գրախանութներում ու ստացիր մինչև 23% cashback:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              21.08.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17873217684586/780x585.png" 
                alt="Back to School - Evoca Mastercard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Հիմնական տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p className="font-medium text-gray-800">
            Նոր տետրերի հոտը, դեռ չգրված առաջին էջերը, գունավոր գրիչների ընտրությունը, այն նոր պայուսակը, որի մեջ գեղեցիկ դասավորում են նոր գնված իրերը:
          </p>

          <p className="text-gray-900 font-semibold text-lg sm:text-xl">
            Մինչև սեպտեմբերի 15-ը կատարիր գնումներ ակցիայի մասնակից խանութներում և գրախանութներում, պարզապես վճարիր <span className="text-purple-700 font-bold">Evoca Mastercard</span>-ով և գումարի մի մասը կվերադառնա քեզ՝ <span className="text-purple-700 font-bold">մինչև 23% cashback-ի</span> տեսքով:
          </p>

          <div className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Ակցիային մասնակցում են՝</h2>
            <ul className="space-y-3 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span><strong>Miniso</strong>` 20% cashback + 3% cashback EvocaBENEFITS</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span><strong>Epigraph</strong>` 20% cashback</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span><strong>Bookinist</strong>` 20% cashback</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span><strong>Amrak</strong>` 20% cashback</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span><strong>Penbox</strong>` 20% cashback</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Մի քանի կարևոր փաստ՝</h2>
            <ul className="space-y-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5"></span>
                <span>Վճարումը հնարավոր է կատարել ցանկացած <strong>Evoca Mastercard</strong> քարտով։</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5"></span>
                <span><strong>Cashback</strong>-ը տրամադրվում է մեկ հաճախորդի հաշվով (կարող ես գնումներ կատարել քո բոլոր Evoca Mastercard-երով, սակայն cashback-ի ընդհանուր սահմանաչափը չի փոխվում):</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5"></span>
                <span><strong>Cashback</strong>-ի առավելագույն չափը՝ <strong>20,000 դրամ</strong>։</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5"></span>
                <span><strong>Cashback</strong>-ը կտրամադրվի ակցիայի ավարտից հետո՝ առավելագույնը <strong>20 աշխատանքային օրվա ընթացքում</strong>։</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <p className="text-lg font-medium text-gray-900">
              Ցուցակդ պատրաստ է, իսկ <strong>Evoca Mastercard</strong>-ը: Դեռ չունե՞ս:
            </p>
            <p className="text-gray-600">
              Շտապիր պատվիրել <Link to="/card" className="text-purple-700 font-bold underline hover:text-purple-900">քարտը</Link> հիմա և օգտվել <span className="text-purple-700 font-bold">մինչև 23% cashback-ից</span>:
            </p>
          </div>
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