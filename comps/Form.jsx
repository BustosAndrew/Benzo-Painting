// import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

export const Form = ({ contact_styles }) => {
	const [sent, setSent] = useState(false)
	const [first, setFirst] = useState("")
	const [last, setLast] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [street, setStreet] = useState("")
	const [line2, setLine2] = useState("")
	const [zip, setZip] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [desc, setDesc] = useState("")

	const sendEmail = (e) => {
		e.preventDefault() // prevents the page from reloading when you hit “Submit”
		let fullAdd
		if (line2.trim())
			fullAdd =
				street.trim() +
				", " +
				line2.trim() +
				", " +
				city.trim() +
				", " +
				state.trim() +
				" " +
				zip
		else
			fullAdd =
				street.trim() + ", " + city.trim() + ", " + state.trim() + " " + zip

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: first.trim() + " " + last.trim(),
				email: email.trim(),
				phone: phone,
				address: fullAdd,
				message: desc.trim(),
			}),
		})
			.then(() => setSent(true))
			.catch((err) => console.log("Error: " + err))
	}

	return (
		(sent && <h3>Your message has been sent!</h3>) || (
			<div className={contact_styles.form}>
				<form onSubmit={sendEmail}>
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
						value={first}
						onChange={(e) => setFirst(e.target.value)}
					/>
					<input
						type='text'
						id={contact_styles.lname}
						name='lname'
						placeholder='Last'
						required
						enterKeyHint='next'
						className={contact_styles.textfield}
						value={last}
						onChange={(e) => setLast(e.target.value)}
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
						pattern='^\d{3}-\d{3}-\d{4}$'
						placeholder='xxx-xxx-xxxx'
						onInvalid={(e) =>
							e.target.setCustomValidity(
								"Please enter phone number in the correct format: xxx-xxx-xxxx"
							)
						}
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={street}
						onChange={(e) => setStreet(e.target.value)}
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
						value={line2}
						onChange={(e) => setLine2(e.target.value)}
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
						value={zip}
						onChange={(e) => setZip(e.target.value)}
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
						value={city}
						onChange={(e) => setCity(e.target.value)}
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
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
					<br />
					<h3>Describe Services Needed</h3>
					<textarea
						className={contact_styles.desc}
						name='desc'
						rows='10'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						required
					/>
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
