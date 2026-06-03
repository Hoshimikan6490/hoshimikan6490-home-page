import { useEffect } from 'react';

import Seo from '../components/tags/Seo';
import SiteHeader from '../components/layout/SiteHeader';
import ReturnTopButton from '../components/layout/ReturnTopButton';
import PageFooter from '../components/layout/PageFooter';
import ArticleGrid from '../components/content/ArticleGrid';
import TimelineTable from '../components/content/TimelineTable';
import twitterLogo from '../assets/sns_logo/twitter_logo.svg';
import instagramLogo from '../assets/sns_logo/instagram_logo.svg';
import youtubeLogo from '../assets/sns_logo/youtube_logo.svg';
import noteLogo from '../assets/sns_logo/note_logo.svg';
import qiitaLogo from '../assets/sns_logo/qiita_logo.svg';
import dataScienceLiteracyBadge from '../assets/badge/dataScienceBadge_literacyLevel.webp';
import dataScienceAppliedBasicBadge from '../assets/badge/dataScienceBadge_appliedBasicLevel.png';
import urlOpen from '../assets/url_open.webp';
import makecodeThumb from '../assets/note_thumbnail/how-to-make-tijoe.webp';
import discordAnnounceThumb from '../assets/note_thumbnail/What-is-discord_announce_channel.webp';
import customSkinThumb from '../assets/note_thumbnail/how-to-use-custom_skin.webp';
import openSoundThumb from '../assets/note_thumbnail/how-to-easily-open-sound-settings.webp';
import tweetshiftThumb from '../assets/note_thumbnail/how-to-use-tweetshift.webp';
import javaMinecraftThumb from '../assets/note_thumbnail/java-minecraft-on-surface-go.webp';
import reinstallThumb from '../assets/note_thumbnail/how-to-re-install-mcedu.webp';
import villagerThumb from '../assets/note_thumbnail/how-to-change-visual-to-villager.webp';
import shinkanThumb from '../assets/kogakuintimes_thumbnail/kogakuinTimes_shinkan-interview.webp';
import shinjukusaiThumb from '../assets/kogakuintimes_thumbnail/kogakuinTimes_shinjukusai-syokurepo.webp';
import yumekousaiThumb from '../assets/kogakuintimes_thumbnail/kogakuinNote_yumekousai.webp';
import youtubeAdminThumb from '../assets/youtube_thumbnail/youtube_how-to-add-admin-on-discord.webp';
import youtubeHeatBlockThumb from '../assets/youtube_thumbnail/youtube_how-to-make-heatBlock.webp';

const socialLinks = [
	{
		href: 'https://twitter.com/hoshimikan6490',
		src: twitterLogo,
		alt: 'twitterのロゴ',
		width: 50,
	},
	{
		href: 'https://www.instagram.com/hoshimikan6490',
		src: instagramLogo,
		alt: 'Instagramのロゴ',
		width: 50,
	},
	{
		href: 'https://www.youtube.com/@Hoshimikan6490',
		src: youtubeLogo,
		alt: 'youtubeのロゴ',
		width: 50,
	},
	{
		href: 'https://note.com/hoshimikan6490',
		src: noteLogo,
		alt: 'noteのロゴ',
		width: 50,
	},
	{
		href: 'https://qiita.com/Hoshimikan6490',
		src: qiitaLogo,
		alt: 'Qiitaのロゴ',
		width: 40,
		className: 'white_logo',
	},
];

const personalArticles = [
	{
		href: 'https://note.com/hoshimikan6490/n/n9ca007d49fe7',
		title: 'Makecodeで簡単地上絵作成！',
		image: makecodeThumb,
		alt: 'Makecodeで簡単に地上絵を作成することが出来る記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n63aca5db3930',
		title: 'Discordのアナウンスチャンネルとは？',
		image: discordAnnounceThumb,
		alt: 'Discordのアナウンスチャンネルについて解説した記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n2724da615893',
		title: 'Minecraft Education Editionでカスタムスキンを使う方法',
		image: customSkinThumb,
		alt: 'Minecraft Education Editionでカスタムスキンを使う方法について解説した記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/nd27d7f3851e7',
		title:
			'windowsのタスクバーに「サウンドの詳細設定」のショートカットを置く方法',
		image: openSoundThumb,
		alt: 'Windowsのタスクバーに「サウンドの詳細設定」のショートカットを置く方法を解説した記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n95ebebb9165a',
		title: 'TweetShiftの使い方',
		image: tweetshiftThumb,
		alt: 'Twitterの投稿をDiscordに転送するTweetShiftと言うサービスの使い方を解説した記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n866694be9c06',
		title: 'surface goでJavaマイクラやってみた！！',
		image: javaMinecraftThumb,
		alt: 'surface goでJava版のマインクラフトをプレイした感想をまとめた記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n702e4f7fe783',
		title: 'Minecraft Education Editionを再インストールする方法',
		image: reinstallThumb,
		alt: 'Minecraft Education Editionを再インストールする方法について解説した記事',
	},
	{
		href: 'https://note.com/hoshimikan6490/n/n314842162d87',
		title: 'リソースパックで村人やNPCの見た目を変える方法',
		image: villagerThumb,
		alt: 'リソースパックで村人やNPCの見た目を変える方法について解説した記事',
	},
];

