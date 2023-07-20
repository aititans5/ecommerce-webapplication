export interface userlogin_detail {
  user: Usertoken
}

export interface Usertoken {
  access: string;
  email: string;
  refresh: string;
  username: string;
}
