fetch("https://perenual.com/api/species-list?key=sk-R3Sv6553bfd2d29442964")
.then((response) => {
    return response.json()})
.then((api) => {
    api.data.forEach((plant) => {
        const article = document.createElement("article");
        let thumbnail = plant.default_image;
        if (!thumbnail) {
        thumbnail = "./images/leaves-of-a-plant.png"
        } else {
            thumbnail = plant.default_image.thumbnail;
        }

    
        article.classList.add("plant");
        article.innerHTML = 
        `<img src= "${thumbnail}">
        <br>
        <p>${plant.common_name}</p>
        <br> 
        <p>${plant.scientific_name}</p>
        <br>
        <button class= "showMore">More Info:</button>`;

        const moreInfo = document.createElement("div")
        let otherName = plant.other_name;
        if (!otherName[0]) {
            otherName = "N/A" 
        };
            moreInfo.classList.add("more-info")
            moreInfo.innerHTML = `
            <p>Other name(s): ${otherName}</p>
            <br>
            <p>Plant cycle: ${plant.cycle}</p>
            <br>
            <p>Watering Cycle: ${plant.watering}</p>
            <br>
            <p>Sunlight needed: ${plant.sunlight}</p>`
        moreInfo.classList.add("hide");
        article.appendChild(moreInfo);
          
        const page = document.querySelector(".plants");
        if (thumbnail === "./images/leaves-of-a-plant.png"){
        article.classList.add("default-icon")};
        page.append(article);
        const showMore = article.querySelector(".showMore");
        showMore.addEventListener("click",() => {
           if (moreInfo.classList.contains("hide")){
            moreInfo.classList.remove("hide") 
            showMore.textContent = "Hide"
           } else {
            moreInfo.classList.add("hide")
            showMore.textContent = "More Info:"
           }
        })
    })})

    // notes: 
    // - Some plants have no "other name"
    // - More info needs to be able to collapse if clicked on again. 
        // -Fixed by adding a conditional statement. Used textContent to change the text in the button. 
    // Currently, more info adds on the innerHTML every time it is clicked. 
