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
      question: "1.Առաջին փուլ Համագործակցություն:",
      answer: "Բարձրագույն ուսումնական հաստատության և Evocabank-ի միջև կնքվում է ուսումնական պրակտիկայի վերաբերյալ պայմանագիր` համաձայն ուսումնական պլանի:"
    },
    {
      question: "2.Երկրորդ փուլ Դիմում հայտ:",
      answer: "Ուսանողը, ով ցանկանում է անցնել պրակտիկա, պետք է լրացնի դիմում-հայտ՝ կցելով ինքնակենսագրականը:"
    },
    {
      question: "3.Երրորդ փուլ Թեստավորում:",
      answer: "Դիմորդներն անցնում են թեստավորում, որն իրականացվում է երկու փուլով: Առաջին փուլը գրավոր թեստ է ընդհանուր զարգացվածության վերաբերյալ` ստուգում է hard skills: Բավարար արդյունքներ ունենալու դեպքում թեկնածուն տեղափոխվում է երկրորդ փուլ, որը թիմային առաջադրանք է, ստուգում է soft skills: "
    },
    {
      question:"4.Չորրորդ փուլ ՈՒսումնական պրակտիկա",
      answer: "Նախորդ փուլում լավագույն արդյունք ցուցաբերած դիմորդներն սկսում են պրակտիկան: Ուսանողները, ներածական դասընթաց անցնելուց և կազմակերպությանը ծանոթանալուց հետո, անմիջապես ներգրավվում են ամենօրյա աշխատանքներում` կիրառելով համալսարանական գիտելիքները և հմտությունները:Պրակտիկայի ավարտին ուսանողներն ստանում են մեծ փորձ, պրակտիկ գիտելիքներ և մոտիվացիա: Եվ իհարկե, պրակտիկայի մասնակցության հավաստագիր:"
    },
    {
        question:"5.Հինգերորդ փուլ աշխատանքի առաջարկ",
        answer: "Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվեն փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!"
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
          src="https://www.evoca.am/images-cache/menu/1/1619460987097/1920x634.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[260px] sm:h-[390px] object-cover"
        />

        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-sm sm:max-w-md bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-3xl shadow-xl space-y-2 border border-purple-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
           Ուսումնական պրակտիկա

          </h2>
          <p>Evocabank-ն, առանձնահատուկ ուշադրություն դարձնելով երիտասարդության զարգացմանը և նրանց համար հնարավորություններ ստեղծելուն, պարբերաբար կազմակերպում է ուսումնական պրակտիկաներ` համագործակցելով հայաստանյան առաջատար բուհերի հետ:
</p>
        </div>
      </div>

      {/* Հարցերի ցանկ (Accordion FAQ Բաժին) */}
      <section className="max-w-4xl mx-auto px-4 py-12 w-full font-sans">
        <div className="space-y-8">
          <div className="space-y-3">
            
            
          </div>


                <div className="py-12 bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-xl sm:text-2xl font-extrabold text-purple-900 tracking-tight mb-8">
      Համալսարանական պրակտիկայի շրջանակում մենք համագործակցում ենք հետևյալ ԲՈՒՀ-երի հետ`
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* ԵՊՀ */}
      <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
        <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white rounded-lg border border-dashed border-gray-300">
           <img 
          src="https://www.evoca.am/images-cache/partner_universities/1/16192503158745/120x120.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[50px] sm:h-[50px] object-cover"
        />
        </div>
        <span className="text-sm font-semibold text-gray-800">Երևանի պետական համալսարան</span>
      </div>

      {/* Հայաստանի ամերիկյան համալսարան */}
      <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
        <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white rounded-lg border border-dashed border-gray-300">
         <img 
          src="https://www.evoca.am/images-cache/partner_universities/1/16192501535211/120x120.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[50px] sm:h-[50px] object-cover"
        />
        </div>
        <span className="text-sm font-semibold text-gray-800">Հայաստանի ամերիկյան համալսարան</span>
      </div>

      {/* Հայաստանի պետական տնտեսագիտական համալսարան */}
      <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
        <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white rounded-lg border border-dashed border-gray-300">
 <img 
          src="https://www.evoca.am/images-cache/partner_universities/1/16192504505443/120x120.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[50px] sm:h-[50px] object-cover"
        />        </div>
        <span className="text-sm font-semibold text-gray-800">Հայաստանի պետական տնտեսագիտական համալսարան</span>
      </div>

      {/* Հայ-Ռուսական Համալսարան */}
      <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
        <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white rounded-lg border border-dashed border-gray-300">
          <img 
          src="	https://www.evoca.am/images-cache/partner_universities/1/16192505629164/120x120.jpg" 
          alt="Հաճախ տրվող հարցեր" 
          className="w-full h-[50px] sm:h-[50px] object-cover"
        />      
        </div>
        <span className="text-sm font-semibold text-gray-800">Հայ-Ռուսական Համալսարան</span>
      </div>
    </div>
  </div>
