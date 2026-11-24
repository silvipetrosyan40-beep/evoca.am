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
            <Link to="/news/all" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/news/lifestyle" className="hover:text-purple-700 transition-colors">
              Մրցանակներ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">
Լավագույն ՓՄՁ բանկը Հայաստանում






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
  to="/news/awards" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-yellow-400 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Մրցանակներ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Լավագույն ՓՄՁ բանկը Հայաստանում
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Evocabank-ը ճանաչվել է Լավագույն ՓՄՁ բանկը Հայաստանում ըստ Global Finance-ի:


























              </p>
              <p>
27.10.2021
</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/16353380635409/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="text-center space-y-2">
    <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
      2022թ. Լավագույն ՓՄՁ բանկը Հայաստանում[cite: 17]
    </h2>
    <p className="font-bold text-purple-700">
      Global Finance հեղինակավոր ամսագիր[cite: 17]
    </p>
  </div>

  <p>
    <strong className="text-gray-900">Global Finance</strong> հեղինակավոր ամսագիրը <strong className="text-purple-700">Evocabank</strong>-ին ճանաչել է 2022թ. <strong className="text-gray-900">Լավագույն ՓՄՁ բանկը Հայաստանում</strong> (The Best SME Banking in Armenia for 2022)[cite: 17]:
  </p>

  <p>
    Մրցանակաբաշխության հաղթողներն ընտրվել են Global Finance-ի խմբագրության կողմից՝ հաշվի առնելով ոլորտի ինսայդերների և տեխնոլոգիական փորձագետների տվյալները[cite: 17]:
  </p>

  <div className="space-y-3 pt-2">
    <p>
      Հաղթող բանկերն ընտրվել են մի շարք չափանիշների հիման վրա՝[cite: 17]
    </p>
    <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
      <li>ՓՄՁ շուկաների և կարիքների իմացություն[cite: 17],</li>
      <li>ապրանքների և ծառայությունների շրջանակ[cite: 17],</li>
      <li>շուկայական դիրք[cite: 17],</li>
      <li>նորարարություն[cite: 17]:</li>
    </ul>
  </div>

  <blockquote className="border-l-4 border-purple-700 pl-4 italic text-gray-800 my-6">
    «Փոքր և միջին ձեռնարկությունները (ՓՄՁ) ամենաշատն են տուժել COVID-19 համաճարակից և հաջորդիվ դրանք վճռորոշ դեր կխաղան ցանկացած երկրի վերականգնման գործում», - ասաց <strong className="text-gray-900">Global Finance ամսագրի հրատարակիչ և գլխավոր խմբագիր Ջոզեֆ Դ. Ջիարապուտոն</strong>: «Global Finance-ը սկսել է նոր ՓՄՁ բանկերի մրցանակաբաշխությունը՝ ելնելով այս փաստից: Այժմ եզակի և կարևոր ժամանակ է՝ ՓՄՁ-ներին լավագույնս ծառայող ֆինանսական հաստատություններին հնարավորություն ընձեռելու գնահատված լինելու իրենց մատուցած ծառայությունների և աջակցության համար»[cite: 17]:
  </blockquote>

  <div className="border-t border-purple-50 pt-8 flex justify-center">
    <img
      src="https://www.evoca.am/file_manager/Capture.PNG"
      alt="Global Finance Best SME Bank Awards 2022 Press Release and Country Winners list"
      className="max-w-xl w-full h-auto rounded-lg shadow-md"
    />
  </div>

  <p className="pt-2">
    Կատարելագործելով իր ընթացակարգերը և ներդնելով նորագույն տեխնոլոգիաներ՝ Evoca-ն իր գործընկերներին առաջարկում է պարզ և նորարար լուծումներ իրենց բիզնեսի զարգացման համար[cite: 17]:
  </p>

  <div className="space-y-3 pt-4 border-t border-purple-50">
    <h3 className="text-lg font-bold text-purple-700">
      Evocabank-ի ՓՄՁ վարկավորման ծրագրերն են՝[cite: 17]
    </h3>
    <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
      <li>
        <a
          href="/hy"
          className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
        >
          Փոքր և միջին բիզնեսի վարկավորում
        </a>[cite: 17]
      </li>
      <li>
        <a
          href="/hy"
          className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
        >
          Փոքր և միջին բիզնեսի վարկավորում «Գործընկեր»
        </a>[cite: 17]
      </li>
      <li>
        <a
          href="/hy"
          className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
        >
          «ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար» ծրագրի շրջանակներում տրամադրվող վարկեր
        </a>[cite: 17]
      </li>
      <li>
        <a
          href="/hy"
          className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
        >
          «Եվրոպական ներդրումային բանկի կողմից ֆինանսավորվող» ծրագրի շրջանակներում տրամադրվող վարկեր
        </a>[cite: 17]
      </li>
    </ul>
  </div>

  <p>
    Ի դեպ, IFC-ն՝ Միջազգային Ֆինանսական Կորպորացիան, և <strong className="text-purple-700">Evocabank</strong>-ը վերջերս համախմբեցին իրենց ուժերը, որպեսզի աջակցեն բիզնեսին, պահպանեն աշխատատեղերը և արագացնեն Հայաստանի տնտեսության վերականգնումը[cite: 17]: IFC-ի տրամադրած 15 միլիոն դոլար վարկավորումը <strong className="text-purple-700">Evocabank</strong>-ին հնարավորություն է տալիս տրամադրել շրջանառու կապիտալ ու առևտրային վարկեր ԳՓՄՁ-ներին, հատկապես՝ տնտեսության կրիտիկական ոլորտներում, այդ թվում՝ առողջապահություն, պարենի արտադրություն, փաթեթավորում, էլեկտրոնային առևտուր և լոգիստիկա[cite: 17]:
  </p>

  <div className="space-y-4 pt-4 border-t border-purple-50 text-sm text-gray-600">
    <p>
      <strong className="text-gray-900">Global Finance ամսագրի մասին.</strong> այն հիմնադրվել է 1987թ., այն լույս է տեսնում ավելի քան 50,050 օրինակով և տարածվում 189 երկրում[cite: 17]: Global Finance ամսագրի ընթերցողների բանակը ընդգրկում է կորպորատիվ և ֆինանսական բարձրաստիճան պաշտոնյաների, ովքեր պատասխանատու են բազմազգային ընկերություններում և ֆինանսական կազմակերպություններում ներդրումային և ռազմավարական որոշումների ընդունման համար[cite: 17]: Ամսագրի կայքը՝{' '}
      <a
        href="https://gfmag.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
      >
        GFMag.com
      </a>
      , առաջարկում է ֆինանսական վերլուծություններ և հոդվածներ, որոնք հիմնվում են միջազգային ֆինանսական շուկաներում աշխատանքի 34-ամյա ժառանգության վրա[cite: 17]: Global Finance ամսագրի գլխամասը գտնվում է Նյու-Յորքում, իսկ տարածաշրջանային գրասենյակները սփռված են աշխարհով մեկ[cite: 17]: Global Finance ամսագիրը բանկերի և ֆինանսական ծառայություններ մատուցող այլ կազմակերպությունների շրջանում ընտրում է լավագույններին[cite: 17]: Այդ մրցանակները համաշխարհային ֆինանսական հանրության համար դարձել են գերազանցության հուսալի չափորոշիչ[cite: 17]:
    </p>
  </div>
</article>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/prizes/the-most-innovative-digital-bank-2026-by-global-business-and-finance-magazine" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17909253326841/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026
Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">02.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/prizes/best-bank-in-armenia-2026-by-international-investor-magazine" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17847187625556/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank՝ Լավագույն Բանկը Հայաստանում 2026
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">30.06.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/prizes/new-award-best-sme-bank-by-digital-banker-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17784860353078/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank. Lավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.05.2026</span>
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