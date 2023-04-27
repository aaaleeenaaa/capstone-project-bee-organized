import dbConnect from "../../../../db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(id);
  if (request.method === "GET") {
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }
  if (request.method === "PATCH") {
    const location = await Location.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: "location is updated" });
  }
  if (request.method === "DELETE") {
    await Location.findByIdAndDelete(id);

    response
      .status(200)
      .json({ status: `Location ${id} successfully deleted.` });
  }
}
