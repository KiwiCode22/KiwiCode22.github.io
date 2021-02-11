window.addEventListener('scroll', function (e) {
  if(window.scrollY >= 200){
    document.querySelector('.nav-color').style.backgroundColor = "rgb(46, 46, 46)"
  }else{
    if(document.querySelector('#collapseBtn').classList.contains('collapsed')){
      document.querySelector('.nav-color').style.backgroundColor = "rgba(0, 0, 0, 0.1)"
    }
  }
})
document.querySelector('#collapseBtn').addEventListener("click", ()=>{
  if(document.querySelector('#collapseBtn').classList.contains('collapsed') && window.scrollY < 200){
    document.querySelector('.nav-color').style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }else{
    document.querySelector('.nav-color').style.backgroundColor = "#212529";
  }
})