export class registerUser {
  email: string
  name: string
  password: string
  username: string

  constructor(email : string, name : string, password : string, username : string){
    this.email = email
    this.name = name
    this.password = password
    this.username = username
  }
}
