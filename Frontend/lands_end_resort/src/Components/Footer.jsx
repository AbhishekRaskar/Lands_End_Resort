import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { PhonefooterList } from "./PhonefooterList";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box pos={"static"}>
      <Box w={"100%"} display={{ base: "none", lg: "block" }}>
        <Box
          bg={"#D32F2F"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"10"}
        >
          <Box w={"80%"} margin={"auto"} gap={20}>
            <Box
              // bg={"transparent"}
              color={"white"}
              fontSize={"2xl"}
              ml={"10px"}
            >
              <Text
                textAlign={"left"}
                fontSize={"4xl"}
                fontFamily="Apple Chancery"
              >
                Lands End Hotel & Resort
              </Text>
            </Box>

            <Box w={"100%"} display={"flex"} mt={"30px"} gap={8}>
              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  ABOUT US
                </Text>
                <ListItem>FAQs</ListItem>
                <ListItem>Who We Are</ListItem>
                <ListItem>Partnerships</ListItem>
                <ListItem>Work With Us</ListItem>
                <ListItem>Press Kit</ListItem>
                <ListItem>Blogs</ListItem>
                <ListItem>Contact Us</ListItem>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  LANDS END RESORTS
                </Text>
                <ListItem>Blinkit</ListItem>
                <ListItem>Feeding India</ListItem>
                <ListItem>Hyper Pure</ListItem>
                <ListItem>Others</ListItem>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  FOR RESTAURANTS
                </Text>
                <ListItem>Partner With us</ListItem>
                <ListItem>Apps for you</ListItem>
                <Link to="/admin">
                  <Text
                    fontWeight={"bold"}
                    _hover={{
                      cursor: "pointer",
                    }}
                  >
                    <ListItem>Admin Login</ListItem>
                  </Text>
                </Link>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  LEARN MORE
                </Text>
                <ListItem>Privacy</ListItem>
                <ListItem>Security</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Sitemap</ListItem>
              </UnorderedList>

              <Box
                w={"30%"}
                h={"180px"}
                p={"15px"}
                bg={"#eeeeee"}
                borderRadius={"15px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text color={"black"}>
                  To get the lastest from us, sign up for the Lands End Hotel &
                  Resort newsletter.
                </Text>

                <Box
                  mt={"30px"}
                  bg={"#D32F2F"}
                  borderRadius={"30px"}
                  color={"white"}
                  fontWeight={"bold"}
                  w={"70%"}
                  h={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text>SIGN UP</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            w={"100%"}
            mt={"60px"}
            height={"70px"}
            bg={"white"}
            color="black"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={"10px"}
          >
            <Text ml={"45px"} fontSize={"sm"}>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies.
              <br />
              All trademarks are properties of their respective owners.
              2008-2023 © Lands End Hotel and Resort Ltd. All rights reserved.
            </Text>

            <Box
              display={"flex"}
              mr={"45px"}
              alignItems={"center"}
              gap={7}
              fontSize={25}
              justifyContent={"center"}
            >
              <FaFacebookF /> <BsTwitter /> <BsInstagram /> <ImYoutube />{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* footer for phone device */}

      <Box w={"100%"} display={{ base: "block", lg: "none" }}>
        <Box
          bg={"#D32F2F"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={"20px"}
          pb={"30px"}
        >
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={"2xl"}
            fontFamily="Lucida Handwriting"
          >
            Lands End Hotel & Resort
          </Text>
          <br />
          <Box
            w={"85%"}
            h={"180px"}
            mb={"50px"}
            p={"15px"}
            bg={"#eeeeee"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"black"}>
              To get the lastest from us, sign up for the Lands End Hotel &
              Resort newsletter.
            </Text>

            <Box
              mt={"30px"}
              bg={"#D32F2F"}
              borderRadius={"30px"}
              color={"white"}
              fontWeight={"bold"}
              w={"150px"}
              h={"50px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text>SIGN UP</Text>
            </Box>
          </Box>

          <PhonefooterList
            title={"ABOUT US"}
            h={"180px"}
            data={[
              { name: "FAQs" },
              { name: "Who We Are" },
              { name: "Partnerships" },
              { name: "Work With Us" },
              { name: "Press Kit" },
              { name: "Blogs" },
              { name: "Contact Us" },
            ]}
          />

          <PhonefooterList
            title={"LANDS END RESORTS"}
            h={"180px"}
            data={[
              { name: "Blinkit" },
              { name: "Feeding India" },
              { name: "Hyper Pure" },
              { name: "Others" },
            ]}
          />

          <PhonefooterList
            title={"FOR RESTAURANTS"}
            h={"180px"}
            data={[{ name: "Partner With us" }, { name: "Apps for you" }]}
          />

          <PhonefooterList
            title={"LEARN MORE"}
            h={"180px"}
            data={[
              { name: "Privacy" },
              { name: "Mobile App Download" },
              { name: "Partnerships" },
              { name: "Terms" },
              { name: "Sitemap" },
            ]}
          />
        </Box>
        <Box pt={"15px"} bg="#D32F2F" w={"100%"} pb={"15px"}>
          <Box
            display={"flex"}
            mb={"20px"}
            w={"100%"}
            alignItems={"center"}
            gap={9}
            fontSize={25}
            justifyContent={"center"}
            color={"white"}
          >
            <FaFacebookF /> <BsTwitter /> <BsInstagram /> <ImYoutube />{" "}
          </Box>
          <Text
            color={"white"}
            ml={"45px"}
            fontSize={"sm"}
            textAlign={"center"}
          >
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies.
            <br />
            All trademarks are properties of their respective owners. 2008-2023
            © Lands End Hotel and Resort Ltd. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
