import { BrowserRouter, Routes, Route } from "react-router";
import Form from '@components/Form';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="*" element={<h1>Not found 404</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;