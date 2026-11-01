@AGENTS.md

## 運用メモ（お庭のミカタ）
- source=このリポ / deploy=~/.openclaw/workspace/projects/oniwa-no-mikata-deploy（oniwa-no-mikata/配下ではない）。`npm run build` → `rsync -a --delete --exclude='.git' --exclude='CNAME' out/ ../../oniwa-no-mikata-deploy/` → deploy側commit/push。作業前に両方 git fetch。
- Know記事は app/<slug>/page.tsx + components/KnowArticle.tsx。追加時は public/sitemap.xml を同コミットで更新、既存ページの related から内部リンクを張る。
- 料金は公式で確認した値のみ使う。110番3社（2026-10-20 公式確認・税込）：剪定110番 剪定1本4,000円〜（出張費は金額の記載なし＝「地域により別途の場合あり」）／草刈り110番 163円〜/㎡／伐採110番 8,200円〜/本。公式URL＝sharing-tech.co.jp/sentei/・/kusakari/・/baxtusai/（各 price/ に料金表）。お庭マスター剪定550円〜・伐採3,300円〜は未再確認。
  - 旧値（剪定2,890円・出張費3,000円・カシ2,300円/モミジ3,000円・草刈り600円/平米・「全国4,000社以上の加盟店」）は公式に無いため 10/20 に全削除。再利用しない
  - 業者紹介画像は public/images/*-110ban-features-v2.png（10/20作り直し・料金の数字は入れない）。画像を差し替えるときはファイル名を変える（長期キャッシュ対策）
- 方針（2026-09-28〜）：エリア量産は停止（109市、1ページ約5表示）。悩み・症状型Knowを優先。→ 2026-11-01 okina 承認で再開（その市にしかない事実がある市・組み合わせに限る）。地名差し替えページは作らない。エリア子ページは app/area/<市>/<topic>/page.tsx + KnowArticle（parent/badge 指定）、親ページには #chiiki-koyu ボックスで出典付き要点＋子ページリンク。

## 作業ログ
- 2026-09-30 悩み・症状型Know 11本（陥没/キノコ/幹の空洞/木の実 等）。sitemap 244URL。
- 2026-10-12 悩み・症状型Know 11本：niwaki-ha-henshoku / niwa-tsuchi-ryushutsu / niwa-ari-taisaku / niwaki-katamuki / niwaki-jueki-yani / niwaki-kikuzu-ana / niwaki-juhi-hagare / hikobae-dobukieda / niwa-hebi / niwa-tori-higai / niwa-neko-taisaku。既存21ページのrelatedから被リンク追加（各3〜6本）。sitemap 255URL。GSC（9/10〜10/10）3,853表示/89クリック、9/30公開分は陥没・キノコ・空洞・木の実で既に表示あり。
- 2026-10-17 悩み・症状型Know 11本：shibafu-bubun-gare / shibafu-zasso / niwaki-ha-shioreru / ikegaki-shitaeda-kare / niwaki-ha-ochiru / niwaki-ha-ana / niwaki-ha-shiroi / niwaki-ha-makuru / niwaki-eda-oreta / niwa-namekuji / niwaki-miki-fuchakubutsu。既存30ページのrelatedから各4本。title調整2本（densen-eda-sesshoku 147表示0クリック9.5位、niwaki-kanbu-fukyu「木の空洞」10.1位）。sitemap 267URL。
- 2026-10-22 tsutsuji-satsuki-teire：title/h1を「ツツジ・サツキの剪定時期は花が終わった直後｜…」に変更、冒頭で即答（三重県中央農業改良普及センター：ヒラドツツジ7月中旬まで・クルメツツジ7月上旬まで、10/22確認）。before（9/23〜10/20）68表示0クリック平均22.1位、「ツツジの剪定時期」6表示5.7位。悩み型Know kaboku-tsubomi-ochiru（花木のつぼみが落ちる）追加、出典UC IPM・石川県病害虫防除室（ツバキ菌核病）。被リンク5本（kaboku-kaika/tsubaki-sazanka/niwaki-mizuyari/niwaki-byogaichu/tsutsuji）。候補3テーマはいずれもGSC表示0だった。sitemap 268URL。
- 2026-11-01 網羅表（projects/okina-coverage-20261101/oniwa.md）バッチ1：冬囲い fuyugakoi-yukigakoi ＋樹種6本 kashi/maki/conifer/shimatoneriko/yamaboushi/hanamizuki-teire。出典は県・市・森林総研・北海道総研の公的ページ（11/1確認）。剪定110番 /sentei/price/「剪定 4,000円~(税込)」と例示12樹種を11/1再確認。エリア系は保留中。業者×ジャンルは次バッチ。お庭マスター公式が「お庭レスキュープロ」表記の件は未対応（okina判断待ち）。sitemap 275URL。
- 2026-11-01 バッチ2（業者×ジャンル・業者比較）：sentei-110ban-kusakari-bassai-tsukaiwake / sentei-110ban-sentei-ryokin / kusakari-110ban-kusakari-ryokin / bassai-110ban-bassai-bakkon / kurashi-no-market-sentei / kurashi-no-market-bassai-bakkon。出典は sharing-tech.co.jp の各トップ・price/ と curama.jp/gardener/・/tree-felling/（11/1確認。curama相場は税表記なし→表示どおり）。剪定110番 price/ に「地域によって別途出張費用」注記あり。保留：剪定110番×草刈り/消毒/施肥、草刈り110番×防草シート/除草剤単独（公式に単価なし）、お庭マスター/ダスキン/smileガーデン関連。sitemap 281URL。site 31701bb / deploy c89cb3c9。
- 2026-11-01 バッチ3（エリア×ジャンル・okina承認でエリア再開）：剪定枝の出し方8本 /area/{tachikawa,machida,hiratsuka,chigasaki,atsugi,tokorozawa,saitama,asahikawa}/senteieda/ ＋ /area/kawagoe/hozon-jumoku/ ＋ /area/sagamihara/ikegaki-josei/。出典は各市公式（11/1確認、引用名は各ページの<title>どおり）と相模原市まち・みどり公社の手引きPDF（戸建5,000円/m・上限10万円）。親10ページに #chiiki-koyu（出典付き要点）を追加し更新日11/1。KnowArticle に parent（3階層パンくず）・badge を追加。related 追加：senteieda-shobun→茅ヶ崎/立川/所沢、ikegaki-karikomi→相模原、niwaki-bassai-kyoka→川越。保留：越谷（個人搬入ページのみ）・川口（破砕機貸出のみ）・横浜/名古屋/東大阪/いわき/盛岡/八戸/柏/下関（家庭系の剪定枝ページを本日特定できず）・府中（都県不明）。町田の剪定枝資源化センターは2027/12/29受入終了予定（要追跡）。sitemap 291URL。
