'use client'

import {useState} from "react";

const SliderComponent = () => {

    const [sliderValue, setSliderValue] = useState();
    const customSlider = (e: any) => {
        console.log("SLIDER VALUE IS: ", e.target.value)
        //setSliderValue(e.target.value);
        const container = document.getElementById("slide");

        // if (container) {
        //     const tooltip = container.querySelector(".tooltip");
        //     // @ts-ignore
        //     tooltip.innerHTML = sliderValue;
        //
        //     const slider = container.querySelector(".slider");
        //     // @ts-ignore
        //     const maxVal = slider.getAttribute("max");
        //     // @ts-ignore
        //     const val = (sliderValue / maxVal) * 100 + "%";
        //
        //     const thumb = container.querySelector(".slider-thumb");
        //     // @ts-ignore
        //     thumb.style.left = val;
        //
        //     const progress = container.querySelector(".progress");
        //     // @ts-ignore
        //     progress.style.width = val;
        // }

        if (container) {
            const slider = container.querySelector(".slider");
            const thumb = container.querySelector(".slider-thumb");
            const tooltip = container.querySelector(".tooltip");
            const progress = container.querySelector(".progress");

            // @ts-ignore
            const maxVal = slider.getAttribute("max");
            // @ts-ignore
            const val = (slider.value / maxVal) * 100 + "%";
            // @ts-ignore
            tooltip.innerHTML = slider.value;
            // @ts-ignore
            progress.style.width = val;
            // @ts-ignore
            thumb.style.left = val;
        }


    }

    return (
        <div
            className="range-slider"
            id="slide"
        >
            <input
                type="range"
                min="0"
                max="100"
                value="50"
                className="slider"
                onChange={customSlider}
            />

            <div className="slider-thumb">
                <div className="tooltip"></div>
            </div>

            <div className="progress"></div>
        </div>
    )
}
export default SliderComponent;
