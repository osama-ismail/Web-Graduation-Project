import background from "../../assets/images/background.jpg";
import Form from "./form/Form.jsx";


const backgroundStyle = {
    backgroundImage: `url(${background})`,
    minHeight: "46.875rem",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}


const Background = () => {
    return (
        <div style={backgroundStyle}>
            <Form />
        </div>
    )
}

export default Background
