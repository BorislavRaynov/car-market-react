import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-b border-blue-gray-50 py-6 text-center text-bold">
            <Link 
                to={'https://github.com/BorislavRaynov'}
                target="_blank"
                className="underline"    
            >
                ©Borislav Raynov 2024. All rights reserved.
            </Link>
        </footer>
    );
}