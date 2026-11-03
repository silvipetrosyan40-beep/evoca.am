import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function WilcoCardNews() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/all-news"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-colors font-medium text-sm w-fit"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>/</span>
            <Link to="/all-news" className="hover:text-gray-900 transition-colors">Նորություններ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium"> 
                    Կենսակերպ</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs"> 
                        Evocabank-ը նոր գույներ է տալիս մեր քաղաքին</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
            <Link 
  to="/news/products" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <Link 
  to="/news/lifestyle" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-lime-400 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Կենսակերպ
  </span>
</Link>
</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Evocabank-ը նոր գույներ է տալիս մեր քաղաքին
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">  
                    Street art-երը շուտով կհայտնվեն Երևանի ամենատարբեր անկյուններում՝ քաղաքին հաղորդելով նոր շունչ և նոր գույներ:
            </p>
            <div className="text-sm font-semibold text-gray-400">
              12.06.2026
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17812556342544/780x585.png" 
                alt="Evocabank & Wilco card" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

 {/* Հիմնական տեքստային բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-center pt-4">
          
          <p>
            Երևանն ունի բազմաթիվ գեղեցիկ, բայց երբեմն աննկատ մնացած անկյուններ, որոնք շուտով բոլորովին նոր շունչ կստանան:
          </p>

          <p>
            <strong className="text-purple-900 font-bold">Evocabank</strong>-ը և Կենտրոն վարչական շրջանը կնքեցին համագործակցության հուշագիր՝ միավորելով Երևանի հանրային տարածքները վերափոխել և զարգացնելու համար:
          </p>

          {/* Օրացույցի գլխավոր նկար */}
          <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/calendar-cover.png" 
              alt="Evocabank 2026 Օրացույց" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p>
            Ամեն ինչ սկսվեց <strong className="text-purple-900 font-bold">Evocabank</strong>-ի 2026 թվականի օրացույցից: Չորս տաղանդավոր արտիստներ՝ <strong className="text-gray-900 font-bold">Ադամ Ադամյանը, Gandz Graffiti-ն, Gareggin-ը և Հարությունը</strong>, դեռ 2025 թվականին Հայաստանի տարբեր վայրերից և տարվա եղանակներից ներշնչված ստեղծեցին յուրօրինակ <em className="text-gray-900 font-medium">street art</em>-ի կոնցեպտներ, որոնք էլ տեղ գտան <span className="text-purple-900 font-bold">Evoca</span>-ի 2026 թվականի օրացույցում:
          </p>

          <p>
            Այսպիսով, օրացույցի յուրաքանչյուր էջ ներկայացնում է հատուկ արվեստային կոնցեպտներ, որոնք այսօր տեղափոխվում են Երևանի փողոցներ:
          </p>

          <p>
            Հուշագիրը ստորագրեցին <strong className="text-purple-900 font-bold">Evocabank</strong>-ի <strong className="text-gray-900 font-bold">Վարչության նախագահի տեղակալ Տաթևիկ Խաչատրյանը</strong> և Կենտրոն վարչական շրջանի ղեկավար <strong className="text-gray-900 font-bold">Պետրոս Պետրոսյանը</strong>:
          </p>

          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-left bg-purple-50/50 p-4 rounded-r-2xl my-4">
            «Այս տարի մեր օրացույցը պարզապես ամիսների շարք չէր, այլ Երևանը նորովի տեսնելու և հանրային տարածքները վերիմաստավորելու տեսլական: Ուզում ենք, որ Երևանը լինի ավելի ոգեշնչող, արվեստով լի և մարդկանց միավորող քաղաք», - <strong className="text-gray-900 font-bold">Տաթևիկ Խաչատրյան, Evocabank-ի Վարչության նախագահի տեղակալ</strong>:
          </blockquote>

          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-left bg-purple-50/50 p-4 rounded-r-2xl my-4">
            «Երևանը գույների քաղաք է, և նոր գույները նրան առանձնահատուկ են սազում: Աշխարհի բազմաթիվ առաջատար քաղաքների փորձը ցույց է տալիս, որ street art-ը վաղուց արդեն դարձել է արդիական քաղաքային ճարտարապետության և մշակութային կյանքի կարևոր բաղադրիչ: Երևանը ևս բացառություն չէ: Այս նախաձեռնության նպատակն է Երևանին հաղորդել նոր շունչ, դարձնել այն ավելի գունավոր, ժամանակակից ու գրավիչ՝ վերածելով քաղաքի փողոցներն ու շենքերը երկնքի տակ գտնվող արվեստի յուրահատուկ հարթակի», - <strong className="text-gray-900 font-bold">Պետրոս Պետրոսյան, Կենտրոն վարչական շրջանի ղեկավար</strong>:
          </blockquote>

          <p className="font-semibold text-gray-900 pt-2">
            Շուտով նաև կկիսվենք Բանկի և Կենտրոն շրջանի նոր համատեղ նախագծի մասին:
          </p>

          {/* Նկարների ցանց (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342662/428x321.jpg" alt="Նախագծի լուսանկար 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342693/428x321.jpg" alt="Նախագծի լուսանկար 2" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342708/428x321.jpg" alt="Նախագծի լուսանկար 3" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342722/428x321.jpg" alt="Նախագծի լուսանկար 4" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/17812556342736/428x321.jpg" alt="Նախագծի լուսանկար 5" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.evoca.am/images-cache/news/1/1781255634275/428x321.jpg" alt="Նախագծի լուսանկար 6" className="w-full h-auto object-cover" />
            </div>
          </div>

        </div>

        {/* Այլ նորություններ բաժին */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Այլ նորություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Նորություն 1 (Back to school) */}
            <Link 
              to="/life-style/evocabank_as_the_partner_of_fincomm_2026" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" 
                    alt="Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
              08.10.2026
              </div>
            </Link>

            {/* Նորություն 2 (Adidas) */}
            <Link 
              to="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17913736819959/428x321.jpg" 
                    alt="Adidas Armenia" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                    Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                06.10.2026
              </div>
            </Link>

            {/* Նորություն 3 (Globbing) */}
            <Link 
              to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17912685600228/428x321.png" 
                    alt="Globbing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-purple-700 transition-colors">
                   Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400 font-medium">
                06.10.2026
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}