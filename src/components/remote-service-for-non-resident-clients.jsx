import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const accordionSections = [
    {
  title: "Առավելություններ",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong className="text-purple-900">Prime կարգավիճակ Բանկում</strong>
          <p className="text-sm mt-1">Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում[cite: 23]</p>
        </li>
        <li>
          <strong className="text-purple-900">Անհատական մենեջեր/Անձնական օգնական</strong>
          <p className="text-sm mt-1">24/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից[cite: 23]</p>
        </li>
        <li>
          <strong className="text-purple-900">Հեռավար սպասարկում</strong>
          <p className="text-sm mt-1">Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից[cite: 23]</p>
        </li>
      </ul>

      <div className="pt-2">
        <strong className="text-purple-900">Փաստաթղթերի անվճար առաքում</strong>
        <p className="text-sm mt-1">Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահին՝ արագ և անվճար[cite: 23]:</p>
      </div>
    </div>
  )
},
    {
  title: "Ֆիզիկական անձանց հաշվի բացման պայմաններ",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Հանդիսանում են ՀՀ-ում գտնվող անշարժ գույքի սեփականատեր և ունեն անշարժ գույքի նկատմամբ սեփականության իրավունքի գրանցման վկայական[cite: 23]:
      </li>
      <li>
        Պատրաստ են ներդնել նվազագույնը 6 ամիս ժամկետով և առնվազն 20 000 ԱՄՆ դոլար, 20 000 եվրո, 1 500 000 ՌԴ ռուբլի և 10 000 000 ՀՀ դրամ գումարի չափով համարժեք ավանդ «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ում[cite: 23]:
      </li>
      <li>
        ՀՀ-ում գրանցված են որպես անհատ ձեռնարկատեր և ունեն ՀՀ Արդարադատության նախարարության իրավաբանական անձանց պետական ռեգիստրի կողմից տրամադրված գրանցման վկայական[cite: 23]:
      </li>
      <li>
        Հանդիսանում են ՀՀ-ում գրանցված իրավաբանական անձի մասնակից (բաժնետեր) հիմնավորված համապատասխան փաստաթղթերով[cite: 23]:
      </li>
    </ul>
  )
},
    {
  title: "Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Անձնագիր[cite: 23]
      </li>
      <li>
        Միջազգային անձնագիր[cite: 23]
      </li>
      <li>
        Եկամուտների ծագման աղբյուրը (ֆիզիկական անձի նախորդ տարվա հարկային հայտարարագիր, անշարժ գույքի, բաժնետոմսերի կամ արժեթղթերի վաճառքի կամ վարձակալության պայմանագիր)[cite: 23]
      </li>
    </ul>
  )
},
    {
  title: "Իրավաբանական անձանց փաստաթղթերի ցանկ",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ դրան փոխարինող այլ փաստաթուղթ)
        </li>
        <li>
          Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի պետական գրանցման մարմնի կողմից տրված վկայական և հարկային մարմիններում գրանցված փաստաթուղթ՝ տրված գրանցման երկրի համապատասխան մարմնի կողմից)
        </li>
        <li>
          Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե այն բացակայում է պետական ռեգիստրի վկայականում
        </li>
        <li>
          Գործադիր մարմնի ղեկավարի, գլխավոր հաշվապահի անձնագրերը կամ անձը հաստատող փաստաթղթերը, ինչպես նաև քաղվածքներ պաշտոններում նշանակվելու հրամաններից, եթե ղեկավարի մասին տեղեկությունը բացակայում է պետական գրանցամատյանում գրանցման վկայականում (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի ղեկավարի անձնագիր(ներ)ը և իրավասու մարմնի նշանակման մասին որոշումներով տրված պաշտոնները)
        </li>
        <li>
          Հաշվետերերի անձնագրեր կամ նույնականացման քարտեր
        </li>
      </ul>

      <p className="font-semibold text-gray-900 pt-2">
        Շահառուների համար անհրաժեշտ է՝
      </p>

      <ul className="list-disc pl-5 space-y-3">
        <li>
          Եթե շահառուն ֆիզիկական անձ է, անձնագրի կամ նույնականացման քարտի պատճենները
        </li>
        <li>
          Եթե շահառուն իրավաբանական անձ է, տվյալ փաստաթղթերի ցանկի 2-րդ, 3-րդ և 4-րդ կետերով նախատեսված փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ կետերով նախատեսված փաստաթղթերի) պատճենները տվյալ իրավաբանական անձի կողմից
        </li>
        <li>
          Ընկերության ֆինանսական հաշվետվություններ՝ վերջին մեկ տարվա կտրվածքով, աուդիտորական եզրակացություն
        </li>
        <li>
          Լիցենզիա, եթե ընկերության գործունեությունը պահանջում է
        </li>
      </ul>
    </div>
  )
},
   {
  title: "Սակագներ",
  content: (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Ֆիզիկական անձանց համար</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Հաշվի բացում՝ 50,000 դրամ[cite: 18]</li>
          <li>Տարեկան սպասարկում՝ 250,000 դրամ[cite: 18]</li>
          <li>Փակման վճար՝ 0 դրամ[cite: 18]</li>
          <li>Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին՝ 0.5%[cite: 18]</li>
          <li>Հաճախորդների փոխանցումներ՝ 0.5%[cite: 18]</li>
          <li>Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD[cite: 18]</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 mb-3">Իրավաբանական անձանց համար</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Հաշվի բացում՝ 100,000 դրամ[cite: 18]</li>
          <li>Տարեկան սպասարկում՝ 500,000 ՀՀ դրամ[cite: 18]</li>
          <li>Փակման վճար՝ 0 դրամ[cite: 18]</li>
          <li>Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին՝ 0.5%[cite: 18]</li>
          <li>Հաճախորդների փոխանցումներ՝ 0.5%[cite: 18]</li>
          <li>Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD[cite: 18]</li>
        </ul>
      </div>
    </div>
  )
},
    {
  title: "Հաշվի բացման փուլեր",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <strong className="text-purple-900">Փաստաթղթերի ուղարկում</strong>
          <p className="text-sm mt-1">Ուղարկեք անհրաժեշտ փաստաթղթերը հետևյալ էլ. հասցեին՝ <a href="mailto:primeonline@evoca.am" className="text-purple-700 underline font-medium">primeonline@evoca.am</a>[cite: 19]</p>
        </li>
        <li>
          <strong className="text-purple-900">Առցանց նույնականացում տեսազանգով</strong>
          <p className="text-sm mt-1">Փաստաթղթերի ամբողջական փաթեթը ստանալու հետո մենք կտեղեկացնենք՝ երբ և ինչպես է տեղի ունենալու անձը նույնականացնելու տեսազանգը: Տեսազանգից առաջ կարող են պահանջվել նաև այլ փաստաթղթեր: Բանկի դրական դիրքորոշումից հետո անհրաժեշտ է այլ բանկում գործող հաշվից առնվազն 50 ԱՄՆ դոլար փոխանցում կատարել Evocabank-ում Ձեր անունով բացված հաշվին[cite: 19]:</p>
          <p className="text-sm mt-2">Գումարը ստանալուց հետո նոր հաշիվը կակտիվանա, իսկ փոխանցված գումարը հասանելի կդառնա այդ հաշվի վրա: Փոխանցման մուտքագրման մասին Դուք տեղեկություն կստանաք էլեկտրոնային եղանակով[cite: 19]:</p>
        </li>
        <li>
          <strong className="text-purple-900">Կապ մեզ հետ</strong>
          <p className="text-sm mt-1">Ցանկացած հարցի դեպքում կարող եք գրել օնլայն <a href="mailto:primeonline@evoca.am" className="text-purple-700 underline font-medium">primeonline@evoca.am</a> հասցեին կամ զանգահարել +374 33 625555 հեռախոսահամարին[cite: 19]:</p>
        </li>
      </ul>
    </div>
  )
},
  ];

  const documents = [
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ."
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/accounts')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Evoca խնայողական հաշիվ</button>
              <button onClick={() => handleNavigation('/hy/account-opening-service')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Հաշիվների բացում և սպասարկում</button>    
              <button onClick={() => handleNavigation('/hy/unallocated-metal-accounts')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Առարկայազուրկ մետաղական Հաշիվներ</button>
              <button onClick={() => handleNavigation('/hy/remote-service-for-non-resident-clients')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Հաշիվներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
          </div>

          {/* Top Hero Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Բանկ այցելելն այլևս պարտադիր չէ: Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի[cite: 23]:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" 
                alt="Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Intro Description Paragraph */}
          <div className="text-gray-700 leading-relaxed mb-12 space-y-4">
            <p>
              24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր: Բոլոր մանրունքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, հարկավ, օգտվեք prime սպասարկումից:
            </p>
            <p>
              Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու:
            </p>
            <p className="font-semibold text-gray-900">
              Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում։
            </p>
          </div>

          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordions) */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>
            <div className="space-y-4">
              {accordionSections.map((section, index) => (
                <div 
                  key={index} 
                  className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base sm:text-lg">{section.title}</span>
                    {openSection === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    )}
                  </button>
                  {openSection === index && (
                    <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/25">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Փաստաթղթեր */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-6">
              Փաստաթղթեր
            </h2>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-purple-50/40 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <FileText className="w-5 h-5 text-purple-700 shrink-0" />
                    <span className="text-sm font-medium text-gray-800 truncate group-hover:text-purple-900">{doc}</span>
                  </div>
                  <Download className="w-4 h-4 text-purple-600 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}