import React, { useRef } from 'react';
import './Gallery.css';
import shoe1 from '../Assets/shoe1.jpg';
import shoe2 from '../Assets/shoe2.jpg';
import shoe3 from '../Assets/shoe3.jpg';
import shoe4 from '../Assets/shoe4.jpg';
import shoe5 from '../Assets/shoe5.jpg';
import shoe6 from '../Assets/shoe6.jpg';
import shoe7 from '../Assets/shoe7.jpg';
import shoe8 from '../Assets/shoe8.jpg';
import shoe9 from '../Assets/shoe9.jpg';
import shoe10 from '../Assets/shoe10.jpg';
import shoe11 from '../Assets/shoe11.jpg';
import shoe12 from '../Assets/shoe12.jpg';
import left_arrow from '../Assets/next.png';
import right_arrow from '../Assets/next2.png';

const Gallery = () => {
    const scrollContainerRef = useRef(null);
    const backBtnRef = useRef(null);
    const frontBtnRef = useRef(null);

    const handleScroll = () => {
        const scrollContainer = scrollContainerRef.current;
        const scrollLeft = scrollContainer.scrollLeft;
        const galleryGroups = scrollContainer.querySelectorAll('.gallery-group');
        galleryGroups.forEach((group) => {
            const rect = group.getBoundingClientRect();
            if (rect.left <= 450 && rect.right >= 450) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }; 

    const frontImg = () => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.style.scrollBehavior = "smooth"; 
        scrollContainer.scrollLeft += 900;

        // Check if scrolled to the end
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
          // Set timeout to make the transition smoother
          setTimeout(() => {
              scrollContainer.scrollLeft = 0;
          }, 300); // Adjust this value to control the delay
        } 
    }

    const backImg = () => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.style.scrollBehavior = "smooth"; 
        scrollContainer.scrollLeft -= 900;
    } 

    return (
        <div className="hero">

            <div className="gallery-wrapper">

            <div className="gallery-buttons" ref={backBtnRef} onClick={backImg}>  
                <img src={right_arrow} alt="left facing arrow" id="backBtn"/> 
            </div> 

            <div className="gallery" ref={scrollContainerRef} onScroll={handleScroll}>
                <div className="gallery-group">
                    <span>
                        <img src={shoe1} alt="white Air Force 1 with black and red trim" />
                    </span>
                    <span>
                        <img src={shoe2} alt="blue high top AF1s" />
                    </span>
                    <span>
                        <img src={shoe3} alt="grey New Balance" />
                    </span>
                </div>
                <div className="gallery-group">
                    <span>
                        <img src={shoe4} alt="multicolored walking sneakers" />
                    </span>
                    <span>
                        <img src={shoe5} alt="pure white AF1s" />
                    </span>
                    <span>
                        <img src={shoe6} alt="grey basketball sneaker" />
                    </span>
                </div>
                <div className="gallery-group">
                    <span>
                        <img src={shoe7} alt="white Air Force 1 with black and red trim" />
                    </span>
                    <span>
                        <img src={shoe8} alt="velvet wine flat sneaker" />
                    </span>
                    <span>
                        <img src={shoe9} alt="black and red Air Force 1s" />
                    </span> 
                </div>
                <div className="gallery-group">
                    <span>
                        <img src={shoe10} alt="pastel colored AF1s" />
                    </span> 
                    <span>
                        <img src={shoe11} alt="grey, black, and pink Nikes" /> 
                    </span>
                    <span>
                        <img src={shoe12} alt="white and lemon green Nike running shoe" />
                    </span>
                </div>
            </div>

            <div className="gallery-buttons" ref={frontBtnRef} onClick={frontImg}>  
                <img src={left_arrow} alt="right facing arrow" id="frontBtn" /> 
            </div>

            </div>
        
        </div>
        
        
    );
}

export default Gallery;
