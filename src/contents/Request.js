import axios from 'axios';
const request = async (type,url,data)=>{  //axios를 간편하게 사용할 수 있도록 만들어 놓은 모듈- 민호
    await axios[type](url,data)
    .then(c=>{
        return c;
    })
    .catch(err=>{
        console.log(err);
        return err;
    })
}

export default request;