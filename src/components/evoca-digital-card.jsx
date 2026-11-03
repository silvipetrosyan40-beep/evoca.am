import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Home, ArrowLeft } from 'lucide-react';

export default function EvocaDigitalCardsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդեր */}
        <Header />

        {/* Հիմնական բովանդակություն */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Վերադարձ և Հացի փխուրներ (Breadcrumbs) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-sm border border-gray-200 transition-colors w-fit cursor-pointer font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Վերադառնալ</span>
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
              <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center shrink-0">
                <Home className="w-4 h-4" />
              </button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Նորություններ</button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news/products')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Պրոդուկտներ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Evoca Digital քարտեր</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-700 rounded-sm inline-block"></span>
                <span className="text-purple-700 font-bold text-sm sm:text-base">Պրոդուկտներ</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Evoca Digital քարտեր
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Թվային ապագան Evoca-ում է։ EvocaTOUCH հավելվածում արդեն կարող ես ձեռք բերել Evoca Digital քարտերը՝ քո նախընտրած դիզայնով։
              </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
                16.06.2023
              </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16868326578274/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Հիմնական տեքստային բովանդակություն */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
            
            <p>
              Այսուհետ «Քարտուս թողեցի տանը», «Քարտուս մնաց մյուս պայուսակի մեջ», «Քարտուս մոռացա բանկում» և նմանատիպ շատ այլ արտահայտություններ ակտუալ չեն մեզ մոտ։ <strong className="text-purple-700 font-bold">Evoca Digital քարտը</strong> Visa միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող էդ իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ <strong className="text-purple-700 font-bold">EvocaTOUCH</strong> հավելվածում։
            </p>

            <p>
              Քո բոլոր թվային գործարքներն այժմ կլինեն ավելի արագ ու անվտանգ։ Կարող էդ կատարել վճարումներ օնլայն հարթակում ցանկացած վայրից և ցանկացած ժամի։ Թվային քարտը կարող էդ կցել նաև <strong className="text-gray-900 font-semibold">Apple Pay</strong>-ին և <strong className="text-gray-900 font-semibold">Google Pay</strong>-ին։
            </p>

            <p>
              <strong className="text-purple-700 font-bold">Evoca Digital քարտը</strong> կարող ես պատվիրել <strong className="text-purple-700 font-bold">EvocaTOUCH</strong> հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում։ Ի դեպ, քարտը մինչև <strong className="text-purple-700 font-semibold">դեկտեմբերի 31</strong>-ը պատվիրելու դեպքում այն կստանաս ամբողջովին <strong className="text-purple-700 font-bold">ԱՆՎՃԱՐ</strong>։ Թվային քարտը քոնը կլինի քո իսկ նախընտրած արժույթով և դիզայնով։
            </p>

            <p>
              Ի դեպ, հավելվածում դու կգտնես <strong className="text-purple-700 font-bold">Evoca Digital քարտի</strong> 5 դիզայն։ Կարող էդ ընտրել քո սիրելի դիզայնը և փոխել այն երբ ցանկանաս։ Իսկ շուտով քեզ սպասվում են թվային քարտի դիզայնի շատ-շատ հետաքրքիր տարբերակներ։
            </p>

            {/* Նկարների կամ քարտերի շերտավորված ցուցադրություն */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center p-6">
              <img 
                src="https://www.evoca.am/file_manager/CreditCard_Template%D5%B6%D5%A5%D5%B8.png" 
                alt="Evoca Digital քարտերի դիզայններ" 
                className="max-h-96 object-contain"
              />
            </div>

            <p>
              <strong className="text-purple-700 font-bold">Evoca Digital քարտերի</strong> պայմաններին ավելի մանրամասն կարող ես ծանոթանալ <a href="#terms" className="text-purple-700 font-bold underline hover:text-purple-800 transition-colors">այստեղ</a>։
            </p>

            <hr className="border-gray-100 my-8" />

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Իսկ հիմա եկեք խոսենք ֆիզիկական և թվային քարտերի տարբերության մասին։
            </h3>

            <p>
              Ֆիզիկական քարտի վրա երևում է քարտի համարը, CVV կոդը և ժամկետի ավարտը, իսկ թվային քարտի դեպքում տվյալն ինֆորմացիան հասանելի է միայն հավելվածում։ Մյուս տարբերությունն այն է, որ թվային քարտով օնլայն գործարք իրականացնելիս ոչ մի ֆինանսական տվյալ հասանելի չէ երրորդ կողմին, որն էլ զերծ է պահում քարտապանին ցանկացած տեսակի խարդախությունից։
            </p>

            <div className="bg-purple-50/50 rounded-2xl p-6 sm:p-8 border border-purple-100 space-y-6">
              <h4 className="text-xl font-extrabold text-purple-900">
                Ամփոփելով նշենք թվային քարտերի հիմնական առավելությունները.
              </h4>

              <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-700 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-gray-900 font-bold">Արագություն</strong> - ի տարբերություն ֆիզիկական քարտի՝ թվային քարտի ակտիվանում է վայրկյանների ընթացքում։ Քարտի ժամկետը լրանալու դեպքում առանց ավելորդ ժամանակ կորցնելու՝ կարող ես շատ արագ վերաակտիվացնել այն։ Թվային քարտը նաև հեշտ վերահսկելի է։ Այն հնարավոր է ակտիվացնել և ապաակտիվացնել մեկ ակնթարթում։
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-700 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-gray-900 font-bold">Անվտանգություն</strong> - քարտի տվյալները հասանելի են միայն հավելվածում, ինչն էլ պաշտպանում է երրորդ կողմի հնարավոր խարդախություններից։ Թվային քարտերի դեպքում այն բանկոմատներում մնալու կամ մոռանալու տարբերակներից նույնպես կարող ես խուսափել։
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-700 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-gray-900 font-bold">Ճկունություն</strong> - այժմ <span className="text-purple-700 font-bold">EvocaTOUCH</span> հավելվածում հասանելի է թվային քարտի 5 դիզայն։ Շուտով կներկայացնենք մի շարք նոր, հետաքրքիր դիզայներ։ Այս ամենի հետ մեկտեղ, դու նաև հնարավորություն ունես ցանկացած պահի փոխել քարտիդ դիզայնը։
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-700 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-gray-900 font-bold">Պարզություն</strong> - թվային քարտերով յուրաքանչյուր գործընթաց ավելի պարզ է, արագ ու հարմար. այն հիմնականում արտացոլվում է օնլայն հարթակում գնումներ կատարելիս։
                  </div>
                </li>
              </ul>
            </div>

                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/products/evocabank-participates-in-autoshow-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17902383376936/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evoca-ն մասնակցում է Armenian Auto Show 2026-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">22.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
              </div>
            </Link>

          </div>
        </div>
                
          </div>
                    
                    
        </main>
      </div>

      {/* Ֆութեր */}
      <Footer />
    </div>
  );
}