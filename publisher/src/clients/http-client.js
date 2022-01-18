import fetch from "node-fetch";


class HttpClient {
  static async main (url, method, data, header) {
      const headers = { 'Accept': 'application/json', ...header};
      const body = data? data : null;
      return await fetch(url, { method, headers, body });
  }

  static async get(url, header={}){
      return await HttpClient.main(url, 'GET', null, header);

  }
  static async post(url, data, header={}){
      return await HttpClient.main(url, 'POST', data, header);
  }
  static async patch(url, data, header={}){
      return await HttpClient.main(url, 'PATCH', data, header);
  }
  static async delete(url, data=null, header={}){
      return await HttpClient.main(url, 'DELETE', data, header);
  }

}

export default HttpClient;