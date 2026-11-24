import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

// Բոլոր 3 դեմքերի նկարների զանգվածը
const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

// 1. Առանձնացված Բիոմետրիկ Բաղադրիչ (BiometricSection)
function BiometricSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [faceIndex, setFaceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setFaceIndex((prevIndex) => (prevIndex + 1) % faces.length);
        setIsVisible(true);
      }, 400);

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-10 lg:py-16 bg-white overflow-hidden rounded-3xl shadow-sm border border-gray-100 my-6 sm:my-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Ձախ մաս (Մանուշակագույն ֆոն և դեմքի / մեդիայի նկար) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="relative flex justify-center items-center w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
            
            {/* Հետնամասի մանուշակագույն շրջված եռանկյունաձև ֆոնը */}
            <div 
              className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] bg-[#6400DC] pointer-events-none"
              style={{
                clipPath: 'polygon(50% 100%, 0% 15%, 100% 15%)',
                borderRadius: '40px'
              }}
            ></div>
            
            {/* Անընդհատ հայտնվող և փոխվող մեդիա նկարը */}
            <img 
              src={faces[faceIndex]} 
              alt={t('glxavor.biometricAlt')} 
              className={`w-[210px] h-[210px] sm:w-[250px] sm:h-[280px] object-cover relative z-10 transition-all duration-500 rounded-2xl shadow-md ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, QR կոդ և կոճակ) */}
        <div className="w-full lg:w-1/2 space-y-4 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-900 tracking-tight leading-snug">
            {t('glxavor.biometricTitle')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto sm:mx-0 leading-relaxed">
            {t('glxavor.biometricDesc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-2">
            {/* QR կոդի բլոկ */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt={t('glxavor.qrAlt')} 
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button 
                onClick={() => navigate('/hy/digital-evocatouch-banking/')}
                className="font-semibold text-sm sm:text-base px-7 py-3 rounded-full text-white bg-[#6400DC] transition-all shadow-md cursor-pointer hover:opacity-95"
              >
                {t('glxavor.learnMore')}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 2. BiometricTriangle բաժինը՝ 7 պտտվող կետավոր շրջանագծերով և 4 բլոկներով
function BiometricTriangle() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const blocks = [
    {
      id: 1,
      badge: "Թվային քարտեր",
      title: "Evoca Digital քարտ",
      description: "Evocabank Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:",
      path: "/products/evoca-digital-card"
    },
    {
      id: 2,
      badge: "Նվեր քարտեր",
      title: "Evoca Gift Card",
      description: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:",
      path: "/cards/gift-card"
    },
    {
      id: 3,
      badge: "Նոր հավելված",
      title: "EvocaTOUCH 2",
      description: "EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:",
      path: "/news/allpage7/new-app-evocatouch"
    },
    {
      id: 4,
      badge: "Օնլայն վճարումներ",
      title: "Արագ online վճարումներ",
      description: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով պարզ և արագ: Այն հասանելի է 24/7:",
      path: "/hy/akntartayinvcharumner"
    }
  ];

  return (
    <div className="biometric-triangle-section w-full bg-[#6400DC] overflow-hidden flex flex-col justify-center items-center py-10 sm:py-14 lg:py-16 rounded-3xl my-6 sm:my-8 relative">
      {/* Հատուկ @media կանոններ հեռախոսի և պլանշետի համար */}
      <style>{`
        @media (max-width: 640px) {
          .biometric-statue-box {
            height: 300px !important;
          }
          .biometric-ring-1 {
            width: 210px !important;
            height: 210px !important;
          }
          .biometric-ring-2 {
            width: 255px !important;
            height: 255px !important;
          }
          .biometric-ring-3 {
            width: 295px !important;
            height: 295px !important;
          }
          .biometric-statue-img {
            height: 290px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .biometric-statue-box {
            height: 400px !important;
          }
          .biometric-statue-img {
            height: 420px !important;
          }
        }
      `}</style>
      
      {/* Վերնագիրը */}
      <div className="max-w-7xl w-full px-4 sm:px-6 mb-6 sm:mb-10 text-center lg:text-left">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {t("Լավագույնը Evocabank-ից")}
        </h2>
      </div>

      {/* Հիմնական կոնտեյներ */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Ձախ կողմ՝ Արձան և պտտվող կետավոր շրջանագծեր */}
        <div className="biometric-statue-box relative flex justify-center items-center w-full lg:w-1/2 h-[300px] sm:h-[420px] lg:h-[500px]">
          <div className="biometric-ring-1 absolute w-[210px] h-[210px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full border-[2px] sm:border-[3px] border-dotted border-white/60 pointer-events-none" style={{ animation: 'spin 18s linear infinite' }}></div>
          <div className="biometric-ring-2 absolute w-[255px] h-[255px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border-[2px] sm:border-[3px] border-dotted border-white/55 pointer-events-none" style={{ animation: 'spin 25s linear infinite reverse' }}></div>
          <div className="biometric-ring-3 absolute w-[295px] h-[295px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-full border-[2px] sm:border-[3px] border-dotted border-white/50 pointer-events-none" style={{ animation: 'spin 30s linear infinite' }}></div>
          <img 
            src="https://www.evoca.am/img/statue-1.png" 
            alt={t('glxavor.statueAlt')} 
            className="biometric-statue-img relative z-10 h-[290px] sm:h-[440px] lg:h-[600px] object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Աջ կողմ՝ 4 Ինտերակտիվ Սպիտակ Բլոկները */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 z-20">
          {blocks.map((block) => (
            <div 
              key={block.id}
              onClick={() => navigate(block.path)}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] cursor-pointer text-left group"
            >
              <div>
                <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {t(block.badge)}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6400DC] transition-colors">
                  {t(block.title)}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t(block.description)}
                </p>
              </div>
              <div className="mt-4 flex items-center text-[#6400DC] font-semibold text-xs sm:text-sm">
                <span>{t('glxavor.learnMore')}</span>
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
// 3. 20 տարբեր քարտերով Սլայդեր բաժինը (CardsSlider)
function CardsSlider() {
  const navigate = useNavigate();

 const cards20 = [
    { id: 1, title: "Arca Union Pay Co-badge", img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png", path: "/cards/arca-union-pay" },
    { id: 2, title: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", path: "/cards/gift-card" },
    { id: 3, title: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", path: "/cards/visa-infinite" },
    { id: 4, title: "Mastercard World Digital", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", path: "/cards/mastercard-world-digital" },
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/travel-card" },
    { id: 6, title: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", path: "/cards/visa-classic" },
    { id: 7, title: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", path: "/cards/mastercard-standard" },
    { id: 8, title: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", path: "/cards/visa-gold" },
    { id: 9, title: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", path: "/cards/mastercard-gold" },
    { id: 10, title: "MyLer Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", path: "/cards/myler-gift-card" },
    { id: 11, title: "4U.am Gift card", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", path: "/cards/4u-gift" },
    { id: 12, title: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", path: "/cards/arca-classic" },
    { id: 13, title: "Wilco Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png", path: "/cards/wilco-visa-infinite" },
    { id: 14, title: "Evoca Visa Platinum", img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png", path: "/cards/visa-platinum-card" },
    { id: 15, title: "Visa Digital", img: " https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", path: "/cards/visa-digital-card" },
    { id: 16, title: "Rio Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", path: "/cards/rio-gift-card-tariffs" },
    { id: 17, title: "Dalma Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", path: "/cards/dalma-gift-card" },
    { id: 18, title: "UnionPay Gold", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", path: "/cards/unionpay-gold" },
    { id: 19, title: "UnionPay Business Platinum", img: "   https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", path: "/cards/unionpay-platinum" },
    { id: 20, title: "Visa Business", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png", path: "/cards/visa-business-card" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = cards20[activeIndex];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս՝ Ուղղահայաց մինի սլայդեր */}
        <div className="w-full lg:w-1/3 flex flex-col items-center relative h-[450px]">
          <div className="swiper-button-prev-custom text-[#6400DC] font-bold text-xl cursor-pointer mb-2 p-2 hover:scale-110 transition-transform">
            ▲
          </div>

          <Swiper
            modules={[Navigation, Mousewheel]}
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={15}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-[360px] w-full max-w-xs cursor-grab"
          >
            {cards20.map((card, idx) => (
              <SwiperSlide key={card.id} className="flex items-center justify-center">
                <div 
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-center bg-gray-50 border ${
                    activeIndex === idx ? 'border-[#6400DC] shadow-md scale-105 bg-purple-50/50' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={card.img} alt={card.title} className="w-36 h-24 object-contain rounded-xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next-custom text-[#6400DC] font-bold text-xl cursor-pointer mt-2 p-2 hover:scale-110 transition-transform">
            ▼
          </div>
        </div>

        {/* Մեջտեղի մաս՝ Մեծ քարտի ցուցադրություն */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img 
            src={activeCard.img} 
            alt={activeCard.title} 
            className="max-h-[340px] w-full object-contain drop-shadow-2xl transition-all duration-500 transform scale-100"
          />
        </div>

        {/* Աջ մաս՝ Վերնագիր, նկարագրություն և Մանրամասն կոճակ */}
        <div className="w-full lg:w-1/3 text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {activeCard.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {activeCard.description}
          </p>
          <div>
            <button
              onClick={() => navigate(activeCard.path)}
              className="bg-[#6400DC] hover:bg-[#5300B8] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
            >
              Մանրամասն
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// 4. Հաշվիչների բաժինը (CalculatorSection)
function CalculatorSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('loan');

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(12);
  const [repaymentType, setRepaymentType] = useState('spring');

  const [depositAmount, setDepositAmount] = useState(1000000);
  const [depositTerm, setDepositTerm] = useState(12);
  const [depositRate, setDepositRate] = useState(9.5);

  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (activeTab === 'loan') {
      let monthlyPayment = 0;
      if (repaymentType === 'annuity') {
        const r = interestRate / 100 / 12;
        monthlyPayment = (loanAmount * r * Math.pow(1 + r, loanTerm)) / (Math.pow(1 + r, loanTerm) - 1);
      } else {
        const principal = loanAmount / loanTerm;
        const interest = (loanAmount * (interestRate / 100)) / 12;
        monthlyPayment = principal + interest;
      }
      setResult(
        t('calculator.monthlyPaymentResult', {
          amount: Math.round(monthlyPayment).toLocaleString()
        })
      );
    } else {
      const totalInterest = depositAmount * (depositRate / 100) * (depositTerm / 12);
      const netIncome = totalInterest * 0.9;
      setResult(
        t('calculator.depositIncomeResult', {
          amount: Math.round(netIncome).toLocaleString()
        })
      );
    }
  };

  return (
    <div className="calc-section w-full max-w-7xl mx-auto my-8 sm:my-12 px-3 sm:px-0 text-left">
      <style>{`
        @media (max-width: 640px) {
          .calc-box {
            padding: 18px !important;
            border-radius: 20px !important;
          }
          .calc-tabs {
            gap: 8px !important;
          }
          .calc-tab-btn {
            flex: 1 1 0;
            padding: 10px 14px !important;
            font-size: 14px !important;
          }
          .calc-value-card {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 4px;
          }
          .calc-radio-group {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .calc-submit-btn {
            width: 100%;
          }
        }
      `}</style>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 sm:mb-8 px-1 sm:px-2">
        {t('calculator.title')}
      </h2>

      <div className="calc-box bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm relative">
        
        {/* Tab-եր */}
        <div className="calc-tabs flex gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => { setActiveTab('loan'); setResult(null); }}
            className={`calc-tab-btn px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer border-none ${
              activeTab === 'loan'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {t('calculator.loanTab')}
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('deposit'); setResult(null); }}
            className={`calc-tab-btn px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer border-none ${
              activeTab === 'deposit'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {t('calculator.depositTab')}
          </button>
        </div>

        {/* Վարկի Հաշվիչ */}
        {activeTab === 'loan' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.loanAmount')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{Number(loanAmount).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="50000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>0</span>
                  <span>50,000,000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.term')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{loanTerm} {t('calculator.monthsSuffix')}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="120"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>{t('calculator.minMonth')}</span>
                  <span>{t('calculator.maxLoanMonths')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.interestRate')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{interestRate} %</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>1%</span>
                  <span>36 %</span>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-3">
                <span className="text-xs text-gray-400 font-medium">{t('calculator.repaymentType')}</span>
                <div className="calc-radio-group flex items-center gap-6 sm:gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'spring'}
                      onChange={() => setRepaymentType('spring')}
                      className="w-5 h-5 accent-[#6400DC]"
                    />
                    <span className="text-gray-800 font-semibold text-sm">{t('calculator.spring')}</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'annuity'}
                      onChange={() => setRepaymentType('annuity')}
                      className="w-5 h-5 accent-[#6400DC]"
                    />
                    <span className="text-gray-800 font-semibold text-sm">{t('calculator.annuity')}</span>
                  </label>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Ավանդի Հաշվիչ */}
        {activeTab === 'deposit' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.depositAmount')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{Number(depositAmount).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>100,000</span>
                  <span>100,000,000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.term')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{depositTerm} {t('calculator.monthsSuffix')}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="36"
                  value={depositTerm}
                  onChange={(e) => setDepositTerm(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>{t('calculator.minMonth')}</span>
                  <span>{t('calculator.maxDepositMonths')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="calc-value-card bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-xs sm:text-sm font-medium">{t('calculator.interestRate')}</span>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">{depositRate} %</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.25"
                  value={depositRate}
                  onChange={(e) => setDepositRate(Number(e.target.value))}
                  className="w-full accent-[#6400DC] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>1%</span>
                  <span>15 %</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Ներքևի մաս */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs text-gray-500 max-w-md text-center sm:text-left">
            {t('calculator.disclaimer')}
          </p>

          <button
            type="button"
            onClick={handleCalculate}
            className="calc-submit-btn bg-[#6400DC] hover:bg-[#5300B8] text-white font-bold px-10 py-3.5 rounded-full shadow-md transition-all cursor-pointer shrink-0 border-none"
          >
            {t('calculator.calculate')}
          </button>
        </div>

        {/* Արդյունքի ցուցադրում */}
        {result && (
          <div className="mt-6 p-4 bg-purple-100/70 border border-purple-200 rounded-2xl text-[#6400DC] font-bold text-center text-base sm:text-lg">
            {result}
          </div>
        )}

      </div>
    </div>
  );
}
// 5. Արտարժույթի և Հասցեների բաժինը (CurrencySection)
function CurrencySection() {
  const navigate = useNavigate();
  const [currencyTab, setCurrencyTab] = useState('cash');
  const [haveAmount, setHaveAmount] = useState('');
  const [getAmount, setGetAmount] = useState('');

  
}

// 6. Գործընկերների սլայդեր բաժինը (PartnersSlider)
function PartnersSlider() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const partners17 = [
    { id: 1, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png" },
    { id: 2, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png" },
    { id: 3, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png" },
    { id: 4, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png" },
    { id: 5, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png" },
    { id: 6, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17072192635138/348x150_grayscale.png" },
    { id: 7, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17072192435541/348x150_grayscale.png" },
    { id: 8, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png" },
    { id: 9, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104583322099/348x150_grayscale.png" },
    { id: 10, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/17689930369925/348x150_grayscale.png" },
    { id: 11, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104594273635/348x150_grayscale.png" },
    { id: 12, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/1610459808737/348x150_grayscale.png" },
    { id: 13, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104599802947/348x150_grayscale.png" },
    { id: 14, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104603665095/348x150_grayscale.png" },
    { id: 15, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104604109064/348x150_grayscale.png" },
    { id: 16, name: "", path: "/hy/about/partners", img: "https://www.evoca.am/images-cache/partners/1/16104604382658/348x150.png" },
  ];

  return (
    <div className="partners-slider-section w-full bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-6 sm:my-8 shadow-sm">
      <style>{`
        @media (max-width: 640px) {
          .partners-hand-box {
            left: 50% !important;
            top: 4px !important;
            transform: translateX(-50%) !important;
          }
          .partners-ring-1 {
            width: 110px !important;
            height: 110px !important;
          }
          .partners-ring-2 {
            width: 140px !important;
            height: 140px !important;
          }
          .partners-ring-3 {
            width: 165px !important;
            height: 165px !important;
          }
          .partners-hand-img {
            width: 68px !important;
            height: 92px !important;
          }
          .partner-prev-btn {
            margin-left: 0 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Ձախ մաս՝ Վերնագիր, տեքստ և կոճակ */}
        <div className="w-full lg:w-5/12 text-center sm:text-left space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t("Գործընկերներ")}
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            {t("Դարձեք Evocabank-ի գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:")}
          </p>

          <div className="pt-1 sm:pt-2 flex justify-center sm:justify-start">
            <button
              onClick={() => navigate('/hy/about/partners')}
              className="inline-flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-[#6400DC] font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all cursor-pointer shadow-xs"
            >
              <span>{t("Բոլոր գործընկերները")}</span>
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>

        {/* Աջ մաս՝ Սլայդեր, որի վերևում տեղադրված են ձեռքը և դեղին կետերը */}
        <div className="w-full lg:w-7/12 relative pt-16 sm:pt-20">
          
          {/* Ձեռքի նկարը և պտտվող դեղին կետերը սլայդերի ՎԵՐԵՎՈՒՄ */}
          <div className="partners-hand-box absolute left-1/2 -translate-x-1/2 sm:left-14 sm:translate-x-0 top-1 w-36 sm:w-40 h-24 sm:h-28 pointer-events-none flex items-center justify-center z-10">
            <div className="partners-ring-1 absolute w-[125px] sm:w-[150px] h-[125px] sm:h-[150px] rounded-full border-[2px] sm:border-[3px] border-dotted border-yellow-400/80" style={{ animation: 'spin 15s linear infinite' }}></div>
            <div className="partners-ring-2 absolute w-[155px] sm:w-[190px] h-[155px] sm:h-[190px] rounded-full border-[2px] sm:border-[3px] border-dotted border-yellow-400/60" style={{ animation: 'spin 22s linear infinite reverse' }}></div>
            <div className="partners-ring-3 absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full border-[2px] sm:border-[3px] border-dotted border-yellow-400/60" style={{ animation: 'spin 22s linear infinite reverse' }}></div>
            
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt={t("Գործընկերներ")} 
              className="partners-hand-img w-20 sm:w-24 h-28 sm:h-32 object-contain drop-shadow-xl relative z-30" 
            />
          </div>

          <div className="relative border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-slate-50/30 shadow-xs overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 }
              }}
              navigation={{
                nextEl: '.partner-button-next',
                prevEl: '.partner-button-prev',
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              className="py-3 sm:py-4 pl-2 sm:pl-14"
            >
              {partners17.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div 
                    onClick={() => navigate(partner.path)}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-40 sm:h-48 cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] text-center group"
                  >
                    <img src={partner.img} alt={partner.name || t("Գործընկերներ")} className="h-14 sm:h-16 object-contain" />
                    {partner.name && <h3 className="font-bold text-gray-900 text-sm mt-2">{t(partner.name)}</h3>}
                    {partner.desc && <p className="text-xs text-gray-500 line-clamp-2 mt-1">{t(partner.desc)}</p>}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-between absolute inset-y-0 inset-x-1 sm:inset-x-2 pointer-events-none items-center z-20">
              <button type="button" className="partner-prev-btn partner-button-prev pointer-events-auto bg-white/90 hover:bg-white text-[#6400DC] p-2.5 sm:p-3 rounded-full shadow-md transition-all cursor-pointer sm:ml-6">
                ‹
              </button>
              <button type="button" className="partner-button-next pointer-events-auto bg-white/90 hover:bg-white text-[#6400DC] p-2.5 sm:p-3 rounded-full shadow-md transition-all cursor-pointer">
                ›
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// 8. Գլխավոր HomeSection Բաղադրիչը
export default function HomeSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("cash");
  const [fromCurrency, setFromCurrency] = useState("AMD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  // Փոխարժեքների տվյալները ըստ թաբերի
  const ratesData = {
    cash: [
      { code: "USD", flag: "🇺🇸", buy: 358, buyTrend: "down", sell: 362, sellTrend: "up" },
      { code: "EUR", flag: "🇪🇺", buy: 390, buyTrend: "down", sell: 401, sellTrend: "up" },
      { code: "RUB", flag: "🇷🇺", buy: 4.25, buyTrend: "down", sell: 4.43, sellTrend: "up" },
      { code: "GBP", flag: "🇬🇧", buy: 463, buyTrend: "down", sell: 481, sellTrend: "up" },
      { code: "CHF", flag: "🇨🇭", buy: 416, buyTrend: "down", sell: 435, sellTrend: "up" },
    ],
    nonCash: [
      { code: "USD", flag: "🇺🇸", buy: 358, buyTrend: "down", sell: 363, sellTrend: "up" },
      { code: "EUR", flag: "🇪🇺", buy: 390, buyTrend: "down", sell: 401, sellTrend: "up" },
      { code: "RUB", flag: "🇷🇺", buy: 4.32, buyTrend: "down", sell: 4.5, sellTrend: "up" },
      { code: "GBP", flag: "🇬🇧", buy: 463, buyTrend: "down", sell: 481, sellTrend: "up" },
      { code: "CHF", flag: "🇨🇭", buy: 416, buyTrend: "down", sell: 440, sellTrend: "up" },
      { code: "CNY", flag: "🇨🇳", buy: 53, buyTrend: "down", sell: 56, sellTrend: "up" },
      { code: "AED", flag: "🇦🇪", buy: 96, buyTrend: "down", sell: 100, sellTrend: "up" },
      { code: "JPY", flag: "🇯🇵", buy: 2.22, buyTrend: "down", sell: 2.35, sellTrend: "up" },
      { code: "KZT", flag: "🇰🇿", buy: 0.8, buyTrend: "down", sell: 0.85, sellTrend: "up" },
      { code: "BYN", flag: "🇧🇾", buy: 116, buyTrend: "down", sell: 124, sellTrend: "up" },
    ],
    gold: [
      { code: "375", price: 16000 },
      { code: "500", price: 21300 },
      { code: "583", price: 24900 },
      { code: "750", price: 32000 },
      { code: "875", price: 37400 },
      { code: "900", price: 38500 },
      { code: "958", price: 40900 },
      { code: "999", price: 42700 },
    ],
    rubCashIn: [
      { code: "RUB", flag: "🇷🇺", buy: 4.25, buyTrend: "down", sell: 4.43, sellTrend: "up" },
    ],
  };

  const tabs = [
    { id: "cash", label: "Կանխիկ" },
    { id: "nonCash", label: "Անկանխիկ" },
    { id: "gold", label: "Ոսկու փոխարժեք" },
    { id: "rubCashIn", label: "Ռուբլու կանխիկ մուտք" },
  ];

  // Հաշվիչի պարզ տրամաբանություն
  const getRateToAMD = (currency) => {
    if (currency === "AMD") return 1;
    const found = ratesData.cash.find((item) => item.code === currency);
    return found ? found.sell : 1;
  };

  const handleFromAmountChange = (val) => {
    setFromAmount(val);
    if (!val || isNaN(val)) {
      setToAmount("");
      return;
    }
    const inAMD = parseFloat(val) * getRateToAMD(fromCurrency);
    const result = inAMD / getRateToAMD(toCurrency);
    setToAmount(result.toFixed(2));
  };

  const slides = [
    {
      id: 1,
      title: "Evoca Travel Card",
      description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-gray-200 text-gray-900",
      image: "img1.png",
      path: "/travel-card"
    },
    {
      id: 2,
      title: "Evoca Աշխատավարձային նախագիծ",
      description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-purple-800 text-white",
      image: "img2.png",
      path: "/salary"
    },
    {
      id: 3,
      title: "Կարճ հեռախոսահամար՝ 8444",
      description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-black text-white",
      image: "img3.png",
      path: "/contact"
    },
    {
      id: 4,
      title: "Visa Vision",
      description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-neutral-900 text-white",
      image: "img4.jpg",
      path: "/visa-vision"
    },
    {
      id: 5,
      title: "Visa Infinite",
      description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-neutral-950 text-white",
      image: "img5.png",
      path: "/cards/visa-infinite"
    },
    {
      id: 6,
      title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
      description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-purple-100 text-gray-900",
      image: "img6.jpg",
      path: "/mortgage-loans/residential-mortgage-loans"
    },
    {
      id: 7,
      title: "UnionPay Gold",
      description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-amber-700 text-white",
      image: "img7.png",
      path: "/cards/unionpay-gold"
    },
    {
      id: 8,
      title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
      description: "Դի'ր ավանդ Evocabank-ում՝ բարձր, շա'տ բարձր տոկոսներով:",
      buttonText: "Ծանոթանալ պայմաններին",
      bgClass: "bg-pink-100 text-gray-900",
      image: "img8.jpg",
      path: "/deposits/evoca-online"
    }
  ];

  return (
    <div className="w-full space-y-8 sm:space-y-12 pb-12 sm:pb-16">
      <style>{`
        @media (max-width: 640px) {
          .hero-slide-card {
            min-height: 360px !important;
            padding: 24px 20px !important;
            text-align: center;
          }
          .hero-slide-img {
            max-height: 190px !important;
          }
        }
      `}</style>
      
      {/* 1. Վերևի մաս՝ Սլայդեր */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`hero-slide-card flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 min-h-[360px] md:min-h-[420px] ${slide.bgClass}`}>
                <div className="max-w-xl space-y-4 sm:space-y-6 z-10 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {t(slide.title)}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">
                    {t(slide.description)}
                  </p>
                  <div>
                    <button 
                      onClick={() => navigate(slide.path)}
                      className="bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl shadow-md transition-all cursor-pointer"
                    >
                      {t(slide.buttonText)}
                    </button>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
                  {slide.image && slide.image !== "Այստեղ_գրիր_նկարի_հղումը_կամ_ուղին" ? (
                    <img 
                      src={slide.image} 
                      alt={t(slide.title)} 
                      className="hero-slide-img max-h-52 sm:max-h-64 md:max-h-80 object-contain drop-shadow-xl"
                    />
                  ) : (
                    <div className="border-2 border-dashed border-current opacity-30 rounded-2xl p-8 sm:p-10 text-center">
                      <span className="text-xs sm:text-sm font-medium">{t("Նկարը դեռ ավելացված չէ")}</span>
                    </div>
                  )}
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>

      {/* 2. Բիոմետրիկ բաժին */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BiometricSection />
      </div>

      {/* 3. Արձանով և 7 պտտվող շրջանագծերով բաժինը */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BiometricTriangle />
      </div>

      {/* 4. 20 տարբեր քարտերի սլայդեր բաժինը */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CardsSlider />
      </div>

      {/* 5. Հաշվիչների բաժինը */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculatorSection />
      </div>

      
      {/* 7. Գործընկերների սլայդեր բաժինը */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartnersSlider />
      </div>

      {/* 8. Հաճախորդների կարծիքների բաժինը (Ֆուտերի անմիջապես վերևը) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewsSlider />
      </div>
{/* 4. Վերջին նորությունները (Latest News Grid) */}
<div className="latest-news-section max-w-6xl mx-auto px-4 pt-12 sm:pt-16 border-t border-gray-100 space-y-5 sm:space-y-6">
  <style>{`
    @media (max-width: 640px) {
      .latest-news-header {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 10px !important;
      }
      .latest-news-card-body {
        padding: 12px !important;
      }
    }
  `}</style>

  <div className="latest-news-header flex items-center justify-between gap-4">
    <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
      {t("Վերջին նորությունները")}
    </h2>

    <Link
      to="/news"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 hover:bg-purple-200/80 text-purple-700 font-semibold text-xs sm:text-sm transition-colors"
    >
      <span>{t("Բոլոր նորությունները")}</span>
      <span aria-hidden="true">&gt;</span>
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
    {/* Քարտ 1 */}
    <Link
      to="/products/evocabank-participates-in-autoshow-2026"
      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[16/11] w-full bg-gray-950 overflow-hidden">
        <img
          src="https://www.evoca.am/images-cache/news/1/17902383376936/780x585.png"
          alt={t("Սև Ուրբաթ՝ 20% cashback-ով և զեղչված Evoca Mastercard քարտերով")}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="latest-news-card-body p-4 flex flex-col flex-grow space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span className="w-0.5 h-3.5 bg-fuchsia-500 rounded-full"></span>
          <span>{t("Պրոդուկտներ")}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors line-clamp-2">
          {t("Evoca-ն մասնակցում է Armenian Auto Show 2026-ին")}
        </h3>

        <span className="text-xs text-gray-400 mt-auto pt-2">22.09.2026</span>
      </div>
    </Link>

    {/* Քարտ 2 */}
    <Link
      to="/news/banking/the-europe-region"
      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[16/11] w-full bg-gray-100 overflow-hidden">
        <img
          src="https://www.evoca.am/images-cache/news/1/17930164747919/780x585.png"
          alt={t("Evocabank-ը թողարկել է պարտատոմսեր՝ դրամով, դոլարով ու եվրոյով")}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="latest-news-card-body p-4 flex flex-col flex-grow space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span className="w-0.5 h-3.5 bg-purple-700 rounded-full"></span>
          <span>{t("Բանկային")}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors line-clamp-2">
          {t("Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը")}
        </h3>

        <span className="text-xs text-gray-400 mt-auto pt-2">26.10.2026</span>
      </div>
    </Link>

    {/* Քարտ 3 */}
    <Link
      to="/news/allpage2/in-toon-expo-2026"
      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
    >
      <div className="aspect-[16/11] w-full bg-purple-950 overflow-hidden">
        <img
          src="https://www.evoca.am/images-cache/news/1/17743534930147/780x585.png"
          alt={t("Evocabank-ը՝ TOON EXPO. INVEST 2026 Vol. 2-ին")}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="latest-news-card-body p-4 flex flex-col flex-grow space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span className="w-0.5 h-3.5 bg-lime-500 rounded-full"></span>
          <span>{t("Կենսակերպ")}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors line-clamp-2">
          {t("Evoca-ն մասնակցում է TOON EXPO 2026-ին")}
        </h3>

        <span className="text-xs text-gray-400 mt-auto pt-2">06.11.2026</span>
      </div>
    </Link>
  </div>

           <section className="rates-addresses-section max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <style>{`
        @media (max-width: 640px) {
          .rates-addresses-section {
            padding-top: 24px !important;
            padding-bottom: 32px !important;
          }
          .rates-card-body {
            padding: 16px !important;
          }
          .rates-table td,
          .rates-table th {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
            font-size: 12px !important;
          }
          .addresses-block {
            align-items: center !important;
            text-align: center !important;
            padding-left: 0 !important;
          }
          .addresses-desc {
            max-width: 100% !important;
          }
          .addresses-map-box {
            width: 210px !important;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* ՁԱԽ ՄԱՍ. Տեղեկատվական տեքստ և Փոխարժեքների բլոկ */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6">
          {/* Վերևի տեղեկատվական տեքստ */}
          <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">
            {t("20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով։ 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ։")}
          </p>

          {/* Թաբեր + Քարտ */}
          <div>
            {/* Թաբերի կոճակներ */}
            <div className="flex flex-wrap items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]"
                      : "text-gray-500 hover:text-gray-800 bg-transparent"
                  }`}
                >
                  {t(tab.label)}
                </button>
              ))}
            </div>

            {/* Հիմնական սպիտակ քարտ (Աղյուսակ + Հաշվիչ) */}
            <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              
              {/* Աղյուսակի հատված */}
              <div className="rates-card-body md:col-span-7 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-between">
                <table className="rates-table w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs text-gray-400 font-medium">
                      <th className="pb-3 font-normal"></th>
                      <th className="pb-3 font-normal text-center">{t("Առք")}</th>
                      <th className="pb-3 font-normal text-center">{t("Վաճառք")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {ratesData[activeTab].map((item) => (
                      <tr key={item.code} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3 flex items-center gap-2.5 font-semibold text-gray-800">
                          {item.flag && <span className="text-lg leading-none">{item.flag}</span>}
                          <span>{item.code}</span>
                        </td>
                        <td className="py-3 text-center font-bold text-gray-900">
                          {item.buy !== undefined ? (
                            <span className="inline-flex items-center gap-1.5">
                              {item.buyTrend === "down" ? (
                                <span className="text-[9px] text-rose-500">▼</span>
                              ) : (
                                <span className="text-[9px] text-emerald-500">▲</span>
                              )}
                              {item.buy}
                            </span>
                          ) : (
                            <span>{item.price}</span>
                          )}
                        </td>
                        <td className="py-3 text-center font-bold text-gray-900">
                          {item.sell !== undefined ? (
                            <span className="inline-flex items-center gap-1.5">
                              {item.sellTrend === "up" ? (
                                <span className="text-[9px] text-emerald-500">▲</span>
                              ) : (
                                <span className="text-[9px] text-rose-500">▼</span>
                              )}
                              {item.sell}
                            </span>
                          ) : (
                            <span>—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="pt-4 mt-2 border-t border-gray-50 text-[11px] text-gray-400">
                  {t("Թարմացվել է՝")} 22.11.26
                </div>
              </div>

              {/* Արժույթի փոխարկման հաշվիչ */}
              <div className="rates-card-body md:col-span-5 p-5 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-5 bg-white">
                {/* Ունեմ */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-500">
                    {t("Ունեմ")}
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2.5 focus-within:border-purple-600 transition-colors">
                    <input
                      type="number"
                      value={fromAmount}
                      onChange={(e) => handleFromAmountChange(e.target.value)}
                      placeholder="0"
                      className="w-full text-sm font-semibold text-gray-900 outline-none bg-transparent"
                    />
                    <select
                      value={fromCurrency}
                      onChange={(e) => {
                        setFromCurrency(e.target.value);
                        handleFromAmountChange(fromAmount);
                      }}
                      className="text-xs font-bold text-purple-700 bg-transparent outline-none cursor-pointer pl-2"
                    >
                      <option value="AMD">AMD</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="RUB">RUB</option>
                    </select>
                  </div>
                </div>

                {/* Կստանամ */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-500">
                    {t("Կստանամ")}
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/40">
                    <input
                      type="text"
                      readOnly
                      value={toAmount}
                      placeholder="0"
                      className="w-full text-sm font-semibold text-gray-900 outline-none bg-transparent"
                    />
                    <select
                      value={toCurrency}
                      onChange={(e) => {
                        setToCurrency(e.target.value);
                        handleFromAmountChange(fromAmount);
                      }}
                      className="text-xs font-bold text-purple-700 bg-transparent outline-none cursor-pointer pl-2"
                    >
                      <option value="USD">USD</option>
                      <option value="AMD">AMD</option>
                      <option value="EUR">EUR</option>
                      <option value="RUB">RUB</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ԱՋ ՄԱՍ. Մեր հասցեները */}
        <div className="addresses-block lg:col-span-4 flex flex-col items-start lg:pl-4 pt-1 space-y-3 sm:space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-gray-950">
              {t("Մեր հասցեները")}
            </h3>
            <p className="addresses-desc text-xs text-gray-500 leading-relaxed max-w-[240px]">
              {t("Բանկի հասցեները, աշխատաժամերը, բանկոմատները")}
            </p>
          </div>

          {/* Քարտեզի նկար + Պին (Pin) */}
          <div className="addresses-map-box relative w-52 sm:w-64 pt-2 pb-4 group">
            <img
              src="https://www.evoca.am/img/addresses.png"
              alt={t("Երևանի քարտեզ")}
              className="w-full h-auto object-contain drop-shadow-sm"
            />
            <img
              src="https://www.evoca.am/img/addresses-pin.png"
              alt="Evocabank Pin"
              className="w-11 sm:w-14 h-auto absolute bottom-3 left-6 group-hover:-translate-y-1.5 transition-transform duration-300 drop-shadow-md"
            />
          </div>

          {/* Դիտել քարտեզը կոճակ */}
          <Link
            to="/branches"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-purple-100/90 hover:bg-purple-200 text-purple-700 font-bold text-xs sm:text-sm transition-colors"
          >
            <span>{t("Դիտել քարտեզը")}</span>
            <span aria-hidden="true">&gt;</span>
          </Link>
        </div>

      </div>
    </section>
      </div>
    </div>
  );
}
// 7. Նոր Հաճախորդների կարծիքների սլայդեր բաժինը (ReviewsSlider)
function ReviewsSlider() {
  const { t } = useTranslation();

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
    <div className="reviews-slider-section w-full max-w-7xl mx-auto my-8 sm:my-12 bg-[#FBF9FD] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 relative overflow-hidden shadow-sm border border-purple-50">
      <style>{`
        @media (max-width: 640px) {
          .reviews-slider-section {
            padding: 28px 14px !important;
          }
          .review-hand-left,
          .review-hand-right {
            width: 52px !important;
            opacity: 0.45 !important;
          }
          .review-zigzag-left,
          .review-zigzag-right {
            width: 18px !important;
            opacity: 0.45 !important;
          }
          .review-slide-content {
            padding-top: 26px !important;
          }
          .review-quote-text {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }
        }
      `}</style>

      {/* Ձախ կողմի նկարներ (ձեռք 2 և մանուշակագույն զիգզագ) */}
      <div className="absolute left-3 top-3 sm:left-12 sm:top-10 pointer-events-none z-10">
        <img 
          src="https://www.evoca.am/img/reviews/hand2.png" 
          alt="Hand 2" 
          className="review-hand-left w-16 sm:w-28 object-contain drop-shadow-md"
        />
      </div>
      <div className="absolute left-4 bottom-4 sm:left-10 sm:bottom-8 pointer-events-none z-10">
        <img 
          src="https://www.evoca.am/img/reviews/z-purple.png" 
          alt="Z Purple" 
          className="review-zigzag-left w-5 sm:w-8 object-contain"
        />
      </div>

      {/* Աջ կողմի նկարներ (ձեռք 1 և վարդագույն զիգզագ) */}
      <div className="absolute right-3 top-3 sm:right-12 sm:top-10 pointer-events-none z-10">
        <img 
          src="https://www.evoca.am/img/reviews/hand1.png" 
          alt="Hand 1" 
          className="review-hand-right w-16 sm:w-28 object-contain drop-shadow-md"
        />
      </div>
      <div className="absolute right-4 bottom-4 sm:right-10 sm:bottom-8 pointer-events-none z-10">
        <img 
          src="https://www.evoca.am/img/reviews/z-violet.png" 
          alt="Z Violet" 
          className="review-zigzag-right w-6 sm:w-10 object-contain"
        />
      </div>

      {/* Կարծիքների Սլայդեր (Swiper) */}
      <div className="review-slide-content max-w-3xl mx-auto px-2 sm:px-6 relative z-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveReviewIndex(swiper.realIndex)}
          className="pb-6 sm:pb-8"
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                
                {/* Աստղեր */}
                <div className="flex gap-1 text-amber-400 text-lg sm:text-xl">
                  {"★".repeat(5)}
                </div>

                {/* Տեքստը մեջբերման նշաններով */}
                <div className="relative px-5 sm:px-12">
                  <span className="absolute -left-1 sm:-left-2 -top-2 text-[#6400DC] text-2xl sm:text-3xl font-serif">“</span>
                  <p className="review-quote-text text-neutral-700 text-sm sm:text-lg leading-relaxed font-medium">
                    {t(rev.text)}
                  </p>
                  <span className="absolute -right-1 sm:-right-2 -bottom-4 text-[#6400DC] text-2xl sm:text-3xl font-serif">”</span>
                </div>

                {/* Հաճախորդի տվյալներ */}
                <div className="pt-2 space-y-1">
                  <h4 className="font-bold text-neutral-900 text-sm sm:text-base">{t(rev.name)}</h4>
                  <p className="text-xs text-neutral-500">{t(rev.role)}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Կետավոր ցուցիչներ (Pagination dots) */}
        <div className="flex justify-center items-center gap-2 mt-3 sm:mt-4">
          {reviews.map((_, idx) => (
            <span 
              key={idx}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                activeReviewIndex === idx ? 'w-6 sm:w-8 bg-[#6400DC]' : 'w-2 sm:w-2.5 bg-neutral-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
