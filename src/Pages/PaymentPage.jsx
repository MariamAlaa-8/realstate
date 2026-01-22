import { useState } from "react";

export default function PaymentPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-[1100px] bg-white rounded-[10px] shadow-md">

       
        <div className="border-b px-[32px] py-[20px]">
          <div className="flex items-center gap-6">
            <Step active number={1} text="تفاصيل العقار" />
            <Line />
            <Step active={step >= 2} number={2} text="الدفع" />
            <Line />
            <Step active={step === 3} number={3} text="التأكيد" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 px-[32px] py-[24px]">

          
          <div className="bg-[#f9fafb] rounded-[8px] p-[20px]">
            <h3 className="text-[15px] font-bold mb-[16px]">
              تفاصيل الطلب
            </h3>

            <Detail label="النوع" value="شقة سكنية - 120 متر" />
            <Detail label="الموقع" value="القاهرة - مدينة نصر" />
            <Detail label="الدور" value="الدور الثالث" />
            <Detail label="نسبة الملكية" value="100%" />

            <div className="border-t my-[14px]" />

            <Detail label="سعر العقار" value="2,000,000 جنيه" />
            <Detail label="رسوم" value="300 جنيه" />

            <div className="mt-[16px] bg-[#eef2ff] text-[#1e3a8a] text-[14px] font-bold px-[14px] py-[10px] rounded">
              الإجمالي: 2,000,300 جنيه
            </div>
          </div>

         
          <div className="border rounded-[8px] p-[24px]">

            {step === 1 && (
              <>
                <h3 className="text-[16px] font-bold mb-[18px]">
                  اختر طريقة الدفع
                </h3>

                <PaymentOption text="تحويل بنكي" />
                <PaymentOption text="الدفع نقدًا" />

                <button
                  onClick={() => setStep(2)}
                  className="mt-[24px] w-full h-[44px] bg-[#16a34a] text-white rounded-[6px] text-[14px] font-medium hover:bg-[#15803d]"
                >
                  استمرار
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-[16px] font-bold mb-[18px]">
                  بيانات البطاقة
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                  <Input placeholder="اسم صاحب البطاقة" />
                  <Input placeholder="رقم البطاقة" />
                  <Input placeholder="تاريخ الانتهاء" />
                  <Input placeholder="CVV" />
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="mt-[24px] w-full h-[44px] bg-[#16a34a] text-white rounded-[6px] text-[14px] font-medium hover:bg-[#15803d]"
                >
                  تأكيد الدفع
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}



function Step({ active = true, number, text }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[13px] font-bold
        ${active ? "bg-[#16a34a] text-white" : "bg-gray-300 text-gray-600"}`}
      >
        {number}
      </div>
      <span className="text-[13px] text-gray-700 hidden sm:block">
        {text}
      </span>
    </div>
  );
}

function Line() {
  return <div className="w-[40px] h-px bg-gray-300" />;
}

function Detail({ label, value }) {
  return (
    <div className="flex justify-between text-[13px] mb-[10px]">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

function PaymentOption({ text }) {
  return (
    <label className="flex items-center gap-3 border rounded-[6px] px-[14px] py-[12px] mb-[12px] cursor-pointer hover:bg-gray-50">
      <input type="radio" name="payment" />
      <span className="text-[14px]">{text}</span>
    </label>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full h-[42px] border rounded-[6px] px-[12px] text-[14px]
      focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}