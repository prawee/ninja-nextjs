import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keyword" content="ninjas" />
            </Head>
            <div>   
                <h1>About</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
        </>
    );
}

export default About;