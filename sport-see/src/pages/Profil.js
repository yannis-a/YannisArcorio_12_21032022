import React from "react";
import ProfilHeader from "../components/ProfilHeader";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserInformation } from "../services/userInfoService";

const Profil = () => {
  const { id } = useParams();
  const [userInfos, setUserInfo] = useState({});

  useEffect(() => {
    async function getData() {
      setUserInfo(await getUserInformation(id));
        
    }

    getData();
  }, [id]);

  return (
    <div className="profil">
      <ProfilHeader data={userInfos} />
      <div className="weight"></div>
      <div className="objectifs"></div>
      <div className="radar"></div>
      <div className="kpi"></div>
      <div className="cal"></div>
    </div>
  );
};

export default Profil;
