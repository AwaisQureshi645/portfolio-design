import React, { useState } from 'react'
import './ProductStyle.css'
// import './ProductStyle.css'
// import ShowProject from './ShowProject'
import camera from '../../assets/Images/camera.jpg'
import traffic from '../../assets/Images/t.jpg'
import oldDesign from '../../assets/Images/oldDesign.png'
import portfolio_left_img from '../../assets/Images/portfolio-left-img.png'
import portfolio_right_img from '../../assets/Images/portfolio-right-img.png'
import e_commece from '../../assets/Images/e_commerce.jpg'
import { ImCross } from 'react-icons/im'
import demo1 from '../../assets/Images/demo1.mp4'
import { ImGithub } from 'react-icons/im'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import Modal from './Modal';
import products from './ProjectData'
export default function Project() {


 
  const [ShowModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(products);
  const handleCategoryChange = (categoryItem) => {

    const update = products.filter((current) => {
      return current.category === categoryItem;
    })
    setSelectedCategory(update);
  };

  const closeModal = () => {
    setShowModal(false);
  }




  // const filteredProducts = selectedCategory === 'all' ? products : products.filter((product) => product.category === selectedCategory);

  // const handleDemoPart=()=>{

  //   console.log("first")

  //    if (products.url){

  //     window.open(`${url}`, '_blank');
  //   }
  //   else{

  //   }
  // }
  return (
    <div>

      <div className="projectHeading" id='ProjectsPage'>
        <img src={portfolio_left_img} alt="" style={{ height: '30vh' }} />
        <h4 style={{ textAlign: 'center', marginTop: '-5rem ', color: 'white' }}>Creative Works</h4>
        <h1 style={{ textAlign: "center", padding: '1.5rem 0rem', color: "white" }}>
          Check My Portfolio
          {/* <div className="line" style={{ color: "black", width: "8rem", height: '0.2rem' }}></div> */}
        </h1>
        <div className="projectButton_box">
          <button onClick={() => setSelectedCategory(products)}>All </button>
          <button onClick={() => handleCategoryChange('react')}>React </button>
          <button onClick={() => handleCategoryChange('android')}>Android  </button>
          <button onClick={() => handleCategoryChange('wordpress')}>WordPress </button>
          <button onClick={() => handleCategoryChange('web-Design')}>web-Design </button>

          {/* #6f34fe */}

        </div>
        <img src={portfolio_right_img} alt="" style={{ height: '30vh', }} className='project_right_imagex' />

      </div>
      <div className="project_show_box">



        <div className="parient_container">
          {
            selectedCategory.map((Item) => {
              const { id, name, category, description, Showurl, URLs, video, } = Item;
              // console.log(Item);s
              return (

                <div className="create_product_box" key={id}>

                  <img src={description} alt="" />
                  <h4 style={{ textAlign: 'center', margin: '0.5rem 0.3rem' }} >{name}</h4>
                  <div className="IconsCreate" >
                    {/* <div className="source" onClick={() => {


                      window.open(`${URLs}`, '_blank');

                    }}>
                      <p>code </p>
                      <ImGithub style={{ marginLeft: '0.2rem' }} />
                    </div> */}
                    <div className="demoPart" onClick={() => {

                      if (Item.Showurl) {
                        window.open(`${Item.Showurl}`, '_blank');

                      }
                      else{
                        setShowModal(true)

                      }
                  // {ShowModal && (<Modal closeModal={closeModal}  data={Item.video}/>)}

             





                      // window.open(`${Item.Showurl}`, '_blank');
                    }}>

                      <p>Live demo </p>
                      <LuArrowUpRightFromCircle style={{ marginLeft: '0.2rem' }} />

                    </div>

                  </div>
                 {/* {console.log(video)} */}
                  {ShowModal && <Modal closeModal={closeModal}  data={Item.id}/>}


                </div>

              )

            })}
        {/* {ShowModal && <Modal closeModal={closeModal} datas={video} />} */}

        </div>
      </div>








    </div>
  )
}
