---
title: into the tailwind world
date: "2020-12-04T07:29:23.583Z"
description: first experience of tailwind
author: Hide
---

## tailwindに突入

ここ数週間はtailwindというフレームワークに取り組んでいます。  
tailwindでは、cssをhtmlのclass属性の値として書き入れます。  
デフォルトとして用意されているtailwindの値は、モダンデザインでよく使用されているCSSを厳選して、端的に表したものになっています。  
例えば、こんな感じです。  
```html
<div class="h-32 max-w-screen-xl border-blue-400 border-8 rounded-xl bg-green-50">
  <p class="mt-8 text-4xl text-center text-red-500 font-bold font-serif">hello world</p>
</div>
```
どんな絵が浮かんでくるでしょうか？  
<br><br>  
  
こちらを見てください。  
  
https://play.tailwindcss.com/qnrqoncJim  
  
  
どうでしたか？  
  
<br><br>
https://play.tailwindcss.com/ では、自分でコードを書いて、デザインを確認することもできます。  
tailwindの詳しい内容は、https://tailwindcss.com/docs に書かれている通りです。  
  
cssとhtmlの基本的な知識は必要ですが、少ないタイピング数で、より分かりやすいコードを書くことができます。  
デフォルトで用意されていないcssでも自分でカスタマイズすることで、tailwindの値として使用できたり、ボタンなど頻繁に使うものに使う値をセットで他の値に登録して繰り返し利用するなど、便利な機能があります。  
  
  
tailwindの学習は、次のようなステップで行っています。  
1. [codechademy](https://www.codecademy.com/)などでCSS、HTMLを学習

2. tailwindのドキュメントを読み込み  
主に、重要な内容が書かれている[CORE CONCEPTS](https://tailwindcss.com/docs/utility-first)と[CUSTOMIZATION](https://tailwindcss.com/docs/configuration)、インストール方法が書かれている[INSTALLATION](https://tailwindcss.com/docs/installation)を読み込みました。  
他の部分は、cssと対応しているクラスの値についての説明で、必要な時に読んで作成を進めています。

3. tailwindの作成者、[Adam Wathan氏のビデオ](https://www.youtube.com/watch?v=21HuwjmuS7A)視聴。  
インストール方法や、どのようにtailwindを使っていくのかを学びました。  
また、実際に自分のPCにtailwindをインストールしてビデオの通りにデザインもしました。  
先にドキュメントをある程度読んでおくことで、語彙や、説明される手順が理解し易くなります。  

4. トレーニング課題のデザインの再現（今ココ）  
序盤はtailwind.playで作成し、社長からレビューをいただいていましたが、途中で自分のPCに課題（プロジェクト）用のディレクトリを作成し、提出するようにしていきました。  
課題提出はgithubで行い、プルリクエストなどで修正箇所の確認や質問などをしています。  ディレクトリのファイル構成、README.mdの内容、他の開発者も理解・メンテナンスがし易いコードの書き方・自分で設定するクラスの名づけ方など、自分だけでは気づきにくいところも、現職の開発者の視点で、指摘してもらっています。  
  
  
まずはtailwindを使用したフロントエンドに慣れるのが当面の目標になります。
