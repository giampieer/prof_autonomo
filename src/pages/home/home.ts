import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string;
  constructor(private inAppBrowser: InAppBrowser) {
    this.openWebpage('http://192.168.43.1:8080/profesora/');
  }
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);
    // Inject script
  }
}

