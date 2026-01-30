import { useState } from "react";

export default function OptionalWill() {
  const [heirsList, setHeirsList] = useState([
    {
      id: 1,
      name: "محمد أحمد علي",
      phone: "01004465677",
      percent: 40,
      relation: "ابن",
      nationalId: "",
      fullName: ""
    },
  ]);


  const addHeir = () => {
    const newId = heirsList.length + 1;
    const newHeir = {
      id: newId,
      name: "",
      phone: "",
      percent: 0,
      relation: "اختر صلة القرابة",
      nationalId: "",
      fullName: ""
    };
    setHeirsList([...heirsList, newHeir]);
  };


  const removeHeir = (id) => {
    if (heirsList.length > 1) {
      setHeirsList(heirsList.filter(heir => heir.id !== id));
    }
  };


  const updateHeir = (id, field, value) => {
    setHeirsList(heirsList.map(heir =>
      heir.id === id ? { ...heir, [field]: value } : heir
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow">

        <div className="bg-blue-900 text-white p-4 rounded-t-lg text-center">
          <h2 className="text-xl font-semibold">الوصية الاختيارية</h2>
          <p className="text-lg mt-1">
            قم بتحديد كيفية توزيع الميراث على الورثة
          </p>
        </div>

        <div dir="rtl" className="p-4 border-b text-lg text-gray-700 text-right rounded-lg bg-gray-50 mt-3">
          تسمح لك بتخصيص نسبة إضافية لغير الورثة في حدود الثلث.
          <br />
          <br />

          <span className="font-semibold ">
            لا تقبل الوصية إذا تجاوزت نسبة 33.33%
          </span>
          <br />
          <br />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-end gap-2 mb-4 text-blue-700 font-semibold">
            <span className="text-2xl">إضافة وريث</span>
          </div>


          {heirsList.map((heir, index) => (
            <div key={heir.id} className="mb-6 p-4  ">

              {heirsList.length > 1 && (
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-700">
                    وريث #{index + 1}
                  </h3>
                  <button type="button" onClick={() => removeHeir(heir.id)} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600" >
                    حذف
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-right mb-1 text-sm font-medium text-gray-700">
                    الرقم القومي
                  </label>
                  <input type="text" placeholder="أدخل الرقم القومي" className="border rounded-md px-3 py-2 text-right w-full" dir="rtl" value={heir.nationalId}  onChange={(e) => updateHeir(heir.id, 'nationalId', e.target.value)}/>
                </div>

                <div>
                  <label className="block text-right mb-1 text-sm font-medium text-gray-700">
                    رقم الهاتف
                  </label>
                  <input  type="tel" placeholder="أدخل رقم الهاتف" className="border rounded-md px-3 py-2 text-right w-full" dir="rtl" value={heir.phone}  onChange={(e) => updateHeir(heir.id, 'phone', e.target.value)}/>
                </div>



                <div>
                  <label className="block text-right mb-1 text-sm font-medium text-gray-700">
                    الاسم الكامل (رباعي)
                  </label>
                  <input  type="text" placeholder="أدخل الاسم الكامل" className="border rounded-md px-3 py-2 text-right w-full"  dir="rtl" value={heir.fullName} onChange={(e) => updateHeir(heir.id, 'fullName', e.target.value)} />
                </div>

                <div>
                  <label className="block text-right mb-1 text-sm font-medium text-gray-700">
                    النسبة (%)
                  </label>
                  <input type="number"  placeholder="أدخل النسبة"  className="border rounded-md px-3 py-2 text-right w-full"  dir="rtl" value={heir.percent} onChange={(e) => updateHeir(heir.id, 'percent', e.target.value)} />
                </div>

                <div>
                  <label className="block text-right mb-1 text-sm font-medium text-gray-700">
                    صلة القرابة
                  </label>
                  <select className="border rounded-md px-3 py-2 text-right w-full" dir="rtl" value={heir.relation} onChange={(e) => updateHeir(heir.id, 'relation', e.target.value)} >
                    <option>اختر صلة القرابة</option>
                    <option>ابن</option>
                    <option>ابنة</option>
                    <option>زوج</option>
                    <option>زوجة</option>
                    <option>أخ</option>
                  </select>
                </div>
              </div>
            </div>
          ))}


          <button type="button" onClick={addHeir} className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition cursor-pointer" >
            + إضافة وريث جديد
          </button>
        </div>

        <div className="p-4 border-t">
          <h3 className="font-semibold mb-3 text-right">قائمة الورثة</h3>

          {heirsList.map((heir, index) => (
            <div key={index} className="flex items-center justify-between border rounded-md p-3 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-700">
                  %{heir.percent}
                </span>
              </div>
              <div className="text-right">
                <p className="font-semibold">{heir.name || heir.fullName || "بدون اسم"}</p>
                <p className="text-sm text-gray-500">
                  {heir.relation} — {heir.phone || "بدون رقم"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
