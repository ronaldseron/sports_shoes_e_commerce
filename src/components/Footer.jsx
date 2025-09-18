import React from 'react'
import { footerSection, paymentOptions, socialMedia } from '../data/footerSection'


const Footer = () => {
	return (
		<footer className="max-w-site mx-auto bg-gray-50 text-primary px-16 py-16 flex flex-col gap-6 z-50">
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
			<div className="grid grid-cols-2">
				{paymentOptions.map((payment, idx) => (
					<div key={idx}>
						<h3 className="font-family-primary text-lg mb-6">{payment.title}</h3>
						<div className="flex items-center gap-6">
							{payment.links.map((link, idx) => (
								<div key={idx} className="flex items-center gap-2">
									<img src={link.image} alt={link.name} className="w-14"/>
									<h5 className="text-lg font-light">{link.name}</h5>
								</div>
							))}
						</div>
					</div>
				))}
				{socialMedia.map((social, idx) => (
					<div key={idx}>
						<h3 className="font-family-primary text-lg mb-6">{social.title}</h3>
						<div className="flex items-center gap-6">
							{social.links.map((link, idx) => (
								<div key={idx} className="flex items-center gap-2">
									<img src={link.image} alt={link.name} className="w-9"/>
									<h5 className="text-lg font-light">{link.name}</h5>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer