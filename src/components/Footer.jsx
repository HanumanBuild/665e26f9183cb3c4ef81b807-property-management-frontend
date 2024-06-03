
// Footer.jsx
// A simple footer component that displays copyright and contact information. It's a shared component used across all pages to provide consistent footer details.

import React from 'react';
import { Label } from "@/components/ui/label";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <Label htmlFor="footerText" className="hidden">Footer Information</Label>
                <p id="footerText" className="text-sm">
                    © {new Date().getFullYear()} Property Management, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
