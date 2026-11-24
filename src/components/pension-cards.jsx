import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, FileText, Download } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const documents = [
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.",
    "Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026"
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/cards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">Քարտեր</button>
              <button onClick={() => handleNavigation('/hy/cards-provision-and-service')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</button>
              <button onClick={() => handleNavigation('/hy/pension-cards')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</button>
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
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Քարտեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Սոցիալական ապահովության վճարային քարտեր</span>
          </div>

          {/* Top Hero Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Սոցիալական ապահովության վճարային քարտեր
              </h1>
              <p className="text-gray-700 leading-relaxed space-y-4">
                Կենսաթոշակառուներին առաջարկում ենք ARCA կենսաթոշակային վճարային քարտեր՝ միայն կենսաթոշակների գումարների սպասարկման նպատակով: Քարտերը տրամադրում ենք Սոցիալական ապահովության պետական ծառայության հետ 2011թ. հունվարի 21-ին կնքված պայմանագրի համաձայն[cite: 18]:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" 
                alt="Սոցիալական ապահովության վճարային քարտեր" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Additional Info Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              Քարտերը տրամադրում և սպասարկում ենք մեր կողմից հաստատված կենսաթոշակային քարտերի տրամադրման և սպասարկման սակագների համաձայն[cite: 19]:
            </p>
            <p>
              Քարտերի ստացման դիմում կարող եք ներկայացնել մեր Գլխամասային գրասենյակ կամ կամացած մասնաճյուղ[cite: 19]:
            </p>
            <p>
              Վճարային քարտերի տրամադրմանը, սպասարկմանը և օգտագործմանը վերաբերող մանրամասն տեղեկատվությանը կարող եք ծանոթանալ <a href="#details" className="text-purple-700 underline font-medium">այստեղ</a>[cite: 19]:
            </p>
            <p className="text-sm text-gray-500 italic">
              Ծանոթագրություն - Կենսաթոշակառու՝ անձ, ում կենսաթոշակը վճարվում է անկանխիկ եղանակով, Բանկում բացված բանկային հաշվին փոխանցելու միջոցով: Կենսաթոշակ՝ կենսաթոշակի, պատվովճարի, դրամական օգնության և սոցիալական ապահովության այլ ծրագրերով նախատեսված դրամական վճարների գումարը[cite: 19]:
            </p>
          </div>

          {/* Վճարային քարտերով կատարվող գործառնություններ */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Վճարային քարտերով կատարվող գործառնություններ
            </h2>
            <p className="font-semibold text-purple-900 mb-4">Վճարային քարտերով կարող եք՝</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Կանխիկացնել Ձեր քարտային հաշվին առկա միջոցները բանկոմատներից (ATM) և կանխիկացման կետերից (POS տերմինալներից)[cite: 19]:</li>
              <li>Կատարել անկանխիկ վճարումներ առևտրի և սպասարկման կետերում (ապրանքների կամ ծառայությունների դիմաց՝ խանութներում, ռեստորաններում, հյուրանոցներում և սպասարկման այլ կետերում)[cite: 19]:</li>
              <li>Կատարել կոմունալ վճարումներ՝ բանկոմատների միջոցով կամ օնլայն (www.arca.am-ում գրանցվելով վիրտուալ քարտ)[cite: 19]:</li>
              <li>Օնլայն գործարքներ կատարել (վճարումներ, գնումներ)[cite: 19]:</li>
              <li>Քարտից քարտ գումար փոխանցել՝ բանկոմատների միջոցով կամ օնլայն[cite: 19]:</li>
              <li>Մեր online բանկինգ ծառայությունից օգտվելու պարագայում դուք հնարավորություն կունենաք առանց մեզ այցելելու կատարել դրամական միջոցների համալրում (ընթացիկ հաշվից՝ քարտային հաշիվ) և անմիջապես տնօրինել այդ գումարները ձեր քարտի միջոցով[cite: 19]:</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 bg-purple-50 p-4 rounded-lg border border-purple-100">
              <span className="font-bold text-purple-900">Նշում.</span> Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS տեղեկացում ծառայությունը (դուք կարող եք դիմում գրել և հրաժարվել SMS տեղեկացումների ծառայությունից): Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից[cite: 19]:
            </p>
          </div>

          {/* Օգտակար տեղեկատվություն */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Օգտակար տեղեկատվություն
            </h2>
            <p className="font-semibold text-purple-900 mb-4">Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել՝</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Քարտերով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը[cite: 19]:</li>
              <li>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստացե՛ք, որ անդորրագրում նշված գումարը համապատասխանում է Ձեր գործարքի գումարին[cite: 19]:</li>
              <li>Քարտով վճարելիս միշտ պահեք քարտը ձեր տեսադաշտում[cite: 19]:</li>
              <li>Եթե հրաժարվում եք գնումից, ապա պահանջե՛ք չեղյալ համարել (VOID) ձեր վճարումը և պահե՛ք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստացումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել[cite: 19]:</li>
            </ul>
          </div>

          {/* Զգուշացում */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Զգուշացում
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Ապահովե՛ք ձեր PIN ծածկագրի գաղտնիությունը (այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց): PIN ծածկագրով կատարված բոլոր գործառնությունների պատասխանատվությունը կրում եք դուք: Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չարտոնված օգտագործման համար[cite: 20]:</li>
              <li>Քարտի կորուստի կամ գողության դեպքում անհապաղ զանգահարե՛ք մեզ (+374 10) 605555 հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգի (+374 10) 592222 հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը: Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի[cite: 20]:</li>
              <li>Քարտի կորուստի կամ գողության մասին ΜΕԶ տեղեկացնելու հետաձգումը կարող է հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը[cite: 20]:</li>
              <li>Մենք պատասխանատվություն չենք կրում ձեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում[cite: 20]:</li>
              <li>Դուք պատասխանատվություն եք կրում քարտով կատարված բոլոր գործառնությունների համար մինչև այն պահը, երբ տեղեկացնում եք մեզ կորուստի կամ գողություն պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին[cite: 20]:</li>
            </ul>
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