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
Mann Deshi Bank – կանանց համար առաջին բանկը և բանկային դպրոցը


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
Mann Deshi Bank – կանանց համար առաջին բանկը և բանկային դպրոցը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Հնդկաստանի մի փոքրիկ գյուղում Chetna Sinha անունով մի կին 1997թ․-ին հիմնադրել է առաջին բանկը կանանց համար, որը կառավարվում է միայն կանանց կողմից։














             </p>
              <p>
07.03.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17038544649688/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Chetna-ն ծնվել և մեծացել է Mumbai քաղաքում, որտեղ էլ ավարտել է քոլեջը և ձեռք բերել տնտեսագետի մասնագիտություն[cite: 26]:
  </p>
  <p>
    Քոլեջն ավարտելուց հետո, աշխատելով մի շարք ֆինանսական հաստատություններում, Chetna-ն նկատում է, որ այն կանայք, որոնք չունեին մասնագիտություն, իրեն հավասար աշխատում էին, սակայն երբեք չէին վաստակում նույնչափ գումար, իսկ նրանցից շատերն անգամ չէին եղել բանկում[cite: 26]: Ինչո՞ւ: Որովհետև այս կանայք չնչին գումար էին աշխատում, իսկ մյուս բանկերը չէին սպասարկում նրանց[cite: 26]:
  </p>
  <p>
    Ըստ Chetna-ի՝ Հնդկաստանում միջին և ավելի եկամուտ ունեցող կանանց համար շատ հեշտ էր գնալ բանկ և հաշիվ բացել, բայց ցածր եկամուտ ունեցողները միշտ մերժվում էին անգամ այն պարագայում, երբ նրանք ցանկանում էին խնայողություններ կատարել բանկում ավանդի տեսքով[cite: 26]:
  </p>
  <p>
    Chetna-ն չկարողացավ անտեսել այս անարդարության կողով և որոշեց բացել սեփական բանկը ցածր եկամուտ ունեցող կանանց համար՝ հիմնավորելով, որ եթե ոչ մի բանկ պատրաստ չէ օգնել այս կանանց, իր բանկը կԱնի դա[cite: 26]:
  </p>
  <p>
    Chetna-ն հավաքեց մի քանի գյուղաբնակ կանանց, ստեղծեց իր փոքրիկ թիմը և դիմեց բանկային լիցենզիայի համար[cite: 26]:
  </p>
  <p>
    Քանի որ թիմի կանայք չունեին կրթություն և հետևաբար չէին կարողանում գրել ու կարդալ, Chetna-ի բանկային լիցենզիան մերժվում է[cite: 26]: Երբ Chetna-ն արդեն անհույս էր, թիմից մի կին նրան ասում է. «Ճիշտ է, մենք չգիտենք գրել ու կարդալ, սակայն մենք կարող ենք հաշվել»: Այս նախադասությունը ոգեշնչում է Chetna-ին, և շուրջ 5 ամիս նա սովորեցնում է իր թիմին ֆինանսներ և հաշվապահություն[cite: 26]: Նրանք որոշում են կրկին դիմել լիցենզիայի համար[cite: 26]: Այս անգամ ամբողջ թիմը պատրաստված էր, և երբ նրանց առաջադրանք է տրվում հաշվել տոկոսադրույքը առանց հաշվիչների, նրանք ավելի արագ հաշվարկեցին, քան ստուգողները[cite: 26]: Chetna-ին հաջողվեց ստանալ լիցենզիա[cite: 26]:
  </p>
  <p>
    Chetna-ն վերջապես կարողացավ բացել առաջին բանկը Mann Deshi-ն, գյուղաբնակ կանանց համար[cite: 26]: Այս ամենին հաջորդում է մյուս մարտահրավերը. գյուղաբնակ կանայք սկսում են բողոքել, որ չեն կարող այցելել բանկ, քանի որ աշխատում են մինչ ուշ երեկո[cite: 26]: Բայց Chetna-ի թիմը գտնում է խնդրի լուծումը[cite: 26]: Նրանք ստեղծում են door-step բանկային համակարգ, որի միջոցով բանկի աշխատակիցներն անձամբ էին մոտենում տվյալ կանանց և տրամադրում smart card-եր, որոնց միջոցով էլ կանայք պահում էին իրենց խնայողությունները[cite: 26]:
  </p>
  <p>
    Ներկայումս Chetna-ի բանկն ունի 7 մասնաճյուղ, ավելի քան 185,000 հաճախորդ և օրական իրականացնում է 10,000 գործարք[cite: 26]: Բանկն այս ընթացքում իրականացրել է շուրջ 50 մլն դոլարի վարկավորում՝ օգնելով մի շարք կանանց ստեղծել իրենց սեփական բիզնեսները[cite: 26]:
  </p>
  <p>
    Բանկը մինչ օրս էլ կառավարվում է միայն կանանց կողմից և շարունակում է օգնել ցածր եկամուտ ունեցող կանանց[cite: 26]: Բանկը նաև համագործակցում է միջազգային կազմակերպությունների հետ՝ British Asia Trust, GIZ, Deutche Bank, Bonita Trust և այլն[cite: 26]: Այս ամենից բացի՝ Mann Deshi բանկը կատարում է բարեգործություններ, նվիրատվություններ առողջապահական հաստատություններին, ստեղծել է բիզնես դպրոց, որտեղ կանայք կարող են կրթություն ստանալ[cite: 26]:
  </p>
  <p>
    Բայց նախքան ավարտելը՝ մի հետաքրքիր պատմություն էլ պատմենք Chetna-ի մասին[cite: 26]: Նա ուժեղ կնոջ լավագույն օրինակներից է, նվ գերազանց հաղթահարեց յուրաքանչյուր մարտահրավեր, մոտիվացրեց և մոտիվացվեց[cite: 26]:
  </p>
  <p>
    TED Talks հաղորդմանն իր խոսքի ընթացքում Chetna-ն մի շատ հետաքրքիր պատմություն պատմեց[cite: 26]: Նա նշեց, որ բոլորին թվում է՝ ինչքան էլ բոլոր կանայք սովորեցրել, բայց իրականում Chetna-ն շատ բան է սովորել նաև ուրիշներից և խۆսեց մի աղջկա մասին, որը հիանալի օրինակ էր իր տեսակով[cite: 26]:
  </p>
  <p>
    Մի օր բանկ է այցելում մի աղջիկ, որը ավարտել էր միջնակարգ դպրոցը և կրթությունը պետք է շարունակեր ավագ դպրոցում[cite: 27]: Նա եկել էր մի խնդրանքով. աղջիկն ամառային արձակուրդի ընթացքում ցանկանում էր աշխատել բանկում, որպեսզի գումար հավաքեր և հեծանիվ գներ[cite: 27]: Հեծանիվը նրան հարկավոր էր դպրոց հասնելու և ավտոբուսի գումարը խնայելու համար[cite: 27]: Այս օրինակը Chetna-ն օգտագործեց որպես հնարավորություն, և արդեն 3 տարի անց Mann Deshi բանկի կողմից շուրջ 10,000 աղջիկ ստացավ միջոցներ՝ հեծանիվ ձեռք բերելու և դպրոց հասնելու համար[cite: 27]:
  </p>
  <p>
    Հիանալի էր, չէ՞: Կյանքում մեզ բազմիցս տրվում են հնարավորություններ, բայց հաղթում է նա, ով ճիշտ պահին օգտագործում է այդ հնարավորությունը և չի վախենում մարտահրավերներից[cite: 27]:
  </p>
  <p>
    Մանրամասների համար կարող եք անցնել <a href="https://www.ted.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">հղումով</a> և դիտել Chetna-ի պատմությունը TED Talks-ի ընթացքում[cite: 27]:
  </p>
  <p>
    Մաղթում ենք հաճելի դիտում[cite: 27]:
  </p>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Սիրով՝ քո Evoca...
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