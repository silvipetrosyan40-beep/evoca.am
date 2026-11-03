import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { Globe, Search, Menu, ChevronDown, MapPin, HelpCircle } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Ստեղծում ենք վիճակ ակորդեոնների համար (դեֆոլտ բացված է 4-րդ ակորդեոնը)
  const [openIndex, setOpenIndex] = useState(3);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
   {
      title: "Անվանատիրոջ հատուկ հաշիվներ",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Անվանատիրոջ հատուկ հաշիվը կարող է օգտագործվել միայն ներդրումային ծառայություններ մատուցող անձի և Ներդրումային ֆոնդի կառավարչի կողմից՝ ներդրումային ծառայությունների մատուցման կամ Ներդրումային ֆոնդերի կառավարման հետ կապված գործառնությունների իրականացման համար:
          </p>
          <p className="pt-2 font-medium text-gray-900">
            Հաշվի տարեկան սպասարկումը <strong className="text-purple-700 font-bold">5,000 ՀՀ դրամ</strong>:
          </p>
        </div>
      )
    },
   {
      title: "Անհրաժեշտ փաստաթղթեր",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Իրավաբանական անձանց դեպքում */}
          <div>
            <h3 className="text-lg font-bold text-purple-800 mb-4">
              Իրավաբանական անձանց դեպքում՝
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>Դիմում՝ մեր ձևանմուշի համաձայն։</li>
              <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ փոխարինող այլ փաստաթուղթ):</li>
              <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի գրանցող պետական մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ):</li>
              <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
              <li>Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի ղեկավար/ների, անձնագիր/ները և իրավասու մարմնի կողմից պաշտոնների նշանակման վերաբերյալ որոշումները):</li>
              <li>Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը:</li>
              <li>
                Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ են՝
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Եթե իրական շահառուն ֆիզիկական անձ է, ապա անձնագրի կամ նույնականացման քարտի պատճենները:</li>
                  <li>Եթե իրական շահառուն իրավաբանական անձ է, ապա տվյալ իրավաբանական անձի այս տեղեկատվության 2-րդ, 3-րդ և 4-րդ կետերով պահանջվող փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ կետերով պահանջվող փաստաթղթերի) պատճենները:</li>
                </ul>
              </li>
              <li>Մեր պահանջով այլ փաստաթղթեր:</li>
            </ul>
          </div>

          {/* Անհատ ձեռնարկատերերի դեպքում */}
          <div className="pt-4 border-t border-purple-100">
            <h3 className="text-lg font-bold text-purple-800 mb-4">
              Անհատ ձեռնարկատերերի դեպքում՝
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>Դիմում՝ մեր ձևանմուշի համաձայն։</li>
              <li>Անձնագիր կամ նույնականացման քարտ։</li>
              <li>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝ քաղվածք պետական ռեգիստրից):</li>
              <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
              <li>Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ ձեռնարկատերի դեպքում, ստորագրության և նմուշի քարտում կատարվում է համապատասխան գրառում՝ կնիքի բացակայության վերաբերյալ:</li>
              <li>Մեր պահանջով այլ փաստաթղթեր:</li>
            </ul>
          </div>
        </div>
      )
    },
   {
      title: "Հաշիվների սպասարկում",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է Հայաստանի օրենսդրությամբ, Կենտրոնական բանկի Նորմատիվ ակտերով, մեր և ձեր միջև կնքված բանկային հաշվի սպասարկման պայմանագրով:
            </li>

            <li>
              Բանկային հաշիվները սպասարկում են մեր գլխամասային գրասենյակը և մասնաճյուղերը՝ գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման:
            </li>

            <li>
              Ձեր հաշիվներով իրականացվող գործառնությունների (հաշվարկային/դրամարկղային) դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր սակագների համաձայն: Նշում. Իրավաբանական անձանց համար սահմանված դրույքները և սակագները կիրառվում են նաև անհատ ձեռնարկատերերի նկատմամբ:
            </li>

            <li>
              Հաշիվների բացման և փակման դիմաց միջնորդավճարներ չենք գանձում, չի գործում նաև հաշվի չնվազող մնացորդի պահանջ:
            </li>

            <li>
              Իրավունք ունեք ձեր բանկային հաշիվներով կատարել Հայաստանի օրենսդրական ակտերով չարգելված ցանկացած գործառնություն (կանխիկ/անանխիկ)՝ մեզ ներկայացնելով փաստաթղթային հանձնարարական/կարգադրություն: Բանկային հաշվով հնարավոր է իրականացնել հետևյալ գործառնությունները՝
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>բացված հաշվին մուտքագրել դրամական միջոցներ,</li>
                <li>կատարել հաշվից դրամական փոխանցումներ,</li>
                <li>հաշվից գումարներ ստանալ,</li>
                <li>իրականացնել ընթացիկ հաշվի մնացորդի փոխարկում արտարժույթի (գործարքի կատարման դրությամբ մեր կողմից սահմանված արտարժույթների առք ու վաճառքի փոխարժեքներով),</li>
                <li>ընթացիկ հաշվից մարել վարկեր և կատարել այլ գործառնություններ:</li>
              </ul>
            </li>

            <li>
              Կարող եք նաև առանց մեզ այցելելու կառավարել ձեր հաշիվները՝ բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով:
            </li>

            <li>
              Բանկային հաշիվներով իրականացվող գործառնությունները (դրամական միջոցների շարժը, գանձված միջնորդավճարները, ստացված եկամուտները) ամբողջովին արտացոլվում են հաշիվների քաղվածքներում: Փոխադարձ համաձայնության հիման վրա քաղվածքները կարող ենք տրամադրել առձեռն, փոստային կամ էլեկտրոնային կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների վերաբերյալ այլ տեղեկանքների տրամադրման դիմաց գանձում ենք միջնորդավճարներ՝ մեր սակագների համաձայն:
            </li>

            <li>
              Ձեր հաշվին դրամական միջոցների մուտքագրման/ելքագրման ժամկետները՝
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Ձեր օգտին ստացված դրամական միջոցները հաշվին մուտքագրվում են ոչ ուշ, քան մուտքագրումը հաստատող փաստաթղթերի ստացման հաջորդող բանկային օրը: Հաշվի կանխիկ համալրման դեպքում՝ դրամական միջոցները մուտքագրվում են նույն բանկային օրը:
                </li>
                <li>
                  Ձեր հաշվից դրամական միջոցների ելքագրումը (փոխանցումների իրականացումը) կատարվում է ձեր կողմից մեզ ներկայացված վճարման հանձնարարագրերի հիմքերով, ընդ որում՝ մինչև ժամը 15:30-ը ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը:
                </li>
              </ul>
            </li>

            <li>
              Բանկի կողմից վճարման հանձնարարականի դրոշմակնքումը հաստատում է այն փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի կատարումն և չի նշանակում, որ արդեն կատարվել է Բանկի կողմից:
              <br />
              Բանկի կողմից ընդունված և դրոշմակնքված վճարման հանձնարարականի կատարումը կարող է չեղյալ համարվել հաճախորդի հաշվին միջոցների անբավարարության, գումարի ծագման հիմքերի բացակայության և այլ անհամապատասխանությունների ի հայտ գալու դեպքում: Սույն գործողության արդյունքում Հաճախորդին պատճառված վնասի համար Բանկը պատասխանատվություն չի կրում:
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները չենք սահմանափակում:
            </li>

            <li>
              Հաշվետիրոջ ձեր իրավունքները <strong className="text-purple-700 font-bold">կարող են սահմանափակվել</strong> դատարանի վճռով, դատական ակտերի հարկադիր կատարումնապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության' հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումնապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա:
            </li>

            <li>
              Այս դեպքերում մենք պարտավորություն չենք կրում ձեր հանդեպ, ձեր հաշիվների և դրամական միջոցների նկատմամբ ՀՀ օրենսդրական կարգով կիրառվող իրավական սանկցիաների մասին տեղեկացնելու համար: Նման տեղեկատվություն կարող ենք տրամադրել միայն համապատասխան սանկցիաները կիրառելուց հետո' հեռախոսի կամ այլ կապի միջոցներով (էլեկտրոնային/փոստային):
            </li>

            <li>
              Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին: Պետական մարմիններին և դրանց պաշտոնատար անձանց բանկային գաղտնիք կազմող տեղեկությունները տրամադրում ենք' միայն Բանկային գաղտնիքի մասին ՀՀ օրենքի համաձայն:
            </li>

            <li>
              Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում' Հայաստանի օրենսդրությամբ սահմանված կարգով:
            </li>
          </ul>

        </div>
      )
    },
    {
      title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել բանկային հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (կանխիկ ելքագրել կամ փոխանցել այլ հաշվի): Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը տրամադրում ենք ձեզ կամ ձեր ցուցումով փոխանցում այլ հաշվի' ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:
            </li>

            <li>
              Կարող ենք անվիճելի կարգով դադարեցնել բանկային հաշվի սպասարկման պայմանագիրը, եթե լինելով իրավաբանական անձ հաճախորդ' <strong className="text-purple-700 font-bold">մեկ տարվա</strong> ընթացքում ձեր բանկային հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:
            </li>

            <li>
              Բանկային հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար:
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="font-semibold text-gray-900">
            Հարգելի Հաճախորդ,
          </p>
          <p>
            «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ ձևաթղթերը՝{' '}
            <a href="#fatca-legal" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
              Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման ձև՝ Մոդել 2-ի համաձայն (FATCA)
            </a>{' '}
            կամ{' '}
            <a href="#fatca-individual" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
              Ֆիզիկական անձ (ներառյալ անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA նպատակների համար
            </a>
            :
          </p>
        </div>
      )
    },
  ];
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ (HEADER) */}
        <header className="w-full bg-white shadow-sm font-sans relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
              
              <nav className="flex space-x-6 items-center">
                <button 
                  onClick={() => handleNavigation('/hy/loans')}
                  className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
                >
                  Անհատ
                </button>
                <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բիզնես</button>
                <button onClick={() => handleNavigation('/hy/instant-payments')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Ակնթարթային վճարումներ</button>
                <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Մեր մասին</button>
                <button onClick={() => handleNavigation('/hy/news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
                <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
                <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

                <div className="relative">
                  <button 
                    onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Առցանց հայտեր</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOnlineAppsOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                      <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        ՓՄՁ վարկավորում
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Infinite
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        MasterCard Gold
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Gold
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button 
                    onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Հետադարձ կապ</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isContactOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                      <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                      <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                      <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                      <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                      <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                        Պատվիրել զանգ
                      </button>
                    </div>
                  )}
                </div>
              </nav>

              <div className="flex items-center space-x-5 text-gray-700">
                <button onClick={() => handleNavigation('/branches')} aria-label="Մասնաճյուղեր" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/help')} aria-label="Օգնություն" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/language')} aria-label="Լեզու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Globe className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/search')} aria-label="Որոնել" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/menu')} aria-label="Գլխավոր մենյու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-12">
                <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
                  <span className="text-3xl font-extrabold tracking-tight text-gray-700">evoca</span>
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-full ml-0.5 mb-3"></span>
                </div>

                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
                  <button onClick={() => handleNavigation('/hy/business')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Վարկեր</button>
                  <button onClick={() => handleNavigation('/hy/leasing-evoca')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">լիզինգ</button>
                  <button onClick={() => handleNavigation('/hy/business-account-opening-and-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Հաշիվներ</button>
                  <button onClick={() => handleNavigation('/hy/business-classical-deposit')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Ավանդներ</button>
                  <button onClick={() => handleNavigation('/hy/business-investment-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Արժեթղթերի շուկա</button>
                  <button onClick={() => handleNavigation('/hy/guarantee')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Առևտրի ֆինանսավորում</button>
                  <button onClick={() => handleNavigation('/hy/v-pos-terminal')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Դիջիթալ</button>
                  <button onClick={() => handleNavigation('/hy/individual-safe-deposit-boxes')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Այլ</button>
                </nav>
              </div>

              <div>
                <button
                  onClick={() => handleNavigation('/evoca-online')}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-2xl shadow-md transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer border-none"
                >
                  EvocaONLINE
                </button>
              </div>
            </div>
          </div> 
        </header>

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button 
                onClick={() => handleNavigation('/hy/leasing-evoca')} 
                className="text-white hover:text-purple-200 transition-colors bg-transparent border-none cursor-pointer"
              >
               Հաշիվների բացում և սպասարկում
              </button>
              <button 
                onClick={() => handleNavigation('/hy/business-unallocated-metal-accounts')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Առարկայազուրկ մետաղական հաշիվներ
              </button>
            </nav>
          </div>
        </div>

       {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16 relative">
        
        {/* Սոցիալական կոճակներ ձախ կողմում՝ SVG-ներով */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gray-100/80 rounded-lg p-2 space-y-3 absolute left-[-60px] top-28 shadow-xs">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
            <Home className="w-4 h-4" />
          </button>
          <span>›</span>
          <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Բիզնես</button>
          <span>›</span>
          <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Հաշիվներ</button>
          <span>›</span>
          <span className="text-gray-800 font-medium">Հաշիվների բացում և սպասարկում</span>
        </div>

        {/* Վերնագիր և Նկար (Grid բաժանում) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Հաշիվների բացում և սպասարկում
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց ու անհատ ձեռնարկատերերին առաջարկում ենք մեզ մոտ բացել դրամային և արտարժութային բանկային ընթացիկ հաշիվներ։
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="	https://www.evoca.am/images-cache/menu/1/16116367969264/780x585.jpg" 
              alt="Հաշիվների բացում և սպասարկում" 
              className="w-full max-w-lg rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Նոր ավելացված տեքստային հատված */}
        <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
          <p>
            Հաշիվների սպասարկումն իրականացնում ենք մեր{' '}
            <a href="#tariffs" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
              Ընթացիկ հաշիվների սպասարկման սակագների համաձայն
            </a>
            ։ Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխավոր մասնաճյուղ և կամայական մասնաճյուղ[cite: 19]:
          </p>
          <p className="text-gray-800">
            <strong className="text-purple-700 font-bold">Ուշադրություն.</strong>{' '}
            <a href="#metal-accounts" className="text-purple-700 underline font-medium hover:text-purple-900 transition-colors">
              Առարկայազուրկ մետաղական հաշիվների
            </a>
            , Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ Առարկայազուրկ մետաղական հաշիվներ, Վճարային քարտեր ենթաբաժիններում և իրավաբանական անձանց բանկային ծառայությունների Ավանդներ բաժնում[cite: 19]:
          </p>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordion Section) */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center p-5 text-left bg-transparent border-none cursor-pointer group space-x-3"
                >
                  <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                  <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                    {section.title}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 animate-fadeIn">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>

    {/* ՖՈՒԹԵՐ (FOOTER) */}
    <Footer />
  </div>
);
}