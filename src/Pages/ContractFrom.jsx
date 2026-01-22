import { Link } from "react-router-dom";

export default function ContractForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 md:p-10">

      
        <h2 className="text-center text-2xl font-bold mb-8">
          عقد بيع
        </h2>

     
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">

       
          <div>
            <label className="block mb-1 text-sm font-medium">الاسم</label>
            <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>

        
          <div>
            <label className="block mb-1 text-sm font-medium">الرقم القومي</label>
            <input type="text"className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium">رقم الهاتف</label>
            <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>

        
          <div>
            <label className="block mb-1 text-sm font-medium">رقم العقار</label>
            <input type="text" className="w-full border rounded-md px-3 py-2" />
          </div>

        
          <div>
            <label className="block mb-1 text-sm font-medium">نسبة الملكية (%)</label>
            <input type="number" className="w-full border rounded-md px-3 py-2" />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium">نوع العقار</label>
            <select className="w-full border rounded-md px-3 py-2 bg-white">
              <option>اختر نوع العقار</option>
              <option>شقة</option>
              <option>فيلا</option>
              <option>محل</option>
            </select>
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium">العنوان</label>
            <input type="text" className="w-full border rounded-md px-3 py-2"/>
          </div>

      
          <div>
            <label className="block mb-1 text-sm font-medium">المحافظة</label>
            <input type="text" className="w-full border rounded-md px-3 py-2"/>
          </div>

          
          <div>
            <label className="block mb-1 text-sm font-medium">رقم الطابق</label>
            <input  type="number" className="w-full border rounded-md px-3 py-2"/>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">(جنيه) السعر</label>
            <input type="number" className="w-full border rounded-md px-3 py-2"/>
          </div>

     
          <div>
            <label className="block mb-1 text-sm font-medium">(م²) المساحة</label>
            <input type="number" className="w-full border rounded-md px-3 py-2"/>
          </div>

        </form>

       
        <div className="mt-8 flex justify-start">
         
           <Link to="/sendContract" className="bg-blue-900 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition">
            التالي
          </Link>
          
        </div>

      </div>
    </div>
  );
}