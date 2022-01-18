class FakeSubscriptionDatabase {
  subscribers = {};

  saveSubscription(title, url){
    new Promise((resolve, reject) => {
      if(title in this.subscribers){
        this.subscribers[title].add(url);
      }else{
        this.subscribers[title] = new Set([url]);
      }
      resolve();
    });
  }

  getSubscribers(topic){
    if(this.subscribers[topic]){
      return Promise.resolve([...this.subscribers[topic]]);
    }
    return Promise.resolve([]);
  }
}

const fakeSubscriptionDatabase = new FakeSubscriptionDatabase;; 
export {fakeSubscriptionDatabase};
