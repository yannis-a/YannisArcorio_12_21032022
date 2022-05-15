import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


/**
 * graph of activity
 * 
 * Call from {@link Profile}
 * 
 * @param {json} data json formatted according to the specific need of the card
 * @component
 */
const ProfilActivity = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="bg-red p-3 rounded-md">
          <p className="text-white mb-4">{payload[0].value} kg</p>
          <p className="text-white">{payload[1].value} Kcal</p>
        </div>
      );
    }

    return null;
  };

  const FormattedLegend = (value, entry, index) => {
    if (index === 0) {
      return <span>Poids (kg)</span>;
    } else {
      return <span>Calories brûlées (kCal)</span>;
    }
  };
  return (
    <div className="activity">
      <div className="title">Activité quotidienne</div>
      <ResponsiveContainer height={260}>
        <BarChart
          data={data}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="2 1" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis orientation="right" axisLine={false} tickLine={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
            formatter={FormattedLegend}
          />
          <Bar dataKey="kilogram" fill="#282D30" radius={5}/>
          <Bar dataKey="calories" fill="#E60000" radius={5}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ProfilActivity.propTypes = {
  /**
   * data formatted
   */
  data: PropTypes.object.isRequired
};

export default ProfilActivity;
