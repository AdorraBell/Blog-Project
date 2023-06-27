import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "shared/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";



const App = () => {

    const {theme, toggleTheme} = useTheme();

    return ( 
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <div>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
}
 
export default App;