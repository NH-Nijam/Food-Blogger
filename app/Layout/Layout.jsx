'use client'
import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Scroll from '../component/Scroll';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
import Swal from 'sweetalert2'


export const allDatacontext = createContext()
export const foodContext = createContext()
export const drinkContext = createContext()
export const restureantContext = createContext()
export const handlerContext = createContext()
export const DetailsContext = createContext()
export const PreviousContext = createContext()
export const signInContext = createContext()
const Layout = ({ children }) => {
    const [alldata, setAlldata] = useState([])
    const [food, setFood] = useState([]);
    const [drink, setDrink] = useState([]);
    const [resturents, setResturents] = useState([])
    const [details, setDetails] = useState([])
    const [signIn, setSignIn] = useState(null)
    const auth = getAuth(app);
    const goProvider = new GoogleAuthProvider();
    const faProvider = new FacebookAuthProvider();
    const gitProvider = new GithubAuthProvider();
    console.log(signIn);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then((data) => {
                setAlldata(data)
                setFood(data.slice(0, 3))
                setDrink(data.slice(3, 6))
                setResturents(data.slice(6, 9))
            })
    }, []);

    // details button start 
    useEffect(() => {
        const detail = JSON.parse(localStorage.getItem('details'))
        setDetails(detail);
    }, [])

    const handler = (id) => {
        const allfoods = alldata.find(d => d.id === id)
        localStorage.setItem('details', JSON.stringify(allfoods))
        setDetails(allfoods)
    }
    // details button end

    useEffect(() => {
        const Profile = JSON.parse(localStorage.getItem('profile'))
        setSignIn(Profile);
    }, [])

    // sign in google auth start
    const googleSigninHandler = () => {
        signInWithPopup(auth, goProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setSignIn(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Google SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'

            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignIn(errorMessage)
            })
    }
    // sign in google auth end

    // sign in facebook auth start

    const FacebookSigninHandler = () => {
        signInWithPopup(auth, faProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setSignIn(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Facebook SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignIn(errorMessage)
            })
    }
    // sign in facebook auth end

    // sign in Github auth start

    const GithubSigninHandler = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setSignIn(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'

            })
            .catch((error) => {
                const errorMessage = error.message;
                setSignIn(errorMessage)
            })
    }
    // sign in Github auth end


    // Email and Password Sign Up start 
    const onSubmitSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setSignIn(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'
        })
    }
    // Email and Password Sign Up end 
    
    // Email and Password SignIn start 
    const onSubmitSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setSignIn(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'
        })
    }
    // Email and Password SignIn end 






    // signOut start
    const googleSignOutHandler = () => {
        signOut(auth)
            .then((result) => {
                localStorage.removeItem('profile')
                setSignIn(null)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your SignOut Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/SIGNIN'
            }).catch((error) => {
                // An error happened.
            });
    }
    // sign)ut end




    return (
        <div >
            <allDatacontext.Provider value={[alldata, setAlldata]}>
                <foodContext.Provider value={[food, setFood]}>
                    <drinkContext.Provider value={[drink, setDrink]}>
                        <restureantContext.Provider value={[resturents, setResturents]}>
                            <handlerContext.Provider value={{ handler, googleSigninHandler, googleSignOutHandler, FacebookSigninHandler, GithubSigninHandler, onSubmitSignUp, onSubmitSignIn }}>
                                <DetailsContext.Provider value={[details, setDetails]}>
                                    <signInContext.Provider value={[signIn, setSignIn]}>
                                        <Navbar />
                                        {children}
                                        <Footer />
                                        <Scroll />
                                    </signInContext.Provider>
                                </DetailsContext.Provider>
                            </handlerContext.Provider>
                        </restureantContext.Provider>
                    </drinkContext.Provider>
                </foodContext.Provider>
            </allDatacontext.Provider>

        </div>
    );
};

export default Layout;