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

  navigator.clipboard.writeText(passwordArea.value);
});


const addBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')

addBtn.addEventListener('click', () => {
  let value = +lengthPassword.value

  lengthPassword.value = value >= 30 ? value : value + 1
})

minusBtn.addEventListener('click', () => {
  let value = +lengthPassword.value

  lengthPassword.value = value <= 1 ? value : value - 1
  
})

lengthPassword.addEventListener('input', e => {
  let val = e.target.value 
  if (val.length <= 2 ) {
    e.target.value = val.replace(/\D/g, '')
    if (val > 30) {
      e.target.value = 30
    }
  } else {
    e.target.value = 30
  }
  
}) 

document.getElementById("copy").onclick = function() {
  const text = document.getElementById("password")
  navigator.clipboard.writeText(text.value);
}
