import { Play } from "phosphor-react";
import { ContdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles";
import { Button } from "../../components/button/styles";
import { useState } from "react";

export default function Home() {
	const [task, setTask] = useState("");
	const [minutesAmnount, setMinutesAmount] = useState(0)

	return (
		<HomeContainer>
			<form>
				<FormContainer>
					<label htmlFor='task'>Vou trabalhar em</label>
					<TaskInput type='text' onChange={(e) => setTask(e.target.value)} value={task} list='task-suggestions' id='task' placeholder='Dê um nome para seu projeto' />

					<datalist id='task-suggestions'>
						<option value='projeto01'></option>
					</datalist>

					<label htmlFor='minutesAmount'>durante</label>
					<MinutesAmountInput onChange={(e) => setMinutesAmount(Number(e.target.value))} step={5} type='number' id='minutesAmount' placeholder='00' min={5} max={60} />

					<span>minutos.</span>
				</FormContainer>

				<ContdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</ContdownContainer>

				<Button type='submit'>
					<Play />
					Começar
				</Button>
			</form>
		</HomeContainer>
	);
}
