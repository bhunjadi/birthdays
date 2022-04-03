import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonList from './person-list/PersonList';
import PersonPage from './person-page/PersonPage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <h1>Chalkboard Birthdays App Challenge</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<PersonList />} />
                        <Route path="/profile" element={<PersonPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
