function $(q) {
  return document.querySelector(q)
}

var menuCode = 1;

function menu() {
  if (menuCode == 1) {
    document.querySelector('.contents').animate([
      {
        transform: 'scale(1)',
        opacity: '100%'
      }, {
        transform: 'scale(0.3)',
        opacity: '0%'
      }
      ], {
      duration: 400,

    })
    setTimeout(() => {
      $(".contents").style.display = 'none'
    }, 403)
    menuCode = -1
  } else {
    $(".contents").style.display = ''
    document.querySelector('.contents').animate([
      {
        transform: 'scale(0.3)',
        opacity: '0%'
      }, {
        transform: 'scale(1)',
        opacity: '100%'
      }
      ], {
      duration: 400,
    })
  }

  menuCode += 1;
}

