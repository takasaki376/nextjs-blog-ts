export type READ_BLOG = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type POST_BLOG = {
  id: string;
  title: string;
  content: string;
};

export type ERROR = {
  isError: boolean;
  errorMessage: string;
};

// ====================
// ログイン
export interface AUTH {
  username: string;
  password: string;
}

export interface JWT {
  refresh: string;
  access: string;
}

export interface USER {
  username: string;
  id: number;
}
export interface LOGIN_STATE {
  authen: AUTH;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: ERROR;
  loginUser: USER;
}
