# 【初心者向け】JavaScript 勉強会の概要

## この勉強会の目的

シンプルな Todo アプリ開発を通して **<span style="color:red;">「意味を理解しながらコードを読めるようになる」</span>** こと。

意味を理解しながらコードを読めるようになるためには、以下の 3 点が重要。

1. プログラミングの基礎文法の理解
1. プログラミングで出てくる概念の理解（例: 配列、オブジェクトなど）
1. プログラムの処理が実行される順番の理解

## 【宣伝】 HTML, CSS, JavaScript を学びたい方へ

以下リンク先のページに、僕が作成してきた教材をまとめています。

学習の参考資料の 1 つとしてご活用いただけたら幸いです。

https://tsuyopon.xyz/learning-contents/my-learning-sites/

---

## 今回の勉強会の流れ

1. 【Step1】JavaScript の基礎文法の学習
1. 【Step2】JavaScript で Web ページを操作する方法の学習
1. 【Step3】HTML と JavaScript を使って、シンプルな Todo アプリを作る

---

## 【Step1】JavaScript の基礎文法

以下の項目をざっくりと解説していく。

1. 変数
1. 条件分岐
1. ループ
1. 関数
1. 配列
1. オブジェクト

今回の勉強会で最終的に開発する「Todo アプリ」で上記項目を全て利用する。

**<span style="color:red;">「座学 + アプリ開発」</span>** を通して、上記項目の知識定着を目指す。

---

## 【Step2】JavaScript で Web ページを操作する方法の学習

JavaScript は HTML をプログラムから操作することが出来る。

> JavaScript で Web ページ上の表示をプログラムを通して操作することを「DOM 操作」と呼んだりもする。

今回作成する Todo アプリを実装するために利用する機能は以下の通り。（Web ブラウザが提供している）

- メソッド（関数）
  - [document.getElementById](https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById)
    - 既存の HTML 要素を取得する
  - [document.createElement](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement)
    - 新しい HTML 要素をプログラムで作成する
  - [Node.appendChild](https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild)
    - 特定の箇所に表示要素を追加する
  - [Node.removeChild](https://developer.mozilla.org/ja/docs/Web/API/Node/removeChild)
    - 特定の表示要素を削除する
  - [EventTarget.addEventListener](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)
    - ボタンをクリックしたときに実行したい関数を指定できる
- プロパティ（オブジェクトの値）
  - [Node.textContent](https://developer.mozilla.org/ja/docs/Web/API/Node/textContent)
    - 指定した要素のテキスト内容の取得・変更ができる
  - [HTMLInputElement.value](https://developer.mozilla.org/ja/docs/Web/API/HTMLInputElement)
    - HTML の input 要素の値の取得・変更ができる

---

## 【Step3】HTML と JavaScript を使って、シンプルな Todo アプリを作る

解説しながら開発を進めていく。

開発を進めていて、わからない点が出てきたら都度質問をいただけたらと思います。
