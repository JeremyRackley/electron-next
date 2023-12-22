'use client'
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

const PowerButton = () => {
    const port = new SerialPort({path: '/dev/ttyUSB0', baudRate: 9600});
    // const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n'}));
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

    let isOn = false;
    const handleClick = () => {
        alert('I was clicked!');
    }

    const toggleLED = () => {
        isOn = !isOn;
        console.log('I got here!');
        const message = isOn ? '1' : '0';
        const btn = document.getElementById("power-button");
        if (btn) {
            btn.classList.toggle("btn-pressed");
            port.write(message, (err) => {
                if(err) {
                    return console.log("Error on write: ", err.message);
                };
            });
        }
    }

    return (
        <button
            id={"power-button"}
            className="btn btn-circle"
            onClick={toggleLED}
        >
            <i className="fas fa-power-off text-inset"></i>
        </button>
    )
}
export default PowerButton;
