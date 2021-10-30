# Restaurant-4.0
# We use HTML+CSS+Js for Front End &amp; Django for Backend
# Để chạy ứng dụng này, bạn nên cần cài đặt python và node.js phiên bản mới nhất.
# Cloning repository
# Dùng command prompt
git clone https://github.com/POS-Restaurant/Restaurant-4.0.git
# Backend: Django
# Di chuyển tới thư mục chứa project
cd Django
# Note: Nếu bạn muốn dùng môi trường ảo để chạy ứng dụng
# Tạo môi trường ảo với hệ điều hành Windows
virtualenv env
# Tạo môi trường ảo với hệ điều hành Linux hoặc Mac
python -m venv env
# Kích hoạt môi trường ảo
# Với hệ điều hành Windows
.\env\Scripts\activate
# Với hệ điều hành Linux hoặc Mac
source env/bin/activate
# Tải thêm một số package để khởi chạy project
pip install django
pip install djangorestframework
pip install django-cors-headers
# Khởi động project
python manage.py runserver
# Fontend: React
# Vào thư mục React/myapp, tải về modules của thư mục gốc
cd React/myapp
npm install 
# Nếu không chạy được thì khởi chạy npm install react-scripts --save
# Sau đó, tải các modules của client
npm run build
# Trở lại thư mục React/myapp, khởi chạy ứng dụng ở devlopment mode
npm run dev