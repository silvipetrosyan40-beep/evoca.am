import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Home, ChevronDown } from 'lucide-react';

export default function DevelopersPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Կառուցապատողների ցանկը՝ յուրաքանչյուրն իր առանձին տեղեկատվությամբ
  const developersList = [
   {
      name: 'Դե Իքս Քոնսթրաքշն',
      details: (
        <div className="space-y-4">
          <div className="space-y-1.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Կոտայքի մարզ, գ. Քասախ, Վ. Սարգսյան, փողոց 10</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37493009944" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 93 009944
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Website՝</strong>{' '}
              <a
                href="https://art-group.am/hy/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6200ee] underline hover:text-purple-900 font-medium"
              >
                https://art-group.am/hy/home
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin%20web%20(1).png"
                  alt="Դե Իքս Քոնսթրաքշն 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin2%20web%20(1).png"
                  alt="Դե Իքս Քոնսթրաքշն 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ՀԱԷԿ-ի Շինարարություն» ՓԲԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Նախագիծ՝</strong>{' '}
              <span className="text-gray-800">Մեծամոր Ռեզիդենս</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՀԱԷԿ-ի Շինարարություն» ՓԲԸ</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Արմավիրի մարզ, ք. Մեծամոր, 2-րդ թաղամաս 1/2 հողամաս</span>[cite: 12]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37495506506" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 95 506506
              </a>[cite: 12]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin%20web.png"
                  alt="ՀԱԷԿ-ի Շինարարություն 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin2%20web.png"
                  alt="ՀԱԷԿ-ի Շինարարություն 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: 'Dilijan Eye',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ԴԻ ՍԻ ԴԻ» ՍՊԸ</span>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37443100550" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37443100550
              </a>[cite: 13]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Տավուշի մարզ, ք. Դիլիջան, Առողջարանային փողոց 12/4</span>[cite: 13]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/web%201.jpg"
                  alt="Dilijan Eye 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/web%202.jpg"
                  alt="Dilijan Eye 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455200707" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55-200-707
              </a>{' | '}
              <a href="tel:+37441200700" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 41-200-700
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Կոտայքի մարզ, Նոր Հաճն, գյուղ Քասախեռավան, Երևանյան խճ. 8 և 8/3</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/man-invest-web.png"
                  alt="ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/man-invest-2-web%20(1).png"
                  alt="ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«ԱՍԱՏՐՈՅ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ԱՍԱՏՐՈՅ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37495444466" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 95 444466
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Արարատի մարզ, ք. Վեդի, Արցախի փողոց 1</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/asatroy%20web.png"
                  alt="ԱՍԱՏՐՈՅ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/asatroy-web2.png"
                  alt="ԱՍԱՏՐՈՅ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«White island» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«White island» ՍՊԸ</span>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37491767606" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37491767606
              </a>
              {', '}
              <a href="tel:+37491473874" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37491473874
              </a>[cite: 14]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Աշտարակ</span>[cite: 14]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekwhite-island-web.png"
                  alt="White island 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekwhite-island_1-web.png"
                  alt="White island 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'PARK VIEW',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՋԻ ԷՄ ԴԻՎԵԼՈՓՄԵՆԹ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455094949" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55 094949
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք. Երևան, Արաբկիր, Գ. Ղափանցյան փողոց 4/9</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekpark%20view2%20-%20web%20(2).png"
                  alt="PARK VIEW 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekpark%20view2%20-%20web%20(1).png"
                  alt="PARK VIEW 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«ՕՊՏԻՄԱ 25» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«Օպտիմա 25» ՍՊԸ</span>[cite: 15]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37493779384" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 93 77 93 84
              </a>
              {', '}
              <a href="tel:+37491196767" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 91 19 67 67
              </a>
              {', '}
              <a href="tel:+37491490700" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 91 49 07 00
              </a>[cite: 15]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ Կոտայքի մարզ, համայնք Նաիրի գյուղ Ձովունի 41-րդ փողոց 1-ին նրբանցք 5/2</span>[cite: 15]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/optimaweb.png"
                  alt="ՕՊՏԻՄԱ 25 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/optima2web.png"
                  alt="ՕՊՏԻՄԱ 25 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«Midis Park»',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«Միդիս Քոնսթրաքշն» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455386500" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55 386 500
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ Կոտայքի մարզ, գյուղ Ձորաղբյուր, 2-րդ թաղամաս, 10</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Վաճառքի պատասխանատու՝</strong>{' '}
              <span className="text-gray-800">Silver Rea</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/midis-web.png"
                  alt="Midis Park 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/midis2-web.png"
                  alt="Midis Park 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«Ավենյու Գրուպ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">Ավենյու Գրուպ ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Մարզ Կոտայք, գյուղ Նաիրի, Ձովունի 30-րդ փողոց 33/1</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37498778177" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 98 778 177
              </a>
              {', '}
              <a href="tel:+37498748177" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 98 748177
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekavenue-web.png"
                  alt="Ավենյու Գրուպ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/hipotekavenue2-web.png"
                  alt="Ավենյու Գրուպ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, համայնք Աբովյան Աբովյան ք. Հատիսի փողոց 1/85</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37433015509" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 33 015509
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karucapatox-web.png"
                  alt="ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karucapatox-web2.png"
                  alt="ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«ԼԷՄՔՅՈՒ-ԱՐԳՈ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ԼԷՄՔՅՈՒ-ԱՐԳՈ» ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Աշտարակ, փ. Երևանյան 2/10</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Վաճառքի պատասխանատու՝</strong>{' '}
              <span className="text-gray-800">«Արգո Ռեալթի»</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455200707" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55 200 707
              </a>
              {' | '}
              <a href="tel:+374558085" className="text-gray-800 hover:text-[#6200ee] no-underline">
                80 85
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/1sq-web.png"
                  alt="ԼԷՄՔՅՈՒ-ԱՐԳՈ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/1sq-web-2.png"
                  alt="ԼԷՄՔՅՈՒ-ԱՐԳՈ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ԱՏԱՐԱԴ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">ԱՏԱՐԱԴ ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Գ. Հովսեփյան 26/15</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37444580606" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 44 58 06 06
              </a>
              {' | '}
              <a href="tel:+37455218332" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55 21 83 32
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/atarad-web.png"
                  alt="ԱՏԱՐԱԴ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/atarad-web-2.png"
                  alt="ԱՏԱՐԱԴ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«Majestic Residence»',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՍԱՏՈՒՐՆԱՎԱՆ» ՍՊԸ</span>[cite: 17]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, Աբովյան, ք. Ծաղկաձոր, փ. Պահլավունյաց 73</span>[cite: 17]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37495200600" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 95 200 600
              </a>[cite: 17]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/saturn-web.png"
                  alt="Majestic Residence 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/saturn-web-2.png"
                  alt="Majestic Residence 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'ԱՄՈՒՐ 21 ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">ԱՄՈՒՐ 21 ՍՊԸ</span>[cite: 18]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, Կոտայքի մարզ, գ. Առինջ, Խ. Աբովյան, 18 փ., 8</span>[cite: 18]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37495064408" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 95 06 44 08
              </a>[cite: 18]
            </p>
          </div>

          {/* Մեկ նկարի սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/constractors/amur1[1][1].jpg"
                alt="ԱՄՈՒՐ 21 ՍՊԸ"
                className="w-full max-w-[400px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«Փիրումյան Շին» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«Փիրումյան Շին» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք. Երևան, Դավթաշեն համայնք, Փիրումյանների փ., 7/6</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37496914141" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 96 91 41 41
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karucapatox-pirumyan-400x400.png"
                  alt="Փիրումյան Շին 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karucapatox-pirumyan-400x400-2.png"
                  alt="Փիրումյան Շին 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'In Town',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">In Town</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Կոտայքի մարզ, Ձրվեժ համայնք, Ձորաղբյուր, Լճափի փ., 1/3</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Վաճառքի պատասխանատու՝</strong>{' '}
              <span className="text-gray-800">«ՊՐԵՄԻՈՒՄ ՌԻԵԼԹԻ»</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37496032303" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 96 03 23 03
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/karlenashen1-web.png"
                  alt="In Town 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karlenashen2-web[1].jpg"
                  alt="In Town 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ (2)',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Կոտայքի մարզ, Նոր Հաճն, գյուղ Քանաքեռավան, Երևանյան խճ. 6, 6/1, 6/3, 6/4, 6/5</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:055200707" className="text-gray-800 hover:text-[#6200ee] no-underline">
                055-200-707
              </a>
              {' | '}
              <a href="tel:041200700" className="text-gray-800 hover:text-[#6200ee] no-underline">
                041-200-700
              </a>[cite: 16]
            </p>
          </div>

          {/* Մեկ նկարի սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Constractors/maninvest.png"
                alt="ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ"
                className="w-full max-w-[400px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Շինարտ Գրուպ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Նազարբեկյան փողոց, 41/1</span>[cite: 15]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37433400410" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 33 400410
              </a>[cite: 15]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Shinart2.png"
                  alt="Շինարտ Գրուպ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Shinart4.png"
                  alt="Շինարտ Գրուպ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Ս.Կ. ԳՐՈՒՊ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">Ս.Կ. ԳՐՈՒՊ ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Գրասենյակի հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Երևան, Մալաթիա, Լենինգադյան 27/6</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37433400410" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 33 400410
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/s.k.group1.jpg"
                  alt="Ս.Կ. ԳՐՈՒՊ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/s.k.group2.jpg"
                  alt="Ս.Կ. ԳՐՈՒՊ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'ԹՈՓ ԲԻԼԴԻՆԳՍ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Երևան Ավան Աշխաբադի փողոց 9/2</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:033583333" className="text-gray-800 hover:text-[#6200ee] no-underline">
                033-583333
              </a>
              {' | '}
              <a href="tel:011253333" className="text-gray-800 hover:text-[#6200ee] no-underline">
                011-253333
              </a>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Կայք՝</strong>{' '}
              <a
                href="https://topbuildings.am"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6200ee] font-semibold underline hover:text-[#4b00b5]"
              >
                topbuildings.am
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/topbuildings1.jpg"
                  alt="ԹՈՓ ԲԻԼԴԻՆԳՍ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/topbuildings.jpg"
                  alt="ԹՈՓ ԲԻԼԴԻՆԳՍ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«Pullman Living and Residences»',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">«Տեխնոտուն» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Երևան, Նորքի այգիներ, փ. 180</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455065055" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55 065 055
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/karucapatox1[1].jpg"
                  alt="Pullman Living and Residences 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/texnotun2[1].jpg"
                  alt="Pullman Living and Residences 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«Միթսթարթ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">«Միթսթարթ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">Կոտայքի մարզ, Նաիրի համայնք, Ձովունի 1-ին փողոց</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455200707" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 55200707
              </a>
              {' | '}
              <a href="tel:+37441200707" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 41200707
              </a>
              {' | '}
              <a href="tel:8085" className="text-gray-800 hover:text-[#6200ee] no-underline">
                8085
              </a>
            </p>
          </div>

          {/* Մեկ նկարի սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/constractors/Untitled[1].png"
                alt="Միթսթարթ ՍՊԸ"
                className="w-full max-w-[600px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Նախագիծ՝</strong>{' '}
              <span className="text-gray-800">High Park</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37491898811" className="text-gray-800 hover:text-[#6200ee] no-underline">
                374 91 898 811
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Երևան, Գ.Հովսեփյան 58/15</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/bulduzer-group-1-web[1].jpg"
                  alt="ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/bulduzer-group-2-web[1].jpg"
                  alt="ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«Կոնստրո» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«Կոնստրո» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:093309111" className="text-gray-800 hover:text-[#6200ee] no-underline">
                093 309 111
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, համայնք Նոր Հաճն, գյուղ Մրգաշեն 1-ին փողոց 2-րդ նրբանցք 3</span>
            </p>

            <div className="pt-2 space-y-1.5">
              <p className="text-gray-800">Վարկը տրամադրվում է՝</p>
              <p className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6200ee] inline-block"></span>
                <a
                  href="#"
                  className="text-[#6200ee] font-bold underline hover:text-[#4b00b5]"
                >
                  Բանկի սեփական ռեսուրսներով
                </a>
                <span className="text-gray-800">:</span>
              </p>
            </div>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/kastro-1[1].jpg"
                  alt="Կոնստրո ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/kastro-2-web[1].jpg"
                  alt="Կոնստրո ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: '«ՌԻՎԵՐ ՍԱՅԴ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՌԻՎԵՐ ՍԱՅԴ» ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37455433330" className="text-gray-800 hover:text-[#6200ee] no-underline">
                374 55 433330
              </a>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Դիլիջան, Սայաթ-Նովայի փ. 67/1 և 69</span>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/karucapatox-Riverside-400x400[1].jpg"
                  alt="ՌԻՎԵՐ ՍԱՅԴ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/karucapatox-Riverside2-400x400[1].jpg"
                  alt="ՌԻՎԵՐ ՍԱՅԴ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
 {
      name: 'ՄԵՏՏԱ ԳՐՈՒՊ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՄԵՏՏԱ ԳՐՈՒՊ» ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Արաբկիր, Հ. Արղության փողոց 15/8, 15/10, 15/11, 15/19</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37444471010" className="text-gray-800 hover:text-[#6200ee] no-underline">
                374 44 471 010
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/metta1-web[1].jpg"
                  alt="ՄԵՏՏԱ ԳՐՈՒՊ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/metta2-web[1].jpg"
                  alt="ՄԵՏՏԱ ԳՐՈՒՊ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: 'Վի Էմ Բիլդինգ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">Վի Էմ Բիլդինգ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Արաբկիր, Մալխասյանց 9/4</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37441101415" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 41 10 14 15
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/viembuilding1%20(008).png"
                  alt="Վի Էմ Բիլդինգ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/viembuilding2.png"
                  alt="Վի Էմ Բիլդինգ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: 'ՍՎ ԵՎ ԳԱ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Արաբկիր, Գ. Ղափանցյան փողոց, 3</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37444777909" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 44777909
              </a>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Website՝</strong>{' '}
              <a
                href="https://art-group.am/hy/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6200ee] font-semibold underline hover:text-[#4b00b5]"
              >
                https://art-group.am/hy/home
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/SV&GA2.jpg"
                  alt="ՍՎ ԵՎ ԳԱ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/SV&GA4.jpg"
                  alt="ՍՎ ԵՎ ԳԱ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: 'Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ (ԷԱ 19/5)',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք.Երևան, Նորք-Մարաշ, Նորք թաղամաս 19/3, 19/4, 19/5, 19/6, 19/7</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37410583006" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 10583006
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/vagharsh1.jpg"
                  alt="Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/vagharsh%202.jpg"
                  alt="Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ (ԷԱ)',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ք.Երևան, Մալաթիա, Լենինգրադյան 29/9</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37477541215" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37477 541215
              </a>
              {' | '}
              <a href="tel:+37496541212" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37496 541212
              </a>
              {' | '}
              <a href="tel:+37410224345" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37410 224345
              </a>
            </p>
          </div>

          {/* Մեկ նկարի սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/Constractors/saf.jpg"
                alt="ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ"
                className="w-full max-w-[400px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Հորիզոն Ինվեստ ՓԲԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Շինարար՝</strong>{' '}
              <span className="text-gray-800">Հորիզոն-95 ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Գրասենյակի հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք․ Երևան, Բուզանդի 99 շենք, բն․ 28</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Նորակառույցի հասցե՝</strong>{' '}
              <span className="text-gray-800">Ֆ. Վերֆելի 40/2</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37477541215" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 77541215
              </a>
              {' | '}
              <a href="tel:+37496541212" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 96541212
              </a>
              {' | '}
              <a href="tel:+37499206080" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 99206080
              </a>
              {' | '}
              <a href="tel:+37410224345" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 10224345
              </a>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/Horizon-Invest-1.jpg"
                  alt="Հորիզոն Ինվեստ ՓԲԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/Horizon-Invest-2[1].jpg"
                  alt="Հորիզոն Ինվեստ ՓԲԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      name: 'Իմպերիալ Քոնսթրաքշն ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Ն.Գոգոլի փողոց, 24/23</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/Imperial_2[1][1].jpg"
                  alt="Իմպերիալ Քոնսթրաքշն ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/Imperial_6[1][1].jpg"
                  alt="Իմպերիալ Քոնսթրաքշն ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: '«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, Աբովյան, գ. Առինջ, Բ թաղամասի 4-րդ փողոց, 2-րդ նրբանցք 6/1 հասցե</span>
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37433940000" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 33 940000
              </a>
              {' | '}
              <a href="tel:+37460535353" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 60 535353
              </a>
            </p>
          </div>

          {/* Մեկ նկարի սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/file_manager/constractors/shin%20service-min.jpg"
                alt="ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ ՍՊԸ"
                className="w-full max-w-[400px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Ջեթ Սեթ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Հ. Աբելյան փողոց, 2/1</span>
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/constractors/JetSet2[1][1].jpg"
                  alt="Ջեթ Սեթ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/JetSet3[1][1].jpg"
                  alt="Ջեթ Սեթ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Մագաս ՍՊԸ (ԷԱ)',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">ՀՀ, ք. Երևան, Գյուրջյան փողոց, 11/5</span>[cite: 15]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37477541215" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37477 541215
              </a>
              {' | '}
              <a href="tel:+37496541212" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37496 541212
              </a>
              {' | '}
              <a href="tel:+37410224345" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +37410 224345
              </a>[cite: 15]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Magas2.png"
                  alt="Մագաս ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Magas6.png"
                  alt="Մագաս ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, համայնք Նոր Հաճն, գյուղ Քանաքեռավան</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37493449744" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 93 44 97 44
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/tes.png"
                  alt="ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/constractors/tesaran2[1]-min[1].jpg"
                  alt="ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
{
      name: '«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ',
      details: (
        <div className="space-y-4">
          <div className="space-y-2.5 text-sm md:text-base">
            <p>
              <strong className="text-[#6200ee] font-bold">Կառուցապատող՝</strong>{' '}
              <span className="text-gray-800">«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հասցե՝</strong>{' '}
              <span className="text-gray-800">Մարզ Կոտայք, համայնք Աբովյան, գյուղ Առինջ, Բ թաղամասի 5-րդ փողոց, 17 հասցե</span>[cite: 16]
            </p>
            <p>
              <strong className="text-[#6200ee] font-bold">Հեռ.՝</strong>{' '}
              <a href="tel:+37433940000" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 33 940000
              </a>
              {' | '}
              <a href="tel:+37460535353" className="text-gray-800 hover:text-[#6200ee] no-underline">
                +374 60 535353
              </a>[cite: 16]
            </p>
          </div>

          {/* Երկու նկարների սպիտակ քարտը */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x sm:divide-gray-200">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/shin-1-web%20(1).png"
                  alt="ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ ՍՊԸ 1"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex justify-center items-center sm:pl-4">
                <img
                  src="https://www.evoca.am/file_manager/Constractors/shin-1-web%20(1).png"
                  alt="ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ ՍՊԸ 2"
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-700 flex items-center no-underline text-gray-500">
              <Home className="w-4 h-4" />
            </Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">Կառուցապատողներ</span>
          </div>

          <div className="bg-white rounded-[30px] p-8 md:p-14 shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Կառուցապատողներ
            </h1>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10">
              <p>
                Ձեռք բերեք Ձեր նորաոճ և հարմարավետ բնակարանը <span className="text-[#6200ee] font-semibold">Evocabank</span>-ի հետ[cite: 9]:
              </p>
              <p>
                Ծանոթացեք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների ցանկին և անհրաժեշտ տեղեկատվությանը ստորև[cite: 9].
              </p>
            </div>

            <h2 className="text-lg md:text-xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>

            {/* Բացվող-փակվող ցանկ (Accordion) */}
            <div className="space-y-3 max-w-4xl">
              {developersList.map((dev, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-purple-400 bg-purple-50/20 shadow-sm'
                        : 'border-purple-200/80 bg-white hover:border-purple-400'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 flex items-center space-x-4 text-left bg-transparent border-none cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-5 h-5 text-[#6200ee] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                      <span className="text-sm md:text-base font-bold text-gray-800">
                        {dev.name}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-2 pl-15 text-sm md:text-base text-gray-600 border-t border-purple-100 leading-relaxed">
                        {dev.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}