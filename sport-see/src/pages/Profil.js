import React from "react";
import ProfilHeader from "../components/ProfilHeader";
import ProfilActivity from "../components/ProfilActivity";
import ProfilObjectifs from "../components/ProfilObjectifs";
import ProfilRadar from "../components/ProfilRadar";
import ProfilScore from "../components/ProfilScore";
import ProfilNutrition from "../components/ProfilNutrition";
import Error from "../pages/Error";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserInformation } from "../services/userInfoService";
import { getActivityData } from "../services/userActivityService";
import { getScoreData } from "../services/userScoreService";
import { getRadarData } from "../services/userRadarService";
import { getNutritionData } from "../services/userNutritionService";
import { getObjectifsData } from "../services/userObjectifsService";
import { userExist } from "../services/dataService";

const Profil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [activityData, setActivityData] = useState([]);
  const [objectifsData, setObjectifsData] = useState([]);
  const [radarData, setRadarData] = useState([]);
  const [scoreData, setScoreData] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [isExist, setIsExist] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const isUser = await userExist(id);

      if (!isUser) {
        setIsExist(false);
      } else {
        getNutritionData(id).then((res) => {
          setNutritionData(res);
        });
        getUserInformation(id).then((res) => {
          setUserData(res);
        });
        getActivityData(id).then((res) => {
          setActivityData(res);
        });
        getScoreData(id).then((res) => {
          setScoreData(res);
        });
        getRadarData(id).then((res) => {
          setRadarData(res);
        });
        getObjectifsData(id).then((res) => {
          setObjectifsData(res);
        });
      }
    };

    getData().catch(console.error);
  }, [id]);

  if (!isExist) {
    return (
      <Error
        title={"Profil inconnu"}
        content={"La profil que vous recherchez n'existe pas..."}
      />
    );
  }

  return (
    <div className="profil">
      <ProfilHeader data={userData} />
      <div className="graphs">
        <div>
          <ProfilActivity data={activityData} />
          <div>
            <ProfilObjectifs data={objectifsData} />
            <ProfilRadar data={radarData} />
            <ProfilScore data={scoreData} />
          </div>
        </div>
        <ProfilNutrition data={nutritionData} />
      </div>
    </div>
  );
};

export default Profil;
