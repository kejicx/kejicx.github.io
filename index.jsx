import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'works', label: '作品' },
    { id: 'contact', label: '联系我们' },
    { id: 'collaboration', label: '合作' },
    { id: 'announcements', label: '公告' }
  ];

  const scratchWorks = [
    '缤纷绘画', 'Copilot 模拟', '共创 AI', 'Windows 模拟'
  ];
  
  const articles = [
    '没用的教程', '无聊的科普', '小众的神器应用分享'
  ];
  
  const extensions = [
    '高级交互弹窗', '语音转文字', '在线播放音乐', 
    '文件下载', '网页跳转', '发送系统消息'
  ];
  
  const contactInfo = [
    { 
      title: '官方 QQ 群', 
      detail: '群号 1004706370',
    },
    { 
      title: '官方客服', 
      detail: '公众号：科技创新星球',
    },
    { 
      title: 'GitHub 账号', 
      detail: '账号名称：kejicx',
    }
  ];

  const collaborationItems = [
    {
      title: '与科技创新的合作',
      detail: '请把你的想法发给官方客服（科技创新星球），并请标注"合作"'
    },
    {
      title: '404 社区文章投稿',
      detail: '请将文章发送至微信公众号"科技创新星球"（官方客服），第一行注明：404文章投稿+文章标题+社区账号+社区ID，第二行开始为正文，最后请附上该文章封面否则默认使用404社区的logo。审核通过且被发表的文章会在最后用卡片为该文章作者的账号打广告哦（ps：没有稿费）。文章主题不限。快来投稿吧！'
    }
  ];

  // 公告内容 - 后续需要添加公告时直接修改这里
  const announcements = [
    "暂无公告"
  ];

  const PageTransition = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );

  const Navigation = () => (
    <nav className={`sticky top-4 z-50 mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/40 backdrop-blur-lg shadow-md'
    } border border-white/30`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-[#a5d296]/10 p-2 rounded-xl mr-2">
                <div className="w-3 h-3 rounded-full bg-[#a5d296]"></div>
              </div>
              <span className="font-semibold text-xl text-gray-800 tracking-tight">科技创新</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-[#a5d296]/20 text-[#a5d296] font-semibold'
                        : 'text-gray-700 hover:bg-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a 
              href="https://ccw.site/s/233J3"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-white/30 transition-colors"
            >
              科技创新的主页
            </a>
            <a 
              href="https://ccw.site/s/bL4gnr"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-white/30 transition-colors"
            >
              404 社区
            </a>
            <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            欢迎来到科技创新的官网
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-[#a5d296] font-medium"
          >
            一起科技创新吧！
          </motion.p>
        </div>
      </div>
    </PageTransition>
  );

  const WorksPage = () => (
    <PageTransition>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            科技创新的作品
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scratch 作品 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#a5d296]/20 p-2 rounded-xl mr-3">
                  <div className="w-2 h-2 rounded-full bg-[#a5d296]"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Scratch作品</h3>
              </div>
              
              <ul className="space-y-2 mb-4">
                {scratchWorks.map((work, index) => (
                  <li key={index} className="flex items-center pl-2 border-l-2 border-[#a5d296]/30 hover:bg-[#a5d296]/5 transition-colors py-1">
                    <span className="w-2 h-2 bg-[#a5d296] rounded-full mr-2"></span>
                    {work}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-gray-500 italic mt-4 border-t pt-4 border-gray-200/50">
                请前往科技创新的主页试玩作品
              </p>
            </motion.div>
            
            {/* 文章 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#a5d296]/20 p-2 rounded-xl mr-3">
                  <div className="w-2 h-2 rounded-full bg-[#a5d296]"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">文章</h3>
              </div>
              
              <ul className="space-y-2 mb-4">
                {articles.map((article, index) => (
                  <li key={index} className="flex items-center pl-2 border-l-2 border-[#a5d296]/30 hover:bg-[#a5d296]/5 transition-colors py-1">
                    <span className="w-2 h-2 bg-[#a5d296] rounded-full mr-2"></span>
                    {article}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-gray-500 italic mt-4 border-t pt-4 border-gray-200/50">
                请前往 404 社区"文章"页面浏览
              </p>
            </motion.div>
            
            {/* 积木扩展 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#a5d296]/20 p-2 rounded-xl mr-3">
                  <div className="w-2 h-2 rounded-full bg-[#a5d296]"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">积木扩展</h3>
              </div>
              
              <ul className="space-y-2 mb-4">
                {extensions.map((extension, index) => (
                  <li key={index} className="flex items-center pl-2 border-l-2 border-[#a5d296]/30 hover:bg-[#a5d296]/5 transition-colors py-1">
                    <span className="w-2 h-2 bg-[#a5d296] rounded-full mr-2"></span>
                    {extension}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-gray-500 italic mt-4 border-t pt-4 border-gray-200/50">
                请在共创世界素材集市搜索"科技创新或 404 社区"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  const ContactPage = () => (
    <PageTransition>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            联系我们
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  const CollaborationPage = () => (
    <PageTransition>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            合作项目
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {collaborationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  const AnnouncementsPage = () => (
    <PageTransition>
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-8"
          >
            最新公告
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-md"
            >
              <div className="text-gray-600 leading-relaxed whitespace-pre-wrap break-words text-center">
                {announcements.map((announcement, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {announcement}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'works' && <WorksPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'collaboration' && <CollaborationPage />}
        {currentPage === 'announcements' && <AnnouncementsPage />}
      </main>
      
      <footer className="bg-gray-50/60 backdrop-blur-lg border-t border-white/30 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 科技创新官网. 保留所有权利.</p>
        </div>
      </footer>
      
      {/* Floating action button for mobile */}
      <div className="md:hidden fixed bottom-6 right-6">
        <a 
          href="https://ccw.site/s/bL4gnr" 
          className="bg-[#a5d296] text-white p-3 rounded-full shadow-lg hover:bg-[#a5d296]/90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;