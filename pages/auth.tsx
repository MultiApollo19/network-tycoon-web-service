import react from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../firebase/clientApp";


const uiConfig={
    signInSuccessUrl:"/",
    signInOptions:[firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen(){
    return(
        <div className="flex w-32 flex-col items-center justify-center">
            <h1>Tornado login</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
}
export default SignInScreen;