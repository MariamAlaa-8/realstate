import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
     <nav className="bg-blue-900 text-white px-4 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3 text-sm">
         
         
              <Link to="/login" className="bg-white text-blue-900 px-4 py-1 rounded">
                        تسجيل الدخول
                    </Link>
                     <button className="border px-3 py-1 rounded">
            English | عربي
          </button>
                    
           
        </div>
        <div className="flex items-center gap-2 text-lg font-bold">
         النظام العقاري الذكي 🏢 
        </div>

      
      </nav>

  )
}
