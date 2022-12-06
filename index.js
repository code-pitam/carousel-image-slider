let imgbox = document.querySelector(".img-box");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let imglist = [
  "https://images.unsplash.com/photo-1670189577367-2c6ef31a4b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1660832830372-ffe2cca4dbf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80",
  "https://images.unsplash.com/photo-1660748054768-33282c43c318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=977&q=80",
];

// const obj = Object.assign({}, imglist)
// console.log(obj);

i = imglist.length;
console.log(i);
imgbox.style.width = `${400 * i}px `;
for (n = i; n < i; i--) {
  console.log(how);
}
imglist.forEach((item) => {
  const img = document.createElement("img");
  img.src = item;
  img.alt = "alt";
  imgbox.appendChild(img);
});

const imageList = document.querySelectorAll(".img-box img");
console.log(imageList[3]);

let currentPosi = 0;

left.addEventListener("click", () => {
  currentPosi++;
  let position = -400 * currentPosi;
  if (currentPosi > 0 && currentPosi < i) {
    console.log(currentPosi);
    console.log(position);
    imgbox.style.left = `${position}px `;
  } else if (currentPosi = 3) {
    currentPosi = 0;
    imgbox.style.left = `${0}px `;
    // console.log('hi');
  }
  // currentPosi++;
  // console.log(currentPosi);
  // imgbox.style.left = `${-400 * currentPosi}px `;

  // currentPosi++;
  // console.log(currentPosi);
  // imgbox.style.left = `${-400 * currentPosi}px `;
});

right.addEventListener("click", () => {
  // while(curr)
  currentPosi--;
  let position = -400 * currentPosi;
  console.log(currentPosi);
  if(currentPosi == 0){

    imgbox.style.left = `${0}px `;

  }else if (currentPosi > 0 && currentPosi < i) {
    console.log(position);
    imgbox.style.left = `${position}px `;
  } else if (currentPosi < 0  ) {
    currentPosi = i-1;
    imgbox.style.left = `${currentPosi * -400}px `;

    console.log(currentPosi);
    
    // imgbox.style.left = `${400 * i}px `;
    console.log('hi');
  }
});
