function nguoidungService(){
    this.login = function(taiKhoan, matKhau){
        return axios({
            method:"POST",
            url: `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`,
    
        })
    }
}