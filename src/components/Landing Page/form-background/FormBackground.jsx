import background from "../../../assets/images/background.jpg";
import Form from "../form/Form";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    minHeight: "46.875rem",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRadius: "50%",
    margin: "4em 0",
}

const FormBackground = ({ appearMapForm }) => {
    return (
        <div id="FormBackgroundElement" style={backgroundStyle}>
            <Form appearMapForm={appearMapForm} />
        </div>
    )
}

export default FormBackground;