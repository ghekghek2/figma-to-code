let prev = document.getElementById('rprev');
let next = document.getElementById('rnext');
let imageToSpin = document.getElementById('rotate');
let imgchange =  document.getElementById("activeImg");
var count = 0;
var img =['./dish_image/10.png', './dish_image/11.png', './dish_image/12.png', './dish_image/13.png', './dish_image/14.png']
var index = 0
imgchange.src = img[0]

console.log(img[0])

function spinImage(a) {

if (a === true){




  return function() {
    count -= 72;
    imageToSpin.style.transform = `rotate(${count}deg)`;
 
    console.log(count)


// rotate array 0 ====> ...
    img.push(img.shift())
imgchange.src = img[0]
 

console.log(img)
  }
}

 else if (a === false){

  return function() {
    count += 72;
    imageToSpin.style.transform = `rotate(${count}deg)`;
    
    

// reverse array  
    img.unshift(img.pop());
    imgchange.src = img[0]
    console.log(img)

  }
}





}

prev.onclick = spinImage(true);
next.onclick = spinImage(false);
