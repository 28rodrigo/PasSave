export default class Password{
    id?:number;
    url: string;
    nome: string;
    mail: string;
    password: string;
    nota: string;

    constructor(url:string,nome:string,mail:string,password:string,nota:string){
        this.url=url;
        this.nome=nome;
        this.mail=mail;
        this.password=password;
        this.nota=nota;
    }
}