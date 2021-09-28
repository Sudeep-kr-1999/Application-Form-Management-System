const { v4: uuidv4 } = require("uuid");
const { RegistrationModule, ApplicationModule } = require("../schemas/schema");

// Registration Module processes
// ========================================================================================================================================
const register = async (req, res) => {
  try {
    let unique_registration_number = uuidv4();
    let string_without_hypen = unique_registration_number.replace("-", "0");
    let stirng_with_uppercase = string_without_hypen.toUpperCase();
    let final_regno = stirng_with_uppercase.slice(0, 10);
    let {
      Name: name_provided,
      Username: username_provided,
      Email: email_provided,
      Password: password_provided,
    } = req.body;
    const body = {
      Name: name_provided,
      Username: username_provided,
      Email: email_provided,
      Password: password_provided,
      RegistrationNo: final_regno,
      isLoggedIn: true,
    };
    let registrationdata = await RegistrationModule.create(body);
    res.status(201).json({ RegistrationData: registrationdata });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getregistrationdetails= async(req,res)=>{
  try{
    const {email:email_provided}=req.params;
    const signindetails_as_per_email_given=await RegistrationModule.findOne({Email:email_provided});
    res.status(200).json({signindetails:signindetails_as_per_email_given});
  }
  catch(error){
    res.status(500).json({msg:error});
  }
}

const signin = async (req, res) => {
  try {
    const signin_update_true = {isLoggedIn:true}
    const { registration_no: provided_registration_number } = req.params;
    let getregistrationdetails = await RegistrationModule.findOneAndUpdate(
      {
        RegistrationNo: provided_registration_number,
      },
      signin_update_true,
      { new: true, runValidators: true }
    );
    res.status(200).json({ registrationdetails: getregistrationdetails });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const forgot = async (req, res) => {
  try {
    const { email: provided_email } = req.params;
    let getdataforemail = await RegistrationModule.findOne({
      Email: provided_email,
    });
    res.status(200).json({ emaildetails: getdataforemail });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// ==================================================================================================================================

// Application Module Processes
// =======================================================================================================================================
const submitapplication = async (req, res) => {
  try {
    const application_provided_data = req.body;
    let application_data = await ApplicationModule.create(
      application_provided_data
    );
    res.status(201).json({ UserApplication: application_data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const preview = async (req, res) => {
  try {
    const { registration_no: provided_registraton_no } = req.params;
    const application_data_from_database = await ApplicationModule.findOne({
      RegistrationNo: provided_registraton_no,
    });
    res.status(200).json({ applicantdetails: application_data_from_database });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editdetails = async (req, res) => {
  try {
    const { registration_no: provided_registration_number } = req.params;
    const application_details_of_registration_no_provided =
      await ApplicationModule.findOne({
        RegistrationNo: provided_registration_number,
      });
    res.status(200).json({
      application_details: application_details_of_registration_no_provided,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatedetails = async (req, res) => {
  try {
    const data_to_update = req.body;
    const {
      registration_no: provided_registraton_no_to_update_applicaton_details,
    } = req.params;
    const updated_details_for_given_registration =
      await ApplicationModule.findOneAndUpdate(
        {
          RegistrationNo: provided_registraton_no_to_update_applicaton_details,
        },
        data_to_update,
        { new: true, runValidators: true }
      );
    res
      .status(200)
      .json({ updatedDetails: updated_details_for_given_registration });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const changepassword = async (req, res) => {
  try {
    const {
      registration_no: provided_registration_number_for_password_change,
    } = req.params;
    const new_password = req.body;
    const updated_password = await RegistrationModule.findOneAndUpdate(
      { RegistrationNo: provided_registration_number_for_password_change },
      new_password,
      { new: true, runValidators: true }
    );
    res.status(200).json({ updatedPassword: updated_password });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getalldetails = async (req, res) => {
  try {
    const { registration_no: provided_registration_number } = req.params;
    const application_details_of_registration_no_provided =
      await ApplicationModule.findOne({
        RegistrationNo: provided_registration_number,
      });
    res.status(200).json({
      application_details: application_details_of_registration_no_provided,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  register,
  signin,
  forgot,
  submitapplication,
  preview,
  editdetails,
  updatedetails,
  changepassword,
  getalldetails,
  getregistrationdetails
};
