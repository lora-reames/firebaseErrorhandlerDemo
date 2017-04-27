import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { IonicErrorHandler } from 'ionic-angular';

@Injectable()
export class FireBaseErrorHandler extends IonicErrorHandler {

  constructor(private firebaseAnalytics: Firebase) {
    super();
  }

  handleError(error) {
    super.handleError(error);

    try {
      this.firebaseAnalytics.logError(error.originalError || error);
    }
    catch(e) {
      console.error(e);
    }
  }
}
