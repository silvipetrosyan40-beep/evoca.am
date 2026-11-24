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
  title: "Անհրաժեշտ փաստաթղթեր",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն[cite: 26]:
      </li>
      <li>
        Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ[cite: 26]:
      </li>
      <li>
        Մեր պահանջով այլ փաստաթղթեր[cite: 26]:
      </li>
    </ul>
  )
},
   {
  title: "Հաշիվ բացելու ընթացակարգ",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Ընթացիկ հաշիվ կարող եք բացել դրամով, դոլարով, եվրով, ռուբլով, կանադական դոլարով, ֆրանկով և ֆունտ ստեռլինգով (այլ արժույթներով ընթացիկ հաշիվներ կարող եք բացել միայն մեզ հետ համաձայնեցված կարգով)[cite: 26]:
      </li>
      <li>
        Նախքան հաշվի բացումը մեր աշխատակիցները ձեզ տեղեկացնում են հաշիվների բացման ու սպասարկման պայմանների, սակագների, պահանջվող փաստաթղթերի և այլ մանրամասների մասին[cite: 26]:
      </li>
      <li>
        Եթե հաշվի բացման և վարման պայմաններն ընունելի են, ապա լրացնում եք դիմում և ներկայացնում պահանջվող փաստաթղթերը[cite: 26]:
      </li>
      <li>
        «Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենքի պահանջներից ելնելով՝ կարող ենք պահանջել լրացուցիչ փաստաթղթեր կամ ներկայացված փաստաթղթերը լրացուցիչ ուսումնասիրել[cite: 26]:
      </li>
      <li>
        Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելու հետո ձեզ հետ կնքում ենք «Բանկային հաշվի սպասարկման պայմանագիրը» և հաշիվ բացում 1 (մեկ) աշխատանքային օրվա ընթացքում: Կնքված պայմանագրի օրինակի հետ ձեզ են հանձնում նաև Ավանդների հատուցման երաշխավորման պայմանների և կարգի մասին ծանուցում[cite: 26]:
      </li>
      <li>
        Հաշիվները կարող եք բացել ինչպես մեր գործունեության վայրում, այնպես էլ հեռակառավարման համակարգերի միջոցով[cite: 26]:
      </li>
      <li>
        Հեռակառավարման համակարգերով հաշիվները բացում ենք մեր կայքի կամ բջջային հավելվածի միջոցով ներկայացված էլեկտրոնային հայտ/դիմում-ի հիման վրա, որի համար կիրառվում են Համալիր բանկային ծառայությունների մատուցման պայմաններով սահմանված ձեր հավաստագրման և նույնականացման միջոցները[cite: 26]:
      </li>
      <li>
        Հաշիվ բացելուց հետո կարող եք իրականացնել ՀՀ օրենսդրությամբ չարգելված ցանկացած գործառնություն[cite: 26]:
      </li>
    </ul>
  )
},
   {
  title: "Բանկային հաշիվների սպասարկում",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված բանկային հաշվի սպասարկման պայմանագրով: Բանկային հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և մասնաճյուղերը (հաճախորդների սպասարկման համապատասխան ստորաբաժանումների միջոցով): Հաշիվները սպասարկում ենք մեր սահմանված գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման: Ձեր հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր <a href="#tariffs" className="text-purple-700 underline font-medium">Սակագների</a> համաձայն: Բանկային հաշիվների վարման սպասարկումն անվճար է: Հաշվի չվնաղող մնացորդի պահանջ սահմանված չէ:
        </li>
        <li>
          Ձեր բանկային հաշիվներով կարող եք կատարել ՀՀ օրենսդրական актыով չարգելված ցանկացած գործառնություն (կանխիկ կամ անկանխիկ)՝ մեզ ներկայացնելով ՀՀ իրավական նորմերին համապատասխանող փաստաթղթային հանձնարարական: Բանկային հաշվով կարող եք կատարել հետևյալ գործառնությունները՝
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>բացված հաշվին մուտքագրել դրամական միջոցներ,</li>
            <li>կատարել հաշվից փոխանցումներ,</li>
            <li>հաշվից գումարներ ստանալ,</li>
            <li>ընթացիկ հաշվի մնացորդը փոխարկել արտարժույթի (գործարքի կատարման դրությամբ մեր սահմանված՝ արտարժույթների առք ու վաճառքի փոխարժեքներով),</li>
            <li>ընթացիկ հաշվից մարել վարկը:</li>
          </ul>
        </li>
        <li>
          Կարող եք նաև հեռակառավարել ձեր հաշիվները՝ <a href="#remote" className="text-purple-700 underline font-medium">բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով</a>:
        </li>
        <li>
          Բանկային հաշիվների բոլոր գործառնությունները (դրամական միջոցների շարժ, գանձված միջնորդավճարներ, ստացված եկամուտներ) արտացոլվում են քաղվածքներում: Մեր և ձեր միջև ձեռք բերված համաձայնության հիման վրա քաղվածքները կարող են տրամադրվել առձեռն, փոստային կամ էլեկտրոնային կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների վերաբերյալ այլ տեղեկությունների (տեղեկանքների) տրամադրման դիմաց գանձում ենք միջնորդավճարներ՝ մեր սակագների համաձայն:
        </li>
        <li>
          Ձեր հաշվին դրամական միջոցների մուտքագրման/ելքագրման ժամկետները՝
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Ձեր օգտին ստացված դրամական միջոցները մուտքագրվում են ոչ ուշ, քան մուտքագրումը հաստատող փաստաթղթերի ստացման հաջորդ բանկային օրը: Հաշվի կանխիկ համալրման դեպքում դրամական միջոցները մուտքագրվում են նույն բանկային օրը:</li>
            <li>Ձեր հաշվից դրամական միջոցների ելքագրումը (փոխանցումների իրականացումը) կատարվում է ձեր կողմից մեզ ներկայացված վճարման հանձնարարականների հիմքերով, ընդ որում՝ մինչև ժամը 15:30-ը ներկայացված վճարման հանձնարարականները կատարում ենք նույն բանկային օրը:</li>
          </ul>
        </li>
        <li>
          Բանկային հաշիվների սպասարկմանն առնչվող այլ պայմաններին կարող եք ծանոթանալ հետևյալ հղումներով՝
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Ձեր հաշիվներով իրականացվող փոխանցումների և կանխիկ գործառնությունների պայմաններին՝ Բանկային ծառայություններ բաժնի <a href="#transfers" className="text-purple-700 underline font-medium">Դրամական փոխանցումներ</a> ենթաբաժնում և Սակագներ բաժնի <a href="#cash" className="text-purple-700 underline font-medium">Դրամարկղային գործառնություններ</a> ենթաբաժնում:</li>
            <li>Հաճախորդների ընթացիկ հաշիվների մնացորդների դիմաց հաշվարկվող տոկոսադրույքներին՝ Սակագներ բաժնի <a href="#current-accounts" className="text-purple-700 underline font-medium">Ընթացիկ հաշիվներ ենթաբաժնում</a>: Նշում. մենք իրավունք ունենք փոխելու բանկային հաշվին եղած դրամական միջոցների համար վճարվող տոկոսների չափը, եթե հաշվի սպասարկման պայմանագրով այլ բան նախատեսված չէ:</li>
            <li>Հաճախորդի պահանջով Հայաստանում կամ Հայաստանի տարածքից դուրս կատարված գործարքների վերաբերյալ հարցման սակագներին՝ Սակագներ բաժնի <a href="#bank-transfers" className="text-purple-700 underline font-medium">Բանկային փոխանցումներ ենթաբաժնում</a>:</li>
          </ul>
        </li>
        <li>
          Բանկի կողմից Վճարման հանձնարարականի դրոշմակնքումը հաստատում է այն փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի կատարումն: Այն դեպքում, երբ ընդունված վճարման հանձնարարականի կատարման ժամանակ ի հայտ են գալիս ցանկացած տեսակի անհամապատասխանություններ, այդ թվում՝ Հաճախորդի հաշվի անբավարար մնացորդ, ապա Բանկն իրավունք ունի չկատարելպետավորել վճարման հանձնարարականը և այն համարել չեղյալացված: Սույն գործողության արդյունքում Հաճախորդին պատճառված վնասի համար Բանկը պատասխանատվություն չի կրում:
        </li>
      </ul>
    </div>
  )
},
   {
  title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները չենք սահմանափակում[cite: 26]:
      </li>
      <li>
        Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով, դատական актыի հարկադիր կատարումն ապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության՝ հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումն ապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա: Այս դեպքերում մենք պարտավորություն չենք կրում ձեր հանդեպ, ձեր հաշիվների և դրամական միջոցների նկատմամբ ՀՀ օրենսդրական կարգով կիրառվող իրավական սանկցիաների մասին տեղեկացնելու համար: Նման տեղեկատվություն կարող ենք տրամադրել միայն ձեզ կամ ձեր լիազոր ներկայացուցչին՝ համապատասխան սանկցիաները կիրառելուց հետո՝ հեռախոսի կամ այլ կապի միջոցներով (էլեկտրոնային/փոստային)[cite: 26]:
      </li>
      <li>
        Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին: Պետական մարմիններին և դրանց պաշտոնատար անձանց բանկային գաղտնիք կազմող տեղեկությունները տրամադրում ենք՝ միայն «Բանկային գաղտնիքի մասին» ՀՀ օրենքի համաձայն[cite: 26]:
      </li>
      <li>
        Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում՝ դատական կարգով և ֆինանսական համակարգի հաշտարարի միջոցով[cite: 26]:
      </li>
    </ul>
  )
},
    {
  title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել բանկային հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (կանխիկ ելքագրել կամ փոխանցել այլ հաշվի): Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը տրամադրում ենք ձեզ կամ ձեր ցուցումով փոխանցում այլ հաշվի՝ ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում[cite: 24]:
      </li>
      <li>
        Կարող ենք անվիճելի կարգով դադարեցնել բանկային հաշվի սպասարկման պայմանագիրը, եթե լինելով ֆիզիկական անձ հաճախորդ՝ վեց ամսվա ընթացքում ձեր բանկային հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է[cite: 24]:
      </li>
      <li>
        Բանկային հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար[cite: 24]:
      </li>
    </ul>
  )
},
   {
  title: "Երաշխավորված ավանդների սահմանաչափերը",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p>
        Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է <a href="#fund" className="text-purple-700 underline font-medium">Ավանդների հատուցումը երաշխավորող հիմնադրամը</a>: Եթե դուք անվճարունակ բանկում ունեք՝
      </p>

      <ul className="list-disc pl-5 space-y-3">
        <li>
          Միայն դրամային ավանդ, ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է[cite: 23]:
        </li>
        <li>
          Միայն արտարժութային ավանդ, ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է[cite: 23]:
        </li>
        <li>
          Դրամային ու արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով[cite: 23]:
        </li>
        <li>
          Դրամային ու արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով[cite: 23]:
        </li>
      </ul>

      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mt-4 text-sm">
        <p className="font-bold text-purple-900 mb-1">Ծանոթագրություն.</p>
        <p>
          Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում առավելագույն սահմանաչափով[cite: 23]:
        </p>
      </div>
    </div>
  )
},
    {
  title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ",
  content: (
    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Առարկայազուրկ մետաղական հաշիվների, Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ <a href="#metal-accounts" className="text-purple-700 underline font-medium">Առարկայազուրկ մետաղական հաշիվներ</a>, <a href="#cards" className="text-purple-700 underline font-medium">Վճարային քարտեր ենթաբաժիններում</a> և Ֆիզիկական անձանց բանկային ծառայությունների Ավանդներ բաժնում[cite: 22]:
      </li>
      <li>
        Ձեր հաշվում առկա միջոցների նկատմամբ տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա: Իսկ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանայիք Դուք, եթե Ձեր ավանդի դիմաց ստացված տոկոսագումարները վերաներդրեիք ավանդի տեսքով: ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅԱՆ հաշվարկման կարգին կարող եք ծանոթանալ <a href="#apy" className="text-purple-700 underline font-medium">ԱՅՍՏԵՂ</a>[cite: 22]:
      </li>
      <li>
        Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է <a href="#fund" className="text-purple-700 underline font-medium">Ավանդների հատուցումը երաշխավորող հիմնադրամը</a>[cite: 22]:
      </li>
    </ul>
  )
},
   {
  title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p className="font-medium text-gray-900">Հարգելի Հաճախորդ,</p>
      <p>
        «ԷՎՈԿԱԲԱՆԿ» ԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջինիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող հետևյալ ձևաթղթերը՝{' '}
        <a href="#legal-entity" className="text-purple-700 underline hover:text-purple-900 font-medium">
          Իրավաբանական անձ հաճախորդների ինքնահայտարարագրման ձև՝ Մոդել 2-ի համաձայն (FATCA)
        </a>{' '}
        կամ{' '}
        <a href="#physical-person" className="text-purple-700 underline hover:text-purple-900 font-medium">
          Ֆիզիկական անձ (ներառյալ անհատ ձեռնարկատեր) հաճախորդների ինքնահայտարարագրման ձև FATCA նպատակների համար
        </a>:
      </p>
    </div>
  )
},
  ];

  const documents = [
    "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.",
    "Բանկային հաշիվների բացման սակագներ և դրույքներ 03.09.2026թ."
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
              <button onClick={() => handleNavigation('/hy/account-opening-service')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Հաշիվների բացում և սպասարկում</button>    
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
            <span className="text-gray-800 font-medium">Հաշիվների բացում և սպասարկում</span>
          </div>

          {/* Top Hero Section with Image 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Հաշիվների բացում և սպասարկում
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք[cite: 24]:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
                alt="Հաշիվների բացում և սպասարկում" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Notice Paragraph */}
          <div className="text-gray-700 leading-relaxed mb-12">
            <p>
              Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#details" className="text-purple-700 underline font-medium">այստեղ</a>[cite: 25]:
            </p>
          </div>

          {/* Second Hero Section with Image 2 */}
          <div className="relative rounded-3xl overflow-hidden mb-12 shadow-md">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
              alt="Մասնաճյուղեր" 
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-2xl">
                Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի)[cite: 25]:
              </h2>
            </div>
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