# CSE391_Ktra_NguyenThanhDat_2451170873_K66KTPM2.1
# Task List Management

## Giới thiệu

Task List Management là một ứng dụng quản lý công việc đơn giản được xây dựng bằng HTML, CSS, Bootstrap và JavaScript. Ứng dụng cho phép người dùng xem danh sách công việc, thêm công việc mới và quản lý mức độ ưu tiên của từng công việc thông qua giao diện trực quan, dễ sử dụng.

Dự án được thực hiện nhằm thực hành các kiến thức về:

* HTML5
* CSS3
* Bootstrap 5
* JavaScript DOM
* Validation Form
* Làm việc với dữ liệu JSON

---

## Mục tiêu của dự án

* Xây dựng giao diện quản lý công việc bằng Bootstrap.
* Thực hành thao tác với DOM bằng JavaScript.
* Thực hiện kiểm tra dữ liệu đầu vào (Validation).
* Hiểu cách tổ chức dữ liệu dưới dạng JSON.
* Tạo ứng dụng web đơn giản theo mô hình CRUD cơ bản.

---

## Chức năng chính

### Hiển thị danh sách công việc

* Hiển thị tên công việc.
* Hiển thị mức độ ưu tiên.
* Hiển thị trạng thái công việc.

### Thêm công việc mới

* Mở form nhập thông tin công việc.
* Nhập tên công việc.
* Chọn mức độ ưu tiên.
* Lưu công việc vào danh sách.

### Validation dữ liệu

* Kiểm tra độ dài tên công việc.
* Không cho phép tên công việc vượt quá 100 ký tự.
* Hiển thị thông báo lỗi khi dữ liệu không hợp lệ.

### Giao diện Responsive

* Sử dụng Bootstrap để tối ưu hiển thị trên nhiều kích thước màn hình.

---

## Công nghệ sử dụng

| Công nghệ   | Mục đích                               |
| ----------- | -------------------------------------- |
| HTML5       | Xây dựng cấu trúc giao diện            |
| CSS3        | Thiết kế và tùy chỉnh giao diện        |
| Bootstrap 5 | Hỗ trợ Responsive và các thành phần UI |
| JavaScript  | Xử lý logic và thao tác DOM            |
| JSON        | Lưu trữ dữ liệu mẫu                    |

---

## Cấu trúc thư mục

```text
TaskList/
│
├── index.html
├── main.js
├── styles.css
├── data.json
│
├── css/
│   └── bootstrap.min.css
│
└── js/
    └── bootstrap.bundle.js
```

---

## Mô tả các tệp

### index.html

Chứa giao diện chính của ứng dụng:

* Danh sách công việc
* Nút thêm công việc
* Form nhập công việc mới

### styles.css

Chứa các thiết lập giao diện:

* Thiết kế danh sách công việc
* Màu sắc mức độ ưu tiên
* Định dạng trạng thái công việc
* Tùy chỉnh Bootstrap

### main.js

Chứa các chức năng:

* Mở form thêm công việc
* Đóng form thêm công việc
* Kiểm tra dữ liệu nhập
* Xử lý sự kiện submit form

### data.json

Chứa dữ liệu mẫu của danh sách công việc.

Ví dụ:

```json
[
  {
    "id": 1,
    "task": "Go to gym",
    "priority": "High",
    "status": "To Do"
  }
]
```

---

## Validation

Ứng dụng kiểm tra:

* Tên công việc không được vượt quá 100 ký tự.

Ví dụ:

```javascript
if (tenTask.length > 100) {
    errorDiv.innerText =
        "Tên task không được vượt quá 100 ký tự!";
}
```

---

## Hướng dẫn chạy chương trình

### Cách 1: Mở trực tiếp

Mở file:

```text
index.html
```

bằng trình duyệt web.

### Cách 2: Sử dụng Live Server

1. Mở dự án bằng Visual Studio Code.
2. Cài đặt tiện ích mở rộng Live Server.
3. Chuột phải vào file `index.html`.
4. Chọn **Open with Live Server**.

---

## Kết quả đạt được

* Xây dựng thành công giao diện quản lý công việc.
* Áp dụng Bootstrap để tạo giao diện hiện đại.
* Thực hiện được chức năng mở/đóng form.
* Thực hiện kiểm tra dữ liệu đầu vào.
* Hiển thị dữ liệu công việc theo từng mức độ ưu tiên.

---

## Hướng phát triển

Trong tương lai có thể bổ sung:

* Chỉnh sửa công việc.
* Xóa công việc.
* Tìm kiếm công việc.
* Lọc theo trạng thái.
* Lưu dữ liệu bằng Local Storage.
* Kết nối API Backend.
* Đồng bộ dữ liệu với cơ sở dữ liệu.
* Chuyển đổi sang ReactJS.

---

## Tác giả

Họ và tên: Nguyễn Thành Đạt

Mã sinh viên: 2451170873

Lớp: K66KTPM2.1

GitHub Repository:

https://github.com/DatThanhNguyen7749/CSE391_Ktra_NguyenThanhDat_2451170873_K66KTPM2.1
