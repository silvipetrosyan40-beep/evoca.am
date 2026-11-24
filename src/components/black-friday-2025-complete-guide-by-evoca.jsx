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
Սև ուրբաթի իրական գույնը


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
Սև ուրբաթի իրական գույնը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Սև ուրբաթ 2025. ամբողջական ուղեցույց Evoca-ի կողմից` օնլայն գնումներ, քարտերի ընտրություն, անվտանգություն և հետաքրքիր փաստեր ամբողջ աշխարհից։








             </p>
              <p>
24.11.2025

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17639790235101/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


 <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  
  <p>
    Սև Ուրբաթն այլևս 1 օր չի տևում: Վերջին շրջանում այն դարձել է <strong className="text-purple-700">Black Weekend</strong>, նույնիսկ՝ <strong className="text-purple-700">Black Week</strong>:
  </p>
  <p>
    Այս տարի Սև Ուրբաթը <strong className="text-purple-700">նոյեմբերի 28-ին</strong> է, բայց պաշտոնապես կսկսվի նոյեմբերի 27-ի երեկոյան: Մարդիկ նախապես են պատրաստվում Սև Ուրբաթին.
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>մի մասը որոշակի գումար է խնայում գնումների համար,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>մի մասը վերցնում է վարկ կամ օվերդրաֆտ իրենց անհրաժեշտ ապրանքները մեծ զեղչերով ձեռք բերելու համար,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>մի մասը նախապես պատրաստում է shopping list, որ միանգամից՝ ընդամենը 1 կոճակի օգնությամբ, գնի իր նախընտրած ապրանքները,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>մյուս մասն էլ շունչը պահած և քարտերը պատրաստ անհամբեր սպասում է զեղչերի մեկնարկին:</span>
    </li>
  </ul>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    «Սև ուրբաթ». ինչպե՞ս է առաջացել տերմինը
  </h3>
  <p>
    «Սև ուրբաթ» տերմինը իրականում շատ ավելի հին է, քան կարծում եք: Այն առաջին անգամ օգտագործվել է <strong className="text-purple-700">1869թ.</strong>, երբ Ուոլ Սթրիթում տեղի ունեցած ֆինանսական ճգնաժամը խուճապ ու մեծ կորուստներ առաջացրեց: Այսպիսով, Սև Ուրբաթը սկզբում կապ ուներ ոչ թե զեղչերի, այլ տնտեսական աղետի հետ:
  </p>
  <p>
    Տասնամյակներ անց՝ <strong className="text-purple-700">1950-ականներին</strong>, Ֆիլադելֆիայի ոստիկանները նույն անվանումն օգտագործեցին Thanksgiving-ից հետո առաջացող խցանումների, հսկայական մարդկանց հոսքի և ամբողջ քաղաքի քաոսի համար: Նրանց համար սա տարվա ամենածանր աշխատանքային օրն էր:
  </p>
  <p>
    Ժամանակի ընթացքում վաճառողները փորձեցին տերմինին դրական ենթատեքստ տալ, և <strong className="text-purple-700">1980-90-ականներին</strong> այն արդեն ասոցացվում էր մեծածավալ զեղչերի ու գնումների հետ: Այսպես Սև ուրբաթը դարձավ ամենախոշոր գնումների օրն ԱՄՆ-ում և հետո արդեն ամբողջ աշխարհում:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Օնլա՞յն, թե՞ օֆլայն գնումներ
  </h3>
  <p>
    Վերջին տարիներին ավելի ու ավելի են զարգանում <strong className="text-purple-700">օնլայն գնումները</strong>: Սև Ուրբաթին այն նույնպես բացառություն չէ. վաճառքների ավելի քան 70%-ը կատարվում է օնլայն: Մարդիկ, խուսափելով հերթերից, նախընտրում են իրենց գնումները կատարել տանը՝ հանգիստ պայմաններում: Շատերը կարծում են, որ այդ տարբերակով գնում են իրենց անհրաժեշտ ապրանքները: Իսկ <strong className="text-purple-700">օֆլայն գնումների</strong> դեպքում հաճախ տրվում են էմոցիաներին և գնում ապրանքներ զեղչերի ազդեցության տակ, որոնք իրականում այդ պահին այնքան էլ անհրաժեշտ չեն: Այլ կերպ ասած՝ խանութների դիմաց անվերջ թվացող հերթերն ու հրմշտոցն արդեն որոշ չափով անցյալում են:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Black Friday 2024. հետաքրքիր և զարմանալի փաստեր
  </h3>
  <p>
    Երբ ուսումնասիրում էինք նոր փաստեր Սև ուրբաթի մասին, այնքան հետաքրքիր տեղեկություն իմացանք, որ որոշեցինք անպայման կիսվել ձեզ հետ:
  </p>

  <ol className="space-y-4 pl-2">
    <li className="space-y-1">
      <div className="font-bold text-purple-700">1. Օնլայն վաճառքների նոր ռեկորդներ</div>
      <p>2024-ին աշխարհում օնլայն վաճառքներն աճել են ավելի քան <strong className="text-purple-700">9%-ով</strong>: Ամենաշատ վաճառված ապրանքներն էին՝ էլեկտրոնիկա, խաղալիքներ, սպասք և հագուստ:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">2. Amazon-ի ցուցանիշները</div>
      <p>Amazon-ը 2024-ին գրանցեց իր լավագույն Black Friday շաբաթը՝ ավելի քան <strong className="text-purple-700">10 մլրդ ԱՄՆ դոլար</strong> ընդհանուր վաճառքով, իսկ ամենաշատ վաճառված ապրանքներն էին՝ անլար ականջակալներ, խաղալիք կոնստրուկտորներ և խնամքի պարագաներ:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">3. Օֆլայն գնումների անակնկալ վերադարձ</div>
      <p>2024-ին բազմաթիվ երկրներում մարդիկ օնլայն գնումներից կրկին վերադարձան մեծ խանութներ ու մոլեր: Օֆլայն վաճառքներն աճեցին մոտ <strong className="text-purple-700">4%-ով</strong>, իսկ Արևմտյան Եվրոպայի խոշոր մոլերում վերջին տարիներին գրանցվեցին ամենամեծ հերթերը:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">4. Վճարային հարթակների ռեկորդներ</div>
      <p>Visa, Mastercard և PayPal-ը արձանագրեցին ռեկորդային արդյունք՝ մեկ րոպեում ավելի քան <strong className="text-purple-700">300,000</strong> առցանց վճարում: Սա ամենաբարձր ցուցանիշն էր վերջին չորս տարիների ընթացքում:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">5. Ոչ պակաս ռեկորդային արդյունք ուներ նաև Հայաստանը</div>
      <p>Հայաստանում Սև ուրբաթի ընթացքում օնլայն և օֆլայն վաճառքը հասել է ավելի քան <strong className="text-purple-700">11 մլրդ դրամի</strong>՝ աճելով 11%-ով:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">6. Աշխարհը գնում էր նվերներ</div>
      <p>2024-ի Black Friday-ին վաճառված ապրանքների մեծ մասը գնվել է Ամանորի նվերների համար: Հարցված գնորդների <strong className="text-purple-700">70%-ը</strong> նշել է, որ գնումները կատարել է տոնական նախապատրաստության նպատակով:</p>
    </li>
  </ol>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Գնումները գնումներ, բայց դրանից առաջ հարկավոր է ճիշտ քարտի ընտրություն
  </h3>
  <p>
    Black Friday-ի մեծ զեղչերից օգտվելը միայն ցանկություն չէ. դրա համար պետք է նաև <strong className="text-purple-700">ճիշտ վճարային քարտ</strong>, որը ոչ միայն թույլ կտա կատարել օնլայն գնումներ, այլ նաև կտա հավելյալ առավելություններ:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Ինչի՞ն ուշադրություն դարձնել քարտ ընտրելիս
  </h4>
  <p>
    <strong className="text-purple-700">Cashback՝</strong> շատ հաճելի է, երբ գնումներ կատարելիս գումարի մի մասը հետ է վերադարձվում: <strong className="text-purple-700">Evocabank</strong>-ի <strong className="text-purple-700">Visa</strong> և <strong className="text-purple-700">Mastercard</strong> քարտերը հենց այդպիսի առավելություն ունեն. մեծ զեղչերի օրերին դու կարող է գնել ու միաժամանակ ստանալ գումարի վերադարձ:
  </p>
  <p>
    <strong className="text-purple-700">Քարտի բացման արագ գործընթաց՝</strong> օնլայն գնումներն ավելի հարմար են, երբ քարտը կարող ես ձեռք բերել մի քանի վայրկյանում: <strong className="text-purple-700">Evocabank-ի թվային քարտերը</strong> հենց այդպիսի լուծում են.
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>կարող ես ձեռք բերել վայրկյանների ընթացքում <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի և evoca.am կայքի միջոցով,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>կարող ես ընտրել արժույթը,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>և կարող ես անմիջապես վճարել ցանկացած միջազգային հարթակում՝ WizzAir-ից մինչև Amazon:</span>
    </li>
  </ul>

  <p>
    <strong className="text-purple-700">Ընտրության հնարավորություն՝</strong> Evocabank-ն ունի վճարային քարտերի ընտրության մեծ հնարավորություն: Կարող ես ընտրել cashback-ով, ճանապարհորդական, պրեմիում կամ թվային քարտեր: Բոլոր քարտերին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
  </p>

  <p className="font-bold text-purple-700 pt-2">
    Ի դեպ, կարևոր մի բան, Սև ուրբաթն արդեն Evoca-ում է:
  </p>

  {/* All 5 promo images arranged in a single responsive row */}
  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-4">
    <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/bf%20postbf%20fb%2014.png" 
        alt="Black Friday Offer 1" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/bf%20postbf%20fb%2015.png" 
        alt="Black Friday Offer 2" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/bf%20postbf%20fb%2017.png" 
        alt="Black Friday Offer 3" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/bf%20postbf%20fb%2018.png" 
        alt="Black Friday Offer 4" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100 col-span-2 sm:col-span-1">
      <img 
        src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/bf%20postbf%20fb%2016.png" 
        alt="Black Friday Offer 5" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>

  <p>
    Կարող ես կատարել օնլայն կամ օֆլայն գնումներ <strong className="text-purple-700">Evoca Mastercard</strong>-ով և ստանալ <strong className="text-purple-700">20% cashback</strong>: Չունե՞ս <strong className="text-purple-700">Evoca Mastercard</strong>, ձեռք բեր հենց հիմա <strong className="text-purple-700">50% զեղչով</strong> և սկսիր գնումները: Իսկ ակցիայի մանրամասներին ծանոթացիր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Մեծ գնումներ
  </h3>
  <p>
    Եթե ցանկանում եք օգտվել խոշոր զեղչերից, բայց գումարը բավարար չէ, կարող եք ընտրել <strong className="text-purple-700">Evocabank-ի սպառողական վարկը</strong> կամ <strong className="text-purple-700">օնլայն օվերդրաֆտը</strong>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Սև ուրբաթի «սև կողմը»
  </h3>

  <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Black%20Friday%202025%20Blog/BF-FRAUD.png" 
      alt="Black Friday Fraud Safety" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Ու ինչպես տեսար, Սև ուրբաթի լավ կողմերը շատ-շատ են, բայց կա մի «սև կողմ», որի մասին նույնպես պետք է իմանաս: Այս ընթացքում ակտիվանում են նաև խարդախները, ովքեր տարբեր միջոցներով ցանկանում են գողանալ քո բանկային տվյալները: Դրանցից խուսափելու համար կան մի քանի պարզ կանոններ, որոնց պարտադիր պետք է հետևել.
  </p>

  <ol className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">1.</span>
      <span>Կատարիր գնումներ միայն վստահելի կայքերից</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">2.</span>
      <span>Խուսափիր կասկածելի առաջարկներից</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">3.</span>
      <span>Մի բացիր անհայտ հղումներ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">4.</span>
      <span>Քարտային տվյալները մուտքագրիր միայն պաշտոնական էջերում</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">5.</span>
      <span>Միացրո՛ւ SMS ծանուցումները</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">6.</span>
      <span>Ուսումնասիրի՛ր ապրանքն ու վաճառողին</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">7.</span>
      <span>Օգտագործի՛ր անվտանգ ինտերնետային կապ</span>
    </li>
  </ol>

  <p>
    Զեղծարարությունների մասին ավելի մանրամասն կարող եք կարդալ մեր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">բլոգում</a>:
  </p>

  <p className="text-center font-bold text-purple-700 py-2">
    ...
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Իսկ որպես վերջաբան՝ կցանկանանք քեզ պատմել մի իրական, զավեշտալի պատմություն, որը տեղի է ունեցել Սև Ուրբաթին
  </h3>
  <p>
    2011թ.-ին Կալիֆոռնիայի Porter Ranch Walmart-ում գնումներ էին պտտվում, որ Լոս Անջելեսի ոստիկանական բաժանմունքը որոնում է մի կնոջ, որ Սև ուրբաթը վերածել էր իրական խառնաշփոթի:
  </p>
  <p>
    Այս կինը մարդկանց անծայրածիր հերթերը շրջանցելու համար իր հետ վերցրել էր պղպեղի սփրեյ և սկսել էր խَզել այն հերթի մեջ սպասող հարյուրավոր մարդկանց մեջ: Այսպիսով, նրան հաջողվել էր առաջ անցնել հերթը և կատարել շատ գնումներ՝ օգտվելով մեծ զեղչերից: Հերթում կանգնած մարդկանց մոտ առաջացել էին ուժեղ հազ, ալերգիկ սիմպտոմներ, իսկ այդ ընթացքում անհայտ կինը հանգիստ կատարում էր իր գնումները:
  </p>

  <p className="font-medium text-gray-800 pt-2">
    Թող այս տարվա Սև ուրբաթը քեզ համար լինի հաճելի, օգտակար ու անվտանգ գնումների օր՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>ճիշտ քարտով,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>ճիշտ ընտրություններով,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>և հարկավոր՝ առանց պղպեղի սփրեյի 😊</span>
    </li>
  </ul>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700">
    XOXO, gn Evoca...
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