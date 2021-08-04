"use strict";

//projects list
document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(smoothobs2, options);
    document.querySelectorAll(".partlist01 div").forEach(div => {
        observer.observe(div);
    
    });
})
  
  function smoothobs2(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 2s forwards ease-out`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }

//cl projects
document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(smoothobs2, options);
    document.querySelectorAll(".projects01 div").forEach(div => {
        observer.observe(div);
    
    });
})
  
  function smoothobs2(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 2s forwards ease-out`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }


//Toolboxes cl
document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(smoothobs, options);
    document.querySelectorAll(".intro02 figure").forEach(figure => {
        observer.observe(figure);
    
    });
})
  
  function smoothobs(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s forwards ease-out`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }

//Toolboxes projects
document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(smoothobs, options);
    document.querySelectorAll(".intro02 p").forEach(p => {
        observer.observe(p);
    
    });
})
  
  function smoothobs(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s forwards ease-out`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
//Underline 04
document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(Underline, options);
    let target = document.querySelector('.underline-cl-04');
  observer.observe(target)
  
    });
  
  function Underline(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bg 10s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
  
  
  //Underline 03
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(Underline, options);
    let target = document.querySelector('.underline-cl-03');
  observer.observe(target)
  
    });
  
  function Underline(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bg 10s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
  
  //Underline 02
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(Underline, options);
    let target = document.querySelector('.underline-cl-02');
  observer.observe(target)
  
    });
  
  function Underline(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bg 10s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
  
  //Underline 01
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(Underline, options);
    let target = document.querySelector('.underline-cl-01');
  observer.observe(target)
  
    });
  
  function Underline(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bg 10s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
  
  //Timeline 01
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(beTouching, options);
    let target = document.querySelector('.timeline');
  observer.observe(target)
  
    });
  
  function beTouching(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bt 4s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }
  
  //Timeline02
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };
    let observer = new IntersectionObserver(beTouching, options);
    let target = document.querySelector('.timeline02');
  observer.observe(target)
  
    });
  
  function beTouching(entries, ob) {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `bt 4s 1s cubic-bezier(0.19, 1, 0.22, 1) 1`;
          } else {
            entry.target.style.animation = `none`;
          }
    };
  })
  }