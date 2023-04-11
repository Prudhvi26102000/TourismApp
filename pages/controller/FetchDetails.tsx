import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from "../../styles/Desktop.module.css";
import arrowimage from "../../public/assets/Group 1.png";

export default function gethighlights() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setLoading] = useState(false)
  let count=0;

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/highlights')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div >
      {data.map((highlight,key)=>(

        <div className={styles.tile}>
          <div className={styles.rectangle}>
            <img key={Math.random()} src={highlight.image} alt='highlight-image' className={styles.rectangle}></img>
            {/* <Image src={highlight.image} alt="highlight-image" className={styles.image}/> */}
          </div>
          <div className={styles.textbox}>
            <div className={styles.top}>
              <div className={styles.title}>{highlight.title}</div> 
              <div className={styles.desc}>{highlight.description}</div>
            </div>
            <div className={styles.bottom}>
                <Image src={arrowimage} alt="arrowimage" className={styles.group} key={Math.random()}/>
            </div>
          </div>
   

        </div>
      ))}
    </div>
  );
}