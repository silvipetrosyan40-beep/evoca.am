import React, { useState } from 'react';
import { ChevronRight, Upload, RefreshCw } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function FeedbackPage() {
  const [personType, setPersonType] = useState('individual'); // 'individual' | 'legal'
  const [feedbackType, setFeedbackType] = useState('thanks'); // 'thanks' | 'suggestion'
  const [fileName, setFileName] = useState('');
  const [captchaCode, setCaptchaCode] = useState('YNUQ92');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ձեր հաղորդագրությունը հաջողությամբ ուղարկվեց:');
  };

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
            <span className="text-gray-700 font-medium">Հետադարձ կապ</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Հետադարձ կապ
          </h1>

          {/* Կոնտակտային տվյալների աղյուսակ */}
          <div className="overflow-hidden rounded-2xl border border-purple-100 shadow-sm">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <tbody className="divide-y divide-purple-100">
                <tr>
                  <td className="p-4 w-1/2 font-medium text-gray-800 border-r border-purple-100">
                    Հասցե
                  </td>
                  <td className="p-4 w-1/2 text-gray-700">
                    ՀՀ, 0010 Երևան, Հանրապետության փող․ 44/2 շենք
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-800 border-r border-purple-100 align-top">
                    Հեռախոսահամար
                  </td>
                  <td className="p-4 text-gray-700">
                    <ul className="space-y-1.5">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6200ee]"></span>
                        <a href="tel:+37410605555" className="hover:text-[#6200ee] transition">
                          +374 10 605555,
                        </a>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6200ee]"></span>
                        <a href="tel:8444" className="hover:text-[#6200ee] transition">
                          84-44
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-800 border-r border-purple-100">
                    Էլ․ փոստ
                  </td>
                  <td className="p-4 text-gray-700">
                    <a href="mailto:hello@evoca.am" className="hover:text-[#6200ee] transition">
                      hello@evoca.am
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-800 border-r border-purple-100">
                    SWIFT
                  </td>
                  <td className="p-4 text-gray-700">
                    PRML AM 22
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-800 border-r border-purple-100">
                    Աշխատանքային ժամեր
                  </td>
                  <td className="p-4 text-gray-700">
                    9:00 - 18:00
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-800 border-r border-purple-100">
                    Հաճախորդների սպասարկման ժամեր
                  </td>
                  <td className="p-4 text-gray-700">
                    9:30 - 17:00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Հետադարձ կապի ձև (Form) */}
          <div className="max-w-2xl mx-auto pt-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-purple-100 p-6 md:p-10 shadow-sm space-y-6"
            >
              <div className="space-y-2 text-xs md:text-sm text-gray-500 leading-relaxed">
                <p>
                  Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները, մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի կարողանանք բարելավել մեր ծառայությունները:
                </p>
                <p>
                  Հաղորդագրություն ուղարկելու համար լրացրեք ստորև բերված դաշտերը՝
                </p>
              </div>

              {/* Դուք հանդիսանում եք */}
              <div className="space-y-2.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Դուք հանդիսանում եք
                </label>
                <div className="flex flex-wrap items-center gap-6">
                  <label className="flex items-center space-x-2.5 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="personType"
                      checked={personType === 'individual'}
                      onChange={() => setPersonType('individual')}
                      className="w-4 h-4 accent-[#6200ee]"
                    />
                    <span>Ֆիզիկական անձ</span>
                  </label>
                  <label className="flex items-center space-x-2.5 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="personType"
                      checked={personType === 'legal'}
                      onChange={() => setPersonType('legal')}
                      className="w-4 h-4 accent-[#6200ee]"
                    />
                    <span>Իրավաբանական անձ</span>
                  </label>
                </div>
              </div>

              {/* Հետադարձ կապի տեսակը */}
              <div className="space-y-2.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Հետադարձ կապի տեսակը <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap items-center gap-6">
                  <label className="flex items-center space-x-2.5 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="feedbackType"
                      checked={feedbackType === 'thanks'}
                      onChange={() => setFeedbackType('thanks')}
                      className="w-4 h-4 accent-[#6200ee]"
                    />
                    <span>Հայտնել շնորհակալություն</span>
                  </label>
                  <label className="flex items-center space-x-2.5 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="feedbackType"
                      checked={feedbackType === 'suggestion'}
                      onChange={() => setFeedbackType('suggestion')}
                      className="w-4 h-4 accent-[#6200ee]"
                    />
                    <span>Ներկայացնել առաջարկ</span>
                  </label>
                </div>
              </div>

              {/* Անուն */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Անուն <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6200ee] text-sm"
                />
              </div>

              {/* Ազգանուն */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Ազգանուն <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6200ee] text-sm"
                />
              </div>

              {/* Հեռախոսահամար */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Հեռ՝ <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-lg border border-gray-200 focus-within:border-[#6200ee] overflow-hidden">
                  <div className="flex items-center justify-center px-3 bg-gray-50 border-r border-gray-200 text-xs text-gray-500 select-none">
                    🇦🇲
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="+374"
                    className="w-full px-4 py-2.5 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Էլ. փոստ */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Էլ․ փոստ <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6200ee] text-sm"
                />
              </div>

              {/* Հաղորդագրություն */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Հաղորդագրություն <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6200ee] text-sm"
                ></textarea>
              </div>

              {/* Կցել փաստաթուղթ */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Կցել փաստաթուղթ
                </label>
                <label className="flex items-center justify-between px-4 py-3 rounded-lg border border-dashed border-gray-300 hover:border-[#6200ee] cursor-pointer transition">
                  <span className="text-xs md:text-sm text-gray-500">
                    {fileName || 'Կցել ֆայլը'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <Upload size={16} />
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Ստուգման ծածկագիր */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Ստուգման ծածկագիր <span className="text-red-500">*</span>
                </label>
                <div className="inline-block bg-gray-50 p-3 rounded-xl border border-gray-200 space-y-2.5">
                  <span className="block text-[11px] text-gray-400">
                    Մուտքագրեք ծածկագիրը
                  </span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      required
                      className="w-40 px-3 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-[#6200ee] text-sm"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2 text-gray-500 hover:text-[#6200ee] transition"
                      title="Թարմացնել ծածկագիրը"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg py-2 px-4 text-center select-none relative overflow-hidden">
                    <span className="font-mono font-extrabold text-xl tracking-widest text-gray-900 italic line-through decoration-gray-500">
                      {captchaCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ուղարկել կոճակ */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="bg-[#6200ee] hover:bg-purple-700 text-white font-semibold px-12 py-3 rounded-full text-sm md:text-base transition shadow-sm"
                >
                  Ուղարկել
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}