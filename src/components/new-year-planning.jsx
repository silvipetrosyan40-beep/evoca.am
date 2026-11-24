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
Տարին սկսենք պլանավորելով


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
Տարին սկսենք պլանավորելով
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Նոր տարի, նոր սկիզբ և հնարավորություն դառնալու ավելի լավը:




             </p>
              <p>
01.01.2022

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/164138504886/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Ողջույն! Տարին լավ սկսեցինք[cite: 31]: Պատրաստ ե՞ս միասին սովորենք ճիշտ պլանավորել և դարձնենք հենց քո հաջողությունների ու ձեռքբերումների տարին[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    1. Այսպիսով, ինչպե՞ս սկսել
  </h3>
  <p>
    Նախաառաջ համբերատար եղիր և մի քայլ հետ գնա[cite: 31]: Մտածելու և քո կյանքի ճանապարհորդությունը գծելու համար պետք է տեղ ազատել մտքում[cite: 31]: Գտիր վայր, որտեղ կարող ես կենտրոնանալ առանց խանգարող հանգամանքների, և հասկանալ, թե ինչ է վերջապես ցանկանում[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    2. Ամեն ինչ գրի առ
  </h3>
  <p>
    Վերցրու գրիչ ու նրբատետր և կազմիր քո նպատակների ցանկը[cite: 31]: Լավ կլինի դրանք բաժանես ավելի փոքր գործողությունների և պարտադիր սահմանես իրատեսական deadline-ներ[cite: 31]:
  </p>
  <p>
    Չմոռանաս ժամանակ առ ժամանակ վերանայել քո կազմած նպատակները և անհրաժեշտության դեպքում չվախենալ փոխել դրանք կամ առհասարակ հանել ցանկից, քանի որ մեր նպատակները և երազանքները, ինչպես և մենք բոլորս, կյանքի ընթացքում սովորություն ունեն փոխվելու և զարգանալու[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    3. Մտքում միշտ պահիր քո վերջնակետը
  </h3>
  <p>
    Այն պետք է լինի հստակ և շոշափելի[cite: 31]: Փակիր աչքերդ և փորձիր վիզուալիզացնել այն[cite: 31]: Փորձիր պատկերացնել կամ զգալ, թե ինչ կլինի, երբ հասնես դրան[cite: 31]: Ամեն անգամ, երբ պատրաստ ես հանձնվել կամ հրաժարվել երազանքից, կրկնիր այս վարժությունը. դա քո ճանապարհը կհեշտացնի[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    4. Ունեցիր Plan B
  </h3>
  <p>
    Անհաջողություններ և խոչընդոտներ միշտ պատահում են[cite: 31]: Որպեսզի խուսափես լրացուցիչ անհանգստությունից ու լարվածությունից, նախօրոք պատկերացրու, թե որն է ամենավատ սցենարը, որ կարող է պատահել, և պատրաստ եղիր դրան[cite: 31]: Պատրաստ եղիր ցանկացած արդյունքի[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    5. Վայելիր ոչ միայն արդյունքը, այլ նաև ընթացքը
  </h3>
  <p>
    Հիշիր, որ դեպի նպատակ ճանապարհից կարող ստանալ ոչ պակաս էմոցիաներ[cite: 31]: Նույնիսկ կարող ես փոքր հաղթանակների դեպքում ինքդ քեզ պարգևատրել[cite: 31]:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Marketing/10.png" 
      alt="A goal without a plan is just a wish" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Եթե դեռ մոտիվացիայի պակաս ունես, նայիր այս հոլովակները և ոգեշնչվիր՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">How To Get The Most Out Of Your Year</a>[cite: 32]
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">5 Brilliant New Habits You Can Start in 2022</a>[cite: 32]
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">How I'm Planning To Crush My Goals in 2022</a>[cite: 32]
    </li>
  </ul>

  <p className="pt-2">
    Իսկ եթե ուզում ես զարգացնել քո պլանավորման և time management skill-երը, կարդա այս գրքերը՝
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Getting Things Done</strong> by David Allen[cite: 32]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Good to Great: Why Some Companies Make the Leap and Others Don't</strong> by Jim Collins[cite: 32]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">168 Hours: You Have More Time Than You Think</strong> by Laura Vanderkam[cite: 32]</span>
    </li>
  </ul>
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