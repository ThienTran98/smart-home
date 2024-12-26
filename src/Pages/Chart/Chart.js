import React, { useEffect } from "react";
import pic from "../../assets/img/profile pic.png";
import pic1 from "../../assets/img/image 6.png";
import pic2 from "../../assets/img/Frame 3365 (1).png";
import pic3 from "../../assets/img/Frame 3365 (2).png";
import avt from "../../assets/img/Tech Life Communication.png";
import door from "../../assets/img/Group 3341.png";
import water from "../../assets/img/drop.png";
import temp from "../../assets/img/thermometer.png";
import mark from "../../assets/img/Mask group.png";
import humidity from "../../assets/img/Group 3362.png";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useSelector } from "react-redux";
import { getAllData } from "../../Service/iotService";
import { useState } from "react";
import moment from "moment";

const CustomTooltipHeadCount = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded p-3 font-bold ">
        <p className="label">
          {payload[0]?.payload.name == "Nhiệt độ"
            ? `Nhiệt độ : ${payload[0]?.payload.value.toFixed(1)}°C`
            : `Độ ẩm : ${payload[0]?.payload.value.toFixed(1)}%`}
        </p>
      </div>
    );
  }
  return null;
};
const RADIAN = Math.PI / 180;
const COLORS = [
  "#0070c0",
  "#ed7d31",
  "#a5a5a5",
  "#ffc000",
  "#5b9bd5",
  "#70ad47",
  "#264478",
  "#9e480e",
  "#636363",
  "#997300",
  "#255e91",
];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "middle" : "middle"}
      dominantBaseline="central"
    >
      {(percent * 100) % 2 == 0
        ? `${(percent * 100).toFixed(1)}%`
        : `${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function Chart() {
  const user = useSelector((state) => state.userSlice.user);
  const listUser = useSelector((state) => state.userSlice.listUser);
  const [listIotData, setListIotData] = useState([]);

  const renderMemberAccess = () => {
    return listUser.slice(0, 4).map((item, index) => {
      return (
        <div
          key={item.id}
          className="flex items-center justify-center flex-col"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h2 className="text-sm font-bold my-3">{item.name}</h2>
          <p className="text-xs opacity-45">
            {item.role === "ADMIN" ? "Quản trị viên " : " Truy Cập"}
          </p>
        </div>
      );
    });
  };
  useEffect(() => {
    getAllData()
      .then((res) => {
        setListIotData(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const renderEnvironmentalTemperature = () => {
    return listIotData.map((item, index) => {
      return (
        <tr
          className={`${
            item.id == listIotData.length ? "bg-white" : "bg-white  border-b"
          }`}
          key={item.id}
        >
          <th
            scope="row"
            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {moment(`${item.timestamp}`).format("HH:mm:ss")}
          </th>
          <td className="px-6 py-2">{item.temperature}°C</td>
          <td className="px-6 py-2">{item.humidity}%</td>
        </tr>
      );
    });
  };
  const convertDataEnvironment = listIotData.map((item, index) => {
    return {
      name: `${moment(`${item?.timestamp}`).format("HH:mm:ss")}`,
      "Nhiệt độ": item?.temperature ? item?.temperature : 0,
      "Độ ẩm": item?.humidity ? item?.humidity : 0,
    };
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white text-[#002060] px-3 py-2 rounded-lg font-medium ">
          <p className="leading-8">Thời gian : {payload[0]?.payload.name}</p>

          <p className={`text-[#ed7d31] leading-8`}>
            Độ ẩm :<span className="mx-1">{payload[0]?.payload["Độ ẩm"]}%</span>
          </p>

          <p className={`text-[#003189] leading-8`}>
            Nhiệt độ :
            <span className="mx-1">{payload[0]?.payload["Nhiệt độ"]}°C</span>
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="w-full bg-[#f3f5f4]">
      <div className="p-8 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="flex justify-between bg-white rounded-2xl p-6 mb-6">
              <div>
                <h2 className="leading-7 font-bold text-2xl mb-3">
                  Xin chào, {user?.username ? user?.username : "Ẩn danh"}
                </h2>
                <p className="text-sm font-medium leading-4 opacity-40 mb-8">
                  Chào mừng bạn trở về, chất lượng không khí thật trong lành.
                  Hãy thư giãn.
                </p>
                <div className="flex items-center mb-4">
                  <img src={door} alt="" />
                  <p className="ml-2 text-sm font-bold leading-4 opacity-50">
                    Cửa chính đã được khoá
                  </p>
                </div>
                <div className="flex">
                  <div className="flex items-center font-bold mr-4 justify-center min-w-[180px] max-w-[180px] border-2 border-black/[0.4] hover:border-teal-500 rounded-lg h-[36px] cursor-pointer opacity-85 hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5  text-black/[0.5]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    <span className="ml-2 text-black/[0.5] text-sm">Khóa</span>
                  </div>

                  <div className="flex items-center justify-center min-w-[180px] max-w-[180px] text-white font-bold bg-blue-600 rounded-lg h-[36px] cursor-pointer opacity-85 hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>

                    <span className="ml-2 text-sm">Mở khóa</span>
                  </div>
                </div>
              </div>
              <div>
                <img src={avt} alt="" />
              </div>
            </div>
            {/* chart */}
            <div className="grid grid-cols-3 gap-4 bg-white h-[420px]">
              <div className="col-span-3 w-full ">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    width={500}
                    height={400}
                    // data={chart_data}
                    data={convertDataEnvironment}
                    margin={{
                      top: 20,
                      right: 10,
                      left: 10,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                      dataKey="name"
                      label={{
                        value: "Thời gian",
                        position: "insideBottomRight",
                        offset: 0,
                      }}
                      interval={0}
                      tick={{ fill: "#9b9b9b", fontSize: 14, fontWeight: 500 }}
                      stroke="#CCCCCC"
                      scale="band"
                    />
                    <YAxis
                      interval={0}
                      tick={{ fill: "#9b9b9b", fontSize: 14, fontWeight: 500 }}
                      domain={[0, 100]}
                      stroke="#CCCCCC"
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="Độ ẩm" stroke="#ff7300" />
                    <Line type="monotone" dataKey="Nhiệt độ" stroke="#003189" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              {/* <div className="col-span-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data_1}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      label={renderCustomizedLabel}
                      dataKey="value"
                    >
                      {data_1.map((entry, index) => {
                        return (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        );
                      })}
                    </Pie>
                    <Legend />
                    <Tooltip content={<CustomTooltipHeadCount />} />
                  </PieChart>
                </ResponsiveContainer>
              </div> */}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">
                  Nhà của {user?.username ? user?.username : "Ẩn danh"}
                </h2>
                <div>
                  <form class="max-w-sm mx-auto">
                    <select
                      id="countries"
                      class="bg-white-50 border focus:border-none focus:outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="US">Phòng khách</option>
                      <option value="CA">Phòng ngủ</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <div className="p-5 bg-white rounded-lg  w-[166px] h-[156px]">
                  <div className="flex items-center justify-between mb-2">
                    <p>Off</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultValue
                        className="sr-only peer focus:border-none focus:outline-none"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <img src={mark} alt="" />
                    <p className="font-semibold opacity-40 mt-2">Điều hoà</p>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-lg w-[166px] h-[156px] flex items-center justify-center text-blue-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>

                  <h2 className="font-semibold ml-1 ">Thêm mới</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="font-bold text-[20px]"> Thành viên</h1>
                <div className="flex items-center">
                  <div className="flex items-center px-4 py-2 bg-white rounded-lg cursor-pointer text-sm font-bold hover:opacity-80 hover:transition-all hover:bg-teal-500 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <span className="ml-1">Thêm</span>
                  </div>
                  <div className="ml-3 hover:cursor-pointer hover:opacity-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="bg-white mt-[10px] rounded-2xl px-5 py-6 flex items-center justify-between
          "
              >
                {renderMemberAccess()}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 mt-3">
                Thông số thời gian thực
              </h2>
              <div className="bg-white px-2 py-2 rounded-xl">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                      <th scope="col" className="px-6 py-2">
                        Thời gian
                      </th>
                      <th scope="col" className="px-6 py-2">
                        Nhiệt độ
                      </th>
                      <th scope="col" className="px-6 py-2">
                        Độ ẩm
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderEnvironmentalTemperature()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
