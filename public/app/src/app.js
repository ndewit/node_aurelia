export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
	  { route: 'tasklist',  	name: 'tasklist', 	  moduleId: 'tasklist', 	nav: true, title: 'Tasklist' }
    ]);

    this.router = router;
  }
}
