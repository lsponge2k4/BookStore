# Đề tài phát triển phần mềm web an toàn.
+ Môn học: Phát triển phần mềm Web an toàn.
+ Tên đề tài: Phát triển website bán sách trực tuyến với các biện pháp bảo mật.
+ Giảng viên hướng dẫn: ThS. Phương Văn Cảnh.
+ Lớp: D17CNPM1.

# Giới thiệu tổng quan đề tài: 
 Website bán sách trong dự án này được nhóm em xây dựng theo định hướng phát triển web an toàn, chú trọng bảo vệ dữ liệu và người dùng ngay từ khâu thiết kế. Hệ thống đã triển khai chính sách bảo mật và nâng cao nhận thức an toàn thông tin, sử dụng Cloudflare để thiết lập WAF, chống các lỗ hổng bảo mật phổ biến và đảm bảo website hoạt động trên giao thức HTTPS với chứng chỉ SSL hợp lệ. Ứng dụng và các thành phần liên quan được cập nhật phần mềm và plugin định kỳ nhằm hạn chế rủi ro từ các lỗ hổng đã biết. Website có cơ chế kiểm tra và xác thực dữ liệu đầu vào, kết hợp với quản lý, phân quyền người dùng rõ ràng để ngăn chặn truy cập trái phép. Ngoài ra, hệ thống còn tự động ghi log hoạt động, hỗ trợ giám sát và phát hiện sự cố, đồng thời xây dựng kế hoạch sao lưu và phục hồi dữ liệu nhằm đảm bảo tính sẵn sàng và an toàn cho toàn bộ hệ thống.

# Sinh viên thực hiện:

👦 Phạm Bá Hoàng - Mã sinh viên: 22810310196
Công việc thực hiện: 
    + Thiết lập tường lửa (WAF) và chống các bảo mật phổ biến qua Cloudflare
    + Viết mã validation, thông tin đầu vào để bảo mật.
    + Quản lý và phân quyền người dùng.
    + Thiết lập hệ thống ghi log tự động.
    + Lên kế hoạch sao lưu và phục hồi dữ liệu.
    + Cập nhật ứng dụng và plugin.
    + Chính sách bảo mật và nâng cao nhận thức.
    + Thu thập và soạn thông tin cho báo cáo.
    + Cập nhập phần mềm định kỳ.
    + Code backend và frontend.

👩‍🦰 Nguyễn Hiền Mai - Mã sinh viên: 22810310091
Công việc thực hiện: 
    + Thu thập và soạn thông tin cho báo cáo.
    + Làm báo cáo.
    + Chính sách bảo mật và nâng cao nhận thức.
    + Cập nhập phần mềm định kỳ.
    + Cập nhật ứng dụng và plugin.
    + Kế hoạch sao lưu và phục hồi dư liệu.
    + Code frontend.

# Nội dung yêu cầu của môn học và kết quả đã đạt, khi thực hiện các yêu cầu đó của nhóm.
# ✅ Dấu tích xanh thể hiện các yêu cầu mà nhóm đã hoàn thiện theo đúng yêu cầu của môn học.
+ Chính sách bảo mật và nâng cao nhận thức.✅

+ Thiết lập WAF và chống các bảo mật phổ biến qua Cloudflare( Website phải có chứng chỉ SSL).✅

+ Cập nhật phần mềm định kỳ.✅

+ Cập nhập ứng dụng và plugin.✅

+ Có validation cho đầu vào. ✅

+ Quản lý và phân quyền người dùng.✅

+ Dùng hệ thống ghi log tự động. ✅

+ Kế hoạch sao lưu và phục hồi dữ liệu. ✅

# Hướng dẫn sử dụng mã nguồn và deploy lên Website.
# a.Dịch vụ và công nghệ chính mà nhóm em sử dụng:
 + Tailway  : Triển khai cơ sở dữ liệu MySQL.
 + Render   : Triển khai mã nguồn backend lên Internet và hỗ trợ ghi log hệ thống tự động.
 + Vinahost : Mua và quản lý tên miền (domain) cho website.
 + dataonline : Mua và sử dụng dịch vụ hosting để triển khai mã nguồn frontend lên Internet.
 + Cloudflare : Thiết lập tường lửa ứng dụng web (WAF), bảo vệ website và hạn chế các cuộc tấn công từ bên ngoài.

# b.Thiết lập môi trường chạy dự án trên localhost:
 + B1: Sử dụng mã nguồn của dự án do nhóm em triển khai và quản lý trên GitHub.
 + B2: Tạo file .env và tham khảo file .env.example để thêm các biến môi trường tương ứng vào file .env trước khi chạy dự án.
 + B3: Truy cập vào thư mục backend và frontend, sau đó chạy lệnh npm install để cài đặt các thư viện cần thiết.
 + B4: Trong từng thư mục backend và frontend, chạy lệnh sau để khởi động dự án trên môi trường localhost:
   Backend:
    + npm run dev (npm run start hoặc npm start)
    Hình ảnh chạy đúng:
   Frontend: 
    + npm run dev
    Hình ảnh chạy đúng: 
 + B5: Mở trang web trên localhost với frontend. => ( http://localhost:5173/)

 # c.Sử dụng website mà nhóm em đã deploy dự án lên Internet: (https://foodietired.io.vn/)

 # d.Tài khoản demo dự án :
 + Tài khoản admin : 
    + Email: lsponge2k4@gmail.com
    + Password: Hoang@123
 + Tài khoản người dùng: Người dùng có thể tự đăng ký tài khoản tại trang đăng ký của website. Ngoài ra, để thuận tiện cho việc kiểm thử nhanh, nhóm em cung cấp sẵn một tài khoản mẫu như sau:
    + Email: john@gmail.com
    + Password: Hoang@123
 # e. Dữ liệu MYSQL để test dự án: core/dump-bookstore_db-202512151424.sql.
    
 # Một số kết quả hình ảnh của dự án đã triển khai:
 + Chính sách bảo mật và nâng cao nhận thức.✅

 + Thiết lập WAF và chống các bảo mật phổ biến qua Cloudflare( Website phải có chứng chỉ SSL).✅

 + Cập nhật phần mềm định kỳ.✅

 + Cập nhập ứng dụng và plugin.✅

 + Có validation cho đầu vào. ✅

 + Quản lý và phân quyền người dùng.✅

 + Dùng hệ thống ghi log tự động. ✅

 + Kế hoạch sao lưu và phục hồi dữ liệu. ✅
