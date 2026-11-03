import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsDetailFincomm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* 1. Վերադարձի կոճակ և Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          
          {/* «Վերադառնալ» կոճակ */}
          <Link
            to="/news/all"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-5 py-2.5 rounded-full transition-all w-fit cursor-pointer text-sm shadow-xs"
          >
            <span className="text-base">←</span>
            <span>Վերադառնալ</span>
          </Link>

          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/news/all" className="hover:text-purple-700 transition-colors">
            Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/news/lifestyle" className="hover:text-purple-700 transition-colors">
             Մրցանակներ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">      
                Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026
            </span>
          </nav>

        </div>

        {/* 2. Վերնագրի և մեծ նկարի բլոկ */}
        <div className="relative">
          
          {/* Ձախ կողմի սոցիալական կոճակներ (Desktop-ի համար) */}
          <div className="hidden lg:flex flex-col space-y-2 absolute -left-14 top-0">
            <a href="#facebook" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">f</span>
            </a>
            <a href="#linkedin" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="#instagram" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">ig</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Վերնագիր և կարճ նկարագրություն */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4  inline-block rounded-sm"></span>
                <Link 
  to="/news/awards" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-4 h-4 bg-yellow-400 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Մրցանակներ
  </span>
</Link>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Global Business & Finance Magazine հեղինակավոր ամսագիրը 4-րդ տարին անընդմեջ Evocabank-ին ճանաչել է որպես Ամենանորարար թվային բանկը Հայաստանում։
              </p>
              <p>02.10.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17909253326841/780x585.png" 
                  alt="Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

{/* 3. Հոդվածի մանրամասն տեքստեր (Կենտրոնացված վերնագրերով) */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
          
          {/* Կենտրոնացված վերնագրերի բլոկ */}
          <div className="text-center space-y-2 pb-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-purple-900">
              Most Innovative Digital Bank in Armenia 2026
            </h2>
            <p className="text-lg sm:text-xl font-bold text-purple-800">
              4-րդ տարին անընդմեջ
            </p>
            <p className="text-base sm:text-lg font-semibold text-purple-700 pt-1">
              Global Business & Finance Magazine
            </p>
          </div>

          <p>
            <strong>2023, 2024, 2025, 2026</strong>. չորս տարի՝ նույն մրցանակը: Եվ ամեն տարի՝ նոր լուծումներ, նոր պրոդուկտներ ու թվային բանկինգը զարգացնելու նոր գաղափարներ:
          </p>

          <p>
            <strong>Evocabank</strong>-ը տարիներ շարունակ հետևում է մի պարզ գաղափարի՝ <span className="text-purple-900 font-bold">բանկային ծառայությունից օգտվելու համար պարտադիր չէ այցելել բանկ</span>: Մենք առաջիններից էինք Հայաստանում, որ ցույց տվեցինք՝ ֆինանսական ծառայությունները նույնպես կարող են ամբողջությամբ տեղավորվել թվային միջավայրում:
          </p>

          <p>
            Իրական թվային փորձը միայն առցանց գործարք կատարելու հնարավորությունը չէ: Այն սկսվում է այն պահից, երբ հաճախորդը կարողանում է ինքնուրույն, իրեն հարմար ժամանակ և առանց ավելորդ քայլերի լուծել իր ֆինանսական հարցերը:
          </p>

          <p>
            Այսօր թվային բանկինգը <strong>Evocabank</strong>-ում միայն հավելված չէ: Այն և՛ <strong>EvocaTOUCH-ն է, և՛ թվային քարտերը, և՛ թվային նվեր քարտերը, և՛ վարկավորման թվային լուծումները, և՛ նոր վճարային հնարավորությունները</strong>, և այն բազմաթիվ փոքր ու մեծ փոփոխությունները, որոնք բանկային առօրյան ավելի պարզ են դարձնում:
          </p>

          <p>
            <strong>Global Business & Finance Magazine</strong>-ի կողմից 4 տարի անընդմեջ նույն ճանաչմանն արժանանալը պարզապես Բանկի մրցանակների շարքում հերթական նոր մրցանակը չէ: Այն առիթ է անդրադառնալու մի ճանապարհի, որի ընթացքում թվային տեխնոլոգիաները դարձել են Բանկի ծառայությունների ու հաճախորդների հետ աշխատանքի անբաժանելի մասը:
          </p>

          <p>
            <strong>Evocabank</strong>-ի համար թվային զարգացումը նաև շարունակական կատարելագործման գործընթաց է: Հաճախորդների սպասելիքները փոխվում են, ի հայտ են գալիս նոր տեխնոլոգիաներ, իսկ ֆինանսական ծառայությունների հնարավորություններն ընդլայնվում են: Սա նշանակում է, որ նորարար լինելը մեկ անգամ նոր պրոդուկտ ստեղծելը չէ. դա մշտապես նոր լուծումներ փնտրելու և արդեն գործող ծառայությունները կատարելագործելու շարունակական գործընթաց է:
          </p>

        </div>
        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/prizes/best-bank-in-armenia-2026-by-international-investor-magazine" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="		https://www.evoca.am/images-cache/news/1/17847187625556/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                 Evocabank՝ Լավագույն Բանկը Հայաստանում 2026
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">30.06.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/amx-awards" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17815943976247/510x383.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                   Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.06.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/prizes/new-award-best-sme-bank-by-digital-banker-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17784860353078/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                 Evocabank. Lավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.05.2026</span>
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}