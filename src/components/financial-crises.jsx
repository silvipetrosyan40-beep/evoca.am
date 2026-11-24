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
Ֆինանսական ճգնաժամեր
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
Ֆինանսական ճգնաժամեր
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
ֆինանսատնտեսական ճգնաժամերը հանգեցնում են շահույթի ծավալների կրճատման, ֆոնդային ու ֆինանսական շուկաների անկայունության:
























              </p>
              <p>
06.07.2020
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16329967423394/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

  
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">

  <p>
    Սակայն ճգնաժամերը նաև բացահայտում են տնտեսական համակարգում առկա թերությունները և օգնում շտկել դրանք:[cite: 24]
  </p>
  <p>
    Իսկ ճգնաժամ վերապրած պետություններն արդյունքում դառնում են առավել կենսունակ և արագ հարմարվում արտաքին միջավայրում տեղի ունեցող փոփոխություններին:[cite: 24]
  </p>
  <p className="font-medium text-gray-800">
    Վերհիշենք համաշխարհային մի քանի խոշոր ճգնաժամեր:[cite: 24]
  </p>

  <div className="space-y-8 pt-2">
    {/* 1857 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1857թ. ճգնաժամ[cite: 24]</span>
      </h3>
      <p>
        Առաջին համաշխարհային տնտեսական ճգնաժամը, որը մեծ հարված հասցրեց ԱՄՆ-ի, Անգլիայի, Գերմանիայի և Ֆրանսիայի տնտեսություններին ու հասարակական կյանքին, տեղի է ունեցել 1857թ.:[cite: 24]
      </p>
      <p>
        Ճգնաժամը սկսվեց ԱՄՆ-ից. պատճառը երկաթուղային ընկերությունների զանգվածային սնանկացումն ու արժեթղթերի շուկայի փլուզումն էր, որին էլ հետևեց բանկային համակարգի ճգնաժամը: ԱՄՆ-ից ճգնաժամը փոխանցվեց Անգլիա, իսկ հետո նաև մայրցամաքային Եվրոպա: Բորսային տատանումները հասան անգամ Հարավային Ամերիկայի երկրներ: Ճգնաժամի ժամանակահատվածում ԱՄՆ-ում պողպատի արտադրությունը կրճատվեց 20%-ով, բամբակի օգտագործումը՝ 27%-ով: Անգլիայում ամենաշատը տուժեց նավաշինական արդյունաբերությունը, որի անկումը կազմեց 26%: Գերմանիայում պողպատի օգտագործումը կրճատվեց 25%-ով, Ֆրանսիայում պողպատի ձուլումը և բամբակի օգտագործումը՝ 13%-ով:[cite: 24]
      </p>
    </section>

    {/* 1873 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1873թ. ճգնաժամ[cite: 24]</span>
      </h3>
      <p>
        Հերթական համաշխարհային տնտեսական ճգնաժամը սկսվեց 1873թ. Ավստրիայում և Գերմանիայում:[cite: 24]
      </p>
      <p>
        Ճգնաժամը սկսվեց Լատինական Ամերիկայի երկրներից, ապա Գերմանիայում ու Ավստրիայում անշարժ գույքի չհիմնավորված թանկացում եղավ, որտեղ գների վերելքն ավարտվեց 1873թ. մայիսին, ապա Վիեննայի ֆոնդային բորսան փլուզվեց:[cite: 24]
      </p>
      <p>
        Վիեննային հետևեցին Ցյուրիխի և Ամստերդամի ֆոնդային բորսաները: ԱՄՆ-ում բանկային խուճապը սկսվեց Նյու Յորքի բորսայում արժեթղթերի կտրուկ անկմամբ:[cite: 24]
      </p>
      <p>
        Այս տնտեսական ճգնաժամը ամենաերկարն էր կապիտալիզմի պատմության մեջ. այն ավարտվեց միայն 1878թ.:[cite: 24]
      </p>
    </section>

    {/* 1929-1939 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1929-1939թթ. Մեծ դեպրեսիա (Սև հինգշաբթի) կամ Ուոլ Սթրիթ[cite: 24]</span>
      </h3>
      <p>
        Սա 20-րդ դարի ամենախոշոր ֆինանսական և տնտեսական աղետն էր: Շատերը կարծում են, որ Մեծ դեպրեսիայի պատճառը 1929թ. Wall Street-ի բանկիրների ու ներդրումային ընկերությունների՝ փողի նկատմամբ ագահությունն էր, ինչը հետագայում էլ ավելի սրվեց ԱՄՆ կառավարության թերի որոշումների պատճառով:[cite: 24]
      </p>
      <p>
        Մեծ Դեպրեսիան տևեց գրեթե 10 տարի և հանգեցրեց եկամտի զանգվածային կորստի և գործազրկության բարձր մակարդակի: 1933թ. ճգնաժամի գագաթնակետին ԱՄՆ-ում գործազրկության մակարդակը հասավ գրեթե 25%: Նյու Յորքի բորսայում բաժնետոմսերի կտրուկ անկում տեղի ունեցավ 60-70%-ով:[cite: 24]
      </p>
      <p>
        Ամեն ինչ փլուզվեց մի գիշերում: Այս ճգնաժամի ընթացքում արդյունաբերական արտադրությունն ԱՄՆ-ում նվազեց 46%-ով, Մեծ Բրիտանիայում՝ 24%-ով, Գերմանիայում՝ 41%-ով, Ֆրանսիայում՝ 32%-ով: Պաշտոնական տվյալներով 1933թ. 32 զարգացած երկրներում գրանցված էր 30 մլն գործազուրկ, ԱՄՆ-ում՝ 14 մլն:[cite: 24]
      </p>
    </section>

    {/* 1958 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1958թ. Սուեզի ճգնաժամ[cite: 24]</span>
      </h3>
      <p>
        Եգիպտոսի կառավարությունը 1956թ. հուլիսի 26-ին ազգայնացրեց Սուեզի ջրանցքը: Իրենց խախտված դիրքերը Եգիպտոսում վերականգնելու և արաբական աշխարհում ազգային-ազատագրական շարժումներին հարված հասցնելու նպատակով Անգլիան և Ֆրանսիան, օգտագործելով Իսրայելին, ռազմական ագրեսիա ձեռնարկեցին Եգիպտոսի դեմ:[cite: 24]
      </p>
      <p>
        Սուեզի ջրանցքը փակվեց 6 ամսով, որի արդյունքում կրճատվեցին առևտրի ծավալները, բարձրացան ծախսերը և հետաձգվեցին առաքումները՝ ազդելով երկրի տնտեսության վրա:[cite: 24]
      </p>
    </section>

    {/* 1973 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1973թ. ճգնաժամ[cite: 25]</span>
      </h3>
      <p>
        ԱՄՆ-ում սկիզբ առած տնտեսական ճգնաժամն իր ընդգրկմամբ, տևողությամբ, խորությամբ և կործանարար ուժով զգալիորեն գերազանցեց 1957-58թթ. համաշխարհային տնտեսական ճգնաժամը և իր որոշ բնութագրերով ավելի մոտ էր 1929-33թթ. ճգնաժամին:[cite: 25]
      </p>
      <p>
        1973թ. տեղի ունեցավ նաև առաջին էներգետիկ ճգնաժամը, քանի որ նավթ արտահանող երկրների՝ ՕՊԷԿ-ի անդամները նավթի գները բարձրացնելու նպատակով նվազեցրին նավթի արդյունահանումը: 1973թ. հոկտեմբերի 16-ին նավթի մեկ բարելը թանկացավ 67%-ով՝ 3-ից հասնելով 5 դոլարի: 1974թ. նավթի մեկ բարելն արդեն արժեր 12 դոլար:[cite: 25]
      </p>
    </section>

    {/* 1997-1998 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>1997-1998թթ. Ասիական ճգնաժամ[cite: 25]</span>
      </h3>
      <p>
        Հարավարևելյան Ասիայի ֆինանսատնտեսական ճգնաժամն ուժգնացավ 1997թ. հուլիսին և 1990-ականների վերջերին լուրջ ցնցում ստեղծեց համաշխարհային շուկայում: Ճգնաժամի իրական պատճառը «ասիական վագրերի»՝ Հարավային Կորեայի, Սինգապուրի, Հոնկոնգի և Թայվանի, աննախադեպ տնտեսական աճն էր, որը նպաստել էր դեպի այդ երկրներ կապիտալի զանգվածային ներհոսքին, պետական և կորպորատիվ պարտքի աճին, անշարժ գույքի շուկայում ցնցումներին:[cite: 25]
      </p>
      <p>
        1997թ. մայիսին թաիլանդական բահտը (արժույթ) միջազգային սպեկուլյանտների կողմից ենթարկվեց զանգվածային հարձակումների: Հունիսին այն ընկավ կիսով չափ, իսկ Թաիլանդի արժեթղթերի շուկան՝ երեք քառորդով:[cite: 25]
      </p>
      <p>
        Հաջորդ ամսվա ընթացքում ճգնաժամը տարածվեց Ինդոնեզիայի, Մալայզիայի և Հարավային Կորեայի տնտեսության վրա: Քիչ չափով ճգնաժամն անդրադարձավ նաև Ճապոնիայի, Հոնկոնգի, Լաոսի, Ֆիլիպինների, Չինաստանի, Հնդկաստանի և Վիետնամի տնտեսությունների վրա:[cite: 25]
      </p>
    </section>

    {/* 2007-2009 */}
    <section className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>2007-2009թթ. ճգնաժամ[cite: 25]</span>
      </h3>
      <p>
        1930թ. հետո ամենամեծ ֆինանսական ճգնաժամը սկիզբ է առել 2007թ. ամռանը, երբ մի շարք ֆինանսական հաստատություններ հայտարարեցին, որ մտադիր են դադարեցնել իրենց կարճաժամկետ վարկավորումները:[cite: 25]
      </p>
      <p>
        Այն սկսվեց ԱՄՆ-ի անշարժ գույքի շուկայում, այնուհետև դոմինոյի էֆեկտով տարածվեց տնտեսության այլ ոլորտներ ու երկրներ:[cite: 25]
      </p>
      <p>
        Հիփոթեքային ճգնաժամի հիմնական պատճառը թերևս ԱՄՆ-ի անշարժ գույքի շուկայում տնտեսական փուչիկի պայթյունն էր:[cite: 25]
      </p>
      <p>
        2007թ. ընթացքում նվազագույնը 100 ընկերություններ կամ կասեցրին հիփոթեքներով գործունեությունը, կամ լրիվ դադարեցրին իրենց գործունեությունը, կամ վաճառվեցին: Շատ ներդրողներ նախընտրեցին վաճառել իրենց ռիսկային հիփոթեքային պարտատոմսերը և ոչ կայուն արժեթղթերը՝ փոխարենը փողը ներդնելով ապրանքների մեջ, որը կապիտալի պահպանման միջոց էր:[cite: 25]
      </p>
    </section>

    {/* 2020 */}
    <section className="space-y-3 pt-2 border-t border-purple-50">
      <h3 className="text-lg sm:text-xl font-bold text-purple-700 flex items-center space-x-2">
        <span className="w-3 h-0.5 bg-purple-700 inline-block"></span>
        <span>2020թ. Մեծ Անկում՝ մեր օրեր[cite: 25]</span>
      </h3>
      <p>
        Covid-19 համավարակի սպասվելիք հետևանքների կանխատեսումները խոսում են տնտեսական անկման և աշխատատեղերի կորստի մասին:[cite: 25]
      </p>
      <p>
        Այս անգամ հետևանքները կարող են ավելի վատը լինել, քան 12 տարի առաջ համաշխարհային ֆինանսական ճգնաժամի դեպքում:[cite: 25]
      </p>
      <p>
        Այս ճգնաժամն անորոշ է և նման չէ որևէ այլ ճգնաժամի: Հետևանքները կախված են վիրուսի կանխարգելման միջոցների արդյունավետությունից:[cite: 25]
      </p>
      <p>
        Բացի այդ, շատ երկրներ այսօր առերեսվում են առողջապահական և ֆինանսական խնդիրների, հումքային ապրանքների գների անկման: Մարդկության պատմության ընթացքում եղել են բազմաթիվ թե՛ ճգնաժամեր և թե՛ համավարակներ, սակայն մարդը դիմակայել ու հաղթանակով է դուրս եկել բոլոր փուլերից:[cite: 25]
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