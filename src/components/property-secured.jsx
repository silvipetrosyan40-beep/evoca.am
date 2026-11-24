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
      desc: "Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով[cite: 13]:" 
    },
    { 
      id: 2, 
      title: "Ովքեր կարող են դիմել", 
      desc: "18-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ամբողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոշշյալ պահանջներին բավարարող համավարկառու[cite: 13]:" 
    },
    { 
      id: 3, 
      title: "Վարկավորման գումար", 
      desc: "Վարկունակության գնահատմամբ[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 3,000,000 - 150,000,000 ՀՀ դրամ[cite: 13]\n• Տրանսպորտային միջոցի գրավադրմամբ՝ 5,000,000 - 50,000,000 ՀՀ դրամ[cite: 13]\nԱռանց վարկունակության գնահատման[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 3,000,000 - 100,000,000 ՀՀ դրամ[cite: 13]" 
    },
    { 
      id: 4, 
      title: "Վարկավորման արժույթ", 
      desc: "ՀՀ դրամ[cite: 13]" 
    },
    { 
      id: 5, 
      title: "Մարման ժամկետ", 
      desc: "Հաստատուն տոկոսադրույքի դեպքում[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 24 - 84 ամիս[cite: 13]\n• Տրանսպորտային միջոցի գրավադրմամբ՝ 60 ամիս[cite: 13]\nԼողացող տոկոսադրույքի դեպքում (անշարժ գույքի դեպքում)՝ 36 - 180 ամիս[cite: 13]" 
    },
    { 
      id: 6, 
      title: "Տարեկան անվանական տոկոսադրույք", 
      desc: "Վարկունակության գնահատմամբ[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 14% - 17%[cite: 13]\n• Տրանսպորտային միջոցի գրավադրմամբ՝ 18%[cite: 13]\nԱռանց վարկունակության գնահատման[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 15% - 18%[cite: 13]" 
    },
    { 
      id: 7, 
      title: "Տարեկան փաստացի տոկոսադրույք", 
      desc: "Վարկունակության գնահատմամբ[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 15.23% - 21.98%[cite: 13]\n• Տրանսպորտային միջոցի գրավադրմամբ՝ 17.38% - 20.95%[cite: 13]\nԱռանց վարկունակության գնահատման[cite: 13].\n• Անշարժ գույքի գրավադրմամբ՝ 16.38% - 23.20%[cite: 13]" 
    },
    { 
      id: 8, 
      title: "Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ", 
      desc: "• Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ՝ սկսված 5%-ից + փոփոխուն բաղադրիչ[cite: 13]:\n• Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույքը ±4%, սակայն ոչ ավել քան 21%[cite: 13]:\n• Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսվաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող Կյանքում փաստացի հրապարակված տոկոսադրույքը[cite: 13]:" 
    },
    { 
      id: 9, 
      title: "Վարկ/գրավ հարաբերակցություն", 
      desc: "Վարկունակության գնահատմամբ[cite: 14].\n• Անշարժ գույքի գրավադրման դեպքում՝ գնահատված արժեքի մինչև 80%[cite: 14]\n• Տրանսպորտային միջոցի գրավադրման դեպքում՝ գնահատված արժեքի մինչև 60%[cite: 14]\nԱռանց վարկունակության գնահատման[cite: 14].\n• Անշարժ գույքի գրավադրման դեպքում՝ գնահատված արժեքի մինչև 60%[cite: 14]" 
    },
    { 
      id: 10, 
      title: "Վարկի վերադարձելիության ապահովման միջոցները", 
      desc: "• Անշարժ գույք (բացառությամբ արտադրական տարածքների)[cite: 14]:\n• Ռուսական արտադրության՝ մինչև 3 տարվա վաղեմության տրանսպորտային միջոց[cite: 14].\n• Ոչ ռուսական արտադրության՝ մինչև 7 տարվա վաղեմության տրանսպորտային միջոց[cite: 14].\n• Կարող է պահանջվել ֆիզիկական կամ իրավաբանական անձի երաշխավորություն[cite: 14]:" 
    },
    { 
      id: 11, 
      title: "Ապահովագրություն", 
      desc: "Միայն տրանսպորտային միջոցի գրավադրման դեպքում գրավ հանդիսացող տրանսպորտային միջոցի ապահովագրություն յուրաքանչյուր տարի առնվազն վարկի մնացորդի չափով[cite: 14]:" 
    },
    { 
      id: 12, 
      title: "Վարկի մարման ժամանակացույց", 
      desc: "• Անուիտետային (ամսական)[cite: 14]\n• Հավասարաչափ (ամսական)[cite: 14]\n• Ճկուն գրաֆիկ (տոկոսների վճարում առավելագույնը 36 ամիս)[cite: 14]\n• Վարկային գիծ (սահմանաչափը տրամադրվում է տարեկան հաստատուն տոկոսադրույքով, կարող է սահմանվել 0.5%-1% տոկոսադրույք չօգտագործվող մասի համար)[cite: 14]" 
    },
    { 
      id: 13, 
      title: "Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք", 
      desc: "Սպառողական կրեդիտավորման մասին ՀՀ օրենքով կարգավորվող վարկերի դեպքում՝ Տուգանք չի կիրառվում[cite: 14]:\nՍպառողական կրեդիտավորման մասին ՀՀ օրենքով չկարգավորվող վարկերի դեպքում՝ Այլ բանկերի կամ վարկային կազմակերպությունների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք՝ վաղաժամկետ մարվող մայր գումարի 1%-ի չափով[cite: 14]:" 
    },
    { 
      id: 14, 
      title: "Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր", 
      desc: "• Ժամկետանց վարկի համար՝ օրական 0.015%[cite: 14]\n• Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%[cite: 14]" 
    },
    { 
      id: 15, 
      title: "Վարկի տրամադրման եղանակ", 
      desc: "Անկանխիկ (վարկի գումարը մուտքագրվում է հաճախորդի բանկային հաշվին)[cite: 14]:" 
    },
    { 
      id: 16, 
      title: "Գանձվող վճարներ", 
      desc: "• Տրամադրման միանվագ գանձվող միջնորդավճար՝ պայմանագրային գումարի 0.3% չափով (15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկերի դեպքում՝ ոչ ավել քան 100,000 ՀՀ դրամ)[cite: 14]:\n• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների[cite: 14]:" 
    },
    { 
      id: 17, 
      title: "Վերաֆինանսավորման դեպքում", 
      desc: "• Վերաֆինանսավորվող վարկի նվազագույն գումարը՝ սկսված 10,000,000 ՀՀ դրամից[cite: 15]:\n• Վերաֆինանսավորվող վարկը պետք է սպասարկված լինի առնվազն 12 ամիս[cite: 15]:\n• Գործող վարկային պայմանագրի տարեկան տոկոսադրույքի նվազեցում՝ մինչև 3%-ով, ոչ պակաս քան 14%[cite: 15]:\n• Վերաֆինանսավորման հետ կապված ծախսերն իրականացվում է Բանկի հաշվին (15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկային պայմանագրերի դեպքում, պայմանագրի կնքումից սկսած առաջին 36 ամիսների ընթացքում վարկի ամբողջական վաղաժամկետ մարման դեպքում Վարկառուն պարտավորվում է կատարել Բանկի կողմից իրականացված ծախսերի փոխհատուցում)[cite: 15]:\n• Վերաֆինանսավորման դեպքում միանվագ միջնորդավճար չի գանձվում[cite: 15]:\n• Վարկառուն և գրավատուն պարտադիր չէ, որ լինեն նույն անձը[cite: 15]:\n• Մնացած դրույթները կարգավորվում են ստանդարտ ընթացակարգով[cite: 15]:" 
    },
    { 
      id: 18, 
      title: "Այլ պայմաններ", 
      desc: "• Եթե վարկի գումարը գերազանցում է գրավի արժեքի 30%-ը և Վարկառուի/երաշխավորի Fico Սքորը պետք է լինի 510 և բարձր, միևնույն ժամանակ Հաճախորդը չպետք է ունենա վերջին 1 տարվա ընթացքում վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը[cite: 15]:\n• Առանց վարկունակության գնահատման հայտերի դեպքում վարկառուն և գրավատուն պետք է լինեն նույն անձը, իսկ տարբեր անձանց դեպքում՝ պետք է լինեն համատեղ տնտեսություն վարող անձինք (նույն հարկի տակ բնակվող անձինք)[cite: 15]:\n• *Վարկային գծի սահմանաչափը վերականգնվող է, ամսական նվազագույն մարման պահանջով /առանց արտոնյալ սահմանաչափի/[cite: 15]: Վարկային սահմանաչափը տրամադրվում է Բանկի վճարային քարտերի միջոցով[cite: 15]: Քարտապանը պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը /նվազագույնը՝ 5,000 ՀՀ դրամ/ և կուտակված տոկոսագումարները մինչև քաղվածքում նշված վերջնաժամկետը[cite: 15]: Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչև հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը[cite: 15]: Քաղվածքի օրն է մինչև յուրաքանչյուր ամսվա 10-ը[cite: 15]: Վճարման վերջնաժամկետն է յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը)[cite: 15]: Վարկային գծի գծայնության ժամկետն առավելագույնը կարող է սահմանվել 60 ամիս[cite: 15]:" 
    },
    { 
      id: 19, 
      title: "Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ", 
      desc: "• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տասը) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո[cite: 15]:\n• Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացն ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում[cite: 15]:" 
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
                Գույքի գրավով ապահովված վարկ
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
    <span className="font-bold text-purple-700">[1]</span> Նշված տոկոսադրույքները կիրառվում են, եթե գրավադրվող տրանսպորտային միջոցի ապահովագրության կնքումը ապահովվում է Բանկի կողմից և Բանկի հաշվին: Ապահովագրությունը վարկառուի կողմից և վարկառուի հաշվին կատարվելու դեպքում կարող է կիրառվել նշված տոկոսադրույքից 1% ցածր տոկոսադրույք:
  </p>
 
</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}