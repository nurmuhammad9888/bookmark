let elItems = document.querySelectorAll(".features__item");
let elLinks = document.querySelectorAll(".features__link");
let elFeaturesBlok = document.querySelectorAll(".features__blok");

elLinks.forEach(function(link){
    
    link.addEventListener("click" , function(evt){
        evt.preventDefault();


        elItems.forEach(function(item){
            item.classList.remove("features__link--active")
        })

        link.parentElement.classList.add("features__link--active")
        
    elFeaturesBlok.forEach(function(feature){
        feature.classList.remove("features__blok--active")
    })

    document.querySelector(link.getAttribute("href")).classList.add("features__blok--active");
    })

})