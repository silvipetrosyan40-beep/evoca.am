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
    Ամեն ինչ բանկոմատների մասին
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
Ամեն ինչ բանկոմատների մասին
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ինչպե՞ս օգտվել բանկոմատից անվտանգ և ապահով:






















              </p>
              <p>
31.01.2024
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16679076091685/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

  
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2 pb-2">
   
  </div>

  <p>
    Կար ժամանակ, երբ բանկի հետ որևէ գործարք անելու համար պարտադիր էր այցելել բանկ[cite: 15]: Սակայն 1960-ականներին հայ գյուտարար Լյութեր Ջորջ Սիմջյանի գյուտը փոխեց աշխարհը՝ թույլ տալով մարդկանց ստանալ գումար և կատարել այլ բանկային գործողություններ՝ առանց բանկ այցելելու կամ բանկային աշխատակցի հետ շփման[cite: 15]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ի՞նչ է բանկոմատը[cite: 15]
  </h3>
  <p>
    <strong className="text-purple-700">Բանկոմատը</strong> (ATM - automated teller machine) էլեկտրոնային սարքավորում է, որը հնարավորություն է տալիս քարտով կառավարել բանկային հաշիվներն ու կատարել գործարքներ[cite: 15]:
  </p>
  <p>
    Բանկոմատի միջոցով կարելի է տեսնել Ձեր քարտի մնացորդը և կանխիկացնել գումար[cite: 15]: Շատերը բանկոմատից օգտվում են հենց այս նպատակով[cite: 15]:
  </p>
  <p>
    Սակայն ժամանակակից բանկոմատներն ունեն մի շարք հավելյալ հնարավորություններ՝[cite: 15]
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>մուտք անել կանխիկ գումար Ձեր քարտային հաշվին[cite: 15],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>կատարել տարադրամի փոխանակում[cite: 15],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>կատարել ծառայությունների վճարումներ[cite: 15],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>ստուգել կենսաթոշակային հաշիվը[cite: 15]:</span>
    </li>
  </ul>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Evoca բանկոմատներով կարելի է նաև՝[cite: 15]
  </h3>

  <ul className="space-y-4 pl-2">
    <li className="space-y-1">
      <div className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <strong className="text-purple-700">Ակտիվացնել նոր ստացված քարտը[cite: 15].</strong>
      </div>
      <p className="pl-5 text-gray-600 text-sm sm:text-base">
        Քարտի ակտիվացման համար տեղադրեք Ձեր քարտը բանկոմատի մեջ, սեղմեք Քարտի ակտիվացում, մուտքագրեք Ձեր հեռախոսահամարին sms եկած ակտիվացման կոդը և սեղմեք Ուղարկել։ Այսուհետ մուտքագրեք Ձեր նոր PIN կոդը, որից հետո ևս մեկ անգամ կրկնեք այն։ Ձեր քարտն ակտիվ է[cite: 15]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <strong className="text-purple-700">Փոխել քարտի գաղտնաբառը[cite: 15].</strong>
      </div>
      <p className="pl-5 text-gray-600 text-sm sm:text-base">
        Քարտի գաղտնաբառը փոխելու համար տեղադրեք Ձեր քարտը բանկոմատի մեջ, սեղմեք Այլ ծառայություններ, ապա PIN-ի փոխություն, և հետևեք հրահանգներին[cite: 15]:
      </p>
    </li>
    <li className="space-y-1">
      <div className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <strong className="text-purple-700">Կատարել անքարտ կանխիկացում[cite: 15].</strong>
      </div>
      <p className="pl-5 text-gray-600 text-sm sm:text-base">
        Անքարտ կանխիկացման համար <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածով քարտային կամ այլ հաշիվներից կարող եք կանխիկացնել գումար՝ գեներացնելով 8-անիշ կոդ, ինչպես նաև՝ ակնթարթորեն գումար փոխանցել այլ անձանց՝ անկախ նրանից, թե նրանք որ բանկի հաճախորդ են։ Վերջիններս ստանալով համապատասխան SMS հաղորդագրությունը՝ կարող են մոտենալ ցանկացած <strong className="text-purple-700">Evoca</strong> բանկոմատի և Անքարտ կանխիկացում կոճակով վայրկյանական ստանալ ուղարկված գումարը։ Մանրամասները կարող եք տեսնել <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 15]:
      </p>
    </li>
  </ul>

  <p>
    Այլ ծառայություններ բաժնում կարող եք նաև կատարել Քարտից քարտ փոխանցում կամ դիտել Ձեր կենսաթոշակային հաշվի քաղվածքը[cite: 15]:
  </p>
  <p>
    Evoca անհարում NFC բանկոմատներով Դուք կարող եք նույնիսկ գումար կանխիկացնել Ձեր սմարթֆոնով կամ ժամացույցով՝ Apple Pay-ի միջոցով (գաղտնի հուշում՝ շուտով նաև Google Pay-ով)։ Պարզապես մոտեցրեք Ձեր հեռախոսը բանկոմատի այն մասին, որտեղ պատկերված է անհարում վճարման նշանը, այնուհետև մուտքագրեք գաղտնաբառը և կատարեք կանխիկացում[cite: 15]:
  </p>
  <p>
    Evoca բանկոմատների հասցեները կարող եք գտնել <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 15]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ինչպե՞ս գումար ստանալ բանկոմատից[cite: 16]
  </h3>
  <p>
    Կախված բանկոմատի մոդելից՝ գումար կանխիկացնելու քայլերը կարող են տարբերվել, սակայն հիմնական տրամաբանությունը նույնն է՝[cite: 16]
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Տեղադրեք Ձեր քարտը բանկոմատում, իսկ NFC քարտի կամ սմարթֆոնի ու ժամացույցի դեպքում պարզապես մոտեցրեք քարտը բանկոմատի NFC նշանին[cite: 16],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Մուտքագրեք քարտի PIN կոդը[cite: 16],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ընտրեք կանխիկ գումարի չափն առաջարկվող տարբերակներից կամ մուտքագրեք գումարն ինքնուրույն[cite: 16],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Վերցրեք կանխիկ գումարը բանկոմատի դրամարկղից[cite: 16],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հետևեք բանկոմատի էկրանի ցուցումներին՝ կանխիկացումն ավարտելու համար[cite: 16],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Չմոռանաք վերցնել քարտը, եթե այն սկզբում տեղադրել էիք բանկոմատում[cite: 16]:</span>
    </li>
  </ul>

  <p>
    Գործարքի վերջում թղթային կտրոն չպահանջելով (եթե վերջինիս անհրաժեշտությունը չկա)՝ Դուք կօգնեք նվազեցնել թղթի կիրառումը և պահպանել բնությունը։ Իսկ գործարքի մասին տեղեկատվությունը կարող եք ստանալ SMS-ով, կամ տեսնել այն Ձեր մոբայլ բանկինգի հավելվածում[cite: 16]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Որքա՞ն գումար կարող եք կանխիկացնել բանկոմատից[cite: 16]
  </h3>
  <p>
    Գումարի կանխիկացման համար սովորաբար սահմանվում է 1 գործարքի, ինչպես նաև՝ օրական բոլոր գործարքների հանրագումարի առավելագույն սահմանաչափեր։ Այս սահմանաչափերը որոշվում են Ձեր քարտը սպասարկող բանկի կողմից։ Այդ գումարները կարելի է փոխխել՝ այցելելով Ձեր բանկ[cite: 16]:
  </p>
  <p>
    Բանկոմատներն նույնպես ունենում են կանխիկացման առավելագույն չափ։ <strong className="text-purple-700">Evoca</strong>-ի բանկոմատներից 1 գործարքի ընթացքում կարելի է կանխիկացնել առավելագույնը 400,000 դրամ[cite: 16]:
  </p>
  <p>
    Արտերկիր ճանապարհորդելիս հաշվի առեք նաև, որ բանկոմատներից գումար կանխիկացնելիս Ձեզնից կգանձվի միջնորդավճար։ Միջնորդավճարի չափը սովորաբար սահմանված է լինում Ձեր բանկի կողմից և ունենում է նվազագույն գումար, օրինակ՝ գումարից 1%, սակայն նվազագույնը՝ 1,500 դրամ։ <strong className="text-purple-700">Evoca</strong>-ի քարտերի սպասարկման պայմաններին և սակագներին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 16]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ի՞նչ անել, երբ քարտը մնում է բանկոմատի մեջ[cite: 16]
  </h3>
  <p>
    Բանկոմատից օգտվելու ընթացքում, եթե Ձեր քարտը պատահմամբ մնում է բանկոմատի մեջ, կարիք չկա անհանգստանալու։ Կարող եք ընդհանրապես ոչինչ չանել։ Քարտը, միևնույն է, կարճ ժամանակահատվածում կհանվի բանկոմատի միջից ու կփոխանցվի Ձեր բանկին։ Ձեր բանկից կապ կհաստատեն Ձեզ հետ, և Դուք կկարողանաք վերցնել Ձեր քարտը՝ անձնագրով կամ նույնականացման քարտով[cite: 16]:
  </p>
  <p>
    Ցանկության դեպքում Դուք կարող եք բանկոմատի վրա նշված հեռախոսահամարով տեղեկացնել բանկոմատի բանկին, որ Ձեր քարտը բանկոմատի մեջ է մնացել, ինչպես նաև՝ զանգահարել Ձեր բանկ ու ժամանակավորապես բլոկավորել քարտը[cite: 16]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Անվտանգության խորհուրդներ բանկոմատից օգտվելիս[cite: 17]
  </h3>
  <p>
    Մենք առանձնացրել ենք մի քանի խորհուրդ բանկոմատից անվտանգ օգտվելու համար, հատկապես՝ երբ ճանապարհորդում եք ու գտնվում Հայաստանից դուրս[cite: 17]:
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ուշ ժամերին ընտրեք ավելի լուսավորված, հսկողության տեսախցիկով կահավորված և բաց վայրերում տեղակայված բանկոմատներ։ Բանկի ներսում կամ խանութներում տեղակայված բանկոմատն ավելի ապահով է, քան փոքր փողոցի չլուսավորված անկյունում գտնվողը[cite: 17].</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Մինչև բանկոմատից օգտվելը ուշադրություն դարձրեք՝ արդյոք բանկոմատի մոտակայքում կան կասկածելի անձինք։ Նման մեկին նկատելու դեպքում ավելի լավ է այդ պահին գումար չհանել։ Վերադարձեք ավելի ուշ, կամ օգտվեք այլ բանկոմատից[cite: 17].</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանից դուրս կարող եք հանդիպել drive-thru ATM-ների։ Սրանք բանկոմատներ են, որոնցից կարող եք օգտվել անմիջապես մեքենայի միջից։ Այս դեպքում մեքենայի դռները պարզապես պահեք կողպված։ Գումարը հանելու հետո աշխատեք չթողնել այն մեքենայում երևացող հատվածում։ Այն նկատելու դեպքում մեքենայի պատուհանը կարող են կոտրել և հափշտակել գումարը[cite: 17].</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գաղտնի պահեք Ձեր քարտի PIN կոդը։ Հասարակական վայրում վճարում կատարելիս և PIN կոդը մուտքագրելիս՝ ծածկեք ստեղնաշարը ձեռքով կամ այլ հարմար առարկայով։ Եթե նկատում եք, որ ինչ-որ մեկը չափազանց ուշադիր է նայում ստեղնաշարին, կարող եք խնդրել նրան մի փոքր հեռու կանգնել՝ հարգելով Ձեր ֆինանսական տվյալների գաղտնիությունը[cite: 17].</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բանկոմատի մոտ կանգնած՝ գումարը մի հաշվեք. այն տեղավորեք դրամապանակի կամ պայուսակի մեջ[cite: 17]:</span>
    </li>
  </ul>

  <p>
    Եվ վերջում՝ քարտի կորուստի դեպքում անհապաղ կապ հաստատեք Ձեր բանկի հետ՝ <strong className="text-purple-700">Evocabank</strong>՝ <strong className="text-purple-700">010605555</strong> կամ <strong className="text-purple-700">099605555</strong> (Viber, WhatsApp, Telegram) կամ տեղում բլոկավորեք Ձեր քարտը <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածում[cite: 17]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    20 փաստ բանկոմատի մասին, որ դեռ չգիտես[cite: 17]
  </h3>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Միջինում բանկոմատը կիրառվում է ամսական 300 անգամ[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանում միջինում 100,000 մարդու հաշվարկով տեղադրված է 65 բանկոմատ[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Այսօր աշխարհում գործում է ավելի քան 5 միլիոն բանկոմատ[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանում այսօր գործում է 1,116 բանկոմատ[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ամենաշատ գումարը կանխիկացվում է ուրբաթ օրերին[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Խանութում բանկոմատ տեղադրելուց հետո խանութի վաճառքներն աճում են միջինում 20%-ով[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Առաջին բանկոմատները տրամադրում էին առավելագույնը 14 ԱՄՆ դոլարի գումար[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բրազիլիայում կան PIN-ի փոխարեն մատնահետքով աշխատող բանկոմատներ[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Աշխարհում բանկոմատից կանխիկացման միջին գումարը 60 ԱՄՆ դոլար է[cite: 17]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Պակիստանի Ազգային այգում ծովի մակարդակից 4,879 մետր բարձրության վրա տեղադրված բանկոմատը գրանցվել է աշխարհի ռեկորդների Գինեսի գրքում որպես աշխարհի ամենաբարձր կետում գտնվող բանկոմատ[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Միջինում մարդը բանկոմատից օգտվում է ամսական 7.4 անգամ[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Աշխարհում օրական տեղադրվում է 280 նոր բանկոմատ[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Անվտանգության համար Հայաստանի բանկոմատներում տեղադրված է հատուկ չներկվող ներկ։ Եթե ինչ-որ մեկը ցանկանա վնասել բանկոմատը, թղթադրամները կներկվեն, և այլևս օգտագործման համար պիտանի չլինեն[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Սկզբնական բանկոմատները 6-անիշ PIN-ով էին, սակայն երբ բանկոմատի ժամանակակից մոդելը պատтентավորած Ջոն Շեփարդ Բարոնի կինը՝ Բերնայսը, դժվարացավ հիշել 6-անիշ թիվը, նրա ամուսինը փոխեց սարքն ու այն սարքեց 4-անիշ PIN-ով[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բանկոմատներից սկզբնական շրջանում օգտվում էին միայն խաղամոլները[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բանկոմատներ կան անգամ Անտարկտիկայում. Wells Fargo բանկի 2 բանկոմատ տեղադրված են Անտարկտիկայի ՄըքՄուրդո կայանում[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կանադայում Ուիսթլեր լեռնանցքում, կան ski-thru բանկոմատներ հատուկ դահուկորդների համար։ Դրանք ունեն դահուկներն ու ձեռնոցներն ամրացնելու հատուկ տեղեր, ինչպես նաև՝ ձեռքերը տաքացնող լամպեր[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բանկոմատների առաջին մոդელները գումարը տրամադրելու հետ քարտը հետ չեին վերադարձնում։ Այն հանվում էր բանկի աշխատակցի կողմից, իսկ քարտատերը վերցնում էր այն բանկից ամեն անգամ օգտվելուց հետո[cite: 18]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Չինաստանում առաջին բանկոմատը տեղադրվել է միայն 1987թ[cite: 18].:</span>
    </li>
  </ul>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Բանկոմատի ստեղծման մանրամասն պատմությունը[cite: 18]
  </h3>
  <p>
    Բանկոմատը նախագծել է հայ գյուտարար Լյութեր Ջորջ Սիմջյանը 1939թ.-ին ԱՄՆ-ում։ Արտոնագրել է բանկոմատի գյուտն ԱՄՆ-ում 1960թ. նոյեմբերի 15-ին՝ US patent 2960377[cite: 18]:
  </p>
  <p>
    Լյութեր Սիմջյանի կողմից արտոնագրված ավելի քան 200 գյուտերի ցանկում կարելի է գտնել բանկոմատը, ինքնանկարվող տեսախցիկը, ինքնաթիռների թռիչքի արագության ցուցիչը, փոստի անվանակարգման ավտոմատ սարքը, հեռուստահուշարարը և այլն[cite: 18]:
  </p>
  <p>
    Սիմջյանը 15 տարեկանից աշխատել է Յելի բժշկական դպրոցի լուսանկարչական լաբորատորիայում։ 1934թ. Սիմջյանը ստեղծում է ինքնանկարվող լուսանկարչական սարքը, ինչի օգնությամբ նկարվող մարդն ինքն իրեն հեռუում է հատուկ ամրացված հայելում մինչև նկարվելը։ Այսինքն՝ Սիմջյանը նաև առաջին selfie-ի հեղինակն է[cite: 18]:
  </p>
  <p>
    Բանկոմատ ստեղծելու գաղափարն առաջանում է 1939թ։ Բանկերը թերահավատությամբ էին մոտենում հարցին, սակայն Սիմջյանը ստեղծում է սարքը և, կատարելագործելով սարքի հատկությունները, տարիների ընթացքում գրանցում շուրջ 20 արտոնագիր։ Ընդ որում, Սիմջյանն առանձին արտոնագրել է ինչպես թղթադրամի, այնպես էլ մետաղադրամի համար նախատեսված բանկոմատի գյուտերը[cite: 18]:
  </p>
  <p>
    1960թ. Սիմջյանը պայմանագիր է կնքում Citibank-ի հետ՝ իր սարքը 6 ամիս ժամկետով փորձնական շահագործելու մասին։ Սակայն 6 ամիս անց պայմանագիրը չի երկարաձգվում զարմանալորեն ոչ թե տեխնիկական անսարքությունների, այլ պահանջարկի սղության պատճառով։ Մարդիկ պարզապես չէին օգտվում սարքից։ Տարիներ անց, հասարակության աճող պահանջմունքին ընդառաջ գնալով՝ Սիմջյանի նախագծած բանկոմատները կրկին գործի դրվեցին՝ հիմք դնելով ֆինանսների պատմության մի նոր էջի[cite: 19]:
  </p>
  <p className="pt-4 border-t border-purple-50">
    Սիմջյանն առևտրային հաջողություններ է գրանցել Երկրորդ համաշխարհային պատերազմի ընթացքում, երբ հայտնաբերել է տարածության օպտիկական չափման մարզման սարքը, որն օգտագործվել է օդաչուների մարզումներում՝ գնահատելու համար ավիատեխնիկայի արագությունն ու միջտարածությունը[cite: 19]:
  </p>
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