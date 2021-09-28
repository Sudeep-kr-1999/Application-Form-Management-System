const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const forgotbutton = document.getElementById("forgotdetailsbutton");
const forgotdetailscontainer = document.getElementById("forgotdetails");
const close = document.getElementById("close");
const container = document.querySelector(".container");
let content_type = document.getElementById("content");
var Registration_Number = "";
// signin dynamic html
signin.addEventListener("click", (event) => {
  event.preventDefault();
  content_type.innerHTML = "";
  var content = "";
  content += `<form class="formdetails_signin" id="content_type">
    <h3 id="signin_heading">Sign In</h3>
    <div class="registration_number">
      <label for="registration_number" class="signin_label">Registration No </label>
      <input type="text" name="registration_number" id="registration_number" class="input_signin"/>
    </div>
    <div class="password">
      <label for="password" class="signin_label">Password</label>
      <input type="password" name="password" id="password" class="input_signin"/>
    </div>
    <div class="submit">
      <button type="submit" id="submit_signin_btn">Login</button>
    </div>
  </form>
  <div class="image_signin">
    <img src="../assets/login1.png" alt="login image" />
  </div>`;
  content_type.innerHTML = content;
  const signin_registration_no = document.getElementById("registration_number");
  const singin_password = document.getElementById("password");
  const submit_signin_btn = document.getElementById("submit_signin_btn");

  submit_signin_btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let Regno = signin_registration_no.value;
    let password = singin_password.value;
    if (Regno != "" && password != "") {
      try {
        const response = await axios.patch(
          `http://127.0.0.1:3000/ums/signin/${Regno}`
        );
        if (response.data.registrationdetails != null) {
          if (response.data.registrationdetails.Password != password) {
            signin_registration_no.value = "";
            singin_password.value = "";
            alert("Password is incorrect , Please Enter a valid Password");
          } else {
            signin_registration_no.value = "";
            singin_password.value = "";
            try {
              const response_application = await axios.get(
                `http://127.0.0.1:3000/ums/getalldetails/${Regno}`
              );
              if (response_application.data.application_details != null) {
               Registration_Number=Regno;
               sessionStorage.setItem("RegistationNo",Registration_Number);
                location.assign(`http://127.0.0.1:5500/public/html/application_preview.html`);
              } else {
               Registration_Number=Regno;
               sessionStorage.setItem("RegistationNo",Registration_Number);
                location.assign(`http://127.0.0.1:5500/public/html/application.html`);

              }
            } catch (error) {
              console.log(error);
              alert("Error ..... !");
            }
            alert("Signin Successful");
          }
        } else {
          signin_registration_no.value = "";
          singin_password.value = "";
          alert("User donot Exist ........ !");
        }
      } catch (error) {
        signin_registration_no.value = "";
        singin_password.value = "";
        console.log(error);
        alert("Some error Occoured Try again .... !");
      }
    } else {
      alert("Data is missing Please enter all details required ... !");
    }
  });
});

const signin_registration_no = document.getElementById("registration_number");
const singin_password = document.getElementById("password");
const submit_signin_btn = document.getElementById("submit_signin_btn");

submit_signin_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let Regno = signin_registration_no.value;
  let password = singin_password.value;
  if (Regno != "" && password != "") {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/ums/signin/${Regno}`
      );
      if (response.data.registrationdetails != null) {
        if (response.data.registrationdetails.Password != password) {
          signin_registration_no.value = "";
          singin_password.value = "";
          alert("Password is incorrect , Please Enter a valid Password");
        } else {
          signin_registration_no.value = "";
          singin_password.value = "";
          try {
            const response_application = await axios.get(
              `http://127.0.0.1:3000/ums/getalldetails/${Regno}`
            );
            if (response_application.data.application_details != null) {
             Registration_Number=Regno;
              sessionStorage.setItem("RegistationNo",Registration_Number);
              location.assign(`http://127.0.0.1:5500/public/html/application_preview.html`);
            } else {
             Registration_Number=Regno;
              sessionStorage.setItem("RegistationNo",Registration_Number);
              location.assign(`http://127.0.0.1:5500/public/html/application.html`);
            }
          } catch (error) {
            console.log(error);
            alert("Error ..... !");
          }
          alert("Signin Successful");
        }
      } else {
        signin_registration_no.value = "";
        singin_password.value = "";
        alert("User donot Exist ........ !");
      }
    } catch (error) {
      signin_registration_no.value = "";
      singin_password.value = "";
      console.log(error);
      alert("Some error Occoured Try again .... !");
    }
  } else {
    alert("Data is missing Please enter all details required ... !");
  }
});

