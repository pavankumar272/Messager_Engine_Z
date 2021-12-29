import axios from "axios";
import { useState } from "react"

const LoginForm=()=>{

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const [error,setError]= useState('');
const handleSubmit=(e)=>{
    e.preventDefault();
    const authObject ={'Project-ID':"892fd6a3-8613-474a-8d81-2fea2e901d1b",'User-Name':username,'User-Secret':password}
try {
    axios.get('https://api.chatengine.io/chats',{headers:authObject});
   localStorage.setItem('username',username);
   localStorage.setItem('Password',password);
   
} catch (error) {
    setError('Oops, incorrect credenticals.')
}


}

    return(
        <div className="wrapper">
<div className="form">
<h1 className="title">chat application</h1>
<form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value) }className="input" placeholder="Password" required />
<div align='center'>
    <button type="submit" className="button" >
        <span>start Chating</span>
    </button>
</div>
<h2 className="error">{error}</h2>
</form>

</div>
        </div>
    )
}
export default LoginForm;