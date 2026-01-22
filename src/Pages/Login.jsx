import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return <>
  <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      dir="rtl">
      <div className="w-full max-w-md px-6">

        
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          تسجيل الدخول
        </h1>


        <label className="block text-sm text-gray-600 mb-1">
          اسم المستخدم
        </label>
        <div className="relative mb-5">
          <input type="text" className="w-full border border-gray-300 rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-800"/>
           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            👤
          </span>
        </div>

        
        <label className="block text-sm text-gray-600 mb-1">
          كلمة المرور
        </label>
        <div className="relative mb-5">
          <input type="password"className="w-full border border-gray-300 rounded-lg py-3 pr-10 pl-10 outline-none focus:border-blue-800"/>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔑
          </span>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            👁️
          </span>
        </div>
       
        <label className="block text-sm text-gray-600 mb-1">
          رقم الهاتف
        </label>
        <div className="relative mb-2">
          <input type="text" className="w-full border border-gray-300 rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-800"/>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            📞
          </span>
        </div>

       
        <div className="text-left mb-6">
          <a href="#" className="text-sm text-gray-500 underline">
            هل نسيت كلمة المرور؟
          </a>
        </div>
     
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
         <Link to="/login/verification" >
             تسجيل الدخول
          </Link>
        </button>

     
        <p className="text-center text-sm mt-6 text-gray-600">
          ليس لديك حساب؟{" "}
          <Link to="/register" className="text-blue-600 underline">
            إنشاء حساب جديد
          </Link>
        </p>

      </div>
    </div>
  </>
}
