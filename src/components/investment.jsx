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
      title: "Նպատակը", 
      desc: "Վարկը տրամադրվում է.\n• ՀՀ տարածքում կամ ՀՀ տարածքից դուրս գործող իրավաբանական անձանց կանոնադրական կապիտալում մասնակցության կամ բաժնեմասնակցության ձեռքբերման կամ որևէ այլ կերպ ՀՀ օրենսդրությամբ թույլատրելի առևտրային գործունեության մեջ ներդրման նպատակով[cite: 10];\n• ՀՀ տարածքից դուրս եկամուտ ստանալու նպատակով, անշարժ կամ շարժական գույքի ձեռքբերման նպատակով[cite: 10]:" 
    },
    { 
      id: 2, 
      title: "Ովքեր կարող են դիմել", 
      desc: "18 - 65 տարեկան ՀՀ ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ամբողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոշշյալ պահանջներին բավարարող համավարկառու:" 
    },
    { 
      id: 3, 
      title: "Վարկավորման արժույթ", 
      desc: "• ՀՀ դրամ[cite: 10]\n• ԱՄՆ դոլար[cite: 10]\n• Եվրո[cite: 10]" 
    },
    { 
      id: 4, 
      title: "Վարկավորման գումար", 
      desc: "16,000,000 - 350,000,000 ՀՀ դրամ[cite: 10]\n40,000 - 700,000 ԱՄՆ դոլար[cite: 10]\n40,000 - 700,000 Եվրո[cite: 10]" 
    },
    { 
      id: 5, 
      title: "Սահմանաչափի տեսակ", 
      desc: "Վարկային գիծ[cite: 10] | Մարման գրաֆիկով վարկ[cite: 10]" 
    },
    { 
      id: 6, 
      title: "Մարման եղանակ", 
      desc: "Չվերականգնվող վարկային գիծ | Անուիտետային[cite: 10]\nՕվվերդրաֆտ | Հավասարաչափ[cite: 10]" 
    },
    { 
      id: 7, 
      title: "Մարման ժամկետը", 
      desc: "Հաստատուն տոկոսադրույքի կիրառման դեպքում՝ 12 - 84 ամիս[cite: 10]\nԼողացող տոկոսադրույքի կիրառման դեպքում՝ 60 - 240 ամիս[cite: 10]" 
    },
    { 
      id: 8, 
      title: "Տարեկան տոկոսադրույք (հաստատուն)", 
      desc: "Անվանական / Առավելագույն փաստացի[cite: 10]\nՀՀ դրամ՝ 15.0% | 16.56% - 18.72%[cite: 10]\nԱՄՆ դոլար՝ 10.0% | 10.92% - 12.95%[cite: 10]\nԵվրո՝ 8.5% | 9.27% - 11.27%[cite: 10]" 
    },
    { 
      id: 9, 
      title: "Տարեկան տոկոսադրույք (լողացող)", 
      desc: "Անվանական / Առավելագույն փաստացի[cite: 10]\nՀՀ դրամ՝ սկսված 14.0%-ից (հաստատուն բաղադրիչ՝ սկսված 5.0%-ից + փոփոխուն բաղադրիչ) | 15.68% - 16.03%[cite: 10]\nԱՄՆ դոլար՝ սկսված 9.2%-ից (հաստատուն բաղադրիչ՝ սկսված 8.2%-ից + փոփոխուն բաղադրիչ) | 10.29% - 10.62%[cite: 10]\nԵվրո՝ սկսված 7.5%-ից (հաստատուն բաղադրիչ՝ սկսված 7.5%-ից + փոփոխուն բաղադրիչ) | 8.44% - 8.76%[cite: 10]\nԼողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ ±4%, սակայն ոչ ավել քան 21%[cite: 10]" 
    },
    { 
      id: 10, 
      title: "Տոկոսադրույքի այլ պայմաններ", 
      desc: "Վարկունակության պայմաններից /առանց վարկունակության գնահատման/ կամ այլ շեղումներով հայտերը Բանկի կողմից կարող են տրամադրվել 0.5% - 10%-ով բարձր տոկոսադրույքով[cite: 11]:" 
    },
    { 
      id: 11, 
      title: "Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք", 
      desc: "ՀՀ տարածքում գործող, ինչպես նաև ոչ ռեզիդենտ այլ բանկերի, վարկային կազմակերպությունների կամ այլ ֆինանսական կառույցների կողմից վարկերի վերաֆինանսավորման դեպքում՝ պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք՝ վաղաժամկետ մարվող մայր գումարի 3%-ի չափով[cite: 11]:" 
    },
    { 
      id: 12, 
      title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
      desc: "Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 11],\nԺամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 11]:" 
    },
    { 
      id: 13, 
      title: "Վարկի տրամադրման եղանակը", 
      desc: "Անկանխիկ[cite: 11]:\nՕվվերդրաֆտի դեպքում՝ Բանկում գործող վճարային քարտերի միջոցով[cite: 11]:" 
    },
    { 
      id: 14, 
      title: "Վարկի վերադարձվելության ապահովման միջոցները", 
      desc: "ՀՀ տարածքում գտնվող Բանկի համար ընունելի անշարժ գույք, տրանսպորտային միջոց, դրամական միջոցներ, այդ թվում` ավանդ, պարտատոմսեր /«Էվոկաբանկ» ԲԸ-ի կողմից թողարկված Պետական պարտատոմս, որոնց մարման ժամկետները չեն կարող վարկի մարման ժամկետից կարճ լինել/: Բացի անշարժ գույքի գրավդրումից վարկից կարող է պահանջվել նաև առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն[cite: 11]:" 
    },
    { 
      id: 15, 
      title: "Վարկ/գրավ հարաբերակցություն", 
      desc: "Բանկի համար ընունելի անշարժ կամ շարժական գույքի ապահովում, որի դեպքում վարկ/գրավ հարաբերակցությունը հաշվարկվում է.\nԱնշարժ գույք - գնահատված արժեքի մինչև 70% /առանց եկամուտների հիմնավորման դեպքում՝ 50%/[cite: 11]:\nՏրանսպորտային միջոց - գնահատված արժեքի մինչև 70%, ընդ որում 60 ամսից ավել մարման ժամկետ ունեցող վարկերի դեպքում տրանսպորտային միջոցի գրավով ապահովված մասը վարկ/գրավ ընդհանուր հարաբերակցության մեջ չի կարող գերազանցել 50%-ը[cite: 11]:\nԴրամական միջոցների ապահովմամբ վարկ/գրավ հարաբերակցությունը հաշվարկվում է․\nՄիևնույն արժույթներով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 95%[cite: 11];\nԱյլ արժույթներով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 80%[cite: 11];\nՄիևնույն արժույթներով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 80%[cite: 11];\nԱյլ արժույթներով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 70%[cite: 11]:" 
    },
    { 
      id: 16, 
      title: "Վարկունակության գնահատում", 
      desc: "Վարկունակության գնահատումն իրականացվում է համաձայն Բանկում գործող ֆիզիկական անձանց անհատական վարկավորման կարգի[cite: 11]:" 
    },
    { 
      id: 17, 
      title: "Ապահովագրություն", 
      desc: "Առանձին դեպքերում՝ կախված գրավի տեսակից կարող է պահանջվել գրավ հանդիսացող գույքի ապահովագրություն՝ Յուրաքանչյուր տարի վարկի մնացորդի չափով[cite: 11]:" 
    },
    { 
      id: 18, 
      title: "Գանձվող վճարներ", 
      desc: "• Վարկի գումարի 0.5%, բայց ոչ պակաս, քան՝ 50.000 ՀՀ դրամ[cite: 11, 12]:\n• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների[cite: 11, 12]:" 
    },
    { 
      id: 19, 
      title: "Վարկի հաստատման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ", 
      desc: "• Վարկի հաստատման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո[cite: 11, 12]:\n• Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացն ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում[cite: 11, 12]:" 
    },
    { 
      id: 20, 
      title: "Այլ պայմաններ", 
      desc: "• Վարկի տրամադրումը Բանկի կողմից մերժվում է, եթե ստացվելիք միջոցների նպատակը հակասում է Բանկի ֆհկ քաղաքականությամբ սահմանված նպատակայնությանը կամ պայմաններին[cite: 12]:\n• 120 ամսից ավել մարման ժամկետով վարկերը տրամադրվում են արտերկրում անշարժ գույք ձեռք բերելու նպատակով[cite: 12]:\n• Առանձին դեպքերում Բանկի որոշմամբ կարող է տրամադրվել Մայր գումարի մարման գծով արտոնյալ ժամանակահատված մինչև 12 ամիս ժամկետով[cite: 12]:\n• Վարկային գծի կամ օվվերդրաֆտի դեպքում Բանկի որոշմամբ կարող է սահմանվել վարկի մարման պարտադիր ժամանակացույց, ինչպես նաև մինչև 1.0% տարեկան տոկոսադրույք չօգտագործված մասի վրա[cite: 12]:\n• Առանձին դեպքերում Բանկը կարող է պահանջել ձեռք բերվող բաժնեմասը/գույքը, որպես լրացուցիչ ապահովություն ավելացնել վարկի ապահովություններին, ընդ որում ՀՀ տարածքից դուրս գտնվող գրավի առարկաները չեն կարող մասնակցել վարկ/գրավ հարաբերակցության հաշվարկմանը[cite: 12]:\n• Եթե ձեռք բերվող բաժնեմասերը ՀՀ-ում գտնվող կազմակերպության բաժնեմասեր են, ապա կարող է պահանջվել տվյալ կազմակերպության համար իրականացնել վարկային պատմության, ինչպես նաև այլ պարտավորությունների /հարկային պարտք, դատական վեճ և այլն/ առկայության ստուգում[cite: 12]:\n• Բանկն իրականացնում է նպատակային մոնիտորինգ՝ վարկի նպատակային օգտագործումը ստուգելու նպատակով, որի համար վարկառուն ապահովում է բոլոր անհրաժեշտ փաստաթղթերը և տեղեկատվության ժամանակին ու ճշգրիտ տրամադրումը: Առաջին նպատակային մոնիտորինգն իրականացվում է լիազոր մարմնի կողմից սահմանված ժամկետներում, որից հետո կարող են սահմանվել տարեկան պարբերականության նպատակային մոնիտորինգներ[cite: 12]:\n• Վարկառուն Բանկի պահանջով ներկայացնում է վարկի օգտագործման նպատակայնությունը հիմնավորող անհրաժեշտ տեղեկատվություն /պայմանագրեր, համաձայնագրեր կամ այլ հավաստող փաստաթղթեր/: Ոչ նպատակային օգտագործման դեպքում Բանկն իրավունք ունի պահանջել վարկի ամբողջական վաղաժամկետ մարում[cite: 12]:" 
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
                Անհատական վարկ «Ներդրումային»

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

                    <div className="mt-6 space-y-3 text-xs text-gray-500 leading-relaxed">
  <p>
    <span className="font-bold text-purple-700">[1]</span> Անշարժ և շարժական գույքի նպատակային և գործառնական նշանակության բովանդակությունը որոշվում է այն պետության իրավունքով, որտեղ գտնվում է տվյալ գույքը, ընդ որում ձեռքբերվող անշարժ գույքը չի կարող դառնալ հիմնական բնակության վայր։
  </p>
  <p>
    <span className="font-bold text-purple-700">[2]</span> Վճարային քարտերի միջոցով տրամադրվող վարկային գծի և օվվերդրաֆտի առավելագույն ժամկետը չի կարող գերազանցել 60 ամիսը։
  </p>
  <p>
    <span className="font-bold text-purple-700">[3]</span> Փաստացի տոկոսադրույքի մեծությունը/արժեքը կարող է նշվածից տարբերվել՝ կախված մարման գրաֆիկից և տոկոսադրույքի շեղումներից։
  </p>
  <p>
    <span className="font-bold text-purple-700">[4]</span> Երևան, Լոռի, Շիրակի և Կոտայքի մարզերում գտնվող անշարժ գույք՝ բնակարան, բնակելի տուն, տարածք /բացառությամբ արտադրական և գյուղատնտեսական նշանակության տարածքների/:
  </p>
</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}