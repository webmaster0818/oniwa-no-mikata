import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | お庭のミカタ",
  description: "お庭のミカタのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
};

export default function PrivacyPage() {
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
            <span>プライバシーポリシー</span>
          </nav>

          <h1 className="text-3xl font-bold text-foreground mb-2">プライバシーポリシー</h1>
          <p className="text-text-muted text-sm mb-8">制定日：2026年4月1日</p>

          <div className="space-y-8 text-foreground">
            <section>
              <p className="leading-relaxed text-text-muted">
                株式会社MediaX（以下「当社」）は、本ウェブサイト「お庭のミカタ」（以下「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第1条（個人情報）</h2>
              <p className="text-text-muted leading-relaxed">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第2条（個人情報の収集方法）</h2>
              <p className="text-text-muted leading-relaxed">
                当社は、ユーザーが本サービスを利用する際に、氏名、メールアドレス等の個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や、決済に関する情報を当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第3条（個人情報を収集・利用する目的）</h2>
              <p className="text-text-muted leading-relaxed mb-3">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ol className="list-decimal list-inside space-y-2 text-text-muted">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>有料サービスにおいて、ユーザーに利用料金をご請求するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第4条（利用目的の変更）</h2>
              <p className="text-text-muted leading-relaxed">
                当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第5条（個人情報の第三者提供）</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
              </p>
              <ol className="list-decimal list-inside space-y-2 text-text-muted">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第6条（個人情報の開示）</h2>
              <p className="text-text-muted leading-relaxed">
                当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第7条（Cookieの使用について）</h2>
              <p className="text-text-muted leading-relaxed">
                本サービスでは、ユーザーの利便性向上やアクセス解析のためにCookieを使用することがあります。Cookieはブラウザの設定により無効にすることができますが、一部のサービスが利用できなくなる場合があります。また、Google Analyticsなどのアクセス解析ツールを使用しており、これらのツールはCookieを通じてデータを収集します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第8条（アフィリエイトプログラムについて）</h2>
              <p className="text-text-muted leading-relaxed">
                本サービスはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みが発生した場合、当社が報酬を受け取ることがあります。掲載情報の選定やランキング評価は、報酬の有無に関わらず、編集部の独自基準に基づいて行われます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第9条（プライバシーポリシーの変更）</h2>
              <p className="text-text-muted leading-relaxed">
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-border">第10条（お問い合わせ窓口）</h2>
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
