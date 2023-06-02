# Reactのはじめ方
　
## はじめに
[モダンJavaSctiptについて](https://xd.adobe.com/view/5e3085ea-b9d4-4102-a7c0-2761a1e36995-0b63/)は一通り押さえておくことをおすすめします。
　
## 環境開発
- ①[node](https://nodejs.org/ja)を端末にインストール(推奨版)
- ②Reactプロジェクトを作成
　
## サンプルファイル
```zsh
$ git clone https://github.com/dai-570415/react-practice-src
$ cd react-practice-src
$ npm i
$ npm start
```

```zsh
# Create React App(以下CRA略)
$ npx create react app [プロジェクト名]
$ npm start

# CRA TypeScript
$ npx create react app [プロジェクト名] --template typescript
$ npm start

# Next.js
$ npx create-next-app [プロジェクト名]
$ npm run dev

# Next.js TypeScript
$ npx create-next-app [プロジェクト名] --typescript
$ npm run dev

# ionic + React
$ npm install -g @ionic/cli
$ ionic start [プロジェクト名] tabs --type react
$ ionic serve
```
　
ここでは`CRA TypeScript`に沿って説明します。