// signup dynamic html
signup.addEventListener("click", (event) => {
  event.preventDefault();
  content_type.innerHTML = "";
  var content = "";
  content += `<form class="formdetails_signup" id="content_type">
    <h3 id="signup_heading">Sign Up</h3>
    <div class="name">
      <label for="name" class="signup_label">Name</label>
      <input type="text" name="name" id="signup_name" class="input_signup" />
    </div>
    <div class="username_signup">
      <label for="registration_number" class="signup_label">Username</label>
      <input type="text" name="registration_number" id="signup_username" class="input_signup"/>
    </div>
    <div class="email">
      <label for="email" class="signup_label">Email</label>
      <input type="email" name="email" id="signup_email" class="input_signup" />
    </div>
    <div class="password_signup">
      <label for="password" class="signup_label">Password</label>
      <input type="text" name="password" id="signup_password" class="input_signup" />
    </div>
    <div class="repeatpassword">
      <label for="repeatpassword" class="signup_label"> Repeat Password</label>
      <input type="text" name="repeatpassword" id="signup_repeatpassword" class="input_signup" />
    </div>
    <div class="check_signup">
      <input type="checkbox" name="agree" id="signup_agree" />
      <label for="checkbox"
      class="check_signup">I agree all Terms</label
      >
    </div>
    <div class="submit">
      <button type="submit" id="signup_submit_btn">Register</button>
    </div>
  </form>
  <div class="image_signup">
    <img src="../assets/signup.png" alt="login image" />
  </div>`;
  content_type.innerHTML = content;

  let signup_name = document.getElementById("signup_name");
  let signup_username = document.getElementById("signup_username");
  let signup_email = document.getElementById("signup_email");
  let signup_password = document.getElementById("signup_password");
  let signup_repeatpassword = document.getElementById("signup_repeatpassword");
  let signup_agree = document.getElementById("signup_agree");
  const signup_submit_btn = document.getElementById("signup_submit_btn");
  let isChecked = false;
  signup_agree.addEventListener("click", () => {
    if (signup_agree.checked == true) {
      isChecked = true;
    } else {
      isChecked = false;
    }
  });

  signup_submit_btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let namevalue = signup_name.value;
    let username = signup_username.value;
    let email = signup_email.value;
    let password = signup_password.value;
    let repeatpassword = signup_repeatpassword.value;
    if (
      namevalue != "" &&
      username != "" &&
      email != "" &&
      password != "" &&
      repeatpassword != ""
    ) {
      if (password == repeatpassword) {
        if (isChecked) {
          try {
            const response = await axios.get(
              `http://127.0.0.1:3000/ums/registrationdetails/${email}`
            );
            if (response.data.signindetails != null) {
              signup_name.value = "";
              signup_username.value = "";
              signup_email.value = "";
              signup_password.value = "";
              signup_repeatpassword.value = "";
              alert("Already Registered");
            } else {
              try {
                const response = await axios.post(
                  "http://127.0.0.1:3000/ums/registration",
                  {
                    Name: namevalue,
                    Username: username,
                    Email: email,
                    Password: password,
                  }
                );
                signup_name.value = "";
                signup_username.value = "";
                signup_email.value = "";
                signup_password.value = "";
                signup_repeatpassword.value = "";
                alert(
                  `Successfully Registered \n Registration Number : ${response.data.RegistrationData.RegistrationNo}\n Keep Your Registration Number for future Reference`
                );
               Registration_Number=response.data.RegistrationData.RegistrationNo;
               sessionStorage.setItem("RegistationNo",Registration_Number);
                location.assign(`http://127.0.0.1:5500/public/html/application.html`);
              } catch (error) {
                console.log(error);
                signup_name.value = "";
                signup_username.value = "";
                signup_email.value = "";
                signup_password.value = "";
                signup_repeatpassword.value = "";
                alert("Some error Occoured try again !");
              }
            }
          } catch (error) {
            console.log(error);
            signup_name.value = "";
            signup_username.value = "";
            signup_email.value = "";
            signup_password.value = "";
            signup_repeatpassword.value = "";
            alert("Some error Occoured try again !");
          }
        } else {
          alert("Checkbox is not checked");
        }
      } else {
        alert("Entered Password Donont Matched!!!. Enter the Password Again");
      }
    } else {
      alert("Some Details are Missing Please Enter all the Details");
    }
  });
});

// forgot details js
forgotbutton.addEventListener("click", (event) => {
  event.preventDefault();
  container.style.filter = "blur(10px)";
  forgotdetailscontainer.style.display = "block";
  const email_for_forgot = document.getElementById("email");
  const forgot_button_in_forgot_modal = document.getElementById("forgot");
  const regno_from_database_container = document.querySelector(".regno");
  const password_from_database_container =
    document.querySelector(".forgot_password");

  forgot_button_in_forgot_modal.addEventListener("click", async (event) => {
    event.preventDefault();
    const email_provided_for_forgot = email_for_forgot.value;
    if (email_provided_for_forgot != "") {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3000/ums/forgot/${email_provided_for_forgot}`
        );
        if (response.data.emaildetails != null) {
          let inserted_ele_for_regno = "";
          inserted_ele_for_regno += `<label for="regno">Registration No:${response.data.emaildetails.RegistrationNo}</label>`;
          regno_from_database_container.innerHTML = inserted_ele_for_regno;
          let inserted_ele_for_password = "";
          inserted_ele_for_password += `<label for="password">Password: ${response.data.emaildetails.Password}</label>`;
          password_from_database_container.innerHTML =
            inserted_ele_for_password;
        } else {
          email_for_forgot.value = "";
          password_from_database_container.innerHTML = "";
          regno_from_database_container.innerHTML = `<label for="regno">No Records Found </label>`;
        }
      } catch (error) {
        email_for_forgot.value = "";
        regno_from_database_container.innerHTML = `<label for="regno">Error ... !</label>`;
      }
    } else {
      email_for_forgot.value = "";
      regno_from_database_container.innerHTML = `<label for="regno">Please Provide a Valid Email ID</label>`;
    }
  });
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  container.style.filter = "none";
  forgotdetailscontainer.style.display = "none";
  const regno_from_database_container = document.querySelector(".regno");
  const password_from_database_container =
    document.querySelector(".forgot_password");
  const email_for_forgot = document.getElementById("email");
  regno_from_database_container.innerHTML = "";
  password_from_database_container.innerHTML = "";
  email_for_forgot.value = "";
});
