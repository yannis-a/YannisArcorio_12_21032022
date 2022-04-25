import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

/**
 *
 * @components
 */
const ProfilWeight = ({ data }) => {

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className="bg-red p-3 rounded-md">
                <p className="text-white mb-4">{payload[0].value}kg</p>
                <p className="text-white">{payload[1].value}Cal</p>
            </div>
        );
    }
    
    return null;
};

  return (
    <div className="weight">
      <BarChart width={730} height={250} data={data} barSize={7}>
        <CartesianGrid strokeDasharray="2 1" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis orientation="right" axisLine={false} tickLine={true} />
        <Tooltip content={<CustomTooltip />}/>
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </div>
  );
};

export default ProfilWeight;
