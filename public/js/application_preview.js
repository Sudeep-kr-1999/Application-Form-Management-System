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

const application_pdfDOM=document.getElementById('application_pdf');
application_pdfDOM.addEventListener('click',(event)=>{
  event.preventDefault();
  print();
});


const editDetailsBtnDOM=document.getElementById('edit_details_button');
editDetailsBtnDOM.addEventListener('click',(event)=>{
  event.preventDefault();
  location.assign(`http://127.0.0.1:5500/public/html/editdetails.html`);
});

const photgraph_labelDOM=document.getElementById('photo');
const name_labelDOM=document.getElementById("name");
const fathername_labelDOM=document.getElementById('fathername');
const mothername_labelDOM=document.getElementById('mothername');
const dob_labelDOM=document.getElementById('dob');
const gender_labelDOM=document.getElementById('gender');
const identity_type_labelDOM=document.getElementById('identity_type');
const identity_details_labelDOM=document.getElementById('identity_details');
const address_labelDOM=document.getElementById('address');
const locality_labelDOM=document.getElementById('locality');
const city_labelDOM=document.getElementById('city');
const district_labelDOM=document.getElementById('district');
const state_labelDOM=document.getElementById('state');
const country_labelDOM=document.getElementById('country');
const pincode_labelDOM=document.getElementById('pincode');
const email_labelDOM=document.getElementById('email');
const phonenumber_labelDOM=document.getElementById('phonenumber');

let RegistrationNo_fromdatabase="";
let Name_fromdatabase="";
let FatherName_fromdatabase="";
let MotherName_fromdatabase="";
let Dateofbirth_fromdatabase="";
let Gender_fromdatabase="";
let IdentityType_fromdatabase="";
let IdentityNumber_fromdatabase="";
let Address_fromdatabase="";
let Locality_fromdatabase="";
let City_fromdatabase="";
let District_fromdatabase="";
let State_fromdatabase="";
let Country_fromdatabase="";
let Pincode_fromdatabase="";
let PhoneNumber_fromdatabase="";
let Email_fromdatabase="";
let Photgraph_fromdatabase="";
preview_function=async()=>{
  try{
    const response_preview=await axios.get(`http://127.0.0.1:3000/ums/application/preview/${RegistrationNo}`);
    if (response_preview.data.applicantdetails!=null){
      RegistrationNo_fromdatabase=response_preview.data.applicantdetails.RegistrationNo;
      Name_fromdatabase=response_preview.data.applicantdetails.Name;
      FatherName_fromdatabase=response_preview.data.applicantdetails.FatherName;
      MotherName_fromdatabase=response_preview.data.applicantdetails.MotherName;
      Dateofbirth_fromdatabase=response_preview.data.applicantdetails.Dateofbirth;
      Gender_fromdatabase=response_preview.data.applicantdetails.Gender;
      IdentityType_fromdatabase=response_preview.data.applicantdetails.IdentityType;
      IdentityNumber_fromdatabase=response_preview.data.applicantdetails.IdentityNumber;
      Address_fromdatabase=response_preview.data.applicantdetails.Address;
      Locality_fromdatabase=response_preview.data.applicantdetails.Locality;
      City_fromdatabase=response_preview.data.applicantdetails.City;
      District_fromdatabase=response_preview.data.applicantdetails.District;
      State_fromdatabase=response_preview.data.applicantdetails.State;
      Country_fromdatabase=response_preview.data.applicantdetails.Country;
      Pincode_fromdatabase=response_preview.data.applicantdetails.Pincode;
      Email_fromdatabase=response_preview.data.applicantdetails.Email;
      PhoneNumber_fromdatabase=response_preview.data.applicantdetails.PhoneNumber;
      Photgraph_fromdatabase=response_preview.data.applicantdetails.Photograph;
      photgraph_labelDOM.innerText=Photgraph_fromdatabase;
      name_labelDOM.innerText=Name_fromdatabase;
      fathername_labelDOM.innerText=FatherName_fromdatabase;
      mothername_labelDOM.innerText=MotherName_fromdatabase;
      dob_labelDOM.innerText=Dateofbirth_fromdatabase;
      gender_labelDOM.innerText=Gender_fromdatabase;
      identity_type_labelDOM.innerText=IdentityType_fromdatabase;
      identity_details_labelDOM.innerText=IdentityNumber_fromdatabase;
      address_labelDOM.innerText=Address_fromdatabase;
      locality_labelDOM.innerText=Locality_fromdatabase;
      city_labelDOM.innerText=City_fromdatabase;
      district_labelDOM.innerText=District_fromdatabase;
      state_labelDOM.innerText=State_fromdatabase;
      country_labelDOM.innerText=Country_fromdatabase;
      pincode_labelDOM.innerText=Pincode_fromdatabase;
      phonenumber_labelDOM.innerText=PhoneNumber_fromdatabase;
      email_labelDOM.innerText=Email_fromdatabase;
    }
    else{
      photgraph_labelDOM.innerText="";
      name_labelDOM.innerText="";
      fathername_labelDOM.innerText="";
      mothername_labelDOM.innerText="";
      dob_labelDOM.innerText="";
      gender_labelDOM.innerText="";
      identity_type_labelDOM.innerText="";
      identity_details_labelDOM.innerText="";
      address_labelDOM.innerText="";
      locality_labelDOM.innerText="";
      city_labelDOM.innerText="";
      district_labelDOM.innerText="";
      state_labelDOM.innerText="";
      country_labelDOM.innerText="";
      pincode_labelDOM.innerText="";
      phonenumber_labelDOM.innerText="";
      email_labelDOM.innerText="";
      alert("Application Not found");

    }
  }catch(error){
    photgraph_labelDOM.innerText="";
      name_labelDOM.innerText="";
      fathername_labelDOM.innerText="";
      mothername_labelDOM.innerText="";
      dob_labelDOM.innerText="";
      gender_labelDOM.innerText="";
      identity_type_labelDOM.innerText="";
      identity_details_labelDOM.innerText="";
      address_labelDOM.innerText="";
      locality_labelDOM.innerText="";
      city_labelDOM.innerText="";
      district_labelDOM.innerText="";
      state_labelDOM.innerText="";
      country_labelDOM.innerText="";
      pincode_labelDOM.innerText="";
      phonenumber_labelDOM.innerText="";
      email_labelDOM.innerText="";
      console.log(error);
      alert("Error ... Please Try Agiain");
  }

}

preview_function();