import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function WilcoCardNews() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/all-news"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-colors font-medium text-sm w-fit"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>/</span>
            <Link to="/all-news" className="hover:text-gray-900 transition-colors">Նորություններ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Պրոդուկտներ</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            <Link 
  to="/news/products" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-fuchsia-500 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Պրոդուկտներ
  </span>
</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Նոր քարտը համատեղում է Evoca Visa Infinite-ի արտոնություններն ու Wilco-ի անհատականացված ֆինանսական փորձագիտությունը:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              15.06.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17815163976713/780x585.png" 
                alt="Evocabank & Wilco card" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

  {/* Հիմնական տեքստային բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-center pt-4">
          
          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ը և <strong className="text-gray-900 font-bold">Wilco</strong> կապիտալի կառավարման ընկերությունը հայտարարում են <strong className="text-gray-900 font-bold">Visa Infinite դասի հատուկ թողարկման համատեղ քարտի ստեղծման մասին</strong>: <strong className="text-purple-900 font-bold">Evocabank</strong>-ի կողմից սահմանափակ քանակով թողարկված այս քարտը համատեղում է բանկի արտոնություններն ու Wilco-ի կապիտալի կառավարման բարձրակարգ փորձառությունը՝ դարձնելով այն հաճախորդների առօրյա կյանքի անբաժանելի մասը: Քարտը կարող են ստանալ ինչպես Wilco-ի այն հաճախորդները, որոնք արդեն ունեն կամ կբացեն հաշիվ <strong className="text-purple-900 font-bold">Evocabank</strong>-ում, այնպես էլ <strong className="text-purple-900 font-bold">Evocabank</strong>-ի այն հաճախորդները, որոնք կբացեն ներդրումային հաշիվ Wilco-ում:
          </p>

          <p>
            Այս քարտը նախատեսված է <strong className="text-gray-900 font-bold">միջազգային կենսակերպ վարող հաճախորդների համար</strong>, ովքեր գնահատում են անհատականացված մոտեցումը և ցանկանում են ստանալ բանկային սպասարկումն ու կապիտալի կառավարումը՝ որպես մեկ անթերի փորձ:
          </p>

          <p>
            Քարտապաններին <strong className="text-gray-900 font-bold">հասանելի կլինի Evocabank-ի և Visa Infinite-ի արտոնությունների ողջ փաթեթը</strong>՝ առաջնահերթ մուտք աշխարհի տարբեր օդանավակայանների VIP սրահներ, ճամփորդական ընդլայնված ապահովագրություն, շուրջօրյա կոնսիերժ ծառայություն և պրեմիում բրենդների հատուկ առաջարկներ: Բացի այդ, այս բացառիկ թողարկման շրջանակում քարտապանները կստանան հնարավորություն Երևանի կենտրոնում գործնական և անձնական հանդիպումների համար <strong className="text-gray-900 font-bold">օգտվելու Wilco-ի պրեմիում գրասենյակի հանդիպումների տարածքներից</strong>, ինչպես նաև կստանան lifestyle և ֆինանսական ոլորտների <strong className="text-gray-900 font-bold">էքսկլյուզիվ միջոցառումների հրավերներ</strong>:
          </p>

          <p>
            Որպես <strong className="text-gray-900 font-bold">բացառիկ առավելություն</strong>՝ հաճախորդներին <strong className="text-gray-900 font-bold">կտրամադրվի անվճար «wealth check»</strong>՝ Wilco-ի առաջատար փորձագետների կողմից ներդրումային պորտֆելի և ընդհանուր ֆինանսական վիճակի անհատական, խորքային գնահատում: Այն թույլ է տալիս բացահայտել արտաքուստ կայուն պորտֆելի թաքնված խոցելի կետերն ու չբացահայտված հնարավորությունները, որոնք առանցքային են կապիտալի երկարաժամկետ զարգացման համար: Ինչպես կանխարգելիչ բժշկական զննումը, այնպես էլ այս գնահատումն առավել արդյունավետ է վաղ փուլում իրականացնելիս: Ժամանակին արված դիագնոստիկան տալիս է գլխավոր առավելությունը՝ ռազմավարական քայլեր ձեռնարկելու հնարավորություն:
          </p>

          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-left bg-purple-50/50 p-4 rounded-r-2xl my-4">
            «Կապիտալի կառավարումը միայն ակտիվների հետ աշխատանքը չէ, այն ընդհանուր պատկերը հասկանալու մասին է: Մենք հաճախորդի ֆինանսական կյանքին նայում ենք համապարփակ՝ ուշադրություն դարձնելով այն բանին, թե ինչպես է նա ապրում, ծախսում, ճամփորդում ու կայացնում որոշումներ: Քանի որ առօրյա բանկինգն այս իրականության անբաժանելի մասն է, այս քարտը դարձավ մեր մոտեցման բնական արտացոլումը: Հայաստանի առաջատար բանկերից մեկի՝ <strong className="text-purple-900 font-bold">Evocabank</strong>-ի հետ գործընկերությունը, որի հետ մեզ միավորում է ընդհանուր արժեքները, հրաշալի հնարավորություն տվեց այս փիլիսոփայությունը մարմնավորել շոշափելի, գործնական մակարդակում: Ունենալով միաժամանակյա հասանելիություն թե՛ պրեմիում բանկինգին և թե՛ կապիտալի պրոֆեսիոնալ կառավարմանը՝ հաճախորդն իր համար բացահայտում է սպասարկման սկզբունքորեն այլ մակարդակ», - նշել է Wilco-ի գլխավոր գործադիր տնօրեն Իրինա Բելիչկան:
          </blockquote>

          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-left bg-purple-50/50 p-4 rounded-r-2xl my-4">
            «<strong className="text-purple-900 font-bold">Evocabank</strong>-ում մենք հավատում ենք, որ ժամանակակից ֆինանսական լուծումները պետք է լինեն հարմար՝ միևնույն ժամանակ համապատասխանելով հաճախորդների կենսակերպին և երկարաժամկետ նպատակներին: Այս նախագիծը միավորում է Evocabank-ի պրեմիում բանկային փորձառությունն ու Wilco-ի կապիտալի կառավարման պրոֆեսիոնալ փորձագիտությունը՝ ստեղծելով առաջարկ, որն արտացոլում է մեր հաճախորդների սպասումներն ու կարիքները»,- նշել է <strong className="text-purple-900 font-bold">Evocabank</strong>-ի Վարչության նախագահ Կարեն Եղիազարյանը:
          </blockquote>

          <p className="pt-2">
            Քարտի գործողության ժամկետն է 5 տարի, իսկ սպասարկման միանվագ վճարը՝ գործողության ամբողջ ժամկետի համար 300,000 ՀՀ դրամ:
          </p>

          <p>
            Քարտի սահմանափակ թողարկմանը միանալու պայմանները, մանրամասն տեղեկատվությունը և հայտի ձևը հասանելի են Wilco-ի պաշտոնական կայքում՝{' '}
            <a 
              href="https://wilco.am/am/card" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 underline font-bold hover:text-purple-900"
            >
              https://wilco.am/am/card
            </a>:
          </p>

          {/* Ընկերությունների մասին բլոկ */}
          <div className="pt-8 border-t border-gray-200 text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Ընկերությունների մասին
            </h3>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-900">Wilco</h4>
              <p>
                Wilco-ն կապիտալի կառավարման ընկերություն է, որը ներդրումային ծառայություններ է մատուցում բարձր զուտ կարողություն ունեցող անհատներին (HNWI), ընտանեկան գրասենյակներին և կորպորատիվ հաճախորդներին: Wilco-ն վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-bold text-purple-900">Evocabank</h4>
              <p>
                Որպես Հայաստանում գրանցված առաջին առևտրային Բանկ՝ <strong className="text-purple-900 font-bold">Evocabank</strong>-ը ոչ միայն մատուցում է արագ, հարմար և նորարարական բանկային ծառայություններ, այլ նաև խթանում է ժամանակակից բանկային մշակույթը:
              </p>
              <p>
                Բանկը հատուկ ուշադրություն է դարձնում թվային պրոդուկտների և ծառայությունների զարգացմանը՝ ստեղծելով մի միջավայր, որտեղ ցանկացած ֆինանսական գործարք կարող է իրականացվել առանց Բանկ այցելելու՝ անմիջապես <span className="text-purple-900 font-bold">EvocaTOUCH</span> հավելվածի միջոցով:
              </p>
              <p>
                Բանկը կարևորում է փոքր և միջին ձեռնարկությունների (ՓՄՁ) դերը Հայաստանում և ֆիզիկական անձանց ու ՓՄՁ-ներին տրամադրում է ժամանակակից թվային գործիքներ, գերարագ և ճկուն ֆինանսական լուծումներ, ինչպես նաև ոլորտի առաջատար մասնագետների կողմից անհատականացված աջակցություն:
              </p>
              <p>
                Դրա մասին են վկայում հեղինակավոր միջազգային ամսագրերի և կազմակերպությունների կողմից ստացած բազմաթիվ մրցանակները, ինչպիսիք են՝ «Լավագույն բանկը Հայաստանում», «Լավագույն թվային բանկը Հայաստանում», «Լավագույն ՓՄՁ բանկը Հայաստանում», «Լավագույն ՓՄՁ բանկը Հայաստանում», «Լավագույն բանկային հավելվածը Հայաստանում» և այլն:
              </p>
            </div>
          </div>

        </div>

        {/* Այլ նորություններ բաժին */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Նորություն 1 (Back to school) */}
            <Link 
              to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="		https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" 
                    alt="Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
               23.09.2026
              </div>
            </Link>

            {/* Նորություն 2 (Adidas) */}
            <Link 
              to="/products/evocabank-participates-in-autoshow-2026" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17902383376936/428x321.png" 
                    alt="Adidas Armenia" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evoca-ն մասնակցում է Armenian Auto Show 2026-ին
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                22.09.2026
              </div>
            </Link>

            {/* Նորություն 3 (Globbing) */}
            <Link 
              to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" 
                    alt="Globbing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                21.09.2026
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}