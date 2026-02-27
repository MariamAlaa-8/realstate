    import React, { useState, useEffect } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import API from '../api';

    export default function RealEstate() {
    const navigate = useNavigate();
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');
    const [listingLoading, setListingLoading] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [cancelLoading, setCancelLoading] = useState(false);

    useEffect(() => {
        fetchContracts();
    }, []);

    const fetchContracts = async () => {
        try {
        setLoading(true);
        const response = await API.get('/contracts/my-contracts');
        console.log('📦 Contracts:', response.data);
        setContracts(response.data.contracts || []);
        } catch (err) {
        console.error('❌ Error fetching contracts:', err);
        setError('حدث خطأ في تحميل العقارات');
        if (err.response?.status === 401) {
            navigate('/login');
        }
        } finally {
        setLoading(false);
        }
    };

    const handleListForSale = async (contractId, currentPrice) => {
        const salePrice = prompt('أدخل سعر البيع (اتركه فارغاً لاستخدام السعر الحالي)', currentPrice);
        
        if (salePrice === null) return;
        
        setListingLoading(true);
        setError('');
        
        try {
        const response = await API.put(`/contracts/${contractId}/for-sale`, {
            salePrice: salePrice ? parseFloat(salePrice) : currentPrice
        });
        
        alert('✅ تم عرض العقار للبيع بنجاح');
        fetchContracts();
        
        } catch (err) {
        console.error('Error listing contract for sale:', err);
        setError(err.response?.data?.message || 'حدث خطأ في عرض العقار للبيع');
        } finally {
        setListingLoading(false);
        }
    };

    const handleStartSale = (contract) => {
        localStorage.setItem('currentContract', JSON.stringify(contract));
        navigate('/sendContract', { state: { contract } });
    };

    const handleConfirmPurchase = async (contractId) => {
        if (!window.confirm('هل أنت متأكد من تأكيد استلام العقار؟')) {
        return;
        }

        setConfirmLoading(true);
        try {
        const response = await API.put(`/contracts/${contractId}/confirm-purchase`);
        
        alert('✅ تم تأكيد استلام العقار بنجاح');
        fetchContracts();
        
        } catch (err) {
        console.error('❌ Error confirming purchase:', err);
        setError(err.response?.data?.message || 'حدث خطأ في تأكيد الشراء');
        } finally {
        setConfirmLoading(false);
        }
    };

    const handleCancelPayment = async (contractId) => {
        if (!window.confirm('هل أنت متأكد من إلغاء عملية الدفع؟')) {
        return;
        }

        setCancelLoading(true);
        try {
        const response = await API.put(`/contracts/${contractId}/cancel-payment`);
        
        alert('✅ تم إلغاء عملية الدفع بنجاح');
        fetchContracts();
        
        } catch (err) {
        console.error('❌ Error cancelling payment:', err);
        setError(err.response?.data?.message || 'حدث خطأ في إلغاء الدفع');
        } finally {
        setCancelLoading(false);
        }
    };

    const filteredContracts = contracts.filter(contract => {
        if (filter === 'all') return true;
        return contract.status === filter;
    });

    const pendingPaymentContracts = contracts.filter(c => c.status === 'sale_pending');
    
    const completedContracts = contracts.filter(c => c.status === 'completed');
    
    const approvedContracts = contracts.filter(c => c.status === 'approved');
    
    const forSaleContracts = contracts.filter(c => c.status === 'for_sale');
    
    const soldContracts = contracts.filter(c => c.status === 'sold');
    
    const pendingContracts = contracts.filter(c => c.status === 'pending');

    const getStatusBadge = (status) => {
        switch(status) {
        case 'approved':
            return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✅ مقبول</span>;
        case 'for_sale':
            return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🏷️ معروض للبيع</span>;
        case 'sold':
            return <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">💰 تم البيع</span>;
        case 'completed':
            return <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">🎉 تم الشراء</span>;
        case 'pending':
            return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">⏳ قيد المراجعة</span>;
        case 'rejected':
            return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">❌ مرفوض</span>;
        case 'sale_pending':
            return <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">⏳ في انتظار الدفع</span>;
        default:
            return null;
        }
    };

    if (loading) {
        return (
        <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
            <div className="w-full max-w-2xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري تحميل عقاراتك...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
        <div className="w-full max-w-2xl mx-auto px-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            عقاراتك
            </h1>
            
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                📋 الكل ({contracts.length})
            </button>
            <button
                onClick={() => setFilter('approved')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                filter === 'approved' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                ✅ مقبول ({approvedContracts.length})
            </button>
            <button
                onClick={() => setFilter('for_sale')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                filter === 'for_sale' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                🏷️ للبيع ({forSaleContracts.length})
            </button>
            <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                filter === 'completed' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                🎉 تم الشراء ({completedContracts.length})
            </button>
            <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                filter === 'pending' 
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                ⏳ قيد المراجعة ({pendingContracts.length})
            </button>
            </div>

            {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
            </div>
            )}

            {filteredContracts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">لا توجد عقارات</h3>
                <p className="text-gray-500 mb-4">
                {filter === 'approved' && 'لا توجد عقارات مقبولة بعد'}
                {filter === 'for_sale' && 'لا توجد عقارات معروضة للبيع'}
                {filter === 'completed' && 'لا توجد عقارات مشتراة'}
                {filter === 'pending' && 'لا توجد عقارات قيد المراجعة'}
                {filter === 'all' && 'لم تقم بإضافة أي عقار بعد'}
                </p>
            </div>
            ) : (
            <>
                {filteredContracts.map((contract, index) => (
                <div key={contract._id} className="mb-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                        <h2 className="text-lg font-semibold text-gray-700">
                        {contract.propertyType || 'عقار'} - {contract.area ? contract.area + ' م²' : ''}
                        </h2>
                        {getStatusBadge(contract.status)}
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex">
                        <span className="text-gray-600 w-40">رقم العقد:</span>
                        <span className="text-gray-800 font-medium">{contract.contractNumber}</span>
                        </div>

                        <div className="flex">
                        <span className="text-gray-600 w-40">الموقع:</span>
                        <span className="text-gray-800 font-medium">
                            {contract.governorate}، {contract.address}
                        </span>
                        </div>

                        <div className="flex">
                        <span className="text-gray-600 w-40">نسبة ملكيتك:</span>
                        <span className="text-green-600 font-bold">{contract.ownershipPercentage}%</span>
                        </div>

                        <div className="flex">
                        <span className="text-gray-600 w-40">السعر:</span>
                        <span className="text-gray-800 font-medium">{contract.formattedPrice}</span>
                        </div>

                        {contract.floor && (
                        <div className="flex">
                            <span className="text-gray-600 w-40">الطابق:</span>
                            <span className="text-gray-800 font-medium">{contract.floor}</span>
                        </div>
                        )}
                    </div>

                    <div className="mt-4 flex gap-2">
                        {contract.status === 'approved' && (
                        <button
                            onClick={() => handleListForSale(contract._id, contract.price)}
                            disabled={listingLoading}
                            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm disabled:opacity-50"
                        >
                            عرض للبيع
                        </button>
                        )}

                        {contract.status === 'for_sale' && (
                        <button
                            onClick={() => handleStartSale(contract)}
                            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                        >
                            بدء عملية البيع
                        </button>
                        )}

                        {contract.status === 'sold' && (
                        <div className="flex-1 text-center text-purple-600 font-medium text-sm py-2">
                            تم بيع هذا العقار
                        </div>
                        )}

                        {contract.status === 'completed' && (
                        <>
                            <div className="flex-1 text-center text-indigo-600 font-medium text-sm py-2">
                            ✅ تم الشراء
                            </div>
                           
                        </>
                        )}

                        {contract.status === 'pending' && (
                        <div className="flex-1 text-center text-yellow-600 font-medium text-sm py-2">
                            في انتظار مراجعة الأدمن
                        </div>
                        )}

                        {contract.status === 'sale_pending' && (
                        <>
                            <div className="flex-1 text-center text-orange-600 font-medium text-sm py-2">
                            في انتظار الدفع
                            </div>
                            <button
                            onClick={() => handleCancelPayment(contract._id)}
                            disabled={cancelLoading}
                            className="px-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm disabled:opacity-50"
                            >
                            {cancelLoading ? 'جاري...' : 'إلغاء'}
                            </button>
                        </>
                        )}

                        {contract.imageUrl && (
                        <button 
                            onClick={() => window.open(contract.imageUrl, '_blank')}
                            className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition text-sm"
                        >
                            📎 الصورة
                        </button>
                        )}
                    </div>
                    </div>

                    {index < filteredContracts.length - 1 && (
                    <div className="border-t border-gray-200 my-4"></div>
                    )}
                </div>
                ))}
            </>
            )}

            <div className="text-center mt-4">
            <Link 
                to="/requestrealestate" 
                className="inline-block w-full max-w-xs bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm"
            >
                + إضافة عقار جديد
            </Link>
            </div>
        </div>
        </div>
    );
    }
