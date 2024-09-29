import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Layout from "../layout/Layout";

function ContactPage() {
    return (
        <Layout>
            <div className="relative max-w-screen-2xl mx-auto px-8 py-12 overflow-hidden">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold">Kontak Kami</h1>
                    <div className="mx-auto w-[150px] border-b-4 border-black"></div>
                    <p className="text-gray-600 mt-2 max-w-[700px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisi porta, eget molestie dui ornare. Suspendisse quis ipsum non orci condimentum.
                    </p>
                </div>

                <div className="bg-gray-100 w-full h-[3000px] absolute -mt-8 left-0 z-[-1]"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisi porta, eget molestie dui ornare.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="p-4 bg-black rounded-full mr-4">
                                    <FaMapMarkerAlt className="text-white text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">Alamat</p>
                                    <p>Jl. Haji Makmur, Rt 11, Rw 08, Bekasi, Jawa Barat</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="p-4 bg-black rounded-full mr-4">
                                    <FaPhone className="text-white text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">Telp</p>
                                    <p>1082525677</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="p-4 bg-black rounded-full mr-4">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">E-Mail</p>
                                    <p>sewapestakaita@gmail.com</p>
                                </div>
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

                    <div className="p-8 bg-white shadow-lg rounded-lg">
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
                                    className="border-b border-black w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2 focus:border-black"
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
                                    className="border-b border-black w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2 focus:border-black"
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
                                    className="border-b border-black w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2 focus:border-black"
                                    placeholder="Your Message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero qui enim pariatur, dolores facilis aspernatur numquam voluptatibus dolor quae ipsum consequatur esse at iure alias nulla deleniti ducimus ea.</p>
                            <div className="flex justify-end">
                                <button
                                    type="reset"
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4"
                                >
                                    Restore
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="my-12">
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
        </Layout>
    );
}

export default ContactPage;
