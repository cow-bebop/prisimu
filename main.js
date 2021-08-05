(function () {
  'use strict';

  // メモリーピースに関する変数
  const memoPi = () => {
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

    // メモリーピースを集めるのに必要な日数の初期表示
    NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);

    // キャラの星数が変わった時
    starCount.addEventListener('change', (event) => {
      charaMemoPi = charaMemoPiObj[event.target.value];
      NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
    });

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

    // 現在のメモリーピース数が変わった時
    stoneCount.addEventListener('change', (event) => {
      stoneCountVal = event.target.value;
      NeedMemoPi.textContent = Math.round((charaMemoPi - stoneCountVal - soubiNeedsMemoPi) / (hardStageCountVal * 3 * KAKURITSU_OF_MEMORYPIECE), 10);
    })
  };

  const pureMemoPi = () => {
    // ピュアメモリーピースに関する変数
    const KAKURITSU_OF_PUREMEMORYPIECE = 0.5;

    const stageClearCount = document.querySelector('.js-stageClearCount');
    let stageClearCountVal = stageClearCount.value;

    const pureMemoPiCount = document.querySelector('.js-pureMemoPiCount');
    let pureMemoPiCountVal = pureMemoPiCount.value;

    const NeedPureMemoPi = document.querySelector('.js-needPureMemoPi');


    // ピュアメモリーピースを集めるのに必要な日数の初期表示
    NeedPureMemoPi.textContent = Math.round((50 - pureMemoPiCountVal) / (stageClearCountVal * KAKURITSU_OF_PUREMEMORYPIECE), 10);


    // 現在のピュアメモリーピース数が変わった時
    pureMemoPiCount.addEventListener('change', (e) => {
      pureMemoPiCountVal = e.target.value;
      NeedPureMemoPi.textContent = Math.round((50 - pureMemoPiCountVal) / (stageClearCountVal * KAKURITSU_OF_PUREMEMORYPIECE), 10);
    });

    // ピュアメモリーピースのイベント
    // ステージを回る回数を変えた時
    stageClearCount.addEventListener('change', (event) => {
      stageClearCountVal = event.target.value;
      NeedPureMemoPi.textContent = Math.round((50 - pureMemoPiCountVal) / (stageClearCountVal * KAKURITSU_OF_PUREMEMORYPIECE), 10);
    })
  };

  // キャラセレクト処理
  const addOption = () => {
    const charaNameObj = {
      'アキノ': 'https://gamewith.jp/pricone-re/article/show/92871',
      'サレン': 'https://gamewith.jp/pricone-re/article/show/92893',
      'ニノン': 'https://gamewith.jp/pricone-re/article/show/92895',
      'ユイ': 'https://gamewith.jp/pricone-re/article/show/92914',
      'リマ': 'https://gamewith.jp/pricone-re/article/show/92888',
      'レイ': 'https://gamewith.jp/pricone-re/article/show/92890'
    }
    const newContentArray = Object.keys(charaNameObj);
    // selectタグを取得する
    const charaListSelect = document.querySelector('.js-charaListSelect');

    for (const newContent of newContentArray) {
      // optionタグを作成する
      const option = document.createElement("option");
      // optionタグのテキストを4に設定する
      option.text = newContent;
      // optionタグのvalueを4に設定する
      option.value = newContent;
      // selectタグの子要素にoptionタグを追加する
      charaListSelect.appendChild(option);
    };
  };

  addOption();
  memoPi();
  pureMemoPi();
}());
