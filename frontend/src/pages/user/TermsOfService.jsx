import AccordionItem from "../../components/user/AccordionItem";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white from-slate-50 to-orange-50">
            <div className="max-w-5xl mx-auto px-4 py-16">

                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Điều khoản sử dụng
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Khi truy cập, đăng ký tài khoản hoặc mua sách trên website,
                        bạn xác nhận đã đọc, hiểu và đồng ý tuân thủ toàn bộ các điều khoản
                        sử dụng dưới đây. Điều khoản này nhằm đảm bảo quyền lợi hợp pháp
                        của cả khách hàng và website.
                    </p>
                </div>

                <div className="space-y-6">

                    <AccordionItem title="1. Phạm vi áp dụng và định nghĩa">
                        <div className="space-y-3">
                            <p>
                                Điều khoản sử dụng này áp dụng cho tất cả cá nhân, tổ chức
                                truy cập, đăng ký tài khoản, đặt mua sách hoặc sử dụng
                                bất kỳ dịch vụ nào được cung cấp trên website.
                            </p>
                            <p>
                                Trong phạm vi điều khoản này:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>
                                    <strong>“Website”</strong> là nền tảng thương mại điện tử
                                    bán sách do chúng tôi vận hành.
                                </li>
                                <li>
                                    <strong>“Người dùng”</strong> là cá nhân hoặc tổ chức
                                    truy cập hoặc sử dụng dịch vụ.
                                </li>
                            </ul>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="2. Điều kiện đăng ký và sử dụng tài khoản">
                        <div className="space-y-3">
                            <p>
                                Người dùng phải cung cấp thông tin chính xác, đầy đủ khi
                                đăng ký tài khoản. Mỗi người dùng chịu trách nhiệm:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Bảo mật tên đăng nhập và mật khẩu</li>
                                <li>Mọi hoạt động phát sinh từ tài khoản của mình</li>
                                <li>Cập nhật thông tin khi có thay đổi</li>
                            </ul>
                            <p>
                                Website có quyền tạm khóa hoặc chấm dứt tài khoản nếu
                                phát hiện thông tin giả mạo hoặc hành vi vi phạm điều khoản.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="3. Quy trình đặt mua và thanh toán">
                        <div className="space-y-3">
                            <p>
                                Khi đặt mua sách trên website, người dùng đồng ý rằng:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Thông tin đơn hàng là chính xác</li>
                                <li>Giá bán và phí vận chuyển được hiển thị công khai</li>
                                <li>Thanh toán được thực hiện theo các phương thức hỗ trợ</li>
                            </ul>
                            <p>
                                Website có quyền từ chối hoặc hủy đơn hàng trong trường hợp
                                phát hiện gian lận, sai giá hoặc lỗi hệ thống.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="4. Hành vi bị nghiêm cấm">
                        <div className="space-y-3">
                            <p>
                                Người dùng không được thực hiện các hành vi sau:
                            </p>
                            <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Gian lận, giả mạo thông tin cá nhân</li>
                                    <li>Tấn công, xâm nhập trái phép hệ thống</li>
                                    <li>Phát tán mã độc, virus hoặc phần mềm gây hại</li>
                                    <li>Sao chép nội dung website khi chưa được cho phép</li>
                                    <li>Vi phạm pháp luật Việt Nam</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="5. Quyền và trách nhiệm của website">
                        <div className="space-y-3">
                            <p>
                                Website có quyền:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Cập nhật, thay đổi nội dung và tính năng</li>
                                <li>Tạm ngưng hoặc chấm dứt dịch vụ để bảo trì</li>
                                <li>Xử lý các hành vi vi phạm điều khoản</li>
                            </ul>
                            <p>
                                Đồng thời, website cam kết cung cấp thông tin minh bạch,
                                bảo vệ dữ liệu cá nhân và hỗ trợ khách hàng theo đúng
                                quy định pháp luật.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="6. Giới hạn trách nhiệm pháp lý">
                        <div className="space-y-3">
                            <p>
                                Website không chịu trách nhiệm đối với các thiệt hại phát sinh
                                trong các trường hợp sau:
                            </p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Sự cố kỹ thuật ngoài tầm kiểm soát</li>
                                <li>Lỗi từ phía người dùng hoặc bên thứ ba</li>
                                <li>Sự kiện bất khả kháng theo quy định pháp luật</li>
                            </ul>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="7. Thay đổi điều khoản và hiệu lực">
                        <div className="space-y-3">
                            <p>
                                Website có quyền sửa đổi, bổ sung điều khoản sử dụng
                                bất kỳ lúc nào để phù hợp với hoạt động và pháp luật.
                            </p>
                            <p>
                                Phiên bản cập nhật sẽ có hiệu lực ngay khi được công bố
                                trên website. Việc tiếp tục sử dụng dịch vụ đồng nghĩa
                                với việc bạn chấp nhận các thay đổi này.
                            </p>
                        </div>
                    </AccordionItem>

                </div>
            </div>
        </div>
    );
}
