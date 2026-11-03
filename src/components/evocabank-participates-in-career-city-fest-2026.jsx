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
              Evocabank-ը մասնակցում է CCF 2026-ին
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
              Evocabank-ը մասնակցում է CCF 2026-ին

            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ապրիլի 18-19-ին Evoca-ն կմասնակցի Career City Fest 2026-ին․ արի, բացահայտիր կարիերայի նոր հնարավորություններն ու միացիր մեր թիմին։

            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
              17.04.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/1776423301974/780x585.png" 
                alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

  {/* Հիմնական տեքստային բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-center pt-4">
          
          <p>
            <strong className="text-gray-900 font-bold">Career City Fest 2026</strong>-ը կրկին կհամախմբի Հայաստանի և միջազգային լավագույն գործատուներին մեկ հարթակում՝ <strong className="text-gray-900 font-bold">Meridian Expo Center</strong>-ում:[cite: 19]
          </p>

          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ն այս տարի ևս ներկա կլինի փառատոնին: <strong className="text-purple-900 font-bold">Evoca-ի տաղավարում</strong> քեզ սպասվում է՝ ինտերակտիվ quiz, աշխատանքի հնարավորություններ, քննարկումներ և, իհարկե, նվերներ:[cite: 19]
          </p>

          {/* Նկար (Կենտրոնացված) */}
          <div className="w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/Career/insta%20(2).png" 
              alt="Աննա Նալբանդյան - Career City Fest 2026" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-1">
            <p className="text-purple-900 font-bold text-lg sm:text-xl">
              Evocabank-ը` Growth Zone | Gen Y սեսիայի հովանավոր[cite: 19]
            </p>
            <p className="text-purple-900 font-bold text-base sm:text-lg">
              Ապրիլի 18, ժամը` 14:45-15:15[cite: 19]
            </p>
          </div>

          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ի տաղանդների ներգրավման բաժնի ղեկավար <strong className="text-gray-900 font-bold">Աննա Նալբանդյանը</strong> կմասնակցի պանելային քննարկմանը՝ անդրադառնալով կարևոր թեմայի՝ <strong className="text-gray-900 font-bold">«Ապագայի մասնագիտություններ. ինչ ընտրել այսօր»</strong>:[cite: 19]
          </p>

          <p>
            Քննարկման ընթացքում կբացահայտվեն, թե ինչպես են արժեքները ձևավորում մասնագիտական ուղին, և որ մասնագիտությունները պահանջված կլինեն ապագայում:[cite: 19]
          </p>

          <p>
            Իսկ եթե վաղուց ես մտածում միանալ մեր թիմին, այս փառատոնը լավագույն առիթն է՝[cite: 19]
          </p>

          <ul className="space-y-3 bg-purple-50/50 border border-purple-100 rounded-2xl p-6 text-left max-w-2xl mx-auto my-4">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                ծանոթանալու <em className="text-purple-900 font-semibold not-italic">Evoca-ի թիմին և աշխատանքային մշակույթին</em>,[cite: 19]
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                տեղեկանալու <em className="text-purple-900 font-semibold not-italic">ազատ աշխատատեղերի մասին</em>,[cite: 19]
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                բացահայտելու, թե ինչպես կարող ես <em className="text-purple-900 font-semibold not-italic">զարգացնել քո կարիերան Evoca-ում և ինչ հնարավորություններ են քեզ սպասվում</em>:[cite: 19]
              </span>
            </li>
          </ul>

          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ում մենք կարևորում ենք ոչ միայն մասնագիտական, այլ նաև անձնային աճը՝ ապահովելով միջավայր, որտեղ նորարարությունը դառնում է առաջնահերթություն, և յուրաքանչյուրը կարող է դառնալ իր ոլորտի առաջատարը:[cite: 19]
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            Հանդիպում ենք <strong className="text-gray-900 font-bold">ապրիլի 8-19</strong>-ին` <span className="text-purple-900 font-bold">Evoca տաղավարում</span>:[cite: 19]
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