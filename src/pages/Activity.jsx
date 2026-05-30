import { useEffect } from 'react';

import Seo from '../components/tags/Seo';
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

function Activity() {
	useEffect(() => {
		const returnTop = document.getElementById('return_top');
		if (!returnTop) {
			return;
		}

		const handleScroll = () => {
			returnTop.classList.toggle('active', window.scrollY >= 100);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleReturnTop = (event) => {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<Seo
				title="執筆した記事や作成した動画｜Hoshimikan6490"
				description="Hoshimikan6490が執筆した記事や作成した動画、大学や委員会での活動をまとめています。"
				keywords={['Hoshimikan6490', '活動', '記事', '動画', 'note', 'YouTube']}
				canonical="https://hoshimikan6490.com/activity.html"
				openGraph={{
					title: '執筆した記事や作成した動画｜Hoshimikan6490',
					description: 'Hoshimikan6490が執筆した記事や作成した動画、大学や委員会での活動をまとめています。',
					url: 'https://hoshimikan6490.com/activity.html',
					image: 'https://hoshimikan6490.com/images/logo.webp',
					type: 'website',
					site_name: 'Hoshimikan6490',
				}}
				twitter={{
					card: 'summary_large_image',
					site: 'Hoshimikan6490🌟🍊',
					creator: 'Hoshimikan6490🌟🍊',
					title: '執筆した記事や作成した動画｜Hoshimikan6490',
					description: 'Hoshimikan6490が執筆した記事や作成した動画、大学や委員会での活動をまとめています。',
					image: 'https://hoshimikan6490.com/images/logo.webp',
				}}
			/>
			<header>
				<div className="headerContents">
					<div className="headerLeft">
						<a href="/" rel="noreferrer">
							<img src="/logo.webp" alt="私のアイコン" className="myIcon" />
							<div className="Myname">
								<p>Hoshimikan6490</p>
								<small className="realName">（三上隆也）</small>
							</div>
						</a>
					</div>
					<div className="headerRight">
						<a
							href="https://github.com/Hoshimikan6490/hoshimikan6490-home-page"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								alt="このWebサイトのプログラムが見られるボタン"
								src="https://img.shields.io/badge/View%20on%20Github-grey?style=for-the-badge&logo=github"
							/>
						</a>
					</div>
				</div>
			</header>

			<main>
				<div>
					<h1>個人で執筆した記事</h1>
					<div className="center_contents">
						<div className="articles">
							{personalArticles.map((article) => (
								<a
									key={article.href}
									href={article.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="article">
										<h2>{article.title}</h2>
										<img
											src={article.image}
											alt={article.alt}
											style={{ width: '100%' }}
										/>
									</div>
								</a>
							))}
						</div>
					</div>
					<div className="article_buttons">
						<a
							href="https://note.com/hoshimikan6490"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							個人noteの記事をもっと見る
						</a>
						<a
							href="https://qiita.com/Hoshimikan6490"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							個人Qiitaの記事をもっと見る
						</a>
					</div>
				</div>
				<br />
				<div>
					<h1>大学の委員会で執筆した記事</h1>
					<div className="center_contents">
						<div className="articles">
							{committeeArticles.map((article) => (
								<a
									key={article.href}
									href={article.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="article">
										<h2>{article.title}</h2>
										<img
											src={article.image}
											alt={article.alt}
											style={{ width: '100%' }}
										/>
										{article.note ? <small>{article.note}</small> : null}
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
				<br />
				<div>
					<h1>研究</h1>
					<div className="waku">
						<p>
							私の研究や、所属する研究室についてまとめています。研究内容や研究室の雰囲気などを知りたい方はぜひご覧ください。
						</p>
						<div className="article_buttons" style={{ marginBottom: '15px' }}>
							<a
								href="/research"
								className="button"
								target="_blank"
								rel="noopener noreferrer"
							>
								研究について詳しく見る
							</a>
						</div>
					</div>
				</div>
				<br />
				<div>
					<h1>公開した動画</h1>
					<div className="center_contents">
						<div className="articles">
							{videoArticles.map((article) => (
								<a
									key={article.href}
									href={article.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="article">
										<h2>
											<span>{article.title}</span>
										</h2>
										<img
											src={article.image}
											alt={article.alt}
											style={{ width: '100%' }}
										/>
									</div>
								</a>
							))}
						</div>
					</div>
					<div className="article_buttons">
						<a
							href="https://kogakuintimes.com/author/hoshimikan/"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							旧チャンネルの動画をもっと見る
						</a>
						<a
							href="https://kogakuintimes.com/author/hoshimikan/"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							新チャンネルの動画をもっと見る
						</a>
					</div>
				</div>
			</main>

			<a id="return_top" href="#" className="button" onClick={handleReturnTop}>
				▲TOPへ戻る
			</a>

			<footer>
				<small>© Hoshimikan6490 2026</small>
			</footer>
		</>
	);
}

export default Activity;
