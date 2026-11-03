import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Dilijanwearecoming() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Վերևի հատված՝ Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Վերադառնալ */}
          <Link 
            to="/all-news" 
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-full w-max transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          {/* Հացի փշրանքներ */}
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
            <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              Դիլիջա՛ն, մենք գալիս ենք
            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Ձախ մաս՝ Տեքստեր */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
              <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                Կենսակերպ
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Դիլիջա՛ն, մենք գալիս ենք
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Սեպտեմբերի 18-ին Evocabank-ը նշում է իր նոր «Դիլիջան» մասնաճյուղի բացումը մեծ բացօթյա համերգով՝ DJ Jokey-ի և Ռեհինկարնացիայի մասնակցությամբ։
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
              11.09.2026
            </div>
          </div>

          {/* Աջ մաս՝ Նկար */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-gray-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17891134831451/780x585.png" 
                alt="Դիլիջան, մենք գալիս ենք" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Ստորին մանրամասն բլոկը (երկրորդ սքրինշոթից) */}
        <div className="max-w-4xl pt-8 pb-8 space-y-8 border-t border-gray-100">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-900 text-center tracking-tight">
            Դիլիջա՛ն, պատրաստ ես:
          </h2>

          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-gray-900">Սեպտեմբերի 18</strong>-ին <strong className="text-gray-900">Դիլիջանի Կենտրոնական հրապարակում</strong> միասին նշում ենք <span className="text-purple-900 font-bold">Evocabank</span>-ի նոր մասնաճյուղի բացումը մեծ բացօթյա համերգով: Երեկոն սկսելու ենք <strong className="text-gray-900">DJ Jokey-ի հետ</strong>, այնուհետև բեմը ձեր բոլորի կողմից սիրված <strong className="text-gray-900">Ռեհինկարնացիայինն</strong> է:
            </p>

            <p>
              Այս երեկոն մենք կազմակերպել ենք <strong className="text-gray-900">հատուկ ձեզ համար</strong>, որպեսզի <span className="text-purple-900 font-bold">Evocabank</span>-ի՝ Դիլիջան գալը նշենք ոչ միայն նոր մասնաճյուղի բացումով, այլ լավ երաժշտությամբ ու բարձր տրամադրությամբ:
            </p>
          </div>

          {/* Ժամեր և վայր */}
          <div className="space-y-3 font-semibold text-gray-900 text-base sm:text-lg pt-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-950 font-bold">17:00</span>
              <span className="text-gray-400">-</span>
              <span>DJ Jokey</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-950 font-bold">19:00</span>
              <span className="text-gray-400">-</span>
              <span>Reincarnation</span>
            </div>
          </div>

          {/* Հասցե և Մուտք */}
          <div className="space-y-3 pt-4 text-gray-800 text-base">
            <div className="flex items-center space-x-3">
              <span className="text-pink-600 text-xl">📍</span>
              <span className="font-medium">Դիլիջանի Կենտրոնական հրապարակ</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-pink-600 text-xl">🎫</span>
              <span className="font-medium">Մուտքն ազատ է</span>
            </div>
          </div>

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
                  src="https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" 
                  alt="Evocabank-ը Retro Fest-ի ֆինանսական գործընկեր" 
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
                  alt="Evoca-ն EuroBasket U16 մրցաշարի պաշտոնական հովանավոր" 
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
                  alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
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

      {/* Ներքևի հատված՝ Footer */}
      <Footer />

    </div>
  );
}