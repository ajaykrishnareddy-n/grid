import "./styles.css";
import data from "./sample.json";

export default function App() {
  const results = data.enodeb_healthcheck_result.summary;
  console.log(results);

  const render = (data) => {
    return (
      <div class="grid-container">
        {data.map((d) => {
          return (
            <div className="textIconContainer">
              <p>Icon</p>
              <p style={{ marginLeft: "10px" }}>{d.header} </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      {results.map((result) => {
        return (
          <div>
            <div style={{ textAlign: "left" }}>
              <h1>{result.enodeb_id}</h1>
            </div>
            {render(result.data)}
          </div>
        );
      })}
    </div>
  );
}
