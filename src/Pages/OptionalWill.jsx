import { useState } from "react";

export default function OptionalWill() {
  const [heirs, setHeirs] = useState([
    {
      name: "محمد أحمد علي",
      phone: "01004465677",
      percent: 40,
      relation: "ابن",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow">

     
        <div className="bg-blue-800 text-white p-4 rounded-t-lg text-center">
          <h2 className="text-lg font-semibold">الوصية الاختيارية</h2>
          <p className="text-sm mt-1">
            قم بتحديد كيفية توزيع الميراث على الورثة
          </p>
        </div>

        <div className="p-4 border-b text-sm text-gray-700">
          تسمح لك بتخصيص نسبة إضافية لغير الورثة في حدود الثلث.
          <br />
          <span className="font-semibold">
            لا تقبل الوصية إذا تجاوزت نسبة 33.33%
          </span>
        </div>

      
        <div className="p-4">
          <div className="flex items-center justify-end gap-2 mb-4 text-blue-700 font-semibold">
            <span>إضافة وريث</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input type="text" placeholder="الاسم الكامل (رباعي)" className="border rounded-md px-3 py-2" />

            <input  type="tel" placeholder="رقم الهاتف" className="border rounded-md px-3 py-2" />

            <input type="text" placeholder="الرقم القومي" className="border rounded-md px-3 py-2" />

            <input type="number" placeholder="النسبة (%)" className="border rounded-md px-3 py-2" />

            <select className="border rounded-md px-3 py-2">
              <option>اختر صلة القرابة</option>
              <option>ابن</option>
              <option>ابنة</option>
              <option>زوج</option>
              <option>زوجة</option>
              <option>أخ</option>
            </select>
          </div>

          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            + إضافة وريث
          </button>
        </div>

        
        <div className="p-4 border-t">
          <h3 className="font-semibold mb-3 text-right">قائمة الورثة</h3>

          {heirs.map((heir, index) => (
            <div key={index} className="flex items-center justify-between border rounded-md p-3 mb-2">
              <div className="text-right">
                <p className="font-semibold">{heir.name}</p>
                <p className="text-sm text-gray-500">
                  {heir.relation} — {heir.phone}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-700">
                  %{heir.percent}
                </span>
                <button className="text-red-500 hover:text-red-700">
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}