# 見出し

1.  [プロジェクトの概要](#プロジェクトの概要)
1.  [各種技術情報](#各種技術情報)

# プロジェクトの概要

## プロジェクト名

- DIG Notes です。

## プロジェクトの詳細

- 簡素なノートアプリです。
- シングルページ構成です。
- 機能は新規保存(Create)、既存ノート一覧(Read)、削除(Delete)です。編集(Update)は未実装です。

# 各種技術情報

## 使用している主な技術

- JavaScript, React, PostgreSQL, Kotlin, SpringBoot

## ディレクトリ構成と主要なファイル

```
notes_app
├── IntelliJ ... バックエンド
│   ├── HELP.md
│   ├── build
│   ├── build.gradle.kts
│   ├── gradle
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle.kts
│   └── src
│       ├── main
│       │   ├── kotlin
│       │   │   └── com
│       │   │       └── otsuichi
│       │   │           └── notes_app
│       │   │               ├── Note.kt ... Note型 data class の定義
│       │   │               ├── NoteRequest.kt ... NoteRequest型 data class の定義
│       │   │               ├── NotesAppApplication.kt ... fun main関数の定義
│       │   │               ├── NotesController.kt ... APIエンドポイントの定義, ＠RestController
│       │   │               └── NotesRepository.kt ... jdbcTemplateメソッドの呼び出し, @Repository
│       │   └── resources
│       │       ├── application.properties
│       │       ├── db
│       │       │   └── migration
│       │       │       └── V1__create_notes_table.sql ... notes テーブルのマイグレーション
│       │       ├── static ... build した React の dest
│       │       │   ├── assets
│       │       │   │   ├─ index-B4xyXHRk.css
│       │       │   │   └─ index-Mt8moWS1.js
│       │       │   └── index.html
│       │       └── templates
│       └── test
│           ├── kotlin
│           │   └── com
│           │       └── otsuichi
│           │           └── notes_app
│           │               └── NotesAppApplicationTests.kt ... テストコード, 含む notes テーブルへのシードデータ付与
│           └── resources
│               └── insert_test_data.sql ... notes テーブルへのシードデータ
├── README.md ... この文書
└── VSCode ... フロントエンド
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.jsx
    │   ├── Card.jsx
    │   ├── Holder.jsx
    │   ├── Note.jsx
    │   ├── Title.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js ... server.proxy, build.outDir 設定
```

## 主要コマンド一覧 > IntelliJ フォルダ

| コマンド          | 実行する処理                                   |
| ----------------- | ---------------------------------------------- |
| ./gradlew bootrun | Apache Tomcat WebServer ほか各種サービスの起動 |

## 主要コマンド一覧 > VSCode フォルダ

| コマンド                       | 実行する処理   |
| ------------------------------ | -------------- |
| npm run build -- --emptyOutDir | React のビルド |

## ローカル環境における環境準備手順

- 準備手順は以下の通りです。

```zsh
cd $HOME
git clone git@github.com:OtokazuOkumura/DIG-BTC6-Other-Lang-Pjt.git
cd $HOME/DIG-BTC6-Other-Lang-Pjt.git/VSCode
npm i && npm run build -- --emptyOutDir
```

## ローカル環境における実行手順

- 以下のコマンドを実行します。

```zsh
cd $HOME/DIG-BTC6-Other-Lang-Pjt.git/IntelliJ
./gradlew bootrun
```

- http://localhost:8080 をウェブブラウザで開きます。

## 各種テーブルの説明

### notes

| Column          | Type                        | Collation | Nullable | Default                           |
| --------------- | --------------------------- | --------- | -------- | --------------------------------- |
| id              | integer                     |           | not null | nextval('notes_id_seq'::regclass) |
| notetext        | text                        |           | not null |                                   |
| lastupdatedtime | timestamp without time zone |           | not null |                                   |

- Indexes: "notes_pkey" PRIMARY KEY, btree (id)
