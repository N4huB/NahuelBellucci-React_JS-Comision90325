import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    } from '@chakra-ui/react'
    import { MoonIcon, SunIcon, ChevronDownIcon} from '@chakra-ui/icons'
    import { CartWidget } from '../CartWidget/CartWidget'

    export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Genesis2815 Store</Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Termos</MenuItem>
                    <MenuItem>Mates</MenuItem>
                    <MenuItem>Vasos Termicos</MenuItem>
                </MenuList>
            </Menu>
            <Flex alignItems={'center'}>
                <CartWidget />
                <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                    <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                    </Center>
                    <br />
                    <Center>
                        <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
                </Stack>
            </Flex>
            </Flex>
        </Box>
        </>
    )
}