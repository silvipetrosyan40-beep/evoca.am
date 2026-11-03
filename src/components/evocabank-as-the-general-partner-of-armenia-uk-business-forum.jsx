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
              Կենսակերպ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">
              Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր
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
                <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
                <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                  Կենսակերպ
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Հոկտեմբերի 5-ին և 6-ին Երևանում անցկացվեց Armenia-UK Business Forum-ը՝ միավորելով երկու երկրի գործարար, ֆինանսական և պետական կառույցների ներկայացուցիչներին։
              </p>
              <p>06.10.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17913736819959/780x585.jpg" 
                  alt="Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

 {/* 3. Հոդվածի մանրամասն տեքստեր */}
        <div className="max-w-4xl space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
          
          {/* Առաջին ենթավերնագիր / նախադասություն */}
          <h2 className="text-xl sm:text-2xl font-bold text-purple-900">
            Evocabank-ը Armenia-UK Business Forum 2026-ի գլխավոր գործընկերն էր:
          </h2>

          <p>
            Համաժողովն անցկացվում էր առաջին անգամ Հայաստանում և նպատակ ուներ զարգացնելու <strong>Հայաստանի և Միացյալ Թագավորության</strong> միջև գործարար, ներդրումային և ինստիտուցիոնալ համագործակցությունը՝ ստեղծելով նոր գործընկերությունների և համատեղ նախաձեռնությունների հնարավորություններ:
          </p>

          <p>
            Համաժողովը մեկտեղեց երկու երկրների բիզնես և ֆինանսական ոլորտների, պետական կառույցների, կրթության ու տեխնոլոգիաների ներկայացուցիչներին:
          </p>

          {/* Համաժողովի թեմաներ (Ցանկ) */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900 text-lg">
              Համաժողովի ընթացքում քննարկվեցին հետևյալ թեմաները՝
            </h3>
            
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2.5 shrink-0"></span>
                <span>Հայաստանում ներդրումային հնարավորություններ,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2.5 shrink-0"></span>
                <span>Միացյալ Թագավորության հետ առևտրային կապերի ընդլայնում,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2.5 shrink-0"></span>
                <span>Ֆինանսական ծառայությունների և ենթակառուցվածքների զարգացում,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2.5 shrink-0"></span>
                <span>Արհեստական բանականություն ու նորարարական տեխնոլոգիաներ,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block mt-2.5 shrink-0"></span>
                <span>Կրթության և մարդկային ներուժի զարգացման հեռանկարներ:</span>
              </li>
            </ul>
          </div>

          <p className="pt-2">
            Միջոցառման խոսնակների թվում էին՝ ՀՀ Կենտրոնական բանկի նախագահ <em>Մարտին Գալստյանը</em>, ՀՀ ֆինանսների նախարար <em>Վահե Հովհաննիսյանը</em>, Հայաստանում Միացյալ Թագավորության դեսպան <em>Ալեքսանդրա Քոուլը</em>, ինչպես նաև ֆինանսական, տեխնոլոգիական և կրթական ոլորտների միջազգային ներկայացուցիչներ: Նրանց մասնակցությունը հնարավորություն ստեղծեց քննարկելու երկկողմ համագործակցության հեռանկարները և միջազգային փորձը:
          </p>

          <p>
            Համաժողովի բացման մշակութային երեկոն կայացավ <strong>հոկտեմբերի 5-ին</strong> Արամ Հաչատրյան համերգասրահում, իսկ հիմնական բիզնես ծրագիրը՝ <strong>հոկտեմբերի 6-ին</strong> Dvin Music Hall-ում:
          </p>

          <p>
            <strong>Հոկտեմբերի 7-ին և 8-ին</strong> նախատեսվում են նաև հայ և բրիտանացի գործարարների ու կառույցների ներկայացուցիչների նպատակային հանդիպումներ՝ նոր կապերի և հնարավոր գործընկերությունների զարգացման համար:
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            <strong>Evocabank</strong>-ի՝ որպես <span className="text-purple-800">գլխավոր գործընկերոջ</span> մասնակցությունն արտահայտում էր բանկի ներգրավվածությունը Հայաստանում գործարար միջավայրի զարգացման և միջազգային տնտեսական կապերի ընդլայնման նախաձեռնություններում: Նման հարթակները նպաստում են մասնագիտական փորձի փոխանակմանը և երկարաժամկետ համագործակցության նոր հնարավորությունների ձևավորմանը:
          </p>

        </div>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/life-style/evocabank_as_the_partner_of_fincomm_2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                  Կենսակերպ
                </span>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/life-style/evocabank-as-a-legacy-partner-of-aua-35th-anniversary-event" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17906855928227/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                  Կենսակերպ
                </span>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">25.09.2026</span>
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