</div>




          <div className="space-y-4">
            {faqList.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-purple-200/80 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                  >
                    <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-100' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-purple-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Դառնալ թիմի անդամ ինտերակտիվ ֆորմա */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-16 w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-purple-100 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-900 tracking-tight">
              Դառնալ թիմի անդամ
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Եթե ցանկանում ես միանալ <span className="text-purple-700 font-bold">EvocaTEAM</span>-ին,<br className="hidden sm:inline" /> կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
            </p>
          </div>

          {submitted ? (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-purple-900">Շնորհակալություն դիմելու համար</h3>
              <p className="text-gray-600">Ձեր հայտը հաջողությամբ ուղարկվել է Evocabank-ի թիմին: Մենք շուտով կկապնվենք ձեզ հետ:</p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', phone: '', email: '', facebook: '', linkedin: '', coverLetter: '', cvFile: null, captchaInput: '' }); }}
                className="mt-4 px-6 py-2.5 bg-purple-800 text-white font-bold rounded-full hover:bg-purple-900 transition-colors cursor-pointer"
              >
                Ուղարկել նոր հայտ
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    Անուն <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    placeholder="Անուն" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    Ազգանուն <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    placeholder="Ազգանուն" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    Հեռախոսահամար <span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-purple-700 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
                    <div className="flex items-center space-x-1 bg-gray-50 px-3 py-3 border-r border-gray-200 text-sm text-gray-700">
                      <span>🇦🇲</span>
                      <span className="font-medium">+374</span>
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="XX XXXXXX" 
                      className="w-full px-4 py-3 outline-none text-sm bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    Էլ. հասցե
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="example@domain.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    Facebook սոց. կայքում անձնական էջի հղում
                  </label>
                  <input 
                    type="url" 
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleFormChange}
                    placeholder="https://facebook.com/..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-900">
                    LinkedIn սոց. կայքում անձնական էջի հղում
                  </label>
                  <input 
                    type="url" 
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleFormChange}
                    placeholder="https://linkedin.com/in/..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">
                  Ուղեկցող նամակ
                </label>
                <textarea 
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleFormChange}
                  rows="4" 
                  placeholder="Գրեք կարճ ուղեկցող նամակ ձեր մասին..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-900">
                  Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 hover:border-purple-700 rounded-2xl p-6 cursor-pointer bg-gray-50/50 hover:bg-purple-50/30 transition-all">
                  <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
                    <span>📄</span>
                    <span>{formData.cvFile ? formData.cvFile.name : 'Կցել ֆայլը / ֆայլերը'}</span>
                  </div>
                  <input 
                    type="file" 
                    name="cvFile"
                    onChange={handleFormChange}
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </label>
              </div>

              <div className="space-y-3 pt-2">
                <label className="block text-sm font-bold text-gray-900">
                  Ստուգման ծածկագիր <span className="text-red-500">*</span>
                </label>
                <div className="p-4 border border-gray-200 rounded-2xl bg-gray-50/50 space-y-4 max-w-sm">
                  <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden py-4 px-6 flex items-center justify-between shadow-inner">
                    <span className="font-mono text-2xl font-black tracking-widest text-gray-900 select-none italic">
                      {captchaCode}
                    </span>
                    <button 
                      type="button" 
                      onClick={refreshCaptcha}
                      className="text-gray-500 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer text-lg"
                      title="Թարմացնել ծածկագիրը"
                    >
                      🔄
                    </button>
                  </div>
                  <input 
                    type="text" 
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleFormChange}
                    placeholder="Մուտքագրեք ծածկագիրը" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 outline-none text-sm bg-white"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-purple-800 hover:bg-purple-900 text-white font-bold rounded-full transition-colors shadow-lg cursor-pointer text-base tracking-wide"
                >
                  Ես ուզում եմ աշխատել Evoca-ում :)
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}