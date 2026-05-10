import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronRight, Star, Link as LinkIcon, Menu } from 'lucide-react';
import '../App.css';
import heroBg from '../assets/light_blue_liquid_bg.png';

const courses = [
  { category: 'Môn Toán', icon: '📐', name: 'Toán Học THPT – Lộ trình Toàn diện', link: '#' },
  { category: 'Môn Lý', icon: '⚡', name: 'Vật Lý THPT – Lộ trình Chuyên sâu', link: '#' },
  { category: 'Môn Hóa', icon: '🧪', name: 'Hóa Học Vô Cơ & Hữu Cơ – Lộ trình Toàn diện', link: '#' },
  { category: 'Tiếng Anh', icon: '🇬🇧', name: 'Lấy Gốc Tiếng Anh Cơ Bản Trong 48 Ngày', link: '#' },
  { category: 'Đại Cương', icon: '⚛️', name: 'Vật Lý Đại Cương Dành Cho Sinh Viên', link: '#' },
  { category: 'Lập Trình', icon: '💻', name: 'Lập Trình C/C++ Từ Cơ Bản Đến Nâng Cao', link: '#' }
];

export default function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo gradient-text">EduPro</Link>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link active">Trang chủ</a></li>
          <li><a href="#features" className="nav-link">Đặc trưng</a></li>
          <li><a href="#courses" className="nav-link">Khóa học</a></li>
          <li><Link to="/about" className="nav-link">Về chúng tôi</Link></li>
        </ul>
        <button className="nav-toggle"><Menu size={24} /></button>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <img src={heroBg} alt="Hero" className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            Nền tảng học tập<br />
            <span className="gradient-text">Online Đỉnh cao</span>
          </h1>
          <p className="hero-desc">
            Khơi dậy tiềm năng của bạn với các khóa học chất lượng cao, từ môn học phổ thông tới kỹ năng công nghệ.
          </p>
          <div className="hero-actions">
            <a href="https://docs.google.com/spreadsheets/d/1IfYYtAaLBxBBVP8UjY9NL97l9ifAwN4UOi1e0D2NtKA/edit?gid=1442304501#gid=1442304501" target="_blank" rel="noopener noreferrer" className="primary-btn">
              Bắt đầu ngay <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <h2 className="section-title gradient-text">Tại sao chọn chúng tôi?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Star size={30} className="feature-icon" />
            <h3 className="feature-title">Chất lượng hàng đầu</h3>
            <p className="feature-desc">Các khóa học được thiết kế tỉ mỉ, lộ trình học rõ ràng, áp dụng ngay vào thực tiễn.</p>
          </div>
          <div className="feature-card">
            <Star size={30} className="feature-icon" />
            <h3 className="feature-title">Đa dạng lĩnh vực</h3>
            <p className="feature-desc">Hàng trăm khóa học từ Toán, Lý, Hóa, Ngoại ngữ tới Công nghệ thông tin.</p>
          </div>
          <div className="feature-card">
            <Star size={30} className="feature-icon" />
            <h3 className="feature-title">Học mọi lúc, mọi nơi</h3>
            <p className="feature-desc">Trải nghiệm mượt mà trên mọi thiết bị, đồng bộ tiến độ tự động.</p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="course-list">
        <h2 className="section-title gradient-text">Khóa học nổi bật</h2>
        <div className="courses-grid">
          {courses.map((c, i) => (
            <div className="course-card glass-panel" key={i}>
              <div className="course-header">
                <span className="cat-icon">{c.icon}</span>
                <span className="cat-name">{c.category}</span>
              </div>
              <h3 className="course-name">{c.name}</h3>
              <a href={c.link} className="link-btn">
                <LinkIcon size={14} /> Xem chi tiết
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo gradient-text">EduPro</div>
        <div className="footer-links">
          <a href="#contact">Liên hệ</a>
          <Link to="/about">Về chúng tôi</Link>
          <a href="#terms">Điều khoản</a>
        </div>
        <p className="footer-copy">© 2026 EduPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
