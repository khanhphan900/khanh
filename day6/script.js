const A = {
  pinA: "1234",
  soDu: 100000,
};

let pin;
let choose;
login();
function login() {
  pin = parseInt(prompt("Vui long nhap ma pin"));
  if (A.pinA != pin) {
    alert("Ma pin không đúng");
    login();
  } else {
    menu();
  }
}

function menu() {
  choose = parseInt(
    prompt("Menu: 1. Rút tiền / 2. Kiểm tra tài khoản / 3. Nạp tiền / 4. Thoát")
  );
  switch (choose) {
    case 1:
      rutTien();
      break;
    case 2:
      kiemTra();
      break;
    case 3:
      napTien();
      break;
    case 4:
      alert("Chào quý khách");
      break;
    default:
      alert("Vui lòng chọn lại");
      menu();
  }
}
function rutTien() {
  let tienRut = parseInt(prompt("Nhập số tiền bạn cần rút"));
  A.soDu -= tienRut;
  menu();
}

function kiemTra() {
  alert(`số dư hiện tại là ${A.soDu} VND`);
  menu();
}

function napTien() {
  let tienNap = parseInt(prompt("Nhập số tiền nạp"));
  A.soDu += tienNap;
  menu();
}
