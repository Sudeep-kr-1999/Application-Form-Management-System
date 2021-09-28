const mongoose = require("mongoose");
const userRegistration = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Must provide a Name"],
  },

  Username: {
    type: String,
    required: [true, "Must provide a username"],
  },

  Email: {
    type: String,
    required: [true, "Must provide a email"],
  },

  Password: {
    type: String,
    required: [true, "Must provide a password"],
  },
  RegistrationNo: {
    type: String,
    required: [true, "must provide a registration number"],
  },
});

const userApplication = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Must provide a Name"],
  },

  Email: {
    type: String,
    required: [true, "Must provide a email"],
  },

  RegistrationNo: {
    type: String,
    required: [true, "must provide a registration number"],
  },

  FatherName: {
    type: String,
    required: [true, "must provide Father Name"],
  },

  MotherName: {
    type: String,
    required: [true, "must provide Mother Name"],
  },

  Dateofbirth: {
    type: String,
    required: [true, "must provide Date of Birth"],
  },

  Gender: {
    type: String,
    required: [true, "must provide Gender"],
  },

  IdentityType: {
    type: String,
    required: [true, "must provide Identity Type"],
  },

  IdentityNumber: {
    type: String,
    required: [true, "must provide Identity Number"],
  },

  Photograph: {
    type:String,
    required: false,
  },

  Address: {
    type: String,
    required: [true, "must provide Address"],
    maxLength:100,
  },

  Locality: {
    type: String,
    required: [true, "must provide Locality"],
    maxLength:100,
  },

  City: {
    type: String,
    required: [true, "must provide City/Town/Village"],
  },

  District: {
    type: String,
    required: [true, "must provide District"],
  },

  Country: {
    type: String,
    required: [true, "must provide Country"],
  },

  Pincode: {
    type: String,
    required: [true, "must provide a valid Pincode"],
  },

  PhoneNumber: {
    type: String,
    required: [true, "must provide a valid PhoneNumber"],
  },

  State: {
    type: String,
    required: [true, "must provide a valid State"],
  },

});

const RegistrationModule = mongoose.model("Registration", userRegistration);
const ApplicationModule = mongoose.model("Application", userApplication);
module.exports = { RegistrationModule, ApplicationModule };


