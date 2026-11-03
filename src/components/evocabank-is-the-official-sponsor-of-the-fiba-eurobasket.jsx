import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocaeurobasketu16() {
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
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-full w-max transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/all-news" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="hover:text-purple-700 transition-colors">
              Կենսակերպ
            </span>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-[250px] sm:max-w-none">
              Evoca-ն՝ EuroBasket U16 մրցաշարի պաշտոնական հովանավոր
            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
              <Link to="/news/lifestyle" className="hover:text-purple-700 transition-colors">
                           Կենսակերպ
                          </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Evoca-ն՝ EuroBasket U16 մրցաշարի պաշտոնական հովանավոր
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Երևանում մեկնարկել է FIBA EuroBasket 2026 U-16 C դիվիզիոնի Եվրոպայի առաջնությունը, որի պաշտոնական հովանավորն է Evocabank-ը:
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
              09.07.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17835973514805/780x585.png" 
                alt="Evoca-ն՝ EuroBasket U16 մրցաշարի պաշտոնական հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Ստորին մանրամասն բովանդակություն */}
        <div className="max-w-4xl pt-8 pb-8 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed border-t border-gray-100">
          
          <p>
            2026 թվականի <strong className="text-gray-950 font-bold">հուլիսի 4-ից 12-ը</strong> Երևանը հյուրընկալում է <strong className="text-gray-950 font-bold">FIBA EuroBasket 2026 U-16 C դիվիզիոնի Եվրոպայի առաջնությունը</strong>, որի պաշտոնական հովանավորն է <strong className="text-purple-900 font-bold">Evocabank</strong>-ը:
          </p>

          <p>
            Առաջին անգամ Հայաստանը հյուրընկալում է <strong className="text-gray-950 font-bold">մինչև 16 տարեկանների Եվրոպայի C դիվիզիոնի առաջնությունը</strong>: Մրցաշարին մասնակցում են 9 երկրի հավաքականներ, իսկ հանդիպումներն անցկացվում են Սպորտի կառավարման կենտրոնի մարզադահլիճում:
          </p>

          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ը, կարևորելով երիտասարդական սպորտի զարգացումն ու միջազգային մարզական նախաձեռնությունների աջակցությունը, միացել է մրցաշարին որպես Հայաստանի ազգային հավաքականի և ամբողջ մրցաշարի <strong className="text-gray-950 font-bold">պաշտոնական հովանավոր</strong>:
          </p>

          <p>
            Հայաստանի մինչև 16 տարեկանների հավաքականը մրցաշարը սկսել է երկու անընդմեջ հաղթանակներով և շարունակում է պայքարը C դիվիզիոնի չեմպիոնի կոչման համար: Հիշեցնենք, որ նախորդ երկու խաղերում Հայաստանի այս տարիքային հավաքականը դարձել էր Եվրոպայի C դիվիզիոնի բրոնզե մեդալակիր:
          </p>

          <p>
            Խմբային փուլում Հայաստանը դուրս եկավ կիսաեզրափակիչ փուլ և <strong className="text-gray-950 font-bold">հուլիսի 11-ին</strong> կմրցի Մոլդովայի հավաքականի հետ: Մուտքն ազատ է:
          </p>

          <p className="pt-2 font-medium text-gray-900">
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ը մաղթում է Հայաստանի հավաքականին նոր հաղթանակներ Եվրոպայի առաջնությունում:
          </p>

        </div>

        {/* Այլ նորություններ բաժին */}
        <section className="pt-12 pb-16 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-8">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Քարտ 1 */}
            <Link to="/life-style/evocabank_as_the_partner_of_fincomm_2026" className="flex flex-col space-y-4 group cursor-pointer">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" 
                  alt="Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors leading-snug">
                Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր
              </h3>
              <span className="text-gray-400 font-medium text-sm">
                08.10.2026
              </span>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" className="flex flex-col space-y-4 group cursor-pointer">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17913736819959/428x321.jpg" 
                  alt="Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors leading-snug">
               Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր
              </h3>
              <span className="text-gray-400 font-medium text-sm">
               06.10.2026
              </span>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" className="flex flex-col space-y-4 group cursor-pointer">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17912685600228/428x321.png" 
                  alt="Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors leading-snug">
               Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
              </h3>
              <span className="text-gray-400 font-medium text-sm">
                06.10.2026
              </span>
            </Link>

          </div>
        </section>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />

    </div>
  );
}