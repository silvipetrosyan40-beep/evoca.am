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
Wheel of Life Balance


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
Wheel of Life Balance
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Բալանսավորված և չբալանսավորված կյանքի անիվ, 8 ոլորտ, ո՞ր ոլորտում եք հաջողել և ո՞րն ունի ավելի շատ ուշադրության կարիք։ Բացահայտում ենք մեր բլոգում։









             </p>
              <p>
01.11.2025

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17663897182479/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Երբևէ ունեցե՞լ եք այն տագնապը, որ ոչինչ չեք հասցնում:
  </p>
  <p>
    Օրինակ՝ «ամբողջ տարին աշխատում եմ առանց հանգստի», «1 օр մարզվում եմ, 10 օր չէ», «կարոտում եם ընկերներիս»…
  </p>
  <p>
    Չհավասարակշռված կյանքը հենց սա է՝ «մեկը հասցնում ես, մյուսը՝ ոչ»[cite: 33]:
  </p>
  <p>
    Կա մի շատ պարզ, բայց օգտակար գործիք, որը կարող է փոխել ձեր առօրյան: Խոսքը <strong className="text-purple-700">Կյանքի Անիվի</strong> մասին է կամ, ինչպես հաճախ են ասում, <strong className="text-purple-700">"Wheel of life balance"</strong>[cite: 33]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ինչո՞ւ է սա օգտակար
  </h3>
  <p>
    Կյանքի Անիվը <strong className="text-purple-700">քարտեզ</strong> է, որը ցույց է տալիս՝ ո՞ր ոլորտում եք հաջողել և որն ունի ավելի շատ ուշադրության կարիք[cite: 33]:
  </p>
  <p>
    Դուք գնահատում եք ձեր կյանքի 8 հիմնական ոլորտները <strong className="text-purple-700">1-10 բալային համակարգով</strong>[cite: 33].
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Աշխատանք[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կրթություն[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Շրջապատ[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ընտանիք[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գումար[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Սեր[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Մարմին[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Միտք[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հոգի[cite: 33]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հոբբիներ[cite: 33]</span>
    </li>
  </ul>

  <p>
    Եթե ամեն ոլորտ բալանսավորված է, պետք է ստանաք շրջանաձև անիվ: Եթե ոչ, ստացվում է անհավասարակշիռ, «ճկված» պատկեր[cite: 33]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Օրինակներ
  </h3>

  {/* Balanced vs Imbalanced Images Side by Side */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    <div className="space-y-2 text-center">
      <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 max-w-xs mx-auto">
        <img 
          src="https://www.evoca.am/file_manager/wlbArtboard%201%20copy.png" 
          alt="Բալանսավորված Կյանքի Անիվ" 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-sm font-semibold text-gray-600">Նկար 1 – Բալանսավորված Կյանքի Անիվ[cite: 33]</p>
    </div>

    <div className="space-y-2 text-center">
      <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 max-w-xs mx-auto">
        <img 
          src="https://www.evoca.am/file_manager/wlbArtboard%201%20copy%202.png" 
          alt="Չբալանսավորված Կյանքի Անիվ" 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-sm font-semibold text-gray-600">Նկար 2 – Չբալանսավորված Կյանքի Անիվ[cite: 35]</p>
    </div>
  </div>

  <p>
    Ինչպես նկատեցիք, այս օրինակում ոլորտների մեծ մասը գնահատված է <strong className="text-purple-700">7-8 բալով</strong>: Անկախ նրանից, որ բոլոր ոլորտները միաժամանակ չեն հասնում 10 միավորի՝ անիվը բալանսավորված է:[cite: 35]
  </p>
  <p>
    Սա ցույց է տալիս, որ կյանքի բոլոր ոլորտները շարժվում են մոտավորապես նույն ռիթմով: Չկան կատարյալ ոլորտներ, բայց կա կայունություն:[cite: 35]
  </p>
  <p>
    Այստեղ որոշ ոլորտներ ունեն օրինակ՝ 9-10 բալ, իսկ մյուսները՝ 2-3: Թեև որոշ մասերում առաջընթացը մեծ է, անիվը անկանոն է ու չբալանսավորված:[cite: 35]
  </p>
  <p>
    Սա հաճախ նշանակում է, որ մարդն իր ամբողջ ուշադրությունը կենտրոնացնում է մեկ ոլորտի վրա՝ անտեսելով մյուսները: Այս չբալանսավորված անիվի պատճառով էլ մարդը կարող է ունենալ օրինակ՝ հոգնածություն, լարվածություն, տագնապներ, դեմոտիվացիա և այլն:[cite: 35]
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Կարևոր
  </h3>
  <p>
    Պարտադիր չէ, որ կյանք անիվում բոլոր ոլորտները գնահատված լինեն 10: 6, 7 կամ 8 բալը լիովին նորмаլ և առողջ ցուցանիշ է: Կարևորը ոչ թե բարձր միավորներն են, այլ այն, որ ոլորտներն իրար հետ լինեն <strong className="text-purple-700">բալանսավորված</strong>:[cite: 35]
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ինչպե՞ս սկսել
  </h3>
  <p>
    Ամեն ամիս գնահատում եք ոլորտները և համեմատում նախորդ ամսվա հետ: Համեմատության արդյունքում կնկատե՞ք՝ ո՞ր ոլորտի վրա պետք է աշխատել ու կսկսեք փոքր քայլեր հաջորդ ամիսների ընթացքում այդ ոլորտները բալանսի բերելու համար: Հենց այս փոքր քայլերով էլ կարող եք ստեղծել Ձեր բալանսավորված կյանքի անիվը:[cite: 35]
  </p>

  <p>
    <strong className="text-purple-700">Փոքր քայլերի օրինակներ.</strong> օրական 10 րոպե քայլել, 5 րոպե մեդիտացիա, շաբաթական 1 անգամ հանդիպում ընկերների հետ, ամսական 1 նոր դասընթաց, տարվա ընթացքում 1-2 անգամ հանգիստ և այլն:[cite: 35]
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Իսկ ինչո՞ւ է սա կարևոր
  </h3>
  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Harvard Business Review-ի տվյալներով պարզ է դարձել, որ այն մարդիկ, ովքեր ունեն բալանսավորված կյանքի անիվ, 31%-ով ավելի պրոդուկտիվ են[cite: 35]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ընտանիքի կամ ընկերների հետ շաբաթական առնվազն 5 ժամ անցկացնողներն իրենց զգում են ավելի երջանիկ[cite: 35]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հոբբիներ ունեցող մարդիկ 23%-ով ավելի ստեղծագործ են[cite: 35]:</span>
    </li>
  </ul>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Որտեղի՞ց հայտնվեց այս անիվը
  </h3>
  <p>
    «Կյանքի Անիվը» ստեղծել է <strong className="text-purple-700">Փոլ Ջ. Մայերը</strong>, ինքնազարգացման ոլորտում ամենազդեցիկ մասնագետներից մեկը:
  </p>
  <p>
    Պատմում են, որ իր առաջին թրեյնինգներից մեկում՝ 1960-ականներին, նա փորձում էր մարդկանց բացատրել, թե ինչու նրանք իրենց կյանքում «ամեն ինչ անում են, բայց ոչինչ չեն հասցնում»:
  </p>
  <p>
    Մի օր Մայերն իր հին թղթապանակի միջից հանեց մի շրջան, բաժանեց այն 8 մասի և հարցրեց.<br />
    «Եթե սա հեծանիվ լիներ, առաջ կշարժվե՞ր»:
  </p>
  <p>
    Բոլորը ծիծաղեցին. շրջանաձև չէր, անհավասար էր:
  </p>
  <p>
    «Դե մոտավորապես հենց այսպես էլ ապրում եք»,- ասաց նա:
  </p>
  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Այդ օրն էլ ծնվեց Կյանքի Անիվը:
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