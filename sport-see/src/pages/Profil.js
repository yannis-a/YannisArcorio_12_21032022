import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profil = () => {
    const { id } = useParams();
    const [firstNameData, setFirstNameData] = useState({});
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [scoreData, setScoreData] = useState({});
    const [countData, setCountData] = useState([]);
    const [isExistingId, setIsExistingId] = useState(true);
    const [isLoadedProfile, setIsLoadedProfile] = useState(false);
    const [displayDataError, setDisplayDataError] = useState(false);

    useEffect(() => {

        async function getData() {
            try {
                const userData = await DataService.GetUserData(id);
                
                // We need to check if the data actually exists because the API doesn't send back any error code but instead sends a random string saying there is no user data
                if (userData.data === undefined) {
                    setIsExistingId(false);
                } else {
                    const activityData = await DataService.GetActivityData(id);
                    const averageSessionData = await DataService.GetAverageSessionsData(id);
                    const performanceData = await DataService.GetPerformanceData(id);
                    
                    setIsExistingId(true);

                    // Saving in a state the firstName formatted data we got from the service
                    setFirstNameData(NameDataService.formatNameData(userData));

                    // Saving in a state the activity formatted data we got from the service
                    setActivityData(ActivityDataService.formatActivityData(activityData));

                    // Saving in a state the average sessions formatted data we got from the service
                    setAverageSessionsData(AverageSessionDataService.formatAverageSessionData(averageSessionData));

                    // Saving in a state the performance formatted data we got from the service
                    setPerformanceData(PerformanceDataService.formatPerformanceData(performanceData));

                    // Saving in a state the score formatted data we got from the service
                    setScoreData(ScoreDataService.formatScoreData(userData));

                    // Saving in a state the consumed count formatted data we got from the service
                    setCountData(CountDataService.formatCountData(userData));

                    // Saving in a state the information that the profile has been successfully loaded
                    setIsLoadedProfile(true);
                }
            }
            catch (err) {
                console.error(err);
                setDisplayDataError(true);
            }
        }

        getData();
    }, [id]);

    return (
        <div className='profil'>
            <div className='header'>
                <h1>Name</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='weight'></div>
            <div className='objectifs'></div>
            <div className='radar'></div>
            <div className='kpi'></div>
            <div className='cal'></div>
        </div>
    );
};

export default Profil;