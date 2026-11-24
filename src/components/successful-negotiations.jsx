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
Հաջողակ բանակցությունների 10 պատվիրանները
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
Հաջողակ բանակցությունների 10 պատվիրանները
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ձեզ ենք ներկայացնում կանոններ, որոնք կօգնեն բանակցությունների ժամանակ։


             </p>
              <p>
18.06.2020
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/16336139236001/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

  
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">

  <ol className="space-y-5 pl-2">
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">1.</span>
      <span>Բանակցությունների պետք է գնալ ճիշտ ժամանակին և հետևել Dress Code-ին[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">2.</span>
      <span>Բանակցությունների ընթացքում գործընկերոջ վստահությունը շահելու համար դիմեք նրան անունով[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">3.</span>
      <span>Բանակցություններ վարելիս մի շտապեք հակադարձել Ձեր գործընկերոջը. լսեք մինչև վերջ, ինչից հետո նոր ներկայացրեք Ձեր տեսակետը[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">4.</span>
      <span>Բանակցությունների ընթացքում կիրառեք «դերաբաժանում»: Աշխատեք ինքներդ հարցեր տալ, քանի որ այսպես Դուք խոսակցությունը տանում եք Ձեզ շահավետ ուղղությամբ: Բացի դրանից, երբ հարցերը Դուք եք տալիս, իսկ երկրորդ կողմն անընդհատ պատասխանում է, նա սկսում է կարծել, որ, եթե հիմնականում ինքն է խոսում, ուրեմն շահեկան վիճակում հենց ինքն է: Իսկ իրականում, զրույցը կառավարում է նա, ով հարցեր է տալիս և լսում[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">5.</span>
      <span>Բանակցություններից վերցրեք այն, ինչի համար Դուք եկել եք՝ միևնույն ժամանակ պահպանելով դրական հարաբերությունները երկրորդ կողմի հետ[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">6.</span>
      <span>Հիմա խաղում ենք Բանակցությունների ընթացքում ճիշտ որսացեք այն պահը, երբ կարող եք գտնել Ձեզ համար ոչ այնքան կարևոր մի հարց, և համաձայնվեք հակառակ կողմի առաջարկին: Հավատացեք, Ձեզ համար շահավետ պայմաններում, նա իրեն պարտավոր կզգա Ձեր առջև և կխաղա Ձեր իսկ առաջարկած խաղաքարտերով[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">7.</span>
      <span>Հաճախ բանակցության գնալիս՝ բանակցող կողմերը սկսում են մտածել հակառակ կողմի փոխարեն. մի արեք ենթադրություններ, քանի որ ենթադրությունների ժամանակ Դուք սկսում եք շրջանառել Ձեր կյանքի փորձը, իսկ յուրաքանչյուր մարդ ունի աշխարհի իր պատկերը[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">8.</span>
      <span>Էմոցիաները որոշիչ են բանակցությունների ընթացքում: Նրանք մթագնում են մեր բանականությունը, սահմանափակում են հստակ որոշումներ ընդունելու ունակությունը: Պետք է կարողանալ կառավարել էմոցիաները: Բանակցելուց առաջ հստակ պատկերացրեք՝ ինչ կլինի, եթե շահեք տվյալ կետը, կամ տանուլ տաք: Ցույց մի տվեք հակառակ կողմին, թե որքան է Ձեզ անհրաժեշտ այս կամ այն կետը: Եթե գործարքին վերաբերում ենք ինչպես կենսական անհրաժեշտության, ապա հոգեբանորեն դեմոտիվացվում եք, իսկ երբ Ձեզ պետք է այդ գործարքը և վերջ, ապա արդեն մոտիվացիոն առողջ փուլում եք[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">9.</span>
      <span>Հաջողված բանակցությունների հիմնական պատվիրանը՝ կազմեք բանակցությունների ճանապարհային քարտեզ. ո՞ւր եք գնում, ի՞նչ եք ուզում, արդյո՞ք ճիշտ ուղղությամբ եք գնում, որքանո՞վ են արդյունավետ Ձեր ընտրած մեթոդները և պատրա՞ստ եք վերջնական արդյունքին[cite: 25],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="font-bold text-purple-700 shrink-0">10.</span>
      <div className="space-y-2">
        <p>Վերջում գնահատեք Ձեր բանակցության արդյունքները. ինչպե՞ս՝[cite: 25]</p>
        <ul className="space-y-1.5 pl-4 text-gray-600">
          <li>- Բանակցության ավարտին պետք է ակնհայտ դառնա արդյունքը[cite: 25],</li>
          <li>- Արդյունքը պետք է լինի «շոշափելի» բոլոր կողմերի համար[cite: 25],</li>
          <li>- Բանակցող կողմերի միջև հարաբերությունները պետք է ավելի լավանան[cite: 25]:</li>
        </ul>
      </div>
    </li>
  </ol>
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