# Reactのはじめ方
　
## はじめに
[モダンJavaSctiptについて](https://xd.adobe.com/view/5e3085ea-b9d4-4102-a7c0-2761a1e36995-0b63/)は一通り押さえておくことをおすすめします。
　
## Codesandbox
手っ取り早く試すなら[Codesandbox](https://codesandbox.io/)がおすすめ。
　
## 環境構築
- ①[node](https://nodejs.org/ja)を端末にインストール(推奨版)
- ②Reactプロジェクトを作成
　
## サンプルファイル
```zsh
$ git clone https://github.com/dai-570415/react-practice-src.git
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
　
## #001初期構成
```json
"react": "^18.2.0",
```
Reactではver18から大きな変更点あります。
詳しくは[公式HP](https://ja.legacy.reactjs.org/blog/2022/03/29/react-v18.html)
　
```
🗂 プロジェクト
　|- 🗂 public
　|- 🗂 src
🗂 node_modules
.git
.gitignore
package-lock.json
package.json
README.md
tsconfig.json
```
　
## #002jsx記法
Reactではjsx記法と呼ばれるJSファイル内でhtmlのように記述できる記法を用います。
ファイル名はjsならjsx、tsならtsxにします。
　
```jsx
const App = () => {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <p>This is React.</p>
        </div>
    );
}
```
※return以降は必ず`1つのタグ`で囲われてる必要がある。<br>
※Fragmentタグ（or 空のタグ）を使うとDOM構造を変えずに記述できる
　
### Fragmentタグ
```jsx
const App = () => {
    return (
        <React.Fragment>
            <h1>Hello World!</h1>
            <p>This is React.</p>
        </React.Fragment>
    );
}
```
　
### 空タグ(Fragment省略)

```jsx
const App = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <p>This is React.</p>
        </>
    );
}
```
　
## #003ルーティング(CRAの場合)
```zsh
# react-router-dom(5系)　※5系を入れないとswitchが使えない
$ npm install react-router-dom@5
# TypeScriptの場合は以下も入れる
$ npm i @types/react-router-dom
```
　
### App.tsxでルーティング設定をする
`App.tsx`
```jsx
// react-router-domをimport
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ルーティングさせたいコンポーネントをimport
import Index from './pages/Index';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" component={ Index } />
            {/* <Route path="/user/:id" component={ User } /> */}
        </Switch>
    </Router>
  );
}

export default App;
```
※プロジェクトポリシーによるがApp.tsxではルーティング機能や状態管理のプロバイダー登録、メタ管理などサイト設定の役割に徹した方が管理しやすい
　
### ルーティングコンポーネントを作成
Next.jsに習ってルーティングコンポーネントはpagesにしているが、任意のフォルダで構わない<br>
`/pages/Index.tsx`
```jsx
import logo from '../logo.svg'; // コンポーネント化する場合パスに気をつけて

const Index = () => {
    return (
        <div className="containet">
            <header className="header">
                ...省略
            </header>
        </div>
    );
}

export default Index;
```