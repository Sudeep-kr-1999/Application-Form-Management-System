const changepassword = document.getElementById("changepassword");
const changepasswordwindow = document.getElementById("changepasswordwindow");
const container = document.querySelector(".container");
const close_button = document.getElementById("close");
const updatePasswordConfirmDOM = document.getElementById("updateconfirm");
const logoutButtonDOM = document.getElementById("logout");

let RegistrationNo = sessionStorage.getItem("RegistationNo");
const formheadingClass = document.querySelector(".formheading");
formheadinginnerhtml = "";
formheadinginnerhtml += `<h2>Application : ${RegistrationNo}</h2>`;
formheadingClass.innerHTML = formheadinginnerhtml;

changepassword.addEventListener("click", async (event) => {
  event.preventDefault();
  container.style.filter = "blur(10px)";
  changepasswordwindow.style.display = "block";
  updatePasswordConfirmDOM.addEventListener("click", async (event) => {
    event.preventDefault();
    const newPasswordDOM = document.getElementById("newpassword");
    const confirmNewPasswordDOM = document.getElementById("confirmnewpassword");
    let newPasswordDOM_value = newPasswordDOM.value;
    let confirmNewPasswordDOM_value = confirmNewPasswordDOM.value;
    if (newPasswordDOM_value != "" && confirmNewPasswordDOM_value != "") {
      if (newPasswordDOM_value == confirmNewPasswordDOM_value) {
        let password_body = {
          Password: newPasswordDOM_value,
        };
        try {
          const response = await axios.patch(
            `http://127.0.0.1:3000/ums/changepassword/${RegistrationNo}`,
            password_body
          );
          newPasswordDOM.value = "";
          confirmNewPasswordDOM.value = "";
          container.style.filter = "none";
          changepasswordwindow.style.display = "none";
          alert("Password Changed Successfully");
          sessionStorage.clear();
          location.replace(`http://127.0.0.1:5500/public/html/login.html`);
        } catch (error) {
          newPasswordDOM.value = "";
          confirmNewPasswordDOM.value = "";
          container.style.filter = "none";
          changepasswordwindow.style.display = "none";
          console.log(error);
          alert("Error Please Try Again .... !");
        }
      } else {
        alert("Password Don't Match Please Try Again");
      }
    } else {
      alert("Please Provide the Needed Details");
    }
  });
});

close_button.addEventListener("click", (event) => {
  event.preventDefault();
  const newPasswordDOM = document.getElementById("newpassword");
  const confirmNewPasswordDOM = document.getElementById("confirmnewpassword");
  newPasswordDOM.value = "";
  confirmNewPasswordDOM.value = "";
  container.style.filter = "none";
  changepasswordwindow.style.display = "none";
});

let applicationNameDOM = document.getElementById("name");
let applicationFatherNameDOM = document.getElementById("fathername");
let applicationMotherNameDOM = document.getElementById("mothername");
let applicationDobDOM = document.getElementById("dob");
let applicationGenderDOM = document.getElementById("gender");
let applicationIdentityTypeDOM = document.getElementById("identity_type");
let applicationIdentityDetailsDOM = document.getElementById("identity_details");
let applicationPhotoDOM = document.getElementById("photo");
let applicationAddressDOM = document.getElementById("address");
let applicationLocalityDOM = document.getElementById("locality");
let applicationCityDOM = document.getElementById("city");
let applicationDistrictDOM = document.getElementById("district");
let applicatonStateDOM = document.getElementById("state");
let applicationCountryDOM = document.getElementById("country");
let applicationPincodeDOM = document.getElementById("pincode");
let applicationEmailDOM = document.getElementById("email");
let applicationPhoneDOM = document.getElementById("phonenumber");
let applicationConfirmCheckDOM = document.getElementById("confirmation");
let applicationSubmitBtnDOM = document.getElementById("submit_application_btn");

let isConfirmCheck = false;
applicationConfirmCheckDOM.addEventListener("click", () => {
  if (applicationConfirmCheckDOM.checked == true) {
    isConfirmCheck = true;
  } else {
    isConfirmCheck = false;
  }
});

