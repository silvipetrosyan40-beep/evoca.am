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
SWOT: Վերլուծիր ինքդ քեզ


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
SWOT: Վերլուծիր ինքդ քեզ
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Հաճախ ինքներս մեզ հարցնում ենք. ո՞վ եմ ես, որո՞նք են իմ ուժեղ ու թույլ կողմերը, ինչպիսի հնարավորություններ ունեմ իմ նպատակներին հասնելու համար և ինչը կարող է ինձ խանգարել









             </p>
              <p>
26.06.2020

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/1632999785005/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Մեզից յուրաքանչյուրն էլ ունենում է անինքնավստահության և մոլորության զգացում ու հաճախ չի կողմնորոշվում՝ ինչպես դուրս գալ այդ սթրեսային իրավիճակից[cite: 34]: Առկա խնդիրները խանգարում են հստակ ընկալել, թե ինչ է իրականում տեղի ունենում կյանքի այդ փուլում, և բացասական էմոցիաները շեղում են ու թույլ չտալիս ընկալել ամեն ինչ հստակ ու օբյեկտիվ[cite: 34]:
  </p>
  <p>
    Գուցե զարմանաք, բայց այստեղ մեզ կարող է օգնել SWOT վերլուծությունը, քանի որ այն իրենից ենթադրում է ոչ միայն բիզնեսի, այլև անձի վերլուծություն[cite: 34]: SWOT-ի տարրերն են[cite: 34]՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">S – Strengths</strong> (ուժեղ կողմեր)[cite: 34]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">W – Weaknesses</strong> (թույլ կողմեր)[cite: 34]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">O – Opportunities</strong> (հնարավորություններ)[cite: 34]</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><strong className="text-purple-700">T – Threats</strong> (սպառնալիքներ)[cite: 34]</span>
    </li>
  </ul>

  <p>
    SWOT վերլուծությունը կօգնի մեզ ճանաչել սեփական «ԵՍ»-ը չորս կողմից, կբացահայտի մեր ուժեղ կողմերն ու թույլ կտա բացահայտել մեր անձնային աճի բոլոր հնարավորությունները[cite: 34]: Իսկ ահա թույլ կողմերի բացահայտումը կօգնի մեզ «ուժեղացնել» դրանք՝ ներդնելով մեր ողջ ներուժը ու թույլ չտալով, որ դրանք խոչընդոտեն ինչպես կարիերայի, այնպես էլ կյանքի այլ ոլորտների զարգացմանը[cite: 34]: Հետևաբար, անձնական SWOT վերլուծությունը թույլ է տալիս կառավարել էմոցիաները, նորովի նայել իրավիճակին և որոշել հետագա առաջընթացի ճանապարհները՝ ցանկալի նպատակին հասնելու համար[cite: 34]:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Սկսե՞նք
  </h3>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Առանձնացեք շրջապատից, կենտրոնացեք ինքներդ Ձեր և Ձեր մտքերի վրա[cite: 34]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Անպայման վերցրեք թուղթ և գրիչ[cite: 34]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Անջատեք բջջայինը՝ արտաքին գործոններից «մեկուսացվելու» համար[cite: 34]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գրի առեք SWOT-ի բոլոր դաշտերը[cite: 34]:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Եղեք հնարավորինս անկեղծ և մի վախեցեք արդյունքից. սա թույլ կտա իրականությունը ճիշտ գնահատել[cite: 34]:</span>
    </li>
  </ul>

  <p>
    Ահա Ձեր SWOT վերլուծությունն արդյունավետ իրականացնելու համար ուղղորդող մի քանի հարց՝
  </p>

  <section className="space-y-2 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      (S) Իմ ուժեղ կողմեր-ի օրինակներ
    </h3>
    <ul className="space-y-2 pl-2">
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է թույլ տալիս ինձ առաջ շարժվել՝ հասնել նրան, ինչին ուզում եմ[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն եմ ես կարողանում անել լավ: Ի՞նչն է ինձ հաջողվում ավելի լավ, քան մյուսներին[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ո՞ր հատկանիշներն են ինձ թույլ տալիս տարբերվել ուրիշներից[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Որոնք են իմ բնավորության և իմ արտաքին տեսքի ուժեղ կողմերը[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ կա իմ մեջ, որին ես կարող եմ ապավինել դժվարին իրավիճակում[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է իմ մեջ գրավում կամ կարող է գրավել այլ մարդկանց[cite: 34]:</span></li>
    </ul>
  </section>

  <section className="space-y-2 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      (W) Իմ թույլ կողմեր-ի օրինակներ
    </h3>
    <ul className="space-y-2 pl-2">
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է խանգարում ինձ հասնել նպատակին և ստանալ այն, ինչ ուզում եմ[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Իմ անձի ո՞ր կողմերի վրա պետք է աշխատել, որպեսզի դրանք փոխվեն դեպի լավը[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է ինձ մեջ խանգարում ինքնակրթության համար[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է ինձ խոչընդոտում մարդկանց հետ շփվել առանց կոնֆլիկտների[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է ինձ առավել դժվար տրվում: Ինչպե՞ս է դա ինձ խանգարում կյանքում[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ո՞րն է իմ սխալների պատճառը[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Որոնք են, ըստ մյուսների, իմ բացասական կողմերը[cite: 34]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ինչո՞ւ եմ ես ժամանակ առ ժամանակ դժգոհ և անինքնավստահ[cite: 34]:</span></li>
    </ul>
  </section>

  <section className="space-y-2 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      (O) Իմ արտաքին բարենպաստ հնարավորություններ-ի օրինակներ
    </h3>
    <ul className="space-y-2 pl-2">
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է իմ միջավայրում նպաստում իմ զարգացմանը և բարեկեցությանը[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ ռեսուրսներ կան իմ տրամադրության տակ հաջողության հասնելու համար[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ կարող եմ սովորել ես իմ ընկերներից և մրցակիցներից[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ կարող եմ սովորել կյանքում ինձ հանդիպած խնդիրներից[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Անհրաժեշտության դեպքում ՞ում կարող եմ վստահել: Ի՞նչ կարող են նրանք ինձ տալ[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Կա՞ն իմ շրջապատում ռեսուրսներ և հնարավորություններ, որոնց մասին ես դեռ չգիտեմ[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Որտե՞ղ և ինչպե՞ս կարող եմ գտնել դրանք: Ինչպե՞ս սովորել ճիշտ օգտագործել դրանք[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է ինձ օգնում կամ կարող է օգնել ազատվել (W) դաշտում թույլ կողմերի բաժնում նշված բացթողումներից[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ կարող եմ սովորել ինքս ինձնից: Ինչպե՞ս է օգնում ինձ իմ կյանքի փորձը[cite: 35]:</span></li>
    </ul>
  </section>

  <section className="space-y-2 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      (T) Արտաքին սպառնալիքներ և ռիսկեր-ի օրինակներ
    </h3>
    <ul className="space-y-2 pl-2">
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ կամ ով է շրջապատում խանգարում իմ զարգացմանը և բարեկեցությանը[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչ խոչընդոտներ են կանգնած իմ մասնագիտական աճի ճանապարհին[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչը ես դեռ ի վիճակի չեմ կարող փոխել իմ միջավայրում[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է իմ միջավայրում խանգարում ինձ լինել այն մարդը, ով ես ուզում եմ լինել[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ովքե՞ր են իմ մրցակիցները: Ինչպե՞ս են նրանք ազդում ինձ վրա[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ի՞նչն է առաջացնում մտահոգություն և անհանգստություն իմ միջավայրում[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Ո՞րն է իմ բարեկեցության ուղղակի կամ անուղղակի սպառնալիքը[cite: 35]:</span></li>
      <li className="flex items-start space-x-3"><span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span><span>Շրջակա միջավայրի ի՞նչ փոփոխություններ կարող են առաջացնել ճգնաժամային իրավիճակ[cite: 35]:</span></li>
    </ul>
  </section>
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