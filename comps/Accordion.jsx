import { useState } from "react"

export const Accordion = ({ content }) => {
	const [active, setActive] = useState(false)

	return (
		<>
			<span className='details' onClick={() => setActive(!active)}>
				<h4>
					Details{" "}
					<span style={{ fontSize: 21, fontWeight: "bold" }}>
						{!active ? "∨" : "∧"}
					</span>
				</h4>
			</span>
			{active && <p>{content}</p>}
		</>
	)
}
