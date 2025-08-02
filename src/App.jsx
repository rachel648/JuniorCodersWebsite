import  { Code, Users, Star, Award, Calendar, MapPin, Phone, Mail, CheckCircle, Play, Book, Coffee } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">Junior Coders</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#classes" className="text-gray-600 hover:text-blue-600">Classes</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          <a href="https://wa.me/254741701905" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            Enroll Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let Your Child Learn to Code!
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Weekend Coding Classes for Kids (HTML, CSS & JavaScript) — Fun, Safe, and Future-Ready.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/254741701905" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-semibold">
                  Enroll Now
                </a>
                <a href="https://wa.me/254741701905" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold">
                  Free Trial Class
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBjb2RpbmclMjBjb21wdXRlcnMlMjBwcm9ncmFtbWluZyUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDB8fHx8MTc1MzE3Njg5N3ww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=1200"
                alt="Child learning coding"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Coding */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Coding for Kids?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-gray-800">Future Skill</h4>
              <p className="text-gray-600">Coding is the new literacy</p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-gray-800">Problem Solving</h4>
              <p className="text-gray-600">Boosts creativity and logic</p>
            </div>
            <div className="text-center">
              <Play className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-gray-800">Fun Projects</h4>
              <p className="text-gray-600">Kids build real websites!</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 text-gray-800">Certificate Awarded</h4>
              <p className="text-gray-600">Motivation & recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="classes" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxraWRzJTIwbGVhcm5pbmclMjBjb2RpbmclMjBjb21wdXRlcnMlMjBwcm9ncmFtbWluZyUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tfGVufDB8fHx8MTc1MzE3Njg5N3ww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=1200"
                alt="Students in computer lab"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Weekend Classes</h4>
                  <p className="text-gray-600">Saturdays & Sundays</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-green-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Small Groups</h4>
                  <p className="text-gray-600">5-10 kids per class</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Coffee className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Duration</h4>
                  <p className="text-gray-600">2 hours per lesson</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-purple-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Community Center</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <p className="text-blue-800 font-semibold">Weekend Classes: From Ksh 1,500 per weekend</p>
                <p className="text-blue-800 font-semibold">Individual Home Tutoring: From Ksh 1,000 per lesson</p>
                <p className="text-blue-800 font-semibold">School Programs (Weekdays): Negotiable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What They Learn */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What Your Child Will Learn</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">How to build a web page (HTML)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Make it look amazing (CSS)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Add interactivity (JavaScript)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Create a portfolio project</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Receive a certificate of completion</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Build confidence in technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What Parents & Kids Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "My son now builds his own websites at 13. So proud of his progress!"
              </p>
              <p className="text-sm text-gray-500">— Mrs. Mary</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "These classes are fun and exciting! I love coding and can't wait for weekends!"
              </p>
              <p className="text-sm text-gray-500">— Brian, 11 years old</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Enroll?</h3>
          <p className="text-xl mb-8 text-blue-100">Limited slots available per weekend group</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/254741701905" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-semibold">
              Enroll Now
            </a>
            <a href="https://wa.me/254712671172" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold">
              Talk to Instructor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Junior Coders</h4>
              </div>
              <p className="text-gray-400">Empowering the next generation with coding skills</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>0741701905 / 0712671172</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@juniorcoders.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Community Center</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#about" className="block hover:text-white">About Us</a>
                <a href="#classes" className="block hover:text-white">Classes</a>
                <a href="#contact" className="block hover:text-white">Contact</a>
                <a href="https://wa.me/254741701905" target="_blank" rel="noopener noreferrer" className="block hover:text-white">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Junior Coders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
 