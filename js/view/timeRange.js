import updateModel from './../utils/updateModel.js';

function init(getData) {
  const slider = document.querySelector('#slider-term');
  const data = getData();

  // eslint-disable-next-line no-undef
  noUiSlider.create(slider, {
    start: data.time,
    connect: 'lower',
    tooltips: true,
    step: 1,
    range: {
      min: data.minYear,
      max: data.maxYear,
    },

    // eslint-disable-next-line no-undef
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '',
    }),
  });

  slider.noUiSlider.on('slide', function () {
    // Get slider value
    let sliderValue = slider.noUiSlider.get();
    sliderValue = sliderValue.split('.')[0];
    sliderValue = parseInt(String(sliderValue).replace(/ /g, ''));

    updateModel(slider, {
      time: sliderValue,
      onUpdate: 'timeSlider',
    });
  });

  return slider;
}

export default init;
