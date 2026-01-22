import React from 'react'

export default function WillSetup() {
  return <>
    <div
      className="min-h-screen bg-gray-50 py-8"
      dir="rtl">
      <div className="w-full max-w-2xl mx-auto px-4">
        
     
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
         إعداد الميراث         
        </h1>
        
      
        <p className="text-center text-gray-600 mb-10">
          قم بتحديد كيفية توزيع الميراث على الورثة
        </p>

       
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
             معلومات  العقار
          </h2>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-gray-600 w-40">النوع:</span>
              <span className="text-gray-800 font-medium">شقة سكنية - 120 متر مربع</span>
            </div>
            <div className="flex">
              <span className="text-gray-600 w-40">الموقع:</span>
              <span className="text-gray-800 font-medium">القاهرة، مدينة نصر</span>
            </div>
            <div className="flex">
              <span className="text-gray-600 w-40">نسبة ملكيتك:</span>
              <span className="text-green-600 font-bold">%100</span>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            معلومات العقار
          </h2>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-gray-600 w-40">النوع:</span>
              <span className="text-gray-800 font-medium">أرض - 600 متر مربع</span>
            </div>
            <div className="flex">
              <span className="text-gray-600 w-40">الموقع:</span>
              <span className="text-gray-800 font-medium">القاهرة، مدينة نصر</span>
            </div>
            <div className="flex">
              <span className="text-gray-600 w-40">نسبة ملكيتك:</span>
              <span className="text-green-600 font-bold">%100</span>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
             اضافة وريث
          </h2>
          
        
          <label className="block text-sm text-gray-600 mb-1">
            الاسم الكامل (رباعي)
          </label>
          <div className="relative mb-5">
            <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-3 outline-none focus:border-blue-800"/>
          </div>
          
   
          <label className="block text-sm text-gray-600 mb-1">
            رقم الهاتف
          </label>
          <div className="relative mb-5">
            <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-3 outline-none focus:border-blue-800"/>
          </div>
          
         
          <label className="block text-sm text-gray-600 mb-1">
            الرقم القومي
          </label>
          <div className="relative mb-5">
            <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-3 outline-none focus:border-blue-800"/>
          </div>
          
        
          <label className="block text-sm text-gray-600 mb-1">(%)
           النسبة
          </label>
          <div className="relative mb-5">
            <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-3 outline-none focus:border-blue-800"/>
          </div>
          
        
          <label className="block text-sm text-gray-600 mb-1">
          صلة القرابة
          </label>
          <div className="relative mb-6">
            <select className="w-full border border-gray-300 rounded-lg py-3 px-3 outline-none focus:border-blue-800 text-gray-600">
              <option>اختر...</option>
              <option>ابن</option>
              <option>ابنة</option>
              <option>أب</option>
              <option>أم</option>
              <option>أخ</option>
              <option>أخت</option>
            </select>
          </div>
          
          <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2">
            <span className="text-xl">+</span>
        اضافة وريث
          </button>
        </div>

        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            قائمة الورثة
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-800">محمد أحمد علي</div>
                <div className="text-sm text-gray-600">0100446677</div>
              </div>
              <button className="text-red-600 hover:text-red-800">
                ✕
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
}