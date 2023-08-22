import connect from "../config/connectDB";

const db = await connect();

export class CitaModel {
    static getAll() {
        return db.collection("citas").find({}).toArray();
    }

}