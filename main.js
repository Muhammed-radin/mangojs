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

function htmlReplacer(v1, v2) {
  document.body.innerHTML = document.body.innerHTML.replace(v1, v2)
}

function htmlReplacerAll(v1, v2) {
  if (v1 instanceof Array) {
    v1.forEach((val) => {
      document.body.innerHTML = document.body.innerHTML.replaceAll(val, v2)
    })
  } else {
    document.body.innerHTML = document.body.innerHTML.replaceAll(v1, v2)
  }
}

window.onload = function() {
 $('.load').style.display = 'none'
}

var mainApp = Mango()

htmlReplacerAll(1.7, mainApp.dev_version)
htmlReplacerAll(/{{version}}/g, mainApp.dev_version)

//htmlReplacerAll(/{{{mango}}}/g, mainApp)

var rect = Mango()
rect.setCanvas($('#rect'))
new rect.entity({
  width: 50,
  height: 50
})
rect.repeatRender()


$('.contents').querySelectorAll('p').forEach((el, ind)=>{
  var txt = el.innerText
  var convertedTxt = txt.replaceAll(' ', '')
  console.log(convertedTxt);
  
  el.onclick = () =>{
    window.location.href = '#'+convertedTxt
  }
})

