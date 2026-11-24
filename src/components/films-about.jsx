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
Ֆիլմեր ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1


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
Ֆիլմեր ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս բլոգում մի փոքր շեղվենք ներդրումներից։ Օրինակ՝ ի՞նչ կասեք, եթե այս անգամ խոսենք ֆիլմերի լեզվով։
















             </p>
              <p>
28.08.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17248413426642/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>



<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2 pb-2">
   
    <p className="font-bold text-purple-700">
      Եթե սիրում եք պատմություններ մեծ գումարների, ֆինանսական շուկաների մասին և պարզապես հետաքրքրված եք ներդրումներով, վերցրեք պոպկորնը, դուք արդեն գիտեք՝ ինչ կարելի է դիտել այս երեկո[cite: 30]:
    </p>
  </div>

  <div className="space-y-6">
    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/Wall%20Street%201987.jpg" 
          alt="Wall Street (1987)" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Wall Street (1987)
      </h3>
      <p>
        1980-ականներ, Wall Street: Երիտասարդ բրոքեր Բադ Ֆոքսը տարված է ֆինանսական շուկաներով ու պատրաստ է ամենախելահեղ քայլերի՝ իր հաջող մասնագիտական ուղին կերտելու համար[cite: 30]: Իր համառությամբ Ֆոքսը հասնում է նրան, որ Գորդոն Գեկկոն՝ ֆինանսական աշխարհի խոշորագույն դեմքերից մեկը, դառնում է իր մենթորը ու բացահայտում այս աշխարհն իր ամենահետաքրքիր կողմերով[cite: 30]: Սակայն շուտով ներքաշվելով ինսայդերական թրեյդինգի մեջ՝ Ֆոքսը կանգնում է հավատարմության, բարոյականության ու բարեկեցության ընտրության առջև[cite: 30]:
      </p>
    </section>

    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/Wall%20Street%20Money%20Never%20Sleeps.jpg" 
          alt="Wall Street: Money Never Sleeps" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Wall Street: Money Never Sleeps (2010)
      </h3>
      <p>
        Հաճախ կարող եք լսել նաև Wall Street 2 անվանման տարբերակը՝ որպես 1987թ.-ին էկրաններ բարձրացրած ֆիլմի տրամաբանական շարունակություն[cite: 30]: Դեպքերը տեղի են ունենում 2007-2009 թթ. ճգնաժամի նախօրեին[cite: 30]: 2001 թվականին Գորդոն Գեկկոն ազատ է արձակվում ինսայդերական թրեյդինգի ու խարդախության համար պատիժը կրելուց հետո[cite: 30]: Դուրս գալով երկարատև բանտարկությունից՝ նա փորձում է գտնել իրեն նոր իրականությունում, այն աշխարհում, որը ժամանակին կառավարում էր հենց ինքը[cite: 30]: Մինչ 2008 թվականը Գեկկոն զբաղվում է իր գրքի առաջխաղացմամբ՝ նախազգուշացնելով առաջիկա տնտեսական անկման մասին[cite: 30]: Կարծես հույս ունենալով վերականգնել հարաբերությունները դստեր հետ՝ Գեկկոն սկսում է շփվել դստեր ընկերոջ՝ Ջեյքի հետ, որը նույնպես ֆինանսական աշխարհի էնտուզիաստ է, իդեալիստ բրոքեր[cite: 30]: Ֆիլմում Ջեյքը պատկերացում անգամ չունի, որ բախվել է հին մանիպուլատորի, որը հանուն իր նպատակների, կանգ չի առնի ոչ մի բանի առջև[cite: 30]:
      </p>
    </section>

    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/Margin%20Call.jpg" 
          alt="Margin Call" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Margin Call (2011)
      </h3>
      <p>
        Ֆիլմը պատմում է այն մասին, թե ինչ է լինում, երբ մի ամբողջ ընկերություն, ոչ թե անհատ, գնում է խիստ ռիսկային գործարքների[cite: 31]: Մարջին քոլն իրադրություն է, երբ գործարքների մի մասը կնքվել են փոխառུջ միջոցների հաշվին, և գների կտրուկ փոփոխությունը հանգեցնում է հաշվի՝ սեփական միջոցների շեմին մոտենալուն կամ դրանից նվազելուն[cite: 31]: Այս պարագայում ֆինանսական միջնորդը կարող է պահանջել հաշվի համալրում կամ այն կարող է բերել հաշիվների հարկադիր փակման[cite: 31]:
      </p>
      <p>
        Պատմությունը սկսվում է նրանով, որ երիտասարդ ֆինանսական վերլուծաբանը բացահայտում է վտանգ, ինչը կարող է հանգեցնել ներդրումային բանկի փլուզմանը[cite: 31]: Առաջիկա 24 ժամվա ընթացքում ընկերության ղեկավարները բախվում են սարսափելի ընտրության՝ առաջնահերթություն տալ անձնական պատասխանատվությանը կամ հավատարիմ մնալ իրենց սկզբունքներին[cite: 31]: Որոշումների կայացման այս գործընթացը բացահայտում է ֆինանսական աշխարհում գործելու բարոյական մարտահրավերները, խոշոր ֆինանսական կառույցների ղեկավարների առաջ ծառայող բարդություններն ու կայացվող որոշումների պատասխանատվությունը[cite: 31]:
      </p>
    </section>

    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/The%20Big%20Short.jpg" 
          alt="The Big Short" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        The Big Short (2015)
      </h3>
      <p>
        Կատակերգական-կենսագրական դրամա, որը հիմնված է իրական փաստերի վրա, դեպքերը կառուցված են 2008 թվականի համաշխարհային ֆինանսական ճգնաժամի շուրջ[cite: 31]: Այս ֆիլմը պատմում է մի քանի ֆինանսական վերլուծաբանների և ներդրողների երկրորդաշարժ պատմությունը, որոնք նկատել և կանխատեսել են ԱՄՆ բնակարանային շուկայի փլուզումը և կնքել շահավետ գործարքներ՝ կանխատեսելով շուկայի առաջիկա անկումը[cite: 31]:
      </p>
      <p>
        Ռեժիսոր Ադամ Մաքքեյը վարպետությամբ բացատրում է բարդ տնտեսական գործընթացները մատչելի և զվարճալի ձևով[cite: 32]: Ֆիլմը երաշխավորում է, որ նույնիսկ նրանք, ովքեր անծանոթ են ֆինանսներին, կարող են ըմբռնել իրավիճակի ծանրությունը[cite: 32]: Կրթության և զվարճանքի այս խառնուրդը ֆիլմի առանձնահատկություններից մեկն է[cite: 32]: Այն խորանում է ֆինանսական աշխարհով հետաքրքրվողների պարտադիր դիտման ֆիլմերի շարքում[cite: 32]: The Big Short-ը գրեթե միշտ կա ֆինանսական աշխարհով հետաքրքրվողների պարտադիր դիտման ֆիլմերի շարքում[cite: 32]:
      </p>
    </section>

    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/Arbitrage.jpg" 
          alt="Arbitrage" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Arbitrage (2012)
      </h3>
      <p>
        Ֆիլմում միահյուսված են ֆինանսական մեծ աշխարհն ու գլխավոր հերոս Ռոբերտ Միլերի անձնական ու մասնագիտական կյանքը[cite: 32]: Սա ֆիլմ է բարոյական երկընտրանքների ու էթիկական փոխզիջումների մասին, որոնք հաճախ բախվում են հարստության ու իշխանության ձգտմանը[cite: 32]: Միլերի կյանքը թվում է նախանձելի՝ հաջող բիզնես, սիրելի ընտանիք, այնուամենայնիվ, հաջողության շղարշի տակ քողարկված է մասնագիտական խարդախություն, որն իր գործողություններով վտանգի տակ է դնում նույնիսկ ընտանիքի անդամների ապագան ու ազատությունը[cite: 32]: Ֆիլմում կարևոր հարցեր են բարձրացված բիզնեսի առաջնորդների էթիկական պարտականությունների ու հասարակության վրա նրանց որոշումների ազդեցության մասին[cite: 32]:
      </p>
      <p>
        «Արբիտրաժը» ավելին է, քան պարզապես ֆինանսական թրիլեր[cite: 32]: Այն նախազգուշական պատմություն է չվերահսկվող փառասիրության վտանգների և բարոյական փոխզիջումների մասին, որոնք հաճախ ուղեկցում են հարստության ձգտմանը[cite: 32]: Ֆիլմը պատմում է էթիկական մարտահրավերների և մարդկային կորուստների մասին, որոնք կապված են մասնագիտական կյանքի հետ ֆինանսների մեծ աշխարհում[cite: 32]: Ներդրողների և մասնագետների համար «Արբիտրաժը» ծառայում է որպես համոզիչ հիշեցում ազնվության կարևորության և էթիկական բացթողումների հնարավոր հետևանքների մասին[cite: 32]:
      </p>
    </section>

    <section className="space-y-2">
      <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
        <img 
          src="https://www.evoca.am/file_manager/Dump%20Money.jpg" 
          alt="Dumb Money" 
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Dumb Money (2023)
      </h3>
      <p>
        Ասում են՝ փողն է կառավարում աշխարհը, իսկ մեծ փողերը Wall Street-ում են, և եթե այնտեղ վերևում, որոշեցին, որ տեսախաղերի վաճառքով զբաղվող խանութը պետք է գնա սնանկացման, ապա հենց այդպես էլ կլինի[cite: 33]: Սակայն մի օր սովորական մարդիկ՝ բլոգերներ, տնային տնտեսուհիներ, փոքր ներդրողներ, պարզապես տեսախաղերի սիրահարներ համախմբվեցին և սոցիալական հարթակների միջոցով հաղթահարեցին այս Wall Street-յան պատը ու ցույց տվեցին, որ հնարավոր է տանել լիհրավ պայքար նաև բիզնեսի հսկաների դեմ[cite: 33]: Ֆիլմը հիմնված է իրական փաստերի վրա, պատմություն է մեր ժամանակների ամենաքննարկված ֆինանսական իրադարձություններից մեկի մասին[cite: 33]:
      </p>
    </section>
  </div>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Երևի արդեն ընտրել եք՝ որ ֆիլմը դիտել առաջինը: Դե ֆիլմն էլ առանց պոպկորնի՝ կիսատ է: Ձեր ժամանակը խնայելու համար՝ խորհուրդ կտանք գնել պոպկորն միկրոալիքային վառարանում պատրաստելու համար, թողնել 1 րոպե, և, վոուլա, այն պատրաստ է[cite: 33]:
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