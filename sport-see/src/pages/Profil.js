import React from "react";
import ProfilHeader from "../components/ProfilHeader";
import ProfilWeight from "../components/ProfilWeight";
import ProfilObjectifs from "../components/ProfilObjectifs";
import ProfilRadar from "../components/ProfilRadar";
import ProfilKpi from "../components/ProfilKpi";
import ProfilCal from "../components/ProfilCal";
import { useState, useEffect } from "react";
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
      <ProfilWeight />
      <ProfilObjectifs />
      <ProfilRadar />
      <ProfilKpi />
      <ProfilCal />
    </div>
  );
};

export default Profil;
