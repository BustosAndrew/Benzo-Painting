import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import contact_styles from "../styles/Contact.module.css"
import { Form } from "../comps/Form"
import Link from "next/link"

const Contact = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Benzo Painting</title>
				<meta name='description' content='Contact Benzo Painting Services' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<style jsx>{`
				@media (max-width: 600px) {
					#fname {
						margin-bottom: 10px;
					}
				}
			`}</style>
			<nav className={styles.nav}>
				<Link href='/'>Home</Link>
				{/* <Link href='/about'>About</Link>
				<Link href='/services'>Services</Link> */}
				{/* <Link href='/testimonies'>Testimonies</Link> */}
				<Link href='#contact'>Contact Us</Link>
				<Link href='/contact' className='button' id={styles["nav-btn"]}>
					Get A Quote
				</Link>
			</nav>
			<main className={styles.main}>
				<div className={contact_styles.content}>
					<div className={contact_styles.form_area}>
						<h2>Send Us a Message</h2>
						<Form contact_styles={contact_styles} />
					</div>
					<div className={contact_styles.contact_area}>
						<div
							style={{
								backgroundColor: "white",
								textAlign: "center",
								width: "100%",
								borderRadius: 10,
							}}
						>
							<h3>Contact Us Now</h3>
							<p>benzopainting@gmail.com</p>
							<h3>
								<a style={{ color: "#0026ff" }} href='tel:5106727896'>
									(510) 672-7896
								</a>
							</h3>
						</div>
						<div></div>
					</div>
				</div>
				<div id='contact' className={styles.contact}>
					<div className={styles.center_content}>
						<h3>Contact Us</h3>
						<p>
							For more help please contact us at&nbsp;
							<a style={{ color: "#0026ff" }} href='tel:5106727896'>
								(510) 672-7896
							</a>
							. For other questions or projects that you need help with, please
							email us with the information at benzopainting@gmail.com.
						</p>
						<p>A representative will respond in less than 24 hours.</p>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<div className={styles.center_content}>
					<div
						style={{
							alignSelf: "flex-start",
						}}
					>
						<div className={styles.contacts}>
							<Image
								src='/logo.png'
								width={133}
								height={130}
								style={{ borderRadius: 15 }}
								alt='logo'
							/>
							<div style={{ marginLeft: "1rem" }}>
								<h3>Contact</h3>
								<p style={{ lineHeight: 2 }}>
									<a
										style={{ color: "#0026ff", display: "block" }}
										href='tel:5106727896'
									>
										(510) 672-7896
									</a>
									benzopainting@gmail.com
								</p>
							</div>
						</div>
						<div>
							<Image
								src='/livingroom.png'
								width={409}
								height={223}
								style={{ borderRadius: 15, width: "100%", marginTop: "12%" }}
								alt='living room'
							/>
						</div>
					</div>
					<div style={{ alignSelf: "flex-start", marginLeft: "auto" }}>
						<h3>Service Areas</h3>
						<p style={{ lineHeight: 2 }}>
							Stockton, CA | Manteca, CA
							<br />
							San Ramon, CA | Walnut Creek, CA
							<br /> Lathrop, CA | Ripon, CA
							<br />
							Lafayette, CA | Pleasanton, CA
							<br /> Livermore, CA | Turlok, CA
							<br /> Lodi, CA | Salida, CA
							<br /> Tracy, CA | Galt, CA
							<br /> Concord, CA | Modesto, CA
							<br /> Discovery Bay, CA | Oakdale, CA
							<br /> Sunol, CA | Hayward, CA
							<br /> Dublin, CA | Escalon, CA
							<br /> Orinda, CA
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Contact
