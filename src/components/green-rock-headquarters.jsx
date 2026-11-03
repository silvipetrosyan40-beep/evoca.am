import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function GreenRockNews() {
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
            <span className="text-gray-900 font-medium">Բանկային</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Evocabank-ը և Green Rock-ը մեկնարկեցին...</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Բանկային
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Evocabank-ը և Green Rock Management Group-ը ստորագրեցին համագործակցության հուշագիր՝ պաշտոնապես մեկնարկելով Բանկի նոր գլխամասի նախագիծը:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              30.07.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png" 
                alt="Evocabank and Green Rock" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Հիմնական տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          
          <p>
            <strong className="text-purple-700 font-semibold">Evocabank</strong>-ի Վարչության նախագահ <strong className="text-gray-900">Կարեն Եղիազարյանը</strong> և <strong className="text-gray-900">Green Rock Management Group</strong>-ի գործադիր տնօրեն <strong className="text-gray-900">Կատերինա Դանեկինյանն</strong> ստորագրեցին <em className="italic">համագործակցության հուշագիր</em>՝ պաշտոնապես մեկնարկելով Բանկի նոր գլխամասի նախագծի իրականացումը:
          </p>

          <p>
            <strong className="text-purple-700 font-semibold">Evocabank</strong>-ի նոր գլխամասը կկառուցվի <em className="text-gray-900 font-medium">Երևանի Դեմիրճյան 14 հասցեում</em> և կմիավորի Բանկի բոլոր աշխատակիցներին մեկ ժամանակակից, միջազգային չափանիշներին համապատասխանող աշխատանքային միջավայրում: Նախագծի իրականացումը վստահված է <strong className="text-gray-900">MVRDV</strong> միջազգային ճարտարապետական բიուրոյին:
          </p>

          {/* Կարեն Եղիազարյանի մեջբերում */}
          <div className="bg-purple-50 border border-purple-100 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-purple-800">
              Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյան նշեց.
            </h3>
            <blockquote className="italic text-gray-700 border-l-4 border-purple-600 pl-4 space-y-3">
              <p>
                «Այսօր խորհրդանշական օր է Բանկի համար: Մենք նշում ենք Բանկի զարգացման նոր փուլը: Բանկի նոր գլխամասը լինելու է միջազգային ստանդարտներին համապատասխանող կենտրոն, որը, վստահ եմ, նոր նշաձող է սահմանելու Երևանի քաղաքաշինական մշակույթում: Այս նոր կենտրոնը դառնալու է Բանկի նոր խորհրդանիշը, և այս պահն առանձնահատուկ իմաստ ունի, քանի որ այսօր մենք հավաքվել ենք Բանկի ներկայիս՝ շուրջ 35 տարի գործող գլխամասի մոտ: Մեր գործընկեր Green Rock Management Group-ի հետ մեզ երկար ճանապարհ է սպասվում, և համոզված եմ, որ արդյունքը կգերազանցի սպասելիքները»:
              </p>
            </blockquote>
          </div>

          {/* Կատերինա Դանեկինյանի մեջբերում */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              Green Rock Management Group-ի գործադիր տնօրեն Կատերինա Դանեկինյան նշեց.
            </h3>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-400 pl-4 space-y-3">
              <p>
                «Այսօր կարևոր օր է ինչպես Evocabank-ի, այնպես էլ Green Rock-ի համար: Մենք նշում ենք Evocabank-ի նոր գլխամասի նախագծի պաշտոնական մեկնարկը Երևանում: Այս համագործակցության հուշագրի ստորագրումով մենք սկսում ենք նախագծի հաջորդ փուլը, որը հիմնված է ամուր գործընկերության, արդյունավետ համագործակցության, մանրակրկիտ պլանավորման և ընդհանուր արժեքների վրա: Evocabank-ն ունի իր նոր գլխամասի հստակ տեսլականը՝ ստեղծել ժամանակակից աշխատանքային միջավայր, որն արտացոլում է Բանկի ինքնությունը, աջակցում է աշխատակիցներին և նպաստում Բանկի հետագա զարգացմանը: Մենք հպարտ ենք, որ ղեկավարում ենք այս նախագծի իրականացումը՝ գաղափարից մինչև շինարարության ավարտ: Մեզ համար մեծ պատիվ է արժանանալ Evocabank-ի ղեկավարության վստահությանը, որի համար անկեղծ շնորհակալություն ենք հայտնում»:
              </p>
            </blockquote>
          </div>

          <p>
            Միջոցառման ավարտին տեղի ունեցավ նախագծի մեկնարկը խորհրդանշող առաջին քայլը, կապսուլայի մեջ դրվեց <strong className="text-purple-700 font-semibold">Evocabank</strong>-ի նոր տեսլականը, որն ընկած է Բանկի նոր գլխամասի և <strong className="text-purple-700 font-semibold">Evocabank</strong>-ի ապագա զարգացման հիմքում:
          </p>

        </div>

        {/* Այլ նորություններ բաժին */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Նորություն 1 (Գործարքների արգելափակում) */}
            <Link 
              to="/news/block-transactions" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" 
                    alt="Block transactions" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Գործարքների արգելափակում 1 կոճակով
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                01.06.2026
              </div>
            </Link>

            {/* Նորություն 2 (Moody's վարկանիշ) */}
            <Link 
              to="/news/moodys-rating" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" 
                    alt="Moody's rating" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                18.08.2026
              </div>
            </Link>

            {/* Նորություն 3 (Firebird AI) */}
            <Link 
              to="/news/firebird-ai" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17864472573391/428x321.png" 
                    alt="Firebird AI" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                11.08.2026
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