import React from 'react'

export default function SearchRealEstate() {
  return <>
   <div className="min-h-screen bg-gray-50 py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">

       
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          الاستعلام عن الكارت أو عقار
        </h1>
        <p className="text-gray-400 mb-10">
          أدخل رقم الكارت أو رقم العقار لمعرفة المالك والمعاملات
        </p>

        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <input className="flex-1 border rounded-lg py-4 px-4 bg-gray-100 outline-none" placeholder="" />
          <button className="bg-blue-900 text-white px-10 py-3 rounded-lg cursor-pointer">
            بحث
          </button>
        </div>

      </div>
    </div>
  </>
}
