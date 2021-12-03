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
//TODO new Date(2021, 11 , 0).getDate()
//TODO 3 месяца назад, 3 вперед
//TODO clean form after submit
//TODO add local storage
//TODO сделать useQuerySelector, который будет доставать document.querySelector(), но не вызывать
//TODO use FormData -> onSubmit
