function Validator() {

    this.errors = {}

}

Validator.prototype.isRequire = function(name, value) {

    if (!value) {
        this.errors[name] = 'Vui lòng nhập vào giá trị'
        return false
    } else { this.errors[name] = '' }
    return true
}

//  Phần Tài Khoản
// Validator.prototype.isTaiKhoan = function(name, value) {


//     return true
// }
Validator.prototype.checkTaiKhoan = function(name, value) {

    if (value.length > 6 || value.length < 4) {
        this.errors[name] = 'Vui lòng dưới 4-6 ký tự'
        return false
    }
    for (var i = 0; i < dsnv.length; i += 1) {


        if (value.length <= 6 && value.length >= 4) {
            this.errors[name] = ''

            if (value === dsnv[i].taiKhoan) {
                this.errors[name] = 'Tài khoản bị trùng'


                if (document.getElementById('tknv').disabled === true) {

                    this.errors[name] = ''
                    return true
                }
                return false
            }


        }
    }
    return true

}






// Phần tên 
Validator.prototype.isName = function(name, value) {
        var kyTuDB = /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g;
        var chu = /[0-9]/g;
        if (chu.test(value) || kyTuDB.test(value)) {
            this.errors[name] = 'Vui lòng nhập chữ'
            return false
        } else { this.errors[name] = '' }
        return true

    }
    // Phần email
Validator.prototype.isEmail = function(name, value) {
        var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
        if (!regExp.test(value)) {
            this.errors[name] = 'Email không hợp lệ'
            return false
        } else { this.errors[name] = '' }
        return true

    }
    // Phần Mật khẩu

Validator.prototype.isMatKhau = function(name, value) {
        var so = /[0-9]/g;
        var chuHoa = /[A-Z]/g;
        var kyTu = /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g;
        if (!so.test(value)) {
            this.errors[name] = 'Mật khẩu phải có số'
            return false
        } else if (!chuHoa.test(value)) {
            this.errors[name] = 'Mật khẩu phải có chữ in HOA'
            return false

        } else if (!kyTu.test(value)) {
            this.errors[name] = 'Mật khẩu phải ký tự đặt biệt'
            return false

        } else if (value.length < 6 || value.length > 10) {
            this.errors[name] = 'Độ dài 6 - 10 chữ'
            return false

        } else { this.errors[name] = '' }
        return true

    }
    // Giơi hạn lương
Validator.prototype.isLuong = function(name, value) {

        if (value < 1000000 || value > 20000000) {
            this.errors[name] = 'Vui lòng nhập số tiền 1,000,000 - 20,000,000'
            return false
        } else { this.errors[name] = '' }
        return true

    }
    //  Giới hạn giờ làm
Validator.prototype.isGioLam = function(name, value) {

    if (value < 80 || value > 200) {
        this.errors[name] = 'Vui lòng nhập giờ làm 80 - 200'
        return false
    } else { this.errors[name] = '' }
    return true

}