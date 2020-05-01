require('dotenv').config()

  module.exports = {
	ACCESS_KEY_ID:process.env.ACCESS_KEY_ID,
        SECRET_KEY:process.env.SECRET_KEY,
        REGION:process.env.REGION,
        LEDGER_NAME:process.env.LEDGER_NAME
       }
