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
2021-ի ամենասպասված 21 սերիալները


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
2021-ի ամենասպասված 21 սերիալները
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ի՞նչ սպասել 21-ի կինոաշխարհից․ սուպերհերոսներ, պատմական, ֆանտաստիկ և միստիկ կերպարներ, ռետրո, նորաձևություն և ավելին






             </p>
              <p>
18.01.2021

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16329974590876/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Ձեզ ենք ներկայացնում 2021-ի #mustwatch սերիալները՝ ըստ պաշտոնական և ոչ պաշտոնական տվյալների, ինչպես նաև ինֆորմացիայի արտահոսքի:
  </p>

  <div className="space-y-6">
    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        1. Wanda Vision
      </h3>
      <p>
        Marvel-ը 2021-ը սկսում է շատ բունն՝ գրեթե բոլոր սիրված սուպերհերոսներին spin-off-ներ բաժանելով: Բացումն արդեն եղել է Վանդայի և Վիժնի կյանքի միֆիկ ներկայացմամբ: 1960-ականների Ամերիկա, սուպերհերոսների ընտանեկան հանգիստ ու խաղաղ կյանք, և հեռուստադիտողի զարմացած հայացքը մինչ այն պահը, երբ հասկանում ենք, որ նրանց կյանքի խաղը չի համապատասխանում իրականությանը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        2. Superman & Lois
      </h3>
      <p>
        DC-ն նույնպես իր ֆաներին ուրախացնելու առիթ ունի: Երկար դադարից հետո՝ փետրվարի 23-ին, էկրաններին է վերադառնում շատերի սիրելի կարմիր և կապույտ հագուստով սուպերհերոսը: Լուիսն ու Քլարկ Քենտն ամբողջությամբ նվիրվել էին իրենց երկու թինեյջերների դաստիարակմանը: Արդյո՞ք նրանք կկարողանան պահպանել բալանսն ընտանեկան և սուպերհերոսի կյանքի միջև:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        3. Bliss
      </h3>
      <p>
        Amazon-ը ներկայացրեց ֆանտաստիկ մելոդրամայի թրեյլերը, որը հեռուստադիտողին հասանելի կլինի փետրվարի 5-ից: Ամուսնալուծությունից հետո Գրեգը հանդիպում է փողոցում ապրող Իզաբելին, որն ամեն կերպ փորձում է համոզել Գրեգին, որ կյանքը զուտ համակարգչային իլյուզիա է: Ֆիլմի ստեղծողներն այս սյուժեով փորձել են ցույց տալ, թե որքան փխրուն և ենթարկվող է մարդկային ուղեղի աշխարհընկալման և տարբեր տեսանկյունների ընկալման հարցում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        4. The Falcon and The Winter Soldier
      </h3>
      <p>
        Եվս մեկ պատմություն Marvel-ի սիրված սուպերհերոսների մասին: Գլխավոր հերոսները՝ Սեմ Ուիլսոնը, որը Կապիտան Ամերիկայից ստացավ նրա վահանն ու անունը, և Բակի Բարնսը, որ դեռ չի համակերպվել ժամանակակից կյանքին, պայքարելու են ահաբեկիչների դեմ՝ փրկելով աշխարհը: Պրեմիերան նախատեսվում է մարտի 19-ին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        5. Loki
      </h3>
      <p>
        Marvel-ի ամենահմայիչ, ամենախարդախամանկ սուպերհերոս ու Աստված Լոին վերադառնում է մայիսին: Շատ շուտով կտեսնենք, թե ինչպես է նա ճանապարհորդում ժամանակի մեջ՝ օգտագործելով Ստեսրակտը, և փորձում փոխել մարդկության պատմությունը: Կարոտե՞լ չէ՞ այս չարաճճի կերպարին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        6. Zack Snyder's Justice League
      </h3>
      <p>
        Իսկ հիմա կրկին ուրախանալու առիթ ունեն DC-ի ֆաները, քանի որ հենց այդ ֆաների բազմաթիվ բողոքների ու պահանջների շնորհիվ վերսկսվում է Զակ Սնայդերի «Արդարության լիգա»-ն: Դեռ 2020թ. փետրվարին հայտարարվեց, որ այս նախագիծը կվերսկսվի մինի սերիալի ֆորմատով, և դերասանական կազմին կմիանա Ջարետ Լետոն իր Ջոկերի կերպարով: Ըստ տեղեկությունների՝ պրեմիերան կկայանա մարտ ամսին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        7. Hawkeye
      </h3>
      <p>
        Marvel-ի սուպերհերոսները հերթով վերադառնում են: Բազկի աչքը որպես վրիժառու անցնում է թոշակի, որից հետո ստանձնում է մարզչի դեր: Լեգենդար Նետահարը պետք է մարզի իր իրավահաջորդին՝ Քեյթ Բիշոփին, որ մանկուց հետաքրքրված էր նետաձգությամբ: Ի դեպ, Քեյթը միլիոնատիրոջ աղջիկ է, իսկ թե դա է իրական պատճառը նրա իրավահաջորդ դառնալու մեջ՝ կիմանանք տարվա վերջում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        8. Ms Marvel
      </h3>
      <p>
        Այս նոր սուպերհերոսուհուն Marvel-ը փորձում է որոշ չափով գաղտնի պահել և դեռ շատ քիչ է լուսաբանում: Հայտնի է, որ այս տարվա վերջին կինոաշխարհը կունենա նոր սուպերհերոս, իսկ գլխավոր դերակատարը կլինի կինոաշխարհում իր առաջին քայլն անող Իման Վելանին (տեսնես նրա հայրն է՞ միլիարդատեր):
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        9. Mare of Easttown
      </h3>
      <p>
        Այս տարվա մեջ HBO Max-ը մեզ կներկայացնի սերիալ, որի դեպքերը կզարգանան ամերիկյան փոքրիկ քաղաքում: Գլխավոր հերոսուհին՝ Քեյթ Ուինսլեթը, հանդես կգա խուզարկուի դերում, որն իր ողջ ժամանակը տրամադրում է աշխատանքին՝ տեղ չտալով անձնական կյանքին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        10. The Book of Boba Fett
      </h3>
      <p>
        Հիանալի նորություն Star Wars-ի սիրահարների համար: The Mandalorian-ն այնքան սիրվեց, որ անգամ spin-off ստացավ: Բոբա Ֆետտը վերադառնում է, իսկ նրա պատմությունը դեռ նոր է սկսվում: «Աստղային պատերազմներ» սիրված սուպերհերոսին էկրաններին կտեսնենք այս տարվա դեկտեմբերին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        11. The Witcher (season 2)
      </h3>
      <p>
        Այո, այո, համաձայն ենք... կինոաշխարհի ամենասպասված նորություններից մեկը «Կախարդ»-ի վերադարձն է: Համաձայն աղբյուրների՝ նոր եթերաշրջանը կկդրանավորվի այս տարվա վերջին: Սպասում եք, չէ՞:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        12. Lupin
      </h3>
      <p>
        Սիրված դերասան Օմար Սին մարմնավորում է Արսեն Լուպինին՝ ժամանակակից ջենթլմեն գողին: Իր դերի մասին Օմար Սին ասել է, որ եթե ինքը լիներ բրիտանացի, ապա կկանվանվեր Ջեյմս Բոնդ, քանի որ ֆրանսիացի է, ուրեմն՝ Արսեն Լուպին: «Նա զվարճալի է, խելացի, զբաղվում է գողությամբ և շրջապատված է կանանցով: Բացի այդ, նա հերոս է: Սա դերասանի համար հնարավորության լավագույն դերն է»: Սերիալի 5 մասերն արդեն հասանելի են համացանցում, իսկ կինոմաններն այն արդեն անվանել են 2021-ի առաջին ամենապահանջված սերիալը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        13. Vikings (final season)
      </h3>
      <p>
        Օրեր առաջ վերսկսվեց Vikings-ի վերջին 6-րդ եթերաշրջանը: Եվս մի քանի էպիզոդ, և մենք ստիպված կլինենք հրաժեշտ տալ մեր սիրված հերոսներին: 2013-ին՝ առաջին եթերաշրջանի ցուցադրումից անմիջապես հետո, պարզ դարձավ, որ պատմական դրաման ունի ֆաների հսկայական խումբ: «Յուրաքանչյուր եթերաշրջանը մեր կյանքին նոր իմաստ էր տալիս», - ասում  էին նրանցից ոմանք: Շատերն ապրում ու տառապում էին կերպարների հետ՝ հասնելով ֆանատիզմի: Գիտե՞ք, վերջին եթերաշրջանը մարդկային հզոր կերպարների մասին, որոնք ապրում էին ամենադժվար դարաշրջաններից մեկում՝ Վիկինգների դարաշրջանում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        14. Friends Reunion
      </h3>
      <p>
        Մեր բոլորի «Ընկերներ»-ի վերամիավորման մասին դեռ երկար տարիներ խոսում էին, իսկ հիմա արդեն պաշտոնապես կարող ենք հայտարարել դրա մասին: Սա թերևս 2021-ի ամենագույզ նորություններից է: Թե ինչ ձևով է ներկայացվելու ընկերների կյանքը՝ դեռ հստակ չէ, բայց այն, որ նրանք վերադառնում են, պարզապես հրաշք է:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        15. See (season 2)
      </h3>
      <p>
        Ի սկզբանե Apple TV-ն շատ մեծ շեշտ էր դրել այս սերիալի վրա և անգամ հրավիրել կանանց կողմից շատ սիրված Ջեյսոն Մամոային: Ավաղ, սա այն սերիալներից էր, որ հավասարաչափ լ՛ սիրվեց, լ՛ քննադատվեց: Այս գարունը կտեսնենք 2-րդ եթերաշրջանը: Ո՛չ մի սփոյլեր և թրեյլեր. սպասենք և կտեսնենք…
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        16. Emily In Paris (season 2)
      </h3>
      <p>
        Սերիալ նորաձևության, զավեշտալի պատմությունների, ընկերության և սիրային հարաբերությունների մասին, անկրկնելի դերասարում և հմայիչ դերասանուհի: Պաշտոնապես հաստատվել է սերիալի 2-րդ եթերաշրջանի լուրը, բայց ժամկետների հետ կապված ոչ մի հստակ տվյալ չկա: Ըստ ասպեկտների՝ նկարահանումները կսկսվեն գարնանը, իսկ սերիալի նոր եթերաշրջանը մեզ հասանելի կլինի այս տարվեվերջին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        17. Stranger Things (season 4)
      </h3>
      <p>
        Netflix-ը կրկին ուրախացնելու առիթ ունի: Սերիալի 3 եթերաշրջաններն այնքան էին սիրվել հեռուստադիտողների կողմից, որ 4-րդն իրեն երկար սպասեցնել չի տա: Իհարկե, սյուժեի հեղինակները վստահ են, որ 5-րդը կլինի եզրափակիչ եթերաշրջան, բայց այս տարի անհամբեր սպասում ենք 4-րդին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        18. The Lord of The Rings
      </h3>
      <p>
        Amazon-ը հաստատել է Մատանիների Տիրակալի նոր եթերաշրջանի մասին տարածված լուրերը: Դեպքերը մեզ կտանեն ավագ դարերի խորքերը, երբ ծաղկում և վերանում էին թագավորություններ, երբ հերոսների կյանքը կախված էր թելից, իսկ հզոր չարագործը սպառնում էր կործանել աշխարհը… Այս պահին Նոր Զելանդիայում նկարահանվում է միաժամանակ 2 եթերաշրջան: Մենք համբերատար սպասում ենք:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        19. Sex and the City
      </h3>
      <p>
        Սերիալի նկարահանումների մեկնարկի կամ ավարտի մասին դեռևս ոչ մի տեղեկություն չկա, բայց այն, որ չորս գրավիչ, նորաձև և ճակատագրական կանայք այս եթերաշրջանում կլինեն երեքով՝ դա հաստատ է: Հույսով առանց Սամանտայի Sex and The City-ին չի դառնա HBO 1+1 pue…
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        20. Peaky blinders (season 6)
      </h3>
      <p>
        Ասում են, որ, հնարավոր է, այս տարվա վերջում նրանք վերադառնան: Գրեթե ամեն ինչ պատրաստ է՝ կոստյումները, նկարահանման վայրերը, ամեն-ամեն ինչ… Լուրեր են տարածվել, որ սերիալում Հիտլերին պետք է մարմնավորի Միստր Բինը: Չէ, ներնեցեք, Ռոուն Ետկինսոնը: Չեն խոստանում, բայց գիտեն, որ իրենց սպասում են:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        21. La Casa De Pappel (season 5)
      </h3>
      <p>
        Դե իսկ հայերի կողմից, երևի թե, ամենասպասված սերիալը կլինի մեր սիրելի Հովիկ Քեուչկերյանի մասնակցությամբ La Casa De Pappel-ը: Կարծում ենք՝ սերիալի մասին պատմելու կարիք չկա, քանի որ բոլորդ լավ տեղյակ եք: Բացի նոր պերուպոնահ & ֆանտաստիկ հանգուցալուծումներից, մեզ նաև անակնկալներ են սպասվում… Նկարահանումներն արդեն տեղի են ունեցել, և մենք անհամբեր սպասում ենք պրեմիերայի պաշտոնական օրվա հրապարակմանը: Ի դեպ, այստեղ կարող եք շատ հետաքրքիր թեստ անցնել և փորձել գուշակել 5-րդ եթերաշրջանի զարգացող դեպքերը, իսկ լավագույն արդյունքը գրանցողները նվերանվեր կստանան Evocabank-ի կողմից:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        Bonus. Your Honor
      </h3>
      <p>
        Դե իսկ վերջում բոնուսի կարգով ներկայացնում ենք Your Honour-ը: Սերիալ, որը հանրությանը ներկայացվեց դեռ 2020-ի դեկտեմբերին և շարունակվում է մինչ օրս: Your Honour-ը բաղկացած է ընդամենը 10 էպիզոդից և գլխավոր դերում է աշխարհի ամենաբարձր ռեյտինգ ունեցող սերիալի՝ Breaking Bad-ի գլխավոր հերոսը՝ Բրայան Քրենստոնը: Նրա ներկայությունն ապահովում է սերիալի նկատմամբ բարձր հետաքրքրվածություն: Ակնկալվում է, որ այս սերիալը նույնպես կհամալրի լավագույնների շարքը: Շատ շուտով կներկայացնենք 2021-ի ամենասպասված ֆիլմերը:
      </p>
      <p>
        Բազմոցին տեղ ամրագրի՛ր՝ շուտով միասին կվայելենք թույլ ֆիլմերով երեկոներ:
      </p>
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