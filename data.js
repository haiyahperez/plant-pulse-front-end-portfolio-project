fetch("https://perenual.com/api/species-list?key=sk-R3Sv6553bfd2d29442964")
    .then((response) => {
        return response.json();
    })
    .then((api => {
        api.data.forEach((plant) => {
            const article = document.createElement("article");
            article.classList.add("plant1");
            article.innerHTML = 
            `<p>${plant.common_name}</p>
            <br>
            <p>${plant.default_image}`

        })
    }));

    function plantName(name, scientificName, otherName) {
        let name = api.data[0].common_name;
        let scientificName = api.data[0].scientific_name;
        let otherName = api.data[0].other_name; 
        
       return plantName = `${name}` + `${scientificName}` + `${otherName}`;
    }