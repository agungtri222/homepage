import {
    Box,
    VStack,
    Text,
    HStack,
    Tag,
    Icon,
    Flex,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react"
import { FiGithub } from 'react-icons/fi'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'

const RepositoryCard = props => {
    const { title, description, language, url, stargazers_count, forks_count } = props

    const handleLinkClick = (event, link) => {
        window.open(link)
        event.stopPropagation()
    }

    return (
        <Box
            size="xl"
            py={2}
            px={[2, 4]}
            mt={4}
            rounded="xl"
            borderWidth="1px"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            borderColor={useColorModeValue('whiteAlpha.400', 'whiteAlpha.300')}
            _hover={{
                shadow: 'lg',
                textDecoration: 'none',
            }}
        >

            <VStack overflow="hidden" align="start" spacing={1}>
                <VStack spacing={1} align="start" w="100%">
                    <Flex
                        justifyContent={'space-between'}
                        width="100%"
                        onClick={(e) => handleLinkClick(e, url)}
                    >
                        <Tooltip hasArrow label="Github link" placement="top">
                            <HStack cursor={'pointer'}>
                            <Icon as={FiGithub} boxSize="0.9em" mt={'1px'} />
                            <Text
                                fontSize="sm"
                                noOfLines={1}
                                fontWeight="600"
                                align="left"
                                color={"blue.500"}
                            >
                                {title}
                            </Text>
                            </HStack>
                        </Tooltip>
                        <HStack
                            cursor={'pointer'}
                            onClick={(e) => handleLinkClick(e, url)}
                        >
                            {forks_count && (
                            <Box _hover={{ color: 'blue.500' }}>
                                <Icon as={BiGitRepoForked} boxSize="0.9em" mt={'1px'} />
                                <Box as="span" ml="1" fontSize="sm">
                                {forks_count}
                                </Box>
                            </Box>
                            )}
                            <Box _hover={{ color: 'blue.500' }}>
                            <Icon as={BiStar} boxSize="0.9em" mt={'1px'} />
                            <Box as="span" ml="1" fontSize="sm">
                                {stargazers_count}
                            </Box>
                            </Box>
                        </HStack>
                    </Flex>
                    {language && (
                    <Flex justifyContent={'space-between'} width="100%">
                        <Box>
                        <HStack spacing="1">
                            <Tag size="sm" colorScheme={"blue.500"}>
                            <Text fontSize={['0.55rem', 'inherit', 'inherit']}>
                                {language}
                            </Text>
                            </Tag>
                        </HStack>
                        </Box>
                    </Flex>
                    )}
                </VStack>
                <Box>
                    <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
                    {description}
                    </Text>
                </Box>{' '}
            </VStack>
        </Box> 
    )
}

export default RepositoryCard

