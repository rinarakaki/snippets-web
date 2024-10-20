// This snippet file was generated by processing the source file:
// ./auth-next/custom.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_sign_in_custom_modular]
import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth();
try {
  const userCredential = await signInWithCustomToken(auth, token);
  // Signed in
  const user = userCredential.user;
  // ...
} catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ...
}
// [END auth_sign_in_custom_modular]