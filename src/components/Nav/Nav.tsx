import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';
import { CloseIcon, MenuIcon } from './Icons';

type MenuItemProps = {
  children: React.ReactNode,
  to?: string,
  rest?: any
}

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }:  {toggle: () => void, isOpen: boolean}) => (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );

const MenuItem = ({ children = null, to = "/", ...rest }: MenuItemProps) => (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
);


const MenuLinks = ({ isOpen }: {isOpen: boolean}) => (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        fontSize="15px"
      >
        <MenuItem to="/checkout">Checkout</MenuItem>
        <MenuItem to="/timeline">Timeline</MenuItem>
        <MenuItem to="/cards">Saved Cards</MenuItem>
      </Stack>
    </Box>
  );

const NavBarContainer = ({ children = null, ...props }: {children?: React.ReactNode, props?: any}) => (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["#3f51b5"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
);


export default NavBar;