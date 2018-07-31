import React,{Component} from 'react'
import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';

export function fetchlesson( next ) {
  next({
    type: ActionTypes.FETCH_LESSONINFO_REQ
  });
  
  axios({
      method: 'POST',
      url: `http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data:{
        mid:'98858'
      }
    }).then(res => {
      console.log(res.data.data);
      next({
        type: ActionTypes.FETCH_LESSONINFO_SUC,
        data: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: ActionTypes.FETCH_LESSONINFO_FAI
      });
    });
  }

 export function fetchuser( next ) {
      next({
        type: ActionTypes.FETCH_USERINFO_REQ
      });
    axios.post({
      method: 'POST',
      url: `'http://xly-wkop.xiaoniangao.cn/getUserInfo'`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
      
    )
    .then(res =>  {
      console.log(res);
      next({
        type: ActionTypes.FETCH_USERINFO_SUC,
        data: res.data
      });
    })
    .catch( err => {
      console.log(err);
      next({
        type: ActionTypes.FETCH_USERINFO_FAI,
      });
    });
  }


