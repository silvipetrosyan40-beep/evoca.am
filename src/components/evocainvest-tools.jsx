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
  <Link to="/blog/investment" className="hover:text-purple-700 transition-colors">
    Ներդրումներ
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
EvocaINVEST. ինչպե՞ս կատարել գործարքներ


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
  to="/blog/investment" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
   Ներդրումներ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
EvocaINVEST. ինչպե՞ս կատարել գործարքներ
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:

















             </p>
              <p>
17.06.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/17186317173483/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>



<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Մեր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">նախորդ բլոգում</a> քննարկեցինք, թե ինչ քայլեր են հարկավոր կատարել ներդրումային որոշում կայացնելու առաջ, գործարքների կնքման ժամանակ ինչպես առաջնորդվել, և, եթե արդեն կայացրել ենք որոշումներ ներդրումներ կատարելու մասին, ապա տեխնիկապես ինչպես իրագործել մեր ներդրումային գաղափարները[cite: 34]: Այսօր կխոսենք հենց դրա մասին, կներկայացնենք <strong className="text-purple-700">EvocaINVEST</strong>-ը, ինչպես նաև գործարքներ կնքելու համար անհրաժեշտ գործիքներից օգտվելու քայլերը[cite: 34]:
  </p>
  <p>
    <strong className="text-purple-700">EvocaINVEST</strong>-ը հարթակ է, որը հասանելիություն է տալիս միջազգային խոշոր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">բորսաների</a>, այստեղ Դուք հնարավորություն ունեք իրական ժամանակում գործարքներ կնքել աշխարհի տարբեր երկրների բորսաներում տասնյակից ավելի արժույթներով[cite: 34]: EvocaINVEST-ը հասանելիություն է ապահովում վեբ տարբերակով և հավելվածի միջոցով (<a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">App Store և Google Play</a>)՝ հնարավորություն տալով տեսնել և կառավարել Ձեր պորտֆելը ցանկացած վայրում Ձեր համակարգչի կամ հեռախոսի միջոցով[cite: 34]:
  </p>
  <p>
    Հարթակի վեբ տարբերակին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Guest Mode</a>-ի միջոցով[cite: 34]:
  </p>
  <p>
    Իրական հաշիվ բացելու համար անհրաժեշտ է՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Լինել Բանկի հաճախորդ[cite: 34],</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կնքել բրոքերային պայմանագիր[cite: 34]:</span>
    </li>
  </ul>

  <p>
    Հաշիվը բացելուց հետո Դուք կունենաք live տարբերակ, որտեղ կարող եք կառավարել Ձեր իրական պորտֆելը, և demo տարբերակ, որտեղ կարող եք կատարել փորձնական գործարքներ, թեստավորել ռազմավարություններ՝ նախապես հաշվին առկա <em>ոչ իրական</em> գումարով[cite: 34]:
  </p>
  <p>
    Այժմ ծանոթանանք <strong className="text-purple-700">EvocaINVEST</strong>-ի բջջային հավելվածի կառուցվածքին ու առավել շատ օգտագործվող գործիքներին[cite: 34]:
  </p>
  <p>
    Մուտք գործելով հավելված՝ կտեսնեք հինգ հիմնական բաժիններ[cite: 34]՝
  </p>

  <section className="space-y-4 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      • Summary
    </h3>
    <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
      <img 
        src="https://www.evoca.am/file_manager/1.png" 
        alt="EvocaINVEST Summary" 
        className="w-full h-auto object-cover"
      />
    </div>
    <p>
      Այս բաժնում կարող եք տեսնել Ձեր հաշվին առկա դրամական միջոցները ըստ արժույթների և արժեթղթերի մասին տեղեկատվություն՝ քանակ, ձեռքբերման միջին գին, տվյալ պահին շուկայում առկա գին (եթե շուկան փակ է՝ նախորդ օրվա փակման գինը) ու ըստ այդ գնի՝ տվյալ արժեթղթի գծով շահույթը կամ վնասը, ինչպես նաև ընդհանուր պորտֆելի արժեքը[cite: 34]:
    </p>
  </section>

  <section className="space-y-4 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      • Watchlists
    </h3>
    <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
      <img 
        src="https://www.evoca.am/file_manager/two.png" 
        alt="EvocaINVEST Watchlists" 
        className="w-full h-auto object-cover"
      />
    </div>
    <p>
      Այստեղ կարող եք ավելացնել արժեթղթեր, որոնց հետագայում արագ հասանելիություն կարող եք ունենալ, տեսնել գնային վերջին փոփոխությունները: Կարող եք ստեղծել մի քանի ցանկեր, հետագայում փոխել դրանք կամ ջնջել[cite: 35]:
    </p>
  </section>

  <section className="space-y-4 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      • Trade
    </h3>
    <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
      <img 
        src="https://www.evoca.am/file_manager/3.png" 
        alt="EvocaINVEST Trade" 
        className="w-full h-auto object-cover"
      />
    </div>
    <p>
      Այստեղ մուտքագրվում են առքուվաճառքի պատվերները: Հարթակում կարող ենք մուտքագրել հետևյալ չորս տեսակի պատվերները[cite: 35]՝
    </p>
    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span><strong className="text-purple-700">Market</strong> – Այստեղ նշում ենք միայն գնվող կամ վաճառվող արժեթղթի քանակը, գործարքը կատարվում է շուկայում առկա լավագույն գնով[cite: 35]:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span><strong className="text-purple-700">Limit</strong> – Այս պատվերում բացի քանակից նշվում է նաև գին, գնման պատվերի դեպքում՝ առավելագույնը, վաճառքի դեպքում՝ նվազագույն գինը, որով պատրաստ ենք գնել/վաճառել արժեթուղթը[cite: 35]:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span><strong className="text-purple-700">Stop</strong> – Այս պատվերում ևս նշվում է գին, որին շուկայական գները հավասարվելուն պես՝ պատվերը դառնում է շուկայական, ու գործարքը կնքվում է շուկայում առկա լավագույն գնով[cite: 35]:</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span><strong className="text-purple-700">Stop Limit</strong> – Այս հայտում նշվում է երկու գին՝ stop և limit. տարբերությունը stop պատվերից կայանում է նրանում, որ երբ շուկայական գները հավասարվում են պատվերում նշված stop գնին, հայտը դառնում է լիմիտային՝ հիմք ընդունելով stop limit պատվերում նշված լիմիտային գինը[cite: 36]:</span>
      </li>
    </ul>
  </section>

  <section className="space-y-4 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      • Orders
    </h3>
    <div className="space-y-4  sm:max-w-sm mx-auto my-4">
      
      <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100">
        <img 
          src="https://www.evoca.am/file_manager/5.png" 
          alt="EvocaINVEST Order details" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    <p>
      Այս բաժնում կարող ենք տեսնել մեր բոլոր պատվերները՝ այդ թվում կատարվածները: Յուրաքանչյուր պատվերից քիչով կարող ենք մուտք գործել երկրորդ նկարում պատկերված դաշտը, որտեղից էլ կկարողանանք փոփոխել տեղադրված ու դեռևս չկատարված պատվերը, չեղարկել այն կամ այդ արժեթղթի համար սահմանել գնային ազդանշան[cite: 37]:
    </p>
  </section>

  <section className="space-y-4 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      • Profile
    </h3>
    <p>
      Այստեղից կարող ենք տեսնել մեր հաշվով կատարված բոլոր գործարքները, կատարել հաշվի կարգավորումները, փոխել գաղտնաբառը և այլն[cite: 37]:
    </p>
  </section>

  <p>
    Այսպիսով, ծանոթացանք EvocaINVEST-ի հիմնական բաժիններին, իսկ վերլուծության համար օգտագործվող գործիքակազմի ու հարթակի այլ հնարավորությունների մասին կխոսենք մեր մյուս բլոգում[cite: 37]:
  </p>

  <div className="pt-4 border-t border-purple-50 space-y-3">
    <p className="font-bold text-purple-700 text-center">
      Արժեթղթերում ներդրումների հետ կապված հարցերի դեպքում կարող եք կապ հաստատել Ներդրումային գործառնությունների բաժնի հետ՝
    </p>
    <div className="rounded-2xl overflow-hidden max-w-xs sm:max-w-sm mx-auto shadow-sm border border-purple-100 my-4">
      <img 
        src="https://www.evoca.am/file_manager/invest_contacts.png" 
        alt="EvocaINVEST Contact details" 
        className="w-full h-auto object-cover"
      />
    </div>
    <ul className="space-y-2 text-center">
      <li>
        <a href="tel:+37410205555" className="text-purple-700 font-bold hover:underline">
          +374-10-20-55-55
        </a>[cite: 37]
      </li>
      <li>
        <a href="mailto:invest@evoca.am" className="text-purple-700 font-bold hover:underline">
          invest@evoca.am
        </a>[cite: 37]
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
            <Link to="/blog/investment/evocainvest-tools" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17186317173483/428x321.jpg" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
EvocaINVEST. ինչպե՞ս կատարել գործարքներ
                                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">17.06.2024</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/blog/investment/stages-of" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/blogs/1/17159356763697/428x321.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը
</h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">17.05.2024</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/blog/investment/investment-decisions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17138737784517/428x321.jpg" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Ներդրումների կարելիներն ու չի կարելիները
             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.04.2024

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