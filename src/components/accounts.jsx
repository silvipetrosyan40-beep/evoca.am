import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/accounts')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0"> Evoca խնայողական հաշիվ</button>
              <button onClick={() => handleNavigation('/hy/account-opening-service')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Հաշիվների բացում և սպասարկում </button>    
              <button onClick={() => handleNavigation('/hy/unallocated-metal-accounts')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Առարկայազուրկ մետաղական Հաշիվներ</button>
              <button onClick={() => handleNavigation('/hy/remote-service-for-non-resident-clients')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</button>
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
            <span className="text-gray-800 font-medium">Evoca խնայողական հաշիվ</span>
          </div>

          {/* ՔԱՐՏԵՐԻ ԸՆԴՀԱՆՈՒՐ ԲԼՈԿ՝ ՏԱՐԱԾՈՒԹՅԱՄԲ (space-y-6) */}
          <div className="space-y-6">

            {/* 1. ՀԵՐՈ ԲԼՈԿ (ԿԵՆՏՐՈՆԱՑՎԱԾ ՏԵՔՍՏՈՎ ԵՎ ՆԿԱՐՈՎ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Evoca խնայողական հաշիվ
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Ստացիր եկամուտ՝ պարզապես գումարդ պահելով խնայողական հաշվիդ վրա:
                </p>
              </div>
              <div className="w-full lg:w-[480px] h-72 sm:h-80 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-gray-50">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17906902726456/780x585.png" 
                  alt="Evoca խնայողական հաշիվ" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 2. ՀԻՄՆԱԿԱՆ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ ԵՎ ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-800">
              <div>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  Գումարդ ավելանա՞ն, թե՞ միշտ հասանելի մնա: Այլևս պետք չէ ընտրել։ <strong className="text-purple-800">Evoca խնայողական հաշվի</strong> միջոցով կարող ես միաժամանակ և՛ խնայել, և՛ ավելացնել գումարդ, և անհրաժեշտ պահին ունենալ դրա հասանելիությունը:
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Պահիր գումարդ Evoca խնայողական հաշվին և ստացիր մինչև <strong className="text-purple-800">5.09% տարեկան տոկոսային եկամտաբերություն</strong>: Իսկ երբ գումարդ անհրաժեշտ լինի, պարզապես փոխանցիր այն Evocabank-ում գործող քո մեկ այլ հաշվին:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Գումարի աճ</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Հաշվի դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր:</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Միշտ հասանելիություն</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Այս պահին հարկավո՞ր է գումարը: Փոխանցիր այն Evocabank-ում գործող քո այլ հաշվին և օգտագործիր:</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Ոչ մի սահմանափակում</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Այսօր՝ մի փոքր քիչ, հաջորդ ամիս՝ ավելի շատ: Չկա պարտադիր ժամկետ կամ համալրման նվազագույն գումար:</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Նախընտրելի արժույթ</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ եվրոյով:</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Ինչո՞ւ սկսել գումար կուտակել հենց այսօր:</h3>
                <p className="text-gray-700 font-medium mb-4">Քանի որ՝</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Հաշվի բացումն ու սպասարկումն անվճար են,</li>
                  <li>Բացման և համալրման նվազագույն գումար չկա,</li>
                  <li>Գործարքի նվազագույն չափ չկա,</li>
                  <li>Խնայելու պարտադիր ժամկետ չկա,</li>
                  <li>Հաշիվը կարող ես համալրել կամայական պահի՝ Evocabank-ում գործող քո այլ հաշվից:</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>Եկամտաբերությունը կախված է հաշվիդ մնացորդից և ընտրված արժույթից:</li>
                  <li>Եթե օրվա վերջում հաշվիդ մնացորդը համապատասխանում է տվյալ արժույթի համար սահմանված նվազագույն շեմին, այդ օրվա համար հաշվարկվում է տոկոսագումար: Նվազագույն շեմերին և այլ պայմաններին կարող եք ծանոթանալ <a href="#terms" className="text-purple-700 underline font-semibold">այստեղ</a>:</li>
                  <li>Տոկոսները հաշվարկվում են ամեն օր, իսկ կուտակված տոկոսագումարը փոխանցվում է հաշվիդ՝ յուրաքանչյուր եռամսյակի ավարտից հետո՝ հաջորդ ամսվա 1-ին օրը:</li>
                </ul>
              </div>

              <div className="text-xs text-gray-500 pt-4 border-t border-gray-100 leading-relaxed">
                Մեր և Ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային առաջարկ (օֆերտա) է և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#conditions" className="text-purple-700 underline font-semibold">այստեղ</a>:
              </div>
            </div>

            {/* 3. ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (ԱԿՈՐԴԵՈՆՆԵՐ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Անհրաժեշտ փաստաթղթեր",
                    content: (
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Հաշվի բացման էլեկտրոնային հայտ/դիմում հեռակառավարման համակարգերի միջոցով[cite: 21]:</li>
                        <li>Մեր պահանջով այլ փաստաթղթեր[cite: 21]:</li>
                      </ul>
                    )
                    
                  },
                    {
  title: "Երաշխավորված ավանդների սահմանաչափերը",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <p>
        Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է <a href="#fund" className="text-purple-700 underline font-semibold">Ավանդների հատուցումը երաշխավորող հիմնադրամը</a>: Եթե դուք անվճարունակ բանկում ունեք՝
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Միայն դրամային ավանդ, ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</li>
        <li>Միայն արտարժութային ավանդ, ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</li>
        <li>Դրամային ու արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</li>
        <li>Դրամային ու արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</li>
      </ul>
      <p className="pt-2">
        <strong className="text-gray-800">Ծանոթություն.</strong> Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում՝ առավելագույն սահմանաչափով:
      </p>
    </div>
  )
},
{
  title: "Խնայողական հաշիվների սպասարկում",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Ձեր հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված խնայողական հաշվի սպասարկման պայմանագրով: Հաշիվների սպասարկումն իրականացնում են մեր գլխավոր մասնաճյուղը և մասնաճյուղերը (հաճախորդների սպասարկման համապատասխան ստորաբաժանումների միջոցով): Հաշիվները սպասարկում ենք մեր սահմանած գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման: Ձեր հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր <a href="#tariffs" className="text-purple-700 underline font-semibold">Սակագների</a> համաձայն: Հաշիվների վարման սպասարկումն անվճար է: Հաշվի չվաճող մնացորդի պահանջ սահմանված չէ:
        </li>
        <li>
          Ձեր խնայողական հաշիվներով կարող եք կատարել հետևյալ գործառնությունները՝
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Հաշվի անկանխիկ համալրում՝ փոխանցում միայն Էվոկաբանկ ՓԲԸ-ում գործող ձեր այլ բանկային հաշիվներից,</li>
            <li>Հաշվից անկանխիկ ելքագրում՝ փոխանցում միայն դեպի Էվոկաբանկ ՓԲԸ-ում գործող ձեր այլ բանկային հաշիվներ,</li>
            <li>Բանկային ձեր բոլոր հաշիվներով կատարել արտարժույթի փոխարկում (գործարքի կատարման դրությամբ մեր սահմանած՝ արտարժույթների առն ու վաճառքի փոխարժեքներով):</li>
          </ul>
        </li>
        <li>
          Կարող եք նաև հեռակառավարել ձեր հաշիվները <a href="#online" className="text-purple-700 underline font-semibold">բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով</a>:
        </li>
        <li>
          Հաշիվների բոլոր գործառնությունները արտացոլվում են քաղվածքներում: Մեր և ձեր միջև ձեռք բերված համաձայնության հիման վրա քաղվածքները կարող են տրամադրվել առձեռն, փոստային կամ էլեկտրոնային կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների վերաբերյալ այլ տեղեկությունների (տեղեկանքների) տրամադրման դիմաց գանձում ենք միջնորդավճարներ՝ մեր սակագների համաձայն:
        </li>
        <li>
          Ձեր հաշվին դրամական միջոցների մուտքագրումը/ելքագրումը կատարվում է ձեր կողմից մեզ ներկայացված վճարման հանձնարարագրերի հիմքերով:
        </li>
        <li>
          Հաշիվների սպասարկմանն առնչվող այլ պայմաններին կարող եք ծանոթանալ հետևյալ հղումներով՝
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Հաճախորդների խնայողական հաշիվների մնացորդների դիմաց հաշվարկվող տոկոսադրույքներին՝ Սակագներ բաժնի <a href="#savings-acc" className="text-purple-700 underline font-semibold">Խնայողական հաշիվներ</a> ենթաբաժնում: <strong className="text-gray-800">Նշում.</strong> Մենք իրավունք ունենք փոխելու խնայողական հաշվին եղած դրամական միջոցների համար վճարվող տոկոսների չափը, եթե հաշվի սպասարկման պայմանագրով այլ բան նախատեսված չէ:</li>
            <li>Հաճախորդի պահանջով կատարված գործարքների վերաբերյալ հարցման սակագներին՝ Սակագներ բաժնի <a href="#transfers" className="text-purple-700 underline font-semibold">Բանկային փոխանցումներ</a> ենթաբաժնում:</li>
          </ul>
        </li>
        <li>
          Բանկի կողմից Վճարման հանձնարարականի դրոշմակնիքումը հաստատում է այն փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի կատարումն: Այն դեպքերում, երբ ընդունված վճարման հանձնարարականի կատարման ժամանակ ի հայտ են գալիս ցանկացած տեսակի անհամապատասխանություններ, այդ թվում՝ Հաճախորդի հաշվի անբավարար մնացորդ, ապա Բանկն իրավունք ունի չկհվետապատավորել վճարման հանձնարարականը և այն համարել չեղյալացված: Սույն գործողության արդյունքում Հաճախորդին պատճառված վնասի համար Բանկը պատասխանատվություն չի կրում:
        </li>
      </ul>
    </div>
  )
},{
  title: "Խնայողական հաշվի պայմանագրի լուծման պայմաններ",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել խնայողական հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (անկանխիկ ելքագրել միայն դեպի Էվոկաբանկ ՓԲԸ-ում գործող ձեր այլ բանկային հաշիվներ)[cite: 19]: Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը ձեր ցուցումով փոխանցում ենք Էվոկաբանկ ՓԲԸ-ում գործող ձեր այլ հաշվի՝ ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում[cite: 19]:
        </li>
        <li>
          Կարող ենք անվիճելի կարգով դադարեցնել խնայողական հաշվի սպասարկման պայմանագիրը, եթե լինելով ֆիզիկական անձ հաճախորդ՝ վեց ամսվա ընթացքում ձեր խնայողական հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է[cite: 19]:
        </li>
        <li>
          Խնայողական հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար[cite: 19]:
        </li>
      </ul>
    </div>
  )
},{
  title: "Հաշիվ բացելու ընթացակարգ",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>Հաշիվը կարող եք բացել դրամով, դոլարով և եվրոյով:</li>
        <li>Խնայողական հաշիվները կարող եք բացել բացառապես հեռակառավարման համակարգերի միջոցով:</li>
        <li>Հեռակառավարման համակարգերով հաշիվները բացում ենք մեր կայքի կամ բջջային հավելվածի միջոցով ներկայացված էլեկտրոնային հայտ/դիմում-ի հիման վրա, որի համար կիրառվում են Համալիր բանկային ծառայությունների մատուցման պայմաններով սահմանված ձեր հավաստագրման և նույնականացման միջոցները:</li>
        <li>Նախքան հաշվի բացումը հեռակառավարման համակարգը ձեզ տեղեկացնում է հաշվի բացման ու սպասարկման պայմանների, սակագների, պահանջվող փաստաթղթերի և այլ մանրամասների մասին:</li>
        <li>«Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենքի պահանջներից ելնելով՝ կարող ենք պահանջել լրացուցիչ փաստաթղթեր կամ ներկայացված փաստաթղթերը լրացուցիչ ուսումնասիրել:</li>
        <li>Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ կնքում ենք «Խնայողական հաշվի բացման հայտ-պայմանագիրը» և հաշիվ բացում 1 (մեկ) աշխատանքային օրվա ընթացքում: Կնքված պայմանագրի օրինակի հետ ձեզ ենք հանձնում նաև Ավանդների հատուցման երաշխավորման պայմանների և կարգի մասին ծանուցում:</li>
      </ul>
    </div>
  )
},
                {
  title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով, դատական актыների հարկադիր կատարումն ապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության՝ հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումն ապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա: Այս դեպքերում մենք պարտավորություն չենք կրում ձեր հանդեպ, ձեր հաշիվների և դրամական միջոցների նկատմամբ ՀՀ օրենսդրական կարգով կիրառվող իրավական սանկցիաների մասին տեղեկացնելու համար: Նման տեղեկատվություն կարող ենք տրամադրել միայն համապատասխան սանկցիաները կիրառելուց հետո՝ հեռախոսի կամ այլ կապի միջոցներով (էլեկտրոնային/փոստային):
        </li>
        <li>
          Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին: Պետական մարմիններին և դրանց պաշտոնատար անձանց բանկային գաղտնիք կազմող տեղեկությունները տրամադրում ենք՝ միայն Բանկային գաղտնիքի մասին ՀՀ օրենքի համաձայն:
        </li>
        <li>
          Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում՝ դատական կարգով և ֆինանսական համակարգի հաշտարարի միջոցով:
        </li>
      </ul>
    </div>
  )
},
                  {
  title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Խնայողական հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ <a href="#savings" className="text-purple-700 underline font-semibold">Խնայողական հաշիվներ</a> ենթաբաժնում:
        </li>
        <li>
          Ձեր հաշվում առկա միջոցների նկատմամբ տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա: Իսկ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանաք Դուք, եթե Ձեր ավանդի դիմաց ստացված տոկոսագումարները վերանդրެއްեիք ավանդի տեսքով: ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅԱՆ հաշվարկման կարգին կարող եք ծանոթանալ ստորև.
        </li>
      </ul>

      {/* Բանաձևի բլոկ */}
      <div className="my-4 p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center overflow-x-auto">
        <div className="text-center font-mono text-gray-800">
          <div className="flex items-center justify-center space-x-2">
            <span>A = </span>
            <div className="flex flex-col items-center">
              <span className="border-b border-gray-600 pb-1 px-1">
                N <span className="mx-1">∑</span> ( K<sub>n</sub> / (1 + APY)<sup>D<sub>n</sub> / 365</sup> )
              </span>
              <span className="pt-1 text-xs">n = 1</span>
            </div>
          </div>
        </div>
      </div>

      <p className="font-semibold text-gray-800 pt-2">Որտեղ՝</p>
      
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>A</strong> - ավանդի սկզբնական գումարն է:</li>
        <li><strong>n</strong> - ավանդի դիմաց դրամական հոսքերի հերթական համարն է:</li>
        <li><strong>N</strong> - ավանդի դիմաց դրամական հոսքերի վերջին համարն է (ներառյալ նաև ավանդի ներդրման պահին դրամական հոսքը), որից հետո ավանդային պայմանագրի ժամկետը համարվում է ավարտված:</li>
        <li><strong>Kn</strong> - ավանդի ներդրման պահին և/կամ ավանդի գործողության ընթացքում ներդրված ավանդի և/կամ կապիտալացված տոկոսագումարների առկայության դեպքում պարտադիր վճարների հոսքեր:</li>
        <li><strong>Dn</strong> - այն թիվն է, որը ցույց է տալիս, թե քանի օր է անցել ավանդի ներդրման օրից մինչև ավանդի դիմաց կատարվող հերթական՝ n-րդ դրամական հոսքը ներառյալ: Այն դեպքում, երբ ավանդի ներդրման պահին է դրամական հոսքը, D1= 0:</li>
      </ul>

      <ul className="list-disc pl-6 space-y-3 pt-2">
        <li>
          Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է <a href="#fund" className="text-purple-700 underline font-semibold">Ավանդների հատուցումը երաշխավորող հիմնադրամը</a>:
        </li>
        <li>
          Բանկն իրավունք ունի միակողմանի փոխելու սույն պայմաններով սահմանված տարեկան անվանական տոկոսադրույքները՝ փոփոխությունն ուժի մեջ մտնելուց առնվազն 15 օր առաջ հաճախորդի հետ համաձայնեցված հաղորդակցման եղանակով տեղեկացնելով հաճախորդին: Տոկոսադրույքի փոփոխության հետևանքով մինչ այդ վճարված կամ կուտակված տոկոսագումարները չեն վերահաշվարկվում:
        </li>
      </ul>
    </div>
  )
},
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl border border-purple-100 shadow-sm overflow-hidden transition-all">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between bg-transparent cursor-pointer hover:bg-purple-50/50 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-purple-700">
                        {openAccordion === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>
                    {openAccordion === idx && (
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.content || `Այստեղ ներկայացված է մանրամասն տեղեկատվություն «${item.title}» բաժնի վերաբերյալ, համաձայն բանկի պաշտոնական տվյալների:`}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ՓԱՍՏԱԹՂԹԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.</span>
                  </div>
                  <a href="#download" className="w-10 h-10 rounded-xl bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700 transition-colors shrink-0">
                    <Download className="w-5 h-5" />
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Խնայողական հաշվի պայմաններ և սակագներ տեղեկատվական ամփոփագիր 01.10.2026թ.</span>
                  </div>
                  <a href="#download" className="w-10 h-10 rounded-xl bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700 transition-colors shrink-0">
                    <Download className="w-5 h-5" />
                  </a>
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