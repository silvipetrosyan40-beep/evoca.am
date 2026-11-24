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
  <Link to="/hy/blog" className="hover:text-purple-700 transition-colors">
    Բլոգ
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/blog/investment" className="hover:text-purple-700 transition-colors">
    Ներդրումներ
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը


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
           <Link 
  to="/blog/investment" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
   Ներդրումներ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս բլոգում կծանոթանանք պորտֆելի կառավարման փուլերին և ներդրումային ռազմավարության տեսակներին։ Կատարելու ենք ամենակարևոր քայլը դեպի նոր եկամուտներ։


















             </p>
              <p>
17.05.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17159356763697/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2 pb-2">
    <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
    "Keep a trading diary—write down your reasons for entering and exiting every trade. Look for repetitive patterns of success and failure."<br />
    </h2>
    <p className="font-bold text-purple-700">
 Alexander Elder    </p>
  </div>

  

  <p>
    Ինչպես քննարկել ենք մեր նախորդ՝ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">«Փոքր քայլերով դեպի մեծ եկամուտները»</a> և <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">«Ներդրումների կարևորներն ու չի կարելիները»</a> հրապարակումներում, ներդրումներ կատարելու առաջ կարևոր քայլ է ներդրումային ռազմավարության հստակեցումը[cite: 37]:
  </p>
  <p>
    Այսօր կխոսենք այն մասին, թե ինչ քայլեր ենք առանձնացնում պորտֆելի կառավարման ընթացքում, ներդրումային ռազմավարության ինչ տեսակներ ենք տարբերում ու կհասկանանք, թե դրանցից որն է ավելի նպատակահարմար կիրառել՝ մեր ներդրումային նպատակներին ու ակնկալիքներին համապատասխան[cite: 37]:
  </p>
  <p>
    Պորտֆելի կառավարման ն ամբողջ գործընթացը կարող ենք բաժանել 3 հիմնական փուլի[cite: 37]՝
  </p>

  <div className="space-y-6">
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        • Պլանավորում
      </h3>
      <p>
        Այս փուլում նախ և առաջ պետք է հասկանալ ռիսկի նկատմամբ հակվածությունը, ներդրումային ակնկալիքները, եկամտաբերության նկատմամբ սպասումները, ժամանակային հորիզոնը, իրացվելիության պահանջը և այլ հատուկ պահանջներ՝ կապված տվյալ պորտֆելի կառավարմանն ու ակնկալվող արդյունքների հետ[cite: 37]:
      </p>
      <p>
        Նախընտրելի է այս բոլոր պահանջները ոչ միայն հստակ սահմանել, այլ նաև ունենալ գրավոր տարբերակով, քանի որ դրանց հետևողական պահպանումն ու իրավիճակային որոշումների արդյունքում ռազմավարությունից էական շեղումներ չարձանագրելը պորտֆելի արդյունավետ կառավարման ու նախապես սահմանված ակնկալիքների իրագործման նախապայմաններ են[cite: 37]:
      </p>
      <p>
        Ակնկալիքները սահմանելու հետ նաև հստակեցնում ենք ուղենիշ, որի նկատմամբ կկարողանանք հետագայում գնահատել պորտֆելի կատարողականը: Այն ընտրելիս՝ պետք է հաշվի առնել, որ իր բնութագրերով հնարավորինs մոտ լինի մեր կառուցած պորտֆելին. օրինակ՝ եթե ներդրումներ ենք կատարում տեխնոլոգիական ոլորտի կազմակերպությունների բաժնետոմսերում, կարող ենք որպես ուղենիշ ընտրել այդ ոլորտի ինդեքս կամ ETF[cite: 37]:
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        • Գնահատում ու իրագործում
      </h3>
      <p>
        Եթե նախորդ փուլում սահմանում էինք մեր ակնկալիքներն ու չափանիշները ընդհանուր առմամբ, ապա այս փուլը դրանց իրագործումն է, հստակ ակտիվների ու դրանց բնութագրերի վերլուծությունը ու մեր սահմանած չափանիշներին համապատասխանության գնահատումը: Եթե մեր նախապատվությունների ցանկում նշել էինք, որ պորտֆելը ներառելու է տեխնոլոգիական ոլորտի կազմակերպությունների բաժնետոմսեր, ապա այստեղ առանձնացնում ենք նման ընկերություններ ու առանձին-առանձին գնահատում դրանք. արդյո՞ք այնքան եկամտաբեր են, որքան մենք ենք ակնկալում, որո՞նք են դրանց հետ կապված ռիսկերը, համապատասխանում է ռիսկի մակարդակը մեր կողմից ընունելի մակարդակին և այլն[cite: 37]:
      </p>
      <p>
        Հաճախ կիրառելի մոտեցում է վերից վար մոտեցումը. այս դեպքում վերլուծությունը սկսում ենք մակրոտնտեսական ցուցանիշներից ու կանխատեսումներից, ինչպես օրինակ՝ ՀՆԱ աճը, ինֆլյացիայի ու շուկայական տոկոսադրույքների ակնկալվող մակարդակը, որպեսզի կարողանանք գնահատել ակտիվների այն խումբը, որն ավելի նպատակահարմար կլինի մեզ համար: Երբ արդեն ընտրված են խմբերը, անցնում ենք դրանցից կոնկրետ արժեթղթերի ընտրությանը[cite: 37]:
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        • Արդյունքների վերլուծություն
      </h3>
      <p>
        Վերջին ու ամենակարևոր փուլերից մեկը: Այստեղ արդեն գնահատում ենք մեր պորտֆելի կատարողականը, արդյո՞ք կառավարման արդյունքները համապատասխանում են նախապես սահմանված մեր ակնկալիքներին: Ժամանակի ու հանգամանքների փոփոխության արդյունքում՝ կարող են փոխվել մեր սպասումները, ակնկալիքները ու ներդրումային սահմանափակումները, և հենց այս փուլում էլ կատարում ենք դրանց փոփոխությունը, թարմացումն ու վերասահմանումը[cite: 38]:
      </p>
    </section>
  </div>

  <p>
    Այժմ, երբ արդեն ծանոթացանք պորտֆելի կառավարման փուլերին, քննարկենք ներդրումային ռազմավարության հիմնական 2 մոտեցումները՝ ակտիվ և պասիվ[cite: 38]։
  </p>
  <p>
    <strong className="text-purple-700">Ակտիվ կառավարման</strong> դեպքում պորտֆելի կառավարիչն իրականացնում է շուկայի մշտադիտարկում և պարբերաբար ճշգրտումներ ու թարմացումներ է կատարում, որպեսզի գերազանցի շուկայական ուղենիշի արդյունքը, ինչպիսին կարող է լինել օրինակ ինդեքսը: Սա պահանջում է երկար ժամանակ ու մասնագիտական գիտելիքներ, շուկայի շարժընթացից մշտական իրազեկվածություն, հետևաբար ավելի ռեսուրսատար է, քան պասիվ կառավարումը[cite: 38]:
  </p>
  <p>
    Այս դեպքում, ի տարբերություն ակտիվ կառավարման, չի պահանջվում անընդհատ ներգրավվածություն, այլ ներդրումները կատարվում են հիմնականում շուկայական կամ որոշակի սեգմենտի բնույթուն: Կարող ենք ընտրել աճի պոտենցիալ ունեցող սեգմենտի ETF: Այս դեպքում կոնկրետ կազմակերպությունների գնահատումը, ընտրությունը, փոփոխությունը մեր փոխարեն իրականացնում է տվյալ ֆոնդի կառավարիչը կամ ինդեքսային ներդրումների դեպքում՝ տվյալ ինդեքսը կազմող ընկերությունը: Այս ներդրումները ավելի քիչ ծախսատար են, սակայն պետք է հաշվի առնել, որ հավանական եկամտաբերությունը կարող է ավելի ցածր լինել ակտիվ կառավարման արդյունքից[cite: 38]:
  </p>

  <p className="pt-2">
    Եթե Դուք էլ արդեն որոշեցիք, թե որն է Ձեր նախընտրած ռազմավարությունը, ուրեմն շնորհավորում ենք. Դուք կատարել եք առաջին կարևոր քայլը Ձեր պորտֆելի ձևավորման ու կառավարման ճանապարհին: Ձեզ մնում են հետևյալ պարզ քայլերը[cite: 38]՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բացել բրոքերային հաշիվ[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ներբեռնել EvocaINVEST հավելվածը[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բազմապատկել Ձեր եկամուտները Evocabank-ի հետ[cite: 38]:</span>
    </li>
  </ul>

  <div className="pt-4 border-t border-purple-50 space-y-3">
    <p className="font-bold text-purple-700 text-center">
      Արժեթղթերում ներդրումների հետ կապված հարցերի դեպքում կարող եք կապ հաստատել Ներդրումային գործառնությունների բաժնի հետ՝
    </p>
    <ul className="space-y-2 text-center">
      <li>
        <a href="tel:+37410205555" className="text-purple-700 font-bold hover:underline">
          +374-10-20-55-55
        </a>[cite: 38]
      </li>
      <li>
        <a href="mailto:invest@evoca.am" className="text-purple-700 font-bold hover:underline">
          invest@evoca.am
        </a>[cite: 38]
      </li>
    </ul>
  </div>
</article>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/blog/investment/evocainvest-tools" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17186317173483/428x321.jpg" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
EvocaINVEST. ինչպե՞ս կատարել գործարքներ
                                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">17.06.2024</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/blog/investment/stages-of" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/blogs/1/17159356763697/428x321.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը
</h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">17.05.2024</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/blog/investment/investment-decisions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17138737784517/428x321.jpg" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ներդրումների կարելիներն ու չի կարելիները
             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.04.2024

</span>
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