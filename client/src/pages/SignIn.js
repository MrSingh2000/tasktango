import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

export const Signin = () =>{
    return(
        <div className="w-2/5 h-96 flex flex-col ml-auto mr-auto mt-24 shadow-xl border-2">
            <h2 className="mt-2">SIGN IN</h2>
            <div className="mt-16 flex flex-col w-full items-center"><input className="mt-7 h-7 w-4/6" type="email" placeholder="Email..."/><div><input type="password"   placeholder="Password..."/><span ><Icon /></span></div></div>
            <button>SIGN IN</button>
        </div>
    );
}