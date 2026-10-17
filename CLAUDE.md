@AGENTS.md

## 運用メモ（お庭のミカタ）
- source=このリポ / deploy=~/.openclaw/workspace/projects/oniwa-no-mikata-deploy（oniwa-no-mikata/配下ではない）。`npm run build` → `rsync -a --delete --exclude='.git' --exclude='CNAME' out/ ../../oniwa-no-mikata-deploy/` → deploy側commit/push。作業前に両方 git fetch。
- Know記事は app/<slug>/page.tsx + components/KnowArticle.tsx。追加時は public/sitemap.xml を同コミットで更新、既存ページの related から内部リンクを張る。
- 料金は既存の一次確認値のみ再利用（剪定110番2,890円〜/出張費3,000円別途、お庭マスター剪定550円〜・伐採3,300円〜、草刈り110番600円/平米〜）。
- 方針（2026-09-28〜）：エリア量産は停止（109市、1ページ約5表示）。悩み・症状型Knowを優先。

## 作業ログ
- 2026-09-30 悩み・症状型Know 11本（陥没/キノコ/幹の空洞/木の実 等）。sitemap 244URL。
- 2026-10-12 悩み・症状型Know 11本：niwaki-ha-henshoku / niwa-tsuchi-ryushutsu / niwa-ari-taisaku / niwaki-katamuki / niwaki-jueki-yani / niwaki-kikuzu-ana / niwaki-juhi-hagare / hikobae-dobukieda / niwa-hebi / niwa-tori-higai / niwa-neko-taisaku。既存21ページのrelatedから被リンク追加（各3〜6本）。sitemap 255URL。GSC（9/10〜10/10）3,853表示/89クリック、9/30公開分は陥没・キノコ・空洞・木の実で既に表示あり。
- 2026-10-17 悩み・症状型Know 11本：shibafu-bubun-gare / shibafu-zasso / niwaki-ha-shioreru / ikegaki-shitaeda-kare / niwaki-ha-ochiru / niwaki-ha-ana / niwaki-ha-shiroi / niwaki-ha-makuru / niwaki-eda-oreta / niwa-namekuji / niwaki-miki-fuchakubutsu。既存30ページのrelatedから各4本。title調整2本（densen-eda-sesshoku 147表示0クリック9.5位、niwaki-kanbu-fukyu「木の空洞」10.1位）。sitemap 267URL。
