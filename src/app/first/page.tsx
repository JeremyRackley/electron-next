import React from "react";
import styles from "./test.module.css";
import PowerButton from "@/app/components/PowerButton";
import SliderComponent from "@/app/components/SliderComponent";
import {SerialPort} from "serialport";
import {ReadlineParser} from "@serialport/parser-readline";
type Props = {};

const page = (props: Props) => {
    //  const port = new SerialPort({path: '/dev/tty.BLTH', baudRate: 9600});
    //  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n'}));
    //
    // parser.on('data', data => {
    //     if (data.includes("Yes")) {
    //         console.log("Included a Yes");
    //     } else {
    //         console.log("Data dos NOT include a Yes");
    //     }
    // });
    //
    // // port to write data
    // port.on('open', () => {
    //     console.log("Port Opened");
    //     setTimeout(() => {
    //         port.write('1', (err) => {
    //             if(err) {
    //                 return console.log('Error on write: ', err.message);
    //             }
    //             console.log("Message written successfully to serial port");
    //         });
    //     }, 3000);
    //
    //     setTimeout(() => {
    //         port.write('0', (err) => {
    //             if(err) {
    //                 return console.log('Error on write: ', err.message);
    //             }
    //             console.log("Message written successfully to serial port");
    //         });
    //     }, 3000);
    //
    //
    // });

     return (
    <div>
        <section>
            <PowerButton />
            {/*<button className="btn btn-circle">*/}
            {/*    <i className="fas fa-power-off text-inset"></i>*/}
            {/*</button>*/}

            {/*<button className="btn btn-circle">*/}
            {/*    <i className="fas fa-power-off"></i>*/}
            {/*</button>*/}

            {/*<button className="btn btn-rounded">*/}
            {/*    <i className="fas fa-cogs"></i>*/}
            {/*</button>*/}

            {/*<button className="btn btn-rounded">*/}
            {/*    Get Started*/}
            {/*</button>*/}

            {/*<button className="btn btn-circle">*/}
            {/*    <i className="fas fa-fast-backward text-inset"></i>*/}
            {/*</button>*/}

            {/*<button className="btn btn-circle">*/}
            {/*    <i className="fas fa-play-circle text-inset"></i>*/}
            {/*</button>*/}

            {/*<button className="btn btn-circle">*/}
            {/*    <i className="fas fa-fast-forward text-inset"></i>*/}
            {/*</button>*/}
        </section>

        {/*<div className="knob-container">*/}
        {/*    <div className="knob"></div>*/}
        {/*</div>*/}

        {/*<section>*/}
        {/*    <div className="clock">*/}
        {/*        <h1 className="time">12:34</h1>*/}
        {/*    </div>*/}
        {/*</section>*/}


        {/*<section>*/}
        {/*    <input type="checkbox" className="check" />*/}
        {/*    <input type="checkbox" className="check check-shine" />*/}
        {/*</section>*/}

        {/*<section>*/}
        {/*    <input type="radio" className="radio radio-shine" name="shine" />*/}
        {/*    <input type="radio" className="radio radio-shine" name="shine" />*/}
        {/*</section>*/}

        {/*<section>*/}
        {/*    <input type="checkbox" className="toggle" />*/}
        {/*    <input type="checkbox" className="toggle toggle-shine" />*/}
        {/*</section>*/}

        <section>
            <SliderComponent />
            {/*<div className="range-slider">*/}
            {/*    <input type="range" min="0" max="100" value="50" className="slider" />*/}

            {/*        <div className="slider-thumb">*/}
            {/*            <div className="tooltip"></div>*/}
            {/*        </div>*/}
            {/*        <div className="progress"></div>*/}
            {/*</div>*/}
        </section>

        {/*<section>*/}
        {/*    <div className="btn-group">*/}
        {/*        <button className="btn">*/}
        {/*            <i className="fas fa-chevron-left"></i>*/}
        {/*        </button>*/}
        {/*        <button className="btn">*/}
        {/*            <i className="fas fa-chevron-right"></i>*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*</section>*/}

        {/*<section>*/}
        {/*    <div className="range-slider range-slider-vertical">*/}
        {/*        <input type="range" min="0" max="100" value="50" className="slider" />*/}
        {/*        <div className="slider-thumb">*/}
        {/*            <div className="tooltip"></div>*/}
        {/*        </div>*/}
        {/*        <div className="progress"></div>*/}
        {/*    </div>*/}

        {/*    <div className="range-slider range-slider-vertical">*/}
        {/*        <input type="range" min="0" max="100" value="50" className="slider" />*/}
        {/*        <div className="slider-thumb">*/}
        {/*            <div className="tooltip"></div>*/}
        {/*        </div>*/}
        {/*        <div className="progress"></div>*/}
        {/*    </div>*/}
        {/*</section>*/}
    </div>
  );
};

export default page;
