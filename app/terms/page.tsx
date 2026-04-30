import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | お庭のミカタ",
  description: "お庭のミカタの利用規約です。本サービスをご利用いただく前に必ずお読みください。",
};

export default function TermsPage() {
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
            <span>利用規約</span>
          </nav>

          <h1 className="text-3xl font-bold text-foreground mb-2">利用規約</h1>
          <p className="text-text-muted text-sm mb-8">制定日：2026年4月1日</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <p className="leading-relaxed text-text-muted">
                本利用規約（以下「本規約」）は、株式会社MediaX（以下「当社」）が運営する「お庭のミカタ」（以下「本サービス」）の利用条件を定めるものです。ユーザーの皆さまには、本規約に同意のうえ、本サービスをご利用いただきます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第1条（適用）</h2>
              <p className="text-text-muted leading-relaxed">
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第2条（禁止事項）</h2>
              <p className="text-text-muted leading-relaxed mb-3">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="list-decimal list-inside space-y-2 text-text-muted">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第3条（本サービスの提供の停止等）</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ol className="list-decimal list-inside space-y-2 text-text-muted">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第4条（著作権）</h2>
              <p className="text-text-muted leading-relaxed">
                本サービスにおいて当社が提供するコンテンツ（文章、画像、動画等）の著作権は、当社または当社にライセンスを許諾している者に帰属します。ユーザーは、当社の事前の書面による許諾なく、これらのコンテンツを複製、転用、販売等する行為を行ってはなりません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第5条（免責事項）</h2>
              <ol className="list-decimal list-inside space-y-3 text-text-muted">
                <li className="leading-relaxed">当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li className="leading-relaxed">当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                <li className="leading-relaxed">本サービスは、剪定・草刈り・伐採等の業者に関する情報提供を目的としており、特定の業者を推薦・保証するものではありません。ユーザーと業者との間で生じた問題については、当社は一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第6条（サービス内容の変更等）</h2>
              <p className="text-text-muted leading-relaxed">
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第7条（利用規約の変更）</h2>
              <p className="text-text-muted leading-relaxed">
                当社は必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第8条（準拠法・裁判管轄）</h2>
              <p className="text-text-muted leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">運営者情報</h2>
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
