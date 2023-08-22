import connect from "../config/connectDB";
const db = await connect();

export class CounterModel {
    static async getNextSequenceValue(sequenceName) {
        const sequenceDocument = await db.collection("counters").findOneAndUpdate(
            { _id: sequenceName },
            { $inc: { sequence_value: 1 } },
            { returnOriginal: false }
        );
        return sequenceDocument.value.sequence_value;
    }
}