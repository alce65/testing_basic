import { getDataByAxios } from "./fetch";
import axios from "axios";

jest.mock("axios");

describe("getDataByAxios", () => {
    it("should return data", async () => {
        const data = {
            userId: 1,
            id: 1,
            title: "sample title",
        };
        axios.get.mockResolvedValue({ data });

        // act
        const result = await getDataByAxios();
        expect(axios.get).toHaveBeenCalled();
        expect(result).toEqual(data);
    });

    it("should return error", async () => {
        const error = new Error("error");
        axios.get.mockRejectedValue(error);

        const spy = jest.spyOn(console, "error").mockImplementation(() => {});

        // act
        await getDataByAxios();
        expect(axios.get).toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
    });
});

class Foo {
    constructor() {
        this.foo = "foo";
    }

    getFoo() {
        return this.foo;
    }
}

it("testing foo", async () => {
    const foo = new Foo();

    // jest.spyOn(foo, "getFoo")

    foo.getFoo = jest.fn().mockReturnValue("hola");

    // .mockRejectedValue(new Error("error"));

    // .mockResolvedValue("hola");

    // .mockReturnValue("hola");

    // .mockImplementation(async () => {
    //     return "hola";
    // });

    expect(await foo.getFoo()).toBe("hola");
});
