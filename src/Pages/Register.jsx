import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'

export default function Register() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    nationalId: '',
    phoneNumber: '',
    agreeToTerms: false
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.fullName || !formData.password || !formData.confirmPassword || 
        !formData.nationalId || !formData.phoneNumber) {
      setError('جميع الحقول مطلوبة')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة')
      return
    }

    if (!formData.agreeToTerms) {
      setError('يجب الموافقة على الشروط والأحكام')
      return
    }

    setLoading(true)

    try {
      const response = await API.post('/users/register', {
        fullName: formData.fullName,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        nationalId: formData.nationalId,
        phoneNumber: formData.phoneNumber
      })

      setSuccess('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.')
      
      setFormData({
        fullName: '',
        password: '',
        confirmPassword: '',
        nationalId: '',
        phoneNumber: '',
        agreeToTerms: false
      })

// You will be redirected to the login page after 3 seconds
      setTimeout(() => {
        navigate('/login')
      }, 3000)

    } catch (error) {
      console.error('Registration error:', error)
      const message = error.response?.data?.message || 
                    error.response?.data?.error || 
                    error.message || 
                    'حدث خطأ أثناء التسجيل'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans" dir="rtl">
      <div className="w-full max-w-md px-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          إنشاء حساب جديد
        </h1>
        <p className="text-center text-gray-400 mt-2 mb-8">
          مرحباً! انضم إلينا.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            <div className="flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>{success}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm text-gray-600 mb-1">الاسم بالكامل</label>
          <div className="relative mb-4">
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-600" 
              placeholder="أدخل اسمك بالكامل"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              👤
            </span>
          </div>

          <label className="block text-sm text-gray-600 mb-1">كلمة المرور</label>
          <div className="relative mb-4">
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pr-10 pl-10 outline-none focus:border-blue-600" 
              placeholder="أدخل كلمة المرور"
              required
              minLength="6"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔑
            </span>
          </div>

          <label className="block text-sm text-gray-600 mb-1">تأكيد كلمة المرور</label>
          <div className="relative mb-4">
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pr-10 pl-10 outline-none focus:border-blue-600" 
              placeholder="أعد إدخال كلمة المرور"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔑
            </span>
          </div>

          <label className="block text-sm text-gray-600 mb-1">الرقم القومي</label>
          <input 
            type="text" 
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            className="w-full border rounded-lg py-3 px-3 mb-4 outline-none focus:border-blue-600"
            placeholder="أدخل الرقم القومي 14 رقم"
            required
            minLength="14"
            maxLength="14"
          />

          <label className="block text-sm text-gray-600 mb-1">رقم الهاتف</label>
          <div className="relative mb-6">
            <input 
              type="tel" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pr-10 pl-3 outline-none focus:border-blue-600" 
              placeholder="مثال: 01012345678"
              required
              pattern="01[0-9]{9}"
              title="يجب أن يبدأ بـ 01 ويحتوي على 11 رقماً"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              📞
            </span>
          </div>

          <div className="flex items-center gap-2 mb-6 text-sm">
            <input 
              type="checkbox" 
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4" 
              required
            />
            <span>
              أوافق على{' '}
              <a href="#" className="text-blue-600 underline">
                الشروط والأحكام
              </a>
            </span>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-blue-700' : 'bg-blue-900'} text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition disabled:opacity-70 flex items-center justify-center gap-2`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                جاري الإنشاء...
              </>
            ) : 'إنشاء حساب'}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          لديك حساب بالفعل؟{' '}
          <Link to="/login" className="text-blue-600 underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  )
}
