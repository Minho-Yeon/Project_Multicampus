module.exports = {

    plusUser: (userinfo) => {
        let query = 'INSERT INTO User_TB (name_user, email_user,password_user,salt) VALUES (?,?,?,?)';

        mydb.query(query, [userinfo.name, userinfo.email, userinfo.password, userinfo.salt], (err, result) => {
            if (err) throw error;
            else {
                let query2 = 'SELECT idx_user FROM User_TB WHERE email_user=?';
                mydb.query(query2, [userinfo.email], (err, result) => {
                    if (err) throw error;
                    else {
                        let query3 = 'INSERT INTO NexonInfo_TB (email_nexon, idx_user) VALUES (?,?)';
                        mydb.query(query3, [userinfo.nexonid ,result.idx_user], (err, result) => {
                            if (err) throw error;
                            console.log(result);
                        })
                    }
                })
            }

        });

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