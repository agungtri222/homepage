import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Agung's homepage" />
                <meta name="author" content="Agung Trilaksono" />
                <meta name="author" content="agungtri222" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Agungtri222" />
                <meta name="twitter:creator" content="@Agungtri222" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Agung Trilaksono's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Agung Trilaksono - Homepage</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>

            <Footer />
        </Box>
    )
}

export default Main