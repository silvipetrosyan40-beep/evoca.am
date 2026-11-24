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
2022-ի ամենասպասված 22 ֆիլմերը


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
2022-ի ամենասպասված 22 ֆիլմերը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս տարի կինոմանները հաստատ չեն ձանձրանա



             </p>
              <p>
25.01.2022

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16430963363528/780x585.png" 
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
        1. Batman
      </h3>
      <p>
        Բոլորիս կողմից սիրված Բեթմենը վերադառնում է՝ այս անգամ արդեն նոր գլխավոր դերակատարով: «Դաժան, մութ & վախեցնող» այսպես են նկարագրել Մեթ Ռիվզի «Բեթմենը» Ռոբերտ Պատինսոնի գլխավոր դերակատարմամբ: Դատելով թրեյլերներից՝ ֆիլմն իրոք բավականին մութ է լինելու: Փաթինսոնը հայտնի սուպերհերոսի կերպարով նույնպես բավականին տպավորիչ տեսք ունի:
      </p>
      <p>
        Պատմության մեջ երիտասարդ Բրյուս Ուեյնը կբախվի Փոլ Դանոյի դերակատար Ռիդլերին: Էկրանին կհայտնվեն նաև Զոե Կրավիցը (Կատուն), Քոլին Ֆար렐ը (Պինգվին), Էնդի Սերկիսը (Ալֆրեդ Փեննվորթ) և Ջեֆրի Ռայթը (Հանձնակատար Գորդոն): Ինչպես նկատեցիք՝ դերասանական կազմն արդեն իսկ ապահովում է ֆիլմի ամենասպասված լինելը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        2. Fantastic Beasts: The Secrets of Dumbledore
      </h3>
      <p>
        Երրորդ սփին-օֆը Հարրի Փոթերի տիեզերքում, որտեղ չարագործ Գրինդելվալդին մարմնավորում է Մադս Միքելսենը Ջոնի Դեփի փոխարեն: Ֆիլմի ռեժիսորն է Դևիդ Հեյթը, իսկ հերոսներին մարմնավորել են՝ Էդի Ռեդմեյն, Ջուդ Լոու, Դեն Ֆօգլերը, Էզրա Միլերը և այլ հայտնի դերասաններ: Ըստ սյուժեի՝ լավ տղաներից կազմված թիմը կբախվի Գրինդելվալդի հետ, իսկ ֆիլմը տեղի կունենա Երկրորդ համաշխարհային պատերազմի ժամանակ: Անհամբեր սպասում ենք, թե ինչպես կավարտվի այս պատմությունը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        3. Operation Fortune: Ruse de Guerre
      </h3>
      <p>
        Գայ Ռիչին կրկին էկրան բարձրացրեց Ջեյսոն Սթեթհեմին, ոչ սովորական մարտաֆիլմի համար:
      </p>
      <p>
        Հատուկ գործակալ Օրսոն Ֆորչունը և նրա օպերատիվ թիմն աշխատանքների մեջ են ներգրավում Հոլիվուդի ամենամեծ կինոաստղերից մի քանիսին, որպեսզի նա հօգնի նրանց գաղտնի առաքելության մեջ, երբ մահացու զենքի վաճառքը սպառնում է վերացնել աշխարհում տիրող կարգը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        4. Death on the Nile
      </h3>
      <p>
        Այս ֆիլմը Ագաթա Քրիստիի հերթական դետեկտիվի թարմացված ադապտացիա է, որի պրեմիերան արդեն մեկ անգամ չէ, որ հետաձգվել է: Ֆիլմը վերջապես կհայտնվի կինոթատրոններում փետրվարի առաջին կեսին: Այս անգամ դետեկտիվ Հերկուլ Պուարոն Եգիպտոսում գնում է գետով նավարկության և ներգրավված սպանության և մեկ հետաքննության մեջ: Գլխավոր դերերում են՝ Գալ Գադոտը, Լետիշիա Ռայթը և Արմի Համմերը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        5. Ambulance
      </h3>
      <p>
        Մայքլ Բեյի մարտաֆիլմը Ջեյք Ջիլենհոլի մասնակցությամբ: Ըստ սյուժեի՝ վետերան Ուիլ Շարփը գումարի խիստ կարիք ունի իր մահացող հիվանդ կինոջը փրկելու համար: Նա դիմում է Դեննիի հանցագործ եղբորն օգնության համար և համոզում նրան բանկ բանտել: Սակայն ամեն ինչ ըստ պլանի չի ընթանում, և եղբայրները ստիպված են գողանալ շտապօգնության մեքենա երկու պատանդների՝ բժշկի և վիրավոր ոստիկանի հետ միասին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        6. Doctor Strange in the Multiverse of Madness
      </h3>
      <p>
        Marvel-ը տարվա բացումը կանի Doctor Strange 2 ֆիլմով: Բժշկի Սթրենջը, որին մարմնավորում է անկրկնելի Բենեդիկտ Քամբերբեթչը, վերադառնում է մայիսին: Ֆիլմը տեղի կունենա WandaVision-ի, Loki-ի առաջին սեզոնի և Spider-Man: No Way Home-ի իրադարձություններից հետո: Էլիզաբեթ Օլսենին և Ռեյչել ՄաքԱդամսին նույնպես կտեսնենք ֆիլմում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        7. Moonfall
      </h3>
      <p>
        Ռոլանդ Էմերիխի գիտաֆանտաստիկ ֆիլմն այն մասին, թե ինչպես է Լուսինը դուրս գալիս ուղեծրից՝ սպառնալով բախվել Երկրին: Կա՞ որևէ ելք այս անմխիթար վիճակում: Միգուցե: Դերերը կատարել են՝ Հոլի Բերին, Մատրիկ Ուիլսոնը, Ջոն Բրեդլին, Մայքլ Պենյան և Դոնալդ Սաթերլենդը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        8. Uncharted
      </h3>
      <p>
        Ամենահայտնի վիդեոխաղերից մեկի էկրանավորումը: Ֆիլմի սյուժեն կպտտվի երիտասարդ արկածախնդիր Նաթան Դրեյքի և նրա դաստիարակ Վիկտոր «Սալի» Սալիվանի շուրջ: Գլխավոր դերերում են՝ Թոմ Հոլանդը, Մարկ Ուոլբերգը և Անտոնիո Բանդերասը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        9. Marry me
      </h3>
      <p>
        Փոփ-դիվա Բեթ Վալդեզը և նրա փեսացուն՝ Բաստիանը, տարվա ամենաքննարկվող զույգն են, որոնց յուրաքանչյուր քայլին ուղիղ եթերում հետևում է միլիոնավոր մարդ: Համերգի ժամանակ՝ երկրպագուների ամբոխի առաջ, Բեթը պարզում է, որ սիրելին խաբել է նրան: Բեթը հենց այդ պահին որոշում է ամուսնանալ ամբոխի մեջ կանգնած մի անծանոթի հետ, ով իր հերթին պատահաբար էր հայտնվել դահլիճում: Գլխավոր դերերում են՝ Ջենիֆեր Լոպեսը, Օուեն Ուիլսոնը և Մալուման:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        10. Sonic the Hedgehog 2
      </h3>
      <p>
        Հաստատվելով Գրին Հիլզում՝ Sonic-ը փորձում է ապացուցել, որ ունի իրական հերոսի բոլոր հնարավորությունները: Իսկ հերոսական փորձությունը չի ուշանում. չարագործ բժիշկ Ռոբոտնիկը նորից դավադրություն է անում: Այս անգամ ստեղծված զուգընկերոջ՝ Նուկլզի հետ: Նրանք միասին փնտրում են անգին զմրուխտ, որը պարունակում է ուժեր, որոնք կարող են ոչնչացնել քաղաքակրթություններ: Sonic-ը միավորվում է Թեյլզ աղվեսի հետ՝ ճանապարհորդելու աշխարհով մեկ և գտնելու զմրուխտը նախքան այն կհայտնվի սխալ ձեռքում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        11. Black Adam
      </h3>
      <p>
        Ֆիլմը կպատմի չարագործ Բլեք Ադամի ծագման պատմությունը, որն առաջին անգամ հայտնվեց DC Comics-ում 1945 թվականին: Բնօրինակում նա Հին Եգիպտոսի արքայազնն էր, որին որպես իր իրավահաջորդ ընտրեց հզոր կախարդ Շազամը: Այնուամենայնիվ, աշակերտն ապստամբեց, և հիասթափված ուսուցիչը, չկարողանալով խլել գերբնական ուժերի շնորհը, չարագործին բնակեցրեց հեռավոր աստղային համակարգում: Սև Ադամին հինգ հազար տարի պահանջվեց վերադառնալու համար: Գլխավոր դերում հանդես կգա բոլորիս կողմից սիրված Դուեյն Ջոնսոնը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        12. The Flash
      </h3>
      <p>
        Անհատական ֆիլմ արագընթաց վազորդի՝ Ֆլեշի (Էզրա Միլեր) մասին: Սյուժեի համաձայն՝ պատմության հերոսը մորը փրկելու համար փորձում է վերադառնալ անցյալ, բայց պատահաբար այլընտրանքային տիեզերք է ստեղծում: Գալ Գադոտը նույնպես կներկայանա ֆիլմում՝ Հրաշք կնոջ դերում: Եվ, այո, լինելու է միանգամից երկու Բեթմեն՝ երիտասարդ Բեն Աֆլեքի կատարմամբ, և մեծահասակ՝ Մայкл Քիթոնի:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        13. The Northman
      </h3>
      <p>
        Ռոբերտ Էգերսը մեզ հայտնի է որպես թրիլերների ռեժիսոր: The Northman-ը Էգերսի նոր ստեղծագործությունն է: Ֆիլմում գործողությունները տեղի են ունենում 10-րդ դարի սկզբին՝ Իսլանդիայում: Պատմությունը կպտտվի վիկինգների արքայազնի շուրջ, ով վրեժխնդիր է լինում իր սպանված հոր համար: Ֆիլմը հիանալի դերասանական կազմ ունի՝ Ալեքսանդր Սկարսգարդ, Նիկոլ Քիդման, Անյա Թեյլոր-Ջոյ, Իթան Հոկ և Ուիլեմ Դեֆո:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        14. Jurassic World: Dominion
      </h3>
      <p>
        Jurassic World 2-ի շարունակությունը կպատմի այն մասին, թե ինչպես են հնագույն մողեսներն ու մարդիկ փորձում գոյատևել միմյանց հետ նույն աշխարհում: Ֆիլմի ռեժիսորն է Քոլին Թրևորոն, իսկ վերջին մասի գլխավոր դերասաններն են՝ Քրիս Պրատը, Բրայս Դալաս Հովարդը և Լորա Դեռնը: Տեսնելս նախորդ երկու ֆիլմերի վերաբերյալ բողոքներից հետո այս անգամ ինչ են պատրաստել մեզ համար:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        15. Cyrano
      </h3>
      <p>
        Ջո Ռայթի մյուզիքլը Փիթեր Դինքլեջի (Game of thrones) և Հեյլի Բենեթի (The Girl on the Train, The Magnificent Seven) մասնակցությամբ: Սա Էդմոնդ Ռոստանի «Սիրանո դե Բերժերակ» դրամայի ադապտացիա է: Սյուժեի կենտրոնում փարիզի բանաստեղծ Սիրանոն է: Տղան շատ դրական կողմեր ունի, բայց անհանգստանում է իր արտաքինից և ռիսկ չի անում խոստովանել իր զգացմունքների մասին այն աղջկան, ում շատ է հավանում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        16. The Unbearable Weight of Massive Talent
      </h3>
      <p>
        Ռեժիսոր Թոմ Գորմիքանի ֆիլմը, որտեղ Նիկոլաս Քեյջը մարմնավորում է ինքն իրեն: Սյուժեն այսպիսին է. դերասան Նիկոլաս Քեյջը հայտնվել է պարտքերի մեջ և նրան փող է անհրաժեշտ: Մի օր նա հրավիրվում է ծննդյան խնջույքի Ջավիի (Պեդրո Մասկալ) կողմից՝ մեքսիկացի հանցագործների ղեկավար, հարուստ մարդ և պարզապես մեծ երկրպագու: Միլիարդատերը խոստանում է առատաձեռնորեն վճարել հանդիպման համար, և գլխավոր հերոսը համաձայնում է, մինչդեռ Քեյջը հավաքագրվում է ԿՀՎ-ի կողմից և հանձնարարվում կատարել լրտեսի պատասխանատու և վտանգավոր աշխատանքը: Իսկ թե ինչպես կավարտվի այս ամբողջ պատմությունը, կիմանանք ապրիլին:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        17. Lightyear
      </h3>
      <p>
        Pixar-ի նոր աշխատանքը և Toy Story-ի պրիքվելը Բազ Լայթյարի կերպարի ծագման մասին է, որը հնչյունավորել է Քրիս Էվանսը: Չի բացառվում, որ մի օր տեսնենք նաև Toy Story-ի Վուդի կերպարի մասին պատմող առանձին վեպերին մուլտֆիլմ:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        18. Thor: Love and Thunder
      </h3>
      <p>
        Թորի մասին արդեն չորրորդ սոլո ֆիլմը, որի ռեժիսորը դարձյալ Թայկա Վայիտին է (նա աշխատել է Thor: Ragnarok-ի վրա): Քրիս Հեմսվորթը, իհարկե, կվերադառնա իր դերին: Նրա հետ միասին էկրաններին կհայտնվեն նաև Սթևա Թոմսոնը, Քրիստան Բեյլը (Գորի դերում), Քրիս Պրատը և այլ ծանոթ դեմքեր: Ի դեպ, ֆիլմում կրկին կտեսնենք Նատալի Պորտմանին, որ շատ կարևոր դերակատարում է ունենալու ֆիլմում:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        19. Black panther: Wakanda forever
      </h3>
      <p>
        Ռայան Բուգերի հռչակավոր կինոկոմիքսի շարունակությունը («Fruitvale Station», «Creed: Rocky’s Legacy»), որտեղ Ս’Ջալայի քույր Շուրին դարձավ «Սև հովազ», որը զարմանալիորեն համընկավ ողբերգական իրադարձությունների հետ կապված աֆրիկացի սուպերհերոսի դերակատարի մահվան հետ՝ Չեդվիկ Բոուզմանը մահացավ քաղցկեղից 2020 թվականի ամռանը, որից հետո սցենարն ամբողջությամբ վերաշարադրվեց:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        20. Avatar 2
      </h3>
      <p>
        Հանդիսատեսին 10 տարի սպասեցնելուց հետո հենց տարեվերջին Ջեյմս Քեմերոնը հանդիսատեսին կուրախացնի Ավատարի շարունակության պրեմիերայով: Շարունակության գործողությունները տեղի կունենան Պանդորայի վրա, այդ թվում՝ ջրի տակ: Գլխավոր հերոսներին կրկին մարմնավորում են՝ Սեմ Նորթինգթոնը և Զոի Սալդանան:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        21. Aquaman and the Lost Kingdom
      </h3>
      <p>
        Ջեյմս Ուանը (Saw, Astral և The Conjuring) վերադարձել է ստորջրյա DC սուպերհերոսի մասին շարունակությունը նկարահանելու համար, որին մարմնավորում է Ջեյսոն Մոմոան: Այժմ Արթուր Քարերին ստիպված կլինի պաշտպանել Ատլանտիդան, ինչի համար նա ստիպված է օգնություն խնդրել իր եղբայր Օրմից (Պատրիկ Ուիլսոն), որը դավաճան և թշնամի է: Շարունակության մեջ կներկայացվի նաև Ջահյա Աբդուլ-Մաթին II-ը, չար Սև Մանտան և Անվանեմն ընկերուհի Մերան, որին մարմնավորում է Էմբեր Հերդը:
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700">
        22. The lost city
      </h3>
      <p>
        Լորետա Սեյջը գրում է սիրային-արկածային սիրային վեպեր: Դրաներում իրադարձությունները զարգանում են էկզոտիկ վայրերում, իսկ գլխավոր հերոսուհին գեղեցկուհի և երազող հերոսուհի Պաշն է, որին կյանքում մարմնավորում է շապիկի մոդել Անյան: Նոր բեսթսելերը ցուցադրելու շրջագայության ժամանակ Լորետային առևանգում է էքսցենտրիկ միլիարդատերը, որը վստահ է, որ կարող է նրան տանել դեպի հին կորած քաղաքի գանձերը իր վերջին գրքից: Ալանը որոշում է ապացուցել, որ կարող է հերոս լինել իրական կյանքում և գնում է Լորետային փրկելու:
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