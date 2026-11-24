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
  <Link to="/blog/businessss" className="hover:text-purple-700 transition-colors">
    Բիզնես
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
15 համաշխարհային բիզնեսներ, որոնք ծնվել են ավտոտնակներում և հետագայում փոխել…
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
  to="/blog/businessss" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
    Բիզնես
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
15 համաշխարհային բիզնեսներ, որոնք ծնվել են ավտոտնակներում և հետագայում փոխել…
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Մեծ մտքերը մեծ ծրագրերի վերածելու համար շատերին անգամ մեկ ավտոտնակն էլ բավական է։



             </p>
              <p>
18.06.2020
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16336898810327/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

  
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 
  <div className="space-y-8 pt-2">
    {/* Apple */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Apple[cite: 25]
      </h3>
      <p>
        Apple-ը ներկա պահին աշխարհում ամենահզոր տեխնոլոգիական ընկերություններից է, որը սկիզբ է առել Սթիվ Ջոբսի հոր ավտոտնակում: Սթիվ Ջոբսն ու Սթիվ Վոզնյակը 1976թ. հենց այդ ավտոտնակում 30 օրում ձեռքով հավաքեցին 50 համակարգիչ՝ վաճառելով դրանք 500 ԱՄՆ դոլարով, և այդպես էլ ամեն ինչ սկսվեց: 1978 թ. արդեն ստեղծվեց Apple II համակարգիչը: Այսօր գրեթե 1 մլրդ. մարդ օգտագործում է Apple: Չնայած այս հաջողությանը՝ Apple-ն իր պատմության ընթացքում՝ ծնված օրից ի վեր, հաջողության բազում վերելքներ և վայրէջքներ է ունեցել:[cite: 25]
      </p>
    </section>

    {/* The Beatles */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        The Beatles[cite: 25]
      </h3>
      <p>
        Մինչ The Beatles խմբի կազմավորումը Ջոն Լենոնը դպրոցի մի քանի ընկերների հետ նվագում էր The Quarrymen խմբում: Տղաները սկզբում փորձերն անում էին տանը, բայց երբ խմբի անդամներից մեկի ծնողներն այլևս չկարողացան դիմանալ նրանց փորձերի աղմուկին, ապագա աստղերն իրենց փորձերը շարունակեցին ետնաբակի թաքստոցում: 1963թ. աշխարհն արդեն ուներ ֆենոմենալ երիտասարդ երաժիշտների քառյակ:[cite: 25]
      </p>
    </section>

    {/* Amazon */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Amazon[cite: 25]
      </h3>
      <p>
        Amazon-ի պատմությունը սկսվեց 1994թ., երբ Ջեֆ Բեզոսը ավտոտնակը վերածեց գրախանութի՝ դնելով մի քանի ինքնաշեն համակարգիչ: Ծրագիրը զարգացնում էին Սիլիկոնյան հովտից մի քանի տաղանդավոր ծրագրավորողներ: 1995թ. եղան առաջին պատվերները: Բեզոսի հաջողության գաղափարախոսությունն է. «Բիզնեսում կարող եք կենտրոնանալ հաճախորդների և մրցակիցների վրա: Նրանք, ովքեր կենտրոնանում են միայն մրցակիցների վրա, կորցնում են նախաձեռնությունը»: 1999 թ. «Time» ամսագիրը Բեզոսին հիշատակեց որպես տարվա մարդ:[cite: 25]
      </p>
    </section>

    {/* Harley-Davidson */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Harley-Davidson[cite: 25]
      </h3>
      <p>
        1901թ. Ուիլյամ Հարլին փորձում էր իր հեծանիվին շարժիչ կցել: Մի քանի տարվա մեջ Հարլին և իր ընկերը՝ Արթուր Դեվիդսոնը, փայտե տնակում ստեղծեցին նոր շարժիչ, և հենց իրենց knowhow-ի շնորհիվ էլ ստեղծվեց առաջին մոտոցիկլետը: Ահա այսպես սկսվեց լեգենդար Harley-Davidson-ի ուղին: 1905 թ. արդեն վաճառվել էր 3 մոտոցիկլետ, իսկ լեգենդար տնակը հետագայում դրվեց հսկայական գործարանի կենտրոնում, որտեղ մի քանի տասնամյակ կանգնած մնաց՝ ի պատիվ մոտոցիկլետային արտադրության գիգանտի համեստ անցյալի:[cite: 25]
      </p>
    </section>

    {/* Yankee Candle */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Yankee Candle[cite: 25]
      </h3>
      <p>
        Այսօր այս ընկերությունը տոնական մոմերի ամենահայտնի արտադրողն է: Պատմությունը սկսվեց 1969թ. Սբ. Ծննդին, երբ 17-ամյա Մայք Քիթրեջը ավտոտնակում հալեցրեց մի քանի մոմամատիտ, որպեսզի ծնողների համար նվեր պատրաստի: Գործերն այնքան հաջող գնացին, որ անմիջապես եղան առաջին պատվերները:[cite: 25]
      </p>
    </section>

    {/* Microsoft */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Microsoft[cite: 25]
      </h3>
      <p>
        Բիլ Գեյթսն ու Փոլ Ալենը 1975թ. ավտոտնակում հիմնեցին ապագա Microsoft ընկերությունը: Հենց այդ նույն ավտոտնակում նրանք IBM-ի համար լիցենզավորեցին իրենց առաջին օպերացիոն համակարգը 80,000 ԱՄՆ դոլարով: Ավելի ուշ նրանք ստեղծեցին Windows օպերացիոն համակարգը, որը մինչ օրս դոմինանտ է շուկայում:[cite: 25]
      </p>
    </section>

    {/* Maglite */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Maglite[cite: 26]
      </h3>
      <p>
        Էնթոնի Մագլիկը 1955թ. 125 ԱՄՆ դոլարով վարձեց մի ավտոտնակ և գնեց իր առաջին արտադրամեքենան: Այդպես նա հիմնեց հանրահայտ լապտերների ոչ մեծ արհեստանոց: Այսօր Maglite-ը համաշխարհային բրենդ է, որի արտադրանքն ամերիկյան ոստիկանների համազգեստի մի մասն է կազմում:[cite: 26]
      </p>
    </section>

    {/* Mattel */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Mattel[cite: 26]
      </h3>
      <p>
        1945թ. նորապսակներ Ռութ և Էլիոթ Հենդլերները որոշեցին սկսել իրենց բիզնեսը: Իրենց ավտոտնակում նրանք պատրաստեցին նկարների շրջանակներ, իսկ ավելցուկներից՝ տիկնիկների տնակներ: Տիկնիկների արտադրությանը մնում էր միայն մեկ քայլ, և 1959թ նրանք աշխարհին նվիրեցին հանրաճանաչ Barbie տիկնիկները: Ռութ Հենդլերը Բարբի տիկնիկներին տվեց յուրահատուկ փիլիսոփայություն. «Բարբի տիկնիկների հետ յուրաքանչյուր աղջիկ իր երևակայության մեջ կարող է դառնալ այն ինչ ուզում է, և հասնել իր առջև դրած նպատակներին»:[cite: 26]
      </p>
    </section>

    {/* Linksys */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Linksys[cite: 26]
      </h3>
      <p>
        Թայվանից փախստական մի ընտանիք 1988թ. իրենց ավտոտնակում ստեղծեց Linksys-ը: Հետագայում նրանք ձևափոխեցին ավտոտնակը՝ վերածելով այն արհեստանոցի: Այսօր Linksys-ը տան և գրասենյակային ապրանքների ցանցային բրենդ է:[cite: 26]
      </p>
    </section>

    {/* Disney */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Disney[cite: 26]
      </h3>
      <p>
        Դեռ վաղ մանկությունից Ուոլթը հետաքրքրվում էր նկարչությամբ, սակայն նրա ծնողները չունեին թուղթ ու մատիտ գնելու հնարավորություն, և Ուոլթը գտնելով մազութ և փայտ՝ նկարեց տուն... 1923թ. Ուոլթ և Ռոյ Դիսնեյները տեղափոխվեցին ապրելու իրենց քեռու մոտ և ավտոտնակում ստեղծեցին ապագայի ամենախոշոր կինոստուդիան՝ Walt Disney-ը:[cite: 26]
      </p>
    </section>

    {/* Google */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Google[cite: 26]
      </h3>
      <p>
        1998թ. ամռանը Ստենֆորդյան համալսարանի երկու ուսանող՝ Լարի Փեյջն ու Սերգեյ Բրինը, սկսեցին աշխատել Google-ի ստեղծման գաղափարի վրա: Google-ի առաքելությունն է՝ համաշխարհային տեղեկատվության հավաքագրումը, հասանելիությունն ու օգտակարությունը: Այսօր ամբողջ աշխարհում Google-ն ունի ավելի քան 10,000 աշխատող: Հատկանշական է, որ ապագայի որոնողական համակարգի հսկան նույնպես ծնվել է ավտոտնակում:[cite: 26]
      </p>
    </section>

    {/* Hewlett-Packard */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Hewlett-Packard[cite: 26]
      </h3>
      <p>
        1939թ. HP-ն, որն այսօր տեխնոլոգիական ընկերություններից ամենամեծն է, նույնպես սկսել է իր գործունեությունն ավտոտնակում: Հենց այստեղ էլ ստեղծվեց աուդիոդիսփլեյը, որը հետագայում 568 ԱՄՆ դոլարով վաճառվեց Walt Disney ընկերությանը:[cite: 26]
      </p>
    </section>

    {/* Lotus Cars */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Lotus Cars[cite: 27]
      </h3>
      <p>
        1984թ. Էնթոնի Քոլին Բրյուս Չեպմենը ավտոտնակում ստեղծեց մրցավազքի համար նախատեսված իր առաջին սպորտային մեքենան: Այսօր Lotus-ը սպորտային և մրցավազքային ավտոմեքենաների առաջատար անգլիական ընկերությունն է:[cite: 27]
      </p>
    </section>

    {/* Nike */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Nike[cite: 27]
      </h3>
      <p>
        Nike (1964-1978թթ. կոչվել է Blue Ribbon Sport ) ստեղծվել է ուսանող-վազորդի և նրա մարզիչի կողմից: Վերջիններիս բիզնես գաղափարը շատ պարզ էր. Նրանցից յուրաքանչյուրը, ներդնելով 500-ական ԱՄՆ դոլար, գնեցին 300 զույգ ասիական արտադրության սպորտային կոշիկներ և վերավաճառեցին իրենց բրենդի անվան տակ: Ի դեպ, նախնական էտապում ընկերությունն իրեն չէր կարող թույլ տալ ավտոտնակի վարձույթ և առևտուրն արվում էր ավտոմեքենայի բեռնախցիկից:[cite: 27]
      </p>
    </section>

    {/* Patagonia Clothing */}
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Patagonia Clothing[cite: 27]
      </h3>
      <p>
        1959թ. 14 տարեկանում Իվոն Չուինարդը տարվեց ժայռամագլցությամբ: 18 տարեկանում նա գնեց անհրաժեշտ սարքավորումներ և հիմնեց իր ընկերությունը ծնողների ավտոտնակում: Ընկերությունը արտադրում էր հատուկ կեռիկներ՝ յուրաքանչյուրը 1.50 ԱՄՆ դոլարով, իսկ 2012թ. Patagonia Clothing-ն ուներ 500 մլն.ԱՄՆ դոլարի շրջանառություն՝ դառնալով ակտիվ հանգստի համար նախատեսված հագուստի ամենահայտնի բրենդը:[cite: 27]
      </p>
    </section>
  </div>

  <div className="pt-4 border-t border-purple-50 space-y-2">
    <p>
      Այս լեգենդներից և ոչ մեկը չէր էլ պատկերացնի, թե հետագայում ինչի կվերածվեն իրենց ավտոտնակային start-up-երը: Նրանք բռնկված էին հսկայական ոգևորությամբ և չէին վախենում առաջին քայլն անելուց:[cite: 27]
    </p>
    <p>
      Եվ ամենակարևորը՝ նրանք ձգտում էին ստեղծել նորը:[cite: 27]
    </p>
    <p className="font-medium text-gray-800">
      Կարևոր չէ, թե որտեղ և ինչպես է ստեղծվում Ձեր գործը. կարևոր է այն, թե որքան մեծ է մոտիվացիոն շարժիչ ուժը, և թե ինչ է այն արդյունքում տալու մարդկանց:[cite: 27]
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
            <Link to="/blog/business/how-to-start-a-business" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/16691870758279/428x321.jpg" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ինչպե՞ս սկսել բիզնես։ Guide from A to Z                                   </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">05.01.2024</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/blog/business/financial-crises" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/blogs/1/16329967423394/510x383.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ֆինանսական ճգնաժամեր
</h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.07.2020</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/blog/business/successful-negotiations" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/16336139236001/510x383.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Հաջողակ բանակցությունների 10 պատվիրանները                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">18.06.2020</span>
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