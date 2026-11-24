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
  <Link to="/news/other" className="hover:text-purple-700 transition-colors flex items-center">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/news/all" className="hover:text-purple-700 transition-colors">
    Նորություններ
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/news/other" className="hover:text-purple-700 transition-colors">
    Այլ
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
Evocabank-ը նոր մասնաճյուղ է բացել Երևանում
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
  to="/news/other" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-gray-500 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
    Այլ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Evocabank-ը նոր մասնաճյուղ է բացել Երևանում
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Մալաթիա-Սեբաստիա համայնքում՝ Անդրանիկի 134/8 հասցեում, բացվեց Evocabank-ի նոր՝ «Մալաթիա» մասնաճյուղը:




              </p>
              <p>
15.06.2020
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/16206393286192/780x585.jpg" 
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
      Նորաբաց «Մալաթիա» մասնաճյուղ[cite: 18]
    </h2>
    <p className="font-bold text-purple-700">
      Արտոնյալ պայմաններ նոր հաճախորդների համար[cite: 18]
    </p>
  </div>

  <p>
    <strong className="text-purple-700">Evocabank</strong>-ը, թվային ծառայությունների զարգացմանը զուգահեռ, ընդլայնում է նաև իր offline ծառայությունների տրամադրման աշխարհագրությունը[cite: 18]:
  </p>

  <p>
    «<strong className="text-purple-700">Մալաթիա</strong>» մասնաճյուղը Երևանում Բանկի արդեն 9-րդ մասնաճյուղն է և 12-րդը՝ Հայաստանում[cite: 18]: Այն իր հաճախորդներին սպասարկելու է երկուշաբթիից ուրբաթ՝ 09:30-17:00[cite: 18]: Մասնաճյուղի հաճախորդները կսպասարկվեն նորագույն տեխնիկայով հագեցած, ժամանակակից և հարմարավետ սրահում[cite: 18]: Այստեղ կա հերթի կառավարման համակարգ, վճարային տերմինալ, ինչպես նաև՝ արտարժույթի փոխանակման տերմինալ, ինչը հնարավորություն կտա խնայել ժամանակը՝ կատարելով մի շարք բանկային գործարքներ առանց Բանկի աշխատակցին մոտենալու[cite: 18]:
  </p>

  <p>
    <strong className="text-purple-700">Evocabank</strong>-ի Վարչության նախագահ Կարեն Եղիազարյանի խոսքերով՝ նոր մասնաճյուղի բացումը Բանկի բիզնեսի ընդլայնման քաղաքականության իրագործման հերթական քայլերից է[cite: 18]: Նոր մասնաճյուղի բացման հիմնական նպատակն է՝ առավել հասանելի դարձնել <strong className="text-purple-700">Evocabank</strong>-ի թվային և offline ծառայությունները Մալաթիա-Սեբաստիա համայնքի բնակիչների համար[cite: 18]:
  </p>

  <blockquote className="border-l-4 border-purple-700 pl-4 italic text-gray-800 my-4">
    «Բանկի մասնաճյուղերի ցանցի ընդլայնումն արտակարգ դրության պայմաններում նշանակալի իրադարձություն է[cite: 18]: Բանկի նոր մասնաճյուղի բացումով դրական ազդակ կհաղորդենք հանրությանը և կնպաստենք հասարակության շրջանում լավատեսական սպասումների ձևավորմանը[cite: 18]: Ավելին՝ շուտով պլանավորում ենք ևս մի նոր մասնաճյուղ բացել Երևանում՝ Նոր Նորք համայնքում[cite: 18]: Հակահամաճարակային կանոնների խստիվ պահպանման նպատակով «Մալաթիա» մասնաճյուղի բացման հանդիսավոր արարողություն չենք կազմակերպել: Մուտքի ժապավենը կտրելուց հետո մասնաճյուղի անձնակազմն անմիջապես անցել է աշխատանքի», - նշել է <strong className="text-purple-700 not-italic">Evocabank</strong>-ի Վարչության նախագահ <strong className="text-gray-900 not-italic">Կարեն Եղիազարյանը</strong>[cite: 18]:
  </blockquote>

  <div className="space-y-4 pt-4 border-t border-purple-50">
    <p>
      «Մալաթիա» մասնաճյուղն <strong className="text-purple-700">արտոնյալ պայմաններով</strong> ծառայություններ կառաջարկի բոլոր ֆիզիկական և իրավաբանական անձանց, որոնք կդառնան մասնաճյուղի հաճախորդ առաջիկա մեկ ամսվա ընթացքում, մասնավորապես՝[cite: 18]
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          <strong className="text-purple-700">Դասական ավանդներ՝</strong> 0.25%-ով ավելի բարձր տարեկան տոկոսադրույքներով,[cite: 18]
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          <strong className="text-purple-700">ՀՀ դրամով փոխանցումներ՝</strong> անվճար,[cite: 18]
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <div className="space-y-2">
          <span>
            Անշարժ գույքի գրավով ապահովված <strong className="text-purple-700">ԱՄՆ դոլարով անհատական վարկեր՝</strong> տարեկան անվանական տոկոսադրույքը՝ -1%-ով, այսինքն՝[cite: 18]
          </span>
          <ul className="space-y-1.5 pl-4 text-gray-600">
            <li>— 11%՝ 12%-ի փոխարեն՝ առանց եկամտի հավաստման վարկերի դեպքում,[cite: 18]</li>
            <li>— 9%՝ 10%-ի փոխարեն՝ եկամտի հավաստմամբ վարկերի դեպքում,[cite: 18]</li>
          </ul>
        </div>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          Երաշխավորությամբ <strong className="text-purple-700">անհատական վարկեր ԱՄՆ դոլարով՝</strong> տարեկան անվանական տոկոսադրույքը՝ -1%-ով, այսինքն՝ 12%՝ 13%-ի փոխարեն,[cite: 18]
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          <strong className="text-purple-700">SWIFT փոխանցումներ՝</strong> ստանդարտ միջնորդավճարից -25% զեղչով,[cite: 18]
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          Նոր ֆիզիկական և իրավաբանական անձ հաճախորդների համար՝ <strong className="text-purple-700">գործառնությունների կատարում EvocaToken հավելվածով՝</strong> 1 տարի անվճար,[cite: 18]
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <div className="space-y-2">
          <span>
            <strong className="text-purple-700">Քարտերի տարեկան սպասարկման վճար՝</strong> քարտի ամբողջ ժամկետի համար (3 տարի) -30% զեղչով, այսինքն՝[cite: 18]
          </span>
          <ul className="space-y-1.5 pl-4 text-gray-600">
            <li>— Visa Classic, MasterCard Standard քարտեր՝ 3,500 դրամ՝ 5,000 դրամի փոխարեն[cite: 18]</li>
            <li>— Visa Gold, MasterCard Gold քարտեր՝ 10,500 դրամ՝ 15,000 դրամի փոխարեն[cite: 18]</li>
            <li>— Պրեմիում դասի Visa Infinite քարտ՝ 70,000 դրամ՝ 100,000-ի փոխարեն:[cite: 18]</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</article>


        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/allpage11/double-payments" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/16183848935683/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evoca-ն միանում է Զինծառայողների ապահովագրության…                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">22.11.2020</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/allpage11/fund-raising-concerts" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/16929548288114/510x383.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Բացօթյա բարեգործական համերգ-դրամահավաք                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">02.11.2020</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/allpage11/evocabank-customer-service-hours" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/16183878191416/510x383.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման ժամերում
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.10.2020</span>
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