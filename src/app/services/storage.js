import Firebase from 'firebase';

export class Store {
  constructor() {
    this.config = {
      apiKey: 'AIzaSyCLqLZIxY9275HCgUD4xJ1KGZUR3nSW1Z4',

      // Only needed if using Firebase Realtime Database (which we will be in this example)
      databaseURL: 'https://igluco-57677.firebaseio.com',

      // Only needed if using Firebase Authentication
      authDomain: 'igluco-57677.firebaseapp.com',

      // Only needed if using Firebase Storage
      storageBucket: 'igluco-57677.appspot.com'
    };
  }

  init() {
    Firebase.initializeApp(this.config);
  }
}
