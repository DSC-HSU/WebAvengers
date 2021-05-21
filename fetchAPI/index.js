// https://newsapi.org/v2/everything?q=tesla&from=2021-04-20&sortBy=publishedAt&apiKey=7d69af6a24e84117878c358ebffc49e6
let listOfArticles = null
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

function getArticles(callback) {
    fetch(proxyUrl + "https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey=7d69af6a24e84117878c358ebffc49e6", {
        method: "GET",
        mode: 'cors',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).
        then((data) => data.json()).then(value => {
            const { articles } = value
            // listOfArticles = value.articles
            callback(articles)

        })
}

let container = document.querySelector('#container')

function renderArticles(listOfArticles) {
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
        container.appendChild(articleDetail)



    }
}

getArticles((data) => {
    renderArticles(data)
})