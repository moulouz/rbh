// fixing the links of the services section in the nav bar
// let theNavSystemLinks = document.querySelectorAll(".sub-links li")

// theNavSystemLinks.forEach((item) => {
//    item.addEventListener("click", (e) => {
      
//       const theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

//       console.log(theSelectedSystemContainer);

//       theSystemContainer.forEach((container) => {

//          container.classList.remove("active")
//      })
//      theSelectedSystemContainer.classList.add("active")
//    })
// })

// the services section 

window.onload = function() {
   let theNavSystemLinks = document.querySelectorAll(".header .side-menu .sub-links li a");

   theNavSystemLinks.forEach((item) => {
     item.addEventListener("click" ,(e) => {
       console.log(item);
     }) 
   });
 };
let systemlinks = document.querySelectorAll(".system-titles li ");

    
 systemlinks.forEach((item) => {
      
      item.addEventListener("click", (e) => {
        
         let theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

         let theSystemContainer = document.querySelectorAll(".system-detailes");
        
         item.classList.add("active");

         theSystemContainer.forEach((container) => {

          container.classList.remove("active");

        });

         theSelectedSystemContainer.classList.add("active")

      });

     
 });

//  multi lang functionality 
import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);

 
});

// 

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][translationKey];
    
  });
  
   // looping over the ocean brush list to add the data  to each element 

  let oceanCharList = document.querySelectorAll(".car .featers .general-featers .text p ");
  let oceanCara = translations[language].ocean_brush_caracteristique_list
    oceanCharList.forEach((par, index) => {
  
    par.innerHTML = oceanCara[index]
    })  
    // looping over the wash options to make it multi lang
    let oceanWashOPtions = document.querySelectorAll(".car .wash-options p")
    let oceanOptions = translations[language].ocean_brush_specifications_generales
   
    oceanWashOPtions.forEach((par, index) => {
  
      par.innerHTML = oceanOptions[index]
      }) 

      // looping over the hydro brushless list to add the data  to each element 

  let hydroCharList = document.querySelectorAll(".hydro .featers .general-featers .text p ");
  let hydroCara = translations[language].Hydro_wash_Brushless_Wash_specifications_generales
  
  hydroCharList.forEach((par, index) => {
  
    par.innerHTML = hydroCara[index]
    })  
    // looping over the wash options to make it multi lang
    let hydroWashOPtions = document.querySelectorAll(".hydro .wash-options p")
    let hydroOptions = translations[language].accessoires_hydrowash_list
   
    hydroWashOPtions.forEach((par, index) => {
  
      par.innerHTML = hydroOptions[index]
      }) 

      // looping over the tunnel brushless list to add the data  to each element 

  let tunnelCharList = document.querySelectorAll(".tunnel .featers .general-featers .text p ");
  let tunnelCara = translations[language].tunnel_car_wash_specifications_generales
  
  tunnelCharList.forEach((par, index) => {
  
    par.innerHTML = tunnelCara[index]
    })  
    // looping over the tunnel options to make it multi lang
    let tunnelWashOPtions = document.querySelectorAll(".tunnel .wash-options p")
    let tunnelOptions = translations[language].equipement_standard_tunnel_list
   
    tunnelWashOPtions.forEach((par, index) => {
  
      par.innerHTML = tunnelOptions[index]
      }) 

    document.dir = language === "ar" ? "rtl" : "ltr";          
    // fixing the bugs of the rtl 

    let articleContent = document.querySelectorAll(".articles .main-box i")
    articleContent.forEach((article) => {
    if(language === "ar" ) {
      
        article.classList.remove("fa-long-arrow-alt-right")
        article.classList.add("fa-long-arrow-alt-left")
     
      
    } else {
      article.classList.add("fa-long-arrow-alt-right")
      article.classList.remove("fa-long-arrow-alt-left")
    } })

    //  adjusting the services file with rtl direction 
    
};




// setting  the default language to  french
document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "fr"; // if the language IS NOT AVAILABLE USE FRENCH
 
  setLanguage(language);
  

  
});


// fixing the bugs of the rtl 

let articleContent = document.querySelectorAll(".articles .main-box i")
   

           


   
    
