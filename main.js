(function () {
  'use strict';

  // メモリーピース
  const KAKURITSU_OF_MEMORYPIECE = 0.5;
  const hardStageCount = document.querySelector('.js-hardStageCount');
  let hardStageCountVal = hardStageCount.value;

  const stoneCount = document.querySelector('.js-stoneCount');
  let stoneCountVal = stoneCount.value;

  const soubi = document.querySelector('.js-soubi');
  let soubiFlg = soubi.checked;
  let soubiNeedsMemoPi = soubiFlg ? 50 : 0;;

  const starCount = document.querySelector('.js-starCount');
  const charaMemoPiObj = {
    1: 500,
    2: 470,
    3: 370,
    4: 250,
    5: 100,
  };
  let charaMemoPi = charaMemoPiObj[starCount.value];

  const NeedMemoPi = document.querySelector('.js-needMemoPi');

  // ピュアメモリーピース
  const KAKURITSU_OF_PUREMEMORYPIECE = 0.5;

  const stageClearCount = document.querySelector('.js-stageClearCount');
  let stageClearCountVal = stageClearCount.value;

  const pureMemoPiCount = document.querySelector('.js-pureMemoPiCount');
  let pureMemoPiCountVal = pureMemoPiCount.value;
  const NeedPureMemoPi = document.querySelector('.js-needPureMemoPi');

  NeedPureMemoPi.textContent = Math.round((50 - pureMemoPiCountVal) / (stageClearCountVal * KAKURITSU_OF_PUREMEMORYPIECE), 10);

  NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);

  // メモリーピースのイベント
  // キャラの星数が変わった時
  starCount.addEventListener('change', (event) => {
    charaMemoPi = charaMemoPiObj[event.target.value];
    NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
  })

  // ハードステージ数が変わった時
  hardStageCount.addEventListener('change', (event) => {
    hardStageCountVal = event.target.value;
    NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
  })

  // 専用装備の有無が変わった時
  soubi.addEventListener('change', (event) => {
    soubiFlg = !soubiFlg;
    soubiNeedsMemoPi = soubiFlg ? 50 : 0;
    NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
  })

  // メモリーピース数が変わった時
  stoneCount.addEventListener('change', (event) => {
    stoneCountVal = event.target.value;
    NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
  })

  // ピュアメモリーピースのイベント
  // ステージを回る回数を変えた時
  stageClearCount.addEventListener('change', (event) => {
    stageClearCountVal = event.target.value;
    NeedPureMemoPi.textContent = Math.round((50 - pureMemoPiCountVal) / (stageClearCountVal * KAKURITSU_OF_PUREMEMORYPIECE), 10);
  })
}());
