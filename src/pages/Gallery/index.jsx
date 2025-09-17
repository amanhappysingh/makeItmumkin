import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Eye, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

// Sample data - replace with your actual data
const galleryData = [
  {
    id: 1,
    title: "Annual Tech Summit 2024",
    details: "A comprehensive technology conference bringing together industry leaders, innovators, and emerging talent to discuss the future of digital transformation.",
    date: "2024-03-15",
    event: "conferences",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', alt: 'Conference opening ceremony' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop', alt: 'Panel discussion' },
      { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop', alt: 'Summit highlights' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop', alt: 'Networking session' }
    ]
  },
  {
    id: 2,
    title: "Community Outreach Program",
    details: "Our quarterly community engagement initiative focused on education support, healthcare awareness, and sustainable development in underserved areas.",
    date: "2024-02-20",
    event: "outreach",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop', alt: 'Community gathering' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop', alt: 'Educational workshop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop', alt: 'Healthcare screening' }
    ]
  },
  {
    id: 3,
    title: "Environmental Conservation Workshop",
    details: "Interactive workshop series on sustainable practices, waste management, and environmental protection strategies for local communities and businesses.",
    date: "2024-01-10",
    event: "workshops",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop', alt: 'Tree planting activity' },
      { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', alt: 'Workshop presentation' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&h=600&fit=crop', alt: 'Recycling demonstration' }
    ]
  },
  {
    id: 4,
    title: "Innovation Awards Ceremony 2024",
    details: "Annual recognition ceremony celebrating breakthrough innovations, outstanding achievements, and contributions to technological advancement in our sector.",
    date: "2024-04-05",
    event: "ceremonies",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop', alt: 'Awards ceremony' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop', alt: 'Award presentation' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop', alt: 'Winners celebration' }
    ]
  },
  {
    id: 5,
    title: "Skills Development Training",
    details: "Comprehensive training program designed to enhance professional skills, digital literacy, and career development opportunities for participants.",
    date: "2024-03-28",
    event: "training",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', alt: 'Training session' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', alt: 'Group activity' },
      { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', alt: 'Practical demonstration' }
    ]
  },
  {
    id: 6,
    title: "Digital Transformation Summit",
    details: "Strategic summit focusing on digital innovation, emerging technologies, and their impact on business operations and social development.",
    date: "2024-05-12",
    event: "conferences",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop', alt: 'Summit keynote' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop', alt: 'Technology showcase' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop', alt: 'Interactive demo' }
    ]
  }
];

const eventOptions = [
  { value: 'all', label: 'All Events' },
  { value: 'conferences', label: 'Conferences' },
  { value: 'workshops', label: 'Workshops' },
  { value: 'outreach', label: 'Community Outreach' },
  { value: 'training', label: 'Training Programs' },
  { value: 'ceremonies', label: 'Ceremonies' }
];

