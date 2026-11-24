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
Սև Ուրբաթ, վարդագույն գնումներ


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
Սև Ուրբաթ, վարդագույն գնումներ
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Դու պատրա՞ստ ես այս տարվա Սև Ուրբաթի խելահեղությանը։ Քեզ համար ունենք շա՛տ հետաքրքիր ու ինֆորմատիվ բլոգ հաճելի գնումներ կատարելու համար։


















             </p>
              <p>
17.11.2023

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17002203918441/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Ամեն տարի այս օրը մոտ 135 միլիոն մարդ ամբողջ աշխարհում կատարում է գնումներ՝ օնլայն կամ օֆլայն տարբերակով: Գիտե՞ս ինչն է հետաքրքիր. <strong className="text-purple-700">Սև Ուրբաթն</strong> այլևս 1 օր չի տևում: Վերջին շրջանում այն դարձել է Black Weekend, նույնիսկ՝ Black Week:
  </p>
  <p>
    Այս տարի <strong className="text-purple-700">Սև Ուրբաթը</strong> նոյեմբերի 24-ին է, բայց պաշտոնապես կսկսվի նոյեմբերի 23-ի երեկոյան: Մարդիկ նախապես են պատրաստվում <strong className="text-purple-700">Սև Ուրբաթին</strong>. մի մասը որոշակի գումար է խնայում գնումների համար, մի մասը վերցնում կամ օվերդրաֆտ է վերցնում իրեն անհրաժեշտ ապրանքները մեծ զեղչերով ձեռք բերելու համար, մի մասը նախապես պատրաստում է shopping list, որ միանգամից՝ ընդամենը 1 կոճակի օգնությամբ գնի իր նախընտրած ապրանքները, մյուս մասն էլ շունչը պահած և քարտերը պատրաստ անհամբեր սպասում է զեղչերի մեկնարկին:
  </p>
  <p>
    «Սև ուրբաթ» արտահայտությունն առաջացել է 1996-ին. այն այդպես են կոչել ոստիկանները Thanksgiving-ի օրվան հաջորդող խցանումների պատճառով, իսկ հետո այն սկսել է ասոցացվել մեծ զեղչերի հետ:
  </p>
  <p>
    Վերջին տարիներին ավելի ու ավելի է զարգանում օնլայն առևտուրը. <strong className="text-purple-700">Սև Ուրբաթին</strong> այն նույնպես բացառություն չէ: Մարդիկ, խուսափելով հերթերից, նախընտրում են իրենց գնումները կատարել տանը՝ հանգիստ պայմաններում: Շատերը կարծում են, որ այդ տարբերակով գնում են իրական անհրաժեշտ ապրանքները: Իսկ օֆլայն գնումների դեպքում հաճախ տրվում են էմոցիաներին և գնում ապրանքներ զեղչերի ազդեցության տակ, որոնք իրականում այդ պահին այդքան էլ անհրաժեշտ չէին:
  </p>
  <p>
    Նախորդ տարվա ռեկորդը պատկանում է Amazon-ին՝ պայմանավորված <strong className="text-purple-700">Սև Ուրբաթի</strong> ամենամեծ զեղչերի թվով: Այս ընթացքում Amazon-ը վաճառել է միլիոնավոր ապրանքներ՝ մի քանի օրում գրանցելով ավելի քան 1 միլիարդ ԱՄՆ դոլարի վաճառք:
  </p>
  <p>
    Իսկ հիմա մի քանի խորհուրդ քարտի ընտրության հարցում.
  </p>
  <p>
    Նախ պատասխանենք հաճախակի տրվող այն հարցին, թե որ քարտերով է հնարավոր կատարել օնլայն գնումներ միջազգային հարթակներից:
  </p>
  <p>
    Օնլայն գնումներ կարելի է կատարել բոլոր միջազգային վճարային համակարգերի քարտերով՝ Visa, Master, American Express և այլն: Այստեղ կարևոր է ընտրել այնպիսի քարտ, որը Ձեզ կտա այլ առավելություններ:
  </p>
  <p>
    Եթե դեռ չես կողմնորոշվել քարտի հարցում, կներկայացնենք <strong className="text-purple-700">Evocabank</strong>-ի քարտերի տարբերակները՝ իրենց առավելություններով: Համոզված ենք՝ կգտնես քո քարտն այստեղ:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ն ունի վճարային քարտերի շատ տեսակներ, որոնց կարող ես ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 30].
  </p>
  <p>
    Բայց մենք առանձնացրել ենք որոշ քարտեր, որոնցով օնլայն գնումներ կատարելը հարմար է և շահավետ:
  </p>
  <p>
    <strong className="text-purple-700">Evoca Digital</strong> քարտը շաաատ հարմար է ցանկացած միջազգային հարթակում օնլայն գնումներ կատարելու համար:
  </p>
  <p>
    Նախ նշենք, որ այս քարտը կարող էդ պատվիրել ցանկացած վայրից, ցանկացած ժամի <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում ու ամենակարևորը՝ մինչև <strong className="text-purple-700">դեկտեմբերի 31</strong>-ն այն կստանաս <strong className="text-purple-700">ԱՆՎՃԱՐ</strong>:
  </p>
  <p>
    <strong className="text-purple-700">Evoca Digital</strong> քարտը Visa միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքները միայն այն տարբերությամբ, որ քարտը քեզ մոտ լինի ոչ թե ֆիզիկապես, այլ քո <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածում, ինչպես նաև Apple Pay-ում և Google Pay-ում:
  </p>
  <p>
    <strong className="text-purple-700">Evoca Digital</strong> քարտը կարող ես ձեռք բերել 3 արժույթով՝ դրամով, դոլարով ու եվրոյով, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով: <strong className="text-purple-700">Digital</strong> քարտի մյուս կարևոր առավելություններից է այն, որ եթե <strong className="text-purple-700">Սև Ուրբաթի</strong> վերջին պահին որոշես գնումներ կատարել հստակ արժույթի քարտով, հենց այդ պահին էլ կարող ես ակտիվացնել քարտը:
  </p>
  <p>
    Վերևում կարդացել ես չէ՞, որ քարտերը տրամադրվում են անվճար: Ակցիան գործում է 3 արժույթի համար մինչև <strong className="text-purple-700">դեկտեմբերի 31</strong>-ը:
  </p>
  <p>
    Կարող ես անցնել հետևյալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">հղումով</a> մանրամասների համար[cite: 31]:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/2023.jpg" 
      alt="Evoca Digital Cards" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Իսկ եթե ցանկանում ես ձեռք բերել <strong className="text-purple-700">Evoca Digital քարտը</strong>, պատվիրիր այն <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածում մեկ ակնթարթում:
  </p>
  <p>
    Մյուս քարտը <strong className="text-purple-700">Visa Vision</strong>-ն է, քարտ, որը դառնալու է քո ֆավորիտը: Ինչո՞ւ: Խոսենք այս քարտի առավելություններից.
  </p>
  <p>
    Կարող ես կատարել անկանխիկ գնումներ ու վճարումներ <strong className="text-purple-700">Visa Vision</strong> քարտով օնլայն ու օֆլայն եղանակով և ստանալ <strong className="text-purple-700">0.25% Cashback</strong> տեղական գործարքների համար, և <strong className="text-purple-700">0.5% Cashback</strong> արտասահմանյան գործարքների համար[cite: 31]:
  </p>
  <p>
    <strong className="text-purple-700">Visa Vision</strong> քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում[cite: 31]:
  </p>
  <p>
    Ի՞նչ է դա նշանակում. <strong className="text-purple-700">Սև Ուրբաթի</strong> ընթացքում կարող ես կատարել օնլայն գնումներ և ստանալ <strong className="text-purple-700">Cashback</strong> անմիջապես քո <strong className="text-purple-700">Visa Vision</strong> քարտին: Որքան շատես գնումներ, այնքան ավելի շատ <strong className="text-purple-700">Cashback</strong>[cite: 31]:
  </p>
  <p>
    <strong className="text-purple-700">Visa Vision</strong> քարտը դեռ շատ հնարավորություններ ունի, որոնց կարող ես ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>[cite: 31]:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Credit-Card-Mockup1.jpg" 
      alt="Visa Vision Card Mockup" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Իսկ եթե ցանկանում ես ձեռք բերել <strong className="text-purple-700">Visa Vision</strong> քարտը, պատվիրիր այն <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածում մեկ ակնթարթում[cite: 32]:
  </p>
  <p>
    Բայց, այսքանով Սև Ուրբաթին վերաբերող մեր առաջարկները չեն սպառվում:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ը <strong className="text-purple-700">Սև Ուրբաթի</strong> համար նույնպես պատրաստել է զեղչեր: Բանկում <strong className="text-purple-700">Gold Friday</strong> է, քանի որ <strong className="text-purple-700">նոյեմբերի 20-ից դեկտեմբերի 1-ը Evoca Gold</strong> տեսակի պրեմիում քարտերը հնարավոր է ձեռք բերել <strong className="text-purple-700">50% զեղչով</strong>՝ նախկին 15,000 դրամի փոխարեն վճարելով ընդամենը <strong className="text-purple-700">7,500 դրամ</strong>: Եթե ցանկանում ես օգտվել զեղչից, կարողես անցնել հղումով և ծանոթանալ մանրամասներին: Նաև ունես հնարավորություն պատվիրել քարտը օնլայն տարբերակով[cite: 32]:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/gold-600x315.png" 
      alt="Gold Friday Promotion" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Բոլորս գիտենք, որ <strong className="text-purple-700">Սև Ուրբաթին</strong> զեղչվում է գրեթե ամեն ինչ՝ հագուստ, կոշիկ, պայուսակ, ժամացույց, տեխնոլոգիա, կահույք, ավտոմեքենա, հեռախոս… անվերջ կարելի է թվարկել:
  </p>
  <p>
    Բոլորս էլ ունենք որևէ նախընտրելի իր, որը շատ ենք ցանկանում ձեռք բերել: Իրական ժամանակը եկել է, մեծ զեղչերը սկսվել են, բայց չունե՞նք բավարար միջոցներ…
  </p>
  <p>
    Օրինակ՝ ինչ-որ մեկը հավանել է որևէ բրենդի պայուսակ կամ գոտի, մյուսը սենյակի կահույքն է ցանկանում թարմացնել, մեկ այլ անձ ցանկանում է ծնողներին անմոռանալի հանգիստ նվիրել, մյուսը՝ նոր հեռախոս ձեռք բերել…
  </p>
  <p>
    Ցանկություններ շատ են, բայց միջոցները ոչ միշտ են բավարար:
  </p>
  <p>
    Այս խնդրի համար մենք ևս ունենք լուծում. <strong className="text-purple-700">Evocabank</strong>-ն առաջարկում է նոր, գերարագ <strong className="text-purple-700">Action օնլայն վարկը</strong>, որը կարող եք ստանալ <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի: Այս վարկի միջոցով անկասկած կարող եք օգտվել <strong className="text-purple-700">Սև Ուրբաթի</strong> մեծ զեղչերից: Վարկատեսակից օգտվելու համար քեզ անհրաժեշտ չէ երաշխավոր, գրավի առկայություն կամ այլ հավելյալ փաստաթղթեր, անգամ հարկավոր չէ այցելել բանկ և հերթերում ժամանակ կորցնել:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Evoca-Action-600x315.png" 
      alt="Evoca Action Online Loan" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    <strong className="text-purple-700">Action օնլայն վարկը</strong> հաստատվում է նույն պահին ու այդ օրն էլ գումարը փոխանցվում է քո կողմից տրամադրված հաշվեհամարին: Պատկերացնում ես, այս վարկը անգամ կարող ես ձեռք բերել <strong className="text-purple-700">Սև Ուրբաթ</strong> օրն ու անմիջապես գնել այն, ինչի մասին երկար ժամանակ երազում էիր:
  </p>
  <p>
    Իսկ հիմա կարողես անցնել <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">հղումով</a> և ծանոթանալ վարկի պայմաններին, քանի որ Սև Ուրբաթին մնացին հաշված օրեր:
  </p>
  <p>
    Իսկ որպես վերջաբան՝ քեզ կցանկանանք պատմել մի իրական, զավեշտալի պատմություն, որը տեղի է ունեցել Սև ուրբաթին:
  </p>
  <p>
    2011թ.-ին Կալիֆոռնիայի Porter Ranch Walmart-ում շշուկներ էին պտտվում, որ Լոս Անջելեսի ոստիկանական բաժանմունքը որոնում է մի կնոջ, ով «Սև ուրբաթը» վերածել էր իրական խառնաշփոթի:
  </p>
  <p>
    Այս կինը մարդկանց անծայրածիր հերթը շրջանցելու համար իր հետ վերցրել էր պղպեղի սփրեյ և սկսել էր փչել ու տարածել այն հերթի մեջ սպասող հարյուրավոր մարդկանց մեջ: Այսպիսով, նրան հաջողվել էր առաջ անցնել հերթը և կատարել շատ գնումներ՝ օգտվելով մեծ զեղչերից: Հերթում կանգնած մարդկանց մոտ առաջացել էին ուժեղ հազ, ալերգիկ սիմպտոմներ, իսկ այդ ընթացքում անհայտ կինը հանգիստ կատարում էր իր գնումները:
  </p>
  <p>
    Քեզ մաղթում ենք հաճելի ու անվտանգ գնումներ:
  </p>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    XOXO, քո Evoca...
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