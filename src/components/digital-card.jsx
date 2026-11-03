import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function Evocapreparun() {
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
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-full w-max transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/all-news" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="hover:text-purple-700 transition-colors">
              Գլխավոր
            </span>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-[250px] sm:max-w-none">
               Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել
            </span>
          </nav>

        </div>

        {/* Նորության գլխավոր վերնագիր և նկար */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-6 space-y-6">
            <Link 
  to="/news/general" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-700 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Գլխավոր
  </span>
</Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել

            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
               Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից։
            </p>

            <div className="text-gray-400 font-medium text-sm pt-2">
             22.06.2026
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-purple-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg" 
                alt="Evocabank-ը PREPA Run 2026-ի գլխավոր հովանավոր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
{/* Ստորին մանրամասն բովանդակություն (Կենտրոնացված) */}
        <div className="max-w-4xl mx-auto pt-8 pb-8 space-y-6 border-t border-gray-100 text-gray-700 text-base sm:text-lg leading-relaxed">
          
          <p>
            <strong>Evocabank</strong>-ը և{' '}
            <a 
              href="https://norakaruyc.am" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 underline font-bold hover:text-purple-900"
            >
              Norakaruyc.am
            </a>{' '}
            հարթակը ստորագրել են համագործակցության հուշագիր՝ նպատակ ունենալով պարզեցնել և արագացնել բնակարանի գնման ու հիփոթեքային ֆինանսավորման գործընթացները:
          </p>

          <p>
            Համագործակցության արդյունքում Norakaruyc.am-ի օգտատերերը կկարողանան ոչ միայն ծանոթանալ նորակառույց շենքերի բնակարանների մասին ամբողջական տեղեկատվությանը, այլև նաև անմիջապես հարթակից կապ հաստատել կառուցապատողի և Բանկի հետ, ստանալ խորհրդատվություն և ներկայացնել հիփոթեքային վարկի հայտ:
          </p>

          <p>
            Հարթակում ներկայացված են բնակարանների հատակագծերը, ֆինանսավորման հնարավոր տարբերակները, ամսական վճարների չափը և մարման գրաֆիկները: Օգտատերերը, լրացնելով անհրաժեշտ տվյալները, կարող են իրենց հայտն ավտոմատ կերպով փոխանցել ինչպես կառուցապատողին, այնպես էլ <strong>Evocabank</strong>-ին:
          </p>

          <blockquote className="border-l-4 border-purple-700 pl-4 py-2 italic text-gray-800 bg-purple-50/50 rounded-r-xl">
            «Այս նորարարական լուծումը հնարավորություն է տալիս մեկտեղել անշարժ գույքի ընտրության ու ֆինանսավորման բոլոր փուլերը մեկ միասնական թվային հարթակում: Դրա շնորհիվ մենք կարողանում ենք առավելագույնս կրճատել թե՛ հաճախորդի ծախսած ժամանակը, և թե՛ թղթաբանությունը: Մեր այս նախաձեռնությունը միտված է հենց դրան՝ փոխելու շուկայի մոտեցումները և բնակարանի գնման ողջ գործընթացը՝ այն հաճախորդի համար դարձնելով անհամեմատ ավելի արագ, հարմարավետ և ամբողջովին թվայնացված: Norakaruyc.am-ի հետ համագործակցությունը հնարավորություն է տալիս մեկ հարթակում ինտեգրել Բանկի բոլոր հիփոթեքային պրոդուկտները, որպեսզի յուրաքանչյուր հաճախորդ կարողանա ընտրել իր կարիքներին և հնարավորություններին առավել համապատասխան տարբերակը», - նշել է <strong>Evocabank</strong>-ի Սպառողական վարչության ղեկավար Ստեփան Ավետիսյանը:
          </blockquote>

          <blockquote className="border-l-4 border-purple-700 pl-4 py-2 italic text-gray-800 bg-purple-50/50 rounded-r-xl">
            «Այսուհետ{' '}
            <a 
              href="https://norakaruyc.am" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 underline font-bold"
            >
              Norakaruyc.am
            </a>{' '}
            հարթակի օրական ավելի քան 2,500 օգտատերեր կկարողանան մեկ հարթակում ընտրել իրենց նախընտրած բնակարանը, անցնել նույնականացման գործընթացը և անմիջապես առցանց դիմել հիփոթեքային վարկի համար: Սկսած 2019թ.-ից՝ մեր փորձը ցույց է տալիս, որ, ավելացնելով թվային միջավայրի գործիքակազմը, մեզ հետ համագործակցող կառուցապատողների հետ հասնում ենք ավելի արդյունավետ և արագ վաճառքների: Նախաձեռնությունը միտված է պարզեցնելու և արագացնելու բնակարանի գնման գործընթացը՝ նվազեցնելով այցելությունների և փաստաթղթաշրջանառության ծավալը, ինչպես նաև ապահովելով ավելի հարմար և ժամանակակից սպասարկում հաճախորդների համար»,- նշել է{' '}
            <a 
              href="https://norakaruyc.am" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 underline font-bold"
            >
              Norakaruyc.am
            </a>{' '}
            հարթակի հիմնադիր Սերգեյ Խաչատրյանը:
          </blockquote>

          <p>
            Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից:
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            <strong>Evocabank</strong>-ի և Norakaruyc.am-ի համատեղ թվային լուծումը ևս մեկ քայլ է դեպի Հայաստանի անշարժ գույքի շուկայի թվայնացում:
          </p>

        </div>
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />

    </div>
  );
}