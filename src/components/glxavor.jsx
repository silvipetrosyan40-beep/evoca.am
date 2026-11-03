import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    <section className="py-10 lg:py-16 bg-white overflow-hidden rounded-3xl shadow-sm border border-gray-100 my-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս (Մանուշակագույն ֆոն և դեմքի նկար) */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative flex justify-center items-center w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
            
            {/* Հետնամասի մանուշակագույն շրջված եռանկյունաձև ֆոնը */}
            <div 
              className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-[#6400DC] pointer-events-none"
              style={{
                clipPath: 'polygon(50% 100%, 0% 15%, 100% 15%)',
                borderRadius: '40px'
              }}
            ></div>
            
            {/* Անընդհատ հայտնվող և փոխվող դեմքի նկարը */}
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-[250px] sm:h-[280px] object-cover relative z-10 transition-opacity duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, QR կոդ և կոճակ) */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-900 tracking-tight leading-snug">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-row items-center gap-6 pt-2">
            {/* QR կոդի բլոկ */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button 
                onClick={() => navigate('/hy/digital-evocatouch-banking/')}
                className="font-semibold text-sm sm:text-base px-7 py-3 rounded-full text-white bg-[#6400DC] transition-all shadow-md cursor-pointer hover:opacity-90"
              >
                Իմանալ ավելին
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
      path: "new-app-evocatouchh"
    },
    {
      id: 4,
      badge: "Օնլայն վճարումներ",
      title: "Արագ online վճարումներ",
      description: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով պարզ և արագ: Այն հասանելի է 24/7:",
      path: "/hy/instant-payments"
    }
  ];

  return (
    <div className="w-full bg-[#6400DC] overflow-hidden flex flex-col justify-center items-center py-16 rounded-3xl my-8 relative">
      
      {/* Վերնագիրը */}
      <div className="max-w-7xl w-full px-6 mb-10 text-center lg:text-left">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
          Լավագույնը <span className="text-white">Evocabank</span>-ից
        </h1>
      </div>

      {/* Հիմնական կոնտեյներ */}
      <div className="relative w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* ձախ կողմ՝ Արձան և 7 պտտվող կետավոր շրջանագծեր */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 h-[500px]">
          <div className="absolute w-[360px] h-[360px] rounded-full border-[3px] border-dotted border-white/60 pointer-events-none" style={{ animation: 'spin 18s linear infinite' }}></div>
          <div className="absolute w-[440px] h-[440px] rounded-full border-[3px] border-dotted border-white/55 pointer-events-none" style={{ animation: 'spin 25s linear infinite reverse' }}></div>
          <div className="absolute w-[520px] h-[520px] rounded-full border-[3px] border-dotted border-white/50 pointer-events-none" style={{ animation: 'spin 30s linear infinite' }}></div>
          <img 
            src="https://www.evoca.am/img/statue-1.png" 
            alt="Evocabank Statue" 
            className="relative z-10 h-[600px] object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Աջ կողմ՝ 4 Ինտերակտիվ Սպիտակ Բլոկները */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 z-20">
          {blocks.map((block) => (
            <div 
              key={block.id}
              onClick={() => navigate(block.path)}
              className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] cursor-pointer text-left group"
            >
              <div>
                <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {block.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6400DC] transition-colors">
                  {block.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-[#6400DC] font-semibold text-sm">
                <span>Իմանալ ավելին</span>
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
      setResult(`Մոտավոր ամսական վճարը՝ ${Math.round(monthlyPayment).toLocaleString()} AMD`);
    } else {
      const totalInterest = depositAmount * (depositRate / 100) * (depositTerm / 12);
      const netIncome = totalInterest * 0.9;
      setResult(`Ավանդի զուտ եկամուտը՝ ${Math.round(netIncome).toLocaleString()} AMD`);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 px-2">
        Հաշվիչներ
      </h2>

      <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm relative">
        
        {/* Tab-եր */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => { setActiveTab('loan'); setResult(null); }}
            className={`px-8 py-3 rounded-2xl font-bold text-base transition-all ${
              activeTab === 'loan' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Վարկ
          </button>
          <button
            onClick={() => { setActiveTab('deposit'); setResult(null); }}
            className={`px-8 py-3 rounded-2xl font-bold text-base transition-all ${
              activeTab === 'deposit' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Ավանդ
          </button>
        </div>

        {/* Վարկի Հաշվիչ */}
        {activeTab === 'loan' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-2">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Վարկի գումար[cite: 5]</span>
                  <span className="text-xl font-bold text-gray-900">{Number(loanAmount).toLocaleString()}</span>
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
                  <span>0[cite: 5]</span>
                  <span>50000000[cite: 5]</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Ժամկետ[cite: 5]</span>
                  <span className="text-xl font-bold text-gray-900">{loanTerm} ամիս[cite: 5]</span>
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
                  <span>1 ամիս[cite: 5]</span>
                  <span>1200 ամիս[cite: 5]</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Տարեկան տոկոսադրույք</span>
                  <span className="text-xl font-bold text-gray-900">{interestRate} %</span>
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
                  <span>1%[cite: 5]</span>
                  <span>36 %[cite: 5]</span>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-3">
                <span className="text-xs text-gray-400 font-medium">Մարման ձև</span>
                <div className="flex items-center gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="repayment" 
                      checked={repaymentType === 'spring'}
                      onChange={() => setRepaymentType('spring')}
                      className="w-5 h-5 accent-[#6400DC]"
                    />
                    <span className="text-gray-800 font-semibold text-sm">Զսպանակաձև[cite: 5]</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="repayment" 
                      checked={repaymentType === 'annuity'}
                      onChange={() => setRepaymentType('annuity')}
                      className="w-5 h-5 accent-[#6400DC]"
                    />
                    <span className="text-gray-800 font-semibold text-sm">Անուիտետ[cite: 5]</span>
                  </label>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Ավանդի Հաշվիչ */}
        {activeTab === 'deposit' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-2">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Ավանդի գումար</span>
                  <span className="text-xl font-bold text-gray-900">{Number(depositAmount).toLocaleString()}</span>
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
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Ժամկետ</span>
                  <span className="text-xl font-bold text-gray-900">{depositTerm} ամիս</span>
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
                  <span>1 ամիս</span>
                  <span>36 ամիս</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 flex justify-between items-center shadow-xs">
                  <span className="text-gray-500 text-sm font-medium">Տարեկան տոկոսադրույք</span>
                  <span className="text-xl font-bold text-gray-900">{depositRate} %</span>
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
        <div className="mt-10 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 max-w-md">
            Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:[cite: 5]
          </p>

          <button
            onClick={handleCalculate}
            className="bg-[#6400DC] hover:bg-[#5300B8] text-white font-bold px-10 py-3.5 rounded-full shadow-md transition-all cursor-pointer shrink-0"
          >
            Հաշվել[cite: 5]
          </button>
        </div>

        {/* Արդյունքի ցուցադրում */}
        {result && (
          <div className="mt-6 p-4 bg-purple-100/70 border border-purple-200 rounded-2xl text-[#6400DC] font-bold text-center text-lg animate-fade-in">
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
  const navigate = useNavigate();

  const partners17 = [
    { id: 1, name: "", path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png" },
    { id: 2, name: "", path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png" },
    { id: 3, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png" },
    { id: 4, name: "",  path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png" },
    { id: 5, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png" },
    { id: 6, name: "",  path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/17072192635138/348x150_grayscale.png" },
    { id: 7, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/17072192435541/348x150_grayscale.png" },
    { id: 8, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png" },
    { id: 9, name: "",  path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/16104583322099/348x150_grayscale.png" },
    { id: 10, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/17689930369925/348x150_grayscale.png" },
    { id: 11, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/16104594273635/348x150_grayscale.png" },
    { id: 12, name: "",  path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/1610459808737/348x150_grayscale.png" },
    { id: 13, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/16104599802947/348x150_grayscale.png" },
    { id: 14, name: "",  path: "/partners", img: "https://www.evoca.am/images-cache/partners/1/16104603665095/348x150_grayscale.png" },
    { id: 15, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/16104604109064/348x150_grayscale.png" },
    { id: 16, name: "",  path: "/partners", img: "	https://www.evoca.am/images-cache/partners/1/16104604382658/348x150.png" },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս՝ Վերնագիր, տեքստ և կոճակ */}
        <div className="w-full lg:w-5/12 text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Գործընկերներ
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Դարձեք Evocabank-ի գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:[cite: 6]
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('/partners')}
              className="inline-flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-[#6400DC] font-bold px-7 py-3 rounded-full transition-all cursor-pointer shadow-xs"
            >
              <span>Բոլոր գործընկերները</span>[cite: 6]
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>

        {/* Աջ մաս՝ Սլայդեր, որի վերևում տեղադրված են ձեռքը և դեղին կետերը */}
        <div className="w-full lg:w-7/12 relative pt-16">
          
          {/* Ձեռքի նկարը և պտտվող դեղին կետերը սլայդերի ՎԵՐԵՎՈՒՄ (top) */}
          <div className="absolute left-1/26 -translate-x-1/2 -top-1 w-40 h-28 pointer-events-none flex items-center justify-center z-0">
            <div className="absolute w-[150px] h-[150px] rounded-full border-[3px] border-dotted border-yellow-400/80" style={{ animation: 'spin 15s linear infinite' }}></div>
            <div className="absolute w-[190px] h-[190px] rounded-full border-[3px] border-dotted border-yellow-400/60" style={{ animation: 'spin 22s linear infinite reverse' }}></div>
            <div className="absolute w-[220px] h-[220px] rounded-full border-[3px] border-dotted border-yellow-400/60" style={{ animation: 'spin 22s linear infinite reverse' }}></div>
            
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Partners Hand" 
              className="w-24 h-32 object-contain drop-shadow-xl relative z-30   " 
            />
          </div>

          

          <div className="relative border border-gray-100 rounded-3xl p-6 bg-slate-50/30 shadow-xs overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation={{
                nextEl: '.partner-button-next',
                prevEl: '.partner-button-prev',
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              className="py-4 pl-12 sm:pl-16"
            >
              {partners17.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div 
                    onClick={() => navigate(partner.path)}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-between h-48 cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] text-center group"
                  >
                    <img src={partner.img} alt={partner.name} className="h-16 object-contain" />
                    <h3 className="font-bold text-gray-900 group-text-hover text-sm">{partner.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{partner.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-between absolute inset-y-0 inset-x-2 pointer-events-none items-center z-25">
              <button className="partner-button-prev pointer-events-auto bg-white/80 hover:bg-white text-[#6400DC] p-3 rounded-full shadow-md transition-all cursor-pointer ml-8">
                ‹
              </button>
              <button className="partner-button-next pointer-events-auto bg-white/80 hover:bg-white text-[#6400DC] p-3 rounded-full shadow-md transition-all cursor-pointer -mr-2">
                ›
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// 7. Նոր Հաճախորդների կարծիքների սլայդեր բաժինը (ReviewsSlider)
function ReviewsSlider() {
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
    <div className="w-full max-w-7xl mx-auto my-12 bg-[#FBF9FD] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm border border-purple-50">
      
      {/* Ձախ կողմի նկարներ (ձեռք 2 և մանուշակագույն զիգզագ) */}
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

      {/* Աջ կողմի նկարներ (ձեռք 1 և վարդագույն զիգզագ) */}
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
  );
}

// 8. Գլխավոր HomeSection Բաղադրիչը
export default function HomeSection() {
  const navigate = useNavigate();
  
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
      path: "/visa-infinite"
    },
    {
      id: 6,
      title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
      description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-purple-100 text-gray-900",
      image: "img6.jpg",
      path: "/mortgage"
    },
    {
      id: 7,
      title: "UnionPay Gold",
      description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
      buttonText: "Իմանալ ավելին",
      bgClass: "bg-amber-700 text-white",
      image: "img7.png",
      path: "/union-pay"
    },
    {
      id: 8,
      title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
      description: "Դի'ր ավանդ Evocabank-ում՝ բարձր, շա'տ բարձր տոկոսներով:",
      buttonText: "Ծանոթանալ պայմաններին",
      bgClass: "bg-pink-100 text-gray-900",
      image: "img8.jpg",
      path: "/deposit"
    }
  ];

  return (
    <div className="w-full space-y-12 pb-16">
      
      {/* 1. Վերևի մաս՝ Սլայդեր */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`flex flex-col md:flex-row items-center justify-between p-8 md:p-16 min-h-[420px] ${slide.bgClass}`}>
                <div className="max-w-xl space-y-6 z-10">
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg opacity-90">
                    {slide.description}
                  </p>
                  <div>
                    <button 
                      onClick={() => navigate(slide.path)}
                      className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-2xl shadow-md transition-all cursor-pointer"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
                  {slide.image && slide.image !== "Այստեղ_գրիր_նկարի_հղումը_կամ_ուղին" ? (
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="max-h-80 object-contain drop-shadow-xl"
                    />
                  ) : (
                    <div className="border-2 border-dashed border-current opacity-30 rounded-2xl p-10 text-center">
                      <span className="text-sm font-medium">Նկարը դեռ ավելացված չէ</span>
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

    </div>
  );
}