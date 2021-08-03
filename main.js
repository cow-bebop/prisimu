(function () {
  'use strict';

  const MEMORYPIECE_HARD = 0.5;
  const hardStageCount = document.querySelector('.js-hardStageCount');
  const stoneCount = document.querySelector('.js-stoneCount');
  const starCount = document.querySelector('.js-starCount');
  const charaMemoPiObj = {
    1: 450,
    2: 420,
    3: 320,
    4: 200,
    5: 50,
  };
  let charaMemoPi = '';
  const result = document.querySelector('.js-result');
  let hardStageCountVal = '';
  let stoneCountVal = '';

  starCount.addEventListener('change', (event) => {
    charaMemoPi = charaMemoPiObj[event.target.value];
    result.textContent = Math.round((charaMemoPi - stoneCountVal) / (hardStageCountVal * 3 * MEMORYPIECE_HARD), 10);
  })

  hardStageCount.addEventListener('change', (event) => {
    hardStageCountVal = event.target.value;
    result.textContent = Math.round((charaMemoPi - stoneCountVal) / (hardStageCountVal * 3 * MEMORYPIECE_HARD), 10);
  })

  stoneCount.addEventListener('change', (event) => {
    stoneCountVal = event.target.value;
    result.textContent = Math.round((charaMemoPi - stoneCountVal) / (hardStageCountVal * 3 * MEMORYPIECE_HARD), 10);
  })
}());
