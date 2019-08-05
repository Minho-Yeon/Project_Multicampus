const nodemailer = require('nodemailer');
const authutill = require('../utill/authUtill.js');
const savecode = require('../method/save.js')
require('dotenv').config();

module.exports = {
    // 이메일 보내기_ 다래 

    SendEmail: async (userName, userEmail, is_nexon) => {

        let User_name = userName;
        let User_email = userEmail;
        let Subject;
        let Massage;
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.GMAIL_ID,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        

        if(is_nexon){
            Subject = 'Please confirm your Nexon Email';
            
            // 인증코드와 메세지생성_ 다래
            let code = await authutill.createCodeMessage();
            console.log(code)
            Massage = code.message_code;
            let auth_code = code.auth_code;

            // 인증코드 db저장_ 다래
            let code_info = [{'name': 'security_code', 'value': auth_code}];
            savecode.insertdb('SecurityCode_TB', code_info);

        } else {
            Subject = 'Please confirm the email linked to your Nexon Trade ID'
            Massage = await authutill.createAuthMessage(User_name, User_email)
        }
    
        // 메일 보내는 사람, 받을 사람, 메세지 내용
        let mailOptions = {
            from: process.env.GMAIL_ID,
            to: User_email,
            subject: Subject,
            html: Massage
        };

        // 메일보내기    
        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            } else {
                console.log('send')
            }
        });
    }
}

