import React from 'react'
import { useState } from "react";

export default function Profile() {
   const [tab, setTab] = useState("security");
  return <>
   <div dir="rtl" className="min-h-screen bg-[#f6f7fb] flex justify-center py-4 sm:py-6 md:py-10 px-4 sm:px-6">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-4 sm:gap-6">

        
        <div className="w-full lg:w-[260px] space-y-4">
        
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="w-12 h-12 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg sm:text-base">
              أ
            </div>
            <p className="font-bold text-sm sm:text-base">أحمد خالد</p>
            <p className="text-xs text-gray-500">حساب مفعل</p>
          </div>

     
          <div className="bg-white rounded-lg shadow-sm p-4 text-sm space-y-3">
            <p className="font-bold mb-2 text-sm sm:text-base ">إعدادات الحساب</p>
            <p className="text-gray-600 text-sm sm:text-base cursor-pointer">عقارات</p>
            <p className="text-gray-600 text-sm sm:text-base cursor-pointer">معاملات</p>
            <p className="text-gray-600 text-sm sm:text-base cursor-pointer">إشعارات</p>
            <p className="text-red-500 text-sm sm:text-base cursor-pointer">مساعدة</p>
            <p className="text-gray-600 text-sm sm:text-base cursor-pointer">تسجيل الخروج</p>
          </div>
        </div>

      
        <div className="flex-1">
        
          <h1 className="text-xl sm:text-2xl font-bold mb-2">إعدادات الحساب</h1>
          <p className="text-sm text-gray-500 mb-4 sm:mb-6">
            يمكنك تعديل بياناتك الشخصية وإعدادات الحساب
          </p>

      
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { id: "profile", label: "البيانات الشخصية" },
              { id: "security", label: "الأمان" },
              { id: "notifications", label: "الإشعارات" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm border flex-shrink-0
                  ${
                    tab === item.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 w-full">

            
            {tab === "security" && (
              <>
                <h2 className="font-bold mb-4 sm:mb-6 ">الأمان</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input w-full p-3 border rounded-lg" placeholder="كلمة المرور الحالية" />
                  <input className="input w-full p-3 border rounded-lg" placeholder="كلمة المرور الجديدة" />
                  <input className="input w-full p-3 border rounded-lg sm:col-span-2" placeholder="تأكيد كلمة المرور" />
                </div>
              </>
            )}

           
            {tab === "profile" && (
              <>
                <h2 className="font-bold mb-4 sm:mb-6">البيانات الشخصية</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input w-full p-3 border rounded-lg" placeholder="الاسم الكامل" />
                  <input className="input w-full p-3 border rounded-lg" placeholder="رقم الهاتف" />
                  <input className="input w-full p-3 border rounded-lg sm:col-span-2" placeholder="الرقم القومي" />
                </div>
              </>
            )}

           
            {tab === "notifications" && (
              <>
                <h2 className="font-bold mb-4 sm:mb-6">الإشعارات</h2>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between p-3 sm:p-0">
                    <span className="text-sm sm:text-base">الإشعارات على التطبيق</span>
                    <div className="toggle on w-10 h-5 sm:w-12 sm:h-6" />
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-0">
                    <span className="text-sm sm:text-base">رسائل SMS</span>
                    <div className="toggle w-10 h-5 sm:w-12 sm:h-6" />
                  </div>
                </div>
              </>
            )}

        
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-2 rounded w-full sm:w-auto cursor-pointer">
                حفظ التغييرات
              </button>
              <button className="border px-6 py-3 sm:px-8 sm:py-2 rounded text-gray-600 w-full sm:w-auto cursor-pointer">
                إلغاء
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </>
}
