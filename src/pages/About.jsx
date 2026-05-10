import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, ArrowLeft, Users, BookOpen, Award, MessageCircle,
  Star, Clock, Target, Heart, Zap, Globe, Shield, TrendingUp,
  Mail, Phone, MapPin, SendHorizontal
} from 'lucide-react';
import '../App.css';
import '../About.css';
import adminAvatar from '../assets/admin_avatar.png';
import heroBg from '../assets/light_blue_liquid_bg.png';

const timeline = [
  { year: '2020', title: 'Khởi đầu hành trình', desc: 'Bắt đầu chia sẻ kiến thức qua các video miễn phí trên mạng xã hội, thu hút hàng nghìn lượt xem.' },
  { year: '2021', title: 'Ra mắt khoá học đầu tiên', desc: 'Xây dựng và phát hành khóa học trực tuyến đầu tiên về Toán THPT, nhận phản hồi tích cực từ học viên.' },
  { year: '2023', title: 'Mở rộng lĩnh vực', desc: 'Phát triển thêm các khóa học Tiếng Anh, Lập trình, và các môn Đại cương cho sinh viên.' },
  { year: '2025', title: 'Thành lập EduPro', desc: 'Chính thức ra mắt nền tảng EduPro với hơn 50 khóa học và cộng đồng 2,000+ học viên.' },
  { year: '2026', title: 'Hướng tới tương lai', desc: 'Tiếp tục phát triển nội dung, ứng dụng AI vào giáo dục và mở rộng ra thị trường quốc tế.' },
];

const skills = [
  { icon: <Target size={22} />, name: 'Giáo dục trực tuyến', level: 95 },
  { icon: <BookOpen size={22} />, name: 'Thiết kế chương trình', level: 90 },
  { icon: <Zap size={22} />, name: 'Công nghệ giáo dục', level: 85 },
  { icon: <Globe size={22} />, name: 'Ngoại ngữ', level: 80 },
  { icon: <TrendingUp size={22} />, name: 'Marketing & Branding', level: 75 },
  { icon: <Shield size={22} />, name: 'Quản lý dự án', level: 88 },
];

const testimonials = [
  { name: 'Minh Anh', role: 'Sinh viên Bách Khoa', text: 'Nhờ EduPro mà mình đã vượt qua môn Vật Lý Đại Cương một cách dễ dàng. Nội dung rất chất lượng!', rating: 5 },
  { name: 'Thanh Hà', role: 'Học sinh lớp 12', text: 'Lộ trình học Toán rõ ràng, dễ hiểu. Mình đã tăng từ 6 điểm lên 9 điểm chỉ sau 3 tháng.', rating: 5 },
  { name: 'Hoàng Long', role: 'Nhân viên văn phòng', text: 'Combo TOEIC giúp mình đạt 750+ chỉ sau 2 tháng ôn luyện. Highly recommended!', rating: 5 },
];

export default function About() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo gradient-text">EduPro</Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Trang chủ</Link></li>
          <li><Link to="/about" className="nav-link active">Về chúng tôi</Link></li>
        </ul>
        <button className="nav-toggle"><Menu size={24} /></button>
      </nav>

      {/* About Hero */}
      <section className="about-hero">
        <img src={heroBg} alt="" className="hero-bg" />
        <div className="about-hero-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} /> Quay lại trang chủ
          </Link>

          <div className="about-hero-main">
            <div className="about-avatar-wrapper">
              <img src={adminAvatar} alt="Admin" className="about-avatar" />
              <div className="about-avatar-glow"></div>
              <div className="about-status">
                <span className="status-dot"></span> Online
              </div>
            </div>

            <div className="about-hero-info">
              <div className="about-badge">Founder & CEO</div>
              <h1 className="about-hero-name">BOURBON FULLBUSTER</h1>
              <p className="about-hero-tagline">
                "Đam mê giáo dục – Kiến tạo tương lai"
              </p>

              <div className="about-hero-stats">
                <div className="hero-stat">
                  <Users size={18} />
                  <span className="hero-stat-value">1,000+</span>
                  <span className="hero-stat-label">Học viên</span>
                </div>
                <div className="hero-stat">
                  <BookOpen size={18} />
                  <span className="hero-stat-value">20+</span>
                  <span className="hero-stat-label">Khóa học</span>
                </div>
                <div className="hero-stat">
                  <Award size={18} />
                  <span className="hero-stat-value">4.7</span>
                  <span className="hero-stat-label">Đánh giá</span>
                </div>
                <div className="hero-stat">
                  <Clock size={18} />
                  <span className="hero-stat-value">2+</span>
                  <span className="hero-stat-label">Năm KN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <h2 className="section-title gradient-text">Câu chuyện của tôi</h2>
        <div className="story-container">
          <div className="story-card glass-panel">
            <Heart size={28} className="story-icon" />
            <h3>Đam mê</h3>
            <p>
              Mình bắt đầu từ một sinh viên bình thường, luôn trăn trở về cách làm sao để việc học
              trở nên dễ dàng và thú vị hơn. Từ những video chia sẻ đầu tiên trên mạng xã hội,
              mình nhận ra rằng tri thức cần được truyền tải theo cách gần gũi nhất.
            </p>
          </div>
          <div className="story-card glass-panel">
            <Target size={28} className="story-icon" />
            <h3>Sứ mệnh</h3>
            <p>
              EduPro ra đời với sứ mệnh đơn giản: Giúp mọi người tiếp cận giáo dục chất lượng cao
              với chi phí hợp lý nhất. Không phân biệt bạn ở đâu, bắt đầu từ đâu –
              chỉ cần bạn có đam mê học hỏi.
            </p>
          </div>
          <div className="story-card glass-panel">
            <Zap size={28} className="story-icon" />
            <h3>Tầm nhìn</h3>
            <p>
              Trong tương lai, EduPro sẽ trở thành nền tảng giáo dục trực tuyến hàng đầu Việt Nam,
              ứng dụng AI và công nghệ hiện đại để cá nhân hóa trải nghiệm học tập cho từng học viên.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section skills-section">
        <h2 className="section-title gradient-text">Chuyên môn & Kỹ năng</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <section className="about-section">
        <h2 className="section-title gradient-text">Học viên nói gì?</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card glass-panel" key={i}>
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section contact-section">
        <h2 className="section-title gradient-text">Liên hệ với tôi</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">vokien609@gmail.com</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Hotline</div>
                <div className="contact-value">0338557731</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Địa chỉ</div>
                <div className="contact-value">TP. Hồ Chí Minh, Việt Nam</div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.facebook.com/bourbon.rx7" target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
              <a href="https://zalo.me/0338557731" target="_blank" rel="noopener noreferrer" className="social-btn">Zalo</a>
            </div>
          </div>

          <div className="contact-form glass-panel">
            <h3 className="form-title">Gửi tin nhắn</h3>
            <div className="form-group">
              <input type="text" placeholder="Họ và tên" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Nội dung tin nhắn..." className="form-input form-textarea" rows={4}></textarea>
            </div>
            <button className="primary-btn form-submit">
              <SendHorizontal size={18} /> Gửi tin nhắn
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo gradient-text">EduPro</div>
        <div className="footer-links">
          <Link to="/">Trang chủ</Link>
          <a href="#contact">Liên hệ</a>
          <a href="#terms">Điều khoản</a>
        </div>
        <p className="footer-copy">© 2026 EduPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
