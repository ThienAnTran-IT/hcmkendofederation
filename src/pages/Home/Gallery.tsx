import * as React from 'react'
import image1 from '../../assets/images/homeGallery/image1.jpg'
import image2 from '../../assets/images/homeGallery/image2.jpg'
import image3 from '../../assets/images/homeGallery/image3.jpg'
import image4 from '../../assets/images/homeGallery/image4.jpg'
import image5 from '../../assets/images/homeGallery/image5.jpg'
import image6 from '../../assets/images/homeGallery/image6.jpg'
import image7 from '../../assets/images/homeGallery/image7.jpg'
import image8 from '../../assets/images/homeGallery/image8.jpg'
import image9 from '../../assets/images/homeGallery/image9.jpg'
import image10 from '../../assets/images/homeGallery/image10.jpg'
import image11 from '../../assets/images/homeGallery/image11.jpg'
import image12 from '../../assets/images/homeGallery/image12.jpg'
import image13 from '../../assets/images/homeGallery/image13.jpg'
import '../../assets/styles/Gallery.css'


export const Gallery = () => {

  return (
  <div>
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Thư viện ảnh</h2>
    <div className="gallery-row"> 
      <div className="gallery-column">
        <img src={image1} style={{width: '100%'}} alt='image1' loading="lazy" />
        <img src={image2} style={{width: '100%'}} alt='image2' />
        <img src={image9} style={{width: '100%', height: '332px'}} alt='image9' loading="lazy" />
      </div>
      <div className="gallery-column">
        <img src={image3} style={{width: '100%'}} alt='image3' loading="lazy" />
        <img src={image4} style={{width: '100%'}} alt='image4' loading="lazy" />
        <img src={image10} style={{width: '100%'}} alt='image10' loading="lazy" />
        <img src={image13} style={{width: '100%', height: '201px'}} alt='image13' loading="lazy" />
      </div>  
      <div className="gallery-column">
        <img src={image5} style={{width: '100%'}} alt='image5' loading="lazy" />
        <img src={image6} style={{width: '100%'}} alt='image6' loading="lazy" />
        <img src={image11} style={{width: '100%'}} alt='image11' loading="lazy" />
      </div>
      <div className="gallery-column">
      <img src={image7} style={{width: '100%'}} alt='image7' loading="lazy" />
      <img src={image8} style={{width: '100%'}} alt='image8' loading="lazy" />
      <img src={image12} style={{width: '100%', height: '162px'}} alt='image12' loading="lazy" />
      </div>
    </div>
  </div>
)
}