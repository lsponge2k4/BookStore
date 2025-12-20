# Đề tài phát triển phần mềm web an toàn.
+ Môn học: Phát triển phần mềm Web an toàn.
+ Tên đề tài: Phát triển website bán sách trực tuyến với các biện pháp bảo mật.
+ Giảng viên hướng dẫn: ThS. Phương Văn Cảnh.
+ Lớp: D17CNPM1.

# Giới thiệu tổng quan đề tài: 
 Website bán sách trong dự án này được nhóm em xây dựng theo định hướng phát triển web an toàn, chú trọng bảo vệ dữ liệu và người dùng ngay từ khâu thiết kế. Hệ thống đã triển khai chính sách bảo mật và nâng cao nhận thức an toàn thông tin, sử dụng Cloudflare để thiết lập WAF, chống các lỗ hổng bảo mật phổ biến và đảm bảo website hoạt động trên giao thức HTTPS với chứng chỉ SSL hợp lệ. Ứng dụng và các thành phần liên quan được cập nhật phần mềm và plugin định kỳ nhằm hạn chế rủi ro từ các lỗ hổng đã biết. Website có cơ chế kiểm tra và xác thực dữ liệu đầu vào, kết hợp với quản lý, phân quyền người dùng rõ ràng để ngăn chặn truy cập trái phép. Ngoài ra, hệ thống còn tự động ghi log hoạt động, hỗ trợ giám sát và phát hiện sự cố, đồng thời xây dựng kế hoạch sao lưu và phục hồi dữ liệu nhằm đảm bảo tính sẵn sàng và an toàn cho toàn bộ hệ thống.

# Sinh viên thực hiện:

👦 Phạm Bá Hoàng - Mã sinh viên: 22810310196
+ Công việc thực hiện: 
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
+ Công việc thực hiện: 
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
# a. Dịch vụ và công nghệ chính mà nhóm em sử dụng:
 + Tailway  : Triển khai cơ sở dữ liệu MySQL.
 + Render   : Triển khai mã nguồn backend lên Internet và hỗ trợ ghi log hệ thống tự động. (Lưu ý: Render có cơ chế ngủ đông khi không có request trong 15 phút, vì vậy lần truy cập đầu tiên có thể phản hồi chậm hơn bình thường.)
 + Vinahost : Mua và quản lý tên miền (domain) cho website.
 + dataonline : Mua và sử dụng dịch vụ hosting để triển khai mã nguồn frontend lên Internet.
 + Cloudflare : Thiết lập tường lửa ứng dụng web (WAF), bảo vệ website và hạn chế các cuộc tấn công từ bên ngoài.

