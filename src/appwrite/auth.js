import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client=new Client();

    account;  //ye aise kia kyuki client abhi bna nhi pura jaise end point wagera
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); // Your project ID
        this.account=new Account(this.client);
    }
                            
    async createAccount({email,password,name}){  //{ } isme is liye dia kyuki destructure krna tha

        try {
       const userAccount   =  await this.account.create(ID.unique(),  email, password, name); // Create account 
   if(userAccount){
    // call another method agar account create hogya toh sidhe lgin hi kra denge
  return this.login({email,password});
   }else{
    return  userAccount;
   }
    } catch (error) {
            throw error;
        }


}


async login({email,password}){
    try {
    return     await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        throw error;
    }
}

async getCurrentUser(){
    try{
  return await this.account.get();
    }catch(error){
        console.log("error in getting current user",error);
    }
    return null;
}


async logout(){
    try {
        return  await this.account.deleteSessions();
    } catch (error) {
        console.log("error in logout",error);
    }
}

}

const authService=new AuthService();  //jab ye object bnau tb client bnanan chiaye


// better way hai ki object bnalu class ki help se fr whi export krdo usi me sb method lge lgaye hai
export default  authService


// service ek class hai