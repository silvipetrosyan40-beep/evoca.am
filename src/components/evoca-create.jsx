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
Փոքր քայլերով դեպի մեծ եկամուտներ


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
Փոքր քայլերով դեպի մեծ եկամուտներ
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Ինչպե՞ս կատարել ներդրումներ։ Ինչպիսի՞ ներդրող եք Դուք։ Ո՞րն է Ձեր ներդրումային ոճը։ Այս և շատ այլ հարցերի պատասխաններ կգտնեք մեր նոր բլոգում։




















             </p>
              <p>
11.04.2024

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/blogs/1/17128187874533/780x585.jpg" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <blockquote className="border-l-4 border-purple-700 pl-4 italic text-purple-900 font-medium">
    "Never depend on a single income. Make an investment to create a second source."<br />
    <span className="text-sm font-bold not-italic">— Warren Buffett</span>[cite: 32]
  </blockquote>

  <p>
    ԱՄՆ-ում շուրջ 158 մլն մարդ՝ չափահաս բնակչության մոտ 61%-ը, ներդրումներ է կատարում բաժնետոմսերում, իսկ ըստ Հայաստանի ֆոնդային բորսայի հաշվետվությունների՝ միայն պետական պարտատոմսերով 2023 թվականի ընթացքում բորսայում կնքվել են ավելի քան 90 մլրդ, իսկ կորպորատիվ պարտատոմսերով՝ 45 մլրդ ՀՀ դրամ ծավալով գործարքներ[cite: 32]:
  </p>
  <p>
    Իսկ Դուք երբե՞ւ մտածել եք ներդրումներ կատարելու մասին[cite: 32]:
  </p>
  <p>
    Բաժնետոմսերը, պարտատոմսերը, ֆոնդերի փայերը (ETF) ամենատարածված ներդրումային ակտիվներից են ամբողջ աշխարհում[cite: 32]: Եկեք հասկանանք՝ ինչ են դրանք ու ինչով են տարբերվում միմյանցից, և թե որն է Ձեզ համար դրանցից ամենանպատակահարմար ներդրումային ակտիվը[cite: 32]:
  </p>

  <section className="space-y-3 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      Պարտատոմսեր
    </h3>
    <p>
      Պարտատոմսը ցածր ռիսկային արժեթուղթ է[cite: 32]: Ձեռք բերելով պարտատոմս՝ Դուք իրավունք եք ստանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս[cite: 32]: Տարբերում ենք երկու հիմնական տեսակ[cite: 32]՝
    </p>

    <ul className="space-y-3 pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          <strong className="text-purple-700">Զեղչատոկոսային</strong> – ձեռք է բերվում անվանական արժեքից ցածր արժեքով (զեղչով), մարվում է անվանականով[cite: 32]: Օրինակ՝ եթե գնեք ԱՄՆ գանձապետական զեղչատոկոսային պարտատոմսեր (UST-Bill) 100,000 ԱՄՆ դոլար անվանական արժեքով, ձեռքբերման պահին Դուք կվճարեք ավելի փոքր գումար, ենթադրենք՝ 99,000 ԱՄՆ դոլար, իսկ պարտատոմսի մարման օրը կստանաք 100,000 ԱՄՆ դոլար, և Ձեր եկամուտը կլինի 100,000-99,000=1000 ԱՄՆ դոլար տարբերության չափով[cite: 32]:
        </span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>
          <strong className="text-purple-700">Արժեկտրոնային</strong> – կատարվում են արժեկտրոնային վճարումներ սահմանված ժամանակացույցով՝ հաշվարկված անվանական արժեքի նկատմամբ[cite: 32]: Օրինակ՝ եթե ձեռք բերեք 10 մլն դրամ անվանական արժեքով 10% արժեկտրոնային եկամտաբերությամբ պարտատոմս, որի արժեկտրոնները վճարվում են տարեկան կտրվածքով, պարտատոմսի ժամկետի ընթացքում տարեկան կստանաք 1 մլն դրամ արժեկտրոն, իսկ պարտատոմսի մարման օրը՝ նաև անվանական 10 մլն դրամը[cite: 32]:
        </span>
      </li>
    </ul>
  </section>

  <section className="space-y-3 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      Բաժնետոմսեր
    </h3>
    <p>
      Բաժնետոմսեր ձեռք բերելով ոչ միայն կարող եք եկամուտ ստանալ դրանց գնի աճից, այլ նաև այն տալիս է կազմակերպության շահույթից մասնաբաժին ստանալու իրավունք, եթե կազմակերպությունը կայացնի շահաբաժինների վճարման որոշում[cite: 32]: Ի տարբերություն պարտատոմսերի՝ բաժնետոմսերում ներդրումը ավելի ռիսկային է. դրանք չունեն պարտատոմսերի նման հստակ սահմանված մարման ու դրամական հոսքերի ժամանակացույց[cite: 32]:
    </p>
  </section>

  <section className="space-y-3 pt-2">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700">
      ETF (ֆոնդի փայեր)
    </h3>
    <p>
      ETF-ները, բաժնետոմսերի համեմատ, ավելի մշակված և ցածր ռիսկային ներդրումային ակտիվներ են, քանի որ հնարավորություն են տալիս կատարել զամբյուղային ներդրումներ. Դուք գնում եք ֆոնդի փայ, որը ներդրումներ է կատարում իր ռազմավարությանը համապատասխանող բազմաթիվ ակտիվներում, այսինքն՝ ոչ մեծ գումարով կարողանում եք ապահովել նաև պորտֆելի դիվերսիֆիկացիա[cite: 32]:
    </p>
  </section>

  <p className="pt-2">
    Կատարելով նախապես կշռադատված ու գրագետ ներդրումներ՝ թույլ են տալիս, որ Ձեր գումարն աշխատի Ձեր փոխարեն[cite: 32]:
  </p>

  <div className="pt-6 border-t border-purple-100 space-y-4">
    <h3 className="text-lg sm:text-xl font-bold text-purple-700 text-center">
      EvocaINVEST. Նոր եկամուտների ժամանակն է
    </h3>
    <p className="text-center">
      <strong className="text-purple-700">EvocaINVEST</strong> հավելվածի միջոցով կարող եք կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում[cite: 33]:
    </p>
    <p className="text-center">
      <strong className="text-purple-700">EvocaINVEST</strong>-ը հասանելի է web և mobile հավելվածի (<a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">App Store և Google Play</a>) տարբերակներով[cite: 33]:
    </p>

    <ul className="space-y-2 max-w-md mx-auto pl-2">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Դարձեք Բանկի հաճախորդ[cite: 33],</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Բացեք Բրոքերային հաշիվ[cite: 33],</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ներբեռնեք հավելվածը[cite: 33],</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Համալրեք հաշիվը[cite: 33],</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Կատարեք ներդրումներ[cite: 33],</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Ստացեք եկամուտներ[cite: 33]:</span>
      </li>
    </ul>

    <div className="pt-4 border-t border-purple-50 space-y-3 text-center">
      <p className="font-bold text-purple-700">
        Հարցերի և մանրամասների համար՝
      </p>
      <ul className="space-y-2">
        <li>
          <a href="tel:+37410205555" className="text-purple-700 font-bold hover:underline">
            +374-10-20-55-55
          </a>[cite: 33]
        </li>
        <li>
          <a href="mailto:invest@evoca.am" className="text-purple-700 font-bold hover:underline">
            invest@evoca.am
          </a>[cite: 33]
        </li>
      </ul>
    </div>
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