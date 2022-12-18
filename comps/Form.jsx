import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

export const Form = ({ contact_styles }) => {
	const form = useRef()
	const [sent, setSent] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault() // prevents the page from reloading when you hit “Send”
		emailjs
			.sendForm(
				"service_hlt6tg3",
				"template_ukw3d0m",
				form.current,
				"vz9_xJj9gXLm2XWBt"
			)
			.then(
				() => {
					setSent(true)
				},
				() => {}
			)
	}

	return (
		(sent && <h3 style={{}}>Your message has been sent!</h3>) || (
			<div className={contact_styles.form} onSubmit={sendEmail}>
				<form ref={form}>
					<h3>Name</h3>
					<input
						type='text'
						id='fname'
						name='fname'
						placeholder='First'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
						style={{ marginRight: 10 }}
					/>
					<input
						type='text'
						id={contact_styles.lname}
						name='lname'
						placeholder='Last'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
					/>
					<br />
					<h3>Phone</h3>
					<input
						type='text'
						id='phone'
						name='phone'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
						pattern='\d{3}-\d{3}-\d{4}'
						placeholder='xxx-xxx-xxxx'
						onInvalid={(e) =>
							e.target.setCustomValidity(
								"Please enter phone number in the correct format: xxx-xxx-xxxx"
							)
						}
					/>
					<br />
					<h3>Email</h3>
					<input
						type='email'
						id='email'
						name='email'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
					/>
					<br />
					<h3>Address</h3>
					<input
						type='text'
						id='street-address'
						name='street-address'
						autoComplete='street-address'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
						placeholder='Street address'
					/>
					<br />
					<br />
					<input
						type='text'
						id='address-line2'
						name='address-line2'
						autoComplete='address-line2'
						enterKeyHint='next'
						placeholder='Address line 2'
						className={contact_styles.textfield}
					/>
					<br />
					<br />
					<input
						type='number'
						id='postal-code'
						name='postal-code'
						autoComplete='postal-code'
						enterKeyHint='next'
						placeholder='Zip/postal code'
						className={contact_styles.textfield}
					/>
					<br />
					<br />
					<input
						type='text'
						id='city'
						name='city'
						autoComplete='address-level2'
						enterKeyHint='next'
						placeholder='City'
						className={contact_styles.textfield}
					/>
					<br />
					<br />
					<input
						type='text'
						id='state'
						name='state'
						autoComplete='address-level1'
						enterKeyHint='next'
						placeholder='State'
						className={contact_styles.textfield}
					/>
					<br />
					<h3>Describe Services Needed</h3>
					<textarea className={contact_styles.desc} name='desc' rows='10' />
					<br />
					<hr
						style={{
							border: "none",
							height: 1,
							backgroundColor: "black",
						}}
					/>
					<p style={{ fontSize: 12 }}>
						The protection of your privacy is important to us at Benzo Painting.
						Rest assured that the personal information you provide us with will
						not be disclosed to other parties and will be used solely for the
						purpose of bringing you the best service possible.
					</p>
					<button className='button' type='submit' value='Send'>
						Submit
					</button>
				</form>
			</div>
		)
	)
}
