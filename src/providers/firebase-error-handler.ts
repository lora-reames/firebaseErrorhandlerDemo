import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { IonicErrorHandler } from 'ionic-angular';
import * as CircularJSON from 'circular-json';

@Injectable()
export class FireBaseErrorHandler extends IonicErrorHandler {

  constructor(private firebaseAnalytics: Firebase) {
    super();
  }

  handleError(error) {
    super.handleError(error);

  let err = CircularJSON.stringify(error);
      try {
	this.firebaseAnalytics.logError(err);
     }
    catch(e) {
      console.error(e);
    }
  }
}
