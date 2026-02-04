import { useState } from "react";

export default function PaymentPage() {
  const [step, setStep] = useState(1);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f3f4f6] flex justify-center px-4 py-6">
      <div className="w-full max-w-[1100px] bg-white rounded-lg shadow">

       
        <div className="border-b px-6 py-4">
          <div className="flex items-center gap-6">

          
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                ${step >= 1 ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                1
              </div>
              <span className="text-xl hidden sm:block">تفاصيل العقار</span>
            </div>

            <div className="w-10 h-px bg-gray-300" />

           
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                ${step >= 2 ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                2
              </div>
              <span className="text-xl hidden sm:block">الدفع</span>
            </div>

            <div className="w-10 h-px bg-gray-300" />

        
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                ${step >= 3 ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                3
              </div>
              <span className="text-xl hidden sm:block">التأكيد</span>
            </div>

          </div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 px-6 py-6">

      
          <div className="border rounded-lg p-6">

          
            {step === 1 && (
              <>
                <h3 className="text-[20px] font-bold mb-5">
                  اختر طريقة الدفع
                </h3>

                <label className="flex items-center gap-3 border rounded-md px-4 py-3 mb-3 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" />
                  <span className="text-xl">تحويل بنكي</span>
                </label>

                <label className="flex items-center gap-3 border rounded-md px-4 py-3 mb-3 cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" />
                  <span className="text-xl">الدفع نقدًا</span>
                </label>

                <button onClick={() => setStep(2)} className="mt-6 w-full h-[44px] bg-green-600 text-white rounded-md text-sm font-medium" >
                  استمرار
                </button>
              </>
            )}

          
            {step === 2 && (
              <>
                <h3 className="text-[16px] font-bold mb-5">
                  بيانات الدفع
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1">
                    <label className="text-lg text-gray-900">اسم مالك البطاقة البنكية</label>
                    <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-lg text-gray-900">رقم البطاقة</label>
                    <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>

                  <div className="flex flex-col gap-1">
  <label className="text-lg text-gray-900">اسم البنك</label>
  <select className="h-[42px] border rounded-md px-3 text-sm bg-white focus:ring-2 focus:ring-green-500 outline-none">
    <option value="">اختر اسم البنك</option>
    <option value="nbe">البنك الأهلي المصري</option>
    <option value="banque-misr">بنك مصر</option>
    <option value="cib">البنك التجاري الدولي (CIB)</option>
    <option value="alex">بنك الإسكندرية</option>
    <option value="qnb">QNB الأهلي</option>
    <option value="hsbc">HSBC</option>
    <option value="aaib">البنك العربي الأفريقي</option>
  </select>
</div>

                  <div className="flex flex-col gap-1">
                    <label className="text-lg text-gray-900">رقم الحساب</label>
                    <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-lg text-gray-900">المبلغ (بالجنيه المصري)</label>
                    <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  <br/>

                  <div className="flex gap-3">
                    <div className="flex flex-col gap-1 w-full">
                      <label className="text-lg text-gray-900">كود الأمان</label>
                      <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                      <label className="text-lg text-gray-900">تاريخ الانتهاء</label>
                      <input className="h-[42px] border rounded-md px-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                  </div>

                </div>

                <button onClick={() => setStep(3)} className="mt-6 w-full h-[44px] bg-green-600 text-white rounded-md text-lg font-medium" >
                  تأكيد الدفع
                </button>
              </>
            )}

         
            {step === 3 && (
              <div className="text-center py-10">
                <h3 className="text-[40px] font-bold text-green-600 mb-3">
                  ✅ تم الدفع بنجاح
                </h3>
                <p className="text-xl text-gray-800">
                  شكرًا لك، تم تأكيد عملية الدفع
                </p>
              </div>
            )}

          </div>

          <div className="bg-[#f9fafb] rounded-lg p-5">
           <h3 className="text-[30px] font-bold text-blue-800 mb-2 text-center">
  تفاصيل الطلب
</h3>

<h3 className="text-[20px] font-semibold text-blue-500 mb-4">
  معلومات العقار
</h3>
            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">النوع</span>
              <span className="font-medium">شقة سكنية - 120 متر مربع</span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">الموقع</span>
              <span className="font-medium">القاهرة - مدينة نصر</span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">نسبة الملكية</span>
              <span className="font-medium">100%</span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">الدور</span>
              <span className="font-medium">الدور الثالث - 120 متر مربع</span>
            </div>

            <div className="border-t my-4" />

            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">سعر العقار</span>
              <span className="font-medium">2,000,000 جنيه</span>
            </div>
            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900"> نسبه الملكيه (100%)</span>
              <span className="font-medium">2,000,000 جنيه</span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span className="text-gray-900">رسوم</span>
              <span className="font-medium">300 جنيه</span>
            </div>

           <div className="mt-4 bg-[#eef2ff] text-[#1e3a8a] text-xl font-bold px-4 py-3 rounded">
  <span className="text-black">الإجمالي:</span>{" "}
  2,000,300 جنيه
</div>
          </div>

        </div>
      </div>
    </div>
  );
}
