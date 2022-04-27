import React from "react";
import ProfilHeader from "../components/ProfilHeader";
import ProfilActivity from "../components/ProfilActivity";
import ProfilObjectifs from "../components/ProfilObjectifs";
import ProfilRadar from "../components/ProfilRadar";
import ProfilScore from "../components/ProfilScore";
import ProfilNutrition from "../components/ProfilNutrition";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserInformation } from "../services/userInfoService";
import { getActivityData } from "../services/userActivityService";
import { getScoreData } from "../services/userScoreService";
import { getRadarData } from "../services/userRadarService";
import { getNutritionData } from "../services/userNutritionService";
import { getObjectifsData } from "../services/userObjectifsService";

const Profil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [activityData, setActivityData] = useState({});
  const [objectifsData, setObjectifsData] = useState({});
  const [radarData, setRadarData] = useState({});
  const [scoreData, setScoreData] = useState({});
  const [nutritionData, setNutritionData] = useState({});

  useEffect(() => {
    async function getData() {
      setUserData(await getUserInformation(id));
      setActivityData(await getActivityData(id));
      setObjectifsData(await getObjectifsData(id));
      setRadarData(await getRadarData(id));
      setScoreData(await getScoreData(id));
      setNutritionData(await getNutritionData(id));
    }

    getData();
  }, [id]);

  return (
    <div className="profil">
      <ProfilHeader data={userData} />
      <ProfilActivity data={activityData} />
      <ProfilObjectifs data={objectifsData} />
      <ProfilRadar data={radarData}/>
      <ProfilScore data={scoreData}/>
      <ProfilNutrition data={nutritionData}/>
    </div>
  );
};

export default Profil;
