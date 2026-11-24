import React, { useState } from 'react';
import { Clock, MapPin, Phone, SlidersHorizontal, ChevronDown, Banknote } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function BranchesPage() {
  const [activeTab, setActiveTab] = useState('branches'); // 'branches' | 'atms' | 'terminals'
  const [selectedCity, setSelectedCity] = useState('Երևան');
  const [selectedDistrict, setSelectedDistrict] = useState('Համայնք');

  // Բոլոր տեղանքների ամբողջական տվյալները՝ ԱՌԱՆՑ նկարների (thumbnails)
  const locationsData = {
    branches: [
      {
        id: 1,
        name: "Գլխամասային գրասենյակ",
        hours: "09:30 - 17:00",
        address: "Հանրապետության 44/2",
        mapQuery: "Hanrapetutyan 44/2, Yerevan, Armenia",
        phone: "+374 10 60 55 55, +374 98 20 55 55, +374 99 60 55 55",
        district: "Կենտրոն"
      },
      {
        id: 2,
        name: "Evoca Premium Branch",
        hours: "Երկուշաբթիից ուրբաթ՝ 10:00 - 18:00",
        address: "ՀՀ, ք. Երևան, Չայկովսկու 10, 0052",
        mapQuery: "Tchaikovsky 10, Yerevan, Armenia",
        phone: "8444",
        district: "Կենտրոն"
      },
      {
        id: 3,
        name: "«Ազատության 12» մասնաճյուղ",
        hours: "09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00",
        address: "Ազատության 12",
        mapQuery: "Azatutyan Ave 12, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Արաբկիր"
      },
      {
        id: 4,
        name: "«Թումանյան» մասնաճյուղ",
        hours: "09:30 - 21:30, Շաբաթ՝ 10:00 - 17:30",
        address: "Թումանյան 15",
        mapQuery: "Tumanyan 15, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Կենտրոն"
      },
      {
        id: 5,
        name: "«Կասյան» մասնաճյուղ",
        hours: "09:30 - 17:00",
        address: "Վազգեն Առաջին Վեհափառի 5",
        mapQuery: "Vazgen I Vehapar 5, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Արաբկիր"
      },
      {
        id: 6,
        name: "«Գարեգին Նժդեհ» մասնաճյուղ",
        hours: "09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00",
        address: "Գարեգին Նժդեհ 9/45",
        mapQuery: "Garegin Nzhdeh 9/45, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Շենգավիթ"
      },
      {
        id: 7,
        name: "«Դավթաշեն» մասնաճյուղ",
        hours: "09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00",
        address: "Տիգրան Պետրոսյան 32/8",
        mapQuery: "Tigran Petrosyan 32/8, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Դավթաշեն"
      },
      {
        id: 8,
        name: "«Էրեբունի» մասնաճյուղ",
        hours: "09:30 - 17:00 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)",
        address: "Գաջեգործների 76",
        mapQuery: "Gajegortsneri 76, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Էրեբունի"
      },
      {
        id: 9,
        name: "«Կիևյան» մասնաճյուղ",
        hours: "09:30 - 17:00",
        address: "Կիևյան 11ա",
        mapQuery: "Kievyan 11a, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Արաբկիր"
      },
      {
        id: 10,
        name: "«Մալաթիա» մասնաճյուղ",
        hours: "09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00",
        address: "Անդրանիկի 134/8",
        mapQuery: "Andranik 134/8, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Մալաթիա-Սեբաստիա"
      },
      {
        id: 11,
        name: "«Նոր Նորք» մասնաճյուղ",
        hours: "09:30 - 17:00",
        address: "Գայի պողոտա 14/9",
        mapQuery: "Gai Ave 14/9, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Նոր Նորք"
      },
      {
        id: 12,
        name: "«Երևան Մոլ» մասնաճյուղ",
        hours: "Երկուշաբթիից կիրակի՝ 10:30 - 21:30 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)",
        address: "Արշակունյաց պող., 34/3",
        mapQuery: "Arshakunyats Ave 34/3, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Շենգավիթ"
      },
      {
        id: 13,
        name: "«Հանրապետության» մասնաճյուղ",
        hours: "Երկուշաբթիից կիրակի՝ 10:30 - 21:30 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)",
        address: "Հանրապետության 59",
        mapQuery: "Hanrapetutyan 59, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Կենտրոն"
      },
      {
        id: 14,
        name: "«Աջափնյակ» մասնաճյուղ",
        hours: "Երկուշաբթիից ուրբաթ՝ 9:30 - 17:00",
        address: "Աբելյան 2/1",
        mapQuery: "Abelyan 2/1, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Աջափնյակ"
      },
      {
        id: 15,
        name: "«Պարոնյան» մասնաճյուղ",
        hours: "09:30 - 17:00",
        address: "Պարոնյան 15/3",
        mapQuery: "Paronyan 15/3, Yerevan, Armenia",
        phone: "+374 10 60 55 55",
        district: "Կենտրոն"
      }
    ],
    atms: [
      {
        id: 101,
        address: "Տիգրան Մեծի 15/1",
        mapQuery: "Tigran Mets Ave 15/1, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 102,
        address: "Կիևյան 11ա 64",
        mapQuery: "Kievyan 11a, Yerevan, Armenia",
        cashIn: false,
        district: "Արաբկիր"
      },
      {
        id: 103,
        address: "Խորենացի 47",
        mapQuery: "Khorenatsi 47, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 104,
        address: "Արշակունյաց 48/5",
        mapQuery: "Arshakunyats Ave 48/5, Yerevan, Armenia",
        cashIn: false,
        district: "Շենգավիթ"
      },
      {
        id: 105,
        address: "Փավստոս Բուզանդի 45",
        mapQuery: "Pavstos Buzand 45, Yerevan, Armenia",
        cashIn: true,
        district: "Կենտրոն"
      },
      {
        id: 106,
        address: "Մոնթե Մելքոնյան 50/1",
        mapQuery: "Monte Melkonyan 50/1, Yerevan, Armenia",
        cashIn: false,
        district: "Մալաթիա-Սեբաստիա"
      },
      {
        id: 107,
        address: "Տիգրան Պետրոսյան 30/30",
        mapQuery: "Tigran Petrosyan 30/30, Yerevan, Armenia",
        cashIn: false,
        district: "Դավթաշեն"
      },
      {
        id: 108,
        address: "Վերին Անտառային 131/34",
        mapQuery: "Verin Antarayin 131/34, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 109,
        address: "Ազատության 6/67",
        mapQuery: "Azatutyan Ave 6/67, Yerevan, Armenia",
        cashIn: true,
        district: "Արաբկիր"
      },
      {
        id: 110,
        address: "Մանանդյան 33/3",
        mapQuery: "Manandyan 33/3, Yerevan, Armenia",
        cashIn: false,
        district: "Շենգավիթ"
      },
      {
        id: 111,
        address: "Արշակունյաց 34",
        mapQuery: "Arshakunyats Ave 34, Yerevan, Armenia",
        cashIn: false,
        district: "Շենգավիթ"
      },
      {
        id: 112,
        address: "Մամիկոնյանց, 40",
        mapQuery: "Mamikonyants 40, Yerevan, Armenia",
        cashIn: false,
        district: "Արաբկիր"
      },
      {
        id: 113,
        address: "Դավթաշեն 4-րդ թաղ. 26/1",
        mapQuery: "Davtashen 4th district 26/1, Yerevan, Armenia",
        cashIn: false,
        district: "Դավթաշեն"
      },
      {
        id: 114,
        address: "Կոմիտաս 46",
        mapQuery: "Komitas Ave 46, Yerevan, Armenia",
        cashIn: false,
        district: "Արաբկիր"
      },
      {
        id: 115,
        address: "Կոմիտաս 43",
        mapQuery: "Komitas Ave 43, Yerevan, Armenia",
        cashIn: false,
        district: "Արաբկիր"
      },
      {
        id: 116,
        address: "Հյուսիսային պողոտա 1",
        mapQuery: "Northern Ave 1, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 117,
        address: "Բյուզանդ 97/2",
        mapQuery: "Buzand 97/2, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 118,
        address: "Տ. Մեծ 47/1",
        mapQuery: "Tigran Mets Ave 47/1, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 119,
        address: "Արգիշտի 7/3",
        mapQuery: "Argishti 7/3, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 120,
        address: "Իսակով 1/2",
        mapQuery: "Isakov Ave 1/2, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 121,
        address: "Հասրաթյան 4/1",
        mapQuery: "Hasratyan 4/1, Yerevan, Armenia",
        cashIn: false,
        district: "Քանաքեռ-Զեյթուն"
      },
      {
        id: 122,
        address: "Աբելյան 2/1-3",
        mapQuery: "Abelyan 2/1, Yerevan, Armenia",
        cashIn: false,
        district: "Աջափնյակ"
      },
      {
        id: 123,
        address: "Արտեմ Միկոյան 15",
        mapQuery: "Artem Mikoyan 15, Yerevan, Armenia",
        cashIn: false,
        district: "Ավան"
      },
      {
        id: 124,
        address: "Արգիշտի 11/3",
        mapQuery: "Argishti 11/3, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 125,
        address: "Մաշտոց 40",
        mapQuery: "Mashtots Ave 40, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      },
      {
        id: 126,
        address: "Գարեգին Նժդեհի 9/45",
        mapQuery: "Garegin Nzhdeh 9/45, Yerevan, Armenia",
        cashIn: false,
        district: "Շենգավիթ"
      },
      {
        id: 127,
        address: "Ծարավ Աղբյուր 55/6",
        mapQuery: "Tsarav Aghbyur 55/6, Yerevan, Armenia",
        cashIn: false,
        district: "Ավան"
      },
      {
        id: 128,
        address: "Նորաշեն 21/2",
        mapQuery: "Norashen 21/2, Yerevan, Armenia",
        cashIn: false,
        district: "Շենգավիթ"
      },
      {
        id: 129,
        address: "Փիրումյանների 5",
        mapQuery: "Pirumyanneri 5, Yerevan, Armenia",
        cashIn: false,
        district: "Կենտրոն"
      }
    ],
    terminals: [
      {
        id: 201,
        address: "Հանրապետության 44/2",
        mapQuery: "Hanrapetutyan 44/2, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 202,
        address: "Ադմիրալ Իսակով 9/2",
        mapQuery: "Admiral Isakov Ave 9/2, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 203,
        address: "Պռոշյան 2/1",
        mapQuery: "Proshyan 2/1, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 204,
        address: "Սմբատ Զորավարի փ. 11/1",
        mapQuery: "Smbat Zoravar 11/1, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 205,
        address: "Հակոբ Հակոբյան 8/2 - 13",
        mapQuery: "Hakob Hakobyan 8/2, Yerevan, Armenia",
        district: "Արաբկիր",
        hours: "24/7"
      },
      {
        id: 206,
        address: "Շերամի 77/53",
        mapQuery: "Sheram 77/53, Yerevan, Armenia",
        district: "Մալաթիա-Սեբաստիա",
        hours: "24/7"
      },
      {
        id: 207,
        address: "Ծարավ Աղբյուր 55/15",
        mapQuery: "Tsarav Aghbyur 55/15, Yerevan, Armenia",
        district: "Ավան",
        hours: "24/7"
      },
      {
        id: 208,
        address: "Չեխովի 52/26",
        mapQuery: "Chekhov 52/26, Yerevan, Armenia",
        district: "Շենգավիթ",
        hours: "24/7"
      },
      {
        id: 209,
        address: "Լիովյան 14/1",
        mapQuery: "Liovyan 14/1, Yerevan, Armenia",
        district: "Նոր Նորք",
        hours: "24/7"
      },
      {
        id: 210,
        address: "Ադոնցի փողոց 19/8 5-րդ մ/շ 105 տար.",
        mapQuery: "Adonts 19/8, Yerevan, Armenia",
        district: "Արաբկիր",
        hours: "24/7"
      },
      {
        id: 211,
        address: "Վիլնյուս 41",
        mapQuery: "Vilnius 41, Yerevan, Armenia",
        district: "Նոր Նորք",
        hours: "24/7"
      },
      {
        id: 212,
        address: "Արշակունյաց 48/5",
        mapQuery: "Arshakunyats Ave 48/5, Yerevan, Armenia",
        district: "Շենգավիթ",
        hours: "24/7"
      },
      {
        id: 213,
        address: "Տիգրան Մեծ 47/1",
        mapQuery: "Tigran Mets Ave 47/1, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 214,
        address: "Ծարավ Աղբյուր 55/6",
        mapQuery: "Tsarav Aghbyur 55/6, Yerevan, Armenia",
        district: "Ավան",
        hours: "24/7"
      },
      {
        id: 215,
        address: "Արգիշտի 7/3",
        mapQuery: "Argishti 7/3, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 216,
        address: "Հանրապետության 67/1",
        mapQuery: "Hanrapetutyan 67/1, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 217,
        address: "Տիչինա 136",
        mapQuery: "Tichina 136, Yerevan, Armenia",
        district: "Մալաթիա-Սեբաստիա",
        hours: "24/7"
      },
      {
        id: 218,
        address: "Պուշկին 35",
        mapQuery: "Pushkin 35, Yerevan, Armenia",
        district: "Կենտրոն",
        hours: "24/7"
      },
      {
        id: 219,
        address: "Աբելյան 2/1-3",
        mapQuery: "Abelyan 2/1-3, Yerevan, Armenia",
        district: "Աջափնյակ",
        hours: "09:30 - 17:00"
      },
      {
        id: 220,
        address: "Արամ Խաչատրյան 3",
        mapQuery: "Aram Khachatryan 3, Yerevan, Armenia",
        district: "Արաբկիր",
        hours: "24/7"
      }
    ]
  };

  const currentList = locationsData[activeTab].filter((item) => {
    if (selectedDistrict !== 'Համայնք' && item.district !== selectedDistrict) {
      return false;
    }
    return true;
  });

  const [selectedLocation, setSelectedLocation] = useState(locationsData.branches[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedDistrict('Համայնք');
    if (locationsData[tab].length > 0) {
      setSelectedLocation(locationsData[tab][0]);
    }
  };

  const CardBrands = () => (
    <div className="pt-1">
      <p className="text-xs text-gray-600 mb-2">Սպասարկում է՝</p>
      <div className="flex items-center space-x-3 select-none">
        <span className="font-extrabold text-sm tracking-tight">
          <span className="text-[#0066FF]">arc</span>
          <span className="text-[#8CC63F]">a</span>
        </span>
        <span className="font-black italic text-sm tracking-wider text-[#1A1F71]">
          VISA
        </span>
        <span className="inline-flex items-center">
          <span className="w-4 h-4 rounded-full bg-[#EB001B] inline-block"></span>
          <span className="w-4 h-4 rounded-full bg-[#F79E1B] -ml-2 inline-block opacity-90"></span>
        </span>
        <span className="inline-flex items-center bg-[#0077B6] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
          UnionPay
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
            Բանկի հասցեները և աշխատաժամերը
          </h1>

          <div className="flex items-center space-x-8 border-b border-gray-200 text-sm md:text-base overflow-x-auto">
            <button
              onClick={() => handleTabChange('branches')}
              className={`pb-3 font-semibold whitespace-nowrap transition border-b-2 cursor-pointer ${
                activeTab === 'branches'
                  ? 'border-[#6400DC] text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Մասնաճյուղեր
            </button>
            <button
              onClick={() => handleTabChange('atms')}
              className={`pb-3 font-semibold whitespace-nowrap transition border-b-2 cursor-pointer ${
                activeTab === 'atms'
                  ? 'border-[#6400DC] text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Բանկոմատներ
            </button>
            <button
              onClick={() => handleTabChange('terminals')}
              className={`pb-3 font-semibold whitespace-nowrap transition border-b-2 cursor-pointer ${
                activeTab === 'terminals'
                  ? 'border-[#6400DC] text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Արտարժույթի փոխանակման տերմինալներ
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="flex flex-col lg:flex-row border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-[680px]">
            
            {/* Ձախ կողմ՝ Սքրոլվող ցանկ (առանց նկարների) */}
            <div className="w-full lg:w-[380px] bg-white border-b lg:border-b-0 lg:border-r border-gray-200 overflow-y-auto divide-y divide-gray-200 shrink-0 h-1/2 lg:h-full">
              {currentList.length > 0 ? (
                currentList.map((item) => {
                  const isSelected = selectedLocation?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedLocation(item)}
                      className={`p-5 cursor-pointer transition select-none ${
                        isSelected
                          ? 'bg-purple-50/70 border-l-4 border-l-[#6400DC]'
                          : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                      }`}
                    >
                      {activeTab === 'branches' ? (
                        <>
                          <h3 className={`text-base font-bold mb-3 transition ${isSelected ? 'text-[#6400DC]' : 'text-gray-900'}`}>
                            {item.name}
                          </h3>
                          <div className="space-y-2.5 text-xs md:text-sm text-gray-600 pl-1">
                            <div className="flex items-start space-x-2.5">
                              <Clock size={16} className="text-purple-400 shrink-0 mt-0.5" />
                              <span>{item.hours}</span>
                            </div>
                            <div className="flex items-start space-x-2.5">
                              <MapPin size={16} className="text-purple-400 shrink-0 mt-0.5" />
                              <span>{item.address}</span>
                            </div>
                            <div className="flex items-start space-x-2.5">
                              <Phone size={16} className="text-purple-400 shrink-0 mt-0.5" />
                              <span>{item.phone}</span>
                            </div>
                          </div>
                        </>
                      ) : activeTab === 'atms' ? (
                        <div className="space-y-2.5 pl-1">
                          <div className="flex items-center space-x-2">
                            <MapPin size={17} className="text-[#6400DC] shrink-0" />
                            <h3 className={`text-sm md:text-base font-bold transition ${isSelected ? 'text-[#6400DC]' : 'text-gray-900'}`}>
                              {item.address}
                            </h3>
                          </div>

                          {item.cashIn && (
                            <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-700 pl-0.5">
                              <Banknote size={16} className="text-purple-400 shrink-0" />
                              <span>Կանխիկի մուտք՝ Այո</span>
                            </div>
                          )}

                          <CardBrands />
                        </div>
                      ) : (
                        <div className="space-y-2.5 pl-1">
                          <div className="flex items-center space-x-2">
                            <MapPin size={17} className="text-[#6400DC] shrink-0" />
                            <h3 className={`text-sm md:text-base font-bold transition ${isSelected ? 'text-[#6400DC]' : 'text-gray-900'}`}>
                              {item.address}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 pl-0.5">
                            <Clock size={16} className="text-purple-400 shrink-0" />
                            <span>Ժամեր՝ {item.hours}</span>
                          </div>
                          <p className="text-[11px] text-purple-600 font-semibold pl-6">Արտարժույթի փոխանակման տերմինալ</p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-500 text-sm">
                  Տվյալ համայնքում հասցե չի գտնվել։
                </div>
              )}
            </div>

            {/* Աջ կողմ՝ Ինտերակտիվ քարտեզ և ֆիլտրեր */}
            <div className="relative flex-grow h-1/2 lg:h-full bg-gray-100">
              
              {/* Վերևի ֆիլտրերի վահանակը */}
              <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                
                {/* Ձախ կողմի Ֆիլտր կոճակ */}
                <button className="pointer-events-auto flex items-center space-x-2 bg-white px-4 py-2.5 rounded-xl shadow-md border border-gray-100 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition cursor-pointer">
                  <SlidersHorizontal size={16} className="text-[#6400DC]" />
                  <span>Ֆիլտր</span>
                </button>

                {/* Աջ կողմի Քաղաք և Համայնք ընտրիչներ */}
                <div className="pointer-events-auto flex items-center space-x-2.5">
                  <div className="relative">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="appearance-none bg-white pl-4 pr-9 py-2.5 rounded-xl shadow-md border border-gray-100 text-sm font-medium text-gray-800 focus:outline-none cursor-pointer"
                    >
                      <option value="Երևան">Երևան</option>
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6400DC] pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={selectedDistrict}
                      onChange={(e) => {
                        const dist = e.target.value;
                        setSelectedDistrict(dist);
                        const filtered = locationsData[activeTab].filter(
                          (item) => dist === 'Համայնք' || item.district === dist
                        );
                        if (filtered.length > 0) {
                          setSelectedLocation(filtered[0]);
                        }
                      }}
                      className="appearance-none bg-white pl-4 pr-9 py-2.5 rounded-xl shadow-md border border-gray-100 text-sm font-medium text-gray-800 focus:outline-none cursor-pointer"
                    >
                      <option value="Համայնք">Համայնք</option>
                      <option value="Կենտրոն">Կենտրոն</option>
                      <option value="Արաբկիր">Արաբկիր</option>
                      <option value="Շենգավիթ">Շենգավիթ</option>
                      <option value="Դավթաշեն">Դավթաշեն</option>
                      <option value="Էրեբունի">Էրեբունի</option>
                      <option value="Մալաթիա-Սեբաստիա">Մալաթիա-Սեբաստիա</option>
                      <option value="Նոր Նորք">Նոր Նորք</option>
                      <option value="Աջափնյակ">Աջափնյակ</option>
                      <option value="Քանաքեռ-Զեյթուն">Քանաքեռ-Զեյթուն</option>
                      <option value="Ավան">Ավան</option>
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6400DC] pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Ընտրված տեղանքի նշիչի քարտը քարտեզի ներքևի ձախ անկյունում */}
              {selectedLocation && (
                <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-xs px-4 py-3 rounded-xl shadow-lg border border-purple-100 max-w-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#6400DC] animate-ping"></span>
                    <p className="text-xs font-bold text-[#6400DC]">
                      {selectedLocation.name || (activeTab === 'atms' ? 'Բանկոմատ' : 'Տերմինալ')}
                    </p>
                  </div>
                  <p className="text-xs text-gray-700 font-medium mt-1">{selectedLocation.address}</p>
                  {selectedLocation.hours && (
                    <p className="text-[11px] text-gray-500 mt-0.5">Ժամեր՝ {selectedLocation.hours}</p>
                  )}
                </div>
              )}

              {/* Դինամիկ Google Maps Iframe */}
              <iframe
                key={selectedLocation?.id}
                title="Evocabank Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  selectedLocation ? selectedLocation.mapQuery : 'Yerevan, Armenia'
                )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              ></iframe>

            </div>

          </div>
        </div>

                
      </main>

      <Footer />

    </div>
  );
}