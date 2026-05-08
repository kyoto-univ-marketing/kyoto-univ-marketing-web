# AI Agent Guidelines (AGENTS.md)

このファイルは、本プロジェクト（kyoto-univ-marketing-web）に従事するすべての AI コーディングエージェントが、プロジェクトの文脈、技術スタック、および規約を理解し、一貫性のある作業を行うためのガイドラインである。

---

## 1. Project Overview
- **プロジェクト名:** 京大マーケティング研究会（Kyoto University Marketing Research Group）公式ウェブサイト
- **目的:** 団体の活動内容、お知らせ（記事）、プロジェクト紹介の発信、およびお問い合わせの受付。
- **ターゲットユーザー:** 入部を検討している学生、協賛企業、大学関係者、および一般ユーザー。
- **現在の開発フェーズ:** 運用および機能追加フェーズ。既存の設計パターンを尊重しつつ、メンテナンス性と拡張性を高めるリファクタリングや機能追加を行う。

## 2. Tech Stack & Environment
- **言語・ランタイム:** TypeScript, Bun (Runtime & Package Manager)
- **主要フレームワーク:** Next.js 15+ (App Router)
- **UIライブラリ:** React 19, Tailwind CSS, shadcn/ui
- **コード品質管理:** Biome (Linter/Formatter) ※ESLint/Prettierは使用しない。
- **CMS:** microCMS (お知らせ・記事データの管理)
- **インフラ:** Google Cloud Platform (Cloud Run, Cloud Build, Artifact Registry)
- **IaC:** Terraform (インフラ構成の定義)
- **コンポーネント生成:** Hygen (テンプレートエンジン)

## 3. Coding Standards
### 3.1 設計思想
- **Component-Driven Development:** コンポーネントは役割ごとに分割し、再利用性を高める。
- **Type Safety:** 厳格な型定義を行い、`any` 型の使用は禁止する。
- **Functional Programming:** 可能な限り純粋関数を使用し、副作用を分離する。

### 3.2 命名規則
- **変数・関数:** `camelCase`
- **コンポーネント・クラス・型定義:** `PascalCase`
- **ファイル・ディレクトリ名:** `kebab-case`（例: `article-card.tsx`）

### 3.3 構文と実装ルール
- **早期リターン (Guard Clauses):** ネストを深くせず、例外条件は関数の冒頭で処理すること。
- **Biome 規約の遵守:**
  - セミコロンは原則として省略する (`semicolons: "asNeeded"`)。
  - 文字列の引用符はシングルクォートを使用する。
  - インデントはスペース4つ。
- **コンポーネントの作成:** 新しいコンポーネントを作成する際は、直接ファイルを作るのではなく、後述の `bun gen` コマンドを使用すること。

### 3.4 コメントの方針
- コード自体が自己説明的であることを優先する。
- 複雑なロジックやビジネスロジックの背景、外部APIの仕様に依存する箇所には JSDoc またはコメントを記述すること。

## 4. AI Persona & Protocol
- **作業前の確認:** 破壊的な変更、大規模なリファクタリング、新しいライブラリの導入を行う前には、必ず実装計画（Plan）を提示し、ユーザーの承認を得ること。
- **論理的な解決:** エラーやバグに遭遇した際は、闇雲にコードを修正せず、原因の仮説を立て、それを検証するための調査（ログ確認やコードのトレース）を先に行うこと。
- **コミュニケーション:** 簡潔かつ技術的に正確な表現を用いること。結論から述べ、冗長な前置きは省くこと。

## 5. Tooling & Constraints
- **パッケージ管理:** 新しい依存関係を追加する際は `bun add <package>` を使用し、実行前に必ずユーザーの許可を得ること。
- **破壊的コマンド:** `rm -rf` や `terraform destroy` などの操作を行う前には、対象範囲を明示して警告すること。
- **ビルド・チェック:** 変更後は必ず `bun lint` および `bun typecheck` を実行し、既存のコードに影響がないことを確認すること。
- **Storybook:** UIコンポーネントを修正・追加した際は、Storybook (`.stories.tsx`) も併せて更新または作成すること。

## 6. Context Mapping
### 6.1 ディレクトリ構成
- `src/app`: ルーティングとページ定義。
  - `(withHeader)`: 共通ヘッダーが表示されるページのグループ。
- `src/components`: UIコンポーネント。
  - `ui/`: shadcn/ui ベースの汎用パーツ。
  - `common/`: サイト全体で使われる共通パーツ。
  - `top/`, `articles/` 等: 各機能・ページ固有のパーツ。
- `src/api`: APIクライアントと型定義。
  - `schema.d.ts`: backend API の型定義（SSOT）。`bun codegen` で更新可能。
- `src/lib`: ユーティリティ関数や microCMS クライアント。
- `tf/`: GCP インフラを管理する Terraform ファイル。
- `_templates/`: Hygen 用のコンポーネント生成テンプレート。

### 6.2 主要コマンド
- `bun dev`: 開発サーバーの起動。
- `bun lint`: Biome によるコードチェックと修正。
- `bun gen`: Hygen による新規コンポーネント生成 (`bunx hygen generator component` のエイリアス)。
- `bun codegen`: API スキーマの更新。

---
このガイドラインを読み込んだエージェントは、本プロジェクトの「プロフェッショナルな一員」として振る舞い、最高品質のコードを提供すること。
