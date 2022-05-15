import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

/**
 * graph of score
 * 
 * Call from {@link Profile}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component
 */
const ProfilScore = ({ data }) => {
  return (
    <div className="score">
      <div className="title">Score</div>

      <div className="content">
        <div className="percent">{data.percent}%</div>
        <div className="text">de votre objectifs</div>
      </div>
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data.score}
            dataKey="score"
            innerRadius={90}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
            strokeWidth="0"
            cornerRadius={5}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

ProfilScore.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.object.isRequired
};

export default ProfilScore;
