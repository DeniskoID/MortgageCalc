import updateModel from './../utils/updateModel.js';

function init(getData) {
  const { base, it, gov, zero } = getData().programs;
  const radioBtns = document.querySelectorAll('input[name="program"]');

  //Set program rates in radio buttons
  document.querySelector('#base-value').value = base;
  document.querySelector('#it-value').value = it;
  document.querySelector('#gov-value').value = gov;
  document.querySelector('#zero-value').value = zero;

  //Show program rates on page
  document.querySelector('#base-text').innerText = base * 100 + '%';
  document.querySelector('#it-text').innerText = it * 100 + '%';
  document.querySelector('#gov-text').innerText = gov * 100 + '%';
  document.querySelector('#zero-text').innerText = zero * 100 + '%';

  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener('change', function () {
      updateModel(this, {
        selectedProgram: parseFloat(this.value),
        onUpdate: 'radioProgram',
        id: this.id,
      });
    });
  });
}

export default init;
