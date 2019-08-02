const api = require('../method/api.js')
const security = require('./security.js')

module.exports = {
    // 이메일 인증 관련 모듈

    // 넥슨 이메일 인증 코드_ 다래
    createCodeMessage: () => {
        let authcode = Math.floor(Math.random() * 10000 ) + 1000 // 1000 ~ 10000사이의 4자리 랜덤 숫자 생성
        // user 이메일에 보내는 메세지
        let code = ` <br>
                        <h1>Please confirm your Nexon email</h1>
                        <br>
                        <p> Please enter the following code in the membership box </p>
                        <br>
                        <br>
                        <h5> Code : ${authcode}</h5>
                        <br>`
        return code;
    },

    // 이메일 인증 메세지_ 다래
    createAuthMessage:  async(userName, userEmail) => {
        
        let user_data = await api.getUsersinfo(userEmail);
        let salt = user_data[0].salt;
        let encrypt = security.Cipher(userEmail, salt);
        console.log(encrypt)

        //user이메일에 보내는 메세지 
        let message = ` <br>
                        <h1>Please confirm your email address</h1> 
                        <br> 
                        <br>
                        <p> You have created a Nexon Trade ID with the username: ${userName}. As an extra security measure, <br>
                        please verify this is the correct email address linked to your Nexon Trade ID by <br>
                        clicking the button below.</p>
                        <br>
                        <br>
                        <a href='http://localhost:5000/server/auth/${encrypt}/${salt}'><button>confirm your email</button></a> 
                        <br>`
         
        return message
    },    
}

