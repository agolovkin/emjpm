import { useQuery } from "@apollo/react-hooks";
import { Card, Heading2, Heading4, Spinner, Text } from "@emjpm/ui";
import React, { useContext } from "react";
import { Box, Flex } from "rebass";

import { FiltersContext } from "../ListeBlancheFilter/context";
import { LB_SUMMARY } from "./queries";

const boxStyle = {
  borderBottom: "1px solid",
  borderBottomColor: "mediumGray",
  mb: "1"
};

const labelStyle = {
  color: "mediumGray",
  fontFamily: "body",
  fontSize: "11px",
  fontWeight: "600"
};

const valueStyle = {
  fontFamily: "heading",
  fontSize: "13px",
  fontWeight: "600",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const LabelValue = ({ label, value }) => (
  <Flex sx={boxStyle}>
    <Box width="30%">
      <Text sx={labelStyle}>{label}</Text>
    </Box>
    <Text sx={valueStyle}>{value}</Text>
  </Flex>
);

const ListeBlancheSummary = () => {
  const { selectedDepartement } = useContext(FiltersContext);

  const { data, error, loading } = useQuery(LB_SUMMARY, {
    variables: {
      departementId: selectedDepartement ? parseInt(selectedDepartement.value) : null
    }
  });

  if (loading) {
    return (
      <Card width="100%">
        <Box my="5">
          <Spinner />
        </Box>
      </Card>
    );
  }

  if (error) {
    return (
      <Card width="100%">
        <Heading4>erreur</Heading4>
      </Card>
    );
  }

  const {
    individuel: {
      aggregate: { count: individuelCount }
    },
    prepose: {
      aggregate: { count: preposeCount }
    },
    service: {
      aggregate: { count: serviceCount }
    },
    ti: {
      aggregate: { count: tiCount }
    }
  } = data;

  return (
    <Card>
      <Heading2>
        {selectedDepartement ? selectedDepartement.label : "Tous les départements"}
      </Heading2>
      <Flex flexDirection="column" pt={1}>
        <LabelValue label="Mandataire individuel" value={individuelCount}></LabelValue>
        <LabelValue label="Mandataire préposé à un établissement" value={preposeCount}></LabelValue>
        <LabelValue label="Membre d'un service mandataire" value={serviceCount}></LabelValue>
        <LabelValue label="Magistrat" value={tiCount}></LabelValue>
      </Flex>
    </Card>
  );
};

export { ListeBlancheSummary };
