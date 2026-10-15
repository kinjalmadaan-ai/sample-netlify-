import { useAuth } from  "../context/authContext"
import { useState } from "react";

export default function Dashboard(){
    const {currentUser, logout}=useAuth();
    const [error, setError]=useState("");
    return (
        <div>
            <h2>My app dashboard</h2>
            {currentUser ? photoURL ? (
                <img src={currentUser.photoURL} alt="Profile"/> ): (
                <p> no profile picture available</p> ):
                (
                    <p>Loading the user info.....</p>)}
            <div>
                {currentUser?.email?.[0].toUpperCase()}
            </div>

            <h2>{currentUser?.displayName || "Authenticated User"}</h2>
            <p>{currentUser?.email || "no email available"}</p>

            <div>
                <p>
                <span>
                    UId: {currentUser?.uid}
                </span>
                </p>
                <p><span>Provider: {currentUser?.providerData?.[0]?.providerId}</span></p>
            </div>
            <button onclick={logout}>Logout</button>
        </div>
    );
}