# b. Thiết lập môi trường chạy dự án trên localhost:
 + B1: Sử dụng mã nguồn của dự án do nhóm em triển khai và quản lý trên GitHub.
 + B2: Tạo file .env và tham khảo file .env.example để thêm các biến môi trường tương ứng vào file .env trước khi chạy dự án.
 + B3: Truy cập vào thư mục backend và frontend, sau đó chạy lệnh npm install để cài đặt các thư viện cần thiết.
 + B4: Trong từng thư mục backend và frontend, chạy lệnh sau để khởi động dự án trên môi trường localhost:
   Backend:
    + npm run dev (npm run start hoặc npm start)
    + Hình ảnh chạy đúng:

  <img width="1109" height="551" alt="image" src="https://github.com/user-attachments/assets/a39b1986-7760-4ee8-ad31-3ed7fbe853f7" />
  
   Frontend: 
    + npm run dev
    + Hình ảnh chạy đúng:

  <img width="935" height="460" alt="image" src="https://github.com/user-attachments/assets/05f741a4-61c3-4a84-b4db-fe1f87f76f5a" />
  
 + B5: Mở trang web trên localhost với frontend. => ( http://localhost:5173/)

 # c. Sử dụng website mà nhóm em đã deploy dự án lên Internet: (https://foodietired.io.vn/)

 # d. Tài khoản demo dự án :
 + Tài khoản admin : 
    + Email: lsponge2k4@gmail.com
    + Password: Hoang@123
 + Tài khoản người dùng: Người dùng có thể tự đăng ký tài khoản tại trang đăng ký của website. Ngoài ra, để thuận tiện cho việc kiểm thử nhanh, nhóm em cung cấp sẵn một tài khoản mẫu như sau:
    + Email: john@gmail.com
    + Password: Hoang@123
 # e. Dữ liệu MYSQL để test dự án: core/dump-bookstore_db-202512151424.sql.
    
 # Một số hình ảnh kết quả của dự án đã triển khai:
 + Chính sách bảo mật và nâng cao nhận thức.✅
   Hình ảnh chính sách bảo mật:
   
   <img width="1899" height="868" alt="Screenshot 2025-12-19 195641" src="https://github.com/user-attachments/assets/010090ef-72b6-4488-8286-2e0d8a3fc4dc" />
   
   Hình ảnh điều khoản sử dụng:
   
   <img width="1900" height="867" alt="Screenshot 2025-12-19 195653" src="https://github.com/user-attachments/assets/f0bcdfa8-cb42-487d-b3f3-bd794fcab1f7" />

 + Thiết lập WAF và chống các bảo mật phổ biến qua Cloudflare( Website phải có chứng chỉ SSL).✅
   Hình ảnh giao diện Cloudflare:
   
   <img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/4c0a7d9b-12eb-453b-81de-c3f204e2977a" />
   
   Hình ảnh trang website của nhóm đã có chứng chỉ SSL khi sử dụng Cloudflare:
   
   <img width="1899" height="969" alt="Screenshot 2025-12-19 195716" src="https://github.com/user-attachments/assets/c59d7569-0c2f-44ad-8908-33a5ec44d2b8" />
   
   Hình ảnh cấu hình tưởng lửa (WAF) trong Cloudflare:
   
   <img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/4f42ce83-9e54-46ac-a618-e433b59e9131" />
   
   Hình ảnh mua và quản lý tên miền domain cho website trên Vinahost website:
   
   <img width="1919" height="968" alt="Screenshot 2025-12-19 195824" src="https://github.com/user-attachments/assets/5d7d0454-c505-4a2b-be70-f3f15c1734f3" />
   
   Hình ảnh mua và triển khai dịch vụ hosting cho mã nguồn frontend trên Internet:

   <img width="1919" height="969" alt="Screenshot 2025-12-19 195920" src="https://github.com/user-attachments/assets/2817db61-963f-436b-ba63-f2c4b90bd7ec" />
   
- **Một số hình ảnh minh họa WAF hoạt động**
  - Xác thực người dùng bằng **CAPTCHA** nhằm ngăn chặn bot và truy cập tự động.
    
    <img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/90818e88-c919-42e2-b7ed-c9f708e8e314" />

  - Chặn truy cập từ người dùng **ngoài khu vực Việt Nam**.
    
    <img width="462" height="270" alt="image" src="https://github.com/user-attachments/assets/d989ea30-2233-442e-a030-8a118ee047de" />

  - Giới hạn và chặn các IP gửi **quá nhiều request trong một khoảng thời gian ngắn** nhằm phòng chống tấn công brute-force và DDoS.
    
    <img width="520" height="216" alt="image" src="https://github.com/user-attachments/assets/e587e9dd-11e6-4603-8f6d-dd6600d90d54" />

 - **Cập nhật phần mềm định kỳ** ✅  
  - Kiểm tra phiên bản Node.js đang sử dụng:
    ```bash
    node -v
    ```
  - Nâng cấp Node.js khi cần thiết:
    - **Cách 1:** Cài đặt trực tiếp phiên bản mới từ website chính thức của Node.js.  
    - **Cách 2:** Sử dụng **NVM (Node Version Manager)**:
      ```bash
      nvm install stable   # Cài đặt phiên bản Node.js mới nhất và ổn định
      nvm use stable       # Sử dụng phiên bản stable
      ```

  - Kiểm tra các thư viện (dependencies) đã lỗi thời:
    ```bash
    npm outdated
    ```
  - Cập nhật tất cả các dependencies lên phiên bản mới nhất:
    ```bash
    npm update
    ```
  - Cập nhật một package quan trọng (ví dụ: Express):
    ```bash
    npm install express@latest
    ```

  - Kiểm tra bảo mật các dependencies:
    ```bash
    npm audit
    npm audit fix
    ```
    > `npm audit` giúp phát hiện các lỗ hổng bảo mật đã biết trong thư viện và tự động cập nhật nếu có thể.

- **Cập nhật ứng dụng và plugin** ✅  
  Ứng dụng và các plugin liên quan được kiểm tra và cập nhật thường xuyên nhằm vá lỗi, cải thiện hiệu năng và đảm bảo an toàn hệ thống.
   
 + Có validation cho đầu vào. ✅
   + Sử dụng thư viện Joy để validation:
   + Hình ảnh minh họa mã nguồn sử dụng Joy trong dự án:
     
    <img width="1915" height="832" alt="image" src="https://github.com/user-attachments/assets/bf59f19d-512c-4a4c-bf18-301d90d5a79d" />
    
 + Quản lý và phân quyền người dùng.✅
   + Backend được xây dựng theo mô hình **MVC** nhằm tổ chức và quản lý mã nguồn một cách rõ ràng, dễ bảo trì.
   + Hệ thống sử dụng **middleware** để thực hiện xác thực và phân quyền người dùng.  
   + Hình ảnh minh họa mã nguồn sử dụng middleware cho xác thực và phân quyền người dùng.
     
     <img width="1915" height="832" alt="Screenshot 2025-12-20 175016" src="https://github.com/user-attachments/assets/f2c07cb6-e728-4b06-9d8c-b3cc4d534c5c" />
   + Hình ảnh giao diện **Admin** (quản trị hệ thống).
     
     <img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/df80e560-fec3-4c00-b530-60f1afa17896" />
     
   + Hình ảnh giao diện **User** (người dùng).
     
     <img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/17172e52-418c-4dcf-b73a-1919e79bd205" />
     
 + Dùng hệ thống ghi log tự động. ✅
   + Sử dụng thư viện Winston + Morgan để ghi log:
   + Hình ảnh minh họa mã nguồn sử dụng Winston trong dự án:
     
    <img width="1919" height="849" alt="image" src="https://github.com/user-attachments/assets/4de5e27a-2e95-44ab-bf24-ebbc4d55ff72" />
    
   + Hình ảnh dùng Render để quan sát log được thu thập tự động:
     
     <img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/495af39b-c3d1-4331-badb-a7688c45a0d3" />
     
 + Kế hoạch sao lưu và phục hồi dữ liệu. ✅
   + Hình ảnh sao lưu mã nguồn trên GitHub:
     
   <img width="1902" height="911" alt="Screenshot 2025-12-19 200609" src="https://github.com/user-attachments/assets/c5d91cdb-5179-482c-b611-139cd6d47bc8" />
   
   + Hình ảnh sao lưu dữ liệu trên Cloud (Google Drive):
     
   <img width="1919" height="882" alt="Screenshot 2025-12-19 200522" src="https://github.com/user-attachments/assets/1d5b8352-0445-42a9-b536-9aed3e8289a7" />
   

   
