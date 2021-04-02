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

export const getUserTudus = (username, thenWithDataAction)=>{
    Axios.get(ipa.ipl+'/getUserTudus', {
        params: {
            userName: username
        }
    }).then(resp=>{
        if(resp.data.length>0){
            const respdata = resp.data;
            thenWithDataAction(respdata);
        }
    });
}

export const updateTudu = (newTuduName, tuduId, thenAction)=>{
    Axios.put(ipa.ipl+'/editTudu', {
        newTuduName: newTuduName,
        tuduId: tuduId
    }).then(()=>{
        thenAction();
    });
}

export const toggleTudu = (newCompleteStatus, tuduId, thenAction)=>{
    Axios.put(ipa.ipl+'/toggleCompleteTudu', {
        newCompleteStatus: newCompleteStatus,
        tuduId: tuduId
    }).then(()=>{
        thenAction();
    });
}

export const deleteTudu = (tuduId, thenAction)=>{
    Axios.delete(ipa.ipl+`/deleteTudu/${tuduId}`).then(()=>{
        thenAction();
    })
}