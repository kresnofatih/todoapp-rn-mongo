import Axios from 'axios'
import { ipa } from '../Aipi';

export const storeUserData = (username, password, thenAction) => {
    Axios.post(ipa.ipl+'/signup', {
        userName: username,
        password: password
    }).then(()=>{
        thenAction();
    }).catch((err)=>{
        console.log(err);
    });
}

export const checkIfUsernameTaken = (username, takenAction, notTakenAction)=>{
    Axios.get(ipa.ipl+'/checkIfUsernameTaken', {
        params: {
            userName: username
        }
    }).then(resp=>{
        if(resp.data.length>0){
            // the username is already taken
            takenAction();
        } else {
            // the username hasnt been taken
            notTakenAction();
        }
    });
}

export const authenticateUser = (username, password, 
    authedAction, notAuthedAction)=>{
        Axios.get(ipa.ipl+'/authenticateUser', {
            params: {
                userName: username
            }
        }).then(resp=>{
            if(resp.data[0].userName===username && 
            resp.data[0].password===password){
                // if username&password is correct
                authedAction();
            } else {
                // if username&password is incorrect
                notAuthedAction();
            }
        })
    }