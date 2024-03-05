"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    async function signIn() {
        await gitHubSignIn();
    }

    // Sign out of Firebase
    async function signOut() {
        await firebaseSignOut();
    }

    // Display some of the user's information
    return (
        <main>
            <h1 className="m-2 text-4xl">Shopping List App</h1>
            {
                user === null ? < button onClick={() => signIn()}> Sign in with GitHub</button> :
                    <p className="ml-3">
                        <p>Signed in as {user.email}</p>
                        <button onClick={() => signOut()}>Sign Out</button>
                        <br></br>
                        <Link className=" hover:text-green-500" href="/week-8/shoppingList">Continue to your Shopping List</Link>
                    </p>
            }
        </main >
    )
}