const committeeArticles = [
	{
		href: 'https://kogakuintimes.com/2024/04/06/shinnyuseikangeikaizenjitsujumbi-mitchaku/',
		title: '工学院大学　新入生歓迎会実行委員会の前日準備に密着！！',
		image: shinkanThumb,
		alt: '工学院大学新聞会内で執筆した、新入生歓迎会実行委員会の前日準備に密着した記事',
	},
	{
		href: 'https://kogakuintimes.com/2023/11/28/shinjukusai_shokurepo/',
		title: '【新宿祭】模擬店に行って食べてみた！！',
		image: shinjukusaiThumb,
		alt: '工学院大学新聞会内で執筆した、工学院大学新宿祭の模擬店の食レポ記事',
	},
	{
		href: 'https://note.com/hoshimikan6490',
		title: '工学院大学附属中高 文化祭に潜入！才能輝く2日間',
		image: yumekousaiThumb,
		alt: '工学院大学新聞会内で執筆した、工学院大学附属中高文化祭の記事',
		note: '※この記事は大学公式noteに掲載されたものです。',
	},
];

const videoArticles = [
	{
		href: 'https://youtu.be/Ud1LILCsBFA',
		title: 'discordで人やBOTに管理者権限を与える方法',
		image: youtubeAdminThumb,
		alt: 'discordで人やBOTに管理者権限を与える方法について解説した動画',
	},
	{
		href: 'https://youtu.be/DcdiHT4TY4E',
		title: '熱ブロックの作り方',
		image: youtubeHeatBlockThumb,
		alt: '熱ブロックの作り方について解説した動画',
	},
];

const timelineRows = [
	{
		date: '2018/11/10',
		description:
			'東京中学技術・家庭科研究会主催「第16回 創造ものづくり教育フェア in TOKYO」出品',
		href: 'https://ajgika.ne.jp/fair.html',
	},
	{
		date: '2019/07/28',
		description: 'ICTプロフィシエンシー検定協会主催 Ｐ検準２級 合格',
		href: 'https://www.pken.com/merit/justice.html',
	},
	{
		date: '2020/03/18',
		description: '東京都産業教育振興会より、優良卒業生表彰を受ける',
		href: 'https://www.tosanshin.org/about/jigyo.html',
	},
	{
		date: '2020/10/23',
		description: 'Planet-Bot-Project発足（URL準備中）',
		href: null,
	},
	{
		date: '2021/02/21',
		description: 'Minecraft カップ 2020 全国大会 ファイナリスト選出',
		href: 'https://mccup.jp/',
	},
	{
		date: '2024/06/10',
		description:
			'工学院大学 数理・データサイエンス・ＡＩ教育プログラム（リテラシーレベル）修了',
		href: 'https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/NWJCalc2S3Y5MWY5UzJJU2ZtRDEyUT09',
	},
	{
		date: '2026/04/18',
		description: 'Planet-Bot-ProjectからHoshimiTechへ名称変更（URL準備中）',
		href: null,
	},
];

