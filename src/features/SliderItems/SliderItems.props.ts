import { ISliderData } from '@/interfaces/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SliderItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ISliderData
}