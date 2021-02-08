const typedTextSpan = document.querySelector(".written-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['um pequeno grupo de desenvolvedores web.', 'o grupo que vai fazer o website dos seus sonhos.', 'uns cuzao'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 3000;
let charIndex = 0;
let arrayIndex = 0;
const type = ()=>{
  if(!cursorSpan.classList.contains('typing'))cursorSpan.classList.add('typing');
  if(arrayIndex > textArray.length - 1)arrayIndex=0;
  if(charIndex < textArray[arrayIndex].length){
    typedTextSpan.textContent += textArray[arrayIndex].charAt(charIndex)
    charIndex++;
    setTimeout(type, typingDelay);
  }else{
    arrayIndex++;
    charIndex = 0;
    if(cursorSpan.classList.contains('typing'))cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay) 
  }
  
}
const erase = ()=>{
  if(!cursorSpan.classList.contains('typing'))cursorSpan.classList.add('typing');
  if(typedTextSpan.textContent.length > 0){
    typedTextSpan.textContent = typedTextSpan.innerHTML.slice(0, -1)
    setTimeout(erase, erasingDelay);
  }else{
    setTimeout(type, typingDelay);
  }
  
}
setTimeout(type, newTextDelay + 250);