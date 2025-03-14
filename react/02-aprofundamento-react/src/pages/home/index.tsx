import { Play } from "phosphor-react";
import {
	ContdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	TaskInput,
} from "./styles";
import { Button } from "../../components/button/styles";
import { useForm } from "react-hook-form";

interface NewCicleFormData {
	task: string;
	minutesAmount: number;
}

export default function Home() {
	const { register, handleSubmit, watch, reset } = useForm<NewCicleFormData>({
		defaultValues: {
			task: '',
			minutesAmount: 5
		}
	});

	function handleCreateNewCicle(data: NewCicleFormData) {
		console.log(data)
		reset()
	}

	const task = watch('task')
	const minutesAmount = watch('minutesAmount')
	const isSubmitDisabled = !task || minutesAmount > 60 || minutesAmount < 5

	return (
		<HomeContainer>
			<form onSubmit={handleSubmit(handleCreateNewCicle)}>
				<FormContainer>
					<label htmlFor='task'>Vou trabalhar em</label>
					<TaskInput
						type='text'
						list='task-suggestions'
						id='task'
						placeholder='Dê um nome para seu projeto'
						{...register("task")}
					/>

					<datalist id='task-suggestions'>
						<option value='projeto01'></option>
					</datalist>

					<label htmlFor='minutesAmount'>durante</label>
					<MinutesAmountInput
						step={5}
						type='number'
						id='minutesAmount'
						placeholder='00'
						min={5}
						max={60}
						{...register("minutesAmount", {valueAsNumber: true})}
					/>

					<span>minutos.</span>
				</FormContainer>

				<ContdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</ContdownContainer>

				<Button disabled={isSubmitDisabled} type='submit'>
					<Play />
					Começar
				</Button>
			</form>
		</HomeContainer>
	);
}
