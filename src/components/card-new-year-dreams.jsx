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
Ամանորի քո Evocaգույն երազանքը


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
Ամանորի քո Evocaգույն երազանքը
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ։ Ինչպե՞ս երազանք պահել Ամանորի գիշերը։ Ո՞րն է ամենաթրենդային նվերի տարբերակը։ Բոլոր պատասխանները կգտնես բլոգում։

















             </p>
              <p>
21.12.2023

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <div className="text-center space-y-1 font-semibold text-purple-700 py-2">
    <p>We wish you a Merry Christmas</p>
    <p>We wish you a Merry Christmas</p>
    <p>We wish you a Merry Christmas</p>
    <p className="font-bold text-lg pt-1">And a Happy New Year!</p>
  </div>

  <p>
    Շուրջբոլորը ամանորյա զարդարանքներ, փայլեր, լույսեր… Ամեն ինչ հուշում է, որ տներն են մոտենում: Իսկ տների հետ միասին՝ նվերներ ու անակնկալներ:
  </p>
  <p>
    Հաճելի է ստանալ նվերներ, բայց միևնույն ժամանակ ավելի հաճելի ու հետաքրքիր է նվիրելը: Դրա մասին հաստատում են մի շարք ուսումնասիրություններ:
  </p>
  <p>
    Ամերիկացի գիտնականների ուսումնասիրությունը հաստատվել է փորձարարական ճանապարհով: Մեկ ամիս շարունակ հետազոտության հեղինակները ուսանողների խմբին 5-ական դոլար են նվիրել, ընդ որում՝ նրանցիցյուրաքանչյուրը գումարի մի մասով պետք է ընկերոջ համար նվեր պատրաստի: Գիտնականները, ուսումնասիրելով ուսանողների հույզերը, եկել են եզրահանգման. փաստն այն է, որ նվիրելուց առաջացած երջանկությունն ավելի երկար է տևում, քան նվեր ստանալը:
  </p>
  <p>
    Նվերներ ընտրելն առաջին հայացքից շատ հեշտ է, բայց խոստովանենք, որ իրականում այն բավականին բարդ, ժամանակատար և պատասխանատու գործընթաց է:
  </p>
  <p>
    Իսկ գիտե՞ս՝ որտեղից է եկել Ամանորին միմյանց նվերներ տալու սովորությունը:
  </p>
  <p>
    Ամանորյա նվերներ տալու սովորությունը գալիս է Հին Հռոմից: Ասում են՝ առաջին նվերները եղել են դափնու տերևներ, որոնք երջանկություն ու հաջողություն էին բերում գալիք տարում:
  </p>
  <p>
    «Ցանկանում եم բարեհաճ ու երջանիկ Նոր տարի»,- գրում էին հռոմեացիները ամանորյա նվերների վրա:
  </p>
  <p>
    Քեզ համար առանձնացրել ենք թոփ ամենահետաքրքիր հնգյակը՝ ինչ են սիրում նվիրել Ամանորին աշխարհի տարբեր երկրներում.
  </p>

  <ol className="space-y-4 pl-2">
    <li className="space-y-1">
      <div className="font-bold text-purple-700">1. Անգլիացիները անընդունելի են համարում Ամանորին ճոխ նվերներ նվիրելը</div>
      <p>Նրանք երբեք չեն նվիրի որևէ թանկարժեք, եզակի հուշանվեր կամ զարդ, սիրում են նվիրել բուրավետ մոմեր, գեղեցիկ թիկնոցներ կամ թեյ պատրաստելու համար գաջեթներ: Ի հակառակ ամերիկացիները, օրինակ, սիրում են ճոխ նվերներ նվիրել, ընդ որում՝ կտրոնով: Կտրոնը պետք է նրա համար, որ, հարկ եղած դեպքում, այն վերադարձի խանութ կամ փոխարինվի:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">2. Ավստրալիացիները նախընտրում են Ամանորին նվիրել անհրաժեշտ իրեր</div>
      <p>Քանի որ Ավստրալիայում կյանքը բավականին թանկ է, ընտանիքների մեծ մասը նախընտրում է գեղեցիկ հագուստ կամ աքսեսուարներ ստանալ: Այստեղ նաև ընդունված է նվիրել Վիեննայի հանրանաճանաչ օպերայի տոնական երեկոյի հրավիրատոմս: Ուշադրության նման նշանները գնահատում են թե՛ տարեց, թե՛ երիտասարդ ավստրալիացիները:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">3. Իտալացիների համար նվերը բարձր ու նուրբ ճաշակի դրսևորում է</div>
      <p>Մեկ շիշ լավ գինին նրանց կուրախացնի այնքան, որքան, օրինակ, ոճային պայուսակը, հագուստը կամ աքսեսուարը: Իտալացիները գտնում են, որ Ամանորին պետք է ազատվել բոլոր հին և անպետք իրերից: Ըստ նրանց՝ որքան շատ իրեր դեն նետես, այնքան ավելի հարուստ կլինես նոր տարում: Այդ պատճառով Ամանորի գիշերը իտալացիները պատուհանից դուրս են նետում իրենց բոլոր հին իրերը՝ հին արդուկներ, ծաղկամάνներ, աթոռներ, կոշիկներ...</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">4. Չինացիները Ամանորին նվիրում են զույգ իրեր</div>
      <p>Դրանք խորհրդանշում են միասնություն, ընտանեկան ներդաշնակություն: Նրանց համար անընդունելի է ժամացույց նվիրելը. դա Չինաստանում մահվան խորհրդանիշ է համարվում:</p>
    </li>
    <li className="space-y-1">
      <div className="font-bold text-purple-700">5. Ճապոնացիները Ամանորին միմյանց նվիրում են «օսեբո»</div>
      <p>Այն ավանդական նվերների հավաքածու է: Համարվում է, որ ծաղիկ նվիրելու իրավունք ունեն միայն կայսերական ընտանիքի անդամները:</p>
    </li>
  </ol>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Իսկ ի՞նչ են նվիրում Ամանորին Հայաստանում
  </h3>
  <p>
    Մեզ մոտ չկան «ավանդական» նվերներ, որոնք պարտադիր է նվիրել Ամանորին:
  </p>
  <p>
    Նվերներն ընտրվում են ըստ նախասիրությունների. հիմնականում նվիրում են քաղցրավենիք, ոճային աքսեսուար, պայուսակ, ժամացույց և այլ անհրաժեշտ իրեր:
  </p>
  <p>
    Վերջին տարիներին թրենդային է դարձել նվեր քարտ նվիրելը, որը տալիս է անսահմանափակ ընտրության հնարավորություն:
  </p>
  <p>
    Ու եթե նախկինում մարդիկ նախընտրում էին հատուկ խանութների նվեր քարտեր նվիրել, այժմ այդ սահմանափակումն էլ չկա: Նվիրում են այնպիսի նվեր քարտեր, որոնց հնարավոր է օգտագործել ամենուրեք՝ առանց բացառության:
  </p>
  <p>
    <strong className="text-purple-700">Evocabank</strong>-ը առաջարկում է <strong className="text-purple-700">Evoca Gift Card</strong>-ը, որը իդեալական է Ամանորին նվիրելու համար, քանի որ ունի գեղեցիկ փաթեթավորում, էսթետիկ է և թրենդայինին:
  </p>
  <p>
    Նվիրողը պարզապես ընտրում է գումարի չափը, իսկ ստացողը՝ իր նվերը:
  </p>
  <p>
    Քարտը տրամադրվում է տեղում՝ դիմելու պահին, կամ առաքման միջոցով պատվիրելուց հետո՝ 1 աշխատանքային օրվա ընթացքում:
  </p>

  <h4 className="text-base sm:text-lg font-bold text-purple-700 pt-2">
    Իսկ ի՞նչ առավելություններ կտա քարտը.
  </h4>
  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ընտրության ազատություն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գեղեցիկ դիզայն և փաթեթավորում</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ժամանակի խնայողություն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Սխալ ընտրության բացառում</span>
    </li>
  </ul>

  <h4 className="text-base sm:text-lg font-bold text-purple-700 pt-2">
    Ինչպե՞ս պատվիրել քարտը.
  </h4>
  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Evocabank-ի ցանկացած մասնաճյուղում</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>EvocaTOUCH հավելվածի միջոցով</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>evoca.am կայքում</span>
    </li>
  </ul>

  <p>
    Պատկերացնո՞ւմ ես՝ անգամ կարող ես ինքդ ընտրել դիզայնը՝ <strong className="text-purple-700">Violet Gift Card</strong> կամ <strong className="text-purple-700">Black Gift Card</strong>:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/black-gift.png" 
      alt="Evoca Gift Cards" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Մեր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Evoca Gift Card</a>-ի մանրամասներին կարող ես ծանոթանալ այստեղ:
  </p>
  <p>
    Բայց վերջում ցանկանում ենք ամանորյա տրամադրությամբ ավարտել: Չէ՞ որ երբ խոսում ենք Ամանորից, բացի նվերներից՝ մտածում ենք նաև երազանքների կատարման և հրաշքների մասին:
  </p>
  <p>
    Իսկ դու ունե՞ս որևէ տարբերակ Ամանորի գիշերը երազանք պահելու: Ցանկանում ենք քեզ հետ կիսվել մի քանի տարբերակով.
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Շատերն են երազանքը գրում թղթի վրա, այրում այն, գցում շամպայնի մեջ ու խմում՝ հավատալով, որ այն անպայման իրականանալու է գալիք տարվա ընթացքում:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Սա գուցե ծիծաղելի հնչի, բայց գրիր նամակ Ձմեռ պապին: Երազանքների մասին գրելը դրանց իրագործման ճանապարհին առաջին քայլն է: Ամեն տարի ծրարի մեջ դիր երազանքներով քո նամակը և հաջորդ տարի բացիր այն ու տես՝ գրածներից որ երազանքդ ես իրականացրել, և որի վրա դեռ պետք է աշխատես:</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Նոր տարվա գիշերը 12 թղթիկների վրա գրիր 11 ցանկությունները, իսկ մի թղթիկը դատարկ թող: Դիր թղթիկները բարձի տակ և առավոտյան պատահականության սկզբունքով հանի մի թղթիկ: Այն, ինչ գրված կլինի այնտեղ, կկատարվի այդ տարի:</span>
    </li>
  </ul>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/2.png" 
      alt="New Year Tree and Gifts" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Չմոռանաս գալիք տարում քեզ համար դնել նպատակներ, ձեռնարկել քայլեր դրանց հասնելու համար և պատրաստ լինել ցանկացած մարտահրավերի, որովհետև դու հաղթելու ես:
  </p>
  <p>
    Քեզ մաղթում ենք հրաշքներով ու նվերներով լի Ամանոր: Ամենակարևորը՝ հավատա ու գնա երազանքներիդ հետևից:
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