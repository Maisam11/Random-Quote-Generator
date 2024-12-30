function generate(){
    let quotes = {
        "—Albert Einstein" : '"We cannot solve problems with the kind of thinking we employed when we came up with them."', "—Mahatma Gandhi" : '"Learn as if you will live forever, live like you will die tomorrow."',"—Norman Vincent Peale" : '"When you change your thoughts, remember to also change your world."',"—Herman Melville" : '"It is better to fail in originality than to succeed in imitation."',"—Colin R. Davis" : '"The road to success and the road to failure are almost exactly the same."'
    }
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}