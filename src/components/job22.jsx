import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Ձախ կողմի հղումներ */}
        <nav className="flex space-x-6 items-center px-4 py-2 bg-white border-b border-gray-200">
          <button 
            onClick={() => handleNavigation('/hy/loans')}
            className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
          >
            Անհատ
          </button>
          <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բիզնես</button>
          <button onClick={() => handleNavigation('/hy/akntartayinvcharumner')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Ակնթարթային վճարումներ</button>
          <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Մեր մասին</button>
          <button onClick={() => handleNavigation('/all-news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
          <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
          <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

          {/* Առցանց հայտեր Dropdown */}
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

          {/* Հետադարձ կապ Dropdown */}
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

        {/* ԱԲՈՒԹԻ ՀԵԴԵՐ (Լոգո, Մենյու, Երկրորդային մանուշակագույն բար) */}
        <header className="w-full bg-white shadow-sm font-sans">
          {/* Վերին սպիտակ հեդերի հատված */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* ձախ կողմ՝ լոգո և հիմնական մենյու */}
            <div className="flex items-center space-x-12">
              {/* Evoca լոգո */}
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              {/* Հիմնական նավարկություն */}
              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/culture')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca Լայֆ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/work-at-evoca')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                   Աշխատանք և պրակտիկա
                </button>
              </nav>
            </div>

            {/* Աջ կողմ՝ EvocaONLINE կոճակ */}
            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          {/* Ներքին մանուշակագույն երկրորդային ենթաբաժինների բար */}
          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button 
                  onClick={() => handleNavigation('/hy/career/jobs')} 
                  className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0"
                >
                  Աշխատանք Evoca-ում
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/career/internship')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0"
                >
                  Ուսումնական պրակտիկա
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/career/evocabridge')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0"
                >
                  EvocaBRIDGE
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Բաներ բաժին */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 my-8">
        <img 
          src="https://www.evoca.am/images-cache/vacancies/1/17743508238696/1920x634.jpg" 
          alt="Մանրածախ վարկային պրոդուկտների մշակման մասնագետ" 
          className="w-full h-[260px] sm:h-[390px] object-cover"
        />

        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-sm sm:max-w-md bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-3xl shadow-xl space-y-2 border border-purple-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
      Ակտիվների, պարտավորությունների և կապիտալի կառավարման բաժնի ղեկավար

          </h2>
        </div>
      </div>

      {/* Աշխատատեղի մանրամասների բաժին */}
      <div className="max-w-4xl mx-auto px-4 py-12 font-sans space-y-10 w-full">
        
       {/* Աղյուսակային տեսքով վերին տեղեկատվական բլոկ */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-purple-100">
          
          <div className="p-6 flex flex-col justify-center space-y-1 bg-purple-50/30">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
              Փաստաթղթերի ներկայացման վերջնաժամկետ
            </span>
            <span className="font-bold text-gray-900 text-base">
        27.11.2026
            </span>
          </div>

            <div className="p-6 flex flex-col justify-center space-y-1 bg-purple-50/30">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
              Աշխատանքի վայր
            </span>
            <span className="font-bold text-gray-900 text-base">
          Երևան, Գլխամասային գրասենյակ
            </span>
          </div>

        </div>
      </div>

      {/* Հիմնական բովանդակության քարտ */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-8 sm:p-12 space-y-10">
        
        {/* Աշխատատեղի նկարագրություն */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
            Աշխատատեղի նկարագրություն`
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
Evoca-ն  փնտրում է Ակտիվների, պարտավորությունների և կապիտալի կառավարման բաժնի ղեկավար, ով կկազմակերպի և կվերահսկի բանկի ակտիվների, պարտավորությունների և կապիտալի արդյունավետ կառավարումը՝ ապահովելով  իրացվելիության և կապիտալի նորմատիվների պահպանումը։ Կկազմակերպի ֆինանսական պլանավորումը, կգնահատի շուկայի փոփոխությունների ազդեցությունը և կներկայացնի համապատասխան առաջարկություններ՝ բանկի եկամտաբերության և ֆինանսական կայունության ապահովման նպատակով:


             </p>
        </div>

        {/* Ի՞նչ արտոնություններ կստանաք Դուք */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
            Ի՞նչ արտոնություններ կստանաք Դուք`
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Մենք ձգտում ենք ստեղծել այնպիսի աշխատանքային միջավայր, որը նպաստում է աշխատակիցների աճին և զարգացմանը: Միանալով Evoca-ի թիմին, Դուք կստանաք՝    
          </p>
          <ul className="space-y-3 pl-2 text-gray-700 text-base">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>բժշկական ապահովագրություն,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>ճամփորդական ապահովագրություն,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>տոնական և տարեվերջյան բոնուսներ,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>բոնուսներ ամուսնության կամ երեխայի ծննդյան առթիվ,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>վճարվող հանգստյան օրեր,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>սպորտ փաթեթ,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>անգլերեն լեզվի դասընթացներ,</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
              <span>շարունակական կրթության և զարգացման լայն հնարավորություններ (մասնակցություն միջազգային կոնֆերանսներին, գործուղումներ արտերկիր, հնարավորություն ստանալու միջազգային հավաստագրեր և սովորելու աշխարհի լավագույն համալսարաններում):</span>
            </li>
          </ul>
        </div>

{/* Աշխատանքային պարտականություններ */}
<div className="space-y-4">
  <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
    Աշխատանքային պարտականություններ`
  </h2>
  <ul className="space-y-3 pl-2 text-gray-700 text-base">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>Բանկի ակտիվների, պարտավորությունների և կապիտալի կառավարման ռազմավարության մշակում և իրականացում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>իրացվելիության կառավարման և կանխատեսման գործընթացի կազմակերպում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>տոկոսադրույքային ռիսկի գնահատում և կառավարում (IRRBB),</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ֆինանսավորման կառուցվածքի և ներգրավված միջոցների արժեքի վերլուծություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>կապիտալի պլանավորման և կապիտալի համարժեքության կառավարման կազմակերպում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ակտիվների և պարտավորությունների կառուցվածքային անհամապատասխանությունների վերլուծություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ֆինանսական շուկաների, մակրոտնտեսական միջավայրի և տոկոսադրույքների միտումների վերլուծություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>սցենարային վերլուծությունների կազմակերպում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ակտիվների և պարտավորությունների կառավարման հաշվետվությունների և վերլուծական գործիքների զարգացում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ակտիվների ու պասիվների կառավարման կոմիտեին համապատասխան հաշվետվությունների, վերլուծությունների և առաջարկությունների կազմում ու ներկայացում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ակտիվների, պարտավորությունների և կապիտալի կառավարմանն առնչվող որոշումների համակարգում և առաջարկությունների ներկայացում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>անմիջական ղեկավարի կողմից այլ առաջադրանքների իրականացում:</span>
    </li>
  </ul>
</div>

{/* Ներկայացվող պահանջներ */}
<div className="space-y-4">
  <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
    Ներկայացվող պահանջներ`
  </h2>
  <ul className="space-y-3 pl-2 text-gray-700 text-base">
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>բարձրագույն կրթություն տնտեսագիտության կամ ֆինանսների ոլորտում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>բանկում կամ ֆինանսական համակարգում առնվազն 5 տարվա աշխատանքային փորձ, որից առնվազն 2 տարին՝ ակտիվների և պարտավորությունների կառավարման, ֆինանսական պլանավորման, իրացվելիության, կապիտալի կամ ֆինանսական ռիսկերի կառավարման ոլորտներում ղեկավար կամ պատասխանատու պաշտոնում,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>մասնագիտական որակավորումներ. CFA կամ FRM որակավորման առկայությունը կդիտվի որպես առավելություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>ֆինանսական մոդելների իմացություն, ֆինանսական վերլուծության և մոդելավորման փորձ,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>տեխնիկական հմտություններ. MS Excel-ի բարձր մակարդակի իմացություն, SQL-ի և Power BI-ի լավ իմացություն, Python-ի կիրառում ֆինանսական տվյալների մշակման, վերլուծության, մոդելավորման և գործընթացների ավտոմատացման նպատակով,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>վերլուծական և ռազմավարական մտածողություն,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>պլանավորման, կազմակերպման և որոշումների կայացման կարողություններ,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>թիմի ղեկավարման և միջստորաբաժանային համագործակցության հմտություններ,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>նախաձեռնողականություն և գործնական ճկուն մտելակերպ,</span>
    </li>
    <li className="flex items-start space-x-3">
      <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
      <span>հայերեն լեզվի գերազանց իմացություն, անգլերենի մասնագիտական իմացություն:</span>
    </li>
  </ul>
</div>

{/* Ինչպե՞ս դիմել */}
<div className="space-y-4 pt-4 border-t border-purple-100">
  <h2 className="text-2xl font-extrabold text-purple-900 tracking-tight">
    Ինչպե՞ս դիմել`
  </h2>
  <p className="text-gray-600 text-base leading-relaxed">
    Խնդրում ենք ուղարկել ինքնակենսագրականը (CV) <a href="mailto:cv@evoca.am" className="text-purple-700 font-bold hover:underline">cv@evoca.am</a> էլեկտրոնային հասցեին՝ վերնագրում նշելով <span className="font-bold text-gray-900">«Ակտիվների, պարտավորությունների և կապիտալի կառավարման բաժնի ղեկավար»</span>:
  </p>
</div>
```[cite: 17, 18]
      </div>

    </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}