import { Play } from "phosphor-react";
import { ContdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export default function Home() {
	return (
		<HomeContainer>
			<form>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <input type='text' id='task' />

          <label htmlFor='minutesAmount'>durante</label>
          <input type='number' id='minutesAmount' />

          <span>minutos.</span>
        </FormContainer>

				<ContdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</ContdownContainer>

				<button type='submit'>
          <Play />
          Começar
        </button>
			</form>
		</HomeContainer>
	);
}
