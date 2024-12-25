import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {

    useEffect(()=>{
        AOS.init(); //初始化
    },[])
    return (
        <>
        <h2 data-aos='fade-right'>AOS zoom-in</h2>
        <div className="cssAnimal" data-aos='fade-up'>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </>
    )
}
