/* jshint esversion: 11 */

const familyData = {

  mom: {
    title: 'MOM ♡',
    images: [
      'mom1.jpg',
      'mom2.jpg',
      'mom3.jpg'
    ]
  },

  dad: {
    title: 'DAD ✦',
    images: [
      'dad1.jpg',
      'dad2.jpg'
    ]
  },

  grandma: {
    title: 'GRANDMA ♡',
    images: [
      'grandma1.jpg'
    ]
  },

  grandpa: {
    title: 'GRANDPA ✿',
    images: [
      'grandpa1.jpg'
    ]
  },

  uncle: {
  title: 'UNCLE ✦',
  images: [
    'uncle1.jpg'
  ]
},

  auntie: {
  title: 'AUNTIE ♡',
  images: [
    'auntie1.jpg'
  ]
},

  cousin: {
  title: 'COUSIN 🎀',
  images: [
    'cousin1.jpg'
  ]
}

};

function showPage(){

  const selected =
  document.getElementById('familySelect').value;

  if(selected === ''){
    alert('선택해주세요!');
    return;
  }

  /* confetti */

  confetti({

    particleCount: 140,

    spread: 90,

    startVelocity: 35,

    colors: [
      '#f5e6d3',
      '#e7d4c0',
      '#ffffff',
      '#d9b99b'
    ]

  });

  /* slow confetti */

  const duration = 4000;

  const end =
  Date.now() + duration;

  (function frame(){

    confetti({

      particleCount: 2,

      angle: 60,

      spread: 55,

      origin: { x: 0 },

      colors: [
        '#f5e6d3',
        '#ffffff',
        '#d9b99b'
      ]

    });

    confetti({

      particleCount: 2,

      angle: 120,

      spread: 55,

      origin: { x: 1 },

      colors: [
        '#f5e6d3',
        '#ffffff',
        '#d9b99b'
      ]

    });

    if(Date.now() < end){
      requestAnimationFrame(frame);
    }

  }());

  const data =
  familyData[selected];

  document
  .getElementById('homePage')
  .classList.add('hidden');

  document
  .getElementById('resultPage')
  .classList.remove('hidden');

  document
  .getElementById('title')
  .innerText = data.title;

  const photoGrid =
  document.getElementById('photoGrid');

  photoGrid.innerHTML = '';

  data.images.forEach((imageName)=>{

    const img =
    document.createElement('img');

    img.src = imageName;

    photoGrid.appendChild(img);

  });

  window.scrollTo({

    top:0,

    behavior:'smooth'

  });

}

function goBack(){

  document
  .getElementById('resultPage')
  .classList.add('hidden');

  document
  .getElementById('homePage')
  .classList.remove('hidden');

  window.scrollTo({

    top:0,

    behavior:'smooth'

  });

}
