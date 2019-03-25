<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
<script>
window.kyash = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
  t = window.kyash || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "./dest/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "kyash-wjs"));
</script>


## About

Kyash-buttonはWebサイトのオーナーに<a href="https://kyash.co/" target="_blank">Kyash</a>で送金しやすくするためのボタンで、ツイートボタンやいいねボタンの様にWebサイト上に設置できます。<br>
スマートフォンでサイトを表示した時には、直接Kyashアプリへと画面遷移するボタンが表示され、
それ以外の環境で表示した時には、Kyashアプリで読み込めるQRコードが表示されるボタンとして動作します。


## 動作サンプル

<a class="kyash-button" data-user-id="7181880057281420395">Kyash</a>

- スマートフォンの場合: Kyashがインストール済みであれば、Kyashを起動し送金画面が開きます。
- それ以外の場合: QRコードが表示されKyashアプリで読み取ることで送金ができます。

## 設置手順

1. KyashのあなたのアカウントのIDを取得するために、KyashでQRコードを表示し一般的なQRコードリーダーで内容を読み取ってください。内容は `"kyash://qr/u/XXXXXXXXXXXXXXXXXXX"`のようのようになっているはずですので、XXX の部分にある数字をメモしてください。
1. Kyash-buttonを表示したいページのheadタグ内に下記のタグを設置してください。
```
 <script>window.kyash = (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0],t = window.kyash || {};if (d.getElementById(id)) return t;
js = d.createElement(s);js.id = id; js.src = "https://satetsu888.github.io/kyash-button/dest/widgets.js";
fjs.parentNode.insertBefore(js, fjs); t._e = []; t.ready = function(f) { t._e.push(f); }; return t; }(document, "script", "kyash-wjs"));</script>
```

1. Kyash-buttonを表示したい場所に下記のタグを設置してください。data-user-idには先ほどメモしたあなたのKyashアカウントのIDを入力してください。
    ```
    <a class="kyash-button" data-user-id="7181880057281420395">Kyash</a>
    ```

## 利用上の注意

下記事項をご確認の上、ご利用は自己責任でお願いします。

- Kyash-buttonは非公式のスクリプトで、株式会社Kyashとは無関係です。 
- 将来的なKyashアプリの仕様変更等により利用できなくなる可能性があります。
- ソースコードは https://github.com/satetsu888/kyash-button に公開されています。
- Kyash-buttonを使用したことにより生じたいかなる損害に対しても、一切の責任を負いません。

## おまけ

Kyash-buttonをWebサイトに設置した際は、<a href="https://twitter.com/search?f=tweets&q=%23kyash_button" target="_blank">#kyash_button</a>のハッシュタグをつけて設置したサイトのURLをTwitterに投稿してもらうと、僕が見つけ次第ボタンを使って送金します。
