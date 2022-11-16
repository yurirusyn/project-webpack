import axios from "axios";
import ProductsService from "../index.ts";
import productsMock from "../../common/__fixtures__/index";

jest.mock("axios");
const axiosGet = jest.spyOn(axios, "get");
const productUrl = "https://62160e807428a1d2a3598008.mockapi.io/bicicle";

describe("Products api", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should query proper url in fetchProducts", async () => {
    axiosGet.mockResolvedValue(productsMock);

    await ProductsService.fetchProducts();

    expect(axiosGet).toHaveBeenCalledTimes(1);
    expect(axiosGet).toHaveBeenCalledWith(productUrl);
  });
});
