let checkPass = false;

const confirmPass = (e, npass) => {
  console.log(e.currentTarget.value)
  if (e.currentTarget.value == npass) {
    checkPass = true;
    return;
  }

  checkPass = false;
};

export { checkPass };
export default confirmPass;
