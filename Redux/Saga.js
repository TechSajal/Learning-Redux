import {takeEvery} from 'redux-saga/effects'
import { Redux_Saga } from './ActionTypes';
function* userlist(){
    const url="https://dummyjson.com/users"
    let data = yield fetch(url);
    data = yield data.json();
    let array = []
    data.users.map((e)=>{
        array.push(`${e.firstName} ${e.lastName} age is ${e.age}`)
    })
    console.log(array)
    console.error(array)
 }

function* SagaData(){
  yield takeEvery(Redux_Saga,userlist)
}


export default SagaData;