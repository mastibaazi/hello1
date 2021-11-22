let figures = document.querySelectorAll(".figure")
const img_viewer = document.querySelector("main .gallery .image-viewer")
const img_viewer_img = document.querySelector("main .gallery .image-viewer img")
const removeBtn = document.querySelector(".fa-times")
const captionText = document.querySelector(".caption h1 span.about")
const pageNo = document.querySelector("main .gallery .image-viewer > header > span.pageNo")
const next = document.querySelector("main .gallery .image-viewer div.container > button.next")
const prev = document.querySelector("main .gallery .image-viewer div.container > button.prev")
    // console.log(figures);
    const nextSlide = (el) => {
      const current = document.querySelector(".current")
      // console.log(current);
      current.classList.remove("current")
      if (current.nextElementSibling) {
          img_viewer_img.src = current.nextElementSibling.querySelector("img").src
          current.nextElementSibling.classList.add("current")
      }else{
          img_viewer_img.src = figures[0].querySelector("img").src
          figures[0].classList.add("current")
      }
  
      for (const i in figures) {
          if (figures[i].classList.contains("current")) {
              // console.log(figures[i]);
              pageNo.innerHTML = `${Number(i) + 1} of ${figures.length}`
          }
      }
      setTimeout(() => current.classList.remove("current"))
  }
  
  const prevSlide = (el) => {
      const current = document.querySelector(".current")
      // console.log(current);
      current.classList.remove("current")
      if (current.previousElementSibling) {
          img_viewer_img.src = current.previousElementSibling.querySelector("img").src
          current.previousElementSibling.classList.add("current")
      }else{
          img_viewer_img.src = figures[figures.length - 1].querySelector("img").src
          figures[figures.length - 1].classList.add("current")
      }
  
      for (const i in figures) {
          if (figures[i].classList.contains("current")) {
              // console.log(figures[i]);
              pageNo.innerHTML = `${Number(i) + 1} of ${figures.length}`
          }
      }
      
      setTimeout(() => current.classList.remove("current"))
  }

    figures.forEach(figure => {
      figure.onclick = el => {
          // console.log(el.target.parentElement)
          el.target.parentElement.classList.add("current")
          img_viewer.classList.remove("d-none")
          img_viewer_img.src = document.querySelector(".current").querySelector("img").src
  
          next.addEventListener("click", nextSlide)
          prev.addEventListener("click", prevSlide)
  
          for (const i in figures) {
              if (figures[i].classList.contains("current")) {
                  // console.log(figures[i]);
                  pageNo.innerHTML = `${Number(i) + 1} of ${figures.length}`
              }
          }
  
          setTimeout(() => figure.classList.contains("current"))
      }    
  })
  removeBtn.onclick = el => {
    img_viewer.classList.add("d-none")
    document.querySelector(".current").classList.remove("current")
    img_viewer_img.src = ""
  }

  document.querySelector("body").onload = () => {
    document.querySelector("main .gallery .loader-container").classList.add("d-none")
    console.log("loaded");
  }