
import * as ActionTypes from '../const/ActionTypes'


 function fetchGithubUser(userName,next){
   next({
     type:'${}_REQ'
   })
  
  axios({
    method:'GET',
    url:'https://api.github.com/users/${inputVal}',

   
 }).then(res=>{
   console.log(res);
 }).catch(err=>{
   console.log(err);
 });


 }