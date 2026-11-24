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
2021-ը դարձել է կինո պրեմիերաների մրցավազք


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
2021-ը դարձել է կինո պրեմիերաների մրցավազք
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Կինոմաններին են ներկայացվելու բազմաժանր գլուխգործոցներ, որոնցից ընտրել ենք ամենասպասվածներն ու մրցակցայինները:





             </p>
              <p>
01.02.2021

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16329119822114/780x585.jpg" 
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
        1. Fast & Furious 9
      </h3>
      <p>
        Այս ֆիլմն ասոցացվում է ավտոմեքենայի շարժիչի ձայնի ու խելահեղ արագության հետ: Բոլոր 8 ֆիլմերի հիմքում կա մեկ և անփոփոխ գաղափարախոսություն՝ ընկերություն և ընտանիք: Իսկ ֆիլմի գլխավոր հերոսներից մեկը՝ Դոմինիկը, մեծ պատասխանատվությամբ է վերաբերվում իսկական ընկերությանը՝ համարելով այն ընտանիքի մի մաս: Սակայն այս անգամ փոխվում է ֆիլմի լոզունգը. «Ամեն արյուն չէ՝ ընտանիք»: Ֆիլմում հայտնվում է նոր դավաճան կերպար՝ պրոֆեսիոնալ մարդասպան Ջեյքոբը՝ Դոմինիկի կրտսեր եղբորը: Իհարկե, Փոլ Ուոքերի (Բրայան) մահից հետո շատերն էին պահանջում, որ ֆիլմն այլևս չշարունակվի, սակայն նախորդ մասն ապացուցեց, որ ֆիլմի հանդեպ հետաքրքրությունը չի պակասել:
      </p>
      <p>
        Պրեմիերան տեղի կունենա ապրիլի 28-ին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        2. No Time to Die
      </h3>
      <p>
        “My name is Bond, James Bond”. Դասական կոстюмով, հմայիչ, խելացի և գեղեցիկ կանանցով շրջապատված լրտեսը վերադառնում է: Թեև ըստ ֆիլմի սյուժեի՝ Բոնդը թողել էր լրտեսի իր կարիերան և հանգստանում էր արևոտ Յամայկայի ափերին, սակայն չարագործի ձեռքերից հայտնի գիտնականին փրկելու համար՝ Բոնդն ընդհատում է իր հանգիստը, որպեսզի հանդիպի մեզ հետ ապրիլի 2-ին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        3. Dune
      </h3>
      <p>
        Ֆանտաստիկայի ժանրի ֆիլմի գլխավոր հերոսը հայտնի և ազնվական ընտանիքից է, որն անապատային մոլորակ Արակլիսում պետք է պահպանի Գալակտիկայի ամենաարժեքավոր տարրը՝ Spice-ը (համեմունքը), որ տիրում է տիեզերքին: Հոկտեմբերին կիմանանք, թե ով դարձավ Spice-ի տիրակալը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        4. Free Guy
      </h3>
      <p>
        Համաձայն եք չէ՞, որ 2020-ից հետո կյանքը կոմեդիաների կարիք ունի: Ռայան Ռեյնոլդսը, որին շատերդ գիտեք որպես կոմեդի-ընտանեկան ժանրի դերասան, բանկային աշխատող էր, որ հանկարծ հայտնվում է համակարգչային խաղի մեջ, որտեղ ամեն ինչ որոշում էին խաղային պերսոնաժները: Եվ, իհարկե, հենց գլխավոր հերոսը պետք է փրկի աշխարհը կործանումից: Ի սկզբանե, Ռայանին խաղի միջից ազատելու տարեթիվը որոշված էր 2020-ը, բայց համաշխարհային պանդեմիայի պատճառով հավանաբար նա այնտեղ կմնա մինչև այս տարվա մայիս:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        5. Jungle Cruise
      </h3>
      <p>
        1900 թվական: Արկածախնդիր ճանապարհորդների մի խումբ ուղևորվում է Ամազոնի ջունգլիներ, որ արկածներ փնտրելու համար Ամազոնն ամենաիսկական տեղն է: Սակայն, իրականում, նրանք փնտրում էին լեգենդար և հինավուրց կյանքի ծառը, որը բուժիչ և վերակենդանացնող ուժ ունի: Ֆիլմի ոգեշնչման աղբյուր է եղել Դիսնեյլենդի թեմատիկ ատրակցիոնները: Հուլիսին կպարզենք, թե արդյոք վտանգավոր ճանապարհորդությունից բոլորը վերադարձան անվնաս:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        6. Minions: The Rise of Gru
      </h3>
      <p>
        Կարոտե՞լ եք փոքրիկ ու չարաճճի Մինիոններին, որոնց ամենա-ամենա ցանկությունն է գտնել և ծառայել չարագործի: Եվ ահա, երկար փորձերից հետո, նրանք գտնում են 12-ամյա Գրույին, ով երազում է դառնալ աշխարհի մեծագույն չարագործը: Այս անգամ մեր շատ սիրելի բարի չարագործին կտեսնենք մանկու հասակում: Ապասենք արևոտ ամառային օրերին, չէ՞ որ Մինիոններն այդ ժամանակ են գալու:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        7. The King's Man
      </h3>
      <p>
        Լրտեսների կյանքը չգիտես ինչու բոլորին հետաքրքրում է: Գաղտնիքներով լի կյանք, անսպասելի իրադարձություններ և խորհրդավոր արտաքին: The King’s Man-ը լրտեսների կազմակերպություն է, որի տաղանդավոր օպերատիվ աշխատողներից մեկն է երիտասարդ Կոնրադը Օքսֆորդի որդին, որի միակ երազանքն էր ծառայել Անգլիային: Սակայն իրադարձություններն այնպես են փոխվում, որ նա ներգրավվում է մարդասպանների և լրտեսների մութ ու գաղտնի աշխարհ: Երկար ենք սպասել ֆիլմի պրեմիերային: Հուսանք, որ փետրվար-մարտ ամիսներին վերջապես կտեսնենք երկար սպասված ֆիլմը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        8. Black Widow
      </h3>
      <p>
        Թերևս Marvel կինոստուդիայի ամենասիրված, համոզված, գաղտնիքներով լεգուն կերպարն է Նատաշա Ռոմանովը: «Սև Այրու» մասին նկարահանվող ֆիլմին մենք շատ վաղուց էինք սպասում: Նատաշային հետապնդում են իր անցյալի մութ ու չբացահայտված գաղտնիքները, որոնց նա պետք է վերջնական լուծում տա «Վրիժառու» դառնալուց առաջ: Ֆիլմը կինոթատրոններում կլինի մայիսի 7-ից:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        9. Morbius
      </h3>
      <p>
        Ֆիլմի գլխավոր հերոսն է Ջարետ Լետոն՝ դերասան և ռոք-երաժշտ: Եթե հետևում եք նրա դերասանական կարիերային, ապա կհամաձայնեք, որ նա անմիջապես կերպարանափոխվում է և վերցնում իր կերպարը: Մորբիուսի կերպարն առավել պատկերավոր ներկայացնել հանդիսատեսին ոչ մեկ չէր կարող: Խորափահանգ, սուր և ստվեր աչքեր, հմտորեն քողարկված հոգեվիճակ. ահա բժիշկ Մորբիուսի կերպարը, որն արյան անբուժելի հիվանդությունից ազատվելու համար մասնակցում է վտանգավոր փորձաքննության՝ արդյունքում դառնալով հմայիչ վամպիր: Պատկերացրեցիք… Աշունը սպասում ենք ֆիլմի պրեմիերային:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        10. Chaos Walking
      </h3>
      <p>
        Երկրբանների կողմից գաղութացված անհայտ մոլորակում ինչ-որ տարօրինակ վիրուսից մահանում են բոլոր կանայք: Տղամարդիկ էլ տիրապետում են արտասովոր մի հատկության. նրանք կարող են միմյանց մտքերը հասկանալ պատկերների, բառերի և հնչյունների տեսքով, որը կոչվում է Աղմուկ: Հենց այդ պատճառով ոչ մի անձնական գաղտնիք հնարավոր չէր պահել: Ֆիլմի հերոսը հայտնաբերում է լռության մի տեղ, որտեղ Աղմուկը բացակայում է: Այնուհետև հայտնաբերում է մարդկանց, ովքեր կարող են այդպիսի լռության տարածքներ գեներացնել նրա շուրջը, և սկսում է պայքարել տոտալիտար հասարակության դեմ: Լռության հետքերով կգնանք այս տարվա ապրիլին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        11. The Suicide Squad
      </h3>
      <p>
        Բոլոր նրանք, ովքեր նայել են Ջոկերի մասնակցությամբ այս ֆիլմը, իհարկե տպավորված են Մարգո Ռոբիի չար, դաժան և սեփական դժբախտությունները խելագարություններով թաքցնելու իր անգնահատելի կարողությամբ: Լինելով մասնագիտությամբ հոգեբան՝ նա գերադասում է կերպարանափոխվել և դառնալ Ջոկերի ընկերուհին: Թեև ֆիլմը սիրվել էր, սակայն մասնագետները համարում էին չհաջողված: Ի՞նչ ենք տեսնելու ֆիլմի այս մասում: Օգոստոսյան տաք օրերը «Ինքնասպանների ջոկատը» ավելի է ջերմացնելու: Սպասենք:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        12. Top Gun: Maverick
      </h3>
      <p>
        1986թ.-ին օսկարակիր դերասան Թոմ Քրուզի մասնակցությամբ նկարահանված Մևերիկ մարտաֆիլմը կինոաշխարհի լավագույններից է համարվել: Մասնագիտական պատասխանատվություն, մարդկային պատրաստվածություն և քրտինքան աշխատանք. երեք հատկանիշներ, որոնք անխուս խագրում են Թոմ Քրուզին: Հմուտ օդաչուն, թողնելով ծառայությունը, զբաղվում էր նորեկների ուսուցմամբ: Բայց փոխվում են ժամանակները, փոխվում է նաև տեխնիկական առաջընթացը, և երբ հասունանում է վտանգը, Մևերիկը վերադառնում է ու ցուցադրում անգերազանցելի վարպետություն: Բոլոր նրանց, ովքեր կարոտել էին Մևերիկին, ուզում ենք ասել՝ քիչ մնաց: Ամառային երկքում ավելի պարզ կերևա նրա հմուտ թռիչքը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        13. Tom and Jerry
      </h3>
      <p>
        Կինոաշխարհի ամենասիրված մուլտհերոսները ձմռան վերջին ամիսը կդարձնեն անչափ ուրախ՝ մուտք գործելով կինոաշխարհ: Մինչ օրս դեռ հստակ պատասխան չկա՝ փոքრերն են նրանց ավելի շատ սիրում, թե՞ մեծերը: Կհարթվի՞ արդյոք երկար տարիների անհաշտությունը, թե՞ հավետ թշնամիներ կմնան մուկն ու կատուն: Բայց այն, որ մուկը՝ Ջերիին, պետք է փախչի, իսկ կատուն՝ Թոմը, նրան փորձի բռնել, դա հաստատ է, և որքան էլ մի պահ թվում է, թե վերջ, ամեն ինչ սկսվում է նորից: Անհամբեր սպասում ենք ընկերության և թշնամության մասին ամենաբարի ու հարազատ ֆիլմին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        14. Candyman
      </h3>
      <p>
        Կինոաշխարհն առանց սարսափ ֆիլմերի հնարավոր չէ պատկերացնել Ալֆրեդ Հիչքոքից հետո: Սիրו՞մ եք գիշերը երկար նայել հայելուն: Առաջարկում ենք թողնել այդ սովորությունը, քանի որ Բենդիմենն իր զոհի հետևից գալու է հայելու միջով: Իսկ եթե չեք հավատում, մարտի կեսից արդեն կհավատաք:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        15. Coming 2 America
      </h3>
      <p>
        33 տարին ոչինչ է, երբ սպասում ես Աֆրիկյան ինչ-որ ցեղի թագավորին՝ Էդի Մերֆիին: Ինչո՞ւ է նա վերադառնում Միացյալ Նահանգներ: Պատճառը նրա որդին է, որի մասին նա իմանում է միայն երկար տարիներ հետո: Կոմեդիայի սիրահարներին մնում է սպասել մարտ ամսին և վայելել սիրելի ֆիլմի շարունակությունը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        16. The Matrix 4
      </h3>
      <p>
        Դու էլ ես ամեն անգամ նայել Մատրիքսի 3 մասերն ու հարց տվել քեզ արդյոք չեն լինելու օդում քարացած կադրեր: Այո, Նեո-ն նորից էկրաններին է: Ամենազոր Քիանու Ռիվզը կմարմնավորի սիրված կերպարին: Ֆանտաստիկ մարտաֆիլմին սպասենք այս տարվա վերջում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        17. Mortal Kombat
      </h3>
      <p>
        HBO Max-ի և Warner Bros.-ի մտահղացումն է՝ ստեղծել ֆիլմ լայն տարածում գտած համակարգչային խաղի հիման վրա: Mortal komat-ի մասին ֆիլմեր ու սերիալներ պարբերաբար տեսել ենք, բայց այս անգամ, կարծես թե, մասշտաբները շատ մեծ են: Warner Bros.-ը պատրաստվում է թողարկել տարվա ամենաքննարկվող ֆիլմերից մեկը: Շուտով կհայտնվենք ամենավտանգավոր մարտարվեստի մրցույթի մեջ:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        18. Ghostbusters: Afterlife
      </h3>
      <p>
        Սիրուն, փափլիկ ու բարի ուրվականները նորից էկրաններին են: Նրանք նման չեն այն ուրվականներին, որոնց մասին պատմում է: Նրանք սիրում են թե՛ փոքրերի և թե՛ մեծերի կողմից: Այս անգամ երկու դեռահաս, փորձելով ավելին իմանալ իրենց պապիկի մասին, պատահաբար գտնում են Ecto-1 ավտոմեքენան, որը պատկանում էր ուրվականների հայտնի որսորդներին: Ուրվականները մրցան են և նրանք կգան ամռանը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        19. Eternals
      </h3>
      <p>
        Marvel-ի ֆաներն այս տարի զարմանալու և հիանալու բազմաթիվ առիթներ են ունենալու: «Հավերժները» մարդկային անմահ սուպերհերոս է, որը պատասխանատվություն է կրում երկրում էվոլյուցիոն զարգացման գործընթացի համար: Ֆիլմում իրար են բախվում հավերժներն ու դևխանները՝ գенеտիկորեն անկայուն և հրեշային կործանարարները: Իսկ հիմա խնդրում ենք ուշադրություն, Marvel-ն այս անգամ գերազանցել է ինքն իրեն՝ հավաքելով հզոր դերասանական կազմ՝ Անջելինա Ջոլի, Սալմա Հայեկ, Ռիչարդ Մեդեն, Քիթ Հերինգթոն և կինոաշխարհի այլ փայլուն դեմքեր: Սպասումները ֆիլմից մեծ են: Պրեմիերան նախատեսվում է այս աշնանը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        20. Shang-Chi and the Legend of the Ten Rings
      </h3>
      <p>
        Այս տարի կինոմանները զարմանալու առիթներ շատ են ունենալու: Marvel-ն իր ֆաների համար անակնկալներ է պատրաստել՝ առաջին անգամ գլխավոր սուպերհերոսի դերում ներկայացնելով ասիական կերպար: Պրեմիերան նախատեսվում է հուլիսի 9-ին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        21. The Hitman's Wife's Bodyguard
      </h3>
      <p>
        Եկեք մի պահ պատկերացնենք, որ Եվրամիության փրկությունը Ռայան Ռեյնոլդսի, Սալմա Հայեկի և Սեմուել Լ.Ջեքսոնի ձեռքերում է: Վստահել, թե ոչ: Մի՞թե դա է հարցը: Իհարկե ոչ: Կարևորն այն է, որ օգոստոսի 19-ից մեծ էկրաններին մեզ սպասում է կոմեդի-մարտաֆիլմ տաղանդավոր և սիրված դերասանների մասնակցությամբ:
      </p>
      <p>
        Բոլուս լեգենդար տիպանների մասնակցությամբ!
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        22. Godzilla vs. Kong
      </h3>
      <p>
        Աշխարհը, որում մենք մեզ հայտարարել ենք տերեր, պատկանում է նրանց: Ու հիմա հասունացել է էպիկ հանդիպման պահը՝ սարսափազդու Գոդզիլան ընդդեմ դաժան, բայց նուրբ ու բարի ներաշխարհով Քոնգի: Այստեղ հիմնական հարցն այն է, թե ում կողմից ես դու և ում համար է քո սիրտը անհանգստանալու: Կինոպրեմիերան սպասվում է մարտ ամսին:
      </p>
      <p>
        Ամենասպասված ֆիլմերը դիտեք ամենաբարձր տրամադրությամբ՝ շրջապատված լավագույն մարդկանցով:
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