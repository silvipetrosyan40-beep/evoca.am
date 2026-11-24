import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClassicDepositPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD');

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Գնացուցակի տվյալներ ըստ արժույթների
  const tariffs = {
    AMD: {
      minAmount: '100,000 ֏',
      term: '31 - 1,825 օր',
      rate: 'Մինչև 10.5%',
      replenishment: 'Սկսած 100,000 ֏',
    },
    USD: {
      minAmount: '$300',
      term: '31 - 1,825 օր',
      rate: 'Մինչև 4.5%',
      replenishment: 'Սկսած $100',
    },
    EUR: {
      minAmount: '€300',
      term: '31 - 1,825 օր',
      rate: 'Մինչև 2.0%',
      replenishment: 'Սկսած €100',
    },
    RUB: {
      minAmount: '10,000 ₽',
      term: '31 - 1,825 օր',
      rate: 'Մինչև 6.0%',
      replenishment: 'Սկսած 5,000 ₽',
    },
  };

  // «Այլ ավանդներ» սլայդերի տվյալներ (նկարներով քարտեր)
 const otherDeposits = [
    {
      id: 1,
      title: 'Դասական ավանդ',
      image: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
      path: '/deposits/classic'
    },
    {
      id: 2,
      title: 'Մանկական ավանդ',
      image: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
      path: '/deposits/children'
    },
    {
      id: 3,
      title: 'Ավանդ Evoca Online',
      image: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
      path: '/deposits/evoca-online'
    },
    {
      id: 4,
      title: 'Մանկական ավանդ',
      image: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
      path: '/deposits/children'
    },
    {
      id: 5,
      title: 'Դասական ավանդ',
      image: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
      path: '/deposits/classic'
    },
    {
      id: 6,
      title: 'Ավանդ Evoca Online',
      image: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
      path: '/deposits/evoca-online'
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button onClick={() => handleNavigation('/deposits')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0"> Ավանդներ</button>
              <button onClick={() => handleNavigation('/hy/deposits-important-information')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Կարևոր տեղեկատվություն</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16 space-y-10">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Ավանդներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ավանդ Evoca Online</span>
          </div>
 {/* Վերնագիր, նկարագրություն և աջակողմյան նկար */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-4 border-b border-purple-50">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
                 Ավանդ Evoca Online

                </h2>
                <p className="text-gray-600">
                Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                {/* Այստեղ կարող եք փոխել src հղումը Ձեր նկարի հղումով */}
                <img 
                  src="https://www.evoca.am/images-cache/deposits/1/16133900122115/560x400.png" 
                  alt="Դասական ավանդ" 
                  className="max-h-64 w-auto object-contain rounded-2xl"
                  onError={(e) => {
                    // Եթե նկարը չբեռնվի, ցույց տալ ֆոնային զարդարանք կամ թաքցնել
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          {/* ԳԼԽԱՎՈՐ ՀՈԴՎԱԾԻ / ԱՎԱՆԴԻ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
          <article className="bg-white p-6 sm:p-12 rounded-3xl  border-purple-100 space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
            {/* Ներդիրների (Tabs) կառավարում */}
            <div className="border-b border-purple-100 flex space-x-8">
              <button
                onClick={() => setActiveTab('about')}
                className={`pb-3 font-semibold transition-colors relative cursor-pointer bg-transparent border-none ${
                  activeTab === 'about'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Ավանդի մասին
              </button>
              <button
                onClick={() => setActiveTab('tariffs')}
                className={`pb-3 font-semibold transition-colors relative cursor-pointer bg-transparent border-none ${
                  activeTab === 'tariffs'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Պայմաններ և սակագներ
              </button>
            </div>

            {/* Բովանդակություն ըստ ընտրված ներդիրի */}
            {activeTab === 'about' ? (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
  <div className="space-y-4 text-gray-700">
    <p>
      Ավանդն ընդունվում է ֆիզիկական անձանցից՝ բացառապես <strong className="text-purple-700">EvocaTOUCH և EvocaONLINE</strong> հեռակառավարման համակարգերի միջոցով:
    </p>
    <p>
      Բացի այն, որ մենք խնայում ենք Ձեր ժամանակը, նաև 1 տարի և ավել ժամկետով <strong className="text-purple-700">ավանդ</strong> ձևակերպելու դեպքում առաջարկում ենք մեր գործող տոկոսադրույքից <strong className="text-purple-700">0.25 %-ով բարձր</strong> տոկոսադրույք:
    </p>
    <p>
      Որպես Բանկի ավանդատու՝ Դուք նաև բացարձակապես անվճար կստանաք <strong className="text-purple-700">միջազգային քարտ</strong>:
    </p>
    <p>
      Evocabank-ը մշտապես հոգում է Ձեր հարմարավետության մասին:
    </p>
  </div>

  {/* Աջ կողմի վիզուալ վահանակ (Summary Box) */}
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100 space-y-6">
    {/* Արժույթի ընտրության կոճակներ */}
    <div className="flex space-x-2">
      {[
        { code: 'AMD', label: '֏' },
        { code: 'USD', label: '$' },
        { code: 'EUR', label: '€' },
        { code: 'RUB', label: '₽' },
      ].map((item) => (
        <button
          key={item.code}
          onClick={() => setCurrency(item.code)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer border-none ${
            currency === item.code
              ? 'bg-purple-700 text-white shadow-sm'
              : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>

    {/* Ցուցանիշներ */}
    <div className="divide-y divide-purple-50 space-y-4">
      <div className="flex justify-between items-center pt-2">
        <div>
          <span className="text-xs text-gray-400 block">սկսած</span>
          <span className="text-xl sm:text-2xl font-bold text-purple-700">
            {currency === 'AMD' ? '100,000 ֏' : tariffs[currency].minAmount}
          </span>
        </div>
        <span className="text-gray-500 text-sm">Գումար</span>
      </div>
      <div className="flex justify-between items-center pt-4">
        <span className="text-xl sm:text-2xl font-bold text-purple-700">
          31-1,825 օր
        </span>
        <span className="text-gray-500 text-sm">Ժամկետ</span>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <span className="text-xs text-gray-400 block">մինչև</span>
          <span className="text-xl sm:text-2xl font-bold text-purple-700">
            {currency === 'AMD' ? '10.75% ֏' : tariffs[currency].rate}
          </span>
        </div>
        <span className="text-gray-500 text-sm">Տոկոսադրույք</span>
      </div>
      <div className="flex justify-between items-center pt-4">
        <span className="text-xl sm:text-2xl font-bold text-purple-700">
          {tariffs[currency].replenishment}
        </span>
        <span className="text-gray-500 text-sm">Համալրման հնարավորություն</span>
      </div>
    </div>
  </div>
</div>
            ) : (
              /* Պայմաններ և սակագներ - Գնացուցակ */
<div className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
  
  {/* 1. Ավանդների տոկոսադրույքների աղյուսակ */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-purple-700">
      «Էվոկա ONLINE» ավանդների տոկոսադրույքներ ըստ ժամկետների և արժույթների
    </h3>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="border-b-2 border-purple-200 text-purple-700 bg-purple-50/50">
            <th className="py-3 px-3 font-bold border-r border-purple-100">Նվազագույն գումար և արժույթ</th>
            <th className="py-3 px-3 font-bold border-r border-purple-100">Տոկոսների վճարման եղանակը</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">31 - 90 օր</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">91 - 180 օր</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">181 - 270 օր</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">271 - 365 օր</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">366 - 549 օր</th>
            <th className="py-3 px-3 font-bold text-center border-r border-purple-100">550 - 730 օր</th>
            <th className="py-3 px-3 font-bold text-center">731 - 1825 օր</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-100">
          {/* ՀՀ դրամ */}
          <tr className="hover:bg-purple-50/30">
            <td className="py-4 px-3 font-semibold text-purple-700 border-r border-purple-100 align-middle" rowSpan="3">
              100,000 ՀՀ դրամ
            </td>
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">6.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">7.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">8.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">9.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">10.25 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">10.75 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30">
            <td className="py-3 px-3 border-r border-purple-100">Ամսական տոկոսների վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">6.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">7.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">9.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">9.75 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">10.25 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30 border-b-2 border-purple-200">
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">6.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">7.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">9.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">9.75 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">10.25 %</td>
          </tr>

          {/* ԱՄՆ դոլար */}
          <tr className="hover:bg-purple-50/30">
            <td className="py-4 px-3 font-semibold text-purple-700 border-r border-purple-100 align-middle" rowSpan="3">
              200 ԱՄՆ դոլար
            </td>
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">3.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.75 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">5.25 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30">
            <td className="py-3 px-3 border-r border-purple-100">Ամսական տոկոսների վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.75 %</td>
           <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.00 %</td>
           <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.50 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">5.00 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30 border-b-2 border-purple-200">
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.75 %</td>
           <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.50 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">5.00 %</td>
          </tr>

          {/* Եվրո */}
          <tr className="hover:bg-purple-50/30">
            <td className="py-4 px-3 font-semibold text-purple-700 border-r border-purple-100 align-middle" rowSpan="3">
              200 Եվրո
            </td>
           <td className="py-3 px-3 border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.35 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.75 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">3.25 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30">
            <td className="py-3 px-3 border-r border-purple-100">Ամսական տոկոսների վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.50 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">3.00 %</td>
          </tr>
          <tr className="hover:bg-purple-50/30 border-b-2 border-purple-200">
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">1.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">2.00 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700">2.50 %</td>
          </tr>

          {/* ՌԴ ռուբլի */}
          <tr className="hover:bg-purple-50/30 hover:border-b-2 hover:border-purple-200">
            <td className="py-4 px-3 font-semibold text-purple-700 border-r border-purple-100 align-middle" rowSpan="3">
              30,000 ՌԴ Ռուբլի
            </td>
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.50 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium font-bold text-purple-700">6.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center text-gray-400">-</td>
          </tr>
          <tr className="hover:bg-purple-50/30 hover:border-b-2 hover:border-purple-200 hover:divide-purple-100">
            <td className="py-3 px-3 border-r border-purple-100">Ամսական տոկոսների վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">3.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium font-bold text-purple-700">6.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center text-gray-400">-</td>
          </tr>
          <tr className="hover:bg-purple-50/30 hover:divide-purple-100 hover:border-b-2 hover:border-purple-200">
            <td className="py-3 px-3 border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.75 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">5.25 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium font-bold text-purple-700">6.00 %</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 text-gray-400">-</td>
            <td className="py-3 px-3 text-center text-gray-400">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* 2. Հիմնական պայմաններ և կանոններ */}
  <div className="space-y-4 pt-4">
    <ol className="list-decimal list-outside pl-6 space-y-3 text-gray-700">
      <li className="pl-2">
        Ավանդն ընդունվում է ֆիզիկական անձանցից <strong className="font-bold text-gray-900 bg-gray-100 px-1 rounded">բացառապես</strong>՝ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով[cite: 1,cite: 28]:
      </li>
      <li className="pl-2 space-y-3">
        <p>
        Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք[cite: 28]:
        </p>
        <p>
        Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100 եվրոյից կամ 10,000 ՌԴ ռուբլուց[cite: 1,cite: 28]:
        </p>
        <p>
        Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել[cite: 1,cite: 28]՝
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
          <li className="pl-2">ՀՀ դրամի դեպքում Ավանդի ներդրման սկզբնական գումարի կրկնապատկիչը[cite: 1]:</li>
          <li className="pl-2">ԱՄՆ դոլարի, Եվրոյի և ՌԴ ռուբլու դեպքում Ավանդի ներդրման սկզբնական գումարը[cite: 1]:</li>
        </ul>
        <p>
        Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում[cite: 1,cite: 28]:
        </p>
      </li>
      <li className="pl-2">
        Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում[cite: 28,cite: 30]:
      </li>
      <li className="pl-2">
        Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկն իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով[cite: 28]՝
      </li>
    </ol>

    {/* Երկրորդային աղյուսակ (Ժամկետից շուտ լուծման տոկոսադրույքներ) */}
    <div className="overflow-x-auto pt-2 pl-6">
      <table className="w-full sm:w-3/4 text-left border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-purple-200 text-purple-700 bg-purple-50/50">
            <th className="py-2.5 px-3 font-bold border-r border-purple-100">Ավանդի արժույթ</th>
            <th className="py-2.5 px-3 font-bold text-center border-r border-purple-100">Մինչև 365 օր</th>
            <th className="py-2.5 px-3 font-bold text-center">366 - 1825 օր</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-100 border-b border-purple-100">
          <tr className="hover:bg-purple-50/20 hover:border-b-2 hover:border-purple-200">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">ՀՀ դրամ</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.5 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700 bg-purple-50/30">8.5 %</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-b-2 hover:border-purple-200">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">ԱՄՆ դոլար</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.1 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700 bg-purple-50/30">3.5 %</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-b-2 hover:border-purple-200">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">Եվրո</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.1 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700 bg-purple-50/30">1.5 %</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-b-2 hover:border-purple-200 hover:divide-purple-100 hover:divide-y">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">ՌԴ ռուբլի</td>
            <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.1 %</td>
            <td className="py-3 px-3 text-center font-bold text-purple-700 bg-purple-50/30">5 %</td>
          </tr>
        </tbody>
      </table>
    </div>

    <ol start="5" className="list-decimal list-outside pl-6 space-y-3 text-gray-700 pt-2 divide-purple-100 hover:divide-purple-200 hover:divide-y">
      <li className="pl-2">
        Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում[cite: 30]:
      </li>
    </ol>
  </div>

  {/* 3. Լրացուցիչ պայմաններ */}
  <div className="space-y-4 pt-4">
    <h3 className="text-xl font-bold text-purple-700">
      Լրացուցիչ պայմաններ
    </h3>
    <ol className="list-decimal list-outside pl-6 space-y-3 text-gray-700">
      <li className="pl-2">
        ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման[cite: 30]:
      </li>
      <li className="pl-2">
        Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի, սահմանվում են ստորև[cite: 30].
      </li>
    </ol>

    {/* Քարտերի տեսակների աղյուսակ */}
    <div className="overflow-x-auto pt-2 pl-6">
      <table className="w-full text-left border-collapse text-sm sm:text-base border border-purple-100 rounded-lg shadow-inner">
        <thead>
          <tr className="border-b-2 border-purple-200 text-purple-700 bg-purple-50/50">
            <th className="py-3 px-3 font-bold border-r border-purple-100">Ավանդի արժույթ/Քարտի տեսակ *</th>
            <th className="py-3 px-3 font-bold border-r border-purple-100">ArCa Classic/ Mastercard Standard/ Visa Classic</th>
            <th className="py-3 px-3 font-bold border-r border-purple-100 bg-purple-50/30">Mastercard Gold/Evoca Travel/Visa Platinum <span className="text-xs font-normal block text-gray-500 hover:text-purple-700">(ըստ հաճախորդի ընտրության)</span></th>
            <th className="py-3 px-3 font-bold">VISA Infinite</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-100 hover:border-purple-200 hover:border-y-2 hover:border-collapse">
          <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">ՀՀ դրամ</td>
            <td className="py-3 px-3 border-r border-purple-100">500,000 - 10,000,000 (ներառյալ)</td>
            <td className="py-3 px-3 border-r border-purple-100 bg-purple-50/20">10,000,000 - 40,000,000 (ներառյալ)</td>
            <td className="py-3 px-3 font-bold text-purple-700">40,000,000 և ավել</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">ԱՄՆ դոլար</td>
            <td className="py-3 px-3 border-r border-purple-100">1,000 - 25,000 (ներառյալ)</td>
            <td className="py-3 px-3 border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40">25,000 - 100,000 (ներառյալ)</td>
            <td className="py-3 px-3 font-bold text-purple-700">100,000 և ավել</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">Եվրո</td>
            <td className="py-3 px-3 border-r border-purple-100">1,000 - 20,000 (ներառյալ)</td>
            <td className="py-3 px-3 border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40 hover:divide-y">20,000 - 100,000 (ներառյալ)</td>
            <td className="py-3 px-3 font-bold text-purple-700">100,000 և ավել</td>
          </tr>
          <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
            <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100 hover:bg-purple-50/40">ՌԴ ռուբլի</td>
            <td className="py-3 px-3 border-r border-purple-100 hover:bg-purple-50/40 hover:divide-y">60,000 - 3,000,000 (ներառյալ)</td>
            <td className="py-3 px-3 border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40 hover:divide-y">2,000,000 - 7,000,000 (ներառյալ)</td>
            <td className="py-3 px-3 font-bold text-purple-700">7,000,000 և ավել</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Լրացուցիչ նշումներ կետերով */}
    <ul className="space-y-2 pl-2 pt-2 text-gray-700">
      <li className="flex items-start space-x-3">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0"></span>
        <span>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով՝ բացառությամբ Infinite քարտի[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով: Ավանդատուի կողմից 1-ից ավել ավանդներ ներդնելու դեպքում յուրաքանչյուր ավանդը դիտարկվում է առանձին[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125 hover:divide-purple-200 hover:divide-x"></span>
        <span>Ավանդի ժամկետը լրանալու կամ ավանդատուի կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցնելու դեպքում, Ավանդի ներդրման դիմաց տրամադրված վճարային քարտի սպասարկումը շարունակվում է իրականացվել առանց տարեկան սպասարկման վճարի գանձման, մինչև վճարային քարտի սպասարկման ժամկետի ավարտը, բացառությամբ Ավանդի ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտերի[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Visa Infinite վճարային քարտի քարտապանների կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցնելու կամ Ավանդի ժամկետը լրանալու դեպքում Բանկն իրավունք ունի փակել նաև այդ Ավանդի ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտը կամ հաճախորդի ցանկության դեպքում սկսել կիրառել տվյալ պահին Բանկում գործող սակագները և դրույքները[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Տրամադրվող հասանելի քարտի դասը որոշվում է քարտի բացման պահին ավանդի գումարի չափով: Ավանդի համալրման դեպքում, եթե հաճախորդը ցանկանում է ավելի բարձր դասի քարտ, ապա գործող քարտը պետք է փակվի և բացվի նոր ավելի բարձր դասի քարտ[cite: 30]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span className="hover:divide-purple-100 hover:divide-y">Քարտի վերաթողարկումը գործողության ժամկետը լրանալու կամ այլ պատճառով, իրականացվում է[cite: 30].
          <ul className="list-disc list-outside pl-6 pt-1 space-y-1 text-gray-600 hover:text-gray-900 transition-colors">
            <li>Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերաթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանափակով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ[cite: 30]:</li>
          </ul>
        </span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Քարտերի սպասարկման այլ սակագները և պայմանները՝ համաձայն Բանկի կողմից մատուցվող ծառայությունների սակագների և պայմանների[cite: 31]:</span>
      </li>
    </ul>
  </div>

  {/* 4. Ավանդի տարեկան տոկոսային եկամտաբերության չափը */}
  <div className="space-y-4 pt-4">
    <h3 className="text-xl font-bold text-purple-700 hover:text-purple-900 transition-colors cursor-default">
      Ավանդի տարեկան տոկոսային եկամտաբերության չափը
    </h3>
    <p className="text-gray-600">
      Տարեկան տոկոսային եկամտաբերությանը ըստ ավանդատեսակների՝ հաշվարկված ՀՀ Կենտրոնական բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև.
    </p>
    
    <div className="text-sm font-medium text-purple-800 space-y-1 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
      <p><strong>ԱՏ</strong> - անվանական տոկոսադրույք</p>
      <p><strong>ՏՏԵ</strong> - տարեկան տոկոսային եկամտաբերություն</p>
    </div>

   {/* Էվոկա ONLINE Ավանդատեսակի ՏՏԵ Աղյուսակ */}
<div className="space-y-4 pt-2">
  <h4 className="font-bold text-purple-700 text-sm sm:text-base bg-purple-50 px-3 py-2 rounded-lg inline-block shadow-sm">
    «ԷՎՈԿԱ ONLINE» ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ
  </h4>
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse text-xs sm:text-sm border border-purple-100 rounded-lg shadow-inner">
      <thead>
        {/* ԱՌԱՋԻՆ ՇԵՐՏ. Ժամկետներ (colSpan-ով) */}
        <tr className="border-b-2 border-purple-200 text-purple-700 bg-purple-50/50 hover:border-purple-200">
          <th className="py-2.5 px-3 font-bold border-r border-purple-100" rowSpan="2">
            Արժույթ
          </th>
          <th className="py-2.5 px-3 font-bold text-center border-r border-purple-100" colSpan="2">
            31-90 օր
          </th>
          <th className="py-2.5 px-3 font-bold text-center border-r border-purple-100 bg-purple-50/30" colSpan="2">
            91-180 օր
          </th>
          <th className="py-2.5 px-3 font-bold text-center" colSpan="2">
            181-270 օր
          </th>
        </tr>

        {/* ԵՐԿՐՈՐԴ ՇԵՐՏ. ԱՏ և ՏՏԵ */}
        <tr className="border-b-2 border-purple-200 text-purple-700 bg-purple-50/50">
          <th className="py-2 px-3 font-semibold text-center border-r border-purple-100 hover:divide-purple-200 hover:divide-x hover:divide-y">
            Անվանական %-դրույք
          </th>
          <th className="py-2 px-3 font-semibold text-center border-r border-purple-100 hover:divide-purple-200 hover:divide-x hover:divide-y">
            Տարեկան %-ային եկամտաբերություն
          </th>
          <th className="py-2 px-3 font-semibold text-center border-r border-purple-100 bg-purple-50/20 hover:divide-purple-200 hover:divide-x hover:divide-y">
            Անվանական %-դրույք
          </th>
          <th className="py-2 px-3 font-semibold text-center border-r border-purple-100 bg-purple-50/20 hover:divide-purple-200 hover:divide-x hover:divide-y">
            Տարեկան %-ային եկամտաբերություն
          </th>
          <th className="py-2 px-3 font-semibold text-center border-r border-purple-100 hover:divide-purple-200 hover:divide-x hover:divide-y">
            Անվանական %-դրույք
          </th>
          <th className="py-2 px-3 font-semibold text-center hover:divide-purple-200 hover:divide-x hover:divide-y">
            Տարեկան %-ային եկամտաբերություն
          </th>
        </tr>
      </thead>

      {/* ՏՎՅԱԼՆԵՐԻ ՄԱՍ (<tbody>) - ԱՅՍՏԵՂ Է ՃԻՇՏ ՏԵՂԸ */}
      <tbody className="divide-y divide-purple-100 hover:border-b-2 hover:border-purple-200">
        <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
          <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100 hover:bg-purple-50/40">AMD</td>
          <td className="py-3 px-3 text-center border-r border-purple-100">4.00%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">4.07%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40">5.50%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium bg-purple-50/20 hover:bg-purple-50/40">5.64%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 hover:bg-purple-50/40">6.50%</td>
          <td className="py-3 px-3 text-center hover:bg-purple-50/40 font-medium">6.70%</td>
        </tr>
        <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
          <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100 hover:bg-purple-50/40 hover:divide-y">USD</td>
          <td className="py-3 px-3 text-center border-r border-purple-100">0.50%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium hover:divide-y">0.50%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40">1.75%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium bg-purple-50/20 hover:bg-purple-50/40 hover:divide-y">1.76%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 hover:bg-purple-50/40 hover:divide-y">2.25%</td>
          <td className="py-3 px-3 text-center hover:bg-purple-50/40 font-medium">2.27%</td>
        </tr>
        <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
          <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100 hover:bg-purple-50/40">EUR</td>
          <td className="py-3 px-3 text-center border-r border-purple-100">0.25%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium">0.25%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 bg-purple-50/20 hover:bg-purple-50/40">0.75%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium bg-purple-50/20 hover:bg-purple-50/40">0.75%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 hover:bg-purple-50/40">1.25%</td>
          <td className="py-3 px-3 text-center hover:bg-purple-50/40 font-medium">1.26%</td>
        </tr>
        <tr className="hover:bg-purple-50/20 hover:border-collapse hover:divide-purple-200 hover:divide-x-2">
          <td className="py-3 px-3 font-semibold text-purple-700 border-r border-purple-100">RUR</td>
          <td className="py-3 px-3 text-center border-r border-purple-100">3.75%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium hover:divide-purple-200">3.82%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 bg-purple-50/20 hover:divide-purple-200 hover:divide-x-2">4.75%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 font-medium bg-purple-50/20 hover:divide-purple-200 hover:divide-x-2">4.84%</td>
          <td className="py-3 px-3 text-center border-r border-purple-100 hover:divide-purple-200 hover:divide-x-2">5.00%</td>
          <td className="py-3 px-3 text-center hover:bg-purple-50/40 font-medium hover:divide-purple-200">5.09%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  {/* 5. Ռուբլով ավանդի ներդրման և վերադարձման կարգ */}
  <div className="space-y-4 pt-4 border-t border-purple-100 mt-10">
    <h3 className="text-xl font-bold text-purple-700 hover:text-purple-900 transition-colors">
      Ռուբլով ավանդի ներդրման և վերադարձման կարգ
    </h3>
    <ul className="space-y-3 pl-2 text-gray-700">
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125"></span>
        <span>Կանխիկ կամ անկանխիկ ռուբլով ներդրված ավանդները վերադարձվում են ներդրման նույն եղանակով (համապատասխանաբար՝ կանխիկ կամ անկանխիկ) առանց միջնորդավճարների գանձման[cite: 31]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125 hover:divide-purple-200 hover:divide-x hover:divide-y"></span>
        <span>Անկանխիկ ռուբլով ներդրված ավանդը կանխիկ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը ռուբլու կանխիկացման համար սահմանված միջնորդավճարը[cite: 31]:</span>
      </li>
      <li className="flex items-start space-x-3 hover:text-purple-700 transition-colors">
        <span className="w-2 h-2 rounded-full bg-purple-700 mt-2.5 shrink-0 transition-transform hover:scale-125 hover:divide-purple-200 hover:divide-x hover:divide-y"></span>
        <span>Կանխիկ ռուբլով ներդրված ավանդը անկանխիկ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը[cite: 31]:</span>
      </li>
    </ul>
  </div>

  {/* 6. Ուշադրություն բլոկ */}
  <div className="bg-purple-50/70 p-6 rounded-3xl border border-purple-100 space-y-3 text-sm sm:text-base mt-10 shadow-inner">
    <h4 className="font-bold text-purple-700 text-lg hover:text-purple-900 transition-colors">
      Ուշադրություն.
    </h4>
    <p className="transition-colors hover:text-gray-900">
      Ձեր և մեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ[cite: 31]: Այն հրապարակային առաջարկ է (օֆերտա) և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ առցանց համակարգերի միջոցով մեզ եք ներկայացնում Ձեր կողմից պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում[cite: 31]: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 31]:
    </p>
    <p className="transition-colors hover:text-gray-900 hover:divide-purple-200 hover:divide-y">
      ՀՀ «Հարկային օրենսգրքի» համաձայն՝ մեր կողմից ֆիզիկական անձ ավանդատուին (ռեզիդենտ, ոչ ռեզիդենտ) վճարված տոկոսագումարները ենթակա են հարկման՝ Ձեր կողմից ստացված եկամտի 10%-ի չափով[cite: 31]: Ավանդային պայմանագիր կնքելիս և ավանդային պայմանագրի գործողության ընթացքում այլ վճարներ չենք գանձում[cite: 31]: Անկանխիկ կերպով ներդրված ավանդը կանխիկ վերադարձնելու դեպքում Ձեզանից գանձվում ենք գումարի կանխիկացման վճար, համաձայն՝ մեր <a href="https://www.evoca.am" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">Դրամարկղային գործառնությունների իրականացման սակագների</a>[cite: 31]:
    </p>
    <p className="transition-colors hover:text-gray-900">
      Ավանդների ներգրավման պայմաններին (ըստ գործող ավանդատեսակների) կարող եք ծանոթանալ <a href="https://www.evoca.am/hy/deposits/" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-semibold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 31]: Ավանդների ներգրավման նախկին պայմաններին կարող եք ծանոթանալ <a href="https://www.evoca.am/hy/deposits/important-information/" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-semibold underline hover:text-purple-900 transition-colors">Պայմանների արխիվ</a> բաժնում[cite: 31]: Տարեկան տոկոսային եկամտաբերության առնչվող տեղեկատվությանը կարող եք ծանոթանալ <a href="https://www.evoca.am/hy/deposits/important-information/" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-semibold underline hover:text-purple-900 transition-colors">Կարևոր տեղեկատվություն</a> բաժնում[cite: 31]:
    </p>
  </div>
</div>
</div>
            )}
          </article>
          {/* ԱՅԼ ԱՎԱՆԴՆԵՐ - ՍԼԱՅԴԵՐ (Swiper Carousel) */}
          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Այլ ավանդներ
            </h3>

            <div className="relative">
              {/* Custom Navigation Buttons */}
              <button className="custom-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-700 hover:bg-purple-50 cursor-pointer border-none">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="custom-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-700 hover:bg-purple-50 cursor-pointer border-none">
                <ChevronRight className="w-6 h-6" />
              </button>

              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="pb-4 pt-2"
              >
                {otherDeposits.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-100 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
                      {/* Նկարի բլոկ */}
                      <div className="h-48 w-full bg-purple-100 relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      {/* Վերնագիր */}
                      <div className="p-5">
                        <h4 className="font-bold text-gray-800 text-lg group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}