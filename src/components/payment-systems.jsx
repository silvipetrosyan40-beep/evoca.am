import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function PaymentSystemsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const paymentSystems = [
    {
      id: 'moneytun',
      name: 'MoneyTun',
      logo: '	https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png', // Փոխարինեք MoneyTun-ի իրական լոգոյի URL-ով
      description: 'MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակը Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:',
      supportPhone: '+374 10 27 72 85',
      schedule: [
        'Երկուշաբթի-ուրբաթ 10:00-17:30',
        'Շաբաթ 10:00-14:00',
        'Կիրակի 10:00-13:00'
      ]
    },
    {
      id: 'ria',
      name: 'Ria',
      logo: '	https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png', // Փոխարինեք Ria-ի իրական լոգոյի URL-ով
      description: 'Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների:',
      supportPhoneLabel: 'Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար՝',
      supportPhone: '+374 94 23 59 00',
      schedule: ['Երկուշաբթի-ուրբաթ, 09:00-18:00', '(Երևանի ժամանակով)'],
      languages: 'ռուսերեն, անգլերեն'
    },
    {
      id: 'ubpay',
      name: 'UBPay',
      logo: '	https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png', // Փոխարինեք UBPay-ի իրական լոգոյի URL-ով
      description: 'UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:',
      supportPhone: '+374 43 00 49 35'
    },
    {
      id: 'intelexpress',
      name: 'IntelExpress',
      logo: '	https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png', // Փոխարինեք IntelExpress-ի իրական լոգոյի URL-ով
      description: 'Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, Եվրոպական երկրներ և այլն): Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների:',
      supportPhoneLabel: 'INTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար՝',
      supportPhone: '+995 32 2 49 25 25'
    },
    {
      id: 'stak',
      name: 'STAK',
      logo: '	https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png', // Փոխարինեք STAK-ի իրական լոգոյի URL-ով
      description: '«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է: Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով:'
    },
    {
      id: 'moneygram',
      name: 'MoneyGram',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png', // Փոխարինեք MoneyGram-ի իրական լոգոյի URL-ով
      description: 'Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի:',
      supportPhoneLabel: 'MoneyGram Հաճախորդների սպասարկման հեռախոսահամար՝',
      supportPhone: '1-800-926-9400'
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
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button 
                onClick={() => handleNavigation('/transfers')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0"
              >
                Դրամական փոխանցումներ
              </button>
              <button 
                onClick={() => handleNavigation('/hy/payment-systems')} 
                className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0"
              >
                Վճարային համակարգեր
              </button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <button 
              onClick={() => handleNavigation('/')} 
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center"
            >
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button 
              onClick={() => handleNavigation('/hy/individuals')} 
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer"
            >
              Անհատ
            </button>
            <span>›</span>
            <button 
              onClick={() => handleNavigation('/hy/transfers')} 
              className="hover:text-purple-700 bg-transparent border-none cursor-pointer"
            >
              Փոխանցումներ
            </button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Վճարային համակարգեր</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
            Վճարային համակարգեր
          </h1>

          {/* Payment Systems Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentSystems.map((system) => (
              <div 
                key={system.id}
                className="bg-purple-50/30 border border-purple-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Logo Placeholder */}
                  <div className="flex justify-center items-center h-20 mb-6">
                    <img 
                      src={system.logo} 
                      alt={system.name} 
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed text-center mb-6">
                    {system.description}
                  </p>
                </div>

                {/* Footer details per card */}
                {(system.supportPhone || system.schedule || system.languages) && (
                  <div className="border-t border-purple-100 pt-4 text-center text-xs space-y-2">
                    {system.supportPhone && (
                      <div>
                        <p className="font-semibold text-purple-900">
                          {system.supportPhoneLabel || `${system.name} Հաճախորդների սպասարկման հեռախոսահամար՝`}
                        </p>
                        <p className="font-bold text-purple-700 text-sm mt-0.5">
                          {system.supportPhone}
                        </p>
                      </div>
                    )}

                    {system.schedule && (
                      <div className="pt-1">
                        <p className="font-semibold text-purple-900 mb-0.5">Աշխատանքային գրաֆիկ՝</p>
                        {system.schedule.map((item, idx) => (
                          <p key={idx} className="text-gray-600">{item}</p>
                        ))}
                      </div>
                    )}

                    {system.languages && (
                      <div className="pt-1">
                        <p className="font-semibold text-purple-900 mb-0.5">Հաճախորդների աջակցության լեզուներ՝</p>
                        <p className="text-gray-600">{system.languages}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}