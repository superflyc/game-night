import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // todo make interface
  static config;

  constructor(private http: HttpClient) {
  }

  getConfig() {
    const configFile = 'assets/config.json';
    // use a Promise to work with APP_INITIALIZER
    return new Promise<void>((resolve, reject) => {
      this.http.get(configFile).toPromise().then(response => {
        ConfigService.config = response;
        resolve();
      }).catch(error => {
        reject('Could not load config file.');
      });
    });
  }
}
