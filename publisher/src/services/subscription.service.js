import HttpClient from "../clients/http-client.js";
import { fakeSubscriptionDatabase } from "../database/fake.subscription.database.js";

export class SubscriptionService {

  static async subscribe(topic, url){
    await fakeSubscriptionDatabase.saveSubscription(topic, url);
  }
  
  static async publishToSubscribers(topic, data){
    const subscribers = await fakeSubscriptionDatabase.getSubscribers(topic);
    if(!subscribers || subscribers.length == 0){
      throw new Error("No Subscribers Found");
    }
    for(const url of subscribers){
      const result = { successful: [], failed: [] }
      const response = await HttpClient.post(url, JSON.stringify(data), {'Content-Type': 'application/json'});
      if(response.ok){
        result.successful.push(url);
      } else {
        result.failed.push(url);
      }
      return result;
      
    }
  }

}
