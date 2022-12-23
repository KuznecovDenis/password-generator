const passwordArea = document.getElementById('password');
const generateBtn = document.querySelector('.generate-password');

const lengthPassword = document.getElementById('length-password');
const includesLoverCase = document.getElementById('lower-case-simbols');
const includesUpperCase = document.getElementById('upper-case-simbols');
const includesNumber = document.getElementById('number-simbols');
const includesSimbols = document.getElementById('spicial-simbols');

const LOVERCASE_CHAR = characterStringFromCharCode(97, 122);
const UPPERCASE_CHAR = characterStringFromCharCode(65, 90);
const NUMBER_CHAR = characterStringFromCharCode(48, 57);
const SIMBOLS_CHAR = '!@#$%^&*~{}';
// const SIMBOLS_CHAR = characterStringFromCharCode(33, 47)
//   .concat(characterStringFromCharCode(58, 64))
//   .concat(characterStringFromCharCode(91, 96))
//   .concat(characterStringFromCharCode(123, 126));

function characterStringFromCharCode(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(String.fromCharCode(i));
  }
  return array.join('');
}

function getPassword(
  lengthPassword,
  includesLoverCase,
  includesUpperCase,
  includesNumber,
  includesSimbols,
) {
  let includesCharPass = '';

  if (includesLoverCase.checked) includesCharPass += LOVERCASE_CHAR;
  if (includesUpperCase.checked) includesCharPass += UPPERCASE_CHAR;
  if (includesNumber.checked) includesCharPass += NUMBER_CHAR;
  if (includesSimbols.checked) includesCharPass += SIMBOLS_CHAR;

  let password = '';
  for (let i = 0; i < lengthPassword.value; i++) {
    const randomChar = includesCharPass[Math.floor(Math.random() * includesCharPass.length)];
    password += randomChar;
  }

  return password;
}

generateBtn.addEventListener('click', () => {
  passwordArea.value = getPassword(
    lengthPassword,
    includesLoverCase,
    includesUpperCase,
    includesNumber,
    includesSimbols,
  );
});
