import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocapreparun() {
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
              Evocabank-ը՝ PREPA Run 2026-ի գլխավոր հովանավոր
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
              Evocabank-ը՝ PREPA Run 2026-ի գլխավոր հովանավոր
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Հունիսի 28-ին միացիր PREPA Run-ին, որը կմեկնարկի Evocabank-ի Գլխամասից: Մասնակիցներին սպասում են հատուկ անակնկալներ և նվերներ Evoca-ի կողմից:
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
              25.06.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17823731739564/780x585.png" 
                alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Ստորին մանրամասն բովանդակություն */}
        <div className="max-w-4xl pt-8 pb-8 space-y-8 border-t border-gray-100 text-gray-700 text-base sm:text-lg leading-relaxed">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-900 tracking-tight">
            Run For Fun
          </h2>

          <p>
            <strong className="text-gray-950 font-bold">Հունիսի 28-ին</strong>, ժամը <strong className="text-gray-950 font-bold">08:00</strong>-ին, <strong className="text-purple-900 font-bold">Evocabank</strong>-ի <strong className="text-gray-950 font-bold">Գլխամասից</strong> կմեկնարկի <em className="text-gray-900">PREPA Run 10 կմ վազքը</em>:
          </p>

          <p>
            Սա այն առավոտն է, երբ կարևոր չէ, թե որքան արագ եես վազում: Կարևոր է, որ շարժվում ես, ժպտում ես և դառնում ես մեծ ու ոգեշնչող համայնքի մի մասը:
          </p>

          <p>
            <em className="text-gray-900">PREPA Run</em>-ը ստեղծվել է նրանց համար, ովքեր ցանկանում են առօրյայից մի փոքր դադար վերցնել, վերալիցքավորվել և օրը սկսել շարժումով, նոր ծանոթություններով ու լավ տրամադրությամբ:
          </p>

          <p>
            <em className="text-gray-900">PREPA Run</em>-ը նաև բարեգործական նախաձեռնություն է. գրանցումներից հավաքագրված ամբողջ գումարը կուղղվի բարեգործական նպատակների իրականացմանը:
          </p>

          <p>
            Որպես միջոցառման գլխավոր հովանավոր՝ <strong className="text-purple-900 font-bold">Evocabank</strong>-ը մասնակիցների համար պատրաստել է բազմաթիվ անակնկալներ: Միջոցառման տարածքում կգործեն <em className="text-purple-900 font-semibold">Evoca-ի ֆոտոզոնք, հանգստի և շփման հատուկ գոտիներ</em>, իսկ մրցավազքի հաղթողները կստանան <em className="text-purple-900 font-semibold">հատուկ նվերներ Evoca-ի կողմից</em>:
          </p>

          <p className="font-semibold text-gray-950 pt-2">
            Միացիր վազքին և վայելիր ամառային առավոտը:
          </p>

          {/* Միջոցառման տվյալների բլոկ */}
          <div className="bg-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100 space-y-3">
            <div className="flex items-center space-x-3 text-gray-800">
              <span className="text-xl">📍</span>
              <span><strong className="text-gray-950">Մեկնարկի վայր՝</strong> Evocabank, Հանրապետության փողոց 44/2</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800">
              <span className="text-xl">🕒</span>
              <span><strong className="text-gray-950">Ամսաթիվ և ժամ՝</strong> հունիսի 28, 08:00</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800">
              <span className="text-xl">🏃‍♂️</span>
              <span><strong className="text-gray-950">Հեռավորություն՝</strong> 10 կմ</span>
            </div>
          </div>

          <p className="pt-2">
            Գրանցվիր հիմա՝ անցնելով <a href="#register" className="text-purple-700 underline font-semibold hover:text-purple-900">հետևյալ հղումով</a>:
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