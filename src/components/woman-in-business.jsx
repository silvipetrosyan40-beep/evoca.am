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
Վերջին տասնամյակներում կանանց դերը բիզնես աշխարհում մեծանում է


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
Վերջին տասնամյակներում կանանց դերը բիզնես աշխարհում մեծանում է
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այսօր եկեք խոսենք բոլոր ժամանակների ամենահայտնի բիզնես կանանց մասին, ովքեր գուցե Ձեզ էլ ոգեշնչեն և օգնեն փոխել աշխարհը:










             </p>
              <p>
26.06.2020

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16335980806802/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="space-y-6">
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Oprah Winfrey
      </h3>
      <p>
        Օփրա Ուինֆրին ամերիկյան լրատվամիջոցի գործադիր տնօրեն է, ինչպես նաև դերասանուհի, հաղորդավար, պրոդյուսեր և բարերար[cite: 36]:
      </p>
      <p>
        Նա հայտնի է The Oprah Winfrey Show-ի համար, որը պատմության մեջ ամենաբարձր գնահատված հեռուստածրագիրն է[cite: 36]:
      </p>
      <p>
        Նրան անվանում են «Մեդիա թագուհի»[cite: 36]: Նա 20-րդ դարի ամենահարուստ աֆրոամերիկացին է և Հյուսիսային Ամերիկայի առաջին սևամորթ բազմամիլիարդատերը, իսկ մինչև 2007թ. համարվում էր աշխարհի ամենաազդեցիկ կինը[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Kylie Jenner
      </h3>
      <p>
        Քայլի Ջենները 2016թ. հիմնադրեց իր Kylie Cosmetics ընկերությունը՝ 2019թ. դառնալով աշխարհի ամենաերիտասարդ միլիարդատերը՝ համաձայն Forbes ամսագրի[cite: 36]: Ընկերությունն այսօր գնահատվում է ավելի քան 1.2 միլիարդ դոլար[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        JK Rowling
      </h3>
      <p>
        Բրիտանացի գրող Ջոան Ռոուլինգն անհամար դժվարությունների և խոչընդոտների միջով անցավ, մինչ նրան հաջողվեց հրատարակել իր առաջին գիրքը՝ Հարրի Փոթերը և փիլիսոփայական քարը[cite: 36]:
      </p>
      <p>
        Հրատարակվելուց հետո գիրքը մեկ գիշերում համաշխարհային հիթ դարձավ՝ վերածվելով ֆիլմերի, ապրանքների և նույնիսկ արկածային զբոսայգիների[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Cher Wang
      </h3>
      <p>
        Չեռ Վանգը 1 միլիարդ դոլար արժողությամբ տեխնոլոգիական HTC ընկերության հիմնադիրն է, որը կենտրոնացած է նորարար սմարթֆոնների ստեղծման վրա[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Tory Burch
      </h3>
      <p>
        Աշխատելով աշխարհի լավագույն նորաձևության տներում՝ Տորի Բըրչը 2004թ. որոշեց հիմնադրել իր սեփական բրենդը՝ դարձնելով այն աշխարհի ամենաճանաչված բրենդներից մեկը[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Gabrielle Chanel
      </h3>
      <p>
        Ֆրանսիացի դիզայներ, Chanel բրենդի հիմնադիր Գաբրիել Շանելը 1920-ականներին թողարկեց իր առաջին պարֆյումը՝ Chanel No. 5-ը, և ներկայացրեց աշխարհին իր առաջին փոքր սև զգեստը՝ հեղափոխելով կանանց հագուստի գաղափարը և դարձնելով այն ավելի հարմարավետ[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Jessica Alba
      </h3>
      <p>
        Ամերիկյան դերասանուհի Ջեսիկա Ալբան 2012թ. հիմնադրեց The Honest ընկերությունը, որն արտադրում է մանկական և տնային ապրանքներ՝ պատրաստված բնական բաղադրիչներից[cite: 36]: Ընկերությունն օգնում է երիտասարդ ընտանիքներին լինել տեղեկացված և կատարել առողջ ընտրություն[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Vera Wang
      </h3>
      <p>
        Վեռա Վանգը՝ նախագծելով իր սեփական հարսանեկան զգեստը 40 տարեկանում, որոշեց ստեղծել սեփական նորաձևության բրենդը[cite: 36]: Բարեբախտաբար, Վանգն, աշխատելով Vogue ամսագրում, ճիշտ կապեր ուներ իր ապրանքանիշը հաջողակ դարձնելու համար[cite: 36]: Նա ընդլայնեց իր ընկերությունը և այժմ նախագծում է ամեն ինչ՝ զարդեր, տներ, ինչպես նաև հագուստ, կոշիկ և աքսեսուարներ[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Sara Blakely
      </h3>
      <p>
        Ունենալով քիչ գումար իր գաղափարի մեջ ներդրումներ կատարելու համար՝ Spanx-ի ապագա հիմնադիր Սառա Բլեյքլին երկար ժամանակ մերժումներ էր ստանում ներդրողներից՝ մինչև այն պահը, երբ հայտնի Օփրա Ուինֆրին հրապարակավ ճանաչեց նրա բիզնես գաղափարը՝ հիմք ստեղծելով բրենդի ճանաչման համար[cite: 37]:
      </p>
    </section>
  </div>

  <div className="space-y-4 pt-2">
    <p>
      Այս կանանցից յուրաքանչյուրի մասին կարելի է հետաքրքիր ինֆորմացիա գտնել ինտերնետում[cite: 37]: Բացահայտիր նրանց կյանքի մանրամասները, կարդա ավելին ու ոգեշնչվիր[cite: 37]:
    </p>
    <p>
      Իհարկե, բիզնեսում կանանց համար կրկնակի դժվար է. պետք է պահել բալանս աշխատանքի և ընտանիքի միջև[cite: 37]:
    </p>
    <p>
      Նույնիսկ start-up-երի աշխարհում վենչուրային կապիտալով ֆինանսավորվող ընկերությունների առավելագույնը 5%-ն են կին հիմնադիր ունեցող ընկերությունները[cite: 37]:
    </p>
    <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
      Միշտ հիշիր՝ կարևոր է հավատալ սեփական ուժերին և իրագործել նպատակներն ու երազանքները[cite: 37]:
    </p>
  </div>
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