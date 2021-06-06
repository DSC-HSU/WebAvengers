// https://newsapi.org/v2/everything?q=tesla&from=2021-04-20&sortBy=publishedAt&apiKey=7d69af6a24e84117878c358ebffc49e6
let listOfArticles = null
const proxyUrl = "https://cors.bridged.cc/"

function getArticles(callback) {
    let keyword = "covid-19"
    fetch(proxyUrl + `https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&apiKey=7d69af6a24e84117878c358ebffc49e6`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).
        then((data) => data.json()).then(value => {
            console.log(value)
            // 16 Line meaning is JS object destructuring
            const { articles } = value
            callback(articles)

        })
}

// [Find Element on HTML Tree which has the #id == container] 
let container = document.querySelector('#container')

function renderArticles(listOfArticles) {
    // [Loop] over listOfArticles and create DOM
    for (const iterator of listOfArticles) {
        let articleDetail = document.createElement("div")
        let description = document.createElement("p")
        let title = document.createElement("h1")
        let originalLink = document.createElement("a")
        title.innerHTML = iterator.title
        title.className = "title"
        description.innerHTML = iterator.description
        originalLink.href = iterator.url
        originalLink.innerText = "Xem thêm"

        articleDetail.appendChild(title)
        articleDetail.appendChild(description)
        articleDetail.appendChild(originalLink)

        container.className = "articleDetail"

        // [Append (DOM above ⏫) to the #container Element]
        container.appendChild(articleDetail)



    }
}

getArticles((data) => {
    renderArticles(data)
})