import axios from "axios";

import { fetchData, API } from "../components/AxiosFetch";

jest.mock("axios");

describe("fetchData", () => {
  it ("Obtiene datos de la API", async () => {
    const data = {}

    axios.get.mockImplementationOnce(() => 
    Promise.resolve(data));

    await expect(fetchData("react")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith (`${API}/search?query=react`,)
  })
})

it("Datos de error en la Api", async () => {
  const errorMessage = "Error en la conexion";

  axios.get.mockImplementationOnce(()=>
  Promise.reject(new Error(errorMessage)),
  );
  await expect(fetchData("react")).rejects.toThrow(errorMessage);
})

