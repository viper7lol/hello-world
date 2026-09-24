const form = document.querySelector("#registration-form"); 
const status = document.querySelector("#form-status"); 
document.querySelector("#year").textContent = new Date().getFullYear(); 
 
form.addEventListener("submit", (event) => { 
  event.preventDefault(); 
  if (!form.checkValidity()) { 
    form.reportValidity(); 
    status.textContent = "Vui lòng kiểm tra các trường bắt buộc."; 
    return; 
  } 
  const data = new FormData(form); 
  status.textContent = `Đã ghi nhận đăng ký của ${data.get("fullName")}.`; 
  form.reset(); 
}); 