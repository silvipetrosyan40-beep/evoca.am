import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, FileText, Download } from 'lucide-react';

export default function EvocaTouchPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

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
            <span className="text-gray-800 font-medium">EvocaTOUCH</span>
          </div>

          <div className="space-y-6">

            {/* ՀԻՄՆԱԿԱՆ ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ԲԼՈԿ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6 text-gray-800">
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                EvocaTOUCH
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր ու ժամանակակից պրոդուկտներով:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով ու հնարավորություններով:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար: Կարևորելով հավելվածի անվտանգ օգտագործումն՝ Բանկն ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարված գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մոբայլ տեխնոլոգիաներով:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance՝ Dark և Light: Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են՝ Քարտեր, Հաշիվներ, Վարկեր, Ավանդներ: Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ: Հնարավոր էծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին՝ թերթվող story-ների միջոցով:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման և սպասարկման վճարի՝ օգտատերերը կարող են.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-base">
                <li>Բացել բանկային հաշիվներ,</li>
                <li>Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</li>
                <li>Ստանալ վարկ,</li>
                <li>Ներդնել ավանդ,</li>
                <li>Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</li>
                <li>Կատարել բանկային փոխանցումներ և վճարումներ,</li>
                <li>Կատարել կոմունալ վճարումներ,</li>
                <li>Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</li>
                <li>Կատարել փոխանցումներ կոնտակտային տվյալներով,</li>
                <li>24/7 ուղղել հարցեր նամակի միջոցով:</li>
              </ul>

              <p className="text-base leading-relaxed text-gray-600 pt-4">
                Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: Հաճախորդակենտրոն մոտեցման շնորհիվ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին և կարիքներին:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի:
              </p>

              <p className="text-base leading-relaxed font-semibold text-gray-900 pt-2">
                EvocaTOUCH-ը պարզապես բանկային հավելված չէ. կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս:
              </p>

            </div>

            {/* ՓԱՍՏԱԹՂԹԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
              <div className="space-y-4">
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