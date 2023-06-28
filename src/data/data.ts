import { INewsData, ISliderData, IStoriesData } from '@/interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';
import StroiesImg1 from './images/stories-img/story-kredit.webp'
import StroiesImg2 from './images/stories-img/stories-5-pic.webp'
import StroiesImg3 from './images/stories-img/flag.webp'
import SliderImg1 from './images/slider-img/birthday_-_karusel.jpg';
import SliderImg2 from './images/slider-img/1.png';
import SliderImg3 from './images/slider-img/yelo_az.jpg';
import SliderImg4 from './images/slider-img/taksit_karti.jpg';
import SliderImg5 from './images/slider-img/yay_krediti_-_11_7_-_sayt_cover.jpg';
import SliderImg6 from './images/slider-img/onlayn_kredit.png';

export const storiesData: IStoriesData[] = [
    {
        id: uuidv4(),
        title: 'Kredit',
        description: 'Xərclərini təxirə salma, hər zaman dəstək üçün Yelo Bank var',
        img: StroiesImg1,
        bgColor: '#0071C7'
    },
    {
        id: uuidv4(),
        title: 'Yelo kart',
        description: 'Yelo Kart hər əməliyyatda rahatlıq anlayışını dəyişəcək',
        img: StroiesImg2,
        bgColor: '#81BD5B'
    },
    {
        id: uuidv4(),
        title: '#SəninləyikTürkiyə',
        description: 'Türkiyədə zəlzələdən zərərçəkmişlərə Yelo App-də yardım et',
        img: StroiesImg3,
        bgColor: '#D82A34'
    }
]

export const newsData: INewsData[] = [
    {
        id: uuidv4(),
        title: "Yelo Bank-dan sahibkarlar üçün bir ilk",
        link: 'Daha ətraflı',
        date: '21 İyun 2023'
    },
    {
        id: uuidv4(),
        title: "Yelo App ilə xaricə sürətli pul köçürmələri",
        link: 'Daha ətraflı',
        date: '20 İyun 2023'
    },
    {
        id: uuidv4(),
        title: "Yelo Bank ilə pulunuz 11.5%-dək artır!",
        link: 'Daha ətraflı',
        date: '13 İyun 2023'
    },
    {
        id: uuidv4(),
        title: "Yelo App ilə xaricə sürətli pul köçürmələri",
        link: 'Daha ətraflı',
        date: '20 İyun 2023'
    },

]

export const sliderData:ISliderData[] = [
    {
        id:uuidv4(),
        title:'Ad günü hədiyyəsi',
        descr:'Endirimli və komissiyasız kredit',
        btn:'Sifariş et',
        link:'Daha ətraflı',
        img:SliderImg1,
        display:'block',
        linkDisplay:"flex"
    },
    {
        id:uuidv4(),
        title:'Baxışını dəyiş',
        descr:'',
        btn:'',
        link:'Daha ətraflı',
        img:SliderImg2,
        display:'none',
        linkDisplay:"flex"
    },
    {
        id:uuidv4(),
        title:'Krediti cəmi 7 dəqiqəyə al',
        descr:'Onlayn sifariş et, filiala gəlmə',
        btn:'Sifariş et',
        link:'',
        img:SliderImg3,
        display:'block',
        linkDisplay:"none"
    },
    {
        id:uuidv4(),
        title:'Taksit funksiyalı kredit kartı',
        descr:'70/24 üstünlüklərlə',
        btn:'',
        link:'Daha ətraflı',
        img:SliderImg4,
        display:'none',
        linkDisplay:"flex"
    },
    {
        id:uuidv4(),
        title:'30 000 AZN-dək',
        descr:'Parlaq yay krediti',
        btn:'Sifariş et',
        link:'',
        img:SliderImg5,
        display:'block',
        linkDisplay:"none"
    },
    {
        id:uuidv4(),
        title:'Banka gəlmədən',
        descr:'Tam onlayn kredit',
        btn:'Sifariş et',
        link:'',
        img:SliderImg6,
        display:'block',
        linkDisplay:"none"
    },

]