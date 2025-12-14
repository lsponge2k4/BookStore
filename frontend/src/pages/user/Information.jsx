
export default function Information() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Giới thiệu */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Giới thiệu về Nhà Sách</h1>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Hơn <strong>25 năm</strong>, Cửa Hàng Sách đã là một phần quan trọng của cộng đồng văn học, cung cấp những cuốn sách được tuyển chọn kỹ lưỡng, truyền cảm hứng, mở rộng kiến thức và lưu giữ lịch sử.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Niềm đam mê với sách là động lực cho mọi hoạt động của chúng tôi — từ việc chọn lựa từng tựa sách trong bộ sưu tập đến cung cấp các gợi ý cá nhân hóa cho từng độc giả ghé thăm cửa hàng.
                        </p>
                        <a
                            href="/location"
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Ghé thăm các cửa hàng
                        </a>
                    </div>
                    <div>
                        <img
                            src="/lovebook.webp"
                            alt="Không gian Nhà Sách"
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </div>
                </div>

                {/* Sứ mệnh */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Sứ mệnh của chúng tôi</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Chúng tôi mong muốn nuôi dưỡng tình yêu đọc sách bằng cách cung cấp những cuốn sách xuất sắc giúp giáo dục, truyền cảm hứng và giải trí. Chúng tôi tin vào sức mạnh biến đổi của văn học để kết nối con người, mở rộng tầm nhìn và làm phong phú cuộc sống.
                    </p>
                </div>

                {/* Bộ sưu tập đặc biệt */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Bộ sưu tập đặc biệt</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Tình yêu */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">❤️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Tình Yêu & Lãng Mạn</h3>
                            <p className="text-gray-600 text-sm">
                                Từ những câu chuyện tình cổ điển đến tiểu thuyết lãng mạn hiện đại, khám phá những cuốn sách tôn vinh nhiều khía cạnh của tình yêu và kết nối con người.
                            </p>
                        </div>

                        {/* Học tập */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📚</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kiến Thức & Học Tập</h3>
                            <p className="text-gray-600 text-sm">
                                Mở rộng kiến thức với bộ sưu tập sách giáo dục, hướng dẫn phát triển bản thân và những cuốn sách gợi mở tư duy cho sự phát triển suốt đời.
                            </p>
                        </div>

                        {/* Lịch sử */}
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📜</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lịch Sử & Di Sản</h3>
                            <p className="text-gray-600 text-sm">
                                Hành trình qua thời gian với những ghi chép lịch sử, tiểu sử và câu chuyện văn hóa được tuyển chọn kỹ lưỡng, giúp lưu giữ và chia sẻ quá khứ chung của chúng ta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dịch vụ */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Dịch vụ của chúng tôi</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">🚚</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Giao hàng miễn phí</h4>
                            <p className="text-sm text-gray-600">Miễn phí vận chuyển cho đơn hàng trên 1 triệu đồng. Giao hàng toàn quốc với thông tin theo dõi đầy đủ.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">🔄</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Đổi trả dễ dàng</h4>
                            <p className="text-sm text-gray-600">Không hài lòng? Trả sách trong vòng 30 ngày để được hoàn tiền đầy đủ. Không cần hỏi lý do.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">⭐</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Gợi ý cá nhân</h4>
                            <p className="text-sm text-gray-600">Nhân viên giàu kinh nghiệm cung cấp gợi ý sách phù hợp với sở thích đọc của bạn.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">📅</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Sự kiện Câu lạc bộ sách</h4>
                            <p className="text-sm text-gray-600">Tham gia các buổi họp câu lạc bộ sách hàng tháng và sự kiện với tác giả tại bất kỳ chi nhánh nào của chúng tôi.</p>
                        </div>
                    </div>
                </div>

                {/* Liên hệ */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Có thắc mắc về sách hoặc dịch vụ? Chúng tôi rất vui khi được nghe từ bạn!
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="mailto:info@iymbookstore.com"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                        >
                            Liên hệ
                        </a>
                        <a
                            href="/location"
                            className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition"
                        >
                            Ghé thăm cửa hàng
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
