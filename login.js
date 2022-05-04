
function validate() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        if (name == null || name == "") {
            alert("Tên đăng nhập không được để trống!");
            return false;
        } else if (password.length < 6) {
            alert("Mật khẩu ít nhất 6 ký tự");
            return false;
        }
        else{
            return false
        };
    }
