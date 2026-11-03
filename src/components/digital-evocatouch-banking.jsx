import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; // կամ Header-իդ ճիշտ pathway-ը
import Footer from './footer';
import { Home, FileText, Download } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EvocaTouchPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const reviews = [
    {
      id: 1,
      text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ։ Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի։ Շնորհակալ ենք, որ Դուք կաք։",
      name: "Սուսաննա Վանյան",
      role: "Հաճախորդ"
    },
    {
      id: 2,
      text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների՝ հեշտ, արագ, որակով: Սպասարկման...",
      name: "Նունե Գևորգյան",
      role: "Հաճախորդ"
    },
    {
      id: 3,
      text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում՝ ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ՝ լի...",
      name: "Արամ Ազարյան",
      role: "Indigo Branding-ի հիմնադիր"
    },
    {
      id: 4,
      text: "Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով:",
      name: "Էլեն Վարդանյան",
      role: "Հաճախորդ"
    },
    {
      id: 5,
      text: "Բանկ, որ իր բրենդինգի շքեղ միջոցառումով ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ ու ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
      name: "Կամո Թովմասյան",
      role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
    }
  ];

  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ - IMPORT-ՈՎ */}
        <Header />

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16 space-y-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">EvocaTOUCH</span>
          </div>

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
              Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance՝ Dark և Light: Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են՝ Քարտեր, Հաշիվներ, Վարկեր, Ավանդներ: Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ: Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին՝ թերթվող story-ների միջոցով:
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի:
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման և սպասարկման վճարի՝ օգտատերերը կարող են.
            </p>

            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Բացել բանկային հաշիվներ,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Ստանալ վարկ,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Ներդնել ավանդ,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Կատարել բանկային փոխանցումներ և վճարումներ,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Կատարել կոմունալ վճարումներ,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>Կատարել փոխանցումներ կոնտակտային տվյալներով,</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
                <span>24/7 ուղղել հարցեր նամակի միջոցով:</span>
              </li>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
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

          {/* ՀԱՃԱԽՈՐԴՆԵՐԻ ԿԱՐԾԻՔՆԵՐԻ ՍԼԱՅԴԵՐ */}
          <div className="w-full max-w-7xl mx-auto my-12 bg-[#FBF9FD] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm border border-purple-50">
            
            {/* Ձախ կողմի նկարներ */}
            <div className="absolute left-6 top-6 sm:left-12 sm:top-10 pointer-events-none z-10">
              <img 
                src="https://www.evoca.am/img/reviews/hand2.png" 
                alt="Hand 2" 
                className="w-20 sm:w-28 object-contain drop-shadow-md"
              />
            </div>
            <div className="absolute left-10 bottom-8 pointer-events-none z-10">
              <img 
                src="https://www.evoca.am/img/reviews/z-purple.png" 
                alt="Z Purple" 
                className="w-6 sm:w-8 object-contain"
              />
            </div>

            {/* Աջ կողմի նկարներ */}
            <div className="absolute right-6 top-6 sm:right-12 sm:top-10 pointer-events-none z-10">
              <img 
                src="https://www.evoca.am/img/reviews/hand1.png" 
                alt="Hand 1" 
                className="w-20 sm:w-28 object-contain drop-shadow-md"
              />
            </div>
            <div className="absolute right-10 bottom-8 pointer-events-none z-10">
              <img 
                src="https://www.evoca.am/img/reviews/z-violet.png" 
                alt="Z Violet" 
                className="w-8 sm:w-10 object-contain"
              />
            </div>

            {/* Կարծիքների Սլայդեր (Swiper) */}
            <div className="max-w-3xl mx-auto px-6 relative z-20">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveReviewIndex(swiper.realIndex)}
                className="pb-8"
              >
                {reviews.map((rev) => (
                  <SwiperSlide key={rev.id}>
                    <div className="flex flex-col items-center text-center space-y-6">
                      
                      {/* Աստղեր */}
                      <div className="flex gap-1 text-amber-400 text-xl">
                        {"★".repeat(5)}
                      </div>

                      {/* Տեքստը մեջբերման նշաններով */}
                      <div className="relative px-6 sm:px-12">
                        <span className="absolute -left-2 -top-2 text-[#6400DC] text-3xl font-serif">“</span>
                        <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
                          {rev.text}
                        </p>
                        <span className="absolute -right-2 -bottom-4 text-[#6400DC] text-3xl font-serif">”</span>
                      </div>

                      {/* Հաճախորդի տվյալներ */}
                      <div className="pt-2 space-y-1">
                        <h4 className="font-bold text-neutral-900 text-base">{rev.name}</h4>
                        <p className="text-xs text-neutral-500">{rev.role}</p>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Կետավոր ցուցիչներ (Pagination dots) */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {reviews.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx ? 'w-8 bg-[#6400DC]' : 'w-2.5 bg-neutral-300'
                    }`}
                  ></span>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>

      {/* ՖՈՒԹԵՐ - IMPORT-ՈՎ */}
      <Footer />
    </div>
  );
}