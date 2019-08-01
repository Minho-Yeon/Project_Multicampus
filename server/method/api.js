
module.exports = {


    checkemail:(user_email)=>{  //데이터베이스에 이메일 존재여부 체크 - 민호
        let query='SELECT EXISTS (SELECT * FROM Users_TB WHERE email_user=?) as success';
        mydb.query(query,[user_email],(err,result)=>{
            if(err) throw error;
            console.log(result);

        });
        return true;
    },

    // getUsersinfo: (user_email) => {
    //     return Users_TB;
    // },
    // getGameMoney: (idx_user) => {
    //     return Characters_TB;
    // },
    // getExchangeRate:(game)=>{
    //     return exchange_rate;
    // },

}