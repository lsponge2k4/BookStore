export default function Location() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Các nhà sách của chúng tôi</h1>
                    <p className="text-gray-600">Hãy ghé thăm bất kỳ chi nhánh nào của chúng tôi trên toàn thành phố</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Chi nhánh Hà Nội */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/phuongnambook.jpg"
                            alt="Chi nhánh Hà Nội"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Chi nhánh Hà Nội</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    123 Phố Huế, Quận Hai Bà Trưng, Hà Nội
                                </p>
                                <p className="flex items-center gap-2">
                                    (024) 1234-5678
                                </p>
                                <p className="flex items-center gap-2">
                                    hanoistore@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Giờ mở cửa:</p>
                                    <p>Thứ Hai - Thứ Sáu: 9:00 - 20:00</p>
                                    <p>Thứ Bảy: 10:00 - 18:00</p>
                                    <p>Chủ Nhật: 12:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chi nhánh TP. Hồ Chí Minh */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/nhanamstore.webp"
                            alt="Chi nhánh TP. HCM"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Chi nhánh TP. Hồ Chí Minh</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    456 Lê Lợi, Quận 1, TP. Hồ Chí Minh
                                </p>
                                <p className="flex items-center gap-2">
                                    (028) 2345-6789
                                </p>
                                <p className="flex items-center gap-2">
                                    hcmstore@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Giờ mở cửa:</p>
                                    <p>Thứ Hai - Thứ Sáu: 8:00 - 21:00</p>
                                    <p>Thứ Bảy: 11:00 - 19:00</p>
                                    <p>Chủ Nhật: 11:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chi nhánh Đà Nẵng */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src="/tanviet.webp"
                            alt="Chi nhánh Đà Nẵng"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Chi nhánh Đà Nẵng</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p className="flex items-center gap-2">
                                    789 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng
                                </p>
                                <p className="flex items-center gap-2">
                                    (0236) 345-6789
                                </p>
                                <p className="flex items-center gap-2">
                                    danangstore@iymbookstore.com
                                </p>
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Giờ mở cửa:</p>
                                    <p>Thứ Hai - Thứ Sáu: 10:00 - 21:00</p>
                                    <p>Thứ Bảy: 10:00 - 19:00</p>
                                    <p>Chủ Nhật: 11:00 - 19:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cần chỉ đường? */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Cần chỉ đường?</h2>
                    <p className="text-gray-600 mb-6">
                        Không tìm thấy chúng tôi? Hãy gọi điện hoặc gửi email và chúng tôi sẽ giúp bạn đến đây!
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="tel:+842412345678"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Gọi cho chúng tôi
                        </a>
                        <a
                            href="mailto:info@iymbookstore.com"
                            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            Gửi email
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
