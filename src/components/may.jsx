import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsDetailFincomm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* 1. Վերադարձի կոճակ և Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          
          {/* «Վերադառնալ» կոճակ */}
          <Link
            to="/news/all"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-5 py-2.5 rounded-full transition-all w-fit cursor-pointer text-sm shadow-xs"
          >
            <span className="text-base">←</span>
            <span>Վերադառնալ</span>
          </Link>

{/* Breadcrumbs */}
<nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto">
  <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/hy/blog" className="hover:text-purple-700 transition-colors">
    Բլոգ
  </Link>
  <span className="text-gray-300">›</span>
  <Link to="/hy/blog/lifestyle-blogs" className="hover:text-purple-700 transition-colors">
   Կենսակերպ
  </Link>
  <span className="text-gray-300">›</span>
  <span className="text-gray-900 font-semibold truncate max-w-xs">
Նվիրենք ամիսը մշակույթին


   </span>
</nav>

        </div>

        {/* 2. Վերնագրի և մեծ նկարի բլոկ */}
        <div className="relative">
          
          {/* Ձախ կողմի սոցիալական կոճակներ (Desktop-ի համար) */}
          <div className="hidden lg:flex flex-col space-y-2 absolute -left-14 top-0">
            <a href="#facebook" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">f</span>
            </a>
            <a href="#linkedin" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="#instagram" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">ig</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Վերնագիր և կարճ նկարագրություն */}
            <div className="lg:col-span-6 space-y-6">
           <Link 
  to="/hy/blog/lifestyle-blogs" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-900 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide group-hover:text-purple-700 transition-colors">
   Կենսակերպ
  </span>
</Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
Նվիրենք ամիսը մշակույթին
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Թատրոն, թանգարան, կինո, դասական համերգ, ցուցահանդես...



















             </p>
              <p>
05.05.2022

