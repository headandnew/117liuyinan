import React,{Component} from 'react'
import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';




function fetchuser(next){
    next({
        type: `${ActionTypes.FETCH_USER}_REQ`
      });
    axios({
        method: 'post',
        url: ' http://xly-wkop.xiaoniangao.cn/getUserInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid:'1',
        }
    }).then(res => {
        next({
            type: `${ActionTypes.FETCH_USER}_SUC`,
            data: res.data
        });
    })
    .catch(err => {
        next({
            type: `${ActionTypes.FETCH_USER}_FAI`
        });
    });
}

function fetchlesson(next){
    next({
        type: `${ActionTypes.FETCH_CLASS}_REQ`
    });    
    axios({
        method: 'post',
        url: ' http://xly-wkop.xiaoniangao.cn/getLessonInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            mid:'1',
        }
    }).then(res => {
        next({
            type: `${ActionTypes.FETCH_CLASS}_SUC`,
            data: res.data
        });
    })
    .catch(err => {
        next({
            type: `${ActionTypes.FETCH_CLASS}_FAI`
        });
    });
}

export {
    fetchlesson,
    fetchuser
}