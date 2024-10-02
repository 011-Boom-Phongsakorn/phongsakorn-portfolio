import React from "react";
import go from "../assets/images/go.jpg";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Phongsakorn Tangpok</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            สวัสดีครับ/ค่ะ! ฉันเป็นนักพัฒนา Full-Stack
            ที่หลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่ใช้งานได้จริง
            ด้วยความสามารถในการทำงานทั้งด้าน Front-End และ Back-End
            ฉันสามารถสร้างประสบการณ์ผู้ใช้ที่มีคุณภาพสูงและโค้ดที่มีประสิทธิภาพได้
            ฉันมีประสบการณ์ในการใช้เทคโนโลยีต่าง ๆ เช่น HTML, CSS, JavaScript,
            React สำหรับการพัฒนา Front-End และ Node.js, Express, และฐานข้อมูล
            SQL/NoSQL สำหรับ Back-End นอกจากนี้
            ฉันยังชอบเรียนรู้เครื่องมือและเทคโนโลยีใหม่ ๆ
            เพื่อเพิ่มประสิทธิภาพในการทำงาน
            สิ่งที่ฉันให้ความสำคัญคือการทำงานร่วมกับทีม การสื่อสารที่ดี
            และการพัฒนาตนเองอย่างต่อเนื่อง
            ฉันเชื่อว่าการทำงานร่วมกันสามารถนำไปสู่ผลลัพธ์ที่ดีกว่า
            และฉันพร้อมที่จะเผชิญกับความท้าทายใหม่ ๆ
            เพื่อพัฒนาทักษะของตัวเองต่อไป
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/se_npru">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/se_npru">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/011-Boom-Phongsakorn">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={go} alt="go" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;