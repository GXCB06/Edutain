import React, { useRef, useState } from 'react';
import './QualifiedUniversities.css';
import { FaTrophy, FaCrown, FaGraduationCap, FaCheckCircle, FaFolderOpen, FaInfoCircle } from 'react-icons/fa';
import { launchConfetti, playSuccessSound } from './cardEffects';

const universities = [
	{
		name: 'Khon Kaen University',
		logo: '/university logo/Khon Kaen Univeristy.png',
		badge: { icon: <FaTrophy color="#B03A1E" />, label: 'Top 1 NE', color: '#B03A1E', bg: '#e0e7ff' },
		accepted: 3,
		success: '80%',
		students: [{ name: 'Student 1', avatar: '/tutor picture/068.JPG' }],
		highlight: false,
		strength: '#1 in Northeastern Thailand',
	},
	{
		name: 'Chulalongkorn University',
		logo: '/university logo/Chula.png',
		badge: { icon: <FaCrown color="#FFD700" />, label: 'Top University', color: '#E03A80', bg: '#fffbe6' },
		accepted: 1,
		success: '100%',
		students: [
			{ name: 'Student 2', avatar: '/tutor picture/141.JPG' },
			{ name: 'Student 3', avatar: '/tutor picture/193.JPG' },
		],
		highlight: true,
		strength: 'Ranked #1 in Thailand!',
	},
	{
		name: 'Chiang Mai University',
		logo: '/university logo/Chiang Mai University.png',
		badge: { icon: <FaTrophy color="#7B4FA3" />, label: 'Top 1 North', color: '#7B4FA3', bg: '#e0e7ff' },
		accepted: 1,
		success: '100%',
		students: [{ name: 'Student 4', avatar: '/tutor picture/068.JPG' }],
		highlight: false,
		strength: '#1 in Northern Thailand',
	},
];

const Medal = () => (
	<div style={{ position: 'absolute', left: '50%', top: '-36px', transform: 'translateX(-50%)', zIndex: 2 }}>
		<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
			{/* Blue ribbon */}
			<path d="M18 8 Q28 -6 38 8" stroke="#4A90E2" strokeWidth="8" fill="none" />
			<circle cx="18" cy="8" r="6" fill="#4A90E2" />
			<circle cx="38" cy="8" r="6" fill="#4A90E2" />
			{/* Medal body with gradient */}
			<defs>
				<radialGradient id="medalGold" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#FFF9C4" />
					<stop offset="80%" stopColor="#FFD700" />
					<stop offset="100%" stopColor="#E3A800" />
				</radialGradient>
			</defs>
			<circle cx="28" cy="32" r="20" fill="url(#medalGold)" stroke="#E3A800" strokeWidth="4" />
			{/* Medal shine */}
			<ellipse cx="22" cy="26" rx="6" ry="2.5" fill="#fff" opacity="0.5" />
			{/* Number */}
			<text
				x="28"
				y="40"
				textAnchor="middle"
				fontWeight="bold"
				fontSize="22"
				fill="#E3A800"
				style={{ fontFamily: 'inherit' }}
			>
				1
			</text>
		</svg>
	</div>
);

