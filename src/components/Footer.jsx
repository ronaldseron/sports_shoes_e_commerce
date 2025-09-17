import React from 'react'
import footerSection from '../data/footerSection'


const Footer = () => {
	return (
		<footer className="max-w-site mx-auto bg-gray-50 text-primary px-16 py-16 flex flex-col gap-2 z-50">
			<div className="grid grid-cols-4">
				{footerSection.map((section, idx) => (
					<nav key={idx} aria-label={section.title}>
						<h3 className="font-family-primary text-lg mb-6">{section.title}</h3>
						<ul>
							{section.links.map((link, idx) => (
								<li key={idx} className="mb-4 text-lg font-light">
									<a href="" className="hover:underline">{link}</a>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>
		</footer>
	)
}

export default Footer