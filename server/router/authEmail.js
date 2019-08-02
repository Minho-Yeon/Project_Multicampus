const nodemailer = require('nodemailer');
const authutill = require('../utill/authUtill.js');


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
                user:'love.pink.edacb1@gmail.com',
                pass: 'light310915*'
            }
        });

        if(is_nexon){
            Subject = 'Please confirm your Nexon Email'
            Massage = await authutill.createCodeMessage()
        } else {
            Subject = 'Please confirm the email linked to your Nexon Trade ID'
            Massage = await authutill.createAuthMessage(User_name, User_email)
        }
    
        
        let mailOptions = {
            from: 'love.pink.edacb1@gmail.com',
            to: User_email,
            subject: Subject,
            html: Massage
        };

        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            } else {
                console.log('send')
            }
        });
    }
}

