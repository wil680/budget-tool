const KEY = 'auth_token'

export function isAuthenticated(){
    return Boolean(localStorage.getItem(KEY));
}

export function login({email, password}){
    if(email && password){
        localStorage.setItem(KEY, 'demo--token');
        return true;
    }
    return false;
}

export function signup({email, password}){
    if(email && password){
        localStorage.setItem(KEY, 'demo--token');
        return true;
    }
    return false;
}

export function logout(){
    localStorage.removeItem(KEY);
}