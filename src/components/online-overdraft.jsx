import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
 
  const cards = [
    { id: 1, title: "Անգրավ սպառողական վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg", path: "/loans/unsecured-consumer" },
    { id: 2, title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg", path: "/hy/loans/car-loans/car-loans" },
    { id: 3, title: "Գույքի գրավով ապահովված վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg", path: "/hy/loans/consumer-loans/property-secured-loan" },
    { id: 4, title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER", img: "	https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png", path: "/hy/loans/installment/evocapower-loan" },
    { id: 5, title: "Ոսկու գրավով (լոմբարդային) վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg", path: "/hy/loans/consumer-loans/gold-secured-pawn-loans" },
    { id: 6, title: "Տեղում Ապառիկ", img: "	https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg", path: "/installment/point-of-sale-loans" },
    { id: 7, title: "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ", img: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg", path: "/unsecured-consumer-loans/salary-overdrafts" },
    { id: 8, title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով", img: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg", path: "/mortgage-loans/residential-mortgage-loans" },
    { id: 9, title: "Action", img: "	https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png", path: "/online-loans/action-loan" },
    { id: 10, title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png", path: "/mortgage-loans/for-displaced-families-of-nagorno-karabakh" },
    { id: 11, title: "Հողամասի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg", path: "/mortgage-loans/land-acquisition-loan" },
    { id: 12, title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով", img: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png", path: "/mortgage-loans/micro-renovation-loan-with-bank-resources" },
    { id: 13, title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ", img: "	https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png", path: "/car-loans/leasing-of-vehicles-for-individuals" },
    { id: 14, title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)", img: "	https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png", path: "/online-loans/online-overdraft" },
    { id: 15, title: "Անհատական վարկ «Ներդրումային»", img: " https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png", path: "/consumer-loans/individual-investment-loan" },
    { id: 16, title: "Ավտոկայանատեղիի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg", path: "/unsecured-consumer-loans/parking-space-purchase-loan" },
    { id: 17, title: "Հեծանիվի ձեռքբերման վարկ", img: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png", path: "/installment/bicycle-purchase-loan" },
    { id: 18, title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ", img: "	https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png", path: "/mortgage-loans/housing-mortgages-for-non-resident-individuals" },
    { id: 19, title: "Վերանորոգման վարկ EvocaHOME", img: " 	https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png", path: "/installment/evocahome" },
    { id: 20, title: "Դրամական միջոցների գրավով ապահովված անհատական վարկ", img: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg", path: "/consumer-loans/deposit-secured-credit-line-retail    " },
    { id: 21, title: "Առևտրային հիփոթեքային վարկեր", img: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg", path: "/mortgage-loans/commercial-mortgage-loans" },
    { id: 22, title: "ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր", img: " https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program" },
    { id: 23, title: "ԱՀԸ-ի ծրագրով կառուցապատման վարկեր", img: "	https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png", path: "/mortgage-loans/construction-loan-national-mortgage-company" },
    { id: 24, title: "ԱՀԸ-ի ծրագրով վերանորոգման վարկեր", img: " https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg", path: "/mortgage-loans/renovation-loans-under-national-mortgage-company" },
    { id: 25, title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»", img: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg", path: "/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program" },
    { id: 26, title: "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ", img: "	https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg", path: "/unsecured-consumer-loans/credit-line-with-visa-infinite-card" },
    { id: 27, title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին", img: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png", path: "/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh" },
    { id: 28, title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին", img: " 	https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png", path: "/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh" },
    { id: 29, title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ", img: " 	https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg", path: "/unsecured-consumer-loans/student-loans" },
    { id: 30, title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր", img: " 	https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png", path: "/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia" },
    { id: 31, title: "Evolution", img: " https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png", path: "/unsecured-consumer-loans/evolution" },
    { id: 32, title: "Հիփոթեքային վարկեր Զինծառայողներին", img: "	https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png", path: "/unsecured-consumer-loans/evolution" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա քարտերի բաժնի համար) */}
      <div className="bg-purple-800 text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/hy/loans" className="text-white hover:text-purple-200 transition-colors">Վարկեր</Link>
          <Link to="/hy/credit-history-and-score" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Վարկային պատմություն և սքոր</Link>
          <Link to="/loans/important-info" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Կարևոր տեղեկատվություն</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Վճարային քարտով օվերդրաֆտ (վարկային քարտ)
            </h1>
                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:
            </p>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16947885698863/560x400.png" 
                alt="Arca Union Pay Co-badge Card" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

       {/* Ներդիրների կոճակներ (Tabs) */}
       <div className="flex border-b border-gray-200 space-x-8 overflow-x-auto">
         <button
           onClick={() => setActiveTab('about')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'about'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Վարկի մասին
         </button>
         <button
           onClick={() => setActiveTab('conditions')}
           className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
             activeTab === 'conditions'
               ? 'border-purple-600 text-purple-700'
               : 'border-transparent text-gray-500 hover:text-gray-800'
           }`}
         >
           Պայմաններ և սակագներ
         </button>
       </div>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ (ԿԱԽՎԱԾ ԸՆՏՐՎԱԾ ԹԱԲԻՑ) */}
        
       {activeTab === 'about' && (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
      <p>
        <strong className="text-purple-700">Evoca</strong> հաճախորդ՞ ես. ստացիր <strong className="text-purple-700">Online Օվերդրաֆտ</strong> քո Evoca քարտին մինչև 3 րոպեում։
      </p>
      <p>
        Իսկ եթե դեռևս Evoca քարտապան չես, օվերդրաֆտին դիմելու ընթացքում տեղում բացիր <strong className="text-purple-700">Evoca Digital քարտ</strong> և ստացիր օվերդրաֆտը քո քարտին։ Evoca Digital քարտը կհայտնվի քո EvocaTOUCH հավելվածում հաշված վայրկյանների ընթացքում։
      </p>
      
      <div className="space-y-3 pt-2">
        <p className="font-semibold text-gray-900">Մինչ կդիմես օվերդրաֆտի համար՝</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Համոզվիր՝ արդյոք ունես բավարար ինֆորմացիա օվերդրաֆտի մասին։</li>
          <li>EvocaTOUCH հավելվածում օնլայն ստուգիր՝ արդյոք համապատասխանում ես օվերդրաֆտ ստանալու պահանջներին։</li>
          <li>Տեղում տես՝ որքան կկազմի քո օվերդրաֆտի ամսական մարումը։</li>
        </ul>
      </div>

      <p className="pt-2">
        <strong className="text-purple-700">Online Օվերդրաֆտը</strong> տրամադրվում է 100,000 դրամից 10,000,000 դրամի չափով և 36 ամիս մարման ժամկետով՝ վերականգնվող՝ ամսական նվազագույն մարման պահանջով։
      </p>

      <div className="space-y-3 pt-2">
        <p className="font-semibold text-gray-900">Անվանական տոկոսադրույքը կազմում է՝</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>ՀՀ դրամ՝ 16%-21.5%</li>
        </ul>
      </div>

      <div className="space-y-6 pt-4 border-t border-gray-100">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Ի՞նչ է օվերդրաֆտը և ինչով է այն տարբերվում սպառողական վարկից։</h4>
          <p className="text-gray-700">
            Օվերդրաֆտը <a href="#" className="text-purple-700 underline">օնլայն վարկի</a> տեսակ է, որը հնարավորություն է տալիս ծախսել ավելի շատ գումար, քան տվյալ պահին ունես քո հաշվեհամարի վրա: Օվերդրաֆտի գումարը կարող էս կանխիկացնել կամ օգտագործել անկանխիկ տարբերակով՝ կատարելով գնումներ կամ օնլայն վճարումներ։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-1">Օրինակ՝</h4>
          <p className="text-gray-700">
            Եթե քո քարտին ունես 1,000 դրամ, սակայն ցանկանում էս գնել 5,000 դրամ արժեքով ապրանք, տվյալ քարտի վրա բացված օվերդրաֆտի շնորհիվ կարող ես կատարել տվյալ գնումը, իսկ գումարը հետ վճարել ավելի ուշ։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Ինչպե՞ս դիմել Online Օվերդրաֆտի համար.</h4>
          <p className="text-gray-700">
            EvocaTOUCH հավելվածում մուտք գործիր Վարկեր բաժին և ընտրիր Օվերդրաֆտ։ Այնուհետև ծանոթացիր պայմաններին և լրացրու անհրաժեշտ դաշտերը։ Վերջ, քո օվերդրաֆտը կհաստատվի հաշված րոպեների ընթացքում։
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <em>Օվերդրաֆտին դիմելու քայլերի հաջորդականությունը տես ստորև հոլովակում։</em>
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Ինչպե՞ս է բանկը որոշում վարկի գումարի չափը և տոկոսադրույքը.</h4>
          <p className="text-gray-700">
            Վարկը, վարկի գումարի չափը և տոկոսադրույքը հաստատվում են օվերդրաֆտի համար դիմողի վարկունակության չափանիշների հիման վրա։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Որքան ժամանակ է տևում Online Օվերդրաֆտին դիմելու պրոցեսը.</h4>
          <p className="text-gray-700">
            Օվերդրաֆտի տրամադրման կամ մերժման որոշումը կայացվում է վայրկյանների ընթացքում։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Արդյո՞ք անհրաժեշտ է մոտենալ Բանկ Online Օվերդրաֆտ ստանալու համար</h4>
          <p className="text-gray-700">
            Online Օվերդրաֆտից օգտվելու համար անհրաժեշտ է պարզապես ունենալ EvocaTOUCH հավելված։ Լրացուցիչ Բանկ մոտենալու անհրաժեշտություն չկա։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Ինչպե՞ս է կատարվում Online Օվերդրաֆտի մարումը.</h4>
          <p className="text-gray-700">
            Օվերդրաֆտի շահառուն պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը (նվազագույնը՝ 5,000 ՀՀ դրամ) և օգտագործված գումարի մասով կուտակված տոկոսագումարը։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-1">Օրինակ՝</h4>
          <p className="text-gray-700">
            Դու պատրաստվում ես գնել բრենդային կոշիկ, որի արժեքն է պայմանական 100,000 դրամ։ Դիմելով օվերդրաֆտի համար՝ դու ստանում ես 1,000,000 դրամ սահմանաչափ՝ 16% տոկոսադրույքով, որից օգտագործում ես միայն 100,000 դրամը՝ կոշիկը գնելու համար։
          </p>
          <p className="text-gray-700 mt-2">
            Արդյունքում՝ տվյալ ամսվա կտրվածքով դու Բանկին վճարում ես օգտագործված 100,000 դրամի 5%-ը, այսինքն՝ 5000 դրամ (նվազագույնը՝ 5,000 դրամ, որը կարող ես նրդից օգտագործել վճարման հաջորդ օրվանից), և կուտակված տոկոսագումարը՝ 1,333.33 դրամ։ Այսինքն ընդհանուր մարումը տվյալ ամիս կկազմի՝ 5,000+1,333.33=6,333.33 դրամ։
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">• Արդյո՞ք օվերդրաֆտի օգտագործումն ազդում է վարկունակության վրա.</h4>
          <p className="text-gray-700">
            Օվերդրաֆտի օգտագործումը չի կարող անդրադառնալ վարկունակության վրա: Սակայն նոր օվերդրաֆտի համար հաճախակի հայտ ներկայացնելը կարող է արդյունքում ազդել վարկունակության վրա։
          </p>
        </div>
      </div>
    </div>

    {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex space-x-3 pb-2">
        <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
      </div>

      <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">10 մլն ֏</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Սահմանաչափ</span>
        </div>
      </div>

      <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">մինչև</p>
          <span className="text-3xl font-extrabold text-purple-700">36 ամիս</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Մարման ժամկետ</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">սկսած</p>
          <span className="text-3xl font-extrabold text-purple-700">16%-ից</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium text-base">Տարեկան անվանական տոկոսադրույք</span>
        </div>
      </div>
    </div>
  </div>
)}

       {activeTab === 'conditions' && (
  <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 w-1/3 align-top">Տրամադրման նպատակը</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով[cite: 15]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ովքեր կարող են դիմել</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">21 - 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի արժույթ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">ՀՀ դրամ[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափ</td>
            <td className="p-4 sm:p-6 text-gray-700 font-semibold text-purple-700 align-top">100,000 - 10,000,000[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ձևակերպման եղանակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-1">
              <p>• Օնլայն[cite: 15]</p>
              <p>• Օֆլայն[cite: 15]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի տեսակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վերականգնվող՝ ամսական նվազագույն մարման պահանջով[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Սահմանաչափի տրամադրման եղանակ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկային սահմանաչափը տրամադրվում է Բանկի վճարային քարտերի միջոցով[cite: 15]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">8.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Անվանական տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 font-semibold text-purple-700 align-top">16%-21.5%[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">9.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Փաստացի տոկոսադրույք</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">17.24 - 23.78%[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">10.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Արտոնյալ ժամանակահատված</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Չի տրամադրվում[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">11.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Մարման ժամկետ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">36 ամիս[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">12.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Ամսական նվազագույն մարման պահանջ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>Քարտապանը պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը / նվազագույնը՝ 5,000 ՀՀ դրամ/ և կուտակված տոկոսագումարները մինչև քաղվածքում նշված վերջնաժամկետը[cite: 15]։</p>
              <p className="text-sm text-gray-500">Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչև հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը[cite: 15]։</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">13.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Քաղվածքի օր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Մինչև յուրաքանչյուր ամսվա 10-ը[cite: 15]</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">14.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վճարման վերջնաժամկետ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը)[cite: 15]։</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">15.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Օվերդրաֆտի մայր գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>• Ամսական նվազագույն վճարը վճարման ժամկետին չվճարելու տույժ՝ 0.015% օրական[cite: 16]</p>
              <p>• Հաշվեգրված տոկոսները վճարման ժամկետին չվճարելու տույժ՝ 0.1% օրական[cite: 16]</p>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">16.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Վարկունակության գնահատում /օվերդրաֆտի հաստատման պայմաններ/</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top">Համաձայն բանկում գործող առցանց վարկերի վարկունակության գնահատման համար օգտագործվող սքորինգային մոդելի[cite: 16]։</td>
          </tr>
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">17.</td>
            <td className="p-4 sm:p-6 font-semibold text-gray-800 align-top">Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ</td>
            <td className="p-4 sm:p-6 text-gray-700 align-top space-y-2">
              <p>• Օվերդրաֆտը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում[cite: 16]:</p>
              <p>• Շեղումներով և/կամ ավտոմատ մշակված սքորինգային համակարգի կողմից մերժված օվերդրաֆտի հայտերը կարող են ներկայացվել Բանկի աշխատակցի լրամշակմանը։ Այս դեպքում կարող է պահանջվել Բանկի համար ընդունելի ապահովման միջոց և որոշումը կայացվում է առավելագույնը 7 (յոթ) աշխատանքային օրվա ընթացքում[cite: 16]:</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Պահանջվող փաստաթղթերի ցանկ</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 w-16 text-center align-top">1.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Վարկի տրամադրման դիմում-հայտ</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">2.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">3.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկանք փաստացի բնակության վայրից</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">4.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկանք եկամուտների վերաբերյալ</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">5.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">6.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 sm:p-6 font-medium text-gray-500 text-center align-top">7.</td>
                    <td className="p-4 sm:p-6 text-gray-700 align-top">Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
           
        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Այլ վարկեր</h2>
              
              <div className="flex space-x-2">
                <button 
                  ref={prevRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❮
                </button>
                <button 
                  ref={nextRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❯
                </button>
              </div>
            </div>

            {/* Swiper սլայդեր */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="pb-4"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <Link 
                    to={card.path} 
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
                  >
                    <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {card.title}
                    </h3>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}