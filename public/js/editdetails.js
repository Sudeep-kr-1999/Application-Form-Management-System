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

logoutButtonDOM.addEventListener("click", async (event) => {
  event.preventDefault();
  let confirm_logout = confirm(`Do you really want to logout?`);
  if (confirm_logout) {
    sessionStorage.clear();
    location.replace("http://127.0.0.1:5500/public/html/login.html");
  }
});

const nameDOM = document.getElementById("name");
const fathernameDOM = document.getElementById("fathername");
const mothernameDOM = document.getElementById("mothername");
const dobDOM = document.getElementById("dob");
const genderDOM = document.getElementById("gender");
const identity_typeDOM = document.getElementById("identity_type");
const identity_detailsDOM = document.getElementById("identity_details");
const photoDOM = document.getElementById("photo");
const addressDOM = document.getElementById("address");
const localityDOM = document.getElementById("locality");
const cityDOM = document.getElementById("city");
const districtDOM = document.getElementById("district");
const stateDOM = document.getElementById("state");
const countryDOM = document.getElementById("country");
const pincodeDOM = document.getElementById("pincode");
const emailDOM = document.getElementById("email");
const phonenumberDOM = document.getElementById("phonenumber");

let RegistrationNo_fromdatabase = "";
let Name_fromdatabase = "";
let FatherName_fromdatabase = "";
let MotherName_fromdatabase = "";
let Dateofbirth_fromdatabase = "";
let Gender_fromdatabase = "";
let IdentityType_fromdatabase = "";
let IdentityNumber_fromdatabase = "";
let Address_fromdatabase = "";
let Locality_fromdatabase = "";
let City_fromdatabase = "";
let District_fromdatabase = "";
let State_fromdatabase = "";
let Country_fromdatabase = "";
let Pincode_fromdatabase = "";
let PhoneNumber_fromdatabase = "";
let Email_fromdatabase = "";

let update_details_buttonDOM = document.getElementById("update_details_button");
let confirmationDOM = document.getElementById("confirmation");
let isUpdateConfirmed = false;
confirmationDOM.addEventListener("click", (event) => {
  if (confirmationDOM.checked == true) {
    isUpdateConfirmed = true;
  } else {
    isUpdateConfirmed = false;
  }
});

