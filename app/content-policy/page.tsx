import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事の制作ポリシー | お庭のミカタ",
  description: "お庭のミカタの記事制作ポリシーです。コンテンツの品質・正確性・透明性へのこだわりをご説明します。",
};

export default function ContentPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl" role="img" aria-label="木">🌿</span>
            <span className="text-xl font-bold text-primary">お庭のミカタ</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <nav className="text-sm text-text-muted mb-8">
            <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
            <span className="mx-2">/</span>
            <span>記事の制作ポリシー</span>
          </nav>

          <h1 className="text-3xl font-bold text-foreground mb-2">記事の制作ポリシー</h1>
          <p className="text-text-muted text-sm mb-8">最終更新日：2026年4月27日</p>

          <div className="space-y-8 text-foreground">
            <section>
              <p className="leading-relaxed text-text-muted">
                「お庭のミカタ」は、剪定・草刈り・伐採・造園の業者選びに役立つ正確で信頼性の高い情報をお届けすることを使命としています。本ポリシーでは、当サイトのコンテンツ制作における基準・方針を明示します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">1. 運営体制</h2>
              <p className="text-text-muted leading-relaxed">
                本サービスは株式会社MediaXが運営しています。コンテンツの企画・執筆・編集は、造園・ガーデニング分野の知識を持つ編集スタッフが担当しています。専門的な判断が必要な内容については、外部の専門家・実務経験者の監修を受けることがあります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">2. 情報の正確性・信頼性</h2>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>掲載する料金相場・サービス内容は、各業者の公式情報や業界標準をもとに定期的に調査・更新しています。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>事実に基づいた情報のみを掲載し、根拠のない誇張表現は使用しません。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>情報の鮮度を保つため、定期的な見直し・更新を行っています。更新日は各ページに明示しています。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>誤りが発覚した場合は、速やかに修正・訂正を行います。</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">3. 業者評価・ランキングの基準</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                当サイトに掲載する業者の評価・ランキングは、以下の独自基準に基づき編集部が総合的に判断しています。
              </p>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span><span className="font-medium text-foreground">料金透明性：</span>見積もり方法、料金体系の明確さ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span><span className="font-medium text-foreground">サービス品質：</span>技術力、スタッフの資格・専門性</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span><span className="font-medium text-foreground">対応力：</span>対応エリアの広さ、受付時間、スピード</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span><span className="font-medium text-foreground">ユーザー評価：</span>口コミ・評判、利用者の満足度</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span><span className="font-medium text-foreground">安心・安全：</span>保険加入、アフターフォロー体制</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">4. アフィリエイト・広告に関する開示</h2>
              <p className="text-text-muted leading-relaxed">
                本サービスはアフィリエイトプログラムに参加しており、掲載している業者へのリンク経由でお申し込みが発生した場合、当社が報酬を受け取ることがあります。ただし、報酬の有無はランキングや評価に一切影響しません。掲載業者の選定・順位付けは、上記の独自評価基準のみに基づいて行っています。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">5. 読者への約束</h2>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>読者の利益を最優先に考え、誇大広告や不正確な情報は掲載しません。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>スポンサーシップや広告関係がある場合は、明確に開示します。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>読者から誤りの指摘を受けた場合、迅速に対応します。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">●</span>
                  <span>バックボタンハイジャッキング等、ユーザー体験を損なう手法は一切使用しません。</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">6. お問い合わせ</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                コンテンツの内容に関するご意見・ご指摘は、以下までお知らせください。
              </p>
              <div className="bg-surface-alt rounded-lg p-4 space-y-1 text-text-muted text-sm">
                <p><span className="font-medium text-foreground">会社名：</span>株式会社MediaX</p>
                <p><span className="font-medium text-foreground">所在地：</span>東京都渋谷区</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white/70 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-white transition-colors">記事の制作ポリシー</Link>
          </div>
          <p className="text-xs text-white/30">&copy; 2026 お庭のミカタ（運営: 株式会社MediaX）All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
