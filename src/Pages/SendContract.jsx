export default function SendContract() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-10">
        
        <h2 className="text-right text-xl font-semibold mb-6">
          إرسال العقد إلى
        </h2>

        <form className="space-y-4">
          
          <div>
            <label className="block text-right text-sm mb-1">الاسم</label>
            <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-right text-sm mb-1">رقم الهاتف</label>
            <input type="tel"className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block text-right text-sm mb-1">المبلغ</label>
            <input type="number" placeholder="اكتب السعر بالجنيه المصري"className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition" >
            إرسال
          </button>

        </form>

      </div>
    </div>
  );
}