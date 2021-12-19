import React from 'react';
import {Link} from "gatsby";

const Footer = () => {
    return (
        <div className="bg-footer">
            <div className="max-w-screen-xl mx-auto px-6 py-8 text-white grid gap-4 sm:grid-cols-2-auto md:grid-cols-4-auto">
                <Link className="self-center font-bold text-xl" to="/">BEERSHOP</Link>
                <div className="grid gap-2">
                    <h3 className="mb-4 font-bold">Navigation</h3>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <div className="grid">
                    <h3 className="mb-4 font-bold">Address</h3>
                    <p>Jever St, Manchester</p>
                    <p>Bubun St, London</p>
                </div>
                <div className="grid">
                    <h3 className="mb-4 font-bold">Contacts</h3>
                    <p>nikita.chernega1@gmail.com</p>
                    <a href="https://github.com/Nikitachr">https://github.com/Nikitachr</a>
                    <a href="https://www.linkedin.com/in/nikita-chernega-225394210">https://www.linkedin.com/in/nikita-chernega-225394210</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
