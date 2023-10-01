
//Links with the index.ejs inside of views 
function index(req, res) {
    res.render('index.ejs', {
        title: 'Home'
    })
}

// Exports it
module.exports = {
    index
}