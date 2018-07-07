let axios = require('axios');
let cheerio = require('cheerio');
const baseUrl = '' // Enter the website you want to scrape


let article = {
    newsTitle: '',
    newsImage: '',
    newsSummary: '',
    url: ''
}

// Use Axio to load the website and then loop through the elements with cheerio getting the data needed (:)
axios.get(baseUrl).then( (response) => 
{
    let $ = cheerio.load(response.data);
    let articles = [];
    let postWrap = $('.post-wrap').each((i, element) =>
    {
       let title = $(element).children().find('h1.h3').text();
       let url = $(element).children().find('h1.h3').find('a').attr('href');
       let img = $(element).children().find('.post-thumb').find('img').attr('src');
       let content = $(element).children().find('div.post-content').find('a').attr('href');
       let article = {
            "newsTitle": title,
            "newsImage": img,
            "newsSummary": content,
            "url": url
        }
        articles.push(article);
        
    });
    console.log(articles);
    

});

