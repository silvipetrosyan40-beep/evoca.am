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
Evoca Art


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
Evoca Art
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Համացանցը պայթեցրած արշավը վերադարձել է նոր լոգոներով։ Evoca-ի մարքեթինգի և PR-ի վարչության ղեկավար Լյուսի Սարուխանյանի հարցազրույցը Երևան ամսագրին։












             </p>
              <p>
23.10.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17296851097593/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Ինչպես համավարակի օրերին դրական ու թեթև քընթեթ ստեղծելու նպատակով Evoca-ում հորինեցին հայկական համացանցի ամենահաջողված արշավներից մեկը, իսկ այս տարի վերադարձան շարքին, որպեսզի հարգանքի տուրք մատուցեն Սերգեյ Փարաջանովին: Պատմում է <strong className="text-purple-700">Evoca-ի մարքեթինգի և PR-ի վարչության ղեկավար Լյուսի Սարուխանյանը</strong>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Արվեստով հաղթահարենք համավարակը
  </h3>
  <p>
    Մի քանի տարի առաջ էր, համավարակն էր, ամեն ինչ փակ էր, բանկն աշխատում էր սահմանափակ ռեժիմով, մենք էլ բոլորս նստած էիք մեր տներում ու մտածում, թե ինչ հետաքրքր պրոդուկտներ ու արշավներ կարելի է մտածել այդ տարօրինակ ու լարված օրերը մի քիչ հետաքրքրացնելու համար: Անհրաժեշտ էր ստեղծել գրական, կրեատիվ ու թեթև քընթեթ սոցիալական ցանցերի համար: Որոշեցինք արվեստի հետ կապված հրապարակում ստեղծել, հետո էլ մտածեցինք՝ ինչու չհամադրել մեր բրենդը արվեստի հսկաների ժառանգության հետ: Եղավ մտահղացումն այս շարքի, որում Evoca-ի լոգոն պատկերված է ամենատարբեր մեծ նկարիչների ոճով:
  </p>

  <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/paraj-logos-web2.png" 
      alt="Evoca Art Logos by Famous Artists" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ֆրիդայի դեմքը
  </h3>
  <p>
    Առաջին փուլում ստացանք 12 պատկեր, 12 մեծ նկարիչների ոճով՝ Ֆրիդա, Մալևիչ, Կանդինսկի, Պիկասո, և այլն: Ընտրելիս առաջին հերթին առաջնորդվում էինք պարզապես մեր թիմի անձնական նախասիրություններով: Իհարկե, կարևոր էր նաև, որ նկարիչներն ու ընտրված նկարները ճանաչելի և հասկանալի լինեին մեր հետևորդներին: Ի դեպ, ամենաշատը տանջվեցինք Ֆրիդայի վրա: Դժվար էր գտնել այնպիսի մի գործ, որն ակնհայտ հղում անի իր արվեստին: Ի վերջո, եկանք իր ինքնանկարին, քանի որ նա հաճախ էր իրեն նկարում իր կտավներում: Վերջում մեզնից շատ գոh էինք. իրոք հետաքրքր ու յուրահատուկ բան էր ստացվել (հիշենք, որ դա 2020-ն էր): Բայց այն աննախադեպ գլոբալ արձագանքը, որ ստացանք, նույնիսկ մեզ համար էր անսպասելի:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Գլոբալ արձագանք
  </h3>
  <p>
    Պարզ մարքեթինգային քայլերով արեցինք արշավ: Նախ, տեղադրեցինք մեր սոցցանցերում՝ Ֆեյսբուք, Ինստագրամ, Լինքդին: Հետո նկատեցինք, որ օրգանիկ շատ մեծ ներգրավվածություն կա: Մի փոքր գովազդ միացրեցինք, զուտ սիմվոլիկ: Բայց այդ փոքր ներդրումն էլ ահռելի արդյունք բերեց: Մի գիշերում գրառումը հասավ շատ հայտնի՝ դիզայնի, ճարտարապետության, արվեստի ու մարքեթինգի հետ կապ ունեցող, սոցցանցերում միլիոնավոր հետևորդներ ունեցող լրատվականների էջերին, որոնք կիսվում էին մեր հրապարակումով՝ որպես օրինակուհ ու գեղեցիկ աշխատանք: Հրապարակումները հավաքում էին հազարավոր like-եր ու հիացական comment-ներ: Մենք մինչ օրս էլ զարմանում ենք, երբ մի նոր լրատվական 4 տարի անց դեռ կիսվում է այս հրապարակումով:
  </p>

  <p>
    Մի օր էլ նամակ ստացանք արտասահմանի մի հետևորդից, ով տեսել էր այս շարքը ու խնդրում էր իրեն ուղարկել աշխատանքային ֆայլերը: Պարզվեց, որ այնքան է հավանել, որ ուզում է դաջվածք անել իր վրա: Մենք բացատրեցինք, որ սա բանկի լոգո է, կոմերցիոն նախագիծ... Ամեն դեպքում, հպարտանալու մեծ առիթ էր:
  </p>

  <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/evocaposts.jpg%203.jpg" 
      alt="Evoca Art Social Media Posts" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Փարաջանովի խորությունը
  </h3>
  <p>
    Ընդհանրապես, Evoca-ն հայտնի է իր կրեատիվությամբ, որի համար արվեստն անսահման ոգեշնչման աղբյուր է: Այն մեր ԴՆԹ-ում է: Մեր թիմում բոլորն էլ արվեստի սիրահար են: Փարաջանովն էլ, իհարկե, մեր բոլորի սիրելիներից մեկն է: Ընդ որում, կդժվարանանք ասել, թե նրա արվեստի հատկապես որ արտահայտումն ենք սիրում ավելի շատ. և՛ կինոն, և՛ կոլաժները, և՛ գրաֆիկան անկրկնելի են:
  </p>

  <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/paraj-logos-web.png" 
      alt="Parajanov Inspired Evoca Art" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p className="pt-4 border-t border-purple-50">
    Քանի որ այս տարի Մաեստրոյի 100-ամյակն է նշվում, որոշեցինք վերադառնալ Evoca Art-ին ու երեք նոր աշխատանք ստեղծել՝ ոգեշնչված Փարաջանովի արվեստով: Հատուկ դրա համար ամբողջ թիմով ևս մեկ անգամ այցելեցինք նրա տուն-թանգարան, ևս մեկ անգամ բոլորս ցնցված մնացինք նրա բազմաշերտությունն ու խորությունից: Փորձել ենք այդ տպավորություններն արտահայտել նոր լոգոներում: Թող սա էլ մեր համեստ շնորհավորանքը լինի աննման Փարաջանովին:
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