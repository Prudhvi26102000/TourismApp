import Image from "next/image";
import image from "../../public/assets/hawai-image2.jpg";
import styles from "../../styles/Desktop.module.css";
import "@fontsource/ibm-plex-mono";
import Gethighlights from "../controller/FetchDetails";
import GetCategories from "../controller/FetchCategories";
import profileimage from "../../public/assets/Ellipse 10.png";

const Desktop=()=>{
    return (
            <div>
                <Image 
                    className={styles.image}
                    src={image}
                    alt="hawai"
                />
                <div className={styles.topbar}>
                    <div className={styles.menu}>
                        <h4>Aloha</h4>
                        <div className={styles.menuitems}>
                           <span className={styles.home}>Home</span>
                            <span  className={styles.surfing}>Surfing</span>
                            <span className={styles.hula}>Hula</span>
                            <span className={styles.vulcano}>Vulcano</span> 
                        </div>
                    </div>
                    <button className={styles.button}><div className={styles.trip}>Book a trip</div></button>
                </div>
                <div className={styles.text}>Welcome to Hawaii</div>

                <div className={styles.highlights}>
                    <span className={styles.heading}>Highlights</span>
                    <Gethighlights />
                </div>
                <div className={styles.section}> 
                    <span className={styles.categoriestext}>Categories</span>  
                    <GetCategories/>
                </div>
                <div className={styles.travelguide}>
                    <span className={styles.travelguidetext}>Travel guide</span>
                    <div className={styles.container}>
                        <div className={styles.Malone}>Hadwin Malone</div>
                        <div className={styles.textdata}>Guide since 2012</div>
                        <Image src={profileimage} alt="" className={styles.guideimage}/>
                        <button className={styles.Button}>Contact</button>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <p>Aloha</p>
                </footer>
            </div>
            
           
    )
}

export default Desktop;