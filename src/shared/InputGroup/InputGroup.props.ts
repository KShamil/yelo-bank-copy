import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InputGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}