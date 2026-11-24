import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  // Պահում ենք բացված կատեգորիաների անունները (կարող է մի քանիսը կամ մեկը բաց լինել)
  const [openCategories, setOpenCategories] = useState({ 'Սպառողական վարկեր': true });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories = [
    { 
      name: 'Սպառողական վարկեր', 
      subitems: [
        { title: 'Վերանորոգման վարկ EvocaHOME', path: '/hy/about/tariffs' },
        { title: 'Անհատական վարկ «Ներդրումային»', path: '/hy/about/tariffs/individuals-loans/investment' },
        { title: 'Գույքի գրավով ապահովված վարկ', path: '/hy/about/tariffs/individuals-loans/property-secured' },
        { title: 'Անգրավ սպառողական վարկ', path: '/hy/about/tariffs/individuals-loans/unsecured' },
        { title: 'Ոսկու գրավով (լոմբարդային) վարկ', path: '/hy/about/tariffs/individuals-loans/pawnshop' },
        { title: 'Վճարային քարտով օվվերդրաֆտ (վարկային քարտ)', path: '/hy/about/tariffs/individuals-loans/overdraft' },
        { title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ', path: '/hy/about/tariffs/individuals-loans/visa-infinite' },
        { title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ (ծրագրային)', path: '/hy/about/tariffs/individuals-loans/student' },
        { title: 'Evolution', path: '/hy/about/tariffs/individuals-loans/evolution' },
        { title: 'Evoca աշխատավարձային փաթեթի շրջանակնում տրամադրվող վարկ', path: '/hy/about/tariffs/individuals-loans/salary-package' },
        { title: 'Ավտոկայանատեղիի ձեռքբերման վարկ', path: '/hy/about/tariffs/individuals-loans/parking' },
        { title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER', path: '/hy/about/tariffs/individuals-loans/evocapower' },
        { title: 'Հեծանիվի ձեռքբերման վարկ', path: '/hy/about/tariffs/individuals-loans/bicycle' },
        { title: 'Տեղում Ապառիկ', path: '/hy/about/tariffs/individuals-loans/teghum-aparik' },
        { title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ', path: '/hy/about/tariffs/individuals-loans/cash-secured' }
      ] 
    },
    { 
      name: 'Հիփոթեքային վարկեր', 
      subitems: [
        { title: 'Բնակարանային հիփոթեքային վարկ', path: '/hy/about/tariffs/mortgage/apartment' },
        { title: 'Բնակարանային հիփոթեքային վարկեր լողացող տոկոսադրույքով', path: '/hy/about/tariffs/mortgage/floating' },
        { title: 'Ոչ ռեզիդենտ ֆիզիկական անձանց համար բնակարանային հիփոթեքային վարկեր', path: '/hy/about/tariffs/mortgage/non-resident' },
        { title: 'Առևտրային հիփոթեքային վարկեր', path: '/hy/about/tariffs/mortgage/commercial' },
        { title: 'ԱՀԿ-ի ծրագրով ձեռք բերման վարկ', path: '/hy/about/tariffs/mortgage/ahk-acquisition' },
        { title: 'ԱՀԿ-ի ծրագրով վերանորոգման վարկեր', path: '/hy/about/tariffs/mortgage/ahk-renovation' },
        { title: 'ԱՀԿ-ի ծրագրով կառուցապատման վարկեր', path: '/hy/about/tariffs/mortgage/ahk-construction' },
        { title: 'Հիփոթեքային վարկ «երիտասարդ ընտանիքին՝ մատչելի բնակարան»', path: '/hy/about/tariffs/mortgage/youth' },
        { title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին', path: '/hy/about/tariffs/mortgage/karabakh' },
        { title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին', path: '/hy/about/tariffs/mortgage/karabakh-renovation' },
        { title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին', path: '/hy/about/tariffs/mortgage/karabakh-regions' },
        { title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր', path: '/hy/about/tariffs/mortgage/borderline' },
        { title: 'Հիփոթեքային վարկեր զինծառայողներին', path: '/hy/about/tariffs/mortgage/military' },
        { title: 'Հողամասի ձեռքբերման վարկ', path: '/hy/about/tariffs/mortgage/land' },
        { title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով', path: '/hy/about/tariffs/mortgage/micro-renovation' }
      ] 
    },
    { 
      name: 'Ավտովարկեր', 
      subitems: [
        { title: 'Ավտոմեքենայի ձեռք բերման նպատակով վարկեր', path: '/hy/about/tariffs/autoloans/standard' }
      ] 
    },
    { 
      name: 'Լիզինգ', 
      subitems: [
        { title: 'ֆիզիկական անձանց տրանսպորտային միջոցիների լիզինգ', path: '/hy/about/tariffs/leasing/business' }
      ] 
    },
    { 
      name: 'Օնլայն վարկեր', 
      subitems: [
        { title: 'օնլայն օվերդրաֆտներ վճարային քարտերով (վարկային քարտեր)', path: '/hy/about/tariffs/online-loans/instant' }
      ] 
    },
    
  ];

  const evocaHomeData = [
 { 
      id: 1, 
      title: "Վարկի տրամադրման նպատակը", 
      desc: "Կառուցվող կամ գոյություն ունեցող բնակելի անշարժ գույքի ձեռքբերում բնակության նպատակով." 
    },
    { 
      id: 2, 
      title: "Ովքեր կարող են դիմել", 
      desc: "18-65 տարեկան ՀՀ քաղաքացի հանդիսացող ֆիզիկական անձինք, որոնց եկամուտների հիմնական աղբյուրը գտնվում է ՀՀ-ում և ովքեր վարկի սպասարկման ամբողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոշշյալ պահանջներին բավարարող համավարկառու." 
    },
    { 
      id: 3, 
      title: "Տեսակները", 
      desc: "• Ձեռքբերման ստանդարտ վարկեր\n• Ձեռքբերման Կանաչ վարկեր" 
    },
    { 
      id: 4, 
      title: "Վարկավորման արժույթը", 
      desc: "ՀՀ դրամ" 
    },
    { 
      id: 5, 
      title: "Վարկավորման գումար", 
      desc: "• Ստանդարտ վարկեր՝ 2,000,000 - 35,000,000 ՀՀ դրամ\n• Կանաչ վարկեր՝ 2,000,000 - 45,000,000 ՀՀ դրամ" 
    },
    { 
      id: 6, 
      title: "Վարկի մարման ժամկետը", 
      desc: "120 - 240 ամիս" 
    },
    { 
      id: 7, 
      title: "Տարեկան տոկոսադրույքներ", 
      desc: "Ստանդարտ վարկեր.\n• Անվանական՝ 13% | Փաստացի՝ 13.55% - 15.78%\nՁեռքբերման Կանաչ վարկեր.\n• Անվանական՝ 12.5% | Փաստացի՝ 12.97% - 15.19%\nԱյլ պայմաններ (Ապահովագրություն).\n• Բանկի կողմից հաճախորդի փոխարեն կանխավճարի, դժբախտ պատահարների և գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ Նշված տոկոսադրույք + 0.6%\n• Բանկի կողմից հաճախորդի փոխարեն դժբախտ պատահարներից և գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ Նշված տոկոսադրույք + 0.4%" 
    },
    { 
      id: 8, 
      title: "Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք", 
      desc: "Տուգանք չի կիրառվում" 
    },
    { 
      id: 9, 
      title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
      desc: "• ժամկետանց վարկի համար՝ օրական 0.015%,\n• ժամկետանց տոկոսագումարի համար՝ օրական 0.1%." 
    },
    { 
      id: 10, 
      title: "Վարկի մարման ձևը", 
      desc: "Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ. վճարումները պետք է կատարվեն ամսական կտրվածքով." 
    },
    { 
      id: 11, 
      title: "Վարկի վերադարձելիության ապահովման միջոց", 
      desc: "Գոյություն ունեցող բնակելի անշարժ գույքի ձեռք բերման նպատակով տրամադրված վարկերի դեպքում գրավադրվում է ձեռքբերվող բնակելի անշարժ գույքը, իսկ կառուցվող բնակելի անշարժ գույքի ձեռք բերման նպատակով տրամադրված վարկերի դեպքում վարկի ապահովում է հանդիսանում կառուցվող բնակելի անշարժ գույքի գնման իրավունքը և կառուցապատողի հատուկ հաշվին առկա դրամական միջոցների գրավը մինչև անշարժ գույքի նկատմամբ սեփականության իրավունքի գրանցումը, որից հետո գրավ է հանդիսանում անշարժ գույքը." 
    },
    { 
      id: 12, 
      title: "Անշարժ գույքի ձեռքբերման և գնահատված շուկայական առավելագույն արժեքը", 
      desc: "55,000,000 ՀՀ դրամ" 
    },
    { 
      id: 13, 
      title: "Վարկ/գրավ հարաբերակցությունը", 
      desc: "1. Ոչ ավելի, քան բնակելի անշարժ գույքի արժեքի 70%.\n2. Ոչ ավելի, քան ձեռք բերվող բնակելի անշարժ գույքի արժեքի 90%, եթե գրավադրվում է լրացուցիչ բնակելի անշարժ գույք. ընդ որում, ձեռք բերվող և այլ բնակելի անշարժ գույքերի գրավադրման դեպքում, վարկի գումարը չկարող է գերազանցել գրավադրված անշարժ գույքերի ընդհանուր արժեքի 70%-ը.\n3. Ձեռքբերման վարկերի դեպքում (եթե գրավ է դրվում միայն ձեռքբերվող գույքը) վարկի գումարը կարող է կազմել գրավի արժեքի առավելագույնը 90%-ը, եթե առկա է հիփոթեքային պարտավորության ապահովագրություն Վ/Գ գործակցի 70%-ը գերազանցող գումարի չափով." 
    },
    { 
      id: 14, 
      title: "Ապահովագրություն", 
      desc: "1. Гրավադրված գույքի ապահովագրություն.\n2. Վարկառուի և համավարկառուի/ներ/ի (առկայության դեպքում)՝ դժբախտ պատահարից մահացության դեպքի ապահովագրության վկայագրեր։ Ընդ որում համավարկառուի/ներ/ի առկայության դեպքում դժբախտ պատահարից մահացության դեպքի ապահովագրությունը կատարվում է վարկի գումարից վարկառուի և համավարկառուի/ներ/ի եկամուտներին համամասն.\n3. Վարկի գումարը կարող է կազմել առավելագույնը գրավի արժեքի 90%-ը, եթե առկա է հիփոթեքային պարտավորության ապահովագրություն Վ/Գ գործակցի 70%-ը գերազանցող գումարի չափով։ Հիփոթեքային պարտավորության ապահովագրությունը պետք է գործի առնվազն մինչև այն պահը, երբ վարկառուն վարկի գումարի նկատմամբ կկատարի Վ/Գ գործակցի 70%-ը գերազանցող գումարի չափով վճարում." 
    },
    { 
      id: 15, 
      title: "Վարկի տրամադրման եղանակը", 
      desc: "Անկանխիկ" 
    },
    { 
      id: 16, 
      title: "Այլ պայմաններ", 
      desc: "• Անշարժ գույքի ձեռք բերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար, որը սառեցվում է մինչև վարկի տրամադրումը.\n• Ձեռքբերման հիփոթեքային բոլոր վարկերի դեպքում, երբ բնակելի անշարժ գույքը ձեռք է բերվում կառուցապատողից, շենքը պետք է ունենա էներգետիկ անձնագիր, որում շենքի ԷԱ դասը առնվազն B է." 
    },
    { 
      id: 17, 
      title: "Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ", 
      desc: "• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո.\n• Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացն ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում." 
    }
];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-purple-700 font-bold bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/reports')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հաշվետվություններ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/announcements')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հայտարարություններ
                </button>
              </nav>
            </div>

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap overflow-x-auto">
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/individuals-loans')} 
                  className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
                >
                  Վարկեր ֆիզիկական անձանց
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/corporate-loans')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Վարկեր իրավաբանական անձանց
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/commissions')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Միջնորդավճարների սակագները
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/deposits')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Ավանդների սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/archive')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Արխիվ
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Սակագներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Վարկեր ֆիզիկական անձանց</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ձախ կողմի բացվող-փակվող մենյու */}
            <div className="lg:col-span-4 space-y-3">
              {categories.map((cat, idx) => {
                const isOpen = openCategories[cat.name];
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                    <button 
                      onClick={() => toggleCategory(cat.name)}
                      className={`w-full flex items-center justify-between p-4 text-left font-semibold text-sm transition-colors cursor-pointer border-none ${
                        isOpen ? 'text-purple-900 bg-purple-50/50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isOpen && <span className="w-1 h-5 bg-purple-700 rounded-full inline-block"></span>}
                        {cat.name}
                      </span>
                      <span className={`text-purple-700 transition-transform duration-300 text-xs ${isOpen ? 'transform rotate-180' : ''}`}>
                        ⌄
                      </span>
                    </button>

                    {isOpen && cat.subitems.length > 0 && (
                      <div className="px-4 py-3 space-y-2 bg-purple-50/20 border-t border-purple-100/50">
                        {cat.subitems.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavigation(sub.path)}
                            className="w-full text-left text-xs font-semibold text-purple-900 py-1.5 pl-3 border-l-2 border-purple-700 hover:bg-purple-100/50 transition-colors bg-transparent cursor-pointer block"
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Աջ կողմի աղյուսակ */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">
            ԱՀԸ-ի ծրագրով ձեռք բերման վարկ
              </h2>

                
              <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                <table className="w-full text-left border-collapse text-sm text-gray-700">
                  <tbody>
                    {evocaHomeData.map((row) => (
                      <tr key={row.id} className="border-b border-purple-50 hover:bg-purple-50/10 transition-colors">
                        <td className="p-4 font-medium text-gray-500 w-16 text-center align-top border-r border-purple-50">
                          {row.id}.
                        </td>
                        <td className="p-4 font-semibold text-neutral-900 w-1/3 align-top border-r border-purple-50">
                          {row.title}
                        </td>
                        <td className="p-4 text-gray-700 align-top whitespace-pre-line">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>

                   
        </main>
      </div>

      <Footer />
    </div>
  );
}