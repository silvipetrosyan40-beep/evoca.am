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
    name: 'Վարկեր իրավաբանական անձանց',
    subitems: [
      { title: 'Խոշոր և ՓՄՁ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans' },
      { title: 'Վարկային գիծ', path: '/hy/about/tariffs/corporate-loans/credit-line' },
      { title: 'Փոքր և միջին բիզնեսի վարկավորում', path: '/hy/about/tariffs/corporate-loans/sme' },
      { title: 'Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ', path: '/hy/about/tariffs/corporate-loans/deposit-secured' },
      { title: 'Վարկեր ԳՔՀ - ԷԱ ՓՄՁ-ների համար ծրագիր', path: '/hy/about/tariffs/corporate-loans/gkf-ea-sme' },
      { title: 'Պարզ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans/simple-business' },
      { title: 'Վարկ՝ ուղղված տնտեսության արդիականացման նպատակային ծրագրի շրջանակում արտադրողականության խթանմանը (գործելու է մինչև 31.12.2026թ.)', path: '/hy/about/tariffs/corporate-loans/modernization' },
      { title: 'Evoca GO', path: '/hy/about/tariffs/corporate-loans/evoca-go' },
      { title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/kfw-green' },
      { title: 'Բանկային երաշխիքներ', path: '/hy/about/tariffs/corporate-loans/bank-guarantees' },
      { title: 'Ֆակտորինգային ֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/factoring' },
      { title: 'Աշխատավարձային նախագծի պայմաններ', path: '/hy/about/tariffs/corporate-loans/salary-project' },
      { title: 'KFW բանկի կողմից ֆինանսավորվող «Միկրո, Փոքր և Միջին Ձեռներեցության ֆինանսավորում»', path: '/hy/about/tariffs/corporate-loans/kfw-mmsme' },
      { title: 'Լիզինգ', path: '/hy/about/tariffs/corporate-loans/leasing' },
      { title: 'Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա', path: '/hy/about/tariffs/corporate-loans/pos-business-loan' },
      { title: 'Բիզնես Օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա', path: '/hy/about/tariffs/corporate-loans/pos-overdraft' },
      { title: 'Արագ բիզնես վարկ', path: '/hy/about/tariffs/corporate-loans/fast-business-loan' },
      { title: 'Բիզնես վարկերի վերաֆինանսավորում', path: '/hy/about/tariffs/corporate-loans/business-refinancing' }
    ]
  }
    
    
    
    
  ];

  const evocaHomeData = [
{ 
        id: 1, 
        title: "Վարկատեսակ", 
        desc: "Առևտրային վարկ, լիզինգ[cite: 28]" 
      },
      { 
        id: 2, 
        title: "Նպատակային ուղղություն", 
        desc: "• Վերականգնվող էներգիայի հիման վրա էլեկտրակայանների կառուցում/վերակառուցում/ընդլայնում՝ ՎԷԿ[cite: 28]\n• Էներգաարդյունավետ/էներգախնայող ներդրումների իրականացում՝ ԷԱՆ[cite: 28]" 
      },
      { 
        id: 3, 
        title: "Արժույթ", 
        desc: "ՀՀ դրամ[cite: 28]" 
      },
      { 
        id: 4, 
        title: "Վարկառու", 
        desc: "ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր[cite: 28]" 
      },
      { 
        id: 5, 
        title: "Նպատակ", 
        desc: "• Հիմնական միջոցների ձեռքբերում/կապիտալ ներդրում[cite: 28]\n• Շրջանառու միջոցների համալրում[cite: 28]\n• Այլ ներդրումներ, որոնք համապատասխանում են ծրագրի պահանջներին:[cite: 28]" 
      },
      { 
        id: 6, 
        title: "Մարման ժամկետը", 
        desc: "• Մինչև 120 ամիս՝ ՎԷԿ-ի դեպքում[cite: 28]\n• Մինչև 60 ամիս՝ ԷԱՆ-ի դեպքում[cite: 28]" 
      },
      { 
        id: 7, 
        title: "Վարկի/լիզինգի մայր գումարի արտոնյալ ժամանակահատված (ոչ պարտադիր)", 
        desc: "Մինչև 6 ամիս[cite: 28]" 
      },
      { 
        id: 8, 
        title: "Տարեկան անվանական տոկոսադրույքը", 
        desc: "• ՎԷԿ-ի դեպքում՝ 9% - 9.5% (Ընդ որում՝ ՎԷԿ-ի ՖԿ-150 վարկի/լիզինգի դեպքում՝ 9.5%, մնացած ՎԷԿ-ի դեպքերում՝ 9%)[cite: 28]\n• ԷԱՆ-ի դեպքում՝ 10.25% - 10.50%[cite: 28]" 
      },
      { 
        id: 9, 
        title: "Տարեկան փաստացի տոկոսադրույք", 
        desc: "• Մինչև 10%՝ ՎԷԿ-ի դեպքում[cite: 28]\n• Մինչև 10.75%՝ ԷԱՆ-ի դեպքում[cite: 28]" 
      },
      { 
        id: 10, 
        title: "Վարկի/լիզինգի տրամադրման եղանակ", 
        desc: "• ՎԷԿ-ի դեպքում՝ միանվագ կամ փուլային, ընդ որում փուլային տրամադրման դեպքում վերջին փուլի տրամադրման ենթակա գումարը չի կարող գերազանցել վարկի պայմանագրային գումարի 20%-ը՝ համաձայն Ծրագրի պահանջների:[cite: 28]\n• ԷԱՆ-ի դեպքում՝ միանվագ:[cite: 28]\nՎարկի յուրաքանչյուր մասնաբաժնի տրամադրումն իրականացվում է անկանխիկ՝ Վարկառուի բանկային հաշվին։ Լիզինգի դեպքում յուրաքանչյուր մասնաբաժնի տրամադրումն իրականացվում է մատակարարի բանկային հաշվին:[cite: 28]" 
      },
      { 
        id: 11, 
        title: "Վարկի/լիզինգի օգտագործման եղանակ", 
        desc: "Վարկի դեպքում՝ անկանխիկ/կանխիկ, լիզինգի դեպքում՝ միայն անկանխիկ[cite: 28]" 
      },
      { 
        id: 12, 
        title: "Մարման եղանակ", 
        desc: "• Անուիտետային[cite: 28]\n• Զուգանաչափձ[cite: 28]" 
      },
      { 
        id: 13, 
        title: "Ուլտրային սահմանափակումներ", 
        desc: "https://www.ifc.org/en/what-we-do/sector-expertise/sustainability/ifc-exclusion-list-2007[cite: 28]" 
      },
      { 
        id: 14, 
        title: "Գրավ", 
        desc: "• Անշարժ և շարժական գույք:[cite: 29]\n• Ավանդային կամ ընթացիկ հաշիվների դրամական միջոցներ:[cite: 29]\n• Ոսկու ստանդարտացված ձուլակտորներ կամ զարդեր:[cite: 29]\n• Պետական կարճաժամկետ պարտատոմսեր կամ այլ արժեթղթեր:[cite: 29]\nԱնհրաժեշտության դեպքում՝ այլ գրավների առկայության պարագայում կարող են գրավ ընդունվել նաև շրջանառու միջոցները և պատրաստի արտադրանքը (հաշվի առնելով այլ գրավների իրացվելիության աստիճանը կամ վարկ/գրավ հարաբերակցության չափը, վարկավորման ժամկետը, հաճախորդի բնութագիրը և այլն)։[cite: 29]\nԼրացուցիչ պայման - Բիզնեսի հիմնադիրների/իրական շահառուների անձնական երաշխավորությունների առկայությունը պարտադիր է, ինչպես նաև որպես լրացուցիչ ապահովում Բանկը կարող է պահանջել նաև այլ ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորություն:[cite: 29]" 
      },
      { 
        id: 15, 
        title: "Վարկ/գրավ ընդունելի սահմանաչափերը", 
        desc: "• Անշարժ գույքի և այլ հիմնական միջոցների դեպքում՝ գնահատված արժեքի մինչև 70%-ի չափով:[cite: 29]\n• Պետական կարճաժամկետ պարտատոմսերի դեպքում՝ անվանական արժեքի մինչև 95%-ի չափով:[cite: 29]\n• Այլ արժեթղթերի դեպքում՝ գնահատված արժեքի մինչև 70%-ի չափով:[cite: 29]\n• Ոսկու ստանդարտացված ձուլակտորների և թանկարժեք մետաղների զարդերի դեպքում՝ գնահատված արժեքի մինչև 95%-ի չափով:[cite: 29]\n• Դրամական միջոցների (ավանդային և ընթացիկ հաշվի դեպքում)՝ մինչև 90%-ի չափով:[cite: 29]\n• Շրջանառու միջոցների դեպքում՝ գնահատված արժեքի մինչև 50%-ի չափով:[cite: 29]" 
      },
      { 
        id: 16, 
        title: "Ապահովում", 
        desc: "Վարկի դեպքում՝\n• Իրավաբանական անձի կամ ֆիզիկական անձի երաշխավորություն՝ մինչև 10 մլն ՀՀ դրամ վարկերի դեպքում:[cite: 29]\n• Գրավ՝ 10,000,001 և ավել վարկերի դեպքում:[cite: 29]\nԼիզինգի դեպքում՝\n• Լիզինգի առարկայից բացի ապահովություն կարող է լինել իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն, այլ գրավ:[cite: 29]" 
      },
      { 
        id: 17, 
        title: "Երաշխավոր", 
        desc: "ՀՀ ռեզիդենտ իրավաբանական անձ (ներառյալ անհատ ձեռնարկատեր), ֆիզիկական անձ[cite: 29]" 
      },
      { 
        id: 18, 
        title: "Երաշխավորի գործունեության նկատմամբ պահանջ (միայն վարկի դեպքում)", 
        desc: "• Իրավաբանական անձ երաշխավորի դեպքում՝ նվազագույնը 6 ամիս գրանցված բիզնես գործունեություն:[cite: 29]\n• Ֆիզիկական անձ երաշխավորի դեպքում՝ կայուն եկամտի աղբյուրներ (աշխատավարձ, վարձակալությամբ հանձնված գույք, շահաբաժին և այլն) և/կամ հանդիսանում է անշարժ գույքի սեփականատեր:[cite: 29]" 
      },
      { 
        id: 19, 
        title: "Երաշխավորի վարկային պատմության նկատմամբ պահանջ (միայն վարկի դեպքում)", 
        desc: "Ֆիզիկական անձ երաշխավորի դեպքում՝\n• դրական վարկային պատմություն (վերջին 12 ամսվա ընթացքում հանրագումարային ուշացումների քանակը չի գերազանցում 30 օրը և միանվագ ուշացումը չի գերազանցում 15 օրը):[cite: 30]\n• հարցման օրվա դրությամբ գործող դասակարգման և գործող ժամկետանց վարկերի և/կամ երաշխավորության և/կամ 100,000 ՀՀ դրամը գերազանցող ԴԱՀԿ արգելանքի բացակայություն (100,000 ՀՀ դրամը գերազանցող արգելանքների առկայության պարագայում հաճախորդը կարող է ներկայացնել համապատասխան վճարումները հիմնավորող փաստաթղթեր):[cite: 30]\nԻրավաբանական անձ երաշխավորի դեպքում՝\n• դրական վարկային պատմություն (վերջին 12 ամսվա ընթացքում հանրագումարային ուշացումների քանակը չի գերազանցում 30 օրը և միանվագ ուշացումը չի գերազանցում 15 օրը):[cite: 30]\n• վերջին 6 ամիսներին հարկային հաշվետվություններով ներկայացված հասույթը պետք է գերազանցի 100,000 ՀՀ դրամը:[cite: 30]\n• հարցման օրվա դրությամբ գործող դասակարգման և գործող ժամկետանց վարկերի և/կամ երաշխավորության և/կամ 100,000 ՀՀ դրամը գերազանցող ԴԱՀԿ արգելանքի բացակայություն:[cite: 30]" 
      },
      { 
        id: 20, 
        title: "Վարկառուի գործունեության և վարկային պատմության նկատմամբ պահանջ", 
        desc: "• Վարկառուի նվազագույնը 6 ամիս գրանցված բիզնես գործունեություն:[cite: 30]\n• Նախորդ 12 ամիսների ընթացքում վարկային պարտավորությունների գծով դասակարգումների բացակայություն, իսկ մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը և միանվագ ժամկետանց օրերը չպետք է գերազանցեն 15 օրը:[cite: 30]\n• Գործող ժամկետանց և/կամ դասակարգված վարկային պարտավորությունների բացակայություն (ներառյալ տրամադրված երաշխավորությունների գծով):[cite: 30]\n• Վերջին 36 ամիսների ընթացքում ոչ ստանդարտ և ավելի խիստ դասով դասակարգված վարկային պարտավորության բացակայություն:[cite: 30]\n• Միայն երաշխավորությամբ տրամադրվող վարկերի դեպքում՝ Վարկառուի գրավով չապահովված վարկերի/բանկային քարտերի քանակը պետք է լինի ոչ አվելի 5-ից, և դրանց մնացորդի հանրագումարը չպետք է գերազանցի 10,000,000 ՀՀ դրամը կամ համարժեք արտարժույթը, ընդ որում վարկային գծերը և օվերդրաֆտները հաշվարկին մասնակցում են պայմանագրային գումարի չափով՝ ենթակա չէ հրապարակման:[cite: 30]" 
      },
      { 
        id: 21, 
        title: "Գանձվող վճարներ", 
        desc: "• Վարկային/լիզինգի հայտի ուսումնասիրման վճար - 0 ՀՀ դրամ:[cite: 30]\n• Վարկային հաշվի սպասարկման վճար - 0 ՀՀ դրամ:[cite: 30]\n• Վարկի գումարը կանխիկ ստանալու դեպքում - գանձում ենք բանկային հաշվից կանխիկացման վճար՝ ըստ Բանկի գործող սակագների:[cite: 30]" 
      },
      { 
        id: 22, 
        title: "Ապահովագրություն", 
        desc: "Վարկերի դեպքում՝ ըստ անհրաժեշտության։ Լիզինգի դեպքում՝ համաձայն Բանկի դիրքորոշման:[cite: 30]" 
      },
      { 
        id: 23, 
        title: "Վարկի/լիզինգի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք", 
        desc: "Տուգանք չի կիրառվում[cite: 31]" 
      },
      { 
        id: 24, 
        title: "Ժամկետանց պարտավորությունների մարման տույժեր", 
        desc: "Յուրաքանչյուր ժամկետանց օրվա համար Բանկն իրավունք ունի հաշվարկել տույժ՝ սկսված ուշացման առաջին օրվանից՝\n• ժամկետանց մայր գումարի համար՝ օրական 0.015%,[cite: 31]\n• ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:[cite: 31]" 
      },
      { 
        id: 25, 
        title: "Պետական տուրքեր և այլ ծախսեր", 
        desc: "• ՀՀ պետական իրավասու մարմիններում վճարվող պետտուրք՝ գրավի պայմանագրի վավերացման և գրանցման համար:[cite: 31]\n• Գրավադրվող արժեքների գնահատման ծառայության արժեքը՝ Բանկի հետ համագործակցող անկախ գնահատող կազմակերպությունների սահմանած սակագների համաձայն:[cite: 31]" 
      },
      { 
        id: 26, 
        title: "Այլ դրույթներ", 
        desc: "Վարկային հայտերը ենթակա են մերժման, եթե չեն բավարարում Ծրագրի պահանջներին:[cite: 31]" 
      },
      { 
        id: 27, 
        title: "Վարկերի/լիզինգի տրամադրման համար իրականացվում է նվազագույնը նախորդ 6 ամիսների գործունեության ֆինանսական վերլուծություն", 
        desc: "—[cite: 31]" 
      },
      { 
        id: 28, 
        title: "Վարկի/լիզինգի գումարի օգտագործումը պետք է լինի 100% փաստաթղթավորված", 
        desc: "—[cite: 31]" 
      }
    ]

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
    onClick={() => handleNavigation('/hy/about/tariffs')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Վարկեր ֆիզիկական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/corporate-loans')} 
    className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
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
            <span className="text-gray-800 font-medium">Վարկեր իրավաբանական անձանց</span>
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
           KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում
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