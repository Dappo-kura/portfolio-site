(() => {
  const galleryData = {
  "animation": [
    {
      "id": "animation-1",
      "type": "animation",
      "category": "animation",
      "title": "Animation 01",
      "src": "./assets/animations/01_compo.mp4",
      "before": null,
      "after": null,
      "hasComparison": false,
      "description": "カードゲーム風の演出表現を想定したアニメーション実験です。\nキャラクター、背景、エフェクトをそれぞれAIで生成・動画化し、Unity上で合成しました。\nまた、グリーンバックを自動削除して透過アニメーション化するワークフローを構築し、削除しきれない部分はAfter Effectsで補正しています。\nAI生成素材をゲーム演出に組み込むための検証として制作しました。",
      "tools": "Stable Diffusion / ComfyUI / After Effects / Unity"
    },
    {
      "id": "animation-2",
      "type": "animation",
      "category": "animation",
      "title": "Animation 02",
      "src": "./assets/animations/02_idle.mp4",
      "before": null,
      "after": null,
      "hasComparison": false,
      "description": "アドベンチャーゲーム向けの立ち絵アニメーション検証です。\nグリーンバック指定で生成したキャラクター素材をもとに、ComfyUIで動きを付け、After Effectsで透過処理と仕上げを行いました。\n静止画のAIイラストを、ゲーム内で使用しやすいアニメーション素材へ変換することを目的に制作しています。",
      "tools": "Stable Diffusion / ComfyUI / After Effects"
    },
    {
      "id": "animation-3",
      "type": "animation",
      "category": "animation",
      "title": "Animation 03",
      "src": "./assets/animations/03_bandicam.webp",
      "before": null,
      "after": null,
      "hasComparison": false,
      "description": "個人開発中のADVゲームにおけるQTE画面のキャプチャです。\nComfyUIでアニメーション化したキャラクター素材と、Godot上で実装したゲームUIを組み合わせています。\nAI生成素材を実際のゲーム画面に組み込み、演出・UI・操作体験が成立するかを検証しました。",
      "tools": "Stable Diffusion / ComfyUI / Godot"
    }
  ],
  "original": [
    {
      "id": "original-1",
      "type": "image",
      "category": "original",
      "title": "Key Train 1",
      "src": "./image/original/01_key-train_1+.png",
      "before": "./image/original/01_key-train_1.png",
      "after": "./image/original/01_key-train_1+.png",
      "hasComparison": true,
      "description": "個人開発中のADVゲーム用コンセプトアートです。\nサイバーパンクとホラーを組み合わせ、AI生成特有の歪みや不穏さを世界観表現として活用しました。\nPhotoshopで不要な部分を削除、カラー変更、効果を追加しました。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-2",
      "type": "image",
      "category": "original",
      "title": "00028 3822599585",
      "src": "./image/original/02_00028-3822599585+.png",
      "before": "./image/original/02_00028-3822599585.png",
      "after": "./image/original/02_00028-3822599585+.png",
      "hasComparison": true,
      "description": "個人開発中のADVゲーム用キービジュアルです。\nStable Diffusionで生成した素材をもとに、Photoshopで不要な描き込みやオブジェクトを削除し、キャラクターデザインに合わせて配色を調整しました。\nAI出力をそのまま使用せず、ゲームの世界観やキャラクター設定に合うように整えています。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-3",
      "type": "image",
      "category": "original",
      "title": "00087 84865215",
      "src": "./image/original/03_00087-84865215+.png",
      "before": "./image/original/03_00087-84865215.png",
      "after": "./image/original/03_00087-84865215+.png",
      "hasComparison": true,
      "description": "個人開発中のADVゲーム用イベントイラストです。\nゲーム内で使用する一枚絵として、視線誘導と雰囲気作りを意識しています。\nAI生成後に、AI特有の描きこみをなくしました。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-4",
      "type": "image",
      "category": "original",
      "title": "Title",
      "src": "./image/original/03_title+.png",
      "before": "./image/original/03_title.png",
      "after": "./image/original/03_title+.png",
      "hasComparison": true,
      "description": "個人開発中のホラー整理パズルゲーム用タイトルイラストです。\nStable Diffusionで生成した素材に対して、必要な要素を描き足し、背後のお化けイラストを合成しました。\nタイトル画面として、ゲーム内容が伝わる不気味さとキャッチーさの両立を意識しています。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-5",
      "type": "image",
      "category": "original",
      "title": "00004 1910148323",
      "src": "./image/original/04_00004-1910148323+.png",
      "before": "./image/original/04_00004-1910148323.png",
      "after": "./image/original/04_00004-1910148323+.png",
      "hasComparison": true,
      "description": "個人開発中のADVゲーム用イベントイラストです。\nAI生成後に、不要な描き込みを削除し、ゲーム画面で使いやすい比率にトリミングしました。\nシーンの印象を損なわず、実装しやすいイベントCGとして整えることを目的に制作しています。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-6",
      "type": "image",
      "category": "original",
      "title": "Yui 1",
      "src": "./image/original/05_yui‗1+.png",
      "before": "./image/original/05_yui‗1.png",
      "after": "./image/original/05_yui‗1+.png",
      "hasComparison": true,
      "description": "キャラクターの印象を強めるためのビネットイラスト実験です。\nStable Diffusionで生成した素材をもとに、Photoshopで色味を調整し、怪しさや不穏な雰囲気が伝わるように仕上げました。\nキャラクター単体で世界観を伝える表現を意識しています。",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-10",
      "type": "image",
      "category": "original",
      "title": "00119 3869684533",
      "src": "./image/original/15_00119-3869684533.png",
      "before": "./image/original/15_00119-3869684533.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-11",
      "type": "image",
      "category": "original",
      "title": "00018 1495794574",
      "src": "./image/original/09_00018-1495794574+.png",
      "before": "./image/original/09_00018-1495794574.png",
      "after": "./image/original/09_00018-1495794574+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-13",
      "type": "image",
      "category": "original",
      "title": "00002 2229585589",
      "src": "./image/original/11_00002-2229585589+.png",
      "before": "./image/original/11_00002-2229585589.png",
      "after": "./image/original/11_00002-2229585589+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-14",
      "type": "image",
      "category": "original",
      "title": "00053 4173355433",
      "src": "./image/original/12_00053-4173355433+.png",
      "before": "./image/original/12_00053-4173355433.png",
      "after": "./image/original/12_00053-4173355433+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-15",
      "type": "image",
      "category": "original",
      "title": "00006 2971885923",
      "src": "./image/original/13_00006-2971885923+.png",
      "before": "./image/original/13_00006-2971885923.png",
      "after": "./image/original/13_00006-2971885923+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-16",
      "type": "image",
      "category": "original",
      "title": "00006 2274765061",
      "src": "./image/original/14_00006-2274765061+.png",
      "before": "./image/original/14_00006-2274765061.png",
      "after": "./image/original/14_00006-2274765061+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "original-18",
      "type": "image",
      "category": "original",
      "title": "00013 3054809222",
      "src": "./image/original/14_00013-3054809222.png",
      "before": "./image/original/14_00013-3054809222.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "original-20",
      "type": "image",
      "category": "original",
      "title": "00017 3542809863",
      "src": "./image/original/16_00017-3542809863.png",
      "before": "./image/original/16_00017-3542809863.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "original-21",
      "type": "image",
      "category": "original",
      "title": "HHPEEVDaIAAieTa",
      "src": "./image/original/17_HHPEEVDaIAAieTa.jpg",
      "before": "./image/original/17_HHPEEVDaIAAieTa.jpg",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "original-22",
      "type": "image",
      "category": "original",
      "title": "HIsBwOKaIAANMCb",
      "src": "./image/original/19_HIsBwOKaIAANMCb.jpg",
      "before": "./image/original/19_HIsBwOKaIAANMCb.jpg",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "original-23",
      "type": "image",
      "category": "original",
      "title": "HI2UM QawAAUpQI",
      "src": "./image/original/20_HI2UM_QawAAUpQI.jpg",
      "before": "./image/original/20_HI2UM_QawAAUpQI.jpg",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    }
  ],
  "fanart": [
    {
      "id": "fanart-1",
      "type": "image",
      "category": "fanart",
      "title": "00014 499828593",
      "src": "./image/fanart/01_00014-499828593+.png",
      "before": "./image/fanart/01_00014-499828593.png",
      "after": "./image/fanart/01_00014-499828593+.png",
      "hasComparison": true,
      "description": "Stable Diffusionで生成した素材をもとに、Photoshopで異常に細くなった腰とスカートの加筆を行いました。\nPhotoshopで不要な部分を削除",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "fanart-2",
      "type": "image",
      "category": "fanart",
      "title": "00003 3679644096",
      "src": "./image/fanart/02_00003-3679644096+.png",
      "before": "./image/fanart/02_00003-3679644096.png",
      "after": "./image/fanart/02_00003-3679644096+.png",
      "hasComparison": true,
      "description": "リファレンス画像をNano Bananaで作成し、その構図や雰囲気をもとにStable Diffusionで生成したファンアートです。\nPhotoshopで不要な部分を削除し、キャラクターの印象が伝わりやすいように仕上げました。\nリファレンス作成から生成、レタッチまでの一連の制作フローを検証しています。",
      "tools": "Stable Diffusion / Photoshop / Nano Banana"
    },
    {
      "id": "fanart-3",
      "type": "image",
      "category": "fanart",
      "title": "00123 1652753649",
      "src": "./image/fanart/03_00123-1652753649+.png",
      "before": "./image/fanart/03_00123-1652753649.png",
      "after": "./image/fanart/03_00123-1652753649+.png",
      "hasComparison": true,
      "description": "リファレンス画像をNano Bananaで作成し、その構図や雰囲気をもとにStable Diffusionで生成したファンアートです。\nPhotoshopで不要な部分を削除し、キャラクターの印象が伝わりやすいように仕上げました。\nリファレンス作成から生成、レタッチまでの一連の制作フローを検証しています。",
      "tools": "Stable Diffusion / Photoshop / Nano Banana"
    },
    {
      "id": "fanart-4",
      "type": "image",
      "category": "fanart",
      "title": "00030 447696409",
      "src": "./image/fanart/04_00030-447696409+.png",
      "before": "./image/fanart/04_00030-447696409.png",
      "after": "./image/fanart/04_00030-447696409+.png",
      "hasComparison": true,
      "description": "リファレンス画像をNano Bananaで作成し、その構図や雰囲気をもとにStable Diffusionで生成したファンアートです。\nPhotoshopで不要な部分を削除し、キャラクターの印象が伝わりやすいように仕上げました。\nリファレンス作成から生成、レタッチまでの一連の制作フローを検証しています。",
      "tools": "Stable Diffusion / Photoshop / Nano Banana"
    },
    {
      "id": "fanart-5",
      "type": "image",
      "category": "fanart",
      "title": "00073 2032031907",
      "src": "./image/fanart/05_00073-2032031907.png",
      "before": "./image/fanart/05_00073-2032031907.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "fanart-6",
      "type": "image",
      "category": "fanart",
      "title": "00126 280589000",
      "src": "./image/fanart/06_00126-280589000.png",
      "before": "./image/fanart/06_00126-280589000.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "fanart-7",
      "type": "image",
      "category": "fanart",
      "title": "HDDKkttaIAAQm1D",
      "src": "./image/fanart/07_HDDKkttaIAAQm1D.jpg",
      "before": "./image/fanart/07_HDDKkttaIAAQm1D.jpg",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "fanart-8",
      "type": "image",
      "category": "fanart",
      "title": "HDNLQHOaIAE0q1n",
      "src": "./image/fanart/08_HDNLQHOaIAE0q1n.jpg",
      "before": "./image/fanart/08_HDNLQHOaIAE0q1n.jpg",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    },
    {
      "id": "fanart-9",
      "type": "image",
      "category": "fanart",
      "title": "00010 781934906",
      "src": "./image/fanart/09_00010-781934906+.png",
      "before": "./image/fanart/09_00010-781934906.png",
      "after": "./image/fanart/09_00010-781934906+.png",
      "hasComparison": true,
      "description": "",
      "tools": "Stable Diffusion / Photoshop"
    },
    {
      "id": "fanart-10",
      "type": "image",
      "category": "fanart",
      "title": "00008 3662531788",
      "src": "./image/fanart/10_00008-3662531788.png",
      "before": "./image/fanart/10_00008-3662531788.png",
      "after": null,
      "hasComparison": false,
      "description": "",
      "tools": "Stable Diffusion"
    }
  ]
};
  const flatItems = [...galleryData.animation, ...galleryData.original, ...galleryData.fanart];
  let currentIndex = 0;
  let lastFocusedTile = null;

  const lightbox = document.getElementById('gallery-lightbox');
  const mediaSlot = document.getElementById('lightbox-media');
  const titleEl = document.getElementById('lightbox-title');
  const categoryEl = document.getElementById('lightbox-category');
  const descriptionEl = document.getElementById('lightbox-description');
  const toolsEl = document.getElementById('lightbox-tools');
  const closeButton = lightbox?.querySelector('.gallery-lightbox__close');
  const nextButton = lightbox?.querySelector('.gallery-lightbox__nav--next');
  const prevButton = lightbox?.querySelector('.gallery-lightbox__nav--prev');

  function isVideoSrc(src) { return src.endsWith('.mp4') || src.endsWith('.webm'); }

  function renderTile(item, index) {
    const tile = document.createElement('button');
    tile.className = item.type === 'animation' ? 'gallery-tile gallery-tile--animation' : 'gallery-tile';
    tile.type = 'button';
    tile.dataset.galleryIndex = String(index);
    tile.setAttribute('aria-label', item.hasComparison ? item.title + ' before after view' : item.title + ' enlarged view');

    let media;
    if (isVideoSrc(item.src)) {
      media = document.createElement('video');
      media.src = item.src;
      media.autoplay = true;
      media.loop = true;
      media.muted = true;
      media.playsInline = true;
      media.setAttribute('aria-label', item.title);
    } else {
      media = document.createElement('img');
      media.src = item.src;
      media.alt = item.title;
      media.loading = 'lazy';
      media.draggable = false;
    }

    const label = document.createElement('span');
    const category = document.createElement('small');
    category.textContent = item.hasComparison ? item.category + ' / before·after' : item.category;
    if (item.tools) {
      const tools = document.createElement('strong');
      tools.textContent = item.tools;
      label.append(tools, category);
    } else {
      label.append(category);
    }

    tile.append(media, label);
    tile.addEventListener('click', () => openLightbox(index, tile));
    return tile;
  }

  function renderRails() {
    document.querySelectorAll('[data-gallery-rail]').forEach((rail) => {
      const key = rail.dataset.galleryRail;
      const items = galleryData[key] || [];
      rail.innerHTML = '';
      items.forEach((item) => {
        const index = flatItems.findIndex((candidate) => candidate.id === item.id);
        rail.appendChild(renderTile(item, index));
      });
    });
  }

  function comparisonMarkup(item) {
    return '<div class="comparison" data-focus="balanced" style="--split: 50%">' +
      '<img class="comparison__image comparison__image--before" src="' + item.before + '" alt="' + item.title + ' before">' +
      '<img class="comparison__image comparison__image--after" src="' + item.after + '" alt="' + item.title + ' after">' +
      '<div class="comparison__divider" aria-hidden="true"></div>' +
      '<div class="comparison__labels" aria-hidden="true">' +
      '<span class="comparison__label comparison__label--before">Before</span>' +
      '<span class="comparison__label comparison__label--after">After</span>' +
      '</div>' +
      '<input class="comparison__range" type="range" min="0" max="100" value="50" aria-label="Before after slider">' +
      '</div>';
  }

  function singleImageMarkup(item) {
    if (isVideoSrc(item.src)) {
      return '<video class="gallery-lightbox__image" src="' + item.src + '" autoplay loop muted playsinline controls></video>';
    }
    return '<img class="gallery-lightbox__image" src="' + item.src + '" alt="' + item.title + '">';
  }

  function setLightboxContent(item) {
    mediaSlot.innerHTML = item.hasComparison ? comparisonMarkup(item) : singleImageMarkup(item);
    if (titleEl) titleEl.textContent = item.title;
    categoryEl.textContent = item.hasComparison ? item.category + ' / retouch before after' : item.category;
    if (descriptionEl) descriptionEl.textContent = item.description || '';
    if (toolsEl) toolsEl.textContent = item.tools ? item.tools : '';

    const comparison = mediaSlot.querySelector('.comparison');
    const range = mediaSlot.querySelector('.comparison__range');
    if (comparison && range) {
      const update = () => {
        const value = Number(range.value);
        comparison.style.setProperty('--split', value + '%');
        comparison.dataset.focus = value > 56 ? 'before' : value < 44 ? 'after' : 'balanced';
      };
      range.addEventListener('input', update);
      update();
    }
  }

  function openLightbox(index, sourceTile) {
    currentIndex = index;
    lastFocusedTile = sourceTile || document.activeElement;
    setLightboxContent(flatItems[currentIndex]);
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    nextButton.focus({ preventScroll: true });
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    mediaSlot.innerHTML = '';
    if (lastFocusedTile && typeof lastFocusedTile.focus === 'function') {
      lastFocusedTile.focus({ preventScroll: true });
    }
  }

  function showOffset(offset) {
    currentIndex = (currentIndex + offset + flatItems.length) % flatItems.length;
    setLightboxContent(flatItems[currentIndex]);
  }

  closeButton?.addEventListener('click', closeLightbox);
  nextButton?.addEventListener('click', () => showOffset(1));
  prevButton?.addEventListener('click', () => showOffset(-1));

  lightbox?.addEventListener('click', (event) => {
    const keepOpenTarget = event.target.closest(
      '.gallery-lightbox__image, .comparison, .comparison__range, .gallery-lightbox__close, .gallery-lightbox__nav'
    );
    if (!keepOpenTarget) closeLightbox();
  });

  window.addEventListener('keydown', (event) => {
    if (lightbox?.getAttribute('aria-hidden') === 'true') return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') showOffset(1);
    if (event.key === 'ArrowLeft') showOffset(-1);
  });

  renderRails();
})();
