import { NotesController } from "./notes.controller.js";
import { NotesMongoRepo } from "../repo/notes.mongo.repo.js";

describe("NotesController", () => {
    describe("getAll", () => {
        it("should return all notes", async () => {
            // arrange: Mock the NotesMongoRepo.getAll method
            const notes = [
                { title: "note 1", content: "content 1" },
                { title: "note 2", content: "content 2" },
            ];
            NotesMongoRepo.prototype.getAll = jest
                .fn()
                .mockResolvedValue(notes);

            // arrange: Create a new NotesController instance
            const controller = new NotesController();
            // arrange: Mock the request, response, and next function
            const req = {};
            const res = {
                json: jest.fn(),
            };
            const next = jest.fn();
            // act: Call the controller.getAll method
            await controller.getAll(req, res, next);
            // assert: Verify that the NotesMongoRepo.getAll method was called
            expect(res.json).toHaveBeenCalledWith(notes);
        });
        it("should call next function when an error occurs", async () => {
            // arrange: Mock the NotesMongoRepo.getAll method to throw an error
            NotesMongoRepo.prototype.getAll = jest
                .fn()
                .mockRejectedValue(new Error("An error occurred"));

            // arrange: Create a new NotesController instance
            const controller = new NotesController();
            // arrange: Mock the request, response, and next function
            const req = {};
            const res = {
                json: jest.fn(),
            };
            const next = jest.fn();
            // act: Call the controller.getAll method
            await controller.getAll(req, res, next);
            // assert: Verify that the next function was called
            expect(next).toHaveBeenCalled();
        });
    });
});
