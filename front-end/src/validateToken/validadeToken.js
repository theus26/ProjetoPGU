import jwtDecode from 'jwt-decode';
export default (token)=>{
    if(token){
        const decodedToken = jwtDecode(token);
        if(Date.now() < (decodedToken.axp*1000)){
            return true;
        }else{
            window.localStorage.clear();
            return false;
        }
    } return false;
}