import React from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import EditChurch from "../components/edit/EditChurch";
import { IOveralTable } from "../interfaces/Itable";
import { data } from "../constants/tables";
// import LoadingSpinner from "../components/UI/loadingSpinner/LoadingSpinner";


const ChurchEdit = () => {
  const params = useParams();
  let { onboardingId } = params
  console.log(onboardingId);

  let churchInfo: IOveralTable = data.filter(
    (item) => item.id.toString() === onboardingId 
  )[0];
  
  let churchEdit;

  churchEdit = <EditChurch datas={churchInfo}/>
  
  return (
    <section>
      <h2 className="title">Edit {}</h2>
      {churchEdit}
    </section>
  )
}

export default ChurchEdit