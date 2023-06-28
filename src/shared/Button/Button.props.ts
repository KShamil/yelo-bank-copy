import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'yellow-header-btn' | 'burger-btn' | 'slider-btn' | 'yelo-light-btn' | 'calc-btn' | 'all-news-btn' | 'circle-header-btn'
    children: ReactNode
}