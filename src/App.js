import React, { useState } from 'react';
import { 
  User, 
  MessageCircle, 
  Upload, 
  Search, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  TrendingUp, 
  Award,
  ChevronRight,
  X,
  Send,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Home,
  UserCheck,
  Brain
} from 'lucide-react';

const RecruitmentPlatform = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I am your AI recruitment assistant. How can I help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleLogin = (email, password) => {
    if (email && password) {
      setCurrentUser({
        name: 'Alex Johnson',
        email: email,
        role: 'HR Manager',
        company: 'TechCorp Solutions'
      });
      setShowLogin(false);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { type: 'user', message: newMessage }]);
      
      setTimeout(() => {
        const botResponses = [
          'I can help you with resume screening and candidate ranking.',
          'Would you like me to analyze the latest batch of resumes?',
          'I can provide insights on candidate skills matching.',
          'Let me know if you need help with automated notifications.'
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
      }, 1000);
      
      setNewMessage('');
    }
  };

  // Login Modal Component
  const LoginModal = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {isSignup ? 'Sign Up' : 'Sign In'}
            </h2>
            <button onClick={() => setShowLogin(false)} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <button
            onClick={() => handleLogin(email, password)}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            {isSignup ? 'Create Account' : 'Sign In'}
          </button>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              {isSignup ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Chatbot Component
  const Chatbot = () => (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-40">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl flex justify-between items-center">
        <h3 className="font-semibold">AI Assistant</h3>
        <button onClick={() => setShowChatbot(false)}>
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${
              msg.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Candidates</p>
              <p className="text-2xl font-bold text-gray-800">1,234</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-800">42</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Shortlisted</p>
              <p className="text-2xl font-bold text-gray-800">89</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <UserCheck className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Match Rate</p>
              <p className="text-2xl font-bold text-gray-800">87%</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Award className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">New resume uploaded</p>
                <p className="text-sm text-gray-600">John Smith</p>
              </div>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Interview scheduled</p>
                <p className="text-sm text-gray-600">Sarah Johnson</p>
              </div>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Candidate shortlisted</p>
                <p className="text-sm text-gray-600">Mike Chen</p>
              </div>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Skills</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">React.js</span>
                <span className="text-sm text-gray-500">45 positions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">Python</span>
                <span className="text-sm text-gray-500">38 positions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">AWS</span>
                <span className="text-sm text-gray-500">32 positions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Resume Ranking Component
  const ResumeRanking = () => {
    const resumes = [
      { id: 1, name: 'John Smith', position: 'Software Engineer', score: 95, status: 'shortlisted', skills: ['React', 'Node.js', 'Python'], experience: '5 years' },
      { id: 2, name: 'Sarah Johnson', position: 'Data Scientist', score: 88, status: 'pending', skills: ['Python', 'ML', 'SQL'], experience: '3 years' },
      { id: 3, name: 'Mike Chen', position: 'DevOps Engineer', score: 92, status: 'interviewed', skills: ['AWS', 'Docker', 'K8s'], experience: '4 years' },
      { id: 4, name: 'Emily Davis', position: 'UX Designer', score: 85, status: 'pending', skills: ['Figma', 'Adobe XD'], experience: '3 years' }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Resume Ranking</h2>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2">
              <Upload size={16} />
              Upload Resume
            </button>
          </div>

          <div className="mb-4 flex gap-4">
            <input
              type="text"
              placeholder="Search candidates..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              <Search size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Candidate</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Position</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Score</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Skills</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Experience</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {resumes.map((resume) => (
                  <tr key={resume.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {resume.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-gray-800">{resume.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">{resume.position}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                            style={{ width: `${resume.score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{resume.score}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex flex-wrap gap-1">
                        {resume.skills.slice(0, 2).map((skill, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                        {resume.skills.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{resume.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">{resume.experience}</td>
                    <td className="py-4 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resume.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                        resume.status === 'interviewed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {resume.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Landing Page (when not logged in)
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="text-white" size={20} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">RecruitAI</h1>
                  <p className="text-sm text-gray-500">Smart Recruitment</p>
                </div>
              </div>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
              >
                Sign In
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Recruitment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your hiring process with intelligent resume ranking, automated matching, 
              and AI-driven candidate insights.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center gap-2"
              >
                Get Started
                <ChevronRight size={20} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Resume Ranking</h3>
              <p className="text-gray-600">Intelligent algorithms rank candidates based on skills and experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Chatbot</h3>
              <p className="text-gray-600">Get instant answers and insights about candidates and recruitment.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">Track hiring metrics and recruitment performance in real-time.</p>
            </div>
          </div>
        </div>

        {showLogin && <LoginModal />}
      </div>
    );
  }

  // Main Dashboard (when logged in)
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="bg-white h-screen shadow-lg border-r border-gray-200 w-64 fixed">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">RecruitAI</h1>
              <p className="text-xs text-gray-500">Smart Recruitment</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home size={18} />
              Dashboard
            </button>
            
            <button
              onClick={() => setActiveTab('ranking')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'ranking' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 size={18} />
              Resume Ranking
            </button>
            
            <button
              onClick={() => setActiveTab('candidates')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'candidates' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users size={18} />
              Candidates
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              {currentUser.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-medium text-gray-800 text-sm">{currentUser.name}</p>
              <p className="text-xs text-gray-500">{currentUser.role}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentUser(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
            <button
              onClick={() => setShowChatbot(!showChatbot)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <MessageCircle size={20} />
            </button>
          </div>
        </header>

        <main className="p-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'ranking' && <ResumeRanking />}
          {activeTab === 'candidates' && <ResumeRanking />}
        </main>
      </div>

      {showChatbot && <Chatbot />}
    </div>
  );
};

export default RecruitmentPlatform;