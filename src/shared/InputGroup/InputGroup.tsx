import React, { FC } from 'react'
import { InputGroupProps } from './InputGroup.props'
import styles from './InputGroup.module.css';

export const InputGroup:FC<InputGroupProps> = ({...props}):JSX.Element => {
  return (
    <div {...props}>InputGroup</div>
  )
}