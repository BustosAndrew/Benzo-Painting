import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { Accordion } from "../comps/Accordion"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Benzo Painting</title>
				<meta name='description' content='Benzo Painting Services' />
				<meta
					name='keywords'
					content='painting, drywall, interior, exterior'
				></meta>
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
				<div className={styles.intro}>
					<div className={styles.center_content}>
						<Image src='/logo.png' width={226} height={222} alt='logo' />
						<p>
							Benzo Paint Service is a professional paint company that offers a
							wide range of services to meet the needs of our customers. We are
							dedicated to providing high-quality, reliable painting services
							for both residential and commercial properties.
						</p>
					</div>
				</div>
				<Image
					src='/white.png'
					width={2000}
					height={500}
					style={{ maxWidth: "100%", height: "100%" }}
					alt='bedroom'
				/>
				<div className={styles.quick_info}>
					<div className={styles.center_content}>
						<h3>
							At Benzo Paint Service, customer satisfaction is our top priority.
							We take pride in our work and strive to exceed our clients&apos;
							expectations on every job. Contact us today to schedule a
							consultation and let us help transform your space with a fresh
							coat of paint.
						</h3>
					</div>
				</div>
				<div className={styles.services}>
					<div className={styles.center_content}>
						<h3>Services Offered</h3>
						<p>
							We offer a variety of services including interior and exterior
							painting, color consulting, wallpaper installation, and pressure
							washing. We use only the finest quality paints and materials to
							ensure that our work is durable and long-lasting. Plus, we offer
							competitive pricing and flexible scheduling to make the painting
							process as convenient as possible for our clients.
						</p>
						<div className={styles.service_grid}>
							<div className={styles.service}>
								<div>
									<h4>Interior Painting</h4>
									{/* <Accordion
										content={`Interior painting includes the right primer (if needed) for
										the job and the desired paint. Before anything we prep the
										area to keep it clean so you dont worry about a mess.`}
									/> */}
									<p>
										Interior painting includes the right primer (if needed) for
										the job and the desired paint. Before anything we prep the
										area to keep it clean so you dont worry about a mess.
									</p>
									<Link href='/contact' className='button'>
										Get A Quote
									</Link>
								</div>
							</div>
							<div className={styles.service}>
								<div>
									<h4>Exterior Painting</h4>
									{/* <Accordion
										content={`The chosen area for paint will be pressure washed to ensure
										a clean surface. High quality primer and desired paint will
										then be used to keep the quality for as long as possible.`}
									/> */}
									<p>
										The chosen area for paint will be pressure washed to ensure
										a clean surface. High quality primer and desired paint will
										then be used to keep the quality for as long as possible.
									</p>
									<Link href='/contact' className='button'>
										Get A Quote
									</Link>
								</div>
							</div>
							<div className={styles.service}>
								<div>
									<h4>Wallpaper Service</h4>
									{/* <Accordion
										content={`The area will be prepped correctly before applying
										wallpaper. Then a wall size primer/sizing product will be
										used before laying out the wallpaper. Everything will be
										seamless.`}
									/> */}
									<p>
										The area will be prepped correctly before applying
										wallpaper. Then a wall size primer/sizing product will be
										used before laying out the wallpaper. Everything will be
										seamless.
									</p>
									<Link href='/contact' className='button'>
										Get A Quote
									</Link>
								</div>
							</div>
							<div className={styles.service}>
								<div>
									<h4>Drywall Repair</h4>
									{/* <Accordion
										content={`We can repair holes in the walls, any size and color match
										it to the existing color. For drywall installation please
										contact us with the project.`}
									/> */}
									<p>
										We can repair holes in the walls, any size and color match
										it to the existing color. For drywall installation please
										contact us with the project.
									</p>
									<Link href='/contact' className='button'>
										Get A Quote
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.reviews}>
					<div
						className={styles.center_content}
						// style={{ marginBottom: "2rem" }}
					>
						<h3>What Our Clients Are Saying</h3>
						<p>
							“Greatest service I’ve been offered by such an amazing team!
							Quality work is what I expected, and I got just that. I recommend
							this to anyone who needs an excellent painting service.”
						</p>
						<br />
						{/* <Link href='/reviews' className='button'>
							Read More
						</Link> */}
					</div>
				</div>
				<div id='contact' className={styles.contact}>
					<div className={styles.center_content}>
						<h3>Contact Us</h3>
						<p>
							For more help please contact us at&nbsp;
							<a style={{ color: "#0026ff" }} href='tel:2094037980'>
								(209) 403 7980
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
										href='tel:2094037980'
									>
										(209) 403 7980
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
