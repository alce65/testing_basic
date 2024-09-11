import { NoteModel } from "./notes.mongo.model.js";

export class NotesMongoRepo {
    async getAll() {
        const result = await NoteModel.find().exec();
        return result;
    }

    async getById(id) {
        const result = await NoteModel.findById(id).exec();
        return result;
    }

    async create(note) {
        const result = await NoteModel.create(note);
        return result;
    }

    async update(id, note) {
        const result = await NoteModel.findByIdAndUpdate(id, note).exec();
        return result;
    }

    async delete(id) {
        const result = await NoteModel.findByIdAndDelete(id).exec();
        return result;
    }
}
