import React from 'react'
import { Link } from 'react-router-dom'

export default function RealEstate() {
    return <>
        <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
            <div className="w-full max-w-2xl mx-auto px-4">


                <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    # عقارات
                </h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        معلومات العقار
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
                            <span className="text-green-600 font-bold">100%</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 my-6"></div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
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
                            <span className="text-green-600 font-bold">100%</span>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-300 my-6"></div>


                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        معلومات العقار
                    </h2>
                    <div className="space-y-2">
                        <div className="flex">
                            <span className="text-gray-600 w-40">النوع:</span>
                            <span className="text-gray-800 font-medium">أرض زاعية - 600 متر مربع</span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-600 w-40">الموقع:</span>
                            <span className="text-gray-800 font-medium">الشرقية</span>
                        </div>
                        <div className="flex">
                            <span className="text-gray-600 w-40">نسبة ملكيتك:</span>
                            <span className="text-green-600 font-bold">100%</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <Link  to="/optionalWill" className="inline-block w-full max-w-xs bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition" >
                        إضافة الوصية
                    </Link>
                </div>
            </div>
        </div>
    </>
}