const GalleryCard = ({ item, onSeeMore, index }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === item.media.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? item.media.length - 1 : prev - 1
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Dynamic sizing and positioning based on index
  const getCardClasses = (index) => {
    const patterns = [
      'row-span-1', // Normal height
      'row-span-2', // Tall
      'row-span-1', // Normal
      'row-span-2', // Tall
      'row-span-1', // Normal
      'row-span-1', // Normal
    ];
    
    const sizePattern = patterns[index % patterns.length];
    const animationDelay = `${(index % 6) * 100}ms`;
    
    return {
      className: `bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] ${sizePattern}`,
      style: { 
        animationDelay,
        animation: `fadeInUp 0.6s ease-out ${animationDelay} both`
      }
    };
  };

  const cardProps = getCardClasses(index);

  return (
    <div className={cardProps.className} style={cardProps.style}>
      {/* Media Carousel with Dynamic Height */}
      <div className={`relative bg-gray-100 overflow-hidden ${
        index % 6 === 1 || index % 6 === 3 ? 'h-80' : 'h-48'
      }`}>
        {item.media.length > 0 && (
          <>
            {item.media[currentMediaIndex].type === 'image' ? (
              <img
                src={item.media[currentMediaIndex].url}
                alt={item.media[currentMediaIndex].alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={item.media[currentMediaIndex].thumbnail}
                  alt={item.media[currentMediaIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Play className="w-12 h-12 text-white" fill="currentColor" />
                </div>
              </div>
            )}
            
            {/* Navigation arrows */}
            {item.media.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
            
            {/* Media indicators */}
            {item.media.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {item.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentMediaIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Content with Dynamic Padding */}
      <div className={`p-6 ${
        index % 6 === 1 || index % 6 === 3 ? 'flex flex-col justify-between h-full' : ''
      }`}>
        <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
          index % 6 === 1 || index % 6 === 3 ? 'text-2xl' : 'text-xl'
        }`}>
          {item.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {formatDate(item.date)}
        </div>
        
        <p className={`text-gray-700 leading-relaxed mb-4 ${
          index % 6 === 1 || index % 6 === 3 ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
        }`}>
          {item.details}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {item.media.length} {item.media.length === 1 ? 'item' : 'items'}
          </span>
          
          <button
            onClick={() => onSeeMore(item)}
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              index % 6 === 1 || index % 6 === 3 ? 'text-base px-8 py-4' : 'text-sm'
            }`}
          >
            <Eye className="w-4 h-4 mr-2" />
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

const MediaModal = ({ item, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!isOpen || !item) return null;

  const nextMedia = () => {
    setCurrentIndex((prev) => 
      prev === item?.media.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevMedia = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? item?.media.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Media content */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative h-96">
            {item.media[currentIndex].type === 'image' ? (
              <img
                src={item.media[currentIndex].url}
                alt={item.media[currentIndex].alt}
                className="w-full h-full object-contain bg-gray-100"
              />
            ) : (
              <video
                src={item.media[currentIndex].url}
                controls
                className="w-full h-full object-contain bg-gray-100"
              />
            )}
            
            {/* Navigation arrows */}
            {item.media.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Content details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <p className="text-gray-700 leading-relaxed">{item.details}</p>
            
            {/* Thumbnail navigation */}
            {item.media.length > 1 && (
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {item.media.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={media.type === 'image' ? media.url : media.thumbnail}
                      alt={media.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedEvent === 'all') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(galleryData.filter(item => item.event === selectedEvent));
    }
  }, [selectedEvent]);

  const handleSeeMore = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const selectedEventLabel = eventOptions.find(option => option.value === selectedEvent)?.label || 'All Events';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <div className="text-center mb-12 floating">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Event Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of events, workshops, and community initiatives through our comprehensive gallery
          </p>
        </div>

        {/* Filter Dropdown with Enhanced Styling */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue-200 rounded-2xl shadow-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-3">🎯</span>
              {selectedEventLabel}
              <ChevronDown className={`ml-3 h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-20 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                {eventOptions.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedEvent(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-4 text-left text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200 transform hover:scale-[1.02] ${
                      selectedEvent === option.value 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 font-semibold border-l-4 border-blue-500' 
                        : 'text-gray-700'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results count with Enhanced Styling */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
            <p className="text-gray-700 font-medium">
              <span className="text-2xl font-bold text-blue-600">{filteredItems?.length}</span>{' '}
              <span className="text-gray-600">
                {filteredItems?.length === 1 ? 'event' : 'events'}
                {selectedEvent !== 'all' && ` in ${selectedEventLabel}`}
              </span>
            </p>
          </div>
        </div>

        {/* Gallery Grid with Dynamic Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 auto-rows-min" 
             style={{ gridAutoRows: 'minmax(200px, auto)' }}>
          {filteredItems?.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onSeeMore={handleSeeMore}
            />
          ))}
        </div>

        {/* Empty state with Enhanced Styling */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 mx-auto max-w-md shadow-xl">
              <div className="text-gray-300 mb-6 floating">
                <Calendar className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No events found</h3>
              <p className="text-gray-600 leading-relaxed">
                Try selecting a different event category or check back later for new content.
              </p>
              <button 
                onClick={() => setSelectedEvent('all')}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Show All Events
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <MediaModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default EventGallery;