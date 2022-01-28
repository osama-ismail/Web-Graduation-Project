import background from "../../assets/images/background.jpg";
import Form from "../form/Form";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    minHeight: "46.875rem",
    width: "90%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRadius: "50%",
    margin: "4em 2em 0 4em",
}

const FormBackground = () => {
    return (
        <div style={backgroundStyle}>
            <Form />
        </div>
    )
}

export default FormBackground;