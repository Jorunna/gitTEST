import '@babel/polyfill';

// BEGIN (write your solution here)
export default () => {
  const progressEl = document.getElementsByTagName('progress')[0];
  const maxValue = Number(progressEl.getAttribute('max'));
  const startValue = Number(progressEl.getAttribute('value'));

 const state = {
    value: {
      max: maxValue,
      current: startValue,
      isMax: function () {
        return this.current === this.max;
      },
    }
 };

  const progressInc = () => {
      state.value.current += 1;
      progressEl.setAttribute('value', `${state.value.current}`);
  };

  const iter = () => {
    if (!state.value.isMax()) {
      setTimeout(() => {
        progressInc();
        iter();
      }, 1000)
    } else return;
  }

  iter();
};
// END