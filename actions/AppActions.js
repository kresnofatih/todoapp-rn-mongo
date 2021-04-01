import Axios from 'axios'
import {ipa} from '../Aipi'

export const storeNewTudu = (username, tuduname, thenAction)=>{
    Axios.post(ipa.ipl+'/postNewTudu', {
        userName: username,
        tuduName: tuduname,
        completeStatus: false
    }).then(()=>{
        thenAction();
    }).catch(err=>{
        console.log(err);
    })
}