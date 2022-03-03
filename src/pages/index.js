import { 
    Box,
    Container,
    useColorModeValue,
    Heading,
    chakra
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section'
import Layout from '../layouts/article'
import Paragraph from '../components/paragraph'
import LiveData from '../components/open-source/live-data'

const Avatar = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a full-stack developer based in Indonesia!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Agung Trilaksono
                    </Heading>
                    <p>Full-Stack Engineer ( PHP, JavaScript, Python )</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow='hidden'
                    >
                        <Avatar
                            src="/profile.jpeg"
                            alt="Avatar Image"
                            borderRadius='full'
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Agung is a freelance full-stack developer and open source enthusiast based in Surabaya
                    with industry experience building websites and web applications.
                    Love to sloving real-life problems with code. an he was a self-taught programmer.
                    when not online, he loves to playing games, drink coffee and reading his favorite books.
                </Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" pb={4}>
                    Open Source Project
                </Heading>
                <LiveData />
            </Section>
        </Container>
    </Layout>  
)

export default Home
export { getServerSideProps } from '../libs/chakra'