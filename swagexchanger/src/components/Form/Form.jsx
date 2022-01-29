import { React, useState, useRef, useEffect } from "react";
import axios from "axios";

export const SwagForm = () => {
  const [posts, setPosts] = useState([]);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const sizeRef = useRef();
  const countRef = useRef();
  const ownerRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const createPost = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const size = sizeRef.current.value;
    const count = countRef.current.value;
    const owner = ownerRef.current.value;
    const category = categoryRef.current.value;
    const image = imageRef.current.value;
    axios
      .post("https://schwagx.herokuapp.com/swags/", {
        name,
        description,
        size,
        count,
        owner,
        category,
        image,
      })
      .then((res) => {
        console.log(res);
        setPosts(res);
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={createPost}>
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          type="text"
          name="Name"
          placeholder="Enter Swag Name"
          ref={nameRef}
        />
        <br />
        <br />
        <label htmlFor="description-input">Description</label>
        <input
          id="description-input"
          name="Description"
          placeholder="Enter Swag Description"
          type="textarea"
          ref={descriptionRef}
        />
        <br />
        <br />
        <label htmlFor="size-input">Size</label>
        <input
          id="size-input"
          name="Size"
          placeholder="Enter Swag Size"
          type="text"
          ref={sizeRef}
        />
        <br />
        <br />
        <label htmlFor="count-input">Count</label>
        <input
          id="count-input"
          name="Size"
          placeholder="Enter Swag Count"
          type="number"
          ref={countRef}
        />
        <br />
        <br />
        <label htmlFor="owner-input">Owner</label>
        <input
          id="owner-input"
          name="Owner"
          placeholder="Enter Swag Owner"
          type="text"
          ref={ownerRef}
        />
        <br />
        <br />
        <label htmlFor="category-input">Category</label>
        <input
          id="category-input"
          name="Category"
          placeholder="Enter Swag Category"
          type="text"
          ref={categoryRef}
        />
        <br />
        <br />
        <label htmlFor="count-input">Image</label>
        <input
          id="image-input"
          name="Image"
          placeholder="Enter Swag Image"
          type="text"
          ref={imageRef}
        />
        <br />
        <br />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};
