import { useQuery } from "@apollo/react-hooks";
import React, { useContext } from "react";
import { Indicator } from "@socialgouv/emjpm-ui-components";

import { FiltersContext } from "../Filters/context";
import { GET_NEW_MESURE_NUMBER } from "./queries";

const NewMesureIndicator = () => {
  const {
    selectedRegionalValue,
    selectedDepartementValue,
    startDateValue,
    endDateValue
  } = useContext(FiltersContext);

  const { error, data, loading } = useQuery(GET_NEW_MESURE_NUMBER, {
    variables: {
      start: startDateValue,
      end: endDateValue,
      department: selectedDepartementValue ? parseInt(selectedDepartementValue.value) : undefined,
      region: selectedRegionalValue ? parseInt(selectedRegionalValue.value) : undefined
    }
  });

  return (
    <Indicator
      error={error}
      loading={loading}
      title="Nouvelles mesures"
      indicator={data.newMesureNumber}
    />
  );
};

export { NewMesureIndicator };