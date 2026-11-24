import React, { useState, useEffect } from 'react';

const menuData = {
  individual: [
    {
      title: 'Վարկեր',
      links: [
        { name: 'Վարկեր', path: '/hy/loans' },
        { name: 'Վարկային պատմություն և սքոր', path: '/loans/credit-history' },
        { name: 'Կարևոր տեղեկատվություն', path: '/loans/important-info' },
      ],
    },
    {
      title: 'Քարտեր',
      links: [
        { name: 'Քարտեր', path: '/cards' },
        { name: 'Քարտերի տրամադրում և սպասարկում', path: '/hy/cards-provision-and-service' },
        { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '/hy/pension-cards' },
      ],
    },
    {
      title: 'Ավանդներ',
      links: [
        { name: 'Ավանդներ', path: '/deposits' },
        { name: 'Կարևոր տեղեկատվություն', path: '/hy/deposits-important-information' },
      ],
    },
    {
      title: 'Հաշիվներ',
      links: [
        { name: 'Evoca խնայողական հաշիվ', path: '/accounts' },
        { name: 'Հաշիվների բացում և սպասարկում', path: '/hy/account-opening-service' },
        { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/hy/unallocated-metal-accounts' },
        { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/hy/remote-service-for-non-resident-clients' },
      ],
    },
    {
      title: 'Փոխանցումներ',
      links: [
        { name: 'Դրամական փոխանցումներ', path: '/transfers' },
        { name: 'Վճարային համակարգեր', path: '/hy/payment-systems' },
      ],
    },
    {
      title: 'Արժեթղթեր',
      links: [
        { name: 'Ներդրումային ծառայություններ', path: '/securities' },
        { name: 'Պարտատոմսեր', path: '/hy/bonds' },
        { name: 'ՀԿՊ ծառայություններ', path: '/hy/repo-services' },
        { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/hy/repo-reverse-repo' },
        { name: 'EvocaINVEST', path: '/hy/evocalnvest' },
      ],
    },
  ],
  business: [
    {
      title: 'Վարկեր',
      links: [{ name: 'Բիզնես վարկեր', path: '/hy/business' }],


    },
    {
      title: 'Լիզինգ',
      links: [
        { name: 'Evoca Leasing', path: '/hy/leasing-evoca' },
        { name: 'Հատուկ առաջարկ', path: '/hy/special-offer' },
      ],
    },
    {
      title: 'Հաշիվներ',
      links: [
        { name: 'Հաշիվների բացում և սպասարկում', path: '/hy/business-account-opening-and-services' },
        { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/hy/business-unallocated-metal-accounts' },
      ],
    },
    {
      title: 'Ավանդներ',
      links: [{ name: 'Դասական ավանդ', path: '/hy/business-classical-deposit' }],
    },
    {
      title: 'Արժեթղթերի շուկա',
      links: [
        { name: 'Ներդրումային ծառայություններ', path: '/hy/business-investment-services' },
        { name: 'Պարտատոմսեր', path: '/hy/business-bonds' },
        { name: 'ՀԿՊ ծառայություններ', path: '/hy/business-repo-services' },
        { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/hy/business-repo-reverse' },
        { name: 'EvocaINVEST', path: '/hy/business-evocainvest' },
      ],
    },
    {
      title: 'Առևտրի ֆինանսավորում',
      links: [
        { name: 'Երաշխիք', path: '/hy/guarantee' },
        { name: 'Ֆակտորինգային ֆինանսավորում', path: '/hy/factoring-finance' },
        { name: 'Ակրեդիտիվ', path: '/hy/letter-of-credit' },
        { name: 'Ինկասո', path: '/hy/documentary-collection' },
      ],
    },
    {
      title: 'Դիջիթալ',
      links: [
        { name: 'V-POS Տերմինալ', path: '/hy/v-pos-terminal' },
        { name: 'POS Տերմինալ', path: '/hy/pos-terminal' },
        { name: 'Սակագներ', path: '/hy/tariffs' },
        { name: 'Տերմինալի տեղադրման հայտ', path: '/hy/terminal-application' },
         { name: 'Evocabank Mobile POS` mPOS', path: '/hy/evoca-mobile-pos' },

      ],
    },
    {
      title: 'Այլ',
      links: [
        { name: 'Պահատուփեր', path: '/hy/individual-safe-deposit-boxes' },
        { name: 'Փոխանցումներ', path: '/hy/transfers' },
      ],
    },
  ],
  about: [
    {
      title: 'Evoca-ի մասին',
      links: [
        { name: 'Ընդհանուր', path: '/hy/about' },
        { name: 'Կառուցվածք', path: '/hy/about/structure' },
        { name: 'Բաժնետերեր', path: '/hy/about/shareholders' },
        { name: 'Ղեկավարություն', path: '/hy/about/management' },
        { name: 'Գործընկերներ', path: '/hy/about/partners' },
        { name: 'Մրցանակներ', path: '/hy/about/awards' },
        { name: 'CSR', path: '/hy/about/csr' },
        { name: 'Էվոկա ֆինանսական խումբ', path: '/hy/about/group' },
      ],
    },
    {
      title: 'Սակագներ',
      links: [
        { name: 'Վարկեր ֆիզիկական անձանց', path: '/hy/about/tariffs' },
        { name: 'Վարկեր իրավաբանական անձանց', path: '/hy/about/tariffs/corporate-loans' },
        { name: 'Միջնորդավճարների սակագները', path: '/hy/about/tariffs/commissions' },
        { name: 'Ավանդների սակագներ', path: '/hy/about/tariffs/deposits' },
        { name: 'Արխիվ', path: '/hy/about/tariffs/archive' },
      ],
    },
    {
      title: 'Հաշվետվություններ',
      links: [
        { name: 'Աուդիտորական եզրակացություն', path: '/hy/about/reports' },
        { name: 'Ֆինանսական հաշվետվություններ', path: '/hy/about/reports/financial' },
        { name: 'Ներդրողների համար', path: '/hy/about/reports/investors' },
        { name: 'Կիսամյակային հաշվետվություն', path: '/hy/about/reports/semiannual' },
        { name: 'Տարեկան հաշվետվություն', path: '/hy/about/reports/annual' },
      ],
    },
    {
      title: 'Հայտարարություններ',
      links: [
        { name: 'Հայտարարություններ', path: '/hy/about/announcements' },
      ],
    },
  ],
 career: [
    {
      title: 'Evoca Լայֆ',
      links: [
        { name: 'Մշակույթ', path: '/hy/career' },
        { name: 'Առավելություններ', path: '/hy/career-benefits' },
        { name: 'Հաճախ տրվող հարցեր', path: '/hy/career-faq' },
        { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/hy/how-we-hire' },
      ],
    },
    {
      title: 'Աշխատանք և պրակտիկա',
      links: [
        { name: 'Աշխատանք Evoca-ում', path: '/hy/work-at-evoca' },
        { name: 'Ուսումնական պրակտիկա', path: '/hy/career/internship' },
        { name: 'EvocaBRIDGE', path: '/hy/career/evocabridge' },
      ],
    },
  ],
};

export default function EvocaMenuDrawer({ onClose }) {
  const [activeTab, setActiveTab] = useState('individual');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) {
        onClose();
      } else {
        window.history.back();
      }
    }, 300);
  };

  const navItems = [
    { id: 'individual', label: 'Անհատ', hasSubmenu: true },
    { id: 'business', label: 'Բիզնես', hasSubmenu: true },
    { id: 'instant', label: 'Ակնթարթային վճարումներ', hasSubmenu: false, path: '/hy/akntartayinvcharumner' },
    { id: 'about', label: 'Մեր մասին', hasSubmenu: true },
    { id: 'news', label: 'Նորություններ', hasSubmenu: false, path: '/all-news' },
    { id: 'blog', label: 'Բլոգ', hasSubmenu: false, path: '/hy/blog' },
    { id: 'career', label: 'Կարիերա', hasSubmenu: true },
  ];

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-[#3d0075] text-white flex flex-col md:flex-row overflow-hidden z-50 transition-transform duration-500 ease-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      
      {/* ՁԱԽ ՄԱՍ՝ Արձանի նկարը և հիմնական մենյուն */}
      <div className="w-full md:w-[32%] relative flex flex-col justify-between p-8 md:p-12 overflow-hidden bg-[#18181b]">
        
        {/* Ֆոնային նկար (object-[center_35%] կամ object-center ապահովում է, որ արձանը ամբողջությամբ երևա) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.evoca.am/img/left-photo.jpg" 
            alt="Evoca background" 
            className="w-full h-full object-cover object-[center_35%] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-[#18181b]/90"></div>
        </div>

        {/* Լոգո */}
        <div className="relative z-10 flex justify-end md:pr-8">
          <a href="/" className="text-3xl font-extrabold tracking-tight text-white no-underline">
            evoca
          </a>
        </div>

        {/* Մենյուի կետեր */}
        <div className="relative z-10 space-y-3 my-auto py-6 text-right md:pr-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            if (!item.hasSubmenu) {
              return (
                <div key={item.id} className="py-1.5">
                  <a
                    href={item.path}
                    className="text-gray-200 hover:text-purple-400 transition-colors text-lg font-medium no-underline block"
                  >
                    {item.label}
                  </a>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => setActiveTab(item.id)}
                className="relative cursor-pointer py-1.5 flex items-center justify-end group select-none"
              >
                <span
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-[#7c2ae8] font-bold text-xl'
                      : 'text-gray-200 group-hover:text-white text-lg font-medium'
                  }`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span className="hidden md:block absolute -right-12 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#5b00e0]"></span>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative z-10 h-4"></div>
      </div>

      {/* ԱՋ ՄԱՍ՝ Փոխվող բաժիններ */}
      <div className="flex-1 bg-[#5b00e0] p-8 md:p-16 overflow-y-auto relative flex flex-col justify-between">
        
        {/* Փակելու (X) կոճակ */}
        <button 
          onClick={handleClose}
          aria-label="Փակել"
          className="absolute top-6 right-8 text-white hover:text-gray-200 text-2xl font-light bg-transparent border-none cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all z-20"
        >
          ✕
        </button>

        {/* Բաժինների ցանց */}
        <div 
          key={activeTab} 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 pt-6 max-w-4xl transition-opacity duration-300"
        >
          {menuData[activeTab]?.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg mb-3.5 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-white/90 list-none p-0">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.path} 
                      className="hover:text-white hover:underline transition-all no-underline text-white/85 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ներքևի աջ մասի աջակցության կոճակ */}
        <div className="mt-12 pt-4 flex justify-end">
          <a 
            href="/chat" 
            className="bg-[#4600ad] hover:bg-[#3a0091] text-white px-5 py-2.5 rounded-t-xl rounded-bl-xl shadow-lg flex items-center space-x-2.5 cursor-pointer transition-all no-underline"
          >
            <span className="text-xs font-medium">Գրեք մեզ, մենք օնլայն ենք !</span>
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
          </a>
        </div>

      </div>
    </div>
  );
}