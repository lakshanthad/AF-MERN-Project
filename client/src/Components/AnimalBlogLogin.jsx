import * as React from "react";
import Button from "@mui/material/Button";

export default function AnimalBlogLogin() {
  return (
    <div className="animalLogin">
      <htmlForm action="/">
        <div className="banner"></div>

        <div className="item">
          <label htmlFor="email">
            Email Address<span>*</span>
          </label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="item">
          <label htmlFor="password">
            Password<span>*</span>
          </label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="btn-block">
          <button type="submit" href="/">
            LOG IN
          </button>
        </div>
      </htmlForm>
    </div>
  );
}
