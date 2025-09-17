import React from 'react';
import { Heart, Users, Target, Globe, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Make It Mumkin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Making compassion actionable, one life at a time
            </p>
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-lg">
              <span>📍 Based in Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission is Simple Yet Powerful
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a non-profit organization committed to creating meaningful change in the lives of the voiceless and vulnerable. Founded with deep compassion for animals and a firm belief in community empowerment, we focus primarily on the <span className="font-semibold text-blue-600">rescue, rehabilitation, and welfare of street animals</span>, while also engaging in broader humanitarian efforts.
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">To Make Compassion Actionable</h3>
              <p className="text-lg opacity-95">
                From feeding and medical care for stray and injured animals to awareness drives and adoption initiatives, our work aims to build a kinder, more responsible society one act at a time.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl h-96 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🐕</div>
                <p className="text-xl font-semibold">Rescue & Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-red-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">Every action rooted in empathy and love for all living beings</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Building networks of caring individuals working together</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Action</h3>
            <p className="text-gray-600">Turning compassion into concrete, meaningful change</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-gradient-to-br from-purple-400 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
            <p className="text-gray-600">Creating lasting change in communities and beyond</p>
          </div>
        </div>

        {/* Founder's Story Section */}
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="relative">
            <div className="flex items-center mb-6">
              <Sparkles className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "Make It Mumkin was born out of a personal journey — a moment when turning away from suffering was not an option. What began as a few individual rescue efforts has grown into a collective movement of kindness."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Make It Mumkin, we believe that <span className="font-semibold text-orange-600">change begins at the grassroots</span>. Our work extends beyond animal welfare into areas like education, environmental awareness, and social development — empowering individuals and communities to come together for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl h-96 flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-xl font-semibold">Building Tomorrow</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision for the Future</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our long-term vision is to build a sustainable ecosystem where both animals and humans can thrive — with dedicated shelters, mobile clinics, community learning centers, and an ever-growing network of compassionate citizens.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-lg text-gray-700">Dedicated animal shelters and rescue centers</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-lg text-gray-700">Mobile veterinary clinics for remote areas</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-lg text-gray-700">Community education and awareness programs</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-lg text-gray-700">Network of compassionate volunteer citizens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Approach & Values */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dignity</h3>
              <p className="text-gray-600">Treating every being with respect and honor</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusiveness</h3>
              <p className="text-gray-600">Welcoming all who share our vision of compassion</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">Building solutions that last for generations</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-gray-700 italic">
              "We believe in working at the intersection of empathy and action. Every initiative we take is rooted in dignity, inclusiveness, and sustainability."
            </p>
          </div>
        </div>

        {/* Volunteers Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white mb-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full opacity-10 transform -translate-x-48 translate-y-48"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Amazing Volunteers</h2>
            <p className="text-xl mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              Our strength lies in the hands of our volunteers — students, working professionals, and local citizens — who give their time and heart to serve the voiceless and uplift those in need.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-3">👨‍🎓</div>
                <h3 className="text-xl font-semibold mb-2">Students</h3>
                <p className="opacity-90">Young minds bringing fresh energy and ideas</p>
              </div>
              <div>
                <div className="text-5xl mb-3">👩‍💼</div>
                <h3 className="text-xl font-semibold mb-2">Professionals</h3>
                <p className="opacity-90">Experienced individuals sharing their skills</p>
              </div>
              <div>
                <div className="text-5xl mb-3">👥</div>
                <h3 className="text-xl font-semibold mb-2">Citizens</h3>
                <p className="opacity-90">Community members making local impact</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hindi Quote Section */}
        <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 mb-20 border border-orange-100">
          <div className="text-4xl mb-6">🙏</div>
          <h2 className="text-3xl font-bold text-orange-800 mb-4">जहाँ करुणा है, वहाँ बदलाव है।</h2>
          <p className="text-2xl text-orange-700 mb-6">हमारा प्रयास है हर असंभव को मुमकिन बनाना।</p>
          <p className="text-xl text-gray-600 italic">
            "Where there is compassion, there is change. Our mission is to make the impossible, possible."
          </p>
        </div>

        {/* Final Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-3xl"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">We Are Not Just an Organization</h2>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              We are a <span className="text-yellow-300 font-semibold">movement</span>. A movement that believes compassion is not just a feeling, but a force.
            </p>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
              Whether it's rescuing an abandoned animal, mentoring a child, or cleaning a street corner, we act with the belief that every small effort adds up.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span>Because when hearts come together, even the impossible becomes...</span>
              <span className="ml-2 text-2xl">✨ Mumkin ✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}