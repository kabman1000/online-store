import React, {createContext, useState} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            'id':11,
            'title':'Sour Diesel',
            'metatitle':'Some metatitle',
            'description':'Fresh Sour D grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://smartcdn.prod.postmedia.digital/financialpost/wp-content/uploads/2016/11/marijuana.jpg?quality=90&strip=all&w=400',
            'rating':3.5,
        },
        {
            'id':10,
            'title':'Amnesia Haze',
            'metatitle':'metatitle',
            'description':'Fresh Amnesia Haze grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://kindalternative.com/wp-content/uploads/2019/08/kad-medical-marijuana-buds.jpg',
            'rating':5.0,
        },{
            'id':9,
            'title':'Trainwreck',
            'metatitle':'metatitle',
            'description':'Fresh Trainwreck grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://www.safebud.wiki/uploads/400x400/00100dportrait_00100_burst20190628184025504_cover-5d1a5dc557e03.jpg',
            'rating':1.5,
        },{
            'id':8,
            'title':'C4',
            'metatitle':'some extra long metatitle',
            'description':'Fresh C4 grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnX6kG7NI3kBsNCRzEMcobDYFHmXBMck0dw&usqp=CAU',
            'rating':3.0,
        },{
            'id':7,
            'title':'OG Kush',
            'metatitle':'metatitle',
            'description':'Fresh OG Kush grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://cannabishop.co.uk/wp-content/uploads/2018/11/Purple-Kush-Indica-Strain.jpg',
            'rating':2.1
        },{
            'id':6,
            'title':'Purple Haze',
            'metatitle':'some title',
            'description':'Fresh Purple Haze grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://www.autoflowering-cannabis.com/wp-content/uploads/2013/02/Northern-Light-x-Big-Bud.jpg',
            'rating':4.5
        },{
            'id':5,
            'title':'AK47',
            'metatitle':'metatitle',
            'description':'Fresh AK47 grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://www.safebud.wiki/uploads/400x400/00100dportrait_00100_burst20181127202825986_cover-5bfdf14a27101.jpg',
            'rating':4.4
        },{
            'id':4,
            'title':'GSC',
            'metatitle':'metatitle',
            'description':'Fresh GSC grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://media.merryjane.com/eyJidWNrZXQiOiJmaWxlcy5tZXJyeWphbmUuY29tIiwia2V5IjoidXBsb2Fkcy9nZW5lcmljLzE1Njc1NTUyMjgyMzJfY29tYXRvc2UuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImZpdCI6ImNvdmVyIiwiZm9ybWF0IjoianBnIn19fQ==',
            'rating':4.1
        },{
            'id':3,
            'title':'Choco Chunk',
            'metatitle':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'description':'Fresh Choco Chunk grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DdJTdN3QsUZWnbzD1xQ93YV2bnBvYDIeSg&usqp=CAU',
            'rating':3.5
        },{
            'id':2,
            'title':'Northern Lights',
            'metatitle':'some metatitle',
            'description':'Fresh Northern Lights grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnX6kG7NI3kBsNCRzEMcobDYFHmXBMck0dw&usqp=CAU',
            'rating':3.8
        },{
            'id':1,
            'title':'Vanilla Haze',
            'metatitle':'meta',
            'description':'Fresh Vanilla Haze grown from the treasure troves of amsterdam to make you feel the good power of the indica family',
            'image':'https://3.bp.blogspot.com/-ODEaQcCYUfM/XAbVdI02DVI/AAAAAAAAh9U/BuSEj6SIqSEczkvvl0HDRuf1wl-5f2DGwCK4BGAYYCw/s400/IMG_2455.jpg',
            'rating':5.0
        }
    ])
    return(
        <DataContext.Provider value = {[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}