import * as SQLite from 'expo-sqlite'
import Password from '../models/Password';
import { Assets } from '@react-navigation/stack';
interface Response{
    _array?:Array<Object>
}
export default class Database{
    db: SQLite.WebSQLDatabase;
    //CRUD- create read update delete

    constructor(){
        this.db = SQLite.openDatabase('passdb');
    }
    init(){
        this.db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS passwords (id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,nome	TEXT NOT NULL,url	TEXT NOT NULL,mail	TEXT NOT NULL,password	TEXT NOT NULL,nota	TEXT NOT NULL)",[],(_,{rows})=>{
                
              }
            );
          },(error)=>{console.log(error)});
    }

    addpass(pass:Password){
      return new Promise((resolve, reject) => this.db.transaction(tx => {
        tx.executeSql("INSERT INTO passwords(nome,url,mail,password,nota) VALUES(?,?,?,?,?)",[pass.nome,pass.url,pass.mail,pass.password,pass.nota], (_, { rows }) => {
            resolve({row:rows,operation:'sucess'})
        }), (sqlError:Error) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);

    }));
    }
    findall(){
      return new Promise((resolve, reject) => this.db.transaction(tx => {
        tx.executeSql("SELECT * FROM passwords",[], (_, { rows }) => {
            resolve({rows,operation:'sucess'})
        }), (sqlError:Error) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);

    }));
    }
    findbyid(id:number){
      return new Promise((resolve, reject) => this.db.transaction(tx => {
        tx.executeSql("SELECT * FROM passwords WHERE id=?",[id], (_, { rows }) => {
            
            resolve({rows,operation:'sucess'})
        }), (sqlError:Error) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);

    }));
    }
    updatebyid(pass:Password,id:Number){
      return new Promise((resolve, reject) => this.db.transaction(tx => {
        tx.executeSql("UPDATE passwords SET nome=?, url=?, mail=?,password=?,nota=? WHERE id=?",[pass.nome,pass.url,pass.mail,pass.password,pass.nota,id], (_, { rows }) => {
            resolve({row:rows,operation:'sucess'})
        }), (sqlError:Error) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);

    }));
    }
    removebyid(id:number){
      return new Promise((resolve, reject) => this.db.transaction(tx => {
        tx.executeSql("DELETE FROM passwords WHERE id=?",[id], (_, { rows }) => {
            resolve({row:rows,operation:'sucess'})
        }), (sqlError:Error) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);

    }));
  }
}