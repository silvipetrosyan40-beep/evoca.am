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
            Բանկային
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">
            Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից
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
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-purple-700 inline-block rounded-sm"></span>
                <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                  Բանկային
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Evocabank-ը Finance in Motion-ի կողմից կառավարվող EFSE ու GGF հիմնադրամներից ներգրավել է 5-ական մլն ԱՄՆ դոլարի ստորադաս փոխառություն։
              </p>
              <p>05.10.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17908437653512/780x585.png" 
                  alt="Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

{/* 3. Հոդվածի մանրամասն տեքստեր */}
        <div className="max-w-4xl space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
          
          <p className="font-semibold text-gray-900">
            <strong>Evocabank</strong>-ը Finance in Motion-ի կողմից կառավարվող հիմնադրամներից ներգրավել է <strong>10 միլիոն ԱՄՆ դոլարի ստորադաս փոխառություն</strong>, որից 5 միլիոն ԱՄՆ դոլարը տրամադրվել է Հարավարևելյան Եվրոպայի եվրոպական հիմնադրամի (EFSE), իսկ 5 միլիոն ԱՄՆ դոլարը՝ կանաչ աճի հիմնադրամի (GGF) կողմից:
          </p>

          <p>
            Փոխառությունը տրամադրած երկու հիմնադրամները կառավարվում են <strong>Finance in Motion (FIM)</strong>-ի կողմից: FIM-ը զարգացող և ձևավորվող շուկաներում կայուն զարգացմանն ուղղված ներդրումների մասնագիտացված կառավարիչ է, որը կառավարում և զարգացման ֆինանսավորման մի շարք հիմնադրամներ: Դրանցից EFSE-ն կենտրոնացած է փոքր և միջին ձեռնարկությունների ֆինանսավորման, իսկ GGF-ն՝ կանաչ անցման, էներգաարդյունավետության և վերականգնվող էներգետիկայի զարգացման վրա:
          </p>

          <p>
            Ֆինանսավորումն ամրապնդում է Բանկի երկրորդ մակարդակի կապիտալի բազան և նպաստում դրա կապիտալի համարժեքության հետագա բարելավմանը՝ <strong>Evocabank</strong>-ին հնարավորություն տալով ընդլայնել միկրո, փոքր և միջին ձեռնարկությունների (ՄՓՄՁ) վարկավորումը՝ բիզնեսներին ապահովելով ֆինանսավորման ավելի մեծ հասանելիությամբ և աջակցելով դրանց շարունակական աճին ու զարգացմանը:
          </p>

          <p>
            <strong>Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը նշեց.</strong> <em>«Ստորադաս փոխառության միջոցով մեր կապիտալի բազայի ամրապնդումն էլ է նպաստելու Evocabank-ի աճին ու կունջունությանը՝ միևնույն ժամանակ թույլ տալով ընդլայնել ՄՓՄՁ-ների համար ֆինանսավորման հասանելիությունը: Մենք շարունակելու ենք աջակցել Հայաստանում բիզնես ոլորտի զարգացմանը՝ առաջարկելով անհատականացված և կայուն ֆինանսական լուծումներ»։</em>
          </p>

          <p>
            <strong>EFSE-ի պորտֆելի կառավարիչ Յասմինկա Բեգերը նշեց.</strong> <em>«Այս ֆինանսավորման միջոցով EFSE-ն ամրապնդում է իր գործընկերությունը Evocabank-ի հետ և աջակցում է Բանկի՝ Հայաստանում ՄՓՄՁ-ների ավելի երկարաժամկետ ֆինանսավորում տրամադրելու կարողությանը: Հատկապես ողջունելի է այն հանգամանքը, որ ներդրումը կնպաստի նաև կանանց կողմից ղեկավարվող բիզնեսների ֆինանսավորման հնարավորությունների ընդլայնմանը՝ նպաստելով ավելի ներառական տնտեսական աճին»:</em>
          </p>

          <p>
            <strong>GGF-ի Խորհրդի նախագահ Սայմոն Գուպտան նշեց.</strong> <em>«Կանաչ վարկավորման ծավալներն ընդլայնելու կարողություն ու հավակնություն ունեցող ֆինանսական հաստատություններին աջակցելը GGF-ի առաքելության առանցքային ուղղություններից է: Evocabank-ի հետ մեր գործընկերության հետագա ամրապնդման միջոցով մենք նպաստում ենք կայուն ֆինանսավորման հասանելիության ընդլայնմանը և այնպիսի ներդրումների աջակցմանը, որոնք բարելավում են էներգաարդյունավետությունը, մրցունակությունը և Հայաստանի տնտեսական դիմակայունությունը»:</em>
          </p>

          <p>
            <strong>FIM-ի GGF-ի գծով տնօրեն Բորիսլավ Կոստանդինովը հավելեց.</strong> <em>«Evocabank-ը ցուցաբերել է կանաչ վարկավորման իր պորտֆելի զարգացմանն ուղղված կարևոր հանձնառություն: Այս լրացուցիչ ներդրումը կօգնի Բանկին բավարարել էներգաարդյունավետ տեխնոլոգիաների, էլեկտրական շարժունակության և վերականգնվող էներգիայի լուծումների ֆինանսավորման աճող պահանջարկը»:</em>
          </p>

          <p>
            <strong>Evocabank</strong>-ը Հայաստանի առաջատար առևտրային բանկերից է, որը բազմաթիվ բանկային պրոդուկտներ և ֆինանսական ծառայություններ է առաջարկում անհատներին, անհատ ձեռնարկատերերին և բիզնեսներին: Բանկն առանձնահատուկ ուշադրություն է դարձնում միկրո, փոքր և միջին ձեռնարկությունների (ՄՓՄՁ) աջակցմանը, կայուն բիզնես աճի խթանմանն ու ֆինանսների հասանելիության ընդլայնմանը: Միջազգային ֆինանսական կազմակերպությունների և զարգացման ֆինանսավորման հիմնադրամների հետ համագործակցության միջոցով Evocabank-ը շարունակում է ամրապնդել իր ներուժը, որով իր ներդրումն է ունենում Հայաստանի մասնավոր հատվածի և տնտեսության զարգացման ֆինանսավորման գործում:
          </p>
        <p>
            <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">
              www.evoca.am
            </a>
          </p>
          <p>
            <strong>Finance in Motion</strong>-ը կառուցակարգում, կառավարում և խորհրդատվություն է տրամադրում շուրջ <strong>4 միլիարդ եվրո</strong> ընհանուր ծավալով 9 հիմնադրամի համար: Այս մասնավոր հիմնադրամները տարածաշրջանային ֆինանսական հաստատությունների միջնորդությամբ, ինչպես նաև ուղղակի ներդրումների, խորհրդատվության և կարողությունների զարգացման ծրագրերի միջոցով նպաստում են մարդկանց և շրջակա միջավայրի համար դրական ազդեցության ստեղծմանը: Գերմանիայում հիմնադրված Finance in Motion-ը, ավելի քան 15 տարի ներդրումներ է իրականացնում զարգացող շուկաներում:
          </p>
          <p>
            <a href="https://www.finance-in-motion.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">
              www.finance-in-motion.com
            </a>
          </p>

          <p>
            <strong>Հարավարևելյան Եվրոպայի համար եվրոպական ֆոնդը (EFSE)</strong> հիմնադրված 2005 թվականին, ազդեցության ներդրումային ֆոնդ է, որի նպատակն է խթանել տնտեսական զարգացումն ու բարեկեցությունը Հարավարևելյան Եվրոպայում և Եվրոպական Արևելյան հարևանության տարածաշրջանում: EFSE-ն ստեղծվել է KfW Development Bank-ի նախաձեռնությամբ՝ Գերմանիայի կառավարության և Եվրոպական հանձնաժողովի ֆինանսական աջակցությամբ: Ոպես իր տեսակի առաջին հանրային-մասնավոր գործընկերություններից մեկը՝ EFSE-ն իր կապիտալը ներգրավում է դոնոր կազմակերպություններից, միջազգային ֆինանսական հաստատություններից և մասնավոր ինստիտուցիոնալ ներդրողներից:
          </p>
          <p>
            <a href="https://www.efse.lu" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">
              www.efse.lu
            </a>
          </p>

          <p>
            <strong>Կանաչ աճի հիմնադրամը (GGF)</strong> ներդրումներ է իրականացնում Հարավարևելյան Եվրոպայի, Կովկասի, Ուկրաինայի, Մոլդովայի, Մերձավոր Արևելքի և Հյուսիսային Աֆրիկայի 19 շուկաներում էներգիայի սպառման և CO2 արտանետումների նվազեցման, ինչպես նաև ռեսուրսների արդյունավետության բարձրացմանն ուղղված ծրագրերում: Հիմնադրամը ֆինանսավորում է վերականգնվող էներգետիկայի ծրագրեր, կորպորատիվ ընկերություններ, համայնքներ և ֆինանսական հաստատություններ՝ իր Տեխնիկական աջակցության հարթակի (Technical Assistance Facility) միջոցով: GGF-ը հիմնադրվել է 2009 թվականին Գերմանիայի KfW Development Bank-ի և Եվրոպական ներդրումային բանկի (EIB) նախաձեռնությամբ: Հիմնադրամն ունի ներդրողների լայն բազա, որը ներառում է դոնոր կազմակերպություններ, միջազգային ֆինանսական հաստատություններ և մասնավոր ներդրողներ:
          </p>
          <p>
            <a href="https://www.ggf.lu" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline font-medium">
              www.ggf.lu
            </a>
          </p>
        </div>
        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/block-transactions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17852444643548/510x383.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Գործարքների արգելափակում 1 կոճակով
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">01.06.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/moodys-rating" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                 Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">18.08.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/firebird-ai" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17864472573391/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">11.08.2026</span>
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