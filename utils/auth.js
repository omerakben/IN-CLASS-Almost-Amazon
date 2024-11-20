import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

const signOut = () => firebase.auth().signOut();

export { signIn, signOut };
