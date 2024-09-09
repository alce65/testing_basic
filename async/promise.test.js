import { fetchData, badFetchData } from "./promise";

describe("fetchData", () => {
    it("should return sample data", () => {
        fetchData().then((data) => {
            expect(data).toBe("sample data");
        });
    });

    it("should return sample data using async/await", async () => {
        const data = await fetchData();
        expect(data).toBe("sample data");
    });
});

describe("badFetchData", () => {
    it("should return error", () => {
        badFetchData().catch((error) => {
            expect(error).toEqual(new Error("Error in promise"));
            expect(error.message).toBe("Error in promise");
        });
    });

    it("should return error using async/await", () => {
        expect(badFetchData()).rejects.toStrictEqual(
            new Error("Error in promise")
        );
    });
});
