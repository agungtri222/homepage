import { 
    Box,
    chakra,
    Container,
    Heading,
    Flex,
    Center,
    Text
} from '@chakra-ui/react'
import Layout from '../layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph';
import { FcCalendar } from "react-icons/fc";
import Image from 'next/image'

const CompanyLogo = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Works = () => (
    <Layout title="Works">
        <Container>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <Flex>
                        <Center pr={1}>
                            <Text>
                                <FcCalendar />
                            </Text>
                        </Center>  
                        <Box flex='1'>
                            <Text>
                                2016 - 2018
                            </Text>
                        </Box>
                    </Flex>
                </Heading>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h3" variant="section-title">
                            Asiacommerce Network
                        </Heading>
                        <Paragraph>
                            The journey is beginning when he&apos;s start working in a small startup company in Surabaya, Indonesia.
                            Working as a Full-Stack Developer and learning much about Laravel, PHP, Vue, and React as well.
                        </Paragraph>
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
                            <CompanyLogo
                                src="/asiacommerce.jpeg"
                                alt="company Image"
                                borderRadius='full'
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <Flex>
                        <Center pr={1}>
                            <Text>
                                <FcCalendar />
                            </Text>
                        </Center>  
                        <Box flex='1'>
                            <Text>
                                2019 - 2020
                            </Text>
                        </Box>
                    </Flex>
                </Heading>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h3" variant="section-title">
                            Assetkita
                        </Heading>
                        <Paragraph>
                            After he decided to resign from his previous company, he got hired by a peer to peer lending startup in Surabaya, Indonesia.
                            Still use Laravel, Vue and Jquery for stack he writes.
                            After almost a year of work, The CEO decided to close the company because of a pandemic issue
                        </Paragraph>
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
                            <CompanyLogo
                                src="/assetkita.jpeg"
                                alt="company Image"
                                borderRadius='full'
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Collaborations
                </Heading>
                <Paragraph>
                    Working as Front-end Developer after his previous job with his friend in state-owned enterprise in Indonesia
                    It&apos;s good to working with new environment, Working from home and he spent 12 hours a day to solve
                    a Business flow.
                </Paragraph>
            </Section>
        </Container>
    </Layout> 
)

export default Works
export { getServerSideProps } from '../libs/chakra'