import { useEffect, useRef, useState } from "react";

const OtpField = ({ length = 4, onOtpSubmit = () => {} }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    console.log(inputRefs);


    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);


    const handleOtpChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];

        // allowing only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Go to next field when current field is filled
        if (value && index+1 < length && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        // trigger otp submit
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }
    };

    const handleOtpClick = (index) => {
        // Move cursor to appear after number in a field
        inputRefs.current[index].setSelectionRange(1, 1);
    };

    const handleOtpKeyDown = (index, e) => {
        // Move focus to previous field on backspace
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="otp-field flex">
            
            {
                otp.map((value, index) => {
                    return <input
                        key={index}
                        ref={(input) => (inputRefs.current[index] = input)}
                        type="text" 
                        value={value}
                        onChange={(e) => handleOtpChange(index, e)}
                        onClick={() => handleOtpClick(index)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="otp-input"
                    />;
                })
            }

        </div>
    );
}
 
export default OtpField;