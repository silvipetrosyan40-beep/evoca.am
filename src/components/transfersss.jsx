import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bonds');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Ձախ կողմի մենյուի կոճակներ և նրանց ուղիները կամ տաբերը
  const menuItems = [
    { id: 'bonds', label: 'Պարտատոմսեր' },
    { id: 'career', label: 'Կարիերա', path: '/help/faq-careers' },
    { id: 'mortgage', label: 'Հիփոթեքային վարկեր', path: '/hy/mortgagee' },
    { id: 'consumer', label: 'Սպառողական վարկեր', path: '/hy/consumer-loans' },
    { id: 'evocatouch', label: 'EvocaTouch', path: '/hy/evocatouch' },
    { id: 'transfers', label: 'Փոխանցումներ', path: '/hy/transfersss' },
    { id: 'cards', label: 'Քարտեր', path: '/hy/cards' },
    { id: 'deposits', label: 'Ավանդներ', path: '/hy/deposits' },
    { id: 'other', label: 'Այլ', path: '/hy/other' }
  ];

  // Յուրաքանչյուր կատեգորիայի հարցերն ու պատասխանները
  const faqData = {
    bonds: [
     {
        q: "Ի՞նչ տարբերակներով կարող եմ կատարել փոխանցումներ:",
        a: "Եթե ունեք EvocaTOUCH հավելվածը, ապա կարող եք առանց բանկ մոտենալու կատարել փոխանցումներ ինչպես ՀՀ տարածքում, այնպես էլ ՀՀ տարածքից դուրս: Մասնաճյուղերի ցանկը կարող եք գտնել այստեղ:"
      },
      {
        q: "SWIFT փոխանցումներ կատարելիս իմ գումարն ամբողջությա՞մբ է տեղ հասնում:",
        a: "SWIFT փոխանցումներ կատարելիս պետք է ընտրել՝ ցանկանում եք միջնորդավճարն ամբողջությամբ վճարել, որպեսզի գումարը առանց այլ միջնորդավճարների հասնի հասցեատիրջը (OUR), թե ցանկանում եք մինիմալ միջնորդավճար վճարել, ինչի պարագայում յուրաքանչյուր միջնորդ բանկ պահում է կատարում փոխանցվող գումարից (BEN):"
      },
      {
        q: "Կարո՞ղ եմ գումար փոխանցել ոչ աշխատանքային ժամերին:",
        a: "Եթե ունեք EvocaTOUCH հավելված, կարող եք կատարել փոխանցումներ ցանկացած ժամի, ցանկացած վայրից:Evocabank-ի հաշիվների միջև փոխանցումը կատարվում է մի քանի րոպեում, իսկ այլ բանկ փոխանցումները կկատարվեն հաջորդ աշխատանքային օրվա ընթացքում:Փոխանցումների կատարման գործընթացի մանրամասներին կարող եք ծանոթանալ այստեղ:"
      }
    ],
  };

  const currentFaqs = faqData[activeTab] || [];
  const currentTitle = menuItems.find(m => m.id === activeTab)?.label || '';

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
            Հաճախ տրվող հարցեր
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Ձախ կողմի մենյու */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.path) {
                        navigate(item.path);
                      } else {
                        setActiveTab(item.id);
                        setOpenAccordion(null);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                      activeTab === item.id && !item.path
                        ? 'text-purple-700 bg-purple-50'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Աջ կողմի բովանդակություն (Հարցեր և Պատասխաններ) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Այստեղ գտնվում է վերնագիրը, որը դինամիկ կերպով փոխվում է ըստ ընտրված մենյուի */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 min-h-[2rem]">
              Փոխանցումներ
              </h2>

              <div className="space-y-4">
                {currentFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer hover:bg-purple-50/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-base">{faq.q}</span>
                      {openAccordion === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                      )}
                    </button>

                    {openAccordion === index && (
                      <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/20 text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}