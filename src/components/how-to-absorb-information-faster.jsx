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
  <Link to="/hy/blog/lifestyle-blogs" className="hover:text-purple-700 transition-colors">
   Կենսակերպ
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
Ինչպե՞ս արագ յուրացնել ինֆորմացիան


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
  to="/hy/blog/lifestyle-blogs" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
   Կենսակերպ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Ինչպե՞ս արագ յուրացնել ինֆորմացիան
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Եթե դուք կարծում եք, որ դժվար է նոր ինֆորմացիան արագ յուրացնել, ապա դուք միանգամայն սխալվում եք








             </p>
              <p>
26.06.2020

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16330009199522/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  

  <p>
    Նախքան նոր ինֆորմացիա յուրացնելը պարզապես շատ կարևոր է հստակեցնել ձեր առջև դրված առաջնայնությունները[cite: 38].
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ինչի՞ համար եք այն սովորում[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ինչքանով եք հետաքրքրված արդյունքով[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ճիշտ գնահատեք ձեր ունակություններն ու պատրաստակամությունը[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բարձրացրեք սովորելու հանդեպ ձգտման մակարդակը[cite: 38],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հաղթահարեք նորը սովորելու վախը[cite: 38]:</span>
    </li>
  </ul>

  <p>
    Եկեք դիտարկենք նոր ինֆորմացիան արագ յուրացնելու և հիշողության մեջ ամրագրելու մի քանի գործիք[cite: 38].
  </p>

  <ol className="space-y-4 pl-2">
    <li className="space-y-1">
      <div className="font-bold text-purple-700">1. Սովորեցրեք նոր ձեռք բերած ձեր գիտելիքը մեկ ուրիշին</div>
      <p>
        Երբ խնդիր է դրվում դիմացինին ինչ-որ բան բացատրելու, դուք, նախքան բացատրական փուլը, սկսում եք ավելի խորն ուսումնասիրել այն, ինչ թվում էր, թե արդեն լավ գիտեք[cite: 38]: Այստեղ մեծ է նաև հոգեբանական գործոնը. սովորեցնողի պատասխանատվությունը մեծ է, և դուք հակված եք արագ ու էֆեկտիվ միջոցներով և մեկ անգամ ևս յուրացնել գիտելիքը, որը պետք է փոխանցեք ձեզնից մեծ ակնկալիքներ ունեցողին[cite: 38]: Այստեղ ձեր հիմնական խաղաքարտը մոտիվացիան է[cite: 38]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">2. Սովորեք կարճ ժամանակահատվածներով</div>
      <p>
        Լոֆիլհանայի համալսարանի փորձագետներն առաջարկում են 30-50 րոպե հատկացնել նոր նյութեր սովորելուն[cite: 38]: 30 րոպեից քիչ ժամանակը բավարար չէ նյութը յուրացնելու համար, բայց 50 րոպեից ավելի ժամանակահատվածն արդեն չափազանց շատ է, որպեսզի ուղեղը կարողանա միանգամից ընկալել այն[cite: 38]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">3. Թղթի վրա կատարեք գրառումներ</div>
      <p>
        Իհարկե, հիմա գոյություն ունեն գրառում կատարելու բազմաթիվ նորարար միջոցներ, այնուամենայնիվ, բազմիցս ապացուցված է, որ գրիչ և թուղթ օգտագործելն ավելի լավ է օգնում սովորել և ընկալել նոր ինֆորմացիան[cite: 38]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">4. Օգտագործեք կրկնության ուժը</div>
      <p>
        Ի՞նչ եք կարծում, ավելի արդյունավետ է շաբաթը մեկ անգամ 90 րոպե շարունակ ջրել ծաղիկները, թե՞ շաբաթը երեք անգամ 30 րոպե[cite: 38]: Լավ կլինի մշակել գիտելիքի յուրացման արդյունավետ պարբերականություն[cite: 38]: Ընդհատումներով կրկնելով ուղեղ մուտք գործող ինֆորմացիան՝ այն ամրապնդվում և գիտելիքի է վերածվում[cite: 38]: Ուղեղն այդպես հասկանում է, որ տվյալ ինֆորմացիան շատ կարևոր է և ընկալում է որպես ֆունդամենտալ գիտելիք[cite: 38]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">5. Փոխեք սովորելու ձևը</div>
      <p>
        Եթե նոր գիտելիքը ոչ մի կերպ չի մնում ձեր հիշողության մեջ կամ դուք այն չեք ընկալում, ապա փոխեք մոտեցումը[cite: 38]: Փորձարկեք սովորելու նոր մեթոդ. պետք չէ ուղեղը տանջել անընդհատ նույն բանը նույն կերպ կրկնելով[cite: 38]: Կարող եք փորձել, օրինակ, հանդես գալ երկու դիրքից՝ հարց տվողի և պատասխանողի[cite: 38]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">6. Թույլ մի տվեք, որ ձեր միտքը սովորի ստանդարտ մտածելակերպին ու լուծումներին</div>
      <p>
        Քանի որ սովորությունն իջեցնում է ձեր մասնագիտական պոտենցիալը[cite: 38]: Մարդկային ուղեղը հակված է փորձարկումների, սխալների և հաղթանակների[cite: 38]: Գիտե՞ք, թե ինչու են երեխաներն ամեն ինչ արագ սովորում. նրանք չեն վախենում, անգամ երբ սխալվում են, կանգ չեն առնում ու նորից շարունակում են[cite: 38]:
      </p>
    </li>
  </ol>
</article>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/blog/lifestyle-blogs/monthly-recap-creation" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Habit Tracker                                   </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">05.01.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/blog/lifestyle-blogs/top-5-christmas-markets-in-europe" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/blogs/1/17658933558475/510x383.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Եվրոպայի լավագույն 5 Christmas Market-ները
</h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.12.2025</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/blog/lifestyle-blogs/black-friday-2025-complete-guide-by-evoca" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17639790235101/510x383.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Սև ուրբաթի իրական գույնը
             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">24.11.2025
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