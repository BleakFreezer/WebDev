var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");

    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://cobee-the-junior-programmer.netlify.app/contact.html"
    );
  });
}

// about us

addEventListener("DOMContentLoaded", (event) => {
  var codingProjects = document.querySelectorAll("*");

  // console.log(codingProjects.length);

  codingProjects.forEach((project, index) => {
    if (index % 2 == 0) {
      // % (modulus = sisa bagi)
      // 10/2 = 5 (sisa 0)
      // 7/2 = 3 (sisa 1)

      project.dataset.aos = "fade-left";
    } else {
      project.dataset.aos = "fade-right";
    }

    project.dataset.aosDuration = 1500;
    // project.dataset.aosDelay = index * 300;
    // console.log(index * 300);
  });

  AOS.init({
    once: true,
  });
});
