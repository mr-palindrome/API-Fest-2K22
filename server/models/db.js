const mongoose = require("mongoose");

//Connect to the database
mongoose.connect(
  "mongodb+srv://test:test@contacts.gcf0q.mongodb.net/APIFest?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log("DB Connection Error ", err);
    else console.log("DB Connection Succeeded");
  }
);


// Create schema - this is like a blueprint
const swagSchema = new mongoose.Schema(
  {
    owner_id: {
      type: String,
      required: "This field is required.",
    },
    category: {
      type: String,
    },
    image_url: {
      type: String,
    },
    owner_contact: {
      type: String,
    },
  },
  { versionKey: false }
);

mongoose.model("Swags", swagSchema);

//first  arg: auto converted to lowercase and plural (if singular) is the name of the collection in database
