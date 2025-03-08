import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonContainerProps {
	variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	padding: 2rem 1rem;
	height: 40px;
	border-radius: 4px;
  background-color: ${props => props.theme['blue-500']};
`
