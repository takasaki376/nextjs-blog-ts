# Next.js のチュートリアル終了後のソースに対して、typescripts 導入

## typescrippt のインストール

```
yarn add -D typescript @types/react @types/react-dom @types/node
```

## 拡張子変更

JSX 使っているなら拡張子を"tsx"に変更する
使っていない場合は"ts"に変更する

## 開発サーバ起動

`yarn dev`

## 型の定義

エラーになった箇所に対して、型を定義する

## function と定義されている箇所で戻り値の型定義を指定する場合はアロー関数に変更する

## ビルドする

`yarn build`

# 検索処理　 V1 までの対応概要

## axios

```
yarn add axios
```

## .env ファイル作成

バックエンドのローカル開発サーバを参照する URL を設定する

# 登録・更新・削除処理　 V2 までの対応概要

## SWR のインストール

```
yarn add swr
```

## classcat のインストール

```
yarn add classcat
```

## ビルドする

yarn build

# ログイン画面の作成

## ログイン画面を作成

[tailwind UI の画面](https://tailwindui.com/components/application-ui/forms/sign-in-forms)を参考に login.tsx を作成

## redux toolkit のインストール

yarn add redux react-redux @reduxjs/toolkit
yarn add -D @types/react-redux

## Redux 用の Chrome 拡張機能

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)

## 型定義

types.ts 型の定義を追加する

## slice の作成 (今回は /lib/loginSlice.ts を作成する )

Redux toolkit の createSlice を使用して slice を作成する。

```
// 初期値
export const initialState: スライスの型 = {
  count: 0,
};

// スライスの内容を定義する。
// name           : slice の名前
// initialState   : slice の初期値
// reducers       : slice の更新処理を記述する
const xxxSlice = createSlice({
  name: 'xxx',
  initialState,
  reducers: {
    // count をプラスする例
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    // count をマイナスする例
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
});
```

- createAsyncThunk : 非同期処理を定義する。
- ## createSlice : slice を定義する。

## store の作成 (今回は /lib/store.ts を作成する )

slice をまとめる。

## \_app.tsx の修正

store を追加する。

## 各ページを修正する。

今回はログインページ

- useSelector : store に定義されている状態を参照する際に使用する。
- useDispatch : store に定義されている状態を変更する際に使用する。具体的には reducers に定義している処理を呼びだす。

## blogApi.ts 修正

API にトークン送信するように修正する
