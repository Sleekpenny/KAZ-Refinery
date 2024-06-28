import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  openCapacitorSite = async (url: string ) => {
    await Browser.open({ url });
  };
}
