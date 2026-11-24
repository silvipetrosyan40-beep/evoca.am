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
Բոլորին հայտնի Մոնոպոլիա խաղի օրենքներն իրական կյանքում


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
Բոլորին հայտնի Մոնոպոլիա խաղի օրենքներն իրական կյանքում
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Դեռ չեք կողմնորոշվել գնե՞լ բնակարան, թե՞ վարձակալել։ Իսկ տեղյա՞կ եք գործընթացից և բոլոր քայլերից։ Շտապեք կարդալ մեր ամենաինֆորմատիվ բլոգը։















             </p>
              <p>
01.02.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/1703767719255/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2 pb-2">
    <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
      Գնե՞լ, թե՞ վարձակալել բնակարան
    </h2>
    <p className="font-bold text-purple-700">
      Անշարժ գույք ձեռք բերելու քայլերը, հիփոթեքային վարկավորումն ու ճիշտ որոշում կայացնելու ռազմավարությունը
    </p>
  </div>

  <p>
    Հիշո՞ւմ եք հայտնի <strong className="text-purple-700">Մոնոպոլիա խաղը</strong>, որի նախագիծը ստեղծվել էր Չարլզ Դարրոունի կողմից 1934 թվականին: Մոնոպոլիայում հիմնական կողմերն են խաղացողները և բանկը: Խաղացողները գումար են փոխանցում բանկին՝ ձեռք բերելով տվյալ դաշտի ակտիվը: Հնարավոր է նաև հակառակ գործողությունը. ձեռք բերել միջոցներ Բանկից նախընտրելի դաշտի ակտիվը գնելու համար:
  </p>
  <p>
    Իսկ հիմա խաղի օրենքները բերենք իրական կյանք: Ինչպես խաղի մեջ, իրական կյանքում ևս Ձեզ տրվում են որոշում կայացնելու շատ հնարավորություններ, իսկ վերջում հաղթելու ռազմավարությունը ֆինանսական միջոցների ճիշտ կառավարումն է:
  </p>
  <p>
    <strong className="text-purple-700">Evoca</strong>-ն խաղի այն բանկն է, որը պատրաստ է տրամադրել միջոցներ, բայց խաղի ընթացքում հիմնական որոշումները կայացնում եք Դուք, որոնցից է կախված Ձեր հաղթանակը:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/6.jpg" 
      alt="Evoca Monopoly Game Concept" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Բայց մենք Ձեզ կփորձենք օգնել: Ներկայացնում ենք մեր նոր բլոգը, որտեղ մանրամասն խոսել ենք անշարժ գույք ձեռք բերելուն վերաբերող ամենակարևոր հարցերի պատասխանների, քայլերի հաջորդականության և ճիշտ որոշում կայացնելու ռազմավարության մասին:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Գնե՞լ, թե՞ վարձակալել բնակարան
  </h3>
  <p>
    Վերջերս այս հարցը դարձել է լինել, թե չլինելու նման խնդիր: Այս բլոգում Դուք վերջապես կկարողանաք կողմնորոշվել և ինքնուրույն կատարել ճիշտ որոշում:
  </p>
  <p>
    Բնականաբար, այս հարցը առաջնահերթ կախված է Ձեր ֆինանսական միջոցներից, սակայն կան այլ կարևոր գործոններ, որոնց նույնպես պետք է ուշադրություն դարձնել, օր.՝ բյուջե, ապրելակերպ, բնակության վայր և այլն:
  </p>
  <p>
    Մենք կօգնենք ընտրել լավագույն տարբերակը Ձեզ համար:
  </p>
  <p className="font-semibold text-purple-700">
    Պատրաստ եք, սկսե՞ցիհինք:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/3.jpg" 
      alt="Monopoly and Evoca Branding" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    ԳՆԵԼ ԲՆԱԿԱՐԱՆ
  </h3>
  <p>
    Եթե ունեք խնայած գումար և կայուն եկամուտ, ապա ֆինանսական ոլորտի յուրաքանչյուր մասնագետ Ձեզ խորհուրդ կտա գնել բնակարան, այլ ոչ թե վարձակալել:
  </p>
  <p>
    Բնակարան կարելի է ձեռք բերել նաև հիփոթեքային վարկի միջոցով՝ օգտվելով մի շարք առավելություններից, եթե առկա են հետևյալ գործոնները՝
  </p>
  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>լավ վարկային պատմություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>կանխավճարի համար խնայած գումար,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>բավարար եկամուտ՝ ամսական հիփոթեքային վճարումները կատարելու համար,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>բավարար տարեկան դրամական հոսքեր՝ հետագայում Ձեր տան հետ կապված ծախսերը և վերանորոգման կարիքները հոգալու համար:</span>
    </li>
  </ul>

  <p>
    Բնակարան գնելու համար կան քայլեր, որոնք պետք է կատարել հերթականությամբ: Մենք փորձել ենք Ձեզ համար մանրամասն հետազոտել և ներկայացնել բնակարան գնելու ողջ ընթացքի քայլերի հերթականությունը:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Քայլ 1. Տարաժամկետ, միանգամյա կամ հիփոթեքային տարբերակով վճարում
  </h4>
  <p>
    Գնորդը պետք է որոշի, թե որքան է պատրաստ վճարել բնակարանի համար և ինչ ձևով՝ միանգամից, մաս-մաս, թե հիփոթեքային վարկի միջոցով: Եթե ընտրված է հիփոթեքային վարկավորման տարբերակը, ապա առաջին բանը, որ պետք է անել՝ գնալ բանկ ու պարզել, թե որքան գումար է բանկը համաձայն տրամադրել, և որքան է լինելու ամսական մարման չափը, որից հետո միայն կարելի է սկսել տուն փնտրելու գործընթացը:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Քայլ 2. Առաջնային, թե՞ երկրորդային շուկա
  </h4>
  <p>
    Հաջորդ քայլով պետք է որոշել՝ բնակարանը ցանկանում եք ձեռք բերել երկրորդայինից, թե առաջնային շուկայից՝ անմիջապես կառուցապատողից: Հաշվի առեք նաև, որ առաջնային շուկայից ձեռք բերելու դեպքում, կարող եք օգտվել «Եկամտահարկի վերադարձի» և «Երիտասարդ ընտանիք» ծրագրերից:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ից կարող եք ձեռք բերել հիփոթեքային վարկ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից՝ շահավետ պայմաններով: Бնակարան փնտրելն առանց այդ էլ երկար և ժամանակատար գործընթաց է, այդ իսկ պատճառով մենք փորձել ենք անել ամեն ինչ, որպեսզի այն ձեռք բերելու գործընթացը լինի Ձեզ համար պարզ, հարմար և արագ:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ում տրամադրվող բոլոր հիփոթեքային վարկերին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 29].
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Քայլ 3. Бնակարանի որոնում
  </h4>
  <p>
    Այս փուլում կարևոր է հասկանալ՝ դուք եք փնտրելու բնակարան, թե դրանով զբաղվելու է անշարժ գույքի գործակալը: Եթե որոնումն իրականացնելու է գործակալը, ապա, ըստ Ձեր կողմից նշված նախասիրությունների և հնարավորությունների, կառաջարկի բնակարաններ: Իսկ եթե զբաղվելու եք դուք, այդ դեպքում կան կայքեր, որոնց միջոցով կարող եք կատարել որոնումը:
  </p>
  <p>
    Ամեն դեպքում մենք կփորձենք Ձեզ ներկայացնել որոշ գործոններ, որոնք կուղղորդեն Ձեզ բնակարան փնտրելու ընթացքում և կօգնեն ճիշտ ընտրություն կատարել:
  </p>
  <p>
    Անշարժ գույքի առաջնային և երկրորդային շուկայում բնակարան գնելիս կան որոշակի տարբերություններ, սակայն կան մի շարք ընդհանուր կանոններ, որոնց պետք է հետևել.
  </p>
  <p>
    Նախ պետք է հաշվի առնել, որ, ըստ համայնքների, բնակարանների գները տատանվում են:
  </p>
  <p>
    <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Այստեղ</a> կարող եք տեսնել 2023 թվականի վերջին եռամսյակի տվյալներով անշարժ գույքի հետ կապված վիճակագրությունը և բնակարանների գները տարբեր համայնքներում.
  </p>
  <p>
    Բնակարան ընտրելիս նաև պետք է որոշել՝ ցանկանում եք առաջնային գծի՞ց, թե՞ ոչ: Սովորաբար առաջնային գծի շենքերում բնակարաններն ավելի թանկ են լինում: Առավելություններից է տրանսպորտային փոխադրամիջոցների կանգառներին, խանութներին և այլ վայրերին մոտ լինելը, սակայն կան նաև թերություններ՝ անընդհատ փոշի, աղմուկ, ավելի մոտ է փողոցին:
  </p>
  <p>
    Բնակարանների գները տատանվում են նաև շենքի հարկերի: Հատկապես նորակառույցներում բարձր հարկերի բնակարաններն ավելի թանկ են: Իսկ, օրինակ, հին շենքերում շատերը խուսափում են գնել բնակարան առաջին կամ վերջին հարկում, չնայած, այս ամենին զուգահեռ, կան հին շենքեր, որոնք ունեն բարձր առաջին հարկեր և նոր վերանորոգված տանիքներ: Հին, ստալինյան շենքերի դեպքում գնորդը պետք է ստուգի այն վթարային է, թե ոչ:
  </p>
  <p>
    Եթե որոշել եք գնել բնակարան նորակառույց շենքում <strong className="text-purple-700">Evocabank</strong>-ի կողմից տրամադրվող հիփոթեքային վարկի միջոցով, կան որոշ գործոններ, որոնց պետք է ուշադրություն դարձնել:
  </p>
  <p>
    Նորակառույց շենքում բնակարան գնելիս նախ և առաջ պետք է ճշտել, թե ով է կառուցապատողը, ուսումնասիրել կառուցապատողի վերաբերյալ ողջ տեղեկատվությունը: Փաստացի պետք է կառուցապատողի հետ ունենալ նոտարով հաստատված պայմանագիր, որտեղ հստակ կետերով նշված կլինեն բնակարանի կառուցման-հանձման վերաբերյալ բոլոր դրույթները, որոնց պետք է ուշադրություն դարձնել՝ ժամկետների խախտումներից խուսափելու համար: Պայմանագրում նշված ցանկացած կետի խախտում ունի իր համապատասխան լուծումը: Այդ իսկ պատճառով, ուշադր կարդացեք պայմանագիրը, ստուգեք դրա օրինականությունը և հստակ ճշտեք Ձեր իրավունքները կամ դիմեք համապատասխան մասնագետի:
  </p>
  <p>
    <strong className="text-purple-700">Evoca</strong>-ն աշխատում է շուկայում լավագույն կառուցապատողների հետ: Մեր բոլոր կառուցապատողներին և իրենց առաջիկա նախագծերին կարող եք ծանոթանալ Բանկի <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">պաշտոնական կայքում</a>.
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Քայլ 4. Անշարժ գույքի ստուգում
  </h4>
  <p>
    Երբ կատարում եք ընտրություն բնակարանի հարցում, նախքան որևէ գործարք կատարելը՝ պետք է պարտադիր ստուգել անշարժ գույքի կարգավիճակը:
  </p>
  <p>
    Նորակառույց շենքում բնակարան գնելիս պետք է ուշադրություն դարձնել կառուցապատողին. արդյո՞ք կառուցապատողն ունի շինթույլտվություն, ո՞ր շենքերն է նա արդեն շահագործման հանձնել, գործո՞ւմ է նոտարով հաստատված օրինական պայմանագիր, որտեղ հստակ նշված են հանձման ժամկետները:
  </p>
  <p>
    Երկրորդային շուկայից բնակարան ձեռք բերելու դեպքում կան այլ կարևոր կետեր, որոնց պետք է ուշադրություն դարձնել, օր.՝ շենքի կարգավիճակը՝ վթարային է, թե ոչ:
  </p>
  <p>
    Հետևյալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">հղումով</a> կարող եք ծանոթանալ վթարային կարգ ունեցող շենքերի ցանկին.
  </p>
  <p>
    Երկրորդային շուկայում պետք է պարզել՝ արդյո՞ք բնակարանը գրավի տակ է, կա՞ն այլ սեփականատերեր, որոնք կարող են հետագայում իրավունքներ պահանջել և այլն: Այս տեղեկությունը կարող եք ստանալ՝ դիմելով Կադաստրի կոմիտե, Քաղաքաշինության կոմիտե կամ տեղական ինքնակառավարման մարմիններին:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Քայլ 5. Գործարքի փուլ
  </h4>
  <p>
    Գործարքի համար անհրաժեշտ փաստաթղթերը կարող են տարբերվել՝ կախված կոնկրետ դեպքից, օրինակ՝ կտակի առկայություն, գույքի նկատմամբ իրավունք ունեցող անձինք, ովքեր ներկա չեն և այլն, սակայն դեպքերի մեծ մասում անհրաժեշտ փաստաթղթերն են՝ միասնական տեղեկանք, սեփականության վկայական, «գրոյական տեղեկանք», որոնք ներկայացվում են վաճառող կողմից, և՛ վաճառող, և՛ գնորդ կողմերի անձնագրերը, ամուսնության վկայականը (ըստ ռեելվանտության):
  </p>
  <p>
    Նոտարական ծախսերը սովորաբար հոգում են երկու կողմերը կամ կողմերից մեկը՝ կախված, թե կողմերից որի մասով է առաջանում նոտարական վավերացման անհրաժեշտությունը: Կադաստրում իրավունքի գրանցման ծախսը հոգում է նոր սեփականատերը: Շինարարության փուլում բնակարան գնելիս անշարժ գույքի սեփականության իրավունքի ձեռքբերման պայմանագիր է կնքվում, իսկ գործարքը նախապես գրանցվում է Կադաստրի կոմիտեում:
  </p>
  <p>
    Հույս ունենք այս քայլերը Ձեզ համար օգտակար կլինեն նոր բնակարանի ձեռքբերման գործընթացը սկսելուց առաջ:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/4.jpg" 
      alt="Evoca Monopoly Elements" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    ՎԱՐՁԱԿԱԼԵԼ ԲՆԱԿԱՐԱՆ
  </h3>
  <p>
    Վարձակալությամբ սեփական տուն կամ բնակարան ընտրելու համար կարող եք դիմել անշարժ գույքի գործակալի կամ փորձեք փնտրել ինքներդ: Ինքնուրույն կարող եք փնտրել մի շարք կայքերում, ինչպես նաև սոցցանցերի խմբերում:
  </p>
  <p>
    Ներկայացնենք որոշ կայքեր, որոնք կարող են Ձեզ օգնել վարձակալության նպատակով բնակարան փնտրելու համար՝
  </p>
  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">list.am</strong></span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">senyak.am</strong></span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">banali.am</strong></span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">estate.am</strong></span>
    </li>
  </ul>
  <p>
    Վարձակալության արժեքը կախված է համայնքից, շենքի տեսակից (նորակառույց, հին քարե շենք), կառուցման տարեթվից և բնակարանի մակերեսից: Որպես կանոն՝ որքան հեռու կենտրոնից, այնքան ավելի մատչելի:
  </p>
  <p>
    Քանի որ հիփոթեքային վարկատեսակը բանկին մեծ պահանջարկ ունի, և շուկայում չեն զիջում նաև մի շարք առաջարկներ, ապա Ձեզ խորհուրդ. մանրամասն ուսումնասիրեք առաջարկվող պայմանները, հետևեք վարկավորման ամբողջ գործընթացին, վստահեք միայն փորձառու մասնագետներին և հստակ իմացեք Ձեր իրավունքները:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/5.jpg" 
      alt="Evoca Mortgage Partnership Signing" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    <strong className="text-purple-700">Evocabank</strong>-ում փորձառու մասնագետները Ձեզ անվճար խորհրդատվություն կտան, կօգնեն արագ ու ապահով իրականացնել բնակարանի ձեռքբերման բոլոր քայլերը A-Z, կառաջարկեն լավագույն պայմաններ:
  </p>

  <p className="pt-2">
    Մեր բոլոր հիփոթեքային վարկատեսակներին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>, իսկ հարցերի դեպքում կարող եք զանգահարել մեր շուրջօրյա հեռախոսահամարին՝ <strong className="text-purple-700">+374 10605555</strong>:
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