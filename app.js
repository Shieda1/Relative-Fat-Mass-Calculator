// https://www.omnicalculator.com/health/relative-fat-mass

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const relativefatmassRadio = document.getElementById('relativefatmassRadio');
const heightRadio = document.getElementById('heightRadio');
const waistRadio = document.getElementById('waistRadio');

let relativefatmass;
let height = v1;
let waist = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

relativefatmassRadio.addEventListener('click', function() {
  variable1.textContent = 'Height';
  variable2.textContent = 'Waist';
  height = v1;
  waist = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Relative fat mass';
  variable2.textContent = 'Waist';
  relativefatmass = v1;
  waist = v2;
  result.textContent = '';
});

waistRadio.addEventListener('click', function() {
  variable1.textContent = 'Relative fat mass';
  variable2.textContent = 'Height';
  relativefatmass = v1;
  height = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(relativefatmassRadio.checked)
    result.textContent = `Relative fat mass = ${computerelativefatmass().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;

  else if(waistRadio.checked)
    result.textContent = `Waist = ${computewaist().toFixed(2)}`;
})

// calculation

// MEN: RFM = 64 - (20 * height / WC)

// WOMEN: RFM = 76 - (20 * height /WC)

function computerelativefatmass() {
  return 64 - (20 * Number(height.value) / Number(waist.value));
}

function computeheight() {
  return ((64 - Number(relativefatmass.value)) * Number(waist.value)) / 20;
}

function computewaist() {
  return (20 * Number(height.value)) / (64 - Number(relativefatmass.value));
}