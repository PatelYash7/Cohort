"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = ()=>{
    const session = useSession();
    return <div>
        <button onClick={()=>{
            signIn()
        }}>
            Jai hind asjfs
        </button>
        <br />

        <button onClick={()=>{
            signOut()
        }}>
            Logout
        </button>

        {JSON.stringify(session)}
    </div>
}