import React from 'react'
import { Link } from 'react-router-dom'
import whatsappImage from '../assets/whatsApp image.jpeg';

export default function Home() {
  return (
    <div className="w-full font-sans" dir="rtl">

     
    
     <section className="relative min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
  <div className="absolute inset-0 z-0">
    
    <img src={whatsappImage} alt="عقارات" className="w-full h-full object-cover" />
    <div className="absolute inset-0 "></div>
  </div>

  <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-14 h-full flex items-center justify-end mt-25" >
    <div className="text-white space-y-4 max-w-xl">
     
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-right">
        "سجل عقودك العقارية إلكترونيًا بسهولة وأمان"
      </h1>

      <p className="text-lg sm:text-xl leading-relaxed text-right mt-6">
        النظام الذكي لإدارة وتوثيق العقارات باستخدام الكارت الذكي  
        بديل عن العقود الورقية – آمن وسريع وموثوق
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-end">
       
             <Link to="/services"  className="bg-blue-600 px-6 py-2 rounded w-full sm:w-auto hover:bg-blue-700 transition">
              ابدأ الآن
          </Link>
          
        <button className="border border-white px-6 py-2 rounded w-full sm:w-auto hover:bg-white/10 transition">
          اعرف المزيد
        </button>
      </div>
    </div>
  </div>
</section>

      
     <section className="py-10 bg-gray-100 text-center px-4">
  <h2 className="text-xl sm:text-2xl font-bold mb-8">
    كيف يعمل النظام؟
  </h2>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
  {[
    {
      step: "1",
      title: "سجل حسابك",
      desc: "أنشئ حسابًا جديدًا باستخدام الرقم القومي مع التحقق برمز OTP",
    },
    {
      step: "2",
      title: "أضف عقارك",
      desc: "سجل بيانات العقار وارفع المستندات المطلوبة",
    },
    {
      step: "3",
      title: "استلم الكارت",
      desc: "بعد المراجعة يتم إصدار الكارت الذكي الخاص بك",
    },
    {
      step: "4",
      title: "بحث",
      desc: "يمكنك البحث العقار قبل الشراء للتاكد من صحة البيانات والمالك",
    },
    {
      step: "5",
      title: "الوصية",
      desc: "يمكنك اضافة الوصية الرسمية الخاصة بالعقار",
    },
  ].map((item) => (
    <a
      key={item.step}
      href={item.link}
      className="block p-6 rounded-lg no-underline text-gray-900"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl">
        {item.step}
      </div>
      <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">
        {item.desc}
      </p>
    </a>
  ))}
</div>
</section>

  
     
    </div>
  )
}
