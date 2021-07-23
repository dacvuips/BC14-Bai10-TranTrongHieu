document.getElementById('btnThemNV').addEventListener('click', themNguoiDung)
document.getElementById('tableDanhSach').addEventListener('click', actionNhanVien)
document.getElementById('btnCapNhat').addEventListener('click', capNhatNV)
document.getElementById('btnTimNV').addEventListener('click', timKiemNhanVien)
document.getElementById('searchName').addEventListener('focusout', timKiemNhanVien)
document.getElementById('searchName').addEventListener('mouseout', timKiemNhanVien)
document.getElementById('btnThem').addEventListener('click', themModal)
document.getElementById('btnDong').addEventListener('click', dong)



function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {

    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

}

NhanVien.prototype.tongLuong = function() {

    if (this.chucVu === "Giám đốc") {

        return +this.luongCoBan * 3
    }
    if (this.chucVu === "Trưởng phòng") {

        return +this.luongCoBan * 2
    }
    if (this.chucVu === "Nhân viên") {

        return +this.luongCoBan
    }

}

NhanVien.prototype.loaiNhanVien = function() {

    if (this.gioLam >= 192) {

        return "Xuất sắc"
    }
    if (this.gioLam >= 176) {

        return "Giỏi"
    }
    if (this.gioLam >= 160) {

        return "Khá"
    }
    if (this.gioLam < 160) {

        return "Trung bình"
    }

}


var dsnv = JSON.parse(localStorage.getItem("dsnv")) || [];


function khoiTao() {

    if (dsnv.length === 0) {
        return
    }
    dsnv = dsnv.map(function(nv) {

        return new NhanVien(nv.taiKhoan, nv.hoTen, nv.email, nv.matKhau, nv.ngayLam, nv.luongCoBan, nv.chucVu, nv.gioLam)

    });

    hienThi(dsnv);

}
khoiTao()



function themNguoiDung() {

    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCoBan = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;


    valid(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)

}
var validator = new Validator()


function valid(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {


    var isValidator = validator.isRequire('tbTKNV', taiKhoan) && validator.checkTaiKhoan('tbTKNV', taiKhoan)
    isValidator &= validator.isRequire('tbTen', hoTen) && validator.isName('tbTen', hoTen)
    isValidator &= validator.isRequire('tbEmail', email) && validator.isEmail('tbEmail', email)
    isValidator &= validator.isRequire('tbMatKhau', matKhau) && validator.isMatKhau('tbMatKhau', matKhau)
    isValidator &= validator.isRequire('tbNgay', ngayLam)
    isValidator &= validator.isRequire('tbLuongCB', luongCoBan) && validator.isLuong('tbLuongCB', luongCoBan)
    isValidator &= validator.isRequire('tbChucVu', chucVu)
    isValidator &= validator.isRequire('tbGiolam', gioLam) && validator.isGioLam('tbGiolam', gioLam)


    if (!isValidator) {
        for (var key in validator.errors) {

            if (validator.errors[key]) {
                document.getElementById([key]).style.display = 'block'
                document.getElementById([key]).innerHTML = validator.errors[key]

            }
            for (var key in validator.errors) {

                if (validator.errors[key] === '') {
                    document.getElementById([key]).style.display = 'none'

                }
            }
        }
        return
    }
    if (isValidator) {
        for (var key in validator.errors) {

            if (validator.errors[key] === '') {
                document.getElementById([key]).style.display = 'none'

            }


        }
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)

        dsnv.push(nhanVien)

        document.getElementById('tknv').disabled = false;
        localStorage.setItem('dsnv', JSON.stringify(dsnv));
        resetForm({})

        hienThi(dsnv)

    }

}

