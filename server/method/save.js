module.exports = {

    plusUser: async (userinfo) => {   //데이터베이스에 유저 데이터 추가 -민호
        //User_TB에 추가 -민호
<<<<<<< HEAD
        let query = 'INSERT INTO User_TB (name_user, email_user,password_user,salt) VALUES (?,?,?,?)';
        let {result, field}=await mydb.query(query, [userinfo.name, userinfo.email, userinfo.password, userinfo.salt]);
        console.log(result);
        let query2 = 'SELECT idx_user FROM User_TB WHERE email_user=?';
        let {result2, field2}=await mydb.query(query2, [userinfo.email]);
        console.log(result2);

        let query3 = 'INSERT INTO NexonInfo_TB (email_nexon, idx_user) VALUES (?,?)';
        let {result3,field3}=await mydb.query(query3, [userinfo.nexonid ,result2[0].idx_user]);
        console.log(result3);
=======
        // let query = 'INSERT INTO User_TB (name_user, email_user,password_user,salt) VALUES (?,?,?,?)';
        // await mydb.query(query, [userinfo.name, userinfo.email, userinfo.password, userinfo.salt], (err, result) => {
        //     if (err) throw error;   
        //     else {//User_TB추가 성공하면 idx_user정보 꺼내옴-민호
        //         let query2 = 'SELECT idx_user FROM User_TB WHERE email_user=?';
        //         await mydb.query(query2, [userinfo.email], (err, result) => {
        //             if (err) throw error;
        //             else { //idx_user정보 꺼내오면 Nexon_user테이블에 데이터 저장-민호
        //                 let query3 = 'INSERT INTO NexonInfo_TB (email_nexon, idx_user) VALUES (?,?)';
        //                 await mydb.query(query3, [userinfo.nexonid ,result.idx_user], (err, result) => {
        //                     if (err) throw error;
        //                     console.log(result);
        //                 })
        //             }
        //         })
        //     }
        // });

>>>>>>> 63cca945cea98e52409594c11b2acef7fcae7adc
    },
    save_newpassword:async()=>{
        
    },
    updateUsers: (userinfo) => {

    },
    tempExchange: (exchangeinfo) => {

    },
    confExchange: (exchangeinfo) => {

    },
    updateExchange_rate: (game, exchange_rate) => {

    },
}