import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocabankretrofestpartner() {
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
              Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր
            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
              <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                Կենսակերպ
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Սեպտեմբերի 20, Retro Fest 2026: 4 լեգենդ մեկ բեմում: Իսկ փառատոնի տոմսը գնիր Evoca քարտով և ստացիր 15% զեղչ:
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
              03.09.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17884237814941/780x585.png" 
                alt="Evocabank-ը Retro Fest-ի ֆինանսական գործընկեր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Ստորին մանրամասն բովանդակություն */}
        <div className="max-w-4xl pt-8 pb-8 space-y-8 border-t border-gray-100 text-gray-700 text-base sm:text-lg leading-relaxed">
          
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Ի՞նչ կլինի, եթե մեկ օրով 90-ականները վերադառնան:
          </p>

          <p>
            Ոչ թե հիշողության, հին տեսանյութերի կամ playlist-ի միջոցով, այլ ամբողջությամբ live:
          </p>

          <p>
            <strong className="text-gray-950 font-bold">Սեպտեմբերի 20-ին</strong> այս ամենը կդառնա իրական։ <strong className="text-gray-950 font-bold">Aura by Adana Complex</strong>-ում տեղի կունենա <strong className="text-gray-950 font-bold">Retro Stars Festival – Disco Legends</strong> масштабային փառատոնը, որը մեկ օրով մեզ կտեղափոխի 90-ականների դարաշրջան:
          </p>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
              Չորս լեգենդ՝ մեկ բեմում
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
                <span className="font-semibold text-gray-900">Haddaway</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
                <span className="font-semibold text-gray-900">President</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
                <span className="font-semibold text-gray-900">Alban</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
                <span className="font-semibold text-gray-900">Boney M.</span>
              </li>
            </ul>
          </div>

          <p className="pt-2">
            Իսկ միջազգային աստղերի կողքին հանդես կգան նաև 90-ականների հայտնի հայ արտիստներն ու DJ-ները՝ ամբողջացնելով ռետրո երաժշտական տրամադրությունը:
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900">
              Evocabank-ը Retro Stars Festival-ի ֆինանսական գործընկերն է
            </h3>
            <p>
              Իսկ եթե <strong className="text-purple-900 font-bold">Evoca քարտապան</strong> ես, ունես հատուկ առավելություն՝ <strong className="text-purple-900 font-bold">15% զեղչ</strong> փառատոնի տոմսերի համար:
            </p>
          </div>

          <div className="space-y-4 bg-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
            <h4 className="font-bold text-gray-950 text-lg">Պարզապես հարկավոր է`</h4>
            <ol className="space-y-3 text-gray-800">
              <li className="flex items-start space-x-3">
                <span className="font-bold text-purple-900">1.</span>
                <span>մուտք գործել <a href="https://Show4me.com" target="_blank" rel="noreferrer" className="text-purple-700 underline font-semibold hover:text-purple-900">Show4me.com</a>,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-purple-900">2.</span>
                <span>ընտրել քո նախընտրած տոմսը,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-purple-900">3.</span>
                <span>վճարման պահին մուտքագրել նախապես քո էլ. հասցեին ուղարկված պրոմո կոդը,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-purple-900">4.</span>
                <span>և վճարել քո <strong className="text-purple-900 font-bold">Evoca քարտով</strong>:</span>
              </li>
            </ol>
          </div>

          <p className="pt-2">
            Դեռ չունե՞ս <strong className="text-purple-900 font-bold">Evoca քարտ</strong>, ձեռք բեր այն հիմա և օգտվիր քարտի մի շարք բենեֆիթներից:
          </p>

          <div className="space-y-4 pt-4 border-t border-gray-100">
            <p>
              Փառատոնի տոմսն էլ չունե՞ս, հնարավոր է այն շահես։ <strong className="text-purple-900 font-bold">Evocabank</strong>-ը խաղարկում է <strong className="text-purple-900 font-bold">15 տոմս</strong>:
            </p>

            <h4 className="font-bold text-gray-950 text-lg">Մասնակցելու համար հարկավոր է`</h4>
            <ul className="space-y-2 pl-2">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-700 rounded-full"></span>
                <span>հավանել Բանկի ինստագրամյան էջի հրապարակումը,</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-700 rounded-full"></span>
                <span>հետևել Instagram-ի էջին,</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-700 rounded-full"></span>
                <span>մեկնաբանությունում նշել այն մարդուն, ում հետ գնալու ես համերգին:</span>
              </li>
            </ul>

            <p className="font-bold text-gray-900 pt-2">
              Յուրաքանչյուր հաղթող ստանում է <span className="text-purple-900">2 տոմս</span>:
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2 mt-6">
            <h3 className="text-xl font-bold text-gray-950">Retro Stars Festival: Disco Legends</h3>
            <div className="flex items-center space-x-3 text-gray-700 pt-1">
              <span>📅</span>
              <span className="font-medium">Սեպտեմբերի 20</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <span>📍</span>
              <span className="font-medium">Aura by Adana Complex</span>
            </div>
          </div>

          <p className="pt-4 font-medium text-gray-900">
            Այնպես որ, պատրաստում ենք 90-ականների look-երը և հանդիպում ենք՝ վերիշելու ու վայելելու լավագույն հիթերը:
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

      {/* Ֆութերը (Footer) */}
      <Footer />

    </div>
  );
}