const PortfolioBadge = () => {
	const [show, setShow] = useState(false);
	const badgeRef = useRef(null);

	// For click-to-pin and click outside
	React.useEffect(() => {
		if (!show) return;
		const handleClick = (e) => {
			if (badgeRef.current && !badgeRef.current.contains(e.target)) {
				setShow(false);
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [show]);

	// Detect mobile
	const isMobile = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

	return (
		<span
			className={`qualified-portfolio-badge${show ? ' show-glow' : ''}`}
			tabIndex={0}
			ref={badgeRef}
			onMouseEnter={() => !isMobile && setShow(true)}
			onMouseLeave={() => !isMobile && setShow(false)}
			onFocus={() => setShow(true)}
			onBlur={() => setShow(false)}
			onClick={() => isMobile && setShow(s => !s)}
			style={{ cursor: 'pointer', outline: 'none' }}
		>
			<FaFolderOpen style={{ color: '#fffbe6', background: '#6a82fb', borderRadius: '50%', padding: 2 }} />
			Portfolio Accepted
			{show && (
				<span className="qualified-portfolio-badge-popup">
					<FaInfoCircle style={{ color: '#6a82fb', marginRight: 8, fontSize: '1.1em', verticalAlign: 'middle' }} />
					Accepted via Portfolio Admission Round
				</span>
			)}
		</span>
	);
};

const QualifiedUniversities = () => {
	const cardRefs = useRef([]);

	return (
		<section className="qualified-universities-new-bg">
			<h2 className="qualified-title-new" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, fontSize: 32, marginBottom: 145 }}>
				<span role="img" aria-label="graduation cap">🎓</span>
				<span>My Journey as DEK68 (Portfolio Round)</span>
				<span role="img" aria-label="graduation cap">🎓</span>
			</h2>
			<div className="qualified-universities-new-list">
				{universities.map((u, idx) => (
					<div
						key={u.name}
						ref={el => cardRefs.current[idx] = el}
						className={`qualified-university-card-new${u.highlight ? ' highlight' : ''}`}
						style={{
							position: 'relative',
							border: '4px solid #FFD700',
							boxShadow: '0 0 0 8px #fffbe6, 0 8px 40px 0 rgba(255,215,0,0.18), 0 6px 32px 0 rgba(106,130,251,0.10)',
							zIndex: 3,
							transform: 'scale(1.13) translateY(-18px)',
							animation: 'border-gradient 2.5s linear infinite',
							cursor: 'pointer',
							transition: 'box-shadow 0.22s, border 0.22s, transform 0.22s, background 0.22s',
							background: u.highlight ? 'linear-gradient(120deg, #fffbe6 60%, #fff 100%)' : '#fff',
						}}
						onMouseEnter={e => {
							e.currentTarget.style.transform = 'scale(1.18) translateY(-24px)';
							e.currentTarget.style.boxShadow = '0 12px 60px 0 #FFD70055, 0 8px 40px 0 #FFD70033, 0 6px 32px 0 #6a82fb22';
							e.currentTarget.style.background = 'linear-gradient(120deg, #fffbe6 60%, #fff 100%)';
							launchConfetti(cardRefs.current[idx]);
						}}
						onMouseLeave={e => {
							e.currentTarget.style.transform = 'scale(1.13) translateY(-18px)';
							e.currentTarget.style.boxShadow = '0 0 0 8px #fffbe6, 0 8px 40px 0 rgba(255,215,0,0.18), 0 6px 32px 0 rgba(106,130,251,0.10)';
							e.currentTarget.style.background = u.highlight ? 'linear-gradient(120deg, #fffbe6 60%, #fff 100%)' : '#fff';
						}}
						// onClick={() => playSuccessSound()}
						// Temporarily disable playSuccessSound to prevent audio error from breaking UI
						tabIndex={0}
						aria-label={`Qualified university: ${u.name}`}
					>
						{/* Medal for highlighted university */}
						{u.highlight && <Medal />}
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: u.highlight ? 24 : 16,
								marginBottom: 12,
							}}
						>
							<div
								className="qualified-badge-new"
								style={{
									background: u.badge.bg,
									color: u.badge.color,
									fontWeight: 600,
									fontSize: 16,
									borderRadius: 20,
									padding: '7px 22px',
									display: 'inline-flex',
									alignItems: 'center',
									gap: 8,
									boxShadow: u.highlight ? '0 2px 12px #FFD70033' : '0 2px 8px #0001',
								}}
							>
								{u.badge.icon}
								<span>{u.badge.label}</span>
							</div>
						</div>
						<div
							className="qualified-logo-wrap-new"
							style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}
						>
							<img
								src={u.logo}
								alt={u.name + ' logo'}
								className="qualified-logo-new"
								style={{
									width: 90,
									height: 90,
									borderRadius: '50%',
									background: '#f8f8ff',
									objectFit: 'contain',
									border: u.highlight ? '2.5px solid #FFD700' : '2px solid #e0e7ff',
									boxShadow: u.highlight ? '0 0 0 6px #fffbe6' : '0 0 0 4px #f4f6ff',
								}}
							/>
						</div>
						<div
							className="qualified-name-new"
							style={{
								color: u.highlight ? '#E03A80' : u.badge.color,
								fontWeight: 700,
								fontSize: 22,
								textAlign: 'center',
								marginBottom: 2,
							}}
						>
							{u.name}
						</div>
						<div
							className="qualified-strength-new"
							style={{
								textAlign: 'center',
								fontWeight: 500,
								fontSize: 17,
								marginBottom: 16,
								color: '#222',
							}}
						>
							{u.strength}
						</div>
						<div
							className="qualified-stats-new"
							style={{
								display: 'flex',
								justifyContent: 'center',
								gap: 18,
								marginBottom: 10,
								fontSize: 16,
								color: '#888',
							}}
						>
							<span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
								<FaGraduationCap
									color={u.highlight ? '#E03A80' : u.badge.color}
									style={{ verticalAlign: 'middle' }}
								/>
								<span className="accepted-number">{u.accepted}</span>{' '}
								accepted
							</span>
							<span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
								<FaCheckCircle
									color={u.highlight ? '#6a82fb' : '#7B4FA3'}
									style={{ verticalAlign: 'middle' }}
								/>
								<span className="success-number">{u.success}</span>{' '}
								success
							</span>
						</div>
						{/* Portfolio badge below stats */}
						<PortfolioBadge />
						{u.highlight && <div className="confetti-winner" aria-hidden="true"></div>}
					</div>
				))}
			</div>
		</section>
	);
};

export default QualifiedUniversities;
