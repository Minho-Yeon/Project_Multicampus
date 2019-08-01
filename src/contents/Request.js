import axios from 'axios';
const request = (type,url,data)=>{
    axios[type](url,data)
    .then(c=>{
        return c;
    })
    .catch(err=>{
        console.err(err);
        return err;
    })
}

export default request;