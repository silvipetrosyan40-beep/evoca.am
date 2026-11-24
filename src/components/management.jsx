import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const boardOfDirectors = [
    {
      name: "ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ, LL.M., MPA",
      title: "Խորհրդի նախագահ",
      image: "https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png",
      path: "/hy/about/management/varuzhan-avetisyan"
    },
    {
      name: "ՄԱՐՏԱ ԷԶԱՐՐԻ",
      title: "Խորհրդի անդամ, Աուդիտի կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
      image: "https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png",
      path: "/hy/about/management/marta-ezarri"
    },
    {
      name: "ՎԱԶԳԵՆ ԳԵՎՈՐԳՅԱՆ, MBA, PhD",
      title: "Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ",
      image: "	https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png",
      path: "/hy/about/management/vazgen-gevorgyan"
    },
    {
      name: "ՄԱՐԻՆԱ ԲՈՒԿԻ, MBA",
      title: "Խորհրդի անդամ, Աուդիտի կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ",
      image: "https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png",
      path: "/hy/about/management/marina-buki"
    },
    {
      name: "ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԳՈՒԱ, LL.M., MBA, PhD",
      title: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
      image: "https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png",
      path: "/hy/about/management/jose-maria-moreno"
    },
    {
      name: "ՊԻԵՐ ԿԱԶԻԱԿ, MBA",
      title: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
      image: "	https://www.evoca.am/images-cache/team_members/1/17544805424545/230x230.png",
      path: "/hy/about/management/pierre-caziac"
    },
    {
      name: "ԱՐԿԱԴԻ ՍԱՆԴԼԵՐ",
      title: "Խորհրդի անդամ, Աուդիտի կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
      image: "https://www.evoca.am/images-cache/team_members/1/17884208691388/230x230.png",
      path: "/hy/about/management/arkadi-sandler"
    }
  ];

  const executiveBoard = [
    {
      name: "ԿԱՐԵՆ ԵՂԻԱԶԱՐՅԱՆ, MBA, PhD",
      title: "Վարչության նախագահ",
      image: "https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png",
      path: "/hy/about/management/karen-yeghiazaryan"
    },
    {
      name: "ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ, PhD",
      title: "Վարչության նախագահի առաջին տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png",
      path: "/hy/about/management/armen-hakobyan"
    },
    {
      name: "ՏԱԹԵՎԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP",
      title: "Վարչության նախագահի տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png",
      path: "/hy/about/management/tatevik-khachatryan"
    },
    {
      name: "ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ",
      title: "Վարչության նախագահի տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png",
      path: "/hy/about/management/hayk-petrosyan"
    },
    {
      name: "ԼԻԼԻԹ ԳԱԲՈՅԱՆ, MBA",
      title: "Վարչության նախագահի տեղակալ ֆինանսական գծով",
      image: "	https://www.evoca.am/images-cache/team_members/1/16602028538342/230x230.png",
      path: "/hy/about/management/lilit-gaboyan"
    },
    {
      name: "ԷՄՄԱ ՋԱՆԻՆՅԱՆ, MBA, PhD, FCCA",
      title: "Վարչության անդամ, Գլխավոր հաշվապահ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602027917723/230x230.png",
      path: "/hy/about/management/emma-janinyan"
    },
    {
      name: "ՍՄԲԱՏ ՄԱՐՏԻՐՈՍՅԱՆ",
      title: "Վարչության անդամ, Իրավաբանական վարչության պետ",
      image: "	https://www.evoca.am/images-cache/team_members/1/16602029763987/230x230.png",
      path: "/hy/about/management/smbat-martirosyan"
    },
    {
      name: "ՄՀԵՐ ՍԱՀԱԿՅԱՆ",
      title: "Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602028738374/230x230.png",
      path: "/hy/about/management/mher-sahakyan"
    }
  ];

  const internalAudit = [
    {
      name: "ՆԱԶԵԼԻ ԷՂՈՅԱՆ, CIA",
      title: "Ներքին աուդիտի ստորաբաժանման ղեկավար",
      image: "	https://www.evoca.am/images-cache/team_members/1/16282549740688/230x230.png",
      path: "/hy/about/management/nazeli-eghoyan"
    }
  ];

  const renderCards = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {items.map((person, index) => (
        <div
          key={index}
          onClick={() => navigate(person.path)}
          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center group"
        >
          <div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden relative">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-purple-900 transition-colors">
            {person.name}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            {person.title}
          </p>
        </div>
      ))}
    </div>
  );

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
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0 py-3">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ղեկավարություն</button>
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
            <span className="text-gray-800 font-medium">Ղեկավարություն</span>
          </div>

          <div className="space-y-12">
            <h2 className="text-2xl font-bold text-gray-900">Ղեկավարություն</h2>

            {/* Բանկի խորհուրդ */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800">Բանկի խորհուրդ</h3>
              {renderCards(boardOfDirectors)}
            </div>

            {/* Բանկի վարչություն */}
            <div className="space-y-6 pt-6">
              <h3 className="text-lg font-bold text-gray-800">Բանկի վարչություն</h3>
              {renderCards(executiveBoard)}
            </div>

            {/* Բանկի ներքին աուդիտ */}
            <div className="space-y-6 pt-6">
              <h3 className="text-lg font-bold text-gray-800">Բանկի ներքին աուդիտ</h3>
              {renderCards(internalAudit)}
            </div>
          </div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}