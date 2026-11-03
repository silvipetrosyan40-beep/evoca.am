import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

export default function MoneyTransfersPage() {
  const navigate = useNavigate();
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
              <button onClick={() => handleNavigation('/transfers')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Դրամական փոխանցումներ</button>
              <button onClick={() => handleNavigation('/hy/payment-systems')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Վճարային համակարգեր</button>
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
            <button onClick={() => handleNavigation('/hy/individuals')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/transfers')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Փոխանցումներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Դրամական փոխանցումներ</span>
          </div>

          <div className="space-y-6">

            {/* 2. ԵՐԿՐՈՐԴ ԲԼՈԿ (ՆԿԱՐ ԵՎ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Դրամական փոխանցումներ
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:
                </p>
              </div>
              <div className="w-full lg:w-[480px] h-72 sm:h-80 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-gray-50">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Դրամական փոխանցումներ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 3. ԸՆԴՀԱՆՈՒՐ ԴՐՈՒՅԹՆԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6 text-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ընդհանուր դրույթներ</h2>
              
              <p className="text-base leading-relaxed">
                Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
              </p>

              <p className="text-base leading-relaxed">
                Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիմք չափից, փոխանցման բնույթից և նպատակից՝ կարող են պահանջվել նաև այլ փաստաթղթեր:
              </p>

              <p className="text-base leading-relaxed">
                Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը՝ հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
              </p>

              <p className="text-base leading-relaxed">
                Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք <a href="#tariffs" className="text-purple-700 underline font-semibold">միջնորդավճարներ</a>՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
              </p>

              <p className="text-base leading-relaxed">
                Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
              </p>
            </div>

            {/* 1. ՀԵՐՈ ԲԼՈԿ (ՎԵՐԻՆ ՆԿԱՐՈՎ ԵՎ ՏԵՔՍՏՈՎ) */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-neutral-900 min-h-[320px] sm:min-h-[380px] flex items-center">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
                  alt="Դրամական փոխանցումներ ֆոն" 
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="relative z-10 p-8 sm:p-12 max-w-2xl text-center mx-auto">
                <p className="text-white text-lg sm:text-2xl font-semibold leading-relaxed drop-shadow-md">
                  Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:
                </p>
              </div>
            </div>

            {/* 4. ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (ԱԿՈՐԴԵՈՆՆԵՐ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Փոխանցումներ դրամով",
                    content: (
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                          <li>Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:</li>
                          <li>Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:</li>
                        </ul>
                      </div>
                    )
                  },
                  {
                    title: "Միջազգային փոխանցումներ",
                    content: (
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                          <li>Մենք SWIFT համակարգի անդամ ենք և ձեր արտարժութային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան:</li>
                          <li>Փոխանցումը կատարում ենք միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում:</li>
                          <li>Արտարժութային միջազգային փոխանցում իրականացնելու համար մեզ եք ներկայացնում սահմանված ձևանմուշի վճարման հանձնարարագիր (անհրաժեշտության դեպքում մեր աշխատակիցները կօգնեն լրացնել այն):</li>
                          <li>Արտարժութային միջազգային բանկային փոխանցումները, ըստ մեր սակագների, իրականացվում են OUR (ծախսերը՝ փոխանցողի հաշվին), Guaranteed OUR (գումարը ստացողին հասնում է ամբողջական) և BEN (ծախսերը՝ ստացողի հաշվին) տարբերակներով:</li>
                          <li>Արտարժութային միջազգային փոխանցումները, որպես կանոն, տևում են 1-3 բանկային օր: Փոխանցումների կատարման տևողությունը կախված է այն բանկերի թվից, որոնց միջոցով կատարվում է փոխանցումը:</li>
                        </ul>
                      </div>
                    )
                  },
                  {
                    title: "Վճարային համակարգեր",
                    content: (
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                          <li>Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ՝ առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ:</li>
                          <li>Մեր կողմից սպասարկվող վճարային համակարգերին կարող եք ծանոթանալ <a href="#systems" className="text-purple-700 underline font-semibold">այստեղ</a>:</li>
                        </ul>
                      </div>
                    )
                  },
                  {
                    title: "Փոխանցման պայմանների փոփոխում կամ չեղյալացում",
                    content: (
                      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                          <li>Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ (սակագներին կարող եք ծանոթանալ Բանկային փոխանցումներ բաժնում):</li>
                          <li>Փոխանցման մեջ առկա սխալների ուղղումը, ինչպես նաև փոխանցման չեղյալացումն իրականացնում ենք փոխանցող և ստացող բանկերի հնարավորության սահմաններում և ժամկետներում, սովորաբար դա կարող է տևել 2-5 բանկային օր:</li>
                          <li>
                            Եթե փոխանցումը նախաձեռնող անձը ներկայացրել է փոխանցման չեղյալացման հայտ, սակայն ըստ հարցման՝ միջոցներն արդեն հաշվեգրված են, ապա մենք չենք կարող պատասխանատվություն կրել գումարների վերադարձի համար: Փոխանցված միջոցները ստացողին չհասնելու դեպքում՝
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>Փոխանցված միջոցները թղթակից բանկի կողմից վերադարձվում են փոխանցում կատարած բանկին: Դրամական միջոցների վերադարձի ժամկետները կախված են թղթակից բանկերում գործող ընթացակարգային ժամկետներից և այն բանկերի թվից, որոնց միջոցով կատարվել է փոխանցումը:</li>
                              <li>Վերադարձված դրամական միջոցները հաշվեգրում ենք փոխանցում իրականացրած անձի բանկային հաշվին, իսկ առանց բանկային հաշվի բացման կատարված փոխանցման դեպքում՝ փոխանցման հանձնարարագրում նշված անձնագրային հիմքերով վերադարձնում ենք փոխանցում իրականացրած անձին:</li>
                            </ul>
                          </li>
                          <li>Վճարային համակարգերով իրականացված փոխանցումների (ֆիզանձանց միջև ոչ առևտրային բնույթի արագ դրամական փոխանցումներ) վավերապայմանների փոփոխման/սխալների ուղղման, կատարված փոխանցման չեղյալացման, ինչպես նաև փոխանցում ստացողի կողմից գումարի չհայտնաբերման պարագայում դրամական միջոցների հետ վերադարձի համար գործում են տվյալ համակարգերի ներքին ընթացակարգերով սահմանված պայմանները և ժամկետները:</li>
                        </ul>
                      </div>
                    )
                  }
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
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. ՓԱՍՏԱԹՂԹԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ</span>
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
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">SWIFT Transfers (20.03.2026)</span>
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