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
                  onClick={() => handleNavigation('/hy/career')} 
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
                <button onClick={() => handleNavigation('/hy/culture')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Մշակույթ</button>
                <button onClick={() => handleNavigation('/hy/career-benefits')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Առավելություններ</button>
                <button onClick={() => handleNavigation('/hy/career-faq')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Հաճախ տրվող հարցեր</button>
                <button onClick={() => handleNavigation('/hy/how-we-hire')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ինչպես ընդունվել աշխատանքի Evocabannk-ում</button>
              </nav>
            </div>
          </div>
        </header>

        {/* Բաներ բաժին */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100 my-8">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg" 
            alt="Մշակույթ" 
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 max-w-md sm:max-w-lg bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-purple-100">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Մշակույթ
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: Այստեղ տաղանդներն անընդհատ զարգանում են ու կատարելագործվում:
            </p>
          </div>
        </div>

        {/* Ինչու աշխատել Evoca-ում բաժին */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white p-6 sm:p-12 rounded-3xl border border-purple-100 shadow-sm">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Ինչո՞ւ աշխատել Evoca-ում
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
              </p>
            </div>

            <div className="w-full lg:w-[520px] h-72 sm:h-96 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
              <img 
                src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
                alt="Ինչո՞ւ աշխատել Evoca-ում" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Մշակույթ սլայդեր բաժին */}
      <section className="w-full bg-purple-900 py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Մշակույթ
            </h2>
            <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
              Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ: Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացե՛ք մեզ:
            </p>
          </div>

          <div className="relative flex items-center justify-center gap-5 overflow-x-auto py-4 scrollbar-none">
            <div className="w-64 sm:w-72 bg-white rounded-2xl overflow-hidden shadow-lg shrink-0 text-gray-900 p-3 space-y-2.5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-full h-32 rounded-xl overflow-hidden relative bg-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg" 
                  alt="Evoca Corporate Party 2021" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">
                Evoca Corporate Party 2021
              </h4>
            </div>

            <div className="w-72 sm:w-80 md:w-[380px] bg-white rounded-2xl overflow-hidden shadow-xl shrink-0 text-gray-900 p-4 space-y-3 z-10">
              <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden relative bg-gray-100 group">
                <img 
                  src="https://www.evoca.am/images-cache/culture_sliders/1/16412988100187/744x419.jpg" 
                  alt="Evocabank neon art corporate party" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-gray-900">
                Evocabank neon art corporate party
              </h3>
            </div>

            <a 
              href="https://youtu.be/PvDYyPGb3RU?si=VZnVHj44gkBeOeEi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-64 sm:w-72 bg-white rounded-2xl overflow-hidden shadow-lg shrink-0 text-gray-900 p-3 space-y-2.5 opacity-80 hover:opacity-100 transition-opacity block group cursor-pointer"
            >
              <div className="w-full h-32 rounded-xl overflow-hidden relative bg-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-indigo-900 opacity-90"></div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/50 px-1.5 py-0.5 rounded">
                  YouTube
                </span>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">
                Evoca New Year Corporate Party 2022
              </h4>
            </a>
          </div>
        </div>
      </section>

      {/* Թիմի հարցազրույցի քարտեր */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-purple-50/50 rounded-3xl p-8 border border-purple-100 shadow-sm flex flex-col justify-between space-y-8">
              <div className="absolute top-6 right-6 text-purple-700 text-3xl font-serif select-none pointer-events-none">
                “
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xl sm:text-2xl font-extrabold text-purple-900 leading-snug">
                  Գույներ<br />
                  Էմոցիաներ<br />
                  Նորարարություններ
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-purple-100/60">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  Գայանե Առաքելյան
                </h4>
                <p className="text-xs text-gray-500">...</p>
              </div>
            </div>

            <div className="relative bg-purple-50/50 rounded-3xl p-8 border border-purple-100 shadow-sm flex flex-col justify-between space-y-8">
              <div className="absolute top-6 right-6 text-purple-700 text-3xl font-serif select-none pointer-events-none">
                “
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xl sm:text-2xl font-extrabold text-purple-900 leading-snug">
                  Թրենդային<br />
                  Պահանջված
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-purple-100/60">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  Հարություն Սահակյան
                </h4>
                <p className="text-xs text-gray-500">...</p>
              </div>
            </div>

            <div className="relative bg-purple-50/50 rounded-3xl p-8 border border-purple-100 shadow-sm flex flex-col justify-between space-y-8">
              <div className="absolute top-6 right-6 text-purple-700 text-3xl font-serif select-none pointer-events-none">
                “
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xl sm:text-2xl font-extrabold text-purple-900 leading-snug">
                  Դինամիկ<br />
                  Պրպտող
                </p>
              </div>
              <div className="space-y-1 pt-4 border-t border-purple-100/60">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  Լիլիթ Գաբրոյան
                </h4>
                <p className="text-xs text-gray-500">...</p>
              </div>
            </div>
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