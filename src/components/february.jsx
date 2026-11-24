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
Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան


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
Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս տարի լինենք ավելի eco-friendly, օգտագործենք քիչ պլաստիկ և չվնասենք բնությանը:


             </p>
              <p>
09.02.2022

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16443271105456/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Մեր շուրջն ամեն ինչ կազմված է էներգիայից[cite: 31]: Իսկ ավելորդ իրերը խլում են լրացուցիչ էներգիա[cite: 31]:
  </p>
  <p>
    Մենք կյանքի ընթացքում մեծ քանակությամբ աղբ ենք կուտակում՝ սննդային, արդյունաբերական, պլաստիկ, հին հագուստ ու կահույք, էլեկտրական սարքեր (այս ցանկը կարելի է անվերջ շարունակել), որոնց մեծ մասը հետագայում ենթակա չէ վերամշակման[cite: 31]: Մեր կողմից կուտակված աղբն ուղիղ համեմատական է մեր սպառման և արտադրության ծավալներին, ինչը տարեցտարի աճում է[cite: 31]:
  </p>
  <p>
    Մի քանի խորհուրդ, թե ինչպես նվազագույնի հասցնել ավելորդ աղբի կուտակումը՝ ըստ Zero Waste Home գրքի հեղինակ Bea Johnson-ի[cite: 31].
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Հրաժարվիր</strong> այն ամենից, ինչ քեզ պետք չէ[cite: 31]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Նվազեցրու</strong> այն, ինչ քեզ հարկավոր է և ինչից չես կարող հրաժարվել[cite: 31]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Կրկին օգտագործիր</strong> այն, ինչ օգտագործում ես և ինչից չես կարող հրաժարվել կամ նվազեցնել[cite: 31]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Վերամշակիր</strong> այն, ինչից չես կարող հրաժարվել, կրճատել կամ նորից օգտագործել[cite: 31]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">Այն, ինչ մնաց</strong>, արդեն ավելորդ է[cite: 31]:</span>
    </li>
  </ul>

  <p>
    Ձեզ սկզբում կարող է բարդ թվալ «Զրո թափոն» ապրելակերպը, սակայն վստահ եղեք՝ շատ արագ կսովորեք[cite: 31]: Աղբի քիչ կուտակումը ոչ միայն լավ է շրջակա միջավայրի համար, այլ նաև բարելավում է առողջությունը և խնայում ժամանակ ու գումար[cite: 31]:
  </p>
  <p>
    Հաճախակի ազատվեք այն իրերից, որոնք չեք օգտագործում՝ նվիրելով այն մարդկանց, ովքեր դրա կարիքն ունեն[cite: 31]: Ոնեցեք shopping list՝ ցուցակ, թե ինչի կարիք իրոք ունեք[cite: 31]: Այս դեպքում խանութներով շրջելիս երբեք ավելորդ գնումներ չեք անի՝ այսպես պայքարելով հետագա իրերի կուտակման դեմ[cite: 31]: Գնեք բազմակի օգտագործման իրեր, հատկապես երբ դրանք պլաստիկից չեն՝ ափսեներ, բաժակներ, շշեր, կտորից անձեռոցիկներ՝ թղթի փոխարեն[cite: 31]: Գնումներից մնացած տոպրակները մի նետեք և հաջորդ անգամ ձեզ հետ խանութ տարեք[cite: 31]:
  </p>
  <p>
    Տարբերակեք ձեր աղբը՝ թուղթ, ապակի, պլաստիկ, ապա իմացեք, թե որոնք են ձեր քաղաքում վերամշակման կետերը, որտեղ կարող եք հանձնել ձեր տարբերակված աղբը[cite: 31]:
  </p>
  <p>
    Վերջերս կատարված ուսումնասիրությունը ցույց է տվել, որ արտադրված 6,3 միլիարդ տոննա պլաստիկ թափոններից միայն 9%-ն է վերամշակվում[cite: 31]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ինչպե՞ս են թափոններն ազդում մոլորակի և շրջակա միջավայրի վրա
  </h3>
  <p>
    Թափոնները մեծ ազդեցություն են ունենում մթնոլորտի և շրջակա միջավայրի վրա[cite: 31]: Աղբամաններում թափվող աղբն արտազատում է մեթան գազ[cite: 31]: Իսկ աշխարհի տարբեր մասերում աղբի մեծ, բաց կույտերի այրումից առաջանում է ածխածնի երկօքսիդ՝ վտանգավոր ծավալով ջերմոցային գազ, որը տաքացնում է մեր մոլորակը[cite: 31]:
  </p>
  <p>
    Էլեկտրական և էլեկտրոնային սարքավորումների թափոնները կարող են նույնպես շատ վնասակար լինել շրջակա միջավայրի համար[cite: 31]: Այս թափոններն անվանում են նաև e-waste, որոնք հանգեցնում են օդի աղտոտման[cite: 31]: Բացի դրանից՝ էլեկտրական և էլեկտրոնային սարքավորումներից գոյացած թափոնները վտանգավոր են նաև մարդու առողջության համար[cite: 31]:
  </p>
  <p>
    Այսպիսով, ինչ կարելի է անել այս ամենի դեմ պայքարելու համար[cite: 31]: Ձեր թափոնների՝ շրջակա միջավայրի վրա ազդեցությունը նվազեցնելու ճանապարհներից մեկը դրանք պատասխանատու կերպով հեռացնելն է, ինչի համար կան հատուկ մասնագիտացված ընկերություններ[cite: 31]:
  </p>
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