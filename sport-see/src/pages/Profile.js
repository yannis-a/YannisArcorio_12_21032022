import React from "react";
import ProfilHeader from "../components/ProfilHeader";
import ProfilActivity from "../components/ProfilActivity";
import ProfilObjectifs from "../components/ProfilObjectifs";
import ProfilRadar from "../components/ProfilRadar";
import ProfilScore from "../components/ProfilScore";
import ProfilNutrition from "../components/ProfilNutrition";
import Error from "./Error";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserInformation } from "../services/userService";
import { getActivityData } from "../services/userService";
import { getScoreData } from "../services/userService";
import { getRadarData } from "../services/userService";
import { getNutritionData } from "../services/userService";
import { getObjectifsData } from "../services/userService";
import { userExist } from "../services/dataService";

/**
 * Application profile page. Based on url:id parameter to load data
 *
 * @component
 */
const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [activityData, setActivityData] = useState([]);
  const [objectifsData, setObjectifsData] = useState([]);
  const [radarData, setRadarData] = useState([]);
  const [scoreData, setScoreData] = useState({});
  const [nutritionData, setNutritionData] = useState([]);
  const [isExist, setIsExist] = useState(true);
  const [apiUp, setApiUp] = useState(true);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
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

          setIsLoad(true);
        }
      } catch {
        setApiUp(false);
      }
    };

    getData().catch(console.error);
  }, [id]);

  if (!apiUp) {
    return (
      <Error
        title={"500 INTERNAL SERVER ERROR"}
        content={
          "Une erreur interne s'est produite sur le serveur. Il s'agit peut-être d'un incident lié à la demande ou d'un incident lié au code côté serveur. Les informations sur l'erreur se trouvent dans le corps de la réponse."
        }
      />
    );
  }

  if (!isExist) {
    return (
      <Error
        title={"Profil inconnu"}
        content={"Le profil que vous recherchez n'existe pas..."}
      />
    );
  }

  if (!isLoad) {
    return (
      <Error
        title={"Chargement du profil"}
        content={"veuillez patienter un instant..."}
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

export default Profile;
