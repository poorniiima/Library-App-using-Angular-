const express = require('express');
const app = new express(); 
const nav = 

[

    {link:'/books',name:'BOOKS'},
    
    {link:'/authors',name:'AUTHORS'},

    {link:'/signup',name:'SIGN UP'},

    {link:'/login',name:'LOGIN'},

    {link:'/addbook',name:'ADD BOOK'},


];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter); 
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);


var articles = [
    {
        title: 'Repurpose Content To Reach a Wider Audience',
        website: 'discovery.com',
        time: '1 Hour ago',
        img: "image1.jpg"
    },
    {
        title: '14 Useful Sites for Designers',
        website: 'truth.com',
        time: '2 Hours ago',
        img: "image2.jpg"
    },
    {
        title: 'TrendPaper - BlockChain Development',
        website: 'bharath.com',
        time: '1 Day ago',
        img: "image3.jpg"
    },
    {
        title: 'Technology and its Impacts in our World',
        website: 'freedom.com',
        time: '2 Days ago',
        img: "image4.jpg"
    }
]

app.get('/',function(req,res) 

{

    res.render("index",{

    nav,

    title:'LIBRARY APP',

    articles

}); 

});


app.listen(5000);

console.log("Server is ready at Port : 5000");