import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../authentication/AuthSharer";
import Swal from "sweetalert2";



const Register = () => {

    
    const navigate = useNavigate();
    const { creatUser, logout } = useContext(AuthContext);
    const [show,setShow]=useState(false)
    
    

    const handleSignUp = (e) => {
        e.preventDefault()
        
        const email = e.target.email.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        console.log(email, password, typeof (password), name, photo)



        if (!/[A-Z]/.test(password)) {
         
            alert("Password Must Have One Uppercase")
            e.target.password.value = ""
            return
        }
        else if (!/[a-z]/.test(password)) {
        
            alert("Password Must Have One Lowecase")
            e.target.password.value = ""
            return
        }
        else if (password.length < 6) {
            alert("Password should atleast 6 character")
            e.target.password.value = ""
            return
        }

        creatUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })

                    // .then(() => {
                    //     navigate('/')
                    // })
                logout()
                Swal.fire({
                    icon: "success",
                    title: "User Created Successfully. Please Login",
                    showConfirmButton: false,
                    timer: 2500
                });
                setTimeout(() => {
                    navigate('/login')
                }, 2800)
                

            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "User Already Existed!",
                  });
                console.log(err.message)
            })
        e.target.reset()
    }
    

    return (
        <div className="py-10">

            <div className="flex flex-col justify-center h-[50vh] items-center">
                <h3 className="text-4xl font-bold mb-6">Register Now</h3>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" name="name" className="grow" placeholder="Full Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" name="photo" className="grow" placeholder="Profile URL" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type={show?"text":"password"} name="password" className="grow" placeholder="Password" required />
                        <div onClick={()=>setShow(!show)} className="cursor-pointer">{show?<FaRegEyeSlash />:<FaRegEye/>}</div>
                    </label>
                    <button className="btn bg-green-500 w-full">Register</button>
                </form>
                <div className="flex justify-between items-center gap-10">
                    <p>Already registered ? </p>
                    <Link to='/Login' className="text-blue-600">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;