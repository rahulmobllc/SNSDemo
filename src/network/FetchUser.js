export const getMethod =  (url) => {
  return new Promise( (resolve, reject) => {
    fetch( url , {method: 'GET', headers: {'Content-Type': 'application/json'},
    }).then( (response) => {
        setTimeout(() => null, 0);
        response.text().then((res) => {
            res = JSON.parse(res);
            // console.log(res);
            if(res.status === 'ko'){
                console.log("error");
                reject(res.error_description);
            }
            resolve(res);
        }).catch((err) => reject(err))
        // resolve(JSON.parse(response));
    }).catch((err) => reject(err))
  })
}


export const postMethod =  (url, payload) => {
  return new Promise( (resolve, reject) => {
    fetch( url , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }).then( (response) => {
        setTimeout(() => null, 0);
        response.text().then((res) => {
            res = JSON.parse(res);
            // console.log(res);
            if(res.status === 'ko'){
                console.log("error");
                reject(res.error_description);
            }
            resolve(res);
        }).catch((err) => reject(err))
        resolve(JSON.parse(response));
    }).catch((err) => reject(err))
  })
}
