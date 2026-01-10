import Button from '@mui/material/Button'
import { ReactNode } from 'react'

export interface IButtonProps {
  children: ReactNode
}

export const ButtonUI = ({ children }: IButtonProps) => (
  <Button variant="contained">{children}</Button>
)
