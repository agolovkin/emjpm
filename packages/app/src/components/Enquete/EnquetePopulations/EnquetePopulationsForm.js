import { Heading1, Heading3 } from "@emjpm/ui";
import { Label } from "@rebass/forms";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Box, Flex, Text } from "rebass";

import { enquetePopulationsSchema } from "../../../lib/validationSchemas/enquetePopulationsSchema";
import { SmallInput } from "../../Commons/SmallInput";
import { EnqueteStepperButtons } from "../EnqueteStepperButtons";
import { EnquetePopulationTrancheAgeField } from "./EnquetePopulationsFields";

export function calculateTotal(firstProperty, secondProperty) {
  return Number(firstProperty || 0) + Number(secondProperty || 0);
}

function mapDataPropsToFormValues(data) {
  return {
    age_inf_25_ans_homme: data.age_inf_25_ans_homme || "",
    age_inf_25_ans_femme: data.age_inf_25_ans_femme || "",
    age_25_39_ans_homme: data.age_25_39_ans_homme || "",
    age_25_39_ans_femme: data.age_25_39_ans_femme || "",
    age_40_59_ans_homme: data.age_40_59_ans_homme || "",
    age_40_59_ans_femme: data.age_40_59_ans_femme || "",
    age_60_74_ans_homme: data.age_60_74_ans_homme || "",
    age_60_74_ans_femme: data.age_60_74_ans_femme || "",
    age_sup_75_ans_homme: data.age_sup_75_ans_homme || "",
    age_sup_75_ans_femme: data.age_sup_75_ans_femme || "",
    anciennete_inf_1_an: data.anciennete_inf_1_an || "",
    anciennete_1_3_ans: data.anciennete_1_3_ans || "",
    anciennete_3_5_ans: data.anciennete_3_5_ans || "",
    anciennete_5_10_ans: data.anciennete_5_10_ans || "",
    anciennete_sup_10_ans: data.anciennete_sup_10_ans || "",
    type_etablissement_personne_handicapee: data.type_etablissement_personne_handicapee || "",
    type_service_personne_handicapee: data.type_service_personne_handicapee || "",
    type_ehpad: data.type_ehpad || "",
    type_autre_etablissement_personne_agee: data.type_autre_etablissement_personne_agee || "",
    type_chrs: data.type_chrs || "",
    type_service_hospitalier_soins_longue_duree:
      data.type_service_hospitalier_soins_longue_duree || "",
    type_service_psychiatrique: data.type_service_psychiatrique || "",
    type_autre_service: data.type_autre_service || ""
  };
}

