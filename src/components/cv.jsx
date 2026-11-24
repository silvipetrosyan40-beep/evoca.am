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
Աշխատա՞նք ես փնտրում, սկսիր cv-ից


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
Աշխատա՞նք ես փնտրում, սկսիր cv-ից
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այսօր աշխատանքային շուկան բավականին մրցակցային է:












             </p>
              <p>
18.06.2020

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16336124216033/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  
  <p>
    Այն անընդհատ համալրվում է նոր՝ պահանջված մասնագիտություններով և ժամանակակից պահանջներին համապատասխանող մասնագետներով[cite: 38]: Այդ իսկ պատճառով աշխատանքի ընդունվելու համար կարևոր պայման է զինված լինել համապատասխան գիտելիքներով, իսկ որոշ դեպքերում՝ նաև փորձով[cite: 38]:
  </p>
  <p>
    Սակայն, պակաս կարևոր չէ նաև դրանց ճիշտ ներկայացումը, քանի որ հենց առաջին տպավորությունից է կախված՝ արդյո՞ք գործատուն կհրավիրի քեզ հարցազրույցի, թե քո նամակը կկորչի բազում այլ մեյլերի մեջ[cite: 38]: Պետք չէ մոռանալ, որ գործատուներն ամենաշատը 30 վայրկյան են տրամադրում այն աչքի անցկացնելու համար, որպեսզի որոշեն՝ դու համապատասխանում ես նրանց պահանջներին, թե ոչ[cite: 38]:
  </p>
  <p>
    Որպեսզի ապագա գործատուն հարյուրավոր դիմողներից հետաքրքրվի հենց քո թեկնածությամբ, հարկավոր է ներկայացնել հնարավորինս տպավորիչ cv[cite: 38]: Սակայն տպավորություն գործելու համար պետք չէ չափազանցնել, դա հեշտությամբ բացահայտվում է[cite: 38]:
  </p>
  <p>
    CV-ն գրագետ ու տպավորիչ դարձնելու համար պետք է հետևել հստակ կանոնների[cite: 38].
  </p>

  <div className="space-y-6">
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        1. CV-ն պետք է լինի հակիրճ ու հստակ, չպարունակի ավելորդ տեղեկություն
      </h3>
      <p>
        Լավագույն դեպքում պետք է սահմանափակվել 1 կամ 2 էջով և չգրել այնպիսի մանրամասներ, որոնք ձանձրալի կլինեն գործատուի համար[cite: 38]: Նմանօրինակ տարածված սխալներից են, օրինակ՝ ամուսնական կարգավիճակ, ազգություն, քաղաքացիություն, ծննդյան տարեթիվ կամ վայր նշելը[cite: 38]: Հավատա, եթե դու իրոք համապատասխանում ես, այդ փաստերը դժվար թե հետաքրքրեն գործատուին[cite: 38]: Ճիշտ չէ նաև ռեզյումեի առաջին տողում cv կամ resume վերնագիր դնելը. այդտեղ պետք է գրվի միայն անուն-ազգանունը[cite: 38]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        2. Կոնտակտային տվյալներ
      </h3>
      <p>
        CV-ին լուսանկար կցելու կետը դեռևս խնդրահարույց է. ոմանք կարծում են, որ եթե աշխատանքի հայտարարության մեջ նշված չէ լուսանկարի առկայության մասին, ապա պետք չէ կցել, բայց շատերն էլ կարծում են, որ արտաքին տեսքը շատ բան է պատմում մարդու մասին[cite: 38]: Հետևաբար, հաջողված լուսանկարը միգուցե և քո օգտին աշխատի, բայց ոչ այնպիսի լուսանկար, որն ավելի շատ համապատասխանում է սոց. ցանցերի չափանիշներին[cite: 38]: CV-ում պետք է անպայման նշել կոնտակտային տվյալներ՝ հեռախոսահամար, մեյլ, հասցե[cite: 38]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        3. Աշխատանքային փորձի նկարագրություն
      </h3>
      <p>
        Հաճախ cv գրելու ամենադժվար փուլը փորձառությունը տպավորիչ ներկայացնելն է՝ անկախ նրանից, թե ինչպիսին է քո ունեցած փորձը[cite: 38]: Հետևիր այս պարզ քայլերին՝ պոտենցիալ գործատուին քո փորձառությունն ավելի լավ ներկայացնելու համար՝
      </p>
      <ul className="space-y-2 pl-2 pt-1">
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Կազմիր աշխատանքային փորձի ցանկ, ներառյալ կամավորական աշխատանքները[cite: 38],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Ցանկալի է յուրաքանչյուր միտք սկսել գործողություն ցույց տվող բառից՝ կիրառված հմտությունները նկարագրելու համար[cite: 38],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Ընտրիր հինգ-վեց բառ, որոնք առավել լավ են նկարագրում քո պարտականությունները[cite: 38],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Յուրաքանչյուր փորձի համար տուր կատարված աշխատանքի նկարագիրը, ձեռքբերումները, կիրառած հմտությունները և կարողությունները[cite: 38],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Օգտագործիր մասնագիտական լեզու[cite: 38],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>Աշխատանքային փորձը դասավորիր հակառակ հերթականությամբ՝ նորից հին[cite: 38]: Այսինքն՝ առաջին հերթին գրվում է այն աշխատանքը, որով հիմա ես զբաղվում, այնուհետև նախկին աշխատանքները[cite: 38]:</span>
        </li>
      </ul>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        4. Կրթություն
      </h3>
      <p>
        Կրթությունը նույնպես նշվում է հակառակ հերթականությամբ[cite: 39]: Եթե ունես բարձրագույն կրթություն, ապա դպրոցի մասին տեղեկությունը կարելի է բաց թողնել[cite: 39]: Նշում ենք համալսարան ընդունվելու և ավարտելու տարեթվերը, կրթական հաստատության անվանումը, ֆակուլտետը և բաժինը[cite: 39]: Եթե մասնակցել եք որոշ դասընթացների, թրեյնինգների, ապա անպայման նշեք դրանք[cite: 39]: Պետք չէ cv-ում ներառել այնպիսի դասընթացներ, որոնք տվյալ ոլորտին չեն առնչվում և քեզ՝ որպես տվյալ պաշտոնի թեկնածու, արժեք չեն ավելացնում. օրինակ՝ եթե դիմում ես ֆինանսական վերլուծաբանի պաշտոնի համար, ապա քո երաժշտական դպրոցի, նկարչական դասընթացների դիպլոմները պետք չէ ներառել cv-ում[cite: 39]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        5. Մասնագիտական հմտություններ և լեզուների իմացություն
      </h3>
      <p>
        Սա հենց այն կետն է, երբ գործատուն իմանում է քո առանձնահատուկ հմտությունների մասին[cite: 39]: Եթե տիրապետում ես տարբեր լեզուների, համակարգչային և մասնագիտական այլ հմտությունների, անպայման գրիր այդ մասին[cite: 39]: Մյուս կողմից էլ կարիք չկա նշելու այն հմտությունները, որոնք կապ չունեն գործի բնույթի հետ, օրինակ. բանկ դիմելիս իմաստ չունի նշել, որ հմուտ խոհարար ես[cite: 39]:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        6. Մոտիվացիոն կամ ուղեկցող նամակ
      </h3>
      <p>
        Որքան էլ քո cv-ն տպավորիչ լինի, շատ քիչ գործատուներ քո թեկնածությունը կդիտարկեն առանց ուղեկցող նամակի առկայության[cite: 39]: Այդ պատճառով նպատակահարմար է թափուր աշխատատեղին դիմելիս ուղեկցող նամակ կցել, նույնիսկ եթե այդպիսի պահանջ ներկայացված չէ, որովհետև լավ գրված մոտիվացիոն նամակը կարդացողին ծանոթացնում է քո կենսագրությանը և սևեռում ուշադրությունը կարևոր հատկանիշների վրա[cite: 39]: Ի՞նչ հիմնական և կարևոր կետերի վրա պետք է կենտրոնանալ մոտիվացիոն նամակ կազմելիս[cite: 39].
      </p>
      <ul className="space-y-2 pl-2 pt-1">
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>ողջույնի խոսքն ուղղիր հստակ հասցեատիրոջը[cite: 39],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>նշիր, թե ինչու ես հետաքրքրված տվյալ աշխատանքով, ինչ գիտես այդ պաշտոնի պարտականությունների մասին[cite: 39],</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span>մի օգտագործիր տարածված արտահայտություններ՝ նպատակասլաց, աշխատասեր, պատասխանատու, քանի որ անմիջապես աչքի է ընկնում այն, որ դուք ինչ-որ տեղից եք դա վերցրել[cite: 39]: Նկարագրիր քո յուրահատկությունները և ձեռքբերումները[cite: 39]: Փորձի բացակայության դեպքում շեշտը դիր գիտելիքներիդ նկարագրության և կամավորական աշխատանքների վրա[cite: 39]: Այսպիսով մոտիվացիոն նամակում կարևորվում է ոչ այնքան փորձն ու հմտությունները, այլ մոտիվացիան[cite: 39]:</span>
        </li>
      </ul>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        7. Երբ արդեն պատրաստ է cv-ն ու մոտիվացիոն նամակը, ուշադրություն դարձրու.
      </h3>
      <ul className="space-y-2 pl-2 pt-1">
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">ուղղագրությանը.</strong> cv-ն քո դեմքն է, քո կերպարը[cite: 39]: Եթե ուղղագրական սխալ ես թույլ տվել անգամ 2 էջանոց cv-ում, ապա որքան սխալներ կգործես աշխատանքի մեջ...[cite: 39]</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">տառաչափերին.</strong> բոլոր վերնագրերը պետք է գրված լինեն միևնույն տառաչափով, իսկ ընդհանուր տեքստը՝ ավելի փոքր տառաչափով[cite: 39]:</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">տառատեսակներին.</strong> cv-ում կիրառված տարբեր տառատեսակները cv-ին անփույթ տեսք են տալիս և միանգամից վանում գործատուին[cite: 39]:</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">հեշտ և արագ ընթեռնելի խոսքին.</strong> պետք է գրել կարճ, կոնկրետ, լակոնիկ՝ միևնույն ժամանակ փոխանցելով անհրաժեշտ տեղեկատվությունը[cite: 39]:</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">ֆորմատին.</strong> cv պետք է ուղարկել միայն .pdf ֆորմատով[cite: 39]: Երբեք չես իմանա՝ արդյոք գործատուի համակարգչում կա այս կամ այն տառատեսակը, և ինչ տեսքով կբացվի քո ուղարկած .doc ֆայլը[cite: 39]:</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
          <span><strong className="text-purple-700">ձևանմուշներին.</strong> ինտերնետում կարող ես գտնել cv-ի բազմաթիվ ձևանմուշներ, որոնք հաճախ գեղեցիկ են ու հարմար, սակայն գործատուն հստակ տեսնում է, որ դու կիրառել ես ինտերնետից ներբեռնած ֆայլ՝ առանց սեփական ներդրման, ու հաճախ անտեսում է օրինակ europass cv-ները[cite: 39]: Եթե անգամ կիրառում ես ձևանմուշ, փոքր-ինչ ձևափոխիր այն[cite: 39]:</span>
        </li>
      </ul>
    </section>
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