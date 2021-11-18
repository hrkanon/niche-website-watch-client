import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
// import { useHistory, useLocation } from "react-router";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  // const history = useHistory();
  // const location = useLocation();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   sign up using google
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        handleUserInfoRegister(user.email, user?.displayName, "PUT");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   Registration with email and password
  const signUpWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        handleUserInfoRegister(result.user.email, name, "POST");
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        // window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // USER INFO TO DB
  const handleUserInfoRegister = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://mighty-retreat-24462.herokuapp.com/addUserInfo", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  //   sign in with email and password
  const signInUsingEmailPassword = (email, password, location, history) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //
  useEffect(() => {
    fetch(`https://mighty-retreat-24462.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //   signOut
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // sign-out successful
        setUser({});
      })
      .catch((error) => {
        // an error happened
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    isLoading,
    error,
    handleGoogleSignIn,
    signUpWithEmailPassword,
    signInUsingEmailPassword,
    handleSignOut,
  };
};

export default useFirebase;
