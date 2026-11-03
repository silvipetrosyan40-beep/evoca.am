import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 py-12 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Logo & Address */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl font-black tracking-wider text-purple-900">evocabank</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Evocabank-ը վերահսկվում է <br />
              <strong className="text-slate-700">Հայաստանի Հանրապետության <br />Կենտրոնական բանկի կողմից</strong>
            </p>
            <p className="text-[11px] text-slate-400">
              1990 - 2026, © ԲՈԼՈՐ ՍԻՐՎԱԾ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2: Բանկի մասին */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Բանկի մասին</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-purple-700">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-purple-700">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-purple-700">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-purple-700">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Սակագներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-purple-700">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Սակագների արխիվ</a></li>
            </ul>
          </div>

          {/* Column 3: Օգտակար հղումներ */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-purple-700">Հաճախորդի իրավունքները (Բողոքների...)</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-purple-700">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-purple-700">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-purple-700">Ֆինանսական համագործակցությունների...</a></li>
              <li><a href="#" className="hover:text-purple-700">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          {/* Column 4: Այլ հղումներ */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Այլ հղումներ</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-purple-700">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-purple-700">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-purple-700">Dibrary</a></li>
              <li><a href="#" className="hover:text-purple-700">Բուլետեններ</a></li>
              <li><a href="#" className="hover:text-purple-700">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-purple-700">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          {/* Column 5: Socials & Contacts */}
          <div className="space-y-6">
            <div className="flex space-x-3 text-slate-600">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaFacebookF size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaInstagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaPinterestP size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaYoutube size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaLinkedinIn size={14} /></a>
            </div>

            {/* App Badges */}
            <div className="flex flex-col space-y-2">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
            </div>

            <div className="space-y-1 text-sm font-medium">
              <a href="#" className="block text-purple-700 hover:underline">Բանկի հասցեները և աշխատաժամերը</a>
              <a href="#" className="block text-purple-700 hover:underline">Կապ մեզ հետ</a>
              <p className="text-slate-800 pt-2 font-bold">+374 10 605555</p>
              <p className="text-slate-800 font-bold">8444</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="border-t border-slate-200 pt-6 text-[11px] text-slate-500 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-5xl">
            Հարգելի' այցելու, կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նույնը տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ԲԲԸ-ն պատասխանատվություն չի կրում ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգման և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար։
          </p>
          <div className="flex items-center space-x-4 opacity-70">
            {/* Logos placeholder icons */}
            <span className="text-xs font-semibold text-slate-600">arca</span>
            <span className="text-xs font-semibold text-slate-600">fininfo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}