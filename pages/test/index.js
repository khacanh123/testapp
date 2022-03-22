import axios from 'axios';
import React, { useEffect, createRef, useState, useRef } from 'react';
import './css.css';
import Head from 'next/head';
import html2canvas from "html2canvas";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const Welcome = () => {
  const ref = createRef();
  const [width, setWidth] = useState(940);
  const [image, setImage] = useState('');
  const exportAsImage = async (el, imageFileName,e) => {
    e.preventDefault();
    console.log(document.getElementById('screen'));
    html2canvas(document.getElementById('screen'), {
      useCORS: true,
    }).then(function(canvas) {
      var image = canvas.toDataURL("image/png");
      console.log(image);
      localStorage.setItem('image', img);
    setImage(image);

   });    
    
    };
    const img = localStorage.getItem('image');
    return(
        <>
        <Head>
        <meta name="thumbnail" content="https://freetuts.net/upload/tut_post/images/2021/12/15/5535/wp-rocket-plugin.png"/>
<meta property="og:image" content="https://freetuts.net/upload/tut_post/images/2021/12/15/5535/wp-rocket-plugin.png"/>
    <meta property="og:image:secure_url" content="https://freetuts.net/upload/tut_post/images/2021/12/15/5535/wp-rocket-plugin.png"></meta>
          </Head>
<div>
        <button className={["btn"].join(" ")} onClick={(e) => exportAsImage(ref.current, 'image', e)}>
        <FacebookShareButton
        url={window.location.href}
      // url="https://dantri.com.vn/du-lich/nguoi-ha-noi-do-xo-toi-chup-anh-voi-duong-la-bang-dep-nhu-han-quoc-20220321214503089.htm"
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> Facebookでshare
      </FacebookShareButton>
        </button>
        <label >
          Width:
          <input value={width} onChange={e => setWidth(e.target.value)} />
        </label>
      </div>
      <img src={image}/>
      <div className={["result-bg","container", "container-unlock"].join(" ")} ref={ref} id="screen">
  <div className="title-01">
    Bạn phù hợp với Kiểu người E (Enterprise - Thiên phú lãnh đạo)
  </div>
  <p className="title-02">
    Bạn đã tham gia <span>Trắc nghiệm tính cách HOLLAND</span>
  </p>
  <div className="result-k">
    <div className="img-info">
      <div>
        <img src="OIP.jpg" />
        <p>Nguyễn Khắc Anh</p>
      </div>
    </div>
    <div className="list">
      <p>Bạn phù hợp với các ngành</p>
      <div>
        <div className="item-bg">
          <div>
            <img src="http://static.hocmai.net/huongnghiep/cms/nganh_van_hoc_774d8983e4.png" />
            <p>Ngành tài chính - ngân hàng</p>
          </div>
        </div>
        <div className="item-bg magin">
          <div>
            <img src="http://static.hocmai.net/huongnghiep/cms/nganh_van_hoc_774d8983e4.png" />
            <p>Ngành tài chính - ngân hàng</p>
          </div>
        </div>
        <div className="item-bg">
          <div>
            <img src="http://static.hocmai.net/huongnghiep/cms/nganh_van_hoc_774d8983e4.png" />
            <p>Ngành tài chính - ngân hàng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="share-bg">
    <div>
      <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/275363197_4922382064464023_8082285303794160844_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=rPv4x51xS6EAX8dd37M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIIC8PKuxbo5OlFiVVej6rSpp5MPK3LFFij1wELCKfnjQ&oe=625F8AC9" />
      <p style={{ fontSize: 16 }}>
        <span
          style={{
            fontFamily: '"Arial Bold", "Arial"',
            fontWeight: 700,
            fontSize: 18,
            color: "#32AA35"
          }}
        >
          Tham gia ngay{" "}
        </span>
        <span style={{ fontFamily: '"Arial"', fontWeight: 400 }}>
          để đoán tính cách của bạn!
        </span>
      </p>
    </div>
  </div>
</div>

        </>
    )
}
export default Welcome;