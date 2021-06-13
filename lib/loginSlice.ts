import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LOGIN_STATE, AUTH, JWT, USER } from "./types";
import axios from "axios";

// ログイン時のトークン作成
export const fetchAsyncLogin = createAsyncThunk(
  "login/post",
  async (auth: AUTH) => {
    const res = await axios
      .post<JWT>(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}auth/jwt/create`,
        auth,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        throw error;
      });
    return res.data;
  }
);

// 新規ユーザ作成
export const fetchAsyncRegister = createAsyncThunk(
  "login/register",
  async (auth: AUTH) => {
    const res = await axios
      .post<USER>(`${process.env.NEXT_PUBLIC_RESTAPI_URL}auth/users/`, auth, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        throw error;
      });
    return res.data;
  }
);

// ログイン中のチェック
export const fetchAsyncAuth = createAsyncThunk("auth/jwt/verify/", async () => {
  const res = await axios.get<USER[]>(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}auth/users/me/`,
    {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    }
  );
  return res.data;
});

// 初期値の設定
export const initialState: LOGIN_STATE = {
  authen: {
    username: "",
    password: "",
  },
  isLoading: false,
  isLoggedIn: false,
  error: {
    isError: false,
    errorMessage: "",
  },
  loginUser: {
    username: "",
    id: 0,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // ログイン画面でメールアドレス、パスワードを入力された際に値を格納する
    editAuthen(
      state,
      action: PayloadAction<{
        authen: AUTH;
      }>
    ) {
      state.authen = action.payload.authen;
    },
  },
  extraReducers: (builder) => {
    // ログイン成功
    builder.addCase(
      fetchAsyncLogin.fulfilled,
      (state, action: PayloadAction<JWT>) => {
        localStorage.setItem("localJWT", action.payload.access);
        // ログインに成功
        state.isLoading = false;
        state.isLoggedIn = true;
        state.authen = initialState.authen;
        console.log("ログインに成功");
      }
    );
    // ログイン処理中のローディング
    builder.addCase(fetchAsyncLogin.pending, (state) => {
      state.error.isError = false;
      state.error.errorMessage = "";
      return {
        ...state,
        isLoading: true,
      };
    });
    // ログインの異常終了
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      state.error.isError = true;
      state.error.errorMessage = action.error.message;
      return {
        ...state,
        isLoading: false,
      };
    });
    // ユーザ作成失敗
    builder.addCase(fetchAsyncRegister.rejected, (state, action) => {
      return {
        ...state,
        isError: true,
        errorMessage: action.error.message,
      };
    });
    // トークン作成成功
    builder.addCase(fetchAsyncAuth.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
    // ログイン中のチェック
    builder.addCase(fetchAsyncAuth.rejected, (state) => {
      console.log("認証期限切れ");
      localStorage.removeItem("localJWT");
      state.isLoggedIn = false;
    });
  },
});

export const { editAuthen } = loginSlice.actions;

export const selectAuthen = (state: RootState) => state.login.authen;
export const selectIsLoading = (state: RootState) => state.login.isLoading;
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;
export const selectErrorLogin = (state: RootState) => state.login.error;

export default loginSlice.reducer;
