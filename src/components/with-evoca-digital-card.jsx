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
99 խնդի՞ր, 1 լուծում՝ Evoca թվային քարտ


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
99 խնդի՞ր, 1 լուծում՝ Evoca թվային քարտ
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս բլոգում միասին բացահայտելու ենք վճարումների ապագան։ Եթե ուշադիր կարդաս, վերջում կհասկանաս՝ ինչո՞ւ է քեզ շատ շտապ հարկավոր Evoca թվային քարտ։











             </p>
              <p>
28.11.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17327967150177/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
    Պատկերացրու հետևյալը.
  </h3>
  <p>
    Դու առցանց գնումներ ես կատարում, փնտրում ես լավագույն առաջարկները (դե հիշում ես երևի, որ առջևում Սև Ուրբաթն է) և հանկարծ հասկանում, որ չես ցանկանում քո հիմնական ֆիզիկական քարտը գցել անծանոթ կայքերին: Կամ գուցե հոգնե՞լ ես ֆիզիկական քարտդ միշտ քեզ մոտ պահելուց, որը հնարավոր է կորցնես կամ մոռանաս օրինակ՝ խանութում:
  </p>
  <p>
    Ծանոթ՞ իրավիճակներ են. ուրեմն հաստատ ժամանակն է ֆիզիկական քարտից բացի ձեռք բերել նաև <strong className="text-purple-700">Evoca թվային քարտ</strong>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Հիմա ասենք, թե ինչու․
  </h3>
  <p>
    Եթե դեռ չես ուսումնասիրել թվային քարտի հնարավորությունը <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածում, բաց ես թողել հետաքրքիր, հարմարավետ և անվտանգ եղանակ՝ քո ֆինանսները կառավարելու համար: Այժմ քեզ ենք ներկայացնում <strong className="text-purple-700">5 հիմնական պատճառ</strong> թվային քարտ ձեռք բերելու համար.
  </p>

  <div className="space-y-6 pt-2">
    <section className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-purple-700">
        1. Քո քարտը քո սմարթֆոնում
      </h4>
      <p>
        Evoca թվային քարտը սովորական քարտ չէ – այն վիրտուալ քարտ է, որն ապահով կերպով պահպանվում է քո EvocaTOUCH հավելվածում: Այլևս կարիք չկա քեզ մոտ ֆիզիկական քարտ պահելու: Պատվիրելուց հետո դու կարող է անմիջապես կցել այն Apple Pay-ին կամ Google Pay-ին՝ դարձնելով վճարումներդ ավելի արագ ու հարմար:
      </p>
    </section>

    <section className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-purple-700">
        2. Անվտանգ և ապահով վճարումներ
      </h4>
      <p>
        Իրականում բոլորը վախենում են այն մտքից, որ իրենց քարտի տվյալները կարող են հայտնվել խարդախների ձեռքում: Evoca թվային քարտի միջոցով դու կարող է մոռանալ այդ մասին: Հետևաբար, քո քարտի տվյալները կորցնելու կամ գողանալու ռիսկը վերացված է:
      </p>
    </section>

    <section className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-purple-700">
        3. Ակնթարթային ակտիվացում ցանկացած պահի, ցանկացած վայրում
      </h4>
      <p>
        Նոր քարտ է հարկավոր, բայց չես ուզում օրերով սպասել: Ոչ մի խնդիր: Դու կարող ես պատվիրել Evoca թվային քարտն անմիջապես EvocaTOUCH հավելվածի միջոցով: Պետք չէ այցելել Բանկ կամ երկար սպասել ու ժամանակ կորցնել հերթերում:
      </p>
    </section>

    <section className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-purple-700">
        4. Այլևս վերջ «Քարտս մոռացա մյուս պայուսակում», «Էլի կորցրի քարտս», «Քարտս մնաց բանկոմատում» և նմանատիպ մյուս արտահայտություններին
      </h4>
      <p>
        Թվային քարտի մեծագույն առավելություններից մեկն այն է, որ այն միշտ քեզ հետ է: Քանի դեռ հեռախոսդ քեզ մոտ է, քարտդ ապահով է, ի տարբերություն ֆիզիկական քարտերի, որոնք կարող են կորել կամ մոռացվել որևէ տեղ:
      </p>
    </section>

    <section className="space-y-2">
      <h4 className="text-base sm:text-lg font-bold text-purple-700">
        5. Eco-Friendly. փոքր քայլ քեզ համար, մեծ քայլ մոլորակի համար
      </h4>
      <p>
        Եթե դու նույնպես անհանգստանում ես երկիր մոլորակի և շրջակա միջավայրի համար, այս թվային քարտը քեզ համար է: Ընտրելով թվային քարտ ֆիզիկականի փոխարեն՝ դու ընտրում ես բնությունը:
      </p>
    </section>
  </div>

  <p className="pt-2">
    Իսկ հիմա դու ունես բարդ ընտրություն. <strong className="text-purple-700">Evoca</strong>-ն առաջարկում է երկու տեսակի թվային քարտ՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Evoca Visa թվային քարտ</a></span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span><a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Evoca Mastercard World Digital Card</a></span>
    </li>
  </ul>

  <p>
    Երկու քարտն էլ հասանելի է երեք արժույթով՝ ՀՀ դրամ, ԱՄՆ դոլար և եվրո:
  </p>

  <p className="font-semibold text-purple-700 pt-2">
    Համոզվեցի՞ր, չէ՞, որ քեզ շտապ թվային քարտ է հարկավոր, ուրեմնննն.
  </p>

  <ul className="space-y-3 pl-2">
    <li className="flex items-start space-x-3">
      <svg className="w-5 h-5 text-purple-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
      </svg>
      <span>ներբեռնիր EvocaTOUCH հավելվածը,</span>
    </li>
    <li className="flex items-start space-x-3">
      <svg className="w-5 h-5 text-purple-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
      </svg>
      <span>պատվիրիր Evoca թվային քարտը,</span>
    </li>
    <li className="flex items-start space-x-3">
      <svg className="w-5 h-5 text-purple-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
      </svg>
      <span>ակտիվացրրու այն մի քանի րոպեում:</span>
    </li>
  </ul>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Սպասում ենք քեզ մեր նոր թվային աշխարհում:
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