import { StaticImageData } from 'next/image';

export interface IStoriesData {
    id: string,
    title: string,
    description: string,
    img: StaticImageData,
    bgColor: string
}

export interface INewsData {
    id: string,
    title: string,
    link: string,
    date: string
}

export interface ISliderData {
    id: string,
    title: string,
    descr: string,
    btn: string,
    link: string
    img: StaticImageData,
    display: string
    linkDisplay: string
}