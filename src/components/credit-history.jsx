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
                Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բուրույնին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):
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
                Ուր դիմել եթե վարկային պատմությունը սխալ է
              </h3>
              <p className="text-sm text-gray-600">
                Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բուրույնների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բուրույնին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուր): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բուրույնին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում ԻՄ ԱՔՌԱ անձնական գրասենյակից:
              </p>
            </div>

            {/* Բաժին 8 - Որոշման կայացման չափանիշներ */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">Դրական որոշման կայացման չափանիշները՝</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,</li>
                  <li>Մշտական բնակության վայրը,</li>
                  <li>Կայուն եկամտի աղբյուրը,</li>
                  <li>Դրական կամ չեզոք վարկային պատմությունը,</li>
                  <li>Արժանահավատ և լիարժեք փաստաթղթերը:</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-2">Բացասական որոշման կայացման չափանիշները՝</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,</li>
                  <li>Բացասական վարկային պատմությունը,</li>
                  <li>Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),</li>
                  <li>Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:</li>
                </ul>
              </div>
            </div>

            {/* ՎԱՐԿԱՅԻՆ ՍՔՈՐԻ ԲԱԺԻՆ (ՏԵՂԱՓՈԽՎԱԾ Է ՓԱՍՏԱԹՂԹԵՐԻ ՎԵՐԵՎՈՒՄ) */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Վարկային սքոր</h2>
              <p className="text-sm text-gray-600 mb-4">
                Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ: Վարկային սքորը հաճախորդի վարկային պատմության և որակական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով: Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ:
              </p>
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