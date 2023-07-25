export interface userlogin_detail {
  user: Usertoken
}

export class Usertoken {
  access: string;
  email: string;
  refresh: string;
  username: string;
}
