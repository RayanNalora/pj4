import React from "react";
import "./CropTable.css"; // تأكد من استيراد ملف CSS

const cropData = [
  {
    season: "Spring 2020",
    crop: "Wheat",
    production: "2 tons",
    investor: "mohammad@gmail.com",
    problems: "None",
    start: "1.1.2020",
    end: "31.12.2020",
  },
  {
    season: "Autumn 2021",
    crop: "Barley",
    production: "1.5 tons",
    investor: "ahmad@gmail.com",
    problems: "Agricultural pests",
    start: "1.1.2021",
    end: "31.12.2022",
  },
  {
    season: "Autumn 2021",
    crop: "Potatoes",
    production: "3 tons",
    investor: "ahmad@gmail.com",
    problems: "None",
    start: "1.1.2021",
    end: "31.12.2022",
  },
  {
    season: "Spring 2023",
    crop: "Corn",
    production: "2.8 tons",
    investor: "khaled@gmail.com",
    problems: "Irrigational problems",
    start: "1.1.2023",
    end: "31.12.2024",
  },
  {
    season: "Summer 2023",
    crop: "Tomatoes",
    production: "4 tons",
    investor: "khaled@gmail.com",
    problems: "Fungal infection",
    start: "1.1.2024",
    end: "31.12.2024",
  },
];

const CropTable = () => {
  return (
    <div className="table-container">
      <table className="crop-table">
        <thead>
          <tr>
            <th>Season</th>
            <th>Crop</th>
            <th>Production</th>
            <th>Investor Contact</th>
            <th>Problems</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {cropData.map((item, index) => (
            <tr key={index}>
              <td>{item.season}</td>
              <td>{item.crop}</td>
              <td>{item.production}</td>
              <td className="email">{item.investor}</td>
              <td>{item.problems}</td>
              <td>{item.start}</td>
              <td>{item.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropTable;