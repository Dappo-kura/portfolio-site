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
      "description": "ポケポケぽいアニメーションを作ってみたいと思い実験。キャラ、背景、エフェクトのそれぞれを動画生成しUnity上で組み合わせた。グリーンバックを自動削除する透過アニメーションワークフローを作成し、削除しきれない部分をAfter Effectsで処理。",
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
      "description": "アドベンチャーゲームの立ち絵をアニメーション化させることを目的に生成。グリーンバック指定で立ち絵を生成し、透過合成。",
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
      "description": "個人開発中のADVゲームのQTE画面をキャプチャ。ComfyUIでアニメーション化したデータとゲームUIが重なった状態。",
      "tools": "Stable Diffusion / ComfyUI / Godot"
    }
  ],
  "original": [
      {
          "id":  "original-1",
          "type":  "image",
          "category":  "original",
          "title":  "Key Train 1",
          "src":  "./image/original/01_key-train_1+.png",
          "before":  "./image/original/01_key-train_1.png",
          "after":  "./image/original/01_key-train_1+.png",
          "hasComparison":  true,
          "description": "個人開発中のADVゲームのコンセプトアート。AI生成物特有の歪みを活かして世界観構築を行うことを意識し、サイバーパンクとホラーを組み合わせた。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-2",
          "type":  "image",
          "category":  "original",
          "title":  "00028 3822599585",
          "src":  "./image/original/02_00028-3822599585+.png",
          "before":  "./image/original/02_00028-3822599585.png",
          "after":  "./image/original/02_00028-3822599585+.png",
          "hasComparison":  true,
          "description": "個人開発中のADVゲームのキービジュアル。不必要な描きこみや不要なオブジェクトを削除し、キャラデザイン画に合わせてカラーの変更などをおこなった。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-3",
          "type":  "image",
          "category":  "original",
          "title":  "00087 84865215",
          "src":  "./image/original/03_00087-84865215+.png",
          "before":  "./image/original/03_00087-84865215.png",
          "after":  "./image/original/03_00087-84865215+.png",
          "hasComparison":  true,
          "description": "個人開発中のADVゲームのイベント絵。不必要な描きこみを削除。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-4",
          "type":  "image",
          "category":  "original",
          "title":  "Title",
          "src":  "./image/original/03_title+.png",
          "before":  "./image/original/03_title.png",
          "after":  "./image/original/03_title+.png",
          "hasComparison":  true,
          "description": "個人開発中のパズルゲームのタイトルイラスト。書き足しと背後のお化けイラストを合成。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-5",
          "type":  "image",
          "category":  "original",
          "title":  "00004 1910148323",
          "src":  "./image/original/04_00004-1910148323+.png",
          "before":  "./image/original/04_00004-1910148323.png",
          "after":  "./image/original/04_00004-1910148323+.png",
          "hasComparison":  true,
          "description": "個人開発中のADVゲームのイベント絵。不必要な描きこみを削除し、トリミングを行った。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-6",
          "type":  "image",
          "category":  "original",
          "title":  "Yui 1",
          "src":  "./image/original/05_yui\u2017 1+.png",
          "before":  "./image/original/05_yui\u2017 1.png",
          "after":  "./image/original/05_yui\u2017 1+.png",
          "hasComparison":  true,
          "description": "ビネットイラストの実験。怪しい雰囲気を演出するためにカラー変更を行った。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-7",
          "type":  "image",
          "category":  "original",
          "title":  "Tamaki",
          "src":  "./image/original/06_tamaki+.png",
          "before":  "./image/original/06_tamaki.png",
          "after":  "./image/original/06_tamaki+.png",
          "hasComparison":  true,
          "description": "ビネットイラストの実験。怪しい雰囲気を演出するためにカラー変更を行った。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-8",
          "type":  "image",
          "category":  "original",
          "title":  "00097 3355558804",
          "src":  "./image/original/07_00097-3355558804+.png",
          "before":  "./image/original/07_00097-3355558804.png",
          "after":  "./image/original/07_00097-3355558804+.png",
          "hasComparison":  true,
          "description": "個人開発中のADVゲームのイベント絵。不必要な描きこみを削除し、カラー変更を行った。",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-9",
          "type":  "image",
          "category":  "original",
          "title":  "00117 1913174930",
          "src":  "./image/original/08_00117-1913174930+.png",
          "before":  "./image/original/08_00117-1913174930.png",
          "after":  "./image/original/08_00117-1913174930+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-10",
          "type":  "image",
          "category":  "original",
          "title":  "00119 3869684533",
          "src":  "./image/original/08_00119-3869684533.png",
          "before":  "./image/original/08_00119-3869684533.png",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-11",
          "type":  "image",
          "category":  "original",
          "title":  "00018 1495794574",
          "src":  "./image/original/09_00018-1495794574+.png",
          "before":  "./image/original/00018-1495794574.png",
          "after":  "./image/original/09_00018-1495794574+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-12",
          "type":  "image",
          "category":  "original",
          "title":  "18 HHPFSc8bkAA6t3O",
          "src":  "./image/original/09_18_HHPFSc8bkAA6t3O.jpg",
          "before":  "./image/original/09_18_HHPFSc8bkAA6t3O.jpg",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-13",
          "type":  "image",
          "category":  "original",
          "title":  "00002 2229585589",
          "src":  "./image/original/11_00002-2229585589+.png",
          "before":  "./image/original/11_00002-2229585589.png",
          "after":  "./image/original/11_00002-2229585589+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-14",
          "type":  "image",
          "category":  "original",
          "title":  "00053 4173355433",
          "src":  "./image/original/12_00053-4173355433+.png",
          "before":  "./image/original/12_00053-4173355433.png",
          "after":  "./image/original/12_00053-4173355433+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-15",
          "type":  "image",
          "category":  "original",
          "title":  "00006 2971885923",
          "src":  "./image/original/13_00006-2971885923+.png",
          "before":  "./image/original/13_00006-2971885923.png",
          "after":  "./image/original/13_00006-2971885923+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-16",
          "type":  "image",
          "category":  "original",
          "title":  "00006 2274765061",
          "src":  "./image/original/14_00006-2274765061+.png",
          "before":  "./image/original/14_00006-2274765061.png",
          "after":  "./image/original/14_00006-2274765061+.png",
          "hasComparison":  true,
          "description": "",
          "tools": "Stable Diffusion / Photoshop"
      },
      {
          "id":  "original-18",
          "type":  "image",
          "category":  "original",
          "title":  "00013 3054809222",
          "src":  "./image/original/14_00013-3054809222.png",
          "before":  "./image/original/14_00013-3054809222.png",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-19",
          "type":  "image",
          "category":  "original",
          "title":  "00001 150311282",
          "src":  "./image/original/15_00001-150311282.png",
          "before":  "./image/original/15_00001-150311282.png",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-20",
          "type":  "image",
          "category":  "original",
          "title":  "00017 3542809863",
          "src":  "./image/original/16_00017-3542809863.png",
          "before":  "./image/original/16_00017-3542809863.png",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-21",
          "type":  "image",
          "category":  "original",
          "title":  "HHPEEVDaIAAieTa",
          "src":  "./image/original/17_HHPEEVDaIAAieTa.jpg",
          "before":  "./image/original/17_HHPEEVDaIAAieTa.jpg",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-22",
          "type":  "image",
          "category":  "original",
          "title":  "HIsBwOKaIAANMCb",
          "src":  "./image/original/19_HIsBwOKaIAANMCb.jpg",
          "before":  "./image/original/19_HIsBwOKaIAANMCb.jpg",
          "after":  null,
          "hasComparison":  false,
          "description": "",
          "tools": "Stable Diffusion"
      },
      {
          "id":  "original-23",
          "type":  "image",
          "category":  "original",
          "title":  "HI2UM QawAAUpQI",
          "src":  "./image/original/20_HI2UM_QawAAUpQI.jpg",
          "before":  "./image/original/20_HI2UM_QawAAUpQI.jpg",
          "after":  null,
          "hasComparison":  false,
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
      "description": "",
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
      "description": "リファレンス画像をNano Bananaで用意し、Stable Diffusionで生成。Photoshopで不要な部分を削除。",
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
      "description": "リファレンス画像をNano Bananaで用意し、Stable Diffusionで生成。Photoshopで不要な部分を削除。",
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
      "description": "リファレンス画像をNano Bananaで用意し、Stable Diffusionで生成。Photoshopで不要な部分を削除。",
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
    return '<div class="comparison" style="--split: 50%">' +
      '<img class="comparison__image comparison__image--before" src="' + item.before + '" alt="' + item.title + ' before">' +
      '<img class="comparison__image comparison__image--after" src="' + item.after + '" alt="' + item.title + ' after">' +
      '<div class="comparison__divider" aria-hidden="true"></div>' +
      '<div class="comparison__labels" aria-hidden="true"><span>Before</span><span>After</span></div>' +
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
      const update = () => comparison.style.setProperty('--split', range.value + '%');
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
