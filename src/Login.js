import { useState } from "react";
import OtpField from "./OtpField";

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);

    const handlePhoneSubmit = (e) => {
        e.preventDefault();

        // Number validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone number!");
            return;
        }

        // Show OTP field
        setShowOtpField(true);

    };

    const onOtpSubmit = (otp) => {
        console.log(`Login successfull ${otp}`);
    };

    return (
        <div className="login-container">
            <h1 className="title">User Login</h1>

            {
            !showOtpField ? 

            <div>
                <h2>Enter your Phone number</h2>
                <form className="flex" onSubmit={handlePhoneSubmit}>
                    <input type="text" placeholder="Enter Phone number.." value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    <button>Get OTP</button>
                </form>
            </div>
            
            : 
            
            <div>
                <h2>Enter OTP sent to {phoneNumber}</h2>
                {/* Import OTP field component */}
                <OtpField length={4} onOtpSubmit={onOtpSubmit} />
            </div>
            }
        </div>
    );
}
 
export default LoginForm;