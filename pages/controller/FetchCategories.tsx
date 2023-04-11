import { useEffect, useState } from "react";
import styles from "../../styles/Desktop.module.css";
import arrowimage from "../../public/assets/Group 1.png";
import Image from "next/image";
 
export default function getCategories() {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setLoading] = useState(false)
    // const rows: any[]=[]
    // const rows = new Set<string>();
  
    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:3000/categories')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          console.log(data)
        //   console.log(data.length);
        })
    }, [])

  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
        <div>
            {data.map((category)=>(
                    <div className={styles.categories}>
                            <div className={styles.item}>
                                <div className={styles.name}>{category.name}</div>
                                <Image src={arrowimage} alt="arrowimage" className={styles.group} key={Math.random()}/>
                            </div>
                    </div>
            ))}
        </div>
    )
}
      