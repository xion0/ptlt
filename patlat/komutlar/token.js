module.exports =  {
    kod: "token",
    async run (client, message, args)
}

var token = encodedHeader + "." + encodedData;
 
        var signature = CryptoJS.HmacSHA256(token, this.Guid());
        signature = this.encodeSource(signature);
 
        var signedToken = token + "." + signature;
        return new TokenModel(signedToken, this.encrptedSecret);
 
 //private code