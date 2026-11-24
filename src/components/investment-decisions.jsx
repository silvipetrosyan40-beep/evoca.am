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
Ներդրումների կարելիներն ու չի կարելիները


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
Ներդրումների կարելիներն ու չի կարելիները
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ներդրումներ կատարելիս՝ դժվար է կողմնորոշվել՝ որտեղի՞ց սկսել, ինչպե՞ս կայացնել որոշումներ: Այսօր կխոսենք ներդրումների կարելիների և չի կարելիների մասին:



















             </p>
              <p>
23.04.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17138737784517/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <blockquote className="border-l-4 border-purple-700 pl-4 italic text-purple-900 font-medium">
    "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong."<br />
    <span className="text-sm font-bold not-italic">— George Soros</span>[cite: 36]
  </blockquote>

  <p>
    Ֆինանսական ոլորտում ներդրումներ կատարելիս՝ երբեմն դժվար է կողմնորոշվել՝ որտեղից սկսել, ինչպես կայացնել որոշումները[cite: 36]: Այսօր կխոսենք այն մասին, թե ինչ են խորհուրդ տալիս փորձագետները ներդրումներ կատարելիս կարելի և չի կարելի լինելու մասին[cite: 36]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    • Ի՞նչ պետք է անել ներդրումներ կատարելիս.
  </h3>

  <ul className="space-y-4 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Գնահատել ռիսկերը։</strong> տարբեր ներդրողների համար ռիսկի ընունելի մակարդակը տարբեր է, և նախքան ներդրում կատարելը ինքներդ ձեզ համար պետք է որոշեք, թե առավելագույնը որքան գումար եք պատրաստ կորցնել, եթե հանգամանքները դասավորվեն ոչ այնպես, ինչպես կանխատեսում էինք[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Ինքնակրթվել։</strong> ներդրում կատարելիս առաջին հերթին պետք է ուսումնասիրել, հասկանալ, թե ինչ գործոններ են ազդում դրա վրա, և որոնք են ձեզ համար կարևոր որպես ուղենիշ. փոփոխությունը կարող է ձեզ համար ազդանշան լինել հետագա գործողությունների պլանավորման համար[cite: 36]: Շուկաներում փոփոխությունները բավականին արագ են ընթանում՝ հատկապես պայմանավորված վերջին ժամանակներում տեխնոլոգիական արագ զարգացմամբ, ու այդ ամենին զուգահեռ քայլելը կարևոր և ճիշտ որոշում կայացնելու համար[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Իրականացնել դիվերսիֆիկացիա։</strong> ներդրումային տարբեր ակտիվներ ենթադրում են փոխկապակցված տարբեր ռիսկեր, հետևաբար լավ տարբերակ է համարվում տարատեսակ ակտիվներում ներդրումներ կատարելը որոշ ռիսկերի ազդեցության չափն ամբողջ պորտֆելի վրա նվազեցնելու համար[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Նախապես մշակել ռազմավարություն։</strong> ներդրում կատարելուց առաջ մտածված ու մշակված գործողությունների հաջորդականությունը թույլ կտա շուկայական փոփոխվող պայմաններում արագ հասկանալ ազդանշանները ու դրանցից բխող քայլերը[cite: 36]: Կայացվող որոշումների հիմնավորում. սա է ընկած գրագետ ներդրումների հիմքում[cite: 36]:
      </span>
    </li>
  </ul>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    • Ի՞նչ պետք չէ անել ներդրումներ կատարելիս.
  </h3>

  <ul className="space-y-4 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Մի՛ հետևեք ամբոխին։</strong> հետևել ուրիշներին ու կատարել ներդրումներ, որովհետև մյուսներն այդպես են անում. սա հաճախ հանդիպող սխալներից է[cite: 36]: Եթե մեկ ուրիշը կատարում է նման ներդրում, սա երաշխիք չէ, որ նա ճիշտ է, կամ գուցե այդ ներդրումն մասն է իր որևէ ներդրումային ռազմավարության, որը ձեր դեպքում կարող բերել այն արդյունքին, որն ակնկալում եք[cite: 36]: Մյուսների կարծիքները լսելը, միևնույն գործողության հետևանքները տարբեր տեսանկյուններից քննարկելը օգտակար է, սակայն ներդրումները պետք է կատարվեն սեփական դատողությունների և ռազմավարության վրա հիմնվելով[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Մի՛ հիմնվեք բացառապես հավանականության վրա։</strong> ներդրումներին վերաբերվեք մասնագիտորեն[cite: 36]: Յուրաքանչյուր շարժընթացի հիմքում ընկած են դրդապատճառներ՝ աշխարհաքաղաքական, տնտեսական, հոգեբանական կամ այլ, դրանց խորությամբ ուսումնասիրության արդյունքում է հնարավոր կատարել կշռադատված որոշումներ[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Մի՛ կայացրեք էմոցիոնալ որոշումներ։</strong> մեր որոշումների վրա ազդում են տարբեր գործոններ, և դժվար է առանց նախապես մշակված ռազմավարության շեղվել էմոցիաներին ու կատարել գործողություններ՝ ելնելով մեր վախից կամ զայրույթից[cite: 36]: Ներդրումներ կատարելիս պետք է առավելագույնս մի կողմ դնել էմոցիաները ու որևէ քայլ անելուց առաջ սթափ կշռադատել[cite: 36]:
      </span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>
        <strong className="text-purple-700">Մի՛ ներդրեք վերջին գումարը։</strong> ներդրումներ կատարելով այն գումարով, որը նախատեսված է ընթացիկ ծախսերի համար՝ կավելացնեք էմոցիոնալ ճնշումը որոշումներ կայացնելիս, ինչը հաճախ թույլ չի տալիս կայացնել ռացիոնալ որոշումներ:
      </span>
    </li>
  </ul>

  <p>
    Եվ պետք է հիշել, որ յուրաքանչյուրս ներդրումներ կատարում ենք <em>յուրովի՝</em> մեր կարիքներին ու տեսլականին համապատասխան: Ինքնուրույն, մտածված, հիմնավորված որոշումներն ու անընդհատ կրթությունն են, որ կարող են բերել ներդրումներից ակնկալվող արդյունքին:
  </p>

  <div className="pt-4 border-t border-purple-50 space-y-3">
    <p className="font-bold text-purple-700 text-center">
      Արժեթղթերում ներդրումների հետ կապված հարցերի դեպքում կարող եք կապ հաստատել Ներդրումային գործառնությունների բաժնի հետ՝
    </p>
    <ul className="space-y-2 text-center">
      <li>
        <a href="tel:+37410205555" className="text-purple-700 font-bold hover:underline">
          +374-10-20-55-55
        </a>
      </li>
      <li>
        <a href="mailto:invest@evoca.am" className="text-purple-700 font-bold hover:underline">
          invest@evoca.am
        </a>
      </li>
    </ul>
  </div>

  <p className="text-sm text-gray-500 pt-2 text-center">
    Եթե բաց եք թողել մեր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">նախորդ բլոգը</a>, անպայման կարդացեք այն և ավելի մանրամասն ծանոթացեք ներդրումների ու <strong className="text-purple-700">EvocaINVEST</strong>-ի մասին:
  </p>
  <p className="text-sm text-gray-500 text-center">
    Իսկ առաջիկայում սպասե՛ք ներդրումների մասին մեր նոր բլոգին:
  </p>
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