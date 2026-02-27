    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import API from '../api';

    export default function AdminDashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);
    const [pendingContracts, setPendingContracts] = useState([]);
    const [recentContracts, setRecentContracts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedContract, setSelectedContract] = useState(null);
    const [rejectionReason, setRejectionReason] = useState('');
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [showContractModal, setShowContractModal] = useState(false);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
        setLoading(true);
        const response = await API.get('/admin/dashboard');
        console.log('Dashboard data:', response.data);
        
        setStats(response.data.statistics);
        setPendingContracts(response.data.pendingContracts || []);
        setRecentContracts(response.data.recentContracts || []);
        setUsers(response.data.users || []);
        } catch (err) {
        console.error('Error fetching dashboard:', err);
        setError('حدث خطأ في تحميل البيانات');
        if (err.response?.status === 403) {
            navigate('/login');
        }
        } finally {
        setLoading(false);
        }
    };

    const handleAcceptContract = async (contractId) => {
        try {
        const response = await API.put(`/admin/contracts/${contractId}/accept`, {
            notes: 'تم الموافقة على العقد'
        });
        
        setSuccessMessage(`✅ تم قبول العقد بنجاح`);
        fetchDashboardData();  
        
        setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
        console.error('Error accepting contract:', err);
        setError('حدث خطأ في قبول العقد');
        }
    };

    const handleRejectContract = async () => {
        if (!rejectionReason.trim()) {
        setError('يرجى إدخال سبب الرفض');
        return;
        }

        try {
        const response = await API.put(`/admin/contracts/${selectedContract._id}/reject`, {
            reason: rejectionReason
        });
        
        setSuccessMessage(`✅ تم رفض العقد بنجاح`);
        setShowRejectModal(false);
        setSelectedContract(null);
        setRejectionReason('');
        fetchDashboardData(); 
        
        setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
        console.error('Error rejecting contract:', err);
        setError('حدث خطأ في رفض العقد');
        }
    };

    const handleDeleteInactiveUsers = async () => {
        if (!window.confirm('هل أنت متأكد من حذف المستخدمين الغير نشطين (أكثر من 30 يوم)؟')) {
        return;
        }

        try {
        const response = await API.delete('/admin/delete-inactive-users');
        setSuccessMessage(`✅ تم حذف ${response.data.deletedCount} مستخدم غير نشط`);
        fetchDashboardData(); 
        
        setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
        console.error('Error deleting inactive users:', err);
        setError('حدث خطأ في حذف المستخدمين');
        }
    };

    const handleDeleteUser = async (userId, userName) => {
        if (!window.confirm(`هل أنت متأكد من حذف المستخدم ${userName} وجميع عقوده؟`)) {
        return;
        }

        try {
        await API.delete(`/admin/user/${userId}`);
        setSuccessMessage(`✅ تم حذف المستخدم بنجاح`);
        fetchDashboardData(); 
        
        setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
        console.error('Error deleting user:', err);
        setError('حدث خطأ في حذف المستخدم');
        }
    };

    const handleViewContract = (contract) => {
        setSelectedContract(contract);
        setShowContractModal(true);
    };

    const handleShowRejectModal = (contract) => {
        setSelectedContract(contract);
        setShowRejectModal(true);
    };

    const getStatusBadge = (status) => {
        switch(status) {
        case 'pending':
            return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">⏳ قيد المراجعة</span>;
        case 'approved':
            return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✅ مقبول</span>;
        case 'rejected':
            return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">❌ مرفوض</span>;
        case 'completed':
            return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🏆 مكتمل</span>;
        default:
            return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{status}</span>;
        }
    };

    if (loading) {
        return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600 text-lg">جاري التحميل...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100" dir="rtl">
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
                <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
                <button
                onClick={handleDeleteInactiveUsers}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                >
                <span>🗑️</span>
                حذف المستخدمين الغير نشطين
                </button>
            </div>

            <div className="flex space-x-8 space-x-reverse border-b">
                <button
                onClick={() => setActiveTab('dashboard')}
                className={`pb-4 px-1 ${activeTab === 'dashboard' ? 'border-b-2 border-blue-900 text-blue-900 font-medium' : 'text-gray-500'}`}
                >
                الرئيسية
                </button>
                <button
                onClick={() => setActiveTab('contracts')}
                className={`pb-4 px-1 ${activeTab === 'contracts' ? 'border-b-2 border-blue-900 text-blue-900 font-medium' : 'text-gray-500'}`}
                >
                العقود {pendingContracts.length > 0 && `(${pendingContracts.length} جديدة)`}
                </button>
                <button
                onClick={() => setActiveTab('users')}
                className={`pb-4 px-1 ${activeTab === 'users' ? 'border-b-2 border-blue-900 text-blue-900 font-medium' : 'text-gray-500'}`}
                >
                المستخدمين
                </button>
            </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center">
                <span className="ml-2 text-xl">❌</span>
                <span>{error}</span>
                <button onClick={() => setError('')} className="mr-auto text-red-700">✕</button>
            </div>
            )}

            {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center">
                <span className="ml-2 text-xl">✅</span>
                <span>{successMessage}</span>
            </div>
            )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {activeTab === 'dashboard' && (
            <div className="space-y-6">
                {stats && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-blue-100 rounded-full p-3 ml-4">
                            <span className="text-blue-600 text-2xl">📄</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي العقود</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalContracts}</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-yellow-100 rounded-full p-3 ml-4">
                            <span className="text-yellow-600 text-2xl">⏳</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">قيد المراجعة</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.pendingContracts}</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-green-100 rounded-full p-3 ml-4">
                            <span className="text-green-600 text-2xl">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">مقبولة</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.approvedContracts}</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-red-100 rounded-full p-3 ml-4">
                            <span className="text-red-600 text-2xl">❌</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">مرفوضة</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.rejectedContracts}</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-purple-100 rounded-full p-3 ml-4">
                            <span className="text-purple-600 text-2xl">👥</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي المستخدمين</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-green-100 rounded-full p-3 ml-4">
                            <span className="text-green-600 text-2xl">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المستخدمين النشطين</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
                            <p className="text-xs text-gray-500">{stats.activePercentage}%</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                        <div className="bg-yellow-100 rounded-full p-3 ml-4">
                            <span className="text-yellow-600 text-2xl">⚠️</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المستخدمين الغير نشطين</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.inactiveUsers}</p>
                            <p className="text-xs text-gray-500">{stats.inactivePercentage}%</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
                )}

                {pendingContracts.length > 0 && (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-yellow-50">
                    <h2 className="text-xl font-semibold text-yellow-800 flex items-center gap-2">
                        <span>⏳</span>
                        عقود في انتظار المراجعة ({pendingContracts.length})
                    </h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                    {pendingContracts.map((contract) => (
                        <div key={contract._id} className="p-6 hover:bg-gray-50 transition">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="font-bold text-blue-900">{contract.contractNumber}</span>
                                {getStatusBadge(contract.status)}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                <span className="text-gray-500">المالك:</span>
                                <span className="mr-2 font-medium">{contract.fullName}</span>
                                </div>
                                <div>
                                <span className="text-gray-500">نوع العقار:</span>
                                <span className="mr-2 font-medium">{contract.propertyType}</span>
                                </div>
                                <div>
                                <span className="text-gray-500">السعر:</span>
                                <span className="mr-2 font-medium">{contract.formattedPrice}</span>
                                </div>
                                <div>
                                <span className="text-gray-500">المساحة:</span>
                                <span className="mr-2 font-medium">{contract.formattedArea}</span>
                                </div>
                            </div>
                            </div>
                            <div className="flex gap-2 mr-4">
                            <button
                                onClick={() => handleViewContract(contract)}
                                className="px-3 py-1 text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg text-sm"
                            >
                                عرض
                            </button>
                            <button
                                onClick={() => handleAcceptContract(contract._id)}
                                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                            >
                                قبول
                            </button>
                            <button
                                onClick={() => handleShowRejectModal(contract)}
                                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                            >
                                رفض
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
            )}

            {activeTab === 'contracts' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">جميع العقود</h2>
                </div>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم العقد</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المالك</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">نوع العقار</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">السعر</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">إجراءات</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {recentContracts.map((contract) => (
                        <tr key={contract._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{contract.contractNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{contract.userId?.fullName || 'غير معروف'}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{contract.propertyType}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{contract.formattedPrice}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(contract.status)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {new Date(contract.createdAt).toLocaleDateString('ar-EG')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                            onClick={() => handleViewContract(contract)}
                            className="text-blue-600 hover:text-blue-900 ml-3"
                            >
                            عرض
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            )}

            {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">المستخدمين</h2>
                </div>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الهاتف</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الرقم القومي</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عدد العقود</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">آخر نشاط</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">إجراءات</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{user.fullName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.phoneNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.nationalId}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.contractCount || 0}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {new Date(user.lastActivity).toLocaleDateString('ar-EG')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {user.inactive ? (
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">غير نشط</span>
                            ) : (
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">نشط</span>
                            )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button
                            onClick={() => handleDeleteUser(user._id, user.fullName)}
                            className="text-red-600 hover:text-red-900"
                            >
                            حذف
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            )}
        </div>

        {showContractModal && selectedContract && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-lg bg-white">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">تفاصيل العقد</h3>
                <button
                    onClick={() => setShowContractModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ✕
                </button>
                </div>
                
                <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">رقم العقد: <span className="font-bold text-blue-900">{selectedContract.contractNumber}</span></p>
                    <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">الحالة:</span>
                    {getStatusBadge(selectedContract.status)}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <p className="text-sm text-gray-500">المالك</p>
                    <p className="font-medium">{selectedContract.fullName}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">رقم الهاتف</p>
                    <p className="font-medium">{selectedContract.phoneNumber}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">الرقم القومي</p>
                    <p className="font-medium">{selectedContract.nationalId}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">رقم العقار</p>
                    <p className="font-medium">{selectedContract.propertyNumber}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">نوع العقار</p>
                    <p className="font-medium">{selectedContract.propertyType}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">نسبة الملكية</p>
                    <p className="font-medium">{selectedContract.ownershipPercentage}%</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">السعر</p>
                    <p className="font-medium">{selectedContract.formattedPrice}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">المساحة</p>
                    <p className="font-medium">{selectedContract.formattedArea}</p>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500">العنوان</p>
                    <p className="font-medium">{selectedContract.address}</p>
                    <p className="text-sm text-gray-600">المحافظة: {selectedContract.governorate}</p>
                </div>

                {selectedContract.floor && (
                    <div>
                    <p className="text-sm text-gray-500">الطابق</p>
                    <p className="font-medium">{selectedContract.floor}</p>
                    </div>
                )}

                {selectedContract.notes && (
                    <div>
                    <p className="text-sm text-gray-500">ملاحظات</p>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{selectedContract.notes}</p>
                    </div>
                )}

                {selectedContract.imageUrl && (
                    <div>
                    <p className="text-sm text-gray-500 mb-2">صورة العقد</p>
                    <img 
                        src={selectedContract.imageUrl} 
                        alt="Contract" 
                        className="max-w-full h-auto rounded-lg border"
                    />
                    </div>
                )}

                <div className="flex justify-end gap-3 mt-6">
                    {selectedContract.status === 'pending' && (
                    <>
                        <button
                        onClick={() => {
                            handleAcceptContract(selectedContract._id);
                            setShowContractModal(false);
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                        قبول
                        </button>
                        <button
                        onClick={() => {
                            setShowContractModal(false);
                            handleShowRejectModal(selectedContract);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                        رفض
                        </button>
                    </>
                    )}
                    <button
                    onClick={() => setShowContractModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                    إغلاق
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}

        {showRejectModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-lg bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-4">رفض العقد</h3>
                
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    سبب الرفض
                </label>
                <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    rows="4"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:border-blue-800"
                    placeholder="اكتب سبب رفض العقد..."
                />
                </div>

                <div className="flex justify-end gap-3">
                <button
                    onClick={() => {
                    setShowRejectModal(false);
                    setSelectedContract(null);
                    setRejectionReason('');
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                    إلغاء
                </button>
                <button
                    onClick={handleRejectContract}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    تأكيد الرفض
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }