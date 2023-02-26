import * as React from "react"
import Button from "./components/Button"
import TextField from "./components/TextField"

interface Task {
	id: string
	isCompleted: boolean
}

const App = () => {
	const [tasks, setTasks] = React.useState<Task[]>([])
	const [count, setCount] = React.useState<number>(1)

	const completedTasks: boolean[] = React.useMemo(() => {
		return tasks
			.filter((task) => task.isCompleted)
			.map((task) => task.isCompleted)
	}, [tasks])

	console.log(completedTasks)

	const handleButtonClick: () => void = React.useCallback(() => {
		return console.log("clicked")
	}, [])

	return (
		<main>
			<Button theme="dark" onClick={handleButtonClick}>
				Enviar
			</Button>

			<TextField onChange={(e) => console.log(e.target.value)} />
		</main>
	)
}

export default App