function Home() {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = '//cdn.credly.com/assets/utilities/embed.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<>
			<Seo
				title="ホーム｜Hoshimikan6490"
				description="Hoshimikan6490の個人サイト。プロフィール、活動、作成物、連絡先をまとめたポートフォリオです。"
				keywords={[
					'Hoshimikan6490',
					'プログラミング',
					'ポートフォリオ',
					'活動',
					'作成物',
					'JavaScript',
				]}
				canonical="https://hoshimikan6490.com/"
				openGraph={{
					title: 'ホーム｜Hoshimikan6490',
					description:
						'Hoshimikan6490の個人サイト。プロフィール、活動、作成物、連絡先をまとめたポートフォリオです。',
					url: 'https://hoshimikan6490.com/',
					image: 'https://hoshimikan6490.com/images/logo.webp',
					type: 'website',
					site_name: 'Hoshimikan6490',
				}}
				twitter={{
					card: 'summary_large_image',
					site: 'Hoshimikan6490🌟🍊',
					creator: 'Hoshimikan6490🌟🍊',
					title: 'ホーム｜Hoshimikan6490',
					description:
						'Hoshimikan6490の個人サイト。プロフィール、活動、作成物、連絡先をまとめたポートフォリオです。',
					image: 'https://hoshimikan6490.com/images/logo.webp',
				}}
			/>
			<SiteHeader logoProps={{ loading: 'eager', fetchPriority: 'high' }} />

			<main>
				<div className="section">
					<h1>プロフィール</h1>
					<div className="center_contents" style={{ paddingBottom: '20px' }}>
						<img
							src="/logo.webp"
							alt="私のアイコン"
							loading="eager"
							fetchPriority="high"
						/>
						<div style={{ marginLeft: '20px' }}>
							<h1 style={{ textAlign: 'center' }}>Hoshimikan6490</h1>
							<div className="sns_logos">
								{socialLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src={link.src}
											alt={link.alt}
											style={{ width: `${link.width}px` }}
											className={link.className}
										/>
									</a>
								))}
							</div>
							<div className="article_buttons">
								<a
									href="https://lit.link/hoshimikan6490"
									className="button"
									style={{ width: '70%' }}
									target="_blank"
									rel="noopener noreferrer"
								>
									リンク集を見る
								</a>
							</div>
						</div>
					</div>
					<div className="waku">
						<h2>自己紹介</h2>
						<p>
							　Hoshimikan6490と言う名前で活動している、ネットで色々してる人(別段落参照)です。ちなみに、アイコンは超お気に入り
							<a
								href="https://x.com/miiruka_/status/1543557995660922881"
								target="_blank"
								rel="noopener noreferrer"
								className="url"
							>
								<b>フリーアイコン</b>
							</a>
							です(誰か私の描いて欲しいw)。
							<br />
							　本当は、趣味とか書くべきところですが、ここから下に色々書いている物たちは全部趣味でやっているので、ここでは省略します。気になる事とかあれば、お気軽にSNSのDMやお問い合わせフォームからどうぞ！
						</p>
						<h2>経歴等</h2>
						<ul>
							<li>
								小学校は特に何もなく過ごし、その中でScratchに出会いプログラミングを少しずつ触り始めました。その後、初めての文字を書くプログラミングとして、
								<a
									href="https://hsp.tv/"
									target="_blank"
									rel="noopener noreferrer"
									className="url"
								>
									<b>HSP</b>
								</a>
								というプログラミング言語でランチャーを作ったこともありました。それは、
								<a
									href="https://github.com/Hoshimikan6490/Launcher"
									target="_blank"
									rel="noopener noreferrer"
									className="url"
								>
									<b>こちらのページ</b>
								</a>
								で配布していますので、ご興味ありましたらぜひ！
							</li>
							<li>
								中学校では、部活動で技術科関係に力を入れ、東京都産業教育振興会から表彰を受けました。また、「第16回創造ものづくり教育フェア
								in TOKYO」に作品出品を行いました。
								<br />
								加えて、ICTプロフィシエンシー検定協会主催「P検」の準2級に合格しました。
							</li>
							<li>
								高校は、工学院大学附属高等学校に入り、そこでやっていた教育版マインクラフト関連の活動から、マイクラカップにエントリーしました。2020年大会でファイナリストに選出されました。高校時代の頃は教育版マインクラフトの情報が非常に少なく、note.comにて記事の執筆を行いました。
								<br />
								また、チャットツール「Discord」を高校時代に知り、Node.jsを使ったBOT作成を趣味で始めました。趣味で作ったBOTのコードをまとめた物をPlanet-Bot-Projectと名付け、その後も開発を続けています。BOT開発を始めた後、国内大手読み上げBOT「ALBOT」のWebサイト(LP)の改修や公式Discordサーバーにて顧客対応を主に担当し始めました。
							</li>
							<li>
								大学は、工学院大学に進学しました。授業内においては、数理・データサイエンス・AI教育プログラムを受講し、リテラシーレベルを修了しました。
								<br />
								課外活動では、「工学院大学新聞会」に所属し、学内の学生団体の活動を記事や動画などで紹介したり、活動風景の記録などを行いました。大学2年生では、新聞会の八王子キャンパスの長である「八王子支部長」を務め、大学3年生は新聞会全体の長である「会長」を務めました。
								<br />
								また、YouTubeやTwitterなどのSNSでの教育版マインクラフトやプログラミングに関する情報発信も行い、知識を広める活動も行っています。
								<br />
								研究室は、コミュニケーションサービスシステム研究室に所属し、ICN/ICSNに関する研究を行っています。
							</li>
						</ul>
						<h2>現在取り組んでいる事</h2>
						<ul>
							<li>
								国際工科専門職大学(IPUT)のプロジェクトである「WithU」という大学を問わないものづくりに興味のある大学生のコミュニティを作ろうとしているプロジェクトにコントリビュートし、サーバー整備や入室管理BOTの制作などを行っています。
							</li>
							<li>
								自作のDiscord
								BOT集である「Planet-Bot-Project」の開発を進めています。このBOT集は、プログラミングが楽しくてやっているだけなので、常時起動などは積極的には行っていませんが、JINBE
								BOTは唯一常時起動してサービス提供を行っています。
							</li>
							<li>
								日本製のDiscordの読み上げBOTとしては大手の「ALBOT」というプロジェクトで、LPの改修作業やALBOT公式のサポートサーバー(Discord上)において、サポート(顧客対応(?))を行っています。
							</li>
							<li>
								複数の海外製のWebサイト、ツール、Discord
								BOTなどの日本語翻訳作業に貢献しています。今までに、スプラトゥーン3のステージ情報などが確認できる「splatoon3.ink」やTrelloというタスク管理ツールの通知をDiscordのチャンネルに転送できる「Taco」というBOT、教育版マインクラフトの教育者向けツールである「Educator-tools」などの日本語翻訳に貢献しました。
							</li>
							<li>
								Java版のマインクラフトとDiscordを連携するツールはよく見かけるが、統合版と連携するものは少ないので、それを誠意制作中
							</li>
							<li>
								その他、自分が以前やりかけて途中になっていたツールなどの開発・回収作業をしています。
							</li>
							<li>
								note.comなどにおいて、まだ非公開状態の記事がいくつかあるため、書き上げて公開しようと誠意執筆中です！
							</li>
						</ul>
					</div>
				</div>

				<div className="section">
					<h1>執筆した記事などの活動実績(アクセス数の多い順)</h1>
					<div className="center_contents">
						<ArticleGrid articles={personalArticles.slice(0, 4)} />
					</div>
					<div className="article_buttons">
						<a href="/activity" className="button">
							その他の活動をもっと見る
						</a>
					</div>
				</div>

				<div className="section">
					<h1>経歴(受賞やプロジェクト発足等)</h1>
					<div className="waku">
						<TimelineTable rows={timelineRows} />
					</div>
				</div>

				<div className="section">
					<h1>バッジ</h1>
					<div className="waku" style={{ textAlign: 'center' }}>
						<a
							href="https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/NWJCalc2S3Y5MWY5UzJJU2ZtRDEyUT09"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={dataScienceLiteracyBadge}
								alt="工学院大学数理・データサイエンス・ＡＩ教育プログラム（リテラシーレベル）のバッジ"
								className="dataScienceBadge"
							/>
						</a>
						<a
							href="https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/OVlySUlwNER5bDROejMrUmo4V1lKUT09"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={dataScienceAppliedBasicBadge}
								alt="工学院大学数理・データサイエンス・ＡＩ教育プログラム（応用基礎レベル）のバッジ"
								className="dataScienceBadge"
							/>
						</a>
						<div
							data-iframe-width="150"
							data-iframe-height="270"
							data-share-badge-id="5deb15db-f562-4371-9b4c-d3c213ec9953"
							data-share-badge-host="https://www.credly.com"
						></div>
					</div>
				</div>

				<div className="section">
					<h1>連絡先</h1>
					<div className="waku">
						<p>
							プロフィール欄のSNSアカウントまたは、以下のフォームからご連絡ください。
						</p>
						<div className="article_buttons" style={{ paddingBottom: '10px' }}>
							<a
								href="https://forms.gle/RdmYzA9MEHGsPB839"
								className="button"
								style={{ width: '75%' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								お問い合わせフォームへ
							</a>
						</div>
					</div>
				</div>
			</main>

			<ReturnTopButton />
			<PageFooter />
		</>
	);
}

export default Home;
