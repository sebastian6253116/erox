import React, { useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const translations = {
  es: {
    product: 'Producto',
    features: 'Características',
    clients: 'Clientes',
    title: 'Potente. Fácil. Rentable.',
    subtitle:
      'Erox mejora la experiencia para tus usuarios y aumenta las ventas de tu negocio online.',
    cta: 'DESCUBRE CÓMO',
    ourProducts: 'Nuestros Productos',
    modalTitle: 'Solicitar más información',
    nameLabel: 'Nombre y Apellido',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono',
    countryLabel: 'País',
    stateLabel: 'Estado',
    submitButton: 'Enviar',
    closeModal: 'Cerrar',
    learnMore: 'Aprende más',
    characteristics: 'Características',
  },
  en: {
    product: 'Product',
    features: 'Features',
    clients: 'Clients',
    title: 'Powerful. Easy. Profitable.',
    subtitle:
      'Erox improves the experience for your users and increases sales for your online business.',
    cta: 'DISCOVER HOW',
    ourProducts: 'Our Products',
    modalTitle: 'Request more information',
    nameLabel: 'Name and Surname',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    countryLabel: 'Country',
    stateLabel: 'State',
    submitButton: 'Submit',
    closeModal: 'Close',
    learnMore: 'Learn more',
    characteristics: 'Characteristics',
  },
};

const products = [
  { 
    color: 'from-green-400 to-yellow-400', 
    name: 'EROX Verde',
    description: 'Diseñado para maximizar el placer con su textura acanalada.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80'
  },
  { 
    color: 'from-gray-200 to-gray-400', 
    name: 'EROX Blanco',
    description: 'Experiencia clásica con la máxima protección y comodidad.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80'
  },
  { 
    color: 'from-pink-400 to-purple-500', 
    name: 'EROX Rosa',
    description: 'Sabor y aroma a fresa para una experiencia más placentera.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80'
  },
  { 
    color: 'from-blue-300 to-green-300', 
    name: 'EROX Turquesa',
    description: 'Ultra delgado para una sensación natural con máxima sensibilidad.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80'
  },
  { 
    color: 'from-blue-400 to-blue-600', 
    name: 'EROX Azul',
    description: 'Con lubricante extra para una experiencia más suave y placentera.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80'
  },
];

function App() {
  const [lang, setLang] = useState('es');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
  });
  const t = translations[lang as keyof typeof translations];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    setIsModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#4A3A7A] text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold">EROX</div>
        <nav className="hidden md:flex space-x-6">
          <div className="flex items-center">
            {t.product} <ChevronDown className="ml-1 w-4 h-4" />
          </div>
          <a href="#features">{t.features}</a>
          <a href="#clients">{t.clients}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5" />
          <div className="relative">
            <select
              className="bg-[#4A3A7A] text-white border border-white rounded px-2 py-1 pr-8 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t.subtitle}</p>
        <button 
          className="bg-[#8A7AB0] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#7A6A9F] transition duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          {t.cta}
        </button>
      </main>

      {/* Raya amarilla */}
      <div className="relative">
        <div className="bg-[#FFD700] h-20 transform -skew-y-3 origin-left"></div>
      </div>

      <section className="py-20 bg-[#4A3A7A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.ourProducts}
          </h2>
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <div
                  className={`bg-gradient-to-br ${product.color} rounded-lg shadow-lg p-6 h-64 flex flex-col justify-between transform transition duration-500 hover:scale-105`}
                >
                  <div className="text-2xl font-bold text-white">EROX</div>
                  <div className="text-lg font-semibold text-white">
                    {product.name}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Características */}
      <section id="features" className="py-20 bg-[#4A3A7A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.characteristics}
          </h2>
          {products.map((product, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-full h-auto" />
              </div>
              <div className="md:w-1/2 md:px-8">
                <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                <p className="text-xl mb-6">{product.description}</p>
                <button className="bg-[#8A7AB0] text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-[#7A6A9F] transition duration-300">
                  {t.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-[#4A3A7A] rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{t.modalTitle}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  {t.countryLabel}
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select a country</option>
                  <option value="ES">Spain</option>
                  <option value="US">United States</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  {t.stateLabel}
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t.closeModal}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8A7AB0] hover:bg-[#7A6A9F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t.submitButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;