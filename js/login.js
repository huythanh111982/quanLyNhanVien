function login(){
    var taiKhoan = document.getElementById("taikhoan").value;
    var matKhau = document.getElementById("matkhau").value;
    var nguoiDung = new nguoidungService;
    nguoiDung.login(taiKhoan, matKhau)
    .then(function(res){
        console.log(res.data);
        if(res.data.MaLoaiNguoiDung === "QuanTri"){
            // localStorage :luu bo nho tam cua trinh duyet cua html 5
            // Tat trinh duyet khong mat
            // Cho phep luu chuoi
            // De chuyen doi tuong sang chuoi dung JSON.stringify(doi tuong)
            // session :bo nho tam cua trinh duyet khi tat trinh duyet se mat
            localStorage.setItem("currentUser", JSON.stringify(res.data))
           // Chuyen trang
            window.location.assign("index.html");
        }
    })
    .catch(function(ex){
        console.log(ex.message);
    })
}

document.getElementById('btnDangNhap').addEventListener('click',login);