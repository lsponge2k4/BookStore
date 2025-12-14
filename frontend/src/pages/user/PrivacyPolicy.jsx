import AccordionItem from "../../components/user/AccordionItem";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white from-slate-50 to-indigo-50">
            <div className="max-w-5xl mx-auto px-4 py-16">

                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Chính sách bảo mật
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Chúng tôi cam kết bảo vệ tuyệt đối quyền riêng tư và thông tin
                        cá nhân của khách hàng khi truy cập và sử dụng website bán sách.
                        Chính sách này giải thích rõ cách dữ liệu được thu thập, sử dụng,
                        lưu trữ và bảo vệ theo đúng quy định pháp luật Việt Nam.
                    </p>
                </div>

                <div className="space-y-6">

                    <AccordionItem title="1. Cơ sở pháp lý và phạm vi áp dụng">
                        <div className="space-y-4">
                            <p>
                                Chính sách bảo mật này được xây dựng và áp dụng phù hợp với
                                các quy định pháp luật hiện hành của Việt Nam, bao gồm nhưng
                                không giới hạn:
                            </p>

                            <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Luật An ninh mạng số 24/2018/QH14</li>
                                    <li>Bộ luật Dân sự năm 2015</li>
                                    <li>Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân</li>
                                    <li>Luật Bảo vệ quyền lợi người tiêu dùng năm 2023</li>
                                </ul>
                            </div>

                            <p>
                                Chính sách này áp dụng cho toàn bộ người dùng truy cập,
                                đăng ký tài khoản, đặt mua sách hoặc sử dụng bất kỳ
                                dịch vụ nào trên website.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="2. Loại thông tin cá nhân được thu thập">
                        <div className="space-y-3">
                            <p>
                                Trong quá trình vận hành website, chúng tôi có thể thu thập
                                các loại thông tin sau:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Thông tin định danh: họ tên, email, số điện thoại</li>
                                <li>Thông tin giao dịch: địa chỉ giao hàng, lịch sử đơn hàng</li>
                                <li>Thông tin tài khoản: tên đăng nhập, mật khẩu đã mã hóa</li>
                                <li>Hành vi sử dụng: lượt xem, tìm kiếm, đánh giá sách</li>
                                <li>Dữ liệu kỹ thuật: địa chỉ IP, trình duyệt, thiết bị</li>
                            </ul>
                            <p className="italic text-sm text-gray-600">
                                Chúng tôi không thu thập dữ liệu nhạy cảm trái phép theo quy định pháp luật.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="3. Mục đích sử dụng thông tin cá nhân">
                        <div className="space-y-3">
                            <p>
                                Thông tin cá nhân của khách hàng được sử dụng cho các mục đích hợp pháp sau:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Xử lý đơn hàng, thanh toán và giao sách</li>
                                <li>Quản lý tài khoản và xác thực người dùng</li>
                                <li>Hỗ trợ khách hàng, tiếp nhận và xử lý khiếu nại</li>
                                <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng</li>
                                <li>Thực hiện nghĩa vụ pháp lý theo yêu cầu của cơ quan nhà nước</li>
                            </ul>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="4. Bảo mật, lưu trữ và thời gian giữ dữ liệu">
                        <div className="space-y-3">
                            <p>
                                Chúng tôi áp dụng nhiều biện pháp kỹ thuật và tổ chức nhằm
                                bảo vệ thông tin cá nhân khỏi truy cập trái phép, mất mát
                                hoặc rò rỉ dữ liệu.
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Sử dụng HTTPS (SSL/TLS) cho toàn bộ website</li>
                                <li>Mật khẩu được mã hóa một chiều (hash)</li>
                                <li>Phân quyền truy cập dữ liệu nội bộ</li>
                                <li>Sao lưu và phục hồi dữ liệu định kỳ</li>
                            </ul>
                            <p>
                                Dữ liệu cá nhân sẽ được lưu trữ trong thời gian cần thiết
                                cho mục đích xử lý hoặc theo yêu cầu của pháp luật.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="5. Quyền của khách hàng đối với dữ liệu cá nhân">
                        <div className="space-y-3">
                            <p>
                                Theo Nghị định 13/2023/NĐ-CP, khách hàng có đầy đủ các quyền sau:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Quyền được biết và đồng ý về việc xử lý dữ liệu</li>
                                <li>Quyền truy cập, chỉnh sửa hoặc cập nhật thông tin</li>
                                <li>Quyền yêu cầu xóa hoặc hạn chế xử lý dữ liệu</li>
                                <li>Quyền rút lại sự đồng ý bất cứ lúc nào</li>
                                <li>Quyền khiếu nại, tố cáo khi dữ liệu bị sử dụng sai</li>
                            </ul>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="6. Liên hệ & đặt lại mật khẩu">
                        <div className="space-y-3">
                            <p>
                                Khi khách hàng quên mật khẩu, hệ thống sẽ gửi liên kết
                                đặt lại mật khẩu an toàn đến email đã đăng ký.
                                Chúng tôi tuyệt đối không gửi mật khẩu gốc qua email.
                            </p>
                            <p className="font-semibold text-indigo-700">
                                📧 Email hỗ trợ: phamhoangvipro@gmail.com
                            </p>
                        </div>
                    </AccordionItem>

                </div>
            </div>
        </div>
    );
}
