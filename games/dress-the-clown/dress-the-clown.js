let parts = [
    {
      index: 0,
      name: 'head',
      part: document.getElementById("head")
    },
    {
      index: 0,
      name: 'body',
      part: document.getElementById("body")
    },
    {
      index: 0,
      name: 'shoes',
      part: document.getElementById("shoes")
    }
  ]
  
  let clothingIndex = 0;
  
  function changeClothes(key) {
    if(key == "ArrowUp" || key == "ArrowDown") {
      key == "ArrowDown" ? clothingIndex++ : clothingIndex--;
      if(clothingIndex < 0 || clothingIndex > 2) {
        clothingIndex = clothingIndex < 0 ? 2 : 0;
      }
    } else {
      key == "ArrowRight" ? parts[clothingIndex].index++ : parts[clothingIndex].index--;
      if(parts[clothingIndex].index < 0 || parts[clothingIndex].index > 5) {
        parts[clothingIndex].index = parts[clothingIndex].index < 0 ? 5 : 0;
      }
    }
  
    parts[clothingIndex].part.src = `./images/${parts[clothingIndex].name}${parts[clothingIndex].index}.png`;
    
  }
  
  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37:
      case 38:
      case 39:
      case 40:
        changeClothes(e.key)
        break;
    }
  }