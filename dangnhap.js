function kiemtra(){
    var loi = "";
    var ht = document.getElementById("ht");
    if(ht.value==""){
        ht.className="loi";
        loi += "Họ tên không được bỏ trống<br>";
    }else if(ht.value.length>30){
        ht.className="loi";
        loi += "Họ tên quá dài<br>";
    }else ht.className="txt";
    //Kiểm tra giới tính
    dem=0;
    var arr_gt = document.getElementsByName("gt");
    for(var i=0; i<arr_gt.length;i++){
        if(arr_gt[i].checked == true) dem++;
    }
    if(dem==0){
        document.getElementById("fs1").className="loi";
        loi += "Phải chọn giới tính<br>";
    }else document.getElementById("fs1").className="";
    //Kiểm tra Email
    var email = document.getElementById("email");
    if(email.value==""){
        email.className="loi";
        loi += "Email không được bỏ trống<br>";
    }
    //trả về giá trị kiểm tra
    if (loi!=""){
        document.getElementById('baoloi').innerHTML=loi;
        return false;
    }
}
