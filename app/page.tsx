import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "お庭のミカタ｜剪定・草刈り・伐採の業者比較【2026年最新】",
  description:
    "剪定・草刈り・伐採・造園の業者のうち、全国に対応する7社を、公式サイトの情報にもとづいて比較する専門ガイドです。料金・口コミ・サービス内容を掲載しています。各社とも見積もりは無料です。",
};

/* ─── Header ─── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-3xl" role="img" aria-label="木">
            🌿
          </span>
          <span className="text-xl font-bold text-primary">
            お庭のミカタ
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          <a href="#services" className="hover:text-primary transition-colors">
            サービス一覧
          </a>
          <a href="#ranking" className="hover:text-primary transition-colors">
            おすすめ業者
          </a>
          <a href="#guide" className="hover:text-primary transition-colors">
            選び方ガイド
          </a>
          <a href="#calendar" className="hover:text-primary transition-colors">
            時期カレンダー
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            よくある質問
          </a>
        </nav>
        <a href="#ranking" className="btn-cta text-sm px-4 py-2 hidden sm:inline-block">
          無料見積もり
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/kv-top.jpg" alt="庭木の剪定をする専門スタッフ" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a20]/90 via-[#1a3a20]/70 to-[#1a3a20]/40" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1">🏆 厳選7社を比較</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1">🌿 全国対応</span>
            <span className="bg-gradient-to-r from-blue-400 to-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1">💰 無料見積もり</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            剪定・草刈り・伐採
            <br />
            <span className="text-[#90EE90]">専門業者</span>の比較
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            「庭木が伸びすぎた」「雑草が手に負えない」「大きな木を切りたい」といったお悩みに対応する業者を、料金・口コミ・サービス内容で比較できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#ranking" className="btn-cta text-lg px-8 py-4 inline-block text-center">
              おすすめ業者を見る
            </a>
            <a href="#services" className="text-white/90 border-2 border-white/40 rounded-full px-8 py-4 font-medium hover:bg-white/10 transition-colors inline-block text-center">
              サービスから探す
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges ─── */
function TrustBadges() {
  const badges = [
    { icon: "🏆", title: "7社厳選", desc: "実績のある業者を掲載" },
    { icon: "🗾", title: "全国対応", desc: "47都道府県をカバー" },
    { icon: "💰", title: "無料見積もり", desc: "比較・見積もりは無料" },
  ];
  return (
    <section className="bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <span className="text-4xl">{b.icon}</span>
              <div>
                <p className="font-bold text-foreground text-lg">{b.title}</p>
                <p className="text-text-muted text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Categories ─── */
function ServiceCategories() {
  const services = [
    {
      icon: "✂️",
      name: "剪定",
      desc: "庭木の形を整え、樹木の健康を保ちます。見た目と日当たりの改善に役立ちます。",
      price: "1本 2,890円〜",
      link: "#",
    },
    {
      icon: "🌾",
      name: "草刈り",
      desc: "雑草の刈り取りから防草対策まで対応します。定期的な手入れで庭をきれいに保てます。",
      price: "1㎡ 600円〜",
      link: "#",
    },
    {
      icon: "🪓",
      name: "伐採",
      desc: "大木・高木を安全に伐採します。抜根や木材の処分までまとめて対応します。",
      price: "1本 5,000円〜",
      link: "#",
    },
    {
      icon: "🌳",
      name: "造園",
      desc: "庭のデザインから施工まで対応します。植栽・外構・ガーデニングを総合的に支援します。",
      price: "要見積もり",
      link: "#",
    },
  ];
  return (
    <section id="services" className="section bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            サービスから探す
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            お庭のお悩みに合わせて、サービスの種類ごとに業者を探せます。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a
              key={s.name}
              href={s.link}
              className="card text-center group cursor-pointer"
            >
              <span className="text-5xl block mb-4">{s.icon}</span>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {s.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <p className="text-primary font-bold text-sm">{s.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Top 3 Ranking ─── */
function TopRanking() {
  const companies = [
    {
      rank: 1,
      name: "剪定110番",
      officialUrl: "https://www.sharing-tech.co.jp/sentei/",
      badge: "木1本から依頼可",
      tagline: "24時間365日対応の剪定専門サービス",
      features: [
        "24時間365日受付",
        "全国4,000社以上の加盟店",
        "1本2,890円〜の明朗会計",
        "見積もり後の追加料金なし",
      ],
      pros: [
        "深夜・早朝でも電話受付可能",
        "少量の依頼にも対応",
        "料金体系が明確",
      ],
      cons: [
        "加盟店のため品質にばらつきあり",
        "繁忙期は予約が取りにくい",
      ],
      recommend:
        "初めて業者に依頼する方や、1本から剪定を依頼したい方におすすめです。料金体系が明確で、対応が早い点が特長です。",
    },
    {
      rank: 2,
      name: "くらしのマーケット",
      officialUrl: "https://curama.jp/",
      badge: "口コミ充実",
      tagline: "口コミで選べる地域密着型プラットフォーム",
      features: [
        "口コミ・評価で業者を比較",
        "料金が事前に明確",
        "オンラインで予約完結",
        "多数の登録業者から選択可能",
      ],
      pros: [
        "実際の利用者の口コミが参考になる",
        "事前に業者の情報を確認できる",
        "料金を比較しやすい",
      ],
      cons: [
        "業者によって品質差がある",
        "人気業者は予約が埋まりやすい",
      ],
      recommend:
        "口コミを確認したうえで業者を選びたい方におすすめです。地域の職人を直接比較し、指名できる点が特長です。",
    },
    {
      rank: 3,
      name: "ダスキン",
      officialUrl: "https://www.duskin.co.jp/",
      badge: "大手の安心感",
      tagline: "大手企業による庭の総合管理サービス",
      features: [
        "年間管理プランで一括管理",
        "芝生・庭木・花壇のトータルケア",
        "資格を持った専門スタッフ",
        "全国約600拠点のネットワーク",
      ],
      pros: [
        "大手企業の信頼性と安定品質",
        "研修を受けた専門スタッフが担当",
        "アフターフォローが充実",
      ],
      cons: ["料金はやや高めの水準", "スポット依頼には不向き"],
      recommend:
        "年間を通して庭の管理を任せたい方におすすめです。大手企業による安定したサービスと、手厚いサポート体制が特長です。",
    },
  ];

  const rankColors = [
    "from-yellow-400 to-yellow-500",
    "from-gray-300 to-gray-400",
    "from-amber-600 to-amber-700",
  ];

  return (
    <section id="ranking" className="section bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            おすすめ業者ランキング TOP3
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            料金・サービス内容・口コミ・対応力を総合的に評価し、おすすめの3社を選定しました。
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {companies.map((c, i) => (
            <div key={c.name} className="card relative overflow-hidden">
              {/* Rank badge */}
              <div
                className={`absolute top-0 left-0 bg-gradient-to-r ${rankColors[i]} text-white px-4 py-1 rounded-br-lg font-bold text-sm`}
              >
                第{c.rank}位
              </div>
              <div className="pt-8 md:pt-4">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left: Name & Badge */}
                  <div className="md:w-1/3">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {c.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {c.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">
                      {c.tagline}
                    </p>
                    {c.officialUrl ? (
                      <a href={c.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta text-sm inline-block">
                        公式サイトで見積もりを依頼
                      </a>
                    ) : null}
                  </div>
                  {/* Right: Details */}
                  <div className="md:w-2/3">
                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-sm font-bold text-foreground mb-2">
                        特徴
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {c.features.map((f) => (
                          <span
                            key={f}
                            className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-bold text-primary mb-2">
                          メリット
                        </p>
                        <ul className="text-sm text-text-muted space-y-1">
                          {c.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <span className="text-primary mt-0.5 shrink-0">
                                ◎
                              </span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-accent-dark mb-2">
                          デメリット
                        </p>
                        <ul className="text-sm text-text-muted space-y-1">
                          {c.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2">
                              <span className="text-accent-dark mt-0.5 shrink-0">
                                △
                              </span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Recommendation */}
                    <div className="bg-surface-alt rounded-lg p-3">
                      <p className="text-sm text-foreground">
                        <span className="font-bold text-primary">
                          編集部のコメント：
                        </span>
                        {c.recommend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How to Choose Guide ─── */
function HowToChoose() {
  const points = [
    {
      num: "01",
      title: "料金体系が明確か確認する",
      desc: "見積もり時に内訳が提示されるか、追加料金が発生するかを事前にご確認ください。「1本〇円〜」のように料金体系が明確な業者をおすすめします。出張費やゴミ処分費が別途かかる場合もあるため、総額で比較することが重要です。",
    },
    {
      num: "02",
      title: "実績と口コミを確認する",
      desc: "施工実績の写真や利用者の口コミは、業者選びの重要な判断材料です。くらしのマーケットなど、口コミが充実したプラットフォームを活用する方法も有効です。作業前後の写真を公開している業者は、技術力を判断する参考になります。",
    },
    {
      num: "03",
      title: "対応エリアと対応スピードを確認する",
      desc: "お住まいの地域が対応エリアに含まれるか、依頼から作業までにどの程度の期間がかかるかを事前にご確認ください。台風後などに緊急の対応が必要な場合は、24時間受付の業者が便利です。繁忙期（春・秋）は早めの予約をおすすめします。",
    },
    {
      num: "04",
      title: "資格・保険の有無を確認する",
      desc: "造園技能士や樹木医などの資格を持つスタッフが在籍しているかをご確認ください。また、作業中の事故に備え、賠償責任保険に加入している業者を選ぶことをおすすめします。万が一物損が発生した場合にも、保険による補償を受けられます。",
    },
    {
      num: "05",
      title: "複数社の見積もりを比較する",
      desc: "2〜3社以上から見積もりを取り、比較することをおすすめします。料金だけでなく、作業内容・処分費・保証の有無などを含めて総合的に判断することが重要です。無料見積もりの際に現地調査を依頼すると、より正確な金額を確認できます。",
    },
  ];
  return (
    <section id="guide" className="section bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            業者の選び方（5つのポイント）
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            庭木の手入れ業者を初めて選ぶ方は、次の5つのポイントを確認することをおすすめします。
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {points.map((p) => (
            <div key={p.num} className="flex gap-4 md:gap-6">
              <div className="shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                {p.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Seasonal Calendar ─── */
function SeasonalCalendar() {
  const seasons = [
    {
      season: "春（3〜5月）",
      icon: "🌸",
      tasks: [
        "落葉樹の軽剪定",
        "芝生の手入れ開始",
        "春の植栽・植え替え",
        "害虫予防の消毒",
      ],
      tip: "新芽が出る前の3月は、剪定に適した時期です。春先に消毒を行うと、害虫の被害を予防できます。",
    },
    {
      season: "夏（6〜8月）",
      icon: "☀️",
      tasks: [
        "生垣の刈り込み",
        "雑草の草刈り",
        "害虫駆除",
        "水やり管理",
      ],
      tip: "夏は雑草が最も伸びる時期のため、梅雨明けの草刈りが効果的です。猛暑日の強剪定は樹木を傷めるため、避けてください。",
    },
    {
      season: "秋（9〜11月）",
      icon: "🍂",
      tasks: [
        "常緑樹の剪定",
        "落ち葉の清掃",
        "秋の植栽",
        "冬支度の施肥",
      ],
      tip: "台風シーズンの前に、危険な枝を剪定しておくことをおすすめします。10〜11月は剪定の依頼が集中するため、早めに予約してください。",
    },
    {
      season: "冬（12〜2月）",
      icon: "❄️",
      tasks: [
        "落葉樹の強剪定",
        "伐採・抜根作業",
        "雪囲い・冬囲い",
        "剪定の計画立案",
      ],
      tip: "葉が落ちた冬は樹形を確認しやすく、強い剪定に適した時期です。業者の予約も比較的取りやすく、料金の相談がしやすい時期でもあります。",
    },
  ];
  return (
    <section id="calendar" className="section bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            季節別の手入れカレンダー
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            庭木の手入れは時期が重要です。季節ごとに適した作業を把握し、計画的に庭を管理することをおすすめします。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((s) => (
            <div key={s.season} className="card">
              <div className="text-center mb-4">
                <span className="text-4xl block mb-2">{s.icon}</span>
                <h3 className="text-lg font-bold text-foreground">
                  {s.season}
                </h3>
              </div>
              <ul className="text-sm text-text-muted space-y-2 mb-4">
                {s.tasks.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-primary shrink-0">●</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="bg-surface-alt rounded-lg p-3">
                <p className="text-xs text-foreground leading-relaxed">
                  {s.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "剪定・草刈り・伐採の費用相場はどのくらいですか？",
      a: "剪定は1本あたり2,890円〜、草刈りは1㎡あたり600円〜、伐採は1本あたり5,000円〜が一般的な相場です。ただし、木の高さ・太さ・作業難易度・ゴミ処分費によって大きく変動します。正確な金額を知るには、2〜3社から無料見積もりを取ることをおすすめします。",
    },
    {
      q: "見積もりは本当に無料ですか？",
      a: "当サイトで紹介している業者は、いずれも見積もりが無料です。現地調査を無料で行う業者も多くあります。見積もり後にキャンセルしても費用は発生しません。複数社への見積もり依頼をおすすめします。",
    },
    {
      q: "庭木の剪定に最適な時期はいつですか？",
      a: "樹種によって適した時期は異なりますが、一般的に落葉樹は冬（12〜2月）、常緑樹は春先（3〜4月）または秋（9〜10月）が適しています。真夏の強剪定は樹木を弱らせるため、避けてください。詳しくは、上記の季節別カレンダーをご覧ください。",
    },
    {
      q: "作業後に出たゴミ（枝葉）の処分はどうなりますか？",
      a: "多くの業者が剪定枝や伐採木の処分まで対応しています。ただし、処分費が見積もりに含まれているか別途かかるかは業者によって異なります。見積もりの際に、処分費が含まれているかを必ずご確認ください。",
    },
    {
      q: "マンションのベランダや小さな庭でも依頼できますか？",
      a: "はい。多くの業者が庭木1本から対応しています。マンションの植栽やベランダの鉢植えの手入れに対応している業者もあります。剪定110番やくらしのマーケットでは、少量の依頼も相談できます。",
    },
  ];
  return (
    <section id="faq" className="section bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            よくある質問
          </h2>
          <p className="text-text-muted">
            庭木の手入れ業者選びでよくいただく質問にお答えします。
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group">
              <summary className="cursor-pointer flex items-start gap-3 font-bold text-foreground list-none">
                <span className="text-primary shrink-0 text-lg">Q.</span>
                <span className="leading-relaxed">{faq.q}</span>
                <span className="ml-auto shrink-0 text-text-light group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pl-8 text-text-muted leading-relaxed text-sm">
                <span className="font-bold text-accent-dark">A. </span>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          庭の手入れに関するご相談について
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          無料見積もりで料金を比較できます。最短即日対応の業者も掲載しています。
          <br className="hidden md:block" />
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#ranking" className="btn-cta text-lg px-10 py-4 inline-block">
            おすすめ業者を見る
          </a>
        </div>
        <p className="text-white/50 text-xs mt-6">
          ※見積もりの依頼は無料です。キャンセル料はかかりません。
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Site info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="text-lg font-bold text-white">
                お庭のミカタ
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              剪定・草刈り・伐採・造園の業者を、公式サイトの情報にもとづいて比較する専門ガイドです。
            </p>
          </div>
          {/* Service links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">
              サービスから探す
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/agents/" className="hover:text-white transition-colors">
                  剪定業者を比較
                </a>
              </li>
              <li>
                <a href="/agents/" className="hover:text-white transition-colors">
                  草刈り業者を比較
                </a>
              </li>
              <li>
                <a href="/agents/" className="hover:text-white transition-colors">
                  伐採業者を比較
                </a>
              </li>
              <li>
                <a href="/agents/" className="hover:text-white transition-colors">
                  造園業者を比較
                </a>
              </li>
            </ul>
          </div>
          {/* Guide links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">お役立ち情報</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#guide" className="hover:text-white transition-colors">
                  業者の選び方ガイド
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="hover:text-white transition-colors"
                >
                  季節別の手入れカレンダー
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <span>料金相場ガイド</span>
              </li>
            </ul>
          </div>
          {/* Company info */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">運営情報</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/terms/" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/privacy/" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/content-policy/" className="hover:text-white transition-colors">
                  コンテンツ制作ポリシー
                </a>
              </li>
              <li>
                <a href="/about/" className="hover:text-white transition-colors">
                  運営者情報
                </a>
              </li>
              <li>
                <a href="/about/" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Disclosure */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-xs text-white/40 leading-relaxed">
            ※当サイトはアフィリエイトプログラムに参加しています。当サイト経由でサービスにお申し込みいただいた場合、提携企業から報酬を受け取ることがあります。ただし、ランキングや評価はサービスの品質・口コミ・料金を元に編集部が独自に作成しており、報酬の有無が順位に影響することはありません。
          </p>
        </div>
        {/* Copyright */}
        <div className="text-center text-xs text-white/30">
          <p>運営: 株式会社MediaX（東京都渋谷区）</p>
          <p className="mt-1">
            &copy; 2026 お庭のミカタ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ServiceCategories />
        <TopRanking />
        <HowToChoose />
        <SeasonalCalendar />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
