// TOP「エリアから探す」用の一覧。app/area/<slug>/page.tsx が実在する市だけを並べる（2026-11-04 時点 109ページ）。
// 東京都は別枠（東京都全体＋多摩の市）。23区のページは当サイトに無いため並べていない。
// 府中＝東京都府中市（2026-11-01 判断・CLAUDE.md バッチ5）。
export type AreaLink = { slug: string; label: string };
export type Prefecture = { name: string; areas: AreaLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

const a = (slug: string, label: string): AreaLink => ({ slug, label });

export const tokyo = {
  top: a("tokyo", "東京都"),
  cities: [a("hachioji", "八王子市"), a("machida", "町田市"), a("tachikawa", "立川市"), a("fuchu", "府中市")],
  extra: [{ href: "/area/tokyo/hogo-jumoku-ikegaki-josei/", label: "東京都の保護樹木・生垣の助成制度" }],
};

export const regions: Region[] = [
  {
    name: "北海道・東北",
    prefectures: [
      { name: "北海道", areas: [a("sapporo", "札幌市"), a("asahikawa", "旭川市"), a("hakodate", "函館市")] },
      { name: "青森県", areas: [a("aomori", "青森市"), a("hachinohe", "八戸市")] },
      { name: "岩手県", areas: [a("morioka", "盛岡市")] },
      { name: "宮城県", areas: [a("sendai", "仙台市")] },
      { name: "秋田県", areas: [a("akita", "秋田市")] },
      { name: "山形県", areas: [a("yamagata", "山形市")] },
      { name: "福島県", areas: [a("fukushima", "福島市"), a("koriyama", "郡山市"), a("iwaki", "いわき市")] },
    ],
  },
  {
    name: "関東（東京都を除く）",
    prefectures: [
      { name: "茨城県", areas: [a("mito", "水戸市"), a("tsukuba", "つくば市")] },
      { name: "栃木県", areas: [a("utsunomiya", "宇都宮市")] },
      { name: "群馬県", areas: [a("maebashi", "前橋市"), a("takasaki", "高崎市")] },
      { name: "埼玉県", areas: [a("saitama", "さいたま市"), a("kawaguchi", "川口市"), a("kawagoe", "川越市"), a("tokorozawa", "所沢市"), a("koshigaya", "越谷市"), a("soka", "草加市"), a("kasukabe", "春日部市")] },
      { name: "千葉県", areas: [a("chiba", "千葉市"), a("funabashi", "船橋市"), a("ichikawa", "市川市"), a("matsudo", "松戸市"), a("kashiwa", "柏市"), a("ichihara", "市原市")] },
      { name: "神奈川県", areas: [a("yokohama", "横浜市"), a("kawasaki", "川崎市"), a("sagamihara", "相模原市"), a("yokosuka", "横須賀市"), a("fujisawa", "藤沢市"), a("hiratsuka", "平塚市"), a("chigasaki", "茅ヶ崎市"), a("atsugi", "厚木市")] },
    ],
  },
  {
    name: "北陸・甲信越",
    prefectures: [
      { name: "新潟県", areas: [a("niigata", "新潟市"), a("nagaoka", "長岡市")] },
      { name: "富山県", areas: [a("toyama", "富山市")] },
      { name: "石川県", areas: [a("kanazawa", "金沢市")] },
      { name: "福井県", areas: [a("fukui", "福井市")] },
      { name: "山梨県", areas: [a("kofu", "甲府市")] },
      { name: "長野県", areas: [a("nagano", "長野市"), a("matsumoto", "松本市")] },
    ],
  },
  {
    name: "東海",
    prefectures: [
      { name: "岐阜県", areas: [a("gifu", "岐阜市")] },
      { name: "静岡県", areas: [a("shizuoka", "静岡市"), a("hamamatsu", "浜松市"), a("numazu", "沼津市")] },
      { name: "愛知県", areas: [a("nagoya", "名古屋市"), a("toyohashi", "豊橋市"), a("okazaki", "岡崎市"), a("ichinomiya", "一宮市"), a("kasugai", "春日井市"), a("toyota", "豊田市")] },
      { name: "三重県", areas: [a("tsu", "津市"), a("yokkaichi", "四日市市"), a("suzuka", "鈴鹿市")] },
    ],
  },
  {
    name: "近畿",
    prefectures: [
      { name: "滋賀県", areas: [a("otsu", "大津市")] },
      { name: "京都府", areas: [a("kyoto", "京都市")] },
      { name: "大阪府", areas: [a("osaka", "大阪市"), a("sakai", "堺市"), a("higashiosaka", "東大阪市"), a("hirakata", "枚方市"), a("toyonaka", "豊中市"), a("suita", "吹田市"), a("takatsuki", "高槻市"), a("yao", "八尾市"), a("neyagawa", "寝屋川市")] },
      { name: "兵庫県", areas: [a("kobe", "神戸市"), a("himeji", "姫路市"), a("nishinomiya", "西宮市"), a("amagasaki", "尼崎市"), a("akashi", "明石市"), a("kakogawa", "加古川市"), a("takarazuka", "宝塚市")] },
      { name: "奈良県", areas: [a("nara", "奈良市")] },
      { name: "和歌山県", areas: [a("wakayama", "和歌山市")] },
    ],
  },
  {
    name: "中国・四国",
    prefectures: [
      { name: "鳥取県", areas: [a("tottori", "鳥取市")] },
      { name: "島根県", areas: [a("matsue", "松江市")] },
      { name: "岡山県", areas: [a("okayama", "岡山市"), a("kurashiki", "倉敷市")] },
      { name: "広島県", areas: [a("hiroshima", "広島市"), a("fukuyama", "福山市"), a("kure", "呉市")] },
      { name: "山口県", areas: [a("yamaguchi", "山口市"), a("shimonoseki", "下関市")] },
      { name: "徳島県", areas: [a("tokushima", "徳島市")] },
      { name: "香川県", areas: [a("takamatsu", "高松市")] },
      { name: "愛媛県", areas: [a("matsuyama", "松山市")] },
      { name: "高知県", areas: [a("kochi", "高知市")] },
    ],
  },
  {
    name: "九州・沖縄",
    prefectures: [
      { name: "福岡県", areas: [a("fukuoka", "福岡市"), a("kitakyushu", "北九州市"), a("kurume", "久留米市")] },
      { name: "佐賀県", areas: [a("saga", "佐賀市")] },
      { name: "長崎県", areas: [a("nagasaki", "長崎市"), a("sasebo", "佐世保市")] },
      { name: "熊本県", areas: [a("kumamoto", "熊本市")] },
      { name: "大分県", areas: [a("oita", "大分市"), a("beppu", "別府市")] },
      { name: "宮崎県", areas: [a("miyazaki", "宮崎市")] },
      { name: "鹿児島県", areas: [a("kagoshima", "鹿児島市")] },
      { name: "沖縄県", areas: [a("naha", "那覇市")] },
    ],
  },
];

export const allAreaSlugs: string[] = [
  tokyo.top.slug,
  ...tokyo.cities.map((x) => x.slug),
  ...regions.flatMap((r) => r.prefectures.flatMap((p) => p.areas.map((x) => x.slug))),
];
