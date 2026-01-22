import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans" dir="rtl">
            <div className="w-full max-w-md px-6">

            
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    إنشاء حساب جديد
                </h1>
                <p className="text-center text-gray-400 mt-2 mb-8">
                    Hello! let’s Join with us.
                </p>

               
                <label className="block text-sm text-gray-600 mb-1">الاسم بالكامل</label>
                <div className="relative mb-4">
                    <input type="text" className="w-full border rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-600" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        👤
                    </span>
                </div>

                
                <label className="block text-sm text-gray-600 mb-1">كلمة المرور</label>
                <div className="relative mb-4">
                    <input type="password" className="w-full border rounded-lg py-3 pr-10 pl-10 outline-none focus:border-blue-600" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔑
                    </span>

                </div>
               
                <label className="block text-sm text-gray-600 mb-1">تأكيد كلمة المرور</label>
                <div className="relative mb-4">
                    <input type="password" className="w-full border rounded-lg py-3 pr-10 pl-10 outline-none focus:border-blue-600" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔑
                    </span>

                </div>
                
                <label className="block text-sm text-gray-600 mb-1">الرقم القومي</label>
                <input type="text"className="w-full border rounded-lg py-3 px-3 mb-4 outline-none focus:border-blue-600"/>

               
                <label className="block text-sm text-gray-600 mb-1">رقم الهاتف</label>
                <div className="relative mb-6">
                    <input  type="text" className="w-full border rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-600" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        📞
                    </span>
                </div>
              
                <div className="flex items-center gap-2 mb-6 text-sm">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>
                        أوافق على{' '}
                        <a href="#" className="text-blue-600 underline">
                            الشروط والأحكام
                        </a>
                    </span>
                </div>

                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                    إنشاء حساب
                </button>

                
                <p className="text-center text-sm mt-6 text-gray-600">
                    لدى حساب بالفعل؟{' '}
                    <Link to="/login" className="text-blue-600 underline">
                        تسجيل الدخول
                    </Link>
                </p>
            </div>
        </div>
    </>
}
