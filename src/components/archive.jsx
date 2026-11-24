import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  
  // Պահում ենք բացված ակորդեոնների վիճակը ըստ ինդեքսների
  const [openSections, setOpenSections] = useState({ 0: true });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // 6 անհրաժեշտ տեղեկատվության բաժինները՝ իրենց համապատասխան բովանդակությամբ
  const archiveSections = [
    {
      title: "Կանխիկ մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր",
      content: (
        <div className="space-y-4">
          <h4 className="font-bold text-purple-900">2024</h4>
          <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
            <span className="text-purple-800 font-medium text-xs md:text-sm">
              Կանխիկ մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր (ՌԴ ռուբլի RUB, Բրիտանական ֆունտ GBP, Շվեյցարական ֆրանկ CHF)
            </span>
            <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ",
      content: (
        <div className="p-4 space-y-6 border-t border-purple-100 bg-white">
  <div>
    <h4 className="font-bold text-purple-900 mb-2">2025</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          16.05.2025- Համալիր բանկային ծառայությունների մատուցման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2023</h4>
    <div className="space-y-2">
      {[
        "01.11.2023- Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "10.04.2023 - Համալիր բանկային ծառայությունների մատուցման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2022</h4>
    <div className="space-y-2">
      {[
        "21.11.2022 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "11.07.2022 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "20.06.2022 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "11.04.2022 - Համալիր բանկային ծառայությունների մատուցման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2021</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          12.07.2021 - Համալիր բանկային ծառայությունների մատուցման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2020</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          01.05.2020 - Համալիր բանկային ծառայությունների մատուցման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2018</h4>
    <div className="space-y-2">
      {[
        "23.06.2018 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "08.05.2018 - Համալիր բանկային ծառայությունների մատուցման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2017</h4>
    <div className="space-y-2">
      {[
        "30.09.2017 - Համալիր բանկային ծառայությունների մատուցման պայմաններ",
        "30.06.2017 - Համալիր բանկային ծառայությունների մատուցման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>
</div>
      )
    },
    {
      title: "Վարկավորման պայմաններ և սակագներ",
      content: (
        <div className="p-4 space-y-6 border-t border-purple-100 bg-white">
  <div>
    <h4 className="font-bold text-purple-900 mb-2">2026</h4>
    <div className="space-y-2">
      {[
        "21.08.2026 - Վարկավորման պայմաններ և սակագներ",
        "15.07.2026 - Վարկավորման պայմաններ և սակագներ",
        "01.07.2026 - Վարկավորման պայմաններ և սակագներ",
        "09.06.2026 - Վարկավորման պայմաններ և սակագներ",
        "06.04.2026 - Վարկավորման պայմաններ և սակագներ",
        "16.03.2026 - Վարկավորման պայմաններ և սակագներ",
        "06.03.2026 - Վարկավորման պայմաններ և սակագներ",
        "18.02.2026 - Վարկավորման պայմաններ և սակագներ",
        "02.02.2026 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2025</h4>
    <div className="space-y-2">
      {[
        "23.12.2025 - Վարկավորման պայմաններ և սակագներ",
        "28.11.2025 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2024</h4>
    <div className="space-y-2">
      {[
        "22.02.2024 - Վարկավորման պայմաններ և սակագներ",
        "22.01.2024 - Վարկավորման պայմաններ և սակագներ",
        "03.01.2024 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2023</h4>
    <div className="space-y-2">
      {[
        "09.10.2023 - Վարկավորման պայմաններ և սակագներ",
        "09.10.2023 - Վարկավորման պայմաններ և սակագներ",
        "25.09.2023 - Վարկավորման պայմաններ և սակագներ",
        "18.09.2023 - Վարկավորման պայմաններ և սակագներ",
        "18.09.2023 - Վարկավորման պայմաններ և սակագներ",
        "04.09.2023 - Վարկավորման պայմաններ և սակագներ",
        "28.08.2023 - Վարկավորման պայմաններ և սակագներ",
        "14.07.2023 - Վարկավորման պայմաններ և սակագներ",
        "30.06.2023 - Վարկավորման պայմաններ և սակագներ",
        "15.06.2023 - Վարկավորման պայմաններ և սակագներ",
        "14.05.2023 - Վարկավորման պայմաններ և սակագներ",
        "14.05.2023 - Վարկավորման պայմաններ և սակագներ",
        "24.03.2023 - Վարկավորման պայմաններ և սակագներ",
        "24.03.2023 - Վարկավորման պայմաններ և սակագներ",
        "14.03.2023 - Վարկավորման պայմաններ և սակագներ",
        "24.02.2023 - Վարկավորման պայմաններ և սակագներ",
        "20.01.2023 - Վարկավորման պայմաններ և սակագներ",
        "12.12.2022 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2022</h4>
    <div className="space-y-2">
      {[
        "25.11.2022 - Վարկավորման պայմաններ և սակագներ",
        "21.11.2022 - Վարկավորման պայմաններ և սակագներ",
        "14.11.2022 - Վարկավորման պայմաններ և սակագներ",
        "25.10.2022 - Վարկավորման պայմաններ և սակագներ",
        "18.10.2022 - Վարկավորման պայմաններ և սակագներ",
        "26.09.2022 - Վարկավորման պայմաններ և սակագներ",
        "01.09.2022 - Վարկավորման պայմաններ և սակագներ",
        "15.08.2022 - Վարկավորման պայմաններ և սակագներ",
        "01.08.2022 - Վարկավորման պայմաններ և սակագներ",
        "11.07.2022 - Վարկավորման պայմաններ և սակագներ",
        "20.06.2022 - Վարկավորման պայմաններ և սակագներ",
        "01.06.2022 - Վարկավորման պայմաններ և սակագներ",
        "18.05.2022 - Վարկավորման պայմաններ և սակագներ",
        "14.04.2022 - Վարկավորման պայմաններ և սակագներ",
        "11.04.2022 - Վարկավորման պայմաններ և սակագներ",
        "23.03.2022 - Վարկավորման պայմաններ և սակագներ",
        "04.04.2022 - Վարկավորման պայմաններ և սակագներ",
        "16.03.2022 - Վարկավորման պայմաններ և սակագներ",
        "01.03.2022 - Վարկավորման պայմաններ և սակագներ",
        "14.02.2022 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2021</h4>
    <div className="space-y-2">
      {[
        "20.12.2021 - Վարկավորման պայմաններ և սակագներ",
        "15.12.2021 - Վարկավորման պայմաններ և սակագներ",
        "16.09.2021 - Վարկավորման պայմաններ և սակագներ",
        "16.08.2021 - Վարկավորման պայմաններ և սակագներ",
        "12.07.2021 - Վարկավորման պայմաններ և սակագներ",
        "01.06.2021 - Վարկավորման պայմաններ և սակագներ",
        "17.05.2021 - Վարկավորման պայմաններ և սակագներ",
        "10.05.2021 - Վարկավորման պայմաններ և սակագներ",
        "05.04.2021 - Վարկավորման պայմաններ և սակագներ",
        "15.02.2021 - Վարկավորման պայմաններ և սակագներ",
        "08.02.2021 - Վարկավորման պայմաններ և սակագներ",
        "01.02.2021 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2020</h4>
    <div className="space-y-2">
      {[
        "01.11.2020 - Վարկավորման պայմաններ և սակագներ",
        "13.10.2020 - Վարկավորման պայմաններ և սակագներ",
        "17.08.2020 - Վարկավորման պայմաններ և սակագներ",
        "03.08.2020 - Վարկավորման պայմաններ և սակագներ",
        "06.07.2020 - Վարկավորման պայմաններ և սակագներ",
        "24.06.2020 - Վարկավորման պայմաններ և սակագներ",
        "09.06.2020 - Վարկավորման պայմաններ և սակագներ",
        "07.05.2020 - Վարկավորման պայմաններ և սակագներ",
        "27.04.2020 - Վարկավորման պայմաններ և սակագներ",
        "25.03.2020 - Վարկավորման պայմաններ և սակագներ",
        "16.03.2020 - Վարկավորման պայմաններ և սակագներ",
        "01.03.2020 - Վարկավորման պայմաններ և սակագներ",
        "20.01.2020 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2019</h4>
    <div className="space-y-2">
      {[
        "09.12.2019 - Վարկավորման պայմաններ և սակագներ",
        "04.12.2019 - Վարկավորման պայմաններ և սակագներ",
        "22.11.2019 - Վարկավորման պայմաններ և սակագներ",
        "05.11.2019 - Վարկավորման պայմաններ և սակագներ",
        "01.11.2019 - Վարկավորման պայմաններ և սակագներ",
        "01.10.2019 - Վարկավորման պայմաններ և սակագներ",
        "01.09.2019 - Վարկավորման պայմաններ և սակագներ",
        "19.07.2019 - Վարկավորման պայմաններ և սակագներ",
        "08.07.2019 - Վարկավորման պայմաններ և սակագներ",
        "03.06.2019 - Վարկավորման պայմաններ և սակագներ",
        "27.05.2019 - Վարկավորման պայմաններ և սակագներ",
        "13.05.2019 - Վարկավորման պայմաններ և սակագներ",
        "25.04.2019 - Վարկավորման պայմաններ և սակագներ",
        "01.04.2019 - Վարկավորման պայմաններ և սակագներ",
        "04.03.2019 - Վարկավորման պայմաններ և սակագներ",
        "25.02.2019 - Վարկավորման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2018</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          26.11.2018 - Վարկավորման պայմաններ և սակագներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>
</div>
      )
    },
    {
      title: "Ավանդների ներգրավման պահմաններ և սակագներ",
      content: (
        <div className="p-4 space-y-6 border-t border-purple-100 bg-white">
  <div>
    <h4 className="font-bold text-purple-900 mb-2">2026</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          09.06.2026 - Ավանդների ներգրավման պայմաններ և սակագներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2022</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          01.02.2022 - Ավանդների ներգրավման պայմաններ և սակագներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2021</h4>
    <div className="space-y-2">
      {[
        "01.09.2021 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "17.05.2021 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "10.05.2021 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "05.04.2021 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "01.02.2021 - Ավանդների ներգրավման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2020</h4>
    <div className="space-y-2">
      {[
        "25.03.2020 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "20.02.2020 - Ավանդների ներգրավման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2019</h4>
    <div className="space-y-2">
      {[
        "20.12.2019 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "01.07.2019 - Ավանդների ներգրավման պայմաններ և սակագներ",
        "11.02.2019 - Ավանդների ներգրավման պայմաններ և սակագներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2018</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          05.06.2018 - Ավանդների ներգրավման պայմաններ և սակագներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>
</div>
      )
    },
    {
      title: "Վճարային քարտերի տրամադրման և օգտագործման պայմաններ",
      content: (
       <div className="p-4 space-y-6 border-t border-purple-100 bg-white">
  <div>
    <h4 className="font-bold text-purple-900 mb-2">2022</h4>
    <div className="space-y-2">
      {[
        "21.11.2022 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ",
        "25.05.2022 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2021</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          09.02.2021 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2020</h4>
    <div className="space-y-2">
      {[
        "31.01.2020 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ",
        "20.01.2020 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2019</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          01.07.2019 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2018</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          16.07.2018 - Վճարային քարտերի տրամադրման և օգտագործման պայմաններ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>
</div>
      )
    },
    {
      title: "Սակագներ և դրույքներ",
      content: (
       <div className="p-4 space-y-6 border-t border-purple-100 bg-white">
  <div>
    <h4 className="font-bold text-purple-900 mb-2">2026</h4>
    <div className="space-y-2">
      {[
        "15.09.2026 - Սակագներ և դրույքներ",
        "28.08.2026 - Սակագներ և դրույքներ",
        "13.07.2026 - Սակագներ և դրույքներ",
        "10.07.2026 - Սակագներ և դրույքներ",
        "01.07.2026 - Սակագներ և դրույքներ",
        "01.06.2026 - Սակագներ և դրույքներ",
        "15.05.2026 - Սակագներ և դրույքներ",
        "15.04.2026 - Սակագներ և դրույքներ",
        "30.03.2026 - Սակագներ և դրույքներ",
        "01.02.2026 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2025</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          16.12.2025 - Սակագներ և դրույքներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2024</h4>
    <div className="space-y-2">
      {[
        "30.09.2024 - Սակագներ և դրույքներ",
        "01.01.2024 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2023</h4>
    <div className="space-y-2">
      {[
        "01.11.2023 - Սակագներ և դրույքներ",
        "08.09.2023 - Սակագներ և դրույքներ",
        "14.08.2023 - Սակագներ և դրույքներ",
        "03.07.2023 - Սակագներ և դրույքներ",
        "01.06.2023 - Սակագներ և դրույքներ",
        "13.04.2023 - Սակագներ և դրույքներ",
        "27.03.2023 - Սակագներ և դրույքներ",
        "17.02.2023 - Սակագներ և դրույքներ",
        "01.02.2023 - Սակագներ և դրույքներ",
        "16.11.2022 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2022</h4>
    <div className="space-y-2">
      {[
        "30.08.2022 - Սակագներ և դրույքներ",
        "08.08.2022 - Սակագներ և դրույքներ",
        "01.08.2022 - Սակագներ և դրույքներ",
        "11.07.2022 - Սակագներ և դրույքներ",
        "13.06.2022 - Սակագներ և դրույքներ",
        "01.06.2022 - Սակագներ և դրույքներ",
        "13.05.2022 - Սակագներ և դրույքներ",
        "04.04.2022 - Սակագներ և դրույքներ",
        "04.04.2022 - Սակագներ և դրույքներ",
        "04.04.2022 - Սակագներ և դրույքներ",
        "21.03.2022 - Սակագներ և դրույքներ",
        "09.03.2022 - Սակագներ և դրույքներ",
        "27.02.2022 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2021</h4>
    <div className="space-y-2">
      {[
        "24.08.2021 - Սակագներ և դրույքներ",
        "22.06.2021 - Սակագներ և դրույքներ",
        "31.05.2021 - Սակագներ և դրույքներ",
        "27.04.2021 - Սակագներ և դրույքներ",
        "15.03.2021 - Սակագներ և դրույքներ",
        "09.02.2021 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2020</h4>
    <div className="space-y-2">
      {[
        "30.11.2020 - Սակագներ և դրույքներ",
        "06.10.2020 - Սակագներ և դրույքներ",
        "29.09.2020 - Սակագներ և դրույքներ",
        "01.09.2020 - Սակագներ և դրույքներ",
        "20.08.2020 - Սակագներ և դրույքներ",
        "03.08.2020 - Սակագներ և դրույքներ",
        "01.06.2020 - Սակագներ և դրույքներ",
        "25.05.2020 - Սակագներ և դրույքներ",
        "27.04.2020 - Սակագներ և դրույքներ",
        "01.03.2020 - Սակագներ և դրույքներ",
        "18.02.2020 - Սակագներ և դրույքներ",
        "20.01.2020 - Սակագներ և դրույքներ",
        "01.01.2020 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2019</h4>
    <div className="space-y-2">
      {[
        "01.10.2019 - Սակագներ և դրույքներ",
        "05.08.2019 - Սակագներ և դրույքներ",
        "01.07.2019 - Սակագներ և դրույքներ",
        "11.06.2019 - Սակագներ և դրույքներ",
        "13.05.2019 - Սակագներ և դրույքներ"
      ].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
          <span className="text-purple-800 font-medium text-xs md:text-sm">{item}</span>
          <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="font-bold text-purple-900 mb-2">2018</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-purple-50/30 border border-purple-100 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
        <span className="text-purple-800 font-medium text-xs md:text-sm">
          26.11.2018 - Սակագներ և դրույքներ
        </span>
        <svg className="w-5 h-5 text-purple-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </div>
  </div>
</div>
      )
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-purple-700 font-bold bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/reports')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հաշվետվություններ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/announcements')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հայտարարություններ
                </button>
              </nav>
            </div>

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap overflow-x-auto">
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Վարկեր ֆիզիկական անձանց
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/corporate-loans')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Վարկեր իրավաբանական անձանց
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/commissions')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Միջնորդավճարների սակագները
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/deposits')} 
                  className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
                >
                  Ավանդների սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs/archive')} 
                  className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
                >
                  Արխիվ
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Սակագներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Արխիվ</span>
          </div>

          <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-8 text-sm md:text-base">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-900">Արխիվ</h1>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-purple-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>

              <div className="space-y-3">
                {archiveSections.map((section, index) => {
                  const isOpen = !!openSections[index];
                  return (
                    <div 
                      key={index} 
                      className={`bg-white border rounded-xl shadow-sm overflow-hidden transition-all ${
                        isOpen ? 'border-purple-200' : 'border-purple-100 hover:border-purple-300'
                      }`}
                    >
                      <div 
                        onClick={() => toggleSection(index)}
                        className={`flex items-center justify-between p-4 cursor-pointer select-none transition-colors ${
                          isOpen ? 'bg-purple-50/50 text-purple-900 font-semibold' : 'bg-white text-gray-700 font-medium'
                        }`}
                      >
                        <span>{section.title}</span>
                        <svg 
                          className={`w-5 h-5 text-purple-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {isOpen && (
                        <div className="p-4 space-y-4 border-t border-purple-100 animate-fadeIn bg-white">
                          {section.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-purple-900">Փաստաթղթեր</h3>

              <div className="flex items-center justify-between p-4 bg-purple-50/50 border border-purple-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 01.10.2026
                  </span>
                </div>
                <div className="p-2 text-purple-700 hover:text-purple-900 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}