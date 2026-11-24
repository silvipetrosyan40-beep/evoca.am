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
Լոգոների ստեղծման պատմությունը


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
Լոգոների ստեղծման պատմությունը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Բոլորն են սիրում խոսել համաշխարհային բրենդերի, նրանց ձեռքբերումների, անցած ուղու և հաջողության գաղտնիքի մասին: Սակայն բրենդի ճանաչելիությունն ու հաջողության պատմությունն…













             </p>
              <p>
18.06.2020

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16339578030358/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Իսկ ի՞նչ գաղտնիքներ են թաքցնում հանրահայտ ընկերությունների լոգոները[cite: 36].
  </p>

  <div className="space-y-6">
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Wikipedia
      </h3>
      <p>
        Wikipedia-ն համաշխարհային հանրագիտարան է[cite: 36]: Լոգոյի յուրաքանչյուր փազլ իր վրա պատկերում է մի լեզվի տառ, որոնք միասին կազմում են «Վիքիպեդիա» բառը[cite: 36]: Բացակա կտորները նշանակում են, որ Wikipedia-ն երբեք չի ավարտվում[cite: 36]: Ի դեպ, հայոց այբուբենի «Վ» տառն իր պատվելի տեղն ունի լոգոյի վրա[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        McDonald's
      </h3>
      <p>
        1940-ից մինչ օրս ընկերությունը բազում անգամներ է փոփոխել իր լոգոտիպը[cite: 36]: Սակայն 1962-ին McDonald's-ի լոգոյին տրվեց ոսկե կամարների՝ իսկ ավելի ճիշտ՝ M տառի տեսք[cite: 36]: Տարաձայնությունները լոգոյի շուրջը չէին դադարում, բայց կար գաղտնիք, որ լոգոն հիշեցնում էր կնոջ կուրծք, ինչը ենթագիտակցորեն բարձրացնում էր ախորժակն ու հաճախորդներին տալիս երջանկության զգացում[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Chupa chups
      </h3>
      <p>
        Բոլորը գիտեն Սալվադոր Դալիի մասին[cite: 36]: Էքսցենտրիկ բեղեր, սյուրռեալիզմ...բայց, գիտեք արդյո՞ք, որ Chupa chups կոնֆետների լոգոյի դիզայնը ստեղծել է հենց ինքը՝ Դալին[cite: 36]: Փայտիկի վրա կոնֆետ ստեղծելու գաղափարը կարճ ժամանակում այնքան մեծ տարածում գտավ, որ ընկերության հիմնադիրը գտավ ֆրիլանս աշխատակցի, ով կզբաղվեր կոնֆետի արտաքին փաթեթավորման դիզայնով[cite: 36]:
      </p>
      <p>
        Դալին ընդամենը մեկ ժամվա մեջ ստեղծեց քաղցրավենիքի պատմության մեջ ամենաուրախ լոգոտիպերից մեկը, և որ ամենակարևորն էր՝ լոգոն նա հարմարեցրեց կոնֆետի վերին հատվածում, որ առաջին իսկ հայացքից լավ տրամադրություն հաղորդեր[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Coca Cola
      </h3>
      <p>
        117 տարվա պատմություն ունի համաշխարհային ճանաչում և սեր վայելող այս գազավորված ըմպելիքի լոգոտիպը[cite: 36]: Լոգոն ստեղծել է ընկերության հիմնադրի ընկերը, ով մասնագիտությամբ հաշվապահ էր[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        BMW
      </h3>
      <p>
        Շատերը կարծում են, որ BMW-ի լոգոն խորհրդանշում է ինքնաթիռի շարժիչ[cite: 36]: Բայց ամեն ինչ ավելի պարզ է. կապույտն ու սպիտակը ներկայացնում են Բավարիայի գույները[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Uber
      </h3>
      <p>
        Uber-ն իր լոգոն նմանեցրեց ատոմի կառուցվածքին, ինչը խորհրդանշում էր, որ իրենց մեքենաները կարելի է գտնել ցանկացած վայրում, ինչպես ատոմները[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Nike
      </h3>
      <p>
        Աշխարհում ամենաճանաչելի լոգոներից մեկն է[cite: 36]: 1971-ին ընկերության հիմնադիրն ընդամենը 35$ վճարեց ուսանողին, որը ստեղծեց մնայուն պատկերանիշ[cite: 36]: Լոգոն, որն այսօր համաշխարհային ճանաչում ունի, տհաճությամբ արժանացավ հաստատման[cite: 36]: Սպորտային հագուստի ապրանքանիշի լոգոն հիշեցնում է հաղթանակի աստվածուհի Նիկեյի թևերը[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Pepsi
      </h3>
      <p>
        Pepsi-ի լոգոն ընկերությանն արժեցել է 1 մլն դոլար[cite: 36]: Լոգոն խորհրդանշում է ոսկե միջինի գաղափարը՝ ներդաշնակ և աչքի համար հաճելի[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Baskin Robbins
      </h3>
      <p>
        Լոգոյի վարդագույն թվերը մատնանշում են, թե քանի տեսակ համային հավելումներ են առաջարկվում նրանց կողմից[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Hyundai
      </h3>
      <p>
        Շատերը վստահ են, որ հանրահայտ ավտոընկերության անվան սկզբնատառն էլ հենց դարձել է ընկերության լոգոտիպը[cite: 36]: Իրականում այն իրար ձեռք սեղմող երկու անձ է՝ մի կողմից հաճախորդը, մյուս կողմից ընկերության ներկայացուցիչը[cite: 36]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Stella Artois
      </h3>
      <p>
        Stella Artois գարեջրի լոգոն պատկանում է ամենատարեց լոգոներին[cite: 37]: 1366-ից մինչ օրս շատ քիչ բան է փոխվել լոգոյում[cite: 37]: Լոգոյի շրջանակն արտացոլում է ֆլամանդական ճարտարապետությունը[cite: 37]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Twitter
      </h3>
      <p>
        Աշխարհի ամենաճանաչելի լոգոներից մեկն արժեցել է 15$[cite: 37]: Ի դեպ, Twitter-ի կապույտ թռչունն անուն է ունեցել՝ Լարրի[cite: 37]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Toblerone
      </h3>
      <p>
        Duty Free-ում ամենաշատ փնտրվող եռանկյուն շոկոլադի փաթեթավորումը ստեղծելիս ոգեշնչվել են Շվեյցարիայի Բեռն քաղաքից, որը հայտնի է նաև արջերի քաղաք անունով[cite: 37]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Burberry
      </h3>
      <p>
        Բրենդը ստեղծվեց 1856-ին[cite: 37]: 1880-ին Թոմաս Բըրբըրին ստեղծեց ջրակայուն կտոր՝ գաբարդին[cite: 37]: Նախնական փուլում նա վերնահագուստ կարում էր միայն բրիտանական բանակի համար[cite: 37]: Իսկ պատերազմի ավարտից հետո նրա աշխատանքները լայն տարածում գտան բնակչության մեջ[cite: 37]: Բրենդի հիմնական նախշը նմանեցված է բրիտանական տաք ավանդական ծածկոցին[cite: 37]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Chanel
      </h3>
      <p>
        Նորաձևության աշխարհը խաչաձև երկու C տառերն առաջին անգամ տեսավ 1886-ին[cite: 37]: Ըստ տեղեկությունների՝ դրանք իրար խաչաձևված պայտեր են՝ որպես հաջողության նշան[cite: 37]: Սակայն բոլորս հակված ենք լոգոյի մեջ տեսնել լեգենդար նորաձևության տան հիմնադրի՝ Կոկո Շանելի անվան սկզբնատառերը[cite: 37]:
      </p>
    </section>
  </div>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Հաջորդ անգամ, երբ նկատես աննշան թվացող տառը կամ պատկերը, հիշի՛ր, որ դրա հիմքում մի ամբողջ հետաքրքիր պատմություն կա[cite: 37]:
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