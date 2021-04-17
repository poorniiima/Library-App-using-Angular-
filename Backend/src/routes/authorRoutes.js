const express = require('express');

const authorRouter = express.Router();

function router(nav)

{

var authors = [
    {
        name: 'William Shakespeare',
        books: 'Hamlet, First Folio',
        genre: 'Comedy, Tragedy, History',
        img: "william.jpg"
    },
    {
        name: 'Charles Dickens',
        books: 'Bleak House, Oliver Twist',
        genre: 'Classics',
        img: "charles.jpg"
    },
    {
        name: 'Henry James',
        books: 'The Portrait of a Lady, The Turn of a Screw',
        genre: 'Comedy, Tragedy, History',
        img: "henry.jpg"
    }
]

authorRouter.get('/',function(req,res) 

{

    res.render("authors",{nav,
        
    title:'AUTHORS LIST',

    authors

}); 

});

authorRouter.get('/:id',function(req,res)   

	{

	    const id = req.params.id

        res.render("author",{nav,

	    title:'AUTHOR PAGE',

	    author: authors[id]

	}); 

    }); 

    return authorRouter;
}

module.exports = router; 