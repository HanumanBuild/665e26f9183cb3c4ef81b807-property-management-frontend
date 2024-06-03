
// Home.jsx
// This is the main landing page of the application where users can view the list of available properties. It utilizes the PropertyList component to display all the properties. The page exists to provide a user-friendly interface for potential renters or buyers to browse through property listings.

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-6">Available Properties</h1>
                    <PropertyList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
