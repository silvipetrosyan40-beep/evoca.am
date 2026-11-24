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
      desc: "Վարկը տրամադրվում է երիտասարդ ընտանիքներին, գոյություն ունեցող բնակելի անշարժ գույք ձեռքբերելու և մշտական բնակվելու նպատակով։ Առանձին դեպքերում, եթե Բանկի հետ համագործակցող կառուցապատող ընկերությունը դիմել է համապատասխան մարմին շենքի ավարտական ակտ ստանալու համար, հիփոթեքային վարկը կարող է տրամադրվել նաև անշարժ գույքի գնման իրավունքի ձեռքբերման նպատակով[cite: 25]." 
    },
    { 
      id: 2, 
      title: "Ովքեր կարող են դիմել", 
      desc: "ՀՀ քաղաքացիները կամ ՀՀ քաղաքացիություն չունեցող այն անձինք, ում ամուսինը հանդիսանում է ՀՀ քաղաքացի։ Ամուսինների գումարային տարիքը չպետք է գերազանցի 70-ը, կամ երիտասարդ միայնակ ծնողը, ում տարիքը չի գերազանցում 35-ը (ներառյալ)[cite: 25]." 
    },
    { 
      id: 3, 
      title: "Համավարկառու", 
      desc: "Վարկառուի ամուսինը և նրանց երկուսի ընտանիքի անդամներից jուրաքանչյուրը (ընտանիքի անդամներ են համարվում ամուսինը, վարկառուի և նրա ամուսնու ծնողները, քույրերը և եղբայրները)։ Համավարկառուների տարիքը չպետք է գերազանցի 65 տարեկանը[cite: 25]." 
    },
    { 
      id: 4, 
      title: "Վայրը", 
      desc: "ՀՀ ամբողջ տարածքում[cite: 25]" 
    },
    { 
      id: 5, 
      title: "Վարկավորման արժույթ", 
      desc: "ՀՀ դրամ[cite: 25]" 
    },
    { 
      id: 6, 
      title: "Վարկի մարման ժամկետը", 
      desc: "120 - 180 ամիս[cite: 25]" 
    },
    { 
      id: 7, 
      title: "Վարկավորման գումար և վարկ/գրավ հարաբերակցություն", 
      desc: "Առաջնային շուկա.\n• Երևանում և ՀՀ մարզերում՝ 27 000 000 ՀՀ դրամ, բայց ոչ ավելի, քան ձեռք բերվող բնակելի անշարժ գույքի արժեքի 80% (կամ մինչև 90%՝ լրացուցիչ պայմանների կամ հիփոթեքային ապահովագրության առկայության դեպքում)[cite: 26].\nԵրկրորդային շուկա.\n• Երևանում և ՀՀ մարզերում՝ 22 500 000 ՀՀ դրամ, բայց ոչ ավելի, քան ձեռք բերվող բնակելի անշարժ գույքի արժեքի 70% (կամ մինչև 90%՝ լրացուցիչ պայմանների դեպքում)[cite: 26]." 
    },
    { 
      id: 8, 
      title: "Տարեկան տոկոսադրույքներ և սուբսիդավորում", 
      desc: "Առաջնային շուկա՝ Բանկի կողմից սահմանված տոկոսադրույք՝ 7.5%, որը չի սուբսիդավորվում[cite: 26].\nԵրկրորդային շուկա՝ Բանկի կողմից սահմանված տոկոսադրույք՝ 6.9%-7.9%, որից՝\n• 2% սուբսիդավորվում է Երևանում բնակելի անշարժ գույքի ձեռքբերման դեպքում[cite: 26].\n• 4% սուբսիդավորվում է ՀՀ մարզերում բնակելի անշարժ գույքի ձեռքբերման դեպքում[cite: 26]." 
    },
    { 
      id: 9, 
      title: "Տարեկան անվանական տոկոսադրույքներ (Ապահովագրական պայմաններով)", 
      desc: "• Բանկի կողմից հաճախորդի փոխարեն կանխավճարի, դժբախտ պատահարներից և գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ Նշված տոկոսադրույք + 0.6%[cite: 27].\n• Բանկի կողմից հաճախորդի փոխարեն դժբախտ պատահարներից և գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ Նշված տոկոսադրույք + 0.4%[cite: 27]." 
    },
    { 
      id: 10, 
      title: "Փաստացի տոկոսադրույք", 
      desc: "Առաջնային շուկա՝ 7.84% - 7.87%[cite: 27]\nԵրկրորդային շուկա՝ 6.76% - 8.80%[cite: 27]" 
    },
    { 
      id: 11, 
      title: "Վարկի տրամադրման ձևը", 
      desc: "Առաջնային շուկա՝ Միանվագ կամ փուլային[cite: 27]\nԵրկրորդային շուկա՝ Միանվագ[cite: 27]" 
    },
    { 
      id: 12, 
      title: "Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք", 
      desc: "Տուգանք չի կիրառվում[cite: 27]" 
    },
    { 
      id: 13, 
      title: "Վարկային պարտավորությունների ուշացման դեպքում վճարվող տույժեր", 
      desc: "• Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 27].\n• Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 27]." 
    },
    { 
      id: 14, 
      title: "Վարկի մարման ձևը", 
      desc: "Ամբողջությամբ վճարվող անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ. վճարումները պետք է կատարվեն ամսական կտրվածքով[cite: 27]." 
    },
    { 
      id: 15, 
      title: "Վարկի ապահովվածություն", 
      desc: "Ձեռք բերվող բնակելի անշարժ գույքը կամ անշարժ գույքի գնման իրավունքը[cite: 27]." 
    },
    { 
      id: 16, 
      title: "Ձեռք բերվող բնակելի անշարժ գույքի առավելագույն արժեք", 
      desc: "Առաջնային շուկա՝ Ձեռք բերման արժեքը՝ ոչ ավելի, քան 30 000 000 ՀՀ դրամ և միևնույն ժամանակ շուկայական արժեքը՝ ոչ ավելի, քան 31 միլիոն ՀՀ դրամ[cite: 27, 28].\nԵրկրորդային շուկա՝ Ձեռք բերման արժեքը՝ ոչ ավելի, քան 25 000 000 ՀՀ դրամ և միևնույն ժամանակ շուկայական արժեքը՝ ոչ ավելի, քան 26 000 000 ՀՀ դրամ[cite: 27, 28]." 
    },
    { 
      id: 17, 
      title: "Ապահովագրություն", 
      desc: "1. Գրավադրված գույքի ապահովագրություն[cite: 28].\n2. Վարկառուի և համավարկառուի/ներ/ի (առկայության դեպքում) դժբախտ պատահարից մահացության դեպքի ապահովագրության վկայագրեր[cite: 28].\n3. Հիփոթեքային պարտավորության ապահովագրություն (անհրաժեշտության դեպքում՝ սահմանված շեմերը գերազանցելիս)[cite: 28]." 
    },
    { 
      id: 18, 
      title: "Այլ պայմաններ", 
      desc: "Անշարժ գույքի ձեռք բերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար, որը սառեցվում է մինչև վարկի տրամադրումը[cite: 28]." 
    },
    { 
      id: 19, 
      title: "Վարկի տրամադրման կամ մերժման որոշումների կայացման ժամկետներ", 
      desc: "Առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում՝ անհրաժեշտ նախնական փաստաթղթերն ամբողջությամբ ներկայացնելուց հետո[cite: 28]." 
    },
    { 
      id: 20, 
      title: "Պահանջվող փաստաթղթերի ցանկ", 
      desc: "• Վարկի տրամադրման դիմում-հայտ[cite: 28].\n• Անձը հաստատող փաստաթղթեր, սոցիալական քարտ[cite: 28].\n• Ծննդյան, ամուսնության վկայականներ[cite: 28].\n• Աշխատանքի վայրից տեղեկանք աշխատավարձի չափի վերաբերյալ (տարժեքը՝ մինչև 30 օրացուցային օր)[cite: 28].\n• Անհատական հաշվի քաղվածք, գույքի գնահատման հաշվետվություն, սեփականության վկայական և այլն[cite: 29]." 
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
          Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»
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