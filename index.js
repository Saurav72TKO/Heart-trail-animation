const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(e)=>{
  // console.log("moved");
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px"
  spanEl.style.top = yPos + "px"
  const sizeVar = Math.random()*100;
  spanEl.style.width = sizeVar + "px"
  spanEl.style.height = sizeVar + "px"
  bodyEl.appendChild(spanEl)
  setTimeout(()=>{
    spanEl.remove();
  }, 3000);
})