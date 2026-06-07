// ===== MỞ / ĐÓNG FORM =====
document.getElementById("btnMoForm").onclick = function() {
    document.getElementById("formCard").style.display = "block";
    document.getElementById("formTask").reset();
    document.getElementById("errorTask").style.display = "none";
};

document.getElementById("btnDongForm").onclick = function() {
    document.getElementById("formCard").style.display = "none";
};

// ===== SUBMIT FORM THÊM TASK =====
document.getElementById("formTask").onsubmit = function(e) {
    e.preventDefault();

    var tenTask = document.getElementById("inputTask").value.trim();
    var errorDiv = document.getElementById("errorTask");

    // ===== VALIDATION =====
    if (tenTask.length > 100) {
        errorDiv.innerText = "Tên task không được vượt quá 100 ký tự! (Hiện tại: " + tenTask.length + " ký tự)";
        errorDiv.style.display = "block";
        return;
    }
 
    // Dữ liệu hợp lệ, ẩn lỗi
    errorDiv.style.display = "none";

    // Đóng form và reset
    document.getElementById("formCard").style.display = "none";
    document.getElementById("formTask").reset();
};