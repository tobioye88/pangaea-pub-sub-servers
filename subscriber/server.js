import express from 'express';
import 'dotenv/config';



var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Welcome to the home page.');
});





//custom 404 response
app.use((req, res)=>{
    res.type('application/json');
    res.status(404);
    res.json({ message: '404 - Not Found' });
})

// custom 500 response
app.use(function(err, req, res, next){ 
    console.error(err.stack);
    res.type('application/json');
    res.status(500);
    res.json({ message: '500 - Server Error' });
});

app.listen(PORT, function(){
    console.log( 'Subscriber Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.' ); 
});

