import { auth } from "../config/Firebase";

export default function User(){

    console.log(auth);
    
    return(
        <>
        <div>
            <h2>user page</h2>
            {/* 代出登入者資訊 */}
            <p>{auth.currentUser.displayName}</p>
            <p>{auth.currentUser.email}</p>
            <p>
                <img src={auth.currentUser.photoURL} alt="" /></p>
            </div>
        </>
    )
}