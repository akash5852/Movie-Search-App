const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    var movieArea = document.getElementById("movieArea");
    movieArea.innerHTML = " "
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    res.data = {};
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    console.log(shows)
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            var movieArea = document.getElementById("movieArea");
            movieArea.append(img)
        }
    }
}