import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Layout from "../layout/Layout";

function ContactPage() {
    return (
        <Layout>
            <div className="max-w-screen-2xl mx-auto">
                <div className="">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">Kontak Kami</h1>
                        <p className="text-gray-600 mt-2 max-w-[700px] mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae
                            nisi porta, eget molestie dui ornare. Suspendisse quis ipsum non orci condimentum.
                        </p>
                    </div>
                    <div className="bg-gray-100 w-full left-0 h-[1000px] absolute z-[-100]">
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div className="p-8  rounded-lg">
                            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae
                                nisi porta, eget molestie dui ornare.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-black mr-3" />
                                    <p>Jl. Haji Makmur, Rt 11, Rw 08, Bekasi, Jawa Barat</p>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-black mr-3" />
                                    <p>1082525677</p>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-black mr-3" />
                                    <p>sewapestakaita@gmail.com</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold">Follow Us:</h3>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#instagram" className="text-gray-600 hover:text-black">
                                        <FiInstagram size={24} />
                                    </a>
                                    <a href="#facebook" className="text-gray-600 hover:text-black">
                                        <FiFacebook size={24} />
                                    </a>
                                    <a href="#twitter" className="text-gray-600 hover:text-black">
                                        <FiTwitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 shadow-lg rounded-lg">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        aria-label="Name"
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        E-Mail address
                                    </label>
                                    <input
                                        id="email"
                                        aria-label="Email"
                                        type="email"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        aria-label="Message"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Your Message"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        type="reset"
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Restore
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="my-12 ">
                        <MapContainer center={[-6.241286, 107.011891]} zoom={13} scrollWheelZoom={false} className="h-[400px] w-full rounded-xl shadow-lg">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[-6.241286, 107.011891]}>
                                <Popup>Jl. Haji Makmur, Rt 11, Rw 08, Bekasi, Jawa Barat</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;
