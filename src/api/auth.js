import { Auth } from "aws-amplify";

export const getSuccessfulResponse = (response) => ({
    isSuccess: true,
    data: response,
    error: null,
});

export const getErrorResponse = (error) => ({
    isSuccess: false,
    data: null,
    error: error,
});

export async function signUp(username, password) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            // attributes: {
            //     email, // optional
            //     // phone_number, // optional - E.164 number convention
            //     // other custom attributes
            // },
            autoSignIn: {
                // optional - enables auto sign in after user is confirmed
                enabled: true,
            },
        });
        console.log(user);
        return getSuccessfulResponse(user);
    } catch (error) {
        console.log("error signing up:", error);
        return getErrorResponse(error);
    }
}

export async function confirmSignUp(username, code) {
    try {
        await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
        console.log("Registration confirmed successfully.");
        return getSuccessfulResponse();
    } catch (error) {
        console.log("Error confirming sign up:", error);
        return getErrorResponse(error);
    }
}

export async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log("Code resent successfully");
        return getSuccessfulResponse();
    } catch (error) {
        console.log("Error resending code: ", error);
        return getErrorResponse(error);
    }
}
export async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        return getSuccessfulResponse(user);
    } catch (error) {
        console.log("error signing in", error);
        if (error.code === "LimitExceededException") {
            return getErrorResponse({
                code: "LimitExceededException",
                message: "Attempt limit exceeded, please try again later.",
            });
        } else {
            return getErrorResponse(error);
        }
    }
}


export async function signOut() {
    try {
        await Auth.signOut();
        return getSuccessfulResponse(null);
    } catch (error) {
        console.log("error signing out: ", error);
        return getErrorResponse(error);
    }
}