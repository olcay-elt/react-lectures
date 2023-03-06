import ButonSSS from "./styles/ButonSSS";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";

const Header = () => {
    return (
        <div>
            <DisplaySSS>
                <LogoSSS src="./images/logo.png"></LogoSSS>

                <div>
                    <ButonSSS colorOlcay="#A62440">Apply Courses</ButonSSS>
                    <ButonSSS bgAdem="#A62440">Talk to Adviser</ButonSSS>
                </div>
            </DisplaySSS>
            <hr />
            <DisplaySSS>
                <div>
                    <h1>The IT Career of Your Dreams Starts Here!</h1>
                    <p>
                        Clarusway is a leading international software Bootcamp. Join a micro
                        class online with other trainees and learn coding skills with a
                        highly-skilled instructor.
                    </p>
                    <ButonSSS bgAdem="#A62440">Start Your New Carrier</ButonSSS>
                </div>

                <ImageSSS src="./images/hero.jpg"></ImageSSS>
            </DisplaySSS>
        </div>
    );
};

export default Header;
