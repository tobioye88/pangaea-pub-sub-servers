class FakeSubscriptionDatabase {
  subscribers = {};

  saveSubscription(title, url){
    if(title in this.subscribers){
      this.subscribers[title].push(url);
    }else{
      this.subscribers[title] = [url];
    }
  }

  getSubscribers(topic){
    return this.subscribers[topic] || [];
  }
}

const FakeSubscriptionDatabase = new FakeSubscriptionDatabase;; 
export {FakeSubscriptionDatabase};
