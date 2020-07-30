//Tạo serviec tương tác backend
var svService = new SinhVienService();
var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (res) {
      //tạo nội dung các thẻ tr
      var contentTable = "";
      for (var index = 9; index < res.data.lenght; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var sinhVien = res.data[index];
        //Từ đối tượng sinh vinee tạo thẻ tr
        contentTable += `
            <tr>
                <td>${sinhVien.MaSV}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`;
      }
      document.getElementById("tblSinhVien").innerHTML = contentTable;
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
renderSinhVien();
