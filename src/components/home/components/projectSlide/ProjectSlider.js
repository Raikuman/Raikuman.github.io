import styles from "./Slider.module.css"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import image1 from '../../../../resources/slideshow/image1.png';
import image2 from '../../../../resources/slideshow/image2.png';

export const ProjectSlider = () => {

    const [current, setCurrent] = useState(0);

    const images = [
        image1,
        image2
    ]

    const imageSlides = document.getElementsByClassName(styles.slideImage);
    const bubbles = document.getElementsByClassName(styles.bubbleOuter);

    const updateBubbles = (highlight) => {
        bubbles[current].style.borderColor = "#130F1A";
        bubbles[highlight].style.borderColor = "#5CC8FF";
    }

    const nextImage = () => {
        let updatedIndex = (current === images.length - 1 ? 0 : current + 1);

        imageSlides[current].className = styles.slideImage + " " + styles.leftOut;
        imageSlides[updatedIndex].className = styles.slideImage + " " + styles.leftIn;

        updateBubbles(updatedIndex);
        setCurrent(updatedIndex);

    }

    const previousImage = () => {
        let updatedIndex = (current === 0 ? images.length - 1 : current - 1);

        imageSlides[current].className = styles.slideImage + " " + styles.rightOut;
        imageSlides[updatedIndex].className = styles.slideImage + " " + styles.rightIn;

        updateBubbles(updatedIndex);
        setCurrent(updatedIndex);
    }

    const jumpImage = (e) => {
        let jumpIndex = parseInt(e.target.id);

        if (jumpIndex === current) return;

        if (jumpIndex - current >= 0) {
            imageSlides[current].className = styles.slideImage + " " + styles.leftOut;
            imageSlides[jumpIndex].className = styles.slideImage + " " + styles.leftIn;
        } else {
            imageSlides[current].className = styles.slideImage + " " + styles.rightOut;
            imageSlides[jumpIndex].className = styles.slideImage + " " + styles.rightIn;
        }

        updateBubbles(jumpIndex);
        setCurrent(jumpIndex);
    }

    useEffect(() => {
        bubbles[current].style.borderColor = "#5CC8FF";
    });


    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.galleryContainer}>
            <span className={styles.buttonPrev} onClick={previousImage}><FontAwesomeIcon
                icon="fa-solid fa-chevron-left"/></span>
                <span className={styles.buttonNext} onClick={nextImage}><FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"/></span>

                <div className={styles.galleryTrack}>
                    {
                        images.map((image, index) => {
                            return <img alt={`slideshow${index}`} className={styles.slideImage} key={index} src={image}
                                        style={(index === 0) ? {
                                            transform: "translateX(0%)"
                                        } : {
                                            transform: "translateX(100%)"
                                        }}>
                            </img>
                        })
                    }
                </div>
                <div className={styles.galleryFooter}>
                    {
                        images.map((image, index) => {
                            return <div className={styles.bubbleOuter} key={index} onClick={jumpImage}
                                        id={index.toString()}/>
                        })
                    }
                </div>

            </div>
        </div>
    )
}