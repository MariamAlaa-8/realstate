import React from 'react'

export default function Verification() {
  return <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50"
      dir="rtl">
      <div className="w-full max-w-md px-6">
        
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          تأكيد الرمز
        </h1>
        
        <p className="text-center text-gray-600 mb-8">
          الرجاء إدخال الرمز الذي أرسلنا إلى الرقم
          <br />
          <span className="font-semibold text-gray-800">01005588974</span>
        </p>

       
        <div className="flex justify-center gap-2 mb-8">
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
          <input type="text" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:border-blue-800 outline-none" maxLength="1" />
        </div>

       
        <div className="text-center mb-8">
          <a href="#" className="text-black">
            لم يصلك الرمز
            <br />
            <span className="underline text-blue-600">أعد إرسال الرمز</span>
          </a>
        </div>
        
       =
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
          تأكيد
        </button>
        
      </div>
    </div>
  </>
}