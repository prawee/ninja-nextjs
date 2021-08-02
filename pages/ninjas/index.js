import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}

const Ninjas = (props) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keyword" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {props.ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas;