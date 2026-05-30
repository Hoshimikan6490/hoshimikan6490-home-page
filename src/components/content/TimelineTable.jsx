import urlOpen from '../../assets/url_open.webp';

export default function TimelineTable({ rows }) {
	return (
		<table className="timeline">
			<tbody>
				{rows.map((row) => (
					<tr key={row.date}>
						<td className="time">
							<p>{row.date}</p>
							{row.href ? (
								<a
									href={row.href}
									target="_blank"
									rel="noopener noreferrer"
									className="mobile_link"
								>
									これについて見る
									<img src={urlOpen} alt="外部リンクを開く" />
								</a>
							) : (
								<a href="" className="non_URL mobile_link">
									これについて見る
									<img src={urlOpen} alt="外部リンクを開く" />
								</a>
							)}
						</td>
						<td>{row.description}</td>
						<td className="url">
							{row.href ? (
								<a href={row.href} target="_blank" rel="noopener noreferrer">
									これについて見る(外部URL)
								</a>
							) : (
								<a href="" className="non_URL">
									これについて見る(外部URL)
								</a>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
