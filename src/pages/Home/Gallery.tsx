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
    <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Gallery</h2>
    {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/39eb523d-6f61-4871-8668-e2dbbc954f0d.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/39eb523d-6f61-4871-8668-e2dbbc954f0d.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/70212279-2d3b-4a87-a204-3dd92c31ba90.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/70212279-2d3b-4a87-a204-3dd92c31ba90.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/4dd4032c-ff2f-49f8-8dc4-bb3b533668d1.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/4dd4032c-ff2f-49f8-8dc4-bb3b533668d1.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/54c4a61a-5c3c-44e9-9c08-7e8ea3d9c760.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/54c4a61a-5c3c-44e9-9c08-7e8ea3d9c760.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/88b155bd-779f-4e84-aba7-ce138a55cc3a.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/88b155bd-779f-4e84-aba7-ce138a55cc3a.png");'
        ></div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/fc0628c9-ad70-444e-bd62-8cf6a3a4506b.png")' }}
          // styles='background-image: url("https://cdn.usegalileo.ai/sdxl10/fc0628c9-ad70-444e-bd62-8cf6a3a4506b.png");'
        ></div>
      </div>
    </div> */}

    <div className="gallery-row"> 
      <div className="gallery-column">
        <img src={image1} style={{width: '100%'}} />
        <img src={image2} style={{width: '100%'}} />
        <img src={image9} style={{width: '100%', height: '300px'}} />
      </div>
      <div className="gallery-column">
        <img src={image3} style={{width: '100%'}} />
        <img src={image4} style={{width: '100%'}} />
        <img src={image10} style={{width: '100%'}} />
        <img src={image13} style={{width: '100%', height: '171px'}} />
      </div>  
      <div className="gallery-column">
        <img src={image5} style={{width: '100%'}} />
        <img src={image6} style={{width: '100%'}} />
        <img src={image11} style={{width: '100%', height: '128px'}} />
      </div>
      <div className="gallery-column">
      <img src={image7} style={{width: '100%'}} />
      <img src={image8} style={{width: '100%'}} />
      <img src={image12} style={{width: '100%', height: '134px'}} />
      </div>
    </div>
  </div>
)
}