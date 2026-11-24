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
Evoca Calendar 2025. Երբ արվեստը հանդիպում է AI-ին


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
Evoca Calendar 2025. Երբ արվեստը հանդիպում է AI-ին
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Մտածե՞լ ես՝ ինչպիսին կլինեին Վան Գոգի, Դալիի կամ Բոտիչելլիի կտավները, եթե AI-ը նկարեր դրանք Evoca-ի ոճով։ Բացահայտենք մեր 2025թ օրացույցը։










             </p>
              <p>
16.05.2025

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17404671397799/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


            <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Եթե AI-ը նկարեր աշխարհահռչակ նկարիչների հանրահայտ կտավները, ինչպիսի՞ տեսք կունենային դրանք:
  </p>

  <p>
    Այս հարցից սկսվեց մեր <strong className="text-purple-700">Evoca Calendar 2025</strong> նախագիծը, որն արհեստական բանականության (AI) միջոցով նոր շունչ տվեց դասական արվեստին:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Cover.jpg" 
      alt="Evoca Calendar 2025 Cover" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    2025 թվականի օրացույցում <strong className="text-purple-700">Evoca</strong>-ն AI-ի օգնությամբ վերապատկերել է Վան Գոգի, Դալիի, Վերմերի, Բոտիչելիի և այլ նկարիչների արվեստը՝ նրանց կտավներին տալով ժամանակակից, թրենդային լուծումներ:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    🌸 Ինչպե՞ս է Evoca-ն վերաստեղծել հանրահայտ կտավները
  </h3>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Da%20Vinci.jpg" 
      alt="Leonardo da Vinci - Մոնա Լիզա" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Հունվար | Leonardo da Vinci «Մոնա Լիզա, բայց ապագայի հայացքով»
  </h3>
  <p>
    Եթե Լեոնարդո դա Վինչին նկարեր Մոնա Լիզան 21-րդ դարում, նրա հայացքում կարտացոլվեր AI-ի ազդեցությունը: AI-ը ստեղծել է Մոնա Լիզայի նոր կերպարը, որն արտահայտում է ժամանակակից և ֆուտուրիստական միտումների համադրությունը:
  </p>
  <p>
    Եթե Մոնա Լիզան ծնվեր այսօր, նա կլիներ արհեստական բանականության խորհրդանիշը:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Van%20Gogh.jpg" 
      alt="Vincent van Gogh - Աստղալից գիշեր" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Փետրվար | Vincent van Gogh «Աստղալից գիշեր՝ նոր գույներով»
  </h3>
  <p>
    Վան Գոգի հայտնի Աստղալից գիշերը վերապատկերվել է տիեզերական էլեմենտներով, որոնք խորհրդանշում են թվային դարաշրջանի ռիթմն ու էներգիան: Սա արդեն պարզապես գիշեր չէ, այլ տիեզերական երազ, որտեղ թվային դարաշրջանը համադրվում է դասական արվեստին:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Dali.jpg" 
      alt="Salvador Dali - Հիշողության հարատևությունը" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Մարտ | Salvador Dali «Հիշողության հարատևությունը՝ ժամանակի նոր ընկալմամբ»
  </h3>
  <p>
    Ինչպիսի՞ն կթվար ժամանակը, եթե այն կողավորվեր թվային աշխարհում: AI-ը վերստեղծել է Դալիի լեգենդար ժամացույցները, բայց այս անգամ՝ տիեզերական անսահմանության մեջ՝ ժամանակի դանդաղ հոսող ժամացույցներով, երևակայական բնապատկերներով: Ժամանակն այլևս չի հոսում, այլ ինքն է որոշում իր ընթացքը:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Bosch.jpg" 
      alt="Hieronymus Bosch - Երկրային վայելքների այգի" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Ապրիլ | Hieronymus Bosch «Երկրային վայելքների այգի՝ թվային դարաշրջանում»
  </h3>
  <p>
    Ի՞նչ կլիներ, եթե Բոշի երևակայական աշխարհը դառնար մետայի մի մաս: AI-ի միջոցով երկրային վայելքների այգին արտահայտվել է ֆուտուրիստական ոճով: Եթե Բոշը ստեղծեր իր գլուխգործոցն այսօր, այն, անկասկած, կլիներ արվեստի և տեխնոլոգիայի ամենախորհրդավոր հանդիպումը:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Botticelli.jpg" 
      alt="Sandro Botticelli - Վեներայի ծնունդը" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Մայիս | Sandro Botticelli «Վեներայի ծնունդը՝ մեր օրերում»
  </h3>
  <p>
    Եթե Բոտիչելին պատկերեր Վեներայի ծնունդը մեր օրերում, դասական գեղեցկության իդեալը կվերածվեր ֆուտուրիստական, մետաղական փայլով կերպարի: Այս ամենը Վեներային դարձնում է թվային դարաշրջանի ժամանակակից աստվածուհի:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Lichtenstein.jpg" 
      alt="Roy Lichtenstein - Կոմիքսային արվեստ" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Հունիս | Roy Lichtenstein «Կոմիքսային արվեստը՝ թվային դարաշրջանում»
  </h3>
  <p>
    Եթե Լիխտենշտեյնի հերոսները հայտնվեին 21-րդ դարում, նրանք կզվարճանային Like-երով, DM-ներով և վիրտուալ էմոցիաներով: AI-ը վերափոխել է նրա հայտնի կոմիքսային ոճը՝ դարձնելով անիմացիոն և ինտերակտիվ:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Warhol.jpg" 
      alt="Andy Warhol - Մոնրո" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Հուլիս | Andy Warhol «Նոր դարաշրջանի Մոնրոն»
  </h3>
  <p>
    Եթե Ուորհոլը նկարեր Մերիլին Մոնրոյին VR ակնոցներով, դա, անկասկած, կդառնար մեր AI-ով ստեղծված 2025 թվականի օրացույցի գլխավոր շապիկը՝ որտեղ փոփ-արտի վառ գույները միաձուլվում են նորարարական տեխնոլոգիաների հետ՝ ստեղծելով արվեստի նոր դարաշրջան:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Hokusai.jpg" 
      alt="Katsushika Hokusai - Կանագավայի մեծ ալիքը" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Օգոստոս | Katsushika Hokusai «Կանագավայի մեծ, թվային ալիքը»
  </h3>
  <p>
    Եթե «Կանագավայի մեծ ալիքը» չլիներ բնական երևույթ, այլ մուտք դեպի նոր իրականություն, ի՞նչ կլիներ այն: AI-ի միջոցով ստեղծվել է մի պատկեր, որտեղ ալիքները կապում են ֆիզիկականն ու թվայինը: Ալիքի վրայով սահող ֆուտուրիստական սամուրայը այլևս մարտիկ չէ, այլ ճամփորդ՝ անցյալից դեպի ապագա:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Magritte.jpg" 
      alt="Rene Magritte - Խորհրդավոր թվային արվեստ" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Սեպտեմբեր | René Magritte «Խորհրդավոր թվային արվեստ»
  </h3>
  <p>
    Մագրիտի կտավը վերածվել է մի համադրության, որտեղ դասական ոճն ու թվային նորարարությունը միաձուլվում են: Պատկերված է նրա ոճային հանելուկներից մեկը՝ «Գոլկոնդան», բայց ոչ մարդկանցով, այլ երկնքում լողացող սմարթֆոններով, որոնք ստեղծում են բարդ կոմպոզիցիա:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Degas.jpg" 
      alt="Edgar Degas - Բալետը ապագայի բեմում" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Հոկտեմբեր | Edgar Degas «Բալետը ապագայի բեմում»
  </h3>
  <p>
    AI-ը վերիմաստավորել է Դեգայի աշխարհը՝ ստեղծելով բալետ, որտեղ բոտոսացված պարուհիները կատարում են իրենց շարժումներն ալգորիթմների հիման վրա: Դասական ավանդական բալետը դարձել է թվային ու մեխանիկական շարժումների համադրություն: Այսպիսին կլիներ Դեգայի արվեստը, եթե այն հանդիպեր արհեստական բանականության հետ:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Klimt.jpg" 
      alt="Gustav Klimt - Ոսկու և կոդերի սիմֆոնիա" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Նոյեմբեր | Gustav Klimt – «Ոսկու և կոդերի սիմֆոնիա»
  </h3>
  <p>
    Ինչպիսի՞ն կլիներ Կլիմտի արվեստը, եթե այն ստեղծվեր արհեստական բանականության ձեռքով: Ոսկեգույն փայլող պատկերներ, միկրոխիփմաններ, նուրբ երանգներ, ու այս ամենը մեկ պատկերում:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Calendar%202025/Vermeer.jpg" 
      alt="Johannes Vermeer - Մարգարիտ հայացք ապագայից" 
      className="w-full h-auto object-cover"
    />
  </div>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Դեկտեմբեր | Johannes Vermeer «Մարգարիտ հայացք ապագայից»
  </h3>
  <p>
    Եթե Վերմերի «Աղջիկը մարգարիտ ականջօղով» ապրեր մեր օրերում՝ մարգարիտ, ժամանակակից ականջօղեր և վզնոց, մանուշակագույն վարսեր, բայց, միևնույն ժամանակ, խորհրդավոր հայացք: Այսպիսին է ստացվել Վերմերի ժառանգությունը նոր շնչով՝ դասականն ու նորարարությունը միահյուսված:
  </p>

  <p className="pt-4 border-t border-purple-50">
    <strong className="text-purple-700">Evocabank</strong>-ը շարունակում է լինել նորարարության խորհրդանիշը, և 2025 թվականի օրացույցը դրա հերթական ապացույցն է։ AI-ի և դասական արվեստի այս համադրությունը ցույց է տալիս, թե տեխնոլոգիան ինչպես կարող է վերիմաստավորել մշակութային ժառանգությունը։
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