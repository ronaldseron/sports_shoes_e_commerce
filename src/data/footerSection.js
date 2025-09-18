import Paypal from "../assets/images/paymentLogo/paypal.svg"
import Gcash from "../assets/images/paymentLogo/gcash.svg"
import Visa from "../assets/images/paymentLogo/visa.svg"
import MasterCard from "../assets/images/paymentLogo/mastercard.svg"

import Facebook from "../assets/images/socialMedia/facebook.svg"
import Instagram from "../assets/images/socialMedia/instagram.svg"
import Linkedin from "../assets/images/socialMedia/linkedin.svg"

export const footerSection = [
	{
		title: "SHOP BY SPORT",
		links: [
			"Basketball Shoes", "Football Shoes", "Volleyball Shoes", "Tennis Shoes", "Badminton Shoes", "Baseball Shoes", "Golf Shoes"
		]
	},
	{
		title: "COMPANY",
		links: [
			"Privacy Policy", "Terms $ Conditions", "Refund Policy"
		]
	},
	{
		title: "LEGAL",
		links: [
			"Privacy Policy", "Terms of Service", "Refund Policy"
		]
	},
	{
		title: "CUSTOMER SERVICE",
		links: [ 
			"Shipping & Delivery", "Returns & Exchanges", "Size Guide", "FAQs", "Contact Us"
		]
	}
];

export const paymentOptions = [
	{
		title: "PAYMENT OPTIONS",
		links:[
			{
				name: "Gcash",
				image: Gcash
			},
			{
				name: "Visa",
				image: Visa
			},
			{
				name: "MasterCard",
				image: MasterCard
			},
			{
				name: "Paypal",
				image: Paypal
			},
		]
	}
];

export const socialMedia = [
	{
		title: "SOCIAL MEDIA",
		links: [
			{
				name: "Facebook",
				image: Facebook
			},
			{
				name: "Instagran",
				image: Instagram
			},
			{
				name: "Linkedin",
				image: Linkedin
			}
		]
	}
];