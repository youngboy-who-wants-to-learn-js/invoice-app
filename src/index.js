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
//TODO add text error message
//TODO add local storage with crypto
//TODO сделать useQuerySelector, который будет доставать document.querySelector(), но не вызывать
//TODO handle errors firebase

// const encode = (data) => {
//   const encoder = new TextEncoder();

//   return encoder.encode(data);
// };

// const generateIv = () => {
//   return crypto.getRandomValues(new Uint8Array(12));
// };

// const encrypt = async (data, key) => {
//   const encoded = encode(data);
//   const iv = generateIv();
//   const cipher = await crypto.subtle.encrypt(
//     {
//       name: "AES-GCM",
//       iv: iv,
//     },
//     key,
//     encoded
//   );

//   return {
//     cipher,
//     iv,
//   };
// };
