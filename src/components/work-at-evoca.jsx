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

  // Աշխատատեղերի ցանկը
  const jobs = [
    {
      id: 1,
      title: "Մանրածախ վարկային պրոդուկտների մշակման մասնագետ",
      deadline: "20.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 2,
      title: "ՓՄՁ վարկավորման ավագ վարկային մասնագետ",
      deadline: "20.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 3,
      title: "Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)",
      deadline: "02.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 4,
      title: "Համապատասխանության ապահովման մասնագետ",
      deadline: "28.10.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 5,
      title: "Ավագ Հաշվապահ",
      deadline: "02.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 6,
      title: "Կորպորատիվ վարկային պրոդուկտների զարգացման մասնագետ",
      deadline: "27.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 7,
      title: "Թվային զարգացման մասնագետ (արժեթղթային և ներդրումային պրոդուկտներ)",
      deadline: "02.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ, Սեբաստիա 108/3"
    },
    {
      id: 8,
      title: "Համակարգերի ադմինիստրատոր",
      deadline: "20.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ, Սեբաստիա 108/3"
    },
    {
      id: 9,
      title: "Պայմանագրային ապահովման ավագ մասնագետ",
      deadline: "28.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 10,
      title: "Կառավարչի տեղակալ – ավագ վարկային մասնագետ «Դիլիջան» մասնաճյուղում",
      deadline: "28.10.2026",
      location: "ք. Դիլիջան"
    },
    {
      id: 11,
      title: "Բիզնեսի միջազգային ընդլայնման բաժնի պետ",
      deadline: "10.12.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 12,
      title: "Խոշոր կորպորատիվ բիզնեսի զարգացման ավագ մասնագետ",
      deadline: "23.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 13,
      title: "Խոշոր կորպորատիվ բիզնեսի զարգացման գլխավոր մասնագետ",
      deadline: "23.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 14,
      title: "Պրոդուկտ մարքեթինգ մենեջեր",
      deadline: "23.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 15,
      title: "Ֆինանսական շուկաների կառավարման մասնագետ",
      deadline: "20.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 16,
      title: "Կրտսեր գրաֆիկ դիզայներ",
      deadline: "23.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 17,
      title: "Սոցիալական մեդիայի մասնագետ",
      deadline: "23.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 18,
      title: "Mulberry մասնագետ",
      deadline: "02.12.2026",
      location: "Մալաթիա Սեբաստիա 108/3"
    },
    {
      id: 19,
      title: "Վարկային փաստաթղթավորման գլխավոր մասնագետ",
      deadline: "09.12.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 20,
      title: "Հաճախորդների բողոքների մասնագետ",
      deadline: "09.12.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    {
      id: 21,
      title: "Գրասենյակի ադմինիստրատոր",
      deadline: "10.12.2026",
      location: "Երևան, Արամի 74"
    },
    {
      id: 22,
      title: "Ակտիվների, պարտավորությունների և կապիտալի կառավարման բաժնի ղեկավար",
      deadline: "27.11.2026",
      location: "Երևան, Գլխամասային գրասենյակ"
    },
    
  ];
  
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
                Աշխատանք Evoca-ում
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
          src="https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg" 
          alt="Աշխատանք Evoca-ում" 
          className="w-full h-[260px] sm:h-[390px] object-cover"
        />

        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-sm sm:max-w-md bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-3xl shadow-xl space-y-2 border border-purple-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            Աշխատանք Evoca-ում
          </h2>
        </div>
      </div>

      {/* Ինչպիսի՞ թիմակից ենք մենք փնտրում */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Ինչպիսի՞ թիմակից ենք մենք փնտրում։
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center overflow-hidden">
                <img src="https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png" alt="Մոտիվացված" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                Մոտիվացված
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center overflow-hidden">
                <img src="https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png" alt="Նպատակասլաց" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                Նպատակասլաց
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center overflow-hidden">
                <img src="https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png" alt="Արագ և ճկուն" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                Արագ և ճկուն
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center overflow-hidden">
                <img src="https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png" alt="Իր աշխատանքը շա~տ սիրող" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                Իր աշխատանքը շա~տ սիրող
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:shadow-md transition-shadow lg:col-span-2 justify-self-center w-full max-w-md">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center overflow-hidden">
                <img src="https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png" alt="Նորարարական և կրեատիվ լուծումներ գտնող" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                Նորարարական և կրեատիվ լուծումներ գտնող
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Բաց մի թող քո նոր հնարավորությունը (Աշխատատեղեր) */}
      <section className="max-w-5xl mx-auto px-4 py-16 font-sans space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Բաց մի թող քո նոր հնարավորությունը
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            {jobs.length} աշխատատեղ
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {job.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-gray-400 block text-xs">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                    <span className="font-bold text-gray-900">{job.deadline}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-gray-400 block text-xs">Աշխատանքի վայր</span>
                    <span className="font-bold text-gray-900">{job.location}</span>
                  </div>
                </div>
              </div>

              <div className=" px-6 py-4 flex justify-end">
                <button
                  onClick={() => navigate(`/hy/career/job${job.id}`)}
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-bold rounded-full transition-colors cursor-pointer border-none shadow-sm"
                >
                  Տեսնել մանրամասն և դիմել
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}