</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/blogs/1/16515644843588/780x585.png" 
                  alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
 

  <p>
    Մայիսը թատրոնի, թանգարանների, կինոյի, դասական համերգների և ցուցահանդեսների ամիս է: Նվիրենք ամիսը մշակույթին և բացօթյա միջոցառումներին:
  </p>
  <p>
    Իսկ մենք ձեզ կներկայացնենք ամսվա հետաքրքիր միջոցառումները:
  </p>

  <div className="rounded-2xl overflow-hidden max-w-md sm:max-w-lg mx-auto shadow-sm border border-purple-100 my-4">
    <img 
      src="https://www.evoca.am/file_manager/Blog/Calendar/art.png" 
      alt="Culture and Art in May" 
      className="w-full h-auto object-cover"
    />
  </div>

  <p>
    Մայիսի 18-ը Երևան քաղաքի ամենասիրված օրերից է՝ Թանգարանների միջազգային օր և Թանգարանային գիշեր համաեվրոպական միջոցառումներով: Միջոցառումներին յուրաքանչյուր տարի միանում է ավելի քան 120 թանգարան և արվեստի կենտրոն. ժամանակացույցը կտեղադրենք շուտով:
  </p>
  <p>
    Իսկ մինչ այդ կարող եք ծանոթանալ <strong className="text-purple-700">Հայաստանի թանգարաններին</strong>՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի պատմության թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի ազգային պատկերասրահ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ե. Չարենցի անվան գրականության և արվեստի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հովհ. Շարամբեյանի անվան ժողովրդական ստեղծագործության կենտրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կոմիտասի թանգարան-ինստիտուտ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ռուսական արվեստի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայ և ռուս ժողովուրդների բարեկամության թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Փայտարվեստի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ն. Աղբալյանի անվան Սիսիանի պատմության թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հրազդանի երկրագիտական թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Երվանդ Քոչարի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հովհաննես Թումանյանի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Սերգեյ Փարաջանովի թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Մարտիրոս Սարյանի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Եղիշե Չարենցի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Խաչատուր Աբովյանի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Օրբելի եղբայրների տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ալեքսանդր Սպենդիարյանի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Արամ Խաչատրյանի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ավետիք Իսահակյանի տուն-թանգարան</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Պատմամշակութային արարգելոց-թանգարանների և պատմական միջավայրի պահպանության ծառայություն</span>
    </li>
  </ul>

  <p>
    <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">Այստեղ</a> կարող եք նաև կարդալ <strong className="text-purple-700">Երևանի ամենասիրված 10 թանգարանների մասին</strong>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Թատրոններ
  </h3>
  <p>
    Իսկ գիտե՞ք, որ Հայաստանում գործում է <strong className="text-purple-700">50-ից ավելի թատրոնական կազմակերպություն</strong>, որոնցից են՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Ա. Սպենդիարյանի անվան օպերայի և բալետի ազգային اكադեմիական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կ. Ստանիսլավսկու անվան ռուսական պետական դրամատիկական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հ. Պարոնյանի անվան երաժշտական կոմեդիայի պետական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Երևանի Հ. Թումանյանի անվան պետական տիկնիկային թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Պետական կամերային երաժշտական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Երևանի խամաճիկների պետական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Համազգային պետական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Բեմարվեստի ազգային փորձարարական «Գոյ» կենտրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Երևանի Փոքր թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Երևանի մնջախաղի պետական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գյումրու Վ. Աճեմյանի անվան պետական դրամատիկական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Վանաձորի Հ. Աբելյանի անվան պետական դրամատիկական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Արտաշատի Ա. Խարազյանի անվան պետական դրամատիկական թատրոն</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Գորիսի Վ. Վաղարշյանի անվան պետական դրամատիկական թատրոն</span>
    </li>
  </ul>

  <p>
    Վերջին տասնամյակներում ՀՀ-ում անցկացվում են նաև <strong className="text-purple-700">միջազգային թատրոնական փառատոններ</strong>: Այնպես որ, եթե որոշել եք մայիսին դիտել թատրոնական որևէ ներկայացում, կարող եք ցանկին նախօրոք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>.
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Դասական երաժշտություն
  </h3>
  <p>
    Հայաստանի մշակույթի կարևորագույն և ամենատարածված ուղղություններից է: Վերջին տարիներին Հայաստան են ժամանել համաշխարհային ճանաչելիության հարյուրավոր երաժշտեր: ՀՀ դասական երաժշտության կարևոր մասնակիցներն են՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի պետական սիմֆոնիկ նվագախումբ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի ազգային ֆիլհարմոնիկ նվագախումբ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի պետական կամերային երգչախումբ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի պետական կամերային նվագախումբ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Կոմիտասի անվան ազգային քառյակ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>«Հովեր» պետական կամերային երգչախումբ</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Հայաստանի ազգային ակադեմիական երգչախումբ</span>
    </li>
  </ul>

  <p>
    Մայիս ամսվա դասական համերգների ցանկին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
  </p>
  <p>
    Իսկ այժմ հայկական <strong className="text-purple-700">Jazz</strong>-ի մասին. Հայաստանում ջազը տարածվել է 1930-ականներից, երբ Ցոլակ Վարդազարյանի գլխավորությամբ Մոսկվա կինոթատրոնի տարածքում տեղի էին ունենում ջազային համերգներ: 1938թ. ստեղծվեց Հայաստանի պետական ջազ նվագախումբը: Հայաստանում այսօր կան մի շարք ջազ-ակումբներ (<strong className="text-purple-700">Malkhas Jazz Club, Ulikhanyan Club, MEZZO Classic House Club, CLUB 12</strong>) և նվագախմբեր, ինչպես նաև ջազ փառատոններ և ջազ օրեր:
  </p>
  <p>
    Մայիս ամսվա ջազային միջոցառումներին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium hover:text-purple-900">այստեղ</a>:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Կինոթատրոն
  </h3>
  <p>
    Կինոթատրոն հաճախելը բոլոր ժամանակներում եղել է ժամանցի ամենասիրված միջոցներից մեկը: Եթե մայիս ամիսը որոշել եք անցկացնել ընկերների կամ ընտանիքի հետ կինոթատրոններում, կինոցանկերին ծանոթացեք ստորև՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Cinema Star</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>KinoPark</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Moscow Cinema</span>
    </li>
  </ul>

  <p>
    Հիշեցնենք, որ վերջին տարիներին Հայաստանում կազմակերպվում են՝ «Ոսկե ծիրան», «Ռեանիմանիա» անիմացիոն, «ՄԵԿ ԿԱԴՐ» կարճ ֆիլմերի, «Ծիրանի Ծառ» վավերագրական ֆիլմերի և այլ միջազգային կինոփառատոններ:
  </p>

  <h3 className="text-lg sm:text-xl font-bold text-purple-700 pt-4">
    Բացօթյա միջոցառումներ
  </h3>
  <p>
    Մայիս ամսին արդեն հաճելի է նաև բացօթյա միջոցառումների համար՝
  </p>

  <ul className="space-y-2 pl-2">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>GASTROFEST Dilijan (մայիսի 5-8)</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
      <span>Expo food and drinks (մայիսի 19-21)</span>
    </li>
  </ul>

  <p className="pt-4 border-t border-purple-50 font-bold text-purple-700 text-center">
    Մայիս ամսվա ընթացքում պարբերաբար կթարմացնենք միջոցառումների ցանկը!
  </p>
</article>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/blog/lifestyle-blogs/monthly-recap-creation" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Habit Tracker                                   </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">05.01.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/blog/lifestyle-blogs/top-5-christmas-markets-in-europe" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/blogs/1/17658933558475/510x383.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Եվրոպայի լավագույն 5 Christmas Market-ները
</h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.12.2025</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/blog/lifestyle-blogs/black-friday-2025-complete-guide-by-evoca" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/blogs/1/17639790235101/510x383.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
Սև ուրբաթի իրական գույնը
             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">24.11.2025
</span>
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}