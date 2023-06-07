import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    <>
    <Head>
      <title>เกี่ยวกับเรา</title>
    </Head>
  
  <header>
<nav className="navbar navbar-expand-lg bg-info">
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
            <li><a className="dropdown-item" href="#">1</a></li>
            <li><a className="dropdown-item" href="#">2</a></li>
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
    <img src="/chicksale.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">ไก่นวม</h2>
      <p>ไก่หนุ่มเคยเก่งตอนนี้ เริ่มอายุเยอะ ทำนวมได้ พ่อไก่ได้</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-367989760/">฿ 300 »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/fish.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">ปลาปอมปาดัว</h2>
      <p>ปลาปอมปาดัว ยาว 3 นิ้ว ครับ
        ร้านอยู่แถวช้างสามเศียร</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-367891472">฿ 250 »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/ped.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">เป็ดคอลดั้ก</h2>
      <p>เป็ดสวยงาม ราคาไม่แพง</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-367935051">฿ 460 »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/buff.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">ควายพื้นบ้าน</h2>
      <p>ส่วนสูง130+ เพศเมีย2ตัว</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-367961497">฿ 45,000 »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/cowsale.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">วัวแม่พันธุ์5</h2>
      <p>วัวแม่พันธุ์ท้อง5เดือน</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-368000117">฿ 49,000 »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="cat.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">ลูกแมว พันธุ์ทอยเกอร์</h2>
      <p>เพศผู้อายุ 3.5 เดือน สายพันธุ์ที่หายากและมีน้อยในประเทศไทย</p>
      <p><a className="btn btn-secondary" href="https://www.kaidee.com/product-367763933">฿ 120,000 »</a></p>
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