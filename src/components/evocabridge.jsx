import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // FAQ բացվող-փակվող վիճակ
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqList = [
    {
      question: "1.Առաջին փուլ Դիմում:",
      answer: "Evocabank-ում աշխատանքի դիմելիս թեկնածուի ճանապարհը սկսվում է հայտի ներկայացումից, որն իրականացվում է կամ ներքոնշյալ հայտը լրացնելով կամ cv@evocabank.am էլ. հասցեին Ձեր ինքնակենսագրականն ուղարկելով:"
    },
    {
      question: "2.Երկրորդ փուլ Թեստավորում և ամփոփում:",
      answer: "Եթե ինքնակենսագրականում նշված Ձեր փորձը համապատասխանել է պահանջներին, ապա Evocabank-ի հարցազրուցավարը կապ կհաստատի Ձեզ հետ: Սովորաբար, Evoca-ում հարցազրույցների գործընթացն անցնում է երեք փուլով:Առաջին փուլը հեռախոսային հարցազրույց է: Այս փուլում Դուք կստանաք ավելի մանրամասն ինֆորմացիա այն աշխատանքի մասին, որի համար դիմել եք: Կներկայացնենք Ձեզ Evocabank-ը, և, թե ինչպիսին է աշխատանքը մեր թիմում: Նաև մի քանի հարցեր կլինեն Ձեր մասնագիտական փորձի վերաբերյալ:Երկրորդ փուլը առերես հարցազրույց է հարցազրուցավարի և հավաքագրման ղեկավարի հետ: Այս փուլի նպատակն է գնահատել Ձեր հետաքրքրվածությունը և կարողությունները իրականացնելու ամենօրյա աշխատանքն ու պարտականությունները:Երրորդ փուլը հարցազրույց է թիմի անդամների, ղեկավարների և բոլոր այն մարդկանց հետ, ում հետ Դուք հնարավոր է հետագայում աշխատեք:"
    },
    {
      question: "3.Երրորդ փուլ Թեստավորում և ամփոփում:",
      answer: "Թեստավորումից և հարցազրույցների ավարտից հետո այն մարդիկ, ում հետ զրուցել եք, իրենց կարծիքն են հայտնում Ձեր հետ ունեցած հարցազրույցի արդյունքների վերաբերյալ, և մենք գնահատում ենք, թե արդյոք հաջողակ կլինեք տվյալ դերում:"
    },
    {
      question:"4.Չորրորդ փուլ ստուգումներ",
      answer: "Աշխատանքի պայմանական առաջարկ կատարելուց հետո, Evoca-ն իրականացնում է դիմորդի վերաբերյալ պարտադիր ստուգումներ: Կատարվում են 4 հիմնական տեսակների ստուգումներ` քրեական պատմության, կրթության, աշխատանքային պատմության և referral ստուգումներ:"
    },
    {
        question:"5.Հինգերորդ փուլ աշխատանի առաջարկ",
        answer: "Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվենի փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!"
    },
  ];

  // Դիմումի ֆորմայի վիճակներ
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    cvFile: null,
    captchaInput: ''
  });

  const [captchaCode, setCaptchaCode] = useState('4L2LUD');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.cvFile) {
      setError('Խնդրում ենք լրացնել պարտադիր դաշտերը և կցել ռեզյումեն։');
      return;
    }

    if (formData.captchaInput !== captchaCode) {
      setError('Ստուգման ծածկագիրը (Captcha) սխալ է։');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Ձախ կողմի հղումներ */}
        <nav className="flex space-x-6 items-center px-4 py-2 bg-white border-b border-gray-200">
          <button 
            onClick={() => handleNavigation('/hy/loans')}
            className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
          >
            Անհատ
          </button>
          <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բիզնես</button>
          <button onClick={() => handleNavigation('/hy/akntartayinvcharumner')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Ակնթարթային վճարումներ</button>
          <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Մեր մասին</button>
          <button onClick={() => handleNavigation('/all-news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
          <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
          <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

          {/* Առցանց հայտեր Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); }}
              className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
            >
              <span>Առցանց հայտեր</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOnlineAppsOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  ՓՄՁ վարկավորում
                </button>
                <button onClick={() => { handleNavigation('/online-apps/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  Visa Infinite
                </button>
                <button onClick={() => { handleNavigation('/online-apps/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  MasterCard Gold
                </button>
                <button onClick={() => { handleNavigation('/online-apps/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  Visa Gold
                </button>
              </div>
            )}
          </div>

          {/* Հետադարձ կապ Dropdown */}
          <div className="relative">
            <button 
              onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); }}
              className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
            >
              <span>Հետադարձ կապ</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>

            {isContactOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                  Պատվիրել զանգ
                </button>
              </div>
            )}
          </div>
        </nav>

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
                  onClick={() => handleNavigation('/hy/culture')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca Լայֆ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/work-at-evoca')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                   Աշխատանք և պրակտիկա
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

          {/* Ներքին մանուշակագույն երկրորդային ենթաբաժինների բար */}
          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button 
                  onClick={() => handleNavigation('/hy/work-at-evoca')} 
                  className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0"
                >
                  Աշխատանք Evoca-ում
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/career/internship')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0"
                >
                  Ուսումնական պրակտիկա
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/career/evocabridge')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0"
                >
                  EvocaBRIDGE
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Հաճախ տրվող հարցեր Բաներ բաժին */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 my-8">
        <img 
          src="https://www.evoca.am/images-cache/menu/1/17377293888049/1920x634.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[260px] sm:h-[390px] object-cover"
        />

        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-sm sm:max-w-md bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-3xl shadow-xl space-y-2 border border-purple-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
           EvocaBRIDGE

          </h2>
          <p>EvocaBRIDGE: Bridging Ideas, Shaping The Future
</p>
        </div>
      </div>

                <div className="py-12 bg-white space-y-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-900 tracking-tight">
      Չունե՞ս աշխատանքային փորձ, բայց փնտրում ես աշխատանք, ուրեմն EvocaBRIDGE ծրագիրը քեզ համար է!
    </h2>

    <ul className="space-y-4 text-gray-700 text-base">
      <li className="flex items-start space-x-3">
        <span className="text-purple-600 font-bold mt-0.5">✔</span>
        <span>երկամսյա խորացված ուսումնական ծրագիր,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-purple-600 font-bold mt-0.5">✔</span>
        <span>ծանոթացում նորարար բանկային միջավայրին ներսից,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-purple-600 font-bold mt-0.5">✔</span>
        <span>գործնական կապերի հաստատում,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-purple-600 font-bold mt-0.5">✔</span>
        <span>ամսական 180.000 ՀՀ դրամ վարձատրություն՝ ներառյալ հարկերը և այլ պարտադիր վճարումները,</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-purple-600 font-bold mt-0.5">✔</span>
        <span>անմիջապես ծրագրի ավարտից հետո աշխատանքի անցնելու հնարավորություն:</span>
      </li>
    </ul>

    <div className="space-y-4 pt-4">
      <h3 className="text-lg sm:text-xl font-extrabold text-purple-900 tracking-tight">
        💼 EvocaBRIDGE-ին կարողես մասնակցել, եթե...
      </h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>սովորում ես համալսարանի 4-րդ կուրսում, մագիստրատուրայում կամ մինչև 1 տարի է՝ ինչ ավարտել ես համալսարանը,</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>ունես բարձր առաջադիմություն,</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>հետաքրքրասեր ես, ակտիվ ու նպատակասլաց,</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>սիրում ես բացահայտել նորը, սովորել և զարգանալ:</span>
        </li>
      </ul>
    </div>

    <div className="space-y-4 pt-4">
      <h3 className="text-lg sm:text-xl font-extrabold text-purple-900 tracking-tight">
        💼 EvocaBRIDGE-ին մասնակցելու համար <a href="mailto:evocabridge@evoca.am" className="text-purple-700 font-bold hover:underline">evocabridge@evoca.am</a> էլեկտրոնային հասցեին ուղարկիր.
      </h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>ինքնակենսագրական,</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>ՄՈԳ-ի ցուցանիշը հաստատող տեղեկանք,</span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-purple-600 font-bold mt-0.5">✔</span>
          <span>«Նամակ ապագայից» այն մասին, թե ինչպես ես ամենամեծ 2 նպատակներդ դարձրել հաջողված նախագծեր:</span>
        </li>
      </ul>
      <p className="text-gray-600 text-base leading-relaxed pt-2">
        Նախնական ընտրություն անցած թեկնածուների հետ կkիրականացվեն անհատական հարցազրույցներ, որի արդյունքում կընտրվեն ծրագրի մասնակիցները:
      </p>
    </div>

    <div className="space-y-4 pt-4 border-t border-purple-100">
      <h3 className="text-lg sm:text-xl font-extrabold text-purple-900 tracking-tight">
        Ծրագրի մանրամասներ.
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
        EvocaBRIDGE-ը իրականացվում է 3 փուլով:
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        <span className="font-bold text-purple-900">Փուլ 1:</span> Տեսական ուսուցման ընթացքում մասնակիցներն ունենում են հանդիպումներ Բանկի մի շարք ստորաբաժանումների ղեկավարների հետ, ստանում խորացված գիտելիքներ բանկային պրոդուկտների, ծառայությունների և մի շարք գործընթացների վերաբերյալ:
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        <span className="font-bold text-purple-900">Փուլ 2:</span> Գործնական փուլի շրջանակում մասնակիցները հնարավորություն են ունենում տեսական և գործնական գիտելիքները կիրառել պրակտիկ միջավայրում: Այս փուլի ընթացքում մասնակիցները նաև ներգրավվում են նախագծերի մշակման և ներկայացման հետաքրքիր գործընթացում:
      </p>
    </div>
  </div>
</div>
      
      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}