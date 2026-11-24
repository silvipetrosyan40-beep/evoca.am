import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function BookletsPage() {
  const booklets = [
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg",
      url: "#factoring"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png",
      url: "#cash-operations"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg",
      url: "#unsecured-loan"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg",
      url: "#secured-loan"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg",
      url: "#gold-loan"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/11-safe-deposit-boxes.jpg",
      url: "#safe-boxes"
    },
    {
      img: "https://www.evoca.am/file_manager/Booklets/Images/%D4%BC%D5%AB%D5%A6%D5%AB%D5%B6%D5%A3.png",
      url: "#leasing"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Բուկլետներ</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Բուկլետներ
          </h1>

          {/* Բուկլետների նկարների ցանկ */}
          <div className="space-y-6">
            {booklets.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center justify-center bg-white hover:bg-purple-50/30 border border-gray-100 hover:border-purple-200 rounded-2xl p-6 shadow-sm transition group"
              >
                <div className="w-full max-w-xl rounded-xl overflow-hidden bg-purple-50/50 flex items-center justify-center p-2">
                  <img
                    src={item.img}
                    alt="Booklet"
                    className="max-h-48 w-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}