update_details_buttonDOM.addEventListener("click", async (event) => {
  let updated_Name = nameDOM.value;
  let updated_FatherName = fathernameDOM.value;
  let updated_MotherName = mothernameDOM.value;
  let updated_Dob = dobDOM.value;
  let updated_Gender = genderDOM.value;
  let updated_IdentityType = identity_typeDOM.value;
  let updated_IdentityNumber = identity_detailsDOM.value;
  let updated_Photo = photoDOM.value;
  let updated_Address = addressDOM.value;
  let updated_locality = localityDOM.value;
  let updated_city = cityDOM.value;
  let updated_district = districtDOM.value;
  let updated_state = stateDOM.value;
  let updated_country = countryDOM.value;
  let updated_pincode = pincodeDOM.value;
  let updated_email = emailDOM.value;
  let updated_phone = phonenumberDOM.value;
  event.preventDefault();
  let final_body=null;
  if(updated_Photo!=""){
    let body = {
      RegistrationNo: RegistrationNo,
      Name: updated_Name,
      FatherName: updated_FatherName,
      MotherName: updated_MotherName,
      Dateofbirth: updated_Dob,
      Gender: updated_Gender,
      IdentityType: updated_IdentityType,
      IdentityNumber: updated_IdentityNumber,
      Photograph: updated_Photo,
      Address: updated_Address,
      Locality: updated_locality,
      City: updated_city,
      District: updated_district,
      State: updated_state,
      Country: updated_country,
      Pincode: updated_pincode,
      Email: updated_email,
      PhoneNumber: updated_phone,
    };
    final_body=body;
  }
  else{
    let body = {
      RegistrationNo: RegistrationNo,
      Name: updated_Name,
      FatherName: updated_FatherName,
      MotherName: updated_MotherName,
      Dateofbirth: updated_Dob,
      Gender: updated_Gender,
      IdentityType: updated_IdentityType,
      IdentityNumber: updated_IdentityNumber,
      Address: updated_Address,
      Locality: updated_locality,
      City: updated_city,
      District: updated_district,
      State: updated_state,
      Country: updated_country,
      Pincode: updated_pincode,
      Email: updated_email,
      PhoneNumber: updated_phone,
    };
    final_body=body;
  }
  
  if (
    updated_Name != "" &&
    updated_FatherName != "" &&
    updated_MotherName != "" &&
    updated_Dob != "" &&
    updated_Gender != "" &&
    updated_IdentityType != "" &&
    updated_IdentityNumber != "" &&
    updated_Address != "" &&
    updated_locality != "" &&
    updated_city != "" &&
    updated_district != "" &&
    updated_state != "" &&
    updated_country != "" &&
    updated_pincode != "" &&
    updated_email != "" &&
    updated_phone != ""
  ) {
    if (isUpdateConfirmed == true) {
      try {
        const response = await axios.patch(
          `http://127.0.0.1:3000/ums/application/updatedetails/${RegistrationNo}`,
          final_body
        );
        nameDOM.value = "";
        fathernameDOM.value = "";
        mothernameDOM.value = "";
        dobDOM.value = "";
        genderDOM.value = "";
        identity_typeDOM.value = "";
        identity_detailsDOM.value = "";
        photoDOM.value = "";
        addressDOM.value = "";
        localityDOM.value = "";
        cityDOM.value = "";
        districtDOM.value = "";
        stateDOM.value = "";
        countryDOM.value = "";
        pincodeDOM.value = "";
        emailDOM.value = "";
        phonenumberDOM.value = "";
        alert("Updation Successful");
        location.replace(`http://127.0.0.1:5500/public/html/application_preview.html`);
      } catch (error) {
        console.log(error);
        nameDOM.value = "";
        fathernameDOM.value = "";
        mothernameDOM.value = "";
        dobDOM.value = "";
        genderDOM.value = "";
        identity_typeDOM.value = "";
        identity_detailsDOM.value = "";
        photoDOM.value = "";
        addressDOM.value = "";
        localityDOM.value = "";
        cityDOM.value = "";
        districtDOM.value = "";
        stateDOM.value = "";
        countryDOM.value = "";
        pincodeDOM.value = "";
        emailDOM.value = "";
        phonenumberDOM.value = "";
        alert(
          "Some Error Occoured While Updating The Data Please Try Again .... "
        );
      }
    } else {
      alert("Plese Confirm the Updation By clicking the Checkbox");
    }
  } else {
    alert("Please Provide All Details Below");
  }
});
let updatestart = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:3000/ums/application/editdetails/${RegistrationNo}`
    );
    if (response.data.application_details != null) {
      RegistrationNo_fromdatabase =
        response.data.application_details.RegistrationNo;
      Name_fromdatabase = response.data.application_details.Name;
      FatherName_fromdatabase = response.data.application_details.FatherName;
      MotherName_fromdatabase = response.data.application_details.MotherName;
      Dateofbirth_fromdatabase = response.data.application_details.Dateofbirth;
      Gender_fromdatabase = response.data.application_details.Gender;
      IdentityType_fromdatabase =
        response.data.application_details.IdentityType;
      IdentityNumber_fromdatabase =
        response.data.application_details.IdentityNumber;
      Address_fromdatabase = response.data.application_details.Address;
      Locality_fromdatabase = response.data.application_details.Locality;
      City_fromdatabase = response.data.application_details.City;
      District_fromdatabase = response.data.application_details.District;
      State_fromdatabase = response.data.application_details.State;
      Country_fromdatabase = response.data.application_details.Country;
      Pincode_fromdatabase = response.data.application_details.Pincode;
      Email_fromdatabase = response.data.application_details.Email;
      PhoneNumber_fromdatabase = response.data.application_details.PhoneNumber;
      Photo_Database=response.data.application_details.Photograph;
      nameDOM.value = Name_fromdatabase;
      fathernameDOM.value = FatherName_fromdatabase;
      mothernameDOM.value = MotherName_fromdatabase;
      dobDOM.value = Dateofbirth_fromdatabase;
      genderDOM.value = Gender_fromdatabase;
      identity_typeDOM.value = IdentityType_fromdatabase;
      identity_detailsDOM.value = IdentityNumber_fromdatabase;
      addressDOM.value = Address_fromdatabase;
      localityDOM.value = Locality_fromdatabase;
      cityDOM.value = City_fromdatabase;
      districtDOM.value = District_fromdatabase;
      stateDOM.value = State_fromdatabase;
      countryDOM.value = Country_fromdatabase;
      pincodeDOM.value = Pincode_fromdatabase;
      emailDOM.value = Email_fromdatabase;
      phonenumberDOM.value = PhoneNumber_fromdatabase;
    } else {
      alert("Application Donot Exist");
    }
  } catch (error) {
    console.log(error);
    alert("Error ...... Please Try Again.");
  }
};
updatestart();
