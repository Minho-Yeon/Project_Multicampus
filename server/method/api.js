
module.exports = {



    checkemail:async (user_email)=>{
        let check_stmt=`SELECT EXISTS (SELECT * FROM Users_TB WHERE email_user=?) as success`;
        const [row, fields] = await mydb.query(check_stmt, [user_email]);
        console.log(row);
        return row;
    },

<<<<<<< HEAD
    getUsersinfo: async (search, user_email) => {
        let select_stmt=`SELECT * FROM Users_TB WHERE ${search}= ?`;
=======
    getUsersinfo: async (table, requirements, user_email) => {
        let select_stmt=`SELECT * FROM ${table} WHERE ${requirements}= ?`;
>>>>>>> adec04da9636a1af54cedc83bc36c59eee28859c
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