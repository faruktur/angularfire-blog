import * as firebase from 'firebase';
export const providers = { 
    FACEBOOK_PROVIDER : new firebase.auth.FacebookAuthProvider(),
    GOOGLE_PROVIDER : new firebase.auth.GoogleAuthProvider(),
    EMAIL_PROVIDER : new firebase.auth.EmailAuthProvider(),
    TWITTER_PROVIDER: new firebase.auth.TwitterAuthProvider(),
    GITHUB_PROVIDER: new firebase.auth.GithubAuthProvider(),
}
