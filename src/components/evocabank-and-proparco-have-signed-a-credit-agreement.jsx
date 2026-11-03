import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocapreparun() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <Link 
            to="/all-news" 
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-full w-max transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/all-news" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="hover:text-purple-700 transition-colors">
              Բանկային
            </span>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-[250px] sm:max-w-none">
              Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի վարկային համաձայնագիր


            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-6 space-y-6">
            <Link 
  to="/news/banking" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-700 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Բանկային
  </span>
</Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
             Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի վարկային համաձայնագիր

            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 մլն եվրոյի վարկային համաձայնագիր՝ ուղղված Հայաստանում կանանց ձեռներեցության և վերականգնվող էներգիայի զարգացմանը։

            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
             06.05.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17780463751358/780x585.png" 
                alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
{/* Ստորին մանրամասն բովանդակություն (Կենտրոնացված) */}
        {/* Ստորին մանրամասն բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto pt-8 pb-8 space-y-6 border-t border-gray-100 text-gray-700 text-base sm:text-lg leading-relaxed text-center">
          
          <p>
            Նախագահ Էմանուել Մակրոնի՝ Հայաստան կատարած պետական այցը նոր էջ բացեց Ֆրանսիայի և Հայաստանի միջև երկկողմ հարաբերություններում, որի շրջանակում <strong className="text-purple-900 font-bold">Evocabank</strong>-ը և <strong className="text-gray-900 font-bold">Proparco-AFD</strong>-ն (Groupe Agence française de développement) ստորագրեցին <strong className="text-gray-900 font-bold">20 միլիոն եվրոյի վարկային համաձայնագիր</strong>՝ նպաստելու Հայաստանում զարգացման երկու կարևոր խնդրի՝ կանանց տնտեսական հզորացմանն և երկրի էներգետիկ անցմանապահովմանը:
          </p>

          <p>
            Հայաստանում կանայք կազմում են գործարար համայնքի ընդամենը 17%-ը: Այս կառուցվածքային բացը սահմանափակում է երկրի տնտեսական ներուժը և սոցիալական միասնությունը:
          </p>

          <p>
            Միևնույն ժամանակ, Հայաստանն ակտիվորեն ձգտում է նվազեցնել էներգիայի ներմուծումից կախվածությունը և արագացնել վերականգնվող էներգիայի աղբյուրներին անցումը: Նախագահ Մակրոնի և վարչապետ Փաշինյանի ներկայությամբ ստորագրված համաձայնագիրը նպաստում է այս երկու մարտահրավերների հաղթահարմանը:
          </p>

          <p>
            Վարկային գծի կեսը՝ 10 միլիոն եվրոն, կօգտագործվի կանանց կողմից ղեկավարվող բիզնեսների ֆինանսավորման նպատակով՝ ամրապնդելով կանանց համար ֆորմալ ֆինանսավորման աղբյուրների հասանելիությունը և ձեռներեցության զարգացումը: Գործարքը համապատասխանում է այն չափանիշներին, որոնք սահմանել է <strong className="text-gray-900 font-bold">2X Challenge</strong>-ը՝ զարգացման ֆինանսական հաստատությունների միջազգային նախաձեռնությունը գենդերային առումով զգայուն ներդրումների ոլորտում:
          </p>

          <p>
            Մնացած 10 միլիոն եվրոն կուղղվի <strong className="text-purple-900 font-bold">Evocabank</strong>-ի վերականգնվող էներգետիկայի պորտֆելի զարգացմանը՝ նպաստելով Հայաստանի մաքուր էներգիայի ստեղծման նախագծերի իրագործմանը: Ընդհանուր առմամբ, կապահովվի մոտ <strong className="text-gray-900 font-bold">17,000 աշխատատեղ</strong> և աջակցություն կստանա ավելի քան <strong className="text-gray-900 font-bold">300 փոքր, փոքր և միջին ձեռնարկություն</strong>:
          </p>

          <p>
            Այս համաձայնագիրը արտացոլում է երկու գործընկերների համատեղ հանձնառությունը: <strong className="text-purple-900 font-bold">Evocabank</strong>-ը՝ որպես Հայաստանի ամենաառաջադեմ ֆինանսական հաստատություններից մեկը, և <strong className="text-gray-900 font-bold">Proparco-AFD</strong>-ն՝ որպես երկրի մասնավոր հատվածի զարգացմանն աջակցող գործընկեր, միավորում են ուժերը՝ նպաստելու կին ձեռներեցների և մաքուր էներգիայի հասանելիություն փնտրող համայնքների ֆինանսավորմանը:
          </p>

          {/* Նկար (Կենտրոնացված) */}
          <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/other/780x585a.png" 
              alt="Evocabank և Proparco-AFD համաձայնագրի ստորագրում" 
              className="w-full h-auto object-cover"
            />
          </div>

          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-left bg-purple-50/50 p-4 rounded-r-2xl my-4">
            <strong className="text-purple-900 not-italic font-bold">Evocabank</strong>-ի Վարչության Նախագահ <strong className="text-gray-900 not-italic font-bold">Կարեն Եղիազարյանը</strong> նշեց. «Այս համաձայնագիրը նշանակալի նվաճում է Evocabank-ի համար և կարևոր քայլ՝ դեպի Հայաստանի երկարաժամկետ տնտեսական զարգացումը: Proparco-AFD-ի հետ նոր գործընկերությունն արտացոլում է մեր շարունակական հանձնառությունը՝ մեծացնելու Բանկի ազդեցությունը՝ համաշխարհային փորձը համատեղելով տեղի առանձնահատկությունների հետ: Տարիների ընթացքում Evocabank-ը աջակցել է կանանց կողմից ղեկավարվող բիզնեսներին՝ ընդլայնելով ֆինանսավորման հասանելիությունը և խթանելով ձեռներեցությունը, ուստի համաձայնագիրը հանձնառության ամրապնդման ևս մեկ դրսևորում է: Մենք հավատարիմ ենք մեր առաքելությանը՝ ստեղծելու իրական արժեք մեր հաճախորդների համար՝ առաջարկելով նորարարական ֆինանսական լուծումներ և օգնելով ձևավորել ավելի կայուն ապագա»:
          </blockquote>

          {/* Ընկերությունների մասին բլոկ */}
          <div className="pt-8 border-t border-gray-200 text-center space-y-6">
            
            {/* Evocabank-ի մասին */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-purple-900">
                Evocabank-ի մասին
              </h3>
              <p>
                Որպես Հայաստանում գրանցված առաջին առևտրային Բանկ՝ <strong className="text-purple-900 font-bold">Evocabank</strong>-ը ոչ միայն մատուցում է արագ, հարմար և նորարարական բանկային ծառայություններ, այլև խթանում է ժամանակակից բանկային մշակույթը:
              </p>
              <p>
                Բանկը հատուկ ուշադրություն է դարձնում բջջային ծառայությունների զարգացմանը՝ ստեղծելով մի միջավայր, որտեղ ցանկացած ֆինանսական գործարք կարող է իրականացվել առանց Բանկ այցելելու՝ անմիջապես <strong className="text-purple-900 font-bold">EvocaTOUCH</strong> հավելվածի միջոցով:
              </p>
              <p>
                <strong className="text-purple-900 font-bold">Evocabank</strong>-ը շարունակում է հավատարիմ մնալ իր տեսլականին. «Լինել ամենանորարար և առաջադեմ բանկային ծառայություններ մատուցող ֆինանսական հաստատությունը Հայաստանում, որի բոլոր ծառայություններից հնարավոր կլինի օգտվել առանց բանկ այցելելու»:
              </p>
              <p>
                Բանկը կարևորում է փոքր և միջին ձեռնարկությունների (ՓՄՁ) դերը Հայաստանում և ֆիզիկական անձանց ու ՓՄՁ-ներին տրամադրում է ժամանակակից թվային գործիքներ, գերարագ և ճկուն ֆինանսական լուծումներ, ինչպես նաև ոլորտի առաջատար մասնագետների կողմից անհատականացված աջակցություն:
              </p>
              <p>
                Դրա մասին են վկայում հեղինակավոր միջազգային ամսագրերի և կազմակերպությունների կողմից ստացած բազմաթիվ մրցանակները, ինչպիսիք են՝ «Լավագույն բանկը Հայաստանում», «Լավագույն թվային բանկը Հայաստանում», «Լավագույն ՓՄՁ բանկը Հայաստանում», «Լավագույն բանկային հավելվածը Հայաստանում» և այլն:
              </p>
            </div>

            {/* Proparco-ի մասին */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg sm:text-xl font-bold text-purple-900">
                Proparco-ի մասին
              </h3>
              <p>
                Proparco-ն, որպես Ֆրանսիական զարգացման գործակալության (AFD) դուստր ձեռնարկություն, գործում է Ֆրանսիայի միջազգային զարգացման և համերաշխության ծրագրի շրջանակում: Այն իր գործունեությունն է ծավալում Աֆրիկայի, Ասիայի, Լատինական Ամերիկայի, Եվրասիայի և Մերձավոր Արևելքի ավելի քան 115 երկրներում:
              </p>
              <p>
                Կենտրոնանալով կայուն զարգացման ոլորտում նորարարությունների աջակցման վրա և համագործակցելովապագայի մասնավոր հատվածը ձևավորող նորարարների հետ՝ Proparco-ն նպաստում է բազմաթիվ աշխատատեղերի ստեղծմանը, անհրաժեշտ ապրանքների և ծառայությունների մատակարարմանը, ինչպես նաև կլիմայի փոփոխության դեմ պայքարին:
              </p>
              <p>
                Proparco-ն ակտիվորեն մասնակցում է Ֆրանսիայի միջազգային գործընկերությունների ամրապնդմանը և կայուն ներդրումային քաղաքականության իրականացմանը:
              </p>
            </div>

          </div>

        </div>
          {/* 4. Այլ նորություններ (Other News Grid) */}
                 <div className="pt-16 border-t border-gray-100 space-y-8">
                   <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                     Այլ նորություններ
                   </h2>
         
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     
                     {/* Քարտ 1 */}
                     <Link to="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="	https://www.evoca.am/images-cache/news/1/17908437653512/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                        
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                                 Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից                </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">05.10.2026</span>
                       </div>
                     </Link>
         
                     {/* Քարտ 2 */}
                     <Link to="/news/block-transactions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                         
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                           Գործարքների արգելափակում 1 կոճակով
                         </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">01.06.2026</span>
                       </div>
                     </Link>
         
                     {/* Քարտ 3 */}
                     <Link to="/news/moodys-rating" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
                       <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                         <img src="	https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                       </div>
                       <div className="p-5 flex flex-col flex-grow space-y-3">
                        
                         <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                         Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                         </h3>
                         <span className="text-xs text-gray-400 mt-auto pt-2">18.08.2026</span>
                       </div>
                     </Link>
         
                   </div>
                 </div>

        
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />

    </div>
  );
}