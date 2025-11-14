import cv2
import numpy as np
import matplotlib.pyplot as plt

# ========================================
# 1. Nạp ảnh đầu vào
# ========================================
image_path = 'input.jpg'  
I = cv2.imread(image_path)

if I is None:
    raise FileNotFoundError(f"Không tìm thấy ảnh: {image_path}")

# ========================================
# 2. Chuyển sang ảnh xám
# ========================================
I_Gray = cv2.cvtColor(I, cv2.COLOR_BGR2GRAY)

# ========================================
# 3. Áp dụng các bộ lọc dò biên
# ========================================

# --- Sobel ---
sobel_x = cv2.Sobel(I_Gray, cv2.CV_64F, 1, 0, ksize=3)
sobel_y = cv2.Sobel(I_Gray, cv2.CV_64F, 0, 1, ksize=3)
sobel = np.hypot(sobel_x, sobel_y)
sobel = np.uint8(255 * sobel / np.max(sobel))  # Chuẩn hóa

# --- Prewitt ---
kernel_prewitt_x = np.array([[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]], dtype=np.float32)
kernel_prewitt_y = np.array([[-1, -1, -1], [0, 0, 0], [1, 1, 1]], dtype=np.float32)
prewitt_x = cv2.filter2D(I_Gray, cv2.CV_64F, kernel_prewitt_x)
prewitt_y = cv2.filter2D(I_Gray, cv2.CV_64F, kernel_prewitt_y)
prewitt = np.hypot(prewitt_x, prewitt_y)
prewitt = np.uint8(255 * prewitt / np.max(prewitt))

# --- Laplacian ---
laplacian = cv2.Laplacian(I_Gray, cv2.CV_64F)
laplacian = np.uint8(np.absolute(laplacian))
laplacian = 255 - laplacian  

# --- Canny ---
canny = cv2.Canny(I_Gray, 50, 150) 

# ========================================
# 4. Hiển thị tất cả trong 1 cửa sổ
# ========================================
plt.figure(figsize=(18, 10))

# Ảnh gốc (RGB)
plt.subplot(2, 3, 1)
plt.imshow(cv2.cvtColor(I, cv2.COLOR_BGR2RGB))
plt.title('Ảnh đầu vào (I)')
plt.axis('off')

# Ảnh xám
plt.subplot(2, 3, 2)
plt.imshow(I_Gray, cmap='gray')
plt.title('Ảnh xám (I_Gray)')
plt.axis('off')

# Sobel
plt.subplot(2, 3, 3)
plt.imshow(sobel, cmap='gray')
plt.title('Dò biên Sobel')
plt.axis('off')

# Prewitt
plt.subplot(2, 3, 4)
plt.imshow(prewitt, cmap='gray')
plt.title('Dò biên Prewitt')
plt.axis('off')

# Laplacian
plt.subplot(2, 3, 5)
plt.imshow(laplacian, cmap='gray')
plt.title('Dò biên Laplacian')
plt.axis('off')

# Canny
plt.subplot(2, 3, 6)
plt.imshow(canny, cmap='gray')
plt.title('Dò biên Canny')
plt.axis('off')

plt.suptitle('Kết quả các thuật toán dò biên', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.show()