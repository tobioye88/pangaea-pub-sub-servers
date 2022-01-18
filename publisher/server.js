import express from 'express';
import 'dotenv/config';
import { validateSubscription, validatePublishTopic } from './src/validators/subscription.validator.js'
import { SubscriptionService } from './src/services/subscription.service.js';


var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Welcome to the home page.');
});

app.post('/subscribe/:topic', async (req, res) => {
  // validate
  try {
    validateSubscription(req);
    const { topic } = req.params;
    const { url } = req.body;
    await SubscriptionService.subscribe(topic, url)
    res.status(200).json({ url, topic });
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
});

app.post('/publish/:topic', async (req, res) => {
  // validate
  try {
    validatePublishTopic(req);
    const { topic } = req.params;
    const payload = req.body;
    const response = await SubscriptionService.publishToSubscribers(topic, payload);
    res.status(200).json({ topic, response });
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
})

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
    console.log( 'Publisher Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.' ); 
});

