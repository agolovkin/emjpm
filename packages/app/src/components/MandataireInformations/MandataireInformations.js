import { Card, Heading3, Heading5 } from "@socialgouv/emjpm-ui-core";
import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import { MailOutline } from "styled-icons/material";

import { LinkButton } from "../Commons";
import { UserContext } from "../UserContext";
import { boxStyle, flexStyle, iconTextStyle, innerTextStyle } from "./style";

const MandataireInformations = props => {
  const user = useContext(UserContext);

  const { email, nom, prenom, user_tis } = user;
  return (
    <Box {...props}>
      <Card p="5">
        <Heading3>
          {nom ? nom : "Nom non renseigné"} {prenom ? prenom : "Prénom non renseigné"}
        </Heading3>
        <Flex sx={flexStyle}>
          <Box sx={boxStyle}>
            <Heading5>Vos informations</Heading5>
            <Flex mt="2">
              <MailOutline size="16" />
              <Text sx={iconTextStyle}>{email}</Text>
            </Flex>
            <Text sx={innerTextStyle}>{nom ? nom : "Nom non renseigné"} </Text>
            <Text sx={innerTextStyle}>{prenom ? prenom : "Prénom non renseigné"}</Text>
          </Box>
          <Box sx={boxStyle}>
            <Heading5 mb="3">Tribunaux d’instance</Heading5>
            {user_tis.map((ti, index) => {
              return (
                <Text key={index} sx={innerTextStyle}>
                  {ti.ti.etablissement}
                </Text>
              );
            })}
          </Box>
        </Flex>
        <Flex mt="5">
          <Box>
            <LinkButton href="/mandataires/edit-informations">Modifier vos informations</LinkButton>
          </Box>
        </Flex>
        <Flex mt="1">
          <LinkButton href="/mandataires/edit-password">Modifier votre mot de passe</LinkButton>
        </Flex>
      </Card>
    </Box>
  );
};

export { MandataireInformations };