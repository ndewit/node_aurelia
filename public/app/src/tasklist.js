import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Tasklist {
	
  constructor(http) {
	  this.message = "Ma jolie liste de tâche :";
	  
	  http.configure(config => {
		config
        .useStandardConfiguration();
      });
    this.http = http;
	  this.loadTasks();
  }
  
  loadTasks() {
    let response = this.http.fetch('../tasks', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'get'
    }).then(response => response.json())
      .catch(error => {
            console.error(error);
        })
      .then(data => {
        //console.log(data);
        this.listTasks = data;
      })
      .catch(error => {
            console.error(error);
      });
  }

}
