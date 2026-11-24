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
Ուսանողական վա՞րկ, թե՞ ներդրում ապագայի համար


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
Ուսանողական վա՞րկ, թե՞ ներդրում ապագայի համար
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Հեռավոր 1100-ական թթ․-ից մինչև մեր օրեր․ ե՞րբ և որտե՞ղ է առաջացել ուսանողական վարկը։ Եվ, ի վերջո, վա՞րկ, թե՞ ներդրում ապագայի համար։













             </p>
              <p>
22.07.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17216331113919/780x585.png" 
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
      Ի՞նչ է ուսանողական վարկը: Ե՞րբ և որտե՞ղ է առաջացել այն
    </h2>
  </div>

  <p>
    Հե՛յ, ներկայիս կամ ապագա ուսանող: Ինչպե՞ս ես: Այս անգամ գրել ենք մի հետաքրքիր բլոգ, որը հաստատ քեզ օգտակար կլինի: Հասկացար չէ՞ մեր այսօրվա թեման. այո՛նո՛ր, <strong className="text-purple-700">ուսանողական վարկ</strong>: Տեղափոխվելու ենք միասին անցյալ՝ հասկանալու, թե որտեղ և ինչպես է առաջացել ուսանողական վարկը, այնուհետև՝ ներկա, որպեսզի տեսնենք՝ որ երկրներում է այն տարածված, և թե ինչ առավելություններ ունի այս վարկատեսակը:
  </p>

  <p>
    Եթե դու հիմա կարդում էս այս բլոգը, ուրեմն հենց այս պահից սկսած դու կատարում ես քո փոքրիկ ներդրումը ապագայի համար:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Սկսենք գլխավոր հարցից. Ի՞նչ է ուսանողական վարկը
  </h3>
  <p>
    <strong className="text-purple-700">Ուսանողական վարկը</strong> (անգլ.՝ student loan) տրամադրվում է ուսանողին միջնակարգ կամ բարձրագույն մասնագիտացված կրթության վճարը կատարելու համար: Մյուս վարկատեսակներից տարբերվում է նրանով, որ տոկոսադրույքը կարող է զգալիորեն ցածր լինել, իսկ մարման ժամանակացույցը՝ ներառել հետաձգում:
  </p>
  <p>
    Ուսանողական վարկեր տրամադրում են մասնավոր հաստատությունները, օրինակ՝ բանկերը և այլ ֆինանսական ու վարկային հաստատություններ: Պետությունը նույնպես աջակցում է երիտասարդներին՝ տրամադրելով ուսանողական վարկի տոկոսադրույքի որոշ մասի սուբսիդավորում:
  </p>
  <p>
    Ներկայումս միլիոնավոր երիտասարդներ օգտվում են այս վարկատեսակից: Այն շատ տարածված է Ճապոնիայում, ԱՄՆ-ում և Շվեդիայում: Վերջերս ուսանողական վարկը նաև մեծ զարգացում է ապրում Հայաստանում:
  </p>
  <p>
    Եվ քանի որ ուսանողական վարկը երբեմն չեն ասոցացնում բուն վարկատեսակի հետ, այսօր արդեն շատ ուսանողներ կատարում են իրենց շահաբեր ներդրումը ապագայի համար:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Դե հիմա եկեք տեղափոխվենք 1100-ական թվականներ, Բոլոնիայի համալսարան, այնուհետև ձեզ բոլորին հայտնի Harvard և հասկանանք՝ ինչպես ամեն ինչ սկսվեց
  </h3>
  <p>
    Ի սկզբանե ուսանողական վարկերը հասանելի էին Եվրոպայում՝ Բոլոնիայի համալսարանում, 1100-ականներին: ԱՄՆ-ում ուսանողական վարկեր սկսել են տրամադրել Harvard-ի համալսարանում մասնավոր կառույցների կողմից 1830-ականներին: Իսկ արդեն 1950-ականներին ԱՄՆ-ն սկսեց առաջարկել ուսանողական վարկեր, որի նախադրյալը սկսվել էր դեռևս 1944 թվականին հատուկ օրենքի ընդունմամբ, որը հայտնի է GI Bill անվանումով: Այս օրենքը վետերանների և զինծառայողների համար նախատեսված: Նրանք կարող էին ընդունվել մասնագիտական դպրոց կամ քոլեջ, ստանալ ուսանողական վարկ՝ կրճատելով իրենց ուսման ծախսերը: Ի դեպ, մինչ օրս զինծառայողները կարող են ֆինանսական օգնություն ստանալ GI Bill-ի միջոցով:
  </p>
  <p>
    ՀՀ-ում 2013 թվականին կառավարությունն աջակցեց ուսանողական վարկերի տոկոսավճարների ֆինանսավորման ծրագրին: Այս ծրագրի նպատակն էր, որ ուսման վարձ չունեցող երիտասարդները կարողանան արտոնյալ հիմունքներով վարկ վերցնել և կրթվել՝ հետագայում այդ վարկը մարելու պայմանով: Բանկերն աստիճանաբար սկսեցին մշակել և առաջարկել ուսանողական վարկեր, իսկ վարկի տոկոսադրույքի որոշ մասը սուբսիդավորվում էր պետության կողմից:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    4 փաստ ուսանողական վարկի մասին
  </h3>
  <ol className="space-y-3 pl-2">
    <li className="space-y-1">
      <div className="font-bold text-purple-700">1.</div>
      <p>Ուսանողական վարկերը տրամադրվում են ավելի ցածր տոկոսադրույքով, որի մի մասն էլ սուբսիդավորվում է պետության կողմից:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">2.</div>
      <p>Ուսանողական վարկ ձեռք բերելուց հետո՝ կրթության ողջ ընթացքում, վարկառուն կատարում է միայն վարկի տոկոսագումարների մարում, իսկ ուսումնառությունից հետո՝ վարկի մայր գումարի և տոկոսագումարի մարումներ:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">3.</div>
      <p>Ուսանողական վարկի ձեռքբերումն անհամեմատելիորեն տարբերվում է ըստ սերունդների: Օրինակ՝ Millennial-ները և Gen Z-ն նույն տարիքում ունեն ավելի շատ ուսանողական վարկեր, քան նախորդ սերունդները:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">4.</div>
      <p>Ներդրում կրթության մեջ. ուսանողական վարկերն անհատներին հնարավորություն են տալիս ներդրում կատարել իրենց կրթության, անձնական աճի և զարգացման մեջ: Այն նպաստում է կարիերայի առաջխաղացմանը, հետևաբար թույլ է տալիս ապագայում ունենալ բարձր վարձատրվող աշխատանք:</p>
    </li>
  </ol>

  <p>
    Իսկ դու գիտե՞ր, որ ամերիկացիներն իրենց ուսանողական վարկերի գծով ներկայումս ունեն ավելի քան 1,7 տրիլիոն ԱՄՆ դոլար պարտք: Այս պարտքը դեռ աճում՝ ազդելով ավելի քան 45 միլիոն վարկառուի վրա: Կհիշենք լավ նորությամբ. Ուսանողական վարկի այս արագ աճը հասցրել է գրավել ԱՄՆ կառավարության ուշադրությունը, և ուսանողական վարկի պարտքի ներման ազգային ծրագրի համաձայն՝ ավելի քան 116 մլրդ ԱՄՆ դոլար ուսանողական վարկի պարտքը ներվել է կառավարության կողմից:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Evoca ուսանողական վարկի և պայմանների մասին
  </h3>
  <p>
    Իսկ հիմա խոսենք ամենակարևորի՝ <strong className="text-purple-700">Evoca ուսանողական վարկի</strong> մասին:
  </p>
  <p>
    Եթե կան խոչընդոտներ կապված նոր որակավորումներ և մասնագիտություններ ստանալու հետ, <strong className="text-purple-700">Evoca</strong>-ն պատրաստ է վճարել քո փոխարեն:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ում ուսանողական վարկ ստանալը շատ պարզեցված է, արագ ու հեշտ:
  </p>
  <p>
    Բանկը տրամադրում է <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">ուսանողական սպառողական վարկերը</a> ամենաշահավետ պայմաններով:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Ինչո՞ւ ուսանողական վարկ Evoca-ում.
  </h4>
  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ուսումնառության ողջ ընթացքում դու կատարում էս միայն վարկի տոկոսագումարների մարում (առավելագույնը 5 տարի):</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ուսումնառության ավարտից հետո միայն սկսում ես կատարել վարկի մայր գումարի և տոկոսագումարների հավասարաչափ մարումներ:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Վարկը կարող ես ստանալ արտոնյալ պայմաններով ցածր տոկոսադրույքով:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Պետության կողմից կարող ես ստանալ 2-3% սուբսիդավորում:</span>
    </li>
  </ul>

  <p>
    <strong className="text-purple-700">Evocabank</strong>-ը նաև հեշտացրել է ուսման վարձի վճարման գործընթացը:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700">
    Ինչպե՞ս.
  </h4>
  <p>
    Քո ժամանակը խնայելու համար Բանկը գումարն անկանխիկ փոխանցում է համապատասխան հաստատության բանկային հաշվին:
  </p>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Եվ վերջում հիշիր, որ սա քո լավագույն ներդրումն է ապագայի համար: Երբեք բաց չթողնես՝ մասնագիտություն ձեռք բերելու անգամ ամենափոքր հնարավորությունը: <strong className="text-purple-700">Evoca</strong>-ն միշտ քո կողքին է:
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