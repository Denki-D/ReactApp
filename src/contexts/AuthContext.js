import React, { useEffect, useState } from "react";
import { auth } from "firebase"

const AuthContext = React.createContext()

export function KoristiAuth() {
    return KoristiAuth(AuthContext);
}

export function AuthProvider({ children }) {
    const [aktualniKorisnik, postaviAktualnogKorisnika] = useState()

    function RegistrirajKorisnika(email, passwword) {
        return auth.createUserWithEmailAndPassword(email, passwword)
    }

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(korisnik => {
            postaviAktualnogKorisnika(korisnik)
    })
    return unsubscribe
    }, [])


    const value = {
        aktualniKorisnik,
        RegistrirajKorisnika
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}