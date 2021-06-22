import React from "react";
import md5 from "js-md5";

export default ({ user, width = "" }) => (
  <img
    src={
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" +
      md5(user.email)
    }
    className="rounded-circle"
    alt={user.name}
    width={width}
  />
);
