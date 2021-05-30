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
