import React, {useEffect, useState} from "react";
import styles from './DashBoardCreateProductImages.module.css';
import ImageTile from "./ImageTile/ImageTile";
import ImageTag from "./ImageTag/ImageTag";

function DashBoardCreateProductImages() {
    const [avatar, setAvatar] = useState([])
    const [avatarUrl, setAvatarUrl] = useState('')
    const [images, setImages] = useState([])
    const [imageUrls, setImageUrls] = useState([])

    useEffect(()=>{
        try{
            const reader = new FileReader();
            reader.readAsDataURL(avatar[0])
            reader.onloadend = ()=>{
                setAvatarUrl(reader.result)
            }
        }catch (error){
            console.log(error)
        }
    },[avatar])


    const updateImages = (file)=>{
        const imagesClone = [...images];
        imagesClone.push(file)
        setImages(imagesClone)
    }

    const updateImageUrls = (url)=>{
        const urlsClone = [...imageUrls]
        urlsClone.push(url)
        setImageUrls(urlsClone)
    }

    const removeImageUrl = (index)=>{
        const imageUrlsClone = [...imageUrls]
        setImageUrls([...imageUrls].filter((url, indexed)=>{
            if (index !== indexed) return url
        }))
        console.log('You made me a u made me a remover remover',imageUrlsClone)
    }

    // useEffect(()=>{
    //     const imageuRLS = [];
    //     images.forEach( image=>{
    //         const reader = new FileReader();
    //         reader.readAsDataURL(image)
    //
    //         reader.onloadend = ()=>{
    //             console.log(reader.result)
    //             imageuRLS.push(reader.result)
    //         }
    //     })
    //
    //     console.log('Image Urls',imageuRLS)
    // },[images])



    useEffect(()=>{
        console.log(imageUrls)
    },[imageUrls])

    return(
        <div className={styles.create_images}>
            <img className={styles.amazon_logo} src={'https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png'} alt=""/>

            <form className={styles.create_images_form}>
                <h2 className={styles.create_images_title}>Upload Assets.</h2>

                <div className={styles.images_div}>
                    <p className={styles.images_div_desc}>Avatar of product(a.ka thumbnail, recommended size: width- 400px, height- 600px)</p>
                    <ImageTile index={0} title={'Avatar'} add={true} stylesImp={{width:'40%'}} images={avatar} imageUrl={avatarUrl} setImages={setAvatar} setImageUrl={setAvatarUrl}/>
                </div>

                <div className={styles.images_many_div}>
                    <p className={styles.images_div_desc}>Images for products(minimum two images, recommended size: width- 1000px, height- 1800px)</p>
                    <div className={styles.images_list}>
                        {
                            imageUrls.map(async (url ,index)=>{
                                return <ImageTag backgroundUrl={url} index={index} removeUrl={removeImageUrl}/>
                            })
                        }
                        <ImageTile title={'Add'} add={false} stylesImp={{width:'125px',height:'150px'}} index={0} images={images} setImages={updateImages} imageUrl={imageUrls[3]} setImageUrl={updateImageUrls}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashBoardCreateProductImages;