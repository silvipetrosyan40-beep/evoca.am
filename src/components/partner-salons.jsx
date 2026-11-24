import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function PartnerCarSalons() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const salonsList = [
    {
      name: 'ECO MOTORS',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 space-y-1 text-gray-700">
              <p>Երևան, Դավիթ Բեկ 97/26</p>
              <p>Երևան, Դավիթ Բեկ 164/11</p>
              <p>Երևան, Մալաթիա Սեբաստիա 108/2</p>
              <p>Կոտայքի մարզ, Վերին Պտղնի 14</p>
            </div>
          </div>

          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37495949466" className="hover:text-[#6200ee] underline">+37495949466</a>
              {' | '}
              <a href="tel:+37496949466" className="hover:text-[#6200ee] underline">+37496949466</a>
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/auto-web.png"
                alt="ECO MOTORS Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
   {
      name: 'JCars',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>BYD, Denza, Fangchangbao, Yangwang</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Դավիթ Բեկ 170</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37496949410" className="hover:text-[#6200ee] underline">+37496949410</a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/j%20cars.png"
                alt="JCars Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
    {
      name: 'City Auto',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>LIXIANG, ASTON MARTIN, BYD, ZEEKR, MERCEDES, VOLKSWAGEN</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Մազմանյան 1</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37491129797" className="hover:text-[#6200ee] underline">+37491129797</a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/city%20auto.png"
                alt="City Auto Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
   {
      name: 'Original Motors',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>MAZDA, BYD</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Աբովյան, Երևանյան փ., 1/100</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37495666266" className="hover:text-[#6200ee] underline">+37495666266</a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/Original%20Motors.png"
                alt="Original Motors Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
   {
      name: 'Tesla Service Yerevan',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>Tesla</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Գարեգին Նժդեհի փ. 37/4</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37441040020" className="hover:text-[#6200ee] underline">+37441040020</a>
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://tsy.com.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                tsy.com.am
              </a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/tesla%20new.png"
                alt="Tesla Service Yerevan Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
    {
      name: 'E-auto',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>սկսած 14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Դավիթ Բեկ փողոց 138/4</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37491330330" className="hover:text-[#6200ee] underline">+37491330330</a>
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://hongqi.am/" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                https://hongqi.am/
              </a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/E-auto.png"
                alt="E-auto Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
    {
      name: 'TESLA ENERGY',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 9]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 9]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 9]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 9]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>ՀՀ, Կոտայք, գ. Պռոշյան, Գ. Չաուշի փ. 1-ին նրբ. 3</p>[cite: 9]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37444551111" className="hover:text-[#6200ee] underline">+37444551111</a>[cite: 9]
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://teslaenergy.am/" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                https://teslaenergy.am/
              </a>[cite: 9]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/tesla.png"
                alt="TESLA ENERGY Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
    {
      name: 'E-Mobile',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 10]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 10]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 10]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>MAZDA, BYD, LiXiang, HONDA, ZEEKR, MERCEDES-BENZ</span>[cite: 10]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 10]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Երևան, Իսակով 15/1</p>[cite: 10]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37493659066" className="hover:text-[#6200ee] underline">+37493659066</a>[cite: 10]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/E-mobile.png"
                alt="E-Mobile Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 10]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 10]
          </div>
        </div>
      )
    },
    {
      name: 'iMotors',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>BYD, ZEEKR, LiXiang</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Կոտայք, Վերին Պտղնի, Նորավան թաղ., 1-ին փողոց, 31</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37491000380" className="hover:text-[#6200ee] underline">+37491000380</a>
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://www.imotors.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                www.imotors.am
              </a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/imotors-web.png"
                alt="iMotors Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
   {
      name: 'EV Centre',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>BYD</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 12]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Սեբաստիա 6</p>[cite: 12]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37455481111" className="hover:text-[#6200ee] underline">+37455481111</a>[cite: 12]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/EV%20CENTRE%2001.png"
                alt="EV Centre Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 12]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 12]
          </div>
        </div>
      )
    },
    {
      name: 'Carmark',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>MAZDA, BYD, TOYOTA</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 12]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Վահագն Դավթյան 1/4</p>[cite: 12]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2 space-y-1">
            <p className="font-semibold text-[#6200ee]">Կոնտակտային տվյալներ՝</p>
            <div className="pl-4 space-y-1">
              <p><a href="tel:+37444578009" className="hover:text-[#6200ee] underline">+37444578009</a></p>[cite: 12]
              <p><a href="tel:+37443830001" className="hover:text-[#6200ee] underline">+37443830001</a></p>[cite: 12]
              <p><a href="tel:+374333578009" className="hover:text-[#6200ee] underline">+374333578009</a></p>[cite: 12]
              <p><a href="tel:+374555578009" className="hover:text-[#6200ee] underline">+374555578009</a></p>[cite: 12]
            </div>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://www.carmark.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                www.carmark.am
              </a>[cite: 12]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/carmark.png"
                alt="Carmark Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 12]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 12]
          </div>
        </div>
      )
    },
   {
      name: 'V&V Trans',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>BYD, LiXiang, HONGQI, GEELY, KIA, HYUNDAI</span>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 13]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Արշակունյաց պ. 119</p>[cite: 13]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37411799777" className="hover:text-[#6200ee] underline">+37411799777</a>[cite: 13]
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://www.vvtrans.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                www.vvtrans.am
              </a>[cite: 13]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/V&V.png"
                alt="V&V Trans Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 13]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 13]
          </div>
        </div>
      )
    },
    {
      name: 'Smart Motors',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>BYD, ZEEKR, LiXiang, JAGUAR, VOLKSWAGEN, AUDI</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 14]
            </p>
          </div>

          {/* Հասցեներ */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 space-y-1 text-gray-700">
              <p>Երևան, Թևոսյան 16/9</p>[cite: 14]
              <p>Կոտայք, Վերին Պտղնի, 1-ին փողոց, 65/1</p>[cite: 14]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37444080833" className="hover:text-[#6200ee] underline">+37444080833</a>[cite: 14]
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/smart-motors-web.png"
                alt="Smart Motors Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 14]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 14]
          </div>
        </div>
      )
    },
   {
      name: 'Auto Gallery',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 60 ամիս</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>սկսած 9.9% -ից</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>IM Motors</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Դավիթաշեն, 4-րդ թաղ., 46/7</p>
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37460707010" className="hover:text-[#6200ee] underline">+37460707010</a>
            </p>
          </div>

          {/* Կայք */}
          <div className="pt-1">
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a href="https://www.auto-gallery.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                www.auto-gallery.am
              </a>
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/avtoni.png"
                alt="Auto Gallery Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>
          </div>
        </div>
      )
    },
   {
      name: 'INTERCARS Armenia',
      details: (
        <div className="space-y-4 text-sm md:text-base text-gray-800">
          {/* Վարկային պայմաններ */}
          <div className="space-y-2.5">
            <p>
              <strong className="text-[#6200ee] font-bold">Գումար՝</strong> <span>մինչև 50,000,000 ՀՀ դրամ</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ժամկետ՝</strong> <span>մինչև 84 ամիս</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Տոկոսադրույք՝</strong> <span>14.5%</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Ավտոմեքենաներ՝</strong> <span>AIQAR, KARRY, VOYAH, DONGFENG</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold text-[#6200ee]">Անվճար ԿԱՍԿՈ</strong>[cite: 14]
            </p>
          </div>

          {/* Հասցե */}
          <div className="space-y-1.5 pt-2">
            <p className="font-semibold text-[#6200ee]">Սրահի հասցե՝</p>
            <div className="pl-4 text-gray-700">
              <p>Երևան, Ավան, Բաբաջանյան 81</p>[cite: 14]
            </div>
          </div>

          {/* Կոնտակտային տվյալներ */}
          <div className="pt-2">
            <p>
              <strong className="text-[#6200ee] font-bold">Կոնտակտային տվյալներ՝</strong>{' '}
              <a href="tel:+37496665511" className="hover:text-[#6200ee] underline">+37496665511</a>
              {' | '}
              <a href="tel:+37493669911" className="hover:text-[#6200ee] underline">+37493669911</a>
            </p>[cite: 14]
          </div>

          {/* Նկարագրային տեքստ */}
          <div className="pt-2 text-gray-700">
            <p>Ինտերքարս ՍՊԸ-ն AIQAR, KARRY, VOYAH, DONGFENG բրենդերի պաշտոնական ներկայացուցիչն է ՀՀ-ում։</p>[cite: 14]
          </div>

          {/* Նկարի բլոկ */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/INTERCARS%20FINAL.png"
                alt="INTERCARS Armenia Vehicles"
                className="w-full h-auto object-contain rounded-lg"
              />[cite: 14]
            </div>
          </div>

          {/* Ստորին հղում */}
          <div className="pt-2 text-sm">
            <span>Ավտովարկի մանրամասներին կարող ես ծանոթանալ </span>
            <a href="#details" className="text-[#6200ee] font-semibold underline hover:text-purple-700">
              այստեղ:
            </a>[cite: 14]
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-white">
      <Header />

      <main className="max-w-4xl mx-auto w-full px-4 py-6 flex-grow">
        <nav className="flex items-center text-sm text-gray-500 space-x-2 mb-6">
          <a href="/" className="hover:text-[#6200ee] flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-medium">Գործընկեր ավտոսրահներ</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Գործընկեր ավտոսրահներ
          </h1>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p className="font-medium text-gray-900">
              Պետք է ավտովարկ և որոշել ես դիմել Evoca-ին, իմացի՛ր՝ արդեն ունես արտոնյալ պայմաններ։
            </p>
            <div>
              <h2 className="text-[#6200ee] font-bold text-base md:text-lg mb-2">
                Նոր մեքենա, ցածր տոկոսադրույք
              </h2>
              <p>
                Դու գիտես, որ Evoca-ում ավտոմեքենա կարող ես ձեռք բերել ինչպես առաջնային, այնպես էլ երկրորդային շուկայից: Առաջնային շուկայի դեպքում Evoca-ն համագործակցում է մի շարք ավտոսրահների հետ և առաջարկում վարկավորման արտոնյալ պայմաններ:
              </p>
            </div>
            <p>
              Վարկավորման արտոնյալ պայմանները հերիք չի, դու նաև ունես տեղում վարկային հայտ ներկայացնելու հնարավորություն։ Հայտը ներկայացնելուց հետո հարցման պատասխանը ստանում ես րոպեների ընթացքում: Կարող ես տեղում կնքել վարկային պայմանագիրը և դու ունես նոր ավտոմեքենա՝ հատուկ պայմաններով: Օնլայն վարկավորման դեպքում ավտովարկը տրամադրվում է առանց սպասարկման վճարների, իսկ ԿԱՍԿՈ ապահովագրությունը վարկի մայր գումարի մնացորդի չափով յուրաքանչյուր տարի մինչև վարկի մարման վերջնաժամկետը կնքվում է Բանկի կողմից և Բանկի հաշվին:
            </p>
            <p className="font-medium text-gray-900">
              Evoca-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարողես ծանոթանալ ստորև։
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h3>

          <div className="space-y-3">
            {salonsList.map((salon, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-purple-100 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base md:text-lg">
                      {salon.name}
                    </span>
                    <span
                      className={`transform transition-transform duration-200 text-[#6200ee] font-bold text-xl ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ^
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100">
                      {salon.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}