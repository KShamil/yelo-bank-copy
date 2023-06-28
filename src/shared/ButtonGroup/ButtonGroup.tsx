import React, { FC } from 'react'
import { ButtonGroupProps } from './ButtonGroup.props'
import styles from './ButtonGroup.module.css';

export const ButtonGroup:FC<ButtonGroupProps> = ({...props}):JSX.Element => {
  return (
    <div {...props}>ButtonGroup</div>
  )
}