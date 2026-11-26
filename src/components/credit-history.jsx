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
          .ch-main {
            padding-top: 16px !important;
            padding-bottom: 36px !important;
          }
          .ch-title {
            font-size: 26px !important;
            margin-bottom: 20px !important;
          }
          .ch-box {
            padding: 20px !important;
            gap: 20px !important;
          }
          .ch-h2 {
            font-size: 20px !important;
          }
          .ch-doc-card {
            padding: 12px !important;
            gap: 10px !important;
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
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">{t("Վարկային պատմություն և սքոր")}</button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">{t("Կարևոր տեղեկատվություն")}</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="ch-main max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
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
            <span className="text-gray-800 font-medium">{t("Վարկային պատմություն և սքոր")}</span>
          </div>

          <h1 className="ch-title text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t("Վարկային պատմություն և սքոր")}</h1>

          {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ԲԼՈԿ */}
          <div className="ch-box bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
            
            <div>
              <h2 className="ch-h2 text-2xl font-bold text-gray-900 mb-4">{t("Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ")}</h2>
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

            {/* Բաժին 8 - Որոշման կայացման չափանիշներ */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t("Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները")}</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">{t("Դրական որոշման կայացման չափանիշները՝")}</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>{t("Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,")}</li>
                  <li>{t("Մշտական բնակության վայրը,")}</li>
                  <li>{t("Կայուն եկամտի աղբյուրը,")}</li>
                  <li>{t("Դրական կամ չեզոք վարկային պատմությունը,")}</li>
                  <li>{t("Արժանահավատ և լիարժեք փաստաթղթերը:")}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-2">{t("Բացասական որոշման կայացման չափանիշները՝")}</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>{t("Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,")}</li>
                  <li>{t("Բացասական վարկային պատմությունը,")}</li>
                  <li>{t("Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),")}</li>
                  <li>{t("Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:")}</li>
                </ul>
              </div>
            </div>

            {/* ՎԱՐԿԱՅԻՆ ՍՔՈՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ch-h2 text-2xl font-bold text-gray-900 mb-4">{t("Վարկային սքոր")}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {t("Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ: Վարկային սքորը հաճախորդի վարկային պատմության և որակական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով: Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ:")}
              </p>
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

            {/* ՓԱՍՏԱԹՂԹԵՐԻ ԲԱԺԻՆ */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="ch-h2 text-2xl font-bold text-gray-900 mb-4">{t("Փաստաթղթեր")}</h2>
              <div className="ch-doc-card bg-purple-50/50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between gap-3 hover:bg-purple-50 transition-colors cursor-pointer">
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