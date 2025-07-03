import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from '@layouts/HomeLayout';
import Home from '@pages/Home';
import Cadastro from '@pages/Cadastro';
import CadastroVaga from '@pages/CadastroVaga';
import Login from '@pages/login';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/cadastro-vaga' element={<CadastroVaga />} />
                    <Route path='/cadastro-vaga/:cargoID' element={<CadastroVaga />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/login' element={<Login />} />
                </Route>
                <Route path="*" element={<h1>Not found 404</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
