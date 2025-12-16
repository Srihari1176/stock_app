import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* Brand Section */}
                    <div className="max-w-xl">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://i.ibb.co/r28VWPjS/Screenshot-2025-10-04-123317-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                                alt="MarketForge"
                                width={150}
                                height={38}
                                className="brightness-0 invert"
                            />
                        </Link>

                        <p className="text-gray-400 mb-8">
                            MarketForge is an independent stock tracking platform built for clarity and speed.
                            Real-time prices, alerts, and company data without noise, paywalls, or unnecessary complexity.
                            Designed, built, and maintained as a focused solo project.
                        </p>

                        <div className="flex space-x-6">
                            <Link
                                href="https://github.com/YOUR_GITHUB_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                            >
                                <span className="relative">
                                    GitHub
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 relative group"
                            >
                                <span className="relative">
                                    LinkedIn
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-10 pt-6">
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} MarketForge.

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
