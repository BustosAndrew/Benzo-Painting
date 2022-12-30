import { SMTPClient } from "emailjs"

export default function handler(req, res) {
	const { email, name, phone, address, message } = req.body

	const client = new SMTPClient({
		user: "benzopainting@gmail.com",
		password: process.env.PW,
		host: "smtp.gmail.com",
		ssl: true,
	})

	try {
		client.sendAsync({
			text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nMessage:\n${message}`,
			from: "benzopainting@gmail.com",
			to: "benzopainting@gmail.com",
			subject: "New Service Request",
		})
	} catch (e) {
		res.status(400).end(JSON.stringify({ message: "Error" }))
		return
	}

	res.status(200).end(JSON.stringify({ message: "Sent Mail" }))
}
