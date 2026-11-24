import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';

export default function EvocaINVESTPage() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);

  // Form state for EvocaINVEST հետադարձ կապ
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+374',
    phoneNumber: ''
  });

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Հետադարձ կապի ուղարկման տրամաբանություն
    console.log('Form submitted:', formData);
  };

  // Անհրաժեշտ տեղեկատվություն ակորդեոններ
  const requiredInfoAccordions = [
    {
  title: "EvocaINVEST օգտակար նյութեր",
  content: (
    <div className="space-y-4 max-w-md mx-auto">
      {[
        {
          title: "EvocaINVEST | Order replace",
          embedUrl: "https://www.youtube.com/embed/5kUF-3KueZ8",
          watchUrl: "https://youtu.be/5kUF-3KueZ8"
        },
        {
          title: "EvocaINVEST | Sell with limit",
          embedUrl: "https://www.youtube.com/embed/wax5BjEOAGQ",
          watchUrl: "https://youtu.be/wax5BjEOAGQ"
        },
        {
          title: "EvocaINVEST | Buying with market price",
          embedUrl: "https://www.youtube.com/embed/oxxOZXf2kPA",
          watchUrl: "https://youtu.be/oxxOZXf2kPA"
        },
        {
          title: "EvocaINVEST | Video 4",
          embedUrl: "https://www.youtube.com/embed/XCz2N5eicHs",
          watchUrl: "https://youtu.be/XCz2N5eicHs"
        },
        {
          title: "EvocaINVEST | Video 5",
          embedUrl: "https://www.youtube.com/embed/8_C9YpvlZAE",
          watchUrl: "https://youtu.be/8_C9YpvlZAE"
        }
      ].map((video, idx) => (
        <div key={idx} className="bg-white border border-purple-100 rounded-xl overflow-hidden shadow-sm p-3 space-y-2">
          <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
            <iframe 
              src={video.embedUrl} 
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-end">
            <a 
              href={video.watchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-700 hover:text-purple-700 flex items-center gap-1 transition-colors"
            >
              Դիտեք այստեղ՝ <span className="text-red-600 font-bold">YouTube</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
},
  ];

  // Հաճախ տրվող հարցեր ակորդեոններ
  const faqAccordions = [
    {
      title: "Ի՞նչ է բաժնետոմսը։",
      content: "Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է։ Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից։ Բաժնետոմսերի արժեքը կարող է փոփոխվել՝ շուկայական պահանջարկից, ընկերության արդյունքներից և տնտեսական պայմաններից կախված։"
    },
    {
      title: "Ի՞նչ է պարտատոմսը։",
      content: "Պարտատոմսը պարտքային արժեթուղթ է։ Այն գնելիս` փաստացի գումար ես տրամադրում ընկերությանը կամ պետությանը որոշակի ժամկետով և դրա դիմաց ստանում ես կանխատեսելի տոկոսային եկամուտ։"
    },
    {
      title: "Ի՞նչ է ETF-ը։",
      content: "ETF-ը (Exchange Traded Fund) ներդրումային ֆոնդ է, որը վաճառվում և գնվում է բորսայում սովորական բաժնետոմսի նման։ Այն սովորաբար միավորում է բազմաթիվ ակտիվներ մեկ գործիքի մեջ, օրինակ՝ բաժնետոմսեր, պարտատոմսեր կամ ամբողջ ինդեքս։"
    },
    {
      title: "Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև։",
      content: "Բաժնետոմսը կապվում է մեկ ընկերության հետ և սովորաբար ունի ավելի բարձր եկամտաբերության, բայց նաև ավելի բարձր ռիսկի պոտենցիալ։Պարտատոմսը սովորաբար ավելի կայուն գործիք է և կարող է ապահովել կանխատեսելի տոկոսային եկամուտ։ETF-ը թույլ է տալիս մեկ գործիքի միջոցով ներդրում կատարել միանգամից բազմաթիվ ակտիվներում, ինչը հաճախ օգնում է դիվերսիֆիկացնել ռիսկը։"
    },
    {
      title: "Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու։",
      content: "Այո, իհարկե։ Հարկավոր է մուտք գործել EvocTOUCH հավելված, «Հաշիվներ» բաժնում ընտրել «Բրոքերային հաշիվ» և գրանցվել ամբողջությամբ օնլայն՝ ընդամենը մի քանի քայլով։"
    },
    {
      title: "Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն։",
      content: "Ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներին, որտեղ հասանելի են բաժնետոմսեր, պարտատոմսեր, եվրապարտատոմսեր և ETF-ներ։"
    },
    {
      title: "Կարո՞ղ եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր։",
      content: "Այո։ Շատ ներդրողներ հենց այդպես էլ անում են․ իրենց պորտֆելում համատեղում են բաժնետոմսեր, պարտատոմսեր և ETF-ներ՝ ռիսկն ու հնարավոր եկամտաբերությունը հավասարակշռելու համար։"
    },
    {
      title: "Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ։",
      content: "EvocaINVEST-ի Trade բաժնի որոնման դաշտում մուտքագրիր ընկերության անունը կամ կարճ հապավումը (ticker), ընտրիր արժեթուղթն ու նույն էկրանից տեղադրիր գնման պատվեր։"
    },
    {
      title: "Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև։",
      content: "Լիմիտային պատվերը կատարվում է միայն քո նշած գնով կամ ավելի լավ գնով։ Սա օգնում է վերահսկել գործարքի գինը, բայց պատվերը կարող է չկատարվել, եթե շուկայում այդ գինը հասանելի չլինի։Շուկայական պատվերը կատարվում է տվյալ պահին շուկայում առկա լավագույն հասանելի գնով։ Այն սովորաբար կատարվում է ավելի արագ, բայց վերջնական գինը կարող է տարբերվել քո ակնկալածից՝ հատկապես շուկայի բարձր տատանողականության դեպքում։"
    },
    {
      title: "Ի՞նչ է ticker-ը։",
      content: "Արժեթղթի կարճ, մի քանի տառանի անվանումն է բորսայում։ Օրինակ՝ Apple-ի ticker-ն է AAPL, իսկ Google-ինը՝ GOOGL։"
    },
    {
      title: "Ի՞նչ է շահաբաժինը։",
      content: "Դիվիդենտը ընկերության կողմից բաժնետերերին վճարվող շահույթի մասն է։ Ոչ բոլոր բաժնետոմսերն են դիվիդենտ վճարում, և վճարումը կախված է ընկերության քաղաքականությունից։"
    },
    {
      title: "Կարո՞ղ եմ պատվերներ տեղադրել բորսայի աշխատանքային ժամերից դուրս։",
      content: "Այո։ EvocaINVEST-ը ընդունում է պատվերներ 24/7 ռեժիմով։ Բորսայի ժամերից դուրս տեղադրված պատվերները հերթագրվում և ավտոմատ կատարվում են, երբ բորսան բացվում է։"
    },
    {
      title: "Ինչո՞ւ է կարևոր դիվերսիֆիկացիան։",
      content: "Դիվերսիֆիկացիան նշանակում է ներդրումներդ բաշխել տարբեր գործիքների, ոլորտների կամ շուկաների միջև, որպեսզի մեկ ակտիվի գնի անկումը հնարավորինս քիչ ազդի ընդհանուր պորտֆելի վրա։"
    },
    {
      title: "Կարո՞ղ եմ վաճառել արժեթուղթը ցանկացած պահի։",
      content: "Դու կարող ես վաճառքի պատվեր տեղադրել ցանկացած պահի։ Եթե շուկան բաց է, և կա համապատասխան առաջարկ, պատվերը կարող է կատարվել նույն պահին կամ ըստ քո պատվերի պայմանների։"
    },
    {
      title: "Ի՞նչ արժույթներով կարող եմ ներդրումներ կատարել։",
      content: "Դա կախված է ընտրված շուկայից և գործիքից։ Տարբեր արժեթղթեր կարող են վաճառվել տարբեր արժույթներով, օրինակ՝ ՀՀ դրամ, ԱՄՆ դոլար կամ եվրո։"
    },
    {
      title: "Ի՞նչ ռիսկեր ունի ներդրումը։",
      content: "Արժեթղթերի գները կարող են աճել կամ նվազել՝ կախված շուկայական պայմաններից։ Ներդրումից առաջ կարևոր է հասկանալ, որ հնարավոր է ոչ միայն շահույթ ստանալ, այլ երբեմն նաև կորուստ ունենալ։"
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
              <button onClick={() => handleNavigation('/securities')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ներդրումային ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/bonds')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Պարտատոմսեր</button>
              <button onClick={() => handleNavigation('/hy/repo-services')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">ՀԿԴ ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/repo-reverse-repo')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ռեպո/Հակադարձ Ռեպո գործարքներ</button>
              <button onClick={() => handleNavigation('/hy/evocalnvest')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">EvocaINVEST</button>
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
            <button onClick={() => handleNavigation('/hy/securities')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Արժեթղթեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">EvocaINVEST</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Կատարիր ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով[cite: 17]
              </h1>
              <p className="text-gray-700 leading-relaxed">
                EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:[cite: 17]
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17812682689927/780x585.png" 
                alt="EvocaINVEST" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Intro & Assets Description */}
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p className="font-semibold text-gray-900">
              Apple, Tesla, Google, Amazon, թե՞ Nike:
            </p>
            <p>
              <strong className="text-purple-800">EvocaINVEST</strong>-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կაპիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող էդ բացել ընդամենը մի քանի րոպեում՝ անմիջապես <strong className="text-purple-800">EvocaTOUCH</strong> հավելվածից:[cite: 18]
            </p>
            <p>
              Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից:[cite: 18]
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Քո ներդրումային գործիքները</h3>
              <p className="mb-3">
                <strong className="text-purple-800">EvocaINVEST</strong>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը:[cite: 18]
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-gray-900">Բաժնետոմսեր՝</strong> Ներդրումներ համաշխարհային առաջատար ընկերություններում[cite: 18]</li>
                <li><strong className="text-gray-900">Պարտատոմսեր և Եվրապարտատոմսեր՝</strong> Ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն[cite: 18]</li>
                <li><strong className="text-gray-900">ETF-ներ՝</strong> Դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով[cite: 18]</li>
              </ul>
            </div>

            <p className="pt-2">
              Անկախ նրանից՝ նո՞ր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկետ, թե՞ կարճաժամկետ ներդրումներ, <strong className="text-purple-800">EvocaINVEST</strong>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:[cite: 18]
            </p>
          </div>

          {/* Բացիր բրոքերային հաշիվ 3 պարզ քայլով */}
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Բացիր բրոքերային հաշիվ 3 պարզ քայլով
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-purple-900 text-lg mb-1">1. Ներբեռնիր EvocaTOUCH հավելվածը</h3>
                <p className="text-sm text-gray-700">
                  Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:[cite: 18]
                </p>
                <p className="text-sm mt-1">
                  Ներբեռնելու համար անցիր <a href="#appstore" className="text-purple-700 underline font-medium">App Store</a> և <a href="#googleplay" className="text-purple-700 underline font-medium">Google Play</a>:[cite: 18]
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-900 text-lg mb-1">2. Բացիր բրոքերային հաշիվ</h3>
                <p className="text-sm text-gray-700">
                  Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:[cite: 18]
                </p>
              </div>

              <div>
                <h3 className="font-bold text-purple-900 text-lg mb-1">3. Սկսիր ներդրումներ կատարել</h3>
                <p className="text-sm text-gray-700">
                  Ֆիլտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:[cite: 18, 19]
                </p>
              </div>
            </div>

            {/* Steps Image */}
            <div className="mt-8 flex justify-center bg-purple-950 p-6 rounded-2xl shadow-md">
              <img 
                src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
                alt="EvocaINVEST Քայլեր" 
                className="max-w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը */}
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-purple-900 text-base">24/7 պատվերներ</h3>
                <p className="text-sm text-gray-700">Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:[cite: 19]</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 text-base">Մրցակցային սակագներ</h3>
                <p className="text-sm text-gray-700">Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:[cite: 19]</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 text-base">Լիմիտային և շուկայական պատվերներ</h3>
                <p className="text-sm text-gray-700">Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային գնի ճշգրտման համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:[cite: 19]</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 text-base">Զարգացրո՛ւ ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ</h3>
                <p className="text-sm text-gray-700 mb-2">Միանալով EvocaINVEST տելեգրամյան ալիքին՝ դու կգտնես.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Ներդրումների մասին պարզ և հասկանալի նյութեր,[cite: 19]</li>
                  <li>Շուկայական հետազոտություններ և վերլուծություններ,[cite: 19]</li>
                  <li>Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,[cite: 19]</li>
                  <li>Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:[cite: 19]</li>
                </ul>
                <p className="text-sm mt-2">
                  Միացիր մեր տելեգրամյան ալիքին <a href="#telegram" className="text-purple-700 underline font-medium">այս հղումով</a>:[cite: 19]
                </p>
              </div>
            </div>
          </div>

          {/* Դեռ չե՞ս օգտվում EvocaINVEST-ից */}
          <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Դեռ չե՞ս օգտվում EvocaINVEST-ից
            </h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Պատրաստ ե՞ս բացահայտել ներդրումների աշխարհը: Լրացրո՛ւ տվյալները, և մենք կապ կհաստատենք քեզ հետ կամ կարող եք անմիջապես կապ հաստատել մեր ներդրումային բաժնի հետ:[cite: 19]
            </p>

            {/* Հետադարձ կապի ֆորմա (EvocaINVEST հետադարձ կապ) */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm font-semibold text-purple-900 mb-2">Անձնական տվյալներ</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Անուն" 
                  value={formData.firstName} 
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                />
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Ազգանուն" 
                  value={formData.lastName} 
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Էլ. Հասցե" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Հեռախոսահամար</label>
                <div className="flex gap-2">
                  <select 
                    name="phoneCode" 
                    value={formData.phoneCode} 
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  >
                    <option value="+374">+374</option>
                  </select>
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Մուտքագրեք համարը" 
                    value={formData.phoneNumber} 
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-purple-200 flex flex-col sm:flex-row gap-4 text-sm font-medium text-purple-900">
              <a href="mailto:investsecurities@evoca.am" className="flex items-center gap-2 hover:text-purple-700">
                <Mail className="w-4 h-4 text-purple-700" /> investsecurities@evoca.am
              </a>
              <a href="tel:+37433777453" className="flex items-center gap-2 hover:text-purple-700">
                <Phone className="w-4 h-4 text-purple-700" /> +37433777453
              </a>
            </div>
          </div>

          {/* Կարևոր ծանուցում */}
          <div className="bg-gray-100 border-l-4 border-purple-800 p-4 rounded-r-xl mb-12 text-xs sm:text-sm text-gray-600 space-y-2">
            <h4 className="font-bold text-purple-900 text-sm">Կարևոր</h4>
            <p>
              <strong className="text-gray-800">EvocaINVEST</strong>-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները. այս հարթակում և մյուս սոց. հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են:[cite: 20]
            </p>
            <p>
              Յուրաքանչյուր ներդրումային որոշում կայացվում է օգտատիրոջ կողմից՝ սեփական գնահատման հիման վրա: Ներդրումները կապված են ռիսկերի հետ, հետևաբար նախորդ ցուցանիշները չեն կարող դիտվել որպես ապագա արդյունքների երաշխիք:[cite: 20]
            </p>
          </div>

          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordions) */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>
            <div className="space-y-4">
              {requiredInfoAccordions.map((sec, idx) => (
                <div key={idx} className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(`req-${idx}`)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base">{sec.title}</span>
                    {openAccordion === `req-${idx}` ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    )}
                  </button>
                  {openAccordion === `req-${idx}` && (
                    <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/20 text-gray-700 text-sm">
                      {sec.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Հաճախ տրվող հարցեր (Accordions) */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Հաճախ տրվող հարցեր
            </h2>
            <div className="space-y-4">
              {faqAccordions.map((faq, idx) => (
                <div key={idx} className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(`faq-${idx}`)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base">{faq.title}</span>
                    {openAccordion === `faq-${idx}` ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    )}
                  </button>
                  {openAccordion === `faq-${idx}` && (
                    <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/20 text-gray-700 text-sm">
                      {faq.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}