import ResultWin from './canvas/result1_canvas_animation';
import ResultFail from './canvas/result3_canvas_animation';

export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);

        switch (target) {
          case `result`:
            document.querySelector(`#titleResultOpacity`).beginElement();
            const animationResult1 = new ResultWin({
              canvas: `#result_canvas`
            });
            animationResult1.startAnimation();

            break;
          case `result2`:
            document.querySelector(`#titleResult2Opacity`).beginElement();
            break;
          case `result3`:
            document.querySelector(`#titleResult3Opacity`).beginElement();
            const animationResult3 = new ResultFail({
              canvas: `#result3_canvas`
            });
            animationResult3.startAnimation();

            break;
        }
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
