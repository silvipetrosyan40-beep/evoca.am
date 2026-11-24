import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(0); // Առաջինը բացված վիճակում

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const accordionSections = [
   {
  title: "Ավանդների ներգրավման պայմանները",
  content: (
    <ol className="list-decimal pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Հաճախորդը (ստորև նաև՝ Ավանդատու) կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ԲԸ (այսուհետ՝ Բանկ) գործունեության վայրում (գլխամասային գրասենյակ և մասնաճյուղեր), այնպես էլ Բանկի հեռակառավարման համակարգերի (EvocaMobile, EvocaTouch) միջոցով[cite: 21]:
      </li>
      <li>
        Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և Բանկից ստացած լինի նշված համակարգ մտնելու գաղտնաբառը[cite: 21]:
      </li>
      <li>
        Ավանդների ներդրումը, դրանց դիմաց հաշվեգրված տոկոսագումարների վճարումը Ավանդատուի ցանկությամբ կարող է կատարվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով[cite: 21]:
      </li>
      <li>
        Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և սոցիալական քարտ (նույնականացման քարտի առկայության դեպքում սոցիալական քարտ չի պահանջվում)[cite: 21]:
      </li>
      <li>
        Բանկի գործունեության վայրում ավանդ ներդնելու նպատակով Հաճախորդը լրացնում է հայտ-պայմանագիր, որում նշվում է Ավանդի տեսակը, արժույթը, գումարը, ժամկետը, տոկոսագումարների վճարման ցանկալի պարբերականությունը և ստորագրությամբ հավաստում է տվյալ ավանդի ներդրման պայմանների և սակագների վերաբերյալ իր համաձայն լինելու փաստը[cite: 21]:
      </li>
      <li>
        Բանկը, հաշվի առնելով Հաճախորդի կողմից ներկայացված տեղեկատվությունը և օրենսդրական պահանջները («Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենք, «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտ» ԱՄՆ օրենք և այլն), կարող է Հաճախորդից պահանջել լրացուցիչ փաստաթղթեր, լրացնել այլ անհրաժեշտ ձևաթղթեր կամ հավաքագրել այլ պահանջվող տեղեկատվություն[cite: 21]:
      </li>
      <li>
        Ֆիզիկական անձանց ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի[cite: 21]:
      </li>
      <li>
        Ավանդի ներդրման համար Հաճախորդի համար բացվում է ավանդի արժույթով ընթացիկ հաշիվ, որի համար սպասարկման միջնորդավճար չի գանձվում։ Բացված ընթացիկ հաշիվը Հաճախորդի կողմից պետք է օգտագործվի միայն տվյալ Ավանդի գծով գործարքների (համալրում, տոկոսների վճարում և այլն) կատարման համար[cite: 21]:
      </li>
      <li>
        Ավանդի գումարի վերադարձը կատարվում է ավանդային պայմանագրի վերջին օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ աշխատանքային օրը[cite: 21]:
      </li>
      <li>
        Արտարժույթով ավանդների ներդրման դեպքում արտարժույթի փոխարժեքի տատանումների ռիսկը կրում է Հաճախորդը[cite: 21]:
      </li>
      <li>
        Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները, բացառությամբ ՌԴ ռուբլով ավանդների, սահմանվում են Բանկի «Սակագներով և դրույքներով» (TRM14-0002-02/1)[cite: 21]:
      </li>
      <li>
        Կանխիկ եղանակով ներդրված ավանդները կանխիկ եղանակով վերադարձվելու դեպքում կանխիկացման միջնորդավճարներ չեն գանձվում[cite: 21]:
      </li>
      <li>
        Անկանխիկ եղանակով ներդրված ավանդները (այլ ֆինանսական հաստատություններից փոխանցված գումարներ) կանխիկ եղանակով վերադարձնելու դեպքում Բանկի կողմից կիրառվում են կանխիկացման միջնորդավճարներ՝ համաձայն տվյալ օրվա դրությամբ Բանկի սակագներով սահմանված դրույքաչափերի[cite: 21]:
      </li>
      <li>
        Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը անկանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ՌԴ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը[cite: 21]:
      </li>
      <li>
        25,000,000 ՀՀ դրամից, 50,000 ԱՄՆ դոլարից, 40,000 Եվրոյից և 3,000,000 ՌԴ ռուբլուց ավել գումար ներդնելու դեպքում սահմանվում են պայմանագրային տոկոսադրույքներ[cite: 22]:
      </li>
      <li>
        Ավանդատուն կարող է իր ներդրված ավանդի մինչև 90 % չափով ստանալ վարկ կամ օվերդրաֆտ՝ իր ժամկետային ավանդի ապահովվածությամբ։ Վարկը կամ օվերդրաֆտը տրամադրվում է ներդրված ավանդի արժույթով՝ ավանդի տոկոսադրույքը գումարած 2 % տարեկան տոկոսադրույքով։ Վարկը կամ օվերդրաֆտը պետք է ամբողջությամբ մարվի մինչև ժամկետային ավանդի պայմանագրի ժամկետի ավարտը[cite: 22]:
      </li>
      <li>
        Մինչև ավանդային պայմանագրի ժամկետի լրանալը Հաճախորդը կարող է ավանդի երկարաձգման կամ նոր ժամկետով վերակնքման իրավունքը լիազորել երրորդ անձի՝ Բանկի համապատասխան լիազոր ներկայացուցչի ներկայությամբ Բանկի տարածքում կազմված և ստորագրված լիազորագրի հիման վրա[cite: 22]:
      </li>
      <li>
        Ավանդատուն ավանդի և հաշվեգրված տոկոսների տնօրինման իրավունքը կարող է լիազորել այլ անձի՝ նոտարական կարգով վավերացված լիազորագրի, ՀՀ օրենսդրությամբ սահմանված կարգով նոտարի վավերացրած լիազորագրին հավասարեցված լիազորագրի և օտարերկրյա պետություններում ՀՀ հիվանպատակային հիմնարկների ղեկավարների (հիվանպատոսների) հաստատված լիազորագրի հիման վրա[cite: 22]:
      </li>
      <li>
        Եթե Ավանդատուն Ավանդի ժամկետի ավարտից հետո չի պահանջում վճարել Ավանդի գումարը և հաշվարկված տոկոսագումարները, ապա Բանկը Ավանդի գումարը և հաշվարկված տոկոսները փոխանցում է Ավանդատուի համար բացված ընթացիկ հաշվին կամ Ավանդատուի կողմից ավանդը ներդնելու ժամանակ հայտ-պայմանագրում այդ նպատակ համար նշված հաշվեհամարին[cite: 22]:
      </li>
      <li>
        Հաճախորդը կարող է ներդնել Ավանդ հօգուտ երրորդ անձի. երրորդ անձը Ավանդատուի իրավունքներ ձեռք է բերում այդ իրավունքների վրա հիմնված առաջին իսկ պահանջը Բանկի սահմանված ձևանմուշով Բանկ ներկայացնելու պահից, ընդ որում, եթե երրորդ անձը անչափահաս է, ապա նշված պահանջը նա կարող է Բանկ ներկայացնել 18 (տասնութ) տարին լրանալուց հետո, իսկ մինչ այդ՝ նման իրավունքները վերապահված է անչափահասի օրինական ներկայացուցիչներին: Մինչև երրորդ անձի կողմից ավանդատուի իրավունքների վրա հիմնված պահանջը Բանկ ներկայացնելը՝ ավանդը տնօրինում է ավանդը ներդնող անձը[cite: 22]:
      </li>
      <li>
        Բանկն իրավունք ունի հօգուտ երրորդ անձի ավանդ ներդրվելու դեպքում Ավանդատուից պահանջել երրորդ անձի նույնականացման համար բավարար տեղեկատվության տրամադրում: Գործարքի օրինականության վերաբերյալ կասկածների կամ երրորդ անձին նույնականացնելու անհնարինության դեպքում Բանկն իրավունք ունի հրաժարվել հօգուտ երրորդ անձանց Ավանդի պայմանագիր կնքելուց[cite: 22]:
      </li>
      <li>
        Ավանդի գաղտնիությունը երաշխավորվում է ՀՀ օրենսդրությամբ սահմանված կարգով[cite: 22]:
      </li>
      <li>
        Ավանդի պայմանագիրը կարող է վաղաժամկետ լուծվել ՀՀ օրենսդրության համաձայն իրավասու մարմինների պահանջով Ավանդի գումարի վրա բռնագանձում տարածելու կամ այլ կերպ Ավանդի գումարը ավանդային հաշվից ելքագրելու Բանկի համար պարտադիր պահանջ ստացվելու դեպքում[cite: 22]:
      </li>
      <li>
        Հեռակառավարման համակարգերի միջոցով ավանդի ներդրումը իրականացվում է Հաճախորդի ներկայացրած էլեկտրոնային հայտի հիման վրա (նշվում է ավանդի տեսակը, ավանդի գումարը, ավանդի արժույթը, ժամկետը, տոկոսադրույքը, տոկոսների վճարման պարբերականությունը և ավանդի ներդրման այլ էական պայմաններ): Հաճախորդի ներկայացրած Ավանդի Հայտի հիման վրա Բանկը ձևակերպում է սահմանված ձևի ավանդային պայմանագիր, որը էլեկտրոնային եղանակով հաստատվում է Հաճախորդի կողմից: Ավանդի մուտքը հավաստող փաստաթուղթ է համարվում Ավանդատուի անձնական օգտագործման հեռակառավարման համակարգում արտացոլված մուտքը հավաստող տվյալները[cite: 22]:
      </li>
      <li>
        Հեռակառավարման համակարգերի միջոցով նույն գործառնական օրվա ընթացքում ներկայացված ավանդի ներդրման հայտը Բանկի կողմից ընդունվում է ի կատարման տվյալ գործառնական օրվա ընթացքում և պայմանագիրը համարվում է կողմերի միջև կնքված տվյալ օրը[cite: 22]:
      </li>
    </ol>
  )
},
   {
  title: "Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ol className="list-decimal pl-5 space-y-3">
        <li>
          Ավանդի դիմաց տոկոսագումարների հաշվարկը կատարվում է դրա փաստացի մնացորդի նկատմամբ՝ օրական կտրվածքով: Ներդրված ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվարկվում է սահմանված տոկոսադրույքի 1/365 հարաբերակցությամբ, իսկ նահանջ տարվա համար՝ 1/366 հարաբերակցությամբ[cite: 23]:
        </li>
        <li>
          Տոկոսագումարները հաշվարկվում են ավանդը ներդնելու օրվանից սկսած մինչև ավանդը վերադարձնելու օրվան նախորդող օրը: Ավանդադրման օր է համարվում Ավանդատուի անվամբ բացված ավանդային հաշվին դրամական միջոցների փաստացի մուտքագրման օրը[cite: 23]:
        </li>
        <li>
          Ավանդների դիմաց հաշվեգրված տոկոսագումարները վճարվում են կանխիկ և անկանխիկ եղանակով: Եթե վճարման օրը հանդիսանում է ոչ աշխատանքային օր, ապա վճարումը կատարվում է դրան հաջորդող աշխատանքային օրը[cite: 23]:
        </li>
        <li>
          Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել ինչպես այն արտարժույթով, որով ներդրվել է ավանդը, այնպես էլ ՀՀ դրամով՝ փոխարկման համար հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից սահմանված անկանխիկ առքի փոխարժեքը[cite: 23]:
        </li>
        <li>
          Հաճախորդին (ռեզիդենտներին և ոչ ռեզիդենտներին) վճարվող տոկոսագումարները ենթակա են հարկման՝ համաձայն ՀՀ Հարկային օրենսգրքի, ընդ որում Բանկը, հանդիսանալով հարկային գործակալ, համապատասխան եկամտային հարկի գումարները գանձում է Ավանդատուի հաշվեգրված և վճարման ենթակա տոկոսագումարներից[cite: 23]:
        </li>
        <li>
          Ավանդատուի պահանջով ավանդի գումարը ժամկետից շուտ վերադարձվելու դեպքում Բանկը կատարում է տոկոսների վերահաշվարկ: Ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարվում են տվյալ պահին վերահաշվարկի համար Բանկի կողմից սահմանված տոկոսադրույքով և Ավանդի գումարից գանձվում է վճարված տոկոսագումարները, եթե Ավանդի տվյալ տեսակի համար Բանկի կողմից այլ պայմաններ նախատեսված չեն[cite: 23]:
        </li>
      </ol>

      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mt-4 text-sm">
        <p className="font-bold text-purple-900 mb-1">Ուշադրություն՝</p>
        <p>
          Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՍՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանաք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերանդրեք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02) կարող եք ծանոթանալ www.cba.am կայքում[cite: 23]:
        </p>
      </div>
    </div>
  )
},
    {
  title: "Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն",
  content: (
    <ol className="list-decimal pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>
        Պայմանագրի գործողության ընթացքում առնվազն երեսնօրյա պարբերականությամբ Բանկը Ավանդատուի կողմից նախընտրելի հաղորդակցման եղանակով վերջինիս կտրամադրի յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:
      </li>
      <li>
        Այլ դեպքերում Ավանդատուի պահանջով Բանկը կտրամադրի քաղվածք, քաղվածքի կրկնօրինակ կամ այլ տեղեկատվության՝ համաձայն Բանկի կողմից սահմանված սակագների:
      </li>
    </ol>
  )
},
{
  title: "Երաշխավորված ավանդների չափերը",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p>
        1. Ավանդի գումարի հատուցումը և հատուցման չափերը երաշխավորված են «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքով: Երաշխավորվող սահմանաչափերն են՝
      </p>

      {/* Աղյուսակ */}
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-purple-200 text-sm text-center">
          <thead>
            <tr className="bg-purple-100/60 text-purple-900 font-semibold">
              <th className="border border-purple-200 p-3">Ավանդի արժութային կառուցվածքը</th>
              <th className="border border-purple-200 p-3">Եթե նույն բանկում ունեք միայն դրամային ավանդ</th>
              <th className="border border-purple-200 p-3">Եթե նույն բանկում ունեք միայն արտարժութային ավանդ</th>
              <th className="border border-purple-200 p-3" colSpan="2">Եթե նույն բանկում ունեք և ՀՀ դրամով, և արտարժույթով ավանդ</th>
            </tr>
            <tr className="bg-purple-50/40 text-purple-900 text-xs font-medium">
              <th className="border border-purple-200 p-2"></th>
              <th className="border border-purple-200 p-2"></th>
              <th className="border border-purple-200 p-2"></th>
              <th className="border border-purple-200 p-2">Եթե դրամային ավանդը 7 միլիոն դրամից ավել է</th>
              <th className="border border-purple-200 p-2">Եթե դրամային ավանդը 7 միլիոն դրամից պակաս է</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-purple-200 p-3 font-semibold bg-purple-50/20">Ավանդի երաշխավորման առավելագույն չափը</td>
              <td className="border border-purple-200 p-3">16 միլիոն ՀՀ դրամ</td>
              <td className="border border-purple-200 p-3">7 միլիոն ՀՀ դրամ</td>
              <td className="border border-purple-200 p-3">16 միլիոն ՀՀ դրամ (երաշխավորվում է միայն դրամային ավանդը)</td>
              <td className="border border-purple-200 p-3">7 միլիոն ՀՀ դրամ (երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցման ենթակա դրամային ավանդի տարբերության չափով)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        2. Բանկում Հաճախորդի ունեցած բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ:
      </p>
    </div>
  )
},
   {
  title: "Ավանդատուներին անվճար տրամադրվող վճարային քարտեր",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <ol className="list-decimal pl-5 space-y-3">
        <li>
          ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:
        </li>
        <li>
          Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.
        </li>
      </ol>

      {/* Աղյուսակ */}
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-purple-200 text-sm text-center">
          <thead>
            <tr className="bg-purple-100/60 text-purple-900 font-semibold">
              <th className="border border-purple-200 p-3">Ավանդի արժույթ/ Քարտի տեսակ *</th>
              <th className="border border-purple-200 p-3">ArCa Classic/ Mastercard Standard/ Visa Classic</th>
              <th className="border border-purple-200 p-3">Mastercard Gold/Evoca Travel/ Visa Platinum (ըստ հաճախորդի ընտրության)</th>
              <th className="border border-purple-200 p-3">VISA Infinite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-purple-200 p-3 font-semibold bg-purple-50/20">ՀՀ դրամ</td>
              <td className="border border-purple-200 p-3">500,000 - 10,000,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">10,000,000 - 40,000,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">40,000,000 և ավել</td>
            </tr>
            <tr>
              <td className="border border-purple-200 p-3 font-semibold bg-purple-50/20">ԱՄՆ դոլար</td>
              <td className="border border-purple-200 p-3">1,000 - 25,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">25,000 - 100,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">100,000 և ավել</td>
            </tr>
            <tr>
              <td className="border border-purple-200 p-3 font-semibold bg-purple-50/20">Եվրո</td>
              <td className="border border-purple-200 p-3">1,000 - 20,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">20,000 - 100,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">100,000 և ավել</td>
            </tr>
            <tr>
              <td className="border border-purple-200 p-3 font-semibold bg-purple-50/20">ՌԴ ռուբլի</td>
              <td className="border border-purple-200 p-3">60,000 - 3,000,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">2,000,000 - 7,000,000 (ներառյալ)</td>
              <td className="border border-purple-200 p-3">7,000,000 և ավել</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="list-disc pl-5 space-y-3">
        <li>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության:</li>
        <li>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով՝ բացառությամբ Infinite քարտի:</li>
        <li>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով: Ավանդատուի կողմից 1-ից ավել ավանդներ ներդնելու դեպքում յուրաքանչյուր ավանդը դիտարկվում է առանձին:</li>
        <li>Ավանդի ժամկետը լրանալու կամ ավանդատուի կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու դեպքում, Ավանդի ներդրման դիմաց տրամադրված վճարային քարտի սպասարկումը շարունակվում է իրականացվել առանց տարեկան սպասարկման վճարի գանձման, մինչև վճարային քարտի սպասարկման ժամկետի ավարտը, բացառությամբ Ավանդի ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտերի:</li>
        <li>Visa Infinite վճարային քարտի քարտապանների կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու կամ Ավանդի ժամկետը լրանալու դեպքում Բանկն իրավունք ունի փակել նաև այդ Ավանդի ներդրման դիմաց տրամադրված Visa Infiite վճարային քարտը կամ հաճախորդի ցանկության դեպքում սկսել կիրառել տվյալ պահին Բանկում գործող սակագները և դրույքները:</li>
        <li>Տրամադրվող հասանելի քարտի դասը որոշվում է քարտի բացման պահին ավանդի գումարի չափով: Ավանդի համալրման դեպքում, եթե հաճախորդը ցանկանում է ավելի բարձր դասի քարտ, ապա գործող քարտը պետք է փակվի և բացվի նոր ավելի բարձր դասի քարտ:</li>
        <li>
          Քարտի վերաթողարկումը գործողության ժամկետը լրանալու կամ այլ պատճառով, իրականացվում է.
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերաթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանաչափով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ:</li>
            <li>Բանկի կողմից մատուցվող ծառայությունների սակագներով, եթե ավանդի ժամկետը լրացել է և չի երկարաձգվել:</li>
          </ul>
        </li>
        <li>Քարտերի սպասարկման այլ սակագները և պայմանները՝ համաձայն Բանկի կողմից մատուցվող ծառայությունների սակագների և պայմանների:</li>
      </ul>
    </div>
  )
},
   {
  title: "Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p className="font-semibold text-gray-900">1. Տոկոսագումարների հաշվարկման բանաձևն է`</p>
      
      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 font-mono text-sm">
        I = (P x t / 365 x r) - 10% (եկամտային հարկ)
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">որտեղ՝</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>I</strong>` տոկոսագումար</li>
          <li><strong>P</strong>` ներդրված ավանդի գումար</li>
          <li><strong>r</strong>` տարեկան անվանական տոկոսադրույք</li>
          <li><strong>t</strong>` ավանդի ներդրման օրերի քանակ</li>
        </ul>
      </div>

      <p className="font-semibold text-gray-900 pt-2">2. Տոկոսագումարների հաշվարկման օրինակ՝</p>
      <p>Ենթադրնք ներդրվել է ժամկետային ավանդ հետևյալ պայմաններով`</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ներդրված ավանդի գումար` 1 000 000 (մեկ միլիոն) ՀՀ դրամ</li>
        <li>Ավանդի ներդրման ժամկետ` 1 տարի (365 օր)</li>
        <li>Տարեկան անվանական տոկոսադրույք` 12 %</li>
        <li>Տոկոսագումարների վճարում` պայմանագրի ժամկետի վերջում</li>
      </ul>

      <p>Ելնելով վերոհիշյալ բանաձևից և ներդրվող ավանդի պայմաններից՝ հաշվարկենք տարեկան տոկոսագումարների չափը`</p>

      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 font-mono text-sm">
        I = (1 000 000 x 363* / 365 x 0.12) - 10%
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">Որտեղից`</p>
        <p className="font-mono text-sm font-semibold text-purple-900">I = 107 704.11 ՀՀ դրամ</p>
      </div>

      <p className="text-xs text-gray-500 italic">
        *ավանդի ներդրման օրերի քանակից նվազեցված 1 օր՝ ավանդը վերադարձնելու օրը:
      </p>
    </div>
  )
},
    {
  title: "Ավանդի տարեկան տոկոսային եկամտաբերության չափը",
  content: (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p>
        8.1. Ավանդի տարեկան տոկոսային եկամտաբերության չափի հաշվարկման համար հիմք է ընդունվում ՀՀ ԿԲ «Բանկային ավանդների տարեկան տոկոսային եկամտաբերության հաշվարկումը» Կանոնակարգ 8/02-ով սահմանված հետևյալ բանաձևը`
      </p>

      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 font-mono text-sm">
        APY=(1+r/n)<sup>n</sup>-1,
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">որտեղ՝</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>APY</strong>` տարեկան տոկոսային եկամտաբերությունն է:</li>
          <li><strong>r</strong>` տարեկան պարզ տոկոսադրույքն է:</li>
          <li><strong>n</strong>` մեկ տարվա ընթացքում տոկոսագումարների կապիտալացման հաճախականությունն է:</li>
        </ul>
      </div>

      <p className="font-semibold text-gray-900 pt-2">
        8.2. Տարեկան տոկոսային եկամտաբերության հաշվարկման օրինակ՝ տոկոսագումարների կանոնավոր ամսական կապիտալացմամբ
      </p>
      <p>Ենթադրնք ներդրվել է ժամկետային ավանդ հետևյալ պայմաններով`</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ավանդի ներդրման ժամկետ՝ 1 տարի (365 օր)</li>
        <li>Տարեկան անվանական տոկոսադրույք՝ 12 %</li>
        <li>Տոկոսների կապիտալացումների հաճախականություն՝ ամսական՝ տարվա ընթացքում 12 անգամ, յուրաքանչյուր ամսվա ժամանակահատվածի վերջում:</li>
      </ul>
      <p>Ելնելով տոկոսային եկամտավերության հաշվարկման բանաձևից`</p>

      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 font-mono text-sm">
        APY=(1+0.12/12)<sup>12</sup>-1
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">Որտեղից`</p>
        <p className="font-mono text-sm font-semibold text-purple-900">APY=0.126825x100=12.7%</p>
      </div>

      <p className="font-semibold text-gray-900 pt-2">
        8.3. Տարեկան տոկոսային եկամտաբերության հաշվարկման օրինակ՝ տոկոսագումարների կապիտալացմամբ պայմանագրի վերջում
      </p>
      <p>Ենթադրնք ներդրվել է ժամկետային ավանդ հետևյալ պայմաններով`</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Ավանդի ներդրման ժամկետ՝ 1 տարի (365 օր)</li>
        <li>Տարեկան անվանական տոկոսադրույք՝ 12 %</li>
        <li>Տոկոսների կապիտալացումների հաճախականություն՝ պայմանագրի ժամկետի վերջում</li>
      </ul>
      <p>Ելնելով վերոհիշյալ բանաձևից և ներդրվող ավանդի պայմաններից՝ հաշվարկենք տարեկան տոկոսային եկամտաբերության չափը`</p>

      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 font-mono text-sm">
        APY=(1+0.12/1)<sup>1</sup>-1
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-900">Որտեղից`</p>
        <p className="font-mono text-sm font-semibold text-purple-900">APY=0.12x100=12%</p>
      </div>
    </div>
  )
},
    {
  title: "Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ",
  content: (
    <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
      <p>
        Տարեկան տոկոսային եկամտաբերությունը ըստ ավանդատեսակների՝ հաշվարկված ՀՀ Կենտրոնական Բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև[cite: 22]:
      </p>

      <div className="text-xs text-gray-500 bg-purple-50/50 p-3 rounded-lg border border-purple-100">
        <p><strong>ԱՏ</strong> - անվանական տոկոսադրույք</p>
        <p><strong>ՏՏԵ</strong> - տարեկան տոկոսային եկամտաբերություն</p>
      </div>

      {/* 1. ԴԱՍԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿ */}
      <div className="space-y-3">
        <h3 className="font-bold text-purple-900 text-base">ԴԱՍԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ</h3>
        
        {/* Ամսական վճարում */}
        <div className="space-y-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների ամսական վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.64%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.76%</td>
                  <td className="border border-purple-200 p-2">9.00%</td>
                  <td className="border border-purple-200 p-2">9.38%</td>
                  <td className="border border-purple-200 p-2">9.50%</td>
                  <td className="border border-purple-200 p-2">9.92%</td>
                  <td className="border border-purple-200 p-2">10.00%</td>
                  <td className="border border-purple-200 p-2">10.47%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                  <td className="border border-purple-200 p-2">3.75%</td>
                  <td className="border border-purple-200 p-2">3.82%</td>
                  <td className="border border-purple-200 p-2">4.25%</td>
                  <td className="border border-purple-200 p-2">4.33%</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.85%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.26%</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.25%</td>
                  <td className="border border-purple-200 p-2">2.27%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.85%</td>
                  <td className="border border-purple-200 p-2">5.25%</td>
                  <td className="border border-purple-200 p-2">5.38%</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.90%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Եռամսյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների եռամսյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.61%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.71%</td>
                  <td className="border border-purple-200 p-2">9.00%</td>
                  <td className="border border-purple-200 p-2">9.31%</td>
                  <td className="border border-purple-200 p-2">9.50%</td>
                  <td className="border border-purple-200 p-2">9.84%</td>
                  <td className="border border-purple-200 p-2">10.00%</td>
                  <td className="border border-purple-200 p-2">10.38%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                  <td className="border border-purple-200 p-2">3.75%</td>
                  <td className="border border-purple-200 p-2">3.80%</td>
                  <td className="border border-purple-200 p-2">4.25%</td>
                  <td className="border border-purple-200 p-2">4.32%</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.84%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.26%</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.25%</td>
                  <td className="border border-purple-200 p-2">2.27%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.84%</td>
                  <td className="border border-purple-200 p-2">5.25%</td>
                  <td className="border border-purple-200 p-2">5.35%</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.87%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Կիսամյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների կիսամյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.58%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.64%</td>
                  <td className="border border-purple-200 p-2">9.00%</td>
                  <td className="border border-purple-200 p-2">9.20%</td>
                  <td className="border border-purple-200 p-2">9.50%</td>
                  <td className="border border-purple-200 p-2">9.72%</td>
                  <td className="border border-purple-200 p-2">10.00%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.77%</td>
                  <td className="border border-purple-200 p-2">3.75%</td>
                  <td className="border border-purple-200 p-2">3.79%</td>
                  <td className="border border-purple-200 p-2">4.25%</td>
                  <td className="border border-purple-200 p-2">4.30%</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.81%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.25%</td>
                  <td className="border border-purple-200 p-2">2.26%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.77%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.81%</td>
                  <td className="border border-purple-200 p-2">5.25%</td>
                  <td className="border border-purple-200 p-2">5.32%</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.83%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Տարեկան կամ ժամկետի վերջում վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների տարեկան կամ ժամկետի վերջում վճարելու դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">8.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">9.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.50%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.00%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.00%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. ՄԱՆԿԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿ */}
      <div className="space-y-3 pt-4">
        <h3 className="font-bold text-purple-900 text-base">ՄԱՆԿԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-200 text-center text-xs">
            <thead>
              <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                <th className="border border-purple-200 p-2">Արժույթ</th>
                <th className="border border-purple-200 p-2">ԱՏ</th>
                <th className="border border-purple-200 p-2">ՏՏԵ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                <td className="border border-purple-200 p-2">9.50%</td>
                <td className="border border-purple-200 p-2">9.50%</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                <td className="border border-purple-200 p-2">4.50%</td>
                <td className="border border-purple-200 p-2">4.50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. ԷՎՈԿԱ ONLINE ԱՎԱՆԴԱՏԵՍԱԿ */}
      <div className="space-y-3 pt-4">
        <h3 className="font-bold text-purple-900 text-base">ԷՎՈԿԱ ONLINE ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ</h3>
        
        {/* Ամսական վճարում */}
        <div className="space-y-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների ամսական վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.64%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.76%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.65%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">10.20%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.74%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.07%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.59%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.12%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.26%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.53%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.04%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.85%</td>
                  <td className="border border-purple-200 p-2">5.25%</td>
                  <td className="border border-purple-200 p-2">5.38%</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.90%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Եռամսյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների եռամսյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.61%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.71%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.57%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">10.11%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.65%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.78%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.06%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.58%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.09%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.26%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.52%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.03%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.84%</td>
                  <td className="border border-purple-200 p-2">5.25%</td>
                  <td className="border border-purple-200 p-2">5.35%</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.87%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Կիսամյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների կիսամյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.58%</td>
                  <td className="border border-purple-200 p-2">7.50%</td>
                  <td className="border border-purple-200 p-2">7.64%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.46%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">9.99%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.51%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">1.75%</td>
                  <td className="border border-purple-200 p-2">1.76%</td>
                  <td className="border border-purple-200 p-2">2.75%</td>
                  <td className="border border-purple-200 p-2">2.77%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.04%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.55%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.06%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">0.75%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">1.25%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.01%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.52%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.02%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">4.75%</td>
                  <td className="border border-purple-200 p-2">4.81%</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.58%</td>
                  <td className="border border-purple-200 p-2">6.00%</td>
                  <td className="border border-purple-200 p-2">6.09%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Տարեկան կամ ժամկետի վերջում վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների տարեկան կամ ժամկետի վերջում վճարելու դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">8.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">9.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.75%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.25%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.25%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.50%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.00%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. ՍԻՄՓՈՆԻԿ ԱՎԱՆԴԱՏԵՍԱԿ */}
      <div className="space-y-3 pt-4">
        <h3 className="font-bold text-purple-900 text-base">ՍԻՄՓՈՆԻԿ ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ</h3>
        
        {/* Ամսական վճարում */}
        <div className="space-y-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների ամսական վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.90%</td>
                  <td className="border border-purple-200 p-2">7.75%</td>
                  <td className="border border-purple-200 p-2">8.03%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.65%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">10.20%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.74%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.04%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.07%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.59%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.12%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.51%</td>
                  <td className="border border-purple-200 p-2">1.51%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.53%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.04%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.12%</td>
                  <td className="border border-purple-200 p-2">5.64%</td>
                  <td className="border border-purple-200 p-2">5.64%</td>
                  <td className="border border-purple-200 p-2">6.00%</td>
                  <td className="border border-purple-200 p-2">6.17%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Եռամսյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների եռամսյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.87%</td>
                  <td className="border border-purple-200 p-2">7.75%</td>
                  <td className="border border-purple-200 p-2">7.98%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.57%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">10.11%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.65%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.03%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.06%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.58%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.09%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.50%</td>
                  <td className="border border-purple-200 p-2">1.51%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.02%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.52%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.03%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.09%</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.61%</td>
                  <td className="border border-purple-200 p-2">6.00%</td>
                  <td className="border border-purple-200 p-2">6.14%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Կիսամյակային վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների կիսամյակային վճարման դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2">5.75%</td>
                  <td className="border border-purple-200 p-2">5.83%</td>
                  <td className="border border-purple-200 p-2">7.75%</td>
                  <td className="border border-purple-200 p-2">7.90%</td>
                  <td className="border border-purple-200 p-2">9.25%</td>
                  <td className="border border-purple-200 p-2">9.46%</td>
                  <td className="border border-purple-200 p-2">9.75%</td>
                  <td className="border border-purple-200 p-2">9.99%</td>
                  <td className="border border-purple-200 p-2">10.25%</td>
                  <td className="border border-purple-200 p-2">10.51%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.01%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.02%</td>
                  <td className="border border-purple-200 p-2">4.00%</td>
                  <td className="border border-purple-200 p-2">4.04%</td>
                  <td className="border border-purple-200 p-2">4.50%</td>
                  <td className="border border-purple-200 p-2">4.55%</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.06%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.00%</td>
                  <td className="border border-purple-200 p-2">1.50%</td>
                  <td className="border border-purple-200 p-2">1.51%</td>
                  <td className="border border-purple-200 p-2">2.00%</td>
                  <td className="border border-purple-200 p-2">2.01%</td>
                  <td className="border border-purple-200 p-2">2.50%</td>
                  <td className="border border-purple-200 p-2">2.52%</td>
                  <td className="border border-purple-200 p-2">3.00%</td>
                  <td className="border border-purple-200 p-2">3.02%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2">5.00%</td>
                  <td className="border border-purple-200 p-2">5.06%</td>
                  <td className="border border-purple-200 p-2">5.50%</td>
                  <td className="border border-purple-200 p-2">5.58%</td>
                  <td className="border border-purple-200 p-2">6.00%</td>
                  <td className="border border-purple-200 p-2">6.09%</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                  <td className="border border-purple-200 p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Տարեկան կամ ժամկետի վերջում վճարում */}
        <div className="space-y-2 pt-2">
          <p className="font-semibold text-xs text-gray-800">Տոկոսների տարեկան կամ ժամկետի վերջում վճարելու դեպքում</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-purple-200 text-center text-xs">
              <thead>
                <tr className="bg-purple-100/60 text-purple-900 font-semibold">
                  <th className="border border-purple-200 p-2">Արժույթ</th>
                  <th className="border border-purple-200 p-2" colSpan="2">91-180 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">181-365 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">366-545 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">546-730 օր</th>
                  <th className="border border-purple-200 p-2" colSpan="2">731-1095 օր</th>
                </tr>
                <tr className="bg-purple-50/40 text-purple-900 font-medium">
                  <th className="border border-purple-200 p-1"></th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                  <th className="border border-purple-200 p-1">ԱՏ</th>
                  <th className="border border-purple-200 p-1">ՏՏԵ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">AMD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">8.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">9.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">10.75%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">USD</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">4.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.25%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">EUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.254%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">1.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">2.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">3.25%</td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-2 font-semibold bg-purple-50/20">RUR</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">5.75%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">6.25%</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                  <td className="border border-purple-200 p-2" colSpan="2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
    "Տեղեկատվական ամփոփագիր (Ավանդներ) 09.06.2026",
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.",
    "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026"
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button onClick={() => handleNavigation('/deposits')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Ավանդներ</button>
              <button onClick={() => handleNavigation('/hy/deposits-important-information')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0">Կարևոր տեղեկատվություն</button>
            </nav>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Ավանդներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Կարևոր տեղեկատվություն</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Կարևոր տեղեկատվություն
          </h1>

          {/* Ընդհանուր դրույթներ */}
          <div className="mb-12 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ընդհանուր դրույթներ</h2>
            
            <p><span className="font-bold text-purple-900">1.</span> «ԷՎՈԿԱԲԱՆԿ» ԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների (այսուհետ՝ Ավանդ) ներգրավում[cite: 21]:</p>
            
            <p><span className="font-bold text-purple-900">2.</span> Ավանդները ներգրավվում են ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով[cite: 21]:</p>
            
            <p><span className="font-bold text-purple-900">3.</span> Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով։ Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով[cite: 21]:</p>
            
            <p><span className="font-bold text-purple-900">4.</span> Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ էլեկտրոնային ձևով ներկայացնելով։ Հայտ-պայմանագրում/ել. հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ[cite: 21]:</p>
            
            <div>
              <p><span className="font-bold text-purple-900">5.</span> Ավանդների ներդրման համար գործառնական օր է համարվում՝</p>
              <ul className="list-decimal pl-6 space-y-2 mt-2">
                <li>Գլխամասում և մասնաճյուղերում ներդրվող ավանդների գծով՝ տվյալ ստորաբաժանման Հաճախորդների սպասարկման համար սահմանված ժամերը[cite: 21]:</li>
                <li>Հեռակառավարման համակարգի միջոցով ներդրվող ավանդների համար՝ տվյալ օրացուցային օրվա 24-ժամյա ժամանակահատվածը[cite: 21]:</li>
              </ul>
            </div>

            <p><span className="font-bold text-purple-900">6.</span> Ավանդների ներդրման և համալրման համար տվյալ գործառնական օրվա ընթացքում ներկայացված հայտերը կատարվում են միևնույն գործառնական օրվա ընթացքում[cite: 21]:</p>

            <p><span className="font-bold text-purple-900">7.</span> Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի[cite: 21]:</p>

            <p><span className="font-bold text-purple-900">8.</span> Ավանդի գումարի վերադարձը կատարվում է Ավանդի պայմանագրի վերջին օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ աշխատանքային օրը[cite: 21]:</p>

            <p><span className="font-bold text-purple-900">9.</span> Հաշվեգրված տոկոսների վճարումն իրականացվում է համաձայն Հաճախորդի կողմից Հայտ-պայմանագրում/Պայմանագրում նշված տոկոսների վճարման պարբերականության[cite: 21]:</p>

            <div>
              <p><span className="font-bold text-purple-900">10.</span> Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները սահմանվում են Բանկի սակագներով և դրույքներով, բացառությամբ ՌԴ ռուբլով ավանդների[cite: 21]:</p>
            </div>

            <p><span className="font-bold text-purple-900">11.</span> Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել այն արտարժույթով, որով ներդրվել է ավանդը, ինչպես նաև ՀՀ դրամով՝ հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից սահմանված անկանխիկ առքի փոխարժեքը[cite: 22]:</p>
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
                    <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/20">
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