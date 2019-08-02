
module.exports = {



    checkemail:async (user_email)=>{
        let check_stmt='SELECT EXISTS (SELECT * FROM Users_TB WHERE email_user=?) as success';
        const [row, fields] = await mydb.query(check_stmt, [user_email]);
        console.log(rows);
        return row;
    },

    getUsersinfo: async (search, user_email) => {
        let select_stmt='SELECT * FROM Users_TB WHERE ${search}= ?';
        const [rows, fields] = await mydb.query(select_stmt, [user_email]);        
        console.log("1111", rows);
   
        return rows;
    },


    // getGameMoney: (idx_user) => {f
    //     return Characters_TB;
    // },
    // getExchangeRate:(game)=>{
    //     return exchange_rate;
    // },

}