export const EnquetePopulationsForm = props => {
  const { title, goToPrevPage, data, loading = false } = props;

  const { handleSubmit, handleChange, values, errors, setValues } = useFormik({
    onSubmit: async (values, { setSubmitting }) => {
      await props.handleSubmit(values);
      setSubmitting(false);
    },
    validationSchema: enquetePopulationsSchema,
    initialValues: mapDataPropsToFormValues(data)
  });

  useEffect(() => {
    setValues(mapDataPropsToFormValues(data));
  }, [data, setValues]);

  return (
    <Box
      sx={{
        strong: {
          color: "primary"
        }
      }}
      as="form"
      onSubmit={handleSubmit}
    >
      <Box textAlign="center" mb={"80px"}>
        <Heading1 mb={1}>{"Populations"}</Heading1>
        <Text
          sx={{
            color: "titleSecondary",
            fontWeight: "bold"
          }}
        >
          Les données à remplir ci-dessous sont celles au <strong>31/12/2019</strong>
        </Text>
      </Box>

      {title && <Heading3>{title}</Heading3>}

      <Text my={4} fontWeight="bold" color="titleSecondary">
        PAR TRANCHE D’ÂGE
      </Text>

      <EnquetePopulationTrancheAgeField
        label="Personnes de moins de 25 ans :"
        errors={errors}
        menFieldId="age_inf_25_ans_homme"
        womenFieldId="age_inf_25_ans_femme"
        handleChange={handleChange}
        values={values}
      />

      <EnquetePopulationTrancheAgeField
        errors={errors}
        label="Personnes entre 25 et 39 ans :"
        menFieldId="age_25_39_ans_homme"
        womenFieldId="age_25_39_ans_femme"
        handleChange={handleChange}
        values={values}
      />

      <EnquetePopulationTrancheAgeField
        errors={errors}
        label="Personnes entre 40 et 59 ans :"
        menFieldId="age_40_59_ans_homme"
        womenFieldId="age_40_59_ans_femme"
        handleChange={handleChange}
        values={values}
      />

      <EnquetePopulationTrancheAgeField
        errors={errors}
        label="Personnes entre 60 et 74 ans :"
        menFieldId="age_60_74_ans_homme"
        womenFieldId="age_60_74_ans_femme"
        handleChange={handleChange}
        values={values}
      />

      <EnquetePopulationTrancheAgeField
        errors={errors}
        label="Personnes de plus de 75 ans :"
        menFieldId="age_sup_75_ans_homme"
        womenFieldId="age_sup_75_ans_femme"
        handleChange={handleChange}
        values={values}
      />

      <Text mt={"80px"} mb={4} fontWeight="bold" color="titleSecondary">
        PAR ANCIENNETÉ DE PRISE EN CHARGE
      </Text>

      <Flex mb={4} alignItems="center">
        <Label width="150px">Depuis moins d’un an :</Label>
        <SmallInput
          mx={1}
          min={0}
          id="anciennete_inf_1_an"
          name="anciennete_inf_1_an"
          value={values.anciennete_inf_1_an}
          hasError={!!errors.anciennete_inf_1_an}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="150px">De 1 à 3 ans :</Label>
        <SmallInput
          mx={1}
          min={0}
          id="anciennete_1_3_ans"
          name="anciennete_1_3_ans"
          value={values.anciennete_1_3_ans}
          hasError={!!errors.anciennete_1_3_ans}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="150px">De 3 à 5 ans :</Label>
        <SmallInput
          mx={1}
          min={0}
          id="anciennete_3_5_ans"
          name="anciennete_3_5_ans"
          value={values.anciennete_3_5_ans}
          hasError={!!errors.anciennete_3_5_ans}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="150px">De 5 à 10 ans :</Label>
        <SmallInput
          mx={1}
          min={0}
          id="anciennete_5_10_ans"
          name="anciennete_5_10_ans"
          value={values.anciennete_5_10_ans}
          hasError={!!errors.anciennete_5_10_ans}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="150px">10 ans et plus :</Label>
        <SmallInput
          mx={1}
          min={0}
          id="anciennete_sup_10_ans"
          name="anciennete_sup_10_ans"
          value={values.anciennete_sup_10_ans}
          hasError={!!errors.anciennete_sup_10_ans}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Text my={4} fontWeight="bold" color="titleSecondary">
        {"PAR CATEGORIE D'ETABLISSEMENT"}
      </Text>

      <Flex mb={4} alignItems="center">
        <Label htmlFor={"type_etablissement_personne_handicapee"} width="300px">
          Etablissements pour personnes handicapées
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_etablissement_personne_handicapee"
          name="type_etablissement_personne_handicapee"
          value={values.type_etablissement_personne_handicapee}
          hasError={!!errors.type_etablissement_personne_handicapee}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_service_personne_handicapee"}>
          Services pour personnes handicapées
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_service_personne_handicapee"
          name="type_service_personne_handicapee"
          value={values.type_service_personne_handicapee}
          hasError={!!errors.type_service_personne_handicapee}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_ehpad"}>
          EHPAD
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_ehpad"
          name="type_ehpad"
          value={values.type_ehpad}
          hasError={!!errors.type_ehpad}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_autre_etablissement_personne_agee"}>
          Autres établissements pour personnes âgées
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_autre_etablissement_personne_agee"
          name="type_autre_etablissement_personne_agee"
          value={values.type_autre_etablissement_personne_agee}
          hasError={!!errors.type_autre_etablissement_personne_agee}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_chrs"}>
          {"Centre d'hébergement et de réinsertion sociale (CHRS)"}
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_chrs"
          name="type_chrs"
          value={values.type_chrs}
          hasError={!!errors.type_chrs}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_service_hospitalier_soins_longue_duree"}>
          {"Service de soins de longue durée"}
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_service_hospitalier_soins_longue_duree"
          name="type_service_hospitalier_soins_longue_duree"
          value={values.type_service_hospitalier_soins_longue_duree}
          hasError={!!errors.type_service_hospitalier_soins_longue_duree}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_service_psychiatrique"}>
          {"Service psychiatrique"}
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_service_psychiatrique"
          name="type_service_psychiatrique"
          value={values.type_service_psychiatrique}
          hasError={!!errors.type_service_psychiatrique}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Flex mb={4} alignItems="center">
        <Label width="300px" htmlFor={"type_autre_service"}>
          {"Autre service"}
        </Label>
        <SmallInput
          mx={1}
          min={0}
          id="type_autre_service"
          name="type_autre_service"
          value={values.type_autre_service}
          hasError={!!errors.type_autre_service}
          onChange={handleChange}
          type="number"
        />
        <Label width="auto">personnes</Label>
      </Flex>

      <Box mt={4}>
        <EnqueteStepperButtons disabled={loading} goToPrevPage={goToPrevPage} />
      </Box>
    </Box>
  );
};

export default EnquetePopulationsForm;
