
module.exports = {

    getUsersinfo: (user_email) => {
        return Users_TB;
    },
    getGameMoney: (idx_user) => {
        return Characters_TB;
    },
    getExchangeRate:(game)=>{
        return exchange_rate;
    },

}