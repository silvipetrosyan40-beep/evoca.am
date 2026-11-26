import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';
import { Home, FileText, Download } from 'lucide-react';
export default function CreditHistoryPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <style>{`
        @media (max-width: 640px) {
          .ii-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .ii-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .ii-box {
            padding: 20px !important;
            gap: 20px !important;
          }
          .ii-h2 {
            font-size: 20px !important;
          }
          .ii-warning {
            padding: 16px !important;
          }
          .ii-formula {
            padding: 12px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Վարկեր")}</button>
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Վարկային պատմություն և սքոր")}</button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">{t("Կարևոր տեղեկատվություն")}</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="ii-main max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6 flex-wrap">
            <button onClick={() => handleNavigation('/')} aria-label={t("Գլխավոր")} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Անհատ")}</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">{t("Վարկեր")}</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">{t("Կարևոր տեղեկատվություն")}</span>
          </div>

          <h1 className="ii-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Կարևոր տեղեկատվություն")}</h1>

          {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ԲԼՈԿ */}
          <div className="ii-box bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
            
            {/* ԿԱՐԵՎՈՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԵՎ ՈՒՇԱԴՐՈՒԹՅՈՒՆ */}
            <div>
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Կարևոր տեղեկատվություն")}</h2>
              <div className="ii-warning bg-red-50/50 border border-red-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-red-700">{t("Ուշադրություն")}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-3">
                  <li>{t("Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:")}</li>
                  <li>{t("Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չկիրառվում:")}</li>
                  <li>{t("Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով:")}</li>
                  <li>{t("Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծին:")}</li>
                  <li>{t("ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՄԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՌԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:")}</li>
                  <li>
                    {t("Վարկի տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա, իսկ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (")}{' '}
                    <a href="https://www.cba.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">www.cba.am</a>
                    {t("):")}
                  </li>
                  <li>{t("Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:")}</li>
                  <li>{t("Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:")}</li>
                  <li>
                    {t("Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է")}{' '}
                    <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">www.evoca.am</a>{' '}
                    {t("կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատարանի միջոցով: Իրավունքների պաշտպանության գործընթացը նկարագրված է")}{' '}
                    <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">www.evoca.am</a>{' '}
                    {t("կայքում և Բանկի գործունեության վայրերում տեղակայված «Ինչ անել, եթե բողոք ունեք» ձևաթղթում:")}
                  </li>
                  <li>{t("ԶԳՈՒՇԱՑՈՒՄ. ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ընթացքում ՁԵՐ ՏՎՅԱԼՆԵՐԸ (պարտավորության չկատարման, թերի կատարման մասին տեղեկությունները) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:")}</li>
                  <li>{t("ՏԵՂԵԿԱՑՈՒՄ. Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներում և հավելվածներում), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:")}</li>
                  <li>{t("Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա: ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆԸ Ձեր ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունների այն ամբողջությունն է, որը հավաքվում, կուտակվում և պարբերաբար նորացվում է Ձեզ վարկ տրամադրած կազմակերպությունների և/կամ Վարկային բուրույնի կողմից: Վարկային պատմությունը ուսումնասիրվում է վարկավորում իրականացնող կազմակերպությունների կողմից Ձեր վարկային հայտը դիտարկելու ընթացքում և մեծ դեր է խաղում վարկի տրամադրման որոշման կայացման հարցում:")}</li>
                  <li>{t("Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:")}</li>
                  <li>{t("ՏՈԿՈՍԱԳՈՒՄԱՐՆԵՐԻ և ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՈՒՄՆԵՐԸ ԺԱՄԱՆԱԿԻՆ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ, ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:")}</li>
                  <li>{t("Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե ձեր վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքերի հաշվին:")}</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ")}</h2>
              <p className="mb-4">
                {t("Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր")}{' '}
                <strong className="text-gray-900">{t("ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ")}</strong>{' '}
                {t("վրա:")}
              </p>
            </div>

            {/* Բաժին 1 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Ինչ է վարկային պատմությունը")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("«Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի համաձայն՝ վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկություններ: Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:")}
              </p>
            </div>

            {/* Բաժին 2 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Որոնք են վարկային պատմության ձևավորման աղբյուրները")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բուրույնին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):")}
              </p>
            </div>

            {/* Բաժին 3 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Ինչ է վարկային բուրույնը")}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("Վարկային բուրույնն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:")}
              </p>
              <p className="text-sm text-gray-600 mb-2">{t("Վարկային բուրույնի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում՝")}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>{t("ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար,")}</li>
                <li>{t("ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին:")}</li>
              </ul>
            </div>

            {/* Բաժին 4 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Ինչ է վարկային զեկույցը")}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {t("Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:")}
              </p>
              <p className="text-sm text-gray-600">
                {t("Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:")}
              </p>
            </div>

            {/* Բաժին 5 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Որքան ժամանակ է պահպանվում վարկային պատմությունը")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բուրույնի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:").replace('»:', '»:')}
              </p>
            </div>

            {/* Բաժին 6 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Ինչպես բարելավել վարկային պատմությունը")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:")}
              </p>
            </div>

            {/* Բաժին 7 */}
            <div>
              <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                {t("Ուր դիմել եթե վարկային պատմությունը սխալ է")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բուրույնին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուր): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բուրույնին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում ԻՄ ԱՔՌԱ անձնական գրասենյակից:")}
              </p>
            </div>

            {/* ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿՄԱՆ ՕՐԻՆԱԿ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ")}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {t("Բանկը իր կողմից տրամադրված վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (Annual Percentage Rate կամ APR)՝ սպառողի կրեդիտավորման ընդհանուր ծախսը՝ արտահայտված տրամադրված կրեդիտի տարեկան տոկոսով և հաշվարկված՝ հիմք ընդունելով հետևյալ բանաձևը՝")}
              </p>
              
              <div className="ii-formula bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800 overflow-x-auto">
                {"$$A = \\sum_{n=1}^{N} \\frac{K_n}{(1+i)^{\\frac{D_n}{365}}}$$"}
              </div>
              <p className="text-sm text-gray-600 mb-2">{t("որտեղ՝")}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-6 ml-2">
                <li><strong>i</strong> – {t("տարեկան փաստացի տոկոսադրույք,")}</li>
                <li><strong>A</strong> – {t("վարկի սկզբնական գումար,")}</li>
                <li><strong>n</strong> – {t("վարկի մարմանն ուղղված վճարի թիվ,")}</li>
                <li><strong>N</strong> – {t("վարկի մարմանն ուղղված վերջին վճարի թիվ,")}</li>
                <li><strong>Kn</strong> – {t("վարկի մարմանն ուղղված n-րդ վճարի գումար,")}</li>
                <li><strong>Dn</strong> – {t("վարկի տրամադրման օրվանից մինչև վարկի մարմանն ուղղված n-րդ վճարի կատարման օրն ընկած ժամանակահատված՝ արտահայտված օրերի թվով:")}</li>
              </ul>

              <h4 className="font-semibold text-purple-800 mb-2">{t("Ենթադրենք բանկը սպառողին տրամադրում է վարկ հետևյալ պայմաններով՝")}</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>{t("Վարկի գումար – 700,000 ՀՀ դրամ,")}</li>
                <li>{t("Անվանական տարեկան տոկոսադրույքը – 18%,")}</li>
                <li>{t("Վարկի մարման ժամկետը – 12 ամիս,")}</li>
                <li>{t("Վարկի մարման եղանակը – անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը մարվում է ամենամսյա հավասարաչափ):")}</li>
              </ul>

              <h4 className="font-semibold text-purple-800 mb-2">{t("Վարկի տրամադրման դիմաց առկա են վճարներ՝")}</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>{t("Վարկային հայտի ուսումնասիրման միանվագ վճար – 1,000 ՀՀ դրամ:")}</li>
              </ul>

              <p className="text-sm text-gray-600 mb-3">
                {t("Անուիտետային եղանակով վարկի մարման դեպքում անհրաժեշտ է որոշել վարկի մարմանն ուղղված ամսական վճարի գումարը, հետևյալ բանաձևով՝")}
              </p>

              <div>
                <div className="ii-formula bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800 overflow-x-auto">
                  {"$$K = A \\times \\frac{(1+R)^P \\times R}{(1+R)^P - 1}$$"}
                </div>

                <p className="text-sm text-gray-600 mb-2">{t("որտեղ՝")}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                  <li><strong>K</strong> – {t("ամսական վճար,")}</li>
                  <li><strong>A</strong> – {t("վարկի սկզբնական գումար,")}</li>
                  <li><strong>R</strong> – {t("տոկոսագումար (նշվում է ամսական տոկոսադրույքը, օրինակ՝ (18/12) / 100 = 0.015),")}</li>
                  <li><strong>P</strong> – {t("վարկի մարման ժամկետ (ամիսներով):")}</li>
                </ul>

                <div className="ii-formula bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800 overflow-x-auto">
                  {"$$700,000 \\times \\frac{(1+0.015)^{12} \\times 0.015}{(1+0.015)^{12} - 1} = 64,176$$"}
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {t("Տարեկան փաստացի տոկոսադրույքը հաշվարկելու համար որպես K1 լրացվում է Վարկային հայտի ուսումնասիրման միանվագ վճարը՝ 1,000 ՀՀ դրամ: Այսպիսով՝ վարկի տարեկան փաստացի տոկոսադրույքը կհաշվարկվի հետևյալ կերպ՝")}
                </p>

                <div className="ii-formula bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono my-4 text-sm text-gray-800 overflow-x-auto">
                  {"$$700,000 = \\frac{1,000}{(1+i)^{\\frac{0}{365}}} + \\frac{64,176}{(1+i)^{\\frac{30}{365}}} + \\frac{64,176}{(1+i)^{\\frac{61}{365}}} + \\dots + \\frac{64,176}{(1+i)^{\\frac{365}{365}}}$$"}
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-900 mt-2">{t("i = 0.1995 x 100 = 19.95%")}</p>
              <p className="text-sm text-gray-600 mt-2">{t("Բանկի կողմից առաջարկվող վերոհիշյալ պայմաններով վարկի տարեկան փաստացի տոկոսադրույքը կկազմի 19.95%:")}</p>
            </div>

           {/* ՎԱՐԿԻ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿԻ ՄԵՋ ՉՆԵՐԱՌՎՈՂ ՎՃԱՐՆԵՐ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Վարկի տարեկան փաստացի տոկոսադրույքի հաշվարկի մեջ չներառվող վճարներ")}</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>{t("Նոտարական ձևակերպման վճարներ,")}</li>
                <li>{t("Գրավի գրանցման վճարները,")}</li>
                <li>{t("Կանխիկացման վճարները:")}</li>
              </ul>
            </div>

            {/* ԼՈՂԱՑՈՂ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿՄԱՆ ԿԱՐԳ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Լողացող տոկոսադրույքի հաշվարկման կարգ")}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {t("Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքի հաշվարկն իրականացվում է հետևյալ բանաձևով՝")}{' '}
                <strong className="text-gray-900">{"$S_L = S_H + S_\\Phi$"}</strong>,{' '}
                {t("որտեղ՝")}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li><strong>S_L</strong> - {t("Լողացող տոկոսադրույք,")}</li>
                <li><strong>S_H</strong> - {t("Լողացող տոկոսադրույքի հաստատուն բաղադրիչ,")}</li>
                <li><strong>S_Φ</strong> - {t("Լողացող տոկոսադրույքի փոփոխուն բաղադրիչ:")}</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                {t("Լողացող տոկոսադրույքի կիրառման դեպքում յուրաքանչյուր վարկի համար վարկային պայմանագրերում սահմանվում են անվանական տոկոսադրույքի առավելագույն և նվազագույն շեմեր, որոնցից ավելի տոկոսադրույքը չի կարող բարձրանալ կամ իջնել՝ անկախ հաշվարկի հիմքում ընկած ցուցանիշների փոփոխության չափից: Ընդ որում, բարձրացման առավելագույն շեմը չի կարող գերազանցել իջեցման առավելագույն շեմը:")}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {t("Բանկը տարին երկու անգամ փոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (S_Φ) և այդ մասին տեղեկատվությունը ոչ ուշ, քան յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը հրապարակում է Բանկի պաշտոնական ինտերնետային կայքում:")}
              </p>
              
              <h3 className="text-lg font-bold text-purple-800 mb-2">{t("ՀՀ դրամով հիմնական")}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում 6 ամիս ժամկետայնությամբ")}{' '}
                <strong className="text-gray-800">{t("ՀՀ պետական (գանձապետական) պարտատոմսերի մինչև մարում եկամտաբերությունը")}</strong>
                {t(": ՀՀ պետական պարտատոմսերի մինչև մարում եկամտաբերությունների վերաբերյալ տեղեկատվության աղբյուր կարող են հանդիսանալ ՀՀ ԿԲ պաշտոնական կայքի համապատասխան հրապարակումները (եկամտաբերության կոր)՝ հետևյալ հղումով՝")}{' '}
                <a href="https://www.cba.am/am/SitePages/fmofinancialmarkets.aspx" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">https://www.cba.am/am/SitePages/fmofinancialmarkets.aspx</a>
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">{t("ՀՀ դրամով երկրորդային")}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում ՀՀ ԿԲ կողմից հրապարակված")}{' '}
                <strong className="text-gray-800">{t("ֆիզիկական անձանցից մինչև 1 տարի ժամկետով (բացառությամբ ցպահանջ ավանդների) ներգրավված ՀՀ դրամով ավանդների տոկոսադրույքները")}</strong>
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">{t("ԱՄՆ դոլարով հիմնական")}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում ԱՄՆ դոլարով 6 ամիս ժամկետայնությամբ")}{' '}
                <strong className="text-gray-800">{t("ժամկետային ապահովված օվերնայթ ֆինդային տոկոսադրույքը (CME Term SOFR USD 6 Month)")}</strong>
              </p>

              <h3 className="text-lg font-bold text-purple-800 mb-2 mt-4">{t("Եվրոյով հիմնական")}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t("Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում Եվրոյով 6 ամիս ժամկետայնությամբ")}{' '}
                <strong className="text-gray-800">{t("Եվրոպական Միջբանկային Առաջարկի տոկոսադրույքը (EMMI EURIBOR 6 Month)")}</strong>
              </p>

              <p className="text-sm text-gray-600 mt-4">
                {t("Փոփոխուն բաղադրիչի բացասական արժեք լինելու դեպքում Բանկի կողմից կիրառվում է 0% նվազագույն շեմը:")}
              </p>
            </div>

            {/* ԱՆՑՅԱԼ ԵՎ ՆԵՐԿԱ ՓՈՓՈԽԱԿԱՆ ԲԱՂԱԴՐԻՉՆԵՐԻ ԱՐԺԵՔՆԵՐԸ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Անցյալ և ներկա փոփոխական բաղադրիչների արժեքները")}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Ամսաթիվ")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("ՀՀ դրամ")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("ԱՄՆ դոլար")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Եվրո")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">15/07/2019</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">15/01/2020</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">15/07/2020</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">15/01/2021</td><td className="p-3 border border-gray-200">6.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">15/07/2021</td><td className="p-3 border border-gray-200">7.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">15/12/2021</td><td className="p-3 border border-gray-200">8.0%</td><td className="p-3 border border-gray-200">0.5%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">01/08/2022</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">01/02/2023</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">01/08/2023</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">01/02/2024</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">01/08/2024</td><td className="p-3 border border-gray-200">9.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">01/02/2025</td><td className="p-3 border border-gray-200">8.5%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">01/08/2025</td><td className="p-3 border border-gray-200">8.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr className="bg-gray-50/50"><td className="p-3 border border-gray-200 whitespace-nowrap">01/02/2026</td><td className="p-3 border border-gray-200">7.5%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                    <tr><td className="p-3 border border-gray-200 whitespace-nowrap">01/08/2026</td><td className="p-3 border border-gray-200">7.0%</td><td className="p-3 border border-gray-200">1.0%</td><td className="p-3 border border-gray-200">0.0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ՊԵՏԱԿԱՆ ՏՈՒՐՔԵՐ ԵՒ ԱՅԼ ԾԱԽՍԵՐ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Պետական տուրքեր և այլ ծախսեր")}</h2>
              <p className="text-sm text-gray-600 mb-4">{t("Գրավադրման պայմանով վարկերի դեպքում առկա են հետևյալ վճարները՝")}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-3">
                <li>
                  <strong className="text-gray-800">{t("Գրավադրվող գույքի գնահատում՝")}</strong>{' '}
                  {t("10,000-150,000 դրամ, կախված գույքի տեսակից, մակերեսից և գնահատող կազմակերպության սակագներից: Վճարը մուտքագրվում է գնահատող կազմակերպության հաշվին, գնահատումը իրականացվում է վարկի տրամադրումից առաջ:")}
                </li>
                <li>
                  <strong className="text-gray-800">{t("Նոտարական ձևակերպման ծախսեր՝")}</strong>{' '}
                  {t("10,000-30,000 դրամ (վճարումը կատարվում է նոտարական գրասենյակում):")}
                </li>
                <li>
                  <strong className="text-gray-800">{t("Գրավի գրանցման ծախսեր՝")}</strong>{' '}
                  {t("անշարժ գույքի գրավի գրանցման դեպքում սկսած 26,400 ՀՀ դրամից, եռակողմ պայմանագրով իրավունքների գրանցման դեպքում՝ սկսած 71,400 դրամից: Գրանցումը կատարվում է 4 աշխատանքային օրում: Ավելի կարճ ժամկետներում իրավունքների գրանցման սակագներին ծանոթանալու համար կարող եք այցելել ՀՀ ԿԱ անշարժ գույքի կադաստրի պետական կոմիտեի")}{' '}
                  <a href="https://www.cadastre.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">www.cadastre.am</a>{' '}
                  {t("կայք:")}
                </li>
                <li>
                  <strong className="text-gray-800">{t("Գրավադրվող գույքի ապահովագրություն (պահանջվելու դեպքում)՝")}</strong>{' '}
                  {t("Ապահովագրությունը պետք է կատարվի լիցենզավորված ապահովագրական ընկերությունների կողմից վարկի մնացորդի 0.15% - 2.5%-ի չափով: Ապահովագրության վճարը կախված վարկի մնացորդից և ապահովագրավճարի տարեկան սակագնից կարող է յուրաքանչյուր տարի փոփոխվել: Ապահովագրության շահառուն պետք է հանդիսանա Բանկը:")}
                </li>
              </ul>
            </div>

            {/* ՎԱՐԿԱՅԻՆ ՍՔՈՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Վարկային սքոր")}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {t("«ԷՎՈԿԱԲԱՆԿ» ԲԸ կողմից մշակված սքորինգային համակարգ է, որը վիճակագրական ուսումնասիրության և վերլուծության ենթարկելով հաճախորդի վարկային պատմությունը՝ տալիս է վարկառուի վարկային ռիսկի (վարկարժանության) թվային գնահատականը՝ որպես սպառողական կրեդիտավորման ռիսկի մակարդակի չափորոշման առանցքային գործիք")}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                {t("«ԷՎՈԿԱԲԱՆԿ» ԲԸ կողմից կիրառվող վարկային սքոր հաշվարկման մոդելը հաշվի է առնում վարկառուի հետևյալ չափանիշները՝")}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4 ml-2">
                <li>{t("Վճարումների (մարումների) պատմություն,")}</li>
                <li>{t("Վարկային բեռի մեծություն,")}</li>
                <li>{t("Վարկային պատմության երկարություն,")}</li>
                <li>{t("Օգտագործված փոխառությունների տեսակներ,")}</li>
                <li>{t("Նոր վարկային դիմում,")}</li>
                <li>{t("Այլ չափանիշներ:")}</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                {t("Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր - դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում - բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ - բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն - բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում - բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն - բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն - դրական ազդեցություն):")}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {t("Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում: Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվուստեհի անձանց համար:")}
              </p>
              <p className="text-sm text-gray-600">
                {t("Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով")}{' '}
                <a href="https://www.abcfinance.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">https://www.abcfinance.am</a>,{' '}
                <span className="font-medium text-gray-800">{t("Հաճախ տրվող հարցեր - ԱՔՌԱ (acra.am)")}</span>{' '}
                {t("և")}{' '}
                <a href="https://www.acra.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline break-all">www.acra.am</a>{' '}
                {t("կայքեր:")}
              </p>
            </div>

           {/* ԲԱՆԿԻ ՀԵՏ ՀԱՄԱԳՈՐԾԱԿՑՈՂ ԱՊԱՀՈՎԱԳՐԱԿԱՆ ԸՆԿԵՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Բանկի հետ համագործակցող ապահովագրական ընկերությունների ցանկ")}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Անվանում")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Գտնվելու վայր")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Հեռախոսահամարներ")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Էլ. փոստի հասցե")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԻՆԳՈ ԱՐՄԵՆԻԱ» ապահովագրական ՓԲԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Հանրապետության 51, 53, տարածք 47, 48, 50")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 543134</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@ingoarmenia.am" className="text-purple-700 hover:underline break-all">info@ingoarmenia.am</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԷՖԵՍ» ապահովագրական ՓԲԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ՀՀ, ք. Երևան, 0009, Զարբաբյան 11 (մուտքը Բաղրամյան պող. 20-ից)")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 700 800</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@efes.am" className="text-purple-700 hover:underline break-all">info@efes.am</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ՆԱԻՐԻ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Ավետ Ավետիսյան փող. 116/1, թիվ 116/5")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 539457, +374 10 539468</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:nairi@nairi-insurance.am" className="text-purple-700 hover:underline break-all">nairi@nairi-insurance.am</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԼԻԳԱ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՓԲԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Հյուսիսային պողոտա 1")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 591010</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@liga.am" className="text-purple-700 hover:underline break-all">info@liga.am</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t('"ՍԻԼ ԻՆՍՈՒՐԱՆՍ" ԱՓԲԸ')}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Արամի փող. թիվ 3 և 5")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 60 580000</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@silinsurance.am" className="text-purple-700 hover:underline break-all">info@silinsurance.am</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԱՐՄԵՆԻԱ ԻՆՍՈՒՐԱՆՍ» ապահովագրական ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Վարդանանց փող. 16 շենք")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 11 560404</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@armeniainsurance.am" className="text-purple-700 hover:underline break-all">info@armeniainsurance.am</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("ՌԵԳՈ ԻՆՍՈՒՐԱՆՍ ԱՓԲԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Կոմիտասի պող., 62 շենք, №93-93/1")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 60 505757</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@regoinsurance.am" className="text-purple-700 hover:underline break-all">info@regoinsurance.am</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ԲԱՆԿԻ ՀԵՏ ՀԱՄԱԳՈՐԾԱԿՑՈՂ ԳՆԱՀԱՏՈՂ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿ (ՆՈՐ) */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Բանկի հետ համագործակցող գնահատող կազմակերպությունների ցանկ")}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                  <thead>
                    <tr className="bg-purple-50 text-purple-900">
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Անվանում")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Գտնվելու վայր")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Հեռախոսահամարներ")}</th>
                      <th className="p-3 border border-gray-200 whitespace-nowrap">{t("Էլ. փոստի հասցե")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԱՐ ՎԻ ԵՄ ՔՈՆՍԱԼԹ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Տպագրիչների փող., 9/114 շենք")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 546490<br />+374 98 944449</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@rvmconsult.am" className="text-purple-700 hover:underline break-all">info@rvmconsult.am</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԲԻԼԴ ԱՓ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Քաջզնունի 5-1")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 547160, +374 91 177300</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:buildup@rambler.ru" className="text-purple-700 hover:underline break-all">buildup@rambler.ru</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԿՈՍՏ ՍՈՆՍԱԼԹ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Հանրապետության փողոց, 67 շենք, Republic բիզնես կենտրոն 2-րդ հարկ")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 544882<br />+374 91 471925</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:costconsult@mail.ru" className="text-purple-700 hover:underline break-all">costconsult@mail.ru</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ՎԻ ԵՄ-ԱՐ ՓԻ » ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Վարդանանց 8, թիվ 3")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 99 588797<br />+374 43 588797<br />+374 10 588797</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:vm-rp@mail.ru" className="text-purple-700 hover:underline break-all">vm-rp@mail.ru</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ՖԻՆԼՈՒՆԻ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Նալբանդյան 50-3")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 506000<br />+374 91 911155<br />+374 77 780510<br />+374 60 747400</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:finlaw@inbox.ru" className="text-purple-700 hover:underline break-all">finlaw@inbox.ru</a></td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-3 border border-gray-200 font-medium">{t("«ՕԼԻՎԵՐ ԳՐՈՒՊ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Երևան, Թումանյան փող., 8 շենք")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 10 542750<br />+374 10 542760</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:info@olivergroup.am" className="text-purple-700 hover:underline break-all">info@olivergroup.am</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">{t("«ԻՆՔՍԵՍ» ՍՊԸ")}</td>
                      <td className="p-3 border border-gray-200">{t("ք. Վանաձոր, Թումանյանների փող. թիվ 14")}<br />{t("Իրավ. հասցե՝ ք. Երևան, Նար-Դոս 28")}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">+374 41 042287<br />+374 96 042287<br />+374 94 042287</td>
                      <td className="p-3 border border-gray-200"><a href="mailto:apresyan.expert@mail.ru" className="text-purple-700 hover:underline break-all">apresyan.expert@mail.ru</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ՀԱՐԳԵԼԻ ՀԱՃԱԽՈՐԴ ԾԱՆՈՒՑՈՒՄ */}
            <div className="ii-warning bg-purple-50/60 border border-purple-100 rounded-2xl p-6 text-sm text-gray-700 space-y-2">
              <p className="font-bold text-gray-900">{t("Հարգելի Հաճախորդ՝")}</p>
              <p>
                {t("Հայտնում ենք Ձեզ, որ նախքան վարկային հայտ ներկայացնելը և վարկային պայմանագիր կնքելը, Դուք կարող եք Բանկի")}{' '}
                <span className="font-semibold text-gray-900">+374 10 605555</span>{' '}
                {t("հեռախոսահամարին զանգահարելով կամ Բանկի գործունեության վայր այցելելով Բանկի աշխատակցից ստանալ բանավոր տեղեկություններ Ձեզ հետաքրքրող վարկային պրոդուկտի վերաբերյալ")}
              </p>
            </div>

            {/* ՓԱՍՏԱԹՂԹԵՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ii-h2 text-2xl font-bold text-gray-900 mb-4">{t("Փաստաթղթեր")}</h2>
              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between gap-3 hover:bg-purple-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 break-words">{t("Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ)")}</p>
                    <p className="text-xs text-gray-500">07.04.2026</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-purple-700 flex items-center justify-center shadow-sm shrink-0">
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