// document.querySelectorAll('.q').forEach(elem=>{
    //     elem.addEventListener("click", function() {
    //         console.log('first one')
    //         const baseUrl = window.location.origin
    //         const sign = this.children[1]
    //         sign.src = (sign.src == baseUrl+"/assets/images/icon-plus.svg") ? baseUrl+"/assets/images/icon-minus.svg" : baseUrl+"/assets/images/icon-plus.svg";

    //         const panel = this.nextElementSibling;
    //         panel.style.maxHeight? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px"
    //     });
    // })
    document.querySelectorAll('.q').forEach(elem=>{
      elem.addEventListener("click", function() {
          console.log('second one')
          const sign = this.children[1]
          const panel = this.nextElementSibling
          panel.classList.toggle('mg-top')
          if(sign.getAttribute('src')=="./assets/images/icon-plus.svg"){
            sign.setAttribute("src", "./assets/images/icon-minus.svg")
            panel.style.maxHeight = panel.scrollHeight+90 + "px"
          }else{
            sign.setAttribute("src", "./assets/images/icon-plus.svg")
            panel.style.maxHeight = null
          }
      })
  })
  document.querySelectorAll('.q').forEach(elem=>{
    elem.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        elem.click();
      }
    })
  })