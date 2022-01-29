import { React, useState, useRef } from "react";
import axios from "axios";
import "./Form.css";

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
      <form class="form" onSubmit={createPost}>
        <div class="title">Welcome</div>
        <div class="subtitle">Swag Form</div>
        <div class="input-container ic1">
          <input id="name" class="input" type="text" placeholder=" " ref={nameRef} />
          <div class="cut"></div>
          <label class="placeholder" htmlFor="name-input">Name</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="textarea" placeholder=" " ref={descriptionRef} />
          <div class="cut"></div>
          <label htmlFor="description-input" class="placeholder" htmlFor="name-input">Swag Description</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="textarea" placeholder=" " ref={sizeRef} />
          <div class="cut"></div>
          <label htmlFor="size-input" class="placeholder">Enter Swag Size</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="number" placeholder=" " ref={countRef} />
          <div class="cut"></div>
          <label htmlFor="count-input" class="placeholder">Enter Swag Count</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="textarea" placeholder=" " ref={ownerRef} />
          <div class="cut"></div>
          <label htmlFor="owner-input" class="placeholder">Enter Swag Owner</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="textarea" placeholder=" " ref={categoryRef} />
          <div class="cut"></div>
          <label htmlFor="count-input" class="placeholder">Enter Swag Category</label>
        </div>
        <div class="input-container ic1">
          <input id="name" class="input" type="textarea" placeholder=" " ref={imageRef} />
          <div class="cut"></div>
          <label htmlFor="count-input" class="placeholder">Enter Swag Image</label>
        </div>


        <button type="submit" class="submit">Create Post</button>
      </form>
    </>
  );
};
