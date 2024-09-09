import { fetchData } from "./callback";

describe("fetchData", () => {
    it("should return sample data", (done) => {
        function callback(data) {
            expect(data).toBe("sample data");
            done();
        }

        fetchData(callback);
    });
});