function validCapNhat(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {

    var isValidator = validator.isRequire('tbTKNV', taiKhoan) && validator.checkTaiKhoan('tbTKNV', taiKhoan)
    isValidator &= validator.isRequire('tbTen', hoTen) && validator.isName('tbTen', hoTen)
    isValidator &= validator.isRequire('tbEmail', email) && validator.isEmail('tbEmail', email)
    isValidator &= validator.isRequire('tbMatKhau', matKhau) && validator.isMatKhau('tbMatKhau', matKhau)
    isValidator &= validator.isRequire('tbNgay', ngayLam)
    isValidator &= validator.isRequire('tbLuongCB', luongCoBan) && validator.isLuong('tbLuongCB', luongCoBan)
    isValidator &= validator.isRequire('tbChucVu', chucVu)
    isValidator &= validator.isRequire('tbGiolam', gioLam) && validator.isGioLam('tbGiolam', gioLam)


    if (!isValidator) {
        for (var key in validator.errors) {

            if (validator.errors[key]) {
                document.getElementById([key]).style.display = 'block'
                document.getElementById([key]).innerHTML = validator.errors[key]

            }
            for (var key in validator.errors) {

                if (validator.errors[key] === '') {
                    document.getElementById([key]).style.display = 'none'

                }


            }

        }
        return
    }
    if (isValidator) {
        for (var key in validator.errors) {

            if (validator.errors[key] === '') {
                document.getElementById([key]).style.display = 'none'

            }


        }
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)

        dsnv = dsnv.map(function(value) {

            if (value.taiKhoan === taiKhoan) {

                return nhanVien
            }
            return value
        })
        console.log(dsnv)
        document.getElementById('tknv').disabled = false;
        localStorage.setItem('dsnv', JSON.stringify(dsnv));
        resetForm({})

        hienThi(dsnv)

    }

}

function hienThi(dsnv) {

    var html = ''
    var table = document.getElementById('tableDanhSach');

    for (var i = 0; i < dsnv.length; i += 1) {
        var nv = dsnv[i]
        html += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.loaiNhanVien()}</td>
        <td>
        <button class="btn btn-danger" data-action="delete" data-NV="${nv.taiKhoan}">Xóa</button>
        <button class="btn btn-primary" data-action="select" data-NV="${nv.taiKhoan}" data-toggle="modal" data-target="#myModal">Cập nhật</button>
        </td>
        <tr>
        `
    };

    table.innerHTML = html

}



function actionNhanVien(even) {
    var dataNV = even.target.getAttribute("data-NV")

    var action = even.target.getAttribute("data-action")


    if (action === 'delete') {
        xoaNhanVien(dataNV)

    }
    if (action === 'select') {
        chonNhanVien(dataNV)

    }


}

function xoaNhanVien(taiKhoan) {

    dsnv = dsnv.filter(va => {

        if (va.taiKhoan !== taiKhoan) {

            return va
        }

    })
    localStorage.setItem('dsnv', JSON.stringify(dsnv));
    hienThi(dsnv)
}

function chonNhanVien(taiKhoan) {

    var nhanVienCapNhat = dsnv.find(va => {

        if (va.taiKhoan === taiKhoan) {

            return va
        }
    })
    document.getElementById('btnCapNhat').disabled = false;
    document.getElementById('btnThemNV').disabled = true;

    document.getElementById('tknv').disabled = true;
    resetForm(nhanVienCapNhat);


}

function resetForm(nhanVien) {

    document.getElementById('tknv').value = nhanVien.taiKhoan || [];
    document.getElementById('name').value = nhanVien.hoTen || [];
    document.getElementById('email').value = nhanVien.email || [];
    document.getElementById('password').value = nhanVien.matKhau || [];
    document.getElementById('datepicker').value = nhanVien.ngayLam || [];
    document.getElementById('luongCB').value = nhanVien.luongCoBan || [];
    document.getElementById('chucvu').value = nhanVien.chucVu || [];
    document.getElementById('gioLam').value = nhanVien.gioLam || [];

}

function capNhatNV() {


    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCoBan = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;


    validCapNhat(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)



}


function timKiemNhanVien() {
    var search = document.getElementById('searchName').value
    var newdsnv = dsnv.filter(va => {
        var searchLoai = xoa_dau(search.toLowerCase().trim())
        var loaiNV = xoa_dau(va.loaiNhanVien().toLowerCase().trim())
        if (loaiNV.indexOf(searchLoai) !== -1) {

            return va
        }
    })

    hienThi(newdsnv)


}

function themModal() {
    document.getElementById('btnCapNhat').disabled = true;
    document.getElementById('btnThemNV').disabled = false;

    document.getElementById('tknv').disabled = false;
    resetForm({})
}

function dong() {


    for (var key in validator.errors) {


        if (validator.errors[key]) {
            document.getElementById([key]).style.display = 'none'

        }


    }
}
// Hàm xóa dấu khi tìm kiếm
function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/\s+/g, ' ');
    str = str.replace(' ', '');
    return str;
}
