import * as React from "react"

interface TextFieldProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TextField: React.FunctionComponent<TextFieldProps> = ({onChange}) => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const divRef = React.useRef<HTMLDivElement>(null)

	return (
		<div ref={divRef}>
			<input ref={inputRef} onChange={onChange} />
		</div>
	)
}

export default TextField
