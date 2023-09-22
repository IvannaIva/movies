import React, { forwardRef } from "react";

import Input from "@mui/material/Input";

const MyStyledInput = (props, ref) => {
  return (
    <div ref={ref}>
    <Input
      {...props} // Передаємо всі пропси, що були передані у компонент Input
      sx={{
        width: "300px",
        borderBottom: "#03D6A1",

        "& input": {
          color: "#FFFFFF",
          background: "none",
        },
        "& input focus": {
          borderBottom: "1px solid  #03D6A1",
        },
        "&::before": {
          borderBottom: "1px solid  #03D6A1",
        },
        "&::after": {
          borderBottom: "1px solid  #03D6A1",
        },
      }}
    />
    </div>
  );
};
export default forwardRef(MyStyledInput);
// export default MyStyledInput;
