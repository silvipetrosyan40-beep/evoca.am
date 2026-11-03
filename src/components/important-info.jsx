import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Home, FileText, Download } from 'lucide-react';

export default function CreditHistoryPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Վարկեր</button>
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0">Վարկային պատմություն և սքոր</button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Կարևոր տեղեկատվություն</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Վարկեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Վարկային պատմություն և սքոր</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Վարկային պատմություն և սքոր</h1>

          {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ԲԼՈԿ */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
            
            {/* ԿԱՐԵՎՈՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԵՎ ՈՒՇԱԴՐՈՒԹՅՈՒՆ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Կարևոր տեղեկատվություն</h2>
              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-red-700">Ուշադրություն</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-3">
                  <li>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:</li>
                  <li>Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չկիրառվում:</li>
                  <li>Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով:</li>
                  <li>Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծին:</li>
                  <li>ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՄԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՌԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:</li>
                  <li>Վարկի տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա, իսկ ՍԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Սարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (<a href="https://www.cba.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">www.cba.am</a>):</li>
                  <li>Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:</li>
                  <li>Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:</li>
                  <li>Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">www.evoca.am</a> կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատարանի միջոցով: Իրավունքների պաշտպանության գործընթացը նկարագրված է <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">www.evoca.am</a> կայքում և Բանկի գործունեության վայրերում տեղակայված «Ինչ անել, եթե բողոք ունեք» ձևաթղթում:</li>
                  <li>ԶԳՈՒՇԱՑՈՒՄ. ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ընթացքում ՁԵՐ ՏՎՅԱԼՆԵՐԸ (պարտավորության չկատարման, թերի կատարման մասին տեղեկությունները) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:</li>
                  <li>ՏԵՂԵԿԱՑՈՒՄ. Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներում և հավելվածներում), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:</li>
                  <li>Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա: ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆԸ Ձեր ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունների այն ամբողջությունն է, որը հավաքվում, կուտակվում և պարբերաբար նորացվում է Ձեզ վարկ տրամադրած կազմակերպությունների և/կամ Վարկային բուրույնի կողմից: Վարկային պատմությունը ուսումնասիրվում է վարկավորում իրականացնող կազմակերպությունների կողմից Ձեր վարկային հայտը դիտարկելու ընթացքում և մեծ դեր է խաղում վարկի տրամադրման որոշման կայացման հարցում:</li>
                  <li>Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:</li>
                  <li>ՏՈԿՈՍԱԳՈՒՄԱՐՆԵՐԻ և ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՈՒՄՆԵՐԸ ԺԱՄԱՆԱԿԻՆ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ, ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:</li>
                  <li>Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե ձեր վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքերի հաշվին:</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ</h2>
              <p className="mb-4">
                Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <strong className="text-gray-900">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</strong> վրա:
              </p>
            </div>

            {/* Բաժին 1 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Ինչ է վարկային պատմությունը
              </h3>
              <p className="text-sm text-gray-600">
                «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի համաձայն՝ վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկություններ: Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
              </p>
            </div>

            {/* Բաժին 2 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Որոնք են վարկային պատմության ձևավորման աղբյուրները
              </h3>
              <p className="text-sm text-gray-600">
                Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանված կարգով վարկային բուրույնին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):
              </p>
            </div>

            {/* Բաժին 3 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Ինչ է վարկային բուրույնը
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Վարկային բուրույնն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:
              </p>
              <p className="text-sm text-gray-600 mb-2">Վարկային բուրույնի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում՝</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար,</li>
                <li>ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին:</li>
              </ul>
            </div>

            {/* Բաժին 4 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Ինչ է վարկային զեկույցը
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
              </p>
              <p className="text-sm text-gray-600">
                Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
              </p>
            </div>

            {/* Բաժին 5 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Որքան ժամանակ է պահպանվում վարկային պատմությունը
              </h3>
              <p className="text-sm text-gray-600">
                Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բուրույնի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
              </p>
            </div>

            {/* Բաժին 6 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Ինչպես բարելավել վարկային պատմությունը
              </h3>
              <p className="text-sm text-gray-600">
                Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
              </p>
            </div>

            {/* Բաժին 7 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Որք դիմել եթե վարկային պատմությունը սխալ է
              </h3>
              <p className="text-sm text-gray-600">
                Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բուրույնին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուր): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բուրույնին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում ԻՄ ԱՔՌԱ անձնական գրասենյակից:
              </p>
            </div>

            {/* ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿՄԱՆ ՕՐԻՆԱԿ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ</h2>
              <p className="text-sm text-gray-600 mb-4">
                Բանկը իր կողմից տրամադրված վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (Annual Percentage Rate կամ APR)՝ սպառողի կրեդիտավորման ընդհանուր ծախսը՝ արտահայտված տրամադրված կրեդիտի տարեկան տոկոսով և հաշվարկված՝ հիմք ընդունելով հետևյալ բանաձևը[cite: 20]:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800">
  {"$$A = \\sum_{n=1}^{N} \\frac{K_n}{(1+i)^{\\frac{D_n}{365}}}$$"}
</div>
              <p className="text-sm text-gray-600 mb-2">որտեղ՝</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-6 ml-2">
                <li><strong>i</strong> – տարեկան փաստացի տոկոսադրույք[cite: 20],</li>
                <li><strong>A</strong> – վարկի սկզբնական գումար[cite: 20],</li>
                <li><strong>n</strong> – վարկի մարմանն ուղղված վճարի թիվ[cite: 20],</li>
                <li><strong>N</strong> – վարկի մարմանն ուղղված վերջին վճարի թիվ[cite: 20],</li>
                <li><strong>Kn</strong> – վարկի մարմանն ուղղված n-րդ վճարի գումար[cite: 20],</li>
                <li><strong>Dn</strong> – վարկի տրամադրման օրվանից մինչև վարկի մարմանն ուղղված n-րդ վճարի կատարման օրն ընկած ժամանակահատված՝ արտահայտված օրերի թվով[cite: 20]:</li>
              </ul>

              <h4 className="font-semibold text-purple-800 mb-2">Ենթադրենք բանկը սպառողին տրամադրում է վարկ հետևյալ պայմաններով[cite: 20]՝</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>Վարկի գումար – 700,000 ՀՀ դրամ[cite: 20],</li>
                <li>Անվանական տարեկան տոկոսադրույքը – 18%[cite: 20],</li>
                <li>Վարկի մարման ժամկետը – 12 ամիս[cite: 20],</li>
                <li>Վարկի մարման եղանակը – անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը մարվում է ամենամսյա հավասարաչափ)[cite: 20]:</li>
              </ul>

              <h4 className="font-semibold text-purple-800 mb-2">Վարկի տրամադրման դիմաց առկա են վճարներ[cite: 21]՝</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>Վարկային հայտի ուսումնասիրման միանվագ վճար – 1,000 ՀՀ դրամ[cite: 21]:</li>
              </ul>

              <p className="text-sm text-gray-600 mb-3">
                Անուիտետային եղանակով վարկի մարման դեպքում անհրաժեշտ է որոշել վարկի մարմանն ուղղված ամսական վճարի գումարը, հետևյալ բանաձևով[cite: 21]՝
              </p>

              <div>
  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800">
    {"$$K = A \\times \\frac{(1+R)^P \\times R}{(1+R)^P - 1}$$"}
  </div>

              <p className="text-sm text-gray-600 mb-2">որտեղ՝</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li><strong>K</strong> – ամսական վճար[cite: 21],</li>
                <li><strong>A</strong> – վարկի սկզբնական գումար[cite: 21],</li>
                <li><strong>R</strong> – տոկոսագումար (նշվում է ամսական տոկոսադրույքը, օրինակ՝ (18/12) / 100 = 0.015)[cite: 21],</li>
                <li><strong>P</strong> – վարկի մարման ժամկետ (ամիսներով)[cite: 21]:</li>
              </ul>

             <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800">
    {"$$700,000 \\times \\frac{(1+0.015)^{12} \\times 0.015}{(1+0.015)^{12} - 1} = 64,176$$"}
  </div>

              <p className="text-sm text-gray-600 mb-4">
                Տարեկան փաստացի տոկոսադրույքը հաշվարկելու համար որպես K1 լրացվում է Վարկային հայտի ուսումնասիրման միանվագ վճարը՝ 1,000 ՀՀ դրամ: Այսպիսով՝ վարկի տարեկան փաստացի տոկոսադրույքը կհաշվարկվի հետևյալ կերպ[cite: 21]՝
              </p>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800 overflow-x-auto">
    {"$$700,000 = \\frac{1,000}{(1+i)^{\\frac{0}{365}}} + \\frac{64,176}{(1+i)^{\\frac{30}{365}}} + \\frac{64,176}{(1+i)^{\\frac{61}{365}}} + \\dots + \\frac{64,176}{(1+i)^{\\frac{365}{365}}}$$"}
  </div>
</div>

              <p className="text-sm font-semibold text-gray-900 mt-2">i = 0.1995 x 100 = 19.95%[cite: 21]</p>
              <p className="text-sm text-gray-600 mt-2">Բանկի կողմից առաջարկվող վերոհիշյալ պայմաններով վարկի տարեկան փաստացի տոկոսադրույքը կկազմի 19.95%[cite: 22]:</p>
            </div>

            {/* ՎԱՐԿԻ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿԻ ՄԵՋ ՉՆԵՐԱՌՎՈՂ ՎՃԱՐՆԵՐ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Վարկի տարեկան փաստացի տոկոսադրույքի հաշվարկի մեջ չներառվող վճարներ</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Նոտարական ձևակերպման վճարներ[cite: 22],</li>
                <li>Գրավի գրանցման վճարները[cite: 22],</li>
                <li>Կանխիկացման վճարները[cite: 22]:</li>
              </ul>
            </div>

            {/* ԼՈՂԱՑՈՂ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿՄԱՆ ԿԱՐԳ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Լողացող տոկոսադրույքի հաշվարկման կարգ</h2>
              <p className="text-sm text-gray-600 mb-4">
                Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքի հաշվարկն իրականացվում է հետևյալ բանաձևով՝ <strong>$S_L = S_H + S_\Phi$</strong>, որտեղ[cite: 22]՝
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li><strong>S_L</strong> - Լողացող տոկոսադրույք[cite: 22],</li>
                <li><strong>S_H</strong> - Լողացող տոկոսադրույքի հաստատուն բաղադրիչ[cite: 22],</li>
                <li><strong>S_\Phi</strong> - Լողացող տոկոսադրույքի փոփոխուն բաղադրիչ[cite: 22]:</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                Լողացող տոկոսադրույքի կիրառման դեպքում յուրաքանչյուր վարկի համար վարկային պայմանագրերում սահմանվում են անվանական տոկոսադրույքի առավելագույն և նվազագույն շեմեր, որոնցից ավելի տոկոսադրույքը չի կարող բարձրանալ կամ իջնել՝ անկախ հաշվարկի հիմքում ընկած ցուցանիշների փոփոխության չափից: Ընդ որում, բարձրացման առավելագույն շեմը չի կարող գերազանցել իջեցման առավելագույն շեմը[cite: 22]:
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Բանկը տարին երկու անգամ փոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը ($S_\Phi$) և այդ մասին տեղեկատվությունը ոչ ուշ, քան յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը հրապարակում է Բանկի պաշտոնական ինտերնետային կայքում[cite: 22]:
              </p>
              
              <h3 className="text-lg font-bold text-purple-800 mb-2">ՀՀ դրամով հիմնական</h3>
              <p className="text-sm text-gray-600 mb-3">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում 6 ամիս ժամկետայնությամբ <strong>ՀՀ պետական (գանձապետական) պարտատոմսերի մինչև մարում եկամտաբերությունը</strong>: ՀՀ պետական պարտատոմսերի մինչև մարում եկամտաբերությունների վերաբերյալ տեղեկատվության աղբյուր կարող են հանդիսանալ ՀՀ ԿԲ պաշտոնական կայքի համապատասխան հրապարակումները (եկամտաբերության կոր)՝ հետևյալ հղումով՝ <a href="https://www.cba.am/am/SitePages/fmofinancialmarkets.aspx" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">https://www.cba.am/am/SitePages/fmofinancialmarkets.aspx</a>[cite: 23]:
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">ՀՀ դրամով երկրորդային</h3>
              <p className="text-sm text-gray-600 mb-3">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում ՀՀ ԿԲ կողմից հրապարակված <strong>ֆիզիկական անձանցից մինչև 1 տարի ժամկետով (բացառությամբ ցպահանջ ավանդների) ներգրավված ՀՀ դրամով ավանդների տոկոսադրույքները</strong>[cite: 23]:
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">ԱՄՆ դոլարով հիմնական</h3>
              <p className="text-sm text-gray-600 mb-3">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում ԱՄՆ դոլարով 6 ամիս ժամկետայնությամբ <strong>ժամկետային ապահովված օվերնայթ ֆինդային տոկոսադրույքը (CME Term SOFR USD 6 Month)</strong>[cite: 24]:
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">Եվրոյով հիմնական</h3>
              <p className="text-sm text-gray-600 mb-3">
                Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում Եվրոյով 6 ամիս ժամկետայնությամբ <strong>Եվրոպական Միջբանկային Առաջարկի տոկոսադրույքը (EMMI EURIBOR 6 Month)</strong>[cite: 25]:
              </p>

              <p className="text-sm text-gray-600 mt-4">
                Փոփոխուն բաղադրիչի բացասական արժեք լինելու դեպքում Բանկի կողմից կիրառվում է 0% նվազագույն շեմը[cite: 25, 26]:
              </p>
            </div>

            {/* ԱՆՑՅԱԼ ԵՎ ՆԵՐԿԱ ՓՈՓՈԽԱԿԱՆ ԲԱՂԱԴՐԻՉՆԵՐԻ ԱՐԺԵՔՆԵՐԸ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Անցյալ և ներկա փոփոխական բաղադրիչների արժեքները</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200">Ամսաթիվ</th>
                      <th className="p-3 border border-gray-200">ՀՀ դրամ</th>
                      <th className="p-3 border border-gray-200">ԱՄՆ դոլար</th>
                      <th className="p-3 border border-gray-200">Եվրո</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border border-gray-200">15/07/2019</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">15/01/2020</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">15/07/2020</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">15/01/2021</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">15/07/2021</td><td className="p-3 border border-gray-200">7.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">15/12/2021</td><td className="p-3 border border-gray-200">8.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">01/08/2022</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">01/02/2023</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">01/08/2023</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">01/02/2024</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">01/08/2024</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">01/02/2025</td><td className="p-3 border border-gray-200">8.5%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">01/08/2025</td><td className="p-3 border border-gray-200">8.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200">01/02/2026</td><td className="p-3 border border-gray-200">7.5%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200">01/08/2026</td><td className="p-3 border border-gray-200">7.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ՊԵՏԱԿԱՆ ՏՈՒՐՔԵՐ ԵՒ ԱՅԼ ԾԱԽՍԵՐ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Պետական տուրքեր և այլ ծախսեր</h2>
              <p className="text-sm text-gray-600 mb-4">Գրավադրման պայմանով վարկերի դեպքում առկա են հետևյալ վճարները՝</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-3">
                <li><strong className="text-gray-800">Գրավադրվող գույքի գնահատում՝</strong> 10,000-150,000 դրամ, կախված գույքի տեսակից, մակերեսից և գնահատող կազմակերպության սակագներից: Վճարը մուտքագրվում է գնահատող կազմակերպության հաշվին, գնահատումը իրականացվում է վարկի տրամադրումից առաջ:</li>
                <li><strong className="text-gray-800">Նոտարական ձևակերպման ծախսեր՝</strong> 10,000-30,000 դրամ (վճարումը կատարվում է նոտարական գրասենյակում):</li>
                <li><strong className="text-gray-800">Գրավի գրանցման ծախսեր՝</strong> անշարժ գույքի գրավի գրանցման դեպքում սկսված 26,400 ՀՀ դրամից, եռակողմ պայմանագրով իրավունքների գրանցման դեպքում՝ սկսված 71,400 դրամից: Գրանցումը կատարվում է 4 աշխատանքային օրում: Ավելի կարճ ժամկետներում իրավունքների գրանցման սակագներին ծանոթանալու համար կարող եք այցելել ՀՀ ԿԱ անշարժ գույքի կադաստրի պետական կոմիտեի <a href="https://www.cadastre.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">www.cadastre.am</a> կայք:</li>
                <li><strong className="text-gray-800">Գրավադրվող գույքի ապահովագրություն (պահանջվելու դեպքում)՝</strong> Ապահովագրությունը պետք է կատարվի լիցենզավորված ապահովագրական ընկերությունների կողմից վարկի մնացորդի 0.15% - 2.5%-ի չափով: Ապահովագրության վճարը կախված վարկի մնացորդից և ապահովագրավճարի տարեկան սակագնից կարող է յուրաքանչյուր տարի փոփոխվել: Ապահովագրության շահառուն պետք է հանդիսանա Բանկը:</li>
              </ul>
            </div>

            {/* ՎԱՐԿԱՅԻՆ ՍՔՈՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Վարկային սքոր</h2>
              <p className="text-sm text-gray-600 mb-4">
                «ԷՎՈԿԱԲԱՆԿ» ԲԸ կողմից մշակված սքորինգային համակարգ է, որը վիճակագրական ուսումնասիրության և վերլուծության ենթարկելով հաճախորդի վարկային պատմությունը՝ տալիս է վարկառուի վարկային ռիսկի (վարկարժանության) թվային գնահատականը՝ որպես սպառողական կրեդիտավորման ռիսկի մակարդակի չափորոշման առանցքային գործիք[cite: 26]:
              </p>
              <p className="text-sm text-gray-600 mb-3">
                «ԷՎՈԿԱԲԱՆԿ» ԲԸ կողմից կիրառվող վարկային սքոր հաշվարկման մոդելը հաշվի է առնում վարկառուի հետևյալ չափանիշները[cite: 26, 27]՝
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>Վճարումների (մարումների) պատմություն[cite: 27],</li>
                <li>Վարկային բեռի մեծություն[cite: 27],</li>
                <li>Վարկային պատմության երկարություն[cite: 27],</li>
                <li>Օգտագործված փոխառությունների տեսակներ[cite: 27],</li>
                <li>Նոր վարկային դիմում[cite: 27],</li>
                <li>Այլ չափանիշներ[cite: 27]:</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր - դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում - բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ - բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն - բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում - բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն - բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն - դրական ազդեցություն):
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում: Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվուստեհի անձանց համար:
              </p>
              <p className="text-sm text-gray-600">
                Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով <a href="https://www.abcfinance.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">https://www.abcfinance.am</a>, <span className="font-medium text-gray-800">Հաճախ տրվող հարցեր - ԱՔՌԱ (acra.am)</span> և <a href="https://www.acra.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">www.acra.am</a> կայքեր:
              </p>
            </div>

            {/* ԲԱՆԿԻ ՀԵՏ ՀԱՄԱԳՈՐԾԱԿՑՈՂ ԱՊԱՀՈՎԱԳՐԱԿԱՆ ԸՆԿԵՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Բանկի հետ համագործակցող ապահովագրական ընկերությունների ցանկ</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200">Անվանում</th>
                      <th className="p-3 border border-gray-200">Գտնվելու վայր</th>
                      <th className="p-3 border border-gray-200">Հեռախոսահամարներ</th>
                      <th className="p-3 border border-gray-200">Էլ. փոստի հասցե</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ԻՆԳՈ ԱՐՄԵՆԻԱ» ապահովագրական ՓԲԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Հանրապետության 51, 53, տարածք 47, 48, 50[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 10 543134[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@ingoarmenia.am" className="text-purple-700 hover:underline">info@ingoarmenia.am</a>[cite: 27]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ԷՖԵՍ» ապահովագրական ՓԲԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ՀՀ, ք. Երևան, 0009, Զարբաբյան 11 (մուտքը Բաղրամյան պող. 20-ից)[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 10 700 800[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@efes.am" className="text-purple-700 hover:underline">info@efes.am</a>[cite: 27]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ՆԱԻՐԻ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՍՊԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Ավետ Ավետիսյան փող. 116/1, թիվ 116/5[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 10 539457, +374 10 539468[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:nairi@nairi-insurance.am" className="text-purple-700 hover:underline">nairi@nairi-insurance.am</a>[cite: 27]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ԼԻԳԱ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՓԲԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Հյուսիսային պողոտա 1[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 10 591010[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@liga.am" className="text-purple-700 hover:underline">info@liga.am</a>[cite: 27]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">"ՍԻԼ ԻՆՍՈՒՐԱՆՍ" ԱՓԲԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Արամի փող. թիվ 3 և 5[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 60 580000[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@silinsurance.am" className="text-purple-700 hover:underline">info@silinsurance.am</a>[cite: 27]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ԱՐՄԵՆԻԱ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՍՊԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Վարդանանց փող. 16 շենք[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 11 560404[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@armeniainsurance.am" className="text-purple-700 hover:underline">info@armeniainsurance.am</a>[cite: 27]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">ՌԵԳՈ ԻՆՍՈՒՐԱՆՍ ԱՓԲԸ[cite: 27]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Կոմիտասի պող., 62 շենք, №93-93/1[cite: 27]</td>
                      <td className="p-3 border border-gray-200">+374 60 505757[cite: 27]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@regoinsurance.am" className="text-purple-700 hover:underline">info@regoinsurance.am</a>[cite: 27]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ԲԱՆԿԻ ՀԵՏ ՀԱՄԱԳՈՐԾԱԿՑՈՂ ԳՆԱՀԱՏՈՂ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿ (ՆՈՐ) */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Բանկի հետ համագործակցող գնահատող կազմակերպությունների ցանկ</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200">Անվանում</th>
                      <th className="p-3 border border-gray-200">Գտնվելու վայր</th>
                      <th className="p-3 border border-gray-200">Հեռախոսահամարներ</th>
                      <th className="p-3 border border-gray-200">Էլ. փոստի հասցե</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ԱՐ ՎԻ ԵՄ ՔՈՆՍԱԼԹ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Տպագրիչների փող., 9/114 շենք[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 10 546490<br />+374 98 944449[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@rvmconsult.am" className="text-purple-700 hover:underline">info@rvmconsult.am</a>[cite: 28]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ԲԻԼԴ ԱՓ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Քաջզնունի 5-1[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 10 547160, +374 91 177300[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:buildup@rambler.ru" className="text-purple-700 hover:underline">buildup@rambler.ru</a>[cite: 28]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ԿՈՍՏ ՍՈՆՍԱԼԹ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Հանրապետության փողոց, 67 շենք, Republic բիզնես կենտրոն 2-րդ հարկ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 10 544882<br />+374 91 471925[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:costconsult@mail.ru" className="text-purple-700 hover:underline">costconsult@mail.ru</a>[cite: 28]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ՎԻ ԵՄ-ԱՐ ՓԻ » ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Վարդանանց 8, թիվ 3[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 99 588797<br />+374 43 588797<br />+374 10 588797[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:vm-rp@mail.ru" className="text-purple-700 hover:underline">vm-rp@mail.ru</a>[cite: 28]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ՖԻՆԼՈՒՆԻ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Նալբանդյան 50-3[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 10 506000<br />+374 91 911155<br />+374 77 780510<br />+374 60 747400[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:finlaw@inbox.ru" className="text-purple-700 hover:underline">finlaw@inbox.ru</a>[cite: 28]</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">«ՕԼԻՎԵՐ ԳՐՈՒՊ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Երևան, Թումանյան փող., 8 շենք[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 10 542750<br />+374 10 542760[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@olivergroup.am" className="text-purple-700 hover:underline">info@olivergroup.am</a>[cite: 28]</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">«ԻՆՔՍԵՍ» ՍՊԸ[cite: 28]</td>
                      <td className="p-3 border border-gray-200">ք. Վանաձոր, Թումանյանների փող. թիվ 14<br />Իրավ. հասցե՝ ք. Երևան, Նար-Դոս 28[cite: 28]</td>
                      <td className="p-3 border border-gray-200">+374 41 042287<br />+374 96 042287<br />+374 94 042287[cite: 28]</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:apresyan.expert@mail.ru" className="text-purple-700 hover:underline">apresyan.expert@mail.ru</a>[cite: 28]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ՀԱՐԳԵԼԻ ՀԱՃԱԽՈՐԴ ԾԱՆՈՒՑՈՒՄ */}
            <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 text-sm text-gray-700 space-y-2">
              <p className="font-bold text-gray-900">Հարգելի Հաճախորդ՝</p>
              <p>
                Հայտնում ենք Ձեզ, որ նախքան վարկային հայտ ներկայացնելը և վարկային պայմանագիր կնքելը, Դուք կարող եք Բանկի <span className="font-semibold text-gray-900">+374 10 605555</span> հեռախոսահամարին զանգահարելով կամ Բանկի գործունեության վայր այցելելով Բանկի աշխատակցից ստանալ բանավոր տեղեկություններ Ձեզ հետաքրքրող վարկային պրոդուկտի վերաբերյալ[cite: 28]:
              </p>
            </div>

            {/* ՓԱՍՏԱԹՂԹԵՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Փաստաթղթեր</h2>
              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between hover:bg-purple-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ)</p>
                    <p className="text-xs text-gray-500">07.04.2026</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-purple-700 flex items-center justify-center shadow-sm">
                  <Download className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}