import Link from "next/link";
import type { Metadata } from "next";
import { agents } from "./agentsData";

const SITE = "https://oniwa-no-mikata.com";

export const metadata: Metadata = {
  title: { absolute: "庭・剪定業者の口コミ・評判まとめ｜料金・対応を徹底比較｜お庭のミカタ" },
  description:
    "剪定・伐採・草刈り業者の口コミ・評判・料金を業者別に徹底調査。剪定110番をはじめ各社のメリット・注意点、対応サービス、料金を比較して、あなたに合う業者を見つけられます。",
  alternates: { canonical: `${SITE}/agents/` },
};

export default function AgentsIndexPage() {
  return (
    <article className="bg-white text-[#33402f]">
      <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-[#6b7563]">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:underline">お庭のミカタ</Link></li>
          <li>/</li>
          <li className="text-[#33402f]">業者レビュー</li>
        </ol>
      </nav>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">庭・剪定業者の口コミ・評判まとめ</h1>
        <p className="text-[#6b7563] mb-8 leading-relaxed">
          主要な剪定・伐採・草刈り業者の料金・対応サービス・利用者の口コミを、編集部が中立的に調査してまとめました。気になる業者を選んで、依頼前の比較にお役立てください。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {agents.map((a) => (
            <Link key={a.slug} href={`/agents/${a.slug}/`} className="block rounded-2xl border border-[#d6e4d0] p-5 hover:shadow-md hover:border-[#FF8C00] transition">
              <p className="font-bold text-[#33402f] mb-1">{a.name}</p>
              <p className="text-xs text-[#9aa394]">口コミ・評判・料金を見る →</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
