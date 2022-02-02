// eslint-disable-next-line import/no-unresolved
import "@/styles/index.scss";

import renderUser from "./scripts/renders/renderUser";
import { signInWithGoogle, signOutGoogle, auth } from "./scripts/firebase";

const signInButton = document.querySelector("#google-sign-in");
const signOutButton = document.querySelector("#google-sing-out");

auth.onAuthStateChanged((user) => {
  renderUser(user);
});
signOutButton.addEventListener("click", signOutGoogle);
signInButton.addEventListener("click", signInWithGoogle);

//TODO сделать useQuerySelector, который будет доставать document.querySelector(), но не вызывать
//1 2 3
