function NhanVienService() {
    this.layDSNV = function () {
        var url = "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien";
        return axios({
            method: "GET",
            url: url
        })
    }
    this.themNV = function(nhanVienMoi){
        var myURL ="https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien";
        return axios({
            method: "POST",
            url: myURL,
            data: nhanVienMoi
        })
    }
    this.updateNV = function(nhanVienCapNhat) {
        var myURL =`https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${nhanVienCapNhat.MaNV}`;
        return axios({
            method: "PUT",
            url: myURL,
            data: nhanVienCapNhat
    
        })
    }
}