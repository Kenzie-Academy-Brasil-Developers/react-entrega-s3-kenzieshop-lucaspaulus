import GlobalStyle from "./style/global.js"
import Routes from "./Routes/index.js";
import Header from "./components/Header"
function App() {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Routes/>

        </>
    );
}

export default App;
