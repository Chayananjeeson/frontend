import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
  
  <header>
<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/.">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ขายไก่</a></li>
            <li><a className="dropdown-item" href="#">ขายหมา</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">ขายคน</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"> ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

</header>
<br />
<br />
<br /> 
<main>
<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/r31.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 31</h2>
      <p>โฉมที่ 7 ใช้ชื่อโฉมว่า R31 เป็นโฉมที่มีการนำเทคโนโลยีใหม่ๆ มาลงเป็นจำนวนมาก และมีรูปทรงที่ทันสมัยกว่าโฉมที่ 6 อยู่มาก และเป็นโฉมแรกที่ใช้เครื่องยนต์กลุ่ม RB และเป็นโฉมที่ทำให้สกายไลน์ เป็นที่รู้จักอย่างกว้างขวางขึ้นในฐานะรถสปอร์ต แต่โฉมนี้ ก็ยังไม่มี GT-R และนอกจากนี้ R31 ก็ยังเป็นโฉมสุดท้ายที่มีระบบขับเคลื่อนล้อหลังเพียงระบบเดียว หลังจากโฉมนี้ไป จะมีระบบขับเคลื่อน 2 แบบ คือระบบขับเคลื่อนล้อหลัง กับขับเคลื่อนสี่ล้อจนถึงปัจจุบัน</p>
      <p><a className="btn btn-secondary" href="https://www.w3schools.com/html/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r32.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 32</h2>
      <p>และโฉมนี้ กลับมาผลิตสกายไลน์ GT-R อีกครั้ง หลังจากหายไปตั้งแต่โฉมที่ 4 เป็นโฉมที่ทำให้สกายไลน์ GT-R เป็นที่รู้จักอย่างกว้างขวางและโด่งดังไปในวงกว้าง จากการที่สกายไลน์ R32 ชนะการแข่งขันรถยนต์ทางเรียบในญี่ปุ่น 29 รางวัล และชนะเลิศซูเปอร์จีที ถึง 2 ปีติดต่อกัน นอกเหนือจากการแข่งขันในประเทศ GT-R ยังได้ชนะการแข่งขันออสเตรเลียนทัวริง 3 ปีติดต่อกันระหว่างปี 2533-2535 </p>
      <p><a className="btn btn-secondary" href="https://www.adobe.com/?sdid=49F59KY6&clickref=1100lwPBVo4o&mv=affiliate&mv2=pz&as_camptype=1414588&as_channel=affiliate&as_source=partnerize&as_campaign=chelen">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r33.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 33</h2>
      <p>โฉมที่ 9 ใช้ชื่อโฉมว่า R33 มีรถ 2 รุ่นที่สำคัญ คือ

Nissan Skyline GT-S R33 เครื่องยนต์ RB25DET 2.5 L 250 แรงม้า
Nissan Skyline GT-R R33 (BCNR33) เครื่องยนต์ RB26DETT 156.7 cu.in. / 2,568 c.c. 280 แรงม้า</p>
      <p><a className="btn btn-secondary" href="https://flutter.dev/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/r34.jpeg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 34</h2>
      <p>โฉมที่ 10 ใช้ชื่อโฉมว่า R34 ในโฉมนี้ เกียร์อัตโนมัติแบบ 5 สปีด ถูกยกเลิกชั่วคราว ทำให้สกายไลน์โฉมนี้มี 6 เกียร์ธรรมดา Magna (Getrag) 233 (GT-R) กับอัตโนมัติแบบ 4 สปีดเท่านั้น แต่ในโฉมนี้ สกายไลน์ได้มีการผลิตเกียร์แบบ Triptonic ออกขาย (เกียร์ Triptonic คือเกียร์ที่สามารถปรับใช้เป็นเกียร์ธรรมดาก็ได้ เกียร์อัตโนมัติก็ได้ ในเกียร์ชุดเดียวกัน) เป็นครั้งแรกของสกายไลน์ ในแบบ GT-S จะมี sunroof ในแบบ GT-R จะไม่มี sunroof</p>
      <p><a className="btn btn-secondary" href="https://www.w3schools.com/html/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r35.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 35</h2>
      <p>Nissan GT-R เปิดตัวที่งาน Motor Expo 2019 มีให้เลือกออปชั่นตกแต่งให้เลือกมากมาย ทั้งนี้ยังมาพร้อมกับเครื่องยนต์ 3.8 ลิตร สามารถเลือกชมรายละเอียด ราคา Nissan GT-R 2023 รุ่นล่าสุดอย่างเป็นทางการ และสามารถหารุ่นอื่น ๆ ที่ท่านต้องการได้ ราคา Nissan GTR อยู่ที่ 13,500,000 บาท ตารางผ่อน GTR เริ่มต้นประมาณ 165,000 บาทต่องวด</p>
      <p><a className="btn btn-secondary" href="https://www.adobe.com/?sdid=49F59KY6&clickref=1100lwPBVo4o&mv=affiliate&mv2=pz&as_camptype=1414588&as_channel=affiliate&as_source=partnerize&as_campaign=chelen">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r36.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">GTR 36</h2>
      <p>คาดการณ์เครื่องยนต์
มีการเรนเดอร์ภาพที่น่าจะเป็นการออกแบบของ Nissan GT-R R36 ใหม่ออกมา พร้อมการคาดคะเนเครื่องยนต์ ว่าจะใช้เป็นเครื่อง V6 3.8 ลิตร เทอร์โบคู่ พร้อมกำลังถึง 600 แรงม้าและแรงบิด 647 นิวตันเมตร</p>
      <p><a className="btn btn-secondary" href="https://flutter.dev/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
</div>

</main>
<br />
<br />
<br />

<footer>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


</footer>
    </>
  )
}