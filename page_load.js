/* 
* @Author: Cody Kochmann
* @Date:   2015-07-19 10:58:10
* @Last Modified by:   codykochmann
* @Last Modified time: 2015-07-19 11:46:27
*/

/*
  for a path your have
    -current link,
    -links clicked 
*/

// this does not handle websites that are refreshless.

var path={
  "current":window.location.href,
  "previous":document.referrer,
  "timestamp":Math.floor(Date.now()/1000)
}

if(path["previous"].length != 0){ // checks if it is not a new tab
  
}

