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
  Եվրոպայի լավագույն 5 Christmas Market-ները


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
Եվրոպայի լավագույն 5 Christmas Market-ները
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Եվրոպայի ո՞ր Christmas Market-ները պարտադիր այցելել, Evoca-ի ո՞ր քարտերով գնումներ կատարել տոնավաճառներում։ Բացահայտիր մեր բլոգում։







             </p>
              <p>
16.12.2025

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17658933558475/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


  <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">

  <p>
    Ամանորին Եվրոպան վերածվում է կախարդական հեքիաթի. լուսավոր տոնավաճառներ, ձյունաշատ փողոցներ, տաք շוקոլադի ու գլինվեյնի բույրեր:
  </p>

  <p>
    Ձեզ ենք ներկայացնում <strong className="text-purple-700">Եվրոպայի 5 ամենագեղեցիկ Christmas Market-ները</strong>, որոնց դու կհիվանդարվես առաջին իսկ հայացքից:
  </p>

  {/* 1. Վիեննա */}
  <section className="space-y-4 pt-4">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Christmas%20Markets/Vienna.png" 
        alt="Վիեննայի Christmas Market" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      1. Վիեննա, Ավստրիա
    </h3>

    <p>
      Վիեննայի ավանդական Christmas Market-ը գործում է ավելի քան <strong className="text-purple-700">700 տարի</strong>:
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Տոնածառն ամեն տարի փոխվում է՝ ներկայացնելով Ավստրիայի տարբեր շրջանների ոճերը:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Տոնավաճառում գործում է «Աստղային ուղի» լուսային ճամփան՝ 200,000-ից ավել լույսերով:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Այստեղ կարելի է գտնել իրական ավստրիական ձեռագործ խաղալիքներ, որոնք պատրաստվում են սերնդեսերունդ փոխանցվող մեթոդով:</span>
      </li>
    </ul>
  </section>

  {/* 2. Բուդապեշտ */}
  <section className="space-y-4 pt-6 border-t border-purple-50">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Christmas%20Markets/Budapest.png" 
        alt="Բուդապեշտի Christmas Market" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      2. Բուդապեշտ, Հունգարիա
    </h3>

    <p>
      Բուդապեշտի <strong className="text-purple-700">Vörösmarty Square</strong> տոնավաճառը ներառվել է Եվրոպայի լավագույն երեք Christmas Market-ների ցանկում:
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Հունգարական chimney cake-ն այստեղ համարվում է ամենահայտնի տոնական քաղցրավենիքը:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Կենտրոնում տեղադրված է ամանորյա կարուսել, որը վերականգնվել է 1900-ականների հին նախագծով:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Գիշերները անցկացվում են մրցույթներ ու ֆլեշմոբեր՝ այցելուների մասնակցությամբ:</span>
      </li>
    </ul>
  </section>

  {/* 3. Պրահա */}
  <section className="space-y-4 pt-6 border-t border-purple-50">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Christmas%20Markets/Praha.png" 
        alt="Պրահայի Christmas Market" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      3. Պրահա, Չեխիա
    </h3>

    <p>
      Հին քաղաքի հրապարակում տեղադրված տոնածառն ընտրվում է ամբողջ երկրի <strong className="text-purple-700">120 տարբերակներից</strong>:
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Սպիտակ տների ու լույսերի ֆոնին տոնավաճառը դառնում է իրական Instagram Spot:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Կարող եք համտեսել հայտնի տաք տրդելինիկը, որն անմիջապես պատրաստվում է ձեր աչքի առջև:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ամեն երեկո կարող եք վայելել կենդանի երաժշտություն:</span>
      </li>
    </ul>
  </section>

  {/* 4. Ստրասբուրգ */}
  <section className="space-y-4 pt-6 border-t border-purple-50">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Christmas%20Markets/Strasburg.png" 
        alt="Ստրասբուրգի Christmas Market" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      4. Ստրասբուրգ, Ֆրանսիա
    </h3>

    <p>
      Տոնավաճառը համարվում է Եվրոպայի ամենահներից մեկը և գործում է <strong className="text-purple-700">1570 թվականից</strong>:
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Քաղաքի ամբողջ կենտրոնը վերածվում է տոնական լաբիրինթո՝ շուրջ 300 տաղավարով:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ամեն տարի ընտրվում է որևէ երկիր և ներկայացվում է այդ երկրի մշակույթը:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Առանձնահատուկ է նաև հսկա տոնածառը՝ 30 մետր բարձրությամբ, որը համարվում է երկրի խորհրդանիշը:</span>
      </li>
    </ul>
  </section>

  {/* 5. Նյուրնբերգ */}
  <section className="space-y-4 pt-6 border-t border-purple-50">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/Christmas%20Markets/Nurenberg.png" 
        alt="Նյուրնբերգի Christmas Market" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      5. Նյուրնբերգ, Գերմանիա
    </h3>

    <p>
      Nuremberg Christmas Market-ում ամենաշատը վաճառվող նրբերշիկը, որը հայտնի է <strong className="text-purple-700">«Nürnberger Rostbratwurst»</strong> անունով, ունի <strong className="text-purple-700">«Protected Geographical Indication (PGI)»</strong> կարգավիճակ՝ որպես Եվրոպայի առաջին նրբերշիկ:
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Christmas Market-ներում գրեթե ամեն տարի անցկացվում է Stollenfest միջոցառումը, որի ընթացքում պատրաստվում է 3-4 տոննա քաշ ունեցող հսկա տոնական կեքս:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Գերմանիայում տոնավաճառների ավանդույթ ունի ավելի քան 600 տարվա պատմություն:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ամեն անկյունում կտեսնեք ձեռագործ փայտյա խաղալիքներ:</span>
      </li>
    </ul>
  </section>

  {/* Evoca Travel Card Section */}
  <section className="space-y-6 pt-6 border-t border-purple-100">
    <div className="rounded-2xl overflow-hidden max-w-xl mx-auto shadow-sm border border-purple-100">
      <img 
        src="https://www.evoca.am/file_manager/travel.png" 
        alt="Evoca Travel Card" 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <p>
      Տոնավաճառներում գնումների մեծ մասը կատարվում է անկանխիկ: Այս ընթացքում պետք է մեծ ուշադրություն դարձնել՝ ինչ քարտերով եք կատարում գնումները: Օրինակ՝ <strong className="text-purple-700">Evoca Travel Card</strong>-ով գնումները դառնում են ավելի շահավետ ու համար, քանի որ որոշ քարտերի դեպքում ստանում եք մինչև <strong className="text-purple-700">1.5% cashback</strong> վճարումներից:
    </p>

    <p className="font-semibold text-purple-700">
      Ի դեպ, մինչև դեկտեմբերի 31-ը Evoca Travel Card-երը տրամադրվում են 50% զեղչով:
    </p>

    <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-2">
      Ի՞նչ է մնում.
    </h3>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ձեռք բերել Evoca Travel Card կես գնով,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Այցելել ամանորյա տոնավաճառներ,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Վայելել ջերմ ու կախարդական մթնոլորտը,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Գնել նվերներ և ստանալ cashback:</span>
      </li>
    </ul>

    <p className="pt-2">
      Իսկ <strong className="text-purple-700">Evoca Travel Card</strong>-ը ձեռք բերելու համար՝ պարզապես մուտք գործեք կամ ներբեռնեք <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">EvocaTOUCH հավելվածը</a> և ընդամենը մի քանի րոպեում պատվիրեք ձեր ճամփորդական քարտը:
    </p>

    <p className="pt-4 border-t border-purple-50 text-sm sm:text-base font-medium text-gray-600">
      Հարկավոր՞ է օգնություն. գրեք օնլայն կամ կապ հաստատեք <strong className="text-purple-700">8444</strong> հեռախոսահամարով:
    </p>
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