"use strict";

// Helper function to toggle class 'active' on an element
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// Sidebar variables and functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Testimonials modal variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Toggle function for opening and closing modal
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all testimonials items to open modal
testimonialsItem.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.textContent = item.querySelector("[data-testimonials-title]").textContent;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Close modal when the close button or overlay is clicked
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables and filter functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => {
  elementToggleFunc(select);
});

// Add event listener to all select items to handle filtering
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.textContent.toLowerCase();
    selectValue.textContent = item.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter items based on the selected value
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Add event listeners to filter buttons for large screens
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(button => {
  button.addEventListener("click", () => {
    const selectedValue = button.textContent.toLowerCase();
    selectValue.textContent = button.textContent;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    button.classList.add("active");
    lastClickedBtn = button;
  });
});

// Contact form validation and enabling/disabling submit button
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    // Enable or disable the form submit button based on validity
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    pages.forEach(page => {
      if (link.textContent.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0); // Scroll to the top of the page
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});
