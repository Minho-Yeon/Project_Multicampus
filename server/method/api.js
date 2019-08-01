
module.exports = {


    checkemail:(user_email)=>{
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