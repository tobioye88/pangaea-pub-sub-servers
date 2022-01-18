import Validator from 'validatorjs';

function validateSubscription(req){
  let validation = new Validator(req.body, {
    "url": "required|string" // |url
  });
  if(validation.fails()){
    console.log(validation.errors);
    throw new Error("Invalid Data");
  }
}

function validatePublishTopic(req){
  let validation = new Validator(req, {
    "body": "required"
  });
  if(validation.fails()){
    console.log(validation.errors);
    throw new Error("Invalid Data");
  }
}

export {
  validateSubscription,
  validatePublishTopic
}