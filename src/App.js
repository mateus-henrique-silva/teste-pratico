import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header/header";
import { Chart } from "react-google-charts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function App() {
  const Data = [
    {
      id: "0",
      dados: {
        categoria: "comida",
        produtos: {
          produto: "coxinha",
          marca: "seara",
          meses: {
            janeiro: 100,
            fevereiro: 255,
            março: 300,
            abril: 488,
            maio: 599,
          },
        },

        produtos2: {
          produto: "macarrão",
          marca: "italiano",
          meses: {
            janeiro: 100,
            fevereiro: 255,
            março: 300,
            abril: 488,
            maio: 599,
          },
        },
      },
    },
    {
      id: "1",

      dados: {
        categoria: "roupa",
        produtos: {
          produto: "camisa",
          marca: "nike",
          meses: {
            janeiro: 10,
            fevereiro: 125,
            março: 600,
            abril: 888,
            maio: 499,
          },
        },

        produtos2: {
          produto: "calça",
          marca: "gucci",
          meses: {
            janeiro: 100,
            fevereiro: 255,
            março: 200,
            abril: 188,
            maio: 299,
          },
        },
      },
    },
  ];

  const [selectOne, setSelectOne] = useState("...");
  const [selectTwo, setSelectTwo] = useState("...");
  const [selectThree, setSelectThree] = useState("...");
  const [jan, setJan] = useState(0);
  const [fev, setFev] = useState(0);
  const [mar, setMar] = useState(0);
  const [april, setApril] = useState(0);
  const [may, setMay] = useState(0);

  const [mes, setMes] = useState(0);

  useEffect(() => {
    let dadosmes = [];
    dadosmes = Data.map((item) =>
      selectTwo == "coxinha"
        ? { janeiro: 100, fevereiro: 255, março: 300, abril: 488, maio: 599 }
        : {
            janeiro: 10,
            fevereiro: 125,
            março: 600,
            abril: 888,
            maio: 499,
          }
    );
    // dadosmes = Data.map((item) =>
    //   selectTwo == "camisa"
    //     ? { janeiro: 10, fevereiro: 125, março: 600, abril: 888, maio: 499 }
    //     : {
    //         janeiro: 0,
    //         fevereiro: 0,
    //         março: 0,
    //         abril: 0,
    //         maio: 0,
    //       }
    // );
    setApril(dadosmes[0].abril);
    setFev(dadosmes[0].fevereiro);
    setMar(dadosmes[0].março);
    setJan(dadosmes[0].janeiro);
    setMay(dadosmes[0].maio);
  }, [selectOne, selectThree, selectTwo]);

  return (
    <div className="App">
      <Header></Header>
      <div className="width-select-option">
        <div>
          {" "}
          <label htmlFor="">Categorias:</label>
          <select
            name="categorias"
            id=""
            onChange={(item) => {
              setSelectOne(item.target.value);

              setSelectTwo(
                item.target.value == "comida" ? "coxinha" : "camisa"
              );

              setSelectThree(item.target.value == "comida" ? "seara" : "nike");
            }}
          >
            <option value="...">{selectOne}</option>
            {Data.map((item) => {
              return (
                <option value={item.dados.categoria}>
                  {item.dados.categoria}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {" "}
          <label htmlFor="">Produto:</label>
          <select
            name="produto"
            id="produto"
            onChange={(item) => {
              setSelectTwo(item.target.value);
              setSelectOne(item.target.value == "coxinha" ? "comida" : "roupa");
              setSelectThree(item.target.value == "coxinha" ? "seara" : "nike");
            }}
          >
            <option value="..."> {selectTwo}</option>

            {Data.map((item) => {
              return (
                <option value={item.dados.produtos.produto}>
                  {item.dados.produtos.produto}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {" "}
          <label htmlFor="">Marca:</label>
          <select
            name="marca"
            id=""
            onChange={(item) => {
              setSelectThree(item.target.value);

              setSelectOne(item.target.value == "seara" ? "comida" : "roupa");
              setSelectTwo(item.target.value == "seara" ? "coxinha" : "camisa");
            }}
          >
            <option value="...">{selectThree}</option>
            {Data.map((item) => {
              return (
                <option value={item.dados.produtos.marca}>
                  {item.dados.produtos.marca}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="graf-space-mid">
        <div className="graf-space">
          <div>
            <div className="back" style={{ height: ` ${jan}px` }}></div>
            <span>Janeiro</span>
          </div>
          <div>
            <div className="back" style={{ height: ` ${fev}px` }}></div>
            <span>Fevereiro</span>
          </div>

          <div>
            <div className="back" style={{ height: ` ${mar}px` }}>
              {" "}
            </div>
            <span>Março</span>
          </div>
          <div>
            <div className="back" style={{ height: ` ${april}px` }}></div>
            <span>Abril</span>
          </div>

          <div>
            <div className="back" style={{ height: ` ${may}px` }}></div>
            <span>Maio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
