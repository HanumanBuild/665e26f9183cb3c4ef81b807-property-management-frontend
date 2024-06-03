
// Header.jsx
// This component acts as the navigation header for the website. It displays the site's title and can potentially include navigation links if the site expands. 
// It's used across all pages for consistent branding and navigation.

import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-Menu";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Property Management</h1>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink href="#">Home</NavigationMenuLink>
                                <NavigationMenuLink href="#">About Us</NavigationMenuLink>
                                <NavigationMenuLink href="#">Properties</NavigationMenuLink>
                                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Header;
