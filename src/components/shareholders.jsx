import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
  title: "Ուշադրություն",
  content: (
    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության պատճենները:
        </li>
        <li>
          «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և ավելիին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով սահմանված տեղեկությունները:
        </li>
        <li>
          Վերոնշյալ տեղեկությունները տրամադրում ենք ԱՆՎՃԱՐ՝ բաժնետիրոջ գրավոր դիմումը ստանալուց հետո 3 (երեք) աշխատանքային օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր Գլխամասային գրասենյակում, ցանկացած մասնաճյուղում կամ ներկայացուցչությունում, էլեկտրոնային հասցեով <a href="mailto:hello@evoca.am" className="text-purple-900 underline">hello@evoca.am</a> կամ փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
        </li>
        <li>
          Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի համաձայն և Բանկի կանոնադրությամբ սահմանված կարգով:
        </li>
      </ul>
    </div>
  )
},
   {
  title: "Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ",
  content: (
    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          2011թ. Բանկի կանոնադրական կապիտալը համալրվել է 7.2 մլրդ դրամով՝ կազմելով 14 մլրդ 400 մլն. դրամ[cite: 14]:
        </li>
        <li>
          Մեր մասնակիցների 08.07.2016թ. արտահերթ ընդհանուր ժողովի որոշմամբ՝ Բանկը սահմանափակ պատասխանատվությամբ ընկերությունից վերակազմավորվել է փակ բաժնետիրական ընկերության և մեր փաստացի համալրված կանոնադրական կապիտալը (14 մլրդ. 400 մլն. դրամ) բաժանվել է 144,000 հատ հասարակ բաժնետոմսերի, յուրաքանչյուրը՝ 100,000 դրամ անվանական արժեքով[cite: 14]:
        </li>
        <li>
          2016թ. Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. 550 մլն. դրամով և կազմել 17 մլրդ. 950 մլն. դրամ: Մենք տեղաբաշխել ենք 100,000 դրամ անվանական արժեքով 35,500 հատ արտոնյալ բաժնետոմս[cite: 14]:
        </li>
        <li>
          2020թ. Բանկի կանոնադրական կապիտալը համալրվել է 2 մլրդ. 50 մլն. դրամով և կազմել 20 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք նաև 29.05.2020թ. թողարկման 100,000 դրամ անվանական արժեքով 14,500 հատ արտոնյալ բաժնետոմս[cite: 14]:
        </li>
        <li>
          2020թ. ՀՀ քաղաքացի Մարետա Գևորգյանը դարձել է Բանկի ուղղակի նշանակալից բաժնետերը[cite: 14]:
        </li>
        <li>
          2022թ. ՀՀ քաղաքացի Մարետա Գևորգյանի կողմից Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. դրամով և կազմել 23 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք 12.03.2022թ. թողարկման 100,000 ՀՀ դրամ անվանական արժեքով 7,500 հատ արտոնյալ բաժնետոմս[cite: 14]:
        </li>
      </ul>
    </div>
  )
},
    {
  title: "Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ",
  content: (
    <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          2003-2006 թթ. մեր մասնակիցների միջև շահաբաժիններ չեն բաշխվել: Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթն ուղղվել է մեր կանոնադրական հիմնադրամի համալրմանը կամ որպես չբաշխված շահույթ թողնվել մեր տրամադրության տակ[cite: 14]:
        </li>
        <li>
          2006թ. 9 ամսվա գործունեության արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 80 մլն. դրամ շահաբաժին[cite: 14]:
        </li>
        <li>
          2007թ. 9 ամսվա գործունեության արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 55 մլն. դրամ շահաբաժին[cite: 14]:
        </li>
        <li>
          2008թ. փաստացի ստացված զուտ շահույթն Ընդհանուր ժողովի որոշմամբ թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2009թ. Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթից 70 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2010-2012 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2013թ. փաստացի ստացված զուտ շահույթից 895 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2014թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2015թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2016թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2017թ. փաստացի ստացված զուտ շահույթից 78 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2018թ. փաստացի ստացված զուտ շահույթից 426 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2019թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
        <li>
          2020թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ[cite: 14]:
        </li>
      </ul>
    </div>
  )
},
  ];

  const documents = [
    { title: "Կանոնադրություն", href: "#" },
    { title: "Բանկային գործունեության լիցենզիա", href: "#" },
    { title: "Բանկի Գրանցման վկայականը", href: "#" }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
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
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
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

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Evoca-ի մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Բաժնետերեր</span>
          </div>

          <div className="space-y-12">
            {/* Բաժնետերեր բաժին */}
            <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900">Բաժնետերեր</h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img 
                    src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" 
                    alt="Մարետա Գևորգյան" 
                    className="w-full rounded-lg shadow-md object-cover"
                  />
                </div>
                
                <div className="w-full md:w-2/3 space-y-4">
                  <h4 className="text-2xl font-bold text-purple-900">Մարետա Գևորգյան</h4>
                  
                  <p>
                    Մարետա Գևորգյանը միանձնյա տիրապետում է <span className="font-semibold text-purple-900">Evocabank</span>-ի բաժնետոմսերի <span className="font-bold text-purple-900">100%-ին</span>:
                  </p>
                  
                  <p>
                    Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան:
                  </p>
                  
                  <p>
                    2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
                  </p>
                  
                  <div className="pt-2 text-xs text-gray-500 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Նշում.</span> Բանկն անուղղակի նշանակալից մասնակից չունի:
                  </div>
                </div>
              </div>
            </div>

            {/* Անհրաժեշտ տեղեկատվություն և Փաստաթղթեր (Ակորդեոններով) */}
            <div className="space-y-8">
              {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                  ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
                </h2>
                
                <div className="space-y-3">
                  {sections.map((section, index) => (
                    <div 
                      key={index}
                      className="border border-purple-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-4 text-left text-purple-900 font-semibold hover:bg-purple-50/50 transition-colors cursor-pointer border-none bg-transparent"
                      >
                        <span>{section.title}</span>
                        <span className={`transform transition-transform duration-200 text-purple-900 ${openIndex === index ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {openIndex === index && (
                        <div className="p-4 pt-0 text-gray-700 text-sm md:text-base border-t border-purple-50 bg-purple-50/20">
                          <p>{section.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Փաստաթղթեր */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                  Փաստաթղթեր
                </h2>
                
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.href}
                      className="flex items-center justify-between p-4 bg-gray-50/80 hover:bg-purple-50/40 border border-gray-200 rounded-xl transition-colors group no-underline"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-800 text-xl">📄</span>
                        <span className="font-medium text-gray-800 group-hover:text-purple-900">
                          {doc.title}
                        </span>
                      </div>
                      <span className="text-purple-800 text-sm font-semibold">⬇</span>
                    </a>
                  ))}
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