applicationSubmitBtnDOM.addEventListener("click", async (event) => {
  event.preventDefault();
  let applicationNameDOM_value = applicationNameDOM.value;
  let applicationFatherNameDOM_value = applicationFatherNameDOM.value;
  let applicationMotherNameDOM_value = applicationMotherNameDOM.value;
  let applicationDobDOM_value = applicationDobDOM.value;
  let applicationGenderDOM_value = applicationGenderDOM.value;
  let applicationIdentityTypeDOM_value = applicationIdentityTypeDOM.value;
  let applicationIdentityDetailsDOM_value = applicationIdentityDetailsDOM.value;
  let applicationPhotoDOM_value = applicationPhotoDOM.value;
  let applicationAddressDOM_value = applicationAddressDOM.value;
  let applicationLocalityDOM_value = applicationLocalityDOM.value;
  let applicationCityDOM_value = applicationCityDOM.value;
  let applicationDistrictDOM_value = applicationDistrictDOM.value;
  let applicatonStateDOM_value = applicatonStateDOM.value;
  let applicationCountryDOM_value = applicationCountryDOM.value;
  let applicationPincodeDOM_value = applicationPincodeDOM.value;
  let applicationEmailDOM_value = applicationEmailDOM.value;
  let applicationPhoneDOM_value = applicationPhoneDOM.value;
  try {
    const response = await axios.get(
      `http://127.0.0.1:3000/ums/getalldetails/${RegistrationNo}`
    );
    if (response.data.application_details != null) {
      if (
        applicationNameDOM_value != "" &&
        applicationFatherNameDOM_value != "" &&
        applicationMotherNameDOM_value != "" &&
        applicationDobDOM_value != "" &&
        applicationGenderDOM_value != "" &&
        applicationIdentityTypeDOM_value != "" &&
        applicationIdentityDetailsDOM_value != "" &&
        applicationPhotoDOM_value != "" &&
        applicationAddressDOM_value != "" &&
        applicationLocalityDOM_value != "" &&
        applicationCityDOM_value != "" &&
        applicationDistrictDOM_value != "" &&
        applicatonStateDOM_value != "" &&
        applicationCountryDOM_value != "" &&
        applicationPincodeDOM_value != "" &&
        applicationEmailDOM_value != "" &&
        applicationPhoneDOM_value != ""
      ) {
        applicationNameDOM.value = "";
        applicationFatherNameDOM.value = "";
        applicationMotherNameDOM.value = "";
        applicationDobDOM.value = "";
        applicationGenderDOM.value = "";
        applicationIdentityTypeDOM.value = "";
        applicationIdentityDetailsDOM.value = "";
        applicationPhotoDOM.value = "";
        applicationAddressDOM.value = "";
        applicationLocalityDOM.value = "";
        applicationCityDOM.value = "";
        applicationDistrictDOM.value = "";
        applicatonStateDOM.value = "";
        applicationCountryDOM.value = "";
        applicationPincodeDOM.value = "";
        applicationEmailDOM.value = "";
        applicationPhoneDOM.value = "";
        alert(
          `Registration Number : ${RegistrationNo}\nApplication is Already Submitted`
        );
      } else {
        alert("Please Enter the Details Below");
      }
    } else {
      if (
        applicationNameDOM_value != "" &&
        applicationFatherNameDOM_value != "" &&
        applicationMotherNameDOM_value != "" &&
        applicationDobDOM_value != "" &&
        applicationGenderDOM_value != "" &&
        applicationIdentityTypeDOM_value != "" &&
        applicationIdentityDetailsDOM_value != "" &&
        applicationPhotoDOM_value != "" &&
        applicationAddressDOM_value != "" &&
        applicationLocalityDOM_value != "" &&
        applicationCityDOM_value != "" &&
        applicationDistrictDOM_value != "" &&
        applicatonStateDOM_value != "" &&
        applicationCountryDOM_value != "" &&
        applicationPincodeDOM_value != "" &&
        applicationEmailDOM_value != "" &&
        applicationPhoneDOM_value != ""
      ) {
        if (isConfirmCheck == false) {
          alert(
            "Checkbox Not Checked... Please confirm the application details"
          );
        } else {
          let body = {
            RegistrationNo: RegistrationNo,
            Name: applicationNameDOM_value,
            FatherName: applicationFatherNameDOM_value,
            MotherName: applicationMotherNameDOM_value,
            Dateofbirth: applicationDobDOM_value,
            Gender: applicationGenderDOM_value,
            IdentityType: applicationIdentityTypeDOM_value,
            IdentityNumber: applicationIdentityDetailsDOM_value,
            Photograph: applicationPhotoDOM_value,
            Address: applicationAddressDOM_value,
            Locality: applicationLocalityDOM_value,
            City: applicationCityDOM_value,
            District: applicationDistrictDOM_value,
            State: applicatonStateDOM_value,
            Country: applicationCountryDOM_value,
            Pincode: applicationPincodeDOM_value,
            Email: applicationEmailDOM_value,
            PhoneNumber: applicationPhoneDOM_value,
          };
          try {
            const response = await axios.post(
              `http://127.0.0.1:3000/ums/application/submit`,
              body
            );
            applicationNameDOM.value = "";
            applicationFatherNameDOM.value = "";
            applicationMotherNameDOM.value = "";
            applicationDobDOM.value = "";
            applicationGenderDOM.value = "";
            applicationIdentityTypeDOM.value = "";
            applicationIdentityDetailsDOM.value = "";
            applicationPhotoDOM.value = "";
            applicationAddressDOM.value = "";
            applicationLocalityDOM.value = "";
            applicationCityDOM.value = "";
            applicationDistrictDOM.value = "";
            applicatonStateDOM.value = "";
            applicationCountryDOM.value = "";
            applicationPincodeDOM.value = "";
            applicationEmailDOM.value = "";
            applicationPhoneDOM.value = "";
            alert(
              `Application Submitted \nRegistration No : ${response.data.UserApplication.RegistrationNo}`
            );
            location.assign(
              `http://127.0.0.1:5500/public/html/application_preview.html`
            );
          } catch (error) {
            applicationNameDOM.value = "";
            applicationFatherNameDOM.value = "";
            applicationMotherNameDOM.value = "";
            applicationDobDOM.value = "";
            applicationGenderDOM.value = "";
            applicationIdentityTypeDOM.value = "";
            applicationIdentityDetailsDOM.value = "";
            applicationPhotoDOM.value = "";
            applicationAddressDOM.value = "";
            applicationLocalityDOM.value = "";
            applicationCityDOM.value = "";
            applicationDistrictDOM.value = "";
            applicatonStateDOM.value = "";
            applicationCountryDOM.value = "";
            applicationPincodeDOM.value = "";
            applicationEmailDOM.value = "";
            applicationPhoneDOM.value = "";
            alert(
              "Some error Occoured ...... Try Submitting Application Again... !"
            );
            console.log(error);
          }
        }
      } else {
        alert("Please Enter all the Required Details and Then Submit");
      }
    }
  } catch (error) {
    applicationNameDOM.value = "";
    applicationFatherNameDOM.value = "";
    applicationMotherNameDOM.value = "";
    applicationDobDOM.value = "";
    applicationGenderDOM.value = "";
    applicationIdentityTypeDOM.value = "";
    applicationIdentityDetailsDOM.value = "";
    applicationPhotoDOM.value = "";
    applicationAddressDOM.value = "";
    applicationLocalityDOM.value = "";
    applicationCityDOM.value = "";
    applicationDistrictDOM.value = "";
    applicatonStateDOM.value = "";
    applicationCountryDOM.value = "";
    applicationPincodeDOM.value = "";
    applicationEmailDOM.value = "";
    applicationPhoneDOM.value = "";
    console.log(error);
    alert("Some error Occoured ..... !");
  }
});

logoutButtonDOM.addEventListener("click", async (event) => {
  event.preventDefault();
  applicationNameDOM.value = "";
  applicationFatherNameDOM.value = "";
  applicationMotherNameDOM.value = "";
  applicationDobDOM.value = "";
  applicationGenderDOM.value = "";
  applicationIdentityTypeDOM.value = "";
  applicationIdentityDetailsDOM.value = "";
  applicationPhotoDOM.value = "";
  applicationAddressDOM.value = "";
  applicationLocalityDOM.value = "";
  applicationCityDOM.value = "";
  applicationDistrictDOM.value = "";
  applicatonStateDOM.value = "";
  applicationCountryDOM.value = "";
  applicationPincodeDOM.value = "";
  applicationEmailDOM.value = "";
  applicationPhoneDOM.value = "";
  let confirm_logout = confirm(`Do you really want to logout?`);
  if (confirm_logout) {
    sessionStorage.clear();
    location.replace("http://127.0.0.1:5500/public/html/login.html");
  }
});
