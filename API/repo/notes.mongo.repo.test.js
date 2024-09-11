import { NotesMongoRepo } from "./notes.mongo.repo.js";
import { NoteModel } from "./notes.mongo.model.js";

jest.mock("./notes.mongo.model.js");

describe("NotesMongoRepo", () => {
    describe("getAll", () => {
        it("should return all notes", async () => {
            // arrange: Mock the NoteModel.find method
            // to return a resolved promise with some notes
            const notes = [
                { title: "note 1", content: "content 1" },
                { title: "note 2", content: "content 2" },
            ];
            NoteModel.find.mockReturnValue({
                exec: jest.fn().mockResolvedValue(notes),
            });
            // arrange: Create a new instance of NotesMongoRepo
            const repo = new NotesMongoRepo();
            // act: Call the getAll method
            const result = await repo.getAll();
            // assert: Check if the result is the same as the notes
            expect(result).toEqual(notes);
            expect(NoteModel.find).toHaveBeenCalledTimes(1);
        });
    });
});
