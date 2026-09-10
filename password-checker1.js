function hasMinimumLength(pass){
  if (pass.length >= 8) {
    return true 
  } else {
    return false
  }
}

function hasNumber(pass) {
  return /\d/.test(pass);
}

function hasUppercaseLetter(pass) {
  if (pass.toLowerCase() === pass){
    return false
  } else {
    return true
  }
}

function getFailedRules(pass) {
  failed = []
  if (hasMinimumLength(pass)) {
  } else {
    failed.push(" minimum length");
  }

  if (hasNumber(pass)){
  } else {
    failed.push(" has number");
  }

  if (hasUppercaseLetter(pass)){
  } else {
    failed.push(" no uppercase letter")
  }
  return failed;
}

function validatePassword(pass) {
  Failed = getFailedRules(pass);
  Valid = "Valid: ";
  Check = ""
  
  if (Failed.length > 0){
    Check = "False";
  } else {
    Check = "True";
  }

  Valid = `${Check}`;
  
  const validation = {
    valid: Valid,
    failed: failed
  };
  console.log(validation);
  return validation;
};

console.log (validatePassword("it work"))  
