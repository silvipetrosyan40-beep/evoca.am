import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './footer';
import { Home, ArrowLeft } from 'lucide-react';

export default function NewsArticlePage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

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

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          
        </header>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-purple-700 flex items-center">
                <Home className="w-4 h-4" />
              </Link>
              <span>›</span>
              <Link to="/hy/news" className="hover:text-purple-700">Լուրեր</Link>
              <span>›</span>
              <Link to="/" className="hover:text-purple-700 font-medium">Գլխավոր</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium truncate max-w-xs">Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել</span>
            </div>

            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 bg-white border border-gray-200 hover:border-purple-700 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer self-start"
            >
              <ArrowLeft className="w-4 h-4 text-purple-700" />
              <span>Վերադառնալ</span>
            </button>
          </div>

          {/* Հոդվածի գլխավոր հատված (Վերնագիր և նկար) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-purple-100 mb-10">
            <div className="lg:col-span-6 space-y-6">
              <Link to="/news/general" className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-purple-200 transition-colors">
                Գլխավոր
              </Link>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից:
              </p>
              <div className="text-sm font-semibold text-purple-700">
                22.06.2026
              </div>
            </div>
            <div className="lg:col-span-6">
              <img 
                src="https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg" 
                alt="Evocabank and Norakaruyc.am partnership" 
                className="w-full h-auto rounded-2xl shadow-md object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>

          {/* Հոդվածի տեքստային բովանդակություն */}
          <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              <strong>Evocabank</strong>-ը և <strong>Norakaruyc.am</strong> հարթակը ստորագրել են համագործակցության հուշագիր՝ նպատակ ունենալով պարզեցնել և արագացնել բնակարանի գնման ու հիփոթեքային финансиավորման գործընթացները:
            </p>

            <p>
              Համագործակցության արդյունքում Norakaruyc.am-ի օգտատերերը կկարողանան ոչ միայն ծանոթանալ նորակառույց շենքերի բնակարանների մասին ամբողջական տեղեկատվությանը, այլ նաև անմիջապես հարթակից կապ հաստատել կառուցապատողի և Բանկի հետ, ստանալ խորհրդատվություն և ներկայացնել հիփոթեքային վարկի հայտ:
            </p>

            <p>
              Հարթակում ներկայացված են բնակարանների հատակագծերը, ֆինանսավորման հնարավոր տարբերակները, ամսական վճարների չափը և մարման գրաֆիկները: Օգտատերերը, լրացնելով անհրաժեշտ տվյալները, կարող են իրենց հայտն ավտոմատ կերպով փոխանցել ինչպես կառուցապատողին, այնպես էլ Evocabank-ին:
            </p>

            <blockquote className="border-l-4 border-purple-700 pl-4 my-6 italic text-gray-800 bg-purple-50 p-4 rounded-r-xl">
              «Այս նորարարական լուծումը հնարավորություն է տալիս մեկտեղել անշարժ գույքի ընտրության ու ֆինանսավորման բոլոր փուլերը մեկ միասնական թվային հարթակում: Դրա շնորհիվ մենք կարողանում ենք առավելագույնս կրճատել թե՛ հաճախորդի ծախսած ժամանակը, թե՛ թղթաբանությունը»,- նշել է Evocabank-ի Սպառողական վարչության ղեկավար Ստեփան Ավետիսյանը:
            </blockquote>

            <p>
              «Այսուհետ Norakaruyc.am հարթակի օրական ավելի քան 2,500 օգտատերեր կկարողանան մեկ հարթակում ընտրել իրենց նախընտրած բնակարանը, անցնել նույնականացման գործընթացը և անմիջապես առցանց դիմել հիփոթեքային վարկի համար»,- նշել է Norakaruyc.am հարթակի հիմնադիր Սերգեյ Խաչատրյանը:
            </p>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500">Նոր թվային լուծում անշարժ գույքի շուկայում</span>
              <button 
                onClick={() => handleNavigation('/hy/news')}
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition-colors cursor-pointer border-none text-sm"
              >
                Բոլոր նուրությունները
              </button>
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </div>
  );
}