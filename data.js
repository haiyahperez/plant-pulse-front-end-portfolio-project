fetch("https://perenual.com/api/species-list?key=sk-R3Sv6553bfd2d29442964")
.then((response) => {
    return response.json()})
.then((api) => {
    api.data.forEach((plant) => {
        const article = document.createElement("article");
        article.classList.add("plant");
        article.innerHTML = 
        `<p>Name: ${plant.common_name}</p>`;
        const page = document.querySelector(".plants");
        page.append(article);
})});