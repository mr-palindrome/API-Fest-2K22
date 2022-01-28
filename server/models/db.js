const mongoose = require("mongoose");

//Connect to the database
mongoose.connect(
  ATLAS_URI,
  (err) => {
    if (err) console.log("DB Connection Error ", err);
    else console.log("DB Connection Succeeded");
  }
);


// Create schema - this is like a blueprint
const swagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "This field is required.",
    },
    description: {
      type: String,
    },
    size: {
      type: String,
    },
    count: {
      type: Number,
    },
    owner: {
      type: String,
      required: "This field is required.",
    },
    category: {
      type: String,
      required: "This field is required.",
    },
    image: {
      type: String,
      required: "This field is required.",
    },
  },
  { versionKey: false }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "This field is required.",
    },
    contact: {
      type: String,
    },
  },
    { versionKey: false }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "This field is required.",
    },
  },
    { versionKey: false }
);

mongoose.model("Swags", swagSchema);
mongoose.model("Users", userSchema);
mongoose.model("Categories", categorySchema);

//first  arg: auto converted to lowercase and plural (if singular) is the name of the collection in database
