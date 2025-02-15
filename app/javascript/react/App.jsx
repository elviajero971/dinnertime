import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/list/RecipesList';
import RecipeDetails from './components/details/RecipeDetails';

const App = () => {
    return (
        <div className="text-center min-h-screen flex flex-col items-center justify-start box-border bg-white mx-5 mb-5">
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
