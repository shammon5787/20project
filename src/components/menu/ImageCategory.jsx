import React, { useState } from 'react'
import Menu from './Menu'

const ImageCategory = () => {
    const [iamges, setImages] = useState(Menu)

    // const searchGategory = (categ)=>{
    //     const upDateCategory = Menu.filter ((cueElement)=>{
    //        return cueElement.category === categ;
    //     });
    //     setImages(upDateCategory);
    // }

    const searchGategory = (catElem) =>{    
        const updateitem = Menu.filter((curEem)=>{
            return curEem.category === catElem;
        });
        setImages(updateitem );
    }
    

    return (
        < >
            <div className='mainBtns' style={{ textAlign: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <button style={{ cursor: 'pointer', backgroundColor: 'blue', padding: '3px', marginLeft: '20px', borderRadius: '5px' }} onClick={()=>searchGategory('Fruits')}>Fruuit</button>
                <button style={{ cursor: 'pointer', backgroundColor: 'blue', padding: '3px', marginLeft: '20px', borderRadius: '5px' }} onClick={()=>searchGategory('Shirts')}>Dinner</button>
                <button style={{ cursor: 'pointer', backgroundColor: 'blue', padding: '3px', marginLeft: '20px', borderRadius: '5px' }} onClick={()=>searchGategory('Drinks')}>Lunch</button>
                <button style={{ cursor: 'pointer', backgroundColor: 'blue', padding: '3px', marginLeft: '20px', borderRadius: '5px' }}>Breakfast</button>
                <button style={{ cursor: 'pointer', backgroundColor: 'blue', padding: '3px', marginLeft: '20px', borderRadius: '5px' }}>All</button>
            </div>

            <div className='wrapperClass'>
                {
                    iamges.map((item) => (
                        <div className='cart' key={item.id}>
                        <img style={{width:'150px'}} src={item.image} alt="no aimage" />
                        <div>
                            <h4>{item.title}</h4>
                            <h4>{item.price}</h4>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

export default ImageCategory
