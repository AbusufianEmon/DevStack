import React from 'react';
import Logo from "../assets/logo-text.png";
import { Copyright } from 'lucide-react';

const Footer = () => {
    return (

        

        <div className="mb-20 mt-10">
            <hr className="border-t border-gray-300 mt-20 mb-10" />
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-8 justify-between items-center">
                    <div>
                        <img src={Logo} alt="Logo" className="h-8 w-auto" />
                        <p className="text-gray-600 text-sm mt-2">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex text-sm font-bold gap-4 mt-4">
                            <a href="https://github.com/AbusufianEmon" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:text-pink-500">
                                Github
                            </a>
                            <a href="https://x.com/AbuSufianemon" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:text-pink-500">
                                Twitter
                            </a>
                            <a href="https://www.linkedin.com/in/abu-sufian-emon" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer hover:text-pink-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-bold text-gray-900">Product</h2>
                        <p className="text-xs text-gray-600">Home</p>
                        <p className="text-xs text-gray-600">Technologies</p>
                        <p className="text-xs text-gray-600">Projects</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-bold text-gray-900">Company</h2>
                        <p className="text-xs text-gray-600">About</p>
                        <p className="text-xs text-gray-600">Contact</p>
                        <p className="text-xs text-gray-600">Careers</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-bold text-gray-900">Legal</h2>
                        <p className="text-xs text-gray-600">Privacy Policy</p>
                        <p className="text-xs text-gray-600">Terms of Service</p>
                    </div>
                </div>

                <hr className="border-t border-gray-300 mt-10 mb-10" />
                
                <div className="flex justify-between items-center">
                    <p className="text-[10px] text-gray-600">
                        <Copyright className="inline-block mr-2 h-4 w-4 object-contain"/> 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] text-gray-600">
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;