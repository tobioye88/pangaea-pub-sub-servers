# Pub Sub servers




How to start app


1. Install dependencies in both directories
  - cd publisher/
  - npm i
  - cd ../subscriber
  - npm i

2. Start both servers
  - cd ../publisher/
  - npm run start

  - cd ../subscriber
  - npm run start

```terminal
./start-server.sh 
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test1"}' http://localhost:8000/subscribe/topic1 
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test2"}' http://localhost:8000/subscribe/topic1 
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1 
```


I had fun building this.