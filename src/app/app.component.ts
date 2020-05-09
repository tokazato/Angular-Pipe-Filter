import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// if we waiting data from server we should use pipe async in html
status = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve('Stable')
  }, 3000);
})

  servers = [
    {
      instanceType: 'Medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2020)
    },
    {
      instanceType: 'Large',
      name: 'User Database',
      status: 'offline',
      started: new Date(19, 3, 2017)
    },
    {
      instanceType: 'Small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(12, 5, 2018)
    },
    {
      instanceType: 'Medium',
      name: 'Production Server',
      status: 'critical',
      started: new Date(1, 8, 2012)
    },
    {
      instanceType: 'Small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(9, 8, 2007)
    },
    
  ]

  constructor() {}

  ngOnInit() {

  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
            'list-group-item-success': server.status === 'stable',
            'list-group-item-warning': server.status === 'offline',
            'list-group-item-danger' : server.status === 'critical'
          }
  }
  addServer() {
    this.servers.push(
      {
        instanceType: 'Medium',
        name: 'Test Server',
        status: 'stable',
        started: new Date(9, 5, 2017)
      }
    );
  }

}
