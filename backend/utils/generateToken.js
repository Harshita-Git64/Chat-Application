import  jwt from "jsonwebtoken";

const jsonWebTokenMethod=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:"90d"}) //first argument is payload which embedded in token, it can be multiple values and to verify the token payload is needed,second argu is secret key and third arg determines the expiry time of token.
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
    console.log("token: ",token)//long unique string
    console.log("decoded: ",decoded)//object containing payload details (passed in jwt.sign) like userId,iat,exp

    res.cookie("jwt",token,{
        maxAge:24*60*60*1000,//format in  milliseconds
        httpOnly:true,//prevent attacks
        secure:process.env.NODE_ENV !=="Development"//true in production only
    })
}
export default jsonWebTokenMethod;